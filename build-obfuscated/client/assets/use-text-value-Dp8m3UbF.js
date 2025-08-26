const a48eW = a48b;
(function (a, b) {
    const eQ = a48b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(eQ(0x1ed)) / 0x1 + parseInt(eQ(0x286)) / 0x2 * (-parseInt(eQ(0x2af)) / 0x3) + parseInt(eQ(0x361)) / 0x4 * (-parseInt(eQ(0x21f)) / 0x5) + parseInt(eQ(0x2dd)) / 0x6 * (parseInt(eQ(0x2cd)) / 0x7) + -parseInt(eQ(0x27b)) / 0x8 + parseInt(eQ(0x2e9)) / 0x9 * (-parseInt(eQ(0x32e)) / 0xa) + -parseInt(eQ(0x324)) / 0xb * (-parseInt(eQ(0x331)) / 0xc);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (e) {
            c['push'](c['shift']());
        }
    }
}(a48a, 0x45cd9));
import {
    r as a48a4,
    z as a48a5,
    g as a48a6,
    A as a48a7,
    U as a48a8
} from './components-CmNGJ9Db.js';
import {
    n as a48a9,
    h as a48aa,
    f as a48ab,
    o as a48ac,
    g as a48ad,
    j as a48ae,
    l as a48af,
    i as a48ag,
    v as a48ah,
    x as a48ai,
    z as a48aj,
    B as a48ak,
    p as a48al,
    t as a48am,
    D as a48an,
    K as a48ao,
    y as a48ap,
    L as a48aq,
    T as a48ar
} from './use-resolve-button-type-D3wVu0_O.js';
import {
    A as a48as,
    h as a48at
} from './focus-management-egUUHrnq.js';
function a48au(c) {
    const eR = a48b, d = {};
    d[eR(0x205)] = 0x0, d[eR(0x306)] = 0x0;
    if (c === null)
        return d;
    let {
        width: f,
        height: g
    } = c[eR(0x234)]();
    const h = {};
    return h[eR(0x205)] = f, h[eR(0x306)] = g, h;
}
function a48av(b, c = !0x1) {
    const eS = a48b;
    let [d, f] = a48a4['useReducer'](() => ({}), {}), g = a48a4['useMemo'](() => a48au(b), [
            b,
            d
        ]);
    const h = {};
    return h['width'] = g['width'] + 'px', h[eS(0x306)] = g[eS(0x306)] + 'px', (a48a9(() => {
        const eT = eS;
        if (!b)
            return;
        let k = new ResizeObserver(f);
        return k[eT(0x2bd)](b), () => {
            const eU = eT;
            k[eU(0x1f7)]();
        };
    }, [b]), c ? h : g);
}
let a48aw = class extends Map {
    constructor(a) {
        const eV = a48b;
        super(), this[eV(0x311)] = a;
    }
    [a48eW(0x271)](a) {
        const eX = a48eW;
        let b = super[eX(0x271)](a);
        return b === void 0x0 && (b = this[eX(0x311)](a), this[eX(0x343)](a, b)), b;
    }
};
var a48ax = Object['defineProperty'], a48ay = (a, b, c) => b in a ? a48ax(a, b, {
        'enumerable': !0x0,
        'configurable': !0x0,
        'writable': !0x0,
        'value': c
    }) : a[b] = c, a48az = (a, b, c) => (a48ay(a, b + '', c), c), a48aA = (a, b, c) => {
        const eY = a48eW;
        if (!b[eY(0x2c9)](a))
            throw TypeError(eY(0x204) + c);
    }, a48aB = (a, b, c) => (a48aA(a, b, 'read\x20from\x20private\x20field'), c ? c[a48eW(0x367)](a) : b[a48eW(0x271)](a)), a48aC = (a, b, c) => {
        const eZ = a48eW;
        if (b[eZ(0x2c9)](a))
            throw TypeError(eZ(0x240));
        b instanceof WeakSet ? b[eZ(0x233)](a) : b[eZ(0x343)](a, c);
    }, a48aD = (a, b, c, d) => (a48aA(a, b, a48eW(0x22c)), b['set'](a, c), c), a48aE, a48aF, a48aG;
let a48aH = class {
    constructor(a) {
        const f0 = a48eW;
        a48aC(this, a48aE, {}), a48aC(this, a48aF, new a48aw(() => new Set())), a48aC(this, a48aG, new Set()), a48az(this, f0(0x29f), a48aa()), a48aD(this, a48aE, a);
    }
    [a48eW(0x1fa)]() {
        const f1 = a48eW;
        this[f1(0x29f)][f1(0x1fa)]();
    }
    get ['state']() {
        return a48aB(this, a48aE);
    }
    [a48eW(0x247)](a, b) {
        const f2 = a48eW;
        let c = {
            'selector': a,
            'callback': b,
            'current': a(a48aB(this, a48aE))
        };
        return a48aB(this, a48aG)[f2(0x233)](c), this[f2(0x29f)][f2(0x233)](() => {
            const f3 = f2;
            a48aB(this, a48aG)[f3(0x333)](c);
        });
    }
    ['on'](a, b) {
        const f4 = a48eW;
        return a48aB(this, a48aF)[f4(0x271)](a)['add'](b), this[f4(0x29f)][f4(0x233)](() => {
            const f5 = f4;
            a48aB(this, a48aF)[f5(0x271)](a)[f5(0x333)](b);
        });
    }
    [a48eW(0x2f4)](a) {
        const f6 = a48eW;
        let b = this[f6(0x347)](a48aB(this, a48aE), a);
        if (b !== a48aB(this, a48aE)) {
            a48aD(this, a48aE, b);
            for (let c of a48aB(this, a48aG)) {
                let d = c['selector'](a48aB(this, a48aE));
                a48aI(c[f6(0x2da)], d) || (c['current'] = d, c[f6(0x1fd)](d));
            }
            for (let e of a48aB(this, a48aF)['get'](a['type']))
                e(a48aB(this, a48aE), a);
        }
    }
};
a48aE = new WeakMap(), a48aF = new WeakMap(), a48aG = new WeakMap();
function a48aI(a, b) {
    const f7 = a48eW;
    return Object['is'](a, b) ? !0x0 : typeof a != 'object' || a === null || typeof b != 'object' || b === null ? !0x1 : Array[f7(0x349)](a) && Array[f7(0x349)](b) ? a['length'] !== b[f7(0x2fa)] ? !0x1 : a48aJ(a[Symbol[f7(0x320)]](), b[Symbol[f7(0x320)]]()) : a instanceof Map && b instanceof Map || a instanceof Set && b instanceof Set ? a[f7(0x267)] !== b[f7(0x267)] ? !0x1 : a48aJ(a[f7(0x208)](), b[f7(0x208)]()) : a48aK(a) && a48aK(b) ? a48aJ(Object['entries'](a)[Symbol[f7(0x320)]](), Object[f7(0x208)](b)[Symbol['iterator']]()) : !0x1;
}
function a48aJ(a, b) {
    const f8 = a48eW;
    do {
        let c = a[f8(0x315)](), d = b[f8(0x315)]();
        if (c[f8(0x24f)] && d[f8(0x24f)])
            return !0x0;
        if (c['done'] || d['done'] || !Object['is'](c[f8(0x26d)], d[f8(0x26d)]))
            return !0x1;
    } while (!0x0);
}
function a48aK(a) {
    const f9 = a48eW;
    if (Object[f9(0x2fe)][f9(0x26b)][f9(0x367)](a) !== f9(0x214))
        return !0x1;
    let b = Object['getPrototypeOf'](a);
    return b === null || Object[f9(0x2d6)](b) === null;
}
function a48aL(a) {
    let [b, c] = a(), d = a48aa();
    return (...f) => {
        const fa = a48b;
        b(...f), d[fa(0x1fa)](), d['microTask'](c);
    };
}
var a48aM = Object[a48eW(0x34a)], a48aN = (a, b, c) => b in a ? a48aM(a, b, {
        'enumerable': !0x0,
        'configurable': !0x0,
        'writable': !0x0,
        'value': c
    }) : a[b] = c, a48aO = (a, b, c) => (a48aN(a, typeof b != a48eW(0x201) ? b + '' : b, c), c), a48aP = (a => (a[a[a48eW(0x28b)] = 0x0] = a48eW(0x28b), a[a['Pop'] = 0x1] = a48eW(0x21d), a))(a48aP || {});
let a48aQ = {
        0x0(b, c) {
            const fb = a48eW;
            let d = c['id'], f = b[fb(0x34f)], g = b[fb(0x34f)]['indexOf'](d);
            if (g !== -0x1) {
                let k = b[fb(0x34f)][fb(0x313)]();
                return k[fb(0x2db)](g, 0x1), k[fb(0x2d7)](d), f = k, {
                    ...b,
                    'stack': f
                };
            }
            const h = { ...b };
            return h[fb(0x34f)] = [
                ...b['stack'],
                d
            ], h;
        },
        0x1(a, b) {
            const fc = a48eW;
            let c = b['id'], d = a[fc(0x34f)][fc(0x345)](c);
            if (d === -0x1)
                return a;
            let f = a[fc(0x34f)][fc(0x313)]();
            return f[fc(0x2db)](d, 0x1), {
                ...a,
                'stack': f
            };
        }
    }, a48aR = class a48eP extends a48aH {
        constructor() {
            const fd = a48eW;
            super(...arguments), a48aO(this, fd(0x336), {
                'push': a => this[fd(0x2f4)]({
                    'type': 0x0,
                    'id': a
                }),
                'pop': a => this[fd(0x2f4)]({
                    'type': 0x1,
                    'id': a
                })
            }), a48aO(this, 'selectors', {
                'isTop': (a, b) => a[fd(0x34f)][a[fd(0x34f)][fd(0x2fa)] - 0x1] === b,
                'inStack': (a, b) => a['stack'][fd(0x21a)](b)
            });
        }
        static [a48eW(0x325)]() {
            const ff = a48eW, b = {};
            return b[ff(0x34f)] = [], new a48eP(b);
        }
        [a48eW(0x347)](a, b) {
            const fg = a48eW;
            return a48ab(b[fg(0x363)], a48aQ, a, b);
        }
    };
const a48aS = new a48aw(() => a48aR[a48eW(0x325)]()), a48aT = {};
a48aT[a48eW(0x1e9)] = {};
var a48aU = a48aT, a48aV = {}, a48aW;
function a48aX() {
    const fh = a48eW;
    if (a48aW)
        return a48aV;
    a48aW = 0x1;
    var a = a48a5();
    function b(m, p) {
        return m === p && (m !== 0x0 || 0x1 / m === 0x1 / p) || m !== m && p !== p;
    }
    var c = typeof Object['is'] == fh(0x2ef) ? Object['is'] : b, d = a[fh(0x21c)], f = a[fh(0x2a7)], g = a[fh(0x272)], h = a['useMemo'], k = a['useDebugValue'];
    return a48aV['useSyncExternalStoreWithSelector'] = function (v, w, y, A, C) {
        const fi = fh;
        var D = f(null);
        if (D[fi(0x2da)] === null) {
            const H = {};
            H[fi(0x348)] = !0x1, H[fi(0x26d)] = null;
            var E = H;
            D[fi(0x2da)] = E;
        } else
            E = D['current'];
        D = h(function () {
            function I(T) {
                const fj = a48b;
                if (!N) {
                    if (N = !0x0, O = T, T = A(T), C !== void 0x0 && E[fj(0x348)]) {
                        var X = E['value'];
                        if (C(X, T))
                            return P = X;
                    }
                    return P = T;
                }
                if (X = P, c(O, T))
                    return X;
                var a0 = A(T);
                return C !== void 0x0 && C(X, a0) ? (O = T, X) : (O = T, P = a0);
            }
            var N = !0x1, O, P, S = y === void 0x0 ? null : y;
            return [
                function () {
                    return I(w());
                },
                S === null ? void 0x0 : function () {
                    return I(S());
                }
            ];
        }, [
            w,
            y,
            A,
            C
        ]);
        var F = d(v, D[0x0], D[0x1]);
        return g(function () {
            const fk = fi;
            E['hasValue'] = !0x0, E[fk(0x26d)] = F;
        }, [F]), k(F), F;
    }, a48aV;
}
var a48aY;
function a48aZ() {
    const fl = a48eW;
    return a48aY || (a48aY = 0x1, a48aU[fl(0x1e9)] = a48aX()), a48aU['exports'];
}
var a48b0 = a48aZ();
function a48b1(a, b, c = a48aI) {
    const fm = a48eW;
    return a48b0['useSyncExternalStoreWithSelector'](a48ac(d => a[fm(0x247)](a48b2, d)), a48ac(() => a[fm(0x27c)]), a48ac(() => a['state']), a48ac(b), c);
}
function a48b2(a) {
    return a;
}
function a48b3(a, b) {
    const fp = a48eW;
    let c = a48a4['useId'](), d = a48aS['get'](b), [f, g] = a48b1(d, a48a4[fp(0x329)](h => [
            d['selectors'][fp(0x30b)](h, c),
            d[fp(0x310)]['inStack'](h, c)
        ], [
            d,
            c
        ]));
    return a48a9(() => {
        const fq = fp;
        if (a)
            return d['actions'][fq(0x2d7)](c), () => d[fq(0x336)][fq(0x239)](c);
    }, [
        d,
        a,
        c
    ]), a ? g ? f : !0x0 : !0x1;
}
let a48b4 = new Map(), a48b5 = new Map();
function a48b6(a) {
    const fs = a48eW;
    var b;
    let c = (b = a48b5[fs(0x271)](a)) != null ? b : 0x0;
    return a48b5[fs(0x343)](a, c + 0x1), c !== 0x0 ? () => a48b7(a) : (a48b4['set'](a, {
        'aria-hidden': a[fs(0x2a5)](fs(0x259)),
        'inert': a['inert']
    }), a[fs(0x31a)]('aria-hidden', fs(0x2ec)), a[fs(0x28d)] = !0x0, () => a48b7(a));
}
function a48b7(a) {
    const fu = a48eW;
    var b;
    let c = (b = a48b5['get'](a)) != null ? b : 0x1;
    if (c === 0x1 ? a48b5[fu(0x333)](a) : a48b5['set'](a, c - 0x1), c !== 0x1)
        return;
    let d = a48b4[fu(0x271)](a);
    d && (d[fu(0x259)] === null ? a['removeAttribute']('aria-hidden') : a[fu(0x31a)](fu(0x259), d[fu(0x259)]), a[fu(0x28d)] = d['inert'], a48b4[fu(0x333)](a));
}
function a48b8(a, {
    allowed: b,
    disallowed: c
} = {}) {
    const fv = a48eW;
    let d = a48b3(a, fv(0x33f));
    a48a9(() => {
        const fw = fv;
        var g, h;
        if (!d)
            return;
        let k = a48aa();
        for (let v of (g = c == null ? void 0x0 : c()) != null ? g : [])
            v && k['add'](a48b6(v));
        let p = (h = b == null ? void 0x0 : b()) != null ? h : [];
        for (let w of p) {
            if (!w)
                continue;
            let y = a48ad(w);
            if (!y)
                continue;
            let A = w[fw(0x2e0)];
            for (; A && A !== y[fw(0x2ae)];) {
                for (let C of A[fw(0x35f)])
                    p['some'](D => C[fw(0x350)](D)) || k['add'](a48b6(C));
                A = A[fw(0x2e0)];
            }
        }
        return k[fw(0x1fa)];
    }, [
        d,
        b,
        c
    ]);
}
function a48b9(a, b, c) {
    let d = a48ae(f => {
        const fx = a48b;
        let g = f[fx(0x234)]();
        g['x'] === 0x0 && g['y'] === 0x0 && g['width'] === 0x0 && g[fx(0x306)] === 0x0 && c();
    });
    a48a4['useEffect'](() => {
        const fy = a48b;
        if (!a)
            return;
        let f = b === null ? null : a48af(b) ? b : b[fy(0x2da)];
        if (!f)
            return;
        let g = a48aa();
        if (typeof ResizeObserver < 'u') {
            let h = new ResizeObserver(() => d[fy(0x2da)](f));
            h['observe'](f), g['add'](() => h['disconnect']());
        }
        if (typeof IntersectionObserver < 'u') {
            let k = new IntersectionObserver(() => d[fy(0x2da)](f));
            k[fy(0x2bd)](f), g['add'](() => k['disconnect']());
        }
        return () => g[fy(0x1fa)]();
    }, [
        b,
        d,
        a
    ]);
}
function a48ba() {
    const fz = a48eW;
    return /iPhone/gi[fz(0x2b6)](window[fz(0x36e)][fz(0x241)]) || /Mac/gi[fz(0x2b6)](window['navigator'][fz(0x241)]) && window['navigator']['maxTouchPoints'] > 0x0;
}
function a48bb() {
    const fA = a48eW;
    return /Android/gi[fA(0x2b6)](window[fA(0x36e)][fA(0x2ad)]);
}
function a48bc() {
    return a48ba() || a48bb();
}
function a48bd(a, b, c, d) {
    const fB = a48eW;
    let f = a48ae(c);
    a48a4[fB(0x272)](() => {
        const fD = fB;
        if (!a)
            return;
        function g(h) {
            const fC = a48b;
            f[fC(0x2da)](h);
        }
        return document[fD(0x28e)](b, g, d), () => document[fD(0x2f8)](b, g, d);
    }, [
        a,
        b,
        d
    ]);
}
function a48be(a, b, c, d) {
    let f = a48ae(c);
    a48a4['useEffect'](() => {
        const fF = a48b;
        if (!a)
            return;
        function g(h) {
            const fE = a48b;
            f[fE(0x2da)](h);
        }
        return window[fF(0x28e)](b, g, d), () => window[fF(0x2f8)](b, g, d);
    }, [
        a,
        b,
        d
    ]);
}
const a48bf = 0x1e;
function a48bg(b, c, d) {
    const fG = a48eW;
    let f = a48ae(d), g = a48a4[fG(0x329)](function (p, v) {
            const fH = fG;
            if (p[fH(0x221)])
                return;
            let w = v(p);
            if (w === null || !w[fH(0x353)]()[fH(0x350)](w) || !w[fH(0x273)])
                return;
            let y = function A(C) {
                const fI = fH;
                return typeof C == 'function' ? A(C()) : Array[fI(0x349)](C) || C instanceof Set ? C : [C];
            }(c);
            for (let C of y)
                if (C !== null && (C[fH(0x350)](w) || p[fH(0x36d)] && p[fH(0x210)]()[fH(0x21a)](C)))
                    return;
            return !a48as(w, a48at['Loose']) && w[fH(0x265)] !== -0x1 && p[fH(0x2bb)](), f[fH(0x2da)](p, w);
        }, [
            f,
            c
        ]), h = a48a4[fG(0x2a7)](null);
    a48bd(b, fG(0x292), p => {
        const fJ = fG;
        var v, w;
        a48bc() || (h[fJ(0x2da)] = ((w = (v = p['composedPath']) == null ? void 0x0 : v['call'](p)) == null ? void 0x0 : w[0x0]) || p[fJ(0x1fc)]);
    }, !0x0), a48bd(b, fG(0x250), p => {
        const fK = fG;
        if (a48bc() || !h['current'])
            return;
        let v = h['current'];
        return h[fK(0x2da)] = null, g(p, () => v);
    }, !0x0);
    const k = {};
    k['x'] = 0x0, k['y'] = 0x0;
    let m = a48a4[fG(0x2a7)](k);
    a48bd(b, fG(0x25d), p => {
        const fL = fG;
        m[fL(0x2da)]['x'] = p[fL(0x2dc)][0x0][fL(0x269)], m[fL(0x2da)]['y'] = p[fL(0x2dc)][0x0][fL(0x215)];
    }, !0x0), a48bd(b, fG(0x2c4), p => {
        const fM = fG, v = {};
        v['x'] = p['changedTouches'][0x0][fM(0x269)], v['y'] = p['changedTouches'][0x0]['clientY'];
        let w = v;
        if (!(Math[fM(0x1e6)](w['x'] - m[fM(0x2da)]['x']) >= a48bf || Math[fM(0x1e6)](w['y'] - m[fM(0x2da)]['y']) >= a48bf))
            return g(p, () => a48ag(p[fM(0x1fc)]) ? p[fM(0x1fc)] : null);
    }, !0x0), a48be(b, fG(0x22f), p => g(p, () => a48ah(window[fG(0x236)]['activeElement']) ? window[fG(0x236)][fG(0x2ea)] : null), !0x0);
}
function a48bh(...a) {
    const fN = a48eW;
    return a48a4[fN(0x295)](() => a48ad(...a), [...a]);
}
var a48bi = (a => (a[a[a48eW(0x2d9)] = 0x0] = a48eW(0x2d9), a[a['Select'] = 0x1] = 'Select', a[a[a48eW(0x1ea)] = 0x2] = 'Close', a))(a48bi || {});
const a48bj = {};
a48bj[a48eW(0x280)] = 0x0;
const a48bk = {};
a48bk[a48eW(0x280)] = 0x2;
const a48bl = {};
function a48b(a, b) {
    const c = a48a();
    return a48b = function (d, e) {
        d = d - 0x1e6;
        let f = c[d];
        if (a48b['MgjJzg'] === undefined) {
            var g = function (l) {
                const m = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let n = '', o = '';
                for (let p = 0x0, q, r, s = 0x0; r = l['charAt'](s++); ~r && (q = p % 0x4 ? q * 0x40 + r : r, p++ % 0x4) ? n += String['fromCharCode'](0xff & q >> (-0x2 * p & 0x6)) : 0x0) {
                    r = m['indexOf'](r);
                }
                for (let t = 0x0, u = n['length']; t < u; t++) {
                    o += '%' + ('00' + n['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(o);
            };
            a48b['PZdzLj'] = g, a = arguments, a48b['MgjJzg'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a48b['PZdzLj'](f), a[i] = f) : f = j, f;
    }, a48b(a, b);
}
a48bl[a48eW(0x2d9)] = a48bj, a48bl[a48eW(0x29e)] = a => ({
    'kind': 0x1,
    'target': a
}), a48bl['Close'] = a48bk;
const a48bm = a48bl, a48bn = 0xc8;
function a48bo(b, {
    trigger: c,
    action: d,
    close: f,
    select: g
}) {
    const fO = a48eW;
    let h = a48a4[fO(0x2a7)](null);
    const k = {};
    k[fO(0x33d)] = !0x0, (a48bd(b && c !== null, fO(0x292), m => {
        const fP = fO;
        a48ai(m == null ? void 0x0 : m[fP(0x1fc)]) && c != null && c[fP(0x350)](m[fP(0x1fc)]) && (h[fP(0x2da)] = new Date());
    }), a48bd(b && c !== null, fO(0x250), m => {
        const fQ = fO;
        if (h[fQ(0x2da)] === null || !a48ag(m[fQ(0x1fc)]))
            return;
        let p = d(m), v = new Date()['getTime']() - h[fQ(0x2da)][fQ(0x2d8)]();
        switch (h['current'] = null, p[fQ(0x280)]) {
        case 0x0:
            return;
        case 0x1: {
                v > a48bn && (g(p[fQ(0x1fc)]), f());
                break;
            }
        case 0x2: {
                f();
                break;
            }
        }
    }, k));
}
function a48bp(a) {
    const fR = a48eW;
    return a48a4[fR(0x21c)](a[fR(0x247)], a['getSnapshot'], a[fR(0x23f)]);
}
function a48bq(a, b) {
    let c = a(), d = new Set();
    return {
        'getSnapshot'() {
            return c;
        },
        'subscribe'(f) {
            const fS = a48b;
            return d[fS(0x233)](f), () => d[fS(0x333)](f);
        },
        'dispatch'(f, ...g) {
            const fT = a48b;
            let h = b[f][fT(0x367)](c, ...g);
            h && (c = h, d[fT(0x362)](k => k()));
        }
    };
}
function a48br() {
    let a;
    return {
        'before'({doc: b}) {
            const fU = a48b;
            var c;
            let d = b[fU(0x2ac)], f = (c = b[fU(0x256)]) != null ? c : window;
            a = Math[fU(0x1fe)](0x0, f[fU(0x2de)] - d[fU(0x206)]);
        },
        'after'({
            doc: b,
            d: c
        }) {
            const fV = a48b;
            let d = b[fV(0x2ac)], f = Math['max'](0x0, d[fV(0x206)] - d[fV(0x35b)]), g = Math[fV(0x1fe)](0x0, a - f);
            c[fV(0x207)](d, 'paddingRight', g + 'px');
        }
    };
}
function a48bs() {
    return a48ba() ? {
        'before'({
            doc: a,
            d: b,
            meta: c
        }) {
            const fX = a48b;
            function d(f) {
                const fW = a48b;
                return c['containers']['flatMap'](g => g())[fW(0x1f3)](g => g[fW(0x350)](f));
            }
            b[fX(0x285)](() => {
                const fY = fX;
                var f;
                if (window[fY(0x2b1)](a[fY(0x2ac)])[fY(0x35d)] !== fY(0x20b)) {
                    let m = a48aa();
                    m[fY(0x207)](a[fY(0x2ac)], fY(0x35d), 'auto'), b[fY(0x233)](() => b[fY(0x285)](() => m[fY(0x1fa)]()));
                }
                let g = (f = window[fY(0x276)]) != null ? f : window['pageYOffset'], h = null;
                const k = {};
                k[fY(0x32d)] = !0x1, (b[fY(0x28e)](a, fY(0x351), p => {
                    const fZ = fY;
                    if (a48ag(p[fZ(0x1fc)]))
                        try {
                            let v = p['target']['closest']('a');
                            if (!v)
                                return;
                            let {hash: w} = new URL(v[fZ(0x364)]), y = a[fZ(0x1f5)](w);
                            a48ag(y) && !d(y) && (h = y);
                        } catch {
                        }
                }, !0x0), b['addEventListener'](a, fY(0x25d), p => {
                    const g0 = fY;
                    if (a48ag(p[g0(0x1fc)]) && a48aj(p[g0(0x1fc)])) {
                        if (d(p['target'])) {
                            let v = p[g0(0x1fc)];
                            for (; v[g0(0x2e0)] && d(v[g0(0x2e0)]);)
                                v = v[g0(0x2e0)];
                            b[g0(0x207)](v, 'overscrollBehavior', g0(0x2cf));
                        } else
                            b[g0(0x207)](p[g0(0x1fc)], g0(0x323), g0(0x365));
                    }
                }), b[fY(0x28e)](a, fY(0x322), p => {
                    const g1 = fY;
                    if (a48ag(p[g1(0x1fc)])) {
                        if (a48ak(p[g1(0x1fc)]))
                            return;
                        if (d(p[g1(0x1fc)])) {
                            let v = p['target'];
                            for (; v[g1(0x2e0)] && v['dataset'][g1(0x1fb)] !== '' && !(v['scrollHeight'] > v[g1(0x330)] || v[g1(0x2d4)] > v[g1(0x206)]);)
                                v = v[g1(0x2e0)];
                            v[g1(0x254)][g1(0x1fb)] === '' && p[g1(0x2bb)]();
                        } else
                            p[g1(0x2bb)]();
                    }
                }, k), b['add'](() => {
                    const g2 = fY;
                    var p;
                    let v = (p = window['scrollY']) != null ? p : window[g2(0x213)];
                    const w = {};
                    w[g2(0x2ce)] = g2(0x2a0), (g !== v && window[g2(0x2e3)](0x0, g), h && h[g2(0x273)] && (h[g2(0x2b7)](w), h = null));
                }));
            });
        }
    } : {};
}
function a48bt() {
    return {
        'before'({
            doc: a,
            d: b
        }) {
            const g3 = a48b;
            b[g3(0x207)](a[g3(0x2ac)], g3(0x2f0), g3(0x25f));
        }
    };
}
function a48bu(a) {
    const g4 = a48eW;
    let b = {};
    for (let c of a)
        Object[g4(0x2ff)](b, c(b));
    return b;
}
let a48bv = a48bq(() => new Map(), {
    'PUSH'(a, b) {
        const g5 = a48eW;
        var c;
        let d = (c = this[g5(0x271)](a)) != null ? c : {
            'doc': a,
            'count': 0x0,
            'd': a48aa(),
            'meta': new Set()
        };
        return d['count']++, d[g5(0x284)][g5(0x233)](b), this[g5(0x343)](a, d), this;
    },
    'POP'(a, b) {
        const g6 = a48eW;
        let c = this[g6(0x271)](a);
        return c && (c[g6(0x25c)]--, c[g6(0x284)][g6(0x333)](b)), this;
    },
    'SCROLL_PREVENT'({
        doc: a,
        d: b,
        meta: c
    }) {
        const g7 = a48eW;
        let d = {
                'doc': a,
                'd': b,
                'meta': a48bu(c)
            }, f = [
                a48bs(),
                a48br(),
                a48bt()
            ];
        f[g7(0x362)](({before: g}) => g == null ? void 0x0 : g(d)), f[g7(0x362)](({after: g}) => g == null ? void 0x0 : g(d));
    },
    'SCROLL_ALLOW'({d: a}) {
        a['dispose']();
    },
    'TEARDOWN'({doc: a}) {
        this['delete'](a);
    }
});
a48bv[a48eW(0x247)](() => {
    const g8 = a48eW;
    let a = a48bv['getSnapshot'](), b = new Map();
    for (let [c] of a)
        b[g8(0x343)](c, c[g8(0x2ac)][g8(0x207)]['overflow']);
    for (let d of a[g8(0x312)]()) {
        let f = b[g8(0x271)](d[g8(0x2a9)]) === g8(0x25f), g = d['count'] !== 0x0;
        (g && !f || !g && f) && a48bv[g8(0x24b)](d['count'] > 0x0 ? g8(0x24d) : 'SCROLL_ALLOW', d), d[g8(0x25c)] === 0x0 && a48bv['dispatch'](g8(0x26e), d);
    }
});
function a48bw(a, b, c = () => ({ 'containers': [] })) {
    const g9 = a48eW;
    let d = a48bp(a48bv), f = b ? d['get'](b) : void 0x0, g = f ? f[g9(0x25c)] > 0x0 : !0x1;
    return a48a9(() => {
        const ga = g9;
        if (!(!b || !a))
            return a48bv[ga(0x24b)](ga(0x33b), b, c), () => a48bv['dispatch'](ga(0x20f), b, c);
    }, [
        a,
        b
    ]), g;
}
function a48bx(a, b, c = () => [document['body']]) {
    let d = a48b3(a, 'scroll-lock');
    a48bw(d, b, f => {
        var g;
        const h = {};
        return h['containers'] = [
            ...(g = f['containers']) != null ? g : [],
            c
        ], h;
    });
}
function a48by(a) {
    const gb = a48eW;
    return [
        a['screenX'],
        a[gb(0x1f4)]
    ];
}
function a48bz() {
    const gc = a48eW;
    let a = a48a4[gc(0x2a7)]([
        -0x1,
        -0x1
    ]);
    return {
        'wasMoved'(b) {
            const gd = gc;
            let c = a48by(b);
            return a[gd(0x2da)][0x0] === c[0x0] && a['current'][0x1] === c[0x1] ? !0x1 : (a[gd(0x2da)] = c, !0x0);
        },
        'update'(b) {
            const gf = gc;
            a[gf(0x2da)] = a48by(b);
        }
    };
}
function a48bA(b = 0x0) {
    const gg = a48eW;
    let [c, d] = a48a4[gg(0x36a)](b), f = a48a4[gg(0x329)](v => d(v), [c]), g = a48a4[gg(0x329)](v => d(w => w | v), [c]), h = a48a4[gg(0x329)](v => (c & v) === v, [c]), k = a48a4[gg(0x329)](v => d(w => w & ~v), [d]), m = a48a4[gg(0x329)](v => d(w => w ^ v), [d]);
    const p = {};
    return p[gg(0x219)] = c, p[gg(0x223)] = f, p['addFlag'] = g, p[gg(0x266)] = h, p['removeFlag'] = k, p[gg(0x248)] = m, p;
}
var a48bB = {}, a48bC, a48bD;
typeof process < 'u' && typeof globalThis < 'u' && typeof Element < 'u' && ((a48bC = process == null ? void 0x0 : a48bB) == null ? void 0x0 : a48bC['NODE_ENV']) === a48eW(0x2b6) && typeof ((a48bD = Element == null ? void 0x0 : Element[a48eW(0x2fe)]) == null ? void 0x0 : a48bD['getAnimations']) > 'u' && (Element[a48eW(0x2fe)]['getAnimations'] = function () {
    const gh = a48eW;
    return console[gh(0x217)]([
        gh(0x22a),
        'Please\x20install\x20a\x20proper\x20polyfill\x20e.g.\x20`jsdom-testing-mocks`,\x20to\x20silence\x20these\x20warnings.',
        '',
        gh(0x2ee),
        gh(0x270),
        gh(0x35c),
        gh(0x279),
        gh(0x35a)
    ]['join']('\x0a')), [];
});
var a48bE = (a => (a[a[a48eW(0x222)] = 0x0] = a48eW(0x222), a[a[a48eW(0x242)] = 0x1] = a48eW(0x242), a[a[a48eW(0x22b)] = 0x2] = 'Enter', a[a[a48eW(0x202)] = 0x4] = a48eW(0x202), a))(a48bE || {});
function a48bF(a) {
    const gi = a48eW;
    let b = {};
    for (let c in a)
        a[c] === !0x0 && (b[gi(0x2f6) + c] = '');
    return b;
}
function a48bG(d, g, h, k) {
    const gj = a48eW;
    let [p, v] = a48a4[gj(0x36a)](h), {
            hasFlag: w,
            addFlag: y,
            removeFlag: A
        } = a48bA(d && p ? 0x3 : 0x0), C = a48a4[gj(0x2a7)](!0x1), D = a48a4[gj(0x2a7)](!0x1), E = a48al();
    const F = {};
    return F[gj(0x2e1)] = void 0x0, F[gj(0x28c)] = void 0x0, F['leave'] = void 0x0, F[gj(0x2fc)] = void 0x0, (a48a9(() => {
        const gk = gj;
        var H;
        if (d) {
            if (h && v(!0x0), !g) {
                h && y(0x3);
                return;
            }
            return (H = k == null ? void 0x0 : k['start']) == null || H[gk(0x367)](k, h), a48bH(g, {
                'inFlight': C,
                'prepare'() {
                    const gl = gk;
                    D[gl(0x2da)] ? D[gl(0x2da)] = !0x1 : D[gl(0x2da)] = C['current'], C[gl(0x2da)] = !0x0, !D[gl(0x2da)] && (h ? (y(0x3), A(0x4)) : (y(0x4), A(0x2)));
                },
                'run'() {
                    const gm = gk;
                    D[gm(0x2da)] ? h ? (A(0x3), y(0x4)) : (A(0x4), y(0x3)) : h ? A(0x1) : y(0x1);
                },
                'done'() {
                    const gp = gk;
                    var I;
                    D[gp(0x2da)] && typeof g[gp(0x268)] == gp(0x2ef) && g['getAnimations']()[gp(0x2fa)] > 0x0 || (C[gp(0x2da)] = !0x1, A(0x7), h || v(!0x1), (I = k == null ? void 0x0 : k[gp(0x1f9)]) == null || I[gp(0x367)](k, h));
                }
            });
        }
    }, [
        d,
        h,
        g,
        E
    ]), d ? [
        p,
        {
            'closed': w(0x1),
            'enter': w(0x2),
            'leave': w(0x4),
            'transition': w(0x2) || w(0x4)
        }
    ] : [
        h,
        F
    ]);
}
function a48bH(b, {
    prepare: c,
    run: d,
    done: f,
    inFlight: g
}) {
    const gq = a48eW;
    let h = a48aa();
    const k = {};
    return k['prepare'] = c, k[gq(0x303)] = g, (a48bJ(b, k), h['nextFrame'](() => {
        const gs = gq;
        d(), h[gs(0x2cc)](() => {
            h['add'](a48bI(b, f));
        });
    }), h[gq(0x1fa)]);
}
function a48bI(a, b) {
    const gu = a48eW;
    var c, d;
    let f = a48aa();
    if (!a)
        return f[gu(0x1fa)];
    let g = !0x1;
    f['add'](() => {
        g = !0x0;
    });
    let h = (d = (c = a[gu(0x268)]) == null ? void 0x0 : c[gu(0x367)](a)[gu(0x337)](k => k instanceof CSSTransition)) != null ? d : [];
    return h['length'] === 0x0 ? (b(), f[gu(0x1fa)]) : (Promise[gu(0x2c8)](h['map'](k => k[gu(0x33c)]))[gu(0x2ca)](() => {
        g || b();
    }), f[gu(0x1fa)]);
}
function a48bJ(a, {
    inFlight: b,
    prepare: c
}) {
    const gv = a48eW;
    if (b != null && b[gv(0x2da)]) {
        c();
        return;
    }
    let d = a[gv(0x207)][gv(0x2fc)];
    a[gv(0x207)][gv(0x2fc)] = gv(0x365), c(), a[gv(0x2c3)], a[gv(0x207)][gv(0x2fc)] = d;
}
function a48bK() {
    return typeof window < 'u';
}
function a48bL(a) {
    const gw = a48eW;
    return a48bO(a) ? (a['nodeName'] || '')[gw(0x2c0)]() : gw(0x20c);
}
function a48bM(a) {
    const gx = a48eW;
    var b;
    return (a == null || (b = a[gx(0x23a)]) == null ? void 0x0 : b[gx(0x256)]) || window;
}
function a48bN(a) {
    const gy = a48eW;
    var b;
    return (b = (a48bO(a) ? a[gy(0x23a)] : a['document']) || window[gy(0x236)]) == null ? void 0x0 : b[gy(0x2ac)];
}
function a48bO(a) {
    const gz = a48eW;
    return a48bK() ? a instanceof Node || a instanceof a48bM(a)[gz(0x321)] : !0x1;
}
function a48bP(a) {
    const gA = a48eW;
    return a48bK() ? a instanceof Element || a instanceof a48bM(a)[gA(0x229)] : !0x1;
}
function a48bQ(a) {
    const gB = a48eW;
    return a48bK() ? a instanceof HTMLElement || a instanceof a48bM(a)[gB(0x232)] : !0x1;
}
function a48bR(a) {
    const gC = a48eW;
    return !a48bK() || typeof ShadowRoot > 'u' ? !0x1 : a instanceof ShadowRoot || a instanceof a48bM(a)[gC(0x261)];
}
const a48bS = new Set([
    a48eW(0x263),
    a48eW(0x2c6)
]);
function a48bT(a) {
    const gD = a48eW, {
            overflow: b,
            overflowX: c,
            overflowY: d,
            display: f
        } = a48c6(a);
    return /auto|scroll|overlay|hidden|clip/[gD(0x2b6)](b + d + c) && !a48bS[gD(0x2c9)](f);
}
const a48bU = new Set([
    a48eW(0x366),
    'td',
    'th'
]);
function a48bV(a) {
    return a48bU['has'](a48bL(a));
}
const a48bW = [
    ':popover-open',
    a48eW(0x22e)
];
function a48bX(a) {
    const gE = a48eW;
    return a48bW[gE(0x1f3)](b => {
        const gF = gE;
        try {
            return a[gF(0x1ff)](b);
        } catch {
            return !0x1;
        }
    });
}
const a48bY = [
        'transform',
        'translate',
        a48eW(0x203),
        'rotate',
        a48eW(0x2bf)
    ], a48bZ = [
        a48eW(0x23d),
        'translate',
        a48eW(0x203),
        a48eW(0x334),
        a48eW(0x2bf),
        'filter'
    ], a48c0 = [
        a48eW(0x24e),
        a48eW(0x2b0),
        a48eW(0x2b3),
        a48eW(0x30c)
    ];
function a48c1(a) {
    const gG = a48eW, b = a48c3(), c = a48bP(a) ? a48c6(a) : a;
    return a48bY[gG(0x1f3)](d => c[d] ? c[d] !== gG(0x365) : !0x1) || (c['containerType'] ? c[gG(0x32f)] !== 'normal' : !0x1) || !b && (c[gG(0x332)] ? c['backdropFilter'] !== gG(0x365) : !0x1) || !b && (c[gG(0x337)] ? c[gG(0x337)] !== gG(0x365) : !0x1) || a48bZ[gG(0x1f3)](d => (c[gG(0x297)] || '')[gG(0x21a)](d)) || a48c0[gG(0x1f3)](d => (c[gG(0x2cf)] || '')[gG(0x21a)](d));
}
function a48c2(a) {
    let b = a48c8(a);
    for (; a48bQ(b) && !a48c5(b);) {
        if (a48c1(b))
            return b;
        if (a48bX(b))
            return null;
        b = a48c8(b);
    }
    return null;
}
function a48c3() {
    const gH = a48eW;
    return typeof CSS > 'u' || !CSS[gH(0x29c)] ? !0x1 : CSS[gH(0x29c)](gH(0x281), gH(0x365));
}
const a48c4 = new Set([
    'html',
    a48eW(0x2ae),
    a48eW(0x20c)
]);
function a48c5(a) {
    const gI = a48eW;
    return a48c4[gI(0x2c9)](a48bL(a));
}
function a48c6(a) {
    return a48bM(a)['getComputedStyle'](a);
}
function a48c7(a) {
    const gJ = a48eW;
    return a48bP(a) ? {
        'scrollLeft': a[gJ(0x230)],
        'scrollTop': a[gJ(0x369)]
    } : {
        'scrollLeft': a[gJ(0x1f0)],
        'scrollTop': a[gJ(0x276)]
    };
}
function a48c8(a) {
    const gK = a48eW;
    if (a48bL(a) === gK(0x252))
        return a;
    const b = a[gK(0x2d3)] || a[gK(0x2a4)] || a48bR(a) && a['host'] || a48bN(a);
    return a48bR(b) ? b[gK(0x264)] : b;
}
function a48c9(a) {
    const gL = a48eW, b = a48c8(a);
    return a48c5(b) ? a[gL(0x23a)] ? a[gL(0x23a)][gL(0x2ae)] : a[gL(0x2ae)] : a48bQ(b) && a48bT(b) ? b : a48c9(b);
}
function a48ca(a, b, c) {
    const gM = a48eW;
    var d;
    b === void 0x0 && (b = []), c === void 0x0 && (c = !0x0);
    const f = a48c9(a), g = f === ((d = a['ownerDocument']) == null ? void 0x0 : d[gM(0x2ae)]), h = a48bM(f);
    if (g) {
        const k = a48cb(h);
        return b[gM(0x23c)](h, h[gM(0x36b)] || [], a48bT(f) ? f : [], k && c ? a48ca(k) : []);
    }
    return b['concat'](f, a48ca(f, [], c));
}
function a48cb(a) {
    const gN = a48eW;
    return a[gN(0x249)] && Object['getPrototypeOf'](a[gN(0x249)]) ? a[gN(0x27a)] : null;
}
function a48cc() {
    const gO = a48eW, a = navigator[gO(0x2b4)];
    return a && Array[gO(0x349)](a[gO(0x328)]) ? a[gO(0x328)][gO(0x293)](b => {
        let {
            brand: c,
            version: d
        } = b;
        return c + '/' + d;
    })[gO(0x358)]('\x20') : navigator[gO(0x2ad)];
}
const a48cd = {};
a48cd[a48eW(0x319)] = 'right', a48cd[a48eW(0x2d2)] = a48eW(0x319), a48cd[a48eW(0x211)] = a48eW(0x21b), a48cd[a48eW(0x21b)] = a48eW(0x211);
const a48ce = {};
a48ce[a48eW(0x301)] = a48eW(0x1f9), a48ce['end'] = a48eW(0x301);
const a48cf = Math[a48eW(0x1f1)], a48cg = Math[a48eW(0x1fe)], a48ch = Math[a48eW(0x257)], a48ci = Math[a48eW(0x2fb)], a48cj = a => ({
        'x': a,
        'y': a
    }), a48ck = a48cd, a48cl = a48ce;
function a48cm(a, b, c) {
    return a48cg(a, a48cf(b, c));
}
function a48cn(a, b) {
    const gP = a48eW;
    return typeof a == gP(0x2ef) ? a(b) : a;
}
function a48co(a) {
    const gQ = a48eW;
    return a[gQ(0x302)]('-')[0x0];
}
function a48cp(a) {
    const gR = a48eW;
    return a[gR(0x302)]('-')[0x1];
}
function a48cq(a) {
    return a === 'x' ? 'y' : 'x';
}
function a48cr(a) {
    const gS = a48eW;
    return a === 'y' ? 'height' : gS(0x205);
}
const a48cs = new Set([
    a48eW(0x21b),
    a48eW(0x211)
]);
function a48ct(a) {
    const gT = a48eW;
    return a48cs[gT(0x2c9)](a48co(a)) ? 'y' : 'x';
}
function a48cu(a) {
    return a48cq(a48ct(a));
}
function a48cv(a, b, c) {
    const gU = a48eW;
    c === void 0x0 && (c = !0x1);
    const d = a48cp(a), f = a48cu(a), g = a48cr(f);
    let h = f === 'x' ? d === (c ? gU(0x1f9) : gU(0x301)) ? gU(0x2d2) : gU(0x319) : d === gU(0x301) ? 'bottom' : gU(0x21b);
    return b[gU(0x278)][g] > b[gU(0x29d)][g] && (h = a48cE(h)), [
        h,
        a48cE(h)
    ];
}
function a48cw(a) {
    const b = a48cE(a);
    return [
        a48cx(a),
        b,
        a48cx(b)
    ];
}
function a48cx(a) {
    const gV = a48eW;
    return a[gV(0x2cb)](/start|end/g, b => a48cl[b]);
}
const a48cy = [
        a48eW(0x319),
        a48eW(0x2d2)
    ], a48cz = [
        a48eW(0x2d2),
        a48eW(0x319)
    ], a48cA = [
        a48eW(0x21b),
        a48eW(0x211)
    ], a48cB = [
        'bottom',
        a48eW(0x21b)
    ];
function a48cC(a, b, c) {
    const gW = a48eW;
    switch (a) {
    case gW(0x21b):
    case gW(0x211):
        return c ? b ? a48cz : a48cy : b ? a48cy : a48cz;
    case gW(0x319):
    case gW(0x2d2):
        return b ? a48cA : a48cB;
    default:
        return [];
    }
}
function a48cD(a, b, c, d) {
    const gX = a48eW, f = a48cp(a);
    let g = a48cC(a48co(a), c === 'start', d);
    return f && (g = g[gX(0x293)](h => h + '-' + f), b && (g = g[gX(0x23c)](g[gX(0x293)](a48cx)))), g;
}
function a48cE(a) {
    const gY = a48eW;
    return a[gY(0x2cb)](/left|right|bottom|top/g, b => a48ck[b]);
}
function a48cF(b) {
    const c = {
        'top': 0x0,
        'right': 0x0,
        'bottom': 0x0,
        'left': 0x0,
        ...b
    };
    return c;
}
function a48cG(a) {
    const gZ = a48eW;
    return typeof a != gZ(0x1ec) ? a48cF(a) : {
        'top': a,
        'right': a,
        'bottom': a,
        'left': a
    };
}
function a48cH(b) {
    const h0 = a48eW, {
            x: c,
            y: d,
            width: f,
            height: g
        } = b, h = {};
    return h[h0(0x205)] = f, h[h0(0x306)] = g, h['top'] = d, h[h0(0x319)] = c, h[h0(0x2d2)] = c + f, h['bottom'] = d + g, h['x'] = c, h['y'] = d, h;
}
function a48cI(w, y, A) {
    const h1 = a48eW;
    let {
        reference: C,
        floating: D
    } = w;
    const E = a48ct(y), F = a48cu(y), H = a48cr(F), I = a48co(y), N = E === 'y', O = C['x'] + C[h1(0x205)] / 0x2 - D['width'] / 0x2, P = C['y'] + C[h1(0x306)] / 0x2 - D[h1(0x306)] / 0x2, R = C[H] / 0x2 - D[H] / 0x2;
    let S;
    switch (I) {
    case h1(0x21b):
        const T = {};
        T['x'] = O, T['y'] = C['y'] - D[h1(0x306)], S = T;
        break;
    case h1(0x211):
        const X = {};
        X['x'] = O, X['y'] = C['y'] + C['height'], S = X;
        break;
    case h1(0x2d2):
        const a0 = {};
        a0['x'] = C['x'] + C[h1(0x205)], a0['y'] = P, S = a0;
        break;
    case h1(0x319):
        const a1 = {};
        a1['x'] = C['x'] - D[h1(0x205)], a1['y'] = P, S = a1;
        break;
    default:
        const a2 = {};
        a2['x'] = C['x'], a2['y'] = C['y'], S = a2;
    }
    switch (a48cp(y)) {
    case h1(0x301):
        S[F] -= R * (A && N ? -0x1 : 0x1);
        break;
    case 'end':
        S[F] += R * (A && N ? -0x1 : 0x1);
        break;
    }
    return S;
}
const a48cJ = async (F, H, I) => {
    const h2 = a48eW, {
            placement: N = h2(0x211),
            strategy: O = h2(0x342),
            middleware: P = [],
            platform: S
        } = I, T = P['filter'](Boolean), X = await (S[h2(0x287)] == null ? void 0x0 : S[h2(0x287)](H)), a0 = {};
    a0[h2(0x278)] = F, a0['floating'] = H, a0[h2(0x340)] = O;
    let a1 = await S[h2(0x32b)](a0), {
            x: a2,
            y: a3
        } = a48cI(a1, N, X), a4 = N, a5 = {}, a6 = 0x0;
    for (let a8 = 0x0; a8 < T[h2(0x2fa)]; a8++) {
        const a9 = {};
        a9[h2(0x278)] = F, a9[h2(0x29d)] = H;
        const aa = {};
        aa['x'] = a2, aa['y'] = a3, aa[h2(0x2eb)] = N, aa[h2(0x2c1)] = a4, aa['strategy'] = O, aa[h2(0x31b)] = a5, aa[h2(0x231)] = a1, aa['platform'] = S, aa[h2(0x360)] = a9;
        const {
                name: ab,
                fn: ac
            } = T[a8], {
                x: ad,
                y: af,
                data: ag,
                reset: ah
            } = await ac(aa), aj = {};
        aj[h2(0x278)] = F, aj[h2(0x29d)] = H, aj[h2(0x340)] = O, (a2 = ad ?? a2, a3 = af ?? a3, a5 = {
            ...a5,
            [ab]: {
                ...a5[ab],
                ...ag
            }
        }, ah && a6 <= 0x32 && (a6++, typeof ah == 'object' && (ah['placement'] && (a4 = ah[h2(0x2c1)]), ah[h2(0x231)] && (a1 = ah[h2(0x231)] === !0x0 ? await S[h2(0x32b)](aj) : ah[h2(0x231)]), {
            x: a2,
            y: a3
        } = a48cI(a1, a4, X)), a8 = -0x1));
    }
    const a7 = {};
    return a7['x'] = a2, a7['y'] = a3, a7[h2(0x2c1)] = a4, a7[h2(0x340)] = O, a7[h2(0x31b)] = a5, a7;
};
async function a48cK(C, D) {
    const h3 = a48eW;
    var E;
    D === void 0x0 && (D = {});
    const F = {};
    F['x'] = 0x1, F['y'] = 0x1;
    const H = {};
    H['x'] = 0x1, H['y'] = 0x1;
    const {
            x: I,
            y: N,
            platform: O,
            rects: P,
            elements: S,
            strategy: T
        } = C, {
            boundary: X = h3(0x309),
            rootBoundary: a0 = h3(0x356),
            elementContext: a1 = h3(0x29d),
            altBoundary: a2 = !0x1,
            padding: a3 = 0x0
        } = a48cn(D, C), a4 = a48cG(a3), a5 = S[a2 ? a1 === 'floating' ? h3(0x278) : 'floating' : a1], a6 = a48cH(await O[h3(0x2a2)]({
            'element': (E = await (O[h3(0x31e)] == null ? void 0x0 : O[h3(0x31e)](a5))) == null || E ? a5 : a5['contextElement'] || await (O[h3(0x291)] == null ? void 0x0 : O['getDocumentElement'](S[h3(0x29d)])),
            'boundary': X,
            'rootBoundary': a0,
            'strategy': T
        })), a7 = a1 === h3(0x29d) ? {
            'x': I,
            'y': N,
            'width': P['floating']['width'],
            'height': P[h3(0x29d)][h3(0x306)]
        } : P[h3(0x278)], a8 = await (O[h3(0x2aa)] == null ? void 0x0 : O[h3(0x2aa)](S['floating'])), a9 = await (O[h3(0x31e)] == null ? void 0x0 : O[h3(0x31e)](a8)) ? await (O['getScale'] == null ? void 0x0 : O[h3(0x216)](a8)) || F : H, aa = a48cH(O[h3(0x245)] ? await O['convertOffsetParentRelativeRectToViewportRelativeRect']({
            'elements': S,
            'rect': a7,
            'offsetParent': a8,
            'strategy': T
        }) : a7), ab = {};
    return ab[h3(0x21b)] = (a6['top'] - aa['top'] + a4['top']) / a9['y'], ab[h3(0x211)] = (aa[h3(0x211)] - a6[h3(0x211)] + a4[h3(0x211)]) / a9['y'], ab[h3(0x319)] = (a6[h3(0x319)] - aa[h3(0x319)] + a4['left']) / a9['x'], ab[h3(0x2d2)] = (aa[h3(0x2d2)] - a6[h3(0x2d2)] + a4[h3(0x2d2)]) / a9['x'], ab;
}
function a48a() {
    const jx = [
        'zxzLCNK',
        'CMvMzxjLBMnL',
        'Bw9JA0fUAw1HDgLVBNnbCgKOkq',
        'zNjHBwvfBgvTzw50',
        'mZK4ntqWoen0CwX4wq',
        'C3rHDgu',
        'uhjLDMLVDxm',
        'tMv4Da',
        'D2HLzwW',
        'A2LUza',
        'lxDLyMTPDc1IywnRzhjVCc1MAwX0zxi',
        'rNjHz21LBNq',
        'Aw50zxjZzwn0Aw9UuMf0Aw8',
        'Bwv0yq',
        'BwLJCM9uyxnR',
        'oda5mK5OwfnrqW',
        'AxnsveW',
        'DxnLswq',
        'BMfTzq',
        'C2XVDa',
        'uhvZAa',
        'zw50zxi',
        'Aw5LCNq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'x293BMvY',
        'C3rYAw5N',
        'z2v0rg9JDw1LBNrfBgvTzw50',
        'Cg9PBNrLCMrVD24',
        'BwfW',
        'Axntzxj2zxi',
        'DxnLtwvTBW',
        'zgvMyxvSDfrHzW',
        'D2LSBenOyw5Nzq',
        'CgfKzgLUz0XLzNq',
        'AgvHzgXLC3n1As1WB3j0ywWTCM9VDa',
        'yMvZDezPDa',
        'yxr0CMLIDxrLCW',
        'C3vWCg9YDhm',
        'zMXVyxrPBMC',
        'u2vSzwn0',
        'zgLZCg9ZywjSzxm',
        'BMvHCMvZDa',
        'C2nYB2XSsgvPz2H0',
        'z2v0q2XPChbPBMDszwn0',
        'zgf0ys1OzwfKBgvZC3vPlxbVCNrHBa',
        'CgfYzw50tM9Kzq',
        'z2v0qxr0CMLIDxrL',
        'B3zLCMzSB3DZ',
        'DxnLuMvM',
        'CgfKzgLUzW',
        'zg9J',
        'z2v0t2zMC2v0ugfYzw50',
        'y29UDgv4DevSzw1LBNq',
        'zg9JDw1LBNrfBgvTzw50',
        'DxnLCKfNzw50',
        'yM9KEq',
        'odfAveHACMO',
        'Bgf5B3v0',
        'z2v0q29TChv0zwrtDhLSzq',
        'zgf0ys1MBg9HDgLUzY11As1MB2n1C2fIBgu',
        'C3rYAwn0',
        'DxnLCKfNzw50rgf0yq',
        'zMX1C2HtEw5J',
        'DgvZDa',
        'C2nYB2XSsw50B1zPzxC',
        'ug9YDgfS',
        'q2XVC2LUzW',
        'zgL2',
        'ChjLDMvUDerLzMf1Bhq',
        'CM9VDa',
        'B2jZzxj2zq',
        'z2v0q2XPzw50uMvJDhm',
        'CgvYC3bLy3rPDMu',
        'Dg9mB3DLCKnHC2u',
        'CgXHy2vTzw50',
        'zxHLyW',
        'B2zMC2v0sgvPz2H0',
        'Dg91y2HLBMq',
        'CMvNAxn0zxi',
        'y29UDgvUDhm',
        'zML4zwq',
        'ywXSu2v0DgXLza',
        'AgfZ',
        'DgHLBG',
        'CMvWBgfJzq',
        'CMvXDwvZDefUAw1HDgLVBKzYyw1L',
        'ndLxCefmzMy',
        'yMXVy2S',
        'y29UDgfPBG',
        'DxnLq29UDgv4Da',
        'y2XPzw50tgvMDa',
        'CMLNAhq',
        'yxnZAwDUzwrtBg90',
        'C2nYB2XSv2LKDgG',
        'CMvZB2X2zuLK',
        'z2v0uhjVDg90ExbLt2y',
        'ChvZAa',
        'z2v0vgLTzq',
        'swDUB3jL',
        'y3vYCMvUDa',
        'C3bSAwnL',
        'Dg91y2HLCW',
        'nda5mJz4uLftCNG',
        'Aw5UzxjxAwr0Aa',
        'rMXVyxrPBMDdB250zxH0',
        'CgfYzw50rwXLBwvUDa',
        'y2XVC2vK',
        'ywXPz25Tzw50t2zMC2v0',
        'C2nYB2XSvg8',
        'CMvZB2X2zurPC2fIBgvK',
        'AxnqB3nPDgLVBMvK',
        'y2HPBgroB2rLCW',
        'B3v0zxjive1m',
        'tgfZDa',
        'nJCZmJLUrNH1yK0',
        'ywn0AxzLrwXLBwvUDa',
        'Aw5PDgLHBfbSywnLBwvUDa',
        'Dhj1zq',
        'ywn0AxzL',
        'rxHHBxbSzsb1C2fNztO',
        'zNvUy3rPB24',
        'B3zLCMzSB3C',
        'yxzHAwXHyMXLv2LKDgG',
        'CgfKzgLUz1rVCa',
        'zgv2AwnLugL4zwXsyxrPBW',
        'C2vUza',
        'B25dAgfUz2u',
        'zgf0ys0',
        'Aw5UzxjuzxH0',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        'y2vPBa',
        'BgvUz3rO',
        'zMXVB3i',
        'DhjHBNnPDgLVBG',
        'yxjYB3C',
        'ChjVDg90ExbL',
        'yxnZAwDU',
        'CNrS',
        'C3rHCNq',
        'C3bSAxq',
        'Aw5gBgLNAhq',
        'BwfPBKf4Axm',
        'zMXVyxrPBMCTDwKT',
        'AgvPz2H0',
        'z2fW',
        'y3jVC3nbEgLZ',
        'y2XPChbPBMDbBMnLC3rVCNm',
        'rMLYC3q',
        'AxnuB3a',
        'y29UDgvUDa',
        'y29UDgv4Da',
        'Aw1WB3j0yw50',
        'C2v0uMvMzxjLBMnL',
        'C2vSzwn0B3jZ',
        'zMfJDg9YEq',
        'DMfSDwvZ',
        'C2XPy2u',
        'yxjPys1SywjLBgXLzgj5',
        'BMv4Da',
        'Dw5YzwDPC3rLCG',
        'zgLYzwn0Aw9U',
        'Aw5Uzxi',
        'BgvMDa',
        'C2v0qxr0CMLIDxrL',
        'BwLKzgXLD2fYzurHDge',
        'CMvTB3zLq2HPBgq',
        'C2HPzNq',
        'AxnfBgvTzw50',
        'CMvMCW',
        'AxrLCMf0B3i',
        'tM9Kzq',
        'Dg91y2HTB3zL',
        'Dg91y2Hby3rPB24',
        'mJGXmZa3nhDMz1DTzW',
        'BMv3',
        'zg9TuMvMzxjLBMnL',
        'CMvZB2X2zufJDgL2zuLUzgv4',
        'yNjHBMrZ',
        'DxnLq2fSBgjHy2S',
        'B2zMC2v0',
        'z2v0rwXLBwvUDfjLy3rZ',
        'CMvZB2X2zuL0zw1Z',
        'CgfZC2L2zq',
        'nJCWrKXYCMff',
        'y29UDgfPBMvYvhLWzq',
        'y2XPzw50sgvPz2H0',
        'odrHCMDXBwO',
        'yMfJA2rYB3bgAwX0zxi',
        'zgvSzxrL',
        'CM90yxrL',
        'AgfZt3DUuhjVCgvYDhK',
        'ywn0Aw9UCW',
        'zMLSDgvY',
        'z2v0uhjVCgvYDhLwywX1zq',
        'zMXPCa',
        'jcr0ExbLB2y',
        'ufvtsa',
        'zMLUAxnOzwq',
        'y2fWDhvYzq',
        'yxbWzw5Kq2HPBgq',
        'Aw5LCNqTB3rOzxjZ',
        'C3rYyxrLz3K',
        'CMvTB3zL',
        'ywjZB2X1Dgu',
        'C2v0',
        'z2v0uMvMzxjLBMnLuhjVChm',
        'Aw5KzxHpzG',
        'DgHLAxjqCM9WCW',
        'CMvKDwnL',
        'AgfZvMfSDwu',
        'AxnbCNjHEq',
        'zgvMAw5LuhjVCgvYDhK',
        'zNjVBq',
        'BwfYz2LUvg9W',
        'Axniyw5KB2zMq29TCgXLDgu',
        'ChGSia',
        'C3rHy2S',
        'y29UDgfPBNm',
        'y2XPy2S',
        'BMv4DezYyw1L',
        'z2v0uM9VDe5Vzgu',
        'zM9JDxm',
        'ugXHy2vTzw50q29UDgv4Da',
        'DMLLD3bVCNq',
        'ChGG',
        'AM9PBG',
        't3bLBMLUzW',
        'ygbG',
        'B2zMC2v0v2LKDgG',
        'Aw1WB3j0ihSGBw9JA0fUAw1HDgLVBNnbCgKGFsbMCM9TicDQC2rVBs10zxn0Aw5Nlw1Vy2TZjW',
        'C2nYB2XSqMvOyxzPB3i',
        'zgLZCgXHEu5HBwu',
        'y2HPBgrYzw4',
        'zwXLBwvUDhm',
        'mJa3odGWEKjhzfzg',
        'zM9YrwfJAa',
        'DhLWzq',
        'AhjLzG',
        'BM9Uzq',
        'DgfIBgu',
        'y2fSBa',
        'y2XPzw50vg9W',
        'C2nYB2XSvg9W',
        'DxnLu3rHDgu',
        'DMLZDwfSvMLLD3bVCNq',
        'C3rHDgLJ',
        'y29TCg9Zzwq',
        'BMf2AwDHDg9Y',
        'ywjZ',
        'C29YDa',
        'y3jLyxrLug9YDgfS',
        'zxHWB3j0CW',
        'q2XVC2u',
        'CMvZAxPL',
        'BNvTyMvY',
        'mZKXmZu3y3rfDM5n',
        'ywXPz25Tzw50qxHPCW',
        'zgvSDgfz',
        'C2nYB2XSwa',
        'BwLU',
        'DhjPBq',
        'C29Tzq',
        'C2nYzwvUwq',
        'CxvLCNLtzwXLy3rVCG',
        'B2zMC2v0vg9W',
        'zgLZy29UBMvJDa',
        'BM9Kzxnszwy',
        'zw5K',
        'zgLZCg9Zzq',
        'AgvHzgXLC3n1AvbVCNrHBa',
        'DgfYz2v0',
        'y2fSBgjHy2S',
        'Bwf4',
        'Bwf0y2HLCW',
        'Cg9ZAxrPB24',
        'C3LTyM9S',
        'tgvHDMu',
        'C2nHBgu',
        'q2fUBM90ia',
        'D2LKDgG',
        'y2XPzw50v2LKDgG',
        'C3r5Bgu',
        'zw50CMLLCW',
        'z2v0rMXVyxrPBMDqCM9WCW',
        'C2v0rMXVyxrPBMC',
        'yxv0BW',
        'i2rVy3vTzw50',
        'C3rYAw5NAwz5',
        'vw5LEhbLy3rLzcbVyMPLy3q6ia',
        'ue9q',
        'y29TCg9ZzwrqyxrO',
        'yM90Dg9T',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'CgfNzvLpzMzZzxq',
        'w29IAMvJDcbpyMPLy3rD',
        'y2XPzw50wq',
        'z2v0u2nHBgu',
        'D2fYBG',
        'CMvM',
        'zMXHz3m',
        'Aw5JBhvKzxm',
        'Dg9W',
        'DxnLu3LUy0v4DgvYBMfSu3rVCMu',
        'ug9W',
        'zw5HyMXLza',
        'nuLSufzota',
        'B3zLCMzSB3Dszwy',
        'zgvMyxvSDfbYzxzLBNrLza',
        'tM9Uzq',
        'C2v0rMXHzW',
        'Bwf4v2LKDgG',
        't3bLBG',
        'ChGP',
        'zgf0yvjLzG',
        'B2zMC2v0tgvMDa',
        'rwXLBwvUDa',
        'sgvHzgXLC3mGvuKGAgfZihbVBhLMAwXSzwqGyevSzw1LBNqUChjVDg90ExbLlMDLDefUAw1HDgLVBNnGigzVCIb5B3vYihrLC3rZlG',
        'rw50zxi',
        'D3jPDguGDg8GChjPDMf0zsbMAwvSza',
        'yw5JAg9Y',
        'oM1VzgfS',
        'yMX1CG',
        'C2nYB2XStgvMDa',
        'CMvJDhm',
        'sfrntevSzw1LBNq',
        'ywrK',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'zMLUza',
        'zg9JDw1LBNq',
        'y3jLyxrLrwXLBwvUDa',
        'A2v5CW',
        'Cg9W',
        'B3DUzxjeB2n1BwvUDa',
        'AxrLBq',
        'y29Uy2f0',
        'DhjHBNnMB3jT',
        'C3r5BgvZ',
        'z2v0u25HChnOB3q',
        'q2fUBM90igfKzcb0AguGC2fTzsbWCML2yxrLig1LBwjLCIbTB3jLihrOyw4GB25Jzq',
        'CgXHDgzVCM0',
        'q2XVC2vK',
        'CM9VDenVBNrLEhq',
        'C2vSzwn0Aw9U',
        'y29UDMvYDe9MzNnLDfbHCMvUDfjLBgf0AxzLuMvJDfrVvMLLD3bVCNrszwXHDgL2zvjLy3q',
        'Bwf4sgvPz2H0',
        'C3vIC2nYAwjL',
        'Dg9Nz2XLrMXHzW',
        'CgfYzw50',
        'y3rYBeTLEq',
        'zgLZCgf0y2G',
        'zM9Yy2u',
        'u0nst0Xmx1bsrvzftLq',
        'CgfPBNq',
        'zg9Uzq',
        'Cg9PBNrLCNvW',
        'y2vUDgvY',
        'AhrTBa',
        'z2v0rwXLBwvUDej5swq',
        'zgf0yxnLDa',
        'u3bLy2LMAwm',
        'zgvMyxvSDfzPzxC',
        'CM91BMq',
        'AxngAw5PDgu',
        'yxjPys1OAwrKzw4',
        'z2v0rgLTzw5ZAw9UCW',
        'B3vYuhjVChm',
        'y291BNq',
        'Dg91y2HZDgfYDa',
        'C2nYB2XSugfKzgLUz0jVDhrVBq',
        'AgLKzgvU',
        'zgf0yq',
        'u2HHzg93uM9VDa',
        'C2v0uhjVCgvYDhK',
        'Aw5SAw5L',
        'Ag9ZDa',
        'DgfIsw5KzxG',
        'AgfZrMXHzW',
        'C2L6zq',
        'z2v0qw5PBwf0Aw9UCW',
        'y2XPzw50wa',
        'B3bLBKv2zw50',
        'Dg9tDhjPBMC',
        'DxnLsw5Zzxj0Aw9UrwzMzwn0',
        'DMfSDwu',
        'vevbuKrpv04',
        'ywXPz25Tzw50',
        'ygbGANm',
        'z2v0',
        'DxnLrwzMzwn0',
        'AxndB25Uzwn0zwq',
        'y3jLyxrLq29UDgv4Da',
        'uhjVDMLKzxi',
        'C2nYB2XSwq'
    ];
    a48a = function () {
        return jx;
    };
    return a48a();
}
const a48cL = function (a) {
        const h4 = a48eW;
        return a === void 0x0 && (a = {}), {
            'name': h4(0x339),
            'options': a,
            async 'fn'(A) {
                const h5 = h4;
                var C, a0;
                const {
                        placement: a1,
                        middlewareData: a2,
                        rects: a3,
                        initialPlacement: a4,
                        platform: a5,
                        elements: a6
                    } = A, {
                        mainAxis: a7 = !0x0,
                        crossAxis: a8 = !0x0,
                        fallbackPlacements: a9,
                        fallbackStrategy: aa = h5(0x29a),
                        fallbackAxisSideDirection: ab = h5(0x365),
                        flipAlignment: ac = !0x0,
                        ...ad
                    } = a48cn(a, A);
                if ((C = a2[h5(0x2fd)]) != null && C[h5(0x2e2)])
                    return {};
                const af = a48co(a1), ag = a48ct(a4), ah = a48co(a4) === a4, aj = await (a5['isRTL'] == null ? void 0x0 : a5['isRTL'](a6['floating'])), ak = a9 || (ah || !ac ? [a48cE(a4)] : a48cw(a4)), al = ab !== h5(0x365);
                !a9 && al && ak[h5(0x2d7)](...a48cD(a4, ac, ab, aj));
                const am = [
                        a4,
                        ...ak
                    ], ap = await a48cK(A, ad), aq = [];
                let as = ((a0 = a2[h5(0x339)]) == null ? void 0x0 : a0[h5(0x2a6)]) || [];
                if (a7 && aq['push'](ap[af]), a8) {
                    const ay = a48cv(a1, a3, aj);
                    aq['push'](ap[ay[0x0]], ap[ay[0x1]]);
                }
                const au = {};
                au['placement'] = a1, au[h5(0x2a6)] = aq;
                if (as = [
                        ...as,
                        au
                    ], !aq['every'](az => az <= 0x0)) {
                    var av, aw;
                    const az = (((av = a2[h5(0x339)]) == null ? void 0x0 : av['index']) || 0x0) + 0x1, aA = am[az];
                    if (aA && (!(a8 === h5(0x26f) ? ag !== a48ct(aA) : !0x1) || as[h5(0x277)](aC => aC[h5(0x2a6)][0x0] > 0x0 && a48ct(aC['placement']) === ag)))
                        return {
                            'data': {
                                'index': az,
                                'overflows': as
                            },
                            'reset': { 'placement': aA }
                        };
                    let aB = (aw = as[h5(0x337)](aC => aC[h5(0x2a6)][0x0] <= 0x0)['sort']((aC, aD) => aC['overflows'][0x1] - aD['overflows'][0x1])[0x0]) == null ? void 0x0 : aw[h5(0x2c1)];
                    if (!aB)
                        switch (aa) {
                        case 'bestFit': {
                                var ax;
                                const aC = (ax = as[h5(0x337)](aD => {
                                    const h6 = h5;
                                    if (al) {
                                        const aE = a48ct(aD[h6(0x2c1)]);
                                        return aE === ag || aE === 'y';
                                    }
                                    return !0x0;
                                })[h5(0x293)](aD => [
                                    aD[h5(0x2c1)],
                                    aD[h5(0x2a6)][h5(0x337)](aE => aE > 0x0)['reduce']((aE, aF) => aE + aF, 0x0)
                                ])[h5(0x1e7)]((aD, aE) => aD[0x1] - aE[0x1])[0x0]) == null ? void 0x0 : ax[0x0];
                                aC && (aB = aC);
                                break;
                            }
                        case h5(0x2eb):
                            aB = a4;
                            break;
                        }
                    if (a1 !== aB)
                        return { 'reset': { 'placement': aB } };
                }
                return {};
            }
        };
    }, a48cM = new Set([
        'left',
        a48eW(0x21b)
    ]);
async function a48cN(b, k) {
    const h7 = a48eW, {
            placement: p,
            platform: v,
            elements: w
        } = b, y = await (v[h7(0x287)] == null ? void 0x0 : v[h7(0x287)](w[h7(0x29d)])), A = a48co(p), C = a48cp(p), D = a48ct(p) === 'y', E = a48cM[h7(0x2c9)](A) ? -0x1 : 0x1, F = y && D ? -0x1 : 0x1, H = a48cn(k, b);
    let {
        mainAxis: I,
        crossAxis: N,
        alignmentAxis: O
    } = typeof H == h7(0x1ec) ? {
        'mainAxis': H,
        'crossAxis': 0x0,
        'alignmentAxis': null
    } : {
        'mainAxis': H[h7(0x304)] || 0x0,
        'crossAxis': H[h7(0x308)] || 0x0,
        'alignmentAxis': H[h7(0x1ee)]
    };
    return C && typeof O == 'number' && (N = C === h7(0x1f9) ? O * -0x1 : O), D ? {
        'x': N * F,
        'y': I * E
    } : {
        'x': I * E,
        'y': N * F
    };
}
const a48cO = function (a) {
        const h8 = a48eW;
        return a === void 0x0 && (a = 0x0), {
            'name': h8(0x32a),
            'options': a,
            async 'fn'(b) {
                const h9 = h8;
                var d, f;
                const {
                        x: g,
                        y: h,
                        placement: k,
                        middlewareData: m
                    } = b, p = await a48cN(b, a);
                return k === ((d = m[h9(0x32a)]) == null ? void 0x0 : d['placement']) && (f = m[h9(0x2fd)]) != null && f[h9(0x2e2)] ? {} : {
                    'x': g + p['x'],
                    'y': h + p['y'],
                    'data': {
                        ...p,
                        'placement': k
                    }
                };
            }
        };
    }, a48cP = function (a) {
        return a === void 0x0 && (a = {}), {
            'name': 'shift',
            'options': a,
            async 'fn'(C) {
                const ha = a48b, {
                        x: D,
                        y: E,
                        placement: F
                    } = C, {
                        mainAxis: H = !0x0,
                        crossAxis: I = !0x1,
                        limiter: N = {
                            'fn': a5 => {
                                let {
                                    x: a6,
                                    y: a7
                                } = a5;
                                const a8 = {};
                                return a8['x'] = a6, a8['y'] = a7, a8;
                            }
                        },
                        ...O
                    } = a48cn(a, C), P = {
                        'x': D,
                        'y': E
                    }, R = await a48cK(C, O), S = a48ct(a48co(F)), T = a48cq(S);
                let X = P[T], a0 = P[S];
                if (H) {
                    const a5 = T === 'y' ? 'top' : ha(0x319), a6 = T === 'y' ? 'bottom' : ha(0x2d2), a7 = X + R[a5], a8 = X - R[a6];
                    X = a48cm(a7, X, a8);
                }
                if (I) {
                    const a9 = S === 'y' ? ha(0x21b) : ha(0x319), aa = S === 'y' ? 'bottom' : 'right', ab = a0 + R[a9], ac = a0 - R[aa];
                    a0 = a48cm(ab, a0, ac);
                }
                const a1 = { ...C };
                a1[T] = X, a1[S] = a0;
                const a2 = N['fn'](a1), a3 = {};
                a3[T] = H, a3[S] = I;
                const a4 = { ...a2 };
                return a4[ha(0x260)] = {}, a4[ha(0x260)]['x'] = a2['x'] - D, a4[ha(0x260)]['y'] = a2['y'] - E, a4[ha(0x260)][ha(0x21e)] = a3, a4;
            }
        };
    }, a48cQ = function (a) {
        const hb = a48eW;
        return a === void 0x0 && (a = {}), {
            'name': hb(0x267),
            'options': a,
            async 'fn'(H) {
                const hc = hb;
                var P, T;
                const {
                        placement: X,
                        rects: a0,
                        platform: a1,
                        elements: a2
                    } = H, {
                        apply: a3 = () => {
                        },
                        ...a4
                    } = a48cn(a, H), a5 = await a48cK(H, a4), a6 = a48co(X), a7 = a48cp(X), a8 = a48ct(X) === 'y', {
                        width: a9,
                        height: aa
                    } = a0['floating'];
                let ab, ac;
                a6 === hc(0x21b) || a6 === hc(0x211) ? (ab = a6, ac = a7 === (await (a1[hc(0x287)] == null ? void 0x0 : a1[hc(0x287)](a2['floating'])) ? hc(0x301) : 'end') ? hc(0x319) : hc(0x2d2)) : (ac = a6, ab = a7 === 'end' ? hc(0x21b) : hc(0x211));
                const ad = aa - a5[hc(0x21b)] - a5['bottom'], af = a9 - a5['left'] - a5[hc(0x2d2)], ag = a48cf(aa - a5[ab], ad), ah = a48cf(a9 - a5[ac], af), aj = !H[hc(0x31b)][hc(0x31d)];
                let ak = ag, al = ah;
                if ((P = H[hc(0x31b)]['shift']) != null && P[hc(0x21e)]['x'] && (al = af), (T = H[hc(0x31b)]['shift']) != null && T[hc(0x21e)]['y'] && (ak = ad), aj && !a7) {
                    const au = a48cg(a5['left'], 0x0), av = a48cg(a5[hc(0x2d2)], 0x0), aw = a48cg(a5['top'], 0x0), ax = a48cg(a5[hc(0x211)], 0x0);
                    a8 ? al = a9 - 0x2 * (au !== 0x0 || av !== 0x0 ? au + av : a48cg(a5[hc(0x319)], a5['right'])) : ak = aa - 0x2 * (aw !== 0x0 || ax !== 0x0 ? aw + ax : a48cg(a5[hc(0x21b)], a5['bottom']));
                }
                const am = { ...H };
                am[hc(0x2f1)] = al, am['availableHeight'] = ak, await a3(am);
                const ap = await a1[hc(0x25a)](a2['floating']), aq = {};
                aq['rects'] = !0x0;
                const as = {};
                return as['reset'] = aq, a9 !== ap['width'] || aa !== ap[hc(0x306)] ? as : {};
            }
        };
    };
function a48cR(a) {
    const hd = a48eW, b = a48c6(a);
    let c = parseFloat(b[hd(0x205)]) || 0x0, d = parseFloat(b[hd(0x306)]) || 0x0;
    const f = a48bQ(a), g = f ? a[hd(0x35b)] : c, h = f ? a['offsetHeight'] : d, k = a48ch(c) !== g || a48ch(d) !== h;
    return k && (c = g, d = h), {
        'width': c,
        'height': d,
        '$': k
    };
}
function a48cS(a) {
    const hf = a48eW;
    return a48bP(a) ? a : a[hf(0x2ab)];
}
function a48cT(a) {
    const hg = a48eW, b = a48cS(a);
    if (!a48bQ(b))
        return a48cj(0x1);
    const c = b['getBoundingClientRect'](), {
            width: d,
            height: f,
            $: g
        } = a48cR(b);
    let h = (g ? a48ch(c['width']) : c['width']) / d, k = (g ? a48ch(c[hg(0x306)]) : c['height']) / f;
    return (!h || !Number['isFinite'](h)) && (h = 0x1), (!k || !Number[hg(0x258)](k)) && (k = 0x1), {
        'x': h,
        'y': k
    };
}
const a48cU = a48cj(0x0);
function a48cV(a) {
    const hh = a48eW, b = a48bM(a);
    return !a48c3() || !b[hh(0x36b)] ? a48cU : {
        'x': b['visualViewport'][hh(0x228)],
        'y': b[hh(0x36b)][hh(0x1f6)]
    };
}
function a48cW(a, b, c) {
    return b === void 0x0 && (b = !0x1), !c || b && c !== a48bM(a) ? !0x1 : b;
}
function a48cX(k, A, C, D) {
    const hi = a48eW;
    A === void 0x0 && (A = !0x1), C === void 0x0 && (C = !0x1);
    const E = k[hi(0x234)](), F = a48cS(k);
    let H = a48cj(0x1);
    A && (D ? a48bP(D) && (H = a48cT(D)) : H = a48cT(k));
    const I = a48cW(F, C, D) ? a48cV(F) : a48cj(0x0);
    let N = (E[hi(0x319)] + I['x']) / H['x'], O = (E[hi(0x21b)] + I['y']) / H['y'], P = E['width'] / H['x'], S = E[hi(0x306)] / H['y'];
    if (F) {
        const X = a48bM(F), a0 = D && a48bP(D) ? a48bM(D) : D;
        let a1 = X, a2 = a48cb(a1);
        for (; a2 && D && a0 !== a1;) {
            const a3 = a48cT(a2), a4 = a2[hi(0x234)](), a5 = a48c6(a2), a6 = a4['left'] + (a2[hi(0x2d1)] + parseFloat(a5[hi(0x298)])) * a3['x'], a7 = a4['top'] + (a2[hi(0x368)] + parseFloat(a5[hi(0x2f2)])) * a3['y'];
            N *= a3['x'], O *= a3['y'], P *= a3['x'], S *= a3['y'], N += a6, O += a7, a1 = a48bM(a2), a2 = a48cb(a1);
        }
    }
    const T = {};
    return T['width'] = P, T[hi(0x306)] = S, T['x'] = N, T['y'] = O, a48cH(T);
}
function a48cY(a, b) {
    const hj = a48eW, c = a48c7(a)[hj(0x230)];
    return b ? b[hj(0x319)] + c : a48cX(a48bN(a))[hj(0x319)] + c;
}
function a48cZ(b, c, d) {
    const hk = a48eW;
    d === void 0x0 && (d = !0x1);
    const f = b[hk(0x234)](), g = f[hk(0x319)] + c[hk(0x230)] - (d ? 0x0 : a48cY(b, f)), h = f[hk(0x21b)] + c[hk(0x369)], k = {};
    return k['x'] = g, k['y'] = h, k;
}
function a48d0(k) {
    const hl = a48eW;
    let {
        elements: p,
        rect: v,
        offsetParent: w,
        strategy: y
    } = k;
    const A = y === 'fixed', C = a48bN(w), D = p ? a48bX(p[hl(0x29d)]) : !0x1;
    if (w === C || D && A)
        return v;
    const E = {};
    E[hl(0x230)] = 0x0, E[hl(0x369)] = 0x0;
    let F = E, H = a48cj(0x1);
    const I = a48cj(0x0), N = a48bQ(w);
    if ((N || !N && !A) && ((a48bL(w) !== 'body' || a48bT(C)) && (F = a48c7(w)), a48bQ(w))) {
        const R = a48cX(w);
        H = a48cT(w), I['x'] = R['x'] + w[hl(0x2d1)], I['y'] = R['y'] + w['clientTop'];
    }
    const O = C && !N && !A ? a48cZ(C, F, !0x0) : a48cj(0x0), P = {};
    return P[hl(0x205)] = v[hl(0x205)] * H['x'], P[hl(0x306)] = v[hl(0x306)] * H['y'], P['x'] = v['x'] * H['x'] - F[hl(0x230)] * H['x'] + I['x'] + O['x'], P['y'] = v['y'] * H['y'] - F[hl(0x369)] * H['y'] + I['y'] + O['y'], P;
}
function a48d1(a) {
    const hm = a48eW;
    return Array[hm(0x34b)](a[hm(0x2be)]());
}
function a48d2(a) {
    const hp = a48eW, b = a48bN(a), c = a48c7(a), d = a[hp(0x23a)][hp(0x2ae)], f = a48cg(b[hp(0x2d4)], b[hp(0x206)], d[hp(0x2d4)], d['clientWidth']), g = a48cg(b[hp(0x2a1)], b[hp(0x330)], d[hp(0x2a1)], d[hp(0x330)]);
    let h = -c[hp(0x230)] + a48cY(a);
    const k = -c[hp(0x369)];
    return a48c6(d)[hp(0x317)] === 'rtl' && (h += a48cg(b['clientWidth'], d[hp(0x206)]) - f), {
        'width': f,
        'height': g,
        'x': h,
        'y': k
    };
}
function a48d3(d, f) {
    const hq = a48eW, g = a48bM(d), h = a48bN(d), k = g[hq(0x36b)];
    let m = h[hq(0x206)], p = h[hq(0x330)], v = 0x0, w = 0x0;
    if (k) {
        m = k[hq(0x205)], p = k[hq(0x306)];
        const A = a48c3();
        (!A || A && f === 'fixed') && (v = k[hq(0x228)], w = k['offsetTop']);
    }
    const y = {};
    return y[hq(0x205)] = m, y[hq(0x306)] = p, y['x'] = v, y['y'] = w, y;
}
const a48d4 = new Set([
    a48eW(0x342),
    a48eW(0x2c7)
]);
function a48d5(d, f) {
    const hs = a48eW, g = a48cX(d, !0x0, f === hs(0x2c7)), h = g[hs(0x21b)] + d['clientTop'], k = g[hs(0x319)] + d['clientLeft'], m = a48bQ(d) ? a48cT(d) : a48cj(0x1), p = d[hs(0x206)] * m['x'], v = d[hs(0x330)] * m['y'], w = k * m['x'], y = h * m['y'], A = {};
    return A[hs(0x205)] = p, A[hs(0x306)] = v, A['x'] = w, A['y'] = y, A;
}
function a48d6(b, c, d) {
    const hu = a48eW;
    let f;
    if (c === hu(0x356))
        f = a48d3(b, d);
    else {
        if (c === hu(0x236))
            f = a48d2(a48bN(b));
        else {
            if (a48bP(c))
                f = a48d5(c, d);
            else {
                const g = a48cV(b), h = {};
                h['x'] = c['x'] - g['x'], h['y'] = c['y'] - g['y'], h['width'] = c[hu(0x205)], h[hu(0x306)] = c[hu(0x306)], f = h;
            }
        }
    }
    return a48cH(f);
}
function a48d7(a, b) {
    const hv = a48eW, c = a48c8(a);
    return c === b || !a48bP(c) || a48c5(c) ? !0x1 : a48c6(c)[hv(0x200)] === hv(0x2c7) || a48d7(c, b);
}
function a48d8(a, b) {
    const hw = a48eW, d = b['get'](a);
    if (d)
        return d;
    let f = a48ca(a, [], !0x1)[hw(0x337)](m => a48bP(m) && a48bL(m) !== 'body'), g = null;
    const h = a48c6(a)[hw(0x200)] === hw(0x2c7);
    let k = h ? a48c8(a) : a;
    for (; a48bP(k) && !a48c5(k);) {
        const m = a48c6(k), p = a48c1(k);
        !p && m['position'] === hw(0x2c7) && (g = null), (h ? !p && !g : !p && m[hw(0x200)] === hw(0x36c) && !!g && a48d4[hw(0x2c9)](g[hw(0x200)]) || a48bT(k) && !p && a48d7(a, k)) ? f = f[hw(0x337)](v => v !== k) : g = m, k = a48c8(k);
    }
    return b['set'](a, f), f;
}
function a48d9(b) {
    const hx = a48eW;
    let {
        element: d,
        boundary: f,
        rootBoundary: g,
        strategy: h
    } = b;
    const i = [
            ...f === 'clippingAncestors' ? a48bX(d) ? [] : a48d8(d, this['_c']) : [][hx(0x23c)](f),
            g
        ], k = i[0x0], m = i[hx(0x347)]((v, w) => {
            const hy = hx, y = a48d6(d, w, h);
            return v[hy(0x21b)] = a48cg(y['top'], v[hy(0x21b)]), v[hy(0x2d2)] = a48cf(y[hy(0x2d2)], v[hy(0x2d2)]), v['bottom'] = a48cf(y[hy(0x211)], v['bottom']), v[hy(0x319)] = a48cg(y[hy(0x319)], v[hy(0x319)]), v;
        }, a48d6(d, k, h)), p = {};
    return p[hx(0x205)] = m[hx(0x2d2)] - m[hx(0x319)], p[hx(0x306)] = m['bottom'] - m['top'], p['x'] = m[hx(0x319)], p['y'] = m['top'], p;
}
function a48da(b) {
    const hz = a48eW, {
            width: c,
            height: d
        } = a48cR(b), f = {};
    return f[hz(0x205)] = c, f['height'] = d, f;
}
function a48db(k, p, v) {
    const hA = a48eW, w = a48bQ(p), y = a48bN(p), A = v === 'fixed', C = a48cX(k, !0x0, A, p), D = {};
    D[hA(0x230)] = 0x0, D[hA(0x369)] = 0x0;
    let E = D;
    const F = a48cj(0x0);
    function H() {
        F['x'] = a48cY(y);
    }
    if (w || !w && !A) {
        if ((a48bL(p) !== hA(0x2ae) || a48bT(y)) && (E = a48c7(p)), w) {
            const R = a48cX(p, !0x0, A, p);
            F['x'] = R['x'] + p['clientLeft'], F['y'] = R['y'] + p[hA(0x368)];
        } else
            y && H();
    }
    A && !w && y && H();
    const I = y && !w && !A ? a48cZ(y, E) : a48cj(0x0), N = C[hA(0x319)] + E[hA(0x230)] - F['x'] - I['x'], O = C[hA(0x21b)] + E[hA(0x369)] - F['y'] - I['y'], P = {};
    return P['x'] = N, P['y'] = O, P[hA(0x205)] = C[hA(0x205)], P[hA(0x306)] = C[hA(0x306)], P;
}
function a48dc(a) {
    const hB = a48eW;
    return a48c6(a)['position'] === hB(0x36c);
}
function a48dd(a, b) {
    const hC = a48eW;
    if (!a48bQ(a) || a48c6(a)[hC(0x200)] === hC(0x2c7))
        return null;
    if (b)
        return b(a);
    let c = a['offsetParent'];
    return a48bN(a) === c && (c = c[hC(0x23a)][hC(0x2ae)]), c;
}
function a48de(a, b) {
    const c = a48bM(a);
    if (a48bX(a))
        return c;
    if (!a48bQ(a)) {
        let f = a48c8(a);
        for (; f && !a48c5(f);) {
            if (a48bP(f) && !a48dc(f))
                return f;
            f = a48c8(f);
        }
        return c;
    }
    let d = a48dd(a, b);
    for (; d && a48bV(d) && a48dc(d);)
        d = a48dd(d, b);
    return d && a48c5(d) && a48dc(d) && !a48c1(d) ? c : d || a48c2(a) || c;
}
const a48df = async function (b) {
    const hD = a48eW, c = this[hD(0x2aa)] || a48de, d = this[hD(0x25a)], f = await d(b[hD(0x29d)]), g = {};
    return g['x'] = 0x0, g['y'] = 0x0, g[hD(0x205)] = f['width'], g['height'] = f[hD(0x306)], {
        'reference': a48db(b[hD(0x278)], await c(b[hD(0x29d)]), b[hD(0x340)]),
        'floating': g
    };
};
function a48dg(a) {
    const hE = a48eW;
    return a48c6(a)[hE(0x317)] === hE(0x300);
}
const a48dh = {};
a48dh[a48eW(0x245)] = a48d0, a48dh[a48eW(0x291)] = a48bN, a48dh[a48eW(0x2a2)] = a48d9, a48dh['getOffsetParent'] = a48de, a48dh['getElementRects'] = a48df, a48dh[a48eW(0x2be)] = a48d1, a48dh[a48eW(0x25a)] = a48da, a48dh[a48eW(0x216)] = a48cT, a48dh[a48eW(0x31e)] = a48bP, a48dh[a48eW(0x287)] = a48dg;
const a48di = a48dh;
function a48dj(a, b) {
    const hF = a48eW;
    return a['x'] === b['x'] && a['y'] === b['y'] && a[hF(0x205)] === b['width'] && a['height'] === b[hF(0x306)];
}
function a48dk(a, b) {
    let c = null, d;
    const f = a48bN(a);
    function g() {
        var k;
        clearTimeout(d), (k = c) == null || k['disconnect'](), c = null;
    }
    function h(A, C) {
        const hG = a48b;
        A === void 0x0 && (A = !0x1), C === void 0x0 && (C = 0x1), g();
        const D = a[hG(0x234)](), {
                left: E,
                top: F,
                width: H,
                height: I
            } = D;
        if (A || b(), !H || !I)
            return;
        const N = a48ci(F), O = a48ci(f[hG(0x206)] - (E + H)), P = a48ci(f['clientHeight'] - (F + I)), S = a48ci(E), T = {
                'rootMargin': -N + hG(0x357) + -O + hG(0x357) + -P + hG(0x357) + -S + 'px',
                'threshold': a48cg(0x0, a48cf(0x1, C)) || 0x1
            };
        let X = !0x0;
        function a0(a1) {
            const hH = hG, a2 = a1[0x0][hH(0x283)];
            if (a2 !== C) {
                if (!X)
                    return h();
                a2 ? h(!0x1, a2) : d = setTimeout(() => {
                    h(!0x1, 1e-7);
                }, 0x3e8);
            }
            a2 === 0x1 && !a48dj(D, a[hH(0x234)]()) && h(), X = !0x1;
        }
        try {
            const a1 = { ...T };
            a1[hG(0x2bc)] = f[hG(0x23a)], c = new IntersectionObserver(a0, a1);
        } catch {
            c = new IntersectionObserver(a0, T);
        }
        c[hG(0x2bd)](a);
    }
    return h(!0x0), g;
}
function a48dl(b, k, w, y) {
    const hI = a48eW;
    y === void 0x0 && (y = {});
    const {
            ancestorScroll: A = !0x0,
            ancestorResize: C = !0x0,
            elementResize: D = typeof ResizeObserver == 'function',
            layoutShift: E = typeof IntersectionObserver == hI(0x2ef),
            animationFrame: F = !0x1
        } = y, H = a48cS(b), I = A || C ? [
            ...H ? a48ca(H) : [],
            ...a48ca(k)
        ] : [];
    I['forEach'](X => {
        const hJ = hI, a0 = {};
        a0['passive'] = !0x0, (A && X[hJ(0x28e)]('scroll', w, a0), C && X['addEventListener'](hJ(0x1eb), w));
    });
    const N = H && E ? a48dk(H, w) : null;
    let O = -0x1, P = null;
    D && (P = new ResizeObserver(X => {
        let [a0] = X;
        a0 && a0['target'] === H && P && (P['unobserve'](k), cancelAnimationFrame(O), O = requestAnimationFrame(() => {
            const hK = a48b;
            var a1;
            (a1 = P) == null || a1[hK(0x2bd)](k);
        })), w();
    }), H && !F && P[hI(0x2bd)](H), P[hI(0x2bd)](k));
    let R, S = F ? a48cX(b) : null;
    F && T();
    function T() {
        const X = a48cX(b);
        S && !a48dj(S, X) && w(), S = X, R = requestAnimationFrame(T);
    }
    return w(), () => {
        const hL = hI;
        var X;
        I[hL(0x362)](a0 => {
            const hM = hL;
            A && a0[hM(0x2f8)]('scroll', w), C && a0[hM(0x2f8)]('resize', w);
        }), N == null || N(), (X = P) == null || X[hL(0x1f7)](), P = null, F && cancelAnimationFrame(R);
    };
}
const a48dm = a48cK, a48dn = a48cO, a48do = a48cP, a48dp = a48cL, a48dq = a48cQ, a48dr = (c, d, f) => {
        const hN = a48eW, g = {
                'platform': a48di,
                ...f
            }, h = new Map(), k = g, l = {
                ...k[hN(0x241)],
                '_c': h
            }, m = { ...k };
        return m['platform'] = l, a48cJ(c, d, m);
    };
var a48ds = typeof document < 'u', a48dt = function () {
    }, a48du = a48ds ? a48a4['useLayoutEffect'] : a48dt;
function a48dv(a, b) {
    const hO = a48eW;
    if (a === b)
        return !0x0;
    if (typeof a != typeof b)
        return !0x1;
    if (typeof a == hO(0x2ef) && a[hO(0x26b)]() === b['toString']())
        return !0x0;
    let c, d, f;
    if (a && b && typeof a == 'object') {
        if (Array[hO(0x349)](a)) {
            if (c = a[hO(0x2fa)], c !== b['length'])
                return !0x1;
            for (d = c; d-- !== 0x0;)
                if (!a48dv(a[d], b[d]))
                    return !0x1;
            return !0x0;
        }
        if (f = Object['keys'](a), c = f['length'], c !== Object[hO(0x238)](b)[hO(0x2fa)])
            return !0x1;
        for (d = c; d-- !== 0x0;)
            if (!{}[hO(0x335)]['call'](b, f[d]))
                return !0x1;
        for (d = c; d-- !== 0x0;) {
            const g = f[d];
            if (!(g === hO(0x28f) && a[hO(0x33a)]) && !a48dv(a[g], b[g]))
                return !0x1;
        }
        return !0x0;
    }
    return a !== a && b !== b;
}
function a48dw(a) {
    const hP = a48eW;
    return typeof window > 'u' ? 0x1 : (a[hP(0x23a)][hP(0x256)] || window)[hP(0x2f3)] || 0x1;
}
function a48dx(a, b) {
    const hQ = a48eW, c = a48dw(a);
    return Math[hQ(0x257)](b * c) / c;
}
function a48dy(a) {
    const hR = a48eW, b = a48a4[hR(0x2a7)](a);
    return a48du(() => {
        const hS = hR;
        b[hS(0x2da)] = a;
    }), b;
}
function a48dz(k) {
    const hT = a48eW;
    k === void 0x0 && (k = {});
    const {
            placement: A = hT(0x211),
            strategy: C = hT(0x342),
            middleware: a0 = [],
            platform: a1,
            elements: {
                reference: a2,
                floating: a3
            } = {},
            transform: a4 = !0x0,
            whileElementsMounted: a5,
            open: a6
        } = k, [a7, a8] = a48a4[hT(0x36a)]({
            'x': 0x0,
            'y': 0x0,
            'strategy': C,
            'placement': A,
            'middlewareData': {},
            'isPositioned': !0x1
        }), [a9, aa] = a48a4[hT(0x36a)](a0);
    a48dv(a9, a0) || aa(a0);
    const [ab, ac] = a48a4[hT(0x36a)](null), [ad, af] = a48a4['useState'](null), ag = a48a4[hT(0x329)](aB => {
            const hU = hT;
            aB !== al[hU(0x2da)] && (al[hU(0x2da)] = aB, ac(aB));
        }, []), ah = a48a4[hT(0x329)](aB => {
            const hV = hT;
            aB !== am['current'] && (am[hV(0x2da)] = aB, af(aB));
        }, []), aj = a2 || ab, ak = a3 || ad, al = a48a4[hT(0x2a7)](null), am = a48a4[hT(0x2a7)](null), ap = a48a4[hT(0x2a7)](a7), aq = a5 != null, as = a48dy(a5), au = a48dy(a1), av = a48dy(a6), aw = a48a4[hT(0x329)](() => {
            const hW = hT;
            if (!al[hW(0x2da)] || !am[hW(0x2da)])
                return;
            const aB = {};
            aB[hW(0x2c1)] = A, aB[hW(0x340)] = C, aB['middleware'] = a9;
            const aC = aB;
            au[hW(0x2da)] && (aC['platform'] = au[hW(0x2da)]), a48dr(al[hW(0x2da)], am['current'], aC)[hW(0x2ca)](aD => {
                const hX = hW, aE = { ...aD };
                aE[hX(0x2e5)] = av['current'] !== !0x1;
                const aF = aE;
                ax[hX(0x2da)] && !a48dv(ap[hX(0x2da)], aF) && (ap[hX(0x2da)] = aF, a48a6['flushSync'](() => {
                    a8(aF);
                }));
            });
        }, [
            a9,
            A,
            C,
            au,
            av
        ]);
    a48du(() => {
        const hY = hT;
        a6 === !0x1 && ap['current'][hY(0x2e5)] && (ap[hY(0x2da)][hY(0x2e5)] = !0x1, a8(aB => ({
            ...aB,
            'isPositioned': !0x1
        })));
    }, [a6]);
    const ax = a48a4['useRef'](!0x1);
    a48du(() => (ax['current'] = !0x0, () => {
        const hZ = hT;
        ax[hZ(0x2da)] = !0x1;
    }), []), a48du(() => {
        const i0 = hT;
        if (aj && (al[i0(0x2da)] = aj), ak && (am['current'] = ak), aj && ak) {
            if (as['current'])
                return as[i0(0x2da)](aj, ak, aw);
            aw();
        }
    }, [
        aj,
        ak,
        aw,
        as,
        aq
    ]);
    const ay = a48a4[hT(0x295)](() => ({
            'reference': al,
            'floating': am,
            'setReference': ag,
            'setFloating': ah
        }), [
            ag,
            ah
        ]), az = a48a4[hT(0x295)](() => ({
            'reference': aj,
            'floating': ak
        }), [
            aj,
            ak
        ]), aA = a48a4[hT(0x295)](() => {
            const i1 = hT, aB = {};
            aB[i1(0x200)] = C, aB[i1(0x319)] = 0x0, aB['top'] = 0x0;
            const aC = aB;
            if (!az[i1(0x29d)])
                return aC;
            const aD = a48dx(az[i1(0x29d)], a7['x']), aE = a48dx(az['floating'], a7['y']), aF = {};
            return aF['willChange'] = i1(0x23d), a4 ? {
                ...aC,
                'transform': 'translate(' + aD + i1(0x34e) + aE + i1(0x226),
                ...a48dw(az['floating']) >= 1.5 && aF
            } : {
                'position': C,
                'left': aD,
                'top': aE
            };
        }, [
            C,
            a4,
            az[hT(0x29d)],
            a7['x'],
            a7['y']
        ]);
    return a48a4[hT(0x295)](() => ({
        ...a7,
        'update': aw,
        'refs': ay,
        'elements': az,
        'floatingStyles': aA
    }), [
        a7,
        aw,
        ay,
        az,
        aA
    ]);
}
const a48dA = { ...a48a7 }, a48dB = (a, b) => ({
        ...a48dn(a),
        'options': [
            a,
            b
        ]
    }), a48dC = (a, b) => ({
        ...a48do(a),
        'options': [
            a,
            b
        ]
    }), a48dD = (a, b) => ({
        ...a48dp(a),
        'options': [
            a,
            b
        ]
    }), a48dE = (a, b) => ({
        ...a48dq(a),
        'options': [
            a,
            b
        ]
    }), a48dF = a48dA, a48dG = a48dF[a48eW(0x26c)], a48dH = a48dG || (a => a());
function a48dI(a) {
    const i2 = a48eW, b = a48a4[i2(0x2a7)](() => {
        });
    return a48dH(() => {
        const i3 = i2;
        b[i3(0x2da)] = a;
    }), a48a4[i2(0x329)](function () {
        const i4 = i2;
        for (var c = arguments[i4(0x2fa)], d = new Array(c), f = 0x0; f < c; f++)
            d[f] = arguments[f];
        return b[i4(0x2da)] == null ? void 0x0 : b[i4(0x2da)](...d);
    }, []);
}
var a48dJ = typeof document < 'u' ? a48a4['useLayoutEffect'] : a48a4[a48eW(0x272)];
let a48dK = !0x1, a48dL = 0x0;
const a48dM = () => a48eW(0x305) + Math['random']()[a48eW(0x26b)](0x24)['slice'](0x2, 0x6) + a48dL++;
function a48dN() {
    const i5 = a48eW, [a, b] = a48a4['useState'](() => a48dK ? a48dM() : void 0x0);
    return a48dJ(() => {
        a == null && b(a48dM());
    }, []), a48a4[i5(0x272)](() => {
        a48dK = !0x0;
    }, []), a;
}
const a48dO = a48dF[a48eW(0x288)], a48dP = a48dO || a48dN;
function a48dQ() {
    const a = new Map();
    return {
        'emit'(b, c) {
            const i6 = a48b;
            var d;
            (d = a[i6(0x271)](b)) == null || d[i6(0x362)](f => f(c));
        },
        'on'(b, c) {
            const i7 = a48b;
            a[i7(0x343)](b, [
                ...a['get'](b) || [],
                c
            ]);
        },
        'off'(b, c) {
            const i8 = a48b;
            var d;
            a[i8(0x343)](b, ((d = a['get'](b)) == null ? void 0x0 : d[i8(0x337)](f => f !== c)) || []);
        }
    };
}
const a48dR = a48a4['createContext'](null), a48dS = a48a4['createContext'](null), a48dT = () => {
        const i9 = a48eW;
        var a;
        return ((a = a48a4[i9(0x2d0)](a48dR)) == null ? void 0x0 : a['id']) || null;
    }, a48dU = () => a48a4['useContext'](a48dS), a48dV = a48eW(0x2b2);
function a48dW(b) {
    const ia = a48eW, {
            open: d = !0x1,
            onOpenChange: g,
            elements: k
        } = b, p = a48dP(), v = a48a4[ia(0x2a7)]({}), [w] = a48a4['useState'](() => a48dQ()), y = a48dT() != null, [A, C] = a48a4['useState'](k[ia(0x278)]), D = a48dI((H, I, N) => {
            const ib = ia;
            v[ib(0x2da)][ib(0x26a)] = H ? I : void 0x0, w['emit']('openchange', {
                'open': H,
                'event': I,
                'reason': N,
                'nested': y
            }), g == null || g(H, I, N);
        }), E = a48a4[ia(0x295)](() => ({ 'setPositionReference': C }), []), F = a48a4[ia(0x295)](() => ({
            'reference': A || k['reference'] || null,
            'floating': k[ia(0x29d)] || null,
            'domReference': k['reference']
        }), [
            A,
            k[ia(0x278)],
            k['floating']
        ]);
    return a48a4[ia(0x295)](() => ({
        'dataRef': v,
        'open': d,
        'onOpenChange': D,
        'elements': F,
        'events': w,
        'floatingId': p,
        'refs': E
    }), [
        d,
        D,
        F,
        w,
        p,
        E
    ]);
}
function a48dX(k) {
    const ic = a48eW;
    k === void 0x0 && (k = {});
    const {nodeId: w} = k, A = a48dW({
            ...k,
            'elements': {
                'reference': null,
                'floating': null,
                ...k[ic(0x360)]
            }
        }), C = k[ic(0x243)] || A, D = C['elements'], [E, F] = a48a4[ic(0x36a)](null), [H, I] = a48a4[ic(0x36a)](null), N = (D == null ? void 0x0 : D[ic(0x326)]) || E, O = a48a4[ic(0x2a7)](null), P = a48dU();
    a48dJ(() => {
        const id = ic;
        N && (O[id(0x2da)] = N);
    }, [N]);
    const R = {
            ...D,
            ...H && { 'reference': H }
        }, S = { ...k };
    S[ic(0x360)] = R;
    const T = a48dz(S), X = a48a4['useCallback'](a4 => {
            const ig = ic, a5 = a48bP(a4) ? {
                    'getBoundingClientRect': () => a4['getBoundingClientRect'](),
                    'contextElement': a4
                } : a4;
            I(a5), T[ig(0x31f)][ig(0x30f)](a5);
        }, [T[ic(0x31f)]]), a0 = a48a4[ic(0x329)](a4 => {
            const ih = ic;
            (a48bP(a4) || a4 === null) && (O[ih(0x2da)] = a4, F(a4)), (a48bP(T[ih(0x31f)][ih(0x278)][ih(0x2da)]) || T[ih(0x31f)]['reference'][ih(0x2da)] === null || a4 !== null && !a48bP(a4)) && T['refs']['setReference'](a4);
        }, [T['refs']]), a1 = a48a4[ic(0x295)](() => ({
            ...T['refs'],
            'setReference': a0,
            'setPositionReference': X,
            'domReference': O
        }), [
            T[ic(0x31f)],
            a0,
            X
        ]), a2 = a48a4[ic(0x295)](() => ({
            ...T['elements'],
            'domReference': N
        }), [
            T[ic(0x360)],
            N
        ]), a3 = a48a4['useMemo'](() => ({
            ...T,
            ...C,
            'refs': a1,
            'elements': a2,
            'nodeId': w
        }), [
            T,
            a1,
            a2,
            w,
            C
        ]);
    return a48dJ(() => {
        const ij = ic;
        C[ij(0x227)]['current']['floatingContext'] = a3;
        const a4 = P == null ? void 0x0 : P[ij(0x1f8)][ij(0x2da)][ij(0x235)](a5 => a5['id'] === w);
        a4 && (a4[ij(0x30d)] = a3);
    }), a48a4[ic(0x295)](() => ({
        ...T,
        'context': a3,
        'refs': a1,
        'elements': a2
    }), [
        T,
        a1,
        a2,
        a3
    ]);
}
const a48dY = a48eW(0x2ed), a48dZ = 'selected';
function a48e0(b, d, f) {
    const ik = a48eW, g = new Map(), h = f === ik(0x23b);
    let k = b;
    if (h && b) {
        const {
            [a48dY]: p,
            [a48dZ]: v,
            ...w
        } = b;
        k = w;
    }
    const m = {};
    return m[ik(0x265)] = -0x1, m[a48dV] = '', {
        ...f === 'floating' && m,
        ...k,
        ...d[ik(0x293)](y => {
            const il = ik, A = y ? y[f] : null;
            return typeof A == il(0x2ef) ? b ? A(b) : null : A;
        })['concat'](b)[ik(0x347)]((y, A) => (A && Object[ik(0x208)](A)[ik(0x362)](C => {
            const im = ik;
            let [D, E] = C;
            if (!(h && [
                    a48dY,
                    a48dZ
                ][im(0x21a)](D))) {
                if (D[im(0x345)]('on') === 0x0) {
                    if (g[im(0x2c9)](D) || g[im(0x343)](D, []), typeof E == 'function') {
                        var F;
                        (F = g[im(0x271)](D)) == null || F[im(0x2d7)](E), y[D] = function () {
                            const ip = im;
                            for (var H, I = arguments[ip(0x2fa)], N = new Array(I), O = 0x0; O < I; O++)
                                N[O] = arguments[O];
                            return (H = g[ip(0x271)](D)) == null ? void 0x0 : H[ip(0x293)](P => P(...N))[ip(0x235)](P => P !== void 0x0);
                        };
                    }
                } else
                    y[D] = E;
            }
        }), y), {})
    };
}
function a48e1(a) {
    const iq = a48eW;
    a === void 0x0 && (a = []);
    const b = a['map'](k => k == null ? void 0x0 : k[iq(0x278)]), c = a[iq(0x293)](k => k == null ? void 0x0 : k['floating']), d = a[iq(0x293)](k => k == null ? void 0x0 : k[iq(0x23b)]), f = a48a4[iq(0x329)](k => a48e0(k, a, 'reference'), b), g = a48a4['useCallback'](k => a48e0(k, a, iq(0x29d)), c), h = a48a4[iq(0x329)](k => a48e0(k, a, 'item'), d);
    return a48a4['useMemo'](() => ({
        'getReferenceProps': f,
        'getFloatingProps': g,
        'getItemProps': h
    }), [
        f,
        g,
        h
    ]);
}
function a48e2(b, c) {
    const is = a48eW, d = { ...b };
    return d[is(0x231)] = { ...b[is(0x231)] }, d[is(0x231)][is(0x29d)] = { ...b[is(0x231)][is(0x29d)] }, d[is(0x231)][is(0x29d)]['height'] = c, d;
}
const a48e3 = a => ({
    'name': a48eW(0x318),
    'options': a,
    async 'fn'(C) {
        const iu = a48eW, {
                listRef: D,
                overflowRef: F,
                onFallbackChange: H,
                offset: I = 0x0,
                index: N = 0x0,
                minItemsVisible: P = 0x4,
                referenceOverflowThreshold: T = 0x0,
                scrollRef: X,
                ...a0
            } = a48cn(a, C), {
                rects: a1,
                elements: {floating: a2}
            } = C, a3 = D['current'][N], a4 = (X == null ? void 0x0 : X[iu(0x2da)]) || a2, a5 = a2['clientTop'] || a4[iu(0x368)], a6 = a2[iu(0x368)] !== 0x0, a7 = a4[iu(0x368)] !== 0x0, a8 = a2 === a4;
        if (!a3)
            return {};
        const a9 = {
                ...C,
                ...await a48dB(-a3[iu(0x1f6)] - a2[iu(0x368)] - a1[iu(0x278)][iu(0x306)] / 0x2 - a3[iu(0x2c3)] / 0x2 - I)['fn'](C)
            }, aa = await a48dm(a48e2(a9, a4[iu(0x2a1)] + a5 + a2[iu(0x368)]), a0), ab = await a48dm(a9, {
                ...a0,
                'elementContext': iu(0x278)
            }), ac = a48cg(0x0, aa[iu(0x21b)]), ad = a9['y'] + ac, af = (a4[iu(0x2a1)] > a4[iu(0x330)] ? aj => aj : a48ch)(a48cg(0x0, a4['scrollHeight'] + (a6 && a8 || a7 ? a5 * 0x2 : 0x0) - ac - a48cg(0x0, aa[iu(0x211)])));
        if (a4[iu(0x207)]['maxHeight'] = af + 'px', a4[iu(0x369)] = ac, H) {
            const aj = a4[iu(0x2c3)] < a3['offsetHeight'] * a48cf(P, D[iu(0x2da)][iu(0x2fa)]) - 0x1 || ab[iu(0x21b)] >= -T || ab[iu(0x211)] >= -T;
            a48a6[iu(0x2b5)](() => H(aj));
        }
        const ag = { ...a9 };
        ag['y'] = ad;
        const ah = {};
        return ah['y'] = ad, (F && (F[iu(0x2da)] = await a48dm(a48e2(ag, a4[iu(0x2c3)] + a5 + a2['clientTop']), a0)), ah);
    }
});
function a48e4(d, g) {
    const iv = a48eW, {
            open: k,
            elements: p
        } = d, {
            enabled: v = !0x0,
            overflowRef: w,
            scrollRef: y,
            onChange: A
        } = g, C = a48dI(A), D = a48a4['useRef'](!0x1), E = a48a4[iv(0x2a7)](null), F = a48a4[iv(0x2a7)](null);
    a48a4[iv(0x272)](() => {
        const ix = iv;
        if (!v)
            return;
        function N(P) {
            const iw = a48b;
            if (P[iw(0x24a)] || !O || w[iw(0x2da)] == null)
                return;
            const S = P[iw(0x1ef)], T = w[iw(0x2da)][iw(0x21b)] >= -0.5, X = w[iw(0x2da)]['bottom'] >= -0.5, a0 = O[iw(0x2a1)] - O[iw(0x330)], a1 = S < 0x0 ? -0x1 : 0x1, a2 = S < 0x0 ? iw(0x1fe) : iw(0x1f1);
            O['scrollHeight'] <= O[iw(0x330)] || (!T && S > 0x0 || !X && S < 0x0 ? (P[iw(0x2bb)](), a48a6[iw(0x2b5)](() => {
                C(a3 => a3 + Math[a2](S, a0 * a1));
            })) : /firefox/i[iw(0x2b6)](a48cc()) && (O[iw(0x369)] += S));
        }
        const O = (y == null ? void 0x0 : y['current']) || p[ix(0x29d)];
        if (k && O)
            return O[ix(0x28e)](ix(0x27f), N), requestAnimationFrame(() => {
                const iy = ix;
                E[iy(0x2da)] = O['scrollTop'], w[iy(0x2da)] != null && (F[iy(0x2da)] = { ...w[iy(0x2da)] });
            }), () => {
                const iz = ix;
                E[iz(0x2da)] = null, F[iz(0x2da)] = null, O[iz(0x2f8)](iz(0x27f), N);
            };
    }, [
        v,
        k,
        p['floating'],
        w,
        y,
        C
    ]);
    const H = a48a4['useMemo'](() => ({
            'onKeyDown'() {
                const iA = iv;
                D[iA(0x2da)] = !0x0;
            },
            'onWheel'() {
                const iB = iv;
                D[iB(0x2da)] = !0x1;
            },
            'onPointerMove'() {
                D['current'] = !0x1;
            },
            'onScroll'() {
                const iC = iv, N = (y == null ? void 0x0 : y['current']) || p['floating'];
                if (!(!w[iC(0x2da)] || !N || !D[iC(0x2da)])) {
                    if (E[iC(0x2da)] !== null) {
                        const O = N[iC(0x369)] - E[iC(0x2da)];
                        (w[iC(0x2da)][iC(0x211)] < -0.5 && O < -0x1 || w[iC(0x2da)]['top'] < -0.5 && O > 0x1) && a48a6['flushSync'](() => C(P => P + O));
                    }
                    requestAnimationFrame(() => {
                        const iD = iC;
                        E[iD(0x2da)] = N[iD(0x369)];
                    });
                }
            }
        }), [
            p[iv(0x29d)],
            C,
            w,
            y
        ]), I = {};
    return I[iv(0x29d)] = H, a48a4['useMemo'](() => v ? I : {}, [
        v,
        H
    ]);
}
const a48e5 = {};
a48e5[a48eW(0x23e)] = void 0x0, a48e5[a48eW(0x30f)] = () => {
}, a48e5['setFloating'] = () => {
}, a48e5[a48eW(0x344)] = () => ({}), a48e5[a48eW(0x209)] = () => ({}), a48e5['slot'] = {};
let a48e6 = a48a4['createContext'](a48e5);
a48e6[a48eW(0x35e)] = a48eW(0x2df);
let a48e7 = a48a4[a48eW(0x274)](null);
a48e7[a48eW(0x35e)] = a48eW(0x355);
function a48e8(a) {
    const iE = a48eW;
    return a48a4['useMemo'](() => a ? typeof a == iE(0x290) ? { 'to': a } : a : null, [a]);
}
function a48e9() {
    const iF = a48eW;
    return a48a4[iF(0x2d0)](a48e6)[iF(0x30f)];
}
function a48ea() {
    const iG = a48eW;
    return a48a4[iG(0x2d0)](a48e6)[iG(0x344)];
}
function a48eb() {
    const iH = a48eW;
    let {
        getFloatingProps: b,
        slot: c
    } = a48a4['useContext'](a48e6);
    const d = {};
    return d['data-anchor'] = c[iH(0x22d)], a48a4[iH(0x329)]((...f) => Object[iH(0x2ff)]({}, b(...f), d), [
        b,
        c
    ]);
}
function a48ec(a = null) {
    const iI = a48eW;
    a === !0x1 && (a = null), typeof a == iI(0x290) && (a = { 'to': a });
    let b = a48a4[iI(0x2d0)](a48e7), c = a48a4['useMemo'](() => a, [JSON[iI(0x20d)](a, (f, g) => {
                const iJ = iI;
                var h;
                return (h = g == null ? void 0x0 : g[iJ(0x2e7)]) != null ? h : g;
            })]);
    a48a9(() => {
        b == null || b(c ?? null);
    }, [
        b,
        c
    ]);
    let d = a48a4[iI(0x2d0)](a48e6);
    return a48a4[iI(0x295)](() => [
        d[iI(0x20a)],
        a ? d[iI(0x23e)] : {}
    ], [
        d[iI(0x20a)],
        a,
        d[iI(0x23e)]
    ]);
}
let a48ed = 0x4;
function a48ee({
    children: O,
    enabled: P = !0x0
}) {
    const iK = a48eW;
    let [T, X] = a48a4[iK(0x36a)](null), [a0, a1] = a48a4[iK(0x36a)](0x0), a2 = a48a4[iK(0x2a7)](null), [a3, a4] = a48a4[iK(0x36a)](null);
    a48ef(a3);
    let a5 = P && T !== null && a3 !== null, {
            to: a6 = iK(0x211),
            gap: a7 = 0x0,
            offset: a8 = 0x0,
            padding: a9 = 0x0,
            inner: aa
        } = a48eg(T, a3), [ab, ac = iK(0x251)] = a6[iK(0x302)]('\x20');
    a48a9(() => {
        a5 && a1(0x0);
    }, [a5]);
    const ad = {};
    ad[iK(0x2a8)] = a9;
    const af = {};
    af[iK(0x2a8)] = a9;
    let {
            refs: ag,
            floatingStyles: ah,
            context: aj
        } = a48dX({
            'open': a5,
            'placement': ab === iK(0x244) ? ac === iK(0x251) ? 'bottom' : 'bottom-' + ac : ac === iK(0x251) ? '' + ab : ab + '-' + ac,
            'strategy': iK(0x342),
            'transform': !0x1,
            'middleware': [
                a48dB({
                    'mainAxis': ab === iK(0x244) ? 0x0 : a7,
                    'crossAxis': a8
                }),
                a48dC(ad),
                ab !== iK(0x244) && a48dD(af),
                ab === 'selection' && aa ? a48e3({
                    ...aa,
                    'padding': a9,
                    'overflowRef': a2,
                    'offset': a0,
                    'minItemsVisible': a48ed,
                    'referenceOverflowThreshold': a9,
                    'onFallbackChange'(az) {
                        const iL = iK;
                        var aA, aB;
                        if (!az)
                            return;
                        let aC = aj[iL(0x360)][iL(0x29d)];
                        if (!aC)
                            return;
                        let aD = parseFloat(getComputedStyle(aC)[iL(0x25e)]) || 0x0, aE = Math[iL(0x1f1)](a48ed, aC['childElementCount']), aF = 0x0, aG = 0x0;
                        for (let aH of (aB = (aA = aj['elements'][iL(0x29d)]) == null ? void 0x0 : aA['childNodes']) != null ? aB : [])
                            if (a48af(aH)) {
                                let aI = aH[iL(0x1f6)], aJ = aI + aH['clientHeight'] + aD, aK = aC['scrollTop'], aL = aK + aC['clientHeight'];
                                if (aI >= aK && aJ <= aL)
                                    aE--;
                                else {
                                    aG = Math[iL(0x1fe)](0x0, Math[iL(0x1f1)](aJ, aL) - Math[iL(0x1fe)](aI, aK)), aF = aH[iL(0x330)];
                                    break;
                                }
                            }
                        aE >= 0x1 && a1(aM => {
                            let aN = aF * aE - aG + aD;
                            return aM >= aN ? aM : aN;
                        });
                    }
                }) : null,
                a48dE({
                    'padding': a9,
                    'apply'({
                        availableWidth: az,
                        availableHeight: aA,
                        elements: aB
                    }) {
                        const iM = iK, aC = {};
                        aC[iM(0x2f0)] = iM(0x20b), aC[iM(0x224)] = az + 'px', aC['maxHeight'] = 'min(var(--anchor-max-height,\x20100vh),\x20' + aA + iM(0x226), Object[iM(0x2ff)](aB['floating'][iM(0x207)], aC);
                    }
                })
            ][iK(0x337)](Boolean),
            'whileElementsMounted': a48dl
        }), [ak = ab, al = ac] = aj['placement'][iK(0x302)]('-');
    ab === iK(0x244) && (ak = iK(0x244));
    const am = {};
    am[iK(0x220)] = a2, am[iK(0x2f5)] = a1;
    let ap = a48a4[iK(0x295)](() => ({
            'anchor': [
                ak,
                al
            ][iK(0x337)](Boolean)[iK(0x358)]('\x20')
        }), [
            ak,
            al
        ]), aq = a48e4(aj, am), {
            getReferenceProps: as,
            getFloatingProps: au
        } = a48e1([aq]), av = a48ac(az => {
            const iN = iK;
            a4(az), ag[iN(0x20a)](az);
        });
    const aw = {};
    aw[iK(0x26d)] = X;
    const ax = {};
    ax['setFloating'] = av, ax[iK(0x30f)] = ag[iK(0x30f)], ax['styles'] = ah, ax[iK(0x344)] = as, ax[iK(0x209)] = au, ax[iK(0x28a)] = ap;
    const ay = {};
    return ay[iK(0x26d)] = ax, a48a4[iK(0x237)](a48e7['Provider'], aw, a48a4[iK(0x237)](a48e6[iK(0x275)], ay, O));
}
function a48ef(a) {
    a48a9(() => {
        const iP = a48b;
        if (!a)
            return;
        let b = new MutationObserver(() => {
            const iO = a48b;
            let d = window['getComputedStyle'](a)['maxHeight'], f = parseFloat(d);
            if (isNaN(f))
                return;
            let g = parseInt(d);
            isNaN(g) || f !== g && (a[iO(0x207)][iO(0x246)] = Math[iO(0x2f9)](f) + 'px');
        });
        const c = {};
        return c[iP(0x29b)] = !0x0, c['attributeFilter'] = [iP(0x207)], (b[iP(0x2bd)](a, c), () => {
            b['disconnect']();
        });
    }, [a]);
}
function a48eg(b, c) {
    const iQ = a48eW;
    var d, f, g;
    let h = a48eh((d = b == null ? void 0x0 : b[iQ(0x307)]) != null ? d : 'var(--anchor-gap,\x200)', c), k = a48eh((f = b == null ? void 0x0 : b[iQ(0x32a)]) != null ? f : 'var(--anchor-offset,\x200)', c), m = a48eh((g = b == null ? void 0x0 : b[iQ(0x2a8)]) != null ? g : 'var(--anchor-padding,\x200)', c);
    const p = { ...b };
    return p[iQ(0x307)] = h, p[iQ(0x32a)] = k, p[iQ(0x2a8)] = m, p;
}
function a48eh(a, b, c = void 0x0) {
    const iU = a48eW;
    let d = a48al(), f = a48ac((m, p) => {
            const iR = a48b;
            if (m == null)
                return [
                    c,
                    null
                ];
            if (typeof m == iR(0x1ec))
                return [
                    m,
                    null
                ];
            if (typeof m == 'string') {
                if (!p)
                    return [
                        c,
                        null
                    ];
                let v = a48ej(m, p);
                return [
                    v,
                    w => {
                        const iS = iR;
                        let y = a48ei(m);
                        {
                            let A = y[iS(0x293)](C => window[iS(0x2b1)](p)[iS(0x338)](C));
                            d[iS(0x2cc)](function C() {
                                const iT = iS;
                                d[iT(0x352)](C);
                                let D = !0x1;
                                for (let [F, H] of y[iT(0x208)]()) {
                                    let I = window[iT(0x2b1)](p)[iT(0x338)](H);
                                    if (A[F] !== I) {
                                        A[F] = I, D = !0x0;
                                        break;
                                    }
                                }
                                if (!D)
                                    return;
                                let E = a48ej(m, p);
                                v !== E && (w(E), v = E);
                            });
                        }
                        return d[iS(0x1fa)];
                    }
                ];
            }
            return [
                c,
                null
            ];
        }), g = a48a4[iU(0x295)](() => f(a, b)[0x0], [
            a,
            b
        ]), [h = g, k] = a48a4[iU(0x36a)]();
    return a48a9(() => {
        let [m, p] = f(a, b);
        if (k(m), !!p)
            return p(k);
    }, [
        a,
        b
    ]), h;
}
function a48ei(a) {
    const iV = a48eW;
    let b = /var\((.*)\)/[iV(0x2c2)](a);
    if (b) {
        let c = b[0x1][iV(0x345)](',');
        if (c === -0x1)
            return [b[0x1]];
        let d = b[0x1][iV(0x313)](0x0, c)[iV(0x1f2)](), f = b[0x1][iV(0x313)](c + 0x1)[iV(0x1f2)]();
        return f ? [
            d,
            ...a48ei(f)
        ] : [d];
    }
    return [];
}
function a48ej(a, b) {
    const iW = a48eW;
    let c = document[iW(0x237)]('div');
    b[iW(0x33e)](c), c[iW(0x207)][iW(0x262)]('margin-top', '0px', iW(0x30e)), c[iW(0x207)]['setProperty']('margin-top', a, iW(0x30e));
    let d = parseFloat(window[iW(0x2b1)](c)[iW(0x34c)]) || 0x0;
    return b[iW(0x31c)](c), d;
}
let a48ek = a48a4[a48eW(0x274)](null);
a48ek[a48eW(0x35e)] = 'OpenClosedContext';
var a48el = (a => (a[a['Open'] = 0x1] = a48eW(0x225), a[a[a48eW(0x242)] = 0x2] = a48eW(0x242), a[a[a48eW(0x2b9)] = 0x4] = a48eW(0x2b9), a[a[a48eW(0x359)] = 0x8] = a48eW(0x359), a))(a48el || {});
function a48em() {
    const iX = a48eW;
    return a48a4[iX(0x2d0)](a48ek);
}
function a48en({
    value: b,
    children: c
}) {
    const iY = a48eW, d = {};
    return d[iY(0x26d)] = b, a48a8[iY(0x237)](a48ek['Provider'], d, c);
}
function a48eo({children: b}) {
    const iZ = a48eW, c = {};
    return c['value'] = null, a48a8['createElement'](a48ek[iZ(0x275)], c, b);
}
function a48ep(a) {
    const j0 = a48eW;
    throw new Error(j0(0x20e) + a);
}
var a48eq = (a => (a[a[a48eW(0x30a)] = 0x0] = a48eW(0x30a), a[a[a48eW(0x27d)] = 0x1] = 'Previous', a[a['Next'] = 0x2] = a48eW(0x27e), a[a[a48eW(0x2e8)] = 0x3] = 'Last', a[a[a48eW(0x255)] = 0x4] = 'Specific', a[a['Nothing'] = 0x5] = 'Nothing', a))(a48eq || {});
function a48er(a, b) {
    const j1 = a48eW;
    let c = b[j1(0x32c)]();
    if (c[j1(0x2fa)] <= 0x0)
        return null;
    let d = b[j1(0x327)](), f = d ?? -0x1;
    switch (a[j1(0x354)]) {
    case 0x0: {
            for (let g = 0x0; g < c[j1(0x2fa)]; ++g)
                if (!b[j1(0x2e4)](c[g], g, c))
                    return g;
            return d;
        }
    case 0x1: {
            f === -0x1 && (f = c[j1(0x2fa)]);
            for (let h = f - 0x1; h >= 0x0; --h)
                if (!b[j1(0x2e4)](c[h], h, c))
                    return h;
            return d;
        }
    case 0x2: {
            for (let k = f + 0x1; k < c[j1(0x2fa)]; ++k)
                if (!b['resolveDisabled'](c[k], k, c))
                    return k;
            return d;
        }
    case 0x3: {
            for (let l = c[j1(0x2fa)] - 0x1; l >= 0x0; --l)
                if (!b[j1(0x2e4)](c[l], l, c))
                    return l;
            return d;
        }
    case 0x4: {
            for (let m = 0x0; m < c[j1(0x2fa)]; ++m)
                if (b[j1(0x2d5)](c[m], m, c) === a['id'])
                    return m;
            return d;
        }
    case 0x5:
        return null;
    default:
        a48ep(a);
    }
}
function a48es(a) {
    const j2 = a48eW;
    let b = a48ac(a), c = a48a4['useRef'](!0x1);
    a48a4['useEffect'](() => (c[j2(0x2da)] = !0x1, () => {
        const j3 = j2;
        c[j3(0x2da)] = !0x0, a48am(() => {
            c['current'] && b();
        });
    }), [b]);
}
function a48et() {
    let a = typeof document > 'u';
    return 'useSyncExternalStore' in a48a7 ? (b => b['useSyncExternalStore'])(a48a7)(() => () => {
    }, () => !0x1, () => !a) : !0x1;
}
function a48eu() {
    const j4 = a48eW;
    let a = a48et(), [b, c] = a48a4[j4(0x36a)](a48an[j4(0x34d)]);
    return b && a48an['isHandoffComplete'] === !0x1 && c(!0x1), a48a4[j4(0x272)](() => {
        b !== !0x0 && c(!0x0);
    }, [b]), a48a4[j4(0x272)](() => a48an['handoff'](), []), a ? !0x1 : b;
}
let a48ev = a48a4[a48eW(0x274)](!0x1);
function a48ew() {
    const j5 = a48eW;
    return a48a4[j5(0x2d0)](a48ev);
}
function a48ex(b) {
    const j6 = a48eW, c = {};
    return c['value'] = b[j6(0x24c)], a48a8[j6(0x237)](a48ev[j6(0x275)], c, b[j6(0x35f)]);
}
function a48ey(a) {
    const j7 = a48eW;
    let b = a48ew(), c = a48a4[j7(0x2d0)](a48eD), [d, f] = a48a4[j7(0x36a)](() => {
            const j8 = j7;
            var g;
            if (!b && c !== null)
                return (g = c['current']) != null ? g : null;
            if (a48an[j8(0x294)])
                return null;
            let h = a == null ? void 0x0 : a['getElementById'](j8(0x299));
            if (h)
                return h;
            if (a === null)
                return null;
            let k = a[j8(0x237)](j8(0x2ba));
            return k[j8(0x31a)]('id', j8(0x299)), a[j8(0x2ae)][j8(0x33e)](k);
        });
    return a48a4[j7(0x272)](() => {
        const j9 = j7;
        d !== null && (a != null && a[j9(0x2ae)][j9(0x350)](d) || a == null || a['body'][j9(0x33e)](d));
    }, [
        d,
        a
    ]), a48a4[j7(0x272)](() => {
        const ja = j7;
        b || c !== null && f(c[ja(0x2da)]);
    }, [
        c,
        f,
        b
    ]), d;
}
let a48ez = a48a4[a48eW(0x282)], a48eA = a48ao(function (g, k) {
        const jb = a48eW;
        let {
                ownerDocument: p = null,
                ...v
            } = g, w = a48a4[jb(0x2a7)](null), y = a48ap(a48ar(P => {
                const jc = jb;
                w[jc(0x2da)] = P;
            }), k), A = a48bh(w), C = p ?? A, D = a48ey(C), [E] = a48a4[jb(0x36a)](() => {
                const jd = jb;
                var P;
                return a48an[jd(0x294)] ? null : (P = C == null ? void 0x0 : C['createElement'](jd(0x2ba))) != null ? P : null;
            }), F = a48a4[jb(0x2d0)](a48eF), H = a48eu();
        a48a9(() => {
            const jf = jb;
            !D || !E || D[jf(0x350)](E) || (E[jf(0x31a)](jf(0x2a3), ''), D[jf(0x33e)](E));
        }, [
            D,
            E
        ]), a48a9(() => {
            const jg = jb;
            if (E && F)
                return F[jg(0x2c5)](E);
        }, [
            F,
            E
        ]), a48es(() => {
            const jh = jb;
            var P;
            !D || !E || (a48ai(E) && D['contains'](E) && D[jh(0x31c)](E), D[jh(0x2e6)]['length'] <= 0x0 && ((P = D[jh(0x2e0)]) == null || P[jh(0x31c)](D)));
        });
        let I = a48aq();
        const N = {};
        N['ref'] = y;
        const O = {};
        return O[jb(0x25b)] = N, O['theirProps'] = v, O[jb(0x28a)] = {}, O['defaultTag'] = a48ez, O[jb(0x289)] = 'Portal', H ? !D || !E ? null : a48a6[jb(0x1e8)](I(O), E) : null;
    });
function a48eB(d, f) {
    const ji = a48eW;
    let g = a48ap(f), {
            enabled: h = !0x0,
            ownerDocument: k,
            ...m
        } = d, p = a48aq();
    const s = { ...m };
    s[ji(0x23a)] = k, s['ref'] = g;
    const v = {};
    v[ji(0x218)] = g;
    const w = {};
    return w[ji(0x25b)] = v, w['theirProps'] = m, w[ji(0x28a)] = {}, w[ji(0x296)] = a48ez, w[ji(0x289)] = ji(0x2b8), h ? a48a8[ji(0x237)](a48eA, s) : p(w);
}
let a48eC = a48a4[a48eW(0x282)], a48eD = a48a4[a48eW(0x274)](null);
function a48eE(c, d) {
    const jj = a48eW;
    let {
            target: f,
            ...g
        } = c, h = { 'ref': a48ap(d) }, k = a48aq();
    const l = {};
    l[jj(0x26d)] = f;
    const m = {};
    return m[jj(0x25b)] = h, m[jj(0x346)] = g, m[jj(0x296)] = a48eC, m[jj(0x289)] = 'Popover.Group', a48a8[jj(0x237)](a48eD[jj(0x275)], l, k(m));
}
let a48eF = a48a4[a48eW(0x274)](null);
function a48eG() {
    const jk = a48eW;
    let a = a48a4[jk(0x2d0)](a48eF), b = a48a4[jk(0x2a7)]([]), c = a48ac(g => (b[jk(0x2da)][jk(0x2d7)](g), a && a[jk(0x2c5)](g), () => d(g))), d = a48ac(g => {
            const jl = jk;
            let h = b['current']['indexOf'](g);
            h !== -0x1 && b['current'][jl(0x2db)](h, 0x1), a && a[jl(0x316)](g);
        }), f = a48a4['useMemo'](() => ({
            'register': c,
            'unregister': d,
            'portals': b
        }), [
            c,
            d,
            b
        ]);
    return [
        b,
        a48a4['useMemo'](() => function ({children: g}) {
            const h = {};
            return h['value'] = f, a48a8['createElement'](a48eF['Provider'], h, g);
        }, [f])
    ];
}
let a48eH = a48ao(a48eB), a48eI = a48ao(a48eE), a48eJ = Object[a48eW(0x2ff)](a48eH, { 'Group': a48eI });
function a48eK(b, c) {
    const jm = a48eW, d = {};
    d[jm(0x319)] = 0x0, d[jm(0x21b)] = 0x0;
    let f = a48a4[jm(0x2a7)](d);
    if (a48a9(() => {
            const jp = jm;
            if (!c)
                return;
            let h = c['getBoundingClientRect']();
            h && (f[jp(0x2da)] = h);
        }, [
            b,
            c
        ]), c == null || !b || c === document[jm(0x2ea)])
        return !0x1;
    let g = c[jm(0x234)]();
    return g[jm(0x21b)] !== f[jm(0x2da)][jm(0x21b)] || g[jm(0x319)] !== f[jm(0x2da)][jm(0x319)];
}
let a48eL = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function a48eM(a) {
    const jq = a48eW;
    var b, c;
    let d = (b = a[jq(0x2f7)]) != null ? b : '', f = a['cloneNode'](!0x0);
    if (!a48af(f))
        return d;
    let g = !0x1;
    for (let k of f[jq(0x212)]('[hidden],[aria-hidden],[role=\x22img\x22]'))
        k[jq(0x341)](), g = !0x0;
    let h = g ? (c = f[jq(0x2f7)]) != null ? c : '' : d;
    return a48eL['test'](h) && (h = h[jq(0x2cb)](a48eL, '')), h;
}
function a48eN(a) {
    const js = a48eW;
    let b = a['getAttribute']('aria-label');
    if (typeof b == 'string')
        return b[js(0x1f2)]();
    let c = a[js(0x2a5)](js(0x314));
    if (c) {
        let d = c[js(0x302)]('\x20')[js(0x293)](f => {
            const ju = js;
            let g = document[ju(0x253)](f);
            if (g) {
                let h = g['getAttribute']('aria-label');
                return typeof h == ju(0x290) ? h[ju(0x1f2)]() : a48eM(g)[ju(0x1f2)]();
            }
            return null;
        })['filter'](Boolean);
        if (d[js(0x2fa)] > 0x0)
            return d['join'](',\x20');
    }
    return a48eM(a)[js(0x1f2)]();
}
function a48eO(a) {
    const jv = a48eW;
    let b = a48a4[jv(0x2a7)](''), c = a48a4[jv(0x2a7)]('');
    return a48ac(() => {
        const jw = jv;
        let d = a['current'];
        if (!d)
            return '';
        let f = d[jw(0x2f7)];
        if (b['current'] === f)
            return c[jw(0x2da)];
        let g = a48eN(d)[jw(0x1f2)]()[jw(0x2c0)]();
        return b[jw(0x2da)] = f, c['current'] = g, g;
    });
}
export {
    a48ee as A,
    a48eu as B,
    a48eG as C,
    a48eo as D,
    a48aH as E,
    a48e9 as F,
    a48ex as G,
    a48eI as H,
    a48b3 as I,
    a48ec as R,
    a48b1 as S,
    a48eb as T,
    a48aS as a,
    a48es as b,
    a48eq as c,
    a48bG as d,
    a48bx as e,
    a48er as f,
    a48b8 as g,
    a48bF as h,
    a48el as i,
    a48av as j,
    a48aP as k,
    a48eJ as l,
    a48eO as m,
    a48bh as n,
    a48bz as o,
    a48b9 as p,
    a48bg as q,
    a48en as r,
    a48eK as s,
    a48ea as t,
    a48em as u,
    a48bo as v,
    a48bm as w,
    a48aL as x,
    a48e8 as y,
    a48be as z
};