(function (a, b) {
    const F = a29b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(F(0x18c)) / 0x1 * (-parseInt(F(0x17e)) / 0x2) + -parseInt(F(0x170)) / 0x3 * (parseInt(F(0x195)) / 0x4) + parseInt(F(0x197)) / 0x5 + parseInt(F(0x194)) / 0x6 + parseInt(F(0x168)) / 0x7 + parseInt(F(0x189)) / 0x8 + -parseInt(F(0x183)) / 0x9;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a29a, 0x698cb));
function a29b(a, b) {
    const c = a29a();
    return a29b = function (d, e) {
        d = d - 0x166;
        let f = c[d];
        if (a29b['bejyiJ'] === undefined) {
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
            a29b['ZAxWNf'] = g, a = arguments, a29b['bejyiJ'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a29b['ZAxWNf'](f), a[i] = f) : f = j, f;
    }, a29b(a, b);
}
import {
    r as a29h,
    j as a29i
} from './components-CmNGJ9Db.js';
import { u as a29j } from './centralFetcher-8HUxmdkN.js';
function a29a() {
    const J = [
        'rw50zxiGtMv3ifbHC3n3B3jK',
        'CgfZC3DVCMq',
        'ndG5ntbOCwXuDwC',
        'y2HPBgrYzw4',
        'CgXHy2vOB2XKzxi',
        'BwvZC2fNzq',
        'rw50zxiGq3vYCMvUDcbqyxnZD29Yza',
        'nduYmJuYn1nTwNjhAG',
        'yM9YzgvYigjVCMrLCI1IB3jKzxiGCc0YihCTzNvSBcbIzY1IywnRz3jVDw5K',
        'Dgv4Dc10zxH0uhjPBwfYEsbTDc00ihnWywnLlxKTna',
        'zgL2',
        'q2HHBMDLifbHC3n3B3jK',
        'DgfYz2v0',
        'ndm3mtaWohPws0r3rG',
        'C3vIBwL0',
        'DxnLrwzMzwn0',
        'murSt01wBa',
        'yxv0B0nVBxbSzxrL',
        'ANn4',
        'ANn4CW',
        'yNv0Dg9U',
        'AgLKzgvU',
        'DMfSDwu',
        'BMfTzq',
        'mtu1mdaXmgjhrvD2BG',
        'mZuZodi4tLvfEK92',
        'Aw5WDxq',
        'mZGXnJiWuvjmr0Tt',
        'l2fWAs9WyxnZD29Yza',
        'C3rHDhvZ',
        'mZmWmti2m3zZtgfbyW',
        'zMXLEcbQDxn0Awz5lwnLBNrLCG',
        'BMv3ugfZC3DVCMq',
        'tMv3ifbHC3n3B3jKicHbDcbSzwfZDca2ignOyxjHy3rLCIbSB25Nksa',
        'y2XHC3noyw1L',
        'u2f2zq',
        'BwLUtgvUz3rO',
        'Bwv0Ag9K',
        'mtvkB0zgv2W',
        'yMCTyNv0Dg9UihrLEhqTyNv0Dg9Uvgv4DfbYAw1HCNKGChGTncbWEs0Xig10ltqGDgv4Dc1SzW',
        'CMvWzwf0ugfZC3DVCMq',
        'ugfZC3DVCMqGDxbKyxrLzcbZDwnJzxnZzNvSBhK',
        'DhLWzq',
        'CMvXDwLYzwq',
        'q3vYCMvUDcbqyxnZD29Yzca',
        'u3vJy2vZCY4UlG',
        'y3vYCMvUDfbHC3n3B3jK',
        'ue9tva',
        'yM9KEq',
        'uMvWzwf0ifbHC3n3B3jKicHbDcbSzwfZDca2ignOyxjHy3rLCIbSB25Nksa'
    ];
    a29a = function () {
        return J;
    };
    return a29a();
}
import { u as a29k } from './gcontext-LWGqsL34.js';
import { u as a29l } from './notificationContext-DDeSlUs6.js';
import './createLucideIcon-BfjMWJ_G.js';
function a29m() {
    const G = a29b, {
            setHeaderText: j,
            profile: k
        } = a29k(), {addNotifications: m} = a29l(), q = a29j();
    a29h[G(0x18b)](() => {
        const H = G;
        j(H(0x187));
    }, []);
    async function s(A) {
        const I = G;
        A['preventDefault']();
        const B = new FormData(A[I(0x188)]), C = {};
        C[I(0x16f)] = I(0x179), C[I(0x17a)] = B;
        const D = {};
        D['title'] = I(0x177), D['message'] = I(0x173);
        const E = {};
        E['title'] = 'Failure...', E[I(0x181)] = 'Fail\x20to\x20update\x20password...try\x20gain\x20later.', (await q(I(0x166), C))[I(0x167)] === 0xc8 ? m(D) : m(E);
    }
    const v = {};
    v[G(0x191)] = !0x0, v[G(0x193)] = 'username', v[G(0x192)] = k['username'];
    const w = {};
    w['required'] = !0x0, w[G(0x18d)] = G(0x17d), w['type'] = 'password', w[G(0x193)] = G(0x178), w[G(0x180)] = G(0x182), w[G(0x16c)] = 'border\x20border-border\x20p-2\x20bg-background\x20w-full';
    const x = {};
    x[G(0x175)] = !0x0, x[G(0x16e)] = 0x6, x['autoComplete'] = G(0x17d), x[G(0x174)] = 'password', x[G(0x193)] = G(0x16a), x[G(0x180)] = 'Enter\x20New\x20Password', x[G(0x16c)] = G(0x184);
    const y = {};
    y[G(0x175)] = !0x0, y[G(0x16e)] = 0x6, y[G(0x18d)] = G(0x17d), y[G(0x174)] = G(0x17d), y[G(0x193)] = G(0x172), y[G(0x180)] = G(0x17c), y['className'] = G(0x184);
    const z = {};
    return z['type'] = G(0x18a), z[G(0x16c)] = G(0x171), z[G(0x17f)] = G(0x16d), a29i[G(0x18e)](a29i['Fragment'], {
        'children': a29i[G(0x18f)]('form', {
            'onSubmit': s,
            'className': G(0x185),
            'children': [
                a29i['jsx'](G(0x196), v),
                a29i['jsxs'](G(0x186), {
                    'children': [
                        G(0x176),
                        a29i[G(0x18e)](G(0x196), w)
                    ]
                }),
                a29i['jsxs']('div', {
                    'children': [
                        G(0x16b),
                        a29i[G(0x18e)](G(0x196), x)
                    ]
                }),
                a29i[G(0x18f)](G(0x186), {
                    'children': [
                        G(0x17b),
                        a29i[G(0x18e)](G(0x196), y)
                    ]
                }),
                a29i[G(0x18e)]('div', {
                    'className': G(0x169),
                    'children': a29i[G(0x18e)](G(0x190), z)
                })
            ]
        })
    });
}
export {
    a29m as default
};