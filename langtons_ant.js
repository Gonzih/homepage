;(function(){
var g;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function ca(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function da(a, b) {
  null != a && this.append.apply(this, arguments);
}
da.prototype.pa = "";
da.prototype.append = function(a, b, c) {
  this.pa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.pa += arguments[d];
    }
  }
  return this;
};
da.prototype.toString = function() {
  return this.pa;
};
var ea = null;
function fa() {
  return new p(null, 5, [ga, !0, ia, !0, ja, !1, ka, !1, la, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function ma(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = ma(b), c = r(r(c) ? c.ib : c) ? c.hb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function na(a) {
  var b = a.hb;
  return r(b) ? b : "" + w(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var oa = {}, pa = {};
function ra(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = ra[m(null == a ? null : a)];
  if (!b && (b = ra._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function sa(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = sa[m(null == a ? null : a)];
  if (!c && (c = sa._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var ta = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.V : a) {
      return a.V(a, b, c);
    }
    var h;
    h = y[m(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = y[m(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), ua = {};
function A(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var va = {}, wa = function() {
  function a(a, b, c) {
    if (a ? a.J : a) {
      return a.J(a, b, c);
    }
    var h;
    h = wa[m(null == a ? null : a)];
    if (!h && (h = wa._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.I : a) {
      return a.I(a, b);
    }
    var c;
    c = wa[m(null == a ? null : a)];
    if (!c && (c = wa._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function xa(a, b, c) {
  if (a ? a.qa : a) {
    return a.qa(a, b, c);
  }
  var d;
  d = xa[m(null == a ? null : a)];
  if (!d && (d = xa._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var ya = {}, Aa = {};
function Ba(a) {
  if (a ? a.Va : a) {
    return a.Va();
  }
  var b;
  b = Ba[m(null == a ? null : a)];
  if (!b && (b = Ba._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ca(a) {
  if (a ? a.Wa : a) {
    return a.Wa();
  }
  var b;
  b = Ca[m(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Da = {};
function Ea(a, b, c) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b, c);
  }
  var d;
  d = Ea[m(null == a ? null : a)];
  if (!d && (d = Ea._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Fa(a) {
  if (a ? a.bb : a) {
    return a.state;
  }
  var b;
  b = Fa[m(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ga = {};
function Ha(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = Ha[m(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function Ia(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = Ia[m(null == a ? null : a)];
  if (!c && (c = Ia._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ja = {}, Ka = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var h;
    h = Ka[m(null == a ? null : a)];
    if (!h && (h = Ka._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = Ka[m(null == a ? null : a)];
    if (!c && (c = Ka._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function La(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = La[m(null == a ? null : a)];
  if (!c && (c = La._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Ma(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Ma[m(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Na = {};
function Oa(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = Oa[m(null == a ? null : a)];
  if (!b && (b = Oa._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Pa = {};
function C(a, b) {
  if (a ? a.Za : a) {
    return a.Za(0, b);
  }
  var c;
  c = C[m(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Qa = {};
function Ra(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = Ra[m(null == a ? null : a)];
  if (!d && (d = Ra._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Sa(a, b, c) {
  if (a ? a.Ya : a) {
    return a.Ya(0, b, c);
  }
  var d;
  d = Sa[m(null == a ? null : a)];
  if (!d && (d = Sa._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Ta(a) {
  if (a ? a.xa : a) {
    return a.xa(a);
  }
  var b;
  b = Ta[m(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Ua(a, b) {
  if (a ? a.ya : a) {
    return a.ya(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Va(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = Va[m(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Wa(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = Wa[m(null == a ? null : a)];
  if (!d && (d = Wa._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Xa(a, b, c) {
  if (a ? a.Xa : a) {
    return a.Xa(0, b, c);
  }
  var d;
  d = Xa[m(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Ya(a) {
  if (a ? a.Sa : a) {
    return a.Sa();
  }
  var b;
  b = Ya[m(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Za(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function $a(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = $a[m(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function ab(a) {
  if (a ? a.Ba : a) {
    return a.Ba(a);
  }
  var b;
  b = ab[m(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function bb(a) {
  this.jb = a;
  this.o = 0;
  this.f = 1073741824;
}
bb.prototype.Za = function(a, b) {
  return this.jb.append(b);
};
function cb(a) {
  var b = new da;
  a.u(null, new bb(b), fa());
  return "" + w(b);
}
function db(a, b) {
  if (r(E.a ? E.a(a, b) : E.call(null, a, b))) {
    return 0;
  }
  var c = r(a.F) ? !1 : !0;
  if (r(c ? b.F : c)) {
    return-1;
  }
  if (r(a.F)) {
    if (!r(b.F)) {
      return 1;
    }
    c = eb.a ? eb.a(a.F, b.F) : eb.call(null, a.F, b.F);
    return 0 === c ? eb.a ? eb.a(a.name, b.name) : eb.call(null, a.name, b.name) : c;
  }
  return fb ? eb.a ? eb.a(a.name, b.name) : eb.call(null, a.name, b.name) : null;
}
function gb(a, b, c, d, e) {
  this.F = a;
  this.name = b;
  this.ha = c;
  this.ia = d;
  this.oa = e;
  this.f = 2154168321;
  this.o = 4096;
}
g = gb.prototype;
g.u = function(a, b) {
  return C(b, this.ha);
};
g.w = function() {
  var a = this.ia;
  return null != a ? a : this.ia = a = hb.a ? hb.a(F.d ? F.d(this.F) : F.call(null, this.F), F.d ? F.d(this.name) : F.call(null, this.name)) : hb.call(null, F.d ? F.d(this.F) : F.call(null, this.F), F.d ? F.d(this.name) : F.call(null, this.name));
};
g.M = function(a, b) {
  return new gb(this.F, this.name, this.ha, this.ia, b);
};
g.K = function() {
  return this.oa;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return wa.b(c, this, null);
      case 3:
        return wa.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return wa.b(a, this, null);
};
g.a = function(a, b) {
  return wa.b(a, this, b);
};
g.t = function(a, b) {
  return b instanceof gb ? this.ha === b.ha : !1;
};
g.toString = function() {
  return this.ha;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.rb)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new ib(a, 0);
  }
  if (s(Na, a)) {
    return Oa(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.ra)) {
    return a.P(null);
  }
  a = G(a);
  return null == a ? null : A(a);
}
function J(a) {
  return null != a ? a && (a.f & 64 || a.ra) ? a.R(null) : (a = G(a)) ? B(a) : jb : jb;
}
function K(a) {
  return null == a ? null : a && (a.f & 128 || a.qb) ? a.ca(null) : G(J(a));
}
var E = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || La(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (K(e)) {
            a = d, d = H(e), e = K(e);
          } else {
            return b.a(d, H(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.n = 2;
    a.i = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = J(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.i = c.i;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.g = c.g;
  return b;
}();
pa["null"] = !0;
ra["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
La.number = function(a, b) {
  return a === b;
};
Ga["function"] = !0;
Ha["function"] = function() {
  return null;
};
oa["function"] = !0;
Ma._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
function kb(a) {
  return a + 1;
}
var lb = function() {
  function a(a, b, c, d) {
    for (var l = ra(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ra(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ra(a);
    if (0 === c) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.k = a;
  return d;
}(), mb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.k = a;
  return d;
}();
function nb(a) {
  return a ? a.f & 2 || a.ab ? !0 : a.f ? !1 : s(pa, a) : s(pa, a);
}
function ob(a) {
  return a ? a.f & 16 || a.Ta ? !0 : a.f ? !1 : s(ta, a) : s(ta, a);
}
function ib(a, b) {
  this.c = a;
  this.h = b;
  this.o = 0;
  this.f = 166199550;
}
g = ib.prototype;
g.w = function() {
  return pb.d ? pb.d(this) : pb.call(null, this);
};
g.ca = function() {
  return this.h + 1 < this.c.length ? new ib(this.c, this.h + 1) : null;
};
g.C = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return mb.k(this.c, b, this.c[this.h], this.h + 1);
};
g.O = function(a, b, c) {
  return mb.k(this.c, b, c, this.h);
};
g.D = function() {
  return this;
};
g.G = function() {
  return this.c.length - this.h;
};
g.P = function() {
  return this.c[this.h];
};
g.R = function() {
  return this.h + 1 < this.c.length ? new ib(this.c, this.h + 1) : jb;
};
g.t = function(a, b) {
  return qb.a ? qb.a(this, b) : qb.call(null, this, b);
};
g.H = function(a, b) {
  var c = b + this.h;
  return c < this.c.length ? this.c[c] : null;
};
g.V = function(a, b, c) {
  a = b + this.h;
  return a < this.c.length ? this.c[a] : c;
};
var rb = function() {
  function a(a, b) {
    return b < a.length ? new ib(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), L = function() {
  function a(a, b) {
    return rb.a(a, b);
  }
  function b(a) {
    return rb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
La._ = function(a, b) {
  return a === b;
};
var sb = function() {
  function a(a, b) {
    return null != a ? sa(a, b) : sa(jb, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = H(e), e = K(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.n = 2;
    a.i = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = J(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.i = c.i;
  b.a = a;
  b.g = c.g;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.ab)) {
      a = a.G(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(pa, a)) {
            a = ra(a);
          } else {
            if (t) {
              a: {
                a = G(a);
                for (var b = 0;;) {
                  if (nb(a)) {
                    a = b + ra(a);
                    break a;
                  }
                  a = K(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var tb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? H(a) : c;
      }
      if (ob(a)) {
        return y.b(a, b, c);
      }
      if (G(a)) {
        a = K(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (G(a)) {
          return H(a);
        }
        throw Error("Index out of bounds");
      }
      if (ob(a)) {
        return y.a(a, b);
      }
      if (G(a)) {
        var c = K(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.Ta)) {
        return a.V(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(ta, a)) {
        return y.a(a, b);
      }
      if (t) {
        if (a ? a.f & 64 || a.ra || (a.f ? 0 : s(ua, a)) : s(ua, a)) {
          return tb.b(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(na(ma(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.Ta)) {
      return a.H(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(ta, a)) {
      return y.a(a, b);
    }
    if (t) {
      if (a ? a.f & 64 || a.ra || (a.f ? 0 : s(ua, a)) : s(ua, a)) {
        return tb.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(na(ma(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Ua) ? a.J(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(va, a) ? wa.b(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Ua) ? a.I(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(va, a) ? wa.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), vb = function() {
  function a(a, b, c) {
    return null != a ? xa(a, b, c) : ub.a ? ub.a([b], [c]) : ub.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), r(l)) {
          d = H(l), e = H(K(l)), l = K(K(l));
        } else {
          return a;
        }
      }
    }
    a.n = 3;
    a.i = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var l = H(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 3;
  b.i = c.i;
  b.b = a;
  b.g = c.g;
  return b;
}();
function wb(a) {
  var b = "function" == m(a);
  return b ? b : a ? r(r(null) ? null : a.lb) ? !0 : a.vb ? !1 : s(oa, a) : s(oa, a);
}
function xb(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.eb || (a.f ? 0 : s(Ga, a)) : s(Ga, a) : b) ? Ha(a) : null;
}
var yb = {}, Ab = 0;
function F(a) {
  if (a && (a.f & 4194304 || a.ob)) {
    a = a.w(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Ab && (yb = {}, Ab = 0);
            var b = yb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              yb[a] = b;
              Ab += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Ma(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Bb(a) {
  return a ? a.f & 16384 || a.tb ? !0 : a.f ? !1 : s(Da, a) : s(Da, a);
}
function Cb(a) {
  return a ? a.o & 512 || a.mb ? !0 : !1 : !1;
}
function Db(a) {
  var b = [];
  ca(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Eb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Fb = {};
function Gb(a) {
  return null == a ? !1 : a ? a.f & 64 || a.ra ? !0 : a.f ? !1 : s(ua, a) : s(ua, a);
}
function Hb(a) {
  return r(a) ? !0 : !1;
}
function eb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ma(a) === ma(b)) {
    return a && (a.o & 2048 || a.va) ? a.wa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Ib = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = eb(P.a(a, h), P.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = O(a), h = O(b);
    return f < h ? -1 : f > h ? 1 : t ? c.k(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.k = a;
  return c;
}(), Kb = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        b = a.a ? a.a(b, H(c)) : a.call(null, b, H(c)), c = K(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    return c ? Jb.b ? Jb.b(a, H(c), K(c)) : Jb.call(null, a, H(c), K(c)) : a.r ? a.r() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Jb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.gb) ? c.O(null, a, b) : c instanceof Array ? mb.b(c, a, b) : "string" === typeof c ? mb.b(c, a, b) : s(Ja, c) ? Ka.b(c, a, b) : t ? Kb.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.gb) ? b.N(null, a) : b instanceof Array ? mb.a(b, a) : "string" === typeof b ? mb.a(b, a) : s(Ja, b) ? Ka.a(b, a) : t ? Kb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Lb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Jb.b(a, b + c, d);
    }
    b.n = 2;
    b.i = function(a) {
      var b = H(a);
      a = K(a);
      var c = H(a);
      a = J(a);
      return d(b, c, a);
    };
    b.g = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.g(a, d, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.n = 2;
  a.i = b.i;
  a.r = function() {
    return 0;
  };
  a.d = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.g = b.g;
  return a;
}();
function Mb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
var Nb = function() {
  function a(a) {
    return a * c.r();
  }
  function b() {
    return Math.random.r ? Math.random.r() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.d = a;
  return c;
}();
function Ob(a) {
  return Mb(Nb.d(a));
}
function Pb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Qb(a) {
  var b = 1;
  for (a = G(a);;) {
    if (a && 0 < b) {
      b -= 1, a = K(a);
    } else {
      return a;
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new da(b.d(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.d(H(l))), l = K(l);
        } else {
          return e.toString();
        }
      }
    }
    a.n = 1;
    a.i = function(a) {
      var b = H(a);
      a = J(a);
      return c(b, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.i = c.i;
  b.r = function() {
    return "";
  };
  b.d = a;
  b.g = c.g;
  return b;
}();
function qb(a, b) {
  return Hb((b ? b.f & 16777216 || b.sb || (b.f ? 0 : s(Pa, b)) : s(Pa, b)) ? function() {
    for (var c = G(a), d = G(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (E.a(H(c), H(d))) {
        c = K(c), d = K(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function hb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function pb(a) {
  if (G(a)) {
    var b = F(H(a));
    for (a = K(a);;) {
      if (null == a) {
        return b;
      }
      b = hb(b, F(H(a)));
      a = K(a);
    }
  } else {
    return 0;
  }
}
function Rb(a) {
  var b = 0;
  for (a = G(a);;) {
    if (a) {
      var c = H(a), b = (b + (F(Sb.d ? Sb.d(c) : Sb.call(null, c)) ^ F(Tb.d ? Tb.d(c) : Tb.call(null, c)))) % 4503599627370496;
      a = K(a);
    } else {
      return b;
    }
  }
}
function Ub(a, b, c, d, e) {
  this.l = a;
  this.ta = b;
  this.ea = c;
  this.count = d;
  this.j = e;
  this.o = 0;
  this.f = 65937646;
}
g = Ub.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.ca = function() {
  return 1 === this.count ? null : this.ea;
};
g.C = function(a, b) {
  return new Ub(this.l, b, this, this.count + 1, null);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  return this;
};
g.G = function() {
  return this.count;
};
g.P = function() {
  return this.ta;
};
g.R = function() {
  return 1 === this.count ? jb : this.ea;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new Ub(b, this.ta, this.ea, this.count, this.j);
};
g.K = function() {
  return this.l;
};
function Vb(a) {
  this.l = a;
  this.o = 0;
  this.f = 65937614;
}
g = Vb.prototype;
g.w = function() {
  return 0;
};
g.ca = function() {
  return null;
};
g.C = function(a, b) {
  return new Ub(this.l, b, null, 1, null);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  return null;
};
g.G = function() {
  return 0;
};
g.P = function() {
  return null;
};
g.R = function() {
  return jb;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new Vb(b);
};
g.K = function() {
  return this.l;
};
var jb = new Vb(null), Wb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof ib && 0 === a.h) {
      b = a.c;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.P(null)), a = a.ca(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = jb;;) {
      if (0 < a) {
        var f = a - 1, e = e.C(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.n = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Xb(a, b, c, d) {
  this.l = a;
  this.ta = b;
  this.ea = c;
  this.j = d;
  this.o = 0;
  this.f = 65929452;
}
g = Xb.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.ca = function() {
  return null == this.ea ? null : G(this.ea);
};
g.C = function(a, b) {
  return new Xb(null, b, this, this.j);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return this.ta;
};
g.R = function() {
  return null == this.ea ? jb : this.ea;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new Xb(b, this.ta, this.ea, this.j);
};
g.K = function() {
  return this.l;
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.ra)) ? new Xb(null, a, b, null) : new Xb(null, a, G(b), null);
}
function R(a, b, c, d) {
  this.F = a;
  this.name = b;
  this.ga = c;
  this.ia = d;
  this.f = 2153775105;
  this.o = 4096;
}
g = R.prototype;
g.u = function(a, b) {
  return C(b, [w(":"), w(this.ga)].join(""));
};
g.w = function() {
  null == this.ia && (this.ia = hb(F(this.F), F(this.name)) + 2654435769);
  return this.ia;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Q.a(c, this);
      case 3:
        return Q.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return Q.a(a, this);
};
g.a = function(a, b) {
  return Q.b(a, this, b);
};
g.t = function(a, b) {
  return b instanceof R ? this.ga === b.ga : !1;
};
g.toString = function() {
  return[w(":"), w(this.ga)].join("");
};
var Zb = function() {
  function a(a, b) {
    return new R(a, b, [w(r(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof R) {
      return a;
    }
    if (a instanceof gb) {
      var b;
      if (a && (a.o & 4096 || a.fb)) {
        b = a.F;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new R(b, Yb.d ? Yb.d(a) : Yb.call(null, a), a.ha, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new R(b[0], b[1], a, null) : new R(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function $b(a, b, c, d) {
  this.l = a;
  this.na = b;
  this.p = c;
  this.j = d;
  this.o = 0;
  this.f = 32374988;
}
g = $b.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.ca = function() {
  Oa(this);
  return null == this.p ? null : K(this.p);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return cb(this);
};
function ac(a) {
  null != a.na && (a.p = a.na.r ? a.na.r() : a.na.call(null), a.na = null);
  return a.p;
}
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  ac(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof $b) {
      a = ac(a);
    } else {
      return this.p = a, G(this.p);
    }
  }
};
g.P = function() {
  Oa(this);
  return null == this.p ? null : H(this.p);
};
g.R = function() {
  Oa(this);
  return null != this.p ? J(this.p) : jb;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new $b(b, this.na, this.p, this.j);
};
g.K = function() {
  return this.l;
};
function bc(a, b) {
  this.Aa = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
bc.prototype.G = function() {
  return this.end;
};
bc.prototype.add = function(a) {
  this.Aa[this.end] = a;
  return this.end += 1;
};
bc.prototype.ba = function() {
  var a = new cc(this.Aa, 0, this.end);
  this.Aa = null;
  return a;
};
function cc(a, b, c) {
  this.c = a;
  this.q = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
g = cc.prototype;
g.N = function(a, b) {
  return mb.k(this.c, b, this.c[this.q], this.q + 1);
};
g.O = function(a, b, c) {
  return mb.k(this.c, b, c, this.q);
};
g.Sa = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new cc(this.c, this.q + 1, this.end);
};
g.H = function(a, b) {
  return this.c[this.q + b];
};
g.V = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.c[this.q + b] : c;
};
g.G = function() {
  return this.end - this.q;
};
var dc = function() {
  function a(a, b, c) {
    return new cc(a, b, c);
  }
  function b(a, b) {
    return new cc(a, b, a.length);
  }
  function c(a) {
    return new cc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.b = a;
  return d;
}();
function ec(a, b, c, d) {
  this.ba = a;
  this.Z = b;
  this.l = c;
  this.j = d;
  this.f = 31850732;
  this.o = 1536;
}
g = ec.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.ca = function() {
  if (1 < ra(this.ba)) {
    return new ec(Ya(this.ba), this.Z, this.l, null);
  }
  var a = Oa(this.Z);
  return null == a ? null : a;
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return cb(this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return y.a(this.ba, 0);
};
g.R = function() {
  return 1 < ra(this.ba) ? new ec(Ya(this.ba), this.Z, this.l, null) : null == this.Z ? jb : this.Z;
};
g.Ba = function() {
  return null == this.Z ? null : this.Z;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new ec(this.ba, this.Z, b, this.j);
};
g.K = function() {
  return this.l;
};
g.Ca = function() {
  return this.ba;
};
g.Da = function() {
  return null == this.Z ? jb : this.Z;
};
function fc(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(H(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function gc(a, b) {
  if (nb(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = K(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var ic = function hc(b) {
  return null == b ? null : null == K(b) ? G(H(b)) : t ? N(H(b), hc(K(b))) : null;
}, jc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var v = null;
      4 < arguments.length && (v = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, v);
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, ic(f)))));
    }
    a.n = 4;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var q = H(a);
      a = J(a);
      return b(c, d, e, q, a);
    };
    a.g = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return N(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.g(c, f, h, k, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = 4;
  c.i = d.i;
  c.d = function(a) {
    return G(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.b = b;
  c.k = a;
  c.g = d.g;
  return c;
}();
function kc(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.r ? a.r() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = A(e), f = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(f), h = B(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(h), k = B(h);
  if (4 === b) {
    return a.k ? a.k(c, d, e, f) : a.k ? a.k(c, d, e, f) : a.call(null, c, d, e, f);
  }
  h = A(k);
  k = B(k);
  if (5 === b) {
    return a.A ? a.A(c, d, e, f, h) : a.A ? a.A(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  a = A(k);
  var l = B(k);
  if (6 === b) {
    return a.U ? a.U(c, d, e, f, h, a) : a.U ? a.U(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a);
  }
  var k = A(l), n = B(l);
  if (7 === b) {
    return a.ka ? a.ka(c, d, e, f, h, a, k) : a.ka ? a.ka(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k);
  }
  var l = A(n), q = B(n);
  if (8 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, a, k, l) : a.Pa ? a.Pa(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l);
  }
  var n = A(q), v = B(q);
  if (9 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, a, k, l, n) : a.Qa ? a.Qa(c, d, e, f, h, a, k, l, n) : a.call(null, c, d, e, f, h, a, k, l, n);
  }
  var q = A(v), z = B(v);
  if (10 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, a, k, l, n, q) : a.Ea ? a.Ea(c, d, e, f, h, a, k, l, n, q) : a.call(null, c, d, e, f, h, a, k, l, n, q);
  }
  var v = A(z), I = B(z);
  if (11 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, a, k, l, n, q, v) : a.Fa ? a.Fa(c, d, e, f, h, a, k, l, n, q, v) : a.call(null, c, d, e, f, h, a, k, l, n, q, v);
  }
  var z = A(I), D = B(I);
  if (12 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, a, k, l, n, q, v, z) : a.Ga ? a.Ga(c, d, e, f, h, a, k, l, n, q, v, z) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z);
  }
  var I = A(D), M = B(D);
  if (13 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, a, k, l, n, q, v, z, I) : a.Ha ? a.Ha(c, d, e, f, h, a, k, l, n, q, v, z, I) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I);
  }
  var D = A(M), Z = B(M);
  if (14 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, a, k, l, n, q, v, z, I, D) : a.Ia ? a.Ia(c, d, e, f, h, a, k, l, n, q, v, z, I, D) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D);
  }
  var M = A(Z), ha = B(Z);
  if (15 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M) : a.Ja ? a.Ja(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D, M);
  }
  var Z = A(ha), qa = B(ha);
  if (16 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z) : a.Ka ? a.Ka(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z);
  }
  var ha = A(qa), za = B(qa);
  if (17 === b) {
    return a.La ? a.La(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha) : a.La ? a.La(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha);
  }
  var qa = A(za), zb = B(za);
  if (18 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa) : a.Ma ? a.Ma(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa);
  }
  za = A(zb);
  zb = B(zb);
  if (19 === b) {
    return a.Na ? a.Na(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa, za) : a.Na ? a.Na(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa, za) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa, za);
  }
  var pc = A(zb);
  B(zb);
  if (20 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa, za, pc) : a.Oa ? a.Oa(c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa, za, pc) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, z, I, D, M, Z, ha, qa, za, pc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var lc = function() {
  function a(a, b, c, d, e) {
    b = jc.k(b, c, d, e);
    c = a.n;
    return a.i ? (d = gc(b, c + 1), d <= c ? kc(a, d, b) : a.i(b)) : a.apply(a, fc(b));
  }
  function b(a, b, c, d) {
    b = jc.b(b, c, d);
    c = a.n;
    return a.i ? (d = gc(b, c + 1), d <= c ? kc(a, d, b) : a.i(b)) : a.apply(a, fc(b));
  }
  function c(a, b, c) {
    b = jc.a(b, c);
    c = a.n;
    if (a.i) {
      var d = gc(b, c + 1);
      return d <= c ? kc(a, d, b) : a.i(b);
    }
    return a.apply(a, fc(b));
  }
  function d(a, b) {
    var c = a.n;
    if (a.i) {
      var d = gc(b, c + 1);
      return d <= c ? kc(a, d, b) : a.i(b);
    }
    return a.apply(a, fc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, I) {
      var D = null;
      5 < arguments.length && (D = L(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, D);
    }
    function b(a, c, d, e, f, h) {
      c = N(c, N(d, N(e, N(f, ic(h)))));
      d = a.n;
      return a.i ? (e = gc(c, d + 1), e <= d ? kc(a, e, c) : a.i(c)) : a.apply(a, fc(c));
    }
    a.n = 5;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = K(a);
      var h = H(a);
      a = J(a);
      return b(c, d, e, f, h, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, n, q, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return f.g(e, k, l, n, q, L(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 5;
  e.i = f.i;
  e.a = d;
  e.b = c;
  e.k = b;
  e.A = a;
  e.g = f.g;
  return e;
}();
function mc(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    if (r(a.d ? a.d(H(b)) : a.call(null, H(b)))) {
      var c = a, d = K(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function nc(a) {
  return a;
}
var oc = function() {
  function a(a, b, c, e) {
    return new $b(null, function() {
      var n = G(b), q = G(c), v = G(e);
      return n && q && v ? N(a.b ? a.b(H(n), H(q), H(v)) : a.call(null, H(n), H(q), H(v)), d.k(a, J(n), J(q), J(v))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new $b(null, function() {
      var e = G(b), n = G(c);
      return e && n ? N(a.a ? a.a(H(e), H(n)) : a.call(null, H(e), H(n)), d.b(a, J(e), J(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new $b(null, function() {
      var c = G(b);
      if (c) {
        if (Cb(c)) {
          for (var e = Za(c), n = O(e), q = new bc(Array(n), 0), v = 0;;) {
            if (v < n) {
              var z = a.d ? a.d(y.a(e, v)) : a.call(null, y.a(e, v));
              q.add(z);
              v += 1;
            } else {
              break;
            }
          }
          e = q.ba();
          c = d.a(a, $a(c));
          return 0 === ra(e) ? c : new ec(e, c, null, null);
        }
        return N(a.d ? a.d(H(c)) : a.call(null, H(c)), d.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var z = null;
      4 < arguments.length && (z = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, z);
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return lc.a(a, b);
      }, function I(a) {
        return new $b(null, function() {
          var b = d.a(G, a);
          return mc(nc, b) ? N(d.a(H, b), I(d.a(J, b))) : null;
        }, null, null);
      }(sb.g(h, f, L([e, c], 0))));
    }
    a.n = 4;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 4;
  d.i = e.i;
  d.a = c;
  d.b = b;
  d.k = a;
  d.g = e.g;
  return d;
}(), rc = function qc(b, c) {
  return new $b(null, function() {
    if (0 < b) {
      var d = G(c);
      return d ? N(H(d), qc(b - 1, J(d))) : null;
    }
    return null;
  }, null, null);
}, sc = function() {
  function a(a, b) {
    return rc(a, c.d(b));
  }
  function b(a) {
    return new $b(null, function() {
      return N(a, c.d(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), tc = function() {
  function a(a, b, c) {
    var h = Fb;
    for (b = G(b);;) {
      if (b) {
        var k = a;
        if (k ? k.f & 256 || k.Ua || (k.f ? 0 : s(va, k)) : s(va, k)) {
          a = Q.b(a, H(b), h);
          if (h === a) {
            return c;
          }
          b = K(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.b(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), uc = function() {
  function a(a, b, c, d, f, v) {
    var z = P.b(b, 0, null);
    return(b = Qb(b)) ? vb.b(a, z, e.U(Q.a(a, z), b, c, d, f, v)) : vb.b(a, z, c.k ? c.k(Q.a(a, z), d, f, v) : c.call(null, Q.a(a, z), d, f, v));
  }
  function b(a, b, c, d, f) {
    var v = P.b(b, 0, null);
    return(b = Qb(b)) ? vb.b(a, v, e.A(Q.a(a, v), b, c, d, f)) : vb.b(a, v, c.b ? c.b(Q.a(a, v), d, f) : c.call(null, Q.a(a, v), d, f));
  }
  function c(a, b, c, d) {
    var f = P.b(b, 0, null);
    return(b = Qb(b)) ? vb.b(a, f, e.k(Q.a(a, f), b, c, d)) : vb.b(a, f, c.a ? c.a(Q.a(a, f), d) : c.call(null, Q.a(a, f), d));
  }
  function d(a, b, c) {
    var d = P.b(b, 0, null);
    return(b = Qb(b)) ? vb.b(a, d, e.b(Q.a(a, d), b, c)) : vb.b(a, d, c.d ? c.d(Q.a(a, d)) : c.call(null, Q.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, I, D) {
      var M = null;
      6 < arguments.length && (M = L(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, h, I, M);
    }
    function b(a, c, d, f, h, k, D) {
      var M = P.b(c, 0, null);
      return(c = Qb(c)) ? vb.b(a, M, lc.g(e, Q.a(a, M), c, d, f, L([h, k, D], 0))) : vb.b(a, M, lc.g(d, Q.a(a, M), f, h, k, L([D], 0)));
    }
    a.n = 6;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = K(a);
      var h = H(a);
      a = K(a);
      var D = H(a);
      a = J(a);
      return b(c, d, e, f, h, D, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, n, q, v, z) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, n);
      case 5:
        return b.call(this, e, k, l, n, q);
      case 6:
        return a.call(this, e, k, l, n, q, v);
      default:
        return f.g(e, k, l, n, q, v, L(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 6;
  e.i = f.i;
  e.b = d;
  e.k = c;
  e.A = b;
  e.U = a;
  e.g = f.g;
  return e;
}();
function vc(a, b) {
  this.m = a;
  this.c = b;
}
function wc(a) {
  return new vc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function xc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function yc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = wc(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Ac = function zc(b, c, d, e) {
  var f = new vc(d.m, x(d.c)), h = b.e - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? zc(b, c - 5, d, e) : yc(null, c - 5, e), f.c[h] = b);
  return f;
};
function Bc(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Cc(a, b) {
  if (0 <= b && b < a.e) {
    if (b >= xc(a)) {
      return a.B;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.c[b >>> d & 31], d = e
      } else {
        return c.c;
      }
    }
  } else {
    return Bc(b, a.e);
  }
}
var Ec = function Dc(b, c, d, e, f) {
  var h = new vc(d.m, x(d.c));
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Dc(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
};
function S(a, b, c, d, e, f) {
  this.l = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.B = e;
  this.j = f;
  this.o = 4;
  this.f = 167668511;
}
g = S.prototype;
g.xa = function() {
  return new Fc(this.e, this.shift, Gc.d ? Gc.d(this.root) : Gc.call(null, this.root), Hc.d ? Hc.d(this.B) : Hc.call(null, this.B));
};
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.I = function(a, b) {
  return y.b(this, b, null);
};
g.J = function(a, b, c) {
  return y.b(this, b, c);
};
g.qa = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return xc(this) <= b ? (a = x(this.B), a[b & 31] = c, new S(this.l, this.e, this.shift, this.root, a, null)) : new S(this.l, this.e, this.shift, Ec(this, this.shift, this.root, b, c), this.B, null);
  }
  if (b === this.e) {
    return sa(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.e), w("]")].join(""));
  }
  return null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.H(null, a);
};
g.a = function(a, b) {
  return this.V(null, a, b);
};
g.C = function(a, b) {
  if (32 > this.e - xc(this)) {
    for (var c = this.B.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.B[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new S(this.l, this.e + 1, this.shift, this.root, d, null);
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = wc(null), d.c[0] = this.root, e = yc(null, this.shift, new vc(null, this.B)), d.c[1] = e) : d = Ac(this, this.shift, this.root, new vc(null, this.B));
  return new S(this.l, this.e + 1, c, d, [b], null);
};
g.Va = function() {
  return y.a(this, 0);
};
g.Wa = function() {
  return y.a(this, 1);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return lb.a(this, b);
};
g.O = function(a, b, c) {
  return lb.b(this, b, c);
};
g.D = function() {
  return 0 === this.e ? null : 32 > this.e ? L.d(this.B) : t ? T.b ? T.b(this, 0, 0) : T.call(null, this, 0, 0) : null;
};
g.G = function() {
  return this.e;
};
g.Ra = function(a, b, c) {
  return xa(this, b, c);
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new S(b, this.e, this.shift, this.root, this.B, this.j);
};
g.K = function() {
  return this.l;
};
g.H = function(a, b) {
  return Cc(this, b)[b & 31];
};
g.V = function(a, b, c) {
  return 0 <= b && b < this.e ? y.a(this, b) : c;
};
var Ic = new vc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Jc = new S(null, 0, 5, Ic, [], 0);
function Kc(a) {
  return Va(Jb.b(Ua, Ta(Jc), a));
}
function Lc(a, b, c, d, e, f) {
  this.v = a;
  this.T = b;
  this.h = c;
  this.q = d;
  this.l = e;
  this.j = f;
  this.f = 32243948;
  this.o = 1536;
}
g = Lc.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.ca = function() {
  if (this.q + 1 < this.T.length) {
    var a = T.k ? T.k(this.v, this.T, this.h, this.q + 1) : T.call(null, this.v, this.T, this.h, this.q + 1);
    return null == a ? null : a;
  }
  return ab(this);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return lb.a(Mc.b ? Mc.b(this.v, this.h + this.q, O(this.v)) : Mc.call(null, this.v, this.h + this.q, O(this.v)), b);
};
g.O = function(a, b, c) {
  return lb.b(Mc.b ? Mc.b(this.v, this.h + this.q, O(this.v)) : Mc.call(null, this.v, this.h + this.q, O(this.v)), b, c);
};
g.D = function() {
  return this;
};
g.P = function() {
  return this.T[this.q];
};
g.R = function() {
  if (this.q + 1 < this.T.length) {
    var a = T.k ? T.k(this.v, this.T, this.h, this.q + 1) : T.call(null, this.v, this.T, this.h, this.q + 1);
    return null == a ? jb : a;
  }
  return $a(this);
};
g.Ba = function() {
  var a = this.T.length, a = this.h + a < ra(this.v) ? T.b ? T.b(this.v, this.h + a, 0) : T.call(null, this.v, this.h + a, 0) : null;
  return null == a ? null : a;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return T.A ? T.A(this.v, this.T, this.h, this.q, b) : T.call(null, this.v, this.T, this.h, this.q, b);
};
g.Ca = function() {
  return dc.a(this.T, this.q);
};
g.Da = function() {
  var a = this.T.length, a = this.h + a < ra(this.v) ? T.b ? T.b(this.v, this.h + a, 0) : T.call(null, this.v, this.h + a, 0) : null;
  return null == a ? jb : a;
};
var T = function() {
  function a(a, b, c, d, l) {
    return new Lc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Lc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Lc(a, Cc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.k = b;
  d.A = a;
  return d;
}();
function Nc(a, b, c, d, e) {
  this.l = a;
  this.$ = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.o = 0;
  this.f = 32400159;
}
g = Nc.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.I = function(a, b) {
  return y.b(this, b, null);
};
g.J = function(a, b, c) {
  return y.b(this, b, c);
};
g.qa = function(a, b, c) {
  var d = this, e = d.start + b;
  return Oc.A ? Oc.A(d.l, vb.b(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Oc.call(null, d.l, vb.b(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.H(null, a);
};
g.a = function(a, b) {
  return this.V(null, a, b);
};
g.C = function(a, b) {
  return Oc.A ? Oc.A(this.l, Ea(this.$, this.end, b), this.start, this.end + 1, null) : Oc.call(null, this.l, Ea(this.$, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return lb.a(this, b);
};
g.O = function(a, b, c) {
  return lb.b(this, b, c);
};
g.D = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : N(y.a(a.$, d), new $b(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
g.G = function() {
  return this.end - this.start;
};
g.Ra = function(a, b, c) {
  return xa(this, b, c);
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return Oc.A ? Oc.A(b, this.$, this.start, this.end, this.j) : Oc.call(null, b, this.$, this.start, this.end, this.j);
};
g.K = function() {
  return this.l;
};
g.H = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Bc(b, this.end - this.start) : y.a(this.$, this.start + b);
};
g.V = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.b(this.$, this.start + b, c);
};
function Oc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Nc) {
      c = b.start + c, d = b.start + d, b = b.$;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Nc(a, b, c, d, e);
    }
  }
}
var Mc = function() {
  function a(a, b, c) {
    return Oc(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, O(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Gc(a) {
  return new vc({}, x(a.c));
}
function Hc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Eb(a, 0, b, 0, a.length);
  return b;
}
var Qc = function Pc(b, c, d, e) {
  d = b.root.m === d.m ? d : new vc(b.root.m, x(d.c));
  var f = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? Pc(b, c - 5, h, e) : yc(b.root.m, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Fc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.B = d;
  this.f = 275;
  this.o = 88;
}
g = Fc.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.J(null, a, b);
};
g.I = function(a, b) {
  return y.b(this, b, null);
};
g.J = function(a, b, c) {
  return y.b(this, b, c);
};
g.H = function(a, b) {
  if (this.root.m) {
    return Cc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.V = function(a, b, c) {
  return 0 <= b && b < this.e ? y.a(this, b) : c;
};
g.G = function() {
  if (this.root.m) {
    return this.e;
  }
  throw Error("count after persistent!");
};
g.Xa = function(a, b, c) {
  var d = this;
  if (d.root.m) {
    if (0 <= b && b < d.e) {
      return xc(this) <= b ? d.B[b & 31] = c : (a = function f(a, k) {
        var l = d.root.m === k.m ? k : new vc(d.root.m, x(k.c));
        if (0 === a) {
          l.c[b & 31] = c;
        } else {
          var n = b >>> a & 31, q = f(a - 5, l.c[n]);
          l.c[n] = q;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return Ua(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.e)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.sa = function(a, b, c) {
  return Xa(this, b, c);
};
g.ya = function(a, b) {
  if (this.root.m) {
    if (32 > this.e - xc(this)) {
      this.B[this.e & 31] = b;
    } else {
      var c = new vc(this.root.m, this.B), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.B = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = yc(this.root.m, this.shift, c);
        this.root = new vc(this.root.m, d);
        this.shift = e;
      } else {
        this.root = Qc(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.za = function() {
  if (this.root.m) {
    this.root.m = null;
    var a = this.e - xc(this), b = Array(a);
    Eb(this.B, 0, b, 0, a);
    return new S(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Rc() {
  this.o = 0;
  this.f = 2097152;
}
Rc.prototype.t = function() {
  return!1;
};
var Sc = new Rc;
function Tc(a, b) {
  return Hb((null == b ? 0 : b ? b.f & 1024 || b.pb || (b.f ? 0 : s(ya, b)) : s(ya, b)) ? O(a) === O(b) ? mc(nc, oc.a(function(a) {
    return E.a(Q.b(b, H(a), Sc), H(K(a)));
  }, a)) : null : null);
}
function Uc(a, b) {
  var c = a.c;
  if (b instanceof R) {
    a: {
      for (var d = c.length, e = b.ga, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof R && e === h.ga) {
          c = f;
          break a;
        }
        if (t) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof gb) {
        a: {
          d = c.length;
          e = b.ha;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof gb && e === h.ha) {
              c = f;
              break a;
            }
            if (t) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (E.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Vc(a, b, c) {
  this.c = a;
  this.h = b;
  this.oa = c;
  this.o = 0;
  this.f = 32374990;
}
g = Vc.prototype;
g.w = function() {
  return pb(this);
};
g.ca = function() {
  return this.h < this.c.length - 2 ? new Vc(this.c, this.h + 2, this.oa) : null;
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  return this;
};
g.G = function() {
  return(this.c.length - this.h) / 2;
};
g.P = function() {
  return new S(null, 2, 5, Ic, [this.c[this.h], this.c[this.h + 1]], null);
};
g.R = function() {
  return this.h < this.c.length - 2 ? new Vc(this.c, this.h + 2, this.oa) : jb;
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new Vc(this.c, this.h, b);
};
g.K = function() {
  return this.oa;
};
function p(a, b, c, d) {
  this.l = a;
  this.e = b;
  this.c = c;
  this.j = d;
  this.o = 4;
  this.f = 16123663;
}
g = p.prototype;
g.xa = function() {
  return new Wc({}, this.c.length, x(this.c));
};
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Rb(this);
};
g.I = function(a, b) {
  return wa.b(this, b, null);
};
g.J = function(a, b, c) {
  a = Uc(this, b);
  return-1 === a ? c : this.c[a + 1];
};
g.qa = function(a, b, c) {
  a = Uc(this, b);
  if (-1 === a) {
    if (this.e < Xc) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new p(this.l, this.e + 1, e, null);
    }
    a = Ia;
    d = xa;
    e = Yc;
    null != e ? e && (e.o & 4 || e.nb) ? (e = Jb.b(Ua, Ta(e), this), e = Va(e)) : e = Jb.b(sa, e, this) : e = Jb.b(sb, jb, this);
    return a(d(e, b, c), this.l);
  }
  return c === this.c[a + 1] ? this : t ? (b = x(this.c), b[a + 1] = c, new p(this.l, this.e, b, null)) : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.J(null, a, b);
};
g.C = function(a, b) {
  return Bb(b) ? xa(this, y.a(b, 0), y.a(b, 1)) : Jb.b(sa, this, b);
};
g.toString = function() {
  return cb(this);
};
g.D = function() {
  return 0 <= this.c.length - 2 ? new Vc(this.c, 0, null) : null;
};
g.G = function() {
  return this.e;
};
g.t = function(a, b) {
  return Tc(this, b);
};
g.M = function(a, b) {
  return new p(b, this.e, this.c, this.j);
};
g.K = function() {
  return this.l;
};
var Xc = 8;
function Wc(a, b, c) {
  this.la = a;
  this.da = b;
  this.c = c;
  this.o = 56;
  this.f = 258;
}
g = Wc.prototype;
g.sa = function(a, b, c) {
  if (r(this.la)) {
    a = Uc(this, b);
    if (-1 === a) {
      if (this.da + 2 <= 2 * Xc) {
        return this.da += 2, this.c.push(b), this.c.push(c), this;
      }
      a = Zc.a ? Zc.a(this.da, this.c) : Zc.call(null, this.da, this.c);
      return Wa(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.ya = function(a, b) {
  if (r(this.la)) {
    if (b ? b.f & 2048 || b.cb || (b.f ? 0 : s(Aa, b)) : s(Aa, b)) {
      return Wa(this, Sb.d ? Sb.d(b) : Sb.call(null, b), Tb.d ? Tb.d(b) : Tb.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = H(c);
      if (r(e)) {
        c = K(c), d = Wa(d, Sb.d ? Sb.d(e) : Sb.call(null, e), Tb.d ? Tb.d(e) : Tb.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.za = function() {
  if (r(this.la)) {
    return this.la = !1, new p(null, Mb((this.da - this.da % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.I = function(a, b) {
  return wa.b(this, b, null);
};
g.J = function(a, b, c) {
  if (r(this.la)) {
    return a = Uc(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.G = function() {
  if (r(this.la)) {
    return Mb((this.da - this.da % 2) / 2);
  }
  throw Error("count after persistent!");
};
function Zc(a, b) {
  for (var c = Ta(Yc), d = 0;;) {
    if (d < a) {
      c = Wa(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function $c() {
  this.aa = !1;
}
function ad(a, b) {
  return a === b ? !0 : a === b || a instanceof R && b instanceof R && a.ga === b.ga ? !0 : t ? E.a(a, b) : null;
}
var bd = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.A = a;
  return c;
}(), cd = function() {
  function a(a, b, c, h, k, l) {
    a = a.ma(b);
    a.c[c] = h;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.ma(b);
    a.c[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.U = a;
  return c;
}();
function dd(a, b, c) {
  this.m = a;
  this.s = b;
  this.c = c;
}
g = dd.prototype;
g.X = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Pb(this.s & h - 1);
  if (0 === (this.s & h)) {
    var l = Pb(this.s);
    if (2 * l < this.c.length) {
      a = this.ma(a);
      b = a.c;
      f.aa = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.s |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ed.X(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.s >>> d & 1) && (k[d] = null != this.c[e] ? ed.X(a, b + 5, F(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new fd(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Eb(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Eb(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.aa = !0, a = this.ma(a), a.c = b, a.s |= h, a) : null;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.X(a, b + 5, c, d, e, f), l === h ? this : cd.k(this, a, 2 * k + 1, l)) : ad(d, l) ? e === h ? this : cd.k(this, a, 2 * k + 1, e) : t ? (f.aa = !0, cd.U(this, a, 2 * k, null, 2 * k + 1, gd.ka ? gd.ka(a, b + 5, l, h, c, d, e) : gd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.ua = function() {
  return hd.d ? hd.d(this.c) : hd.call(null, this.c);
};
g.ma = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Pb(this.s), c = Array(0 > b ? 4 : 2 * (b + 1));
  Eb(this.c, 0, c, 0, 2 * b);
  return new dd(a, this.s, c);
};
g.W = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Pb(this.s & f - 1);
  if (0 === (this.s & f)) {
    var k = Pb(this.s);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ed.W(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.s >>> c & 1) && (h[c] = null != this.c[d] ? ed.W(a + 5, F(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new fd(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Eb(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Eb(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.aa = !0;
    return new dd(null, this.s | f, a);
  }
  k = this.c[2 * h];
  f = this.c[2 * h + 1];
  return null == k ? (k = f.W(a + 5, b, c, d, e), k === f ? this : new dd(null, this.s, bd.b(this.c, 2 * h + 1, k))) : ad(c, k) ? d === f ? this : new dd(null, this.s, bd.b(this.c, 2 * h + 1, d)) : t ? (e.aa = !0, new dd(null, this.s, bd.A(this.c, 2 * h, null, 2 * h + 1, gd.U ? gd.U(a + 5, k, f, b, c, d) : gd.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.s & e)) {
    return d;
  }
  var f = Pb(this.s & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.ja(a + 5, b, c, d) : ad(c, e) ? f : t ? d : null;
};
var ed = new dd(null, 0, []);
function fd(a, b, c) {
  this.m = a;
  this.e = b;
  this.c = c;
}
g = fd.prototype;
g.X = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = cd.k(this, a, h, ed.X(a, b + 5, c, d, e, f)), a.e += 1, a;
  }
  b = k.X(a, b + 5, c, d, e, f);
  return b === k ? this : cd.k(this, a, h, b);
};
g.ua = function() {
  return id.d ? id.d(this.c) : id.call(null, this.c);
};
g.ma = function(a) {
  return a === this.m ? this : new fd(a, this.e, x(this.c));
};
g.W = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new fd(null, this.e + 1, bd.b(this.c, f, ed.W(a + 5, b, c, d, e)));
  }
  a = h.W(a + 5, b, c, d, e);
  return a === h ? this : new fd(null, this.e, bd.b(this.c, f, a));
};
g.ja = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ja(a + 5, b, c, d) : d;
};
function jd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ad(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function kd(a, b, c, d) {
  this.m = a;
  this.fa = b;
  this.e = c;
  this.c = d;
}
g = kd.prototype;
g.X = function(a, b, c, d, e, f) {
  if (c === this.fa) {
    b = jd(this.c, this.e, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.e) {
        return a = cd.U(this, a, 2 * this.e, d, 2 * this.e + 1, e), f.aa = !0, a.e += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Eb(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.aa = !0;
      f = this.e + 1;
      a === this.m ? (this.c = b, this.e = f, a = this) : a = new kd(this.m, this.fa, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : cd.k(this, a, b + 1, e);
  }
  return(new dd(a, 1 << (this.fa >>> b & 31), [null, this, null, null])).X(a, b, c, d, e, f);
};
g.ua = function() {
  return hd.d ? hd.d(this.c) : hd.call(null, this.c);
};
g.ma = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  Eb(this.c, 0, b, 0, 2 * this.e);
  return new kd(a, this.fa, this.e, b);
};
g.W = function(a, b, c, d, e) {
  return b === this.fa ? (a = jd(this.c, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), Eb(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.aa = !0, new kd(null, this.fa, this.e + 1, b)) : E.a(this.c[a], d) ? this : new kd(null, this.fa, this.e, bd.b(this.c, a + 1, d))) : (new dd(null, 1 << (this.fa >>> a & 31), [null, this])).W(a, b, c, d, e);
};
g.ja = function(a, b, c, d) {
  a = jd(this.c, this.e, c);
  return 0 > a ? d : ad(c, this.c[a]) ? this.c[a + 1] : t ? d : null;
};
var gd = function() {
  function a(a, b, c, h, k, l, n) {
    var q = F(c);
    if (q === k) {
      return new kd(null, q, 2, [c, h, l, n]);
    }
    var v = new $c;
    return ed.X(a, b, q, c, h, v).X(a, b, k, l, n, v);
  }
  function b(a, b, c, h, k, l) {
    var n = F(b);
    if (n === h) {
      return new kd(null, n, 2, [b, c, k, l]);
    }
    var q = new $c;
    return ed.W(a, n, b, c, q).W(a, h, k, l, q);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.U = b;
  c.ka = a;
  return c;
}();
function ld(a, b, c, d, e) {
  this.l = a;
  this.Y = b;
  this.h = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860;
}
g = ld.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return null == this.p ? new S(null, 2, 5, Ic, [this.Y[this.h], this.Y[this.h + 1]], null) : H(this.p);
};
g.R = function() {
  return null == this.p ? hd.b ? hd.b(this.Y, this.h + 2, null) : hd.call(null, this.Y, this.h + 2, null) : hd.b ? hd.b(this.Y, this.h, K(this.p)) : hd.call(null, this.Y, this.h, K(this.p));
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new ld(b, this.Y, this.h, this.p, this.j);
};
g.K = function() {
  return this.l;
};
var hd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new ld(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.ua(), r(h))) {
            return new ld(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new ld(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.b = a;
  return c;
}();
function md(a, b, c, d, e) {
  this.l = a;
  this.Y = b;
  this.h = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860;
}
g = md.prototype;
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = pb(this);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return cb(this);
};
g.N = function(a, b) {
  return Kb.a(b, this);
};
g.O = function(a, b, c) {
  return Kb.b(b, c, this);
};
g.D = function() {
  return this;
};
g.P = function() {
  return H(this.p);
};
g.R = function() {
  return id.k ? id.k(null, this.Y, this.h, K(this.p)) : id.call(null, null, this.Y, this.h, K(this.p));
};
g.t = function(a, b) {
  return qb(this, b);
};
g.M = function(a, b) {
  return new md(b, this.Y, this.h, this.p, this.j);
};
g.K = function() {
  return this.l;
};
var id = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.ua(), r(k))) {
            return new md(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new md(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.k(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.k = a;
  return c;
}();
function nd(a, b, c, d, e, f) {
  this.l = a;
  this.e = b;
  this.root = c;
  this.Q = d;
  this.S = e;
  this.j = f;
  this.o = 4;
  this.f = 16123663;
}
g = nd.prototype;
g.xa = function() {
  return new od({}, this.root, this.e, this.Q, this.S);
};
g.w = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Rb(this);
};
g.I = function(a, b) {
  return wa.b(this, b, null);
};
g.J = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : t ? this.root.ja(0, F(b), b, c) : null;
};
g.qa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.S ? this : new nd(this.l, this.Q ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new $c;
  b = (null == this.root ? ed : this.root).W(0, F(b), b, c, a);
  return b === this.root ? this : new nd(this.l, a.aa ? this.e + 1 : this.e, b, this.Q, this.S, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.d = function(a) {
  return this.I(null, a);
};
g.a = function(a, b) {
  return this.J(null, a, b);
};
g.C = function(a, b) {
  return Bb(b) ? xa(this, y.a(b, 0), y.a(b, 1)) : Jb.b(sa, this, b);
};
g.toString = function() {
  return cb(this);
};
g.D = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.ua() : null;
    return this.Q ? N(new S(null, 2, 5, Ic, [null, this.S], null), a) : a;
  }
  return null;
};
g.G = function() {
  return this.e;
};
g.t = function(a, b) {
  return Tc(this, b);
};
g.M = function(a, b) {
  return new nd(b, this.e, this.root, this.Q, this.S, this.j);
};
g.K = function() {
  return this.l;
};
var Yc = new nd(null, 0, null, !1, null, 0);
function ub(a, b) {
  for (var c = a.length, d = 0, e = Ta(Yc);;) {
    if (d < c) {
      var f = d + 1, e = e.sa(null, a[d], b[d]), d = f
    } else {
      return Va(e);
    }
  }
}
function od(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.S = e;
  this.o = 56;
  this.f = 258;
}
g = od.prototype;
g.sa = function(a, b, c) {
  return pd(this, b, c);
};
g.ya = function(a, b) {
  var c;
  a: {
    if (this.m) {
      if (b ? b.f & 2048 || b.cb || (b.f ? 0 : s(Aa, b)) : s(Aa, b)) {
        c = pd(this, Sb.d ? Sb.d(b) : Sb.call(null, b), Tb.d ? Tb.d(b) : Tb.call(null, b));
        break a;
      }
      c = G(b);
      for (var d = this;;) {
        var e = H(c);
        if (r(e)) {
          c = K(c), d = pd(d, Sb.d ? Sb.d(e) : Sb.call(null, e), Tb.d ? Tb.d(e) : Tb.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.za = function() {
  var a;
  if (this.m) {
    this.m = null, a = new nd(null, this.count, this.root, this.Q, this.S, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.I = function(a, b) {
  return null == b ? this.Q ? this.S : null : null == this.root ? null : this.root.ja(0, F(b), b);
};
g.J = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : this.root.ja(0, F(b), b, c);
};
g.G = function() {
  if (this.m) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function pd(a, b, c) {
  if (a.m) {
    if (null == b) {
      a.S !== c && (a.S = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new $c;
      b = (null == a.root ? ed : a.root).X(a.m, 0, F(b), b, c, d);
      b !== a.root && (a.root = b);
      d.aa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var qd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = G(a), e = Ta(Yc);;) {
      if (b) {
        a = K(K(b));
        var f = H(b), b = H(K(b)), e = Wa(e, f, b), b = a;
      } else {
        return Va(e);
      }
    }
  }
  a.n = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Sb(a) {
  return Ba(a);
}
function Tb(a) {
  return Ca(a);
}
function Yb(a) {
  if (a && (a.o & 4096 || a.fb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function rd(a, b, c, d, e, f, h) {
  var k = ea;
  try {
    ea = null == ea ? null : ea - 1;
    if (null != ea && 0 > ea) {
      return C(a, "#");
    }
    C(a, c);
    G(h) && (b.b ? b.b(H(h), a, f) : b.call(null, H(h), a, f));
    for (var l = K(h), n = la.d(f);l && (null == n || 0 !== n);) {
      C(a, d);
      b.b ? b.b(H(l), a, f) : b.call(null, H(l), a, f);
      var q = K(l);
      c = n - 1;
      l = q;
      n = c;
    }
    r(la.d(f)) && (C(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return C(a, e);
  } finally {
    ea = k;
  }
}
var sd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.H(null, k);
        C(a, l);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, Cb(f) ? (e = Za(f), h = $a(f), f = e, l = O(e), e = h, h = l) : (l = H(f), C(a, l), e = K(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.n = 1;
  a.i = function(a) {
    var d = H(a);
    a = J(a);
    return b(d, a);
  };
  a.g = b;
  return a;
}(), td = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function ud(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return td[a];
  })), w('"')].join("");
}
var xd = function vd(b, c, d) {
  if (null == b) {
    return C(c, "nil");
  }
  if (void 0 === b) {
    return C(c, "#\x3cundefined\x3e");
  }
  if (t) {
    r(function() {
      var c = Q.a(d, ja);
      return r(c) ? (c = b ? b.f & 131072 || b.eb ? !0 : b.f ? !1 : s(Ga, b) : s(Ga, b)) ? xb(b) : c : c;
    }()) && (C(c, "^"), vd(xb(b), c, d), C(c, " "));
    if (null == b) {
      return C(c, "nil");
    }
    if (b.ib) {
      return b.ub(c);
    }
    if (b && (b.f & 2147483648 || b.L)) {
      return b.u(null, c, d);
    }
    if (ma(b) === Boolean || "number" === typeof b) {
      return C(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return C(c, "#js "), wd.k ? wd.k(oc.a(function(c) {
        return new S(null, 2, 5, Ic, [Zb.d(c), b[c]], null);
      }, Db(b)), vd, c, d) : wd.call(null, oc.a(function(c) {
        return new S(null, 2, 5, Ic, [Zb.d(c), b[c]], null);
      }, Db(b)), vd, c, d);
    }
    if (b instanceof Array) {
      return rd(c, vd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return r(ia.d(d)) ? C(c, ud(b)) : C(c, b);
    }
    if (wb(b)) {
      return sd.g(c, L(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (O(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return sd.g(c, L(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? sd.g(c, L(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.L || (b.f ? 0 : s(Qa, b)) : s(Qa, b)) ? Ra(b, c, d) : t ? sd.g(c, L(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, yd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    (b = null == a) || (b = G(a), b = r(b) ? !1 : !0);
    if (b) {
      b = "";
    } else {
      b = w;
      var e = fa(), f = new da;
      a: {
        var h = new bb(f);
        xd(H(a), h, e);
        a = G(K(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.H(null, n);
            C(h, " ");
            xd(q, h, e);
            n += 1;
          } else {
            if (a = G(a)) {
              k = a, Cb(k) ? (a = Za(k), l = $a(k), k = a, q = O(a), a = l, l = q) : (q = H(k), C(h, " "), xd(q, h, e), a = K(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.n = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function wd(a, b, c, d) {
  return rd(c, function(a, c, d) {
    b.b ? b.b(Ba(a), c, d) : b.call(null, Ba(a), c, d);
    C(c, " ");
    return b.b ? b.b(Ca(a), c, d) : b.call(null, Ca(a), c, d);
  }, "{", ", ", "}", d, G(a));
}
ib.prototype.L = !0;
ib.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
Nc.prototype.L = !0;
Nc.prototype.u = function(a, b, c) {
  return rd(b, xd, "[", " ", "]", c, this);
};
ec.prototype.L = !0;
ec.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
p.prototype.L = !0;
p.prototype.u = function(a, b, c) {
  return wd(this, xd, b, c);
};
$b.prototype.L = !0;
$b.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
ld.prototype.L = !0;
ld.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
Lc.prototype.L = !0;
Lc.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
nd.prototype.L = !0;
nd.prototype.u = function(a, b, c) {
  return wd(this, xd, b, c);
};
S.prototype.L = !0;
S.prototype.u = function(a, b, c) {
  return rd(b, xd, "[", " ", "]", c, this);
};
Ub.prototype.L = !0;
Ub.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
Vc.prototype.L = !0;
Vc.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
Vb.prototype.L = !0;
Vb.prototype.u = function(a, b) {
  return C(b, "()");
};
Xb.prototype.L = !0;
Xb.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
md.prototype.L = !0;
md.prototype.u = function(a, b, c) {
  return rd(b, xd, "(", " ", ")", c, this);
};
S.prototype.va = !0;
S.prototype.wa = function(a, b) {
  return Ib.a(this, b);
};
Nc.prototype.va = !0;
Nc.prototype.wa = function(a, b) {
  return Ib.a(this, b);
};
R.prototype.va = !0;
R.prototype.wa = function(a, b) {
  return db(this, b);
};
gb.prototype.va = !0;
gb.prototype.wa = function(a, b) {
  return db(this, b);
};
function zd(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.kb = c;
  this.$a = d;
  this.f = 2153938944;
  this.o = 2;
}
g = zd.prototype;
g.w = function() {
  return this[aa] || (this[aa] = ++ba);
};
g.Ya = function(a, b, c) {
  a = G(this.$a);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.H(null, f), k = P.b(h, 0, null), h = P.b(h, 1, null);
      h.k ? h.k(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = G(a)) {
        Cb(a) ? (d = Za(a), a = $a(a), k = d, e = O(d), d = k) : (d = H(a), k = P.b(d, 0, null), h = P.b(d, 1, null), h.k ? h.k(k, this, b, c) : h.call(null, k, this, b, c), a = K(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.u = function(a, b, c) {
  C(b, "#\x3cAtom: ");
  xd(this.state, b, c);
  return C(b, "\x3e");
};
g.K = function() {
  return this.l;
};
g.bb = function() {
  return this.state;
};
g.t = function(a, b) {
  return this === b;
};
var Bd = function() {
  function a(a) {
    return new zd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Gb(c) ? lc.a(qd, c) : c, e = Q.a(d, Ad), d = Q.a(d, ja);
      return new zd(a, d, e, null);
    }
    a.n = 1;
    a.i = function(a) {
      var c = H(a);
      a = J(a);
      return b(c, a);
    };
    a.g = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.i = c.i;
  b.d = a;
  b.g = c.g;
  return b;
}();
function Cd(a, b) {
  var c = a.kb;
  if (null != c && !r(c.d ? c.d(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(yd.g(L([Wb(new gb(null, "validate", "validate", 1233162959, null), new gb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.$a && Sa(a, c, b);
  return b;
}
var Dd = function() {
  function a(a, b, c, d, e) {
    return Cd(a, b.k ? b.k(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return Cd(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return Cd(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return Cd(a, b.d ? b.d(a.state) : b.call(null, a.state));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, I) {
      var D = null;
      5 < arguments.length && (D = L(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, D);
    }
    function b(a, c, d, e, f, h) {
      return Cd(a, lc.g(c, a.state, d, e, f, L([h], 0)));
    }
    a.n = 5;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = K(a);
      var h = H(a);
      a = J(a);
      return b(c, d, e, f, h, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, n, q, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return f.g(e, k, l, n, q, L(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 5;
  e.i = f.i;
  e.a = d;
  e.b = c;
  e.k = b;
  e.A = a;
  e.g = f.g;
  return e;
}(), Nb = function() {
  function a(a) {
    return(Math.random.r ? Math.random.r() : Math.random.call(null)) * a;
  }
  function b() {
    return c.d(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.d = a;
  return c;
}(), Ob = function(a) {
  return Math.floor.d ? Math.floor.d((Math.random.r ? Math.random.r() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.r ? Math.random.r() : Math.random.call(null)) * a);
};
var ka = new R(null, "dup", "dup"), fb = new R(null, "default", "default"), Ed = new R(null, "state", "state"), Fd = new R(null, "name", "name"), ga = new R(null, "flush-on-newline", "flush-on-newline"), U = new R(null, "rotate", "rotate"), Gd = new R(null, "U", "U"), Hd = new R(null, "done", "done"), la = new R(null, "print-length", "print-length"), Id = new R(null, "orientation", "orientation"), t = new R(null, "else", "else"), ia = new R(null, "readably", "readably"), Ad = new R(null, "validator", 
"validator"), ja = new R(null, "meta", "meta"), V = new R(null, "R", "R"), W = new R(null, "L", "L"), X = new R(null, "new-color", "new-color"), Y = new R(null, "N", "N"), $ = new R(null, "new-state", "new-state");
var Jd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    if (r(!1)) {
      a = G(a);
      for (var b = null, e = 0, f = 0;;) {
        if (f < e) {
          var h = b.H(null, f);
          console.log("" + w(h));
          f += 1;
        } else {
          if (a = G(a)) {
            b = a, Cb(b) ? (a = Za(b), e = $a(b), b = a, h = O(a), a = e, e = h) : (h = H(b), console.log("" + w(h)), a = K(b), b = null, e = 0), f = 0;
          } else {
            return null;
          }
        }
      }
    } else {
      return null;
    }
  }
  a.n = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}(), Kd = Bd.d(0), Ld = Bd.d(Jc), Md = new S(null, 17, 5, Ic, [new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [U, W, X, 1, $, 1], null), 1, new p(null, 3, [U, W, X, 1, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [U, V, X, 1, $, 1], null), 1, new p(null, 3, [U, Y, X, 0, $, 0], null)], null), Fd, "Fibonacci"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [U, V, X, 1, $, 0], null), 1, new p(null, 3, [U, W, X, 0, $, 0], null)], null), 1, new p(null, 2, [0, new p(null, 
3, [U, V, X, 1, $, 0], null), 1, new p(null, 3, [U, W, X, 0, $, 0], null)], null), Fd, "Langton"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [U, V, X, 1, $, 0], null), 1, new p(null, 3, [U, V, X, 1, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [U, Y, X, 0, $, 0], null), 1, new p(null, 3, [U, Y, X, 0, $, 1], null)], null), Fd, "Chaotic 1"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [U, V, X, 1, $, 1], null), 1, new p(null, 3, [U, W, X, 0, $, 1], null)], 
null), 1, new p(null, 2, [0, new p(null, 3, [U, Y, X, 1, $, 0], null), 1, new p(null, 3, [U, Y, X, 0, $, 0], null)], null), Fd, "Chaotic 2"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [U, W, X, 1, $, 1], null), 1, new p(null, 3, [U, W, X, 0, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [U, V, X, 1, $, 1], null), 1, new p(null, 3, [U, W, X, 0, $, 0], null)], null), Fd, "Chaotic 3"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [U, V, X, 1, $, 1], null), 
1, new p(null, 3, [U, V, X, 0, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [U, Y, X, 1, $, 0], null), 1, new p(null, 3, [U, Y, X, 1, $, 1], null)], null), Fd, "Chaotic 4"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 1, U, V, $, 1], null), 1, new p(null, 3, [X, 1, U, W, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 1, U, V, $, 1], null), 1, new p(null, 3, [X, 0, U, W, $, 0], null)], null), Fd, "Coral"], null), new p(null, 3, [0, new p(null, 2, [0, 
new p(null, 3, [X, 1, U, W, $, 0], null), 1, new p(null, 3, [X, 1, U, V, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 0, U, V, $, 0], null), 1, new p(null, 3, [X, 0, U, W, $, 1], null)], null), Fd, "Square 1"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 0, U, V, $, 1], null), 1, new p(null, 3, [X, 0, U, W, $, 0], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 1, U, Y, $, 0], null), 1, new p(null, 3, [X, 1, U, Gd, $, 1], null)], null), Fd, "Square 2"], 
null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 0, U, Y, $, 1], null), 1, new p(null, 3, [X, 0, U, Gd, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 1, U, V, $, 1], null), 1, new p(null, 3, [X, 0, U, Y, $, 1], null)], null), Fd, "Counter 1"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 1, U, V, $, 1], null), 1, new p(null, 3, [X, 0, U, Y, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 0, U, Y, $, 0], null), 1, new p(null, 3, [X, 
1, U, W, $, 1], null)], null), Fd, "Counter 2"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 1, U, Y, $, 1], null), 1, new p(null, 3, [X, 1, U, W, $, 0], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 1, U, V, $, 1], null), 1, new p(null, 3, [X, 0, U, Y, $, 0], null)], null), Fd, "Spiral 1"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 1, U, W, $, 0], null), 1, new p(null, 3, [X, 0, U, V, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 
1, U, V, $, 0], null), 1, new p(null, 3, [X, 0, U, W, $, 1], null)], null), Fd, "Spiral 2"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 1, U, Gd, $, 0], null), 1, new p(null, 3, [X, 0, U, Y, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 0, U, W, $, 0], null), 1, new p(null, 3, [X, 0, U, V, $, 1], null)], null), Fd, "Spiral 3"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 0, U, Y, $, 1], null), 1, new p(null, 3, [X, 1, U, Gd, $, 1], null)], 
null), 1, new p(null, 2, [0, new p(null, 3, [X, 1, U, W, $, 0], null), 1, new p(null, 3, [X, 1, U, Y, $, 1], null)], null), Fd, "Ladder"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 0, U, V, $, 1], null), 1, new p(null, 3, [X, 0, U, W, $, 0], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 1, U, Gd, $, 1], null), 1, new p(null, 3, [X, 0, U, V, $, 0], null)], null), Fd, "Dixe"], null), new p(null, 3, [0, new p(null, 2, [0, new p(null, 3, [X, 1, U, W, $, 0], null), 1, new p(null, 
3, [X, 0, U, V, $, 1], null)], null), 1, new p(null, 2, [0, new p(null, 3, [X, 0, U, V, $, 0], null), 1, new p(null, 3, [X, 1, U, V, $, 0], null)], null), Fd, "Diamond"], null)], null);
function Nd(a, b, c) {
  return uc.b(a, b, function() {
    return c;
  });
}
function Od(a, b, c) {
  Dd.a(Ld, function(d) {
    return Nd(d, new S(null, 2, 5, Ic, [a, b], null), c);
  });
}
function Pd(a, b) {
  var c = P.b(a, 0, null), d = P.b(a, 1, null);
  b.fillStyle = "rgb(200, 0, 0)";
  b.fillRect(4 * c, 4 * d, 4, 4);
}
function Qd(a, b) {
  var c = P.b(a, 0, null), d = P.b(a, 1, null), e = tc.a(Fa(Ld), new S(null, 2, 5, Ic, [c, d], null)), e = E.a(1, e) ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
  b.strokeStyle = e;
  b.fillStyle = e;
  b.fillRect(4 * c, 4 * d, 4, 4);
}
function Rd(a, b) {
  var c = function() {
    if (r(E.a ? E.a(W, a) : E.call(null, W, a))) {
      return-90;
    }
    if (r(E.a ? E.a(V, a) : E.call(null, V, a))) {
      return 90;
    }
    if (r(E.a ? E.a(Y, a) : E.call(null, Y, a))) {
      return 0;
    }
    if (r(E.a ? E.a(Gd, a) : E.call(null, Gd, a))) {
      return 180;
    }
    throw Error([w("No matching clause: "), w(a)].join(""));
  }() + b;
  return 360 <= c ? c - 360 : 0 > c ? c + 360 : t ? c : null;
}
function Sd(a, b, c) {
  var d = P.b(a, 0, null);
  a = P.b(a, 1, null);
  var e = Gb(b) ? lc.a(qd, b) : b;
  b = Q.a(e, Id);
  var e = Q.a(e, Ed), f = tc.a(Fa(Ld), new S(null, 2, 5, Ic, [d, a], null));
  c = tc.a(c, new S(null, 2, 5, Ic, [e, f], null));
  f = Gb(c) ? lc.a(qd, c) : c;
  c = Q.a(f, U);
  e = Q.a(f, $);
  f = Q.a(f, X);
  Od(d, a, f);
  return new p(null, 2, [Ed, e, Id, Rd(c, b)], null);
}
function Td(a, b) {
  var c = Gb(a) ? lc.a(qd, a) : a, d = Q.a(c, Id), c = function() {
    if (r(E.a ? E.a(0, d) : E.call(null, 0, d))) {
      return new S(null, 2, 5, Ic, [0, -1], null);
    }
    if (r(E.a ? E.a(90, d) : E.call(null, 90, d))) {
      return new S(null, 2, 5, Ic, [1, 0], null);
    }
    if (r(E.a ? E.a(180, d) : E.call(null, 180, d))) {
      return new S(null, 2, 5, Ic, [0, 1], null);
    }
    if (r(E.a ? E.a(270, d) : E.call(null, 270, d))) {
      return new S(null, 2, 5, Ic, [-1, 0], null);
    }
    throw Error([w("No matching clause: "), w(d)].join(""));
  }();
  return oc.b(Lb, b, c);
}
var Vd = function Ud(b, c, d, e, f) {
  try {
    Qd(b, e);
    Dd.a(Kd, kb);
    var h = Sd(b, c, f), k = Td(h, b);
    return r(d.d ? d.d(k) : d.call(null, k)) ? (Pd(k, e), setTimeout(function() {
      return Ud(k, h, d, e, f);
    }, 40)) : Jd.g(L([[w(Hd), w(" old: "), w(b), w(" new: "), w(k)].join("")], 0));
  } catch (l) {
    if (l instanceof RangeError) {
      return Jd.g(L(["Catched ", l], 0));
    }
    if (t) {
      throw l;
    }
    return null;
  }
};
function Wd(a, b) {
  return function(c) {
    var d = P.b(c, 0, null);
    c = P.b(c, 1, null);
    return d <= a && c <= b && 0 <= d && 0 <= c;
  };
}
function Xd(a) {
  var b = document.getElementById(a), c = b.width / 4 | 0;
  a = b.height / 4 | 0;
  var b = b.getContext("2d"), d = Wd(c, a), e = P.a(Md, Ob(O(Md)));
  Cd(Ld, Kc(sc.a(a + 1, Kc(sc.a(c + 1, 0)))));
  var f = Ob(2), h = Ob(2), c = c / 2 | 0;
  a = a / 2 | 0;
  Od(c, a, f);
  Vd(new S(null, 2, 5, Ic, [c, a], null), new p(null, 2, [Ed, h, Id, 0], null), d, b, e);
  return Fd.d(e);
}
var Yd = ["langtons_ant", "core", "run"], Zd = this;
Yd[0] in Zd || !Zd.execScript || Zd.execScript("var " + Yd[0]);
for (var $d;Yd.length && ($d = Yd.shift());) {
  Yd.length || void 0 === Xd ? Zd = Zd[$d] ? Zd[$d] : Zd[$d] = {} : Zd[$d] = Xd;
}
;
})();
