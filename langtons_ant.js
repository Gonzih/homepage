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
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ea(a, b) {
  null != a && this.append.apply(this, arguments);
}
ea.prototype.pa = "";
ea.prototype.append = function(a, b, c) {
  this.pa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.pa += arguments[d];
    }
  }
  return this;
};
ea.prototype.toString = function() {
  return this.pa;
};
var fa = null;
function ga() {
  return new n(null, 5, [ha, !0, ia, !0, ka, !1, la, !1, ma, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function t(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function na(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = na(b), c = r(r(c) ? c.nb : c) ? c.mb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function oa(a) {
  var b = a.mb;
  return r(b) ? b : "" + w.d(a);
}
function y(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var pa = {}, qa = {};
function sa(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = sa[m(null == a ? null : a)];
  if (!b && (b = sa._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ta(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = ta[m(null == a ? null : a)];
  if (!c && (c = ta._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var ua = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.V : a) {
      return a.V(a, b, c);
    }
    var h;
    h = z[m(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.O : a) {
      return a.O(a, b);
    }
    var c;
    c = z[m(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw v("IIndexed.-nth", a);
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
}(), va = {};
function A(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw v("ISeq.-first", a);
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
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var wa = {}, xa = function() {
  function a(a, b, c) {
    if (a ? a.I : a) {
      return a.I(a, b, c);
    }
    var h;
    h = xa[m(null == a ? null : a)];
    if (!h && (h = xa._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = xa[m(null == a ? null : a)];
    if (!c && (c = xa._, !c)) {
      throw v("ILookup.-lookup", a);
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
function ya(a, b, c) {
  if (a ? a.qa : a) {
    return a.qa(a, b, c);
  }
  var d;
  d = ya[m(null == a ? null : a)];
  if (!d && (d = ya._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var za = {}, Aa = {};
function Ca(a) {
  if (a ? a.Va : a) {
    return a.Va();
  }
  var b;
  b = Ca[m(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Da(a) {
  if (a ? a.Wa : a) {
    return a.Wa();
  }
  var b;
  b = Da[m(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ea = {};
function Fa(a, b, c) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b, c);
  }
  var d;
  d = Fa[m(null == a ? null : a)];
  if (!d && (d = Fa._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Ga(a) {
  if (a ? a.bb : a) {
    return a.state;
  }
  var b;
  b = Ga[m(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ha = {};
function Ia(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Ia[m(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function Ja(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = Ja[m(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ka = {}, La = function() {
  function a(a, b, c) {
    if (a ? a.M : a) {
      return a.M(a, b, c);
    }
    var h;
    h = La[m(null == a ? null : a)];
    if (!h && (h = La._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.L : a) {
      return a.L(a, b);
    }
    var c;
    c = La[m(null == a ? null : a)];
    if (!c && (c = La._, !c)) {
      throw v("IReduce.-reduce", a);
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
function Ma(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = Ma[m(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Na(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = Pa[m(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Qa = {};
function D(a, b) {
  if (a ? a.Za : a) {
    return a.Za(0, b);
  }
  var c;
  c = D[m(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Ra = {};
function Sa(a, b, c) {
  if (a ? a.w : a) {
    return a.w(a, b, c);
  }
  var d;
  d = Sa[m(null == a ? null : a)];
  if (!d && (d = Sa._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Ta(a, b, c) {
  if (a ? a.Ya : a) {
    return a.Ya(0, b, c);
  }
  var d;
  d = Ta[m(null == a ? null : a)];
  if (!d && (d = Ta._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Ua(a) {
  if (a ? a.xa : a) {
    return a.xa(a);
  }
  var b;
  b = Ua[m(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Va(a, b) {
  if (a ? a.ya : a) {
    return a.ya(a, b);
  }
  var c;
  c = Va[m(null == a ? null : a)];
  if (!c && (c = Va._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Wa(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = Wa[m(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Xa(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = Xa[m(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Ya(a, b, c) {
  if (a ? a.Xa : a) {
    return a.Xa(0, b, c);
  }
  var d;
  d = Ya[m(null == a ? null : a)];
  if (!d && (d = Ya._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Za(a) {
  if (a ? a.Sa : a) {
    return a.Sa();
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function $a(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = $a[m(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ab(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = ab[m(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function bb(a) {
  if (a ? a.Ba : a) {
    return a.Ba(a);
  }
  var b;
  b = bb[m(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function cb(a) {
  this.ob = a;
  this.o = 0;
  this.f = 1073741824;
}
cb.prototype.Za = function(a, b) {
  return this.ob.append(b);
};
function db(a) {
  var b = new ea;
  a.w(null, new cb(b), ga());
  return "" + w.d(b);
}
function eb(a, b) {
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
    c = fb.a ? fb.a(a.F, b.F) : fb.call(null, a.F, b.F);
    return 0 === c ? fb.a ? fb.a(a.name, b.name) : fb.call(null, a.name, b.name) : c;
  }
  return gb ? fb.a ? fb.a(a.name, b.name) : fb.call(null, a.name, b.name) : null;
}
function hb(a, b, c, d, e) {
  this.F = a;
  this.name = b;
  this.ha = c;
  this.ia = d;
  this.oa = e;
  this.f = 2154168321;
  this.o = 4096;
}
g = hb.prototype;
g.w = function(a, b) {
  return D(b, this.ha);
};
g.A = function() {
  var a = this.ia;
  return null != a ? a : this.ia = a = ib.a ? ib.a(F.d ? F.d(this.F) : F.call(null, this.F), F.d ? F.d(this.name) : F.call(null, this.name)) : ib.call(null, F.d ? F.d(this.F) : F.call(null, this.F), F.d ? F.d(this.name) : F.call(null, this.name));
};
g.N = function(a, b) {
  return new hb(this.F, this.name, this.ha, this.ia, b);
};
g.J = function() {
  return this.oa;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return xa.b(c, this, null);
      case 3:
        return xa.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return xa.b(a, this, null);
};
g.a = function(a, b) {
  return xa.b(a, this, b);
};
g.u = function(a, b) {
  return b instanceof hb ? this.ha === b.ha : !1;
};
g.toString = function() {
  return this.ha;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.wb)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new jb(a, 0);
  }
  if (t(Oa, a)) {
    return Pa(a);
  }
  if (u) {
    throw Error("" + w.d(a) + " is not ISeqable");
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
function I(a) {
  return null != a ? a && (a.f & 64 || a.ra) ? a.R(null) : (a = G(a)) ? B(a) : kb : kb;
}
function K(a) {
  return null == a ? null : a && (a.f & 128 || a.vb) ? a.ca(null) : G(I(a));
}
var E = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ma(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
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
    a.m = 2;
    a.i = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
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
        return c.g(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.i = c.i;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.g = c.g;
  return b;
}();
qa["null"] = !0;
sa["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ma.number = function(a, b) {
  return a === b;
};
Ha["function"] = !0;
Ia["function"] = function() {
  return null;
};
pa["function"] = !0;
Na._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function lb(a) {
  return a + 1;
}
var mb = function() {
  function a(a, b, c, d) {
    for (var l = sa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = sa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = sa(a);
    if (0 === c) {
      return b.s ? b.s() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
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
  d.h = a;
  return d;
}(), nb = function() {
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
      return b.s ? b.s() : b.call(null);
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
  d.h = a;
  return d;
}();
function ob(a) {
  return a ? a.f & 2 || a.ab ? !0 : a.f ? !1 : t(qa, a) : t(qa, a);
}
function pb(a) {
  return a ? a.f & 16 || a.Ta ? !0 : a.f ? !1 : t(ua, a) : t(ua, a);
}
function jb(a, b) {
  this.c = a;
  this.j = b;
  this.f = 166199550;
  this.o = 8192;
}
g = jb.prototype;
g.toString = function() {
  return db(this);
};
g.O = function(a, b) {
  var c = b + this.j;
  return c < this.c.length ? this.c[c] : null;
};
g.V = function(a, b, c) {
  a = b + this.j;
  return a < this.c.length ? this.c[a] : c;
};
g.ca = function() {
  return this.j + 1 < this.c.length ? new jb(this.c, this.j + 1) : null;
};
g.G = function() {
  return this.c.length - this.j;
};
g.A = function() {
  return qb.d ? qb.d(this) : qb.call(null, this);
};
g.u = function(a, b) {
  return rb.a ? rb.a(this, b) : rb.call(null, this, b);
};
g.L = function(a, b) {
  return nb.h(this.c, b, this.c[this.j], this.j + 1);
};
g.M = function(a, b, c) {
  return nb.h(this.c, b, c, this.j);
};
g.P = function() {
  return this.c[this.j];
};
g.R = function() {
  return this.j + 1 < this.c.length ? new jb(this.c, this.j + 1) : kb;
};
g.D = function() {
  return this;
};
g.C = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
var sb = function() {
  function a(a, b) {
    return b < a.length ? new jb(a, b) : null;
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
}(), M = function() {
  function a(a, b) {
    return sb.a(a, b);
  }
  function b(a) {
    return sb.a(a, 0);
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
Ma._ = function(a, b) {
  return a === b;
};
var tb = function() {
  function a(a, b) {
    return null != a ? ta(a, b) : ta(kb, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
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
    a.m = 2;
    a.i = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.i = c.i;
  b.a = a;
  b.g = c.g;
  return b;
}();
function ub(a) {
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
          if (t(qa, a)) {
            a = sa(a);
          } else {
            if (u) {
              a: {
                a = G(a);
                for (var b = 0;;) {
                  if (ob(a)) {
                    a = b + sa(a);
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
var vb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? H(a) : c;
      }
      if (pb(a)) {
        return z.b(a, b, c);
      }
      if (G(a)) {
        a = K(a), b -= 1;
      } else {
        return u ? c : null;
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
      if (pb(a)) {
        return z.a(a, b);
      }
      if (G(a)) {
        var c = K(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (u) {
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
}(), O = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.f & 16 || a.Ta)) {
      return a.V(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (t(ua, a)) {
      return z.a(a, b);
    }
    if (a ? a.f & 64 || a.ra || (a.f ? 0 : t(va, a)) : t(va, a)) {
      return vb.b(a, b, c);
    }
    if (u) {
      throw Error("nth not supported on this type " + w.d(oa(na(a))));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.f & 16 || a.Ta)) {
      return a.O(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (t(ua, a)) {
      return z.a(a, b);
    }
    if (a ? a.f & 64 || a.ra || (a.f ? 0 : t(va, a)) : t(va, a)) {
      return vb.a(a, b);
    }
    if (u) {
      throw Error("nth not supported on this type " + w.d(oa(na(a))));
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
}(), P = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Ua) ? a.I(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(wa, a) ? xa.b(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Ua) ? a.H(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(wa, a) ? xa.a(a, b) : null;
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
}(), xb = function() {
  function a(a, b, c) {
    return null != a ? ya(a, b, c) : wb.a ? wb.a([b], [c]) : wb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
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
    a.m = 3;
    a.i = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.i = c.i;
  b.b = a;
  b.g = c.g;
  return b;
}();
function yb(a) {
  var b = "function" == m(a);
  return b ? b : a ? r(r(null) ? null : a.qb) ? !0 : a.Ab ? !1 : t(pa, a) : t(pa, a);
}
function zb(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.eb || (a.f ? 0 : t(Ha, a)) : t(Ha, a) : b) ? Ia(a) : null;
}
var Ab = {}, Bb = 0;
function F(a) {
  if (a && (a.f & 4194304 || a.tb)) {
    a = a.A(null);
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
            255 < Bb && (Ab = {}, Bb = 0);
            var b = Ab[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Ab[a] = b;
              Bb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : u ? Na(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Db(a) {
  return a ? a.f & 16384 || a.yb ? !0 : a.f ? !1 : t(Ea, a) : t(Ea, a);
}
function Eb(a) {
  return a ? a.o & 512 || a.rb ? !0 : !1 : !1;
}
function Fb(a) {
  var b = [];
  da(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Gb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Hb = {};
function Ib(a) {
  return null == a ? !1 : a ? a.f & 64 || a.ra ? !0 : a.f ? !1 : t(va, a) : t(va, a);
}
function Jb(a) {
  return r(a) ? !0 : !1;
}
function fb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (na(a) === na(b)) {
    return a && (a.o & 2048 || a.va) ? a.wa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Kb = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = fb(O.a(a, h), O.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = ub(a), h = ub(b);
    return f < h ? -1 : f > h ? 1 : u ? c.h(a, b, f, 0) : null;
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
  c.h = a;
  return c;
}(), Q = function() {
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
    return c ? Lb.b ? Lb.b(a, H(c), K(c)) : Lb.call(null, a, H(c), K(c)) : a.s ? a.s() : a.call(null);
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
  function a(a, b, c) {
    return c && (c.f & 524288 || c.gb) ? c.M(null, a, b) : c instanceof Array ? nb.b(c, a, b) : "string" === typeof c ? nb.b(c, a, b) : t(Ka, c) ? La.b(c, a, b) : u ? Q.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.gb) ? b.L(null, a) : b instanceof Array ? nb.a(b, a) : "string" === typeof b ? nb.a(b, a) : t(Ka, b) ? La.a(b, a) : u ? Q.a(a, b) : null;
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
}(), Mb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Lb.b(a, b + c, d);
    }
    b.m = 2;
    b.i = function(a) {
      var b = H(a);
      a = K(a);
      var c = H(a);
      a = I(a);
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
        return b.g(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.i = b.i;
  a.s = function() {
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
function Nb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
var Ob = function() {
  function a(a) {
    return a * c.s();
  }
  function b() {
    return Math.random.s ? Math.random.s() : Math.random.call(null);
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
  c.s = b;
  c.d = a;
  return c;
}();
function Pb(a) {
  return Nb(Ob.d(a));
}
function Qb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Rb(a) {
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
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ea(b.d(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.d(H(l))), l = K(l);
        } else {
          return e.toString();
        }
      }
    }
    a.m = 1;
    a.i = function(a) {
      var b = H(a);
      a = I(a);
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
        return c.g(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.i = c.i;
  b.s = function() {
    return "";
  };
  b.d = a;
  b.g = c.g;
  return b;
}();
function rb(a, b) {
  return Jb((b ? b.f & 16777216 || b.xb || (b.f ? 0 : t(Qa, b)) : t(Qa, b)) ? function() {
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
        return u ? !1 : null;
      }
    }
  }() : null);
}
function ib(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function qb(a) {
  if (G(a)) {
    var b = F(H(a));
    for (a = K(a);;) {
      if (null == a) {
        return b;
      }
      b = ib(b, F(H(a)));
      a = K(a);
    }
  } else {
    return 0;
  }
}
function Sb(a) {
  var b = 0;
  for (a = G(a);;) {
    if (a) {
      var c = H(a), b = (b + (F(Tb.d ? Tb.d(c) : Tb.call(null, c)) ^ F(Ub.d ? Ub.d(c) : Ub.call(null, c)))) % 4503599627370496;
      a = K(a);
    } else {
      return b;
    }
  }
}
function Vb(a, b, c, d, e) {
  this.l = a;
  this.ta = b;
  this.ea = c;
  this.count = d;
  this.k = e;
  this.f = 65937646;
  this.o = 8192;
}
g = Vb.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.l;
};
g.ca = function() {
  return 1 === this.count ? null : this.ea;
};
g.G = function() {
  return this.count;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  return this.ta;
};
g.R = function() {
  return 1 === this.count ? kb : this.ea;
};
g.D = function() {
  return this;
};
g.N = function(a, b) {
  return new Vb(b, this.ta, this.ea, this.count, this.k);
};
g.C = function(a, b) {
  return new Vb(this.l, b, this, this.count + 1, null);
};
function Wb(a) {
  this.l = a;
  this.f = 65937614;
  this.o = 8192;
}
g = Wb.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.l;
};
g.ca = function() {
  return null;
};
g.G = function() {
  return 0;
};
g.A = function() {
  return 0;
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  return null;
};
g.R = function() {
  return kb;
};
g.D = function() {
  return null;
};
g.N = function(a, b) {
  return new Wb(b);
};
g.C = function(a, b) {
  return new Vb(this.l, b, null, 1, null);
};
var kb = new Wb(null), Xb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof jb && 0 === a.j) {
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
    for (var e = kb;;) {
      if (0 < a) {
        var f = a - 1, e = e.C(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.m = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Yb(a, b, c, d) {
  this.l = a;
  this.ta = b;
  this.ea = c;
  this.k = d;
  this.f = 65929452;
  this.o = 8192;
}
g = Yb.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.l;
};
g.ca = function() {
  return null == this.ea ? null : G(this.ea);
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  return this.ta;
};
g.R = function() {
  return null == this.ea ? kb : this.ea;
};
g.D = function() {
  return this;
};
g.N = function(a, b) {
  return new Yb(b, this.ta, this.ea, this.k);
};
g.C = function(a, b) {
  return new Yb(null, b, this, this.k);
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.ra)) ? new Yb(null, a, b, null) : new Yb(null, a, G(b), null);
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
g.w = function(a, b) {
  return D(b, ":" + w.d(this.ga));
};
g.A = function() {
  null == this.ia && (this.ia = ib(F(this.F), F(this.name)) + 2654435769);
  return this.ia;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return P.a(c, this);
      case 3:
        return P.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return P.a(a, this);
};
g.a = function(a, b) {
  return P.b(a, this, b);
};
g.u = function(a, b) {
  return b instanceof R ? this.ga === b.ga : !1;
};
g.toString = function() {
  return ":" + w.d(this.ga);
};
var $b = function() {
  function a(a, b) {
    return new R(a, b, "" + w.d(r(a) ? "" + w.d(a) + "/" : null) + w.d(b), null);
  }
  function b(a) {
    if (a instanceof R) {
      return a;
    }
    if (a instanceof hb) {
      var b;
      if (a && (a.o & 4096 || a.fb)) {
        b = a.F;
      } else {
        throw Error("Doesn't support namespace: " + w.d(a));
      }
      return new R(b, Zb.d ? Zb.d(a) : Zb.call(null, a), a.ha, null);
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
function ac(a, b, c, d) {
  this.l = a;
  this.na = b;
  this.p = c;
  this.k = d;
  this.o = 0;
  this.f = 32374988;
}
g = ac.prototype;
g.toString = function() {
  return db(this);
};
function bc(a) {
  null != a.na && (a.p = a.na.s ? a.na.s() : a.na.call(null), a.na = null);
  return a.p;
}
g.J = function() {
  return this.l;
};
g.ca = function() {
  Pa(this);
  return null == this.p ? null : K(this.p);
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  Pa(this);
  return null == this.p ? null : H(this.p);
};
g.R = function() {
  Pa(this);
  return null != this.p ? I(this.p) : kb;
};
g.D = function() {
  bc(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof ac) {
      a = bc(a);
    } else {
      return this.p = a, G(this.p);
    }
  }
};
g.N = function(a, b) {
  return new ac(b, this.na, this.p, this.k);
};
g.C = function(a, b) {
  return N(b, this);
};
function cc(a, b) {
  this.Aa = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
cc.prototype.G = function() {
  return this.end;
};
cc.prototype.add = function(a) {
  this.Aa[this.end] = a;
  return this.end += 1;
};
cc.prototype.ba = function() {
  var a = new dc(this.Aa, 0, this.end);
  this.Aa = null;
  return a;
};
function dc(a, b, c) {
  this.c = a;
  this.q = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
g = dc.prototype;
g.L = function(a, b) {
  return nb.h(this.c, b, this.c[this.q], this.q + 1);
};
g.M = function(a, b, c) {
  return nb.h(this.c, b, c, this.q);
};
g.Sa = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new dc(this.c, this.q + 1, this.end);
};
g.O = function(a, b) {
  return this.c[this.q + b];
};
g.V = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.c[this.q + b] : c;
};
g.G = function() {
  return this.end - this.q;
};
var ec = function() {
  function a(a, b, c) {
    return new dc(a, b, c);
  }
  function b(a, b) {
    return new dc(a, b, a.length);
  }
  function c(a) {
    return new dc(a, 0, a.length);
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
function fc(a, b, c, d) {
  this.ba = a;
  this.Z = b;
  this.l = c;
  this.k = d;
  this.f = 31850732;
  this.o = 1536;
}
g = fc.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.l;
};
g.ca = function() {
  if (1 < sa(this.ba)) {
    return new fc(Za(this.ba), this.Z, this.l, null);
  }
  var a = Pa(this.Z);
  return null == a ? null : a;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.P = function() {
  return z.a(this.ba, 0);
};
g.R = function() {
  return 1 < sa(this.ba) ? new fc(Za(this.ba), this.Z, this.l, null) : null == this.Z ? kb : this.Z;
};
g.D = function() {
  return this;
};
g.Ca = function() {
  return this.ba;
};
g.Da = function() {
  return null == this.Z ? kb : this.Z;
};
g.N = function(a, b) {
  return new fc(this.ba, this.Z, b, this.k);
};
g.C = function(a, b) {
  return N(b, this);
};
g.Ba = function() {
  return null == this.Z ? null : this.Z;
};
function gc(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(H(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function hc(a, b) {
  if (ob(a)) {
    return ub(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = K(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var jc = function ic(b) {
  return null == b ? null : null == K(b) ? G(H(b)) : u ? N(H(b), ic(K(b))) : null;
}, kc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, q) {
      var s = null;
      4 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, s);
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, jc(f)))));
    }
    a.m = 4;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var q = H(a);
      a = I(a);
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
        return d.g(c, f, h, k, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.i = d.i;
  c.d = function(a) {
    return G(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.b = b;
  c.h = a;
  c.g = d.g;
  return c;
}(), lc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Xa(a, c, d), r(k)) {
          c = H(k), d = H(K(k)), k = K(K(k));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var h = H(a);
      a = K(a);
      var k = H(a);
      a = I(a);
      return b(c, h, k, a);
    };
    a.g = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Xa(a, d, e);
      default:
        return b.g(a, d, e, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 3;
  a.i = b.i;
  a.b = function(a, b, e) {
    return Xa(a, b, e);
  };
  a.g = b.g;
  return a;
}();
function mc(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.s ? a.s() : a.call(null);
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
    return a.h ? a.h(c, d, e, f) : a.h ? a.h(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A(k), l = B(k);
  if (5 === b) {
    return a.v ? a.v(c, d, e, f, h) : a.v ? a.v(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A(l), p = B(l);
  if (6 === b) {
    return a.U ? a.U(c, d, e, f, h, k) : a.U ? a.U(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A(p), q = B(p);
  if (7 === b) {
    return a.ka ? a.ka(c, d, e, f, h, k, l) : a.ka ? a.ka(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var p = A(q), s = B(q);
  if (8 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, k, l, p) : a.Pa ? a.Pa(c, d, e, f, h, k, l, p) : a.call(null, c, d, e, f, h, k, l, p);
  }
  var q = A(s), x = B(s);
  if (9 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, k, l, p, q) : a.Qa ? a.Qa(c, d, e, f, h, k, l, p, q) : a.call(null, c, d, e, f, h, k, l, p, q);
  }
  var s = A(x), J = B(x);
  if (10 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, p, q, s) : a.Ea ? a.Ea(c, d, e, f, h, k, l, p, q, s) : a.call(null, c, d, e, f, h, k, l, p, q, s);
  }
  var x = A(J), C = B(J);
  if (11 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, p, q, s, x) : a.Fa ? a.Fa(c, d, e, f, h, k, l, p, q, s, x) : a.call(null, c, d, e, f, h, k, l, p, q, s, x);
  }
  var J = A(C), L = B(C);
  if (12 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, p, q, s, x, J) : a.Ga ? a.Ga(c, d, e, f, h, k, l, p, q, s, x, J) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J);
  }
  var C = A(L), V = B(L);
  if (13 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, p, q, s, x, J, C) : a.Ha ? a.Ha(c, d, e, f, h, k, l, p, q, s, x, J, C) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C);
  }
  var L = A(V), aa = B(V);
  if (14 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l, p, q, s, x, J, C, L) : a.Ia ? a.Ia(c, d, e, f, h, k, l, p, q, s, x, J, C, L) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L);
  }
  var V = A(aa), ja = B(aa);
  if (15 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V) : a.Ja ? a.Ja(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L, V);
  }
  var aa = A(ja), ra = B(ja);
  if (16 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa) : a.Ka ? a.Ka(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa);
  }
  var ja = A(ra), Ba = B(ra);
  if (17 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja) : a.La ? a.La(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja);
  }
  var ra = A(Ba), Cb = B(Ba);
  if (18 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra) : a.Ma ? a.Ma(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra);
  }
  Ba = A(Cb);
  Cb = B(Cb);
  if (19 === b) {
    return a.Na ? a.Na(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra, Ba) : a.Na ? a.Na(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra, Ba) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra, Ba);
  }
  var uc = A(Cb);
  B(Cb);
  if (20 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra, Ba, uc) : a.Oa ? a.Oa(c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra, Ba, uc) : a.call(null, c, d, e, f, h, k, l, p, q, s, x, J, C, L, V, aa, ja, ra, Ba, uc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var nc = function() {
  function a(a, b, c, d, e) {
    b = kc.h(b, c, d, e);
    c = a.m;
    return a.i ? (d = hc(b, c + 1), d <= c ? mc(a, d, b) : a.i(b)) : a.apply(a, gc(b));
  }
  function b(a, b, c, d) {
    b = kc.b(b, c, d);
    c = a.m;
    return a.i ? (d = hc(b, c + 1), d <= c ? mc(a, d, b) : a.i(b)) : a.apply(a, gc(b));
  }
  function c(a, b, c) {
    b = kc.a(b, c);
    c = a.m;
    if (a.i) {
      var d = hc(b, c + 1);
      return d <= c ? mc(a, d, b) : a.i(b);
    }
    return a.apply(a, gc(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.i) {
      var d = hc(b, c + 1);
      return d <= c ? mc(a, d, b) : a.i(b);
    }
    return a.apply(a, gc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, J) {
      var C = null;
      5 < arguments.length && (C = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C);
    }
    function b(a, c, d, e, f, h) {
      c = N(c, N(d, N(e, N(f, jc(h)))));
      d = a.m;
      return a.i ? (e = hc(c, d + 1), e <= d ? mc(a, e, c) : a.i(c)) : a.apply(a, gc(c));
    }
    a.m = 5;
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
      a = I(a);
      return b(c, d, e, f, h, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, p, q, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, q);
      default:
        return f.g(e, k, l, p, q, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.i = f.i;
  e.a = d;
  e.b = c;
  e.h = b;
  e.v = a;
  e.g = f.g;
  return e;
}();
function oc(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    if (r(a.d ? a.d(H(b)) : a.call(null, H(b)))) {
      var c = a, d = K(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function pc(a) {
  return a;
}
var qc = function() {
  function a(a, b, c, e) {
    return new ac(null, function() {
      var p = G(b), q = G(c), s = G(e);
      return p && q && s ? N(a.b ? a.b(H(p), H(q), H(s)) : a.call(null, H(p), H(q), H(s)), d.h(a, I(p), I(q), I(s))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new ac(null, function() {
      var e = G(b), p = G(c);
      return e && p ? N(a.a ? a.a(H(e), H(p)) : a.call(null, H(e), H(p)), d.b(a, I(e), I(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new ac(null, function() {
      var c = G(b);
      if (c) {
        if (Eb(c)) {
          for (var e = $a(c), p = ub(e), q = new cc(Array(p), 0), s = 0;;) {
            if (s < p) {
              var x = a.d ? a.d(z.a(e, s)) : a.call(null, z.a(e, s));
              q.add(x);
              s += 1;
            } else {
              break;
            }
          }
          e = q.ba();
          c = d.a(a, ab(c));
          return 0 === sa(e) ? c : new fc(e, c, null, null);
        }
        return N(a.d ? a.d(H(c)) : a.call(null, H(c)), d.a(a, I(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var x = null;
      4 < arguments.length && (x = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, e, f, h) {
      var x = function C(a) {
        return new ac(null, function() {
          var b = d.a(G, a);
          return oc(pc, b) ? N(d.a(H, b), C(d.a(I, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return nc.a(a, b);
        };
      }(x), x(tb.g(h, f, M([e, c], 0))));
    }
    a.m = 4;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.i = e.i;
  d.a = c;
  d.b = b;
  d.h = a;
  d.g = e.g;
  return d;
}(), sc = function rc(b, c) {
  return new ac(null, function() {
    if (0 < b) {
      var d = G(c);
      return d ? N(H(d), rc(b - 1, I(d))) : null;
    }
    return null;
  }, null, null);
}, tc = function() {
  function a(a, b) {
    return sc(a, c.d(b));
  }
  function b(a) {
    return new ac(null, function() {
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
}(), vc = function() {
  function a(a, b, c) {
    var h = Hb;
    for (b = G(b);;) {
      if (b) {
        var k = a;
        if (k ? k.f & 256 || k.Ua || (k.f ? 0 : t(wa, k)) : t(wa, k)) {
          a = P.b(a, H(b), h);
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
}(), wc = function() {
  function a(a, b, c, d, f, s) {
    var x = O.b(b, 0, null);
    return(b = Rb(b)) ? xb.b(a, x, e.U(P.a(a, x), b, c, d, f, s)) : xb.b(a, x, c.h ? c.h(P.a(a, x), d, f, s) : c.call(null, P.a(a, x), d, f, s));
  }
  function b(a, b, c, d, f) {
    var s = O.b(b, 0, null);
    return(b = Rb(b)) ? xb.b(a, s, e.v(P.a(a, s), b, c, d, f)) : xb.b(a, s, c.b ? c.b(P.a(a, s), d, f) : c.call(null, P.a(a, s), d, f));
  }
  function c(a, b, c, d) {
    var f = O.b(b, 0, null);
    return(b = Rb(b)) ? xb.b(a, f, e.h(P.a(a, f), b, c, d)) : xb.b(a, f, c.a ? c.a(P.a(a, f), d) : c.call(null, P.a(a, f), d));
  }
  function d(a, b, c) {
    var d = O.b(b, 0, null);
    return(b = Rb(b)) ? xb.b(a, d, e.b(P.a(a, d), b, c)) : xb.b(a, d, c.d ? c.d(P.a(a, d)) : c.call(null, P.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, J, C) {
      var L = null;
      6 < arguments.length && (L = M(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, h, J, L);
    }
    function b(a, c, d, f, h, k, C) {
      var L = O.b(c, 0, null);
      return(c = Rb(c)) ? xb.b(a, L, nc.g(e, P.a(a, L), c, d, f, M([h, k, C], 0))) : xb.b(a, L, nc.g(d, P.a(a, L), f, h, k, M([C], 0)));
    }
    a.m = 6;
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
      var C = H(a);
      a = I(a);
      return b(c, d, e, f, h, C, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, p, q, s, x) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      case 5:
        return b.call(this, e, k, l, p, q);
      case 6:
        return a.call(this, e, k, l, p, q, s);
      default:
        return f.g(e, k, l, p, q, s, M(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 6;
  e.i = f.i;
  e.b = d;
  e.h = c;
  e.v = b;
  e.U = a;
  e.g = f.g;
  return e;
}();
function xc(a, b) {
  this.n = a;
  this.c = b;
}
function yc(a) {
  return new xc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function zc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ac(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = yc(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Cc = function Bc(b, c, d, e) {
  var f = new xc(d.n, y(d.c)), h = b.e - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Bc(b, c - 5, d, e) : Ac(null, c - 5, e), f.c[h] = b);
  return f;
};
function Dc(a, b) {
  throw Error("No item " + w.d(a) + " in vector of length " + w.d(b));
}
function Ec(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.c[0];
    } else {
      return b.c;
    }
  }
}
function Fc(a, b) {
  if (b >= zc(a)) {
    return a.B;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Gc(a, b) {
  return 0 <= b && b < a.e ? Fc(a, b) : Dc(b, a.e);
}
var Ic = function Hc(b, c, d, e, f) {
  var h = new xc(d.n, y(d.c));
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Hc(b, c - 5, d.c[k], e, f);
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
  this.k = f;
  this.f = 167668511;
  this.o = 8196;
}
g = S.prototype;
g.toString = function() {
  return db(this);
};
g.H = function(a, b) {
  return xa.b(this, b, null);
};
g.I = function(a, b, c) {
  return "number" === typeof b ? z.b(this, b, c) : c;
};
g.O = function(a, b) {
  return Gc(this, b)[b & 31];
};
g.V = function(a, b, c) {
  return 0 <= b && b < this.e ? Fc(this, b)[b & 31] : c;
};
g.Ra = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return zc(this) <= b ? (a = y(this.B), a[b & 31] = c, new S(this.l, this.e, this.shift, this.root, a, null)) : new S(this.l, this.e, this.shift, Ic(this, this.shift, this.root, b, c), this.B, null);
  }
  if (b === this.e) {
    return ta(this, c);
  }
  if (u) {
    throw Error("Index " + w.d(b) + " out of bounds  [0," + w.d(this.e) + "]");
  }
  return null;
};
g.J = function() {
  return this.l;
};
g.G = function() {
  return this.e;
};
g.Va = function() {
  return z.a(this, 0);
};
g.Wa = function() {
  return z.a(this, 1);
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.xa = function() {
  return new Jc(this.e, this.shift, Kc.d ? Kc.d(this.root) : Kc.call(null, this.root), Lc.d ? Lc.d(this.B) : Lc.call(null, this.B));
};
g.L = function(a, b) {
  return mb.a(this, b);
};
g.M = function(a, b, c) {
  return mb.b(this, b, c);
};
g.qa = function(a, b, c) {
  if ("number" === typeof b) {
    return Fa(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.D = function() {
  return 0 === this.e ? null : 32 >= this.e ? new jb(this.B, 0) : u ? Mc.h ? Mc.h(this, Ec(this), 0, 0) : Mc.call(null, this, Ec(this), 0, 0) : null;
};
g.N = function(a, b) {
  return new S(b, this.e, this.shift, this.root, this.B, this.k);
};
g.C = function(a, b) {
  if (32 > this.e - zc(this)) {
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
  d ? (d = yc(null), d.c[0] = this.root, e = Ac(null, this.shift, new xc(null, this.B)), d.c[1] = e) : d = Cc(this, this.shift, this.root, new xc(null, this.B));
  return new S(this.l, this.e + 1, c, d, [b], null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.V(null, a, b);
};
var Nc = new xc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Oc = new S(null, 0, 5, Nc, [], 0);
function Pc(a) {
  return Wa(Lb.b(Va, Ua(Oc), a));
}
function Qc(a, b, c, d, e, f) {
  this.r = a;
  this.T = b;
  this.j = c;
  this.q = d;
  this.l = e;
  this.k = f;
  this.f = 32243948;
  this.o = 1536;
}
g = Qc.prototype;
g.toString = function() {
  return db(this);
};
g.ca = function() {
  if (this.q + 1 < this.T.length) {
    var a = Mc.h ? Mc.h(this.r, this.T, this.j, this.q + 1) : Mc.call(null, this.r, this.T, this.j, this.q + 1);
    return null == a ? null : a;
  }
  return bb(this);
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return mb.a(Rc.b ? Rc.b(this.r, this.j + this.q, ub(this.r)) : Rc.call(null, this.r, this.j + this.q, ub(this.r)), b);
};
g.M = function(a, b, c) {
  return mb.b(Rc.b ? Rc.b(this.r, this.j + this.q, ub(this.r)) : Rc.call(null, this.r, this.j + this.q, ub(this.r)), b, c);
};
g.P = function() {
  return this.T[this.q];
};
g.R = function() {
  if (this.q + 1 < this.T.length) {
    var a = Mc.h ? Mc.h(this.r, this.T, this.j, this.q + 1) : Mc.call(null, this.r, this.T, this.j, this.q + 1);
    return null == a ? kb : a;
  }
  return ab(this);
};
g.D = function() {
  return this;
};
g.Ca = function() {
  return ec.a(this.T, this.q);
};
g.Da = function() {
  var a = this.j + this.T.length;
  return a < sa(this.r) ? Mc.h ? Mc.h(this.r, Fc(this.r, a), a, 0) : Mc.call(null, this.r, Fc(this.r, a), a, 0) : kb;
};
g.N = function(a, b) {
  return Mc.v ? Mc.v(this.r, this.T, this.j, this.q, b) : Mc.call(null, this.r, this.T, this.j, this.q, b);
};
g.C = function(a, b) {
  return N(b, this);
};
g.Ba = function() {
  var a = this.j + this.T.length;
  return a < sa(this.r) ? Mc.h ? Mc.h(this.r, Fc(this.r, a), a, 0) : Mc.call(null, this.r, Fc(this.r, a), a, 0) : null;
};
var Mc = function() {
  function a(a, b, c, d, l) {
    return new Qc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Qc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Qc(a, Gc(a, b), b, c, null, null);
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
  d.h = b;
  d.v = a;
  return d;
}();
function Sc(a, b, c, d, e) {
  this.l = a;
  this.$ = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.f = 166617887;
  this.o = 8192;
}
g = Sc.prototype;
g.toString = function() {
  return db(this);
};
g.H = function(a, b) {
  return xa.b(this, b, null);
};
g.I = function(a, b, c) {
  return "number" === typeof b ? z.b(this, b, c) : c;
};
g.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Dc(b, this.end - this.start) : z.a(this.$, this.start + b);
};
g.V = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.b(this.$, this.start + b, c);
};
g.Ra = function(a, b, c) {
  var d = this, e = d.start + b;
  return Tc.v ? Tc.v(d.l, xb.b(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Tc.call(null, d.l, xb.b(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.J = function() {
  return this.l;
};
g.G = function() {
  return this.end - this.start;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return mb.a(this, b);
};
g.M = function(a, b, c) {
  return mb.b(this, b, c);
};
g.qa = function(a, b, c) {
  if ("number" === typeof b) {
    return Fa(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.D = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : N(z.a(a.$, e), new ac(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.N = function(a, b) {
  return Tc.v ? Tc.v(b, this.$, this.start, this.end, this.k) : Tc.call(null, b, this.$, this.start, this.end, this.k);
};
g.C = function(a, b) {
  return Tc.v ? Tc.v(this.l, Fa(this.$, this.end, b), this.start, this.end + 1, null) : Tc.call(null, this.l, Fa(this.$, this.end, b), this.start, this.end + 1, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.V(null, a, b);
};
function Tc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Sc) {
      c = b.start + c, d = b.start + d, b = b.$;
    } else {
      var f = ub(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Sc(a, b, c, d, e);
    }
  }
}
var Rc = function() {
  function a(a, b, c) {
    return Tc(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, ub(a));
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
function Kc(a) {
  return new xc({}, y(a.c));
}
function Lc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Gb(a, 0, b, 0, a.length);
  return b;
}
var Vc = function Uc(b, c, d, e) {
  d = b.root.n === d.n ? d : new xc(b.root.n, y(d.c));
  var f = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? Uc(b, c - 5, h, e) : Ac(b.root.n, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Jc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.B = d;
  this.f = 275;
  this.o = 88;
}
g = Jc.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.H(null, a);
};
g.a = function(a, b) {
  return this.I(null, a, b);
};
g.H = function(a, b) {
  return xa.b(this, b, null);
};
g.I = function(a, b, c) {
  return "number" === typeof b ? z.b(this, b, c) : c;
};
g.O = function(a, b) {
  if (this.root.n) {
    return Gc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.V = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c;
};
g.G = function() {
  if (this.root.n) {
    return this.e;
  }
  throw Error("count after persistent!");
};
g.Xa = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.e) {
      return zc(this) <= b ? d.B[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.n === k.n ? k : new xc(d.root.n, y(k.c));
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var p = b >>> a & 31, q = f(a - 5, l.c[p]);
            l.c[p] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return Va(this, c);
    }
    if (u) {
      throw Error("Index " + w.d(b) + " out of bounds for TransientVector of length" + w.d(d.e));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.sa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ya(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.ya = function(a, b) {
  if (this.root.n) {
    if (32 > this.e - zc(this)) {
      this.B[this.e & 31] = b;
    } else {
      var c = new xc(this.root.n, this.B), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.B = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ac(this.root.n, this.shift, c);
        this.root = new xc(this.root.n, d);
        this.shift = e;
      } else {
        this.root = Vc(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.za = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.e - zc(this), b = Array(a);
    Gb(this.B, 0, b, 0, a);
    return new S(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Wc() {
  this.o = 0;
  this.f = 2097152;
}
Wc.prototype.u = function() {
  return!1;
};
var Xc = new Wc;
function Yc(a, b) {
  return Jb((null == b ? 0 : b ? b.f & 1024 || b.ub || (b.f ? 0 : t(za, b)) : t(za, b)) ? ub(a) === ub(b) ? oc(pc, qc.a(function(a) {
    return E.a(P.b(b, H(a), Xc), H(K(a)));
  }, a)) : null : null);
}
function Zc(a, b) {
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
        if (u) {
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
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof hb) {
        a: {
          d = c.length;
          e = b.ha;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof hb && e === h.ha) {
              c = f;
              break a;
            }
            if (u) {
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
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
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
                if (u) {
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
function $c(a, b, c) {
  this.c = a;
  this.j = b;
  this.oa = c;
  this.o = 0;
  this.f = 32374990;
}
g = $c.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.oa;
};
g.ca = function() {
  return this.j < this.c.length - 2 ? new $c(this.c, this.j + 2, this.oa) : null;
};
g.G = function() {
  return(this.c.length - this.j) / 2;
};
g.A = function() {
  return qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  return new S(null, 2, 5, Nc, [this.c[this.j], this.c[this.j + 1]], null);
};
g.R = function() {
  return this.j < this.c.length - 2 ? new $c(this.c, this.j + 2, this.oa) : kb;
};
g.D = function() {
  return this;
};
g.N = function(a, b) {
  return new $c(this.c, this.j, b);
};
g.C = function(a, b) {
  return N(b, this);
};
function n(a, b, c, d) {
  this.l = a;
  this.e = b;
  this.c = c;
  this.k = d;
  this.f = 16647951;
  this.o = 8196;
}
g = n.prototype;
g.toString = function() {
  return db(this);
};
g.H = function(a, b) {
  return xa.b(this, b, null);
};
g.I = function(a, b, c) {
  a = Zc(this, b);
  return-1 === a ? c : this.c[a + 1];
};
g.J = function() {
  return this.l;
};
g.G = function() {
  return this.e;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Sb(this);
};
g.u = function(a, b) {
  return Yc(this, b);
};
g.xa = function() {
  return new ad({}, this.c.length, y(this.c));
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.qa = function(a, b, c) {
  a = Zc(this, b);
  if (-1 === a) {
    if (this.e < bd) {
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
      return new n(this.l, this.e + 1, e, null);
    }
    a = Ja;
    d = ya;
    e = cd;
    null != e ? e && (e.o & 4 || e.sb) ? (e = Lb.b(Va, Ua(e), this), e = Wa(e)) : e = Lb.b(ta, e, this) : e = Lb.b(tb, kb, this);
    return a(d(e, b, c), this.l);
  }
  return c === this.c[a + 1] ? this : u ? (b = y(this.c), b[a + 1] = c, new n(this.l, this.e, b, null)) : null;
};
g.D = function() {
  return 0 <= this.c.length - 2 ? new $c(this.c, 0, null) : null;
};
g.N = function(a, b) {
  return new n(b, this.e, this.c, this.k);
};
g.C = function(a, b) {
  if (Db(b)) {
    return ya(this, z.a(b, 0), z.a(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (Db(e)) {
      c = ya(c, z.a(e, 0), z.a(e, 1)), d = K(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.H(null, a);
};
g.a = function(a, b) {
  return this.I(null, a, b);
};
var bd = 8;
function ad(a, b, c) {
  this.la = a;
  this.da = b;
  this.c = c;
  this.o = 56;
  this.f = 258;
}
g = ad.prototype;
g.sa = function(a, b, c) {
  if (r(this.la)) {
    a = Zc(this, b);
    if (-1 === a) {
      return this.da + 2 <= 2 * bd ? (this.da += 2, this.c.push(b), this.c.push(c), this) : lc.b(dd.a ? dd.a(this.da, this.c) : dd.call(null, this.da, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.ya = function(a, b) {
  if (r(this.la)) {
    if (b ? b.f & 2048 || b.cb || (b.f ? 0 : t(Aa, b)) : t(Aa, b)) {
      return Xa(this, Tb.d ? Tb.d(b) : Tb.call(null, b), Ub.d ? Ub.d(b) : Ub.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = H(c);
      if (r(e)) {
        c = K(c), d = Xa(d, Tb.d ? Tb.d(e) : Tb.call(null, e), Ub.d ? Ub.d(e) : Ub.call(null, e));
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
    return this.la = !1, new n(null, Nb((this.da - this.da % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.H = function(a, b) {
  return xa.b(this, b, null);
};
g.I = function(a, b, c) {
  if (r(this.la)) {
    return a = Zc(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.G = function() {
  if (r(this.la)) {
    return Nb((this.da - this.da % 2) / 2);
  }
  throw Error("count after persistent!");
};
function dd(a, b) {
  for (var c = Ua(cd), d = 0;;) {
    if (d < a) {
      c = lc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ed() {
  this.aa = !1;
}
function fd(a, b) {
  return a === b ? !0 : a === b || a instanceof R && b instanceof R && a.ga === b.ga ? !0 : u ? E.a(a, b) : null;
}
var gd = function() {
  function a(a, b, c, h, k) {
    a = y(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = y(a);
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
  c.v = a;
  return c;
}(), hd = function() {
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
  c.h = b;
  c.U = a;
  return c;
}();
function id(a, b, c) {
  this.n = a;
  this.t = b;
  this.c = c;
}
g = id.prototype;
g.ma = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Qb(this.t), c = Array(0 > b ? 4 : 2 * (b + 1));
  Gb(this.c, 0, c, 0, 2 * b);
  return new id(a, this.t, c);
};
g.ua = function() {
  return jd.d ? jd.d(this.c) : jd.call(null, this.c);
};
g.ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.t & e)) {
    return d;
  }
  var f = Qb(this.t & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.ja(a + 5, b, c, d) : fd(c, e) ? f : u ? d : null;
};
g.X = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Qb(this.t & h - 1);
  if (0 === (this.t & h)) {
    var l = Qb(this.t);
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
      a.t |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = kd.X(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.t >>> d & 1) && (k[d] = null != this.c[e] ? kd.X(a, b + 5, F(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ld(a, l + 1, k);
    }
    return u ? (b = Array(2 * (l + 4)), Gb(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Gb(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.aa = !0, a = this.ma(a), a.c = b, a.t |= h, a) : null;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.X(a, b + 5, c, d, e, f), l === h ? this : hd.h(this, a, 2 * k + 1, l)) : fd(d, l) ? e === h ? this : hd.h(this, a, 2 * k + 1, e) : u ? (f.aa = !0, hd.U(this, a, 2 * k, null, 2 * k + 1, md.ka ? md.ka(a, b + 5, l, h, c, d, e) : md.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.W = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Qb(this.t & f - 1);
  if (0 === (this.t & f)) {
    var k = Qb(this.t);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = kd.W(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.t >>> c & 1) && (h[c] = null != this.c[d] ? kd.W(a + 5, F(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ld(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Gb(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Gb(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.aa = !0;
    return new id(null, this.t | f, a);
  }
  k = this.c[2 * h];
  f = this.c[2 * h + 1];
  return null == k ? (k = f.W(a + 5, b, c, d, e), k === f ? this : new id(null, this.t, gd.b(this.c, 2 * h + 1, k))) : fd(c, k) ? d === f ? this : new id(null, this.t, gd.b(this.c, 2 * h + 1, d)) : u ? (e.aa = !0, new id(null, this.t, gd.v(this.c, 2 * h, null, 2 * h + 1, md.U ? md.U(a + 5, k, f, b, c, d) : md.call(null, a + 5, k, f, b, c, d)))) : null;
};
var kd = new id(null, 0, []);
function ld(a, b, c) {
  this.n = a;
  this.e = b;
  this.c = c;
}
g = ld.prototype;
g.ma = function(a) {
  return a === this.n ? this : new ld(a, this.e, y(this.c));
};
g.ua = function() {
  return nd.d ? nd.d(this.c) : nd.call(null, this.c);
};
g.ja = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ja(a + 5, b, c, d) : d;
};
g.X = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = hd.h(this, a, h, kd.X(a, b + 5, c, d, e, f)), a.e += 1, a;
  }
  b = k.X(a, b + 5, c, d, e, f);
  return b === k ? this : hd.h(this, a, h, b);
};
g.W = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new ld(null, this.e + 1, gd.b(this.c, f, kd.W(a + 5, b, c, d, e)));
  }
  a = h.W(a + 5, b, c, d, e);
  return a === h ? this : new ld(null, this.e, gd.b(this.c, f, a));
};
function od(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (fd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function pd(a, b, c, d) {
  this.n = a;
  this.fa = b;
  this.e = c;
  this.c = d;
}
g = pd.prototype;
g.ma = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  Gb(this.c, 0, b, 0, 2 * this.e);
  return new pd(a, this.fa, this.e, b);
};
g.ua = function() {
  return jd.d ? jd.d(this.c) : jd.call(null, this.c);
};
g.ja = function(a, b, c, d) {
  a = od(this.c, this.e, c);
  return 0 > a ? d : fd(c, this.c[a]) ? this.c[a + 1] : u ? d : null;
};
g.X = function(a, b, c, d, e, f) {
  if (c === this.fa) {
    b = od(this.c, this.e, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.e) {
        return a = hd.U(this, a, 2 * this.e, d, 2 * this.e + 1, e), f.aa = !0, a.e += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Gb(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.aa = !0;
      f = this.e + 1;
      a === this.n ? (this.c = b, this.e = f, a = this) : a = new pd(this.n, this.fa, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : hd.h(this, a, b + 1, e);
  }
  return(new id(a, 1 << (this.fa >>> b & 31), [null, this, null, null])).X(a, b, c, d, e, f);
};
g.W = function(a, b, c, d, e) {
  return b === this.fa ? (a = od(this.c, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), Gb(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.aa = !0, new pd(null, this.fa, this.e + 1, b)) : E.a(this.c[a], d) ? this : new pd(null, this.fa, this.e, gd.b(this.c, a + 1, d))) : (new id(null, 1 << (this.fa >>> a & 31), [null, this])).W(a, b, c, d, e);
};
var md = function() {
  function a(a, b, c, h, k, l, p) {
    var q = F(c);
    if (q === k) {
      return new pd(null, q, 2, [c, h, l, p]);
    }
    var s = new ed;
    return kd.X(a, b, q, c, h, s).X(a, b, k, l, p, s);
  }
  function b(a, b, c, h, k, l) {
    var p = F(b);
    if (p === h) {
      return new pd(null, p, 2, [b, c, k, l]);
    }
    var q = new ed;
    return kd.W(a, p, b, c, q).W(a, h, k, l, q);
  }
  var c = null, c = function(c, e, f, h, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.U = b;
  c.ka = a;
  return c;
}();
function qd(a, b, c, d, e) {
  this.l = a;
  this.Y = b;
  this.j = c;
  this.p = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860;
}
g = qd.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.l;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  return null == this.p ? new S(null, 2, 5, Nc, [this.Y[this.j], this.Y[this.j + 1]], null) : H(this.p);
};
g.R = function() {
  return null == this.p ? jd.b ? jd.b(this.Y, this.j + 2, null) : jd.call(null, this.Y, this.j + 2, null) : jd.b ? jd.b(this.Y, this.j, K(this.p)) : jd.call(null, this.Y, this.j, K(this.p));
};
g.D = function() {
  return this;
};
g.N = function(a, b) {
  return new qd(b, this.Y, this.j, this.p, this.k);
};
g.C = function(a, b) {
  return N(b, this);
};
var jd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new qd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.ua(), r(h))) {
            return new qd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new qd(null, a, b, c, null);
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
function rd(a, b, c, d, e) {
  this.l = a;
  this.Y = b;
  this.j = c;
  this.p = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860;
}
g = rd.prototype;
g.toString = function() {
  return db(this);
};
g.J = function() {
  return this.l;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
g.u = function(a, b) {
  return rb(this, b);
};
g.L = function(a, b) {
  return Q.a(b, this);
};
g.M = function(a, b, c) {
  return Q.b(b, c, this);
};
g.P = function() {
  return H(this.p);
};
g.R = function() {
  return nd.h ? nd.h(null, this.Y, this.j, K(this.p)) : nd.call(null, null, this.Y, this.j, K(this.p));
};
g.D = function() {
  return this;
};
g.N = function(a, b) {
  return new rd(b, this.Y, this.j, this.p, this.k);
};
g.C = function(a, b) {
  return N(b, this);
};
var nd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.ua(), r(k))) {
            return new rd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new rd(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.h(null, a, 0, null);
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
  c.h = a;
  return c;
}();
function sd(a, b, c, d, e, f) {
  this.l = a;
  this.e = b;
  this.root = c;
  this.Q = d;
  this.S = e;
  this.k = f;
  this.f = 16123663;
  this.o = 8196;
}
g = sd.prototype;
g.toString = function() {
  return db(this);
};
g.H = function(a, b) {
  return xa.b(this, b, null);
};
g.I = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : u ? this.root.ja(0, F(b), b, c) : null;
};
g.J = function() {
  return this.l;
};
g.G = function() {
  return this.e;
};
g.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Sb(this);
};
g.u = function(a, b) {
  return Yc(this, b);
};
g.xa = function() {
  return new td({}, this.root, this.e, this.Q, this.S);
};
g.qa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.S ? this : new sd(this.l, this.Q ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new ed;
  b = (null == this.root ? kd : this.root).W(0, F(b), b, c, a);
  return b === this.root ? this : new sd(this.l, a.aa ? this.e + 1 : this.e, b, this.Q, this.S, null);
};
g.D = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.ua() : null;
    return this.Q ? N(new S(null, 2, 5, Nc, [null, this.S], null), a) : a;
  }
  return null;
};
g.N = function(a, b) {
  return new sd(b, this.e, this.root, this.Q, this.S, this.k);
};
g.C = function(a, b) {
  if (Db(b)) {
    return ya(this, z.a(b, 0), z.a(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (Db(e)) {
      c = ya(c, z.a(e, 0), z.a(e, 1)), d = K(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.H(null, a);
};
g.a = function(a, b) {
  return this.I(null, a, b);
};
var cd = new sd(null, 0, null, !1, null, 0);
function wb(a, b) {
  for (var c = a.length, d = 0, e = Ua(cd);;) {
    if (d < c) {
      var f = d + 1, e = e.sa(null, a[d], b[d]), d = f
    } else {
      return Wa(e);
    }
  }
}
function td(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.S = e;
  this.o = 56;
  this.f = 258;
}
g = td.prototype;
g.sa = function(a, b, c) {
  return ud(this, b, c);
};
g.ya = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.f & 2048 || b.cb || (b.f ? 0 : t(Aa, b)) : t(Aa, b)) {
        c = ud(this, Tb.d ? Tb.d(b) : Tb.call(null, b), Ub.d ? Ub.d(b) : Ub.call(null, b));
        break a;
      }
      c = G(b);
      for (var d = this;;) {
        var e = H(c);
        if (r(e)) {
          c = K(c), d = ud(d, Tb.d ? Tb.d(e) : Tb.call(null, e), Ub.d ? Ub.d(e) : Ub.call(null, e));
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
  if (this.n) {
    this.n = null, a = new sd(null, this.count, this.root, this.Q, this.S, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.H = function(a, b) {
  return null == b ? this.Q ? this.S : null : null == this.root ? null : this.root.ja(0, F(b), b);
};
g.I = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : this.root.ja(0, F(b), b, c);
};
g.G = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function ud(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.S !== c && (a.S = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new ed;
      b = (null == a.root ? kd : a.root).X(a.n, 0, F(b), b, c, d);
      b !== a.root && (a.root = b);
      d.aa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var vd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = Ua(cd);;) {
      if (a) {
        var e = K(K(a)), b = lc.b(b, H(a), H(K(a)));
        a = e;
      } else {
        return Wa(b);
      }
    }
  }
  a.m = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Tb(a) {
  return Ca(a);
}
function Ub(a) {
  return Da(a);
}
function Zb(a) {
  if (a && (a.o & 4096 || a.fb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + w.d(a));
}
function wd(a, b, c, d, e, f, h) {
  var k = fa;
  try {
    fa = null == fa ? null : fa - 1;
    if (null != fa && 0 > fa) {
      return D(a, "#");
    }
    D(a, c);
    G(h) && (b.b ? b.b(H(h), a, f) : b.call(null, H(h), a, f));
    for (var l = K(h), p = ma.d(f) - 1;;) {
      if (!l || null != p && 0 === p) {
        G(l) && 0 === p && (D(a, d), D(a, "..."));
        break;
      } else {
        D(a, d);
        b.b ? b.b(H(l), a, f) : b.call(null, H(l), a, f);
        var q = K(l);
        c = p - 1;
        l = q;
        p = c;
      }
    }
    return D(a, e);
  } finally {
    fa = k;
  }
}
var xd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.O(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, Eb(f) ? (e = $a(f), h = ab(f), f = e, l = ub(e), e = h, h = l) : (l = H(f), D(a, l), e = K(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.m = 1;
  a.i = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.g = b;
  return a;
}(), yd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function zd(a) {
  return'"' + w.d(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return yd[a];
  })) + '"';
}
var Cd = function Ad(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (u) {
    r(function() {
      var c = P.a(d, ka);
      return r(c) ? (c = b ? b.f & 131072 || b.eb ? !0 : b.f ? !1 : t(Ha, b) : t(Ha, b)) ? zb(b) : c : c;
    }()) && (D(c, "^"), Ad(zb(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.nb) {
      return b.zb(c);
    }
    if (b && (b.f & 2147483648 || b.K)) {
      return b.w(null, c, d);
    }
    if (na(b) === Boolean || "number" === typeof b) {
      return D(c, "" + w.d(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Bd.h ? Bd.h(qc.a(function(c) {
        return new S(null, 2, 5, Nc, [$b.d(c), b[c]], null);
      }, Fb(b)), Ad, c, d) : Bd.call(null, qc.a(function(c) {
        return new S(null, 2, 5, Nc, [$b.d(c), b[c]], null);
      }, Fb(b)), Ad, c, d);
    }
    if (b instanceof Array) {
      return wd(c, Ad, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return r(ia.d(d)) ? D(c, zd(b)) : D(c, b);
    }
    if (yb(b)) {
      return xd.g(c, M(["#\x3c", "" + w.d(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w.d(b);;) {
          if (ub(d) < c) {
            d = "0" + w.d(d);
          } else {
            return d;
          }
        }
      };
      return xd.g(c, M(['#inst "', "" + w.d(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? xd.g(c, M(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.K || (b.f ? 0 : t(Ra, b)) : t(Ra, b)) ? Sa(b, c, d) : u ? xd.g(c, M(["#\x3c", "" + w.d(b), "\x3e"], 0)) : null;
  }
  return null;
};
function Dd(a) {
  var b = ga(), c = new ea;
  a: {
    var d = new cb(c);
    Cd(H(a), d, b);
    a = G(K(a));
    for (var e = null, f = 0, h = 0;;) {
      if (h < f) {
        var k = e.O(null, h);
        D(d, " ");
        Cd(k, d, b);
        h += 1;
      } else {
        if (a = G(a)) {
          e = a, Eb(e) ? (a = $a(e), f = ab(e), e = a, k = ub(a), a = f, f = k) : (k = H(e), D(d, " "), Cd(k, d, b), a = K(e), e = null, f = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var Ed = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    (b = null == a) || (b = G(a), b = r(b) ? !1 : !0);
    return b ? "" : "" + w.d(Dd(a));
  }
  a.m = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Bd(a, b, c, d) {
  return wd(c, function(a, c, d) {
    b.b ? b.b(Ca(a), c, d) : b.call(null, Ca(a), c, d);
    D(c, " ");
    return b.b ? b.b(Da(a), c, d) : b.call(null, Da(a), c, d);
  }, "{", ", ", "}", d, G(a));
}
jb.prototype.K = !0;
jb.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
ac.prototype.K = !0;
ac.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
qd.prototype.K = !0;
qd.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
$c.prototype.K = !0;
$c.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
Qc.prototype.K = !0;
Qc.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
Yb.prototype.K = !0;
Yb.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
sd.prototype.K = !0;
sd.prototype.w = function(a, b, c) {
  return Bd(this, Cd, b, c);
};
rd.prototype.K = !0;
rd.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
Sc.prototype.K = !0;
Sc.prototype.w = function(a, b, c) {
  return wd(b, Cd, "[", " ", "]", c, this);
};
fc.prototype.K = !0;
fc.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
S.prototype.K = !0;
S.prototype.w = function(a, b, c) {
  return wd(b, Cd, "[", " ", "]", c, this);
};
Wb.prototype.K = !0;
Wb.prototype.w = function(a, b) {
  return D(b, "()");
};
n.prototype.K = !0;
n.prototype.w = function(a, b, c) {
  return Bd(this, Cd, b, c);
};
Vb.prototype.K = !0;
Vb.prototype.w = function(a, b, c) {
  return wd(b, Cd, "(", " ", ")", c, this);
};
S.prototype.va = !0;
S.prototype.wa = function(a, b) {
  return Kb.a(this, b);
};
Sc.prototype.va = !0;
Sc.prototype.wa = function(a, b) {
  return Kb.a(this, b);
};
R.prototype.va = !0;
R.prototype.wa = function(a, b) {
  return eb(this, b);
};
hb.prototype.va = !0;
hb.prototype.wa = function(a, b) {
  return eb(this, b);
};
function Fd(a, b) {
  if (a ? a.hb : a) {
    return a.hb(a, b);
  }
  var c;
  c = Fd[m(null == a ? null : a)];
  if (!c && (c = Fd._, !c)) {
    throw v("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Gd = function() {
  function a(a, b, c, d, e) {
    if (a ? a.lb : a) {
      return a.lb(a, b, c, d, e);
    }
    var q;
    q = Gd[m(null == a ? null : a)];
    if (!q && (q = Gd._, !q)) {
      throw v("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.kb : a) {
      return a.kb(a, b, c, d);
    }
    var e;
    e = Gd[m(null == a ? null : a)];
    if (!e && (e = Gd._, !e)) {
      throw v("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.jb : a) {
      return a.jb(a, b, c);
    }
    var d;
    d = Gd[m(null == a ? null : a)];
    if (!d && (d = Gd._, !d)) {
      throw v("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.ib : a) {
      return a.ib(a, b);
    }
    var c;
    c = Gd[m(null == a ? null : a)];
    if (!c && (c = Gd._, !c)) {
      throw v("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.h = b;
  e.v = a;
  return e;
}();
function Hd(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.pb = c;
  this.$a = d;
  this.f = 2153938944;
  this.o = 16386;
}
g = Hd.prototype;
g.A = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.Ya = function(a, b, c) {
  a = G(this.$a);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f), k = O.b(h, 0, null), h = O.b(h, 1, null);
      h.h ? h.h(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = G(a)) {
        Eb(a) ? (d = $a(a), a = ab(a), k = d, e = ub(d), d = k) : (d = H(a), k = O.b(d, 0, null), h = O.b(d, 1, null), h.h ? h.h(k, this, b, c) : h.call(null, k, this, b, c), a = K(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  Cd(this.state, b, c);
  return D(b, "\x3e");
};
g.J = function() {
  return this.l;
};
g.bb = function() {
  return this.state;
};
g.u = function(a, b) {
  return this === b;
};
var Jd = function() {
  function a(a) {
    return new Hd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Ib(c) ? nc.a(vd, c) : c, e = P.a(d, Id), d = P.a(d, ka);
      return new Hd(a, d, e, null);
    }
    a.m = 1;
    a.i = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.g = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.i = c.i;
  b.d = a;
  b.g = c.g;
  return b;
}();
function Kd(a, b) {
  if (a instanceof Hd) {
    var c = a.pb;
    if (null != c && !r(c.d ? c.d(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + w.d(Ed.g(M([Xb(new hb(null, "validate", "validate", 1233162959, null), new hb(null, "new-value", "new-value", 972165309, null))], 0))));
    }
    c = a.state;
    a.state = b;
    null != a.$a && Ta(a, c, b);
    return b;
  }
  return Fd(a, b);
}
var Ld = function() {
  function a(a, b, c, d) {
    return a instanceof Hd ? Kd(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d)) : Gd.h(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Hd ? Kd(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Gd.b(a, b, c);
  }
  function c(a, b) {
    return a instanceof Hd ? Kd(a, b.d ? b.d(a.state) : b.call(null, a.state)) : Gd.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var x = null;
      4 < arguments.length && (x = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, d, e, f) {
      return a instanceof Hd ? Kd(a, nc.v(c, a.state, d, e, f)) : Gd.v(a, c, d, e, f);
    }
    a.m = 4;
    a.i = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.i = e.i;
  d.a = c;
  d.b = b;
  d.h = a;
  d.g = e.g;
  return d;
}(), Ob = function() {
  function a(a) {
    return(Math.random.s ? Math.random.s() : Math.random.call(null)) * a;
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
  c.s = b;
  c.d = a;
  return c;
}(), Pb = function(a) {
  return Math.floor.d ? Math.floor.d((Math.random.s ? Math.random.s() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.s ? Math.random.s() : Math.random.call(null)) * a);
};
var T = new R(null, "L", "L"), U = new R(null, "new-state", "new-state"), Md = new R(null, "done", "done"), ka = new R(null, "meta", "meta"), la = new R(null, "dup", "dup"), W = new R(null, "R", "R"), u = new R(null, "else", "else"), Id = new R(null, "validator", "validator"), gb = new R(null, "default", "default"), X = new R(null, "name", "name"), Y = new R(null, "new-color", "new-color"), Nd = new R(null, "orientation", "orientation"), Od = new R(null, "state", "state"), ha = new R(null, "flush-on-newline", 
"flush-on-newline"), ia = new R(null, "readably", "readably"), ma = new R(null, "print-length", "print-length"), Z = new R(null, "rotate", "rotate"), Pd = new R(null, "U", "U"), $ = new R(null, "N", "N");
var Qd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(!1) ? console.log(nc.a(w, a)) : null;
  }
  a.m = 0;
  a.i = function(a) {
    a = G(a);
    return b(a);
  };
  a.g = b;
  return a;
}(), Rd = Jd.d(0), Sd = Jd.d(Oc), Td = new S(null, 17, 5, Nc, [new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Z, T, Y, 1, U, 1], null), 1, new n(null, 3, [Z, T, Y, 1, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Z, W, Y, 1, U, 1], null), 1, new n(null, 3, [Z, $, Y, 0, U, 0], null)], null), X, "Fibonacci"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Z, W, Y, 1, U, 0], null), 1, new n(null, 3, [Z, T, Y, 0, U, 0], null)], null), 1, new n(null, 2, [0, new n(null, 
3, [Z, W, Y, 1, U, 0], null), 1, new n(null, 3, [Z, T, Y, 0, U, 0], null)], null), X, "Langton"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Z, W, Y, 1, U, 0], null), 1, new n(null, 3, [Z, W, Y, 1, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Z, $, Y, 0, U, 0], null), 1, new n(null, 3, [Z, $, Y, 0, U, 1], null)], null), X, "Chaotic 1"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Z, W, Y, 1, U, 1], null), 1, new n(null, 3, [Z, T, Y, 0, U, 1], null)], 
null), 1, new n(null, 2, [0, new n(null, 3, [Z, $, Y, 1, U, 0], null), 1, new n(null, 3, [Z, $, Y, 0, U, 0], null)], null), X, "Chaotic 2"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Z, T, Y, 1, U, 1], null), 1, new n(null, 3, [Z, T, Y, 0, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Z, W, Y, 1, U, 1], null), 1, new n(null, 3, [Z, T, Y, 0, U, 0], null)], null), X, "Chaotic 3"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Z, W, Y, 1, U, 1], null), 
1, new n(null, 3, [Z, W, Y, 0, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Z, $, Y, 1, U, 0], null), 1, new n(null, 3, [Z, $, Y, 1, U, 1], null)], null), X, "Chaotic 4"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, W, U, 1], null), 1, new n(null, 3, [Y, 1, Z, T, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, W, U, 1], null), 1, new n(null, 3, [Y, 0, Z, T, U, 0], null)], null), X, "Coral"], null), new n(null, 3, [0, new n(null, 2, [0, 
new n(null, 3, [Y, 1, Z, T, U, 0], null), 1, new n(null, 3, [Y, 1, Z, W, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, W, U, 0], null), 1, new n(null, 3, [Y, 0, Z, T, U, 1], null)], null), X, "Square 1"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, W, U, 1], null), 1, new n(null, 3, [Y, 0, Z, T, U, 0], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, $, U, 0], null), 1, new n(null, 3, [Y, 1, Z, Pd, U, 1], null)], null), X, "Square 2"], 
null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, $, U, 1], null), 1, new n(null, 3, [Y, 0, Z, Pd, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, W, U, 1], null), 1, new n(null, 3, [Y, 0, Z, $, U, 1], null)], null), X, "Counter 1"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, W, U, 1], null), 1, new n(null, 3, [Y, 0, Z, $, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, $, U, 0], null), 1, new n(null, 3, [Y, 
1, Z, T, U, 1], null)], null), X, "Counter 2"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, $, U, 1], null), 1, new n(null, 3, [Y, 1, Z, T, U, 0], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, W, U, 1], null), 1, new n(null, 3, [Y, 0, Z, $, U, 0], null)], null), X, "Spiral 1"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, T, U, 0], null), 1, new n(null, 3, [Y, 0, Z, W, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 
1, Z, W, U, 0], null), 1, new n(null, 3, [Y, 0, Z, T, U, 1], null)], null), X, "Spiral 2"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, Pd, U, 0], null), 1, new n(null, 3, [Y, 0, Z, $, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, T, U, 0], null), 1, new n(null, 3, [Y, 0, Z, W, U, 1], null)], null), X, "Spiral 3"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, $, U, 1], null), 1, new n(null, 3, [Y, 1, Z, Pd, U, 1], null)], null), 
1, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, T, U, 0], null), 1, new n(null, 3, [Y, 1, Z, $, U, 1], null)], null), X, "Ladder"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, W, U, 1], null), 1, new n(null, 3, [Y, 0, Z, T, U, 0], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, Pd, U, 1], null), 1, new n(null, 3, [Y, 0, Z, W, U, 0], null)], null), X, "Dixe"], null), new n(null, 3, [0, new n(null, 2, [0, new n(null, 3, [Y, 1, Z, T, U, 0], null), 1, new n(null, 
3, [Y, 0, Z, W, U, 1], null)], null), 1, new n(null, 2, [0, new n(null, 3, [Y, 0, Z, W, U, 0], null), 1, new n(null, 3, [Y, 1, Z, W, U, 0], null)], null), X, "Diamond"], null)], null);
function Ud(a, b, c) {
  return wc.b(a, b, function() {
    return c;
  });
}
function Vd(a, b, c) {
  Ld.a(Sd, function(d) {
    return Ud(d, new S(null, 2, 5, Nc, [a, b], null), c);
  });
}
function Wd(a, b) {
  var c = O.b(a, 0, null), d = O.b(a, 1, null);
  b.fillStyle = "rgb(200, 0, 0)";
  b.fillRect(4 * c, 4 * d, 4, 4);
}
function Xd(a, b) {
  var c = O.b(a, 0, null), d = O.b(a, 1, null), e = vc.a(Ga(Sd), new S(null, 2, 5, Nc, [c, d], null)), e = E.a(1, e) ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
  b.strokeStyle = e;
  b.fillStyle = e;
  b.fillRect(4 * c, 4 * d, 4, 4);
}
function Yd(a, b) {
  var c = function() {
    if (r(E.a ? E.a(T, a) : E.call(null, T, a))) {
      return-90;
    }
    if (r(E.a ? E.a(W, a) : E.call(null, W, a))) {
      return 90;
    }
    if (r(E.a ? E.a($, a) : E.call(null, $, a))) {
      return 0;
    }
    if (r(E.a ? E.a(Pd, a) : E.call(null, Pd, a))) {
      return 180;
    }
    throw Error("No matching clause: " + w.d(a));
  }() + b;
  return 360 <= c ? c - 360 : 0 > c ? c + 360 : u ? c : null;
}
function Zd(a, b, c) {
  var d = O.b(a, 0, null);
  a = O.b(a, 1, null);
  var e = Ib(b) ? nc.a(vd, b) : b;
  b = P.a(e, Nd);
  var e = P.a(e, Od), f = vc.a(Ga(Sd), new S(null, 2, 5, Nc, [d, a], null));
  c = vc.a(c, new S(null, 2, 5, Nc, [e, r(f) ? f : 0], null));
  f = Ib(c) ? nc.a(vd, c) : c;
  c = P.a(f, Z);
  e = P.a(f, U);
  f = P.a(f, Y);
  Vd(d, a, f);
  return new n(null, 2, [Od, e, Nd, Yd(c, b)], null);
}
function $d(a, b) {
  var c = Ib(a) ? nc.a(vd, a) : a, d = P.a(c, Nd), c = function() {
    if (r(E.a ? E.a(0, d) : E.call(null, 0, d))) {
      return new S(null, 2, 5, Nc, [0, -1], null);
    }
    if (r(E.a ? E.a(90, d) : E.call(null, 90, d))) {
      return new S(null, 2, 5, Nc, [1, 0], null);
    }
    if (r(E.a ? E.a(180, d) : E.call(null, 180, d))) {
      return new S(null, 2, 5, Nc, [0, 1], null);
    }
    if (r(E.a ? E.a(270, d) : E.call(null, 270, d))) {
      return new S(null, 2, 5, Nc, [-1, 0], null);
    }
    throw Error("No matching clause: " + w.d(d));
  }();
  return qc.b(Mb, b, c);
}
var be = function ae(b, c, d, e, f) {
  try {
    Xd(b, e);
    Ld.a(Rd, lb);
    var h = Zd(b, c, f), k = $d(h, b);
    return r(d.d ? d.d(k) : d.call(null, k)) ? (Wd(k, e), setTimeout(function(b, c) {
      return function() {
        return ae(c, b, d, e, f);
      };
    }(h, k), 40)) : Qd.g(M(["" + w.d(Md) + " old: " + w.d(b) + " new: " + w.d(k)], 0));
  } catch (l) {
    if (l instanceof RangeError) {
      return Qd.g(M(["Catched ", l], 0));
    }
    if (u) {
      throw l;
    }
    return null;
  }
};
function ce(a, b) {
  return function(c) {
    var d = O.b(c, 0, null);
    c = O.b(c, 1, null);
    return d <= a && c <= b && 0 <= d && 0 <= c;
  };
}
function de(a) {
  var b = document.getElementById(a), c = b.width / 4 | 0;
  a = b.height / 4 | 0;
  var b = b.getContext("2d"), d = ce(c, a), e = O.a(Td, Pb(ub(Td)));
  Qd.g(M(["Running pattern ", X.d(e)], 0));
  Kd(Sd, Pc(tc.a(a + 1, Pc(tc.a(c + 1, 0)))));
  var f = Pb(2), h = Pb(2), c = c / 2 | 0;
  a = a / 2 | 0;
  Vd(c, a, f);
  be(new S(null, 2, 5, Nc, [c, a], null), new n(null, 2, [Od, h, Nd, 0], null), d, b, e);
  return X.d(e);
}
var ee = ["langtons_ant", "core", "run"], fe = this;
ee[0] in fe || !fe.execScript || fe.execScript("var " + ee[0]);
for (var ge;ee.length && (ge = ee.shift());) {
  ee.length || void 0 === de ? fe = fe[ge] ? fe[ge] : fe[ge] = {} : fe[ge] = de;
}
;
})();

//# sourceMappingURL=langtons_ant.map