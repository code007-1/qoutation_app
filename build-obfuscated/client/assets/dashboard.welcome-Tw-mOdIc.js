(function (a, b) {
    const B = a31b, c = a();
    while (!![]) {
        try {
            const d = parseInt(B(0x1ec)) / 0x1 * (-parseInt(B(0x1e6)) / 0x2) + parseInt(B(0x1fc)) / 0x3 * (-parseInt(B(0x1f9)) / 0x4) + -parseInt(B(0x1ef)) / 0x5 * (parseInt(B(0x1f7)) / 0x6) + -parseInt(B(0x1f6)) / 0x7 + -parseInt(B(0x1f5)) / 0x8 * (parseInt(B(0x1ff)) / 0x9) + -parseInt(B(0x1fb)) / 0xa * (-parseInt(B(0x201)) / 0xb) + parseInt(B(0x1ed)) / 0xc;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a31a, 0x97464));
import {
    a as a31l,
    j as a31m
} from './components-CmNGJ9Db.js';
import { u as a31n } from './gcontext-LWGqsL34.js';
function a31a() {
    const D = [
        'sgKUlI5hDw5Qyw4UlI5kAsdWN5glipcFMim',
        'z2v0rgf0zq',
        'rNjHz21LBNq',
        'ANn4CW',
        'ouXfCMzwEG',
        'mZiWodiZnJbxy0DmDKe',
        'yNv0Dg9U',
        'mtKWody1z3L2DuDk',
        'sgfWChKGqMLYDgHKyxKGDg8GBxKGyMvSB3zLzcbqCMLUy2vZCY4UlI4UlI4',
        'ugXLyxnLig5HCMf6ig10ihjOysbRCM8GBxvQAhnLlcbPignHBID0ihn0yxKGD2L0Ag91Dcb0ywXRAw5NihrVihLVDs4UlI4',
        'l2rHC2HIB2fYzc9OB21L',
        'ANn4',
        'zMXLEcbMBgv4lwnVBa',
        'mJK1mtG0ofbQrwHnCq',
        'mta1nZe0n3jzywTcvG',
        'nZHPzeD1z1y',
        'Dgv4Dc00EgWGzM9UDc1lyxvZAgfUig1Iltq',
        'otq2mJHPqun0ueq',
        'y2HPBgrYzw4',
        'mJe5mgLqrK5kza',
        'nZvTvK1AyMq',
        'y2XHC3noyw1L',
        'zgL2',
        'mtHoCuP0Axi',
        'zhvYyxrPB24',
        'mtm2mdDNq0Dtrxi',
        'B3bHy2L0Eq',
        'nZCZnJHRvvjNCLy',
        'Dgv4Dc1TzcbMB250luTHBgfT'
    ];
    a31a = function () {
        return D;
    };
    return a31a();
}
import {
    A as a31o,
    m as a31p
} from './proxy-2R9rtCoz.js';
function a31q() {
    const C = a31b, m = a31l(), {gQuote: p} = a31n(), q = new Date()[C(0x1e9)](), r = {};
    r['opacity'] = 0x0, r['y'] = -0x32;
    const u = {};
    u['opacity'] = 0x1, u['y'] = 0x0;
    const v = {};
    v[C(0x202)] = 0x0, v['y'] = 0x32;
    const w = {};
    w[C(0x200)] = 0.5;
    const x = {};
    x[C(0x1fd)] = C(0x1f8), x[C(0x1fa)] = C(0x1e8);
    const y = {};
    y[C(0x1fd)] = 'text-3xl\x20font-Kalam', y[C(0x1fa)] = q == 0xb ? C(0x1f0) : p;
    const z = {};
    return z[C(0x1fd)] = C(0x1e7), z['children'] = C(0x1f1), a31m['jsx'](a31m[C(0x1ea)], {
        'children': a31m[C(0x1f3)](a31o, {
            'children': a31m[C(0x1f3)](a31p[C(0x1fe)], {
                'className': 'h-screen\x20flex\x20items-center\x20justify-center\x20bg-blue-500\x20text-white\x20text-3xl',
                'initial': r,
                'animate': u,
                'exit': v,
                'transition': w,
                'children': a31m[C(0x1f3)](C(0x1fe), {
                    'className': 'mx-10\x20h-screen\x20flex\x20justify-center\x20items-center\x20align-middle',
                    'children': a31m[C(0x1eb)](C(0x1fe), {
                        'className': C(0x1f4),
                        'children': [
                            a31m[C(0x1f3)](C(0x1fe), x),
                            a31m[C(0x1f3)]('div', y),
                            a31m[C(0x1f3)](C(0x1fe), z),
                            a31m[C(0x1f3)](C(0x1ee), {
                                'className': 'bg-blue-600\x20w-min\x20text-white\x20text-base\x20font-mono\x20px-2\x20py-1\x20mt-4',
                                'onClick': A => m(C(0x1f2)),
                                'children': 'Next'
                            })
                        ]
                    })
                })
            })
        })
    });
}
function a31b(a, b) {
    const c = a31a();
    return a31b = function (d, e) {
        d = d - 0x1e6;
        let f = c[d];
        if (a31b['jPbMzx'] === undefined) {
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
            a31b['sLLAbA'] = g, a = arguments, a31b['jPbMzx'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a31b['sLLAbA'](f), a[i] = f) : f = j, f;
    }, a31b(a, b);
}
export {
    a31q as default
};