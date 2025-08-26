const a43W = a43b;
(function (a, c) {
    const V = a43b, e = a();
    while (!![]) {
        try {
            const f = parseInt(V(0xb2)) / 0x1 + parseInt(V(0xa6)) / 0x2 + -parseInt(V(0xc4)) / 0x3 + -parseInt(V(0xc1)) / 0x4 + -parseInt(V(0x9c)) / 0x5 * (parseInt(V(0xaf)) / 0x6) + parseInt(V(0xb5)) / 0x7 + -parseInt(V(0xb7)) / 0x8;
            if (f === c)
                break;
            else
                e['push'](e['shift']());
        } catch (i) {
            e['push'](e['shift']());
        }
    }
}(a43a, 0x64f81));
import {
    c as a43u,
    u,
    d as a43v,
    e as a43w,
    r as a43x,
    _ as a43y,
    j as a43z,
    O as a43A,
    M as a43B,
    f as a43C,
    S as a43D
} from './components-CmNGJ9Db.js';
import {
    u as a43E,
    A
} from './gcontext-LWGqsL34.js';
import { N as a43F } from './notificationContext-DDeSlUs6.js';
import {
    A as a43G,
    m as a43H
} from './proxy-2R9rtCoz.js';
function a43b(a, b) {
    const c = a43a();
    return a43b = function (d, e) {
        d = d - 0x91;
        let f = c[d];
        if (a43b['YldUIg'] === undefined) {
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
            a43b['gxNPni'] = g, a = arguments, a43b['YldUIg'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a43b['gxNPni'](f), a[i] = f) : f = j, f;
    }, a43b(a, b);
}
import './createLucideIcon-BfjMWJ_G.js';
/**
 * @remix-run/react v2.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
let a43I = a43W(0x9f);
function a43J({
    getKey: i,
    ...n
}) {
    const X = a43W;
    let {isSpaMode: q} = a43u(), r = u(), z = a43v();
    const B = {};
    B['getKey'] = i, B[X(0xac)] = a43I, a43w(B);
    let C = a43x['useMemo'](() => {
        const Y = X;
        if (!i)
            return null;
        let E = i(r, z);
        return E !== r[Y(0x96)] ? E : null;
    }, []);
    if (q)
        return null;
    let D = ((E, F) => {
        const Z = X;
        if (!window[Z(0xbb)]['state'] || !window[Z(0xbb)][Z(0xc3)][Z(0x96)]) {
            let G = Math['random']()[Z(0xaa)](0x20)[Z(0xa9)](0x2);
            const H = {};
            H[Z(0x96)] = G, window[Z(0xbb)][Z(0xc7)](H, '');
        }
        try {
            let J = JSON[Z(0xca)](sessionStorage['getItem'](E) || '{}')[F || window['history'][Z(0xc3)][Z(0x96)]];
            typeof J == 'number' && window[Z(0xc8)](0x0, J);
        } catch (K) {
            console[Z(0xb4)](K), sessionStorage['removeItem'](E);
        }
    })['toString']();
    return a43x[X(0x91)](X(0x92), a43y({}, n, {
        'suppressHydrationWarning': !0x0,
        'dangerouslySetInnerHTML': { '__html': '(' + D + ')(' + JSON[X(0xc9)](a43I) + ',\x20' + JSON['stringify'](C) + ')' }
    }));
}
const a43K = {};
a43K[a43W(0x98)] = 'preconnect', a43K[a43W(0xa4)] = a43W(0xb8);
const a43L = {};
a43L['rel'] = a43W(0xa3), a43L[a43W(0xa4)] = a43W(0xa5), a43L[a43W(0xb3)] = a43W(0xc6);
const a43M = {};
a43M[a43W(0x98)] = a43W(0xae), a43M['href'] = a43W(0xa1);
const a43N = () => [
    a43K,
    a43L,
    a43M
];
function a43O({children: f}) {
    const a0 = a43W, i = {};
    i['charSet'] = a0(0x9b);
    const m = {};
    m['name'] = a0(0xb0), m[a0(0xb6)] = a0(0x9a);
    const n = {};
    return n[a0(0x94)] = f, a43z['jsxs'](a0(0xc5), {
        'lang': 'en',
        'children': [
            a43z[a0(0xb9)](a0(0xa7), {
                'children': [
                    a43z[a0(0x93)](a0(0x95), i),
                    a43z['jsx']('meta', m),
                    a43z[a0(0x93)](a43B, {}),
                    a43z[a0(0x93)](a43C, {})
                ]
            }),
            a43z[a0(0xb9)](a0(0x9e), {
                'children': [
                    a43z[a0(0x93)](A, n),
                    a43z[a0(0x93)](a43J, {}),
                    a43z[a0(0x93)](a43D, {})
                ]
            })
        ]
    });
}
function a43a() {
    const a4 = [
        'y3jLyxrLrwXLBwvUDa',
        'C2nYAxb0',
        'ANn4',
        'y2HPBgrYzw4',
        'Bwv0yq',
        'A2v5',
        'zgL2',
        'CMvS',
        'C3rHDhvZ',
        'D2LKDgG9zgv2AwnLlxDPzhrOlcbPBML0AwfSlxnJywXLpte',
        'DxrMltG',
        'mJi4otK1AKvwBMLI',
        'l2fWAs9YzwzYzxnOlW',
        'yM9KEq',
        'Cg9ZAxrPB25Z',
        'rNjHz21LBNq',
        'Ahr0Chm6lY9MB250CY5NB29NBgvHCgLZlMnVBs9JC3mYp2zHBwLSEt1dywXSAwDYywzMAxr0AszMyw1PBhK9s2fSyw06D2DODeaZmda7ndaWoZCWmczMyw1PBhK9s2f1C2HHBITty3jPChqMzMfTAwX5pu94yw5PDw06D2DODeaYmdaUlJGWmczMyw1PBhK9ugXHExDYAxrLk0LooNDNAhramtaWlI40mdaMzMfTAwX5pvbVChbPBNm6AxrHBcX3z2H0qdaSmtaWoZaSmJaWoZaSmZaWoZaSndaWoZaSntaWoZaSnJaWoZaSnZaWoZaSodaWoZaSotaWoZeSmtaWoZeSmJaWoZeSmZaWoZeSndaWoZeSntaWoZeSnJaWoZeSnZaWoZeSodaWoZeSotaWjMzHBwLSEt1tyxrPC2z5jMrPC3bSyxK9C3DHCa',
        'zhvYyxrPB24',
        'ChjLy29UBMvJDa',
        'AhjLzG',
        'Ahr0Chm6lY9MB250CY5NC3rHDgLJlMnVBq',
        'mtu3odi2mKLlserqwG',
        'AgvHza',
        'C2v0sxrLBq',
        'C2XPy2u',
        'Dg9tDhjPBMC',
        'D2fPDa',
        'C3rVCMfNzuTLEq',
        'DgHLBwu',
        'C3r5BgvZAgvLDa',
        'mZbYr2jkExa',
        'DMLLD3bVCNq',
        'Bg9NAw4',
        'nZe2mdqZAxnJzujn',
        'y3jVC3npCMLNAw4',
        'zxjYB3i',
        'mJCYntKYnNrUq2nNuW',
        'y29UDgvUDa',
        'mty4nZi0og1MD3bOEG',
        'Ahr0Chm6lY9MB250CY5NB29NBgvHCgLZlMnVBq',
        'ANn4CW',
        'Cgf0Ag5HBwu',
        'AgLZDg9YEq',
        'Aw5PDgLHBa',
        'z2v0sxrLBq',
        'B3bHy2L0Eq',
        'yw5PBwf0zq',
        'ChjVzMLSzq',
        'mtm1nZG1mLzMEwXeuW',
        'zxHPDa',
        'C3rHDgu',
        'mJeWndK3n1nNExvMsW',
        'AhrTBa',
        'yw5VBNLTB3vZ',
        'CMvWBgfJzvn0yxrL',
        'C2nYB2XSvg8',
        'C3rYAw5NAwz5',
        'CgfYC2u'
    ];
    a43a = function () {
        return a4;
    };
    return a43a();
}
function a43P() {
    const a3 = a43W, {
            accessToken: z,
            setAccessToken: B,
            setProfile: C,
            theme: D,
            setTheme: E
        } = a43E(), F = u();
    a43x['useEffect'](() => {
        async function Q() {
            const a1 = a43b, R = await fetch(a1(0x9d));
            if (R[a1(0x99)] === 0xc8) {
                const T = await R['json']();
                B(T['token']), C(U => ({
                    ...U,
                    ...T[a1(0xc0)]
                })), localStorage[a1(0xa8)]('login', 'y');
            } else
                B(void 0x0), localStorage[a1(0xa8)](a1(0xb1), 'n');
        }
        z === void 0x0 && Q();
    }, [z]), a43x['useEffect'](() => {
        const a2 = a43b, Q = localStorage[a2(0xbd)](a2(0xad));
        Q && E(Q);
    });
    const G = {};
    G[a3(0xbe)] = 0x0;
    const H = {};
    H[a3(0xbe)] = 0x1;
    const J = {};
    J[a3(0xbe)] = 0x0;
    const K = {};
    K['initial'] = G, K[a3(0xbf)] = H, K['exit'] = J;
    const L = K, P = {};
    return P[a3(0xa2)] = 0.4, a43z[a3(0x93)](a43z[a3(0xa0)], {
        'children': a43z[a3(0x93)](a43G, {
            'mode': a3(0xab),
            'children': a43z['jsx'](a43H[a3(0x97)], {
                'variants': L,
                'initial': a3(0xbc),
                'animate': 'animate',
                'exit': a3(0xc2),
                'transition': P,
                'children': a43z['jsx'](a3(0x97), {
                    'className': '' + D,
                    'children': a43z[a3(0x93)](a43F, { 'children': a43z[a3(0x93)](a43A, {}) })
                })
            }, F[a3(0xba)])
        })
    });
}
export {
    a43O as Layout,
    a43P as default,
    a43N as links
};