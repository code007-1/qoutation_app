(function (a, c) {
    const V = a22b, e = a();
    while (!![]) {
        try {
            const f = parseInt(V(0x16c)) / 0x1 * (-parseInt(V(0x167)) / 0x2) + -parseInt(V(0x170)) / 0x3 * (parseInt(V(0x16b)) / 0x4) + parseInt(V(0x155)) / 0x5 * (-parseInt(V(0x16d)) / 0x6) + -parseInt(V(0x163)) / 0x7 + parseInt(V(0x171)) / 0x8 * (-parseInt(V(0x16f)) / 0x9) + parseInt(V(0x153)) / 0xa * (parseInt(V(0x15f)) / 0xb) + parseInt(V(0x175)) / 0xc * (parseInt(V(0x173)) / 0xd);
            if (f === c)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a22a, 0x51fc0));
import {
    r as a22n,
    j as a22o
} from './components-CmNGJ9Db.js';
import {
    Q as a22p,
    a as a22q
} from './quotationsTableUI-D3jXk18J.js';
import {
    u as a22r,
    i as a22s,
    c as a22t
} from './gcontext-LWGqsL34.js';
import { u as a22u } from './centralFetcher-8HUxmdkN.js';
import { u as a22v } from './notificationContext-DDeSlUs6.js';
function a22a() {
    const a0 = [
        'BwvZC2fNzq',
        'zgL2',
        'BgvUz3rO',
        'C3rYAw5NAwz5',
        'DxnLCM5HBwu',
        'otbpB2f2t2C',
        'ANn4',
        'mJbqzM9KtLG',
        'rNjHz21LBNq',
        'zMLSDgvY',
        'zw5K',
        'rMfPBhvYzs4UlG',
        'ue9tva',
        'DhLWzq',
        'u2vHCMnOigj5ie5HBwuGB3iGAM9IihrPDgXL',
        'l2fWAs9XDw90yxrPB25Zp3nRAxa9',
        'l2fWAs9XDw90yxrPB25Zp3n0yxj0pq',
        'mtmZnJm5vvvbC1PT',
        'CxvVDgf0Aw9UCW',
        'DxnLrwzMzwn0',
        'ANnVBG',
        'mtCZody2mevHr0LqqG',
        'l2fWAs9KzwXLDgu',
        'C3rHDhvZ',
        'DxnLu3rHDgu',
        'ndq4EvfnrKTM',
        'l2fWAs9JB21WBgfPBNrZ',
        'tM8GuxvVDgf0Aw9UCYbgB3vUzce',
        'BxqTnq',
        'mZu0oejiExL5Eq',
        'ndCZsw9ZwMzU',
        'odu5mtC2txf0rfn0',
        'jNrVpq',
        'mtyXnZn6qvPkA1e',
        'mtaZohfJtuDlEG',
        'ndbhuwLHtxq',
        'C3rHDhvZvgv4Da',
        'mJzQvKj0uNq',
        'rMfPBcb0BYbSB2fKigrHDgeU',
        'odGXnJGYmgPqvNnlzG',
        'C3rHCNq',
        'rxjYB3iGD2HPBguGzgvSzxrPB24UlI4',
        'DgL0Bgu'
    ];
    a22a = function () {
        return a0;
    };
    return a22a();
}
import './index-BxE89LvT.js';
import './createLucideIcon-BfjMWJ_G.js';
import './use-resolve-button-type-D3wVu0_O.js';
import './use-text-value-Dp8m3UbF.js';
import './focus-management-egUUHrnq.js';
import './form-fields-B8cx7cWx.js';
function a22b(a, b) {
    const c = a22a();
    return a22b = function (d, e) {
        d = d - 0x14e;
        let f = c[d];
        if (a22b['aofniy'] === undefined) {
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
            a22b['THwCCB'] = g, a = arguments, a22b['aofniy'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a22b['THwCCB'](f), a[i] = f) : f = j, f;
    }, a22b(a, b);
}
import './use-is-mounted-DEj4J-ep.js';
import './dashboard.quotations.create-hE380rCC.js';
import './proxy-2R9rtCoz.js';
import './switch-SU3PNcDj.js';
import './listbox-DYEW970L.js';
const a22w = () => {
    const W = a22b, [a, e] = a22n[W(0x166)](!0x1), {addNotifications: k} = a22v(), m = a22u(), {
            quoteData: q,
            setHeaderText: t,
            dataCount: v,
            setDataCount: A,
            setQuoteData: B,
            setData: E,
            setItems: G,
            profile: H
        } = a22r();
    async function I() {
        const X = W;
        e(!0x0);
        const L = await m(X(0x168)), M = {};
        M[X(0x178)] = X(0x159), M[X(0x14e)] = X(0x174);
        if (L[X(0x165)] === 0xc8) {
            const O = await L[X(0x162)]();
            B(O), A(O[X(0x150)]);
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
            O[Y(0x178)] = 'Failure...', O[Y(0x14e)] = Y(0x174);
            if (M = await m(Y(0x15e) + L[Y(0x176)] + '&end=' + L[Y(0x158)] + Y(0x16e) + L['to']), M[Y(0x165)] === 0xc8) {
                const P = await M['json']();
                B(P);
            } else
                M[Y(0x165)] != 0xc8 && k(O);
            A(0x0), e(!0x1);
        } else {
            const R = {};
            R['title'] = 'Failure...', R[Y(0x14e)] = 'Fail\x20to\x20load\x20data.';
            if (e(!0x0), M = await m(Y(0x15d) + v), M[Y(0x165)] === 0xc8) {
                const T = await M['json']();
                v == 0x0 ? (B(T), A(T['length'])) : (B(U => [
                    ...U,
                    ...T
                ]), A(q['length'] + T['length']));
            } else
                M[Y(0x165)] != 0xc8 && k(R);
            e(!0x1);
        }
    }
    async function K(L) {
        const Z = W, M = {};
        M['no'] = L, M['username'] = H[Z(0x152)], M[Z(0x15b)] = Z(0x160);
        const O = await m(Z(0x164), {
            'method': Z(0x15a),
            'body': JSON[Z(0x151)](M)
        });
        O[Z(0x165)] !== 0xc8 ? k({
            'title': Z(0x177),
            'message': O[Z(0x172)] || ''
        }) : B(P => P[Z(0x157)](R => R['no'] !== L));
    }
    return a22n[W(0x161)](() => {
        E(a22s()), G([]), t(a22t), v === 0x0 && I();
    }, []), a22o[W(0x154)](a22o[W(0x156)], {
        'children': a22o[W(0x154)]('section', {
            'className': W(0x16a),
            'children': a22o[W(0x154)](W(0x14f), {
                'children': a22o[W(0x154)](a22p, {
                    'data': q,
                    'columns': a22q,
                    'searchLabel': W(0x15c),
                    'EmptyText': W(0x169),
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
    a22w as default
};