push:
	git push

generate:
	ls -lha .
	du -hs *
	hugo
	du -hs *

preview:
	hugo server --bind 0.0.0.0

TS := $(date)
ifdef GH_TOKEN
PUBLIC_URL = https://$(GH_TOKEN)@github.com/Gonzih/homepage.git
else
PUBLIC_URL = git@github.com:Gonzih/homepage.git
endif
public:
	git clone -b master $(PUBLIC_URL) public

setup-git:
	git config --global user.email "$(GIT_EMAIL)"
	git config --global user.name "$(GIT_NAME)"

deploy: public
	cd public \
	&& git add  . \
	&& (git commit -a -m "Site updated at $(shell date)"  || echo "Nothing to commit") \
	&& git push \
	&& cd ..

USER=$(shell whoami)
UID=$(shell id -u $(USER))
docker-image:
	# docker build --build-arg GNZHUID=$(UID) -t website-builder .
	docker build -t website-builder .

docker-rm:
	docker kill website-builder || echo "Not found"
	docker rm website-builder || echo "Not found"

generate-using-docker: docker-image docker-rm public
	docker run --rm -t -v $(shell pwd):/var/website --name website-builder website-builder make generate

deploy-using-docker: public
	make generate-using-docker
	make deploy
	make push

preview-using-docker: docker-image docker-rm public
	docker run --rm -t -v $(shell pwd):/var/website -p 1313:1313 --name website-builder website-builder make preview

debug-using-docker: docker-image docker-rm public
	docker run --rm -ti -v $(shell pwd):/var/website -p 1313:1313 --name website-builder website-builder bash
