function a12b(a, b) {
    const c = a12a();
    return a12b = function (d, e) {
        d = d - 0x1a6;
        let f = c[d];
        if (a12b['WdnSIj'] === undefined) {
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
            a12b['hvRGWL'] = g, a = arguments, a12b['WdnSIj'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a12b['hvRGWL'](f), a[i] = f) : f = j, f;
    }, a12b(a, b);
}
(function (a, b) {
    const C = a12b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(C(0x1ad)) / 0x1 * (parseInt(C(0x1bc)) / 0x2) + parseInt(C(0x1b4)) / 0x3 * (parseInt(C(0x1a7)) / 0x4) + parseInt(C(0x1c0)) / 0x5 * (parseInt(C(0x1ba)) / 0x6) + parseInt(C(0x1bb)) / 0x7 * (parseInt(C(0x1af)) / 0x8) + parseInt(C(0x1ab)) / 0x9 * (-parseInt(C(0x1ae)) / 0xa) + -parseInt(C(0x1b1)) / 0xb * (parseInt(C(0x1a8)) / 0xc) + parseInt(C(0x1be)) / 0xd * (-parseInt(C(0x1b5)) / 0xe);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (e) {
            c['push'](c['shift']());
        }
    }
}(a12a, 0xd29cc));
import { u as a12h } from './gcontext-LWGqsL34.js';
function a12a() {
    const G = [
        'CgfYC2u',
        'mta0qKTksKru',
        'mty4z2TXu05v',
        'Dg9Rzw4',
        'C2v0sxrLBq',
        'odq5nZe5n1ryEMz5Ca',
        'Bg9NAw4',
        'mZzlDKTKEeO',
        'mtbHC2ris2y',
        'mJr1wLfezfm',
        'C3bSAxq',
        'ntuYnduZuhjAEunX',
        'BM93',
        'ANnVBG',
        'mty1mtGZAKj2vvPV',
        'mtrMweLOAKW',
        'C3rHDhvZ',
        'l2fWAs9YzwzYzxnO',
        'rMfPBgvKihrVihjLzNjLC2GGywnJzxnZihrVA2vU',
        'qxv0Ag9YAxPHDgLVBG',
        'ntyWnty5ofLRCg5qra',
        'mtqXode1mxr3C0n6zW',
        'mJK3mhLMD214Dq',
        'zxHW',
        'ntmZmZq0nwjLvwPZvG',
        'AgvHzgvYCW',
        'nujlANPqBG'
    ];
    a12a = function () {
        return G;
    };
    return a12a();
}
const a12i = () => {
    const {
        accessToken: a,
        setAccessToken: b
    } = a12h();
    function c(e) {
        const D = a12b;
        try {
            const g = JSON[D(0x1a6)](atob(e[D(0x1b0)]('.')[0x1]))[D(0x1bd)] * 0x3e8;
            return Date[D(0x1b2)]() >= g;
        } catch {
            return !0x0;
        }
    }
    async function d() {
        const E = a12b;
        if (a && !c(a))
            return a;
        const g = await fetch('/api/refresh');
        if (g[E(0x1b6)] === 0xc8) {
            const h = await g[E(0x1b3)]();
            return b(h[E(0x1a9)]), localStorage[E(0x1aa)](E(0x1ac), 'y'), h[E(0x1a9)];
        }
        b(void 0x0), localStorage[E(0x1aa)](E(0x1ac), 'n');
    }
    return async (j, k = {}) => {
        const F = a12b, m = await d();
        if (!m)
            throw new Response(F(0x1b8));
        const q = { ...k['headers'] || {} };
        q['Authorization'] = 'Bearer\x20' + m;
        const v = q, w = await fetch(j, {
                ...k,
                'headers': v
            });
        if (w[F(0x1b6)] === 0x191) {
            const x = await fetch(F(0x1b7));
            if (x['status'] === 0xc8) {
                const y = await x[F(0x1b3)]();
                b(y[F(0x1a9)]), localStorage['setItem']('login', 'y');
                const z = { ...k[F(0x1bf)] || {} };
                z[F(0x1b9)] = 'Bearer\x20' + y['token'];
                const A = z, B = { ...k };
                return B['headers'] = A, fetch(j, B);
            } else
                throw b(void 0x0), localStorage['setItem']('login', 'n'), new Response(F(0x1b8));
        }
        return w;
    };
};
export {
    a12i as u
};