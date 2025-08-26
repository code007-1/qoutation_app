(function (a, c) {
    const V = a27b, d = a();
    while (!![]) {
        try {
            const e = parseInt(V(0x116)) / 0x1 + parseInt(V(0xfb)) / 0x2 + parseInt(V(0x10b)) / 0x3 * (-parseInt(V(0x102)) / 0x4) + -parseInt(V(0x107)) / 0x5 * (parseInt(V(0x114)) / 0x6) + -parseInt(V(0x11c)) / 0x7 * (-parseInt(V(0x117)) / 0x8) + parseInt(V(0x110)) / 0x9 * (-parseInt(V(0x106)) / 0xa) + -parseInt(V(0x111)) / 0xb * (-parseInt(V(0x11d)) / 0xc);
            if (e === c)
                break;
            else
                d['push'](d['shift']());
        } catch (g) {
            d['push'](d['shift']());
        }
    }
}(a27a, 0x23271));
import {
    r as a27n,
    j as a27o
} from './components-CmNGJ9Db.js';
import {
    Q as a27p,
    a as a27q
} from './quotationsTableUI-D3jXk18J.js';
function a27b(a, b) {
    const c = a27a();
    return a27b = function (d, e) {
        d = d - 0xfa;
        let f = c[d];
        if (a27b['aOzGmr'] === undefined) {
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
            a27b['EHWePK'] = g, a = arguments, a27b['aOzGmr'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a27b['EHWePK'](f), a[i] = f) : f = j, f;
    }, a27b(a, b);
}
import {
    u as a27r,
    i as a27s,
    a as a27t
} from './gcontext-LWGqsL34.js';
import { u as a27u } from './centralFetcher-8HUxmdkN.js';
import { u as a27v } from './notificationContext-DDeSlUs6.js';
import './index-BxE89LvT.js';
import './createLucideIcon-BfjMWJ_G.js';
import './use-resolve-button-type-D3wVu0_O.js';
import './use-text-value-Dp8m3UbF.js';
function a27a() {
    const a0 = [
        'BgvUz3rO',
        'mtGWmtm2vKfABgrI',
        'BxqTnq',
        'l2fWAs9XDw90yxrPB25Zp3n0yxj0pq',
        'rMfPBhvYzs4UlG',
        'DxnLrwzMzwn0',
        'ANn4',
        'C3rHDhvZ',
        'nZu2v0XKzMzm',
        'l2fWAs9XDw90yxrPB25Zp3nRAxa9',
        'zw5K',
        'ANnVBG',
        'ndbdvuzPwu8',
        'mtiWmZq3nufprLrqqq',
        'BwvZC2fNzq',
        'rMfPBcb0BYbSB2fKigrHDgeU',
        'DxnLCM5HBwu',
        'mJK3m1jxEKfcDW',
        'DhLWzq',
        'l2fWAs9XDw90yxrPB25Z',
        'u2vHCMnOigj5ie5HBwuGB3iGAM9IihrPDgXL',
        'DxnLu3rHDgu',
        'ndC5mZrZwg12wxG',
        'mZyXndq3owXOsMTnBG',
        'C3rYAw5NAwz5',
        'rNjHz21LBNq',
        'nLnUwuDbDa',
        'rxjYB3iGD2HPBguGzgvSzxrPB24UlI4',
        'mtaXodu2swjXAez2',
        'mtuZmJbvtfrLDMS',
        'C2vJDgLVBG',
        'tM8GuxvVDgf0Aw9UCYbgB3vUzce',
        'zMLSDgvY',
        'l2fWAs9KzwXLDgu',
        'mJy2C2HXzKPp',
        'mtjOEvHitgq',
        'C3rHCNq',
        'jNrVpq',
        'DgL0Bgu'
    ];
    a27a = function () {
        return a0;
    };
    return a27a();
}
import './focus-management-egUUHrnq.js';
import './form-fields-B8cx7cWx.js';
import './use-is-mounted-DEj4J-ep.js';
import './dashboard.quotations.create-hE380rCC.js';
import './proxy-2R9rtCoz.js';
import './switch-SU3PNcDj.js';
import './listbox-DYEW970L.js';
const a27w = () => {
    const W = a27b, [a, e] = a27n[W(0x10f)](!0x1), {addNotifications: k} = a27v(), m = a27u(), {
            quoteData: q,
            setHeaderText: t,
            dataCount: v,
            setDataCount: A,
            setQuoteData: B,
            setData: E,
            setItems: G,
            profile: H
        } = a27r();
    async function I() {
        const X = W;
        e(!0x0);
        const L = await m(X(0x10d)), M = {};
        M[X(0x120)] = X(0xfe), M['message'] = 'Fail\x20to\x20load\x20data.';
        if (L[X(0x101)] === 0xc8) {
            const O = await L[X(0x105)]();
            B(O), A(O[X(0xfa)]);
        } else
            k(M);
        e(!0x1);
    }
    async function J(L) {
        const Y = W;
        e(!0x0);
        var M;
        if (L) {
            const O = {};
            O[Y(0x120)] = Y(0xfe), O[Y(0x108)] = Y(0x109);
            if (M = await m(Y(0xfd) + L[Y(0x11e)] + '&end=' + L[Y(0x104)] + Y(0x11f) + L['to']), M[Y(0x101)] === 0xc8) {
                const P = await M[Y(0x105)]();
                B(P);
            } else
                M[Y(0x101)] != 0xc8 && k(O);
            A(0x0), e(!0x1);
        } else {
            const R = {};
            R[Y(0x120)] = Y(0xfe), R[Y(0x108)] = Y(0x109);
            if (e(!0x0), M = await m(Y(0x103) + v), M[Y(0x101)] === 0xc8) {
                const T = await M[Y(0x105)]();
                v == 0x0 ? (B(T), A(T['length'])) : (B(U => [
                    ...U,
                    ...T
                ]), A(q[Y(0xfa)] + T['length']));
            } else
                M['status'] != 0xc8 && k(R);
            e(!0x1);
        }
    }
    async function K(L) {
        const Z = W, M = {};
        M['no'] = L, M['username'] = H[Z(0x10a)], M[Z(0x10c)] = 'quotations';
        const O = await m(Z(0x11b), {
            'method': 'POST',
            'body': JSON[Z(0x112)](M)
        });
        O[Z(0x101)] !== 0xc8 ? k({
            'title': Z(0x115),
            'message': O['statusText'] || ''
        }) : B(P => P[Z(0x11a)](R => R['no'] !== L));
    }
    return a27n[W(0xff)](() => {
        E(a27s()), G([]), t(a27t), v === 0x0 && I();
    }, []), a27o[W(0x100)](a27o[W(0x113)], {
        'children': a27o[W(0x100)](W(0x118), {
            'className': W(0xfc),
            'children': a27o[W(0x100)]('div', {
                'children': a27o[W(0x100)](a27p, {
                    'data': q,
                    'columns': a27q,
                    'searchLabel': W(0x10e),
                    'EmptyText': W(0x119),
                    'isFetching': a,
                    'search': J,
                    'refresh': I,
                    'deleteQuotation': K
                })
            })
        })
    });
};
export {
    a27w as default
};