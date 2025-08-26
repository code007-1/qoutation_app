const a50gp = a50b;
(function (a, b) {
    const gh = a50b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(gh(0x303)) / 0x1 * (parseInt(gh(0x318)) / 0x2) + -parseInt(gh(0x278)) / 0x3 + -parseInt(gh(0x13e)) / 0x4 + parseInt(gh(0x1d6)) / 0x5 * (-parseInt(gh(0x199)) / 0x6) + parseInt(gh(0x440)) / 0x7 * (parseInt(gh(0x42f)) / 0x8) + parseInt(gh(0x382)) / 0x9 + parseInt(gh(0x182)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (e) {
            c['push'](c['shift']());
        }
    }
}(a50a, 0x3329a));
import {
    jsx,
    Fragment,
    jsxs
} from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import {
    createReadableStreamFromReadable,
    createCookie,
    createCookieSessionStorage
} from '@remix-run/node';
import {
    RemixServer,
    Link,
    useLocation,
    Outlet,
    Meta,
    Links,
    ScrollRestoration,
    Scripts,
    useNavigate,
    useFetcher
} from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
    memo,
    useMemo
} from 'react';
import {
    AnimatePresence,
    motion
} from 'framer-motion';
import {
    X,
    ChevronDown,
    Minus,
    Pencil,
    Copy,
    Trash2,
    ChevronLeft,
    ChevronRight,
    AlignRight,
    ScrollText,
    NotepadText,
    UserPen,
    RotateCcwKey,
    LogOut,
    SunMoon,
    NotebookText,
    Loader
} from 'lucide-react';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Switch,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
} from '@headlessui/react';
import {
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getCoreRowModel,
    flexRender
} from '@tanstack/react-table';
import {
    MongoClient,
    ServerApiVersion
} from 'mongodb';
import a50bG from 'jsonwebtoken';
import a50bH from 'bcrypt';
import a50bI from 'fs';
import a50bJ from 'csv-parser';
import {
    View,
    Canvas,
    StyleSheet,
    Text,
    Document,
    Page,
    Link as a50bK,
    Image,
    renderToStream
} from '@react-pdf/renderer';
const a50bL = 0x1388;
function a50bM(a, b, c, d, e) {
    const gi = a50b;
    return isbot(a[gi(0x385)][gi(0x23c)]('user-agent') || '') ? a50bN(a, b, c, d) : a50bO(a, b, c, d);
}
function a50bN(a, b, c, d) {
    return new Promise((e, f) => {
        const gj = a50b;
        let g = ![];
        const h = {};
        h[gj(0x250)] = d, h[gj(0x33a)] = a[gj(0x33a)], h[gj(0x162)] = a50bL;
        const {
            pipe: i,
            abort: j
        } = renderToPipeableStream(jsx(RemixServer, h), {
            'onAllReady'() {
                const gk = gj;
                g = !![];
                const k = new PassThrough(), l = createReadableStreamFromReadable(k);
                c['set']('Content-Type', gk(0x391));
                const m = {};
                m[gk(0x385)] = c, m[gk(0x23f)] = b, e(new Response(l, m)), i(k);
            },
            'onShellError'(k) {
                f(k);
            },
            'onError'(k) {
                const gl = gj;
                b = 0x1f4, g && console[gl(0x362)](k);
            }
        });
        setTimeout(j, a50bL);
    });
}
function a50bO(a, b, c, d) {
    return new Promise((e, f) => {
        const gm = a50b;
        let g = ![];
        const h = {};
        h[gm(0x250)] = d, h['url'] = a['url'], h[gm(0x162)] = a50bL;
        const {
            pipe: i,
            abort: j
        } = renderToPipeableStream(jsx(RemixServer, h), {
            'onShellReady'() {
                const gn = gm;
                g = !![];
                const k = new PassThrough(), l = createReadableStreamFromReadable(k);
                c[gn(0x29e)](gn(0x1fb), gn(0x391));
                const m = {};
                m[gn(0x385)] = c, m[gn(0x23f)] = b, e(new Response(l, m)), i(k);
            },
            'onShellError'(k) {
                f(k);
            },
            'onError'(k) {
                const go = gm;
                b = 0x1f4, g && console[go(0x362)](k);
            }
        });
        setTimeout(j, a50bL);
    });
}
const a50bP = {};
function a50b(a, b) {
    const c = a50a();
    return a50b = function (d, e) {
        d = d - 0xc9;
        let f = c[d];
        if (a50b['zcHNui'] === undefined) {
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
            a50b['BjgzfE'] = g, a = arguments, a50b['zcHNui'] = !![];
        }
        const h = c[0x0], i = d + h, j = a[i];
        return !j ? (f = a50b['BjgzfE'](f), a[i] = f) : f = j, f;
    }, a50b(a, b);
}
a50bP['__proto__'] = null, a50bP[a50gp(0x18b)] = a50bM;
const a50bQ = {};
a50bQ[a50gp(0x2ce)] = a50gp(0x3c8);
const a50bR = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50bP, Symbol[a50gp(0x20d)], a50bQ)), a50bS = a50gp(0x472), a50bT = {};
a50bT[a50gp(0x4e5)] = a50bS;
const a50bU = a50bT, a50bV = createContext(null), a50bW = {};
a50bW['to'] = a50gp(0x22a), a50bW[a50gp(0x40a)] = a50gp(0x17c), a50bW[a50gp(0x26a)] = a50gp(0x264);
const a50bX = jsx(Fragment, { 'children': jsx(Link, a50bW) }), a50bY = {};
a50bY['to'] = '/dashboard/challan/create', a50bY[a50gp(0x40a)] = 'cursor-pointer\x20hover:bg-buttonHover\x20w-min\x20text-nowrap\x20p-1', a50bY[a50gp(0x26a)] = a50gp(0x4fa);
const a50bZ = jsx(Fragment, { 'children': jsx(Link, a50bY) }), a50c0 = {};
a50c0['to'] = a50gp(0x221), a50c0[a50gp(0x40a)] = a50gp(0x17c), a50c0['children'] = a50gp(0x3d2);
const a50c1 = jsx(Fragment, { 'children': jsx(Link, a50c0) }), a50c2 = () => {
        const gq = a50gp;
        return {
            'no': new Date()[gq(0x3a0)]()['toString'](),
            'date': new Date()['toISOString']()['split']('T')[0x0],
            'items': [],
            'intro': gq(0x10e),
            'terms': gq(0x3aa),
            'additionalInfo': gq(0x42d),
            'from': 'Teen\x20Telecommunication\x20Pvt.\x20Ltd.',
            'fromAddress': gq(0x2d0),
            'to': '',
            'toAddress': '',
            'tax': 0x12,
            'discount': 0x0,
            'amount': 0x0,
            'madeby': ''
        };
    }, a50c3 = () => {
        const gr = a50gp;
        return {
            'no': new Date()['getTime']()[gr(0x335)](),
            'date': new Date()[gr(0x137)]()[gr(0x342)]('T')[0x0],
            'items': [],
            'type': 'Delivery\x20Challan',
            'category': gr(0x2d7),
            'from': gr(0x2a4),
            'fromAddress': gr(0x2d0),
            'to': '',
            'toAddress': '',
            'madeby': '',
            'modeofdispatch': gr(0xcd)
        };
    }, a50c4 = () => {
        const gs = a50gp;
        return {
            'no': gs(0x28d) + 0x1,
            'date': new Date()[gs(0x137)]()['split']('T')[0x0],
            'time': new Date()[gs(0x2f8)](),
            'type': gs(0x196),
            'complainingParty': '',
            'partyNumber': '',
            'complaint': '',
            'partyAddress': '',
            'attendingEngineer': gs(0x3b9),
            'madeby': '',
            'remarks': []
        };
    }, a50c5 = ({children: d}) => {
        const gt = a50gp, [e, f] = useState('light'), [g, h] = useState(), [i, j] = useState(gt(0x1db)), [k, l] = useState(a50bU[gt(0x4e5)][gt(0x24b)](0x0, 0x3) + a50bU[gt(0x4e5)][0x3][gt(0x10d)]() + a50bU[gt(0x4e5)][gt(0x24b)](0x4)), [m, n] = useState(a50bX), [o, p] = useState(), q = {};
        q[gt(0x4d9)] = gt(0x19d), q['address'] = gt(0x2d0), q[gt(0x355)] = gt(0x2a4), q[gt(0x11b)] = gt(0x197), q[gt(0x478)] = gt(0x437), q[gt(0x387)] = gt(0x44c), q[gt(0x2a6)] = !![];
        const [r, s] = useState(q), [t, u] = useState([]), [v, w] = useState(0x0), [x, y] = useState([]), [z, A] = useState(a50c2()), [B, C] = useState([]), [D, E] = useState(0x0), [F, G] = useState([]), [H, I] = useState(a50c3()), [J, K] = useState(), [L, M] = useState(0x0), [N, O] = useState(a50c4()), P = () => {
                const gv = gt, S = () => {
                        const gu = a50b;
                        switch (e) {
                        case gu(0x116):
                            return gu(0x4bd);
                        case gu(0x4bd):
                            return 'dark2';
                        case gu(0x185):
                            return 'solarwind';
                        case gu(0x33b):
                            return gu(0x234);
                        case gu(0x234):
                            return gu(0x2cb);
                        case gu(0x2cb):
                            return gu(0x2ea);
                        default:
                            return gu(0x116);
                        }
                    };
                f(S), localStorage[gv(0x395)]('theme', S());
            }, Q = {};
        Q[gt(0x1cc)] = e, Q[gt(0x242)] = f, Q[gt(0x13f)] = P, Q['accessToken'] = g, Q['setAccessToken'] = h, Q['items'] = x, Q[gt(0x3bb)] = y, Q[gt(0x452)] = z, Q['setData'] = A, Q[gt(0x4cf)] = m, Q[gt(0xf1)] = n, Q[gt(0x4b7)] = o, Q['setGQuote'] = p, Q['profile'] = r, Q[gt(0x2c4)] = s, Q['dataCount'] = v, Q['setDataCount'] = w, Q[gt(0x263)] = t, Q['setQuoteData'] = u, Q[gt(0x11d)] = i, Q[gt(0x224)] = j, Q[gt(0x403)] = l, Q[gt(0x21a)] = k, Q[gt(0x169)] = B, Q['setOldChallanData'] = C, Q[gt(0x384)] = D, Q[gt(0x444)] = E, Q[gt(0x430)] = F, Q['setChallanItems'] = G, Q['challanData'] = H, Q['setChallanData'] = I, Q['complaintsData'] = N, Q[gt(0x40e)] = O;
        const R = {};
        return R[gt(0x2ce)] = Q, R[gt(0x26a)] = d, jsx(a50bV['Provider'], R);
    }, a50c6 = () => {
        const gw = a50gp, a = useContext(a50bV);
        if (!a)
            throw new Error(gw(0x4ba));
        return a;
    }, a50c7 = createContext(void 0x0);
function a50c8() {
    const gx = a50gp, a = useContext(a50c7);
    if (!a)
        throw new Error(gx(0x3ff));
    return a;
}
function a50c9({children: c}) {
    const gB = a50gp, [d, e] = useState([]), f = k => {
            const gy = a50b, l = Date[gy(0x3a6)](), m = { ...k };
            m['id'] = l, e(o => [
                ...o,
                m
            ]);
            const n = k[gy(0x3da)] || 0x1388;
            setTimeout(() => h(l), n);
        }, g = k => {
            const gz = a50b;
            e(l => l[gz(0x1d8)](m => m['id'] === k ? {
                ...m,
                'closed': !![]
            } : m));
        }, h = k => {
            const gA = a50b;
            e(l => l[gA(0x357)](m => m['id'] !== k));
        }, i = {};
    i[gB(0x1f8)] = f;
    const j = {};
    return j[gB(0x40a)] = 'w-4\x20h-4', jsxs(a50c7[gB(0x229)], {
        'value': i,
        'children': [
            c,
            jsx(gB(0x426), {
                'children': d[gB(0x1d8)](k => jsxs(gB(0x426), {
                    'className': 'fixed\x20' + (k[gB(0x39e)] === gB(0x333) ? gB(0x19a) : gB(0x45f)) + '\x20' + (k[gB(0x4d2)] === gB(0x446) ? gB(0x225) : gB(0x43f)) + gB(0x10f) + (k[gB(0x1f1)] ? 'opacity-0' : 'opacity-100') + gB(0x189),
                    'children': [
                        jsxs('div', {
                            'className': gB(0x24a),
                            'children': [
                                jsx(gB(0x426), {
                                    'className': gB(0x235),
                                    'children': k[gB(0x290)]
                                }),
                                jsx(gB(0x426), {
                                    'onClick': l => {
                                        g(k['id']), setTimeout(() => h(k['id']), 0x44c);
                                    },
                                    'className': gB(0x4db),
                                    'children': jsx(X, j)
                                })
                            ]
                        }),
                        jsx(gB(0x426), {
                            'className': 'text-sm\x20text-textSecondary',
                            'children': k == null ? void 0x0 : k[gB(0x367)]
                        })
                    ]
                }, k['id']))
            })
        ]
    });
}
const a50ca = {};
a50ca[a50gp(0x1fc)] = 'preconnect', a50ca[a50gp(0x31f)] = 'https://fonts.googleapis.com';
const a50cb = {};
a50cb['rel'] = a50gp(0x42a), a50cb['href'] = 'https://fonts.gstatic.com', a50cb[a50gp(0xe3)] = 'anonymous';
const a50cc = {};
a50cc[a50gp(0x1fc)] = a50gp(0x1d2), a50cc['href'] = a50gp(0x1c7);
const a50cd = () => [
    a50ca,
    a50cb,
    a50cc
];
function a50ce({children: d}) {
    const gC = a50gp, e = {};
    e[gC(0x1d5)] = 'utf-8';
    const f = {};
    f[gC(0x4e5)] = gC(0x3f5), f['content'] = gC(0xd2);
    const g = {};
    return g[gC(0x26a)] = d, jsxs(gC(0x4b5), {
        'lang': 'en',
        'children': [
            jsxs(gC(0x312), {
                'children': [
                    jsx(gC(0x35c), e),
                    jsx(gC(0x35c), f),
                    jsx(Meta, {}),
                    jsx(Links, {})
                ]
            }),
            jsxs('body', {
                'children': [
                    jsx(a50c5, g),
                    jsx(ScrollRestoration, {}),
                    jsx(Scripts, {})
                ]
            })
        ]
    });
}
function a50cf() {
    const gG = a50gp, {
            accessToken: f,
            setAccessToken: g,
            setProfile: h,
            theme: i,
            setTheme: j
        } = a50c6(), k = useLocation();
    useEffect(() => {
        async function r() {
            const gD = a50b, s = await fetch(gD(0x14a));
            if (s['status'] === 0xc8) {
                const t = await s['json']();
                g(t[gD(0x15a)]), h(u => {
                    const gE = gD, v = {
                            ...u,
                            ...t[gE(0x465)]
                        };
                    return v;
                }), localStorage[gD(0x395)](gD(0x1df), 'y');
            } else
                g(void 0x0), localStorage[gD(0x395)](gD(0x1df), 'n');
        }
        if (f === void 0x0)
            r();
    }, [f]), useEffect(() => {
        const gF = a50b, r = localStorage[gF(0x24e)]('theme');
        if (r)
            j(r);
    });
    const l = {};
    l[gG(0x4aa)] = 0x0;
    const m = {};
    m[gG(0x4aa)] = 0x1;
    const n = {};
    n[gG(0x4aa)] = 0x0;
    const o = {};
    o[gG(0x1c5)] = l, o[gG(0x345)] = m, o[gG(0x480)] = n;
    const p = o, q = {};
    return q[gG(0x3da)] = 0.4, jsx(Fragment, {
        'children': jsx(AnimatePresence, {
            'mode': gG(0x34e),
            'children': jsx(motion['div'], {
                'variants': p,
                'initial': gG(0x1c5),
                'animate': gG(0x345),
                'exit': gG(0x480),
                'transition': q,
                'children': jsx(gG(0x426), {
                    'className': '' + i,
                    'children': jsx(a50c9, { 'children': jsx(Outlet, {}) })
                })
            }, k[gG(0x2cf)])
        })
    });
}
const a50cg = {};
a50cg['__proto__'] = null, a50cg[a50gp(0x30c)] = a50ce, a50cg[a50gp(0x18b)] = a50cf, a50cg['links'] = a50cd;
const a50ch = {};
a50ch[a50gp(0x2ce)] = a50gp(0x3c8);
const a50ci = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50cg, Symbol['toStringTag'], a50ch)), a50cj = () => {
        const {
            accessToken: a,
            setAccessToken: b
        } = a50c6();
        function c(f) {
            const gH = a50b;
            try {
                const g = JSON['parse'](atob(f[gH(0x342)]('.')[0x1])), h = g[gH(0x360)] * 0x3e8;
                return Date['now']() >= h;
            } catch (i) {
                return !![];
            }
        }
        async function d() {
            const gI = a50b;
            if (a && !c(a))
                return a;
            const f = await fetch(gI(0x1dc));
            if (f[gI(0x23f)] === 0xc8) {
                const g = await f[gI(0x236)]();
                return b(g[gI(0x15a)]), localStorage[gI(0x395)]('login', 'y'), g[gI(0x15a)];
            }
            return b(void 0x0), localStorage[gI(0x395)](gI(0x1df), 'n'), void 0x0;
        }
        const e = async (f, g = {}) => {
            const gJ = a50b, h = await d();
            if (!h)
                throw new Response(gJ(0x3b1));
            const i = { ...g['headers'] || {} };
            i['Authorization'] = 'Bearer\x20' + h;
            const j = i, k = { ...g };
            k[gJ(0x385)] = j;
            const l = await fetch(f, k);
            if (l[gJ(0x23f)] === 0x191) {
                const m = await fetch(gJ(0x1dc));
                if (m[gJ(0x23f)] === 0xc8) {
                    const n = await m[gJ(0x236)]();
                    b(n[gJ(0x15a)]), localStorage[gJ(0x395)](gJ(0x1df), 'y');
                    const o = { ...g[gJ(0x385)] || {} };
                    o[gJ(0x222)] = 'Bearer\x20' + n[gJ(0x15a)];
                    const p = o, q = { ...g };
                    return q[gJ(0x385)] = p, fetch(f, q);
                } else {
                    b(void 0x0), localStorage['setItem'](gJ(0x1df), 'n');
                    throw new Response(gJ(0x3b1));
                }
            }
            return l;
        };
        return e;
    };
function a50ck() {
    const gN = a50gp, q = useLocation(), r = q['state'], {
            complaintsData: s,
            setComplaintsData: t,
            setHeaderText: u,
            profile: v
        } = a50c6(), [w, x] = useState(0x0), y = a50cj();
    function z() {
        const gK = a50b, Q = {};
        Q[gK(0x1fb)] = gK(0x160), y(gK(0x1f9), {
            'method': 'POST',
            'headers': Q,
            'body': JSON['stringify'](s)
        });
    }
    useEffect(() => {
        const gL = a50b;
        var Q = 'Govt-1';
        r && (r == null ? void 0x0 : r[gL(0x315)]) === !![] && (Q = s['no']), t(R => {
            const gM = gL;
            return {
                ...R,
                'no': Q,
                'madeby': v[gM(0x1cd)] || '',
                'date': new Date()['toISOString']()[gM(0x342)]('T')[0x0]
            };
        }), u(gL(0x1e6));
    }, []);
    const A = {};
    A[gN(0x4aa)] = 0x0;
    const B = {};
    B['opacity'] = 0x1;
    const C = {};
    C[gN(0x4aa)] = 0x1;
    const D = {};
    D[gN(0x3da)] = 0.4;
    const E = {};
    E[gN(0x40a)] = gN(0x200), E[gN(0x26a)] = gN(0x434);
    const F = {};
    F['className'] = gN(0x200), F['children'] = gN(0x215);
    const G = {};
    G['className'] = gN(0x1ef), G[gN(0x26a)] = gN(0x3bc);
    const H = {};
    H[gN(0x40a)] = gN(0x200), H['children'] = gN(0x3e4);
    const I = {};
    I[gN(0x40a)] = 'text-textPrimary';
    const J = {};
    J[gN(0x40a)] = gN(0x200), J[gN(0x26a)] = gN(0x488);
    const K = {};
    K[gN(0x40a)] = 'text-textPrimary';
    const L = {};
    L['className'] = 'text-sm\x20font-semibold', L['children'] = gN(0x3a4);
    const M = {};
    M[gN(0x40a)] = gN(0x1ef), M[gN(0x26a)] = 'Address';
    const N = {};
    N[gN(0x40a)] = gN(0x1ef), N['children'] = gN(0x1e4);
    const O = {};
    O[gN(0x40a)] = gN(0x1ef), O[gN(0x26a)] = gN(0x366);
    const P = {};
    return P[gN(0x251)] = z, P[gN(0x40a)] = 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20mt-4\x20text-lg', P[gN(0x26a)] = gN(0x374), jsx(Fragment, {
        'children': jsx(AnimatePresence, {
            'children': jsx(motion[gN(0x426)], {
                'initial': A,
                'animate': B,
                'exit': C,
                'transition': D,
                'children': jsxs('div', {
                    'className': gN(0x4bb),
                    'children': [
                        jsx(gN(0x426), {
                            'className': 'mt-4\x20flex\x20items-center\x20align-middle',
                            'children': jsxs(gN(0x426), {
                                'className': gN(0x427),
                                'children': [
                                    jsxs(gN(0x426), {
                                        'className': '',
                                        'children': [
                                            jsx(gN(0x426), E),
                                            jsx(gN(0x43e), {
                                                'type': gN(0x32f),
                                                'className': gN(0x24c),
                                                'placeholder': gN(0x2e4),
                                                'value': s['no'],
                                                'onChange': Q => {
                                                    t(R => {
                                                        const gO = a50b, S = { ...R };
                                                        return S['no'] = Q[gO(0x2df)][gO(0x2ce)], S;
                                                    });
                                                }
                                            })
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'className': '',
                                        'children': [
                                            jsx(gN(0x426), F),
                                            jsx(gN(0x43e), {
                                                'type': gN(0x479),
                                                'color': 'white',
                                                'name': gN(0x44e),
                                                'id': 'date',
                                                'pattern': gN(0xeb),
                                                'placeholder': gN(0x4a1),
                                                'className': 'border\x20border-border\x20h-10\x20bg-background\x20w-full',
                                                'value': s[gN(0x44e)] + 'T' + s[gN(0x477)],
                                                'onChange': Q => {
                                                    t(R => {
                                                        const gP = a50b, S = Q[gP(0x2df)][gP(0x2ce)][gP(0x342)]('T'), T = { ...R };
                                                        return T['date'] = S[0x0], T['time'] = S[0x1], T;
                                                    });
                                                }
                                            })
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'children': [
                                            jsx(gN(0x246), G),
                                            jsx(gN(0x43e), {
                                                'type': gN(0x32f),
                                                'placeholder': gN(0x2dd),
                                                'className': 'border\x20border-border\x20p-2\x20w-full\x20bg-background',
                                                'value': s[gN(0x37d)],
                                                'onChange': Q => t(R => {
                                                    const gQ = gN, S = { ...R };
                                                    return S['complainingParty'] = Q[gQ(0x2df)][gQ(0x2ce)], S;
                                                })
                                            }, gN(0x4f1))
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'className': '',
                                        'children': [
                                            jsx(gN(0x426), H),
                                            jsx(gN(0x426), {
                                                'children': jsx(Listbox, {
                                                    'value': s[gN(0x4d3)],
                                                    'onChange': Q => {
                                                        t(R => {
                                                            const S = { ...R };
                                                            return S['type'] = Q, S;
                                                        });
                                                    },
                                                    'children': jsxs(gN(0x426), {
                                                        'className': gN(0x2fb),
                                                        'children': [
                                                            jsxs(ListboxButton, {
                                                                'className': gN(0x1bc),
                                                                'children': [
                                                                    jsx(gN(0x426), {
                                                                        'className': gN(0x409),
                                                                        'children': s[gN(0x4d3)]
                                                                    }),
                                                                    jsx(ChevronDown, I)
                                                                ]
                                                            }),
                                                            jsx(ListboxOptions, {
                                                                'transition': !![],
                                                                'className': 'absolute\x20-right-34\x20z-10\x20w-[100%]\x20mt-2\x20origin-top-right\x20rounded-sm\x20bg-background\x20shadow-lg\x20ring-1\x20ring-black/5\x20transition\x20focus:outline-none\x20data-[closed]:scale-95\x20data-[closed]:transform\x20data-[closed]:opacity-0\x20data-[enter]:duration-100\x20data-[leave]:duration-75\x20data-[enter]:ease-out\x20data-[leave]:ease-in',
                                                                'children': jsx(gN(0x426), {
                                                                    'className': gN(0x3d8),
                                                                    'children': [
                                                                        gN(0x196),
                                                                        gN(0x113)
                                                                    ][gN(0x1d8)](Q => jsx(ListboxOption, {
                                                                        'value': Q,
                                                                        'className': 'block\x20px-4\x20py-2\x20text-sm\x20text-textSecondary\x20data-[focus]:bg-buttonHover\x20data-[focus]:text-textSecondary\x20data-[focus]:outline-none',
                                                                        'children': Q
                                                                    }, Q))
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'className': '',
                                        'children': [
                                            jsx(gN(0x426), J),
                                            jsx(gN(0x426), {
                                                'children': jsx(Listbox, {
                                                    'value': s[gN(0x470)],
                                                    'onChange': Q => {
                                                        t(R => {
                                                            const S = { ...R };
                                                            return S['attendingEngineer'] = Q, S;
                                                        });
                                                    },
                                                    'children': jsxs(gN(0x426), {
                                                        'className': gN(0x2fb),
                                                        'children': [
                                                            jsxs(ListboxButton, {
                                                                'className': gN(0x1bc),
                                                                'children': [
                                                                    jsx(gN(0x426), {
                                                                        'className': gN(0x409),
                                                                        'children': s['attendingEngineer']
                                                                    }),
                                                                    jsx(ChevronDown, K)
                                                                ]
                                                            }),
                                                            jsx(ListboxOptions, {
                                                                'transition': !![],
                                                                'className': gN(0x174),
                                                                'children': jsx(gN(0x426), {
                                                                    'className': 'p-1',
                                                                    'children': [
                                                                        gN(0x18d),
                                                                        gN(0x1bf),
                                                                        'Abhishek\x20Verma',
                                                                        'Gulshan',
                                                                        gN(0x350),
                                                                        'Prakhar',
                                                                        'Rahul',
                                                                        gN(0x227),
                                                                        gN(0x2ff),
                                                                        gN(0x4e2),
                                                                        'Shaifali',
                                                                        gN(0x11e),
                                                                        'Yashwant'
                                                                    ][gN(0x1d8)](Q => jsx(ListboxOption, {
                                                                        'value': Q,
                                                                        'className': 'block\x20px-4\x20py-2\x20text-sm\x20text-textSecondary\x20data-[focus]:bg-buttonHover\x20data-[focus]:text-textSecondary\x20data-[focus]:outline-none',
                                                                        'children': Q
                                                                    }, Q))
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'children': [
                                            jsx(gN(0x246), L),
                                            jsx(gN(0x43e), {
                                                'type': gN(0x32f),
                                                'placeholder': gN(0x1ea),
                                                'className': gN(0x442),
                                                'value': s[gN(0x2e9)],
                                                'onChange': Q => t(R => {
                                                    const gR = gN, S = { ...R };
                                                    return S['partyNumber'] = Q[gR(0x2df)]['value'], S;
                                                })
                                            }, gN(0x1c9))
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'children': [
                                            jsx('label', M),
                                            jsx(gN(0x268), {
                                                'rows': 0x5,
                                                'placeholder': gN(0x27f),
                                                'className': gN(0x340),
                                                'value': s[gN(0x159)],
                                                'onChange': Q => t(R => {
                                                    const gS = gN, S = { ...R };
                                                    return S[gS(0x159)] = Q['target'][gS(0x2ce)], S;
                                                })
                                            })
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'children': [
                                            jsx(gN(0x246), N),
                                            jsx(gN(0x268), {
                                                'rows': 0x5,
                                                'placeholder': gN(0x241),
                                                'className': gN(0x340),
                                                'value': s[gN(0x1a2)],
                                                'onChange': Q => t(R => {
                                                    const gT = gN, S = { ...R };
                                                    return S[gT(0x1a2)] = Q[gT(0x2df)][gT(0x2ce)], S;
                                                })
                                            })
                                        ]
                                    }),
                                    jsxs(gN(0x426), {
                                        'children': [
                                            jsx('label', O),
                                            jsx('textarea', {
                                                'rows': 0x5,
                                                'placeholder': gN(0x326),
                                                'className': 'p-2\x20border\x20border-border\x20w-full\x20bg-background',
                                                'value': s[gN(0x35d)],
                                                'onChange': Q => t(R => {
                                                    const gU = gN, S = { ...R };
                                                    return S[gU(0x35d)] = [Q['target'][gU(0x2ce)]], S;
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        jsx(gN(0x426), {
                            'className': gN(0x380),
                            'children': jsx(gN(0x4ec), P)
                        })
                    ]
                })
            }, w)
        })
    });
}
const a50cl = {};
a50cl[a50gp(0x27a)] = null, a50cl['default'] = a50ck;
const a50cm = {};
a50cm[a50gp(0x2ce)] = 'Module';
const a50cn = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50cl, Symbol['toStringTag'], a50cm));
function a50co({index: c}) {
    const gY = a50gp;
    var d, e, f, g;
    const [h, i] = useState(![]), [j, k] = useState([]), [l, m] = useState(-0x1), n = useRef(null), [o, p] = useState(![]), {
            setItems: q,
            items: r
        } = a50c6();
    useEffect(() => {
        const gV = a50b;
        if (o) {
            if (r[c]['name'][gV(0x38c)]() === '')
                k([]), i(![]);
            else {
                if (h || j[gV(0x421)] != 0x1 || j[0x0][gV(0x4e5)][gV(0x33d)]() != r[c][gV(0x4e5)]['toLowerCase']()) {
                    const z = {};
                    z[gV(0x1fb)] = gV(0x160), fetch(gV(0x4d6), {
                        'method': gV(0x191),
                        'headers': z,
                        'body': JSON['stringify'](r[c]['name'])
                    })['then'](async A => {
                        const gW = gV, B = await A[gW(0x236)]();
                        k(B), i(B[gW(0x421)] > 0x0), m(-0x1);
                    })['catch'](A => {
                        const gX = gV;
                        console[gX(0x362)](gX(0x12e), A);
                    });
                }
            }
        }
    }, [r[c][gY(0x4e5)]]);
    const s = z => {
            q(A => {
                const gZ = a50b;
                return A[gZ(0x1d8)]((B, C) => C === c ? {
                    ...r[c],
                    'name': z[gZ(0x2df)][gZ(0x2ce)]
                } : B);
            });
        }, t = z => {
            q(A => {
                const h0 = a50b, B = {};
                return B['id'] = z['id'], B[h0(0x2e2)] = z[h0(0x2e2)], B[h0(0x4e5)] = z[h0(0x4e5)], B[h0(0xdd)] = z[h0(0xdd)], B[h0(0xd9)] = 0x1, B['description'] = z[h0(0x1af)] || '', B[h0(0x1b6)] = z[h0(0x1b6)], B[h0(0x2b2)] = 0x0, A[h0(0x1d8)]((C, D) => D == c ? B : C);
            }), i(![]);
        }, u = () => {
            setTimeout(() => i(![]), 0x64), p(![]);
        }, v = () => {
            const h1 = gY;
            if (j[h1(0x421)] > 0x0)
                i(!![]);
            p(!![]);
        }, w = z => {
            const h2 = gY;
            if (!h)
                return;
            if (z['key'] === h2(0x3e8))
                m(A => A < j[h2(0x421)] - 0x1 ? A + 0x1 : 0x0);
            else {
                if (z['key'] === h2(0x2d4))
                    m(A => A > 0x0 ? A - 0x1 : j[h2(0x421)] - 0x1);
                else {
                    if (z['key'] === 'Enter' && l >= 0x0)
                        k([j[l]]), i(![]), q(A => {
                            const h3 = h2, B = {};
                            return B['id'] = j[l]['id'], B[h3(0x2e2)] = j[l][h3(0x2e2)], B[h3(0x4e5)] = j[l]['name'], B[h3(0xdd)] = j[l]['price'], B[h3(0xd9)] = 0x1, B['description'] = j[l][h3(0x1af)] || '', B['link'] = j[l][h3(0x1b6)], B[h3(0x2b2)] = 0x0, A[h3(0x1d8)]((C, D) => D === c ? B : C);
                        });
                    else
                        z[h2(0x45d)] === h2(0x390) && i(![]);
                }
            }
        }, x = {};
    x['ref'] = n, x[gY(0x4d3)] = gY(0x32f), x[gY(0x2ce)] = r[c]['name'], x[gY(0x4a3)] = s, x[gY(0x2e5)] = u, x[gY(0x1eb)] = v, x[gY(0x19f)] = w, x[gY(0x40a)] = 'w-[26%]\x20p-2\x20border\x20border-border\x20bg-background\x20text-textPrimary\x20focus:outline-textPrimary', x[gY(0x232)] = 'Search\x20Product...', x[gY(0x230)] = gY(0x34a);
    const y = {};
    return y[gY(0x40a)] = gY(0x4bb), jsxs(gY(0x426), {
        'className': gY(0x1c3),
        'children': [
            jsx(gY(0x43e), x),
            h && jsx('ul', {
                'className': gY(0x122),
                'children': j[gY(0x1d8)]((z, A) => jsx('li', {
                    'onMouseDown': () => t(z),
                    'className': (A === l ? 'bg-buttonHover' : 'bg-background') + gY(0x193),
                    'onMouseEnter': () => m(A),
                    'children': z[gY(0x4e5)]
                }, z['id']))
            }),
            jsx(gY(0x268), {
                'placeholder': 'Any\x20prodcut\x20description...',
                'className': gY(0x2c5),
                'value': r[c][gY(0x1af)],
                'rows': 0x1,
                'onChange': z => {
                    q(A => {
                        const h4 = a50b;
                        return A['map']((B, C) => C === c ? {
                            ...r[c],
                            'description': z['target'][h4(0x2ce)]
                        } : B);
                    });
                }
            }),
            jsx(gY(0x43e), {
                'type': 'string',
                'placeholder': gY(0x3ac),
                'className': gY(0x323),
                'value': (d = r[c]) == null ? void 0x0 : d[gY(0x2e2)],
                'onChange': z => {
                    q(A => {
                        const h5 = a50b;
                        return A[h5(0x1d8)]((B, C) => C === c ? {
                            ...r[c],
                            'hsn': z[h5(0x2df)][h5(0x2ce)]
                        } : B);
                    });
                }
            }),
            jsx(gY(0x43e), {
                'type': gY(0x486),
                'placeholder': 'Quantity',
                'className': gY(0x323),
                'value': (e = r[c]) == null ? void 0x0 : e[gY(0xd9)],
                'min': 0x0,
                'onChange': z => {
                    q(A => {
                        return A['map']((B, C) => C === c ? {
                            ...r[c],
                            'quantity': Number(z['target']['value'] || void 0x0)
                        } : B);
                    });
                }
            }),
            jsx('input', {
                'type': gY(0x486),
                'placeholder': gY(0xf9),
                'className': gY(0x323),
                'value': (f = r[c]) == null ? void 0x0 : f[gY(0xdd)],
                'min': 0x0,
                'onChange': z => {
                    q(A => {
                        const h6 = a50b;
                        return A[h6(0x1d8)]((B, C) => C === c ? {
                            ...r[c],
                            'price': Number(z[h6(0x2df)]['value'] || void 0x0)
                        } : B);
                    });
                }
            }),
            jsx('input', {
                'type': gY(0x486),
                'placeholder': gY(0x20f),
                'className': gY(0x323),
                'value': (g = r[c]) == null ? void 0x0 : g['addon'],
                'min': 0x0,
                'onChange': z => {
                    q(A => {
                        const h7 = a50b;
                        return A[h7(0x1d8)]((B, C) => C === c ? {
                            ...r[c],
                            'addon': Number(z[h7(0x2df)][h7(0x2ce)] || void 0x0)
                        } : B);
                    });
                }
            }),
            jsx(gY(0x4ec), {
                'className': 'hover:bg-headerBackground\x20bg-buttonHover\x20p-2',
                'onClick': z => {
                    q(A => A['filter']((B, C) => C != c));
                },
                'children': jsx(Minus, y)
            })
        ]
    });
}
async function a50cp(c, d, e, f = !![], g = 'quotation') {
    const h8 = a50gp;
    let h;
    if (g === h8(0x3f7))
        h = c['items'][h8(0x357)](n => {
            const h9 = h8;
            if (!Number[h9(0x23a)](n[h9(0xdd)]) || !Number['isFinite'](n[h9(0xd9)]))
                return ![];
            else
                return !![];
        });
    else
        g === h8(0x392) && (h = c[h8(0x3dd)][h8(0x357)](n => {
            const ha = h8;
            if (!Number[ha(0x23a)](n[ha(0xd9)]))
                return ![];
            else
                return !![];
        }));
    const i = {};
    i[h8(0x1fb)] = h8(0x160);
    const j = { ...c };
    j[h8(0x3dd)] = h;
    const k = await d(h8(0x212) + f + h8(0x4c4) + e + '&type=' + g, {
            'method': h8(0x191),
            'headers': i,
            'body': JSON['stringify'](j)
        }), l = await k['blob'](), m = window[h8(0x369)][h8(0x3c0)](l);
    window[h8(0x156)](m);
}
function a50cq() {
    const hh = a50gp, w = useLocation(), x = w['state'], {
            items: y,
            setItems: z,
            data: A,
            setData: B,
            accessToken: C,
            setHeaderText: D,
            profile: E
        } = a50c6(), [F, G] = useState(0x0), H = a50cj(), I = useNavigate();
    function J() {
        z(a7 => {
            const hb = a50b, a8 = {};
            return a8['id'] = 0x0, a8[hb(0x2e2)] = '', a8['name'] = '', a8[hb(0x1af)] = '', a8[hb(0xdd)] = 0x0, a8[hb(0xd9)] = 0x0, a8[hb(0x1b6)] = '#', a8[hb(0x2b2)] = 0x0, [
                ...a7,
                a8
            ];
        });
    }
    useEffect(() => {
        const hc = a50b;
        if (F === 0x0)
            D('Quotation\x20Details');
        else {
            if (F === 0x1)
                D(hc(0x2b7));
            else {
                if (F === 0x2)
                    D(hc(0x18f));
            }
        }
    }, [F]), useEffect(() => {
        const hd = a50b, a7 = Object[hd(0x1e7)](y)[hd(0x143)]((a8, [a9, aa]) => a8 + aa[hd(0xdd)] * aa['quantity'] * (0x1 + 0.01 * aa[hd(0x2b2)]), 0x0);
        B(a8 => {
            const a9 = { ...a8 };
            return a9['amount'] = a7, a9;
        });
    }, [y]), useEffect(() => {
        const he = a50b, a7 = new Date();
        let a8 = a7[he(0x3a0)]()[he(0x335)](), a9 = E['address'], aa = E[he(0x355)], ab = y, ac = E[he(0x300)] ?? '', ad = a7[he(0x137)]()[he(0x342)]('T')[0x0];
        x && (x == null ? void 0x0 : x[he(0x315)]) === !![] && (a8 = A['no'], a9 = A[he(0x358)], aa = A[he(0x271)], ac = A[he(0x300)], ad = A[he(0x44e)], ab = ab[he(0x1d8)](ae => {
            const hf = he;
            if (!ae[hf(0x2b2)])
                ae[hf(0x2b2)] = 0x0;
            return ae;
        })), z(ab), B(ae => {
            const hg = he;
            return {
                ...ae,
                'no': a8,
                'from': aa,
                'fromAddress': a9,
                'email': E[hg(0x11b)],
                'website': E[hg(0x387)],
                'contact': E[hg(0x4d9)],
                'pdfColor': String(E[hg(0x478)]),
                'madeby': E['username'] || '',
                'date': ad,
                'showLinks': (A == null ? void 0x0 : A[hg(0x1b0)]) !== void 0x0 ? A['showLinks'] : ![],
                'items': ab,
                'intro': ac,
                'terms': E['terms'] ?? A[hg(0x306)],
                'additionalInfo': E[hg(0x48e)] ?? A[hg(0x48e)]
            };
        });
    }, []);
    const K = {};
    K[hh(0x4aa)] = 0x0;
    const L = {};
    L[hh(0x4aa)] = 0x1;
    const M = {};
    M['opacity'] = 0x1;
    const N = {};
    N[hh(0x3da)] = 0.4;
    const O = {};
    O[hh(0x40a)] = hh(0x200), O[hh(0x26a)] = 'Quotation\x20No.';
    const P = {};
    P[hh(0x40a)] = hh(0x101), P['children'] = A['no'];
    const Q = {};
    Q['className'] = hh(0x3e2), Q['children'] = hh(0x4a1);
    const R = {};
    R[hh(0x40a)] = hh(0x3e2), R['children'] = hh(0x2d5);
    const S = {};
    S['className'] = hh(0x171), S[hh(0x26a)] = hh(0x3d6);
    const T = {};
    T[hh(0x251)] = J, T[hh(0x40a)] = 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20text-lg', T['children'] = 'Add\x20Item';
    const U = {};
    U[hh(0x40a)] = 'text-sm\x20font-semibold', U[hh(0x26a)] = 'Introductory\x20text';
    const V = {};
    V[hh(0x40a)] = 'text-sm\x20font-semibold', V['children'] = 'First\x20Party\x20Name';
    const W = {};
    W[hh(0x40a)] = hh(0x1ef), W[hh(0x26a)] = hh(0x126);
    const Y = {};
    Y[hh(0x40a)] = hh(0x1ef), Y['children'] = 'Second\x20Party\x20Name';
    const Z = {};
    Z['className'] = hh(0x1ef), Z[hh(0x26a)] = hh(0x365);
    const a0 = {};
    a0[hh(0x40a)] = 'text-sm\x20font-semibold\x20mr-4', a0[hh(0x26a)] = hh(0x3b0);
    const a1 = {};
    a1[hh(0x40a)] = hh(0x3fe), a1['children'] = hh(0x4eb);
    const a2 = {};
    a2[hh(0x40a)] = hh(0x3fe), a2[hh(0x26a)] = hh(0x123);
    const a3 = {};
    a3[hh(0x40a)] = hh(0x3fe), a3[hh(0x26a)] = hh(0x4f0);
    const a4 = {};
    a4[hh(0x40a)] = 'text-sm\x20font-semibold', a4['children'] = hh(0x247);
    const a5 = {};
    a5['className'] = hh(0x1ef), a5[hh(0x26a)] = 'Additional\x20Information';
    const a6 = {};
    return a6[hh(0x40a)] = hh(0x2d1), a6[hh(0x4d3)] = hh(0x482), a6['children'] = hh(0x39b), jsx(Fragment, {
        'children': jsx(AnimatePresence, {
            'children': jsx(motion['div'], {
                'initial': K,
                'animate': L,
                'exit': M,
                'transition': N,
                'children': jsxs(hh(0x426), {
                    'className': hh(0x4bb),
                    'children': [
                        jsxs(hh(0x426), {
                            'className': hh(0x3fa),
                            'children': [
                                jsxs('div', {
                                    'className': hh(0x324),
                                    'children': [
                                        jsx(hh(0x426), O),
                                        jsx('div', P),
                                        jsx(hh(0x426), Q),
                                        jsx(hh(0x43e), {
                                            'type': hh(0x44e),
                                            'color': hh(0x445),
                                            'name': 'date',
                                            'id': hh(0x44e),
                                            'pattern': hh(0xeb),
                                            'placeholder': hh(0x4a1),
                                            'className': hh(0x4fb),
                                            'value': A['date'],
                                            'onChange': a7 => B(a8 => {
                                                const hi = hh, a9 = { ...a8 };
                                                return a9[hi(0x44e)] = a7['target'][hi(0x2ce)], a9;
                                            })
                                        }),
                                        jsx(hh(0x426), R),
                                        jsxs(Switch, {
                                            'checked': A[hh(0x1b0)],
                                            'onChange': a7 => {
                                                B(a8 => {
                                                    const hj = a50b, a9 = { ...a8 };
                                                    return a9[hj(0x1b0)] = a7, a9;
                                                });
                                            },
                                            'className': hh(0x1d4) + (A[hh(0x1b0)] ? hh(0x40c) : hh(0x4da)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20relative\x20inline-flex\x20h-[24px]\x20w-[40px]\x20shrink-0\x20cursor-pointer\x20rounded-full\x20border-2\x20border-transparent\x20transition-colors\x20duration-200\x20ease-in-out\x20focus:outline-none\x20focus-visible:ring-2',
                                            'children': [
                                                jsx('span', S),
                                                jsx('span', {
                                                    'aria-hidden': hh(0x406),
                                                    'className': (A[hh(0x1b0)] ? hh(0x14c) : 'translate-x-0') + hh(0x32e)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                F === 0x1 && jsx(hh(0x426), {
                                    'className': 'w-1/4\x20flex\x20justify-end',
                                    'children': jsx(hh(0x4ec), T)
                                })
                            ]
                        }),
                        jsxs(hh(0x426), {
                            'className': 'flex\x20flex-col\x20items-center',
                            'children': [
                                F === 0x0 && jsxs(Fragment, {
                                    'children': [
                                        jsxs(hh(0x426), {
                                            'className': hh(0x111),
                                            'children': [
                                                jsx(hh(0x246), U),
                                                jsx('textarea', {
                                                    'rows': 0x3,
                                                    'placeholder': hh(0x19e),
                                                    'className': 'p-2\x20border\x20border-border\x20rounded\x20w-full\x20mb-2\x20bg-background',
                                                    'value': A[hh(0x300)],
                                                    'onChange': a7 => B(a8 => {
                                                        const hk = hh, a9 = { ...a8 };
                                                        return a9[hk(0x300)] = a7[hk(0x2df)]['value'], a9;
                                                    })
                                                })
                                            ]
                                        }),
                                        jsxs('div', {
                                            'className': 'mx-10\x20flex\x20space-x-10\x20w-full',
                                            'children': [
                                                jsxs(hh(0x426), {
                                                    'className': hh(0x39f),
                                                    'children': [
                                                        jsxs(hh(0x426), {
                                                            'children': [
                                                                jsx(hh(0x246), V),
                                                                jsx('input', {
                                                                    'type': hh(0x32f),
                                                                    'placeholder': hh(0x18c),
                                                                    'className': hh(0x442),
                                                                    'value': A[hh(0x271)],
                                                                    'onChange': a7 => B(a8 => {
                                                                        const hl = hh, a9 = { ...a8 };
                                                                        return a9[hl(0x271)] = a7[hl(0x2df)]['value'], a9;
                                                                    })
                                                                }, hh(0x4a6))
                                                            ]
                                                        }),
                                                        jsxs(hh(0x426), {
                                                            'children': [
                                                                jsx('label', W),
                                                                jsx(hh(0x268), {
                                                                    'rows': 0x5,
                                                                    'placeholder': hh(0x4ca),
                                                                    'className': hh(0x340),
                                                                    'value': A[hh(0x358)],
                                                                    'onChange': a7 => B(a8 => {
                                                                        const hm = hh, a9 = { ...a8 };
                                                                        return a9['fromAddress'] = a7[hm(0x2df)]['value'], a9;
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                jsxs(hh(0x426), {
                                                    'className': 'w-full\x20space-y-2',
                                                    'children': [
                                                        jsxs('div', {
                                                            'children': [
                                                                jsx(hh(0x246), Y),
                                                                jsx(hh(0x43e), {
                                                                    'type': hh(0x32f),
                                                                    'placeholder': 'Enter\x20Second\x20Party\x20Name',
                                                                    'className': hh(0x442),
                                                                    'value': A['to'],
                                                                    'onChange': a7 => B(a8 => {
                                                                        const hn = hh, a9 = { ...a8 };
                                                                        return a9['to'] = a7['target'][hn(0x2ce)], a9;
                                                                    })
                                                                }, 'second')
                                                            ]
                                                        }),
                                                        jsxs(hh(0x426), {
                                                            'children': [
                                                                jsx(hh(0x246), Z),
                                                                jsx('textarea', {
                                                                    'rows': 0x5,
                                                                    'placeholder': hh(0x2da),
                                                                    'className': hh(0x340),
                                                                    'value': A[hh(0xea)],
                                                                    'onChange': a7 => B(a8 => {
                                                                        const ho = hh, a9 = { ...a8 };
                                                                        return a9['toAddress'] = a7[ho(0x2df)][ho(0x2ce)], a9;
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        jsx(hh(0x4ec), {
                                            'onClick': () => G(0x1),
                                            'className': hh(0x2d1),
                                            'children': hh(0x428)
                                        })
                                    ]
                                }),
                                F === 0x1 && jsxs(Fragment, {
                                    'children': [
                                        jsx(hh(0x426), {
                                            'className': hh(0x32b),
                                            'children': y[hh(0x1d8)]((a7, a8) => {
                                                const hp = hh, a9 = {};
                                                return a9[hp(0x37a)] = a8, jsx(Fragment, { 'children': jsx(a50co, a9, a8) });
                                            })
                                        }),
                                        jsxs('div', {
                                            'className': hh(0xe2),
                                            'children': [
                                                jsxs(hh(0x426), {
                                                    'className': hh(0x33c),
                                                    'children': [
                                                        jsx(hh(0x426), a0),
                                                        jsxs(hh(0x426), {
                                                            'className': '',
                                                            'children': [
                                                                'Rs.',
                                                                A['amount'][hh(0x1f6)]('en-IN')
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                jsxs(hh(0x426), {
                                                    'className': hh(0x33c),
                                                    'children': [
                                                        jsx(hh(0x246), a1),
                                                        jsx(hh(0x43e), {
                                                            'type': hh(0x486),
                                                            'placeholder': 'Enter\x20Tax\x20Percentage',
                                                            'className': hh(0x228),
                                                            'value': A[hh(0x4a4)],
                                                            'onChange': a7 => B(a8 => {
                                                                const hq = hh;
                                                                return {
                                                                    ...a8,
                                                                    'tax': parseFloat(a7[hq(0x2df)][hq(0x2ce)])
                                                                };
                                                            })
                                                        })
                                                    ]
                                                }),
                                                jsxs(hh(0x426), {
                                                    'className': hh(0x33c),
                                                    'children': [
                                                        jsx(hh(0x246), a2),
                                                        jsx(hh(0x43e), {
                                                            'type': 'number',
                                                            'placeholder': hh(0x305),
                                                            'className': hh(0x228),
                                                            'value': A[hh(0x294)],
                                                            'onChange': a7 => B(a8 => {
                                                                const hr = hh;
                                                                return {
                                                                    ...a8,
                                                                    'discount': parseFloat(a7[hr(0x2df)][hr(0x2ce)])
                                                                };
                                                            })
                                                        })
                                                    ]
                                                }),
                                                jsxs('div', {
                                                    'className': 'flex\x20items-center',
                                                    'children': [
                                                        jsx(hh(0x426), a3),
                                                        jsxs(hh(0x426), {
                                                            'className': '',
                                                            'children': [
                                                                hh(0x467),
                                                                Number((A['amount'] * (0x1 + A[hh(0x4a4)] * 0.01) * (0x1 - A[hh(0x294)] * 0.01))[hh(0xdf)](0x2))[hh(0x1f6)]('en-IN')
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        jsxs('div', {
                                            'className': hh(0x1fe),
                                            'children': [
                                                jsx(hh(0x4ec), {
                                                    'onClick': () => G(0x0),
                                                    'className': hh(0xcb),
                                                    'children': hh(0x257)
                                                }),
                                                jsx(hh(0x4ec), {
                                                    'onClick': () => {
                                                        B(a7 => {
                                                            const hs = a50b, a8 = { ...a7 };
                                                            return a8[hs(0x3dd)] = [...y], a8;
                                                        }), G(0x2);
                                                    },
                                                    'className': hh(0xcb),
                                                    'children': hh(0x428)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                F === 0x2 && jsxs(Fragment, {
                                    'children': [
                                        jsxs(hh(0x426), {
                                            'className': hh(0x308),
                                            'children': [
                                                jsxs(hh(0x426), {
                                                    'className': hh(0x111),
                                                    'children': [
                                                        jsx(hh(0x246), a4),
                                                        jsx(hh(0x268), {
                                                            'rows': 0x5,
                                                            'placeholder': hh(0x3ed),
                                                            'className': hh(0x340),
                                                            'value': A['terms'],
                                                            'onChange': a7 => B(a8 => {
                                                                const ht = hh, a9 = { ...a8 };
                                                                return a9[ht(0x306)] = a7[ht(0x2df)]['value'], a9;
                                                            })
                                                        })
                                                    ]
                                                }),
                                                jsxs(hh(0x426), {
                                                    'className': hh(0x111),
                                                    'children': [
                                                        jsx(hh(0x246), a5),
                                                        jsx(hh(0x268), {
                                                            'rows': 0x5,
                                                            'placeholder': 'Enter\x20Additional\x20Information.....',
                                                            'className': hh(0x340),
                                                            'value': A[hh(0x48e)],
                                                            'onChange': a7 => B(a8 => {
                                                                const hu = hh, a9 = { ...a8 };
                                                                return a9[hu(0x48e)] = a7[hu(0x2df)][hu(0x2ce)], a9;
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        jsxs(hh(0x426), {
                                            'className': hh(0x1fe),
                                            'children': [
                                                jsx(hh(0x4ec), {
                                                    'onClick': () => G(0x1),
                                                    'className': hh(0x2d1),
                                                    'children': hh(0x257)
                                                }),
                                                jsx(hh(0x216), {
                                                    'onSubmit': a7 => {
                                                        const hv = hh;
                                                        a50cp(A, H, E == null ? void 0x0 : E['showCustomerList']), a7[hv(0x431)](), I(hv(0x475));
                                                    },
                                                    'children': jsx(hh(0x4ec), a6)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, F)
        })
    });
}
const a50cr = {};
a50cr[a50gp(0x27a)] = null, a50cr[a50gp(0x2ae)] = a50cp, a50cr[a50gp(0x18b)] = a50cq;
const a50cs = {};
a50cs[a50gp(0x2ce)] = a50gp(0x3c8);
const a50ct = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50cr, Symbol[a50gp(0x20d)], a50cs));
function a50cu() {
    const hy = a50gp, {
            setHeaderText: f,
            profile: g
        } = a50c6(), {addNotifications: h} = a50c8(), i = a50cj();
    useEffect(() => {
        const hw = a50b;
        f(hw(0x1f4));
    }, []);
    async function j(p) {
        const hx = a50b;
        p['preventDefault']();
        const q = new FormData(p[hx(0x2df)]), r = {};
        r[hx(0x1a8)] = 'POST', r[hx(0x2d6)] = q;
        const s = await i('/api/password', r), t = {};
        t[hx(0x290)] = hx(0x36d), t['message'] = hx(0x4a2);
        const u = {};
        u[hx(0x290)] = hx(0x3ad), u[hx(0x367)] = 'Fail\x20to\x20update\x20password...try\x20gain\x20later.';
        if (s[hx(0x23f)] === 0xc8)
            h(t);
        else
            h(u);
    }
    const k = {};
    k[hy(0x1f7)] = !![], k[hy(0x4e5)] = hy(0x1cd), k[hy(0x2ce)] = g[hy(0x1cd)];
    const l = {};
    l[hy(0x498)] = !![], l[hy(0x230)] = hy(0x1e3), l[hy(0x4d3)] = hy(0x1e3), l['name'] = hy(0x1f2), l[hy(0x232)] = hy(0x13b), l[hy(0x40a)] = 'border\x20border-border\x20p-2\x20bg-background\x20w-full';
    const m = {};
    m[hy(0x498)] = !![], m[hy(0x1ac)] = 0x6, m[hy(0x230)] = hy(0x1e3), m['type'] = hy(0x1e3), m['name'] = 'newPassword', m[hy(0x232)] = 'Enter\x20New\x20Password', m[hy(0x40a)] = 'border\x20border-border\x20p-2\x20w-full\x20bg-background';
    const n = {};
    n[hy(0x498)] = !![], n[hy(0x1ac)] = 0x6, n[hy(0x230)] = hy(0x1e3), n[hy(0x4d3)] = hy(0x1e3), n['name'] = 'repeatPassword', n[hy(0x232)] = hy(0xf0), n[hy(0x40a)] = 'border\x20border-border\x20p-2\x20w-full\x20bg-background';
    const o = {};
    return o[hy(0x4d3)] = hy(0x482), o[hy(0x40a)] = hy(0x2d1), o['children'] = hy(0x374), jsx(Fragment, {
        'children': jsxs(hy(0x216), {
            'onSubmit': j,
            'className': hy(0x3c6),
            'children': [
                jsx('input', k),
                jsxs(hy(0x426), {
                    'children': [
                        hy(0x3ae),
                        jsx(hy(0x43e), l)
                    ]
                }),
                jsxs('div', {
                    'children': [
                        'New\x20Password\x20(At\x20least\x206\x20character\x20long)\x20',
                        jsx('input', m)
                    ]
                }),
                jsxs(hy(0x426), {
                    'children': [
                        hy(0x180),
                        jsx('input', n)
                    ]
                }),
                jsx('div', {
                    'className': 'flex\x20justify-center',
                    'children': jsx(hy(0x4ec), o)
                })
            ]
        })
    });
}
const a50cv = {};
a50cv[a50gp(0x27a)] = null, a50cv[a50gp(0x18b)] = a50cu;
const a50cw = {};
a50cw[a50gp(0x2ce)] = a50gp(0x3c8);
const a50cx = Object[a50gp(0xd3)](Object['defineProperty'](a50cv, Symbol[a50gp(0x20d)], a50cw));
function a50cy() {
    const hA = a50gp, {
            setHeaderText: d,
            profile: e,
            setProfile: f
        } = a50c6(), {addNotifications: g} = a50c8(), h = a50cj(), [i, j] = useState(e['showCustomerList']);
    useEffect(() => {
        d('Profile\x20Settings');
    }, []);
    async function k() {
        const hz = a50b, o = {};
        o['Content-Type'] = hz(0x160);
        const p = await h(hz(0x4cc), {
                'method': 'POST',
                'headers': o,
                'body': JSON[hz(0x399)](e)
            }), q = {};
        q[hz(0x290)] = hz(0x36d), q[hz(0x367)] = hz(0x46d);
        const r = {};
        r['title'] = hz(0x43a), r[hz(0x367)] = 'Fail\x20to\x20update\x20profile...try\x20gain\x20later...';
        if (p[hz(0x23f)] === 0xc8)
            g(q);
        else
            g(r);
    }
    const l = {};
    l[hA(0x26a)] = 'Show\x20Customer\x20Lists\x20:\x20';
    const m = {};
    m[hA(0x40a)] = hA(0x171), m[hA(0x26a)] = 'Show\x20Customer\x20Lists\x20:\x20';
    const n = {};
    return n[hA(0x251)] = k, n[hA(0x40a)] = hA(0x2d1), n[hA(0x26a)] = hA(0x374), jsxs(Fragment, {
        'children': [
            jsxs(TabGroup, {
                'className': hA(0x3de),
                'children': [
                    jsx(TabList, {
                        'className': 'flex\x20justify-center\x20w-full',
                        'children': jsx(hA(0x426), {
                            'className': hA(0x3ca),
                            'children': [
                                hA(0x3dc),
                                hA(0x337)
                            ][hA(0x1d8)](o => jsx(Tab, {
                                'className': hA(0x14e),
                                'children': o
                            }, o))
                        })
                    }),
                    jsxs(TabPanels, {
                        'className': '',
                        'children': [
                            jsx(TabPanel, {
                                'className': '',
                                'children': jsxs(hA(0x426), {
                                    'className': 'grid\x20grid-cols-2\x20gap-4\x20text-textPrimary\x20mt-4',
                                    'children': [
                                        jsxs(hA(0x426), {
                                            'children': [
                                                'Contact\x20Number\x20',
                                                jsx(hA(0x43e), {
                                                    'type': hA(0x32f),
                                                    'name': hA(0xd7),
                                                    'placeholder': '+91\x20....',
                                                    'className': hA(0x1da),
                                                    'value': e == null ? void 0x0 : e[hA(0x4d9)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hB = a50b, q = { ...p };
                                                            return q[hB(0x4d9)] = o[hB(0x2df)][hB(0x2ce)], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs(hA(0x426), {
                                            'children': [
                                                hA(0x424),
                                                jsx(hA(0x43e), {
                                                    'type': hA(0x11b),
                                                    'name': hA(0x11b),
                                                    'placeholder': 'abc@email.com',
                                                    'className': hA(0x442),
                                                    'value': e == null ? void 0x0 : e[hA(0x11b)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hC = a50b, q = { ...p };
                                                            return q[hC(0x11b)] = o['target'][hC(0x2ce)], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs(hA(0x426), {
                                            'children': [
                                                hA(0x3fb),
                                                jsx('input', {
                                                    'type': hA(0x32f),
                                                    'name': 'website',
                                                    'placeholder': 'abc@email.com',
                                                    'className': hA(0x442),
                                                    'value': e == null ? void 0x0 : e[hA(0x387)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const q = { ...p };
                                                            return q['website'] = o['target']['value'], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs(hA(0x426), {
                                            'children': [
                                                hA(0x2b4),
                                                jsx('input', {
                                                    'type': hA(0x32f),
                                                    'name': hA(0x355),
                                                    'placeholder': hA(0x497),
                                                    'className': hA(0x442),
                                                    'value': e == null ? void 0x0 : e[hA(0x355)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hD = a50b, q = { ...p };
                                                            return q['company'] = o[hD(0x2df)]['value'], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs(hA(0x426), {
                                            'children': [
                                                hA(0x44f),
                                                jsx(hA(0x268), {
                                                    'rows': 0x3,
                                                    'placeholder': hA(0x404),
                                                    'className': 'border\x20border-border\x20p-2\x20w-full\x20bg-background',
                                                    'value': e == null ? void 0x0 : e[hA(0x4f1)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const q = { ...p };
                                                            return q['address'] = o['target']['value'], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, 'General\x20Profile\x20Settings'),
                            jsx(TabPanel, {
                                'className': '',
                                'children': jsxs(hA(0x426), {
                                    'className': hA(0x3e9),
                                    'children': [
                                        jsxs('div', {
                                            'children': [
                                                'Terms\x20and\x20Conditions\x20',
                                                jsx('textarea', {
                                                    'rows': 0x5,
                                                    'placeholder': 'Enter\x20Address',
                                                    'className': hA(0x442),
                                                    'value': e == null ? void 0x0 : e[hA(0x306)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hE = a50b, q = { ...p };
                                                            return q[hE(0x306)] = o[hE(0x2df)][hE(0x2ce)], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs(hA(0x426), {
                                            'children': [
                                                hA(0x1b4),
                                                jsx('textarea', {
                                                    'rows': 0x5,
                                                    'placeholder': hA(0x404),
                                                    'className': hA(0x442),
                                                    'value': e == null ? void 0x0 : e[hA(0x48e)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hF = a50b, q = { ...p };
                                                            return q[hF(0x48e)] = o[hF(0x2df)][hF(0x2ce)], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs(hA(0x426), {
                                            'children': [
                                                'Introuductory\x20Text\x20',
                                                jsx('textarea', {
                                                    'rows': 0x3,
                                                    'placeholder': hA(0x404),
                                                    'className': hA(0x442),
                                                    'value': e == null ? void 0x0 : e[hA(0x300)],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hG = a50b, q = { ...p };
                                                            return q[hG(0x300)] = o[hG(0x2df)][hG(0x2ce)], q;
                                                        });
                                                    }
                                                })
                                            ]
                                        }),
                                        jsxs('div', {
                                            'children': [
                                                'PDF\x20Accent\x20Color\x20',
                                                jsx(hA(0x43e), {
                                                    'max': 0x168,
                                                    'min': 0x0,
                                                    'title': hA(0x4c7),
                                                    'type': 'number',
                                                    'name': hA(0x478),
                                                    'placeholder': 'Enter\x20Color\x20HUE\x20Value',
                                                    'className': 'border\x20border-border\x20p-2\x20w-full\x20bg-background',
                                                    'value': e == null ? void 0x0 : e['pdfColor'],
                                                    'onChange': o => {
                                                        f(p => {
                                                            const hH = a50b, q = { ...p };
                                                            return q[hH(0x478)] = o[hH(0x2df)][hH(0x2ce)], q;
                                                        });
                                                    }
                                                }),
                                                jsxs(hA(0x426), {
                                                    'className': 'mt-4\x20flex\x20items-center',
                                                    'children': [
                                                        jsx('div', l),
                                                        jsxs(Switch, {
                                                            'checked': i,
                                                            'onChange': o => {
                                                                j(o), f(p => {
                                                                    const q = { ...p };
                                                                    return q['showCustomerList'] = o, q;
                                                                });
                                                            },
                                                            'className': hA(0x1d4) + (i ? hA(0x40c) : hA(0x4da)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20relative\x20inline-flex\x20h-[24px]\x20w-[40px]\x20shrink-0\x20cursor-pointer\x20rounded-full\x20border-2\x20border-transparent\x20transition-colors\x20duration-200\x20ease-in-out\x20focus:outline-none\x20focus-visible:ring-2',
                                                            'children': [
                                                                jsx('span', m),
                                                                jsx(hA(0x4ea), {
                                                                    'aria-hidden': hA(0x406),
                                                                    'className': (i ? hA(0x14c) : 'translate-x-0') + hA(0x469)
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, hA(0x337))
                        ]
                    })
                ]
            }),
            jsx(hA(0x426), {
                'className': hA(0x26b),
                'children': jsx(hA(0x4ec), n)
            })
        ]
    });
}
const a50cz = {};
a50cz[a50gp(0x27a)] = null, a50cz[a50gp(0x18b)] = a50cy;
const a50cA = {};
a50cA[a50gp(0x2ce)] = a50gp(0x3c8);
const a50cB = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50cz, Symbol[a50gp(0x20d)], a50cA)), a50cC = {};
a50cC['className'] = a50gp(0x46e), a50cC[a50gp(0x26a)] = a50gp(0x4a5);
const a50cD = {};
a50cD[a50gp(0x40a)] = a50gp(0x46e), a50cD[a50gp(0x26a)] = a50gp(0x48b);
const a50cE = {};
a50cE[a50gp(0x40a)] = a50gp(0x46e), a50cE[a50gp(0x26a)] = a50gp(0x3be);
const a50cF = [
        {
            'accessorKey': 'no',
            'header': a50gp(0x140),
            'cell': b => {
                const hI = a50gp, c = {};
                return c[hI(0x26a)] = b['row'][hI(0x493)]['no'], jsx(hI(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                const hJ = a50gp;
                return a['original'][b]['toLowerCase']()[hJ(0x379)](c);
            }
        },
        {
            'accessorKey': a50gp(0x287),
            'header': 'Made\x20By',
            'cell': b => {
                const hK = a50gp, c = {};
                return c[hK(0x26a)] = b[hK(0x3f8)][hK(0x493)][hK(0x287)], jsx('span', c);
            },
            'filterFn': (a, b, c) => {
                const hL = a50gp;
                return a[hL(0x493)][b][hL(0x33d)]()[hL(0x379)](c);
            }
        },
        {
            'accessorKey': a50gp(0x44e),
            'header': 'Date',
            'cell': b => {
                const hM = a50gp, c = {};
                return c[hM(0x26a)] = b[hM(0x3f8)][hM(0x493)]['date'], jsx('span', c);
            },
            'filterFn': (a, b, c) => {
                const hN = a50gp;
                return a[hN(0x493)][b][hN(0x33d)]()[hN(0x379)](c);
            }
        },
        {
            'accessorKey': 'to',
            'header': 'To',
            'cell': b => {
                const hO = a50gp, c = {};
                return c[hO(0x26a)] = b[hO(0x3f8)][hO(0x493)]['to'], jsx(hO(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                const hP = a50gp;
                return a['original'][b][hP(0x33d)]()[hP(0x379)](c);
            }
        },
        {
            'accessorKey': a50gp(0x294),
            'header': 'Discount',
            'cell': b => {
                const hQ = a50gp, c = {};
                return c[hQ(0x26a)] = [
                    b[hQ(0x3f8)][hQ(0x493)][hQ(0x294)],
                    '\x20%'
                ], jsxs(hQ(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                return a['original'][b] == c;
            }
        },
        {
            'accessorKey': a50gp(0x2b2),
            'header': a50gp(0x38e),
            'cell': b => {
                const hR = a50gp, c = b[hR(0x3f8)][hR(0x493)][hR(0x3dd)][hR(0x143)]((e, f) => e + (f['addon'] ?? 0x0), 0x0) / (b[hR(0x3f8)][hR(0x493)]['items'][hR(0x421)] || 0x1), d = {};
                return d[hR(0x26a)] = [
                    c,
                    '\x20%'
                ], jsxs(hR(0x4ea), d);
            },
            'filterFn': (a, b, c) => {
                const hS = a50gp;
                return a[hS(0x493)][b] == c;
            }
        },
        {
            'accessorKey': a50gp(0x26c),
            'header': a50gp(0x253),
            'cell': a => {
                const hT = a50gp;
                if (!a[hT(0x3f8)]['original'][hT(0x26c)])
                    return '';
                return jsxs(hT(0x4ea), {
                    'children': [
                        hT(0x467),
                        a[hT(0x3f8)][hT(0x493)][hT(0x26c)][hT(0x1f6)](hT(0x117))
                    ]
                });
            }
        },
        {
            'accessorKey': a50gp(0x1b8),
            'header': () => jsx(a50gp(0x426), a50cC),
            'cell': a => {
                const hU = a50gp;
                return jsx(hU(0x270), { 'children': jsx(Pencil, {}) });
            }
        },
        {
            'accessorKey': a50gp(0x12d),
            'header': () => jsx(a50gp(0x426), a50cD),
            'cell': a => {
                return jsx('center', { 'children': jsx(Copy, {}) });
            }
        },
        {
            'accessorKey': a50gp(0x49f),
            'header': () => jsx(a50gp(0x426), a50cE),
            'cell': a => {
                const hV = a50gp;
                return jsxs(hV(0x270), {
                    'children': [
                        '\x20',
                        jsx(Trash2, {})
                    ]
                });
            }
        }
    ], a50cG = ({
        data: u,
        columns: v,
        isFetching: w,
        skeletonCount: skeletonCount = 0xa,
        skeletonHeight: skeletonHeight = 0x1c,
        headerComponent: x,
        pageCount: y,
        search: z,
        onClickRow: A,
        page: B,
        searchLabel: searchLabel = a50gp(0x378),
        EmptyText: C,
        children: D,
        handleRow: E,
        refresh: F,
        deleteQuotation: G
    }) => {
        const hX = a50gp;
        var H, I;
        const J = useMemo(() => u, [u]), K = useMemo(() => v, [v]), L = useMemo(() => x, [x]), [M, N] = useState([]), [O, P] = useState([]), [Q, R] = useState('no');
        function S(aJ) {
            const hW = a50b;
            if (aJ === 'no')
                return 'Quotation\x20#';
            else {
                if (aJ === 'madeby')
                    return hW(0x2b6);
                else {
                    if (aJ === hW(0x44e))
                        return hW(0x4a1);
                    else {
                        if (aJ === 'to')
                            return 'To';
                        else {
                            if (aJ === hW(0x294))
                                return hW(0x398);
                            else {
                                if (aJ === hW(0x26c))
                                    return hW(0x253);
                                else ;
                            }
                        }
                    }
                }
            }
        }
        const T = {};
        T[hX(0x304)] = 0x0, T['pageSize'] = 0xa;
        const [U, V] = useState(T), W = {};
        W[hX(0x30b)] = M, W['columnFilters'] = O, W[hX(0x157)] = U;
        const {
                getHeaderGroups: Y,
                getRowModel: Z,
                getAllColumns: a0,
                getColumn: a1,
                firstPage: a2,
                getCanNextPage: a3,
                getCanPreviousPage: a4,
                getState: a5,
                getPageCount: a6,
                setPageIndex: a7,
                setPageSize: a8,
                lastPage: a9,
                nextPage: aa,
                previousPage: ab,
                getRowCount: ac
            } = useReactTable({
                'data': J,
                'columns': K,
                'getCoreRowModel': getCoreRowModel(),
                'onSortingChange': N,
                'getSortedRowModel': getSortedRowModel(),
                'onColumnFiltersChange': P,
                'getFilteredRowModel': getFilteredRowModel(),
                'getPaginationRowModel': getPaginationRowModel(),
                'autoResetPageIndex': ![],
                'state': W
            }), ad = {};
        ad[hX(0x421)] = skeletonCount;
        const ae = Array['from'](ad, (aJ, aK) => aK), af = a0()[hX(0x421)], ag = !w && (!J || J[hX(0x421)] === 0x0), ah = useNavigate(), {
                setData: ai,
                setItems: aj,
                profile: ak
            } = a50c6(), al = a50cj(), [am, an] = useState(![]), ao = {};
        ao['start'] = '', ao[hX(0x211)] = '', ao['to'] = '';
        const [ap, aq] = useState(ao);
        function ar(aJ) {
            const hY = hX;
            ai(aJ), aj(aJ[hY(0x3dd)]);
            const aK = {};
            aK['editing'] = !![];
            const aL = {};
            aL['state'] = aK, ah(hY(0x22a), aL);
        }
        function as(aJ) {
            const hZ = hX;
            ai(aJ), aj(aJ['items']);
            const aK = {};
            aK[hZ(0x315)] = ![];
            const aL = {};
            aL[hZ(0x105)] = aK, ah(hZ(0x22a), aL);
        }
        const at = {};
        at[hX(0x40a)] = hX(0x4af);
        const au = {};
        au['value'] = 'no', au[hX(0x40a)] = 'block\x20px-4\x20py-2\x20text-sm\x20text-textSecondary\x20data-[focus]:bg-buttonHover\x20data-[focus]:text-textSecondary\x20data-[focus]:outline-none', au['children'] = hX(0x1cf);
        const av = {};
        av[hX(0x2ce)] = hX(0x287), av[hX(0x40a)] = hX(0x47a), av[hX(0x26a)] = hX(0x2b6);
        const aw = {};
        aw['value'] = hX(0x44e), aw['className'] = hX(0x47a), aw[hX(0x26a)] = hX(0x4a1);
        const ax = {};
        ax['value'] = 'to', ax[hX(0x40a)] = hX(0x47a), ax[hX(0x26a)] = 'To';
        const ay = {};
        ay[hX(0x2ce)] = hX(0x294), ay[hX(0x40a)] = hX(0x47a), ay['children'] = hX(0x398);
        const az = {};
        az[hX(0xe0)] = !![], az[hX(0x40a)] = hX(0x188);
        const aA = {};
        aA['as'] = 'h3', aA['className'] = hX(0x3f9), aA[hX(0x26a)] = hX(0x2f7);
        const aB = {};
        aB[hX(0x26a)] = hX(0x2f4);
        const aC = {};
        aC[hX(0x26a)] = 'End';
        const aD = {};
        aD[hX(0x421)] = af;
        const aE = {};
        aE[hX(0x40a)] = hX(0x17a) + skeletonHeight + ']';
        const aF = {};
        aF[hX(0x304)] = U[hX(0x304)] - 0x1, aF[hX(0x292)] = U[hX(0x292)];
        const aG = {};
        aG[hX(0x304)] = U['pageIndex'] + 0x1, aG[hX(0x292)] = U[hX(0x292)];
        const aH = {};
        aH[hX(0x26a)] = hX(0x3ab);
        const aI = {};
        return aI[hX(0x40a)] = 'my-2\x20text-center\x20text-textSecondary', aI[hX(0x26a)] = C, jsxs(hX(0x426), {
            'className': '',
            'children': [
                jsxs('div', {
                    'className': 'flex\x20space-x-4\x20items-center\x20align-middle',
                    'children': [
                        jsx(Listbox, {
                            'value': Q,
                            'onChange': R,
                            'children': jsxs(hX(0x426), {
                                'className': hX(0x2fb),
                                'children': [
                                    jsxs(ListboxButton, {
                                        'className': 'flex\x20items-center\x20hover:bg-buttonHover\x20px-2\x20border\x20border-border\x20py-2',
                                        'children': [
                                            jsx(hX(0x426), {
                                                'className': hX(0x409),
                                                'children': S(Q)
                                            }),
                                            jsx(ChevronDown, at)
                                        ]
                                    }),
                                    jsx(ListboxOptions, {
                                        'transition': !![],
                                        'className': hX(0x1ff),
                                        'children': jsxs('div', {
                                            'className': hX(0x3d8),
                                            'children': [
                                                jsx(ListboxOption, au, 'no'),
                                                jsx(ListboxOption, av, hX(0x287)),
                                                jsx(ListboxOption, aw, hX(0x44e)),
                                                jsx(ListboxOption, ax, 'to'),
                                                jsx(ListboxOption, ay, hX(0x294))
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        jsx('input', {
                            'placeholder': hX(0x453),
                            'value': ((H = a1(Q)) == null ? void 0x0 : H[hX(0x373)]()) ?? '',
                            'onChange': aJ => {
                                const i0 = hX;
                                var aK;
                                return (aK = a1(Q)) == null ? void 0x0 : aK[i0(0x4b1)](aJ[i0(0x2df)]['value']);
                            },
                            'className': 'border\x20p-2\x20w-[20%]\x20border-border\x20bg-background\x20text-textPrimary\x20focus:outline-textPrimary'
                        }),
                        jsx(hX(0x4ec), {
                            'onClick': () => an(!![]),
                            'className': 'bg-button\x20text-buttonTextPrimary\x20p-2',
                            'children': 'Advance\x20Filter'
                        }),
                        jsx(hX(0x4ec), {
                            'onClick': () => {
                                z();
                            },
                            'className': hX(0x2bf),
                            'children': hX(0x22e)
                        }),
                        jsx(hX(0x4ec), {
                            'onClick': () => {
                                F();
                            },
                            'className': hX(0x2bf),
                            'children': hX(0x458)
                        }),
                        jsx(hX(0x426), {
                            'className': hX(0xcf),
                            'children': jsx(hX(0x426), {
                                'className': hX(0x210),
                                'children': jsx(hX(0x4ec), {
                                    'onClick': () => {
                                        z();
                                    },
                                    'className': hX(0x204),
                                    'children': hX(0x1a0)
                                })
                            })
                        })
                    ]
                }),
                jsx(hX(0x426), {
                    'children': jsxs(Dialog, {
                        'open': am,
                        'onClose': an,
                        'className': hX(0x3c1),
                        'children': [
                            jsx(DialogBackdrop, az),
                            jsx(hX(0x426), {
                                'className': hX(0x456),
                                'children': jsx('div', {
                                    'className': hX(0x27b),
                                    'children': jsxs(DialogPanel, {
                                        'transition': !![],
                                        'className': hX(0x38f),
                                        'children': [
                                            jsxs('div', {
                                                'className': hX(0x481),
                                                'children': [
                                                    jsx('div', {
                                                        'className': hX(0x254),
                                                        'children': jsx(DialogTitle, aA)
                                                    }),
                                                    jsxs(hX(0x426), {
                                                        'className': hX(0x286),
                                                        'children': [
                                                            jsx(hX(0x426), aB),
                                                            jsx(hX(0x43e), {
                                                                'type': hX(0x44e),
                                                                'className': hX(0x25c),
                                                                'onChange': aJ => {
                                                                    aq(aK => {
                                                                        const i1 = a50b, aL = { ...aK };
                                                                        return aL['start'] = aJ[i1(0x2df)]['value'], aL;
                                                                    });
                                                                }
                                                            }),
                                                            jsx(hX(0x426), aC),
                                                            jsx(hX(0x43e), {
                                                                'type': hX(0x44e),
                                                                'className': hX(0x25c),
                                                                'onChange': aJ => {
                                                                    aq(aK => {
                                                                        const i2 = a50b, aL = { ...aK };
                                                                        return aL[i2(0x211)] = aJ[i2(0x2df)][i2(0x2ce)], aL;
                                                                    });
                                                                }
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            jsxs(hX(0x426), {
                                                'className': hX(0x293),
                                                'children': [
                                                    jsx(hX(0x4ec), {
                                                        'type': 'button',
                                                        'onClick': () => {
                                                            z(ap), an(![]);
                                                        },
                                                        'className': 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20mt-4\x20text-lg',
                                                        'children': 'Search'
                                                    }),
                                                    jsx('button', {
                                                        'type': hX(0x4ec),
                                                        'data-autofocus': !![],
                                                        'onClick': () => an(![]),
                                                        'className': 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20mt-4\x20text-lg',
                                                        'children': hX(0x4e6)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                jsx(hX(0x426), {
                    'className': 'p-4',
                    'children': L && jsx('div', { 'children': L })
                }),
                jsx('div', {
                    'className': '',
                    'children': jsxs(hX(0x10a), {
                        'className': hX(0x111),
                        'children': [
                            jsx('thead', {
                                'children': Y()[hX(0x1d8)](aJ => jsx('tr', {
                                    'className': hX(0x2b0),
                                    'children': aJ[hX(0x385)][hX(0x1d8)](aK => jsx('th', {
                                        'className': hX(0x298),
                                        'children': aK[hX(0x1ec)] ? null : flexRender(aK[hX(0x173)]['columnDef'][hX(0x487)], aK[hX(0x36e)]())
                                    }, aK['id']))
                                }, aJ['id']))
                            }),
                            jsx(hX(0x2a5), {
                                'className': hX(0x25c),
                                'children': !w ? (I = Z()) == null ? void 0x0 : I[hX(0x339)]['map'](aJ => jsx('tr', {
                                    'className': hX(0x4ee),
                                    'tabIndex': 0x0,
                                    'children': aJ[hX(0x1e0)]()[hX(0x1d8)](aK => jsx('td', {
                                        'onClick': aL => {
                                            const i3 = hX;
                                            if (aK[i3(0x173)]['id'] === i3(0x1b8))
                                                ar(aJ['original']);
                                            else {
                                                if (aK[i3(0x173)]['id'] === i3(0x12d))
                                                    as(aJ['original']);
                                                else {
                                                    if (aK[i3(0x173)]['id'] === i3(0x49f))
                                                        G(aJ['original']['no']);
                                                    else
                                                        a50cp(aJ[i3(0x493)], al, ak[i3(0x2a6)], ![]);
                                                }
                                            }
                                        },
                                        'className': hX(0x11c),
                                        'children': flexRender(aK[hX(0x173)]['columnDef']['cell'], aK['getContext']())
                                    }, aK['id']))
                                }, aJ['id'])) : jsx(Fragment, {
                                    'children': ae[hX(0x1d8)](aJ => jsx('tr', {
                                        'className': '',
                                        'children': Array['from'](aD, (aK, aL) => aL)[hX(0x1d8)](aK => jsx('td', {
                                            'className': '',
                                            'children': jsx(hX(0x426), aE)
                                        }, aK))
                                    }, aJ))
                                })
                            })
                        ]
                    })
                }),
                jsxs(hX(0x426), {
                    'className': hX(0x41c),
                    'children': [
                        jsx(hX(0x4ec), {
                            'className': 'border\x20rounded\x20p-1\x20border-border',
                            'onClick': () => V(aF),
                            'disabled': !a4(),
                            'children': jsx(ChevronLeft, {})
                        }),
                        jsx('button', {
                            'className': 'border\x20rounded\x20p-1\x20border-border',
                            'onClick': aJ => V(aG),
                            'disabled': !a3(),
                            'children': jsx(ChevronRight, {})
                        }),
                        jsxs(hX(0x4ea), {
                            'className': hX(0x26d),
                            'children': [
                                jsx(hX(0x426), aH),
                                jsxs(hX(0x27d), {
                                    'children': [
                                        a5()[hX(0x157)][hX(0x304)] + 0x1,
                                        '\x20of',
                                        '\x20',
                                        a6()[hX(0x1f6)]()
                                    ]
                                })
                            ]
                        }),
                        jsxs(hX(0x4ea), {
                            'className': hX(0x26d),
                            'children': [
                                hX(0x483),
                                jsx(hX(0x43e), {
                                    'type': hX(0x486),
                                    'min': '1',
                                    'max': a6(),
                                    'defaultValue': a5()[hX(0x157)][hX(0x304)] + 0x1,
                                    'onChange': aJ => {
                                        const i4 = hX, aK = aJ[i4(0x2df)][i4(0x2ce)] ? Number(aJ[i4(0x2df)][i4(0x2ce)]) - 0x1 : 0x0;
                                        V(aL => {
                                            const aM = { ...aL };
                                            return aM['pageIndex'] = aK, aM;
                                        });
                                    },
                                    'className': 'border\x20border-border\x20bg-header\x20p-1\x20w-16'
                                })
                            ]
                        }),
                        jsx('select', {
                            'className': 'p-2\x20bg-header\x20border\x20border-border',
                            'value': a5()['pagination']['pageSize'],
                            'onChange': aJ => {
                                const i5 = hX;
                                a8(Number(aJ['target']['value'])), V({
                                    'pageIndex': U[i5(0x304)],
                                    'pageSize': Number(aJ[i5(0x2df)]['value'])
                                });
                            },
                            'children': [
                                0xa,
                                0x14,
                                0x1e,
                                0x28,
                                0x32
                            ][hX(0x1d8)](aJ => jsxs('option', {
                                'value': aJ,
                                'children': [
                                    'Show\x20',
                                    aJ
                                ]
                            }, aJ))
                        })
                    ]
                }),
                ag && jsx(hX(0x426), aI)
            ]
        });
    }, a50cH = memo(a50cG), a50cI = () => {
        const i9 = a50gp, [b, c] = useState(![]), {addNotifications: d} = a50c8(), e = a50cj(), {
                quoteData: f,
                setHeaderText: g,
                dataCount: h,
                setDataCount: i,
                setQuoteData: j,
                setData: k,
                setItems: l,
                profile: m
            } = a50c6();
        async function n() {
            const i6 = a50b;
            c(!![]);
            const r = await e(i6(0x4cb));
            if (r['status'] === 0xc8) {
                const s = await r[i6(0x236)]();
                j(s), i(s['length']);
            } else {
                const t = {};
                t['title'] = 'Failure...', t[i6(0x367)] = i6(0x273), d(t);
            }
            c(![]);
        }
        async function o(r) {
            const i7 = a50b;
            c(!![]);
            var s;
            if (r) {
                s = await e(i7(0x206) + r[i7(0x164)] + i7(0x25b) + r[i7(0x211)] + i7(0x208) + r['to']);
                if (s['status'] === 0xc8) {
                    const t = await s[i7(0x236)]();
                    j(t);
                } else {
                    if (s[i7(0x23f)] != 0xc8) {
                        const u = {};
                        u[i7(0x290)] = i7(0x3ad), u['message'] = i7(0x273), d(u);
                    }
                }
                i(0x0), c(![]);
            } else {
                c(!![]), s = await e(i7(0x269) + h);
                if (s[i7(0x23f)] === 0xc8) {
                    const v = await s['json']();
                    h == 0x0 ? (j(v), i(v[i7(0x421)])) : (j(w => {
                        return [
                            ...w,
                            ...v
                        ];
                    }), i(f[i7(0x421)] + v['length']));
                } else {
                    if (s[i7(0x23f)] != 0xc8) {
                        const w = {};
                        w[i7(0x290)] = i7(0x3ad), w[i7(0x367)] = i7(0x273), d(w);
                    }
                }
                c(![]);
            }
        }
        async function p(r) {
            const i8 = a50b, s = {};
            s['no'] = r, s[i8(0x1cd)] = m['username'], s['type'] = i8(0x343);
            const t = await e(i8(0x364), {
                'method': i8(0x191),
                'body': JSON[i8(0x399)](s)
            });
            if (t[i8(0x23f)] !== 0xc8) {
                const u = {};
                u[i8(0x290)] = i8(0x29f), u[i8(0x367)] = t[i8(0x2a7)] || '', d(u);
            } else
                j(v => {
                    return v['filter'](w => w['no'] === r ? ![] : !![]);
                });
        }
        useEffect(() => {
            k(a50c2()), l([]), g(a50c1);
            if (h === 0x0)
                n();
        }, []);
        const q = {};
        return q[i9(0x452)] = f, q['columns'] = a50cF, q['searchLabel'] = 'Search\x20by\x20Name\x20or\x20job\x20title', q[i9(0x2a8)] = i9(0x2c9), q[i9(0x31b)] = b, q[i9(0xfd)] = o, q[i9(0x248)] = n, q['deleteQuotation'] = p, jsx(Fragment, {
            'children': jsx(i9(0x429), {
                'className': i9(0x31a),
                'children': jsx(i9(0x426), { 'children': jsx(a50cH, q) })
            })
        });
    }, a50cJ = {};
a50cJ[a50gp(0x27a)] = null, a50cJ[a50gp(0x18b)] = a50cI;
const a50cK = {};
a50cK[a50gp(0x2ce)] = 'Module';
const a50cL = Object['freeze'](Object['defineProperty'](a50cJ, Symbol[a50gp(0x20d)], a50cK)), a50cM = () => {
        const id = a50gp, [b, c] = useState(![]), {addNotifications: d} = a50c8(), e = a50cj(), {
                quoteData: f,
                setHeaderText: g,
                dataCount: h,
                setDataCount: i,
                setQuoteData: j,
                setData: k,
                setItems: l,
                profile: m
            } = a50c6();
        async function n() {
            const ia = a50b;
            c(!![]);
            const r = await e('/api/quotations');
            if (r[ia(0x23f)] === 0xc8) {
                const s = await r['json']();
                j(s), i(s[ia(0x421)]);
            } else {
                const t = {};
                t[ia(0x290)] = ia(0x3ad), t[ia(0x367)] = 'Fail\x20to\x20load\x20data.', d(t);
            }
            c(![]);
        }
        async function o(r) {
            const ib = a50b;
            c(!![]);
            var s;
            if (r) {
                s = await e('/api/quotations?start=' + r[ib(0x164)] + ib(0x25b) + r[ib(0x211)] + ib(0x208) + r['to']);
                if (s[ib(0x23f)] === 0xc8) {
                    const t = await s[ib(0x236)]();
                    j(t);
                } else {
                    if (s[ib(0x23f)] != 0xc8) {
                        const u = {};
                        u[ib(0x290)] = ib(0x3ad), u[ib(0x367)] = ib(0x273), d(u);
                    }
                }
                i(0x0), c(![]);
            } else {
                c(!![]), s = await e(ib(0x269) + h);
                if (s[ib(0x23f)] === 0xc8) {
                    const v = await s[ib(0x236)]();
                    h == 0x0 ? (j(v), i(v['length'])) : (j(w => {
                        return [
                            ...w,
                            ...v
                        ];
                    }), i(f[ib(0x421)] + v[ib(0x421)]));
                } else {
                    if (s[ib(0x23f)] != 0xc8) {
                        const w = {};
                        w[ib(0x290)] = ib(0x3ad), w['message'] = ib(0x273), d(w);
                    }
                }
                c(![]);
            }
        }
        async function p(r) {
            const ic = a50b, s = {};
            s['no'] = r, s['username'] = m[ic(0x1cd)], s[ic(0x4d3)] = ic(0x343);
            const t = await e('/api/delete', {
                'method': ic(0x191),
                'body': JSON[ic(0x399)](s)
            });
            if (t['status'] !== 0xc8) {
                const u = {};
                u[ic(0x290)] = ic(0x29f), u[ic(0x367)] = t[ic(0x2a7)] || '', d(u);
            } else
                j(v => {
                    return v['filter'](w => w['no'] === r ? ![] : !![]);
                });
        }
        useEffect(() => {
            k(a50c2()), l([]), g(a50bX);
            if (h === 0x0)
                n();
        }, []);
        const q = {};
        return q[id(0x452)] = f, q[id(0x207)] = a50cF, q['searchLabel'] = id(0xf3), q[id(0x2a8)] = id(0x2c9), q[id(0x31b)] = b, q[id(0xfd)] = o, q[id(0x248)] = n, q[id(0x165)] = p, jsx(Fragment, {
            'children': jsx(id(0x429), {
                'className': id(0x31a),
                'children': jsx('div', { 'children': jsx(a50cH, q) })
            })
        });
    }, a50cN = {};
a50cN[a50gp(0x27a)] = null, a50cN[a50gp(0x18b)] = a50cM;
const a50cO = {};
a50cO['value'] = a50gp(0x3c8);
const a50cP = Object['freeze'](Object[a50gp(0x32c)](a50cN, Symbol['toStringTag'], a50cO));
function a50cQ({index: c}) {
    const im = a50gp;
    var d, e;
    const [f, g] = useState(![]), [h, i] = useState([]), [j, k] = useState(-0x1), l = useRef(null), [m, n] = useState(![]), {
            setChallanItems: o,
            challanItems: p
        } = a50c6();
    useEffect(() => {
        const ie = a50b;
        if (m) {
            if (p[c]['name']['trim']() === '')
                i([]), g(![]);
            else {
                if (f || h[ie(0x421)] != 0x1 || h[0x0][ie(0x4e5)][ie(0x33d)]() != p[c]['name'][ie(0x33d)]()) {
                    const x = {};
                    x[ie(0x1fb)] = ie(0x160), fetch(ie(0x4d6), {
                        'method': ie(0x191),
                        'headers': x,
                        'body': JSON[ie(0x399)](p[c][ie(0x4e5)])
                    })[ie(0x313)](async y => {
                        const ig = ie, z = await y[ig(0x236)]();
                        i(z), g(z[ig(0x421)] > 0x0), k(-0x1);
                    })[ie(0x299)](y => {
                        const ih = ie;
                        console['error'](ih(0x12e), y);
                    });
                }
            }
        }
    }, [p[c]['name']]);
    const q = x => {
            o(y => {
                const ii = a50b;
                return y[ii(0x1d8)]((z, A) => A === c ? {
                    ...p[c],
                    'name': x[ii(0x2df)][ii(0x2ce)]
                } : z);
            });
        }, r = x => {
            o(y => {
                const ij = a50b, z = {};
                return z['id'] = x['id'], z[ij(0x4e5)] = x['name'], z[ij(0xd9)] = 0x1, z[ij(0x154)] = [], z['unit'] = x['unit'] || ij(0x419), y[ij(0x1d8)]((A, B) => B == c ? z : A);
            }), g(![]);
        }, s = () => {
            setTimeout(() => g(![]), 0x64), n(![]);
        }, t = () => {
            if (h['length'] > 0x0)
                g(!![]);
            n(!![]);
        }, u = x => {
            const ik = a50b;
            if (!f)
                return;
            if (x[ik(0x45d)] === ik(0x3e8))
                k(y => y < h['length'] - 0x1 ? y + 0x1 : 0x0);
            else {
                if (x[ik(0x45d)] === ik(0x2d4))
                    k(y => y > 0x0 ? y - 0x1 : h[ik(0x421)] - 0x1);
                else {
                    if (x[ik(0x45d)] === 'Enter' && j >= 0x0)
                        i([h[j]]), g(![]), o(y => {
                            const il = ik, z = {};
                            return z['id'] = h[j]['id'], z[il(0x4e5)] = h[j][il(0x4e5)], z[il(0xd9)] = 0x1, z['sno'] = [], z['unit'] = h[j][il(0x386)] || il(0x419), y['map']((A, B) => B === c ? z : A);
                        });
                    else
                        x[ik(0x45d)] === ik(0x390) && g(![]);
                }
            }
        }, v = {};
    v[im(0x220)] = l, v[im(0x4d3)] = im(0x32f), v[im(0x2ce)] = p[c]['name'], v[im(0x4a3)] = q, v[im(0x2e5)] = s, v[im(0x1eb)] = t, v[im(0x19f)] = u, v[im(0x40a)] = im(0x3d0), v[im(0x232)] = im(0x371), v[im(0x230)] = im(0x34a);
    const w = {};
    return w[im(0x40a)] = im(0x1ba), jsxs(im(0x426), {
        'className': im(0x276),
        'children': [
            jsx('input', v),
            f && jsx('ul', {
                'className': im(0x3e0),
                'children': h[im(0x1d8)]((x, y) => jsx('li', {
                    'onMouseDown': () => r(x),
                    'className': (y === j ? 'bg-buttonHover' : 'bg-background') + im(0x193),
                    'onMouseEnter': () => k(y),
                    'children': x[im(0x4e5)]
                }, x['id']))
            }),
            jsx(im(0x268), {
                'placeholder': im(0x183),
                'className': im(0x363),
                'value': p[c][im(0x154)],
                'rows': 0x1,
                'onChange': x => {
                    o(y => {
                        const io = a50b, z = x[io(0x2df)][io(0x2ce)][io(0x223)](/[\s,]+/g, ',')[io(0x38c)]()[io(0x342)](',');
                        return y[io(0x1d8)]((A, B) => B === c ? {
                            ...p[c],
                            'sno': z,
                            'quantity': z[io(0x421)]
                        } : A);
                    });
                }
            }),
            jsx(im(0x43e), {
                'type': im(0x486),
                'placeholder': 'Quantity',
                'className': im(0x2ba),
                'value': (d = p[c]) == null ? void 0x0 : d[im(0xd9)],
                'onChange': x => {
                    o(y => {
                        const ip = a50b;
                        return y[ip(0x1d8)]((z, A) => A === c ? {
                            ...p[c],
                            'quantity': Number(x[ip(0x2df)][ip(0x2ce)] || void 0x0)
                        } : z);
                    });
                }
            }),
            jsx(im(0x43e), {
                'type': im(0x107),
                'placeholder': im(0x21e),
                'className': im(0x2ba),
                'value': (e = p[c]) == null ? void 0x0 : e[im(0x386)],
                'onChange': x => {
                    o(y => {
                        const iq = a50b;
                        return y['map']((z, A) => A === c ? {
                            ...p[c],
                            'unit': x[iq(0x2df)][iq(0x2ce)]
                        } : z);
                    });
                }
            }),
            jsx(im(0x4ec), {
                'className': im(0x490),
                'onClick': x => {
                    const ir = im;
                    o(y => y[ir(0x357)]((z, A) => A != c));
                },
                'children': jsx(Minus, w)
            })
        ]
    });
}
function a50cR() {
    const is = a50gp, v = useLocation(), w = v[is(0x105)], {
            challanItems: x,
            setChallanItems: y,
            challanData: z,
            setChallanData: A,
            accessToken: B,
            setHeaderText: C,
            profile: D
        } = a50c6(), [E, F] = useState(0x0), G = a50cj(), H = useNavigate();
    function I() {
        y(a6 => {
            const it = a50b, a7 = {};
            return a7['id'] = 0x0, a7[it(0x4e5)] = '', a7[it(0xd9)] = 0x0, a7[it(0x154)] = [], a7[it(0x386)] = it(0x419), [
                ...a6,
                a7
            ];
        });
    }
    useEffect(() => {
        const iu = is;
        if (E === 0x0)
            C('Challan\x20Details');
        else {
            if (E === 0x1)
                C(iu(0x4ac));
        }
    }, [E]), useEffect(() => {
        const iv = is;
        var a6 = new Date()[iv(0x3a0)]()[iv(0x335)](), a7 = D['address'], a8 = D[iv(0x355)];
        w && (w == null ? void 0x0 : w[iv(0x315)]) === !![] && (a6 = z['no'], a7 = z[iv(0x358)], a8 = z[iv(0x271)]), A(a9 => {
            const iw = iv;
            return {
                ...a9,
                'no': a6,
                'from': a8,
                'fromAddress': a7,
                'email': D[iw(0x11b)],
                'website': D['website'],
                'contact': D[iw(0x4d9)],
                'pdfColor': String(D[iw(0x478)]),
                'madeby': D[iw(0x1cd)] || '',
                'date': new Date()['toISOString']()['split']('T')[0x0]
            };
        });
    }, []);
    const J = [
            'Dealer\x20Sale',
            is(0xf4),
            is(0x439),
            is(0x2d2),
            'MTNL\x20Sale',
            is(0xf6),
            'Private\x20Client\x20Property\x20Return',
            is(0x455),
            is(0x2c7),
            'MTNL\x20Standby',
            is(0x4b8)
        ], K = {};
    K['opacity'] = 0x0;
    const L = {};
    L[is(0x4aa)] = 0x1;
    const M = {};
    M[is(0x4aa)] = 0x1;
    const N = {};
    N[is(0x3da)] = 0.4;
    const O = {};
    O[is(0x40a)] = 'text-sm\x20font-semibold', O[is(0x26a)] = is(0xca);
    const P = {};
    P[is(0x40a)] = is(0x101), P[is(0x26a)] = z['no'];
    const Q = {};
    Q['className'] = 'text-sm\x20font-semibold', Q['children'] = is(0x4a1);
    const R = {};
    R[is(0x251)] = I, R[is(0x40a)] = 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20text-lg', R[is(0x26a)] = is(0x432);
    const S = {};
    S[is(0x40a)] = 'text-sm\x20font-semibold\x20text-left', S[is(0x26a)] = is(0x1cb);
    const T = {};
    T[is(0x40a)] = is(0x1ef), T[is(0x26a)] = 'Mode\x20of\x20Dispatch';
    const U = {};
    U[is(0x40a)] = is(0x1ef), U['children'] = is(0x161);
    const V = {};
    V[is(0x40a)] = is(0x4af);
    const W = {};
    W[is(0x40a)] = is(0x1ef), W[is(0x26a)] = is(0xef);
    const Y = {};
    Y['className'] = is(0x4af);
    const Z = {};
    Z[is(0x40a)] = 'text-sm\x20font-semibold', Z[is(0x26a)] = is(0x280);
    const a0 = {};
    a0[is(0x40a)] = is(0x1ef), a0[is(0x26a)] = is(0x126);
    const a1 = {};
    a1['className'] = is(0x1ef), a1[is(0x26a)] = 'Second\x20Party\x20Name';
    const a2 = {};
    a2[is(0x40a)] = 'text-sm\x20font-semibold', a2[is(0x26a)] = is(0x365);
    const a3 = {};
    a3[is(0x40a)] = is(0x3fe), a3[is(0x26a)] = is(0x28a);
    const a4 = {};
    a4[is(0x40a)] = '', a4[is(0x26a)] = [
        is(0x467),
        '11'
    ];
    const a5 = {};
    return a5['className'] = is(0x2d1), a5[is(0x4d3)] = 'submit', a5['children'] = is(0x147), jsx(Fragment, {
        'children': jsx(AnimatePresence, {
            'children': jsx(motion[is(0x426)], {
                'initial': K,
                'animate': L,
                'exit': M,
                'transition': N,
                'children': jsxs(is(0x426), {
                    'className': is(0x4bb),
                    'children': [
                        jsxs('div', {
                            'className': is(0x3fa),
                            'children': [
                                jsxs('div', {
                                    'className': 'w-[90%]\x20grid\x20grid-cols-4',
                                    'children': [
                                        jsxs(is(0x426), {
                                            'className': is(0x4d0),
                                            'children': [
                                                jsx(is(0x426), O),
                                                jsx('div', P)
                                            ]
                                        }),
                                        jsxs('div', {
                                            'className': 'flex\x20items-center\x20gap-x-4',
                                            'children': [
                                                jsx(is(0x426), Q),
                                                jsx(is(0x43e), {
                                                    'type': 'date',
                                                    'color': is(0x445),
                                                    'name': is(0x44e),
                                                    'id': is(0x44e),
                                                    'pattern': '\x5cd{4}-\x5cd{2}-\x5cd{2}',
                                                    'placeholder': is(0x4a1),
                                                    'className': is(0x4fb),
                                                    'value': z['date'],
                                                    'onChange': a6 => A(a7 => {
                                                        const ix = is, a8 = { ...a7 };
                                                        return a8['date'] = a6['target'][ix(0x2ce)], a8;
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                E === 0x1 && jsx(is(0x426), {
                                    'className': is(0x20a),
                                    'children': jsx(is(0x4ec), R)
                                })
                            ]
                        }),
                        jsxs(is(0x426), {
                            'className': is(0x203),
                            'children': [
                                E === 0x0 && jsxs(Fragment, {
                                    'children': [
                                        jsx(is(0x426), {
                                            'className': is(0x179),
                                            'children': jsxs(is(0x426), {
                                                'className': is(0x30f),
                                                'children': [
                                                    jsxs('div', {
                                                        'className': is(0x2e3),
                                                        'children': [
                                                            jsxs('div', {
                                                                'className': '',
                                                                'children': [
                                                                    jsx(is(0x426), S),
                                                                    jsx(is(0x43e), {
                                                                        'type': 'text',
                                                                        'color': is(0x445),
                                                                        'name': is(0x4c0),
                                                                        'id': 'orderno',
                                                                        'placeholder': is(0x2c0),
                                                                        'className': is(0x3e7),
                                                                        'value': z[is(0x4c0)],
                                                                        'onChange': a6 => A(a7 => {
                                                                            const iy = is, a8 = { ...a7 };
                                                                            return a8[iy(0x44e)] = a6[iy(0x2df)]['value'], a8;
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            jsxs(is(0x426), {
                                                                'className': '',
                                                                'children': [
                                                                    jsx('div', T),
                                                                    jsx('input', {
                                                                        'type': is(0x32f),
                                                                        'color': 'white',
                                                                        'name': is(0x17f),
                                                                        'id': 'orderno',
                                                                        'placeholder': 'Mode\x20of\x20Dispatch',
                                                                        'className': is(0x100),
                                                                        'value': z[is(0x17f)],
                                                                        'onChange': a6 => A(a7 => {
                                                                            const iz = is, a8 = { ...a7 };
                                                                            return a8['date'] = a6['target'][iz(0x2ce)], a8;
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            jsxs(is(0x426), {
                                                                'className': '',
                                                                'children': [
                                                                    jsx(is(0x426), U),
                                                                    jsx(Listbox, {
                                                                        'value': z[is(0x4d3)],
                                                                        'onChange': a6 => {
                                                                            A(a7 => {
                                                                                const iA = a50b, a8 = { ...a7 };
                                                                                return a8[iA(0x4d3)] = a6, a8;
                                                                            });
                                                                        },
                                                                        'children': jsxs(is(0x426), {
                                                                            'className': is(0x2fb),
                                                                            'children': [
                                                                                jsxs(ListboxButton, {
                                                                                    'className': is(0x418),
                                                                                    'children': [
                                                                                        jsx(is(0x426), {
                                                                                            'className': 'text-textSecondary\x20mr-2',
                                                                                            'children': z[is(0x4d3)]
                                                                                        }),
                                                                                        jsx(ChevronDown, V)
                                                                                    ]
                                                                                }),
                                                                                jsx(ListboxOptions, {
                                                                                    'transition': !![],
                                                                                    'className': is(0x15d),
                                                                                    'children': jsx(is(0x426), {
                                                                                        'className': is(0x3d8),
                                                                                        'children': [
                                                                                            'Delivery\x20Challan',
                                                                                            'MIS\x20Challan'
                                                                                        ][is(0x1d8)](a6 => jsx(ListboxOption, {
                                                                                            'value': a6,
                                                                                            'className': 'block\x20px-4\x20py-2\x20text-sm\x20text-textSecondary\x20data-[focus]:bg-buttonHover\x20data-[focus]:text-textSecondary\x20data-[focus]:outline-none',
                                                                                            'children': a6
                                                                                        }, a6))
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            jsxs(is(0x426), {
                                                                'className': '',
                                                                'children': [
                                                                    jsx('div', W),
                                                                    jsx(Listbox, {
                                                                        'value': z[is(0x2ab)],
                                                                        'onChange': a6 => {
                                                                            A(a7 => {
                                                                                const iB = a50b, a8 = { ...a7 };
                                                                                return a8[iB(0x2ab)] = a6, a8;
                                                                            });
                                                                        },
                                                                        'children': jsxs(is(0x426), {
                                                                            'className': 'relative',
                                                                            'children': [
                                                                                jsxs(ListboxButton, {
                                                                                    'className': is(0x418),
                                                                                    'children': [
                                                                                        jsx(is(0x426), {
                                                                                            'className': 'text-textSecondary\x20mr-2',
                                                                                            'children': z['category']
                                                                                        }),
                                                                                        jsx(ChevronDown, Y)
                                                                                    ]
                                                                                }),
                                                                                jsx(ListboxOptions, {
                                                                                    'transition': !![],
                                                                                    'className': is(0x15d),
                                                                                    'children': jsx(is(0x426), {
                                                                                        'className': is(0x3d8),
                                                                                        'children': J[is(0x1d8)](a6 => jsx(ListboxOption, {
                                                                                            'value': a6,
                                                                                            'className': 'block\x20px-4\x20py-2\x20text-sm\x20text-textSecondary\x20data-[focus]:bg-buttonHover\x20data-[focus]:text-textSecondary\x20data-[focus]:outline-none',
                                                                                            'children': a6
                                                                                        }, a6))
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    jsxs(is(0x426), {
                                                        'className': is(0x1c0),
                                                        'children': [
                                                            jsxs(is(0x426), {
                                                                'className': is(0x30f),
                                                                'children': [
                                                                    jsxs(is(0x426), {
                                                                        'children': [
                                                                            jsx('label', Z),
                                                                            jsx(is(0x43e), {
                                                                                'type': is(0x32f),
                                                                                'placeholder': 'Enter\x20First\x20Party\x20Name',
                                                                                'className': 'border\x20border-border\x20p-2\x20w-full\x20bg-background',
                                                                                'value': z[is(0x271)],
                                                                                'onChange': a6 => A(a7 => {
                                                                                    const iC = is, a8 = { ...a7 };
                                                                                    return a8[iC(0x271)] = a6[iC(0x2df)][iC(0x2ce)], a8;
                                                                                })
                                                                            }, is(0x4a6))
                                                                        ]
                                                                    }),
                                                                    jsxs('div', {
                                                                        'children': [
                                                                            jsx(is(0x246), a0),
                                                                            jsx('textarea', {
                                                                                'rows': 0x5,
                                                                                'placeholder': 'Enter\x20First\x20Party\x20Address',
                                                                                'className': is(0x340),
                                                                                'value': z[is(0x358)],
                                                                                'onChange': a6 => A(a7 => {
                                                                                    const iD = is, a8 = { ...a7 };
                                                                                    return a8[iD(0x358)] = a6['target'][iD(0x2ce)], a8;
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            jsxs(is(0x426), {
                                                                'className': is(0x30f),
                                                                'children': [
                                                                    jsxs('div', {
                                                                        'children': [
                                                                            jsx(is(0x246), a1),
                                                                            jsx('input', {
                                                                                'type': is(0x32f),
                                                                                'placeholder': is(0x474),
                                                                                'className': 'border\x20border-border\x20p-2\x20w-full\x20bg-background',
                                                                                'value': z['to'],
                                                                                'onChange': a6 => A(a7 => {
                                                                                    const iE = is, a8 = { ...a7 };
                                                                                    return a8['to'] = a6['target'][iE(0x2ce)], a8;
                                                                                })
                                                                            }, is(0x1c9))
                                                                        ]
                                                                    }),
                                                                    jsxs(is(0x426), {
                                                                        'children': [
                                                                            jsx(is(0x246), a2),
                                                                            jsx(is(0x268), {
                                                                                'rows': 0x5,
                                                                                'placeholder': is(0x2da),
                                                                                'className': 'p-2\x20border\x20border-border\x20w-full\x20bg-background',
                                                                                'value': z[is(0xea)],
                                                                                'onChange': a6 => A(a7 => {
                                                                                    const iF = is, a8 = { ...a7 };
                                                                                    return a8[iF(0xea)] = a6[iF(0x2df)][iF(0x2ce)], a8;
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        jsx(is(0x4ec), {
                                            'onClick': () => F(0x1),
                                            'className': 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20mt-4\x20text-lg',
                                            'children': 'Next'
                                        })
                                    ]
                                }),
                                E === 0x1 && jsxs(Fragment, {
                                    'children': [
                                        jsx(is(0x426), {
                                            'className': 'mt-6\x20space-y-4\x20overflow-y-auto\x20h-[calc(100vh-280px)]\x20w-full',
                                            'children': x['map']((a6, a7) => {
                                                const a8 = {};
                                                return a8['index'] = a7, jsx(Fragment, { 'children': jsx(a50cQ, a8, a7) });
                                            })
                                        }),
                                        jsx(is(0x426), {
                                            'className': is(0xe2),
                                            'children': jsxs('div', {
                                                'className': is(0x33c),
                                                'children': [
                                                    jsx(is(0x426), a3),
                                                    jsxs('div', a4)
                                                ]
                                            })
                                        }),
                                        jsxs('div', {
                                            'className': is(0x1fe),
                                            'children': [
                                                jsx(is(0x4ec), {
                                                    'onClick': () => F(0x0),
                                                    'className': 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20mt-4\x20text-lg',
                                                    'children': 'Back'
                                                }),
                                                jsx('form', {
                                                    'onSubmit': a6 => {
                                                        const iH = is, a7 = { ...z };
                                                        a7['items'] = x;
                                                        const a8 = a7;
                                                        A(a9 => {
                                                            const iG = a50b, aa = { ...a9 };
                                                            return aa[iG(0x3dd)] = x, aa;
                                                        }), a50cp(a8, G, ![], !![], iH(0x392)), a6[iH(0x431)](), H('/dashboard/challan/show');
                                                    },
                                                    'children': jsx(is(0x4ec), a5)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, E)
        })
    });
}
const a50cS = {};
a50cS[a50gp(0x27a)] = null, a50cS['default'] = a50cR;
const a50cT = {};
a50cT[a50gp(0x2ce)] = a50gp(0x3c8);
const a50cU = Object['freeze'](Object[a50gp(0x32c)](a50cS, Symbol[a50gp(0x20d)], a50cT)), a50cV = {};
a50cV['className'] = a50gp(0x46e), a50cV[a50gp(0x26a)] = 'Edit';
const a50cW = {};
a50cW[a50gp(0x40a)] = a50gp(0x46e), a50cW[a50gp(0x26a)] = a50gp(0x48b);
const a50cX = {};
a50cX['className'] = a50gp(0x46e), a50cX[a50gp(0x26a)] = a50gp(0x3be);
const a50cY = [
        {
            'accessorKey': 'no',
            'header': a50gp(0x14f),
            'cell': b => {
                const iI = a50gp, c = {};
                return c[iI(0x26a)] = b[iI(0x3f8)]['original']['no'], jsx(iI(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                const iJ = a50gp;
                return a[iJ(0x493)][b][iJ(0x33d)]()[iJ(0x379)](c);
            }
        },
        {
            'accessorKey': 'madeby',
            'header': a50gp(0x2b6),
            'cell': b => {
                const iK = a50gp, c = {};
                return c[iK(0x26a)] = b[iK(0x3f8)][iK(0x493)][iK(0x287)], jsx('span', c);
            },
            'filterFn': (a, b, c) => {
                const iL = a50gp;
                return a['original'][b][iL(0x33d)]()[iL(0x379)](c);
            }
        },
        {
            'accessorKey': a50gp(0x44e),
            'header': 'Date',
            'cell': b => {
                const iM = a50gp, c = {};
                return c['children'] = b[iM(0x3f8)]['original']['date'], jsx(iM(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                const iN = a50gp;
                return a[iN(0x493)][b][iN(0x33d)]()[iN(0x379)](c);
            }
        },
        {
            'accessorKey': 'to',
            'header': 'To',
            'cell': b => {
                const iO = a50gp, c = {};
                return c[iO(0x26a)] = b[iO(0x3f8)][iO(0x493)]['to'], jsx(iO(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                const iP = a50gp;
                return a[iP(0x493)][b][iP(0x33d)]()[iP(0x379)](c);
            }
        },
        {
            'accessorKey': a50gp(0x2ab),
            'header': 'Category',
            'cell': b => {
                const iQ = a50gp, c = {};
                return c[iQ(0x26a)] = b['row'][iQ(0x493)][iQ(0x2ab)], jsx(iQ(0x4ea), c);
            },
            'filterFn': (a, b, c) => {
                const iR = a50gp;
                return a[iR(0x493)][b][iR(0x33d)]()[iR(0x379)](c);
            }
        },
        {
            'accessorKey': a50gp(0x154),
            'header': a50gp(0x4d7),
            'cell': a => {
                const iS = a50gp;
                return jsx(iS(0x4ea), {
                    'children': a[iS(0x3f8)][iS(0x493)][iS(0x3dd)]['map'](b => {
                        const iT = iS;
                        var c;
                        return (c = b[iT(0x154)]) == null ? void 0x0 : c[iT(0x3f4)](',\x20');
                    })['join'](',\x20')
                });
            },
            'filterFn': (a, b, c) => {
                const iU = a50gp;
                return a[iU(0x493)][iU(0x3dd)][iU(0x357)](d => {
                    const iV = iU;
                    var e;
                    return (e = d[iV(0x154)]) == null ? void 0x0 : e['some'](f => f[iV(0x33d)]()[iV(0x379)](c['toLowerCase']()));
                })[iU(0x421)] > 0x0;
            }
        },
        {
            'accessorKey': a50gp(0x1b8),
            'header': () => jsx(a50gp(0x426), a50cV),
            'cell': a => {
                const iW = a50gp;
                return jsx(iW(0x270), { 'children': jsx(Pencil, {}) });
            }
        },
        {
            'accessorKey': a50gp(0x12d),
            'header': () => jsx('div', a50cW),
            'cell': a => {
                const iX = a50gp;
                return jsx(iX(0x270), { 'children': jsx(Copy, {}) });
            }
        },
        {
            'accessorKey': a50gp(0x49f),
            'header': () => jsx(a50gp(0x426), a50cX),
            'cell': a => {
                const iY = a50gp;
                return jsxs(iY(0x270), {
                    'children': [
                        '\x20',
                        jsx(Trash2, {})
                    ]
                });
            }
        }
    ], a50cZ = ({
        data: o,
        columns: p,
        isFetching: q,
        skeletonCount: skeletonCount = 0xa,
        skeletonHeight: skeletonHeight = 0x1c,
        headerComponent: r,
        pageCount: s,
        search: t,
        onClickRow: u,
        page: v,
        searchLabel: searchLabel = a50gp(0x378),
        EmptyText: w,
        children: x,
        handleRow: y,
        refresh: z,
        deleteChallan: A
    }) => {
        const iZ = a50gp;
        var B, C;
        const D = useMemo(() => o, [o]), E = useMemo(() => p, [p]), F = useMemo(() => r, [r]), [G, H] = useState([]), [I, J] = useState([]), [K, L] = useState(iZ(0x14f)), M = [
                iZ(0x14f),
                iZ(0x2b6),
                iZ(0x4a1),
                'To',
                iZ(0x12c)
            ], N = ay => {
                const j0 = iZ;
                switch (ay) {
                case j0(0x14f):
                    return 'no';
                case j0(0x2b6):
                    return j0(0x287);
                case j0(0x4a1):
                    return 'date';
                case 'To':
                    return 'to';
                case j0(0x12c):
                    return j0(0x154);
                default:
                    return 'no';
                }
            }, O = {};
        O[iZ(0x304)] = 0x0, O[iZ(0x292)] = 0xa;
        const [P, Q] = useState(O), R = {};
        R[iZ(0x30b)] = G, R[iZ(0x1fd)] = I, R[iZ(0x157)] = P;
        const {
                getHeaderGroups: S,
                getRowModel: T,
                getAllColumns: U,
                getColumn: V,
                firstPage: W,
                getCanNextPage: Y,
                getCanPreviousPage: Z,
                getState: a0,
                getPageCount: a1,
                setPageIndex: a2,
                setPageSize: a3,
                lastPage: a4,
                nextPage: a5,
                previousPage: a6,
                getRowCount: a7
            } = useReactTable({
                'data': D,
                'columns': E,
                'getCoreRowModel': getCoreRowModel(),
                'onSortingChange': H,
                'getSortedRowModel': getSortedRowModel(),
                'onColumnFiltersChange': J,
                'getFilteredRowModel': getFilteredRowModel(),
                'getPaginationRowModel': getPaginationRowModel(),
                'autoResetPageIndex': ![],
                'state': R
            }), a8 = {};
        a8['length'] = skeletonCount;
        const a9 = Array['from'](a8, (ay, az) => az), aa = U()[iZ(0x421)], ab = !q && (!D || D[iZ(0x421)] === 0x0), ac = useNavigate(), {
                setChallanData: ad,
                setChallanItems: ae,
                profile: af
            } = a50c6(), ag = a50cj(), [ah, ai] = useState(![]), aj = {};
        aj[iZ(0x154)] = '';
        const [ak, al] = useState(aj);
        function am(ay) {
            const j1 = iZ;
            ad(ay), ae(ay[j1(0x3dd)]);
            const az = {};
            az['editing'] = !![];
            const aA = {};
            aA[j1(0x105)] = az, ac('/dashboard/challan/create', aA);
        }
        function an(ay) {
            const j2 = iZ;
            ad(ay), ae(ay[j2(0x3dd)]), ac('/dashboard/challan/create');
        }
        const ao = {};
        ao[iZ(0x40a)] = 'text-textPrimary';
        const ap = {};
        ap[iZ(0xe0)] = !![], ap[iZ(0x40a)] = 'fixed\x20inset-0\x20bg-gray-500/75\x20transition-opacity\x20data-closed:opacity-0\x20data-enter:duration-300\x20data-enter:ease-out\x20data-leave:duration-200\x20data-leave:ease-in';
        const aq = {};
        aq['as'] = 'h3', aq[iZ(0x40a)] = 'text-base\x20font-semibold\x20text-gray-900', aq['children'] = iZ(0x2f7);
        const ar = {};
        ar[iZ(0x40a)] = 'w-[15%]', ar[iZ(0x26a)] = iZ(0x4d7);
        const as = {};
        as[iZ(0x421)] = aa;
        const at = {};
        at[iZ(0x40a)] = iZ(0x17a) + skeletonHeight + ']';
        const au = {};
        au[iZ(0x304)] = P[iZ(0x304)] - 0x1, au[iZ(0x292)] = P[iZ(0x292)];
        const av = {};
        av[iZ(0x304)] = P[iZ(0x304)] + 0x1, av['pageSize'] = P[iZ(0x292)];
        const aw = {};
        aw[iZ(0x26a)] = iZ(0x3ab);
        const ax = {};
        return ax[iZ(0x40a)] = iZ(0x4f5), ax[iZ(0x26a)] = w, jsxs('div', {
            'className': '',
            'children': [
                jsxs(iZ(0x426), {
                    'className': iZ(0x12f),
                    'children': [
                        jsx(Listbox, {
                            'value': K,
                            'onChange': L,
                            'children': jsxs(iZ(0x426), {
                                'className': iZ(0x2fb),
                                'children': [
                                    jsxs(ListboxButton, {
                                        'className': iZ(0x244),
                                        'children': [
                                            jsx(iZ(0x426), {
                                                'className': 'text-textSecondary\x20mr-2',
                                                'children': K
                                            }),
                                            jsx(ChevronDown, ao)
                                        ]
                                    }),
                                    jsx(ListboxOptions, {
                                        'transition': !![],
                                        'className': 'absolute\x20-right-34\x20z-10\x20mt-2\x20w-[136px]\x20origin-top-right\x20rounded-sm\x20bg-background\x20shadow-lg\x20ring-1\x20ring-black/5\x20transition\x20focus:outline-none\x20data-[closed]:scale-95\x20data-[closed]:transform\x20data-[closed]:opacity-0\x20data-[enter]:duration-100\x20data-[leave]:duration-75\x20data-[enter]:ease-out\x20data-[leave]:ease-in',
                                        'children': jsx(iZ(0x426), {
                                            'className': iZ(0x3d8),
                                            'children': M['map'](ay => {
                                                const j3 = iZ, az = {};
                                                return az['value'] = ay, az[j3(0x40a)] = j3(0x47a), az[j3(0x26a)] = ay, jsx(ListboxOption, az, ay);
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        jsx(iZ(0x43e), {
                            'placeholder': iZ(0x453),
                            'value': ((B = V(N(K))) == null ? void 0x0 : B[iZ(0x373)]()) ?? '',
                            'onChange': ay => {
                                const j4 = iZ;
                                var az;
                                return (az = V(N(K))) == null ? void 0x0 : az['setFilterValue'](ay[j4(0x2df)]['value']);
                            },
                            'className': 'border\x20p-2\x20w-[20%]\x20border-border\x20bg-background\x20text-textPrimary\x20focus:outline-textPrimary'
                        }),
                        jsx(iZ(0x4ec), {
                            'onClick': () => ai(!![]),
                            'className': iZ(0x2bf),
                            'children': iZ(0x2f7)
                        }),
                        jsx('button', {
                            'onClick': () => {
                                t();
                            },
                            'className': iZ(0x2bf),
                            'children': iZ(0x22e)
                        }),
                        jsx(iZ(0x4ec), {
                            'onClick': () => {
                                z();
                            },
                            'className': 'bg-button\x20text-buttonTextPrimary\x20p-2',
                            'children': iZ(0x458)
                        }),
                        jsx(iZ(0x426), {
                            'className': iZ(0xcf),
                            'children': jsx(iZ(0x426), {
                                'className': iZ(0x210),
                                'children': jsx('button', {
                                    'onClick': () => {
                                        t();
                                    },
                                    'className': iZ(0x204),
                                    'children': iZ(0x1a0)
                                })
                            })
                        })
                    ]
                }),
                jsx('div', {
                    'children': jsxs(Dialog, {
                        'open': ah,
                        'onClose': ai,
                        'className': 'relative\x20z-10',
                        'children': [
                            jsx(DialogBackdrop, ap),
                            jsx(iZ(0x426), {
                                'className': 'fixed\x20inset-0\x20z-10\x20w-screen\x20overflow-y-auto',
                                'children': jsx(iZ(0x426), {
                                    'className': iZ(0x27b),
                                    'children': jsxs(DialogPanel, {
                                        'transition': !![],
                                        'className': 'relative\x20transform\x20overflow-hidden\x20rounded-lg\x20bg-white\x20text-left\x20shadow-xl\x20transition-all\x20data-closed:translate-y-4\x20data-closed:opacity-0\x20data-enter:duration-300\x20data-enter:ease-out\x20data-leave:duration-200\x20data-leave:ease-in\x20sm:my-8\x20sm:w-full\x20sm:max-w-lg\x20data-closed:sm:translate-y-0\x20data-closed:sm:scale-95',
                                        'children': [
                                            jsxs(iZ(0x426), {
                                                'className': iZ(0x481),
                                                'children': [
                                                    jsx('div', {
                                                        'className': 'sm:flex\x20sm:items-start',
                                                        'children': jsx(DialogTitle, aq)
                                                    }),
                                                    jsxs(iZ(0x426), {
                                                        'className': iZ(0x2a9),
                                                        'children': [
                                                            jsx(iZ(0x426), ar),
                                                            jsx(iZ(0x43e), {
                                                                'type': iZ(0x32f),
                                                                'className': 'border\x20border-border\x20w-[85%]\x20p-2',
                                                                'onChange': ay => {
                                                                    al(az => {
                                                                        const j5 = a50b, aA = { ...az };
                                                                        return aA['sno'] = ay['target'][j5(0x2ce)], aA;
                                                                    });
                                                                }
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            jsxs(iZ(0x426), {
                                                'className': iZ(0x293),
                                                'children': [
                                                    jsx('button', {
                                                        'type': iZ(0x4ec),
                                                        'onClick': () => {
                                                            t(ak), ai(![]);
                                                        },
                                                        'className': iZ(0x2d1),
                                                        'children': iZ(0x378)
                                                    }),
                                                    jsx(iZ(0x4ec), {
                                                        'type': 'button',
                                                        'data-autofocus': !![],
                                                        'onClick': () => ai(![]),
                                                        'className': 'bg-button\x20text-buttonTextPrimary\x20px-4\x20py-1\x20mt-4\x20text-lg',
                                                        'children': iZ(0x4e6)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                jsx(iZ(0x426), {
                    'className': 'p-4',
                    'children': F && jsx(iZ(0x426), { 'children': F })
                }),
                jsx(iZ(0x426), {
                    'className': '',
                    'children': jsxs(iZ(0x10a), {
                        'className': iZ(0x111),
                        'children': [
                            jsx('thead', {
                                'children': S()[iZ(0x1d8)](ay => jsx('tr', {
                                    'className': iZ(0x2b0),
                                    'children': ay['headers']['map'](az => jsx('th', {
                                        'className': iZ(0x298),
                                        'children': az[iZ(0x1ec)] ? null : flexRender(az[iZ(0x173)]['columnDef'][iZ(0x487)], az[iZ(0x36e)]())
                                    }, az['id']))
                                }, ay['id']))
                            }),
                            jsx(iZ(0x2a5), {
                                'className': iZ(0x25c),
                                'children': !q ? (C = T()) == null ? void 0x0 : C[iZ(0x339)][iZ(0x1d8)](ay => jsx('tr', {
                                    'className': iZ(0x4ee),
                                    'tabIndex': 0x0,
                                    'children': ay[iZ(0x1e0)]()[iZ(0x1d8)](az => jsx('td', {
                                        'onClick': aA => {
                                            const j6 = iZ;
                                            if (az[j6(0x173)]['id'] === j6(0x1b8))
                                                am(ay[j6(0x493)]);
                                            else {
                                                if (az[j6(0x173)]['id'] === j6(0x12d))
                                                    an(ay[j6(0x493)]);
                                                else {
                                                    if (az[j6(0x173)]['id'] === j6(0x49f))
                                                        A(ay[j6(0x493)]['no']);
                                                    else
                                                        a50cp(ay[j6(0x493)], ag, ![], ![], j6(0x392));
                                                }
                                            }
                                        },
                                        'className': iZ(0x11c),
                                        'children': flexRender(az['column']['columnDef'][iZ(0x2c8)], az['getContext']())
                                    }, az['id']))
                                }, ay['id'])) : jsx(Fragment, {
                                    'children': a9['map'](ay => jsx('tr', {
                                        'className': '',
                                        'children': Array['from'](as, (az, aA) => aA)[iZ(0x1d8)](az => jsx('td', {
                                            'className': '',
                                            'children': jsx(iZ(0x426), at)
                                        }, az))
                                    }, ay))
                                })
                            })
                        ]
                    })
                }),
                jsxs(iZ(0x426), {
                    'className': 'flex\x20items-center\x20gap-2\x20text-textSecondary\x20mt-4',
                    'children': [
                        jsx(iZ(0x4ec), {
                            'className': iZ(0x23d),
                            'onClick': () => Q(au),
                            'disabled': !Z(),
                            'children': jsx(ChevronLeft, {})
                        }),
                        jsx('button', {
                            'className': iZ(0x23d),
                            'onClick': ay => Q(av),
                            'disabled': !Y(),
                            'children': jsx(ChevronRight, {})
                        }),
                        jsxs(iZ(0x4ea), {
                            'className': iZ(0x26d),
                            'children': [
                                jsx(iZ(0x426), aw),
                                jsxs(iZ(0x27d), {
                                    'children': [
                                        a0()['pagination'][iZ(0x304)] + 0x1,
                                        '\x20of',
                                        '\x20',
                                        a1()[iZ(0x1f6)]()
                                    ]
                                })
                            ]
                        }),
                        jsxs('span', {
                            'className': iZ(0x26d),
                            'children': [
                                iZ(0x483),
                                jsx(iZ(0x43e), {
                                    'type': iZ(0x486),
                                    'min': '1',
                                    'max': a1(),
                                    'defaultValue': a0()[iZ(0x157)]['pageIndex'] + 0x1,
                                    'onChange': ay => {
                                        const j7 = iZ, az = ay[j7(0x2df)][j7(0x2ce)] ? Number(ay[j7(0x2df)][j7(0x2ce)]) - 0x1 : 0x0;
                                        Q(aA => {
                                            const j8 = j7, aB = { ...aA };
                                            return aB[j8(0x304)] = az, aB;
                                        });
                                    },
                                    'className': iZ(0x2bb)
                                })
                            ]
                        }),
                        jsx(iZ(0xf7), {
                            'className': iZ(0xe4),
                            'value': a0()[iZ(0x157)][iZ(0x292)],
                            'onChange': ay => {
                                const j9 = iZ;
                                a3(Number(ay[j9(0x2df)][j9(0x2ce)])), Q({
                                    'pageIndex': P[j9(0x304)],
                                    'pageSize': Number(ay[j9(0x2df)][j9(0x2ce)])
                                });
                            },
                            'children': [
                                0xa,
                                0x14,
                                0x1e,
                                0x28,
                                0x32
                            ][iZ(0x1d8)](ay => jsxs('option', {
                                'value': ay,
                                'children': [
                                    iZ(0x4e4),
                                    ay
                                ]
                            }, ay))
                        })
                    ]
                }),
                ab && jsx('div', ax)
            ]
        });
    }, a50d0 = memo(a50cZ), a50d1 = () => {
        const je = a50gp, [b, c] = useState(![]), {addNotifications: d} = a50c8(), e = a50cj(), {
                setHeaderText: f,
                challanDataCount: g,
                setChallanDataCount: h,
                setOldChallanData: i,
                setChallanData: j,
                setChallanItems: k,
                profile: l,
                oldChallanData: m
            } = a50c6();
        async function n() {
            const ja = a50b;
            c(!![]);
            const r = await e(ja(0x417));
            if (r[ja(0x23f)] === 0xc8) {
                const s = await r[ja(0x236)]();
                i(s), h(s[ja(0x421)]);
            } else {
                const t = {};
                t['title'] = ja(0x3ad), t[ja(0x367)] = ja(0x273), d(t);
            }
            c(![]);
        }
        async function o(r) {
            const jb = a50b;
            c(!![]);
            var s;
            if (r) {
                s = await e('/api/challans?sno=' + r[jb(0x154)]);
                if (s[jb(0x23f)] === 0xc8) {
                    const t = await s[jb(0x236)]();
                    i(t);
                } else {
                    if (s[jb(0x23f)] != 0xc8) {
                        const u = {};
                        u[jb(0x290)] = jb(0x3ad), u['message'] = 'Fail\x20to\x20load\x20data.', d(u);
                    }
                }
                h(0x0), c(![]);
            } else {
                c(!![]), s = await e(jb(0x351) + g);
                if (s[jb(0x23f)] === 0xc8) {
                    const v = await s[jb(0x236)]();
                    g == 0x0 ? (i(v), h(v['length'])) : (i(w => {
                        return [
                            ...w,
                            ...v
                        ];
                    }), h(m['length'] + v[jb(0x421)]));
                } else {
                    if (s['status'] != 0xc8) {
                        const w = {};
                        w[jb(0x290)] = jb(0x3ad), w[jb(0x367)] = jb(0x273), d(w);
                    }
                }
                c(![]);
            }
        }
        async function p(r) {
            const jc = a50b, s = {};
            s['no'] = r, s[jc(0x1cd)] = l[jc(0x1cd)], s[jc(0x4d3)] = jc(0x3c4);
            const t = await e(jc(0x364), {
                'method': jc(0x191),
                'body': JSON['stringify'](s)
            });
            if (t[jc(0x23f)] !== 0xc8) {
                const u = {};
                u[jc(0x290)] = jc(0x29f), u[jc(0x367)] = t[jc(0x2a7)] || '', d(u);
            } else
                i(v => {
                    const jd = jc;
                    return v[jd(0x357)](w => w['no'] === r ? ![] : !![]);
                });
        }
        useEffect(() => {
            j(a50c3()), k([]), f(a50bZ);
            if (g === 0x0)
                n();
        }, []);
        const q = {};
        return q[je(0x452)] = m, q[je(0x207)] = a50cY, q[je(0x494)] = je(0xf3), q[je(0x2a8)] = 'No\x20Challans\x20Found!', q[je(0x31b)] = b, q[je(0xfd)] = o, q[je(0x248)] = n, q['deleteChallan'] = p, jsx(Fragment, {
            'children': jsx('section', {
                'className': je(0x31a),
                'children': jsx('div', { 'children': jsx(a50d0, q) })
            })
        });
    }, a50d2 = {};
a50d2['__proto__'] = null, a50d2['default'] = a50d1;
const a50d3 = {};
a50d3[a50gp(0x2ce)] = a50gp(0x3c8);
const a50d4 = Object['freeze'](Object['defineProperty'](a50d2, Symbol[a50gp(0x20d)], a50d3)), a50d5 = {};
a50d5['__proto__'] = null;
const a50d6 = {};
a50d6[a50gp(0x2ce)] = a50gp(0x3c8);
const a50d7 = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50d5, Symbol[a50gp(0x20d)], a50d6));
function a50d8() {
    const jf = a50gp;
    var i, j, k;
    const {
        profile: l,
        setAccessToken: m
    } = a50c6();
    var n = '';
    if (l[jf(0x1cd)]) {
        n = ((i = l['username']) == null ? void 0x0 : i[jf(0x24b)](0x0, 0x1)[jf(0xe7)]()) + ((j = l[jf(0x1cd)]) == null ? void 0x0 : j[jf(0x24b)](0x1));
        if (((k = l['username']) == null ? void 0x0 : k[jf(0x33d)]()) === 'gunjan')
            n = jf(0x1f5) + n + jf(0x24f);
    }
    const o = a50cj();
    async function p(y) {
        const jg = jf;
        y[jg(0x431)]();
        const z = await o(jg(0x136));
        if (z[jg(0x23f)] === 0xc8)
            m(void 0x0), localStorage[jg(0x331)](jg(0x1df));
        else
            console[jg(0x466)]('error\x20while\x20logging\x20out\x20:\x20', z);
    }
    const q = {};
    q['className'] = jf(0x45c), q['children'] = n;
    const r = {};
    r[jf(0x40a)] = 'text-textPrimary';
    const s = {};
    s[jf(0x1ce)] = 0x14, s[jf(0x40a)] = jf(0x317);
    const t = {};
    t[jf(0x1ce)] = 0x14, t[jf(0x40a)] = 'mr-2';
    const u = {};
    u[jf(0x1ce)] = 0x14, u[jf(0x40a)] = jf(0x317);
    const v = {};
    v[jf(0x1ce)] = 0x14, v[jf(0x40a)] = jf(0x317);
    const w = {};
    w[jf(0x1ce)] = 0x14, w[jf(0x40a)] = jf(0x317);
    const x = {};
    return x['size'] = 0x14, x[jf(0x40a)] = jf(0x317), jsx(Fragment, {
        'children': jsxs(Menu, {
            'as': 'div',
            'className': jf(0x3c2),
            'children': [
                jsx(jf(0x426), {
                    'children': jsxs(MenuButton, {
                        'className': 'flex\x20mr-10\x20items-center\x20hover:bg-buttonHover\x20px-2',
                        'children': [
                            jsx(jf(0x426), q),
                            jsx(AlignRight, r)
                        ]
                    })
                }),
                jsxs(MenuItems, {
                    'transition': !![],
                    'className': jf(0x3bf),
                    'children': [
                        jsxs(jf(0x426), {
                            'className': jf(0x3d8),
                            'children': [
                                jsx(MenuItem, {
                                    'children': jsxs(Link, {
                                        'to': jf(0x475),
                                        'className': jf(0x413),
                                        'children': [
                                            jsx(ScrollText, s),
                                            jf(0x322)
                                        ]
                                    })
                                }),
                                jsx(MenuItem, {
                                    'children': jsxs(Link, {
                                        'to': '/dashboard/challan/show',
                                        'className': jf(0x413),
                                        'children': [
                                            jsx(NotepadText, t),
                                            jf(0x115)
                                        ]
                                    })
                                }),
                                jsx(MenuItem, {
                                    'children': jsxs(Link, {
                                        'to': jf(0x1b2),
                                        'className': jf(0x413),
                                        'children': [
                                            jsx(NotepadText, u),
                                            jf(0x32a)
                                        ]
                                    })
                                })
                            ]
                        }),
                        jsxs(jf(0x426), {
                            'className': 'p-1',
                            'children': [
                                jsx(MenuItem, {
                                    'children': jsxs(Link, {
                                        'to': jf(0x3c9),
                                        'className': jf(0x413),
                                        'children': [
                                            jsx(UserPen, v),
                                            jf(0x18a)
                                        ]
                                    })
                                }),
                                jsx(MenuItem, {
                                    'children': jsxs(Link, {
                                        'to': '/dashboard/settings/password',
                                        'className': jf(0x413),
                                        'children': [
                                            jsx(RotateCcwKey, w),
                                            jf(0x4e9)
                                        ]
                                    })
                                }),
                                jsx(jf(0x216), {
                                    'onSubmit': p,
                                    'children': jsx(MenuItem, {
                                        'children': jsxs('button', {
                                            'type': jf(0x482),
                                            'className': jf(0x20b),
                                            'children': [
                                                jsx(LogOut, x),
                                                jf(0x142)
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function a50d9() {
    const jh = a50gp, {
            toggleTheme: c,
            headerText: d,
            theme: e,
            appName: f,
            homeLink: g
        } = a50c6(), h = {};
    h[jh(0x40a)] = jh(0x274), h[jh(0x26a)] = d;
    const i = {};
    return i['className'] = jh(0x4af), jsx(Fragment, {
        'children': jsx(jh(0x426), {
            'className': jh(0x2b0),
            'children': jsxs(jh(0x426), {
                'className': jh(0x3e6),
                'children': [
                    jsx('div', h),
                    jsxs('div', {
                        'className': jh(0x205),
                        'children': [
                            jsx(jh(0x426), { 'children': f[jh(0x24b)](0x0, 0x3) }),
                            jsx('div', { 'children': f[0x3] }),
                            jsx(jh(0x426), { 'children': f[jh(0x24b)](0x4) })
                        ]
                    }),
                    jsxs(jh(0x426), {
                        'className': jh(0x34c),
                        'children': [
                            jsx(a50d8, {}),
                            jsx(jh(0x4ec), {
                                'onClick': c,
                                'className': jh(0x1d9),
                                'children': jsx(SunMoon, i)
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function a50da() {
    const ji = a50gp;
    return jsx(Fragment, {
        'children': jsxs(ji(0x426), {
            'className': ji(0x352),
            'children': [
                jsx(a50d9, {}),
                jsx(ji(0x426), {
                    'className': 'mx-10',
                    'children': jsx(Outlet, {})
                })
            ]
        })
    });
}
const a50db = {};
a50db['__proto__'] = null, a50db['default'] = a50da;
const a50dc = {};
a50dc['value'] = a50gp(0x3c8);
const a50dd = Object[a50gp(0xd3)](Object['defineProperty'](a50db, Symbol[a50gp(0x20d)], a50dc));
function a50de() {
    const jj = a50gp;
    return jsx(Fragment, {
        'children': jsxs(jj(0x426), {
            'className': jj(0x352),
            'children': [
                jsx(a50d9, {}),
                jsx(jj(0x426), {
                    'className': jj(0x332),
                    'children': jsx(Outlet, {})
                })
            ]
        })
    });
}
const a50df = {};
a50df[a50gp(0x27a)] = null, a50df[a50gp(0x18b)] = a50de;
const a50dg = {};
a50dg['value'] = a50gp(0x3c8);
const a50dh = Object['freeze'](Object[a50gp(0x32c)](a50df, Symbol[a50gp(0x20d)], a50dg));
function a50di() {
    const jk = a50gp;
    return jsx(Fragment, {
        'children': jsxs(jk(0x426), {
            'className': jk(0x352),
            'children': [
                jsx(a50d9, {}),
                jsx(jk(0x426), {
                    'className': 'mx-10',
                    'children': jsx(Outlet, {})
                })
            ]
        })
    });
}
const a50dj = {};
a50dj[a50gp(0x27a)] = null, a50dj[a50gp(0x18b)] = a50di;
const a50dk = {};
a50dk[a50gp(0x2ce)] = a50gp(0x3c8);
const a50dl = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50dj, Symbol['toStringTag'], a50dk)), a50dm = a50gp(0x16f), a50dn = {};
a50dn['version'] = ServerApiVersion['v1'], a50dn[a50gp(0x153)] = !![], a50dn['deprecationErrors'] = !![];
const a50do = {};
a50do['serverApi'] = a50dn;
const a50dp = new MongoClient(a50dm, a50do);
async function a50dq() {
    const jl = a50gp;
    try {
        const b = {};
        return b[jl(0x177)] = 0x1, await a50dp['db'](jl(0x192))['command'](b), !![];
    } catch (c) {
        return ![];
    }
}
async function a50dr() {
    const jm = a50gp;
    try {
        const b = await a50dq();
        if (!b) {
            await a50dp[jm(0x1e2)]();
            const c = {};
            c['ping'] = 0x1, await a50dp['db'](jm(0x192))[jm(0x102)](c), console[jm(0x466)]('Pinged\x20your\x20deployment.\x20You\x20successfully\x20connected\x20to\x20MongoDB!');
        }
    } catch (d) {
        console['error'](jm(0x134), d);
    }
}
async function a50ds(a = a50gp(0x192), b = a50gp(0x4b6), c = {}, d = 0xa, e = 0x0) {
    const jn = a50gp;
    try {
        return await a50dr(), await a50dp['db'](a)[jn(0x473)](b)[jn(0x144)](c)[jn(0x4e1)](e)[jn(0xe8)](d)[jn(0x3f0)]();
    } catch (f) {
        console['log']('error\x20while\x20saerching\x20in\x20db\x20:\x20', f);
    }
}
async function a50dt(b = a50gp(0x192), c = a50gp(0x4b6), d = {}, e = 0xa, f = 0x0, g = -0x1, h = a50gp(0x35b)) {
    const jo = a50gp;
    try {
        await a50dr();
        const i = {};
        return i[jo(0x35b)] = -0x1, await a50dp['db'](b)[jo(0x473)](c)[jo(0x144)](d)[jo(0x34d)](i)[jo(0x4e1)](f)[jo(0xe8)](e)[jo(0x3f0)]();
    } catch (j) {
        console['log'](jo(0x213), j);
    }
}
async function a50du(a = a50gp(0x192), b = a50gp(0x4b6), c = {}) {
    const jp = a50gp;
    try {
        return await a50dr(), await a50dp['db'](a)[jp(0x473)](b)[jp(0x46c)](c);
    } catch (d) {
        console[jp(0x466)](jp(0x213), d);
    }
}
async function a50dv(a = a50gp(0x192), b = 'users', c = {}, d) {
    const jq = a50gp;
    try {
        return await a50dr(), await a50dp['db'](a)[jq(0x473)](b)[jq(0x2b5)](c, d);
    } catch (e) {
        console['log'](jq(0x213), e);
    }
}
async function a50dw(b, c = a50gp(0x192), d = a50gp(0x343)) {
    const jr = a50gp;
    try {
        await a50dr();
        const e = {};
        e['no'] = b;
        const f = await a50dp['db'](c)['collection'](d)[jr(0x325)](e);
        return console[jr(0x466)](jr(0x39c) + f[jr(0x41b)]), f[jr(0x41b)];
    } catch (g) {
        console[jr(0x466)](jr(0x3d7), g);
    }
}
async function a50dx(e, f = 'unnamed', g = a50gp(0x343)) {
    const js = a50gp;
    try {
        await a50dr();
        const {
                _id: h,
                ...i
            } = e, j = {};
        j['no'] = e['no'];
        const k = { ...i }, l = {};
        l[js(0x2db)] = k;
        const m = {};
        m[js(0x21d)] = !![];
        const n = await a50dp['db'](f)[js(0x473)](g)[js(0x2b5)](j, l, m);
        return console[js(0x466)](js(0x39c) + n[js(0x348)] + js(0x356) + n), n['upsertedCount'];
    } catch (o) {
        console['log'](js(0x3cd), o);
    }
}
async function a50dy(a, b = 'unnamed', c = a50gp(0x15c)) {
    const jt = a50gp;
    try {
        await a50dr();
        const d = await a50dp['db'](b)[jt(0x473)](c)[jt(0x2a3)](a);
        return console['log'](jt(0x266) + d['insertedId'] + jt(0x356) + d), d[jt(0x103)];
    } catch (e) {
        console[jt(0x466)](jt(0x2fc), e);
    }
}
const {verify: a50dz} = a50bG, a50dA = a50gp(0x449), a50dB = a50gp(0x30e), a50dC = {};
a50dC[a50gp(0x4f1)] = a50gp(0x2d0), a50dC['company'] = 'Teen\x20Telecommunication\x20Pvt.\x20Ltd.', a50dC[a50gp(0x4d9)] = a50gp(0x19d), a50dC[a50gp(0x11b)] = 'sales@teentelecommunication.com', a50dC[a50gp(0x478)] = a50gp(0x437), a50dC[a50gp(0x2a6)] = !![];
var a50dD = a50dC;
function a50dE(a) {
    const ju = a50gp;
    a50dD[ju(0x1cd)] = a[ju(0x1cd)], a50dD['contact'] = a[ju(0x4d9)], a50dD[ju(0x11b)] = a['email'], a50dD[ju(0x387)] = a[ju(0x387)], a50dD[ju(0x355)] = a[ju(0x355)], a50dD[ju(0x4f1)] = a['address'], a50dD[ju(0x478)] = a[ju(0x478)], a50dD[ju(0x2a6)] = a == null ? void 0x0 : a[ju(0x2a6)], a50dD['terms'] = a == null ? void 0x0 : a[ju(0x306)], a50dD['additionalInfo'] = a == null ? void 0x0 : a['additionalInfo'], a50dD[ju(0x300)] = a == null ? void 0x0 : a[ju(0x300)];
}
const a50dF = {};
a50dF[a50gp(0x238)] = !![], a50dF['sameSite'] = 'lax', a50dF[a50gp(0x17e)] = 0x3e8 * 0x3c * 0x3c * 0x18, createCookie(a50gp(0x3a1), a50dF);
async function a50dG() {
    const jv = a50gp, a = await a50du(jv(0x192), jv(0xd4));
    var b = Math[jv(0x4a0)](Math['random']() * a);
    b = b < a ? b : a - 0x1;
    const c = await a50ds(jv(0x192), jv(0xd4), {}, 0x1, b);
    if (c && c[jv(0x421)] > 0x0)
        return c[0x0][jv(0x285)];
    else
        return '';
}
async function a50dH(d) {
    const jw = a50gp;
    var e;
    const f = (e = d[jw(0x385)][jw(0x23c)](jw(0x3fc))) == null ? void 0x0 : e['replace'](jw(0x2b1), '');
    if (!f) {
        console[jw(0x466)](jw(0x22c), d[jw(0x385)]);
        const g = {};
        g['status'] = 0x191;
        throw new Response(jw(0x167), g);
    }
    try {
        const h = a50dz(f, a50dB);
        if (h)
            return;
        const i = {};
        i[jw(0x23f)] = 0x191;
        throw new Response(jw(0x167), i);
    } catch (j) {
        console[jw(0x466)](jw(0x4fc));
        const k = {};
        k['status'] = 0x191;
        throw new Response(jw(0x394), k);
    }
}
const a50dI = async ({
        request: c,
        params: d
    }) => {
        const jx = a50gp;
        try {
            await a50dH(c);
            const e = await c[jx(0x236)]();
            await a50dx(e), await a50dy({
                'by': e[jx(0x287)],
                'action': jx(0x375),
                'result': jx(0x20c),
                'when': new Date()[jx(0x137)]()
            }, 'unnamed', jx(0x15c));
            const f = {};
            return f[jx(0x23f)] = 0xc8, new Response(jx(0x139), f);
        } catch (g) {
            console['error']('error\x20while\x20saving\x20quotation\x20:\x20', g);
            const h = {};
            h[jx(0x23f)] = 0x1f4;
            throw new Response(jx(0x394), h);
        }
    }, a50dJ = {};
a50dJ[a50gp(0x27a)] = null, a50dJ['action'] = a50dI;
const a50dK = {};
a50dK[a50gp(0x2ce)] = a50gp(0x3c8);
const a50dL = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50dJ, Symbol['toStringTag'], a50dK));
function a50dM() {
    const jy = a50gp;
    return jsx(Fragment, {
        'children': jsxs(jy(0x426), {
            'className': jy(0x352),
            'children': [
                jsx(a50d9, {}),
                jsx(jy(0x426), {
                    'className': jy(0x332),
                    'children': jsx(Outlet, {})
                })
            ]
        })
    });
}
const a50dN = {};
a50dN[a50gp(0x27a)] = null, a50dN[a50gp(0x18b)] = a50dM;
const a50dO = {};
a50dO[a50gp(0x2ce)] = a50gp(0x3c8);
const a50dP = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50dN, Symbol['toStringTag'], a50dO));
function a50dQ() {
    const jz = a50gp, h = useNavigate(), {gQuote: i} = a50c6(), j = new Date()[jz(0x3d4)](), k = jz(0x237), l = {};
    l[jz(0x4aa)] = 0x0, l['y'] = -0x32;
    const m = {};
    m[jz(0x4aa)] = 0x1, m['y'] = 0x0;
    const n = {};
    n[jz(0x4aa)] = 0x0, n['y'] = 0x32;
    const o = {};
    o[jz(0x3da)] = 0.5;
    const p = {};
    p[jz(0x40a)] = jz(0x341), p[jz(0x26a)] = jz(0x3cb);
    const q = {};
    q[jz(0x40a)] = jz(0x12b), q['children'] = j == 0xb ? k : i;
    const r = {};
    return r[jz(0x40a)] = 'text-md\x20font-Kalam', r['children'] = jz(0xed), jsx(Fragment, {
        'children': jsx(AnimatePresence, {
            'children': jsx(motion[jz(0x426)], {
                'className': jz(0x496),
                'initial': l,
                'animate': m,
                'exit': n,
                'transition': o,
                'children': jsx(jz(0x426), {
                    'className': jz(0xfb),
                    'children': jsxs('div', {
                        'className': 'flex\x20flex-col',
                        'children': [
                            jsx(jz(0x426), p),
                            jsx(jz(0x426), q),
                            jsx(jz(0x426), r),
                            jsx(jz(0x4ec), {
                                'className': jz(0x1bb),
                                'onClick': s => h('/dashboard/home'),
                                'children': jz(0x428)
                            })
                        ]
                    })
                })
            })
        })
    });
}
const a50dR = [
        a50gp(0x13c),
        a50gp(0x131),
        a50gp(0x1d7),
        'Your\x20energy\x20is\x20like\x20golden\x20hour:\x20warm,\x20calm,\x20and\x20magical.',
        a50gp(0x34b),
        a50gp(0x329),
        a50gp(0x279),
        a50gp(0x2fa),
        a50gp(0x226),
        'The\x20world\x20is\x20brighter\x20because\x20you\x20decided\x20to\x20exist\x20in\x20it.',
        a50gp(0x316),
        a50gp(0x283),
        a50gp(0x3d3),
        'You’re\x20not\x20just\x20a\x20vibe—you’re\x20a\x20whole\x20playlist.',
        a50gp(0x3f1),
        a50gp(0x114),
        'There’s\x20a\x20whole\x20galaxy\x20of\x20good\x20in\x20you.',
        a50gp(0x3a7),
        a50gp(0x1fa),
        a50gp(0xd5),
        a50gp(0x2f6),
        a50gp(0x255),
        a50gp(0x37f),
        'If\x20I\x20had\x20a\x20favorite\x20emotion,\x20it’d\x20be\x20whatever\x20you\x20make\x20me\x20feel.',
        a50gp(0x353),
        a50gp(0x16d),
        a50gp(0x39a),
        a50gp(0x484),
        a50gp(0x133),
        'You\x20bring\x20comfort\x20the\x20way\x20rain\x20brings\x20sleep.',
        a50gp(0x47d),
        'The\x20world\x20is\x20lucky\x20to\x20feel\x20your\x20warmth.',
        a50gp(0x190),
        a50gp(0x46f),
        a50gp(0x277),
        a50gp(0x1ee),
        'You\x20make\x20time\x20feel\x20like\x20a\x20soft\x20poem.',
        a50gp(0x307),
        a50gp(0x457),
        'You’re\x20a\x20mood\x20I\x20want\x20to\x20live\x20in\x20forever.',
        a50gp(0x28f),
        'Your\x20gentleness\x20is\x20a\x20form\x20of\x20brilliance.',
        'You\x20don’t\x20just\x20brighten\x20rooms—you\x20soften\x20them.',
        a50gp(0x1d3),
        a50gp(0x3ee),
        a50gp(0x381),
        a50gp(0x258),
        'You’re\x20not\x20just\x20someone’s\x20person—you’re\x20their\x20peace.',
        a50gp(0x401),
        a50gp(0x1e8),
        a50gp(0x2e8),
        a50gp(0x334),
        a50gp(0x261),
        a50gp(0x2e7),
        a50gp(0x1a6),
        a50gp(0x347),
        a50gp(0x146),
        'You’re\x20the\x20pause\x20between\x20thunder\x20and\x20rain—powerful\x20and\x20quiet.',
        a50gp(0x15e),
        a50gp(0x1b9),
        'You’re\x20an\x20artist\x20and\x20your\x20masterpiece\x20is\x20calm.',
        a50gp(0x181),
        a50gp(0x28c),
        'You’re\x20a\x20soft\x20place\x20to\x20land\x20when\x20everything\x20feels\x20too\x20sharp.',
        'You\x20carry\x20light\x20even\x20in\x20your\x20shadows.',
        a50gp(0x35e),
        'You’re\x20the\x20moon’s\x20favorite\x20secret.',
        a50gp(0x2e0),
        a50gp(0x464),
        'You’re\x20not\x20the\x20calm\x20after\x20the\x20storm—you’re\x20the\x20calm\x20during.',
        a50gp(0x3a8),
        a50gp(0xdb),
        'You’re\x20the\x20lull\x20in\x20the\x20storm,\x20the\x20hush\x20in\x20the\x20worry.',
        a50gp(0x43d),
        'You\x20bring\x20sleep\x20to\x20restless\x20minds\x20without\x20even\x20trying.',
        'Your\x20heart\x20is\x20a\x20living\x20comfort\x20zone.',
        a50gp(0x3b6),
        'The\x20way\x20you\x20exist\x20is\x20proof\x20that\x20miracles\x20are\x20small\x20and\x20daily.',
        'You’re\x20not\x20a\x20\x27type\x27—you’re\x20the\x20whole\x20story\x20arc.',
        'The\x20warmth\x20you\x20carry\x20is\x20better\x20than\x20any\x20flame.',
        a50gp(0x2aa),
        a50gp(0x338),
        'You\x20don’t\x20just\x20bring\x20peace—you\x20build\x20it.',
        'You\x20turn\x20ordinary\x20rooms\x20into\x20safe\x20havens.',
        a50gp(0x11a),
        'You’re\x20what\x20nostalgia\x20feels\x20like\x20in\x20real\x20time.',
        a50gp(0x459),
        a50gp(0x48d),
        a50gp(0x155),
        'You’re\x20not\x20light\x20because\x20of\x20the\x20sun—you\x20just\x20are.',
        a50gp(0x172),
        a50gp(0x25e),
        'You’re\x20a\x20portable\x20sense\x20of\x20calm.',
        a50gp(0x44d),
        a50gp(0x460),
        a50gp(0x4ad),
        a50gp(0x3a3),
        a50gp(0x3b8),
        a50gp(0x209),
        'You’re\x20a\x20whole\x20constellation\x20in\x20one\x20smile.',
        a50gp(0x393),
        a50gp(0xce),
        a50gp(0x4f7),
        'Believe\x20in\x20yourself\x20and\x20the\x20world\x20will\x20believe\x20in\x20you.',
        a50gp(0x201),
        a50gp(0x25a),
        a50gp(0x423)
    ], a50dS = {};
a50dS[a50gp(0x27a)] = null, a50dS[a50gp(0x18b)] = a50dQ, a50dS[a50gp(0x2eb)] = a50dR;
const a50dT = {};
a50dT[a50gp(0x2ce)] = a50gp(0x3c8);
const a50dU = Object['freeze'](Object[a50gp(0x32c)](a50dS, Symbol['toStringTag'], a50dT)), a50dV = async ({
        request: e,
        params: f
    }) => {
        const jA = a50gp;
        try {
            await a50dH(e);
            const g = new URL(e[jA(0x33a)]), h = 0x3e8, i = Number(g['searchParams'][jA(0x23c)](jA(0x4e1))) || 0x0, j = g['searchParams'][jA(0x23c)](jA(0x154)) || '';
            if (j != '') {
                const k = {};
                k[jA(0x438)] = j;
                const l = k, m = await a50dt(jA(0x192), jA(0x3c4), l, h, 0x0, -0x1, '_id'), n = {};
                return n[jA(0x23f)] = 0xc8, Response[jA(0x236)](m, n);
            } else {
                const o = await a50dt(jA(0x192), 'complaints', {}, h, i, -0x1, jA(0x35b)), p = {};
                return p['status'] = 0xc8, Response['json'](o, p);
            }
        } catch (q) {
            console['error'](jA(0x41a), q);
            const r = {};
            r[jA(0x23f)] = 0x1f4;
            throw new Response('Internal\x20server\x20error', r);
        }
    }, a50dW = {};
a50dW[a50gp(0x27a)] = null, a50dW['loader'] = a50dV;
const a50dX = {};
a50dX['value'] = 'Module';
const a50dY = Object['freeze'](Object[a50gp(0x32c)](a50dW, Symbol[a50gp(0x20d)], a50dX)), a50dZ = async ({
        request: f,
        params: g
    }) => {
        const jB = a50gp;
        try {
            await a50dH(f);
            const h = new URL(f[jB(0x33a)]), i = 0x3e8, j = Number(h[jB(0x40d)][jB(0x23c)](jB(0x4e1))) || 0x0, k = h[jB(0x40d)][jB(0x23c)](jB(0x164)) || '', l = h['searchParams'][jB(0x23c)]('end') || '', m = h['searchParams'][jB(0x23c)]('to') || '';
            if (k != '' || l != '' || m != '') {
                const n = {};
                n[jB(0x118)] = k, n['$lte'] = l;
                const o = {};
                o[jB(0x44e)] = n;
                const p = o, q = await a50dt(jB(0x192), jB(0x343), p, i, 0x0, -0x1, jB(0x35b)), r = {};
                return r[jB(0x23f)] = 0xc8, Response[jB(0x236)](q, r);
            } else {
                const s = await a50dt('unnamed', jB(0x343), {}, i, j, -0x1, jB(0x35b)), t = {};
                return t['status'] = 0xc8, Response[jB(0x236)](s, t);
            }
        } catch (u) {
            console['error'](jB(0x265), u);
            const v = {};
            v[jB(0x23f)] = 0x1f4;
            throw new Response(jB(0x394), v);
        }
    }, a50e0 = {};
a50e0['__proto__'] = null, a50e0[a50gp(0x4f9)] = a50dZ;
const a50e1 = {};
a50e1[a50gp(0x2ce)] = 'Module';
const a50e2 = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50e0, Symbol[a50gp(0x20d)], a50e1));
function a50e3() {
    const jD = a50gp, g = useNavigate(), {setHeaderText: h} = a50c6();
    useEffect(() => {
        const jC = a50b;
        h(jC(0x408));
    }, []);
    const i = {};
    i[jD(0x1ce)] = 0x64, i[jD(0x40a)] = jD(0x4bb);
    const j = {};
    j[jD(0x40a)] = 'text-textSecondary\x20font-bold\x20text-center\x20text-2xl', j[jD(0x26a)] = 'Quotation';
    const k = {};
    k[jD(0x1ce)] = 0x64, k[jD(0x40a)] = 'text-textSecondary';
    const l = {};
    l['className'] = 'text-textSecondary\x20font-bold\x20text-center\x20text-2xl', l[jD(0x26a)] = jD(0x239);
    const m = {};
    m[jD(0x1ce)] = 0x64, m[jD(0x40a)] = jD(0x4bb);
    const n = {};
    return n['className'] = 'text-textSecondary\x20font-bold\x20text-center\x20text-2xl', n[jD(0x26a)] = 'Complaints', jsx(Fragment, {
        'children': jsxs(jD(0x426), {
            'className': jD(0x352),
            'children': [
                jsx(a50d9, {}),
                jsx(jD(0x426), {
                    'className': jD(0x332),
                    'children': jsxs(jD(0x426), {
                        'className': jD(0x420),
                        'children': [
                            jsxs(jD(0x4ec), {
                                'className': 'flex\x20flex-col\x20items-center\x20cursor-pointer\x20hover:bg-buttonHover/75\x20py-10\x20mx-20\x20my-4',
                                'onClick': () => g(jD(0x475)),
                                'children': [
                                    jsx(ScrollText, i),
                                    jsx('div', j)
                                ]
                            }),
                            jsxs('button', {
                                'className': 'flex\x20flex-col\x20items-center\x20cursor-pointer\x20hover:bg-buttonHover/50\x20py-10\x20mx-20\x20my-4',
                                'onClick': () => g(jD(0x435)),
                                'children': [
                                    jsx(NotepadText, k),
                                    jsx(jD(0x426), l)
                                ]
                            }),
                            jsxs('button', {
                                'className': 'flex\x20flex-col\x20items-center\x20cursor-pointer\x20hover:bg-buttonHover/50\x20py-10\x20mx-20\x20my-4',
                                'onClick': () => g('/dashboard/complaints/show'),
                                'children': [
                                    jsx(NotebookText, m),
                                    jsx(jD(0x426), n)
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
const a50e4 = {};
a50e4[a50gp(0x27a)] = null, a50e4[a50gp(0x18b)] = a50e3;
const a50e5 = {};
a50e5[a50gp(0x2ce)] = a50gp(0x3c8);
const a50e6 = Object['freeze'](Object['defineProperty'](a50e4, Symbol['toStringTag'], a50e5)), a50e7 = async ({
        request: e,
        params: f
    }) => {
        const jE = a50gp;
        try {
            await a50dH(e);
            const g = new URL(e[jE(0x33a)]), h = 0x3e8, i = Number(g[jE(0x40d)][jE(0x23c)]('skip')) || 0x0, j = g[jE(0x40d)][jE(0x23c)](jE(0x154)) || '';
            if (j != '') {
                const k = {};
                k[jE(0x438)] = j;
                const l = k, m = await a50dt(jE(0x192), jE(0x3c4), l, h, 0x0, -0x1, jE(0x35b)), n = {};
                return n[jE(0x23f)] = 0xc8, Response[jE(0x236)](m, n);
            } else {
                const o = await a50dt('unnamed', jE(0x3c4), {}, h, i, -0x1, jE(0x35b)), p = {};
                return p['status'] = 0xc8, Response['json'](o, p);
            }
        } catch (q) {
            console[jE(0x362)](jE(0x41a), q);
            const r = {};
            r[jE(0x23f)] = 0x1f4;
            throw new Response(jE(0x394), r);
        }
    }, a50e8 = {};
a50e8[a50gp(0x27a)] = null, a50e8[a50gp(0x4f9)] = a50e7;
const a50e9 = {};
a50e9['value'] = 'Module';
const a50ea = Object['freeze'](Object[a50gp(0x32c)](a50e8, Symbol['toStringTag'], a50e9)), a50eb = async ({request: i}) => {
        const jF = a50gp;
        try {
            await a50dH(i);
            const j = await i[jF(0x15f)](), k = j[jF(0x23c)](jF(0x1f2)), l = j[jF(0x23c)]('newPassword'), m = j[jF(0x23c)](jF(0x22d)), n = j[jF(0x23c)](jF(0x1cd)), o = {};
            o['username'] = n;
            const p = await a50ds(jF(0x192), jF(0x2f0), o, 0x1, 0x0);
            if (p && p[jF(0x421)] > 0x0) {
                const r = await a50bH[jF(0x130)](k, p[0x0][jF(0x1e3)]);
                if (r) {
                    const t = await a50bH['hash'](l, 0xb), u = {};
                    u[jF(0x1cd)] = n;
                    const v = {};
                    v[jF(0x1e3)] = t;
                    const w = {};
                    w['$set'] = v;
                    const x = await a50dv('unnamed', 'users', u, w);
                    if (x) {
                        await a50dy({
                            'by': n,
                            'action': 'password\x20change',
                            'result': jF(0x20c),
                            'when': new Date()[jF(0x137)]()
                        }, jF(0x192), jF(0x15c));
                        const y = {};
                        return y[jF(0x23f)] = 0xc8, new Response(jF(0x36b), y);
                    }
                }
                await a50dy({
                    'by': n,
                    'action': jF(0x415),
                    'result': jF(0x198),
                    'when': new Date()[jF(0x137)]()
                }, jF(0x192), jF(0x15c));
                const s = {};
                return s[jF(0x23f)] = 0x194, new Response(jF(0x49b), s);
            }
            await a50dy({
                'by': n,
                'action': jF(0x415),
                'result': jF(0x359),
                'when': new Date()['toISOString']()
            }, jF(0x192), jF(0x15c));
            const q = {};
            return q['status'] = 0x194, new Response(jF(0x2b8), q);
        } catch (z) {
            console['log'](jF(0x3b5), z);
            const A = {};
            A[jF(0x23f)] = 0x1f4;
            throw new Response('Internal\x20server\x20error', A);
        }
    }, a50ec = {};
a50ec[a50gp(0x27a)] = null, a50ec['action'] = a50eb;
const a50ed = {};
a50ed['value'] = a50gp(0x3c8);
const a50ee = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50ec, Symbol[a50gp(0x20d)], a50ed)), a50ef = async ({
        request: f,
        params: g
    }) => {
        const jG = a50gp;
        try {
            await a50dH(f);
            const h = await f['json'](), i = {};
            i[jG(0x1cd)] = h[jG(0x1cd)];
            const j = {};
            j[jG(0x2db)] = h;
            const k = await a50dv('unnamed', jG(0x2f0), i, j);
            if (k) {
                a50dE(h), await a50dy({
                    'by': h[jG(0x1cd)],
                    'action': jG(0x33e),
                    'result': jG(0x410),
                    'when': new Date()[jG(0x137)]()
                }, 'unnamed', jG(0x15c));
                const l = {};
                return l[jG(0x23f)] = 0xc8, new Response(jG(0x36b), l);
            } else {
                await a50dy({
                    'by': h['username'],
                    'action': jG(0x33e),
                    'result': jG(0x359),
                    'when': new Date()[jG(0x137)]()
                }, jG(0x192), jG(0x15c));
                const m = {};
                return m[jG(0x23f)] = 0x194, new Response(jG(0x2b8), m);
            }
        } catch (n) {
            console[jG(0x362)]('error\x20while\x20updating\x20profile\x20:\x20', n);
            const o = {};
            o['status'] = 0x1f4;
            throw new Response('Internal\x20server\x20error', o);
        }
    }, a50eg = {};
a50eg[a50gp(0x27a)] = null, a50eg[a50gp(0x4ab)] = a50ef;
const a50eh = {};
a50eh[a50gp(0x2ce)] = a50gp(0x3c8);
const a50ei = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50eg, Symbol[a50gp(0x20d)], a50eh)), a50ej = {};
a50ej[a50gp(0x4e5)] = a50gp(0x124), a50ej[a50gp(0x238)] = !![], a50ej[a50gp(0x17e)] = 0x3e8 * 0x3c * 0x3c * 0x18, a50ej['path'] = '/', a50ej[a50gp(0x37e)] = a50gp(0xd0), a50ej[a50gp(0x1be)] = [
    a50gp(0x4de),
    a50gp(0x327)
];
const a50ek = {};
a50ek[a50gp(0x109)] = a50ej;
const {
        getSession: a50el,
        commitSession: a50em,
        destroySession: a50en
    } = createCookieSessionStorage(a50ek), {
        sign: a50eo,
        verify: a50ep
    } = a50bG;
async function a50eq(a, b, c) {
    const jH = a50gp, d = await a50el(a), e = d[jH(0x23c)]('rToken');
    if (!e)
        return console[jH(0x466)]('refresh\x20token\x20is\x20missing'), ![];
    try {
        const f = a50ep(e, a50dA);
        if (f[jH(0x3bd)] === b && f[jH(0x3e3)] === c)
            return f[jH(0x1cd)];
        return console[jH(0x466)](jH(0x26f)), ![];
    } catch (g) {
        return console[jH(0x466)](jH(0xcc)), ![];
    }
}
async function a50er({
    request: e,
    params: f
}) {
    const jI = a50gp, g = e[jI(0x385)][jI(0x23c)]('cookie'), h = new URL(e['url']), i = e['headers'][jI(0x23c)](jI(0x186));
    try {
        if (g) {
            const k = await a50eq(g, h[jI(0x412)], i ? i : '');
            if (k !== ![]) {
                const m = new URL(e[jI(0x33a)]), n = {
                        'time': Date(),
                        'userip': m[jI(0x412)],
                        'userAgent': e[jI(0x385)][jI(0x23c)](jI(0x186)),
                        'username': k
                    }, o = {};
                o['username'] = k;
                const p = await a50ds(jI(0x192), jI(0x2f0), o, 0x1, 0x0);
                if (p && p[jI(0x421)] > 0x0)
                    a50dE(p[0x0]);
                const q = {};
                q[jI(0x3cc)] = jI(0x282);
                const r = a50eo(n, a50dB, q), s = {};
                return s[jI(0x15a)] = r, s[jI(0x465)] = a50dD, Response['json'](s);
            }
            const l = await a50el();
            return l['unset'](jI(0x3a1)), new Response(jI(0x4e8), {
                'status': 0x193,
                'headers': { 'Set-Cookie': await a50em(l) }
            });
        }
        const j = {};
        return j[jI(0x23f)] = 0x193, new Response(jI(0x4e8), j);
    } catch (t) {
        console[jI(0x362)](jI(0x2c6), t);
        const u = await a50el();
        return u[jI(0x3eb)](jI(0x3a1)), new Response(jI(0x394), {
            'status': 0x1f4,
            'headers': { 'Set-Cookie': await a50em(u) }
        });
    }
}
const a50es = {};
a50es[a50gp(0x27a)] = null, a50es[a50gp(0x4f9)] = a50er;
const a50et = {};
a50et[a50gp(0x2ce)] = a50gp(0x3c8);
const a50eu = Object[a50gp(0xd3)](Object['defineProperty'](a50es, Symbol['toStringTag'], a50et)), a50ev = async ({
        request: e,
        params: f
    }) => {
        const jJ = a50gp;
        try {
            await a50dH(e);
            const {
                no: h,
                username: i,
                type: j
            } = await e[jJ(0x236)]();
            var g;
            const k = {};
            k['status'] = 0x1f4;
            if (j === jJ(0x3c4))
                g = await a50dw(h, jJ(0x192), jJ(0x3c4));
            else {
                if (j === 'quotations')
                    g = await a50dw(h, 'unnamed', jJ(0x343));
                else
                    return new Response(jJ(0x4d5), k);
            }
            if (g != void 0x0 && g > 0x0) {
                await a50dy({
                    'by': i,
                    'action': jJ(0x37b) + j + '\x20' + h,
                    'result': jJ(0x20c),
                    'when': new Date()['toISOString']()
                }, jJ(0x192), jJ(0x15c));
                const l = {};
                return l[jJ(0x23f)] = 0xc8, new Response(j + jJ(0x30a), l);
            } else {
                await a50dy({
                    'by': i,
                    'action': jJ(0x37b) + j + '\x20' + h,
                    'result': jJ(0x11f),
                    'when': new Date()[jJ(0x137)]()
                }, jJ(0x192), 'logs');
                const m = {};
                return m[jJ(0x23f)] = 0x1f4, new Response(j + jJ(0x166), m);
            }
        } catch (n) {
            console[jJ(0x466)](jJ(0x372), n);
            const o = {};
            o[jJ(0x23f)] = 0x1f4;
            throw new Response(jJ(0x4b0), o);
        }
    }, a50ew = {};
a50ew[a50gp(0x27a)] = null, a50ew[a50gp(0x4ab)] = a50ev;
const a50ex = {};
a50ex[a50gp(0x2ce)] = a50gp(0x3c8);
const a50ey = Object[a50gp(0xd3)](Object['defineProperty'](a50ew, Symbol['toStringTag'], a50ex)), a50ez = async ({request: c}) => {
        const jK = a50gp;
        try {
            await a50dH(c);
            const d = await a50el();
            d['unset'](jK(0x3a1));
            const e = {};
            return e[jK(0x23f)] = 0xc8, Response[jK(0x236)](e, { 'headers': { 'Set-Cookie': await a50em(d) } });
        } catch (f) {
            console[jK(0x362)](jK(0x2e1), f);
            const g = {};
            g[jK(0x23f)] = 0x1f4;
            throw new Response(jK(0x394), g);
        }
    }, a50eA = {};
a50eA['__proto__'] = null, a50eA[a50gp(0x4f9)] = a50ez;
const a50eB = {};
a50eB[a50gp(0x2ce)] = a50gp(0x3c8);
const a50eC = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50eA, Symbol['toStringTag'], a50eB)), a50eD = [];
function a50eE() {
    const jL = a50gp;
    if (a50eD[jL(0x421)] > 0x0) {
        console['log'](jL(0x2ac), a50eD['length']);
        return;
    } else
        a50bI['createReadStream']('./assets/data.csv')['pipe'](a50bJ())['on']('data', a => {
            const jM = jL;
            a50eD[jM(0x28b)](a);
        })['on'](jL(0x211), () => {
            const jN = jL;
            console['log'](jN(0x4a7));
        });
}
a50eE();
const a50eF = async ({
        request: e,
        params: f
    }) => {
        const jO = a50gp, g = await e[jO(0x236)]();
        if (a50eD[jO(0x421)] === 0x0) {
            const h = {};
            h[jO(0x362)] = jO(0x1c4);
            const i = {};
            return i[jO(0x23f)] = 0xc8, new Response(JSON[jO(0x399)](h), i);
        } else {
            const j = a50eD[jO(0x357)](n => {
                    const jP = jO;
                    return n[jP(0x4e5)][jP(0x33d)]()[jP(0x379)](g[jP(0x33d)]());
                }), k = {};
            k[jO(0x1fb)] = jO(0x160);
            let l = new Headers(k);
            const m = {};
            return m[jO(0x23f)] = 0xc8, m[jO(0x385)] = l, new Response(JSON[jO(0x399)]([...j]), m);
        }
    }, a50eG = {};
a50eG[a50gp(0x27a)] = null, a50eG['action'] = a50eF;
const a50eH = {};
a50eH['value'] = a50gp(0x3c8);
const a50eI = Object['freeze'](Object['defineProperty'](a50eG, Symbol[a50gp(0x20d)], a50eH)), {sign: a50eJ} = a50bG, a50eK = async ({request: i}) => {
        const jQ = a50gp;
        try {
            const k = await i['formData'](), l = k[jQ(0x23c)](jQ(0x1cd))[jQ(0x38c)]()[jQ(0x33d)](), m = k[jQ(0x23c)]('password'), n = {};
            n[jQ(0x1cd)] = l;
            const o = await a50ds(jQ(0x192), 'users', n, 0x1, 0x0);
            if (o && o[jQ(0x421)] > 0x0) {
                const q = await a50bH['compare'](m, o[0x0][jQ(0x1e3)]);
                if (q) {
                    const s = new URL(i[jQ(0x33a)]), t = {
                            'time': Date(),
                            'userip': s[jQ(0x412)],
                            'userAgent': i[jQ(0x385)][jQ(0x23c)](jQ(0x186)),
                            'username': l
                        }, u = {};
                    u[jQ(0x3cc)] = '1d';
                    const v = a50eJ(t, a50dA, u), w = {};
                    w[jQ(0x3cc)] = '10m';
                    const x = a50eJ(t, a50dB, w);
                    let y = await a50el();
                    y['set'](jQ(0x3a1), v), a50dE(o[0x0]);
                    var j = {};
                    if (l === jQ(0x49c)) {
                        const z = await a50dG(), A = {};
                        A[jQ(0x15a)] = x, A[jQ(0x465)] = a50dD, A['quote'] = z, j = A;
                    } else {
                        const B = {};
                        B[jQ(0x15a)] = x, B[jQ(0x465)] = a50dD, j = B;
                    }
                    return await a50dy({
                        'by': l,
                        'action': 'logging\x20in',
                        'result': jQ(0x20c),
                        'when': new Date()[jQ(0x137)]()
                    }, 'unnamed', jQ(0x15c)), Response[jQ(0x236)](j, { 'headers': { 'Set-Cookie': await a50em(y) } });
                }
                await a50dy({
                    'by': l,
                    'action': jQ(0x19c),
                    'result': jQ(0x492),
                    'when': new Date()['toISOString']()
                }, 'unnamed', jQ(0x15c));
                const r = {};
                return r[jQ(0x23f)] = 0x194, new Response(jQ(0x295), r);
            }
            await a50dy({
                'by': l,
                'action': jQ(0x19c),
                'result': jQ(0x32d),
                'when': new Date()[jQ(0x137)]()
            }, jQ(0x192), jQ(0x15c));
            const p = {};
            return p[jQ(0x23f)] = 0x194, new Response(jQ(0x296), p);
        } catch (C) {
            console[jQ(0x362)](jQ(0x281), C);
            const D = {};
            return D[jQ(0x23f)] = 0x1f4, new Response('Internal\x20Server\x20Error', D);
        }
    }, a50eL = {};
a50eL[a50gp(0x27a)] = null, a50eL[a50gp(0x4ab)] = a50eK;
const a50eM = {};
a50eM['value'] = a50gp(0x3c8);
const a50eN = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50eL, Symbol[a50gp(0x20d)], a50eM));
function a50eO() {
    const {accessToken: a} = a50c6(), b = useNavigate();
    return useEffect(() => {
        const jR = a50b, c = localStorage[jR(0x24e)]('login');
        if (a === void 0x0) {
            if (!c || c === 'n')
                b('/');
        } else
            localStorage[jR(0x395)](jR(0x1df), 'y');
    }, [a]), jsx(Fragment, { 'children': jsx(Outlet, {}) });
}
const a50eP = {};
a50eP[a50gp(0x27a)] = null, a50eP['default'] = a50eO;
const a50eQ = {};
a50eQ['value'] = a50gp(0x3c8);
const a50eR = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50eP, Symbol[a50gp(0x20d)], a50eQ)), a50eS = 'M304\x20216L317.5\x20258.5L374\x20199M304\x20216L374\x20199M304\x20216L293\x20183.5L268.5\x20200.5L304\x20216ZM374\x20199L382.5\x20231L408.5\x20176M374\x20199L408.5\x20176M374\x20199L361.5\x20170M374\x20199L330.5\x20177M408.5\x20176L361.5\x20170M408.5\x20176L400.5\x20121L361.5\x20170M361.5\x20170L330.5\x20177M330.5\x20177L326\x2085.5M330.5\x20177L288.5\x20149M326\x2085.5L288.5\x20149M326\x2085.5L377\x2041M326\x2085.5L272.5\x2086M326\x2085.5L289\x2042.5M288.5\x20149L255\x20148.5M288.5\x20149L272.5\x2086M377\x2041L351\x20100L378\x20102L377\x2041ZM377\x2041L395.5\x203M377\x2041L424\x2012.5L395.5\x203M377\x2041L339\x206.5M377\x2041L289\x2042.5M395.5\x203L406.5\x20-4H387L395.5\x203ZM395.5\x203L339\x206.5M339\x206.5L285.5\x20-7L336\x20-16.5L339\x206.5ZM255\x20148.5L246\x20209L216\x20187L255\x20148.5ZM255\x20148.5L272.5\x2086M255\x20148.5L219.5\x20126.5M272.5\x2086L219.5\x20126.5M272.5\x2086L247.5\x2060.5M272.5\x2086L289\x2042.5M219.5\x20126.5L247.5\x2060.5M247.5\x2060.5L289\x2042.5M247.5\x2060.5L241.5\x2021M289\x2042.5L241.5\x2021M241.5\x2021L199.5\x2022M241.5\x2021L196\x20-21.5M199.5\x2022L196\x20-21.5M199.5\x2022L178\x2043.5M196\x20-21.5L102\x2016M196\x20-21.5L178\x2043.5M102\x2016L155.5\x2061.5L124.5\x2081.5L102\x2016ZM102\x2016L178\x2043.5M64.5\x20317L86.5\x20334.5L96.5\x20315.5L64.5\x20317ZM290.5\x20448.5L312.5\x20397L263.5\x20412.5L290.5\x20448.5ZM302.5\x20308L300\x20328.5L322.5\x20326.5L302.5\x20308ZM364.5\x20294L388.5\x20267.5L401.5\x20274L364.5\x20294ZM221.5\x20277L251.5\x20288.5L250\x20261.5L221.5\x20277ZM148.5\x20184L144.5\x20206L194\x20173L148.5\x20184ZM209.5\x2081L161\x2092L164.5\x20148.5L209.5\x2081ZM72\x20194.5L83\x20171L58.5\x20173.5L72\x20194.5ZM1\x2069.5L9.5\x2091L46.5\x2071L1\x2069.5Z';
function a50eT() {
    const jS = a50gp, d = h => h[jS(0x2af)](a50eS)['opacity'](0.15)[jS(0x1ae)](jS(0x34f))[jS(0x4b9)](), e = {};
    e[jS(0xe5)] = jS(0x1ed), e[jS(0x2f5)] = -0x13, e[jS(0x333)] = -0x16, e[jS(0x4ef)] = -0xa;
    const f = {};
    f[jS(0x47b)] = 0x1a7, f[jS(0x2ef)] = 0x1d6;
    const g = {};
    return g['paint'] = d, g['style'] = f, jsx(View, {
        'style': e,
        'fixed': !![],
        'children': jsx(Canvas, g)
    });
}
function a50eU(S) {
    const jT = a50gp, T = S[jT(0x478)] ? S[jT(0x478)] : jT(0x437), U = {};
    U[jT(0x38a)] = 0x1e, U[jT(0x120)] = jT(0x2be), U[jT(0x158)] = 0x7d;
    const V = {};
    V[jT(0x1bd)] = jT(0x270), V[jT(0x349)] = 'hsl(' + T + '\x200%\x200%)', V['fontWeight'] = jT(0x39d);
    const W = {};
    W[jT(0x10c)] = 0xf;
    const Y = {};
    Y[jT(0x120)] = jT(0x2be), Y[jT(0x231)] = jT(0x3f8), Y[jT(0x150)] = 'space-between', Y['gap'] = 0x14;
    const Z = {};
    Z[jT(0x47b)] = jT(0x4c3), Z[jT(0x1bd)] = 'justify', Z[jT(0x43c)] = 0xb, Z[jT(0x4c1)] = jT(0x291) + T + jT(0x328), Z[jT(0x38a)] = 0xa, Z[jT(0x36c)] = 1.25;
    const a0 = {};
    a0['fontSize'] = 0xb, a0[jT(0x1bd)] = jT(0x270);
    const a1 = {};
    a1[jT(0x1bd)] = jT(0xee), a1[jT(0x43c)] = 0xa, a1[jT(0x36c)] = 1.25;
    const a2 = {};
    a2['fontSize'] = 0x9, a2['fontWeight'] = jT(0x39d);
    const a3 = {};
    a3[jT(0x43c)] = 0xa, a3[jT(0x36c)] = 1.25;
    const a4 = {};
    a4[jT(0x36c)] = 0.25;
    const a5 = {};
    a5[jT(0x43c)] = 0x9;
    const a6 = {};
    a6[jT(0x47b)] = jT(0x4a9), a6['fontSize'] = 0xb;
    const a7 = {};
    a7[jT(0x231)] = 'row', a7[jT(0x4c1)] = jT(0x368), a7[jT(0x349)] = jT(0x291) + T + '\x200%\x200%)';
    const a8 = {};
    a8[jT(0x231)] = jT(0x3f8), a8[jT(0x4c1)] = jT(0x291) + T + jT(0x328), a8[jT(0x349)] = jT(0x291) + T + jT(0x311);
    const a9 = {};
    a9[jT(0x38a)] = 0x8, a9['backgroundColor'] = 'hsl(' + T + '\x200%\x2011%)', a9[jT(0x1bd)] = jT(0x446), a9[jT(0x349)] = 'white';
    const aa = {};
    aa['padding'] = 0x8, aa['textAlign'] = jT(0x446), aa[jT(0x43c)] = 0xa;
    const ab = {};
    ab[jT(0x309)] = U, ab[jT(0x290)] = V, ab['header'] = W, ab['rowContainer'] = Y, ab[jT(0x4e0)] = Z, ab[jT(0x3c7)] = a0, ab[jT(0x300)] = a1, ab[jT(0x39d)] = a2, ab['challanDetails'] = a3, ab[jT(0x48a)] = a4, ab[jT(0x4f1)] = a5, ab[jT(0x2ca)] = a6, ab['tableRowEven'] = a7, ab[jT(0x319)] = a8, ab[jT(0x30d)] = a9, ab['tableCellContent'] = aa;
    const ac = StyleSheet[jT(0x29a)](ab);
    var ad = S[jT(0x44e)][jT(0x342)]('-');
    const ae = ad[0x2] + '-' + ad[0x1] + '-' + ad[0x0], af = {};
    af[jT(0x4f3)] = 'bold';
    const ag = {};
    ag[jT(0x22b)] = af, ag['children'] = jT(0x2f3);
    const ah = {};
    ah[jT(0x4f3)] = jT(0x39d);
    const ai = {};
    ai[jT(0x22b)] = ah, ai[jT(0x26a)] = jT(0xd8);
    const aj = {};
    aj['fontWeight'] = jT(0x39d);
    const ak = {};
    ak[jT(0x22b)] = aj, ak[jT(0x26a)] = 'Email\x20Id:-\x20';
    const al = {};
    al['width'] = jT(0x4a8);
    const am = {};
    am[jT(0x4f3)] = jT(0x39d);
    const an = {};
    an[jT(0x43c)] = 0xc, an[jT(0x4f3)] = jT(0x39d), an[jT(0x1bd)] = jT(0x270), an['width'] = jT(0x4a8);
    const ao = {};
    ao[jT(0x47b)] = jT(0x4a8);
    const ap = {};
    ap['fontWeight'] = jT(0x39d), ap[jT(0x1bd)] = jT(0x2f5);
    const aq = {};
    aq[jT(0x4f3)] = jT(0x39d);
    const ar = {};
    ar[jT(0x4f3)] = 'bold';
    const as = {};
    as[jT(0x4f3)] = jT(0x39d);
    const at = jsx(Fragment, {
            'children': jsxs(View, {
                'fixed': !![],
                'style': ac['header'],
                'children': [
                    jsx(Text, {
                        'style': ac[jT(0x290)],
                        'children': S[jT(0x271)]
                    }, jT(0x252)),
                    jsx(Text, {
                        'style': ac[jT(0x48a)],
                        'children': '\x0a'
                    }, jT(0x194)),
                    jsxs(Text, {
                        'style': ac[jT(0x3c7)],
                        'children': [
                            jsx(Text, ag, jT(0x4f1)),
                            jsxs(Text, {
                                'children': [
                                    '\x20',
                                    S['fromAddress']
                                ]
                            }, 'addressvalue')
                        ]
                    }, jT(0xfa)),
                    jsxs(Text, {
                        'style': ac[jT(0x3c7)],
                        'children': [
                            jsx(Text, ai, jT(0x4d9)),
                            jsx(Text, { 'children': S['contact'] }, jT(0x3d9))
                        ]
                    }, jT(0x243)),
                    jsxs(Text, {
                        'style': ac['companyDetails'],
                        'children': [
                            jsx(Text, ak, 'emailid'),
                            jsx(Text, { 'children': S[jT(0x11b)] }, jT(0x138))
                        ]
                    }, jT(0x3e5)),
                    jsx(Text, {
                        'style': ac[jT(0x48a)],
                        'children': '\x0a\x0a'
                    }, jT(0x2c2)),
                    jsxs(View, {
                        'style': ac[jT(0x26e)],
                        'children': [
                            jsxs(Text, {
                                'style': al,
                                'children': [
                                    jsx(Text, {
                                        'style': [
                                            ac['challanDetails'],
                                            am
                                        ],
                                        'children': jT(0x128)
                                    }, jT(0x1d0)),
                                    jsx(Text, {
                                        'style': ac['challanDetails'],
                                        'children': S['no']
                                    }, jT(0x4f2))
                                ]
                            }, jT(0x1a4)),
                            jsx(Text, {
                                'style': [
                                    ac[jT(0x12a)],
                                    an
                                ],
                                'children': S['type']
                            }, jT(0x4d3)),
                            jsxs(Text, {
                                'style': ao,
                                'children': [
                                    jsx(Text, {
                                        'style': [
                                            ac[jT(0x12a)],
                                            ap
                                        ],
                                        'children': 'Date:\x20'
                                    }, jT(0x44e)),
                                    jsx(Text, {
                                        'style': ac[jT(0x12a)],
                                        'children': ae
                                    }, 'datevalue')
                                ]
                            }, jT(0x1ca))
                        ]
                    }, jT(0x46b)),
                    jsx(Text, {
                        'style': ac[jT(0x48a)],
                        'children': jT(0x4bf)
                    }, jT(0x152)),
                    jsxs(View, {
                        'style': ac[jT(0x26e)],
                        'children': [
                            jsxs(View, {
                                'style': ac[jT(0x4e0)],
                                'children': [
                                    jsx(Text, {
                                        'style': [
                                            ac[jT(0x12a)],
                                            aq
                                        ],
                                        'children': S['to']
                                    }, 'to'),
                                    jsx(Text, {
                                        'style': ac[jT(0x12a)],
                                        'children': S[jT(0xea)]
                                    }, jT(0x3ba))
                                ]
                            }, jT(0x447)),
                            jsxs(View, {
                                'style': ac[jT(0x4e0)],
                                'children': [
                                    S['orderno'] && jsxs(Text, {
                                        'children': [
                                            jsx(Text, {
                                                'style': [
                                                    ac['challanDetails'],
                                                    ar
                                                ],
                                                'children': jT(0x38b)
                                            }, 'orderno'),
                                            jsx(Text, {
                                                'style': ac['challanDetails'],
                                                'children': S[jT(0x4c0)]
                                            }, 'ordernovalue')
                                        ]
                                    }, 'nested-text-3'),
                                    jsxs(Text, {
                                        'children': [
                                            jsx(Text, {
                                                'style': [
                                                    ac[jT(0x12a)],
                                                    as
                                                ],
                                                'children': 'Mode\x20of\x20Dispatch:\x20'
                                            }, 'modeofdispacth'),
                                            jsx(Text, {
                                                'style': ac[jT(0x12a)],
                                                'children': S[jT(0x17f)]
                                            }, jT(0x48f))
                                        ]
                                    }, jT(0x1a3))
                                ]
                            }, 'nested-view-7')
                        ]
                    }, jT(0xda))
                ]
            }, jT(0x42e))
        }), au = {};
    au[jT(0x47b)] = jT(0xec), au[jT(0x2bd)] = '1%', au[jT(0x158)] = '10%', au[jT(0xe5)] = jT(0x1ed), au['bottom'] = 0x28, au[jT(0x43c)] = 0xb, au['color'] = jT(0x45a), au['border'] = jT(0x3e1), au[jT(0x4c1)] = '#F2F2F2';
    const av = {};
    av['flexDirection'] = jT(0x3f8), av[jT(0x2d9)] = 0x3c, av[jT(0x47b)] = jT(0x4a9);
    const aw = {};
    aw[jT(0x47b)] = jT(0x45b), aw[jT(0x402)] = '2%';
    const ax = {};
    ax[jT(0x22b)] = aw, ax[jT(0x26a)] = jT(0x4c2);
    const ay = {};
    ay[jT(0x47b)] = '50%', ay[jT(0x1bd)] = jT(0x2f5), ay[jT(0x44b)] = '2%';
    const az = {};
    az[jT(0x22b)] = ay, az[jT(0x26a)] = [
        jT(0x168),
        S[jT(0x271)]
    ];
    const aA = {};
    aA[jT(0x231)] = jT(0x3f8), aA[jT(0x47b)] = jT(0xec), aA[jT(0xe5)] = jT(0x1ed), aA['bottom'] = 0x14, aA[jT(0x43c)] = 0xb, aA['color'] = 'black';
    const aB = {};
    aB[jT(0x47b)] = jT(0x4a8);
    const aC = {};
    aC['style'] = aB;
    const aD = {};
    aD[jT(0x47b)] = jT(0x2dc), aD[jT(0x1bd)] = jT(0x270), aD[jT(0x346)] = jT(0x2d3);
    const aE = {};
    aE['style'] = aD, aE[jT(0x26a)] = [
        S['website'],
        '\x20'
    ];
    const aF = {};
    aF['width'] = jT(0x4a8), aF[jT(0x1bd)] = jT(0x2f5), aF[jT(0x346)] = jT(0x2d3);
    const aG = {};
    aG['style'] = aF, aG[jT(0x145)] = ({
        pageNumber: aI,
        totalPages: aJ
    }) => 'Page\x20' + (aI % (aJ / 0x2) === 0x0 ? aJ / 0x2 : aI % (aJ / 0x2)) + jT(0x41d) + aJ / 0x2;
    const aH = jsxs(Fragment, {
        'children': [
            jsx(View, {
                'fixed': !![],
                'style': [au],
                'children': jsxs(View, {
                    'style': av,
                    'children': [
                        jsx(Text, ax, jT(0x4b4)),
                        jsxs(Text, az, jT(0x41f))
                    ]
                }, jT(0x1de))
            }, jT(0x3b4)),
            jsxs(View, {
                'fixed': !![],
                'style': aA,
                'children': [
                    jsx(Text, aC, jT(0x49e)),
                    jsxs(Text, aE, jT(0x387)),
                    jsx(Text, aG, 'pagenumber')
                ]
            }, 'nested-view-9')
        ]
    });
    return jsx(Document, {
        'title': jT(0x239),
        'author': S['madeby'],
        'subject': jT(0x451),
        'children': [
            0x0,
            0x1
        ][jT(0x1d8)](aI => {
            const jU = jT, aJ = {};
            aJ[jU(0x47b)] = '8%';
            const aK = {};
            aK[jU(0x35f)] = 0x1, aK[jU(0x2ad)] = 0x0;
            const aL = {};
            aL['width'] = jU(0x275);
            const aM = {};
            aM[jU(0x47b)] = '15%';
            const aN = {};
            aN[jU(0x231)] = jU(0x3f8), aN[jU(0x4c1)] = jU(0x291) + T + jU(0x41e), aN['color'] = jU(0x445);
            const aO = {};
            aO[jU(0x47b)] = '8%';
            const aP = {};
            aP[jU(0x2ad)] = 0x0, aP[jU(0x35f)] = 0x1;
            const aQ = {};
            aQ['fontSize'] = 0xb, aQ[jU(0x4f3)] = jU(0x39d), aQ[jU(0x346)] = jU(0x2d3);
            const aR = {};
            aR[jU(0x47b)] = '15%';
            const aS = {};
            aS[jU(0x47b)] = '15%', aS[jU(0x4f3)] = jU(0x39d), aS['fontStyle'] = 'italic';
            const aT = {};
            aT[jU(0x231)] = jU(0x3f8), aT[jU(0x4c1)] = jU(0x291) + T + jU(0x41e), aT[jU(0x349)] = 'white';
            const aU = {};
            aU[jU(0x47b)] = '8%';
            const aV = {};
            aV[jU(0x2ad)] = 0x0, aV['flexGrow'] = 0x1;
            const aW = {};
            aW[jU(0x43c)] = 0xb, aW['fontWeight'] = jU(0x39d), aW[jU(0x346)] = 'italic';
            const aX = {};
            aX[jU(0x22b)] = aW, aX['children'] = 'Total\x20Quantity';
            const aY = {};
            aY[jU(0x47b)] = '15%';
            const aZ = {};
            return aZ[jU(0x47b)] = '15%', aZ[jU(0x4f3)] = 'bold', aZ[jU(0x346)] = jU(0x2d3), jsxs(Page, {
                'wrap': !![],
                'size': 'A4',
                'style': ac['page'],
                'children': [
                    jsx(a50eT, {}, jU(0x3ef)),
                    at,
                    jsxs(View, {
                        'style': [ac[jU(0x2ca)]],
                        'children': [
                            jsxs(View, {
                                'fixed': !![],
                                'style': ac['tableRowEven'],
                                'children': [
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x30d)],
                                            aJ
                                        ],
                                        'children': jU(0x12c)
                                    }, jU(0x154)),
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x30d)],
                                            aK
                                        ],
                                        'children': jU(0x141)
                                    }, jU(0x132)),
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x30d)],
                                            aL
                                        ],
                                        'children': 'Unit'
                                    }, jU(0x386)),
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x30d)],
                                            aM
                                        ],
                                        'children': jU(0x330)
                                    }, jU(0xd9))
                                ]
                            }, 'nested-view-11'),
                            Object[jU(0x1e7)](S[jU(0x3dd)])[jU(0x1d8)]((b0, b1) => {
                                const jV = jU;
                                var b2;
                                const b3 = {};
                                b3[jV(0x47b)] = '8%';
                                const b4 = {};
                                b4[jV(0x2ad)] = 0x0, b4['flexGrow'] = 0x1;
                                const b5 = {};
                                b5[jV(0x26a)] = b0[0x1][jV(0x4e5)];
                                const b6 = {};
                                b6[jV(0x346)] = jV(0x2d3);
                                const b7 = {};
                                b7[jV(0x47b)] = jV(0x275);
                                const b8 = {};
                                return b8[jV(0x47b)] = jV(0x275), jsxs(View, {
                                    'style': b1 % 0x2 === 0x0 ? ac[jV(0x48c)] : ac[jV(0x319)],
                                    'children': [
                                        jsx(Text, {
                                            'style': [
                                                ac[jV(0x441)],
                                                b3
                                            ],
                                            'children': b1 + 0x1
                                        }, 'snovalue'),
                                        jsxs(View, {
                                            'style': [
                                                ac[jV(0x441)],
                                                b4
                                            ],
                                            'children': [
                                                jsx(Text, b5, 'name'),
                                                jsxs(Text, {
                                                    'style': b6,
                                                    'children': [
                                                        (b2 = b0[0x1][jV(0x154)]) == null ? void 0x0 : b2[jV(0x3f4)](',\x20'),
                                                        '\x20'
                                                    ]
                                                }, 'serialnovalue')
                                            ]
                                        }, jV(0x377)),
                                        jsx(Text, {
                                            'style': [
                                                ac['tableCellContent'],
                                                b7
                                            ],
                                            'children': b0[0x1][jV(0x386)]
                                        }, jV(0xff)),
                                        jsx(Text, {
                                            'style': [
                                                ac[jV(0x441)],
                                                b8
                                            ],
                                            'children': b0[0x1][jV(0xd9)]
                                        }, 'quantityvalue')
                                    ]
                                }, jV(0x195));
                            }),
                            jsxs(View, {
                                'style': aN,
                                'children': [
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aO
                                        ]
                                    }, jU(0x4f4)),
                                    jsx(View, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aP
                                        ],
                                        'children': jsx(Text, {
                                            'style': aQ,
                                            'children': jU(0x414)
                                        }, jU(0x344))
                                    }, jU(0x262)),
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aR
                                        ]
                                    }, jU(0x1dd)),
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aS
                                        ],
                                        'children': S[jU(0x3dd)][jU(0x421)]
                                    }, jU(0x4cd))
                                ]
                            }, jU(0x25f)),
                            jsxs(View, {
                                'style': aT,
                                'children': [
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aU
                                        ]
                                    }, jU(0x397)),
                                    jsx(View, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aV
                                        ],
                                        'children': jsx(Text, aX, jU(0x127))
                                    }, 'nested-view-15'),
                                    jsx(Text, {
                                        'style': [
                                            ac[jU(0x441)],
                                            aY
                                        ]
                                    }, jU(0x3ec)),
                                    jsx(Text, {
                                        'style': [
                                            ac['tableCellContent'],
                                            aZ
                                        ],
                                        'children': S['items'][jU(0x143)]((b0, b1) => b0 + b1[jU(0xd9)], 0x0)
                                    }, jU(0x1a9))
                                ]
                            }, jU(0x218))
                        ]
                    }, jU(0x260)),
                    aH
                ]
            }, jU(0x309) + aI);
        })
    }, jT(0x2f2));
}
function a50eV(a2, a3 = !![]) {
    const jW = a50gp, a4 = a2['pdfColor'] ? a2[jW(0x478)] : jW(0x437), a5 = {};
    a5['padding'] = 0x1e, a5['display'] = jW(0x2be), a5[jW(0x231)] = jW(0x173), a5[jW(0x346)] = jW(0x1c1);
    const a6 = {};
    a6['textAlign'] = jW(0x270), a6[jW(0x349)] = jW(0x291) + a4 + jW(0x400);
    const a7 = {};
    a7[jW(0x2ef)] = jW(0x18e), a7['width'] = jW(0x4a9);
    const a8 = {};
    a8[jW(0x10c)] = 0xf;
    const a9 = {};
    a9['fontSize'] = 0x28, a9[jW(0x346)] = jW(0x2d3), a9[jW(0x4f3)] = jW(0x39d), a9['marginVertical'] = 0x14;
    const aa = {};
    aa[jW(0x120)] = jW(0x2be), aa[jW(0x231)] = jW(0x3f8), aa['justifyContent'] = jW(0x2f1), aa[jW(0x2fe)] = 0x14;
    const ab = {};
    ab['flexDirection'] = jW(0x173), ab['justifyContent'] = jW(0x270);
    const ac = {};
    ac[jW(0x43c)] = 0x10, ac[jW(0x349)] = jW(0x1b7), ac[jW(0x10c)] = 0x0, ac['marginTop'] = jW(0x18e);
    const ad = {};
    ad[jW(0x47b)] = jW(0x4c3), ad[jW(0x1bd)] = 'justify', ad[jW(0x43c)] = 0xb, ad['backgroundColor'] = 'hsl(' + a4 + '\x20100%\x2097%)', ad[jW(0x38a)] = 0xa, ad[jW(0x36c)] = 1.25;
    const ae = {};
    ae[jW(0xe5)] = jW(0x1ed), ae[jW(0x4f8)] = 0x14, ae[jW(0x2f5)] = 0x28, ae[jW(0x43c)] = 0xa, ae[jW(0x349)] = jW(0x3fd);
    const af = {};
    af[jW(0x43c)] = 0xb, af[jW(0x349)] = jW(0x291) + a4 + jW(0x4c9);
    const ag = {};
    ag[jW(0x43c)] = 0xb, ag[jW(0x1bd)] = jW(0x270), ag['fontWeight'] = jW(0x39d);
    const ah = {};
    ah['textAlign'] = jW(0xee), ah[jW(0x43c)] = 0xa, ah[jW(0x36c)] = 1.25;
    const ai = {};
    ai[jW(0x1bd)] = 'justify', ai[jW(0x43c)] = 0xa, ai[jW(0x36c)] = 1.25, ai[jW(0x349)] = jW(0x3fd);
    const aj = {};
    aj[jW(0x43c)] = 0x9, aj[jW(0x4f3)] = jW(0x39d);
    const ak = {};
    ak[jW(0x1bd)] = 'justify', ak[jW(0x43c)] = 0xa, ak[jW(0x36c)] = 1.25, ak[jW(0x4f3)] = jW(0x39d);
    const al = {};
    al['lineHeight'] = 0.25;
    const am = {};
    am[jW(0x43c)] = 0x9;
    const an = {};
    an[jW(0x47b)] = jW(0x4a9), an['marginVertical'] = 0xa;
    const ao = {};
    ao[jW(0x231)] = 'row', ao[jW(0x4c1)] = jW(0x368);
    const ap = {};
    ap[jW(0x231)] = jW(0x3f8), ap[jW(0x4c1)] = 'hsl(' + a4 + jW(0x176);
    const aq = {};
    aq['padding'] = 0x8, aq[jW(0x4c1)] = jW(0x291) + a4 + '\x20100%\x2065%)', aq[jW(0x1bd)] = jW(0x446), aq[jW(0x43c)] = 0xb, aq[jW(0x349)] = jW(0x445);
    const ar = {};
    ar[jW(0x47b)] = jW(0x38d), ar['padding'] = 0x8, ar[jW(0x1bd)] = jW(0x446);
    const as = {};
    as[jW(0x43c)] = 0x9, as[jW(0x349)] = jW(0x2ed), as['fontStyle'] = jW(0x2d3), as[jW(0x411)] = jW(0x4c8);
    const at = {};
    at[jW(0x43c)] = 0x9, at[jW(0x349)] = jW(0x267), at['fontStyle'] = jW(0x2d3), at[jW(0x411)] = 'none';
    const au = {};
    au[jW(0x43c)] = 0x9, au[jW(0x349)] = '#6E6E6E';
    const av = {};
    av[jW(0x35f)] = 0x1, av['flexBasis'] = 0x0, av[jW(0x38a)] = 0x8, av[jW(0x1bd)] = jW(0x446), av['fontSize'] = 0x9, av['color'] = '#6E6E6E';
    const aw = {};
    aw['width'] = '8%', aw['padding'] = 0x8, aw[jW(0x1bd)] = jW(0x446), aw[jW(0x43c)] = 0x9, aw['color'] = jW(0x267);
    const ax = {};
    ax[jW(0x38a)] = 0x8, ax[jW(0x1bd)] = jW(0x446), ax[jW(0x43c)] = 0x9, ax[jW(0x4f3)] = jW(0x39d), ax[jW(0x349)] = jW(0x267);
    const ay = {};
    ay[jW(0x309)] = a5, ay['title'] = a6, ay[jW(0x2fd)] = a7, ay['header'] = a8, ay[jW(0x1c6)] = a9, ay[jW(0x26e)] = aa, ay[jW(0x40f)] = ab, ay[jW(0xd6)] = ac, ay[jW(0x4e0)] = ad, ay[jW(0x104)] = ae, ay['fromto'] = af, ay[jW(0x3c7)] = ag, ay[jW(0x300)] = ah, ay[jW(0x306)] = ai, ay[jW(0x39d)] = aj, ay['qoutationDetails'] = ak, ay['newline'] = al, ay[jW(0x4f1)] = am, ay['tableContainer'] = an, ay['tableRowEven'] = ao, ay[jW(0x319)] = ap, ay['tableCellHeader'] = aq, ay[jW(0x1aa)] = ar, ay[jW(0x321)] = as, ay[jW(0x23e)] = at, ay['tableCellNameContent'] = au, ay[jW(0x1e9)] = av, ay['tableCellSno'] = aw, ay[jW(0x43b)] = ax;
    const az = StyleSheet[jW(0x29a)](ay);
    var aA = a2[jW(0x44e)][jW(0x342)]('-');
    const aB = aA[0x2] + '-' + aA[0x1] + '-' + aA[0x0], aC = {};
    aC[jW(0x43c)] = 0xa;
    const aD = {};
    aD[jW(0x43c)] = 0xb, aD[jW(0x411)] = jW(0x106), aD[jW(0x349)] = '#384388';
    const aE = jsx(Fragment, {
            'children': jsxs(View, {
                'fixed': !![],
                'style': az[jW(0x487)],
                'children': [
                    jsx(Text, {
                        'style': az[jW(0x290)],
                        'children': a2[jW(0x271)]
                    }, jW(0x187)),
                    jsx(Text, {
                        'style': az['newline'],
                        'children': '\x0a'
                    }, 'header-newline'),
                    jsxs(Text, {
                        'children': [
                            jsx(Text, {
                                'style': az['companyDetails'],
                                'children': jW(0x491)
                            }, jW(0xd1)),
                            jsx(Text, {
                                'style': aC,
                                'children': a2['contact']
                            }, jW(0x217)),
                            jsx(Text, {
                                'style': az[jW(0x3c7)],
                                'children': jW(0x4df)
                            }, jW(0x112)),
                            jsx(a50bK, {
                                'src': jW(0xc9) + a2[jW(0x11b)],
                                'style': aD,
                                'children': a2[jW(0x11b)]
                            }, 'emailidvalue')
                        ]
                    }, jW(0x463))
                ]
            }, jW(0x487))
        }), aF = {};
    aF[jW(0x231)] = jW(0x3f8), aF['width'] = '90%', aF[jW(0xe5)] = jW(0x1ed), aF['bottom'] = 0x14, aF[jW(0x43c)] = 0xa, aF['color'] = 'black';
    const aG = {};
    aG['width'] = jW(0x4a8);
    const aH = {};
    aH[jW(0x22b)] = aG;
    const aI = {};
    aI[jW(0x47b)] = jW(0x2dc), aI['textAlign'] = jW(0x270), aI[jW(0x346)] = jW(0x2d3);
    const aJ = {};
    aJ[jW(0x22b)] = aI, aJ[jW(0x26a)] = [
        a2[jW(0x387)],
        '\x20'
    ];
    const aK = {};
    aK[jW(0x47b)] = '33%', aK[jW(0x1bd)] = jW(0x2f5), aK[jW(0x346)] = jW(0x2d3);
    const aL = {};
    aL[jW(0x22b)] = aK, aL[jW(0x145)] = ({
        pageNumber: b1,
        totalPages: b2
    }) => jW(0x499) + b1 + jW(0x41d) + b2;
    const aM = jsx(Fragment, {
            'children': jsxs(View, {
                'fixed': !![],
                'style': aF,
                'children': [
                    jsx(Text, aH, 'blankfooterpart'),
                    jsxs(Text, aJ, 'footerwebsite'),
                    jsx(Text, aL, jW(0x3f6))
                ]
            }, jW(0xd6))
        }), aN = {};
    aN[jW(0x47b)] = '8%';
    const aO = {};
    aO[jW(0x47b)] = jW(0x38d);
    const aP = {};
    aP['flexGrow'] = 0x1, aP['flexBasis'] = 0x0;
    const aQ = {};
    aQ[jW(0x35f)] = 0x1, aQ[jW(0x2ad)] = 0x0;
    const aR = {};
    aR['flexGrow'] = 0x1, aR[jW(0x2ad)] = 0x0;
    const aS = {};
    aS[jW(0x35f)] = 0x1, aS[jW(0x2ad)] = 0x0;
    const aT = {};
    aT[jW(0x47b)] = '40%', aT['textDecoration'] = 'none', aT['fontStyle'] = jW(0x2d3);
    const aU = {};
    aU['flexGrow'] = 0x1, aU[jW(0x2ad)] = 0x0;
    const aV = {};
    aV[jW(0x47b)] = jW(0x38d), aV[jW(0x411)] = 'none', aV[jW(0x346)] = jW(0x2d3);
    const aW = {};
    aW['flexGrow'] = 0x1, aW['flexBasis'] = 0x0;
    const aX = {};
    aX[jW(0x47b)] = '40%', aX[jW(0x411)] = jW(0x4c8), aX['fontStyle'] = 'italic';
    const aY = {};
    aY[jW(0x35f)] = 0x1, aY[jW(0x2ad)] = 0x0;
    const aZ = {};
    aZ[jW(0x43c)] = 0xe, aZ[jW(0x4f3)] = jW(0x39d), aZ[jW(0x1bd)] = jW(0x270);
    const b0 = {};
    return b0['break'] = !![], b0[jW(0x22b)] = aZ, b0[jW(0x26a)] = 'Out\x20Customers\x20List', jsx(Document, {
        'title': jW(0x302),
        'author': a2[jW(0x287)],
        'subject': jW(0x443),
        'children': jsxs(Page, {
            'wrap': !![],
            'size': 'A4',
            'style': az[jW(0x309)],
            'children': [
                jsx(a50eT, {}, 'watermark'),
                aE,
                jsxs(View, {
                    'style': az[jW(0x26e)],
                    'children': [
                        jsxs(Text, {
                            'children': [
                                jsx(Text, {
                                    'style': az['qoutationDetails'],
                                    'children': jW(0x3f3)
                                }, jW(0x4ed)),
                                jsx(Text, {
                                    'style': az[jW(0x300)],
                                    'children': a2['no']
                                }, 'quotationnovalue')
                            ]
                        }, jW(0x1ca)),
                        jsxs(Text, {
                            'children': [
                                jsx(Text, {
                                    'style': az[jW(0x2de)],
                                    'children': 'Quotation\x20Date:\x20'
                                }, jW(0x405)),
                                jsx(Text, {
                                    'style': az[jW(0x300)],
                                    'children': aB
                                }, jW(0x336))
                            ]
                        }, jW(0x23b))
                    ]
                }, jW(0x495)),
                jsx(Text, {
                    'style': az['newline'],
                    'children': jW(0x4bf)
                }, jW(0x148)),
                jsxs(View, {
                    'style': az[jW(0x26e)],
                    'children': [
                        jsxs(View, {
                            'style': az[jW(0x4e0)],
                            'children': [
                                jsx(Text, {
                                    'style': az[jW(0x396)],
                                    'children': jW(0x21f)
                                }, jW(0x376)),
                                jsx(Text, {
                                    'style': az[jW(0x48a)],
                                    'children': '\x0a'
                                }, jW(0x425)),
                                jsx(Text, {
                                    'style': az[jW(0x39d)],
                                    'children': a2['from']
                                }, jW(0x4d1)),
                                jsx(Text, {
                                    'style': az['address'],
                                    'children': a2[jW(0x358)]
                                }, jW(0x249))
                            ]
                        }, jW(0x42e)),
                        jsxs(View, {
                            'style': az[jW(0x4e0)],
                            'children': [
                                jsxs(Text, {
                                    'style': az['fromto'],
                                    'children': [
                                        jW(0x284),
                                        '\x0a'
                                    ]
                                }, jW(0x1e1)),
                                jsx(Text, {
                                    'style': az['newline'],
                                    'children': '\x0a'
                                }, jW(0x1d1)),
                                jsx(Text, {
                                    'style': az[jW(0x39d)],
                                    'children': a2['to']
                                }, 'quotationtovalue'),
                                jsx(Text, {
                                    'style': az[jW(0x4f1)],
                                    'children': a2[jW(0xea)]
                                }, 'quotationaddress')
                            ]
                        }, jW(0xfa))
                    ]
                }, jW(0x2c1)),
                a2[jW(0x300)] !== '' && jsxs(Fragment, {
                    'children': [
                        jsx(Text, {
                            'style': az[jW(0x48a)],
                            'children': '\x0a\x0a\x0a'
                        }, jW(0x297)),
                        jsx(Text, {
                            'style': az[jW(0x300)],
                            'children': a2[jW(0x300)]
                        }, jW(0x29d)),
                        jsx(Text, {
                            'style': az['newline'],
                            'children': '\x0a'
                        }, jW(0x10b))
                    ]
                }),
                jsxs(View, {
                    'style': az['tableContainer'],
                    'children': [
                        jsxs(View, {
                            'style': az[jW(0x48c)],
                            'children': [
                                jsx(Text, {
                                    'style': [
                                        az[jW(0x30d)],
                                        aN
                                    ],
                                    'children': jW(0x12c)
                                }, 'sno'),
                                jsx(Text, {
                                    'style': [
                                        az['tableCellHeader'],
                                        aO
                                    ],
                                    'children': 'Item'
                                }, jW(0x132)),
                                jsx(Text, {
                                    'style': [
                                        az['tableCellHeader'],
                                        aP
                                    ],
                                    'children': jW(0x330)
                                }, jW(0xd9)),
                                jsx(Text, {
                                    'style': [
                                        az['tableCellHeader'],
                                        aQ
                                    ],
                                    'children': 'Price'
                                }, jW(0xdd)),
                                a2['discount'] != 0x0 && jsx(Text, {
                                    'style': [
                                        az[jW(0x30d)],
                                        aR
                                    ],
                                    'children': jW(0x398)
                                }, 'discount'),
                                jsx(Text, {
                                    'style': [
                                        az[jW(0x30d)],
                                        aS
                                    ],
                                    'children': jW(0x253)
                                }, 'amount')
                            ]
                        }, jW(0x46b)),
                        Object[jW(0x1e7)](a2[jW(0x3dd)])[jW(0x1d8)]((b1, b2) => {
                            const jX = jW;
                            return jsxs(View, {
                                'style': b2 % 0x2 === 0x0 ? az[jX(0x48c)] : az[jX(0x319)],
                                'children': [
                                    jsx(Text, {
                                        'style': az[jX(0x45e)],
                                        'children': b2 + 0x1
                                    }, jX(0xf5)),
                                    jsxs(View, {
                                        'style': az[jX(0x1aa)],
                                        'children': [
                                            b1[0x1]['link'] && a2[jX(0x1b0)] ? jsxs(a50bK, {
                                                'style': az[jX(0x321)],
                                                'src': b1[0x1][jX(0x1b6)] || '#',
                                                'children': [
                                                    b1[0x1]['name'],
                                                    '\x20',
                                                    b1[0x1][jX(0x2e2)] != '' && jsxs(Fragment, {
                                                        'children': [
                                                            jX(0x1a1),
                                                            b1[0x1][jX(0x2e2)]
                                                        ]
                                                    })
                                                ]
                                            }, jX(0x3a5)) : jsxs(Text, {
                                                'style': [az[jX(0x23e)]],
                                                'children': [
                                                    b1[0x1][jX(0x4e5)],
                                                    '\x20',
                                                    b1[0x1][jX(0x2e2)] != '' && jsxs(Fragment, {
                                                        'children': [
                                                            jX(0xdc),
                                                            b1[0x1][jX(0x2e2)]
                                                        ]
                                                    })
                                                ]
                                            }, jX(0x31d)),
                                            jsx(Text, {
                                                'style': az['tableCellNameContent'],
                                                'children': b1[0x1][jX(0x1af)]
                                            }, jX(0x1af))
                                        ]
                                    }, jX(0x447)),
                                    jsx(Text, {
                                        'style': az[jX(0x1e9)],
                                        'children': b1[0x1]['quantity']
                                    }, jX(0x1a9)),
                                    jsxs(Text, {
                                        'style': az[jX(0x1e9)],
                                        'children': [
                                            'Rs.',
                                            Math[jX(0x1f0)](b1[0x1]['price'] * (0x1 + 0.01 * (b1[0x1][jX(0x2b2)] ?? 0x0)))[jX(0x1f6)](jX(0x233))
                                        ]
                                    }, jX(0x2ec)),
                                    a2[jX(0x294)] != 0x0 && jsxs(Text, {
                                        'style': az[jX(0x1e9)],
                                        'children': [
                                            a2[jX(0x294)],
                                            '\x20%'
                                        ]
                                    }, jX(0x2c3)),
                                    jsxs(Text, {
                                        'style': az['tableCell'],
                                        'children': [
                                            jX(0x467),
                                            Math['round'](b1[0x1][jX(0xdd)] * (0x1 + 0.01 * (b1[0x1][jX(0x2b2)] ?? 0x0)) * b1[0x1][jX(0xd9)] * (0x1 - a2['discount'] * 0.01))[jX(0x1f6)](jX(0x233))
                                        ]
                                    }, jX(0x36f))
                                ]
                            }, jX(0xda));
                        }),
                        jsxs(View, {
                            'style': Object[jW(0x1e7)](a2[jW(0x3dd)])['length'] % 0x2 === 0x0 ? az[jW(0x48c)] : az[jW(0x319)],
                            'children': [
                                jsx(Text, { 'style': az[jW(0x45e)] }, jW(0x194)),
                                jsx(Text, {
                                    'style': [
                                        az[jW(0x43b)],
                                        aT
                                    ],
                                    'children': 'Taxable\x20Value'
                                }, jW(0xf2)),
                                jsx(Text, { 'style': az[jW(0x1e9)] }, jW(0x2c2)),
                                jsx(Text, { 'style': az[jW(0x1e9)] }, jW(0x152)),
                                a2[jW(0x294)] != 0x0 && jsx(Text, { 'style': az[jW(0x1e9)] }, jW(0x49e)),
                                jsxs(Text, {
                                    'style': [
                                        az[jW(0x43b)],
                                        aU
                                    ],
                                    'children': [
                                        jW(0x467),
                                        Math[jW(0x1f0)](a2[jW(0x26c)] * (0x1 - a2[jW(0x294)] * 0.01))[jW(0x1f6)](jW(0x233))
                                    ]
                                }, 'blank5')
                            ]
                        }, 'nested-view-7'),
                        jsxs(View, {
                            'style': Object[jW(0x1e7)](a2[jW(0x3dd)])['length'] % 0x2 === 0x0 ? az[jW(0x319)] : az['tableRowEven'],
                            'children': [
                                jsx(Text, { 'style': az[jW(0x45e)] }, jW(0x49e)),
                                jsxs(Text, {
                                    'style': [
                                        az[jW(0x43b)],
                                        aV
                                    ],
                                    'children': [
                                        'Tax\x20@\x20',
                                        a2[jW(0x4a4)],
                                        '%'
                                    ]
                                }, jW(0x4f4)),
                                jsx(Text, { 'style': az[jW(0x1e9)] }, jW(0x397)),
                                jsx(Text, { 'style': az['tableCell'] }, jW(0x3ec)),
                                a2[jW(0x294)] != 0x0 && jsx(Text, { 'style': az[jW(0x1e9)] }, 'blank8'),
                                jsxs(Text, {
                                    'style': [
                                        az[jW(0x43b)],
                                        aW
                                    ],
                                    'children': [
                                        jW(0x467),
                                        Math[jW(0x1f0)](a2[jW(0x26c)] * (0x1 - a2['discount'] * 0.01) * a2[jW(0x4a4)] * 0.01)['toLocaleString'](jW(0x233))
                                    ]
                                }, jW(0x2a2))
                            ]
                        }, 'nested-view-8'),
                        jsxs(View, {
                            'style': Object[jW(0x1e7)](a2['items'])[jW(0x421)] % 0x2 === 0x0 ? az['tableRowEven'] : az['tableRowOdd'],
                            'children': [
                                jsx(Text, { 'style': az[jW(0x45e)] }, jW(0x3b2)),
                                jsx(Text, {
                                    'style': [
                                        az[jW(0x43b)],
                                        aX
                                    ],
                                    'children': 'Total\x20Amount'
                                }, jW(0x2a2)),
                                jsx(Text, { 'style': az[jW(0x1e9)] }, 'blank10'),
                                jsx(Text, { 'style': az[jW(0x1e9)] }, jW(0x2e6)),
                                a2[jW(0x294)] != 0x0 && jsx(Text, { 'style': az[jW(0x1e9)] }, jW(0x21b)),
                                jsxs(Text, {
                                    'style': [
                                        az['tableCellTotals'],
                                        aY
                                    ],
                                    'children': [
                                        jW(0x467),
                                        Math[jW(0x1f0)](a2[jW(0x26c)] * (0x1 + a2[jW(0x4a4)] * 0.01) * (0x1 - a2['discount'] * 0.01))[jW(0x1f6)]('en-IN')
                                    ]
                                }, 'blank13')
                            ]
                        }, jW(0x219))
                    ]
                }, 'nested-view-3'),
                a2['additionalInfo'] !== '' && jsxs(View, {
                    'children': [
                        jsx(Text, {
                            'style': az[jW(0x396)],
                            'children': jW(0x178)
                        }, jW(0x3d1)),
                        jsx(Text, {
                            'style': az[jW(0x48a)],
                            'children': '\x0a'
                        }, jW(0x21b)),
                        jsx(Text, {
                            'style': az[jW(0x306)],
                            'children': a2[jW(0x48e)]
                        }, jW(0xf8))
                    ]
                }, jW(0x260)),
                jsx(Text, {
                    'style': az[jW(0x48a)],
                    'children': '\x0a\x0a'
                }, 'blank14'),
                a2[jW(0x306)] !== '' && jsxs(View, {
                    'children': [
                        jsx(Text, {
                            'style': az[jW(0x396)],
                            'children': jW(0x247)
                        }, 'termsandconditions'),
                        jsx(Text, {
                            'style': az[jW(0x48a)],
                            'children': '\x0a'
                        }, 'blank13'),
                        jsxs(Text, {
                            'style': az[jW(0x306)],
                            'children': [
                                a2[jW(0x306)],
                                '\x20',
                                '\x0a'
                            ]
                        }, jW(0x301))
                    ]
                }, 'nested-view-11'),
                a3 && jsxs(Fragment, {
                    'children': [
                        jsx(Text, b0, jW(0x16e)),
                        jsx(Image, {
                            'style': az[jW(0x2fd)],
                            'src': jW(0x119)
                        }, jW(0x42c))
                    ]
                }),
                aM
            ]
        }, jW(0x47f))
    }, 'quotationpdfdocument');
}
const a50eW = async ({
        request: g,
        params: h
    }) => {
        const jY = a50gp;
        try {
            await a50dH(g);
            const i = await g[jY(0x236)](), j = new URL(g[jY(0x33a)]), k = j['searchParams'][jY(0x23c)](jY(0x1ab)) || jY(0x406), l = j[jY(0x40d)]['get']('showCustomerList'), m = j[jY(0x40d)]['get'](jY(0x4d3)) || 'quotation';
            if (k === 'true') {
                if (m === jY(0x3f7))
                    await a50dx(i);
                else {
                    if (m === jY(0x392))
                        await a50dx(i, jY(0x192), 'challans');
                    else {
                        console[jY(0x362)](jY(0x320));
                        const u = {};
                        u[jY(0x23f)] = 0x1f4;
                        throw new Response('Internal\x20server\x20error', u);
                    }
                }
                await a50dy({
                    'by': i['madeby'],
                    'action': m + jY(0x163),
                    'result': jY(0x20c),
                    'when': new Date()[jY(0x137)]()
                }, 'unnamed', jY(0x15c));
            }
            let n;
            const o = { ...i }, p = { ...i };
            if (m === 'quotation')
                n = await renderToStream(a50eV(o, l === jY(0x288) ? ![] : !![]));
            else
                n = await renderToStream(a50eU(p));
            let q = await new Promise((v, w) => {
                const k0 = jY;
                let x = [];
                n['on']('data', y => {
                    const jZ = a50b;
                    x[jZ(0x28b)](y);
                }), n['on'](k0(0x211), () => {
                    v(Buffer['concat'](x));
                }), n['on'](k0(0x362), w);
            });
            const r = {};
            r[jY(0x1fb)] = jY(0x33f);
            let s = new Headers(r);
            const t = {};
            return t[jY(0x23f)] = 0xc8, t[jY(0x385)] = s, new Response(new Uint8Array(q), t);
        } catch (v) {
            console['error'](jY(0x1c2), v);
            const w = {};
            w['status'] = 0x1f4;
            throw new Response(jY(0x394), w);
        }
    }, a50eX = {};
a50eX[a50gp(0x27a)] = null, a50eX['action'] = a50eW;
const a50eY = {};
a50eY['value'] = 'Module';
const a50eZ = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50eX, Symbol[a50gp(0x20d)], a50eY));
function a50f0() {
    const k1 = a50gp, f = useFetcher(), g = f['state'] === k1(0x40b), h = useNavigate(), {
            setAccessToken: i,
            setProfile: j,
            setGQuote: k,
            theme: l,
            toggleTheme: m,
            appName: n
        } = a50c6(), {addNotifications: o} = a50c8();
    useEffect(() => {
        const k2 = k1;
        var u, v, w, x, y, z, A;
        if ((u = f[k2(0x452)]) == null ? void 0x0 : u[k2(0x15a)]) {
            i(f[k2(0x452)][k2(0x15a)]), localStorage[k2(0x395)](k2(0x1df), 'y');
            if ((v = f[k2(0x452)]) == null ? void 0x0 : v[k2(0x285)])
                h('/dashboard/welcome');
            else
                h(k2(0x110));
            o({
                'title': k2(0x4d8),
                'message': k2(0x25d) + ((x = (w = f[k2(0x452)]) == null ? void 0x0 : w[k2(0x465)][k2(0x1cd)]) == null ? void 0x0 : x[k2(0x10d)]())
            });
        }
        if ((y = f[k2(0x452)]) == null ? void 0x0 : y[k2(0x465)])
            j(B => {
                const k3 = k2;
                var C;
                const D = {
                    ...B,
                    ...(C = f[k3(0x452)]) == null ? void 0x0 : C['profile']
                };
                return D;
            });
        if ((z = f[k2(0x452)]) == null ? void 0x0 : z[k2(0x285)])
            k((A = f[k2(0x452)]) == null ? void 0x0 : A[k2(0x285)]);
        else {
            if (typeof (f == null ? void 0x0 : f['data']) === k2(0x107)) {
                const B = {};
                B[k2(0x290)] = k2(0x29b), B[k2(0x367)] = (f == null ? void 0x0 : f['data']) || '', o(B);
            }
        }
    }, [f[k1(0x452)]]), useEffect(() => {
        const k4 = k1;
        localStorage[k4(0x24e)](k4(0x1cc)) || localStorage[k4(0x395)](k4(0x1cc), k4(0x4bd));
    });
    const p = {};
    p[k1(0x349)] = '' + (l === k1(0x116) ? k1(0x45a) : k1(0x445));
    const q = {};
    q[k1(0x40a)] = 'flex\x20justify-center\x20font-bold\x20text-2xl\x20text-textPrimary', q[k1(0x26a)] = k1(0x450);
    const r = {};
    r[k1(0x4e5)] = k1(0x1cd), r[k1(0x4d3)] = k1(0x32f), r[k1(0x232)] = k1(0x31e), r[k1(0x40a)] = 'w-full\x20my-3\x20p-3\x20border\x20border-border\x20bg-background\x20text-textPrimary', r[k1(0x230)] = k1(0x1cd);
    const s = {};
    s[k1(0x4e5)] = k1(0x1e3), s[k1(0x4d3)] = k1(0x1e3), s['placeholder'] = 'Password', s['className'] = k1(0x256), s[k1(0x230)] = 'password';
    const t = {};
    return t[k1(0x40a)] = k1(0x272), jsx(Fragment, {
        'children': jsxs(k1(0x426), {
            'className': k1(0x2a0),
            'children': [
                jsxs('div', {
                    'className': k1(0x3b7),
                    'children': [
                        jsx(k1(0x426), {
                            'className': k1(0x1b3),
                            'children': jsxs(k1(0x426), {
                                'className': 'flex\x20text-4xl\x20text-textPrimary\x20justify-center\x20font-Satisfy',
                                'children': [
                                    jsx(k1(0x426), { 'children': n[k1(0x24b)](0x0, 0x3) }),
                                    jsx(k1(0x426), { 'children': n[0x3] }),
                                    jsx(k1(0x426), { 'children': n['slice'](0x4) })
                                ]
                            })
                        }),
                        jsx(k1(0x426), {
                            'className': k1(0x448),
                            'children': jsx(k1(0x4ec), {
                                'onClick': m,
                                'className': k1(0x16c),
                                'children': jsx(SunMoon, p)
                            })
                        })
                    ]
                }),
                jsx(f[k1(0x14b)], {
                    'method': 'post',
                    'action': k1(0x4ce),
                    'children': jsx(k1(0x426), {
                        'className': 'min-h-screen\x20flex\x20justify-center\x20items-center',
                        'children': jsxs(k1(0x426), {
                            'className': 'bg-headerBackground\x20p-8\x20shadow-lg\x20w-[25%]',
                            'children': [
                                jsx(k1(0x426), q),
                                jsx('input', r),
                                jsx(k1(0x43e), s),
                                jsx('button', {
                                    'type': 'submit',
                                    'disabled': g,
                                    'className': k1(0x3a2),
                                    'children': g ? jsxs(k1(0x4ea), {
                                        'className': k1(0x214),
                                        'children': [
                                            jsx(Loader, t),
                                            k1(0x4f6)
                                        ]
                                    }) : 'Login'
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
const a50f1 = {};
a50f1[a50gp(0x27a)] = null, a50f1[a50gp(0x18b)] = a50f0;
const a50f2 = {};
a50f2[a50gp(0x2ce)] = a50gp(0x3c8);
const a50f3 = Object[a50gp(0xd3)](Object[a50gp(0x32c)](a50f1, Symbol[a50gp(0x20d)], a50f2)), a50f4 = {};
a50f4[a50gp(0x49d)] = a50gp(0x462), a50f4[a50gp(0x44a)] = [a50gp(0x14d)], a50f4[a50gp(0x240)] = [];
const a50f5 = {};
a50f5['id'] = a50gp(0x3af), a50f5['parentId'] = void 0x0, a50f5[a50gp(0x2af)] = '', a50f5[a50gp(0x37a)] = void 0x0, a50f5[a50gp(0x436)] = void 0x0, a50f5[a50gp(0x49a)] = ![], a50f5[a50gp(0x289)] = ![], a50f5[a50gp(0x1f3)] = ![], a50f5[a50gp(0x1ad)] = ![], a50f5[a50gp(0x1e5)] = ![], a50f5[a50gp(0x49d)] = a50gp(0x2ee), a50f5[a50gp(0x44a)] = [
    a50gp(0x14d),
    a50gp(0x370),
    '/assets/notificationContext-DDeSlUs6.js',
    a50gp(0x4d4),
    a50gp(0x2f9)
], a50f5[a50gp(0x240)] = [a50gp(0x3ea)];
const a50f6 = {};
a50f6['id'] = a50gp(0x27e), a50f6[a50gp(0x2b9)] = a50gp(0x2a1), a50f6['path'] = a50gp(0x29a), a50f6[a50gp(0x37a)] = void 0x0, a50f6[a50gp(0x436)] = void 0x0, a50f6[a50gp(0x49a)] = ![], a50f6[a50gp(0x289)] = ![], a50f6[a50gp(0x1f3)] = ![], a50f6['hasClientLoader'] = ![], a50f6['hasErrorBoundary'] = ![], a50f6[a50gp(0x49d)] = a50gp(0xfc), a50f6['imports'] = [
    a50gp(0x14d),
    a50gp(0x370),
    a50gp(0x4b2),
    a50gp(0x4d4),
    a50gp(0x4e7),
    a50gp(0x2f9),
    a50gp(0x29c),
    a50gp(0x16b),
    a50gp(0x389),
    a50gp(0xe9)
], a50f6[a50gp(0x240)] = [];
const a50f7 = {};
a50f7['id'] = 'routes/dashboard.quotations.create', a50f7[a50gp(0x2b9)] = a50gp(0x468), a50f7[a50gp(0x2af)] = a50gp(0x29a), a50f7[a50gp(0x37a)] = void 0x0, a50f7[a50gp(0x436)] = void 0x0, a50f7[a50gp(0x49a)] = ![], a50f7[a50gp(0x289)] = ![], a50f7['hasClientAction'] = ![], a50f7[a50gp(0x1ad)] = ![], a50f7[a50gp(0x1e5)] = ![], a50f7[a50gp(0x49d)] = a50gp(0x416), a50f7['imports'] = [
    a50gp(0x461),
    a50gp(0x14d),
    a50gp(0x370),
    '/assets/createLucideIcon-BfjMWJ_G.js',
    '/assets/centralFetcher-8HUxmdkN.js',
    a50gp(0x4d4),
    a50gp(0xde),
    a50gp(0x29c),
    '/assets/form-fields-B8cx7cWx.js'
], a50f7[a50gp(0x240)] = [];
const a50f8 = {};
a50f8['id'] = 'routes/dashboard.settings.password', a50f8[a50gp(0x2b9)] = a50gp(0x15b), a50f8[a50gp(0x2af)] = a50gp(0x1e3), a50f8[a50gp(0x37a)] = void 0x0, a50f8[a50gp(0x436)] = void 0x0, a50f8[a50gp(0x49a)] = ![], a50f8[a50gp(0x289)] = ![], a50f8[a50gp(0x1f3)] = ![], a50f8[a50gp(0x1ad)] = ![], a50f8['hasErrorBoundary'] = ![], a50f8[a50gp(0x49d)] = '/assets/dashboard.settings.password-BajRuTJz.js', a50f8[a50gp(0x44a)] = [
    a50gp(0x14d),
    '/assets/centralFetcher-8HUxmdkN.js',
    a50gp(0x370),
    a50gp(0x433),
    a50gp(0x2f9)
], a50f8['css'] = [];
const a50f9 = {};
a50f9['id'] = a50gp(0x16a), a50f9[a50gp(0x2b9)] = a50gp(0x15b), a50f9[a50gp(0x2af)] = a50gp(0x465), a50f9[a50gp(0x37a)] = void 0x0, a50f9[a50gp(0x436)] = void 0x0, a50f9['hasAction'] = ![], a50f9[a50gp(0x289)] = ![], a50f9[a50gp(0x1f3)] = ![], a50f9[a50gp(0x1ad)] = ![], a50f9['hasErrorBoundary'] = ![], a50f9[a50gp(0x49d)] = a50gp(0x4b3), a50f9[a50gp(0x44a)] = [
    '/assets/components-CmNGJ9Db.js',
    '/assets/centralFetcher-8HUxmdkN.js',
    a50gp(0x370),
    a50gp(0x433),
    a50gp(0x29c),
    a50gp(0x125),
    a50gp(0x16b),
    a50gp(0xe9),
    a50gp(0xde),
    a50gp(0x2f9)
], a50f9['css'] = [];
const a50fa = {};
a50fa['id'] = 'routes/dashboard.complaints.show', a50fa[a50gp(0x2b9)] = a50gp(0x2a1), a50fa[a50gp(0x2af)] = 'show', a50fa[a50gp(0x37a)] = void 0x0, a50fa[a50gp(0x436)] = void 0x0, a50fa[a50gp(0x49a)] = ![], a50fa['hasLoader'] = ![], a50fa[a50gp(0x1f3)] = ![], a50fa[a50gp(0x1ad)] = ![], a50fa[a50gp(0x1e5)] = ![], a50fa[a50gp(0x49d)] = a50gp(0x1b1), a50fa['imports'] = [
    a50gp(0x14d),
    a50gp(0x42b),
    '/assets/gcontext-LWGqsL34.js',
    a50gp(0x4b2),
    a50gp(0x433),
    a50gp(0xe6),
    a50gp(0x2f9),
    '/assets/use-resolve-button-type-D3wVu0_O.js',
    a50gp(0x389),
    a50gp(0xe9),
    '/assets/form-fields-B8cx7cWx.js',
    a50gp(0x125),
    a50gp(0x461),
    a50gp(0x4d4),
    a50gp(0xde),
    a50gp(0x4e7)
], a50fa[a50gp(0x240)] = [];
const a50fb = {};
a50fb['id'] = 'routes/dashboard.quotations.show', a50fb[a50gp(0x2b9)] = a50gp(0x468), a50fb[a50gp(0x2af)] = a50gp(0x245), a50fb[a50gp(0x37a)] = void 0x0, a50fb[a50gp(0x436)] = void 0x0, a50fb[a50gp(0x49a)] = ![], a50fb[a50gp(0x289)] = ![], a50fb[a50gp(0x1f3)] = ![], a50fb[a50gp(0x1ad)] = ![], a50fb['hasErrorBoundary'] = ![], a50fb[a50gp(0x49d)] = '/assets/dashboard.quotations.show-CfsfRXa_.js', a50fb[a50gp(0x44a)] = [
    '/assets/components-CmNGJ9Db.js',
    a50gp(0x42b),
    a50gp(0x370),
    a50gp(0x4b2),
    '/assets/notificationContext-DDeSlUs6.js',
    '/assets/index-BxE89LvT.js',
    '/assets/createLucideIcon-BfjMWJ_G.js',
    a50gp(0x29c),
    a50gp(0x389),
    a50gp(0xe9),
    a50gp(0x16b),
    a50gp(0x125),
    a50gp(0x461),
    a50gp(0x4d4),
    '/assets/switch-SU3PNcDj.js',
    a50gp(0x4e7)
], a50fb[a50gp(0x240)] = [];
const a50fc = {};
a50fc['id'] = a50gp(0x2d8), a50fc[a50gp(0x2b9)] = a50gp(0x149), a50fc['path'] = a50gp(0x29a), a50fc[a50gp(0x37a)] = void 0x0, a50fc[a50gp(0x436)] = void 0x0, a50fc[a50gp(0x49a)] = ![], a50fc[a50gp(0x289)] = ![], a50fc['hasClientAction'] = ![], a50fc[a50gp(0x1ad)] = ![], a50fc[a50gp(0x1e5)] = ![], a50fc['module'] = '/assets/dashboard.challan.create-8IYqLHWE.js', a50fc[a50gp(0x44a)] = [
    a50gp(0x14d),
    '/assets/gcontext-LWGqsL34.js',
    a50gp(0x461),
    a50gp(0x4b2),
    a50gp(0x4d4),
    '/assets/listbox-DYEW970L.js',
    a50gp(0x2f9),
    a50gp(0xde),
    '/assets/use-resolve-button-type-D3wVu0_O.js',
    '/assets/form-fields-B8cx7cWx.js',
    a50gp(0x389),
    a50gp(0xe9)
], a50fc[a50gp(0x240)] = [];
const a50fd = {};
a50fd['id'] = a50gp(0x2cd), a50fd['parentId'] = a50gp(0x149), a50fd[a50gp(0x2af)] = a50gp(0x245), a50fd[a50gp(0x37a)] = void 0x0, a50fd[a50gp(0x436)] = void 0x0, a50fd[a50gp(0x49a)] = ![], a50fd[a50gp(0x289)] = ![], a50fd['hasClientAction'] = ![], a50fd[a50gp(0x1ad)] = ![], a50fd[a50gp(0x1e5)] = ![], a50fd[a50gp(0x49d)] = '/assets/dashboard.challan.show-GOZiQSR7.js', a50fd[a50gp(0x44a)] = [
    a50gp(0x14d),
    a50gp(0xe6),
    a50gp(0x370),
    a50gp(0x4b2),
    '/assets/notificationContext-DDeSlUs6.js',
    a50gp(0x461),
    a50gp(0x4e7),
    a50gp(0x2f9),
    a50gp(0x29c),
    a50gp(0x389),
    '/assets/focus-management-egUUHrnq.js',
    '/assets/form-fields-B8cx7cWx.js',
    a50gp(0x125),
    '/assets/proxy-2R9rtCoz.js',
    a50gp(0xde)
], a50fd[a50gp(0x240)] = [];
const a50fe = {};
a50fe['id'] = 'routes/dashboard.challanhome', a50fe[a50gp(0x2b9)] = a50gp(0x175), a50fe[a50gp(0x2af)] = a50gp(0x422), a50fe[a50gp(0x37a)] = void 0x0, a50fe['caseSensitive'] = void 0x0, a50fe[a50gp(0x49a)] = ![], a50fe['hasLoader'] = ![], a50fe[a50gp(0x1f3)] = ![], a50fe[a50gp(0x1ad)] = ![], a50fe['hasErrorBoundary'] = ![], a50fe[a50gp(0x49d)] = a50gp(0x388), a50fe[a50gp(0x44a)] = [], a50fe['css'] = [];
const a50ff = {};
a50ff['id'] = a50gp(0x2a1), a50ff[a50gp(0x2b9)] = a50gp(0x175), a50ff['path'] = a50gp(0xe1), a50ff[a50gp(0x37a)] = void 0x0, a50ff[a50gp(0x436)] = void 0x0, a50ff[a50gp(0x49a)] = ![], a50ff[a50gp(0x289)] = ![], a50ff[a50gp(0x1f3)] = ![], a50ff[a50gp(0x1ad)] = ![], a50ff[a50gp(0x1e5)] = ![], a50ff[a50gp(0x49d)] = a50gp(0xfe), a50ff[a50gp(0x44a)] = [
    a50gp(0x14d),
    '/assets/header-Bw-5JlZp.js',
    '/assets/gcontext-LWGqsL34.js',
    a50gp(0x4b2),
    a50gp(0x29c),
    a50gp(0x389),
    a50gp(0xe9),
    '/assets/createLucideIcon-BfjMWJ_G.js',
    a50gp(0x1a5)
], a50ff[a50gp(0x240)] = [];
const a50fg = {};
a50fg['id'] = a50gp(0x468), a50fg[a50gp(0x2b9)] = a50gp(0x175), a50fg[a50gp(0x2af)] = a50gp(0x343), a50fg[a50gp(0x37a)] = void 0x0, a50fg[a50gp(0x436)] = void 0x0, a50fg['hasAction'] = ![], a50fg['hasLoader'] = ![], a50fg[a50gp(0x1f3)] = ![], a50fg['hasClientLoader'] = ![], a50fg[a50gp(0x1e5)] = ![], a50fg[a50gp(0x49d)] = a50gp(0x121), a50fg[a50gp(0x44a)] = [
    a50gp(0x14d),
    '/assets/header-Bw-5JlZp.js',
    a50gp(0x370),
    '/assets/centralFetcher-8HUxmdkN.js',
    '/assets/use-resolve-button-type-D3wVu0_O.js',
    a50gp(0x389),
    a50gp(0xe9),
    a50gp(0x2f9),
    a50gp(0x1a5)
], a50fg['css'] = [];
const a50fh = {};
a50fh['id'] = a50gp(0x15b), a50fh[a50gp(0x2b9)] = a50gp(0x175), a50fh[a50gp(0x2af)] = a50gp(0x4ae), a50fh[a50gp(0x37a)] = void 0x0, a50fh['caseSensitive'] = void 0x0, a50fh[a50gp(0x49a)] = ![], a50fh[a50gp(0x289)] = ![], a50fh[a50gp(0x1f3)] = ![], a50fh[a50gp(0x1ad)] = ![], a50fh['hasErrorBoundary'] = ![], a50fh[a50gp(0x49d)] = a50gp(0x4be), a50fh[a50gp(0x44a)] = [
    a50gp(0x14d),
    '/assets/header-Bw-5JlZp.js',
    a50gp(0x370),
    a50gp(0x4b2),
    '/assets/use-resolve-button-type-D3wVu0_O.js',
    a50gp(0x389),
    a50gp(0xe9),
    '/assets/createLucideIcon-BfjMWJ_G.js',
    a50gp(0x1a5)
], a50fh['css'] = [];
const a50fi = {};
a50fi['id'] = a50gp(0x3c3), a50fi[a50gp(0x2b9)] = a50gp(0x3af), a50fi['path'] = a50gp(0x2cc), a50fi[a50gp(0x37a)] = void 0x0, a50fi[a50gp(0x436)] = void 0x0, a50fi[a50gp(0x49a)] = !![], a50fi[a50gp(0x289)] = ![], a50fi[a50gp(0x1f3)] = ![], a50fi[a50gp(0x1ad)] = ![], a50fi[a50gp(0x1e5)] = ![], a50fi['module'] = a50gp(0x28e), a50fi[a50gp(0x44a)] = [], a50fi[a50gp(0x240)] = [];
const a50fj = {};
a50fj['id'] = 'routes/dashboard.challan', a50fj[a50gp(0x2b9)] = 'routes/dashboard', a50fj[a50gp(0x2af)] = a50gp(0x392), a50fj['index'] = void 0x0, a50fj[a50gp(0x436)] = void 0x0, a50fj[a50gp(0x49a)] = ![], a50fj[a50gp(0x289)] = ![], a50fj['hasClientAction'] = ![], a50fj[a50gp(0x1ad)] = ![], a50fj[a50gp(0x1e5)] = ![], a50fj[a50gp(0x49d)] = '/assets/dashboard.challan-Cwb8PZjy.js', a50fj[a50gp(0x44a)] = [
    '/assets/components-CmNGJ9Db.js',
    a50gp(0x17b),
    a50gp(0x370),
    a50gp(0x4b2),
    '/assets/use-resolve-button-type-D3wVu0_O.js',
    a50gp(0x389),
    a50gp(0xe9),
    a50gp(0x2f9),
    '/assets/sun-moon-BGv87DqZ.js'
], a50fj['css'] = [];
const a50fk = {};
a50fk['id'] = a50gp(0x354), a50fk[a50gp(0x2b9)] = a50gp(0x175), a50fk['path'] = a50gp(0x17d), a50fk[a50gp(0x37a)] = void 0x0, a50fk[a50gp(0x436)] = void 0x0, a50fk[a50gp(0x49a)] = ![], a50fk[a50gp(0x289)] = ![], a50fk[a50gp(0x1f3)] = ![], a50fk[a50gp(0x1ad)] = ![], a50fk['hasErrorBoundary'] = ![], a50fk[a50gp(0x49d)] = a50gp(0x489), a50fk[a50gp(0x44a)] = [
    a50gp(0x14d),
    a50gp(0x370),
    a50gp(0x4d4)
], a50fk['css'] = [];
const a50fl = {};
a50fl['id'] = a50gp(0x46a), a50fl['parentId'] = a50gp(0x3af), a50fl[a50gp(0x2af)] = 'api/complaints', a50fl[a50gp(0x37a)] = void 0x0, a50fl[a50gp(0x436)] = void 0x0, a50fl[a50gp(0x49a)] = ![], a50fl[a50gp(0x289)] = !![], a50fl[a50gp(0x1f3)] = ![], a50fl[a50gp(0x1ad)] = ![], a50fl[a50gp(0x1e5)] = ![], a50fl['module'] = a50gp(0x361), a50fl[a50gp(0x44a)] = [], a50fl[a50gp(0x240)] = [];
const a50fm = {};
a50fm['id'] = a50gp(0x37c), a50fm[a50gp(0x2b9)] = a50gp(0x3af), a50fm['path'] = a50gp(0x22f), a50fm[a50gp(0x37a)] = void 0x0, a50fm[a50gp(0x436)] = void 0x0, a50fm[a50gp(0x49a)] = ![], a50fm[a50gp(0x289)] = !![], a50fm['hasClientAction'] = ![], a50fm[a50gp(0x1ad)] = ![], a50fm[a50gp(0x1e5)] = ![], a50fm['module'] = a50gp(0x259), a50fm[a50gp(0x44a)] = [], a50fm[a50gp(0x240)] = [];
const a50fn = {};
a50fn['id'] = a50gp(0x4c6), a50fn[a50gp(0x2b9)] = 'routes/dashboard', a50fn[a50gp(0x2af)] = 'home', a50fn['index'] = void 0x0, a50fn['caseSensitive'] = void 0x0, a50fn[a50gp(0x49a)] = ![], a50fn[a50gp(0x289)] = ![], a50fn['hasClientAction'] = ![], a50fn[a50gp(0x1ad)] = ![], a50fn[a50gp(0x1e5)] = ![], a50fn[a50gp(0x49d)] = '/assets/dashboard.home-Dv0JEIsS.js', a50fn[a50gp(0x44a)] = [
    '/assets/components-CmNGJ9Db.js',
    '/assets/header-Bw-5JlZp.js',
    a50gp(0x370),
    a50gp(0x2f9),
    a50gp(0x4b2),
    a50gp(0x29c),
    a50gp(0x389),
    a50gp(0xe9),
    a50gp(0x1a5)
], a50fn[a50gp(0x240)] = [];
const a50fo = {};
a50fo['id'] = 'routes/api.challans', a50fo[a50gp(0x2b9)] = a50gp(0x3af), a50fo[a50gp(0x2af)] = a50gp(0x4c5), a50fo[a50gp(0x37a)] = void 0x0, a50fo[a50gp(0x436)] = void 0x0, a50fo[a50gp(0x49a)] = ![], a50fo[a50gp(0x289)] = !![], a50fo[a50gp(0x1f3)] = ![], a50fo['hasClientLoader'] = ![], a50fo[a50gp(0x1e5)] = ![], a50fo[a50gp(0x49d)] = a50gp(0x13a), a50fo[a50gp(0x44a)] = [], a50fo[a50gp(0x240)] = [];
const a50fp = {};
a50fp['id'] = a50gp(0x3d5), a50fp[a50gp(0x2b9)] = a50gp(0x3af), a50fp['path'] = a50gp(0x4bc), a50fp['index'] = void 0x0, a50fp[a50gp(0x436)] = void 0x0, a50fp['hasAction'] = !![], a50fp[a50gp(0x289)] = ![], a50fp[a50gp(0x1f3)] = ![], a50fp[a50gp(0x1ad)] = ![], a50fp['hasErrorBoundary'] = ![], a50fp[a50gp(0x49d)] = '/assets/api.password-l0sNRNKZ.js', a50fp['imports'] = [], a50fp[a50gp(0x240)] = [];
const a50fq = {};
a50fq['id'] = 'routes/api.profile', a50fq[a50gp(0x2b9)] = 'root', a50fq[a50gp(0x2af)] = a50gp(0x1b5), a50fq[a50gp(0x37a)] = void 0x0, a50fq[a50gp(0x436)] = void 0x0, a50fq['hasAction'] = !![], a50fq[a50gp(0x289)] = ![], a50fq[a50gp(0x1f3)] = ![], a50fq[a50gp(0x1ad)] = ![], a50fq[a50gp(0x1e5)] = ![], a50fq[a50gp(0x49d)] = a50gp(0x3a9), a50fq[a50gp(0x44a)] = [], a50fq['css'] = [];
const a50fr = {};
a50fr['id'] = a50gp(0x3ce), a50fr['parentId'] = 'root', a50fr[a50gp(0x2af)] = a50gp(0x184), a50fr[a50gp(0x37a)] = void 0x0, a50fr[a50gp(0x436)] = void 0x0, a50fr[a50gp(0x49a)] = ![], a50fr[a50gp(0x289)] = !![], a50fr[a50gp(0x1f3)] = ![], a50fr['hasClientLoader'] = ![], a50fr['hasErrorBoundary'] = ![], a50fr[a50gp(0x49d)] = a50gp(0x3c5), a50fr[a50gp(0x44a)] = [], a50fr['css'] = [];
const a50fs = {};
a50fs['id'] = 'routes/api.delete', a50fs['parentId'] = a50gp(0x3af), a50fs['path'] = a50gp(0x3cf), a50fs[a50gp(0x37a)] = void 0x0, a50fs[a50gp(0x436)] = void 0x0, a50fs[a50gp(0x49a)] = !![], a50fs[a50gp(0x289)] = ![], a50fs[a50gp(0x1f3)] = ![], a50fs[a50gp(0x1ad)] = ![], a50fs['hasErrorBoundary'] = ![], a50fs['module'] = a50gp(0x407), a50fs[a50gp(0x44a)] = [], a50fs[a50gp(0x240)] = [];
function a50a() {
    const k5 = [
        'AgvHza',
        'DgHLBG',
        'l2fZC2v0CY9KyxnOyM9HCMqTx1yZvs1plxeUANm',
        'zwrPDgLUzW',
        'ww91CIbQB3KGAgfZigeGCMLWCgXLigvMzMvJDokaLeNIGjLTihbYB29MlG',
        'BxiTmG',
        'mJzUzhzqshO',
        'DgfIBgvsB3Dpzgq',
        'BxqTnq',
        'AxngzxrJAgLUzW',
        'CM91DgvZl2rHC2HIB2fYzc5XDw90yxrPB25ZlNnOB3C',
        'BMfTzwHZBG',
        'vxnLCM5HBwu',
        'AhjLzG',
        'Dw5RBM93BIbKyxrHihr5CguGD2HPBguGC2f2Aw5NihrVigrI',
        'DgfIBgvdzwXStgLUAW',
        'uxvVDgf0Aw9Uj3mGsg9Tzq',
        'yM9YzgvYihaTmIb3lvSXmcvDigjVCMrLCI1IB3jKzxiGyMCTyMfJA2DYB3vUzcb0zxH0lxrLEhrqCMLTyxj5igzVy3vZoM91DgXPBMuTDgv4DfbYAw1HCNK',
        'zMXLEcbPDgvTCY1Jzw50zxiGDY0ZlZq',
        'zgvSzxrLt25L',
        'rw50zxiGCMvTyxjRCW',
        'msfaiZjtrcnZAMy4nZiZiuaJjIvgreCHqcnaiYqJqeftrey',
        'idaLidK1jsK',
        'qMvPBMCGyxjVDw5KihLVDsbMzwvSCYbSAwTLigeGBg9UzYbLEgHHBguGB2yGCgvHy2uU',
        'q29TCgXHAw50j3mGsg9Tzq',
        'BxqTncbZCgfJzs15ltqGB3zLCMzSB3CTEs1HDxrVigGTw2nHBgmOmtaWDMGTmJiWChGPxsb3lwz1BgW',
        'zgvMAw5LuhjVCgvYDhK',
        'DxnLCIbUB3qGzM91BMq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbWB2LUDgvYlwv2zw50CY1UB25LigLUBgLUzs1IBg9JAYbOlvSYmhb4xsb3lvSYmhb4xsb0CMfUC2zVCM0GCM91BMrLzc1MDwXSigjNlwj1DhrVBLrLEhrqCMLTyxj5ihnOywrVDY1SzYbYAw5NltaGDhjHBNnPDgLVBIbKDxjHDgLVBI0YmdaGzwfZzs1PBI1VDxq',
        'Dgv4Da',
        'uxvHBNrPDhK',
        'CMvTB3zLsxrLBq',
        'BxGTmta',
        'Dg9W',
        'ww914OczCMuGDgHLigDLBNrSzsbNCMf2Axr5ihrOyxqGA2vLChmGDgHPBMDZigDYB3vUzgvKlG',
        'Dg9tDhjPBMC',
        'CxvVDgf0Aw9Uzgf0zxzHBhvL',
        'uxvVDgf0Aw9UifjLBgf0zwqGu2v0DgLUz3m',
        'vgHLCMxIGjLZig1Hz2LJigLUihrOzsb3yxKGEw91ig1HA2uGDgHPBMDZigzLzwWGB2THEs4',
        'CM93CW',
        'DxjS',
        'C29Syxj3Aw5K',
        'zMXLEcbPDgvTCY1Jzw50zxi',
        'Dg9mB3DLCKnHC2u',
        'ChjVzMLSzsb1CgrHDgu',
        'yxbWBgLJyxrPB24VCgrM',
        'Cc0YigjVCMrLCIbIB3jKzxiTyM9YzgvYihCTzNvSBcbIzY1IywnRz3jVDw5K',
        'Dgv4Dc00EgWGzM9UDc1lyxvZAgfUig1Iltq',
        'C3bSAxq',
        'CxvVDgf0Aw9UCW',
        'Dg90ywXPDgvTCW',
        'yw5PBwf0zq',
        'zM9UDfn0EwXL',
        'rxzLBIb0AguGC3rHCNmGzMvLBcbZywzLCIb3AgvUihLVDsbSB29Rigf0ihrOzw0U',
        'DxbZzxj0zwrjza',
        'y29SB3i',
        'B2zM',
        'ww91igHHDMuGysbZBwLSzsb0Agf0ignVDwXKig1HA2uGCM9ZzxmGAMvHBg91CY4',
        'DY0XlZmGzMXLEcbQDxn0Awz5lwvUzcbPDgvTCY1Jzw50zxi',
        'C29YDa',
        'D2fPDa',
        'iZy0nZq4yG',
        'txvRzxnOienOyw5K',
        'l2fWAs9JAgfSBgfUCZ9ZA2LWpq',
        'Ac1Zy3jLzw4GDY1Zy3jLzw4GyMCTyMfJA2DYB3vUza',
        'ww91CIbRAw5KBMvZCYbKB2vZBUkaMxqGyxnRigzVCIbHDhrLBNrPB27IGjrPDcbZAgLUzxmGyw55D2f5lG',
        'CM91DgvZl2rHC2HIB2fYzc53zwXJB21L',
        'y29TCgfUEq',
        'idOG',
        'zMLSDgvY',
        'zNjVBufKzhjLC3m',
        'DxnLCM5HBwuGBM90igzVDw5K',
        'yxbPl2nVBxbSywLUDhm',
        'x2LK',
        'Bwv0yq',
        'CMvTyxjRCW',
        'ww91CIbRAw5KBMvZCYbPC27IGjL0igXVDwtIGjrIDxqGAxqGzwnOB2vZigzVCIbTAwXLCY4',
        'zMXLEeDYB3C',
        'zxHW',
        'l2fZC2v0CY9HCgKUy29TCgXHAw50CY1SmhnouK5lwI5QCW',
        'zxjYB3i',
        'y29SlxnWyw4TncbWltiGyM9YzgvYigjVCMrLCI1IB3jKzxiGyMCTyMfJA2DYB3vUzcb0zxH0lxrLEhrqCMLTyxj5igzVy3vZoM91DgXPBMuTDgv4DfbYAw1HCNK',
        'l2fWAs9KzwXLDgu',
        'u2vJB25KifbHCNr5iefKzhjLC3m',
        'uMvTyxjRCW',
        'BwvZC2fNzq',
        'i0zgrKzgrG',
        'vvjm',
        'zgfZAgjVyxjK',
        'uhjVzMLSzsb1CgrHDgvK',
        'BgLUzuHLAwDODa',
        'u3vJy2vZCY4UlG',
        'z2v0q29UDgv4Da',
        'yw1VDw50DMfSDwu',
        'l2fZC2v0CY9Ny29UDgv4Dc1mv0DXC0WZnc5QCW',
        'u2vHCMnOifbYB2r1y3qUlI4',
        'zxjYB3iGD2HPBguGzgvSzxrPBMCGCxvVDgf0Aw9Uig9YignOywXSyw4Gzgf0ysa6ia',
        'z2v0rMLSDgvYvMfSDwu',
        'u2f2zq',
        'C2f2Aw5NignVBxbSywLUDa',
        'CxvVDgf0Aw9UyNK',
        'BMvZDgvKlxrLEhqTnq',
        'u2vHCMnO',
        'Aw5JBhvKzxm',
        'Aw5KzxG',
        'zgvSzxrPBMCG',
        'CM91DgvZl2fWAs5XDw90yxrPB25Z',
        'y29TCgXHAw5PBMDqyxj0Eq',
        'C2fTzvnPDgu',
        'ww91ihr1CM4Gj2P1C3qGB2THEsCGzgf5CYbPBNrVihbLywnLzNvSig9UzxmU',
        'zMXLEcbMBgv4lwnVBcbPDgvTCY1Jzw50zxi',
        'swyGDgHLihvUAxzLCNnLigHHzcbHigzHDM9YAxrLignVBg9YlcbPDokaMwqGyMuGEw91CIbZB3vSlG',
        'nJGXnZuWyNvABLbz',
        'DMvYC2LVBG',
        'y2HHBgXHBKrHDgfdB3vUDa',
        'AgvHzgvYCW',
        'Dw5PDa',
        'D2vIC2L0zq',
        'l2fZC2v0CY9KyxnOyM9HCMqUy2HHBgXHBMHVBwuTBdbZtLjos1OUANm',
        'l2fZC2v0CY91C2uTDgv4Dc12ywX1zs1eCdHTm1vIrI5QCW',
        'CgfKzgLUzW',
        't3jKzxiGtM86ia',
        'DhjPBq',
        'ndaL',
        'qxzNlIbbzgrVBIaL',
        'CMvSyxrPDMuGDhjHBNnMB3jTig92zxjMBg93lwHPzgrLBIbYB3vUzgvKlwXNigjNlxDOAxrLihrLEhqTBgvMDcbZAgfKB3CTEgWGDhjHBNnPDgLVBI1HBgWGzgf0ys1JBg9Zzwq6DhjHBNnSyxrLlxKTncbKyxrHlwnSB3nLzdPVCgfJAxr5ltaGzgf0ys1LBNrLCJPKDxjHDgLVBI0ZmdaGzgf0ys1LBNrLCJPLyxnLlw91DcbKyxrHlwXLyxzLoMr1CMf0Aw9UltiWmcbKyxrHlwXLyxzLoMvHC2uTAw4GC206BxKTocbZBtP3lwz1BgWGC206Bwf4lxCTBgCGzgf0ys1JBg9Zzwq6C206DhjHBNnSyxrLlxKTmcbKyxrHlwnSB3nLzdPZBtPZy2fSzs05nq',
        'rxnJyxbL',
        'Dgv4Dc9ODg1S',
        'y2HHBgXHBG',
        'vg9KyxKGAxmGysbIBgfUAYbJyw52yxm7ihbHAw50igL0ihDPDgGGEw91CIbKCMvHBxmU',
        'sw50zxjUywWGC2vYDMvYigvYCM9Y',
        'C2v0sxrLBq',
        'zNjVBxrV',
        'yMXHBMS2',
        'rgLZy291BNq',
        'C3rYAw5NAwz5',
        'ww914OczCMuGDgHLihjHCMuGA2LUzcbVzIbWzwfJzwz1Bcb0Agf0igzLzwXZigXPA2uGBwfNAwmU',
        'r2vUzxjHDguGuxvVDgf0Aw9UifberG',
        'tMv3igL0zw0Gy3jLyxrLzcb3AxrOihrOzsbMB2XSB3DPBMCGAwq6ia',
        'yM9Sza',
        'DMvYDgLJywW',
        'DY1MDwXSihnWywnLlxKTmG',
        'z2v0vgLTzq',
        'CLrVA2vU',
        'yMCTyNv0Dg9UihrLEhqTyNv0Dg9Uvgv4DfbYAw1HCNKGChGTncbWEs0XihrLEhqTBgC',
        'ww914OczCMuGDgHLihjLBgLLzIbPBIaNCMvSAwv2zwqUjW',
        'q29UDgfJDcboDw1Izxi',
        'BgLUA25HBwvOC24',
        'BM93',
        'ww914OczCMuGDgHLihzLCNnPB24GB2yGy2fSBsbjihDPC2GGssbJB3vSzcbIB3r0BguU',
        'ww91igfYzsb3Agf0ig1HA2vZicDj4OczBsbVA2f5ig5VDYCGDhj1zs4',
        'l2fZC2v0CY9HCgKUChjVzMLSzs1SmhnouK5lwI5QCW',
        'ms4Gugf5BwvUDcbuzxjTCZOGmtaWjsbHzhzHBMnLlGOYlIbezwXPDMvYEsbty2HLzhvSztOGv2L0AgLUideTmIbKyxLZigfMDgvYihjLy2vPDMLUzYb0AguGue8GywXVBMCGD2L0Acb0AguGqwr2yw5Jzs4kmY4GmtiGtw9UDgHZig9MzI1ZAxrLihDHCNjHBNr5igzYB20GDgHLie9ftsWGyxmGCgvYihrOzwLYihrLCM1ZlGO0lIbwywXPzgL0EtOGvgHPCYbVzMzLCIbPCYb2ywXPzcbMB3iGmZaGzgf5CY4',
        'ugfNzq',
        'sfno',
        'rMfPBhvYzs4UlG',
        'q3vYCMvUDcbqyxnZD29Yzca',
        'CM9VDa',
        'vgf4ywjSzsbwywX1ztO',
        'rMfPBgvKihrVihjLzNjLC2GGywnJzxnZihrVA2vU',
        'yMXHBMS4',
        'Ag9Tzq',
        'zM9VDgvYDMLLDW',
        'zxjYB3iGD2HPBguGDxbKyxrPBMCGCgfZC3DVCMqGoIa',
        'ww914OczCMuGBM90igP1C3qGC3DLzxtIGjr5B3xIGjLYzsbZB3vSlxn3zwv0lG',
        'ywjZB2X1DguGDY1MDwXSigzSzxGGyMCTAgvHzgvYqMfJA2DYB3vUzcbWEs0Y',
        'ww91igrVBUkaMxqGANvZDcb3ywXRigLUDg8GC29Tzw9UzEkaMxmGBgLMzEkaLhLVDsb3yxjTigL0lG',
        'wwfZAhDHBNq',
        'Dg92ywX1zq',
        'C2v0sxrLBxm',
        'q29TCgXHAw5PBMCGugfYDhKGtMfTzq',
        'DxnLCMLW',
        'rgvSzxrL',
        'ywjZB2X1DguGCMLNAhqTmtaGEI0XmcbTDc0YihCTndGGB3jPz2LUlxrVCc1YAwDODcbKAxzPzguTEsbKAxzPzguTyM9YzgvYihjVDw5KzwqTC20GyMCTyMfJA2DYB3vUzcbZAgfKB3CTBgCGCMLUzY0XihjPBMCTyMXHy2SVnsb0CMfUC2L0Aw9UigzVy3vZoM91DgXPBMuTBM9UzsbKyxrHlvTJBg9ZzwrDoNnJywXLltK1igrHDgeTw2nSB3nLzf06DhjHBNnMB3jTigrHDgeTw2nSB3nLzf06B3bHy2L0Es0WigrHDgeTw2vUDgvYxtPKDxjHDgLVBI0XmdaGzgf0ys1BBgvHDMvDoMr1CMf0Aw9UltC1igrHDgeTw2vUDgvYxtPLyxnLlw91DcbKyxrHlvTSzwf2zv06zwfZzs1PBG',
        'y3jLyxrLt2jQzwn0vvjm',
        'CMvSyxrPDMuGEI0Xma',
        'CMvSyxrPDMuGAw5SAw5LlwjSB2nRihrLEhqTBgvMDa',
        'CM91DgvZl2fWAs5ZyxzLy29TCgXHAw50',
        'y2HHBgXHBNm',
        'l2fZC2v0CY9HCgKUCMvMCMvZAc1SmhnouK5lwI5QCW',
        'Dgv4Dc10zxH0uhjPBwfYEsbTDc00ihnWywnLlxKTna',
        'y29TCgfUEurLDgfPBhm',
        'tw9KDwXL',
        'l2rHC2HIB2fYzc9Zzxr0Aw5NCY9WCM9MAwXL',
        'zMXLEcbIzY1OzwfKzxjcywnRz3jVDw5K',
        'sgKUlI5hDw5Qyw4UlI5kAsdWN5glipcFMim',
        'zxHWAxjLC0LU',
        'zxjYB3iGD2HPBguGDxbKyxrPBMCGzg9JDw1LBNqGDg8Gzgf0ywjHC2uGoIa',
        'CM91DgvZl2fWAs5YzwzYzxnO',
        'yxbPl2rLBgv0zq',
        'y29SlxnWyw4TmYbWltiGyM9YzgvYigjVCMrLCI1IB3jKzxiGyMCTyMfJA2DYB3vUzcb0zxH0lxrLEhrqCMLTyxj5igzVy3vZoM91DgXPBMuTDgv4DfbYAw1HCNK',
        'BM90zq',
        'q3jLyxrLienVBxbSywLUDa',
        'swyGBg92zsbJB3vSzcb3CML0zsbWB2v0CNKSihLVDxiGBMfTzsb3B3vSzcbIzsbLDMvYEsbTzxrHCgHVCI4',
        'z2v0rgf0zq',
        'CM91DgvZl2fWAs5WyxnZD29Yza',
        'u2HVDYbdDxn0B21LCIbmAxn0CYa6ia',
        'zxjYB3iGD2HPBguGzgvSzxrPBMCGzNjVBsbKyxrHyMfZzsa6ia',
        'Cc0X',
        'y29UDgfJDhzHBhvL',
        'zhvYyxrPB24',
        'CM91DgvZl2fWAs5ZzwfYy2G',
        'r2vUzxjHBcbqCM9MAwXLifnLDhrPBMDZ',
        'AxrLBxm',
        'BxqTna',
        'zw50CNK',
        'DY1BmJKLxsb6lteWigfIC29SDxrLihrVCc1MDwXSic1Szwz0ltaGCMLNAhqTmcbIzY1IDxr0B25iB3zLCIbIB3jKzxiGyM9YzgvYlwjVCMrLCIbVDMvYzMXVDY15lwf1Dg8GBwf4lwGToty',
        'mNb4ihnVBgLKicneq0q3rdC',
        'Dgv4Dc1ZBsbMB250lxnLBwLIB2XKig1SlteWig1Ylti',
        'DxnLCKfNzw50',
        'q29TCgXHAw50ifr5Cgu',
        'y29TCgfUEwrLDgfPBa',
        'zMXLEcbQDxn0Awz5lwjLDhDLzw4GAxrLBxmTy2vUDgvYigfSAwDUlw1PzgrSzsbTEc0XmcbWEs0Y',
        'Cc0YigjVCMrLCIbIB3jKzxiTyM9YzgvYihCTigGTmtaGyMCTyMfJA2DYB3vUza',
        'qxjYB3DeB3DU',
        'z3jPzcbNCMLKlwnVBhmTmIbNyxaTncb0zxH0lxrLEhrqCMLTyxj5ig10ltq',
        'l2fZC2v0CY9YB290lurfCeXklxrklMnZCW',
        'Dw5Zzxq',
        'yMXHBMS3',
        'rw50zxiGvgvYBxmGyw5KienVBMrPDgLVBNmUlI4UlG',
        'ww914OczCMuGDgHLihnLy3jLDcbYzwnPCguGzM9YignHBg0U',
        'D2f0zxjTyxjR',
        'Dg9bCNjHEq',
        'ww91ignHCNj5igTPBMrUzxnZigXPA2uGC29TzsbWzw9WBguGy2fYCNKGDw1ICMvSBgfZ4OcuywX3yxLZihjLywr5lG',
        'DJnFzMv0y2HLCLbLCNnPC3q',
        'uxvVDgf0Aw9Uie5VoG',
        'AM9PBG',
        'DMLLD3bVCNq',
        'zM9VDgvYCgfNzw5V',
        'CxvVDgf0Aw9U',
        'CM93',
        'Dgv4Dc1IyxnLigzVBNqTC2vTAwjVBgqGDgv4Dc1NCMf5ltKWma',
        'BxqTncbMBgv4ihnWywnLlxGTncbPDgvTCY1Jzw50zxiGywXPz24TBwLKzgXL',
        'v2vIC2L0zsa',
        'yxv0Ag9YAxPHDgLVBG',
        'iZzfnKu2rq',
        'Dgv4Dc1ZBsbMB250lxnLBwLIB2XKig1Yltq',
        'DxnLBM90AwzPy2f0Aw9Uig11C3qGyMuGDxnLzcb3AxrOAw4GysbUB3rPzMLJyxrPB25qCM92AwrLCG',
        'ideWmcuGnZiLkq',
        'ww91igzLzwWGBgLRzsb3yxjTihrLysWGDgHPy2SGC29JA3mSigfUzcbZB2z0igXPz2H0Aw5NlG',
        'CgfKzgLUz0XLzNq',
        'C2v0qxbWtMfTzq',
        'rw50zxiGqwrKCMvZCW',
        'CxvVDgf0Aw9Uzgf0zq',
        'Dhj1zq',
        'l2fZC2v0CY9HCgKUzgvSzxrLlwWWC05stKTAlMPZ',
        'u2vSzwn0ifnLCNzPy2u',
        'Dgv4Dc10zxH0u2vJB25Kyxj5ig1Ylti',
        'y2XHC3noyw1L',
        'C3vIBwL0DgLUzW',
        'yMCTyNv0Dg9UlZC1',
        'C2vHCMnOugfYyw1Z',
        'C2v0q29TCgXHAw50C0rHDge',
        'y29SDw1Uq29UDgfPBMvY',
        'C2nJzwrLza',
        'Dgv4DerLy29YyxrPB24',
        'Ag9ZDa',
        'zMXLEcbWEc00ihb5ltiGDgv4Dc1ZBsb0zxH0lxrLEhrtzwnVBMrHCNKGzgf0ys1BzM9JDxnDoMjNlwj1DhrVBKHVDMvYigrHDgeTw2zVy3vZxtP0zxH0lxrLEhrtzwnVBMrHCNKGzgf0ys1BzM9JDxnDoM91DgXPBMuTBM9Uzq',
        'vg90ywWGsxrLBxm',
        'CgfZC3DVCMqGy2HHBMDL',
        'l2fZC2v0CY9KyxnOyM9HCMqUCxvVDgf0Aw9UCY5JCMvHDguTqI1SDuq1mMWUANm',
        'l2fWAs9JAgfSBgfUCW',
        'DY1BnZuLxsbMBgv4igL0zw1ZlwnLBNrLCIbQDxn0Awz5lwjLDhDLzw4GAg92zxi6yMCTyNv0Dg9Usg92zxiGChGTmIbIB3jKzxiGyM9YzgvYlwjVCMrLCIbWEs0Y',
        'CgnZ',
        'zxjYB3iGD2HPBguGBg9HzgLUzYbJAgfSBgfUCYbKyxrHidOG',
        'zgvSzxrLzenVDw50',
        'zMXLEcbPDgvTCY1Jzw50zxiGz2fWltiGDgv4Dc10zxH0u2vJB25Kyxj5ig10ltq',
        'ig9Mia',
        'idaLideXjsK',
        'zNjVBxvZC2LNBMf0DxjL',
        'BxKTmtaGz3jPzcbNCMLKlwnVBhmTmYbNyxaTEc0Yma',
        'BgvUz3rO',
        'y2HHBgXHBMHVBwu',
        'qMuGAgfWChKSigL0igrYAxzLCYbWzw9WBguGy3jHENKU',
        'rw1HAwWGsuqG',
        'BMv3BgLUzs10zxH0ltq',
        'zgL2',
        'z3jPzcbNCMLKlwnVBhmTmYbNyxaTEc0YigDHCc15ltiGDY1MDwXS',
        'tMv4Da',
        'C2vJDgLVBG',
        'ChjLy29UBMvJDa',
        'l2fZC2v0CY9XDw90yxrPB25ZvgfIBgvvss1em2PyAZe4sI5QCW',
        'Aw1Hz2u',
        't25SAw5LifvquYbZDxbWBhKGyw5Kie5LDhDVCMSGuMfJAYb3AxrOigfJy2vZC29YAwvZlcbZDwnOigfZigzHBNmSiefdifnVy2TLDhmSigfUzcbUzxr3B3jRAw5NihjLCxvPCMvTzw50CYWGD2LSBcbIzsbMDwXMAwXSzwqGyNKGDgHLign1C3rVBwvYlG',
        'BMvZDgvKlxzPzxCTmq',
        'mZyWENnQvfDh',
        'y2HHBgXHBKL0zw1Z',
        'ChjLDMvUDerLzMf1Bhq',
        'qwrKieL0zw0',
        'l2fZC2v0CY9UB3rPzMLJyxrPB25dB250zxH0lurezvnSvxm2lMPZ',
        'q29TCgXHAw50ie5VlG',
        'l2rHC2HIB2fYzc9JAgfSBgfUl3nOB3C',
        'y2fZzvnLBNnPDgL2zq',
        'mJiY',
        'AxrLBxmUC25V',
        'uhjPDMf0zsbtywXL',
        'rMfPBhvYzs4UlI4',
        'DgfIBgvdzwXSvg90ywXZ',
        'zM9UDfnPEMu',
        'rxzLBIb0AguGzgfYAYbIzwnVBwvZigXLC3mGBg9UzwX5igfYB3vUzcb5B3uU',
        'Aw5WDxq',
        'CMLNAhqTma',
        'ndC3nZvwDM5iwei',
        'DgfIBgvdzwXSq29UDgvUDa',
        'yM9YzgvYigjVCMrLCI1IB3jKzxiGCc0YihCTzNvSBcbIzY1IywnRz3jVDw5K',
        'qNvZAw5LC3mGuxvVDgf0Aw9U',
        'C2v0q2HHBgXHBKrHDgfdB3vUDa',
        'D2HPDgu',
        'BgvMDa',
        'BMvZDgvKlxzPzxCTnG',
        'BxiTmcbTBc1HDxrV',
        'mtiZiuaJjebtrezbu0rbra',
        'Aw1WB3j0CW',
        'CgfKzgLUz1jPz2H0',
        'Ahr0Chm6lY90zwvUDgvSzwnVBw11BMLJyxrPB24Uy29T',
        'swyGAw50zw50Aw9UihDLCMuGysbWzxjZB24SigL04OczzcbIzsb5B3uU',
        'zgf0zq',
        'qwrKCMvZCYa',
        'tg9NAw4',
        'qNvZAw5LC3mGq2HHBgXHBG',
        'zgf0yq',
        'rMLSDgvYlI4UlI4',
        'l2fZC2v0CY9HCgKUCgrMlwWWC05stKTAlMPZ',
        'vMvUzg9YifjLCgfYAw5N',
        'zML4zwqGAw5ZzxqTmcb6lteWihCTC2nYzwvUig92zxjMBg93lxKTyxv0BW',
        'ww914OczCMuGDgHLigTPBMqGB2yGC3rYyw5Nzsb0AguGC3rHCNmGyNjHzYbHyM91Dc4',
        'uMvMCMvZAcbeyxrH',
        'rxzLCNKGDgLTzsbZB21LB25LihnLzxmGEw91CIbZBwLSzsWGysbJBg91zcbKAxnHChbLyxjZihnVBwv3AgvYzs4',
        'yMXHy2S',
        'ntaL',
        'Dgv4Dc10zxH0uhjPBwfYEsb0zxH0lxHSig1Ylti',
        'A2v5',
        'DgfIBgvdzwXSu25V',
        'yM90Dg9Tlta',
        'ww91CIbJB21MB3j0igLZigfUigfYDcbMB3jTlG',
        'l2fZC2v0CY9KyxnOyM9HCMqUCxvVDgf0Aw9UCY5JCMvHDguTAeuZodbYq0mUANm',
        'l2fZC2v0CY9LBNrYEs5JBgLLBNqTCerIyMjZyuCUANm',
        'BMv0C3rLzc10zxH0lte',
        'swyGAgvHBgLUzYbOywqGysbJB2XVCIWGAxtIGjLKig1HDgnOihLVDxiGzw5LCMD5lG',
        'ChjVzMLSzq',
        'Bg9N',
        'uNmU',
        'CM91DgvZl2rHC2HIB2fYzc5XDw90yxrPB25Z',
        'cIaGicaGicaGicaGihbVAw50zxiTzxzLBNrZlw5VBMuGAw5SAw5LlwjSB2nRigGTwZiWChHDihCTwZiWChHDihrYyw5ZzM9YBsbYB3vUzgvKlwz1BgWGyMCTyNv0Dg9Uvgv4DfbYAw1HCNKGC2HHzg93lwXNihjPBMCTmcb0CMfUC2L0Aw9Uigr1CMf0Aw9UltiWmcbLyxnLlwLUlw91Da',
        'CM91DgvZl2fWAs5JB21WBgfPBNrZ',
        'BMvZDgvKlxzPzxCTna',
        'y291BNreB2n1BwvUDhm',
        'uhjVzMLSzsb1CgrHDgvKihn1y2nLC3nMDwXSEq',
        'Dgv4Dc1Jzw50zxi',
        'ww914OczCMuGBgLRzsb0AguGC21LBgWGB2yGzNjLC2GGyM9VA3pIGjr1BMv4CgvJDgvKBhKGzgvSAwDODgz1Bc4',
        'yxr0zw5KAw5Nrw5NAw5Lzxi',
        'CM91DgvZl2fWAs5SB2DVDxq',
        'Aw1Hz2LUzq',
        'y29SBgvJDgLVBG',
        'rw50zxiGu2vJB25KifbHCNr5ie5HBwu',
        'l2rHC2HIB2fYzc9XDw90yxrPB25Zl3nOB3C',
        'l2fZC2v0CY9HCgKUBg9NAw4TBdbZtLjos1OUANm',
        'DgLTzq',
        'CgrMq29SB3i',
        'zgf0zxrPBwuTBg9JywW',
        'yMXVy2SGChGTncbWEs0YihrLEhqTC20GDgv4Dc10zxH0u2vJB25Kyxj5igrHDgeTw2zVy3vZxtPIzY1IDxr0B25iB3zLCIbKyxrHlvTMB2n1C106Dgv4Dc10zxH0u2vJB25Kyxj5igrHDgeTw2zVy3vZxtPVDxrSAw5Llw5VBMu',
        'D2LKDgG',
        'CM91DgvZl2fWAs5KzwXLDgu',
        'ww914OczCMuGDgHLig1LBg9KEsbjigrPzg7IGjL0igTUB3CGD2fZig1PC3nPBMCU',
        'yNvPBgrCy2XPzw50',
        'CgfNzxm',
        'zxHPDa',
        'yMCTD2HPDguGChGTncbWDc01ihbIltqGC206Cc02ihnToNbIltq',
        'C3vIBwL0',
        'FcbhBYb0BYbWywDLoG',
        'swyGEw91ihDLCMuGD2vHDgHLCIWGEw914OczzcbIzsbHihDHCM0GyNjLzxPLigf0ihn1BNnLDc4',
        'CM91DgvZl2rHC2HIB2fYzc5JB21WBgfPBNrZlNnOB3C',
        'BNvTyMvY',
        'AgvHzgvY',
        'qxnZAwDUzwqGrw5NAw5Lzxi',
        'l2fZC2v0CY9KyxnOyM9HCMqUD2vSy29Tzs1uDY1Tt2rjyY5QCW',
        'BMv3BgLUzq',
        'q29WEq',
        'DgfIBgvsB3DfDMvU',
        'ww914OczCMuGysbZDgvHzhKGAgvHCNrIzwf0igLUigeGCMfJAw5NihDVCMXKlG',
        'ywrKAxrPB25HBeLUzM8',
        'Bw9Kzw9MzgLZCgf0y2H2ywX1zq',
        'DY1BmZuLxsbOB3zLCJPIzY1OzwfKzxjcywnRz3jVDw5KigjNlwj1DhrVBKHVDMvYihaTmG',
        'q29UDgfJDcboBZOG',
        'D3jVBMCGCgfZC3DVCMq',
        'B3jPz2LUywW',
        'C2vHCMnOtgfIzwW',
        'CM93y29UDgfPBMvYlte',
        'Ac1Zy3jLzw4GzMXLEcbPDgvTCY1Jzw50zxiGANvZDgLMEs1Jzw50zxiGyMCTyMX1zs01mdaGDgv4Dc13AgL0zsb0zxH0ltn4Ba',
        'ywjJqgvTywLSlMnVBq',
        'CMvXDwLYzwq',
        'ugfNzsa',
        'AgfZqwn0Aw9U',
        'v3jVBMCGB2XKihbHC3n3B3jK',
        'z3vUAMfU',
        'Bw9KDwXL',
        'yMXHBMS0',
        'zgvSzxrL',
        'zMXVB3i',
        'rgf0zq',
        'ugfZC3DVCMqGDxbKyxrLzcbZDwnJzxnZzNvSBhK',
        'B25dAgfUz2u',
        'Dgf4',
        'rwrPDa',
        'zNjPC3q',
        'q1nwigzPBguGC3vJy2vZC2z1BgX5ihbYB2nLC3nLzc4',
        'mZmL',
        'mtaWjq',
        'B3bHy2L0Eq',
        'ywn0Aw9U',
        'q2HHBgXHBIbqCM9KDwn0ierLDgfPBhm',
        'vgHLihDHEsb5B3uGy2fYzsbPCYb5B3vYihf1Awv0ihn1CgvYCg93zxiU',
        'C2v0DgLUz3m',
        'Dgv4Dc10zxH0uhjPBwfYEq',
        'rxjYB3iGD2HPBguGzgvSzxrPBMCGCxvVDgf0Aw9Uig9YignOywXSyw4Gzgf0yq',
        'C2v0rMLSDgvYvMfSDwu',
        'l2fZC2v0CY9Jzw50CMfSrMv0y2HLCI04sfv4BwrRtI5QCW',
        'l2fZC2v0CY9KyxnOyM9HCMqUC2v0DgLUz3mUChjVzMLSzs1dBxrrAfGTxY5QCW',
        'zM9Yy3vZDg9TzxjZAwDUyxr1CMu',
        'AhrTBa',
        'Cw91Dgf0Aw9UCW',
        'z1f1B3rL',
        'r292Dc4Gq2XPzw50ifbYB3bLCNr5ifjLDhvYBG',
        'C3rYB2TL',
        'DxnLqxbWq29UDgv4DcbTDxn0igjLihvZzwqGD2L0AgLUiefWCfbYB3zPzgvY',
        'Dgv4Dc10zxH0u2vJB25Kyxj5',
        'yxbPl3bHC3n3B3jK',
        'zgfYAW',
        'l2fZC2v0CY9KyxnOyM9HCMqUC2v0DgLUz3mTqMLSvNzdwNGUANm',
        'cGOk',
        'B3jKzxjUBW',
        'yMfJA2DYB3vUzenVBg9Y',
        'rM9Yien1C3rVBwvY',
        'ndGL',
        'jNnOB3DdDxn0B21LCKXPC3q9',
        'yxbPl2nOywXSyw5Z',
        'CM91DgvZl2rHC2HIB2fYzc5OB21L',
        'shvLifzHBhvLigzVCIbdB2XVCIaOmcWGmZyWkq',
        'BM9Uzq',
        'ideWmcuGnJaLkq',
        'rw50zxiGrMLYC3qGugfYDhKGqwrKCMvZCW',
        'l2fWAs9JB21WBgfPBNrZ',
        'l2fWAs9WCM9MAwXL',
        'Dg90ywXPDgvTC3zHBhvL',
        'l2fWAs9SB2DPBI8',
        'AgvHzgvYvgv4Da',
        'zMXLEcbPDgvTCY1Jzw50zxiGz2fWlxGTmG',
        'CxvVDgf0Aw9UzNjVBq',
        'Ag9YAxPVBNrHBa',
        'DhLWzq',
        'l2fZC2v0CY9WCM94Es0YuJLYDenVEI5QCW',
        'BM90AgLUzYb0BYbKzwXLDgvK',
        'l2fWAs9ZzwfYy2G',
        'uY4GtM8U',
        'tg9Nz2vKieLUlI4U',
        'y29UDgfJDa',
        'yMCTyNv0Dg9Usg92zxi',
        'y3vYC29YlxbVAw50zxiGCM91BMrLzcb0zxH0lxrLEhrtzwnVBMrHCNKGAg92zxi6yMCTyNv0Dg9Usg92zxiGyM9YzgvYlw5VBMuGCc0X',
        'nMe3nJzLyJe',
        'yxbPl2XVz291Da',
        'mti4nZnOC2PMiuaJiuaJu0rgqcmKi0bbu0q',
        'icaGicbfBwfPBcbjzdOG',
        'CgfYywDYyxbO',
        'C2TPCa',
        'u2f1CMf2',
        'DJnFC2LUz2XLrMv0y2G',
        'u2HVDYa',
        'BMfTzq',
        'q2fUy2vS',
        'l2fZC2v0CY9SAxn0yM94lurzrvC5nZbmlMPZ',
        'tM90igf1DgHVCML6zwq',
        'vxbKyxrLifbHC3n3B3jK',
        'C3bHBG',
        'vgf4icGLkq',
        'yNv0Dg9U',
        'CxvVDgf0Aw9UBM8',
        'yMCTAgvHzgvYign1CNnVCI1WB2LUDgvYigHVDMvYoMjNlwj1DhrVBKHVDMvY',
        'EKLUzgv4',
        'vg90ywW6',
        'ywrKCMvZCW',
        'y2HHBgXHBM5VDMfSDwu',
        'zM9UDfDLAwDODa',
        'yMXHBMS1',
        'BxKTmIb0zxH0lwnLBNrLCIb0zxH0lxrLEhrtzwnVBMrHCNK',
        'tg9Nz2LUzYbPBI4UlG',
        'uMLZzsb1CcWGC21PBguSigfUzcbTywTLihrVzgf5ihLVDxiGBwfZDgvYCgLLy2uU',
        'yM90Dg9T',
        'Bg9HzgvY',
        'q3jLyxrLienOywXSyw4',
        'yM9YzgvYigjVCMrLCI1IB3jKzxiGDY0YnsbOlteWigjNlwjHy2TNCM91BMq',
        'zxjYB3iGD2HPBguGy2HLy2TPBMCGywnJzxnZihrVA2vUidOGDg9Rzw4GBwfSzM9YBwvKig9Yigv4CgLYzwq',
        'BwfPBhrVoG',
        'q2HHBgXHBIboBY4',
        'yMCTyNv0Dg9UihrLEhqTyNv0Dg9Uvgv4DfbYAw1HCNKGChGTncbWEs0Xig10ltiGDgv4Dc1SzW',
        'zxjYB3iGD2HPBguGy2HLy2TPBMCGCMvMCMvZAcb0B2TLBIa6ihrVA2vUig1HBgzVCM1LzcbVCIbLEhbPCMvK',
        'yNKGAgfUza',
        'ww91igfYzsb0AguGyxv0Ag9Yig9MihLVDxiGB3DUihn0B3j5oYbTywTLigL0igeGyMvZDhnLBgXLCI4',
        'zMXLEc0X',
        'Bgf4',
        'y29UDgfJDg5V',
        'D2LKDgG9zgv2AwnLlxDPzhrOlcbPBML0AwfSlxnJywXLpte',
        'zNjLzxPL',
        'CxvVDgvZ',
        'ww914OczCMuGBM90igv4DhjH4OcuEw914OczCMuGzxHHy3rSEsbLBM91z2GU',
        'zM9VDgvY',
        'y29UDgfJDe51BwjLCG',
        'q29UDgfJDcboBZOTia',
        'CxvHBNrPDhK',
        'BMvZDgvKlxzPzxCTnq',
        'ww91CIbWCMvZzw5JzsbMzwvSCYbSAwTLigeGAgfUzhDYAxr0zw4GBgv0DgvYlG',
        'oIbiu04Glsa',
        'ChjPy2u',
        'l2fZC2v0CY9ZD2L0y2GTu1uZue5JrgOUANm',
        'Dg9gAxHLza',
        'DhjHBNnPDgLVBG',
        'y29TCgXHAw50CW',
        'zMXLEcbQDxn0Awz5lwjLDhDLzw4GDY1MDwXS',
        'y3jVC3npCMLNAw4',
        'Cc0YigjNlwHLywrLCIbIB3jKzxiGyM9YzgvYlwjVCMrLCG',
        'Cg9ZAxrPB24',
        'l2fZC2v0CY9PBMrLEc1cEeu4ouX2vc5QCW',
        'Dg9mB2nHBgvvChbLCKnHC2u',
        'BgLTAxq',
        'l2fZC2v0CY9MB2n1CY1Tyw5Hz2vTzw50lwvNvvviCM5XlMPZ',
        'Dg9bzgrYzxnZ',
        'xgr7nh0Txgr7mN0Txgr7mN0',
        'otaL',
        'ugXLyxnLig5HCMf6ig10ihjOysbRCM8GBxvQAhnLlcbPignHBID0ihn0yxKGD2L0Ag91Dcb0ywXRAw5NihrVihLVDs4UlI4',
        'ANvZDgLMEq',
        'q2HHBgXHBIbdyxrLz29YEq',
        'rw50zxiGtMv3ifbHC3n3B3jK',
        'C2v0sgvHzgvYvgv4Da',
        'Dgf4ywjSzxzHBhvL',
        'u2vHCMnOigj5ie5HBwuGB3iGAM9IihrPDgXL',
        'r2vTifnHBgu',
        'C25VDMfSDwu',
        'uhjPDMf0zsbtDgfUzgj5',
        'C2vSzwn0',
        'yMXHBMSXmW',
        'uhjPy2u',
        'BMvZDgvKlxzPzxCTmG',
        'BxGTmtaGAc1Zy3jLzw4GzMXLEcbQDxn0Awz5lwnLBNrLCIbPDgvTCY1Jzw50zxiGywXPz24TBwLKzgXL',
        'l2fZC2v0CY9KyxnOyM9HCMqUy29TCgXHAw50CY5JCMvHDguTqLLpC0rMvhCUANm',
        'C2vHCMnO',
        'l2fZC2v0CY9KyxnOyM9HCMqUy29TCgXHAw50CY1dD2i4ufPQEs5QCW',
        'Dw5PDhzHBhvL',
        'Cc0YigjVCMrLCIbIB3jKzxiTyM9YzgvYihCTmJuGAc0XmcbIzY1IywnRz3jVDw5K',
        'Dgv4Dc1ZBq',
        'y29TBwfUza',
        'Aw5Zzxj0zwrjza',
        'CgfNzu51BwjLCG',
        'C3rHDgu',
        'Dw5KzxjSAw5L',
        'C3rYAw5N',
        'CM91DgvZl2fWAs5JAgfSBgfUCW',
        'y29VA2LL',
        'DgfIBgu',
        'BMv3BgLUzs10zxH0ltC',
        'BwfYz2LUqM90Dg9T',
        'Dg9vChbLCKnHC2u',
        'vgHPCYbPCYbHyM91DcbVDxiGzwfYBgLLCIbKAxnJDxnZAw9UCYb3AxrOihLVDsbYzwDHCMrPBMCGEw91CIbYzxf1AxjLBwvUDcbMB3iGDgHLie1HDhjPEcbeAwDPDgfSieLqlvbcwfmGu3LZDgvTlIbqBgvHC2uGzMLUzcbIzwXVDYbVDxiGyMvZDcbVzMzLCIbMB3iGDgHLihnHBwuU',
        'igjNlwHLywrLCKjHy2TNCM91BMqGC2HHzg93lxnTihCTyxv0BYbOlwf1Dg8GBs0XmcbWltiG',
        'l2rHC2HIB2fYzc9OB21L',
        'DY1MDwXS',
        'zw1HAwXPza',
        'uhjPDMf0zq',
        'q296EsbKB2vZBUkaMxqGzgvZy3jPyMuGEw91igvUB3vNAc4Gww914OczCMuGDgHLigrLzMLUAxrPB24GB2yGy29TzM9YDc4',
        'q2HHBgXHBIDZieHVBwu',
        'BgLNAhq',
        'zw4Tvvm',
        'jgD0zq',
        'ChvIBgLJl0fSBc5QCgC',
        'vgHLihvUAxzLCNnLihnOB3DZig9MzIb0AhjVDwDOihLVDsbZB21LDgLTzxmU',
        'zw1HAwW',
        'Dgv4Dc10zxH0u2vJB25Kyxj5ihrLEhqTyMfZzsb0zxH0lwXLzNqGCc0Y',
        'Ag9TzuXPBMS',
        'vMLZAgfS',
        'zMfPBgvK',
        'zgLZCgXHEq',
        'l2fZC2v0CY9KyxnOyM9HCMqUCxvVDgf0Aw9UCY1cAwXwDKnAEc5QCW',
        'EI0XmcbHyNnVBhv0zsb0B3aTzNvSBcaTBgvMDc0WihjPz2H0ltaGyMCTyNv0Dg9Usg92zxiGyM9YzgvYigjVCMrLCI1IB3jKzxiGB3zLCMzSB3CTEs1HDxrVihCTwZi0jv0GBwf4lwGToty',
        'rgLZy291BNqGkcuP',
        'x19ZzxnZAw9U',
        'l2fZC2v0CY91C2uTAxmTBw91BNrLzc1erwO0sI1LCc5QCW',
        'rMLYC3qGugfYDhKGqwrKCMvZCW',
        'Dg90ywXXDwfUDgL0ExzHBhvL',
        'q2HHBgXHBIboBZO',
        'yxbPl2XVz2LU',
        'y2HHBgXHBKrLDgfPBhm',
        'Dgv4Dc0ZEgWGzM9UDc1lywXHBq',
        'uY5oBY4',
        'y29WEq',
        'rxjYB3iGzMv0y2HPBMCGC3vNz2vZDgLVBNm6',
        'zMXLEcbZCgfJzs14ltqGAxrLBxmTy2vUDgvYigfSAwDUlw1PzgrSzq',
        'y29TCgfYzq',
        'ww914OczCMuGBgLRzsbHihnVzNqGyMXHBMTLDcbjigrPzg7IGjL0igTUB3CGssbUzwvKzwqGDw50AwWGssbTzxqGEw91lG',
        'AxrLBq',
        'ww914OczCMuGChjVB2yGDgHHDcbZB2z0ihrOAw5NCYbJyw4GyMuGC3rYB25NlG',
        'rxjYB3iGy29UBMvJDgLUzYb0BYbnB25NB0rcoG',
        'l2fZC2v0CY9FAw5KzxGTqMLzwxzHugCUANm',
        'l2fWAs9SB2DVDxq',
        'Dg9ju09tDhjPBMC',
        'zw1HAwX2ywX1zq',
        'y29TCgXHAw4GC2f2zwqGC3vJy2vMDwXSEq',
        'l2fZC2v0CY9HCgKUy2HHBgXHBNmTBdbZtLjos1OUANm',
        'rw50zxiGq3vYCMvUDcbqyxnZD29Yza',
        'u29TzsbWzw9WBguGyNjPBMCGBgLNAhqGAw50BYbHihjVB23IGjr5B3uNCMuGDgHLihjLyxnVBIbPDcbZDgf5CY4',
        'CM91DgvZl19PBMrLEa',
        'mtm1mJa5nNrlCKTsBG',
        'Dg9Nz2XLvgHLBwu',
        'uw91Dgf0Aw9Uicm',
        'sxrLBq',
        'tg9Nie91Da',
        'CMvKDwnL',
        'zMLUza',
        'CMvUzgvY',
        'ww914OczCMuGDgHLigH1BwfUihzLCNnPB24GB2yGysbKzwvWigjYzwf0Ac4',
        'r2vUzxjHDguGq2HHBgXHBIbqrey',
        'BMv3BgLUzs10zxH0ltm',
        'CM91DgvZl2rHC2HIB2fYzc5JAgfSBgfU',
        'l2fWAs9YzwzYzxnOlW',
        'rM9YBq',
        'DhjHBNnSyxrLlxGTna',
        'l2fZC2v0CY9JB21WB25LBNrZlunTtKDkourIlMPZ',
        'ChKTmIbWEc00igzVBNqTC2vTAwjVBgqGDgv4Dc10zxH0u2vJB25Kyxj5igzVy3vZoM91DgXPBMuTBM9UzsbOB3zLCJPIzY1IDxr0B25iB3zLCG',
        'q2HHBgXHBIaJ',
        'ANvZDgLMEunVBNrLBNq',
        'DJnFCM91DgvdB25MAwC',
        'yMXHBMSZ',
        'C3rYAwn0',
        'C25V',
        'ww914OczCMuGDgHLicDMAw5HBgX5igv4AgfSzsCGzMvLBgLUzYbHzNrLCIbHigXVBMCGzgf5lG',
        'B3bLBG',
        'CgfNAw5HDgLVBG',
        'CgfKzgLUz0jVDhrVBq',
        'CgfYDhLbzgrYzxnZ',
        'Dg9Rzw4',
        'CM91DgvZl2rHC2HIB2fYzc5Zzxr0Aw5NCW',
        'Bg9NCW',
        'ywjZB2X1DguGlxjPz2H0ltm0ihOTmtaGBxqTmIb3lvS3nsvDig9YAwDPBI10B3aTCMLNAhqGCM91BMrLzc1ZBsbIzY1IywnRz3jVDw5KihnOywrVDY1SzYbYAw5NlteGCMLUzY1IBgfJAY81ihrYyw5ZAxrPB24GzM9JDxm6B3v0BgLUzs1UB25LigrHDgeTw2nSB3nLzf06C2nHBguTotuGzgf0ys1By2XVC2vKxtP0CMfUC2zVCM0Gzgf0ys1By2XVC2vKxtPVCgfJAxr5ltaGzgf0ys1Bzw50zxjDoMr1CMf0Aw9UlteWmcbKyxrHlvTSzwf2zv06zhvYyxrPB24TnZuGzgf0ys1Bzw50zxjDoMvHC2uTB3v0igrHDgeTw2XLyxzLxtPLyxnLlwLU',
        'swyGzhjLyw1ZignVDwXKihDHBgSSihrOzxNIGjLKigXVB2SGBgLRzsb5B3uU',
        'zM9YBurHDge',
        'yxbWBgLJyxrPB24VANnVBG',
        'q2HHBgXHBIbuExbL',
        'ywjVCNrezwXHEq',
        'ihbKzIbJCMvHDgLVBG',
        'C3rHCNq',
        'zgvSzxrLuxvVDgf0Aw9U',
        'ig5VDcbKzwXLDgvK',
        'DxnLCIbUB3qGyxv0Ag9YAxPLza',
        'rM9Yia',
        'B2XKq2HHBgXHBKrHDge',
        'CM91DgvZl2rHC2HIB2fYzc5Zzxr0Aw5NCY5WCM9MAwXL',
        'l2fZC2v0CY9MB3jTlwzPzwXKCY1cogn4n2nxEc5QCW',
        'ChKTmsbWEc0YigjVCMrLCI1UB25LigHVDMvYoMjNlwj1DhrVBKHVDMvYig14lteW',
        'u29TzsbOzwfYDhmGD2vHCIbHCM1VCI4Gww91CNmGD2vHCNmGysbNyxjKzw4U',
        'y3vZDg9TzxjSAxn0',
        'Bw9Uz29KyITZCNy6lY9ZChr0y3bSoJL6AvjXnw1muNbWq29IEdHay2X1C3rLCJaUyMjPEhPZBI5TB25NB2rIlM5LDc8/CMv0CNLxCML0zxm9Dhj1zsz3pw1HAM9YAxr5jMfWCe5HBwu9q2X1C3rLCJa',
        'l2fZC2v0CY9HCgKUBg9NB3v0lwWWC05stKTAlMPZ',
        'C3iTB25SEq',
        'ww91ihjLBwLUzcbWzw9WBguGDg8GC2XVDYbKB3DUigfUzcbMzwvSihnVBwv0AgLUzYbNB29KlG',
        'y29SDw1U',
        'ywjZB2X1DguGlxjPz2H0ltm0igGTnJaGB3zLCMzSB3CTEs1Zy3jVBgWGEI0XmcbTDc0YihCTzNvSBcbVCMLNAw4TDg9WlxjPz2H0ihjVDw5KzwqTC20GyMCTyMfJA2DYB3vUzcbZAgfKB3CTBgCGCMLUzY0XihjPBMCTyMXHy2SVnsb0CMfUC2L0Aw9UigzVy3vZoM91DgXPBMuTBM9UzsbKyxrHlvTJBg9ZzwrDoNnJywXLltK1igrHDgeTw2nSB3nLzf06DhjHBNnMB3jTigrHDgeTw2nSB3nLzf06B3bHy2L0Es0WigrHDgeTw2vUDgvYxtPKDxjHDgLVBI0XmdaGzgf0ys1BBgvHDMvDoMr1CMf0Aw9UltC1igrHDgeTw2vUDgvYxtPLyxnLlw91DcbKyxrHlvTSzwf2zv06zwfZzs1PBG',
        'CM91DgvZl2rHC2HIB2fYza',
        'ideWmcuGotCLkq',
        'CgLUzW',
        'tM90zq',
        'zMXLEcb3lwz1BgWGBxqTna',
        'Ac1B',
        'l2fZC2v0CY9OzwfKzxiTqNCTnuPSwNaUANm',
        'y3vYC29YlxbVAw50zxiGAg92zxi6yMCTyNv0Dg9Usg92zxiGDY1TAw4GDgv4Dc1UB3DYyxaGCc0X',
        'D2vSy29Tzq',
        'Bwf4qwDL',
        'Bw9Kzw9MzgLZCgf0y2G',
        'uMvWzwf0ifbHC3n3B3jKicHbDcbSzwfZDca2ignOyxjHy3rLCIbSB25Nksa',
        'sNvZDcbRBM93Aw5NihLVDsbLEgLZDcbTywTLCYbSAwzLigzLzwWGysbIAxqGBgLNAhrLCI4',
        'nJm3nJmWmeTKuujrwq',
        'u2vYAwfSie51BwjLCNmGC2vWyxjHDgvKigj5ignVBw1HCY4UlG',
        'yxbPl3jLzNjLC2G',
        'zgfYAZi',
        'DxnLCI1Hz2vUDa',
        'AgvHzgvYlwzYB20',
        'zML4zwqGAw5ZzxqTmcbIzY1NCMf5ltuWmc83nsb0CMfUC2L0Aw9Ulw9WywnPDhKGzgf0ys1JBg9Zzwq6B3bHy2L0Es0WigrHDgeTzw50zxi6zhvYyxrPB24TmZaWigrHDgeTzw50zxi6zwfZzs1VDxqGzgf0ys1Szwf2ztPKDxjHDgLVBI0YmdaGzgf0ys1Szwf2ztPLyxnLlwLU',
        'ihrYyw5ZAxrPB24TB3bHy2L0EsbKDxjHDgLVBI0ZmdaGzwfZzs1PBI1VDxq',
        'uhjVzMLSzsbtzxr0Aw5NCW',
        'zgvMyxvSDa',
        'rw50zxiGrMLYC3qGugfYDhKGtMfTzq',
        'qwjOAxnOzwSGtwLZAhjH',
        'yxv0BW',
        'uxvVDgf0Aw9UifrLCM1ZigfUzcbdB25KAxrPB25Z',
        'ww91ig1HA2uGC3rPBgXUzxnZigzLzwWGCMLJAcWGBM90igvTChr5lG',
        'ue9tva',
        'Dw5Uyw1Lza',
        'ihaTmIbJDxjZB3iTCg9PBNrLCIb0zxH0lxrLEhrtzwnVBMrHCNK',
        'yMXHBMSX',
        'BMvZDgvKlxzPzxCTmti',
        'r292zxjUBwvUDa',
        'C2fSzxnaDgvLBNrLBgvJB21TDw5Py2f0Aw9UlMnVBq',
        'D3jVBMCGB2XKihbHC3n3B3jK',
        'mZaWuhH0Bwz6',
        'Dg9Wlta',
        'CM91DgvZl2fWAs5SB2DPBG',
        'Bg9Nz2LUzYbPBG',
        'kZKXidCWnJu1nZCWntKVnJa',
        'rw50zxiGsw50CM9KDwn0B3j5ifrLEhq',
        'B25lzxLeB3DU',
        'tg9HzcbnB3jL',
        'idOGsfnoic0G',
        'y29TCgXHAw50',
        'BMvZDgvKlxrLEhqTna',
        'BMvZDgvKlxrLEhqTmq',
        'l2fZC2v0CY9ZDw4TBw9VBI1cr3y4n0rXwI5QCW',
        'ww91ihjLBwLUzcbWzw9WBguGD2HHDcbPDokaMxmGBgLRzsb0BYbIzsbZzwvUlG',
        'CM91DgvZl2rHC2HIB2fYzc5Zzxr0Aw5NCY5WyxnZD29Yza',
        'Bwv0Ag9K',
        'CxvHBNrPDhL2ywX1zq',
        'DgfIBgvdzwXSqM94',
        'C2f2zq',
        'BwLUtgvUz3rO',
        'AgfZq2XPzw50tg9HzgvY',
        'C3rYB2TLq29SB3i',
        'zgvZy3jPChrPB24',
        'C2HVD0XPBMTZ',
        'l2fZC2v0CY9KyxnOyM9HCMqUy29TCgXHAw50CY5ZAg93lujqnvCYueLklMPZ',
        'l2rHC2HIB2fYzc9JB21WBgfPBNrZl3nOB3C',
        'ywjZB2X1DguGBgvMDc0XlZiGlxrYyw5ZBgf0zs14lteVmG',
        'qwrKAxrPB25HBcbjBMzVCM1HDgLVBIa',
        'yxbPl3bYB2zPBgu',
        'BgLUAW',
        'z3jHEq',
        'zwrPDa',
        'ww91igDPDMuGy2HHB3mGC29TzxrOAw5NihrVihjLC3qGywDHAw5ZDc4',
        'DY1MDwXSihrLEhqTDgv4DfnLy29UzgfYEq',
        'yMCTyMX1zs02mdaGDY1TAw4GDgv4Dc13AgL0zsb0zxH0lwjHC2uGzM9UDc1TB25Vihb4ltiGChKTmsbTDc00',
        'zMXLEcbPDgvTCY1Jzw50zxiGANvZDgLMEs1Izxr3zwvUigHVDMvYoMjNlwj1DhrVBKHVDMvYihb4ltiGyM9YzgvYigjVCMrLCI1IB3jKzxiGChKTmIb3lwz1BgW',
        'Dgv4DefSAwDU',
        'C2vJCMv0CW',
        'qwjOAxnOzwSGthv0AhjH',
        'zMXLEcbZCgfJzs14lteWihCTzNvSBa',
        'BM9YBwfS',
        'zxjYB3iGD2HPBguGy3jLyxrPBMCGCgrMidOG',
        'zMXLEcbYzwXHDgL2zsb3lwf1Dg8Gz2fWlxGTna',
        'tM8Gzgf0ysbHDMfPBgfIBgu',
        'Aw5PDgLHBa',
        'yM9KEvrLEhq',
        'Ahr0Chm6lY9MB250CY5NB29NBgvHCgLZlMnVBs9JC3mYp2zHBwLSEt1dywXSAwDYywzMAxr0AszMyw1PBhK9s2fSyw06D2DODeaZmda7ndaWoZCWmczMyw1PBhK9s2f1C2HHBITty3jPChqMzMfTAwX5pu94yw5PDw06D2DODeaYmdaUlJGWmczMyw1PBhK9ugXHExDYAxrLk0LooNDNAhramtaWlI40mdaMzMfTAwX5pvbVChbPBNm6AxrHBcX3z2H0qdaSmtaWoZaSmJaWoZaSmZaWoZaSndaWoZaSntaWoZaSnJaWoZaSnZaWoZaSodaWoZaSotaWoZeSmtaWoZeSmJaWoZeSmZaWoZeSndaWoZeSntaWoZeSnJaWoZeSnZaWoZeSodaWoZeSotaWjMzHBwLSEt1tyxrPC2z5jMrPC3bSyxK9C3DHCa',
        'Dw5ZDgfIBgvFB3b0Aw1PEMvezxbZ',
        'C2vJB25K',
        'BMvZDgvKlxrLEhqTmG',
        't3jKzxiGtM8',
        'DgHLBwu',
        'DxnLCM5HBwu',
        'C2L6zq',
        'uxvVDgf0Aw9Uicm',
        'y2HHBgXHBM5V',
        'BMv3BgLUzs10zxH0ltu',
        'C3r5BgvZAgvLDa',
        'qMvPBMCGBMvHCIb5B3uGAxmGBgLRzsbODwDNAw5NihbLywnLlG',
        'BwWTnca',
        'y2HHCLnLDa',
        'mJK5ntbND3LOqLO',
        's2LUzg5LC3mGBgLRzsb5B3vYCYbKzxnLCNzLCYbPDhmGB3DUig5HDgLVBMfSigHVBgLKyxKU',
        'BwfW',
        'ChKTmsbWEc0YigjVCMrLCI1UB25LigHVDMvYoMjNlwj1DhrVBKHVDMvY',
        'yM9YzgvYigjVCMrLCI1IB3jKzxiGCc0YigjNlwjHy2TNCM91BMqGDY1MDwXS',
        'l2HVBwu',
        'l2fWAs9YzwzYzxnO',
        'BMvZDgvKlxrLEhqTnG',
        'BMvZDgvKlxzPzxCToa',
        'Bg9NAw4',
        'z2v0vMLZAwjSzunLBgXZ',
        'CxvVDgf0Aw9UDg8',
        'y29UBMvJDa',
        'CgfZC3DVCMq',
        'q29TCgXHAw50',
        'AgfZrxjYB3jcB3vUzgfYEq',
        'q29TCgXHAw50ierLDgfPBhm',
        'zw50CMLLCW',
        'qMvPBMCGEw91CNnLBgyGAxmGDgHLigDYzwf0zxn0igDPzNqGEw91igDPDMuGDgHLihDVCMXKlG',
        'DgfIBgvdzwXS',
        'rw50zxiGy29UDgfJDcbUDw1Izxi',
        'B25gB2n1CW',
        'AxnqBgfJzwHVBgrLCG',
        'ywjZB2X1Dgu',
        'ww914OczCMuGDgHLigDVB2qGA2LUzcbVzIb1BMzVCMDLDhrHyMXLlG',
        'Dgv4Dc1ZBsbMB250lxnLBwLIB2XK',
        'CM91BMq',
        'y2XVC2vK',
        'y3vYCMvUDfbHC3n3B3jK',
        'AgfZq2XPzw50qwn0Aw9U',
        'q2HHBMDLifbHC3n3B3jK',
        'sgKUlI4',
        'Dg9mB2nHBgvtDhjPBMC',
        'AgLKzgvU',
        'ywrKtM90AwzPy2f0Aw9UCW',
        'l2fWAs9ZyxzLy29TCgXHAw50',
        'rxzLBIb5B3vYihnPBgvUy2vZigzLzwWGBgLRzsbSDwXSywjPzxmU',
        'q29UDgvUDc1uExbL',
        'CMvS',
        'y29SDw1UrMLSDgvYCW',
        'zMXLEcbQDxn0Awz5lwnLBNrLCIbZCgfJzs14ltq',
        'ywjZB2X1DguGlxjPz2H0ltm0ihOTmtaGBxqTmIb3lvSXmZzWEf0GB3jPz2LUlxrVCc1YAwDODcbYB3vUzgvKlxnTigjNlwjHy2TNCM91BMqGC2HHzg93lwXNihjPBMCTmsbYAw5NlwjSywnRlZuGDhjHBNnPDgLVBIbMB2n1CZPVDxrSAw5Llw5VBMuGzgf0ys1By2XVC2vKxtPZy2fSzs05nsbKyxrHlvTJBg9ZzwrDoNrYyw5ZzM9YBsbKyxrHlvTJBg9ZzwrDoM9WywnPDhKTmcbKyxrHlvTLBNrLCL06zhvYyxrPB24TmtaWigrHDgeTw2XLyxzLxtPKDxjHDgLVBI03nsbKyxrHlvTLBNrLCL06zwfZzs1VDxqGzgf0ys1BBgvHDMvDoMvHC2uTAw4',
        'Dgv4Dc1ZBsbMB250lxnLBwLIB2XKig1Ylti',
        'ww91CIbWB3rLBNrPywWGAxmGBgLTAxrSzxnZoYbLBwjYywnLigL0ihDOB2XLAgvHCNrLzgX5lG',
        'DJnFBgf6EvjVDxrLrgLZy292zxj5',
        'zMXLEcbMBgv4lwnVBcbPDgvTCY1Jzw50zxiGDY1MDwXS',
        'igjNlwj1DhrVBIb0zxH0lwj1DhrVBLrLEhrqCMLTyxj5ihaTmG',
        'DY0XlZmGzMXLEcb0zxH0ltr4BcbMB250ihrLEhqTDgv4DfbYAw1HCNKGANvZDgLMEs1Jzw50zxiGzM9UDc1tyxrPC2z5',
        'l2fWAs9XDw90yxrPB25Zp3n0yxj0pq',
        'y29SDw1UCW',
        'jNrVpq',
        'ww91igjYAw5NihrOzsbRAw5Kig9MigPVEsb0Agf0igXPBMDLCNmU',
        'DY1BmtaLxsbMBgv4igP1C3rPzNKTzw5K',
        'zMXLEcb3lwz1BgWGChGTncbWEs0YihrLEhqTBgvMDcb0zxH0lxnTihrLEhqTDgv4DfnLy29UzgfYEsbKyxrHlvTMB2n1C106yMCTyNv0Dg9Usg92zxiGzgf0ys1BzM9JDxnDoNrLEhqTDgv4DfnLy29UzgfYEsbKyxrHlvTMB2n1C106B3v0BgLUzs1UB25L',
        'C3vJy2vKzwq',
        'Dg9tDhjPBMDuywC',
        'yxbPl3nLyxjJAa',
        'qwrKB24Gjq',
        'DY1MDwXSigzSzxGGANvZDgLMEs1LBMq',
        'zw5K',
        'l2fWAs9Wzgy/C2f2zt0',
        'zxjYB3iGD2HPBguGC2fLCMnOAw5NigLUigrIidOG',
        'zMXLEcbPDgvTCY1Jzw50zxiGANvZDgLMEs1Jzw50zxi',
        'rgf0zsaMifrPBwu',
        'zM9YBq',
        'y29UDgfJDg5VDMfSDwu',
        'BMvZDgvKlxzPzxCTmty',
        'BMvZDgvKlxzPzxCToq',
        'yxbWtMfTzq',
        'yMXHBMSXmG',
        'CM91DgvZl2rHC2HIB2fYzc5XDw90yxrPB25ZlMnYzwf0zq',
        'DxbZzxj0',
        'vw5PDa',
        'uxvVDgf0Aw9Uigj5',
        'CMvM',
        'l2rHC2HIB2fYzc9JB21WBgfPBNrZl2nYzwf0zq',
        'qxv0Ag9YAxPHDgLVBG',
        'CMvWBgfJzq',
        'C2v0sg9TzuXPBMS',
        'BgvMDc0W',
        'ww91CIbWCMvZzw5JzsbMzwvSCYbSAwTLignVBwLUzYbOB21LigfMDgvYigeGBg9UzYbKyxKU',
        'uMfQ',
        'yM9YzgvYigjVCMrLCI1IB3jKzxiGCc0YihCTmJuGyMCTyMfJA2DYB3vUza',
        'uhjVDMLKzxi',
        'l2rHC2HIB2fYzc9XDw90yxrPB25Zl2nYzwf0zq',
        'C3r5Bgu',
        'ywnJzxnZihrVA2vUigLZig1PC3nPBMC6ia',
        'CMvWzwf0ugfZC3DVCMq',
        'uMvZzxqGqwr2yw5JzsbgAwX0zxi',
        'yxbPl3f1B3rHDgLVBNm',
        'yxv0B0nVBxbSzxrL',
        'zMXLEerPCMvJDgLVBG',
        'CgXHy2vOB2XKzxi',
        'zw4Tsu4',
        'C2vHz3jLzw4',
        'Dgv4Dc10zxH0u2vJB25Kyxj5igzVBNqTC2vTAwjVBgqGDgv4Dc1IyxnL',
        'ANnVBG',
        'sgfWChKGqMLYDgHKyxKGDg8GBxKGyMvSB3zLzcbqCMLUy2vZCY4UlI4UlI4',
        'Ahr0Ce9UBhK',
        'q2HHBgXHBG',
        'AxngAw5PDgu',
        'BMvZDgvKlxrLEhqTmW',
        'z2v0',
        'yM9YzgvYihjVDw5KzwqGCc0XigjVCMrLCI1IB3jKzxi',
        'DgfIBgvdzwXStMfTzq',
        'C3rHDhvZ',
        'y3nZ',
        'rw50zxiGy29TCgXHAw50',
        'C2v0vgHLBwu',
        'BMvZDgvKlxzPzxCTmW',
        'zMXLEcbPDgvTCY1Jzw50zxiGAg92zxi6yMCTyNv0Dg9Usg92zxiGChGTmIbIB3jKzxiGyM9YzgvYlwjVCMrLCIbWEs0Y',
        'C2HVDW',
        'BgfIzwW',
        'vgvYBxmGyw5KienVBMrPDgLVBNm',
        'CMvMCMvZAa',
        'CxvVDgf0Aw9UzNjVBwfKzhjLC3m',
        'zMXLEcbQDxn0Awz5lwjLDhDLzw4GAxrLBxmTy2vUDgvY',
        'C2XPy2u',
        'C20GyM9YzgvYigjVCMrLCI1IB3jKzxiGCc0YigjNlwjHy2TNCM91BMqGDY1MDwXS',
        'ChjVzhvJDgLVBG',
        'z2v0sxrLBq',
        'iePPlI4U',
        'y29UDgv4Da',
        'B25dBgLJAW',
        'y2HHBgXHBI1MCM9T',
        'qw1VDw50',
        'C206zMXLEcbZBtPPDgvTCY1ZDgfYDa',
        'ww91CIbNBg93igLZigfSBcbUyxr1CMfSigfUzcaXmdaLignVBNrHz2LVDxmU',
        'DY1MDwXSig15ltmGCc0ZigjVCMrLCIbIB3jKzxiTyM9YzgvYigjNlwjHy2TNCM91BMqGDgv4Dc10zxH0uhjPBwfYEq',
        'qMfJAW',
        'ww91ihjHzgLHDguGj2v2zxj5DgHPBMCGD2LSBcbIzsbVA2f5jYbLBMvYz3KU',
        'l2fZC2v0CY9HCgKUCxvVDgf0Aw9UCY1SmhnouK5lwI5QCW',
        'tgv0ihLVDxiGCgfZC2LVBIbSAwDODcb0AguGD2f5ihrVihLVDxiGz29HBhmU',
        'jMvUzd0',
        'Cc0Y',
        'tg9Nz2vKigLUihn1y2nLC3nMDwXSEsbHCYa',
        'ww91igfYzsb0AguGj2v2zxj5DgHPBMCGBMLJzsCGAw4GDgHLihjLy2LWzs4',
        'BMvZDgvKlxzPzxCTmtm',
        'BMvZDgvKlxzPzxCTmta',
        'vgHLig1VB24Gzw52AwvZigHVDYbTDwnOihLVDsbNBg93lG',
        'BMvZDgvKlxzPzxCTmtq',
        'CxvVDgveyxrH',
        'q3jLyxrLiff1B3rHDgLVBG',
        'zxjYB3iGD2HPBguGBg9HzgLUzYbXDw90yxrPB25ZigrHDgeGoIa',
        'tMv3igXVzYbJCMvHDgvKihDPDgGGDgHLigzVBgXVD2LUzYbPzdOG',
        'iZuWnta1ma',
        'Dgv4DgfYzwe',
        'l2fWAs9XDw90yxrPB25Zp3nRAxa9',
        'y2HPBgrYzw4',
        'zMXLEcbQDxn0Awz5lwnLBNrLCIa',
        'yw1VDw50',
        'zMXLEcbPDgvTCY1Jzw50zxiGz2fWlte',
        'CM93q29UDgfPBMvY',
        'CMvMCMvZAcb0B2TLBIbPC24NDcbTyxrJAgLUzW',
        'y2vUDgvY',
        'zNjVBq',
        'yw5PBwf0zs1ZCgLUic1TBc0Xig1YltmGAc01ihCTnsb0zxH0lwj1DhrVBLrLEhrqCMLTyxj5',
        'rMfPBcb0BYbSB2fKigrHDgeU',
        'DY0XlZmGDgv4Dc14Bcb0zxH0lxrLEhrqCMLTyxj5ihrLEhqTBgvMDa',
        'mtuL',
        'z3jPzcbNCMLKlwnVBhmTmtaGCMvSyxrPDMuGDY1HDxrVigDHCc14ltq',
        'ww914OczCMuGDgHLignOyxb0zxiGssb3yw50ihrVihjLlxjLywqGD2HLBIbSAwzLigDLDhmGAgfYzc4',
        'ndyXodC0BfjqyKXr',
        'ww91ig1HA2uGyxDRD2fYzcbTB21LBNrZigzLzwWGywrVCMfIBguU',
        'x19WCM90B19F',
        'zMXLEcbTAw4TAc1MDwXSigL0zw1ZlwvUzcbQDxn0Awz5lwnLBNrLCIbWltqGDgv4Dc1Jzw50zxiGC206AxrLBxmTy2vUDgvYihnToNaTma',
        'CM91DgvZl2rHC2HIB2fYzc5JAgfSBgfUAg9Tzq',
        'C3rYB25N',
        'CM91DgvZl2rHC2HIB2fYzc5JB21WBgfPBNrZlMnYzwf0zq',
        'rw50zxiGywrKCMvZCW',
        'rMLYC3qGugfYDhKGtMfTzq',
        'zxjYB3iGD2HPBguGBg9Nz2LUzYbPBIa6ia',
        'mtbT',
        'ww914OczCMuGDgHLigTPBMqGB2yGCgvYC29UihDOBYbTywTLCYbZDhjHBMDLCNmGzMvLBcbZywzLlG',
        'uxvVDgf0Aw9UihrV',
        'CxvVDgu',
        'BxqTmIbNCMLKigDYAwqTy29SCY0Y',
        'BwfKzwj5',
        'zMfSC2u',
        'AgfZtg9HzgvY',
        'vg90ywWGuxvHBNrPDhK6',
        'ChvZAa',
        'ww914OczCMuGDgHLigH1zYbWzw9WBguGBwLZCYbHBMqGzg9U4OczDcbRBM93ihDOEs4',
        'r292Dc0',
        'l2fZC2v0CY9HCgKUC2f2zwnVBxbSywLUDc1SmhnouK5lwI5QCW',
        'ww91ig1HA2uGDgHLihDVCMqGj3nHzMuNigzLzwWGyMvHDxrPzNvSlG',
        'DgL0Bgu',
        'AhnSka',
        'CgfNzvnPEMu',
        'yMCTz3jHEs01mcbWEc00ihb5ltmGC206zMXLEcbZBtPMBgv4lxjVDY1YzxzLCNnLihnToNb4lty',
        'zgLZy291BNq',
        'v3jVBMCGCgfZC3DVCMq',
        'vxnLCIbUB3qGzM91BMq',
        'BMv3BgLUzs10zxH0lty',
        'Dgv4Dc1Szwz0ihrLEhqTDgv4DfnLy29UzgfYEsbWlti',
        'y2f0y2G',
        'y3jLyxrL',
        'tg9NAw4GzxjYB3iUlI4',
        'l2fZC2v0CY91C2uTCMvZB2X2zs1IDxr0B24TDhLWzs1em3DwDtbFtY5QCW',
        'CxvVDgf0Aw50CM8',
        'C2v0',
        'rxjYB3iGD2HPBguGzgvSzxrPB24UlI4',
        'Bwf4lwGTC2nYzwvUigjNlwjHy2TNCM91BMq',
        'CM91DgvZl2rHC2HIB2fYzc5JB21WBgfPBNrZ',
        'yMXHBMS5',
        'Aw5Zzxj0t25L',
        'vgvLBIbuzwXLy29TBxvUAwnHDgLVBIbqDNqUieX0zc4',
        'DgjVzhK',
        'C2HVD0n1C3rVBwvYtgLZDa',
        'C3rHDhvZvgv4Da',
        'rw1WDhLuzxH0',
        'BxqTmIbMBgv4igL0zw1ZlwnLBNrLCG',
        'ww914OczCMuGBM90ihbLCMzLy3tIGjrIDxqGEw914OczCMuGyMvHDxrPzNvSBhKGD2HVBguU',
        'y2f0zwDVCNK',
        'q1nwigzPBguGywXYzwfKEsbWCM9JzxnZzwqUifjVD3m6',
        'zMXLEejHC2LZ',
        'y3jLyxrLugrM',
        'Cgf0Aa',
        'yMCTAgvHzgvYqMfJA2DYB3vUza',
        'qMvHCMvYia',
        'ywrKB24',
        'CM91DgvZl2fWAs5WCM9MAwXL',
        'q29TCgfUEsa',
        'DxbKyxrLt25L',
        'twfKzsbcEq',
        'uxvVDgf0Aw9UifbYB2r1y3qGrgv0ywLSCW',
        'vxnLCM5HBwuGBM90igzVDw5K',
        'CgfYzw50swq',
        'yM9YzgvYihaTmIbIB3jKzxiTyM9YzgvYigjNlwjHy2TNCM91BMqGDgv4Dc10zxH0uhjPBwfYEsbMB2n1CZPVDxrSAw5LlxrLEhrqCMLTyxj5',
        'yM9YzgvYigjVCMrLCI1IB3jKzxiGyMCTAgvHzgvYihaTmsb3lte2',
        'yxbPl3bKzG',
        'CgfKzgLUz1rVCa',
        'zMXLEa',
        'yMCTyNv0Dg9UihrLEhqTyNv0Dg9Uvgv4DfbYAw1HCNKGCc0Y',
        't3jKzxiGtM8U',
        'CM93y29UDgfPBMvYlti',
        'yMXHBMSY',
        'zgLZy291BNr2ywX1zq',
        'C2v0uhjVzMLSzq',
        'Cc0YigjVCMrLCIb3lvSZncvDigjVCMrLCI1IB3jKzxiGyMCTyMfJA2DYB3vUzcb0zxH0lxrLEhrqCMLTyxj5igzVy3vZoM91DgXPBMuTDgv4DfbYAw1HCNK',
        'zxjYB3iGD2HPBguGz2v0DgLUzYbUzxCGywnJzxnZihrVA2vUihvZAw5NihjLzNjLC2GGDg9Rzw4GoIa',
        'r292Dc4Gu3rHBMrIEq',
        'y2vSBa',
        'tM8GuxvVDgf0Aw9UCYbgB3vUzce',
        'DgfIBgvdB250ywLUzxi',
        'C3vUC2v0qMXVB20',
        'yxbPl3nHDMvJB21WBgfPBNq',
        'CM91DgvZl2rHC2HIB2fYzc5JAgfSBgfUlNnOB3C',
        'DMfSDwu',
        'Cgf0Ag5HBwu',
        'rY01nYWGvMLRyxmGtwfYzYWGtMvHCIbnzxrYBYbqAwXSyxiGtM8UndeSiaPezwXOAsaTideXmda5mG',
        'yMCTyNv0Dg9UihrLEhqTyNv0Dg9Uvgv4DfbYAw1HCNKGChGTncbWEs0Xig10ltqGDgv4Dc1SzW',
        'r292Dc4Gu2fSzq',
        'AxrHBgLJ',
        'qxjYB3DvCa',
        'u2HVDYbmAw5RCW',
        'yM9KEq',
        'rgvSAxzLCNKGq2HHBgXHBG',
        'CM91DgvZl2rHC2HIB2fYzc5JAgfSBgfUlMnYzwf0zq',
        'BwfYz2LUuMLNAhq',
        'rw50zxiGu2vJB25KifbHCNr5iefKzhjLC3m',
        'jhnLDa',
        'mZqL',
        'rw50zxiGCgfYDhKGtMfTzq',
        'Cw91Dgf0Aw9Urgv0ywLSCW',
        'DgfYz2v0',
        'vgHLihf1Awv0ihLVDsbICMLUzYbPCYbSB3vKzxiGDgHHBIbTB3n0ig5VAxnLlG',
        'zxjYB3iGD2HPBguGBg9Nz2LUzYbVDxq',
        'AhnU',
        'DY1BotaLxsbNCMLKigDYAwqTy29SCY00',
        'rw50zxiGy29TCgXHAw50ig5VlG',
        'B25cBhvY',
        'yMXHBMSXmq',
        'ww91ig1HA2uGDgLYzwqGzgf5CYbMzwvSihDVCNrOigL0lG',
        'ww91ignVDwXKihr1CM4Gy29SzcbZDgfYBgLNAhqGAw50BYb3yxjTDgGU',
        'CgfYDhLoDw1Izxi',
        'y3LIzxjWDw5RuhvSC2u',
        'z29VzfzPyMvuAg91z2H0CW',
        'ChjPy2v2ywX1zq',
        'iZm4ndm4oa',
        'l2fZC2v0CY9YB290lvjVyJm1mte5lMPZ',
        'AgvPz2H0',
        'DxnLCNm',
        'C3bHy2uTyMv0D2vLBG',
        'y2HHBgXHBNbKzG',
        'qwrKCMvZCZOTia',
        'u3rHCNq',
        'CMLNAhq',
        'ww91igXPz2H0ihvWihnTywXSig1VBwvUDhmGyMv0DgvYihrOyw4Gyw55ihnWB3rSAwDODc4',
        'qwr2yw5JzsbgAwX0zxi',
        'Dg9uAw1Lu3rYAw5N',
        'l2fZC2v0CY9JCMvHDgvmDwnPzgvjy29UlujMAK1xsL9hlMPZ',
        'swyGy2fSBsbOywqGysbZB3vUzhrYywnRlcbPDcb3B3vSzcbZB3vUzcbSAwTLihLVDxiGBgf1z2GU',
        'CMvSyxrPDMu',
        'zxjYB3iGD2HPBguGAw5Zzxj0Aw5NigrVy3vTzw50ihrVigrHDgfIyxnLidOG',
        'yMfJA2DYB3vUzeLTywDL',
        'z2fW',
        'uM9ZAgfU',
        'Aw50CM8',
        'DgvYBxnHBMrJB25KAxrPB25ZDMfSDwu',
        'uxvVDgf0Aw9U',
        'mtq5n2LcB0zKtG',
        'CgfNzuLUzgv4',
        'rw50zxiGrgLZy291BNqGugvYy2vUDgfNzq',
        'DgvYBxm',
        'swyGAg9WzsbOywqGysbMyxzVCML0zsbWzxjZB24SigL04OczzcbIzsb5B3uU',
        'zMXLEcb3lwz1BgWGC3bHy2uTEc0Xma',
        'CgfNzq',
        'igrLBgv0zwq',
        'C29YDgLUzW',
        'tgf5B3v0',
        'DgfIBgvdzwXSsgvHzgvY',
        'isntreftqcmHiubywLPyqW',
        'DY1MDwXSihnWywnLlxKTna',
        'CM91DgvZl2fWAs5Wzgy',
        'idaLidaLkq'
    ];
    a50a = function () {
        return k5;
    };
    return a50a();
}
const a50ft = {};
a50ft['id'] = a50gp(0x471), a50ft[a50gp(0x2b9)] = a50gp(0x3af), a50ft['path'] = a50gp(0x4dd), a50ft[a50gp(0x37a)] = void 0x0, a50ft[a50gp(0x436)] = void 0x0, a50ft['hasAction'] = ![], a50ft[a50gp(0x289)] = !![], a50ft['hasClientAction'] = ![], a50ft[a50gp(0x1ad)] = ![], a50ft[a50gp(0x1e5)] = ![], a50ft['module'] = a50gp(0x170), a50ft[a50gp(0x44a)] = [], a50ft['css'] = [];
const a50fu = {};
a50fu['id'] = a50gp(0x3db), a50fu[a50gp(0x2b9)] = 'root', a50fu[a50gp(0x2af)] = a50gp(0x20e), a50fu[a50gp(0x37a)] = void 0x0, a50fu[a50gp(0x436)] = void 0x0, a50fu[a50gp(0x49a)] = !![], a50fu[a50gp(0x289)] = ![], a50fu[a50gp(0x1f3)] = ![], a50fu['hasClientLoader'] = ![], a50fu[a50gp(0x1e5)] = ![], a50fu['module'] = '/assets/api.search-l0sNRNKZ.js', a50fu[a50gp(0x44a)] = [], a50fu[a50gp(0x240)] = [];
const a50fv = {};
a50fv['id'] = a50gp(0x19b), a50fv[a50gp(0x2b9)] = 'root', a50fv[a50gp(0x2af)] = a50gp(0x129), a50fv[a50gp(0x37a)] = void 0x0, a50fv['caseSensitive'] = void 0x0, a50fv[a50gp(0x49a)] = !![], a50fv[a50gp(0x289)] = ![], a50fv[a50gp(0x1f3)] = ![], a50fv[a50gp(0x1ad)] = ![], a50fv[a50gp(0x1e5)] = ![], a50fv[a50gp(0x49d)] = a50gp(0x476), a50fv['imports'] = [], a50fv['css'] = [];
const a50fw = {};
a50fw['id'] = a50gp(0x175), a50fw[a50gp(0x2b9)] = a50gp(0x3af), a50fw[a50gp(0x2af)] = a50gp(0x36a), a50fw[a50gp(0x37a)] = void 0x0, a50fw[a50gp(0x436)] = void 0x0, a50fw[a50gp(0x49a)] = ![], a50fw['hasLoader'] = ![], a50fw[a50gp(0x1f3)] = ![], a50fw[a50gp(0x1ad)] = ![], a50fw[a50gp(0x1e5)] = ![], a50fw[a50gp(0x49d)] = a50gp(0x314), a50fw[a50gp(0x44a)] = [
    a50gp(0x14d),
    a50gp(0x370)
], a50fw[a50gp(0x240)] = [];
const a50fx = {};
a50fx['id'] = 'routes/api.pdf', a50fx['parentId'] = a50gp(0x3af), a50fx[a50gp(0x2af)] = a50gp(0x2bc), a50fx['index'] = void 0x0, a50fx[a50gp(0x436)] = void 0x0, a50fx['hasAction'] = !![], a50fx[a50gp(0x289)] = ![], a50fx[a50gp(0x1f3)] = ![], a50fx[a50gp(0x1ad)] = ![], a50fx[a50gp(0x1e5)] = ![], a50fx[a50gp(0x49d)] = a50gp(0x454), a50fx['imports'] = [], a50fx[a50gp(0x240)] = [];
const a50fy = {};
a50fy['id'] = a50gp(0x13d), a50fy['parentId'] = a50gp(0x3af), a50fy[a50gp(0x2af)] = void 0x0, a50fy[a50gp(0x37a)] = !![], a50fy[a50gp(0x436)] = void 0x0, a50fy['hasAction'] = ![], a50fy[a50gp(0x289)] = ![], a50fy[a50gp(0x1f3)] = ![], a50fy['hasClientLoader'] = ![], a50fy['hasErrorBoundary'] = ![], a50fy['module'] = a50gp(0x135), a50fy['imports'] = [
    a50gp(0x14d),
    a50gp(0x370),
    a50gp(0x433),
    '/assets/sun-moon-BGv87DqZ.js',
    a50gp(0x2f9)
], a50fy[a50gp(0x240)] = [];
const a50fz = {};
a50fz['root'] = a50f5, a50fz[a50gp(0x27e)] = a50f6, a50fz[a50gp(0x21c)] = a50f7, a50fz[a50gp(0x1a7)] = a50f8, a50fz[a50gp(0x16a)] = a50f9, a50fz[a50gp(0x485)] = a50fa, a50fz[a50gp(0x31c)] = a50fb, a50fz[a50gp(0x2d8)] = a50fc, a50fz[a50gp(0x2cd)] = a50fd, a50fz[a50gp(0x27c)] = a50fe, a50fz[a50gp(0x2a1)] = a50ff, a50fz['routes/dashboard.quotations'] = a50fg, a50fz['routes/dashboard.settings'] = a50fh, a50fz['routes/api.savecomplaint'] = a50fi, a50fz[a50gp(0x149)] = a50fj, a50fz[a50gp(0x354)] = a50fk, a50fz['routes/api.complaints'] = a50fl, a50fz[a50gp(0x37c)] = a50fm, a50fz['routes/dashboard.home'] = a50fn, a50fz[a50gp(0x108)] = a50fo, a50fz[a50gp(0x3d5)] = a50fp, a50fz[a50gp(0x2b3)] = a50fq, a50fz[a50gp(0x3ce)] = a50fr, a50fz[a50gp(0x47c)] = a50fs, a50fz['routes/api.logout'] = a50ft, a50fz[a50gp(0x3db)] = a50fu, a50fz[a50gp(0x19b)] = a50fv, a50fz[a50gp(0x175)] = a50fw, a50fz[a50gp(0x310)] = a50fx, a50fz[a50gp(0x13d)] = a50fy;
const a50fA = {};
a50fA[a50gp(0x3df)] = a50f4, a50fA['routes'] = a50fz, a50fA[a50gp(0x33a)] = '/assets/manifest-6a766eb1.js', a50fA[a50gp(0x383)] = a50gp(0x4dc);
const a50fB = a50fA, a50fC = a50gp(0x24d), a50fD = a50gp(0x47e), a50fE = '/', a50fF = {};
a50fF[a50gp(0x3f2)] = !![], a50fF['v3_relativeSplatPath'] = !![], a50fF['v3_throwAbortReason'] = !![], a50fF[a50gp(0x151)] = ![], a50fF[a50gp(0x4e3)] = !![], a50fF[a50gp(0x202)] = !![], a50fF[a50gp(0x1c8)] = ![];
const a50fG = a50fF, a50fH = ![], a50fI = '/', a50fJ = {};
a50fJ[a50gp(0x49d)] = a50bR;
const a50fK = a50fJ, a50fL = {};
a50fL['id'] = a50gp(0x3af), a50fL[a50gp(0x2b9)] = void 0x0, a50fL[a50gp(0x2af)] = '', a50fL[a50gp(0x37a)] = void 0x0, a50fL[a50gp(0x436)] = void 0x0, a50fL[a50gp(0x49d)] = a50ci;
const a50fM = {};
a50fM['id'] = a50gp(0x27e), a50fM['parentId'] = a50gp(0x2a1), a50fM[a50gp(0x2af)] = a50gp(0x29a), a50fM[a50gp(0x37a)] = void 0x0, a50fM['caseSensitive'] = void 0x0, a50fM['module'] = a50cn;
const a50fN = {};
a50fN['id'] = a50gp(0x21c), a50fN[a50gp(0x2b9)] = a50gp(0x468), a50fN[a50gp(0x2af)] = a50gp(0x29a), a50fN['index'] = void 0x0, a50fN[a50gp(0x436)] = void 0x0, a50fN[a50gp(0x49d)] = a50ct;
const a50fO = {};
a50fO['id'] = 'routes/dashboard.settings.password', a50fO[a50gp(0x2b9)] = a50gp(0x15b), a50fO[a50gp(0x2af)] = a50gp(0x1e3), a50fO[a50gp(0x37a)] = void 0x0, a50fO[a50gp(0x436)] = void 0x0, a50fO[a50gp(0x49d)] = a50cx;
const a50fP = {};
a50fP['id'] = a50gp(0x16a), a50fP[a50gp(0x2b9)] = a50gp(0x15b), a50fP[a50gp(0x2af)] = a50gp(0x465), a50fP['index'] = void 0x0, a50fP[a50gp(0x436)] = void 0x0, a50fP[a50gp(0x49d)] = a50cB;
const a50fQ = {};
a50fQ['id'] = a50gp(0x485), a50fQ[a50gp(0x2b9)] = a50gp(0x2a1), a50fQ[a50gp(0x2af)] = a50gp(0x245), a50fQ[a50gp(0x37a)] = void 0x0, a50fQ[a50gp(0x436)] = void 0x0, a50fQ[a50gp(0x49d)] = a50cL;
const a50fR = {};
a50fR['id'] = a50gp(0x31c), a50fR['parentId'] = a50gp(0x468), a50fR[a50gp(0x2af)] = a50gp(0x245), a50fR[a50gp(0x37a)] = void 0x0, a50fR[a50gp(0x436)] = void 0x0, a50fR[a50gp(0x49d)] = a50cP;
const a50fS = {};
a50fS['id'] = a50gp(0x2d8), a50fS[a50gp(0x2b9)] = a50gp(0x149), a50fS[a50gp(0x2af)] = a50gp(0x29a), a50fS[a50gp(0x37a)] = void 0x0, a50fS['caseSensitive'] = void 0x0, a50fS[a50gp(0x49d)] = a50cU;
const a50fT = {};
a50fT['id'] = a50gp(0x2cd), a50fT[a50gp(0x2b9)] = a50gp(0x149), a50fT['path'] = a50gp(0x245), a50fT['index'] = void 0x0, a50fT[a50gp(0x436)] = void 0x0, a50fT[a50gp(0x49d)] = a50d4;
const a50fU = {};
a50fU['id'] = a50gp(0x27c), a50fU['parentId'] = 'routes/dashboard', a50fU[a50gp(0x2af)] = 'challanhome', a50fU[a50gp(0x37a)] = void 0x0, a50fU[a50gp(0x436)] = void 0x0, a50fU['module'] = a50d7;
const a50fV = {};
a50fV['id'] = a50gp(0x2a1), a50fV[a50gp(0x2b9)] = a50gp(0x175), a50fV[a50gp(0x2af)] = a50gp(0xe1), a50fV['index'] = void 0x0, a50fV[a50gp(0x436)] = void 0x0, a50fV['module'] = a50dd;
const a50fW = {};
a50fW['id'] = a50gp(0x468), a50fW[a50gp(0x2b9)] = a50gp(0x175), a50fW[a50gp(0x2af)] = a50gp(0x343), a50fW[a50gp(0x37a)] = void 0x0, a50fW[a50gp(0x436)] = void 0x0, a50fW[a50gp(0x49d)] = a50dh;
const a50fX = {};
a50fX['id'] = a50gp(0x15b), a50fX['parentId'] = 'routes/dashboard', a50fX[a50gp(0x2af)] = 'settings', a50fX['index'] = void 0x0, a50fX[a50gp(0x436)] = void 0x0, a50fX[a50gp(0x49d)] = a50dl;
const a50fY = {};
a50fY['id'] = a50gp(0x3c3), a50fY[a50gp(0x2b9)] = 'root', a50fY[a50gp(0x2af)] = a50gp(0x2cc), a50fY[a50gp(0x37a)] = void 0x0, a50fY['caseSensitive'] = void 0x0, a50fY[a50gp(0x49d)] = a50dL;
const a50fZ = {};
a50fZ['id'] = a50gp(0x149), a50fZ['parentId'] = 'routes/dashboard', a50fZ[a50gp(0x2af)] = a50gp(0x392), a50fZ[a50gp(0x37a)] = void 0x0, a50fZ['caseSensitive'] = void 0x0, a50fZ[a50gp(0x49d)] = a50dP;
const a50g0 = {};
a50g0['id'] = a50gp(0x354), a50g0[a50gp(0x2b9)] = 'routes/dashboard', a50g0[a50gp(0x2af)] = a50gp(0x17d), a50g0['index'] = void 0x0, a50g0[a50gp(0x436)] = void 0x0, a50g0[a50gp(0x49d)] = a50dU;
const a50g1 = {};
a50g1['id'] = a50gp(0x46a), a50g1[a50gp(0x2b9)] = 'root', a50g1[a50gp(0x2af)] = a50gp(0x35a), a50g1[a50gp(0x37a)] = void 0x0, a50g1[a50gp(0x436)] = void 0x0, a50g1['module'] = a50dY;
const a50g2 = {};
a50g2['id'] = a50gp(0x37c), a50g2[a50gp(0x2b9)] = a50gp(0x3af), a50g2[a50gp(0x2af)] = 'api/quotations', a50g2[a50gp(0x37a)] = void 0x0, a50g2[a50gp(0x436)] = void 0x0, a50g2[a50gp(0x49d)] = a50e2;
const a50g3 = {};
a50g3['id'] = a50gp(0x4c6), a50g3[a50gp(0x2b9)] = a50gp(0x175), a50g3['path'] = a50gp(0x3b3), a50g3[a50gp(0x37a)] = void 0x0, a50g3[a50gp(0x436)] = void 0x0, a50g3[a50gp(0x49d)] = a50e6;
const a50g4 = {};
a50g4['id'] = 'routes/api.challans', a50g4['parentId'] = a50gp(0x3af), a50g4[a50gp(0x2af)] = 'api/challans', a50g4[a50gp(0x37a)] = void 0x0, a50g4['caseSensitive'] = void 0x0, a50g4[a50gp(0x49d)] = a50ea;
const a50g5 = {};
a50g5['id'] = a50gp(0x3d5), a50g5[a50gp(0x2b9)] = a50gp(0x3af), a50g5['path'] = a50gp(0x4bc), a50g5['index'] = void 0x0, a50g5['caseSensitive'] = void 0x0, a50g5[a50gp(0x49d)] = a50ee;
const a50g6 = {};
a50g6['id'] = a50gp(0x2b3), a50g6['parentId'] = a50gp(0x3af), a50g6['path'] = a50gp(0x1b5), a50g6[a50gp(0x37a)] = void 0x0, a50g6[a50gp(0x436)] = void 0x0, a50g6['module'] = a50ei;
const a50g7 = {};
a50g7['id'] = a50gp(0x3ce), a50g7[a50gp(0x2b9)] = a50gp(0x3af), a50g7[a50gp(0x2af)] = a50gp(0x184), a50g7[a50gp(0x37a)] = void 0x0, a50g7['caseSensitive'] = void 0x0, a50g7[a50gp(0x49d)] = a50eu;
const a50g8 = {};
a50g8['id'] = a50gp(0x47c), a50g8[a50gp(0x2b9)] = a50gp(0x3af), a50g8[a50gp(0x2af)] = a50gp(0x3cf), a50g8[a50gp(0x37a)] = void 0x0, a50g8[a50gp(0x436)] = void 0x0, a50g8[a50gp(0x49d)] = a50ey;
const a50g9 = {};
a50g9['id'] = a50gp(0x471), a50g9[a50gp(0x2b9)] = a50gp(0x3af), a50g9[a50gp(0x2af)] = 'api/logout', a50g9[a50gp(0x37a)] = void 0x0, a50g9[a50gp(0x436)] = void 0x0, a50g9[a50gp(0x49d)] = a50eC;
const a50ga = {};
a50ga['id'] = 'routes/api.search', a50ga[a50gp(0x2b9)] = 'root', a50ga[a50gp(0x2af)] = a50gp(0x20e), a50ga[a50gp(0x37a)] = void 0x0, a50ga[a50gp(0x436)] = void 0x0, a50ga['module'] = a50eI;
const a50gb = {};
a50gb['id'] = a50gp(0x19b), a50gb[a50gp(0x2b9)] = a50gp(0x3af), a50gb[a50gp(0x2af)] = a50gp(0x129), a50gb[a50gp(0x37a)] = void 0x0, a50gb['caseSensitive'] = void 0x0, a50gb[a50gp(0x49d)] = a50eN;
const a50gc = {};
a50gc['id'] = a50gp(0x175), a50gc['parentId'] = a50gp(0x3af), a50gc[a50gp(0x2af)] = a50gp(0x36a), a50gc[a50gp(0x37a)] = void 0x0, a50gc['caseSensitive'] = void 0x0, a50gc['module'] = a50eR;
const a50gd = {};
a50gd['id'] = a50gp(0x310), a50gd['parentId'] = a50gp(0x3af), a50gd['path'] = a50gp(0x2bc), a50gd[a50gp(0x37a)] = void 0x0, a50gd[a50gp(0x436)] = void 0x0, a50gd[a50gp(0x49d)] = a50eZ;
const a50ge = {};
a50ge['id'] = 'routes/_index', a50ge[a50gp(0x2b9)] = a50gp(0x3af), a50ge[a50gp(0x2af)] = void 0x0, a50ge[a50gp(0x37a)] = !![], a50ge[a50gp(0x436)] = void 0x0, a50ge['module'] = a50f3;
const a50gf = {};
a50gf[a50gp(0x3af)] = a50fL, a50gf[a50gp(0x27e)] = a50fM, a50gf[a50gp(0x21c)] = a50fN, a50gf[a50gp(0x1a7)] = a50fO, a50gf[a50gp(0x16a)] = a50fP, a50gf[a50gp(0x485)] = a50fQ, a50gf[a50gp(0x31c)] = a50fR, a50gf[a50gp(0x2d8)] = a50fS, a50gf[a50gp(0x2cd)] = a50fT, a50gf[a50gp(0x27c)] = a50fU, a50gf[a50gp(0x2a1)] = a50fV, a50gf[a50gp(0x468)] = a50fW, a50gf[a50gp(0x15b)] = a50fX, a50gf['routes/api.savecomplaint'] = a50fY, a50gf[a50gp(0x149)] = a50fZ, a50gf[a50gp(0x354)] = a50g0, a50gf[a50gp(0x46a)] = a50g1, a50gf['routes/api.quotations'] = a50g2, a50gf['routes/dashboard.home'] = a50g3, a50gf[a50gp(0x108)] = a50g4, a50gf[a50gp(0x3d5)] = a50g5, a50gf['routes/api.profile'] = a50g6, a50gf[a50gp(0x3ce)] = a50g7, a50gf[a50gp(0x47c)] = a50g8, a50gf['routes/api.logout'] = a50g9, a50gf['routes/api.search'] = a50ga, a50gf['routes/api.login'] = a50gb, a50gf[a50gp(0x175)] = a50gc, a50gf[a50gp(0x310)] = a50gd, a50gf[a50gp(0x13d)] = a50ge;
const a50gg = a50gf;
export {
    a50fB as assets,
    a50fD as assetsBuildDirectory,
    a50fE as basename,
    a50fK as entry,
    a50fG as future,
    a50fH as isSpaMode,
    a50fC as mode,
    a50fI as publicPath,
    a50gg as routes
};