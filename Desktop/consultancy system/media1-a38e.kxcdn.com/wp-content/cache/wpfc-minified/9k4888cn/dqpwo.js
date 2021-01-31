! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], "__proto__" !== d && g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; d < c; d++)
                    if (!1 === b.call(a[d], d, a[d])) break
            } else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (d < c) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)(d = !b(a[f], f)) !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; g < d; g++) null != (e = b(a[g], g, c)) && h.push(e);
            else
                for (g in a) null != (e = b(a[g], g, c)) && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            if ("string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a)) return c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = fa(),
            z = fa(),
            A = fa(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (xa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + pa(r[h]);
                        s = r.join(","), w = _.test(a) && na(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function fa() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ga(a) {
            return a[u] = !0, a
        }

        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (xa) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ia(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ja(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ka(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ma(a) {
            return ga(function(b) {
                return b = +b, ga(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function na(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }
        c = ea.support = {}, f = ea.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ea.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ha(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if (void 0 !== b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ha(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ja(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ea.matches = function(a, b) {
            return ea(a, null, null, b)
        }, ea.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (xa) {}
            return ea(b, n, null, [a]).length > 0
        }, ea.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ea.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ea.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ea.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ea.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ea.selectors = {
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ea.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), !1 === t)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ga(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ga(function(a) {
                    return function(b) {
                        return ea(a, b).length > 0
                    }
                }),
                contains: ga(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ga(function(a) {
                    return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ma(function() {
                    return [0]
                }),
                last: ma(function(a, b) {
                    return [b - 1]
                }),
                eq: ma(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: ma(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: ma(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: ma(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ma(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ka(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = la(b);

        function oa() {}
        oa.prototype = d.filters = d.pseudos, d.setFilters = new oa, g = ea.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0)
        };

        function pa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function qa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ra(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sa(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ea(a, b[d], c);
            return c
        }

        function ta(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function ua(a, b, c, d, e, f) {
            return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || sa(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ta(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ta(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function va(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function(a) {
                    return a === b
                }, h, !0), l = qa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [qa(ra(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a))
                    }
                    m.push(c)
                }
            return ra(m)
        }

        function wa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ta(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ga(f) : f
        }
        return h = ea.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, wa(e, d)), f.selector = a
            }
            return f
        }, i = ea.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) {
                        if (j.splice(i, 1), !(a = f.length && pa(j))) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ha(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ia("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ha(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ia("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ha(function(a) {
            return null == a.getAttribute("disabled")
        }) || ia(K, function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ea
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; b < e; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; b < e; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                    for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if ((f = d.getElementById(e[2])) && f.parentNode) {
                if (f.id !== e[2]) return A.find(a);
                this.length = 1, this[0] = f
            }
            return this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    }).prototype = n.fn, A = n(d);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.uniqueSort(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g;

    function G(a) {
        var b = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) {
                        n.each(c, function(c, d) {
                            n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function I() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J)) : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (I(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!H)
            if (H = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J);
        else {
            d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && function b() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (e) {
                        return a.setTimeout(b, 50)
                    }
                    I(), n.ready()
                }
            }()
        }
        return H.promise(b)
    }, n.ready.promise();
    var K;
    for (K in n(l)) break;
    l.ownFirst = "0" === K, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]) && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var L = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b)
        },
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if ("string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : M.test(c) ? n.parseJSON(c) : c)
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (L(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? null == (f = g[b]) && (f = g[n.camelCase(b)]) : f = g, f
        }
    }

    function R(a, b, c) {
        if (L(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !P(a)
            },
            data: function(a, b, c) {
                return Q(a, b, c)
            },
            removeData: function(a, b) {
                return R(a, b)
            },
            _data: function(a, b, c) {
                return Q(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return R(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), O(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? O(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--)(c = n._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return (c = d.getElementsByTagName("body")[0]) && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) X(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Y = /^(?:checkbox|radio)$/i,
        Z = /<([\w:-]+)/,
        $ = /^$|\/(?:java|ecma)script/i,
        _ = /^\s+/,
        aa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ba(a) {
        var b = aa.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var ca = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ca.optgroup = ca.option, ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead, ca.th = ca.td;

    function da(a, b) {
        var c, d, e = 0,
            f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function ea(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var fa = /<|&#?\w+;/,
        ga = /<tbody/i;

    function ha(a) {
        Y.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ia(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ba(b), q = [], r = 0; r < o; r++)
            if ((g = a[r]) || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (fa.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = (Z.exec(g) || ["", ""])[1].toLowerCase(), m = ca[j] || ca._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && _.test(g) && q.push(b.createTextNode(_.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ga.test(g) ? "<table>" !== m[1] || ga.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(da(q, "input"), ha), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = da(p.appendChild(g), "script"), h && ea(i), c) {
            f = 0;
            while (g = i[f++]) $.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = !1 === e.attributes[c].expando);
        e = null
    }();
    var ja = /^(?:input|select|textarea)$/i,
        ka = /^key/,
        la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ma = /^(?:focusinfocus|focusoutblur)$/,
        na = /^([^.]*)(?:\.(.+)|)/;

    function oa() {
        return !0
    }

    function pa() {
        return !1
    }

    function qa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ra(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ra(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = pa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = na.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = na.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ma.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, c))) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, ma.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), (g = h && i[h]) && g.apply && L(i) && (b.result = g.apply(i, c), !1 === b.result && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && L(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, void 0 !== (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = la.test(f) ? this.mouseHooks : ka.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== qa() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === qa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (n.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        if (!(this instanceof n.Event)) return new n.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? oa : pa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), this[n.expando] = !0
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: pa,
        isPropagationStopped: pa,
        isImmediatePropagationStopped: pa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = oa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = oa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            if (n.nodeName(this, "form")) return !1;
            n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            if (n.nodeName(this, "form")) return !1;
            n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            if (ja.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1;
            n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ja.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ja.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ra(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ra(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = pa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return n.event.trigger(a, b, c, !0)
        }
    });
    var sa = / jQuery\d+="(?:null|\d+)"/g,
        ta = new RegExp("<(?:" + aa + ")[\\s/>]", "i"),
        ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        va = /<script|<style|<link/i,
        wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xa = /^true\/(.*)/,
        ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        za = ba(d),
        Aa = za.appendChild(d.createElement("div"));

    function Ba(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Ca(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Da(a) {
        var b = xa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ea(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Fa(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Ca(b).text = a.text, Da(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Y.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ga(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d)
        });
        if (o && (k = ia(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(da(k, "script"), Ca), h = i.length; m < o; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, da(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Da), m = 0; m < h; m++) g = i[m], $.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
            k = e = null
        }
        return a
    }

    function Ha(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(da(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ua, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Aa.innerHTML = a.outerHTML, Aa.removeChild(f = Aa.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = da(f), h = da(a), g = 0; null != (e = h[g]); ++g) d[g] && Fa(e, d[g]);
            if (b)
                if (c)
                    for (h = h || da(a), d = d || da(f), g = 0; null != (e = h[g]); g++) Ea(e, d[g]);
                else Ea(a, f);
            return d = da(f, "script"), d.length > 0 && ea(d, !i && da(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || L(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ga,
        detach: function(a) {
            return Ha(this, a, !0)
        },
        remove: function(a) {
            return Ha(this, a)
        },
        text: function(a) {
            return X(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ga(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    Ba(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ga(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ba(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ga(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ga(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(da(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return X(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;
                if ("string" == typeof a && !va.test(a) && (l.htmlSerialize || !ta.test(a)) && (l.leadingWhitespace || !_.test(a)) && !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(da(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ga(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(da(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; d <= h; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ia, Ja = {
        HTML: "block",
        BODY: "block"
    };

    function Ka(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function La(a) {
        var b = d,
            c = Ja[a];
        return c || (c = Ka(a, b), "none" !== c && c || (Ia = (Ia || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ia[0].contentWindow || Ia[0].contentDocument).document, b.write(), b.close(), c = Ka(a, b), Ia.detach()), Ja[a] = c), c
    }
    var Ma = /^margin/,
        Na = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Oa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Pa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");

        function k() {
            var k, l, m = d.documentElement;
            m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                width: "4px"
            }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                marginRight: "4px"
            }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === k[0].offsetHeight) && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
        }
        j.style && (j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
            reliableHiddenOffsets: function() {
                return null == b && k(), f
            },
            boxSizingReliable: function() {
                return null == b && k(), e
            },
            pixelMarginRight: function() {
                return null == b && k(), c
            },
            pixelPosition: function() {
                return null == b && k(), b
            },
            reliableMarginRight: function() {
                return null == b && k(), g
            },
            reliableMarginLeft: function() {
                return null == b && k(), h
            }
        }))
    }();
    var Qa, Ra, Sa = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Qa = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Ra = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Qa(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Pa.currentStyle && (Qa = function(a) {
        return a.currentStyle
    }, Ra = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Qa(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Na.test(g) && !Sa.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ta(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ua = /alpha\([^)]*\)/i,
        Va = /opacity\s*=\s*([^)]*)/i,
        Wa = /^(none|table(?!-c[ea]).+)/,
        Xa = new RegExp("^(" + S + ")(.*)$", "i"),
        Ya = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Za = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        $a = ["Webkit", "O", "Moz", "ms"],
        _a = d.createElement("div").style;

    function ab(a) {
        if (a in _a) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = $a.length;
        while (c--)
            if ((a = $a[c] + b) in _a) return a
    }

    function bb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", La(d.nodeName)))) : (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function cb(a, b, c) {
        var d = Xa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function db(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function eb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Qa(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = Ra(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ra(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ra(a, b, d)), "normal" === f && b in Za && (f = Za[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Oa(a, Ya, function() {
                    return eb(a, b, d)
                }) : eb(a, b, d)
            },
            set: function(a, c, d) {
                var e = d && Qa(a);
                return cb(a, c, d ? db(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Va.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Ua, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ua.test(f) ? f.replace(Ua, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ta(l.reliableMarginRight, function(a, b) {
        if (b) return Oa(a, {
            display: "inline-block"
        }, Ra, [a, "marginRight"])
    }), n.cssHooks.marginLeft = Ta(l.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Ra(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Oa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px"
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ma.test(a) || (n.cssHooks[a + b].set = cb)
    }), n.fn.extend({
        css: function(a, b) {
            return X(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Qa(a), e = b.length; g < e; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return bb(this, !0)
        },
        hide: function() {
            return bb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function fb(a, b, c, d, e) {
        return new fb.prototype.init(a, b, c, d, e)
    }
    n.Tween = fb, fb.prototype = {
        constructor: fb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = fb.propHooks[this.prop];
            return a && a.get ? a.get(this) : fb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = fb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : fb.propHooks._default.set(this), this
        }
    }, fb.prototype.init.prototype = fb.prototype, fb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, fb.propHooks.scrollTop = fb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = fb.prototype.init, n.fx.step = {};
    var gb, hb, ib = /^(?:toggle|show|hide)$/,
        jb = /queueHooks$/;

    function kb() {
        return a.setTimeout(function() {
            gb = void 0
        }), gb = n.now()
    }

    function lb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function mb(a, b, c) {
        for (var d, e = (pb.tweeners[b] || []).concat(pb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function nb(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), "inline" === (k = "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ib.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = mb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function ob(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function pb(a, b, c) {
        var d, e, f = 0,
            g = pb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = gb || kb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: gb || kb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (ob(k, j.opts.specialEasing); f < g; f++)
            if (d = pb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, mb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(pb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(F);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], pb.tweeners[c] = pb.tweeners[c] || [], pb.tweeners[c].unshift(b)
            },
            prefilters: [nb],
            prefilter: function(a, b) {
                b ? pb.prefilters.unshift(a) : pb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = pb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && jb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: lb("show"),
            slideUp: lb("hide"),
            slideToggle: lb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (gb = n.now(); c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), gb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            hb || (hb = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(hb), hb = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var qb = /\r/g,
        rb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(rb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                if (n.isArray(b)) return a.checked = n.inArray(n(a).val(), b) > -1
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return X(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
        }
    }), tb = {
        set: function(a, b, c) {
            return !1 === b ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) {
            var e, f;
            return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
        } : ub[b] = function(a, b, c) {
            if (!c) return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), xb && wb || (n.attrHooks.value = {
        set: function(a, b, c) {
            if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
            a.defaultValue = b
        }
    }), wb || (sb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b
        }
    }, ub.id = ub.name = ub.coords = function(a, b, c) {
        var d;
        if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified) return c.value
        },
        set: sb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            sb.set(a, "" !== b && b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return X(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Bb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(F) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Bb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(F) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Bb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Fb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Tb(a, b, c, d) {
        var e = {},
            f = a === Ob;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ub(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Vb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Wb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qb,
            type: "GET",
            isLocal: Jb.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
        },
        ajaxPrefilter: Sb(Nb),
        ajaxTransport: Sb(Ob),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (u < 2)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), x(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(F) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Tb(Ob, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, x)
                } catch (y) {
                    if (!(u < 2)) throw y;
                    x(-1, y)
                }
            } else x(-1, "No Transport");

            function x(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && b < 300 || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), (x = w.getResponseHeader("etag")) && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Xb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Yb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) cc(c, a[c], b, e);
        return d.join("&").replace(Zb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Y.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
    } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in ec) ec[a](void 0, !0)
    }), l.cors = !!fc && "withCredentials" in fc, (fc = l.ajax = !!fc) && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++dc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function gc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function hc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ic.pop() || n.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ia([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var kc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && kc) return kc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function lc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Pa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return X(this, function(a, d, e) {
                var f = lc(a);
                if (void 0 === e) return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
                f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ta(l.pixelPosition, function(a, c) {
            if (c) return c = Ra(a, b), Na.test(c) ? n(a).position()[b] + "px" : c
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return X(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();
! function t(e, r, a) {
    function n(s, o) {
        if (!r[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!o && l) return l(s, !0);
                if (i) return i(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = r[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                var r = e[s][1][t];
                return n(r ? r : t)
            }, c, c.exports, t, e, r, a)
        }
        return r[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < a.length; s++) n(a[s]);
    return n
}({
    1: [function(t, e, r) {
        var a = (t("./includes/fields"), t("./includes/pagination"), t("./includes/state")),
            n = t("./includes/plugin");
        ! function(t) {
            "use strict";
            t(function() {
                String.prototype.replaceAll = function(t, e, r) {
                    return this.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), r ? "gi" : "g"), "string" == typeof e ? e.replace(/\$/g, "$$$$") : e)
                }, Object.keys || (Object.keys = function() {
                    var t = Object.prototype.hasOwnProperty,
                        e = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        a = r.length;
                    return function(n) {
                        if ("object" != typeof n && ("function" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
                        var i, s, o = [];
                        for (i in n) t.call(n, i) && o.push(i);
                        if (e)
                            for (s = 0; s < a; s++) t.call(n, r[s]) && o.push(r[s]);
                        return o
                    }
                }()), t.fn.searchAndFilter = n, t(".searchandfilter").searchAndFilter(), t(document).on("click", ".search-filter-reset", function(e) {
                    e.preventDefault();
                    var r = "undefined" != typeof t(this).attr("data-search-form-id") ? t(this).attr("data-search-form-id") : "",
                        n = "undefined" != typeof t(this).attr("data-sf-submit-form") ? t(this).attr("data-sf-submit-form") : "";
                    return a.getSearchForm(r).reset(n), !1
                })
            }), t.easing.jswing = t.easing.swing, t.extend(t.easing, {
                def: "easeOutQuad",
                swing: function(e, r, a, n, i) {
                    return t.easing[t.easing.def](e, r, a, n, i)
                },
                easeInQuad: function(t, e, r, a, n) {
                    return a * (e /= n) * e + r
                },
                easeOutQuad: function(t, e, r, a, n) {
                    return -a * (e /= n) * (e - 2) + r
                },
                easeInOutQuad: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e + r : -a / 2 * (--e * (e - 2) - 1) + r
                },
                easeInCubic: function(t, e, r, a, n) {
                    return a * (e /= n) * e * e + r
                },
                easeOutCubic: function(t, e, r, a, n) {
                    return a * ((e = e / n - 1) * e * e + 1) + r
                },
                easeInOutCubic: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e + r : a / 2 * ((e -= 2) * e * e + 2) + r
                },
                easeInQuart: function(t, e, r, a, n) {
                    return a * (e /= n) * e * e * e + r
                },
                easeOutQuart: function(t, e, r, a, n) {
                    return -a * ((e = e / n - 1) * e * e * e - 1) + r
                },
                easeInOutQuart: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + r : -a / 2 * ((e -= 2) * e * e * e - 2) + r
                },
                easeInQuint: function(t, e, r, a, n) {
                    return a * (e /= n) * e * e * e * e + r
                },
                easeOutQuint: function(t, e, r, a, n) {
                    return a * ((e = e / n - 1) * e * e * e * e + 1) + r
                },
                easeInOutQuint: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + r : a / 2 * ((e -= 2) * e * e * e * e + 2) + r
                },
                easeInSine: function(t, e, r, a, n) {
                    return -a * Math.cos(e / n * (Math.PI / 2)) + a + r
                },
                easeOutSine: function(t, e, r, a, n) {
                    return a * Math.sin(e / n * (Math.PI / 2)) + r
                },
                easeInOutSine: function(t, e, r, a, n) {
                    return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + r
                },
                easeInExpo: function(t, e, r, a, n) {
                    return 0 == e ? r : a * Math.pow(2, 10 * (e / n - 1)) + r
                },
                easeOutExpo: function(t, e, r, a, n) {
                    return e == n ? r + a : a * (-Math.pow(2, -10 * e / n) + 1) + r
                },
                easeInOutExpo: function(t, e, r, a, n) {
                    return 0 == e ? r : e == n ? r + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + r : a / 2 * (-Math.pow(2, -10 * --e) + 2) + r
                },
                easeInCirc: function(t, e, r, a, n) {
                    return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + r
                },
                easeOutCirc: function(t, e, r, a, n) {
                    return a * Math.sqrt(1 - (e = e / n - 1) * e) + r
                },
                easeInOutCirc: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + r : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + r
                },
                easeInElastic: function(t, e, r, a, n) {
                    var i = 1.70158,
                        s = 0,
                        o = a;
                    if (0 == e) return r;
                    if (1 == (e /= n)) return r + a;
                    if (s || (s = .3 * n), o < Math.abs(a)) {
                        o = a;
                        var i = s / 4
                    } else var i = s / (2 * Math.PI) * Math.asin(a / o);
                    return -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - i) * Math.PI / s)) + r
                },
                easeOutElastic: function(t, e, r, a, n) {
                    var i = 1.70158,
                        s = 0,
                        o = a;
                    if (0 == e) return r;
                    if (1 == (e /= n)) return r + a;
                    if (s || (s = .3 * n), o < Math.abs(a)) {
                        o = a;
                        var i = s / 4
                    } else var i = s / (2 * Math.PI) * Math.asin(a / o);
                    return o * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - i) * Math.PI / s) + a + r
                },
                easeInOutElastic: function(t, e, r, a, n) {
                    var i = 1.70158,
                        s = 0,
                        o = a;
                    if (0 == e) return r;
                    if (2 == (e /= n / 2)) return r + a;
                    if (s || (s = .3 * n * 1.5), o < Math.abs(a)) {
                        o = a;
                        var i = s / 4
                    } else var i = s / (2 * Math.PI) * Math.asin(a / o);
                    return e < 1 ? -.5 * o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - i) * Math.PI / s) + r : o * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - i) * Math.PI / s) * .5 + a + r
                },
                easeInBack: function(t, e, r, a, n, i) {
                    return void 0 == i && (i = 1.70158), a * (e /= n) * e * ((i + 1) * e - i) + r
                },
                easeOutBack: function(t, e, r, a, n, i) {
                    return void 0 == i && (i = 1.70158), a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + r
                },
                easeInOutBack: function(t, e, r, a, n, i) {
                    return void 0 == i && (i = 1.70158), (e /= n / 2) < 1 ? a / 2 * e * e * (((i *= 1.525) + 1) * e - i) + r : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + r
                },
                easeInBounce: function(e, r, a, n, i) {
                    return n - t.easing.easeOutBounce(e, i - r, 0, n, i) + a
                },
                easeOutBounce: function(t, e, r, a, n) {
                    return (e /= n) < 1 / 2.75 ? 7.5625 * a * e * e + r : e < 2 / 2.75 ? a * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + r : e < 2.5 / 2.75 ? a * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + r : a * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + r
                },
                easeInOutBounce: function(e, r, a, n, i) {
                    return r < i / 2 ? .5 * t.easing.easeInBounce(e, 2 * r, 0, n, i) + a : .5 * t.easing.easeOutBounce(e, 2 * r - i, 0, n, i) + .5 * n + a
                }
            })
        }(jQuery), ! function() {
            "use strict";

            function t(t) {
                return t.split("").reverse().join("")
            }

            function e(t, e) {
                return t.substring(0, e.length) === e
            }

            function r(t, e) {
                return t.slice(-1 * e.length) === e
            }

            function a(t, e, r) {
                if ((t[e] || t[r]) && t[e] === t[r]) throw new Error(e)
            }

            function n(t) {
                return "number" == typeof t && isFinite(t)
            }

            function i(t, e) {
                var r = Math.pow(10, e);
                return (Math.round(t * r) / r).toFixed(e)
            }

            function s(e, r, a, s, o, l, u, c, f, d, p, h) {
                var m, _, g, v = h,
                    x = "",
                    y = "";
                return l && (h = l(h)), !!n(h) && (e !== !1 && 0 === parseFloat(h.toFixed(e)) && (h = 0), 0 > h && (m = !0, h = Math.abs(h)), e !== !1 && (h = i(h, e)), h = h.toString(), -1 !== h.indexOf(".") ? (_ = h.split("."), g = _[0], a && (x = a + _[1])) : g = h, r && (g = t(g).match(/.{1,3}/g), g = t(g.join(t(r)))), m && c && (y += c), s && (y += s), m && f && (y += f), y += g, y += x, o && (y += o), d && (y = d(y, v)), y)
            }

            function o(t, a, i, s, o, l, u, c, f, d, p, h) {
                var m, _ = "";
                return p && (h = p(h)), !(!h || "string" != typeof h) && (c && e(h, c) && (h = h.replace(c, ""), m = !0), s && e(h, s) && (h = h.replace(s, "")), f && e(h, f) && (h = h.replace(f, ""), m = !0), o && r(h, o) && (h = h.slice(0, -1 * o.length)), a && (h = h.split(a).join("")), i && (h = h.replace(i, ".")), m && (_ += "-"), _ += h, _ = _.replace(/[^0-9\.\-.]/g, ""), "" !== _ && (_ = Number(_), u && (_ = u(_)), !!n(_) && _))
            }

            function l(t) {
                var e, r, n, i = {};
                for (e = 0; e < f.length; e += 1)
                    if (r = f[e], n = t[r], void 0 === n) "negative" !== r || i.negativeBefore ? "mark" === r && "." !== i.thousand ? i[r] = "." : i[r] = !1 : i[r] = "-";
                    else if ("decimals" === r) {
                    if (!(n >= 0 && 8 > n)) throw new Error(r);
                    i[r] = n
                } else if ("encoder" === r || "decoder" === r || "edit" === r || "undo" === r) {
                    if ("function" != typeof n) throw new Error(r);
                    i[r] = n
                } else {
                    if ("string" != typeof n) throw new Error(r);
                    i[r] = n
                }
                return a(i, "mark", "thousand"), a(i, "prefix", "negative"), a(i, "prefix", "negativeBefore"), i
            }

            function u(t, e, r) {
                var a, n = [];
                for (a = 0; a < f.length; a += 1) n.push(t[f[a]]);
                return n.push(r), e.apply("", n)
            }

            function c(t) {
                return this instanceof c ? void("object" == typeof t && (t = l(t), this.to = function(e) {
                    return u(t, s, e)
                }, this.from = function(e) {
                    return u(t, o, e)
                })) : new c(t)
            }
            var f = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
            window.wNumb = c
        }()
    }, {
        "./includes/fields": 4,
        "./includes/pagination": 5,
        "./includes/plugin": 6,
        "./includes/state": 8
    }],
    2: [function(t, e, r) {
        ! function(t) {
            var a = !1;
            if ("function" == typeof define && define.amd && (define(t), a = !0), "object" == typeof r && (e.exports = t(), a = !0), !a) {
                var n = window.Cookies,
                    i = window.Cookies = t();
                i.noConflict = function() {
                    return window.Cookies = n, i
                }
            }
        }(function() {
            function t() {
                for (var t = 0, e = {}; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r) e[a] = r[a]
                }
                return e
            }

            function e(r) {
                function a(e, n, i) {
                    var s;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if (i = t({
                                    path: "/"
                                }, a.defaults, i), "number" == typeof i.expires) {
                                var o = new Date;
                                o.setMilliseconds(o.getMilliseconds() + 864e5 * i.expires), i.expires = o
                            }
                            i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                s = JSON.stringify(n), /^[\{\[]/.test(s) && (n = s)
                            } catch (l) {}
                            n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape);
                            var u = "";
                            for (var c in i) i[c] && (u += "; " + c, i[c] !== !0 && (u += "=" + i[c]));
                            return document.cookie = e + "=" + n + u
                        }
                        e || (s = {});
                        for (var f = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, p = 0; p < f.length; p++) {
                            var h = f[p].split("="),
                                m = h.slice(1).join("=");
                            this.json || '"' !== m.charAt(0) || (m = m.slice(1, -1));
                            try {
                                var _ = h[0].replace(d, decodeURIComponent);
                                if (m = r.read ? r.read(m, _) : r(m, _) || m.replace(d, decodeURIComponent), this.json) try {
                                    m = JSON.parse(m)
                                } catch (l) {}
                                if (e === _) {
                                    s = m;
                                    break
                                }
                                e || (s[_] = m)
                            } catch (l) {}
                        }
                        return s
                    }
                }
                return a.set = a, a.get = function(t) {
                    return a.call(a, t)
                }, a.getJSON = function() {
                    return a.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, a.defaults = {}, a.remove = function(e, r) {
                    a(e, "", t(r, {
                        expires: -1
                    }))
                }, a.withConverter = e, a
            }
            return e(function() {})
        })
    }, {}],
    3: [function(t, e, r) {
        ! function(t) {
            "function" == typeof define && define.amd ? define([], t) : "object" == typeof r ? e.exports = t() : window.noUiSlider = t()
        }(function() {
            "use strict";

            function t(t) {
                return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
            }

            function e(t) {
                t.parentElement.removeChild(t)
            }

            function r(t) {
                return null !== t && void 0 !== t
            }

            function a(t) {
                t.preventDefault()
            }

            function n(t) {
                return t.filter(function(t) {
                    return !this[t] && (this[t] = !0)
                }, {})
            }

            function i(t, e) {
                return Math.round(t / e) * e
            }

            function s(t, e) {
                var r = t.getBoundingClientRect(),
                    a = t.ownerDocument,
                    n = a.documentElement,
                    i = m(a);
                return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (i.x = 0), e ? r.top + i.y - n.clientTop : r.left + i.x - n.clientLeft
            }

            function o(t) {
                return "number" == typeof t && !isNaN(t) && isFinite(t)
            }

            function l(t, e, r) {
                r > 0 && (d(t, e), setTimeout(function() {
                    p(t, e)
                }, r))
            }

            function u(t) {
                return Math.max(Math.min(t, 100), 0)
            }

            function c(t) {
                return Array.isArray(t) ? t : [t]
            }

            function f(t) {
                t = String(t);
                var e = t.split(".");
                return e.length > 1 ? e[1].length : 0
            }

            function d(t, e) {
                t.classList ? t.classList.add(e) : t.className += " " + e
            }

            function p(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }

            function h(t, e) {
                return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
            }

            function m(t) {
                var e = void 0 !== window.pageXOffset,
                    r = "CSS1Compat" === (t.compatMode || ""),
                    a = e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
                    n = e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop;
                return {
                    x: a,
                    y: n
                }
            }

            function _() {
                return window.navigator.pointerEnabled ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                }
            }

            function g() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (r) {}
                return t
            }

            function v() {
                return window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            }

            function x(t, e) {
                return 100 / (e - t)
            }

            function y(t, e) {
                return 100 * e / (t[1] - t[0])
            }

            function b(t, e) {
                return y(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
            }

            function w(t, e) {
                return e * (t[1] - t[0]) / 100 + t[0]
            }

            function j(t, e) {
                for (var r = 1; t >= e[r];) r += 1;
                return r
            }

            function S(t, e, r) {
                if (r >= t.slice(-1)[0]) return 100;
                var a = j(r, t),
                    n = t[a - 1],
                    i = t[a],
                    s = e[a - 1],
                    o = e[a];
                return s + b([n, i], r) / x(s, o)
            }

            function C(t, e, r) {
                if (r >= 100) return t.slice(-1)[0];
                var a = j(r, e),
                    n = t[a - 1],
                    i = t[a],
                    s = e[a - 1],
                    o = e[a];
                return w([n, i], (r - s) * x(s, o))
            }

            function U(t, e, r, a) {
                if (100 === a) return a;
                var n = j(a, t),
                    s = t[n - 1],
                    o = t[n];
                return r ? a - s > (o - s) / 2 ? o : s : e[n - 1] ? t[n - 1] + i(a - t[n - 1], e[n - 1]) : a
            }

            function P(t, e, r) {
                var a;
                if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + G + "): 'range' contains invalid value.");
                if (a = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t), !o(a) || !o(e[0])) throw new Error("noUiSlider (" + G + "): 'range' value isn't numeric.");
                r.xPct.push(a), r.xVal.push(e[0]), a ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0)
            }

            function E(t, e, r) {
                if (!e) return !0;
                r.xSteps[t] = y([r.xVal[t], r.xVal[t + 1]], e) / x(r.xPct[t], r.xPct[t + 1]);
                var a = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
                    n = Math.ceil(Number(a.toFixed(3)) - 1),
                    i = r.xVal[t] + r.xNumSteps[t] * n;
                r.xHighestCompleteStep[t] = i
            }

            function k(t, e, r) {
                this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
                var a, n = [];
                for (a in t) t.hasOwnProperty(a) && n.push([t[a], a]);
                for (n.length && "object" == typeof n[0][0] ? n.sort(function(t, e) {
                        return t[0][0] - e[0][0]
                    }) : n.sort(function(t, e) {
                        return t[0] - e[0]
                    }), a = 0; a < n.length; a++) P(n[a][1], n[a][0], this);
                for (this.xNumSteps = this.xSteps.slice(0), a = 0; a < this.xNumSteps.length; a++) E(a, this.xNumSteps[a], this)
            }

            function A(e) {
                if (t(e)) return !0;
                throw new Error("noUiSlider (" + G + "): 'format' requires 'to' and 'from' methods.")
            }

            function M(t, e) {
                if (!o(e)) throw new Error("noUiSlider (" + G + "): 'step' is not numeric.");
                t.singleStep = e
            }

            function F(t, e) {
                if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + G + "): 'range' is not an object.");
                if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + G + "): Missing 'min' or 'max' in 'range'.");
                if (e.min === e.max) throw new Error("noUiSlider (" + G + "): 'range' 'min' and 'max' cannot be equal.");
                t.spectrum = new k(e, t.snap, t.singleStep)
            }

            function O(t, e) {
                if (e = c(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + G + "): 'start' option is incorrect.");
                t.handles = e.length, t.start = e
            }

            function R(t, e) {
                if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider (" + G + "): 'snap' option must be a boolean.")
            }

            function N(t, e) {
                if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider (" + G + "): 'animate' option must be a boolean.")
            }

            function I(t, e) {
                if (t.animationDuration = e, "number" != typeof e) throw new Error("noUiSlider (" + G + "): 'animationDuration' option must be a number.")
            }

            function T(t, e) {
                var r, a = [!1];
                if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), e === !0 || e === !1) {
                    for (r = 1; r < t.handles; r++) a.push(e);
                    a.push(!1)
                } else {
                    if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + G + "): 'connect' option doesn't match handle count.");
                    a = e
                }
                t.connect = a
            }

            function V(t, e) {
                switch (e) {
                    case "horizontal":
                        t.ort = 0;
                        break;
                    case "vertical":
                        t.ort = 1;
                        break;
                    default:
                        throw new Error("noUiSlider (" + G + "): 'orientation' option is invalid.")
                }
            }

            function L(t, e) {
                if (!o(e)) throw new Error("noUiSlider (" + G + "): 'margin' option must be numeric.");
                if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + G + "): 'margin' option is only supported on linear sliders.")
            }

            function $(t, e) {
                if (!o(e)) throw new Error("noUiSlider (" + G + "): 'limit' option must be numeric.");
                if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + G + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
            }

            function q(t, e) {
                if (!o(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + G + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1])) throw new Error("noUiSlider (" + G + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (0 !== e) {
                    if (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])], t.padding[0] === !1 || t.padding[1] === !1) throw new Error("noUiSlider (" + G + "): 'padding' option is only supported on linear sliders.");
                    if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + G + "): 'padding' option must be a positive number(s).");
                    if (t.padding[0] + t.padding[1] >= 100) throw new Error("noUiSlider (" + G + "): 'padding' option must not exceed 100% of the range.")
                }
            }

            function Q(t, e) {
                switch (e) {
                    case "ltr":
                        t.dir = 0;
                        break;
                    case "rtl":
                        t.dir = 1;
                        break;
                    default:
                        throw new Error("noUiSlider (" + G + "): 'direction' option was not recognized.")
                }
            }

            function D(t, e) {
                if ("string" != typeof e) throw new Error("noUiSlider (" + G + "): 'behaviour' must be a string containing options.");
                var r = e.indexOf("tap") >= 0,
                    a = e.indexOf("drag") >= 0,
                    n = e.indexOf("fixed") >= 0,
                    i = e.indexOf("snap") >= 0,
                    s = e.indexOf("hover") >= 0;
                if (n) {
                    if (2 !== t.handles) throw new Error("noUiSlider (" + G + "): 'fixed' behaviour must be used with 2 handles");
                    L(t, t.start[1] - t.start[0])
                }
                t.events = {
                    tap: r || i,
                    drag: a,
                    fixed: n,
                    snap: i,
                    hover: s
                }
            }

            function H(t, e) {
                if (e !== !1)
                    if (e === !0) {
                        t.tooltips = [];
                        for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
                    } else {
                        if (t.tooltips = c(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + G + "): must pass a formatter for all handles.");
                        t.tooltips.forEach(function(t) {
                            if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + G + "): 'tooltips' must be passed a formatter or 'false'.")
                        })
                    }
            }

            function B(t, e) {
                t.ariaFormat = e, A(e)
            }

            function z(t, e) {
                t.format = e, A(e)
            }

            function W(t, e) {
                if ("string" != typeof e && e !== !1) throw new Error("noUiSlider (" + G + "): 'cssPrefix' must be a string or `false`.");
                t.cssPrefix = e
            }

            function X(t, e) {
                if ("object" != typeof e) throw new Error("noUiSlider (" + G + "): 'cssClasses' must be an object.");
                if ("string" == typeof t.cssPrefix) {
                    t.cssClasses = {};
                    for (var r in e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r])
                } else t.cssClasses = e
            }

            function Y(t) {
                var e = {
                        margin: 0,
                        limit: 0,
                        padding: 0,
                        animate: !0,
                        animationDuration: 300,
                        ariaFormat: K,
                        format: K
                    },
                    a = {
                        step: {
                            r: !1,
                            t: M
                        },
                        start: {
                            r: !0,
                            t: O
                        },
                        connect: {
                            r: !0,
                            t: T
                        },
                        direction: {
                            r: !0,
                            t: Q
                        },
                        snap: {
                            r: !1,
                            t: R
                        },
                        animate: {
                            r: !1,
                            t: N
                        },
                        animationDuration: {
                            r: !1,
                            t: I
                        },
                        range: {
                            r: !0,
                            t: F
                        },
                        orientation: {
                            r: !1,
                            t: V
                        },
                        margin: {
                            r: !1,
                            t: L
                        },
                        limit: {
                            r: !1,
                            t: $
                        },
                        padding: {
                            r: !1,
                            t: q
                        },
                        behaviour: {
                            r: !0,
                            t: D
                        },
                        ariaFormat: {
                            r: !1,
                            t: B
                        },
                        format: {
                            r: !1,
                            t: z
                        },
                        tooltips: {
                            r: !1,
                            t: H
                        },
                        cssPrefix: {
                            r: !0,
                            t: W
                        },
                        cssClasses: {
                            r: !0,
                            t: X
                        }
                    },
                    n = {
                        connect: !1,
                        direction: "ltr",
                        behaviour: "tap",
                        orientation: "horizontal",
                        cssPrefix: "noUi-",
                        cssClasses: {
                            target: "target",
                            base: "base",
                            origin: "origin",
                            handle: "handle",
                            handleLower: "handle-lower",
                            handleUpper: "handle-upper",
                            horizontal: "horizontal",
                            vertical: "vertical",
                            background: "background",
                            connect: "connect",
                            connects: "connects",
                            ltr: "ltr",
                            rtl: "rtl",
                            draggable: "draggable",
                            drag: "state-drag",
                            tap: "state-tap",
                            active: "active",
                            tooltip: "tooltip",
                            pips: "pips",
                            pipsHorizontal: "pips-horizontal",
                            pipsVertical: "pips-vertical",
                            marker: "marker",
                            markerHorizontal: "marker-horizontal",
                            markerVertical: "marker-vertical",
                            markerNormal: "marker-normal",
                            markerLarge: "marker-large",
                            markerSub: "marker-sub",
                            value: "value",
                            valueHorizontal: "value-horizontal",
                            valueVertical: "value-vertical",
                            valueNormal: "value-normal",
                            valueLarge: "value-large",
                            valueSub: "value-sub"
                        }
                    };
                t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(a).forEach(function(i) {
                    if (!r(t[i]) && void 0 === n[i]) {
                        if (a[i].r) throw new Error("noUiSlider (" + G + "): '" + i + "' is required.");
                        return !0
                    }
                    a[i].t(e, r(t[i]) ? t[i] : n[i])
                }), e.pips = t.pips;
                var i = document.createElement("div"),
                    s = void 0 !== i.style.msTransform,
                    o = void 0 !== i.style.transform;
                e.transformRule = o ? "transform" : s ? "msTransform" : "webkitTransform";
                var l = [
                    ["left", "top"],
                    ["right", "bottom"]
                ];
                return e.style = l[e.dir][e.ort], e
            }

            function J(t, r, i) {
                function o(t, e) {
                    var r = St.createElement("div");
                    return e && d(r, e), t.appendChild(r), r
                }

                function f(t, e) {
                    var a = o(t, r.cssClasses.origin),
                        n = o(a, r.cssClasses.handle);
                    return n.setAttribute("data-handle", e), n.setAttribute("tabindex", "0"), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", r.ort ? "vertical" : "horizontal"), 0 === e ? d(n, r.cssClasses.handleLower) : e === r.handles - 1 && d(n, r.cssClasses.handleUpper), a
                }

                function x(t, e) {
                    return !!e && o(t, r.cssClasses.connect)
                }

                function y(t, e) {
                    var a = o(e, r.cssClasses.connects);
                    ct = [], ft = [], ft.push(x(a, t[0]));
                    for (var n = 0; n < r.handles; n++) ct.push(f(e, n)), xt[n] = n, ft.push(x(a, t[n + 1]))
                }

                function b(t) {
                    d(t, r.cssClasses.target), 0 === r.dir ? d(t, r.cssClasses.ltr) : d(t, r.cssClasses.rtl), 0 === r.ort ? d(t, r.cssClasses.horizontal) : d(t, r.cssClasses.vertical), ut = o(t, r.cssClasses.base)
                }

                function w(t, e) {
                    return !!r.tooltips[e] && o(t.firstChild, r.cssClasses.tooltip)
                }

                function j() {
                    var t = ct.map(w);
                    Q("update", function(e, a, n) {
                        if (t[a]) {
                            var i = e[a];
                            r.tooltips[a] !== !0 && (i = r.tooltips[a].to(n[a])), t[a].innerHTML = i
                        }
                    })
                }

                function S() {
                    Q("update", function(t, e, a, n, i) {
                        xt.forEach(function(t) {
                            var e = ct[t],
                                n = z(vt, t, 0, !0, !0, !0),
                                s = z(vt, t, 100, !0, !0, !0),
                                o = i[t],
                                l = r.ariaFormat.to(a[t]);
                            e.children[0].setAttribute("aria-valuemin", n.toFixed(1)), e.children[0].setAttribute("aria-valuemax", s.toFixed(1)), e.children[0].setAttribute("aria-valuenow", o.toFixed(1)), e.children[0].setAttribute("aria-valuetext", l)
                        })
                    })
                }

                function C(t, e, r) {
                    if ("range" === t || "steps" === t) return bt.xVal;
                    if ("count" === t) {
                        if (e < 2) throw new Error("noUiSlider (" + G + "): 'values' (>=2) required for mode 'count'.");
                        var a = e - 1,
                            n = 100 / a;
                        for (e = []; a--;) e[a] = a * n;
                        e.push(100), t = "positions"
                    }
                    return "positions" === t ? e.map(function(t) {
                        return bt.fromStepping(r ? bt.getStep(t) : t)
                    }) : "values" === t ? r ? e.map(function(t) {
                        return bt.fromStepping(bt.getStep(bt.toStepping(t)))
                    }) : e : void 0
                }

                function U(t, e, r) {
                    function a(t, e) {
                        return (t + e).toFixed(7) / 1
                    }
                    var i = {},
                        s = bt.xVal[0],
                        o = bt.xVal[bt.xVal.length - 1],
                        l = !1,
                        u = !1,
                        c = 0;
                    return r = n(r.slice().sort(function(t, e) {
                        return t - e
                    })), r[0] !== s && (r.unshift(s), l = !0), r[r.length - 1] !== o && (r.push(o), u = !0), r.forEach(function(n, s) {
                        var o, f, d, p, h, m, _, g, v, x, y = n,
                            b = r[s + 1];
                        if ("steps" === e && (o = bt.xNumSteps[s]), o || (o = b - y), y !== !1 && void 0 !== b)
                            for (o = Math.max(o, 1e-7), f = y; f <= b; f = a(f, o)) {
                                for (p = bt.toStepping(f), h = p - c, g = h / t, v = Math.round(g), x = h / v, d = 1; d <= v; d += 1) m = c + d * x, i[m.toFixed(5)] = ["x", 0];
                                _ = r.indexOf(f) > -1 ? 1 : "steps" === e ? 2 : 0, !s && l && (_ = 0), f === b && u || (i[p.toFixed(5)] = [f, _]), c = p
                            }
                    }), i
                }

                function P(t, e, a) {
                    function n(t, e) {
                        var a = e === r.cssClasses.value,
                            n = a ? c : f,
                            i = a ? l : u;
                        return e + " " + n[r.ort] + " " + i[t]
                    }

                    function i(t, i) {
                        i[1] = i[1] && e ? e(i[0], i[1]) : i[1];
                        var l = o(s, !1);
                        l.className = n(i[1], r.cssClasses.marker), l.style[r.style] = t + "%", i[1] && (l = o(s, !1), l.className = n(i[1], r.cssClasses.value), l.setAttribute("data-value", i[0]), l.style[r.style] = t + "%", l.innerText = a.to(i[0]))
                    }
                    var s = St.createElement("div"),
                        l = [r.cssClasses.valueNormal, r.cssClasses.valueLarge, r.cssClasses.valueSub],
                        u = [r.cssClasses.markerNormal, r.cssClasses.markerLarge, r.cssClasses.markerSub],
                        c = [r.cssClasses.valueHorizontal, r.cssClasses.valueVertical],
                        f = [r.cssClasses.markerHorizontal, r.cssClasses.markerVertical];
                    return d(s, r.cssClasses.pips), d(s, 0 === r.ort ? r.cssClasses.pipsHorizontal : r.cssClasses.pipsVertical), Object.keys(t).forEach(function(e) {
                        i(e, t[e])
                    }), s
                }

                function E() {
                    pt && (e(pt), pt = null)
                }

                function k(t) {
                    E();
                    var e = t.mode,
                        r = t.density || 1,
                        a = t.filter || !1,
                        n = t.values || !1,
                        i = t.stepped || !1,
                        s = C(e, n, i),
                        o = U(r, e, s),
                        l = t.format || {
                            to: Math.round
                        };
                    return pt = gt.appendChild(P(o, a, l))
                }

                function A() {
                    var t = ut.getBoundingClientRect(),
                        e = "offset" + ["Width", "Height"][r.ort];
                    return 0 === r.ort ? t.width || ut[e] : t.height || ut[e]
                }

                function M(t, e, a, n) {
                    var i = function(i) {
                            return !!(i = F(i, n.pageOffset, n.target || e)) && (!(gt.hasAttribute("disabled") && !n.doNotReject) && (!(h(gt, r.cssClasses.tap) && !n.doNotReject) && (!(t === ht.start && void 0 !== i.buttons && i.buttons > 1) && ((!n.hover || !i.buttons) && (_t || i.preventDefault(), i.calcPoint = i.points[r.ort], void a(i, n))))))
                        },
                        s = [];
                    return t.split(" ").forEach(function(t) {
                        e.addEventListener(t, i, !!_t && {
                            passive: !0
                        }), s.push([t, i])
                    }), s
                }

                function F(t, e, r) {
                    var a, n, i = 0 === t.type.indexOf("touch"),
                        s = 0 === t.type.indexOf("mouse"),
                        o = 0 === t.type.indexOf("pointer");
                    if (0 === t.type.indexOf("MSPointer") && (o = !0), i) {
                        var l = function(t) {
                            return t.target === r || r.contains(t.target)
                        };
                        if ("touchstart" === t.type) {
                            var u = Array.prototype.filter.call(t.touches, l);
                            if (u.length > 1) return !1;
                            a = u[0].pageX, n = u[0].pageY
                        } else {
                            var c = Array.prototype.find.call(t.changedTouches, l);
                            if (!c) return !1;
                            a = c.pageX, n = c.pageY
                        }
                    }
                    return e = e || m(St), (s || o) && (a = t.clientX + e.x, n = t.clientY + e.y), t.pageOffset = e, t.points = [a, n], t.cursor = s || o, t
                }

                function O(t) {
                    var e = t - s(ut, r.ort),
                        a = 100 * e / A();
                    return a = u(a), r.dir ? 100 - a : a
                }

                function R(t) {
                    var e = 100,
                        r = !1;
                    return ct.forEach(function(a, n) {
                        if (!a.hasAttribute("disabled")) {
                            var i = Math.abs(vt[n] - t);
                            (i < e || 100 === i && 100 === e) && (r = n, e = i)
                        }
                    }), r
                }

                function N(t, e) {
                    "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && T(t, e)
                }

                function I(t, e) {
                    if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === t.buttons && 0 !== e.buttonsProperty) return T(t, e);
                    var a = (r.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint),
                        n = 100 * a / e.baseSize;
                    X(a > 0, n, e.locations, e.handleNumbers)
                }

                function T(t, e) {
                    e.handle && (p(e.handle, r.cssClasses.active), yt -= 1), e.listeners.forEach(function(t) {
                        Ct.removeEventListener(t[0], t[1])
                    }), 0 === yt && (p(gt, r.cssClasses.drag), K(), t.cursor && (Ut.style.cursor = "", Ut.removeEventListener("selectstart", a))), e.handleNumbers.forEach(function(t) {
                        H("change", t), H("set", t), H("end", t)
                    })
                }

                function V(t, e) {
                    var n;
                    if (1 === e.handleNumbers.length) {
                        var i = ct[e.handleNumbers[0]];
                        if (i.hasAttribute("disabled")) return !1;
                        n = i.children[0], yt += 1, d(n, r.cssClasses.active)
                    }
                    t.stopPropagation();
                    var s = [],
                        o = M(ht.move, Ct, I, {
                            target: t.target,
                            handle: n,
                            listeners: s,
                            startCalcPoint: t.calcPoint,
                            baseSize: A(),
                            pageOffset: t.pageOffset,
                            handleNumbers: e.handleNumbers,
                            buttonsProperty: t.buttons,
                            locations: vt.slice()
                        }),
                        l = M(ht.end, Ct, T, {
                            target: t.target,
                            handle: n,
                            listeners: s,
                            doNotReject: !0,
                            handleNumbers: e.handleNumbers
                        }),
                        u = M("mouseout", Ct, N, {
                            target: t.target,
                            handle: n,
                            listeners: s,
                            doNotReject: !0,
                            handleNumbers: e.handleNumbers
                        });
                    s.push.apply(s, o.concat(l, u)), t.cursor && (Ut.style.cursor = getComputedStyle(t.target).cursor, ct.length > 1 && d(gt, r.cssClasses.drag), Ut.addEventListener("selectstart", a, !1)), e.handleNumbers.forEach(function(t) {
                        H("start", t)
                    })
                }

                function L(t) {
                    t.stopPropagation();
                    var e = O(t.calcPoint),
                        a = R(e);
                    return a !== !1 && (r.events.snap || l(gt, r.cssClasses.tap, r.animationDuration), tt(a, e, !0, !0), K(), H("slide", a, !0), H("update", a, !0), H("change", a, !0), H("set", a, !0), void(r.events.snap && V(t, {
                        handleNumbers: [a]
                    })))
                }

                function $(t) {
                    var e = O(t.calcPoint),
                        r = bt.getStep(e),
                        a = bt.fromStepping(r);
                    Object.keys(jt).forEach(function(t) {
                        "hover" === t.split(".")[0] && jt[t].forEach(function(t) {
                            t.call(dt, a)
                        })
                    })
                }

                function q(t) {
                    t.fixed || ct.forEach(function(t, e) {
                        M(ht.start, t.children[0], V, {
                            handleNumbers: [e]
                        })
                    }), t.tap && M(ht.start, ut, L, {}), t.hover && M(ht.move, ut, $, {
                        hover: !0
                    }), t.drag && ft.forEach(function(e, a) {
                        if (e !== !1 && 0 !== a && a !== ft.length - 1) {
                            var n = ct[a - 1],
                                i = ct[a],
                                s = [e];
                            d(e, r.cssClasses.draggable), t.fixed && (s.push(n.children[0]), s.push(i.children[0])), s.forEach(function(t) {
                                M(ht.start, t, V, {
                                    handles: [n, i],
                                    handleNumbers: [a - 1, a]
                                })
                            })
                        }
                    })
                }

                function Q(t, e) {
                    jt[t] = jt[t] || [], jt[t].push(e), "update" === t.split(".")[0] && ct.forEach(function(t, e) {
                        H("update", e)
                    })
                }

                function D(t) {
                    var e = t && t.split(".")[0],
                        r = e && t.substring(e.length);
                    Object.keys(jt).forEach(function(t) {
                        var a = t.split(".")[0],
                            n = t.substring(a.length);
                        e && e !== a || r && r !== n || delete jt[t]
                    })
                }

                function H(t, e, a) {
                    Object.keys(jt).forEach(function(n) {
                        var i = n.split(".")[0];
                        t === i && jt[n].forEach(function(t) {
                            t.call(dt, wt.map(r.format.to), e, wt.slice(), a || !1, vt.slice())
                        })
                    })
                }

                function B(t) {
                    return t + "%"
                }

                function z(t, e, a, n, i, s) {
                    return ct.length > 1 && (n && e > 0 && (a = Math.max(a, t[e - 1] + r.margin)), i && e < ct.length - 1 && (a = Math.min(a, t[e + 1] - r.margin))), ct.length > 1 && r.limit && (n && e > 0 && (a = Math.min(a, t[e - 1] + r.limit)), i && e < ct.length - 1 && (a = Math.max(a, t[e + 1] - r.limit))), r.padding && (0 === e && (a = Math.max(a, r.padding[0])), e === ct.length - 1 && (a = Math.min(a, 100 - r.padding[1]))), a = bt.getStep(a), a = u(a), !(a === t[e] && !s) && a
                }

                function W(t, e) {
                    var a = r.ort;
                    return (a ? e : t) + ", " + (a ? t : e)
                }

                function X(t, e, r, a) {
                    var n = r.slice(),
                        i = [!t, t],
                        s = [t, !t];
                    a = a.slice(), t && a.reverse(), a.length > 1 ? a.forEach(function(t, r) {
                        var a = z(n, t, n[t] + e, i[r], s[r], !1);
                        a === !1 ? e = 0 : (e = a - n[t], n[t] = a)
                    }) : i = s = [!0];
                    var o = !1;
                    a.forEach(function(t, a) {
                        o = tt(t, r[t] + e, i[a], s[a]) || o
                    }), o && a.forEach(function(t) {
                        H("update", t), H("slide", t)
                    })
                }

                function J(t, e) {
                    return r.dir ? 100 - t - e : t
                }

                function Z(t, e) {
                    vt[t] = e, wt[t] = bt.fromStepping(e);
                    var a = "translate(" + W(B(J(e, 0) - Pt), "0") + ")";
                    ct[t].style[r.transformRule] = a, et(t), et(t + 1)
                }

                function K() {
                    xt.forEach(function(t) {
                        var e = vt[t] > 50 ? -1 : 1,
                            r = 3 + (ct.length + e * t);
                        ct[t].style.zIndex = r
                    })
                }

                function tt(t, e, r, a) {
                    return e = z(vt, t, e, r, a, !1), e !== !1 && (Z(t, e), !0)
                }

                function et(t) {
                    if (ft[t]) {
                        var e = 0,
                            a = 100;
                        0 !== t && (e = vt[t - 1]), t !== ft.length - 1 && (a = vt[t]);
                        var n = a - e,
                            i = "translate(" + W(B(J(e, n)), "0") + ")",
                            s = "scale(" + W(n / 100, "1") + ")";
                        ft[t].style[r.transformRule] = i + " " + s
                    }
                }

                function rt(t, e) {
                    return null === t || t === !1 || void 0 === t ? vt[e] : ("number" == typeof t && (t = String(t)), t = r.format.from(t), t = bt.toStepping(t), t === !1 || isNaN(t) ? vt[e] : t)
                }

                function at(t, e) {
                    var a = c(t),
                        n = void 0 === vt[0];
                    e = void 0 === e || !!e, r.animate && !n && l(gt, r.cssClasses.tap, r.animationDuration), xt.forEach(function(t) {
                        tt(t, rt(a[t], t), !0, !1)
                    }), xt.forEach(function(t) {
                        tt(t, vt[t], !0, !0)
                    }), K(), xt.forEach(function(t) {
                        H("update", t), null !== a[t] && e && H("set", t)
                    })
                }

                function nt(t) {
                    at(r.start, t)
                }

                function it() {
                    var t = wt.map(r.format.to);
                    return 1 === t.length ? t[0] : t
                }

                function st() {
                    for (var t in r.cssClasses) r.cssClasses.hasOwnProperty(t) && p(gt, r.cssClasses[t]);
                    for (; gt.firstChild;) gt.removeChild(gt.firstChild);
                    delete gt.noUiSlider
                }

                function ot() {
                    return vt.map(function(t, e) {
                        var r = bt.getNearbySteps(t),
                            a = wt[e],
                            n = r.thisStep.step,
                            i = null;
                        n !== !1 && a + n > r.stepAfter.startValue && (n = r.stepAfter.startValue - a), i = a > r.thisStep.startValue ? r.thisStep.step : r.stepBefore.step !== !1 && a - r.stepBefore.highestStep, 100 === t ? n = null : 0 === t && (i = null);
                        var s = bt.countStepDecimals();
                        return null !== n && n !== !1 && (n = Number(n.toFixed(s))), null !== i && i !== !1 && (i = Number(i.toFixed(s))), [i, n]
                    })
                }

                function lt(t, e) {
                    var a = it(),
                        n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                    n.forEach(function(e) {
                        void 0 !== t[e] && (i[e] = t[e])
                    });
                    var s = Y(i);
                    n.forEach(function(e) {
                        void 0 !== t[e] && (r[e] = s[e])
                    }), bt = s.spectrum, r.margin = s.margin, r.limit = s.limit, r.padding = s.padding, r.pips && k(r.pips), vt = [], at(t.start || a, e)
                }
                var ut, ct, ft, dt, pt, ht = _(),
                    mt = v(),
                    _t = mt && g(),
                    gt = t,
                    vt = [],
                    xt = [],
                    yt = 0,
                    bt = r.spectrum,
                    wt = [],
                    jt = {},
                    St = t.ownerDocument,
                    Ct = St.documentElement,
                    Ut = St.body,
                    Pt = "rtl" === St.dir || 1 === r.ort ? 0 : 100;
                return b(gt), y(r.connect, ut), q(r.events), at(r.start), dt = {
                    destroy: st,
                    steps: ot,
                    on: Q,
                    off: D,
                    get: it,
                    set: at,
                    reset: nt,
                    __moveHandles: function(t, e, r) {
                        X(t, e, vt, r)
                    },
                    options: i,
                    updateOptions: lt,
                    target: gt,
                    removePips: E,
                    pips: k
                }, r.pips && k(r.pips), r.tooltips && j(), S(), dt
            }

            function Z(t, e) {
                if (!t || !t.nodeName) throw new Error("noUiSlider (" + G + "): create requires a single element, got: " + t);
                if (t.noUiSlider) throw new Error("noUiSlider (" + G + "): Slider was already initialized.");
                var r = Y(e, t),
                    a = J(t, r, e);
                return t.noUiSlider = a, a
            }
            var G = "11.1.0";
            k.prototype.getMargin = function(t) {
                var e = this.xNumSteps[0];
                if (e && t / e % 1 !== 0) throw new Error("noUiSlider (" + G + "): 'limit', 'margin' and 'padding' must be divisible by step.");
                return 2 === this.xPct.length && y(this.xVal, t)
            }, k.prototype.toStepping = function(t) {
                return t = S(this.xVal, this.xPct, t)
            }, k.prototype.fromStepping = function(t) {
                return C(this.xVal, this.xPct, t)
            }, k.prototype.getStep = function(t) {
                return t = U(this.xPct, this.xSteps, this.snap, t)
            }, k.prototype.getNearbySteps = function(t) {
                var e = j(t, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[e - 2],
                        step: this.xNumSteps[e - 2],
                        highestStep: this.xHighestCompleteStep[e - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[e - 1],
                        step: this.xNumSteps[e - 1],
                        highestStep: this.xHighestCompleteStep[e - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[e - 0],
                        step: this.xNumSteps[e - 0],
                        highestStep: this.xHighestCompleteStep[e - 0]
                    }
                }
            }, k.prototype.countStepDecimals = function() {
                var t = this.xNumSteps.map(f);
                return Math.max.apply(null, t)
            }, k.prototype.convert = function(t) {
                return this.getStep(this.toStepping(t))
            };
            var K = {
                to: function(t) {
                    return void 0 !== t && t.toFixed(2)
                },
                from: Number
            };
            return {
                version: G,
                create: Z
            }
        })
    }, {}],
    4: [function(t, e, r) {
        var a = {
            functions: {}
        };
        e.exports = a
    }, {}],
    5: [function(t, e, r) {
        var a = {
            setupLegacy: function() {},
            setupLegacy: function() {}
        };
        e.exports = a
    }, {}],
    6: [function(t, e, r) {
        (function(r) {
            var a = "undefined" != typeof window ? window.jQuery : "undefined" != typeof r ? r.jQuery : null,
                n = t("./state"),
                i = t("./process_form"),
                s = t("nouislider");
            t("js-cookie");
            e.exports = function(t) {
                var e = {
                        startOpened: !1,
                        isInit: !0,
                        action: ""
                    },
                    r = jQuery.extend(e, t);
                this.each(function() {
                    var t = a(this),
                        e = this;
                    this.sfid = t.attr("data-sf-form-id"), n.addSearchForm(this.sfid, this), this.$fields = t.find("> ul > li"), this.enable_taxonomy_archives = t.attr("data-taxonomy-archives"), this.current_taxonomy_archive = t.attr("data-current-taxonomy-archive"), "undefined" == typeof this.enable_taxonomy_archives && (this.enable_taxonomy_archives = "0"), "undefined" == typeof this.current_taxonomy_archive && (this.current_taxonomy_archive = ""), i.init(e.enable_taxonomy_archives, e.current_taxonomy_archive), i.enableInputs(e), "undefined" == typeof this.extra_query_params && (this.extra_query_params = {
                            all: {},
                            results: {},
                            ajax: {}
                        }), this.template_is_loaded = t.attr("data-template-loaded"), this.is_ajax = t.attr("data-ajax"), this.instance_number = t.attr("data-instance-count"), this.$ajax_results_container = jQuery(t.attr("data-ajax-target")),
                        this.results_url = t.attr("data-results-url"), this.debug_mode = t.attr("data-debug-mode"), this.update_ajax_url = t.attr("data-update-ajax-url"), this.pagination_type = t.attr("data-ajax-pagination-type"), this.auto_count = t.attr("data-auto-count"), this.auto_count_refresh_mode = t.attr("data-auto-count-refresh-mode"), this.only_results_ajax = t.attr("data-only-results-ajax"), this.scroll_to_pos = t.attr("data-scroll-to-pos"), this.custom_scroll_to = t.attr("data-custom-scroll-to"), this.scroll_on_action = t.attr("data-scroll-on-action"), this.lang_code = t.attr("data-lang-code"), this.ajax_url = t.attr("data-ajax-url"), this.ajax_form_url = t.attr("data-ajax-form-url"), this.is_rtl = t.attr("data-is-rtl"), this.display_result_method = t.attr("data-display-result-method"), this.maintain_state = t.attr("data-maintain-state"), this.ajax_action = "", this.last_submit_query_params = "", this.current_paged = parseInt(t.attr("data-init-paged")), this.last_load_more_html = "", this.load_more_html = "", this.ajax_data_type = t.attr("data-ajax-data-type"), this.ajax_target_attr = t.attr("data-ajax-target"), this.use_history_api = t.attr("data-use-history-api"), this.is_submitting = !1, this.last_ajax_request = null, "undefined" == typeof this.use_history_api && (this.use_history_api = ""), "undefined" == typeof this.pagination_type && (this.pagination_type = "normal"), "undefined" == typeof this.current_paged && (this.current_paged = 1), "undefined" == typeof this.ajax_target_attr && (this.ajax_target_attr = ""), "undefined" == typeof this.ajax_url && (this.ajax_url = ""), "undefined" == typeof this.ajax_form_url && (this.ajax_form_url = ""), "undefined" == typeof this.results_url && (this.results_url = ""), "undefined" == typeof this.scroll_to_pos && (this.scroll_to_pos = ""), "undefined" == typeof this.scroll_on_action && (this.scroll_on_action = ""), "undefined" == typeof this.custom_scroll_to && (this.custom_scroll_to = ""), this.$custom_scroll_to = jQuery(this.custom_scroll_to), "undefined" == typeof this.update_ajax_url && (this.update_ajax_url = ""), "undefined" == typeof this.debug_mode && (this.debug_mode = ""), "undefined" == typeof this.ajax_target_object && (this.ajax_target_object = ""), "undefined" == typeof this.template_is_loaded && (this.template_is_loaded = "0"), "undefined" == typeof this.auto_count_refresh_mode && (this.auto_count_refresh_mode = "0"), this.ajax_links_selector = t.attr("data-ajax-links-selector"), this.auto_update = t.attr("data-auto-update"), this.inputTimer = 0, this.setInfiniteScrollContainer = function() {
                            this.is_max_paged = !1, this.use_scroll_loader = t.attr("data-show-scroll-loader"), this.infinite_scroll_container = t.attr("data-infinite-scroll-container"), this.infinite_scroll_trigger_amount = t.attr("data-infinite-scroll-trigger"), this.infinite_scroll_result_class = t.attr("data-infinite-scroll-result-class"), this.$infinite_scroll_container = this.$ajax_results_container, "undefined" == typeof this.infinite_scroll_container ? this.infinite_scroll_container = "" : this.$infinite_scroll_container = jQuery(t.attr("data-infinite-scroll-container")), "undefined" == typeof this.infinite_scroll_result_class && (this.infinite_scroll_result_class = ""), "undefined" == typeof this.use_scroll_loader && (this.use_scroll_loader = 1)
                        }, this.setInfiniteScrollContainer(), this.reset = function(t) {
                            return this.resetForm(t), !0
                        }, this.inputUpdate = function(t) {
                            if ("undefined" == typeof t) var t = 300;
                            e.resetTimer(t)
                        }, this.dateInputType = function() {
                            a(this);
                            if (1 == e.auto_update || 1 == e.auto_count_refresh_mode) {
                                var r = t.find(".sf-datepicker"),
                                    n = r.length;
                                if (n > 1) {
                                    var i = 0,
                                        s = 0;
                                    r.each(function() {
                                        "" == a(this).val() && s++, i++
                                    }), 0 == s && e.inputUpdate(1200)
                                } else e.inputUpdate(1200)
                            }
                        }, this.scrollToPos = function() {
                            var r = 0,
                                n = !0;
                            1 == e.is_ajax && ("window" == e.scroll_to_pos ? r = 0 : "form" == e.scroll_to_pos ? r = t.offset().top : "results" == e.scroll_to_pos ? e.$ajax_results_container.length > 0 && (r = e.$ajax_results_container.offset().top) : "custom" == e.scroll_to_pos ? e.$custom_scroll_to.length > 0 && (r = e.$custom_scroll_to.offset().top) : n = !1, n && a("html, body").stop().animate({
                                scrollTop: r
                            }, "normal", "easeOutQuad"))
                        }, this.attachActiveClass = function() {
                            t.on("change", 'input[type="radio"], input[type="checkbox"], select', function(t) {
                                var e = a(this),
                                    r = e.closest("li[data-sf-field-name]"),
                                    n = e.prop("tagName").toLowerCase(),
                                    i = e.attr("type"),
                                    s = r.prop("tagName").toLowerCase();
                                if ("input" != n || "radio" != i && "checkbox" != i || "li" != s) {
                                    if ("select" == n) {
                                        var o = e.children();
                                        o.removeClass("sf-option-active");
                                        var l = e.val(),
                                            u = "string" == typeof l || l instanceof String ? [l] : l;
                                        a(u).each(function(t, r) {
                                            e.find("option[value='" + r + "']").addClass("sf-option-active")
                                        })
                                    }
                                } else {
                                    var o = r.parent().find("li"),
                                        c = r.parent().find("input:checked");
                                    o.removeClass("sf-option-active"), c.each(function() {
                                        var t = a(this).closest("li");
                                        t.addClass("sf-option-active")
                                    })
                                }
                            })
                        }, this.initAutoUpdateEvents = function() {
                            if (1 == e.auto_update || 1 == e.auto_count_refresh_mode) {
                                t.on("change", 'input[type="radio"], input[type="checkbox"], select', function(t) {
                                    e.inputUpdate(200)
                                }), t.on("input", 'input[type="number"]', function(t) {
                                    e.inputUpdate(800)
                                });
                                var r = t.find('input[type="text"]:not(.sf-datepicker)'),
                                    a = r.val();
                                t.on("input", 'input[type="text"]:not(.sf-datepicker)', function() {
                                    a != r.val() && e.inputUpdate(1200), a = r.val()
                                }), t.on("keypress", 'input[type="text"]:not(.sf-datepicker)', function(t) {
                                    if (13 == t.which) return t.preventDefault(), e.submitForm(), !1
                                })
                            }
                        }, this.clearTimer = function() {
                            clearTimeout(e.inputTimer)
                        }, this.resetTimer = function(t) {
                            clearTimeout(e.inputTimer), e.inputTimer = setTimeout(e.formUpdated, t)
                        }, this.addDatePickers = function() {
                            var r = t.find(".sf-datepicker");
                            r.length > 0 && (r.each(function() {
                                var t = a(this),
                                    r = "",
                                    n = !1,
                                    i = !1,
                                    s = t.closest(".sf_date_field");
                                s.length > 0 && (r = s.attr("data-date-format"), 1 == s.attr("data-date-use-year-dropdown") && (n = !0), 1 == s.attr("data-date-use-month-dropdown") && (i = !0));
                                var o = {
                                    inline: !0,
                                    showOtherMonths: !0,
                                    onSelect: function() {
                                        e.dateSelect()
                                    },
                                    dateFormat: r,
                                    changeMonth: i,
                                    changeYear: n
                                };
                                1 == e.is_rtl && (o.direction = "rtl"), t.datepicker(o), "" != e.lang_code ? a.datepicker.setDefaults(a.extend({
                                    dateFormat: r
                                }, a.datepicker.regional[e.lang_code])) : a.datepicker.setDefaults(a.extend({
                                    dateFormat: r
                                }, a.datepicker.regional.en))
                            }), 0 == a(".ll-skin-melon").length && r.datepicker("widget").wrap('<div class="ll-skin-melon searchandfilter-date-picker"/>'))
                        }, this.dateSelect = function() {
                            var t = a(this);
                            if (1 == e.auto_update || 1 == e.auto_count_refresh_mode) {
                                var r = t.find(".sf-datepicker"),
                                    n = r.length;
                                if (n > 1) {
                                    var i = 0,
                                        s = 0;
                                    r.each(function() {
                                        "" == a(this).val() && s++, i++
                                    }), 0 == s && e.inputUpdate(1)
                                } else e.inputUpdate(1)
                            }
                        }, this.addRangeSliders = function() {
                            var r = t.find(".sf-meta-range-slider");
                            r.length > 0 && (r.each(function() {
                                var t = a(this),
                                    r = t.attr("data-min"),
                                    n = t.attr("data-max"),
                                    i = t.attr("data-start-min"),
                                    o = t.attr("data-start-max"),
                                    l = t.attr("data-display-values-as"),
                                    u = t.attr("data-step"),
                                    c = t.find(".sf-range-min"),
                                    f = t.find(".sf-range-max"),
                                    d = t.attr("data-decimal-places"),
                                    p = t.attr("data-thousand-seperator"),
                                    h = t.attr("data-decimal-seperator"),
                                    m = wNumb({
                                        mark: h,
                                        decimals: parseFloat(d),
                                        thousand: p
                                    }),
                                    _ = (parseFloat(i), m.to(parseFloat(i))),
                                    g = m.to(parseFloat(o));
                                parseFloat(o);
                                "textinput" == l ? (c.val(_), f.val(g)) : "text" == l && (c.html(_), f.html(g));
                                var v = {
                                    range: {
                                        min: [parseFloat(r)],
                                        max: [parseFloat(n)]
                                    },
                                    start: [_, g],
                                    handles: 2,
                                    connect: !0,
                                    step: parseFloat(u),
                                    behaviour: "extend-tap",
                                    format: m
                                };
                                1 == e.is_rtl && (v.direction = "rtl");
                                var x = a(this).find(".meta-slider")[0];
                                "undefined" != typeof x.noUiSlider && x.noUiSlider.destroy(), s.create(x, v), c.off(), c.on("change", function() {
                                    x.noUiSlider.set([a(this).val(), null])
                                }), f.off(), f.on("change", function() {
                                    x.noUiSlider.set([null, a(this).val()])
                                }), x.noUiSlider.off("update"), x.noUiSlider.on("update", function(t, r) {
                                    var a = _,
                                        n = g,
                                        i = t[r];
                                    r ? g = i : _ = i, "textinput" == l ? (c.val(_), f.val(g)) : "text" == l && (c.html(_), f.html(g)), 1 != e.auto_update && 1 != e.auto_count_refresh_mode || a == _ && n == g || e.inputUpdate(800)
                                })
                            }), e.clearTimer())
                        }, this.init = function(r) {
                            if ("undefined" == typeof r) var r = !1;
                            this.initAutoUpdateEvents(), this.attachActiveClass(), this.addDatePickers(), this.addRangeSliders();
                            var n = t.find("select[data-combobox='1']");
                            n.length > 0 && n.each(function(t) {
                                var r = a(this),
                                    n = r.attr("data-combobox-nrm");
                                if ("undefined" != typeof r.chosen) {
                                    var i = {
                                        search_contains: !0
                                    };
                                    "undefined" != typeof n && n && (i.no_results_text = n), 1 == e.is_rtl && r.addClass("chosen-rtl"), r.chosen(i)
                                } else {
                                    var s = {};
                                    1 == e.is_rtl && (s.dir = "rtl"), "undefined" != typeof n && n && (s.language = {
                                        noResults: function() {
                                            return n
                                        }
                                    }), r.select2(s)
                                }
                            }), 1 == e.is_ajax && e.setupAjaxPagination(), t.submit(this.submitForm), e.initWooCommerceControls(), 0 == r && (e.last_submit_query_params = e.getUrlParams(!1))
                        }, this.onWindowScroll = function(t) {
                            if (!e.is_loading_more && !e.is_max_paged) {
                                var r = a(window).scrollTop(),
                                    n = a(window).scrollTop() + a(window).height(),
                                    i = parseInt(e.infinite_scroll_trigger_amount);
                                if (1 == e.$infinite_scroll_container.length) {
                                    var s = e.$infinite_scroll_container.offset().top + e.$infinite_scroll_container.height();
                                    e.$infinite_scroll_container.offset().top + e.$infinite_scroll_container.height() - r;
                                    n > s + i && e.loadMoreResults()
                                }
                            }
                        }, this.stripQueryStringAndHashFromPath = function(t) {
                            return t.split("?")[0].split("#")[0]
                        }, this.gup = function(t, e) {
                            e || (e = location.href), t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                            var r = "[\\?&]" + t + "=([^&#]*)",
                                a = new RegExp(r),
                                n = a.exec(e);
                            return null == n ? null : n[1]
                        }, this.getUrlParams = function(t, r, a) {
                            if ("undefined" == typeof t) var t = !0;
                            if ("undefined" == typeof r) var r = "";
                            var n = "",
                                s = i.getUrlParams(e),
                                o = Object.keys(s).length,
                                l = 0;
                            if ("undefined" != typeof a && s.hasOwnProperty(a) && o--, o > 0)
                                for (var u in s)
                                    if (s.hasOwnProperty(u)) {
                                        var c = !0;
                                        "undefined" != typeof a && u == a && (c = !1), c && (n += u + "=" + s[u], l < o - 1 && (n += "&"), l++)
                                    }
                            var f = "",
                                d = n;
                            if (f = e.joinUrlParam(f, d), 1 == t) {
                                var p = e.$ajax_results_container.attr("data-paged");
                                "undefined" == typeof p && (p = 1), p > 1 && (f = e.joinUrlParam(f, "sf_paged=" + p))
                            }
                            return f = e.addQueryParams(f, e.extra_query_params.all)
                        }, this.addQueryParams = function(t, r) {
                            var a = "",
                                n = Object.keys(r).length;
                            if (n > 0)
                                for (var i in r) r.hasOwnProperty(i) && "" != r[i] && (a = i + "=" + r[i], t = e.joinUrlParam(t, a));
                            return t
                        }, this.addUrlParam = function(t, e) {
                            var r = "";
                            return "" != t && (r += t.indexOf("?") != -1 ? "&" : "?"), "" != e ? t + r + e : t
                        }, this.joinUrlParam = function(t, e) {
                            var r = "";
                            return "" != t && (r += "&"), "" != e ? t + r + e : t
                        }, this.setAjaxResultsURLs = function(t) {
                            if ("undefined" == typeof e.ajax_results_conf && (e.ajax_results_conf = new Array), e.ajax_results_conf.processing_url = "", e.ajax_results_conf.results_url = "", e.ajax_results_conf.data_type = "", "shortcode" == e.display_result_method) e.ajax_results_conf.results_url = e.addUrlParam(e.results_url, t), "" != e.lang_code && (t = e.joinUrlParam(t, "lang=" + e.lang_code)), e.ajax_results_conf.processing_url = e.addUrlParam(e.ajax_url, t);
                            else if ("post_type_archive" == e.display_result_method) {
                                i.setTaxArchiveResultsUrl(e, e.results_url);
                                var r = i.getResultsUrl(e, e.results_url);
                                e.ajax_results_conf.results_url = e.addUrlParam(r, t), e.ajax_results_conf.processing_url = e.addUrlParam(r, t)
                            } else if ("custom_woocommerce_store" == e.display_result_method) {
                                i.setTaxArchiveResultsUrl(e, e.results_url);
                                var r = i.getResultsUrl(e, e.results_url);
                                e.ajax_results_conf.results_url = e.addUrlParam(r, t), e.ajax_results_conf.processing_url = e.addUrlParam(r, t)
                            } else e.ajax_results_conf.results_url = e.addUrlParam(e.results_url, t), e.ajax_results_conf.processing_url = e.addUrlParam(e.ajax_url, t);
                            e.ajax_results_conf.processing_url = e.addQueryParams(e.ajax_results_conf.processing_url, e.extra_query_params.ajax), e.ajax_results_conf.data_type = e.ajax_data_type
                        }, this.updateLoaderTag = function(t, r) {
                            var n;
                            n = "" != e.infinite_scroll_result_class ? e.$infinite_scroll_container.find(e.infinite_scroll_result_class).last().parent() : e.$infinite_scroll_container;
                            var r = n.prop("tagName"),
                                i = "div";
                            "ol" != r.toLowerCase() && "ul" != r.toLowerCase() || (i = "li");
                            var s = a("<" + i + " />").html(t.html()),
                                o = t.prop("attributes");
                            return a.each(o, function() {
                                s.attr(this.name, this.value)
                            }), s
                        }, this.loadMoreResults = function() {
                            e.is_loading_more = !0;
                            var t = {
                                sfid: e.sfid,
                                targetSelector: e.ajax_target_attr,
                                type: "load_more",
                                object: e
                            };
                            e.triggerEvent("sf:ajaxstart", t);
                            var r = e.getUrlParams(!0);
                            e.last_submit_query_params = e.getUrlParams(!1);
                            var n = "",
                                i = "",
                                s = "",
                                o = this.current_paged + 1;
                            if (r = e.joinUrlParam(r, "sf_paged=" + o), e.setAjaxResultsURLs(r), n = e.ajax_results_conf.processing_url, i = e.ajax_results_conf.results_url, s = e.ajax_results_conf.data_type, e.last_ajax_request && e.last_ajax_request.abort(), 1 == e.use_scroll_loader) {
                                var l = a("<div/>", {
                                    "class": "search-filter-scroll-loading"
                                });
                                l = e.updateLoaderTag(l), e.infiniteScrollAppend(l)
                            }
                            e.last_ajax_request = a.get(n, function(t, r, a) {
                                e.current_paged++, e.last_ajax_request = null, e.addResults(t, s)
                            }, s).fail(function(t, r, a) {
                                var i = {};
                                i.sfid = e.sfid, i.object = e, i.targetSelector = e.ajax_target_attr, i.ajaxURL = n, i.jqXHR = t, i.textStatus = r, i.errorThrown = a, e.triggerEvent("sf:ajaxerror", i)
                            }).always(function() {
                                var t = {};
                                t.sfid = e.sfid, t.targetSelector = e.ajax_target_attr, t.object = e, 1 == e.use_scroll_loader && l.detach(), e.is_loading_more = !1, e.triggerEvent("sf:ajaxfinish", t)
                            })
                        }, this.fetchAjaxResults = function() {
                            var r = {
                                sfid: e.sfid,
                                targetSelector: e.ajax_target_attr,
                                type: "load_results",
                                object: e
                            };
                            e.triggerEvent("sf:ajaxstart", r);
                            var n = t.find('input[type="text"]:focus').not(".sf-datepicker");
                            if (1 == n.length) var s = n.attr("name");
                            if (t.addClass("search-filter-disabled"), i.disableInputs(e), e.$ajax_results_container.animate({
                                    opacity: .5
                                }, "fast"), "pagination" == e.ajax_action) {
                                var o = e.$ajax_results_container.attr("data-paged");
                                "undefined" == typeof o && (o = 1), i.setTaxArchiveResultsUrl(e, e.results_url), l = e.getUrlParams(!1), o > 1 && (l = e.joinUrlParam(l, "sf_paged=" + o))
                            } else if ("submit" == e.ajax_action) {
                                var l = e.getUrlParams(!0);
                                e.last_submit_query_params = e.getUrlParams(!1)
                            }
                            var u = "",
                                c = "",
                                f = "";
                            e.setAjaxResultsURLs(l), u = e.ajax_results_conf.processing_url, c = e.ajax_results_conf.results_url, f = e.ajax_results_conf.data_type, e.last_ajax_request && e.last_ajax_request.abort(), e.last_ajax_request = a.get(u, function(t, r, a) {
                                e.last_ajax_request = null, e.scrollResults(), e.updateResults(t, f), e.updateUrlHistory(c), e.setupAjaxPagination(), e.isSubmitting = !1, e.initWooCommerceControls()
                            }, f).fail(function(t, r, a) {
                                var n = {};
                                n.sfid = e.sfid, n.targetSelector = e.ajax_target_attr, n.object = e, n.ajaxURL = u, n.jqXHR = t, n.textStatus = r, n.errorThrown = a, e.isSubmitting = !1, e.triggerEvent("sf:ajaxerror", n)
                            }).always(function() {
                                e.$ajax_results_container.stop(!0, !0).animate({
                                    opacity: 1
                                }, "fast");
                                var r = {};
                                if (r.sfid = e.sfid, r.targetSelector = e.ajax_target_attr, r.object = e, t.removeClass("search-filter-disabled"), i.enableInputs(e), "" != s) {
                                    var n = [];
                                    e.$fields.each(function() {
                                        var t = a(this).find("input[name='" + s + "']");
                                        1 == t.length && (n = t)
                                    }), 1 == n.length && (n.focus().val(n.val()), e.focusCampo(n[0]))
                                }
                                t.find("input[name='_sf_search']").focus(), e.triggerEvent("sf:ajaxfinish", r)
                            })
                        }, this.focusCampo = function(t) {
                            if (null != t && 0 != t.value.length) {
                                if (t.createTextRange) {
                                    var e = t.createTextRange();
                                    e.moveStart("character", t.value.length), e.collapse(), e.select()
                                } else if (t.selectionStart || "0" == t.selectionStart) {
                                    var r = t.value.length;
                                    t.selectionStart = r, t.selectionEnd = r, t.focus()
                                }
                            } else t.focus()
                        }, this.triggerEvent = function(t, r) {
                            var n = a(".searchandfilter[data-sf-form-id='" + e.sfid + "']");
                            n.trigger(t, [r])
                        }, this.fetchAjaxForm = function() {
                            var r = {
                                sfid: e.sfid,
                                targetSelector: e.ajax_target_attr,
                                type: "form",
                                object: e
                            };
                            e.triggerEvent("sf:ajaxformstart", [r]), t.addClass("search-filter-disabled"), i.disableInputs(e);
                            var n = e.getUrlParams();
                            "" != e.lang_code && (n = e.joinUrlParam(n, "lang=" + e.lang_code));
                            var s = e.addUrlParam(e.ajax_form_url, n),
                                o = "json";
                            a.get(s, function(t, r, a) {
                                e.updateForm(t, o)
                            }, o).fail(function(t, r, a) {
                                var n = {};
                                n.sfid = e.sfid, n.targetSelector = e.ajax_target_attr, n.object = e, n.ajaxURL = s, n.jqXHR = t, n.textStatus = r, n.errorThrown = a, e.triggerEvent("sf:ajaxerror", [n])
                            }).always(function() {
                                var r = {};
                                r.sfid = e.sfid, r.targetSelector = e.ajax_target_attr, r.object = e, t.removeClass("search-filter-disabled"), i.enableInputs(e), e.triggerEvent("sf:ajaxformfinish", [r])
                            })
                        }, this.copyListItemsContents = function(t, e) {
                            var r = this,
                                n = new Array,
                                i = new Array,
                                s = t.find("> ul > li");
                            s.each(function(t) {
                                n.push(a(this).html());
                                var e = a(this).prop("attributes");
                                i.push(e)
                            });
                            var o = 0,
                                l = e.find("> ul > li");
                            l.each(function(t) {
                                a(this).html(n[o]);
                                var e = a(s.get(o)),
                                    i = a(this);
                                i.removeAttr("data-sf-taxonomy-archive"), r.copyAttributes(e, i), o++
                            })
                        }, this.updateFormAttributes = function(t, e) {
                            var r = t.prop("attributes"),
                                n = e.prop("attributes");
                            a.each(n, function() {
                                e.removeAttr(this.name)
                            }), a.each(r, function() {
                                e.attr(this.name, this.value)
                            })
                        }, this.copyAttributes = function(t, e, r) {
                            if ("undefined" == typeof r) var r = "";
                            var n = t.prop("attributes"),
                                i = e.prop("attributes");
                            a.each(i, function() {
                                "" != r && 0 == this.name.indexOf(r) && e.removeAttr(this.name)
                            }), a.each(n, function() {
                                e.attr(this.name, this.value)
                            })
                        }, this.copyFormAttributes = function(t, e) {
                            e.removeAttr("data-current-taxonomy-archive"), this.copyAttributes(t, e)
                        }, this.updateForm = function(e, r) {
                            var n = this;
                            "json" == r && "undefined" != typeof e.form && (t.off(), n.copyListItemsContents(a(e.form), t), this.init(!0), 1 == n.is_ajax && n.setupAjaxPagination())
                        }, this.addResults = function(t, e) {
                            var r = this;
                            if ("json" == e) r.load_more_html = t.results;
                            else if ("html" == e) {
                                var n = a(t);
                                r.load_more_html = n.find(r.ajax_target_attr).html()
                            }
                            var i = !1;
                            if (a("<div>" + r.load_more_html + "</div>").find("[data-search-filter-action='infinite-scroll-end']").length > 0 && (i = !0), "" != r.infinite_scroll_container && (r.load_more_html = a("<div>" + r.load_more_html + "</div>").find(r.infinite_scroll_container).html()), "" != r.infinite_scroll_result_class) {
                                var s = a("<div>" + r.load_more_html + "</div>").find(r.infinite_scroll_result_class),
                                    o = a("<div/>", {});
                                o.append(s), r.load_more_html = o.html()
                            }
                            i ? (r.is_max_paged = !0, r.last_load_more_html = r.load_more_html, r.infiniteScrollAppend(r.load_more_html)) : r.last_load_more_html !== r.load_more_html ? (r.last_load_more_html = r.load_more_html, r.infiniteScrollAppend(r.load_more_html)) : r.is_max_paged = !0
                        }, this.infiniteScrollAppend = function(t) {
                            "" != e.infinite_scroll_result_class ? e.$infinite_scroll_container.find(e.infinite_scroll_result_class).last().after(t) : e.$infinite_scroll_container.append(t)
                        }, this.updateResults = function(e, r) {
                            var n = this;
                            if ("json" == r) n.$ajax_results_container.html(e.results), "undefined" != typeof e.form && (t.off(), n.removeAjaxPagination(), n.copyListItemsContents(a(e.form), t), n.copyFormAttributes(a(e.form), t), t.searchAndFilter({
                                isInit: !1
                            }));
                            else if ("html" == r) {
                                var i = a(e);
                                if (n.$ajax_results_container.html(i.find(n.ajax_target_attr).html()), n.$ajax_results_container.find(".searchandfilter").length > 0 && n.$ajax_results_container.find(".searchandfilter").searchAndFilter(), 0 == n.$ajax_results_container.find(".searchandfilter[data-sf-form-id='" + n.sfid + "']").length) {
                                    var s = i.find(".searchandfilter[data-sf-form-id='" + n.sfid + "']");
                                    1 == s.length && (t.off(), n.removeAjaxPagination(), n.copyListItemsContents(s, t), n.copyFormAttributes(s, t), t.searchAndFilter({
                                        isInit: !1
                                    }))
                                }
                            }
                            n.is_max_paged = !1, n.current_paged = 1, n.setInfiniteScrollContainer()
                        }, this.removeWooCommerceControls = function() {
                            var t = a(".woocommerce-ordering .orderby"),
                                e = a(".woocommerce-ordering");
                            e.off(), t.off()
                        }, this.addQueryParam = function(t, r, a) {
                            if ("undefined" == typeof a) var a = "all";
                            e.extra_query_params[a][t] = r
                        }, this.initWooCommerceControls = function() {
                            e.removeWooCommerceControls();
                            var r = a(".woocommerce-ordering .orderby"),
                                n = a(".woocommerce-ordering"),
                                i = "";
                            i = r.length > 0 ? r.val() : e.getQueryParamFromURL("orderby", window.location.href), "menu_order" == i && (i = ""), "" != i && i && (e.extra_query_params.all.orderby = i), n.on("submit", function(t) {
                                return t.preventDefault(), !1
                            }), r.on("change", function(r) {
                                r.preventDefault();
                                var n = a(this).val();
                                return "menu_order" == n && (n = ""), e.extra_query_params.all.orderby = n, t.submit(), !1
                            })
                        }, this.scrollResults = function() {
                            var t = this;
                            t.scroll_on_action != t.ajax_action && "all" != t.scroll_on_action || t.scrollToPos()
                        }, this.updateUrlHistory = function(e) {
                            var r = this,
                                a = 0;
                            window.history && window.history.pushState && (a = t.attr("data-use-history-api")), 1 == r.update_ajax_url && 1 == a && window.history && window.history.pushState && history.pushState(null, null, e)
                        }, this.removeAjaxPagination = function() {
                            var t = this;
                            if ("undefined" != typeof t.ajax_links_selector) {
                                var e = jQuery(t.ajax_links_selector);
                                e.length > 0 && e.off()
                            }
                        }, this.canFetchAjaxResults = function(t) {
                            if ("undefined" == typeof t) var t = "";
                            var e = this,
                                r = !1;
                            if (1 == e.is_ajax) {
                                1 == e.$ajax_results_container.length && (r = !0);
                                var a = e.results_url,
                                    n = "",
                                    i = window.location.href,
                                    s = window.location.href.indexOf("#");
                                if (s !== -1 && (i = window.location.href.substr(0, window.location.href.indexOf("#"))), ("custom_woocommerce_store" == e.display_result_method || "post_type_archive" == e.display_result_method) && 1 == e.enable_taxonomy_archives && "" !== e.current_taxonomy_archive) return r = !0;
                                var o = i.split("?"),
                                    l = "";
                                l = o.length > 0 ? o[0] : i;
                                var u = e.getQueryParamFromURL("lang", window.location.href);
                                "undefined" != typeof u && null !== u && (l = e.addUrlParam(l, "lang=" + u));
                                var c = e.getQueryParamFromURL("sfid", window.location.href);
                                Number(parseFloat(c)) == c && (l = e.addUrlParam(l, "sfid=" + c)), l = l.replace(/\/$/, ""), a = a.replace(/\/$/, ""), n = encodeURI(a.replace(/\/$/, ""));
                                var f = -1;
                                l != a && l.toLowerCase() != n.toLowerCase() || (f = 1), 1 == e.only_results_ajax ? r = f > -1 : "pagination" == t && (f > -1 || (r = !1))
                            }
                            return r
                        }, this.setupAjaxPagination = function() {
                            "undefined" != typeof e.ajax_links_selector && ("infinite_scroll" === this.pagination_type && 1 === parseInt(this.instance_number) && (a(window).off("scroll", e.onWindowScroll), e.canFetchAjaxResults("pagination") && a(window).on("scroll", e.onWindowScroll)), a(document).off("click", e.ajax_links_selector), a(document).on("click", e.ajax_links_selector, function(t) {
                                if (e.canFetchAjaxResults("pagination")) {
                                    t.preventDefault();
                                    var r = jQuery(this).attr("href");
                                    e.ajax_action = "pagination";
                                    var a = e.getPagedFromURL(r);
                                    return e.$ajax_results_container.attr("data-paged", a), e.fetchAjaxResults(), !1
                                }
                            }))
                        }, this.getPagedFromURL = function(t) {
                            var r = 1,
                                a = e.getQueryParamFromURL("sf_paged", t);
                            return "string" != typeof a && "number" != typeof a || (r = a), r
                        }, this.getQueryParamFromURL = function(t, e) {
                            var r = "?" + e.split("?")[1];
                            if ("undefined" != typeof r) {
                                var a = decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(r) || [, ""])[1].replace(/\+/g, "%20")) || null;
                                return a
                            }
                            return ""
                        }, this.formUpdated = function(t) {
                            return 1 == e.auto_update ? e.submitForm() : 0 == e.auto_update && 1 == e.auto_count_refresh_mode && e.formUpdatedFetchAjax(), !1
                        }, this.formUpdatedFetchAjax = function() {
                            return e.fetchAjaxForm(), !1
                        }, this.setFields = function(t) {
                            e.$fields.each(function() {
                                var t = a(this),
                                    e = t.find(".sf-meta-range-slider").attr("data-display-values-as");
                                "textinput" === e && (t.find(".meta-slider").length > 0, t.find(".meta-slider").each(function(t) {
                                    var e = a(this)[0],
                                        r = a(this).closest(".sf-meta-range-slider"),
                                        n = r.find(".sf-range-min").val(),
                                        i = r.find(".sf-range-max").val();
                                    e.noUiSlider.set([n, i])
                                }))
                            })
                        }, this.submitForm = function(t) {
                            if (1 == e.isSubmitting) return !1;
                            if (e.setFields(), e.clearTimer(), e.isSubmitting = !0, i.setTaxArchiveResultsUrl(e, e.results_url), e.$ajax_results_container.attr("data-paged", 1), e.canFetchAjaxResults()) e.ajax_action = "submit", e.fetchAjaxResults();
                            else {
                                var r = i.getResultsUrl(e, e.results_url),
                                    a = e.getUrlParams(!0, "");
                                r = e.addUrlParam(r, a), window.location.href = r
                            }
                            return !1
                        }, this.resetForm = function(t) {
                            e.$fields.each(function() {
                                var t = a(this);
                                t.find("select:not([multiple='multiple']) > option:first-child").prop("selected", !0), t.find("select[multiple='multiple'] > option").prop("selected", !1), t.find("input[type='checkbox']").prop("checked", !1), t.find("> ul > li:first-child input[type='radio']").prop("checked", !0), t.find("input[type='text']").val(""), t.find(".sf-option-active").removeClass("sf-option-active"), t.find("> ul > li:first-child input[type='radio']").parent().addClass("sf-option-active"), t.find("input[type='number']").each(function(t) {
                                    var e = a(this);
                                    e.parent().parent().hasClass("sf-meta-range") && (0 == t ? e.val(e.attr("min")) : 1 == t && e.val(e.attr("max")))
                                });
                                var e = t.find(".sf-meta-range-select-fromto");
                                if (e.length > 0) {
                                    var r = e.attr("data-min"),
                                        n = e.attr("data-max");
                                    e.find("select").each(function(t) {
                                        var e = a(this);
                                        0 == t ? e.val(r) : 1 == t && e.val(n)
                                    })
                                }
                                var i = t.find(".sf-meta-range-radio-fromto");
                                if (i.length > 0) {
                                    var r = i.attr("data-min"),
                                        n = i.attr("data-max"),
                                        s = i.find(".sf-input-range-radio");
                                    s.each(function(t) {
                                        var e = a(this).find(".sf-input-radio");
                                        e.prop("checked", !1), 0 == t ? e.filter('[value="' + r + '"]').prop("checked", !0) : 1 == t && e.filter('[value="' + n + '"]').prop("checked", !0)
                                    })
                                }
                                t.find(".meta-slider").each(function(t) {
                                    var e = a(this)[0],
                                        r = a(this).closest(".sf-meta-range-slider"),
                                        n = r.attr("data-min"),
                                        i = r.attr("data-max");
                                    e.noUiSlider.set([n, i])
                                });
                                var o = t.find("select[data-combobox='1']");
                                o.length > 0 && ("undefined" != typeof o.chosen ? o.trigger("chosen:updated") : (o.val(""), o.trigger("change.select2")))
                            }), e.clearTimer(), "always" == t ? e.submitForm() : "never" == t ? 1 == this.auto_count_refresh_mode && e.formUpdatedFetchAjax() : "auto" == t && (1 == this.auto_update ? e.submitForm() : 1 == this.auto_count_refresh_mode && e.formUpdatedFetchAjax())
                        }, this.init();
                    var o = {};
                    o.sfid = e.sfid, o.targetSelector = e.ajax_target_attr, o.object = this, r.isInit && e.triggerEvent("sf:init", o)
                })
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./process_form": 7,
        "./state": 8,
        "js-cookie": 2,
        nouislider: 3
    }],
    7: [function(t, e, r) {
        (function(t) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof t ? t.jQuery : null;
            e.exports = {
                taxonomy_archives: 0,
                url_params: {},
                tax_archive_results_url: "",
                active_tax: "",
                fields: {},
                init: function(t, e) {
                    this.taxonomy_archives = 0, this.url_params = {}, this.tax_archive_results_url = "", this.active_tax = "", this.taxonomy_archives = t, this.current_taxonomy_archive = e, this.clearUrlComponents()
                },
                setTaxArchiveResultsUrl: function(t, e, a) {
                    var n = this;
                    if (1 == this.taxonomy_archives) {
                        if ("undefined" == typeof a) var a = !1;
                        var i = !1,
                            s = "",
                            o = "",
                            l = t.$fields.parent().find("[data-sf-taxonomy-archive='1']");
                        if (1 == l.length) {
                            i = l;
                            var u = i.attr("data-sf-field-type");
                            if ("tag" == u || "category" == u || "taxonomy" == u) {
                                var c = n.processTaxonomy(i, !0);
                                s = i.attr("data-sf-field-name");
                                var f = s.replace("_sft_", "");
                                c && (o = c.value)
                            }
                            "" == o && (i = !1)
                        }
                        if ("" != n.current_taxonomy_archive && n.current_taxonomy_archive != f) return void(this.tax_archive_results_url = e);
                        if ("" != o && i || t.$fields.each(function() {
                                if (!i) {
                                    var t = r(this).attr("data-sf-field-type");
                                    if ("tag" == t || "category" == t || "taxonomy" == t) {
                                        var e = n.processTaxonomy(r(this), !0);
                                        s = r(this).attr("data-sf-field-name"), e && (o = e.value, "" != o && (i = r(this)))
                                    }
                                }
                            }), i && "" != o) {
                            var d = i.attr("data-sf-term-rewrite");
                            if ("" != d) {
                                var p = JSON.parse(d),
                                    h = i.attr("data-sf-field-input-type");
                                if (n.active_tax = s, "radio" == h || "checkbox" == h) {
                                    var m = !0,
                                        _ = o.split(",").join("+").split("+");
                                    if (_.length > 1 && (m = !1), m) {
                                        var g = i.find("input[value='" + o + "']"),
                                            v = g.parent(),
                                            x = v.attr("data-sf-depth"),
                                            y = new Array;
                                        y.push(o);
                                        for (var b = x; b > 0; b--) v = v.parent().parent(), y.push(v.find("input").val());
                                        y.reverse();
                                        var w = p[x],
                                            j = w;
                                        r(y).each(function(t, e) {
                                            j = j.replace("[" + t + "]", e)
                                        }), this.tax_archive_results_url = j
                                    }
                                } else if ("select" == h || "multiselect" == h) {
                                    var m = !0,
                                        _ = o.split(",").join("+").split("+");
                                    if (_.length > 1 && (m = !1), m) {
                                        var v = i.find("option[value='" + o + "']"),
                                            x = v.attr("data-sf-depth"),
                                            y = new Array;
                                        y.push(o);
                                        for (var b = x; b > 0; b--) v = v.prevAll("option[data-sf-depth='" + (b - 1) + "']"), y.push(v.val());
                                        y.reverse();
                                        var w = p[x],
                                            j = w;
                                        r(y).each(function(t, e) {
                                            j = j.replace("[" + t + "]", e)
                                        }), this.tax_archive_results_url = j
                                    }
                                }
                            }
                        }
                    }
                },
                getResultsUrl: function(t, e) {
                    return "" == this.tax_archive_results_url ? e : this.tax_archive_results_url
                },
                getUrlParams: function(t) {
                    if (this.buildUrlComponents(t, !0), "" != this.tax_archive_results_url && "" != this.active_tax) {
                        var e = this.active_tax;
                        "undefined" != typeof this.url_params[e] && delete this.url_params[e]
                    }
                    return this.url_params
                },
                clearUrlComponents: function() {
                    this.url_params = {}
                },
                disableInputs: function(t) {
                    t.$fields.each(function() {
                        var t = r(this).find("input, select, .meta-slider");
                        t.attr("disabled", "disabled"), t.attr("disabled", !0), t.prop("disabled", !0), t.trigger("chosen:updated")
                    })
                },
                enableInputs: function(t) {
                    t.$fields.each(function() {
                        var t = r(this).find("input, select, .meta-slider");
                        t.prop("disabled", !0), t.removeAttr("disabled"), t.trigger("chosen:updated")
                    })
                },
                buildUrlComponents: function(t, e) {
                    var a = this;
                    "undefined" != typeof e && 1 == e && this.clearUrlComponents(), t.$fields.each(function() {
                        var t = (r(this).attr("data-sf-field-name"), r(this).attr("data-sf-field-type"));
                        "search" == t ? a.processSearchField(r(this)) : "tag" == t || "category" == t || "taxonomy" == t ? a.processTaxonomy(r(this)) : "sort_order" == t ? a.processSortOrderField(r(this)) : "posts_per_page" == t ? a.processResultsPerPageField(r(this)) : "author" == t ? a.processAuthor(r(this)) : "post_type" == t ? a.processPostType(r(this)) : "post_date" == t ? a.processPostDate(r(this)) : "post_meta" == t && a.processPostMeta(r(this))
                    })
                },
                processSearchField: function(t) {
                    var e = this,
                        r = t.find("input[name^='_sf_search']");
                    if (r.length > 0) {
                        var a = (r.attr("name").replace("[]", ""), r.val());
                        "" != a && (e.url_params._sf_s = encodeURIComponent(a))
                    }
                },
                processSortOrderField: function(t) {
                    this.processAuthor(t)
                },
                processResultsPerPageField: function(t) {
                    this.processAuthor(t)
                },
                getActiveTax: function(t) {
                    return this.active_tax
                },
                getSelectVal: function(t) {
                    var e = "";
                    return 0 != t.val() && (e = t.val()), null == e && (e = ""), e
                },
                getMetaSelectVal: function(t) {
                    var e = "";
                    return e = t.val(), null == e && (e = ""), e
                },
                getMultiSelectVal: function(t, e) {
                    var r = "+";
                    if ("or" == e && (r = ","), "object" == typeof t.val() && null != t.val()) return t.val().join(r)
                },
                getMetaMultiSelectVal: function(t, e) {
                    var a = "-+-";
                    if ("or" == e && (a = "-,-"), "object" == typeof t.val() && null != t.val()) {
                        var n = [];
                        return r(t.val()).each(function(t, e) {
                            n.push(e)
                        }), n.join(a)
                    }
                    return ""
                },
                getCheckboxVal: function(t, e) {
                    var a = t.map(function() {
                            if (1 == r(this).prop("checked")) return r(this).val()
                        }).get(),
                        n = "+";
                    return "or" == e && (n = ","), a.join(n)
                },
                getMetaCheckboxVal: function(t, e) {
                    var a = t.map(function() {
                            if (1 == r(this).prop("checked")) return r(this).val()
                        }).get(),
                        n = "-+-";
                    return "or" == e && (n = "-,-"), a.join(n)
                },
                getRadioVal: function(t) {
                    var e = t.map(function() {
                        if (1 == r(this).prop("checked")) return r(this).val()
                    }).get();
                    if (0 != e[0]) return e[0]
                },
                getMetaRadioVal: function(t) {
                    var e = t.map(function() {
                        if (1 == r(this).prop("checked")) return r(this).val()
                    }).get();
                    return e[0]
                },
                processAuthor: function(t) {
                    var e, r = this,
                        a = (t.attr("data-sf-field-type"), t.attr("data-sf-field-input-type")),
                        n = "",
                        i = "";
                    if ("select" == a) e = t.find("select"), n = e.attr("name").replace("[]", ""), i = r.getSelectVal(e);
                    else if ("multiselect" == a) {
                        e = t.find("select"), n = e.attr("name").replace("[]", "");
                        e.attr("data-operator");
                        i = r.getMultiSelectVal(e, "or")
                    } else if ("checkbox" == a) {
                        if (e = t.find("ul > li input:checkbox"), e.length > 0) {
                            n = e.attr("name").replace("[]", "");
                            t.find("> ul").attr("data-operator");
                            i = r.getCheckboxVal(e, "or")
                        }
                    } else "radio" == a && (e = t.find("ul > li input:radio"), e.length > 0 && (n = e.attr("name").replace("[]", ""), i = r.getRadioVal(e)));
                    if ("undefined" != typeof i && "" != i) {
                        var s = "";
                        "_sf_author" == n ? s = "authors" : "_sf_sort_order" == n ? s = "sort_order" : "_sf_ppp" == n ? s = "_sf_ppp" : "_sf_post_type" == n && (s = "post_types"), "" != s && (r.url_params[s] = i)
                    }
                },
                processPostType: function(t) {
                    this.processAuthor(t)
                },
                processPostMeta: function(t) {
                    var e, a = this,
                        n = (t.attr("data-sf-field-type"), t.attr("data-sf-field-input-type")),
                        i = t.attr("data-sf-meta-type"),
                        s = "",
                        o = "";
                    if ("number" == i) {
                        if ("range-number" == n) {
                            e = t.find(".sf-meta-range-number input");
                            var l = [];
                            e.each(function() {
                                l.push(r(this).val())
                            }), s = l.join("+")
                        } else if ("range-slider" == n) {
                            e = t.find(".sf-meta-range-slider input");
                            var u = t.find(".sf-meta-range-slider"),
                                c = u.attr("data-decimal-places"),
                                f = u.attr("data-thousand-seperator"),
                                d = u.attr("data-decimal-seperator"),
                                p = wNumb({
                                    mark: d,
                                    decimals: parseFloat(c),
                                    thousand: f
                                }),
                                l = [],
                                h = t.find(".meta-slider")[0],
                                m = h.noUiSlider.get();
                            l.push(p.from(m[0])), l.push(p.from(m[1])), s = l.join("+"), o = u.attr("data-sf-field-name")
                        } else if ("range-radio" == n) {
                            e = t.find(".sf-input-range-radio"), 0 == e.length && (e = t.find("> ul"));
                            var u = t.find(".sf-meta-range");
                            if (e.length > 0) {
                                var _ = [];
                                e.each(function() {
                                    var t = r(this).find(".sf-input-radio");
                                    _.push(a.getMetaRadioVal(t))
                                }), 2 == _.length && Number(_[1]) < Number(_[0]) && (_[1] = _[0]), s = _.join("+")
                            }
                            o = 1 == e.length ? e.find(".sf-input-radio").attr("name").replace("[]", "") : u.attr("data-sf-field-name")
                        } else if ("range-select" == n) {
                            e = t.find(".sf-input-select");
                            var u = t.find(".sf-meta-range");
                            if (e.length > 0) {
                                var _ = [];
                                e.each(function() {
                                    var t = r(this);
                                    _.push(a.getMetaSelectVal(t))
                                }), 2 == _.length && Number(_[1]) < Number(_[0]) && (_[1] = _[0]), s = _.join("+")
                            }
                            o = 1 == e.length ? e.attr("name").replace("[]", "") : u.attr("data-sf-field-name")
                        } else "range-checkbox" == n && (e = t.find("ul > li input:checkbox"), e.length > 0 && (s = a.getCheckboxVal(e, "and")));
                        "" == o && (o = e.attr("name").replace("[]", ""))
                    } else if ("choice" == i) {
                        if ("select" == n) e = t.find("select"), s = a.getMetaSelectVal(e);
                        else if ("multiselect" == n) {
                            e = t.find("select");
                            var g = e.attr("data-operator");
                            s = a.getMetaMultiSelectVal(e, g)
                        } else if ("checkbox" == n) {
                            if (e = t.find("ul > li input:checkbox"), e.length > 0) {
                                var g = t.find("> ul").attr("data-operator");
                                s = a.getMetaCheckboxVal(e, g)
                            }
                        } else "radio" == n && (e = t.find("ul > li input:radio"), e.length > 0 && (s = a.getMetaRadioVal(e)));
                        s = encodeURIComponent(s), "undefined" != typeof e && e.length > 0 && (o = e.attr("name").replace("[]", ""), o = o)
                    } else "date" == i && a.processPostDate(t);
                    "undefined" != typeof s && "" != s && (a.url_params[encodeURIComponent(o)] = s)
                },
                processPostDate: function(t) {
                    var e, a = this,
                        n = (t.attr("data-sf-field-type"), t.attr("data-sf-field-input-type"), ""),
                        i = "";
                    e = t.find("ul > li input:text"), n = e.attr("name").replace("[]", "");
                    var s = [];
                    if (e.each(function() {
                            s.push(r(this).val())
                        }), 2 == e.length ? "" == s[0] && "" == s[1] || (i = s.join("+"), i = i.replace(/\//g, "")) : 1 == e.length && "" != s[0] && (i = s.join("+"), i = i.replace(/\//g, "")), "undefined" != typeof i && "" != i) {
                        var o = "";
                        o = "_sf_post_date" == n ? "post_date" : n, "" != o && (a.url_params[o] = i)
                    }
                },
                processTaxonomy: function(t, e) {
                    "undefined" == typeof e && (e = !1);
                    var r, a = this,
                        n = (t.attr("data-sf-field-type"), t.attr("data-sf-field-input-type")),
                        i = "",
                        s = "";
                    if ("select" == n) r = t.find("select"), i = r.attr("name").replace("[]", ""), s = a.getSelectVal(r);
                    else if ("multiselect" == n) {
                        r = t.find("select"), i = r.attr("name").replace("[]", "");
                        var o = r.attr("data-operator");
                        s = a.getMultiSelectVal(r, o)
                    } else if ("checkbox" == n) {
                        if (r = t.find("ul > li input:checkbox"), r.length > 0) {
                            i = r.attr("name").replace("[]", "");
                            var o = t.find("> ul").attr("data-operator");
                            s = a.getCheckboxVal(r, o)
                        }
                    } else "radio" == n && (r = t.find("ul > li input:radio"), r.length > 0 && (i = r.attr("name").replace("[]", ""), s = a.getRadioVal(r)));
                    if ("undefined" != typeof s && "" != s) {
                        if (1 == e) return {
                            name: i,
                            value: s
                        };
                        a.url_params[i] = s
                    }
                    if (1 == e) return !1
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    8: [function(t, e, r) {
        e.exports = {
            searchForms: {},
            init: function() {},
            addSearchForm: function(t, e) {
                this.searchForms[t] = e
            },
            getSearchForm: function(t) {
                return this.searchForms[t]
            }
        }
    }, {}]
}, {}, [1]);
(function() {
    var t, e, s, i, n = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        r = function(t, e) {
            function s() {
                this.constructor = t
            }
            for (var i in e) o.call(e, i) && (t[i] = e[i]);
            return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
        },
        o = {}.hasOwnProperty;
    (i = function() {
        function t() {
            this.options_index = 0, this.parsed = []
        }
        return t.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, t.prototype.add_group = function(t) {
            var e, s, i, n, r, o;
            for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: t.label,
                    title: t.title ? t.title : void 0,
                    children: 0,
                    disabled: t.disabled,
                    classes: t.className
                }), o = [], s = 0, i = (r = t.childNodes).length; s < i; s++) n = r[s], o.push(this.add_option(n, e, t.disabled));
            return o
        }, t.prototype.add_option = function(t, e, s) {
            if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: t.value,
                text: t.text,
                html: t.innerHTML,
                title: t.title ? t.title : void 0,
                selected: t.selected,
                disabled: !0 === s ? s : t.disabled,
                group_array_index: e,
                group_label: null != e ? this.parsed[e].label : null,
                classes: t.className,
                style: t.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, t
    }()).select_to_array = function(t) {
        var e, s, n, r, o;
        for (r = new i, s = 0, n = (o = t.childNodes).length; s < n; s++) e = o[s], r.add_node(e);
        return r.parsed
    }, e = function() {
        function t(e, s) {
            this.form_field = e, this.options = null != s ? s : {}, this.label_click_handler = n(this.label_click_handler, this), t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return t.prototype.set_default_values = function() {
            return this.click_test_action = function(t) {
                return function(e) {
                    return t.test_active_click(e)
                }
            }(this), this.activate_action = function(t) {
                return function(e) {
                    return t.activate_field(e)
                }
            }(this), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
        }, t.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
        }, t.prototype.choice_label = function(t) {
            return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + this.escape_html(t.group_label) + "</b>" + t.html : t.html
        }, t.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, t.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, t.prototype.input_focus = function(t) {
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function(t) {
                    return function() {
                        return t.container_mousedown()
                    }
                }(this), 50)
            } else if (!this.active_field) return this.activate_field()
        }, t.prototype.input_blur = function(t) {
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function(t) {
                return function() {
                    return t.blur_test()
                }
            }(this), 100)
        }, t.prototype.label_click_handler = function(t) {
            return this.is_multiple ? this.container_mousedown(t) : this.activate_field()
        }, t.prototype.results_option_build = function(t) {
            var e, s, i, n, r, o, h;
            for (e = "", h = 0, n = 0, r = (o = this.results_data).length; n < r && (s = o[n], i = "", "" !== (i = s.group ? this.result_add_group(s) : this.result_add_option(s)) && (h++, e += i), (null != t ? t.first : void 0) && (s.selected && this.is_multiple ? this.choice_build(s) : s.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(s))), !(h >= this.max_shown_results)); n++);
            return e
        }, t.prototype.result_add_option = function(t) {
            var e, s;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), s = document.createElement("li"), s.className = e.join(" "), t.style && (s.style.cssText = t.style), s.setAttribute("data-option-array-index", t.array_index), s.innerHTML = t.highlighted_html || t.html, t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, t.prototype.result_add_group = function(t) {
            var e, s;
            return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = []).push("group-result"), t.classes && e.push(t.classes), s = document.createElement("li"), s.className = e.join(" "), s.innerHTML = t.highlighted_html || this.escape_html(t.label), t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, t.prototype.results_update_field = function() {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, t.prototype.reset_single_select_options = function() {
            var t, e, s, i, n;
            for (n = [], t = 0, e = (s = this.results_data).length; t < e; t++)(i = s[t]).selected ? n.push(i.selected = !1) : n.push(void 0);
            return n
        }, t.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, t.prototype.results_search = function(t) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, t.prototype.winnow_results = function(t) {
            var e, s, i, n, r, o, h, l, c, _, a, u, d, p, f;
            for (this.no_results_clear(), _ = 0, e = (h = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), c = this.get_search_regex(e), i = 0, n = (l = this.results_data).length; i < n; i++)(r = l[i]).search_match = !1, a = null, u = null, r.highlighted_html = "", this.include_option_in_results(r) && (r.group && (r.group_match = !1, r.active_options = 0), null != r.group_array_index && this.results_data[r.group_array_index] && (0 === (a = this.results_data[r.group_array_index]).active_options && a.search_match && (_ += 1), a.active_options += 1), f = r.group ? r.label : r.text, r.group && !this.group_search || (u = this.search_string_match(f, c), r.search_match = null != u, r.search_match && !r.group && (_ += 1), r.search_match ? (h.length && (d = u.index, o = f.slice(0, d), s = f.slice(d, d + h.length), p = f.slice(d + h.length), r.highlighted_html = this.escape_html(o) + "<em>" + this.escape_html(s) + "</em>" + this.escape_html(p)), null != a && (a.group_match = !0)) : null != r.group_array_index && this.results_data[r.group_array_index].search_match && (r.search_match = !0)));
            return this.result_clear_highlight(), _ < 1 && h.length ? (this.update_results_content(""), this.no_results(h)) : (this.update_results_content(this.results_option_build()), (null != t ? t.skip_highlight : void 0) ? void 0 : this.winnow_results_set_highlight())
        }, t.prototype.get_search_regex = function(t) {
            var e, s;
            return s = this.search_contains ? t : "(^|\\s|\\b)" + t + "[^\\s]*", this.enable_split_word_search || this.search_contains || (s = "^" + s), e = this.case_sensitive_search ? "" : "i", new RegExp(s, e)
        }, t.prototype.search_string_match = function(t, e) {
            var s;
            return s = e.exec(t), !this.search_contains && (null != s ? s[1] : void 0) && (s.index += 1), s
        }, t.prototype.choices_count = function() {
            var t, e, s;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, t = 0, e = (s = this.form_field.options).length; t < e; t++) s[t].selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, t.prototype.choices_click = function(t) {
            if (t.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, t.prototype.keydown_checker = function(t) {
            var e, s;
            switch (s = null != (e = t.which) ? e : t.keyCode, this.search_field_scale(), 8 !== s && this.pending_backstroke && this.clear_backstroke(), s) {
                case 8:
                    this.backstroke_length = this.get_search_field_value().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                case 27:
                    this.results_showing && t.preventDefault();
                    break;
                case 32:
                    this.disable_search && t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
            }
        }, t.prototype.keyup_checker = function(t) {
            var e, s;
            switch (s = null != (e = t.which) ? e : t.keyCode, this.search_field_scale(), s) {
                case 8:
                    this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                    break;
                case 13:
                    t.preventDefault(), this.results_showing && this.result_select(t);
                    break;
                case 27:
                    this.results_showing && this.results_hide();
                    break;
                case 9:
                case 16:
                case 17:
                case 18:
                case 38:
                case 40:
                case 91:
                    break;
                default:
                    this.results_search()
            }
        }, t.prototype.clipboard_event_checker = function(t) {
            if (!this.is_disabled) return setTimeout(function(t) {
                return function() {
                    return t.results_search()
                }
            }(this), 50)
        }, t.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, t.prototype.include_option_in_results = function(t) {
            return !(this.is_multiple && !this.display_selected_options && t.selected) && (!(!this.display_disabled_options && t.disabled) && !t.empty)
        }, t.prototype.search_results_touchstart = function(t) {
            return this.touch_started = !0, this.search_results_mouseover(t)
        }, t.prototype.search_results_touchmove = function(t) {
            return this.touch_started = !1, this.search_results_mouseout(t)
        }, t.prototype.search_results_touchend = function(t) {
            if (this.touch_started) return this.search_results_mouseup(t)
        }, t.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
        }, t.prototype.get_single_html = function() {
            return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
        }, t.prototype.get_multi_html = function() {
            return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
        }, t.prototype.get_no_results_html = function(t) {
            return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(t) + "</span>\n</li>"
        }, t.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
        }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
    }(), (t = jQuery).fn.extend({
        chosen: function(i) {
            return e.browser_is_supported() ? this.each(function(e) {
                var n, r;
                r = (n = t(this)).data("chosen"), "destroy" !== i ? r instanceof s || n.data("chosen", new s(this, i)) : r instanceof s && r.destroy()
            }) : this
        }
    }), s = function(s) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return r(n, e), n.prototype.setup = function() {
            return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
        }, n.prototype.set_up_html = function() {
            var e, s;
            return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), s = {
                "class": e.join(" "),
                title: this.form_field.title
            }, this.form_field.id.length && (s.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", s), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, n.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, n.prototype.register_observers = function() {
            return this.container.on("touchstart.chosen", function(t) {
                return function(e) {
                    t.container_mousedown(e)
                }
            }(this)), this.container.on("touchend.chosen", function(t) {
                return function(e) {
                    t.container_mouseup(e)
                }
            }(this)), this.container.on("mousedown.chosen", function(t) {
                return function(e) {
                    t.container_mousedown(e)
                }
            }(this)), this.container.on("mouseup.chosen", function(t) {
                return function(e) {
                    t.container_mouseup(e)
                }
            }(this)), this.container.on("mouseenter.chosen", function(t) {
                return function(e) {
                    t.mouse_enter(e)
                }
            }(this)), this.container.on("mouseleave.chosen", function(t) {
                return function(e) {
                    t.mouse_leave(e)
                }
            }(this)), this.search_results.on("mouseup.chosen", function(t) {
                return function(e) {
                    t.search_results_mouseup(e)
                }
            }(this)), this.search_results.on("mouseover.chosen", function(t) {
                return function(e) {
                    t.search_results_mouseover(e)
                }
            }(this)), this.search_results.on("mouseout.chosen", function(t) {
                return function(e) {
                    t.search_results_mouseout(e)
                }
            }(this)), this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                return function(e) {
                    t.search_results_mousewheel(e)
                }
            }(this)), this.search_results.on("touchstart.chosen", function(t) {
                return function(e) {
                    t.search_results_touchstart(e)
                }
            }(this)), this.search_results.on("touchmove.chosen", function(t) {
                return function(e) {
                    t.search_results_touchmove(e)
                }
            }(this)), this.search_results.on("touchend.chosen", function(t) {
                return function(e) {
                    t.search_results_touchend(e)
                }
            }(this)), this.form_field_jq.on("chosen:updated.chosen", function(t) {
                return function(e) {
                    t.results_update_field(e)
                }
            }(this)), this.form_field_jq.on("chosen:activate.chosen", function(t) {
                return function(e) {
                    t.activate_field(e)
                }
            }(this)), this.form_field_jq.on("chosen:open.chosen", function(t) {
                return function(e) {
                    t.container_mousedown(e)
                }
            }(this)), this.form_field_jq.on("chosen:close.chosen", function(t) {
                return function(e) {
                    t.close_field(e)
                }
            }(this)), this.search_field.on("blur.chosen", function(t) {
                return function(e) {
                    t.input_blur(e)
                }
            }(this)), this.search_field.on("keyup.chosen", function(t) {
                return function(e) {
                    t.keyup_checker(e)
                }
            }(this)), this.search_field.on("keydown.chosen", function(t) {
                return function(e) {
                    t.keydown_checker(e)
                }
            }(this)), this.search_field.on("focus.chosen", function(t) {
                return function(e) {
                    t.input_focus(e)
                }
            }(this)), this.search_field.on("cut.chosen", function(t) {
                return function(e) {
                    t.clipboard_event_checker(e)
                }
            }(this)), this.search_field.on("paste.chosen", function(t) {
                return function(e) {
                    t.clipboard_event_checker(e)
                }
            }(this)), this.is_multiple ? this.search_choices.on("click.chosen", function(t) {
                return function(e) {
                    t.choices_click(e)
                }
            }(this)) : this.container.on("click.chosen", function(t) {
                t.preventDefault()
            })
        }, n.prototype.destroy = function() {
            return t(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.form_field_label.length > 0 && this.form_field_label.off("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, n.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.on("focus.chosen", this.activate_field)
        }, n.prototype.container_mousedown = function(e) {
            var s;
            if (!this.is_disabled) return !e || "mousedown" !== (s = e.type) && "touchstart" !== s || this.results_showing || e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).on("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, n.prototype.container_mouseup = function(t) {
            if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
        }, n.prototype.search_results_mousewheel = function(t) {
            var e;
            if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
        }, n.prototype.blur_test = function(t) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
        }, n.prototype.close_field = function() {
            return t(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
        }, n.prototype.activate_field = function() {
            if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, n.prototype.test_active_click = function(e) {
            var s;
            return (s = t(e.target).closest(".chosen-container")).length && this.container[0] === s[0] ? this.active_field = !0 : this.close_field()
        }, n.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, n.prototype.result_do_highlight = function(t) {
            var e, s, i, n, r;
            if (t.length) {
                if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), r = this.search_results.scrollTop(), n = i + r, s = this.result_highlight.position().top + this.search_results.scrollTop(), (e = s + this.result_highlight.outerHeight()) >= n) return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
                if (s < r) return this.search_results.scrollTop(s)
            }
        }, n.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, n.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, n.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }, n.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, n.prototype.set_tab_index = function(t) {
            var e;
            if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
        }, n.prototype.set_label_behavior = function() {
            if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.on("click.chosen", this.label_click_handler)
        }, n.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, n.prototype.search_results_mouseup = function(e) {
            var s;
            if ((s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length) return this.result_highlight = s, this.result_select(e), this.search_field.focus()
        }, n.prototype.search_results_mouseover = function(e) {
            var s;
            if (s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(s)
        }, n.prototype.search_results_mouseout = function(e) {
            if (t(e.target).hasClass("active-result") || t(e.target).parents(".active-result").first()) return this.result_clear_highlight()
        }, n.prototype.choice_build = function(e) {
            var s, i;
            return s = t("<li />", {
                "class": "search-choice"
            }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? s.addClass("search-choice-disabled") : ((i = t("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": e.array_index
            })).on("click.chosen", function(t) {
                return function(e) {
                    return t.choice_destroy_link_click(e)
                }
            }(this)), s.append(i)), this.search_container.before(s)
        }, n.prototype.choice_destroy_link_click = function(e) {
            if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target))
        }, n.prototype.choice_destroy = function(t) {
            if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
        }, n.prototype.results_reset = function() {
            if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
        }, n.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, n.prototype.result_select = function(t) {
            var e, s;
            if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), s = this.results_data[e[0].getAttribute("data-option-array-index")], s.selected = !0, this.form_field.options[s.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(s) : this.single_set_selected_text(this.choice_label(s)), this.is_multiple && (!this.hide_results_on_select || t.metaKey || t.ctrlKey) ? t.metaKey || t.ctrlKey ? this.winnow_results({
                skip_highlight: !0
            }) : (this.search_field.val(""), this.winnow_results()) : (this.results_hide(), this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                selected: this.form_field.options[s.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())
        }, n.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
        }, n.prototype.result_deselect = function(t) {
            var e;
            return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
                deselected: this.form_field.options[e.options_index].value
            }), this.search_field_scale(), !0)
        }, n.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
        }, n.prototype.get_search_field_value = function() {
            return this.search_field.val()
        }, n.prototype.get_search_text = function() {
            return t.trim(this.get_search_field_value())
        }, n.prototype.escape_html = function(e) {
            return t("<div/>").text(e).html()
        }, n.prototype.winnow_results_set_highlight = function() {
            var t, e;
            if (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (t = e.length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t)
        }, n.prototype.no_results = function(t) {
            var e;
            return e = this.get_no_results_html(t), this.search_results.append(e), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, n.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, n.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, n.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
        }, n.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
        }, n.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, n.prototype.search_field_scale = function() {
            var e, s, i, n, r, o, h;
            if (this.is_multiple) {
                for (r = {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px",
                        display: "none",
                        whiteSpace: "pre"
                    }, s = 0, i = (o = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"]).length; s < i; s++) r[n = o[s]] = this.search_field.css(n);
                return (e = t("<div />").css(r)).text(this.get_search_field_value()), t("body").append(e), h = e.width() + 25, e.remove(), this.container.is(":visible") && (h = Math.min(this.container.outerWidth() - 10, h)), this.search_field.width(h)
            }
        }, n.prototype.trigger_form_field_change = function(t) {
            return this.form_field_jq.trigger("input", t), this.form_field_jq.trigger("change", t)
        }, n
    }()
}).call(this);
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                if (options && options.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var validator = $.data(this[0], "validator");
            if (validator) {
                return validator;
            }
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options, this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                this.on("click.validate", ":submit", function(event) {
                    if (validator.settings.submitHandler) {
                        validator.submitButton = event.target;
                    }
                    if ($(this).hasClass("cancel")) {
                        validator.cancelSubmit = true;
                    }
                    if ($(this).attr("formnovalidate") !== undefined) {
                        validator.cancelSubmit = true;
                    }
                });
                this.on("submit.validate", function(event) {
                    if (validator.settings.debug) {
                        event.preventDefault();
                    }

                    function handle() {
                        var hidden, result;
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) {
                                hidden = $("<input type='hidden'/>")
                                    .attr("name", validator.submitButton.name)
                                    .val($(validator.submitButton).val())
                                    .appendTo(validator.currentForm);
                            }
                            result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                            if (validator.submitButton) {
                                hidden.remove();
                            }
                            if (result !== undefined) {
                                return result;
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            var valid, validator, errorList;
            if ($(this[0]).is("form")) {
                valid = this.validate().form();
            } else {
                errorList = [];
                valid = true;
                validator = $(this[0].form).validate();
                this.each(function() {
                    valid = validator.element(this) && valid;
                    if (!valid) {
                        errorList = errorList.concat(validator.errorList);
                    }
                });
                validator.errorList = errorList;
            }
            return valid;
        },
        rules: function(command, argument) {
            var element = this[0],
                settings, staticRules, existingRules, data, param, filtered;
            if (element == null || element.form == null) {
                return;
            }
            if (command) {
                settings = $.data(element.form, "validator").settings;
                staticRules = settings.rules;
                existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        delete existingRules.messages;
                        staticRules[element.name] = existingRules;
                        if (argument.messages) {
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        }
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules;
                        }
                        filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                            if (method === "required") {
                                $(element).removeAttr("aria-required");
                            }
                        });
                        return filtered;
                }
            }
            data = $.validator.normalizeRules($.extend({},
                $.validator.classRules(element),
                $.validator.attributeRules(element),
                $.validator.dataRules(element),
                $.validator.staticRules(element)
            ), element);
            if (data.required) {
                param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
                $(element).attr("aria-required", "true");
            }
            if (data.remote) {
                param = data.remote;
                delete data.remote;
                data = $.extend(data, {
                    remote: param
                });
            }
            return data;
        }
    });
    $.extend($.expr.pseudos || $.expr[":"], { // '||$.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
        blank: function(a) {
            return !$.trim("" + $(a).val());
        },
        filled: function(a) {
            var val = $(a).val();
            return val !== null && !!$.trim("" + val);
        },
        unchecked: function(a) {
            return !$(a).prop("checked");
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        }
        if (params === undefined) {
            return source;
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return n;
            });
        });
        return source;
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(element));
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element, event) {
                var excludedKeys = [
                    16, 17, 18, 20, 35, 36, 37,
                    38, 39, 40, 45, 144, 225
                ];
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else if (element.name in this.submitted || element.name in this.invalid) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted) {
                    this.element(element);
                } else if (element.parentNode.name in this.submitted) {
                    this.element(element.parentNode);
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}."),
            step: $.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {}),
                    rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/);
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key;
                    });
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                    }
                    var validator = $.data(this.form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, ""),
                        settings = validator.settings;
                    if (settings[eventType] && !$(this).is(settings.ignore)) {
                        settings[eventType].call(validator, this, event);
                    }
                }
                $(this.currentForm)
                    .on("focusin.validate focusout.validate keyup.validate",
                        ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
                        "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
                        "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
                        "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate)
                    .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
                if (this.settings.invalidHandler) {
                    $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
                $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    v = this,
                    result = true,
                    rs, group;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name];
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);
                    group = this.groups[checkElement.name];
                    if (group) {
                        $.each(this.groups, function(name, testgroup) {
                            if (testgroup === group && name !== checkElement.name) {
                                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                                if (cleanElement && cleanElement.name in v.invalid) {
                                    v.currentElements.push(cleanElement);
                                    result = v.check(cleanElement) && result;
                                }
                            }
                        });
                    }
                    rs = this.check(checkElement) !== false;
                    result = result && rs;
                    if (rs) {
                        this.invalid[checkElement.name] = false;
                    } else {
                        this.invalid[checkElement.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    $(element).attr("aria-invalid", !rs);
                }
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    var validator = this;
                    $.extend(this.errorMap, errors);
                    this.errorList = $.map(this.errorMap, function(message, name) {
                        return {
                            message: message,
                            element: validator.findByName(name)[0]
                        };
                    });
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm();
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var elements = this.elements()
                    .removeData("previousValue")
                    .removeAttr("aria-invalid");
                this.resetElements(elements);
            },
            resetElements: function(elements) {
                var i;
                if (this.settings.unhighlight) {
                    for (i = 0; elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i],
                            this.settings.errorClass, "");
                        this.findByName(elements[i].name).removeClass(this.settings.validClass);
                    }
                } else {
                    elements
                        .removeClass(this.settings.errorClass)
                        .removeClass(this.settings.validClass);
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0,
                    i;
                for (i in obj) {
                    if (obj[i]) {
                        count++;
                    }
                }
                return count;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide();
            },
            valid: function() {
                return this.size() === 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
                            .filter(":visible")
                            .focus()
                            .trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm)
                    .find("input, select, textarea, [contenteditable]")
                    .not(":submit, :reset, :image, :disabled")
                    .not(this.settings.ignore)
                    .filter(function() {
                        var name = this.name || $(this).attr("name");
                        if (!name && validator.settings.debug && window.console) {
                            console.error("%o has no name assigned", this);
                        }
                        if (this.hasAttribute("contenteditable")) {
                            this.form = $(this).closest("form")[0];
                        }
                        if (name in rulesCache || !validator.objectLength($(this).rules())) {
                            return false;
                        }
                        rulesCache[name] = true;
                        return true;
                    });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            elementValue: function(element) {
                var $element = $(element),
                    type = element.type,
                    val, idx;
                if (type === "radio" || type === "checkbox") {
                    return this.findByName(element.name).filter(":checked").val();
                } else if (type === "number" && typeof element.validity !== "undefined") {
                    return element.validity.badInput ? "NaN" : $element.val();
                }
                if (element.hasAttribute("contenteditable")) {
                    val = $element.text();
                } else {
                    val = $element.val();
                }
                if (type === "file") {
                    if (val.substr(0, 12) === "C:\\fakepath\\") {
                        return val.substr(12);
                    }
                    idx = val.lastIndexOf("/");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    idx = val.lastIndexOf("\\");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    return val;
                }
                if (typeof val === "string") {
                    return val.replace(/\r/g, "");
                }
                return val;
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules(),
                    rulesCount = $.map(rules, function(n, i) {
                        return i;
                    }).length,
                    dependencyMismatch = false,
                    val = this.elementValue(element),
                    result, method, rule;
                if (typeof rules.normalizer === "function") {
                    val = rules.normalizer.call(element, val);
                    if (typeof val !== "string") {
                        throw new TypeError("The normalizer should return a string value.");
                    }
                    delete rules.normalizer;
                }
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        result = $.validator.methods[method].call(this, val, element, rule.parameters);
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                        }
                        if (e instanceof TypeError) {
                            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                        }
                        throw e;
                    }
                }
                if (dependencyMismatch) {
                    return;
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element);
                }
                return true;
            },
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() +
                    method.substring(1).toLowerCase()) || $(element).data("msg");
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i];
                    }
                }
                return undefined;
            },
            defaultMessage: function(element, rule) {
                if (typeof rule === "string") {
                    rule = {
                        method: rule
                    };
                }
                var message = this.findDefined(this.customMessage(element.name, rule.method),
                        this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || undefined,
                        $.validator.messages[rule.method],
                        "<strong>Warning: No message defined for " + element.name + "</strong>"
                    ),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                }
                return message;
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule);
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                }
                return toToggle;
            },
            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var place, group, errorID, v,
                    error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    error.html(message);
                } else {
                    error = $("<" + this.settings.errorElement + ">")
                        .attr("id", elementID + "-error")
                        .addClass(this.settings.errorClass)
                        .html(message || "");
                    place = error;
                    if (this.settings.wrapper) {
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, place, $(element));
                    } else {
                        place.insertAfter(element);
                    }
                    if (error.is("label")) {
                        error.attr("for", elementID);
                    } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                        errorID = error.attr("id");
                        if (!describedBy) {
                            describedBy = errorID;
                        } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                            describedBy += " " + errorID;
                        }
                        $(element).attr("aria-describedby", describedBy);
                        group = this.groups[element.name];
                        if (group) {
                            v = this;
                            $.each(v.groups, function(name, testgroup) {
                                if (testgroup === group) {
                                    $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm)
                                        .attr("aria-describedby", error.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success);
                    } else {
                        this.settings.success(error, element);
                    }
                }
                this.toShow = this.toShow.add(error);
            },
            errorsFor: function(element) {
                var name = this.escapeCssMeta(this.idOrName(element)),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                if (describer) {
                    selector = selector + ", #" + this.escapeCssMeta(describer)
                        .replace(/\s+/g, ", #");
                }
                return this
                    .errors()
                    .filter(selector);
            },
            escapeCssMeta: function(string) {
                return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) {
                    element = this.findByName(element.name);
                }
                return $(element).not(this.settings.ignore)[0];
            },
            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type);
            },
            findByName: function(name) {
                return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", element).length;
                    case "input":
                        if (this.checkable(element)) {
                            return this.findByName(element.name).filter(":checked").length;
                        }
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    $(element).addClass(this.settings.pendingClass);
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                $(element).removeClass(this.settings.pendingClass);
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element, method) {
                method = typeof method === "string" && method || "remote";
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, {
                        method: method
                    })
                });
            },
            destroy: function() {
                this.resetForm();
                $(this.currentForm)
                    .off(".validate")
                    .removeData("validator")
                    .find(".validate-equalTo-blur")
                    .off(".validate-equalTo")
                    .removeClass("validate-equalTo-blur");
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules;
            } else {
                $.extend(this.classRuleSettings, className);
            }
        },
        classRules: function(element) {
            var rules = {},
                classes = $(element).attr("class");
            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this]);
                    }
                });
            }
            return rules;
        },
        normalizeAttributeRule: function(rules, type, method, value) {
            if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
                value = Number(value);
                if (isNaN(value)) {
                    value = undefined;
                }
            }
            if (value || value === 0) {
                rules[method] = value;
            } else if (type === method && type !== "range") {
                rules[method] = true;
            }
        },
        attributeRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                if (method === "required") {
                    value = element.getAttribute(method);
                    if (value === "") {
                        value = true;
                    }
                    value = !!value;
                } else {
                    value = $element.attr(method);
                }
                this.normalizeAttributeRule(rules, type, method, value);
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        dataRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                this.normalizeAttributeRule(rules, type, method, value);
            }
            return rules;
        },
        staticRules: function(element) {
            var rules = {},
                validator = $.data(element.form, "validator");
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        $.data(element.form, "validator").resetElements($(element));
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
            });
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                    } else if (typeof rules[this] === "string") {
                        parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        rules[this] = [Number(parts[0]), Number(parts[1])];
                    }
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min != null && rules.max != null) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength != null && rules.maxlength != null) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return value.length > 0;
            },
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param;
            },
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param;
            },
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            step: function(value, element, param) {
                var type = $(element).attr("type"),
                    errorMessage = "Step attribute on input type " + type + " is not supported.",
                    supportedTypes = ["text", "number", "range"],
                    re = new RegExp("\\b" + type + "\\b"),
                    notSupported = type && !re.test(supportedTypes.join()),
                    decimalPlaces = function(num) {
                        var match = ("" + num).match(/(?:\.(\d+))?$/);
                        if (!match) {
                            return 0;
                        }
                        return match[1] ? match[1].length : 0;
                    },
                    toInt = function(num) {
                        return Math.round(num * Math.pow(10, decimals));
                    },
                    valid = true,
                    decimals;
                if (notSupported) {
                    throw new Error(errorMessage);
                }
                decimals = decimalPlaces(param);
                if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                    valid = false;
                }
                return this.optional(element) || valid;
            },
            equalTo: function(value, element, param) {
                var target = $(param);
                if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                    target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        $(element).valid();
                    });
                }
                return value === target.val();
            },
            remote: function(value, element, param, method) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                method = typeof method === "string" && method || "remote";
                var previous = this.previousValue(element, method),
                    validator, data, optionDataString;
                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {};
                }
                previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
                this.settings.messages[element.name][method] = previous.message;
                param = typeof param === "string" && {
                    url: param
                } || param;
                optionDataString = $.param($.extend({
                    data: value
                }, param.data));
                if (previous.old === optionDataString) {
                    return previous.valid;
                }
                previous.old = optionDataString;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true",
                            errors, message, submitted;
                        validator.settings.messages[element.name][method] = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.resetInternals();
                            validator.toHide = validator.errorsFor(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.invalid[element.name] = false;
                            validator.showErrors();
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, {
                                method: method,
                                parameters: value
                            });
                            errors[element.name] = previous.message = message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            }
        }
    });
    var pendingRequests = {},
        ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        };
    }
    return $;
}));
$ = jQuery;
jQuery(function() {
    $("#applyform").validate({
        rules: {},
        messages: {},
        submitHandler: function(form) {
            var visit_url = window.location.href;
            var data = jQuery(form).serialize();
            var cb = $('small input[type="checkbox"]');
            if (cb.prop("checked") == false) {
                alert('Please Accept the "Terms & Conditions"');
                return false;
            }
            data = data + '&url=1&visit_url=' + encodeURIComponent(visit_url);
            jQuery.ajax({
                url: "https://www.y-axis.com/lpwebcontact/contact.php",
                type: "POST",
                data: data,
                success: function(response) {
                    if (response == 'User already present with Y AXiS') {
                        var url = "https://www.y-axis.com/thank-you.html";
                    } else if (response == 'Saving error message') {
                        var url = "https://www.y-axis.com/thanks.html";
                    } else {
                        var status_info = jQuery.parseJSON(response);
                        var url = "https://www.y-axis.com/thankyou.html?auth_token=" + status_info.auth_token + "&user_id=" + status_info.user_id;
                    }
                    window.location = url;
                }
            });
        }
    });
    $("#applyform2").validate({
        rules: {},
        messages: {},
        submitHandler: function(form) {
            var visit_url = window.location.href;
            var data = jQuery(form).serialize();
            var cb = $('small input[type="checkbox"]');
            if (cb.prop("checked") == false) {
                alert('Please Accept the "Terms & Conditions"');
                return false;
            }
            data = data + '&url=1&visit_url=' + encodeURIComponent(visit_url);
            jQuery.ajax({
                url: "https://www.y-axis.com/lpwebcontact/contact.php",
                type: "POST",
                data: data,
                success: function(response) {
                    if (response == 'User already present with Y AXiS') {
                        var url = "https://www.y-axis.com/thank-you.html";
                    } else if (response == 'Saving error message') {
                        var url = "https://www.y-axis.com/thanks.html";
                    } else {
                        var status_info = jQuery.parseJSON(response);
                        var url = "https://www.y-axis.com/thankyou.html?auth_token=" + status_info.auth_token + "&user_id=" + status_info.user_id;
                    }
                    window.location = url;
                }
            });
        }
    });
    $("#registernowbtn").validate({
        rules: {},
        messages: {},
        submitHandler: function(form) {
            var visit_url = window.location.href;
            var data = jQuery(form).serialize();
            var cb = $('small input[type="checkbox"]');
            if (cb.prop("checked") == false) {
                alert('Please Accept the "Terms & Conditions"');
                return false;
            }
            data = data + '&url=1&visit_url=' + encodeURIComponent(visit_url);
            jQuery.ajax({
                url: "https://www.y-axis.com/lpwebcontact/contact.php",
                type: "POST",
                data: data,
                success: function(response) {
                    if (response == 'User already present with Y AXiS') {
                        var url = "https://www.y-axis.com/coaching/register-for-free-demo/";
                    } else if (response == 'Saving error message') {
                        var url = "https://www.y-axis.com/coaching/register-for-free-demo/";
                    } else {
                        var status_info = jQuery.parseJSON(response);
                        var url = "https://www.y-axis.com/coaching/register-for-free-demo/";
                    }
                    window.location = url;
                }
            });
        }
    });
    jQuery(".firstname").each(function() {
            jQuery(this).rules("add", {
                required: !0,
                minlength: 1,
                maxlength: 30,
                messages: {
                    required: "",
                    minlength: "Must be at least {0} characters",
                    maxlength: "Must be less than {0} characters"
                }
            })
        }),
        jQuery(".emailid").each(function() {
            jQuery(this).rules("add", {
                required: !0,
                email: !0,
                messages: {
                    required: "",
                    email: "Please enter a valid email"
                }
            })
        });
    jQuery(".phoneno").each(function() {
        jQuery(this).rules("add", {
            required: !0,
            minlength: 8,
            maxlength: 16,
            messages: {
                required: "",
                minlength: "Please enter a valid phone number",
                maxlength: "Please enter a valid phone number"
            }
        })
    });
    jQuery(".require").each(function() {
        jQuery(this).rules("add", {
            required: !0,
            messages: {
                required: ""
            }
        })
    });
    jQuery.validator.addMethod("firstname", function(e, a) {
        return this.optional(a) || /^[A-Za-z ]+$/i.test(e)
    }, "Letters and spaces only");
    jQuery.validator.addMethod("phoneno", function(e, a) {
        return this.optional(a) || /^((?!(0))[0-9]{8,16})$/i.test(e)
    }, "Phone number must not start with 0");
    jQuery.validator.addMethod("email", function(e, a) {
        return this.optional(a) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)
    }, "Invalid Email");
    jQuery.validator.addMethod("phoneno", function(value, element) {
        var phonenoval = value;
        var phonenovallength = phonenoval.length;
        var phonenovalfirst = phonenoval.substring(0, 1);
        if (phonenovallength > 1) {
            for (var i = 1; i < phonenovallength; i++) {
                var phonenovallist = phonenoval.substring(i, i + 1);
                if (phonenovalfirst != phonenovallist) {
                    return this.optional(element) || /^(?!(0))[0-9]+$/i.test(value);
                }
            }
        }
    }, "Invalid Phone number");
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(a) {
            var r;
            return e(this).each(function() {
                var e = new t(this, a);
                r || (r = e)
            }), r
        }
    }
    var a, t = function(e, i) {
        function s(e) {
            return Math.floor(e)
        }

        function n() {
            b.autoplayTimeoutId = setTimeout(function() {
                b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? i.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b))
            }, b.params.autoplay)
        }

        function o(e, t) {
            var r = a(e.target);
            if (!r.is(t))
                if ("string" == typeof t) r = r.parents(t);
                else if (t.nodeType) {
                var i;
                return r.parents().each(function(e, a) {
                    a === t && (i = t)
                }), i ? t : void 0
            }
            if (0 !== r.length) return r[0]
        }

        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                r = new t(function(e) {
                    e.forEach(function(e) {
                        b.onResize(!0), b.emit("onObserverUpdate", b, e)
                    })
                });
            r.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), b.observers.push(r)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === a || !b.isHorizontal() && 40 === a)) return !1;
            if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === a || !b.isHorizontal() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (b.container.parents(".swiper-slide").length > 0 && 0 === b.container.parents(".swiper-slide-active").length) return;
                    var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        i = window.innerWidth,
                        s = window.innerHeight,
                        n = b.container.offset();
                    b.rtl && (n.left = n.left - b.container[0].scrollLeft);
                    for (var o = [
                            [n.left, n.top],
                            [n.left + b.width, n.top],
                            [n.left, n.top + b.height],
                            [n.left + b.width, n.top + b.height]
                        ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= r.left && p[0] <= r.left + i && p[1] >= r.top && p[1] <= r.top + s && (t = !0)
                    }
                    if (!t) return
                }
                b.isHorizontal() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !b.rtl || 37 === a && b.rtl) && b.slideNext(), (37 === a && !b.rtl || 39 === a && b.rtl) && b.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && b.slideNext(), 38 === a && b.slidePrev())
            }
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = b.mousewheel.event,
                t = 0,
                r = b.rtl ? -1 : 1;
            if ("mousewheel" === a)
                if (b.params.mousewheelForceToAxis)
                    if (b.isHorizontal()) {
                        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                        t = e.wheelDeltaX * r
                    } else {
                        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                        t = e.wheelDeltaY
                    }
            else t = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * r : -e.wheelDeltaY;
            else if ("DOMMouseScroll" === a) t = -e.detail;
            else if ("wheel" === a)
                if (b.params.mousewheelForceToAxis)
                    if (b.isHorizontal()) {
                        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                        t = -e.deltaX * r
                    } else {
                        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                        t = -e.deltaY
                    }
            else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * r : -e.deltaY;
            if (0 !== t) {
                if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
                    var i = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
                        s = b.isBeginning,
                        n = b.isEnd;
                    if (i >= b.minTranslate() && (i = b.minTranslate()), i <= b.maxTranslate() && (i = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(i), b.updateProgress(), b.updateActiveIndex(), (!s && b.isBeginning || !n && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function() {
                            b.slideReset()
                        }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), 0 === i || i === b.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - b.mousewheel.lastScrollTime > 60)
                        if (0 > t)
                            if (b.isEnd && !b.params.loop || b.animating) {
                                if (b.params.mousewheelReleaseOnEdges) return !0
                            } else b.slideNext();
                    else if (b.isBeginning && !b.params.loop || b.animating) {
                        if (b.params.mousewheelReleaseOnEdges) return !0
                    } else b.slidePrev();
                    b.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return b.params.autoplay && b.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function u(e, t) {
            e = a(e);
            var r, i, s, n = b.rtl ? -1 : 1;
            r = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), s = e.attr("data-swiper-parallax-y"), i || s ? (i = i || "0", s = s || "0") : b.isHorizontal() ? (i = r, s = "0") : (s = r, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px", e.transform("translate3d(" + i + ", " + s + ",0px)")
        }

        function c(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof t)) return new t(e, i);
        var m = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            h = i && i.virtualTranslate;
        i = i || {};
        var f = {};
        for (var g in i)
            if ("object" != typeof i[g] || null === i[g] || (i[g].nodeType || i[g] === window || i[g] === document || "undefined" != typeof r && i[g] instanceof r || "undefined" != typeof jQuery && i[g] instanceof jQuery)) f[g] = i[g];
            else {
                f[g] = {};
                for (var v in i[g]) f[g][v] = i[g][v]
            }
        for (var w in m)
            if ("undefined" == typeof i[w]) i[w] = m[w];
            else if ("object" == typeof i[w])
            for (var y in m[w]) "undefined" == typeof i[w][y] && (i[w][y] = m[w][y]);
        var b = this;
        if (b.params = i, b.originalParams = f, b.classNames = [], "undefined" != typeof a && "undefined" != typeof r && (a = r), ("undefined" != typeof a || (a = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (b.$ = a, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
                if (!b.params.breakpoints) return !1;
                var e, a = !1,
                    t = [];
                for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && t.push(e);
                t.sort(function(e, a) {
                    return parseInt(e, 10) > parseInt(a, 10)
                });
                for (var r = 0; r < t.length; r++) e = t[r], e >= window.innerWidth && !a && (a = e);
                return a || "max"
            }, b.setBreakpoint = function() {
                var e = b.getActiveBreakpoint();
                if (e && b.currentBreakpoint !== e) {
                    var a = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                        t = b.params.loop && a.slidesPerView !== b.params.slidesPerView;
                    for (var r in a) b.params[r] = a[r];
                    b.currentBreakpoint = e, t && b.destroyLoop && b.reLoop(!0)
                }
            }, b.params.breakpoints && b.setBreakpoint(), b.container = a(e), 0 !== b.container.length)) {
            if (b.container.length > 1) {
                var x = [];
                return b.container.each(function() {
                    x.push(new t(this, i))
                }), x
            }
            b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push("swiper-container-" + b.params.direction), b.params.freeMode && b.classNames.push("swiper-container-free-mode"), b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push("swiper-container-autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push("swiper-container-3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1), ("fade" === b.params.effect || "flip" === b.params.effect) && (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, b.params.setWrapperSize = !1, "undefined" == typeof h && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = a(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass("swiper-pagination-clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass("swiper-pagination-" + b.params.paginationType)), (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = a(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = a(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), b.isHorizontal = function() {
                return "horizontal" === b.params.direction
            }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push("swiper-container-rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"), b.device.android && b.classNames.push("swiper-container-android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function() {
                b.params.allowSwipeToNext = !1
            }, b.lockSwipeToPrev = function() {
                b.params.allowSwipeToPrev = !1
            }, b.lockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1
            }, b.unlockSwipeToNext = function() {
                b.params.allowSwipeToNext = !0
            }, b.unlockSwipeToPrev = function() {
                b.params.allowSwipeToPrev = !0
            }, b.unlockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0
            }, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab"), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function(e, a, t, r, i) {
                function s() {
                    i && i()
                }
                var n;
                e.complete && r ? s() : a ? (n = new window.Image, n.onload = s, n.onerror = s, t && (n.srcset = t), a && (n.src = a)) : s()
            }, b.preloadImages = function() {
                function e() {
                    "undefined" != typeof b && null !== b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
                }
                b.imagesToLoad = b.container.find("img");
                for (var a = 0; a < b.imagesToLoad.length; a++) b.loadImage(b.imagesToLoad[a], b.imagesToLoad[a].currentSrc || b.imagesToLoad[a].getAttribute("src"), b.imagesToLoad[a].srcset || b.imagesToLoad[a].getAttribute("srcset"), !0, e)
            }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                return "undefined" != typeof b.autoplayTimeoutId ? !1 : b.params.autoplay ? b.autoplaying ? !1 : (b.autoplaying = !0, b.emit("onAutoplayStart", b), void n()) : !1
            }, b.stopAutoplay = function(e) {
                b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
            }, b.pauseAutoplay = function(e) {
                b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, n()) : b.wrapper.transitionEnd(function() {
                    b && (b.autoplayPaused = !1, b.autoplaying ? n() : b.stopAutoplay())
                }))
            }, b.minTranslate = function() {
                return -b.snapGrid[0]
            }, b.maxTranslate = function() {
                return -b.snapGrid[b.snapGrid.length - 1]
            }, b.updateAutoHeight = function() {
                var e = b.slides.eq(b.activeIndex)[0];
                if ("undefined" != typeof e) {
                    var a = e.offsetHeight;
                    a && b.wrapper.css("height", a + "px")
                }
            }, b.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof b.params.width ? b.params.width : b.container[0].clientWidth, a = "undefined" != typeof b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === a && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), a = a - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = a, b.size = b.isHorizontal() ? b.width : b.height)
            }, b.updateSlidesSize = function() {
                b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
                var e, a = b.params.spaceBetween,
                    t = -b.params.slidesOffsetBefore,
                    r = 0,
                    i = 0;
                if ("undefined" != typeof b.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * b.size), b.virtualSize = -a, b.rtl ? b.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : b.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    b.params.slidesPerColumn > 1 && (n = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (n = Math.max(n, b.params.slidesPerView * b.params.slidesPerColumn)));
                    var o, l = b.params.slidesPerColumn,
                        p = n / l,
                        d = p - (b.params.slidesPerColumn * p - b.slides.length);
                    for (e = 0; e < b.slides.length; e++) {
                        o = 0;
                        var u = b.slides.eq(e);
                        if (b.params.slidesPerColumn > 1) {
                            var c, m, h;
                            "column" === b.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * n / l, u.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (h = Math.floor(e / p), m = e - h * p), u.css({
                                "margin-top": 0 !== h && b.params.spaceBetween && b.params.spaceBetween + "px"
                            }).attr("data-swiper-column", m).attr("data-swiper-row", h)
                        }
                        "none" !== u.css("display") && ("auto" === b.params.slidesPerView ? (o = b.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), b.params.roundLengths && (o = s(o))) : (o = (b.size - (b.params.slidesPerView - 1) * a) / b.params.slidesPerView, b.params.roundLengths && (o = s(o)), b.isHorizontal() ? b.slides[e].style.width = o + "px" : b.slides[e].style.height = o + "px"), b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides ? (t = t + o / 2 + r / 2 + a, 0 === e && (t = t - b.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t)) : (i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t), t = t + o + a), b.virtualSize += o + a, r = o, i++)
                    }
                    b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
                    var f;
                    if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px"
                        }), (!b.support.flexbox || b.params.setWrapperSize) && (b.isHorizontal() ? b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px"
                        }) : b.wrapper.css({
                            height: b.virtualSize + b.params.spaceBetween + "px"
                        })), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * n, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px"
                        }), b.params.centeredSlides)) {
                        for (f = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && f.push(b.snapGrid[e]);
                        b.snapGrid = f
                    }
                    if (!b.params.centeredSlides) {
                        for (f = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && f.push(b.snapGrid[e]);
                        b.snapGrid = f, Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size)
                    }
                    0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                        marginLeft: a + "px"
                    }) : b.slides.css({
                        marginRight: a + "px"
                    }) : b.slides.css({
                        marginBottom: a + "px"
                    })), b.params.watchSlidesProgress && b.updateSlidesOffset()
                }
            }, b.updateSlidesOffset = function() {
                for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop
            }, b.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = b.translate || 0), 0 !== b.slides.length) {
                    "undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                    var a = -e;
                    b.rtl && (a = e), b.slides.removeClass(b.params.slideVisibleClass);
                    for (var t = 0; t < b.slides.length; t++) {
                        var r = b.slides[t],
                            i = (a - r.swiperSlideOffset) / (r.swiperSlideSize + b.params.spaceBetween);
                        if (b.params.watchSlidesVisibility) {
                            var s = -(a - r.swiperSlideOffset),
                                n = s + b.slidesSizesGrid[t],
                                o = s >= 0 && s < b.size || n > 0 && n <= b.size || 0 >= s && n >= b.size;
                            o && b.slides.eq(t).addClass(b.params.slideVisibleClass)
                        }
                        r.progress = b.rtl ? -i : i
                    }
                }
            }, b.updateProgress = function(e) {
                "undefined" == typeof e && (e = b.translate || 0);
                var a = b.maxTranslate() - b.minTranslate(),
                    t = b.isBeginning,
                    r = b.isEnd;
                0 === a ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / a, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !t && b.emit("onReachBeginning", b), b.isEnd && !r && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress)
            }, b.updateActiveIndex = function() {
                var e, a, t, r = b.rtl ? b.translate : -b.translate;
                for (a = 0; a < b.slidesGrid.length; a++) "undefined" != typeof b.slidesGrid[a + 1] ? r >= b.slidesGrid[a] && r < b.slidesGrid[a + 1] - (b.slidesGrid[a + 1] - b.slidesGrid[a]) / 2 ? e = a : r >= b.slidesGrid[a] && r < b.slidesGrid[a + 1] && (e = a + 1) : r >= b.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / b.params.slidesPerGroup), t >= b.snapGrid.length && (t = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = t, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses())
            }, b.updateClasses = function() {
                b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass);
                var e = b.slides.eq(b.activeIndex);
                e.addClass(b.params.slideActiveClass);
                var t = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                b.params.loop && 0 === t.length && b.slides.eq(0).addClass(b.params.slideNextClass);
                var r = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                if (b.params.loop && 0 === r.length && b.slides.eq(-1).addClass(b.params.slidePrevClass), b.paginationContainer && b.paginationContainer.length > 0) {
                    var i, s = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                    if (b.params.loop ? (i = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup), i > b.slides.length - 1 - 2 * b.loopedSlides && (i -= b.slides.length - 2 * b.loopedSlides), i > s - 1 && (i -= s), 0 > i && "bullets" !== b.params.paginationType && (i = s + i)) : i = "undefined" != typeof b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), b.paginationContainer.length > 1 ? b.bullets.each(function() {
                            a(this).index() === i && a(this).addClass(b.params.bulletActiveClass)
                        }) : b.bullets.eq(i).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(i + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(s)), "progress" === b.params.paginationType) {
                        var n = (i + 1) / s,
                            o = n,
                            l = 1;
                        b.isHorizontal() || (l = n, o = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(b.params.speed)
                    }
                    "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, i + 1, s)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
                }
                b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
            }, b.updatePagination = function() {
                if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === b.params.paginationType) {
                        for (var a = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, t = 0; a > t; t++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(t, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                        b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
                    }
                    "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
                }
            }, b.update = function(e) {
                function a() {
                    r = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(r), b.updateActiveIndex(), b.updateClasses()
                }
                if (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e) {
                    var t, r;
                    b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (a(), b.params.autoHeight && b.updateAutoHeight()) : (t = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0), t || a())
                } else b.params.autoHeight && b.updateAutoHeight()
            }, b.onResize = function(e) {
                b.params.breakpoints && b.setBreakpoint();
                var a = b.params.allowSwipeToPrev,
                    t = b.params.allowSwipeToNext;
                b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                var r = !1;
                if (b.params.freeMode) {
                    var i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                    b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
                } else b.updateClasses(), r = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                b.params.lazyLoading && !r && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = a, b.params.allowSwipeToNext = t
            };
            var T = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? T = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), b.touchEvents = {
                start: b.support.touch || !b.params.simulateTouch ? "touchstart" : T[0],
                move: b.support.touch || !b.params.simulateTouch ? "touchmove" : T[1],
                end: b.support.touch || !b.params.simulateTouch ? "touchend" : T[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function(e) {
                var a = e ? "off" : "on",
                    t = e ? "removeEventListener" : "addEventListener",
                    r = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                    s = b.support.touch ? r : document,
                    n = b.params.nested ? !0 : !1;
                b.browser.ie ? (r[t](b.touchEvents.start, b.onTouchStart, !1), s[t](b.touchEvents.move, b.onTouchMove, n), s[t](b.touchEvents.end, b.onTouchEnd, !1)) : (b.support.touch && (r[t](b.touchEvents.start, b.onTouchStart, !1), r[t](b.touchEvents.move, b.onTouchMove, n), r[t](b.touchEvents.end, b.onTouchEnd, !1)), !i.simulateTouch || b.device.ios || b.device.android || (r[t]("mousedown", b.onTouchStart, !1), document[t]("mousemove", b.onTouchMove, n), document[t]("mouseup", b.onTouchEnd, !1))), window[t]("resize", b.onResize), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[a]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[a]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[a]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[a]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[a]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[a]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && r[t]("click", b.preventClicks, !0)
            }, b.attachEvents = function() {
                b.initEvents()
            }, b.detachEvents = function() {
                b.initEvents(!0)
            }, b.allowClick = !0, b.preventClicks = function(e) {
                b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, b.onClickNext = function(e) {
                e.preventDefault(), (!b.isEnd || b.params.loop) && b.slideNext()
            }, b.onClickPrev = function(e) {
                e.preventDefault(), (!b.isBeginning || b.params.loop) && b.slidePrev()
            }, b.onClickIndex = function(e) {
                e.preventDefault();
                var t = a(this).index() * b.params.slidesPerGroup;
                b.params.loop && (t += b.loopedSlides), b.slideTo(t)
            }, b.updateClickedSlide = function(e) {
                var t = o(e, "." + b.params.slideClass),
                    r = !1;
                if (t)
                    for (var i = 0; i < b.slides.length; i++) b.slides[i] === t && (r = !0);
                if (!t || !r) return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
                if (b.clickedSlide = t, b.clickedIndex = a(t).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                    var s, n = b.clickedIndex;
                    if (b.params.loop) {
                        if (b.animating) return;
                        s = a(b.clickedSlide).attr("data-swiper-slide-index"), b.params.centeredSlides ? n < b.loopedSlides - b.params.slidesPerView / 2 || n > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2 ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            b.slideTo(n)
                        }, 0)) : b.slideTo(n) : n > b.slides.length - b.params.slidesPerView ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            b.slideTo(n)
                        }, 0)) : b.slideTo(n)
                    } else b.slideTo(n)
                }
            };
            var S, C, z, M, E, P, k, I, L, B, D = "input, select, textarea, button",
                H = Date.now(),
                A = [];
            b.animating = !1, b.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var G, O;
            if (b.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), G = "touchstart" === e.type, G || !("which" in e) || 3 !== e.which) {
                        if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass)) return void(b.allowClick = !0);
                        if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
                            var t = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                r = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && t <= b.params.iOSEdgeSwipeThreshold)) {
                                if (S = !0, C = !1, z = !0, E = void 0, O = void 0, b.touches.startX = t, b.touches.startY = r, M = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && (I = !1), "touchstart" !== e.type) {
                                    var i = !0;
                                    a(e.target).is(D) && (i = !1), document.activeElement && a(document.activeElement).is(D) && document.activeElement.blur(), i && e.preventDefault()
                                }
                                b.emit("onTouchStart", b, e)
                            }
                        }
                    }
                }, b.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !G || "mousemove" !== e.type) {
                        if (e.preventedByNestedSwiper) return b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                        if (b.params.onlyExternal) return b.allowClick = !1, void(S && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, M = Date.now()));
                        if (G && document.activeElement && e.target === document.activeElement && a(e.target).is(D)) return C = !0, void(b.allowClick = !1);
                        if (z && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof E) {
                                var t = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI;
                                E = b.isHorizontal() ? t > b.params.touchAngle : 90 - t > b.params.touchAngle
                            }
                            if (E && b.emit("onTouchMoveOpposite", b, e), "undefined" == typeof O && b.browser.ieTouch && (b.touches.currentX !== b.touches.startX || b.touches.currentY !== b.touches.startY) && (O = !0), S) {
                                if (E) return void(S = !1);
                                if (O || !b.browser.ieTouch) {
                                    b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), C || (i.loop && b.fixLoop(), k = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), B = !1, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grabbing", b.container[0].style.cursor = "-moz-grabbin", b.container[0].style.cursor = "grabbing")), C = !0;
                                    var r = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                                    r *= b.params.touchRatio, b.rtl && (r = -r), b.swipeDirection = r > 0 ? "prev" : "next", P = r + k;
                                    var s = !0;
                                    if (r > 0 && P > b.minTranslate() ? (s = !1, b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + k + r, b.params.resistanceRatio))) : 0 > r && P < b.maxTranslate() && (s = !1, b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - k - r, b.params.resistanceRatio))),
                                        s && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && k > P && (P = k), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > k && (P = k), b.params.followFinger) {
                                        if (b.params.threshold > 0) {
                                            if (!(Math.abs(r) > b.params.threshold || I)) return void(P = k);
                                            if (!I) return I = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, P = k, void(b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
                                        }(b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === A.length && A.push({
                                            position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                            time: M
                                        }), A.push({
                                            position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), b.updateProgress(P), b.setWrapperTranslate(P)
                                    }
                                }
                            }
                        }
                    }
                }, b.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), z && b.emit("onTouchEnd", b, e), z = !1, S) {
                        b.params.grabCursor && C && S && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab");
                        var t = Date.now(),
                            r = t - M;
                        if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), 300 > r && t - H > 300 && (L && clearTimeout(L), L = setTimeout(function() {
                                b && (b.params.paginationHide && b.paginationContainer.length > 0 && !a(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e))
                            }, 300)), 300 > r && 300 > t - H && (L && clearTimeout(L), b.emit("onDoubleTap", b, e))), H = Date.now(), setTimeout(function() {
                                b && (b.allowClick = !0)
                            }, 0), !S || !C || !b.swipeDirection || 0 === b.touches.diff || P === k) return void(S = C = !1);
                        S = C = !1;
                        var i;
                        if (i = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -P, b.params.freeMode) {
                            if (i < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                            if (i > -b.maxTranslate()) return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                            if (b.params.freeModeMomentum) {
                                if (A.length > 1) {
                                    var s = A.pop(),
                                        n = A.pop(),
                                        o = s.position - n.position,
                                        l = s.time - n.time;
                                    b.velocity = o / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (l > 150 || (new window.Date).getTime() - s.time > 300) && (b.velocity = 0)
                                } else b.velocity = 0;
                                A.length = 0;
                                var p = 1e3 * b.params.freeModeMomentumRatio,
                                    d = b.velocity * p,
                                    u = b.translate + d;
                                b.rtl && (u = -u);
                                var c, m = !1,
                                    h = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                                if (u < b.maxTranslate()) b.params.freeModeMomentumBounce ? (u + b.maxTranslate() < -h && (u = b.maxTranslate() - h), c = b.maxTranslate(), m = !0, B = !0) : u = b.maxTranslate();
                                else if (u > b.minTranslate()) b.params.freeModeMomentumBounce ? (u - b.minTranslate() > h && (u = b.minTranslate() + h), c = b.minTranslate(), m = !0, B = !0) : u = b.minTranslate();
                                else if (b.params.freeModeSticky) {
                                    var f, g = 0;
                                    for (g = 0; g < b.snapGrid.length; g += 1)
                                        if (b.snapGrid[g] > -u) {
                                            f = g;
                                            break
                                        }
                                    u = Math.abs(b.snapGrid[f] - u) < Math.abs(b.snapGrid[f - 1] - u) || "next" === b.swipeDirection ? b.snapGrid[f] : b.snapGrid[f - 1], b.rtl || (u = -u)
                                }
                                if (0 !== b.velocity) p = b.rtl ? Math.abs((-u - b.translate) / b.velocity) : Math.abs((u - b.translate) / b.velocity);
                                else if (b.params.freeModeSticky) return void b.slideReset();
                                b.params.freeModeMomentumBounce && m ? (b.updateProgress(c), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                    b && B && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(c), b.wrapper.transitionEnd(function() {
                                        b && b.onTransitionEnd()
                                    }))
                                })) : b.velocity ? (b.updateProgress(u), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                    b && b.onTransitionEnd()
                                }))) : b.updateProgress(u), b.updateActiveIndex()
                            }
                            return void((!b.params.freeModeMomentum || r >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
                        }
                        var v, w = 0,
                            y = b.slidesSizesGrid[0];
                        for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) "undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup] ? i >= b.slidesGrid[v] && i < b.slidesGrid[v + b.params.slidesPerGroup] && (w = v, y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : i >= b.slidesGrid[v] && (w = v, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                        var x = (i - b.slidesGrid[w]) / y;
                        if (r > b.params.longSwipesMs) {
                            if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                            "next" === b.swipeDirection && (x >= b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w)), "prev" === b.swipeDirection && (x > 1 - b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w))
                        } else {
                            if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                            "next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(w)
                        }
                    }
                }, b._slideTo = function(e, a) {
                    return b.slideTo(e, a, !0, !0)
                }, b.slideTo = function(e, a, t, r) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                    var i = -b.snapGrid[b.snapIndex];
                    b.params.autoplay && b.autoplaying && (r || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(a) : b.stopAutoplay()), b.updateProgress(i);
                    for (var s = 0; s < b.slidesGrid.length; s++) - Math.floor(100 * i) >= Math.floor(100 * b.slidesGrid[s]) && (e = s);
                    return !b.params.allowSwipeToNext && i < b.translate && i < b.minTranslate() ? !1 : !b.params.allowSwipeToPrev && i > b.translate && i > b.maxTranslate() && (b.activeIndex || 0) !== e ? !1 : ("undefined" == typeof a && (a = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.rtl && -i === b.translate || !b.rtl && i === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(i), !1) : (b.updateClasses(), b.onTransitionStart(t), 0 === a ? (b.setWrapperTranslate(i), b.setWrapperTransition(0), b.onTransitionEnd(t)) : (b.setWrapperTranslate(i), b.setWrapperTransition(a), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                        b && b.onTransitionEnd(t)
                    }))), !0))
                }, b.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
                }, b.onTransitionEnd = function(e) {
                    b.animating = !1, b.setWrapperTransition(0), "undefined" == typeof e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.hashnav && b.hashnav && b.hashnav.setHash()
                }, b.slideNext = function(e, a, t) {
                    if (b.params.loop) {
                        if (b.animating) return !1;
                        b.fixLoop();
                        b.container[0].clientLeft;
                        return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t)
                    }
                    return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t)
                }, b._slideNext = function(e) {
                    return b.slideNext(!0, e, !0)
                }, b.slidePrev = function(e, a, t) {
                    if (b.params.loop) {
                        if (b.animating) return !1;
                        b.fixLoop();
                        b.container[0].clientLeft;
                        return b.slideTo(b.activeIndex - 1, a, e, t)
                    }
                    return b.slideTo(b.activeIndex - 1, a, e, t)
                }, b._slidePrev = function(e) {
                    return b.slidePrev(!0, e, !0)
                }, b.slideReset = function(e, a, t) {
                    return b.slideTo(b.activeIndex, a, e)
                }, b.setWrapperTransition = function(e, a) {
                    b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, a), b.emit("onSetTransition", b, e)
                }, b.setWrapperTranslate = function(e, a, t) {
                    var r = 0,
                        i = 0,
                        n = 0;
                    b.isHorizontal() ? r = b.rtl ? -e : e : i = e, b.params.roundLengths && (r = s(r), i = s(i)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + n + "px)") : b.wrapper.transform("translate(" + r + "px, " + i + "px)")), b.translate = b.isHorizontal() ? r : i;
                    var o, l = b.maxTranslate() - b.minTranslate();
                    o = 0 === l ? 0 : (e - b.minTranslate()) / l, o !== b.progress && b.updateProgress(e), a && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, t), b.emit("onSetTranslate", b, b.translate)
                }, b.getTranslate = function(e, a) {
                    var t, r, i, s;
                    return "undefined" == typeof a && (a = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), s = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = s.toString().split(",")), "x" === a && (r = window.WebKitCSSMatrix ? s.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (r = window.WebKitCSSMatrix ? s.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), b.rtl && r && (r = -r), r || 0)
                }, b.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e)
                }, b.observers = [], b.initObservers = function() {
                    if (b.params.observeParents)
                        for (var e = b.container.parents(), a = 0; a < e.length; a++) l(e[a]);
                    l(b.container[0], {
                        childList: !1
                    }), l(b.wrapper[0], {
                        attributes: !1
                    })
                }, b.disconnectObservers = function() {
                    for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                    b.observers = []
                }, b.createLoop = function() {
                    b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                    var e = b.wrapper.children("." + b.params.slideClass);
                    "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > e.length && (b.loopedSlides = e.length);
                    var t, r = [],
                        i = [];
                    for (e.each(function(t, s) {
                            var n = a(this);
                            t < b.loopedSlides && i.push(s), t < e.length && t >= e.length - b.loopedSlides && r.push(s), n.attr("data-swiper-slide-index", t)
                        }), t = 0; t < i.length; t++) b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                    for (t = r.length - 1; t >= 0; t--) b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
                }, b.destroyLoop = function() {
                    b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index")
                }, b.reLoop = function(e) {
                    var a = b.activeIndex - b.loopedSlides;
                    b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(a + b.loopedSlides, 0, !1)
                }, b.fixLoop = function() {
                    var e;
                    b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
                }, b.appendSlide = function(e) {
                    if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
                        for (var a = 0; a < e.length; a++) e[a] && b.wrapper.append(e[a]);
                    else b.wrapper.append(e);
                    b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
                }, b.prependSlide = function(e) {
                    b.params.loop && b.destroyLoop();
                    var a = b.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++) e[t] && b.wrapper.prepend(e[t]);
                        a = b.activeIndex + e.length
                    } else b.wrapper.prepend(e);
                    b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(a, 0, !1)
                }, b.removeSlide = function(e) {
                    b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                    var a, t = b.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var r = 0; r < e.length; r++) a = e[r], b.slides[a] && b.slides.eq(a).remove(), t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e, b.slides[a] && b.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                    b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(t + b.loopedSlides, 0, !1) : b.slideTo(t, 0, !1)
                }, b.removeAllSlides = function() {
                    for (var e = [], a = 0; a < b.slides.length; a++) e.push(a);
                    b.removeSlide(e)
                }, b.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < b.slides.length; e++) {
                                var a = b.slides.eq(e),
                                    t = a[0].swiperSlideOffset,
                                    r = -t;
                                b.params.virtualTranslate || (r -= b.translate);
                                var i = 0;
                                b.isHorizontal() || (i = r, r = 0);
                                var s = b.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: s
                                }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                b.slides.transitionEnd(function() {
                                    if (!a && b) {
                                        a = !0, b.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) b.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var e = 0; e < b.slides.length; e++) {
                                var t = b.slides.eq(e),
                                    r = t[0].progress;
                                b.params.flip.limitRotation && (r = Math.max(Math.min(t[0].progress, 1), -1));
                                var i = t[0].swiperSlideOffset,
                                    s = -180 * r,
                                    n = s,
                                    o = 0,
                                    l = -i,
                                    p = 0;
                                if (b.isHorizontal() ? b.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(r)) + b.slides.length, b.params.flip.slideShadows) {
                                    var d = b.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                        u = b.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                                }
                                t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                            }
                        },
                        setTransition: function(e) {
                            if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                b.slides.eq(b.activeIndex).transitionEnd(function() {
                                    if (!t && b && a(this).hasClass(b.params.slideActiveClass)) {
                                        t = !0, b.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++) b.wrapper.trigger(e[r])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            b.params.cube.shadow && (b.isHorizontal() ? (e = b.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(e)), e.css({
                                height: b.width + "px"
                            })) : (e = b.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.container.append(e))));
                            for (var r = 0; r < b.slides.length; r++) {
                                var i = b.slides.eq(r),
                                    s = 90 * r,
                                    n = Math.floor(s / 360);
                                b.rtl && (s = -s, n = Math.floor(-s / 360));
                                var o = Math.max(Math.min(i[0].progress, 1), -1),
                                    l = 0,
                                    p = 0,
                                    d = 0;
                                r % 4 === 0 ? (l = 4 * -n * b.size, d = 0) : (r - 1) % 4 === 0 ? (l = 0, d = 4 * -n * b.size) : (r - 2) % 4 === 0 ? (l = b.size + 4 * n * b.size, d = b.size) : (r - 3) % 4 === 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * n), b.rtl && (l = -l), b.isHorizontal() || (p = l, l = 0);
                                var u = "rotateX(" + (b.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (b.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                if (1 >= o && o > -1 && (t = 90 * r + 90 * o, b.rtl && (t = 90 * -r - 90 * o)), i.transform(u), b.params.cube.slideShadows) {
                                    var c = b.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                        m = b.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (b.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + b.size / 2 + "px"
                                }), b.params.cube.shadow)
                                if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        f = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        g = b.params.cube.shadowScale,
                                        v = b.params.cube.shadowScale / f,
                                        w = b.params.cube.shadowOffset;
                                    e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                            b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : t) + "deg) rotateY(" + (b.isHorizontal() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = b.translate, t = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, r = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, i = b.params.coverflow.depth, s = 0, n = b.slides.length; n > s; s++) {
                                var o = b.slides.eq(s),
                                    l = b.slidesSizesGrid[s],
                                    p = o[0].swiperSlideOffset,
                                    d = (t - p - l / 2) / l * b.params.coverflow.modifier,
                                    u = b.isHorizontal() ? r * d : 0,
                                    c = b.isHorizontal() ? 0 : r * d,
                                    m = -i * Math.abs(d),
                                    h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
                                    f = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;
                                Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
                                var g = "translate3d(" + f + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                                if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, b.params.coverflow.slideShadows) {
                                    var v = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                        w = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (b.browser.ie) {
                                var y = b.wrapper[0].style;
                                y.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, b.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== b.slides.length)) {
                            var r = b.slides.eq(e),
                                i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (i = i.add(r[0])), 0 !== i.length && i.each(function() {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var i = e.attr("data-background"),
                                    s = e.attr("data-src"),
                                    n = e.attr("data-srcset");
                                b.loadImage(e[0], s || i, n, !1, function() {
                                    if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), s && (e.attr("src", s), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), b.params.loop && t) {
                                        var a = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(b.params.slideDuplicateClass)) {
                                            var o = b.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                            b.lazy.loadImageInSlide(o.index(), !1)
                                        } else {
                                            var l = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            b.lazy.loadImageInSlide(l.index(), !1)
                                        }
                                    }
                                    b.emit("onLazyImageReady", b, r[0], e[0])
                                }), b.emit("onLazyImageLoad", b, r[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e;
                        if (b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                            b.lazy.loadImageInSlide(a(this).index())
                        });
                        else if (b.params.slidesPerView > 1)
                            for (e = b.activeIndex; e < b.activeIndex + b.params.slidesPerView; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                        else b.lazy.loadImageInSlide(b.activeIndex);
                        if (b.params.lazyLoadingInPrevNext)
                            if (b.params.slidesPerView > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
                                var t = b.params.lazyLoadingInPrevNextAmount,
                                    r = b.params.slidesPerView,
                                    i = Math.min(b.activeIndex + r + Math.max(t, r), b.slides.length),
                                    s = Math.max(b.activeIndex - Math.max(r, t), 0);
                                for (e = b.activeIndex + b.params.slidesPerView; i > e; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                                for (e = s; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e)
                            } else {
                                var n = b.wrapper.children("." + b.params.slideNextClass);
                                n.length > 0 && b.lazy.loadImageInSlide(n.index());
                                var o = b.wrapper.children("." + b.params.slidePrevClass);
                                o.length > 0 && b.lazy.loadImageInSlide(o.index())
                            }
                    },
                    onTransitionStart: function() {
                        b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
                    },
                    onTransitionEnd: function() {
                        b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
                    }
                }, b.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var a = b.scrollbar,
                            t = b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            r = t - a.track.offset()[b.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                            i = -b.minTranslate() * a.moveDivider,
                            s = -b.maxTranslate() * a.moveDivider;
                        i > r ? r = i : r > s && (r = s), r = -r / a.moveDivider, b.updateProgress(r), b.setWrapperTranslate(r, !0)
                    },
                    dragStart: function(e) {
                        var a = b.scrollbar;
                        a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), b.params.scrollbarHide && a.track.css("opacity", 1), b.wrapper.transition(100), a.drag.transition(100), b.emit("onScrollbarDragStart", b)
                    },
                    dragMove: function(e) {
                        var a = b.scrollbar;
                        a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), b.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), b.emit("onScrollbarDragMove", b))
                    },
                    dragEnd: function(e) {
                        var a = b.scrollbar;
                        a.isTouched && (a.isTouched = !1, b.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
                            a.track.css("opacity", 0), a.track.transition(400)
                        }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
                    },
                    enableDraggable: function() {
                        var e = b.scrollbar,
                            t = b.support.touch ? e.track : document;
                        a(e.track).on(b.touchEvents.start, e.dragStart), a(t).on(b.touchEvents.move, e.dragMove), a(t).on(b.touchEvents.end, e.dragEnd)
                    },
                    disableDraggable: function() {
                        var e = b.scrollbar,
                            t = b.support.touch ? e.track : document;
                        a(e.track).off(b.touchEvents.start, e.dragStart), a(t).off(b.touchEvents.move, e.dragMove), a(t).off(b.touchEvents.end, e.dragEnd)
                    },
                    set: function() {
                        if (b.params.scrollbar) {
                            var e = b.scrollbar;
                            e.track = a(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && e.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", b.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (b.params.scrollbar) {
                            var e, a = b.scrollbar,
                                t = (b.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * b.progress, b.rtl && b.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (b.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), b.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                                a.track[0].style.opacity = 0, a.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        b.params.scrollbar && b.scrollbar.drag.transition(e)
                    }
                }, b.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e, this.y = a, this.lastIndex = e.length - 1;
                        var t, r;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (r = i(this.x, e), t = r - 1, (e - this.x[t]) * (this.y[r] - this.y[t]) / (this.x[r] - this.x[t]) + this.y[t]) : 0
                        };
                        var i = function() {
                            var e, a, t;
                            return function(r, i) {
                                for (a = -1, e = r.length; e - a > 1;) r[t = e + a >> 1] <= i ? a = t : e = t;
                                return e
                            }
                        }()
                    },
                    getInterpolateFunction: function(e) {
                        b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, a) {
                        function r(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(a), s = -b.controller.spline.interpolate(-e)), s && "container" !== b.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (b.maxTranslate() - b.minTranslate()), s = (e - b.minTranslate()) * i + a.minTranslate()), b.params.controlInverse && (s = a.maxTranslate() - s), a.updateProgress(s), a.setWrapperTranslate(s, !1, b), a.updateActiveIndex()
                        }
                        var i, s, n = b.params.control;
                        if (b.isArray(n))
                            for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && r(n[o]);
                        else n instanceof t && a !== n && r(n)
                    },
                    setTransition: function(e, a) {
                        function r(a) {
                            a.setWrapperTransition(e, b), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                                s && (a.params.loop && "slide" === b.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                            }))
                        }
                        var i, s = b.params.control;
                        if (b.isArray(s))
                            for (i = 0; i < s.length; i++) s[i] !== a && s[i] instanceof t && r(s[i]);
                        else s instanceof t && a !== s && r(s)
                    }
                }, b.hashnav = {
                    init: function() {
                        if (b.params.hashnav) {
                            b.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var a = 0, t = 0, r = b.slides.length; r > t; t++) {
                                    var i = b.slides.eq(t),
                                        s = i.attr("data-hash");
                                    if (s === e && !i.hasClass(b.params.slideDuplicateClass)) {
                                        var n = i.index();
                                        b.slideTo(n, a, b.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() {
                        b.hashnav.initialized && b.params.hashnav && (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "")
                    }
                }, b.disableKeyboardControl = function() {
                    b.params.keyboardControl = !1, a(document).off("keydown", p)
                }, b.enableKeyboardControl = function() {
                    b.params.keyboardControl = !0, a(document).on("keydown", p)
                }, b.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, b.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), b.mousewheel.event = "wheel"
                } catch (N) {
                    (window.WheelEvent || b.container[0] && "wheel" in b.container[0]) && (b.mousewheel.event = "wheel")
                }!b.mousewheel.event && window.WheelEvent, b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"), b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll")
            }
            b.disableMousewheelControl = function() {
                return b.mousewheel.event ? (b.container.off(b.mousewheel.event, d), !0) : !1
            }, b.enableMousewheelControl = function() {
                return b.mousewheel.event ? (b.container.on(b.mousewheel.event, d), !0) : !1
            }, b.parallax = {
                setTranslate: function() {
                    b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        u(this, b.progress)
                    }), b.slides.each(function() {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            u(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = a(this),
                            r = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (r = 0), t.transition(r)
                    })
                }
            }, b._plugins = [];
            for (var R in b.plugins) {
                var W = b.plugins[R](b, b.params[R]);
                W && b._plugins.push(W)
            }
            return b.callPlugins = function(e) {
                for (var a = 0; a < b._plugins.length; a++) e in b._plugins[a] && b._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, b.emitterEventListeners = {}, b.emit = function(e) {
                b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (b.emitterEventListeners[e])
                    for (a = 0; a < b.emitterEventListeners[e].length; a++) b.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, b.on = function(e, a) {
                return e = c(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(a), b
            }, b.off = function(e, a) {
                var t;
                if (e = c(e), "undefined" == typeof a) return b.emitterEventListeners[e] = [], b;
                if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                    for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t] === a && b.emitterEventListeners[e].splice(t, 1);
                    return b
                }
            }, b.once = function(e, a) {
                e = c(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, t)
                };
                return b.on(e, t), b
            }, b.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (a(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : a(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), a(e.target).is("." + b.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = b.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), a(b.container).append(b.a11y.liveRegion)
                },
                initPagination: function() {
                    b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                        var e = a(this);
                        b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove()
                }
            }, b.init = function() {
                b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(),
                    b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
            }, b.cleanupStyles = function() {
                b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && a(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && a(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
            }, b.destroy = function(e, a) {
                b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), a && b.cleanupStyles(), b.disconnectObservers(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.emit("onDestroy"), e !== !1 && (b = null)
            }, b.init(), b
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || i || r,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var r = (function() {
            var e = function(e) {
                    var a = this,
                        t = 0;
                    for (t = 0; t < e.length; t++) a[t] = e[t];
                    return a.length = e.length, this
                },
                a = function(a, t) {
                    var r = [],
                        i = 0;
                    if (a && !t && a instanceof e) return a;
                    if (a)
                        if ("string" == typeof a) {
                            var s, n, o = a.trim();
                            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                var l = "div";
                                for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = a, i = 0; i < n.childNodes.length; i++) r.push(n.childNodes[i])
                            } else
                                for (s = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], i = 0; i < s.length; i++) s[i] && r.push(s[i])
                        } else if (a.nodeType || a === window || a === document) r.push(a);
                    else if (a.length > 0 && a[0].nodeType)
                        for (i = 0; i < a.length; i++) r.push(a[i]);
                    return new e(r)
                };
            return e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e) return this;
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var r = 0; r < this.length; r++) this[r].classList.add(a[t]);
                    return this
                },
                removeClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var r = 0; r < this.length; r++) this[r].classList.remove(a[t]);
                    return this
                },
                hasClass: function(e) {
                    return this[0] ? this[0].classList.contains(e) : !1
                },
                toggleClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var r = 0; r < this.length; r++) this[r].classList.toggle(a[t]);
                    return this
                },
                attr: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t].setAttribute(e, a);
                        else
                            for (var r in e) this[t][r] = e[r], this[t].setAttribute(r, e[r]);
                    return this
                },
                removeAttr: function(e) {
                    for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
                    return this
                },
                data: function(e, a) {
                    if ("undefined" != typeof a) {
                        for (var t = 0; t < this.length; t++) {
                            var r = this[t];
                            r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = a
                        }
                        return this
                    }
                    if (this[0]) {
                        var i = this[0].getAttribute("data-" + e);
                        return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                    }
                },
                transform: function(e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                    }
                    return this
                },
                on: function(e, t, r, i) {
                    function s(e) {
                        var i = e.target;
                        if (a(i).is(t)) r.call(i, e);
                        else
                            for (var s = a(i).parents(), n = 0; n < s.length; n++) a(s[n]).is(t) && r.call(s[n], e)
                    }
                    var n, o, l = e.split(" ");
                    for (n = 0; n < this.length; n++)
                        if ("function" == typeof t || t === !1)
                            for ("function" == typeof t && (r = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], r, i);
                        else
                            for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
                                listener: r,
                                liveListener: s
                            }), this[n].addEventListener(l[o], s, i);
                    return this
                },
                off: function(e, a, t, r) {
                    for (var i = e.split(" "), s = 0; s < i.length; s++)
                        for (var n = 0; n < this.length; n++)
                            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], r = arguments[2] || !1), this[n].removeEventListener(i[s], t, r);
                            else if (this[n].dom7LiveListeners)
                        for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[s], this[n].dom7LiveListeners[o].liveListener, r);
                    return this
                },
                once: function(e, a, t, r) {
                    function i(n) {
                        t(n), s.off(e, a, i, r)
                    }
                    var s = this;
                    "function" == typeof a && (a = !1, t = arguments[1], r = arguments[2]), s.on(e, a, i, r)
                },
                trigger: function(e, a) {
                    for (var t = 0; t < this.length; t++) {
                        var r;
                        try {
                            r = new window.CustomEvent(e, {
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (i) {
                            r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = a
                        }
                        this[t].dispatchEvent(r)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function a(s) {
                        if (s.target === this)
                            for (e.call(this, s), t = 0; t < r.length; t++) i.off(r[t], a)
                    }
                    var t, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        i = this;
                    if (e)
                        for (t = 0; t < r.length; t++) i.on(r[t], a);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            a = e.getBoundingClientRect(),
                            t = document.body,
                            r = e.clientTop || t.clientTop || 0,
                            i = e.clientLeft || t.clientLeft || 0,
                            s = window.pageYOffset || e.scrollTop,
                            n = window.pageXOffset || e.scrollLeft;
                        return {
                            top: a.top + s - r,
                            left: a.left + n - i
                        }
                    }
                    return null
                },
                css: function(e, a) {
                    var t;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (t = 0; t < this.length; t++)
                                for (var r in e) this[t].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (t = 0; t < this.length; t++) this[t].style[e] = a;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
                    return this
                },
                html: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                    for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (var a = 0; a < this.length; a++) this[a].textContent = e;
                    return this
                },
                is: function(t) {
                    if (!this[0]) return !1;
                    var r, i;
                    if ("string" == typeof t) {
                        var s = this[0];
                        if (s === document) return t === document;
                        if (s === window) return t === window;
                        if (s.matches) return s.matches(t);
                        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                        if (s.mozMatchesSelector) return s.mozMatchesSelector(t);
                        if (s.msMatchesSelector) return s.msMatchesSelector(t);
                        for (r = a(t), i = 0; i < r.length; i++)
                            if (r[i] === this[0]) return !0;
                        return !1
                    }
                    if (t === document) return this[0] === document;
                    if (t === window) return this[0] === window;
                    if (t.nodeType || t instanceof e) {
                        for (r = t.nodeType ? [t] : t, i = 0; i < r.length; i++)
                            if (r[i] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
                        return a
                    }
                },
                eq: function(a) {
                    if ("undefined" == typeof a) return this;
                    var t, r = this.length;
                    return a > r - 1 ? new e([]) : 0 > a ? (t = r + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]])
                },
                append: function(a) {
                    var t, r;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var i = document.createElement("div");
                            for (i.innerHTML = a; i.firstChild;) this[t].appendChild(i.firstChild)
                        } else if (a instanceof e)
                        for (r = 0; r < a.length; r++) this[t].appendChild(a[r]);
                    else this[t].appendChild(a);
                    return this
                },
                prepend: function(a) {
                    var t, r;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var i = document.createElement("div");
                            for (i.innerHTML = a, r = i.childNodes.length - 1; r >= 0; r--) this[t].insertBefore(i.childNodes[r], this[t].childNodes[0])
                        } else if (a instanceof e)
                        for (r = 0; r < a.length; r++) this[t].insertBefore(a[r], this[t].childNodes[0]);
                    else this[t].insertBefore(a, this[t].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var t = a(e), r = 0; r < this.length; r++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0]);
                        else if (t.length > 1)
                        for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i])
                },
                insertAfter: function(e) {
                    for (var t = a(e), r = 0; r < this.length; r++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0].nextSibling);
                        else if (t.length > 1)
                        for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i].nextSibling)
                },
                next: function(t) {
                    return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(t) {
                    var r = [],
                        i = this[0];
                    if (!i) return new e([]);
                    for (; i.nextElementSibling;) {
                        var s = i.nextElementSibling;
                        t ? a(s).is(t) && r.push(s) : r.push(s), i = s
                    }
                    return new e(r)
                },
                prev: function(t) {
                    return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(t) {
                    var r = [],
                        i = this[0];
                    if (!i) return new e([]);
                    for (; i.previousElementSibling;) {
                        var s = i.previousElementSibling;
                        t ? a(s).is(t) && r.push(s) : r.push(s), i = s
                    }
                    return new e(r)
                },
                parent: function(e) {
                    for (var t = [], r = 0; r < this.length; r++) e ? a(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode);
                    return a(a.unique(t))
                },
                parents: function(e) {
                    for (var t = [], r = 0; r < this.length; r++)
                        for (var i = this[r].parentNode; i;) e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
                    return a(a.unique(t))
                },
                find: function(a) {
                    for (var t = [], r = 0; r < this.length; r++)
                        for (var i = this[r].querySelectorAll(a), s = 0; s < i.length; s++) t.push(i[s]);
                    return new e(t)
                },
                children: function(t) {
                    for (var r = [], i = 0; i < this.length; i++)
                        for (var s = this[i].childNodes, n = 0; n < s.length; n++) t ? 1 === s[n].nodeType && a(s[n]).is(t) && r.push(s[n]) : 1 === s[n].nodeType && r.push(s[n]);
                    return new e(a.unique(r))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, t, r = this;
                    for (e = 0; e < arguments.length; e++) {
                        var i = a(arguments[e]);
                        for (t = 0; t < i.length; t++) r[r.length] = i[t], r.length++
                    }
                    return r
                }
            }, a.fn = e.prototype, a.unique = function(e) {
                for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
                return a
            }, a
        }()), i = ["jQuery", "Zepto", "Dom7"], s = 0; s < i.length; s++) window[i[s]] && e(window[i[s]]);
    var n;
    n = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function(e) {
        function a(s) {
            if (s.target === this)
                for (e.call(this, s), t = 0; t < r.length; t++) i.off(r[t], a)
        }
        var t, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;
        if (e)
            for (t = 0; t < r.length; t++) i.on(r[t], a);
        return this
    }), "transform" in n.fn || (n.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in n.fn || (n.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});;
(function($, window, undefined) {
    var defaults = {
        active: null,
        event: 'click',
        disabled: [],
        collapsible: 'accordion',
        startCollapsed: false,
        rotate: false,
        setHash: false,
        animation: 'default',
        animationQueue: false,
        duration: 500,
        fluidHeight: true,
        scrollToAccordion: false,
        scrollToAccordionOnLoad: true,
        scrollToAccordionOffset: 0,
        accordionTabElement: '<div></div>',
        activate: function() {},
        deactivate: function() {},
        load: function() {},
        activateState: function() {},
        classes: {
            stateDefault: 'r-tabs-state-default',
            stateActive: 'r-tabs-state-active',
            stateDisabled: 'r-tabs-state-disabled',
            stateExcluded: 'r-tabs-state-excluded',
            container: 'r-tabs',
            ul: 'r-tabs-nav',
            tab: 'r-tabs-tab',
            anchor: 'r-tabs-anchor',
            panel: 'r-tabs-panel',
            accordionTitle: 'r-tabs-accordion-title'
        }
    };

    function ResponsiveTabs(element, options) {
        this.element = element;
        this.$element = $(element);
        this.tabs = [];
        this.state = '';
        this.rotateInterval = 0;
        this.$queue = $({});
        this.options = $.extend({}, defaults, options);
        this.init();
    }
    ResponsiveTabs.prototype.init = function() {
        var _this = this;
        this.tabs = this._loadElements();
        this._loadClasses();
        this._loadEvents();
        $(window).on('resize', function(e) {
            _this._setState(e);
            _this._equaliseHeights();
        });
        $(window).on('hashchange', function(e) {
            var tabRef = _this._getTabRefBySelector(window.location.hash);
            var oTab = _this._getTab(tabRef);
            if (tabRef >= 0 && !oTab._ignoreHashChange && !oTab.disabled) {
                _this._openTab(e, _this._getTab(tabRef), true);
            }
        });
        if (this.options.rotate !== false) {
            this.startRotation();
        }
        if (this.options.fluidHeight !== true) {
            _this._equaliseHeights();
        }
        this.$element.bind('tabs-activate', function(e, oTab) {
            _this.options.activate.call(this, e, oTab);
        });
        this.$element.bind('tabs-deactivate', function(e, oTab) {
            _this.options.deactivate.call(this, e, oTab);
        });
        this.$element.bind('tabs-activate-state', function(e, state) {
            _this.options.activateState.call(this, e, state);
        });
        this.$element.bind('tabs-load', function(e) {
            var startTab;
            _this._setState(e);
            if (_this.options.startCollapsed !== true && !(_this.options.startCollapsed === 'accordion' && _this.state === 'accordion')) {
                startTab = _this._getStartTab();
                _this._openTab(e, startTab);
                _this.options.load.call(this, e, startTab);
            }
        });
        this.$element.trigger('tabs-load');
    };
    ResponsiveTabs.prototype._loadElements = function() {
        var _this = this;
        var $ul = this.$element.children('ul:first');
        var tabs = [];
        var id = 0;
        this.$element.addClass(_this.options.classes.container);
        $ul.addClass(_this.options.classes.ul);
        $('li', $ul).each(function() {
            var $tab = $(this);
            var isExcluded = $tab.hasClass(_this.options.classes.stateExcluded);
            var $anchor, $panel, $accordionTab, $accordionAnchor, panelSelector;
            if (!isExcluded) {
                $anchor = $('a', $tab);
                panelSelector = $anchor.attr('href');
                $panel = $(panelSelector);
                $accordionTab = $(_this.options.accordionTabElement).insertBefore($panel);
                $accordionAnchor = $('<a></a>').attr('href', panelSelector).html($anchor.html()).appendTo($accordionTab);
                var oTab = {
                    _ignoreHashChange: false,
                    id: id,
                    disabled: ($.inArray(id, _this.options.disabled) !== -1),
                    tab: $(this),
                    anchor: $('a', $tab),
                    panel: $panel,
                    selector: panelSelector,
                    accordionTab: $accordionTab,
                    accordionAnchor: $accordionAnchor,
                    active: false
                };
                id++;
                tabs.push(oTab);
            }
        });
        return tabs;
    };
    ResponsiveTabs.prototype._loadClasses = function() {
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
            this.tabs[i].anchor.addClass(this.options.classes.anchor);
            this.tabs[i].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
            this.tabs[i].accordionTab.addClass(this.options.classes.accordionTitle);
            this.tabs[i].accordionAnchor.addClass(this.options.classes.anchor);
            if (this.tabs[i].disabled) {
                this.tabs[i].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
                this.tabs[i].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
            }
        }
    };
    ResponsiveTabs.prototype._loadEvents = function() {
        var _this = this;
        var fActivate = function(e) {
            var current = _this._getCurrentTab();
            var activatedTab = e.data.tab;
            e.preventDefault();
            if (!activatedTab.disabled) {
                if (_this.options.setHash) {
                    if (history.pushState) {
                        history.pushState(null, null, window.location.origin + window.location.pathname + window.location.search + activatedTab.selector);
                    } else {
                        window.location.hash = activatedTab.selector;
                    }
                }
                e.data.tab._ignoreHashChange = true;
                if (current !== activatedTab || _this._isCollapisble()) {
                    _this._closeTab(e, current);
                    if (current !== activatedTab || !_this._isCollapisble()) {
                        _this._openTab(e, activatedTab, false, true);
                    }
                }
            }
        };
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].anchor.on(_this.options.event, {
                tab: _this.tabs[i]
            }, fActivate);
            this.tabs[i].accordionAnchor.on(_this.options.event, {
                tab: _this.tabs[i]
            }, fActivate);
        }
    };
    ResponsiveTabs.prototype._getStartTab = function() {
        var tabRef = this._getTabRefBySelector(window.location.hash);
        var startTab;
        if (tabRef >= 0 && !this._getTab(tabRef).disabled) {
            startTab = this._getTab(tabRef);
        } else if (this.options.active > 0 && !this._getTab(this.options.active).disabled) {
            startTab = this._getTab(this.options.active);
        } else {
            startTab = this._getTab(0);
        }
        return startTab;
    };
    ResponsiveTabs.prototype._setState = function(e) {
        var $ul = $('ul:first', this.$element);
        var oldState = this.state;
        var startCollapsedIsState = (typeof this.options.startCollapsed === 'string');
        var startTab;
        if ($ul.is(':visible')) {
            this.state = 'tabs';
        } else {
            this.state = 'accordion';
        }
        if (this.state !== oldState) {
            this.$element.trigger('tabs-activate-state', {
                oldState: oldState,
                newState: this.state
            });
            if (oldState && startCollapsedIsState && this.options.startCollapsed !== this.state && this._getCurrentTab() === undefined) {
                startTab = this._getStartTab(e);
                this._openTab(e, startTab);
            }
        }
    };
    ResponsiveTabs.prototype._openTab = function(e, oTab, closeCurrent, stopRotation) {
        var _this = this;
        var scrollOffset;
        if (closeCurrent) {
            this._closeTab(e, this._getCurrentTab());
        }
        if (stopRotation && this.rotateInterval > 0) {
            this.stopRotation();
        }
        oTab.active = true;
        oTab.tab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
        oTab.accordionTab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
        _this._doTransition(oTab.panel, _this.options.animation, 'open', function() {
            var scrollOnLoad = (e.type !== 'tabs-load' || _this.options.scrollToAccordionOnLoad);
            oTab.panel.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
            if (_this.getState() === 'accordion' && _this.options.scrollToAccordion && (!_this._isInView(oTab.accordionTab) || _this.options.animation !== 'default') && scrollOnLoad) {
                scrollOffset = oTab.accordionTab.offset().top - _this.options.scrollToAccordionOffset;
                if (_this.options.animation !== 'default' && _this.options.duration > 0) {
                    $('html, body').animate({
                        scrollTop: scrollOffset
                    }, _this.options.duration);
                } else {
                    $('html, body').scrollTop(scrollOffset);
                }
            }
        });
        this.$element.trigger('tabs-activate', oTab);
    };
    ResponsiveTabs.prototype._closeTab = function(e, oTab) {
        var _this = this;
        var doQueueOnState = typeof _this.options.animationQueue === 'string';
        var doQueue;
        if (oTab !== undefined) {
            if (doQueueOnState && _this.getState() === _this.options.animationQueue) {
                doQueue = true;
            } else if (doQueueOnState) {
                doQueue = false;
            } else {
                doQueue = _this.options.animationQueue;
            }
            oTab.active = false;
            oTab.tab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
            _this._doTransition(oTab.panel, _this.options.animation, 'close', function() {
                oTab.accordionTab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
                oTab.panel.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
            }, !doQueue);
            this.$element.trigger('tabs-deactivate', oTab);
        }
    };
    ResponsiveTabs.prototype._doTransition = function(panel, method, state, callback, dequeue) {
        var effect;
        var _this = this;
        switch (method) {
            case 'slide':
                effect = (state === 'open') ? 'slideDown' : 'slideUp';
                break;
            case 'fade':
                effect = (state === 'open') ? 'fadeIn' : 'fadeOut';
                break;
            default:
                effect = (state === 'open') ? 'show' : 'hide';
                _this.options.duration = 0;
                break;
        }
        this.$queue.queue('responsive-tabs', function(next) {
            panel[effect]({
                duration: _this.options.duration,
                complete: function() {
                    callback.call(panel, method, state);
                    next();
                }
            });
        });
        if (state === 'open' || dequeue) {
            this.$queue.dequeue('responsive-tabs');
        }
    };
    ResponsiveTabs.prototype._isCollapisble = function() {
        return (typeof this.options.collapsible === 'boolean' && this.options.collapsible) || (typeof this.options.collapsible === 'string' && this.options.collapsible === this.getState());
    };
    ResponsiveTabs.prototype._getTab = function(numRef) {
        return this.tabs[numRef];
    };
    ResponsiveTabs.prototype._getTabRefBySelector = function(selector) {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selector === selector) {
                return i;
            }
        }
        return -1;
    };
    ResponsiveTabs.prototype._getCurrentTab = function() {
        return this._getTab(this._getCurrentTabRef());
    };
    ResponsiveTabs.prototype._getNextTabRef = function(currentTabRef) {
        var tabRef = (currentTabRef || this._getCurrentTabRef());
        var nextTabRef = (tabRef === this.tabs.length - 1) ? 0 : tabRef + 1;
        return (this._getTab(nextTabRef).disabled) ? this._getNextTabRef(nextTabRef) : nextTabRef;
    };
    ResponsiveTabs.prototype._getPreviousTabRef = function() {
        return (this._getCurrentTabRef() === 0) ? this.tabs.length - 1 : this._getCurrentTabRef() - 1;
    };
    ResponsiveTabs.prototype._getCurrentTabRef = function() {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].active) {
                return i;
            }
        }
        return -1;
    };
    ResponsiveTabs.prototype._equaliseHeights = function() {
        var maxHeight = 0;
        $.each($.map(this.tabs, function(tab) {
            maxHeight = Math.max(maxHeight, tab.panel.css('minHeight', '').height());
            return tab.panel;
        }), function() {
            this.css('minHeight', maxHeight);
        });
    };
    ResponsiveTabs.prototype._isInView = function($element) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $element.offset().top,
            elemBottom = elemTop + $element.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };
    ResponsiveTabs.prototype.activate = function(tabRef, stopRotation) {
        var e = jQuery.Event('tabs-activate');
        var oTab = this._getTab(tabRef);
        if (!oTab.disabled) {
            this._openTab(e, oTab, true, stopRotation || true);
        }
    };
    ResponsiveTabs.prototype.deactivate = function(tabRef) {
        var e = jQuery.Event('tabs-dectivate');
        var oTab = this._getTab(tabRef);
        if (!oTab.disabled) {
            this._closeTab(e, oTab);
        }
    };
    ResponsiveTabs.prototype.enable = function(tabRef) {
        var oTab = this._getTab(tabRef);
        if (oTab) {
            oTab.disabled = false;
            oTab.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
            oTab.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
        }
    };
    ResponsiveTabs.prototype.disable = function(tabRef) {
        var oTab = this._getTab(tabRef);
        if (oTab) {
            oTab.disabled = true;
            oTab.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
            oTab.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
        }
    };
    ResponsiveTabs.prototype.getState = function() {
        return this.state;
    };
    ResponsiveTabs.prototype.startRotation = function(speed) {
        var _this = this;
        if (this.tabs.length > this.options.disabled.length) {
            this.rotateInterval = setInterval(function() {
                var e = jQuery.Event('rotate');
                _this._openTab(e, _this._getTab(_this._getNextTabRef()), true);
            }, speed || (($.isNumeric(_this.options.rotate)) ? _this.options.rotate : 4000));
        } else {
            throw new Error("Rotation is not possible if all tabs are disabled");
        }
    };
    ResponsiveTabs.prototype.stopRotation = function() {
        window.clearInterval(this.rotateInterval);
        this.rotateInterval = 0;
    };
    ResponsiveTabs.prototype.option = function(key, value) {
        if (value) {
            this.options[key] = value;
        }
        return this.options[key];
    };
    $.fn.responsiveTabs = function(options) {
        var args = arguments;
        var instance;
        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, 'responsivetabs')) {
                    $.data(this, 'responsivetabs', new ResponsiveTabs(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            instance = $.data(this[0], 'responsivetabs');
            if (options === 'destroy') {
                $.data(this, 'responsivetabs', null);
            }
            if (instance instanceof ResponsiveTabs && typeof instance[options] === 'function') {
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {
                return this;
            }
        }
    };
}(jQuery, window));
(function($) {
    if (typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            each2: function(c) {
                var j = $([0]),
                    i = -1,
                    l = this.length;
                while (
                    ++i < l &&
                    (j.context = j[0] = this[i]) &&
                    c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
                );
                return this;
            }
        });
    }
})(jQuery);
(function($, undefined) {
    "use strict";
    if (window.Select2 !== undefined) {
        return;
    }
    var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition = {
            x: 0,
            y: 0
        },
        $document, scrollBarDimensions,
        KEY = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function(k) {
                k = k.which ? k.which : k;
                switch (k) {
                    case KEY.LEFT:
                    case KEY.RIGHT:
                    case KEY.UP:
                    case KEY.DOWN:
                        return true;
                }
                return false;
            },
            isControl: function(e) {
                var k = e.which;
                switch (k) {
                    case KEY.SHIFT:
                    case KEY.CTRL:
                    case KEY.ALT:
                        return true;
                }
                if (e.metaKey) return true;
                return false;
            },
            isFunctionKey: function(k) {
                k = k.which ? k.which : k;
                return k >= 112 && k <= 123;
            }
        },
        MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",
        DIACRITICS = {
            "\u24B6": "A",
            "\uFF21": "A",
            "\u00C0": "A",
            "\u00C1": "A",
            "\u00C2": "A",
            "\u1EA6": "A",
            "\u1EA4": "A",
            "\u1EAA": "A",
            "\u1EA8": "A",
            "\u00C3": "A",
            "\u0100": "A",
            "\u0102": "A",
            "\u1EB0": "A",
            "\u1EAE": "A",
            "\u1EB4": "A",
            "\u1EB2": "A",
            "\u0226": "A",
            "\u01E0": "A",
            "\u00C4": "A",
            "\u01DE": "A",
            "\u1EA2": "A",
            "\u00C5": "A",
            "\u01FA": "A",
            "\u01CD": "A",
            "\u0200": "A",
            "\u0202": "A",
            "\u1EA0": "A",
            "\u1EAC": "A",
            "\u1EB6": "A",
            "\u1E00": "A",
            "\u0104": "A",
            "\u023A": "A",
            "\u2C6F": "A",
            "\uA732": "AA",
            "\u00C6": "AE",
            "\u01FC": "AE",
            "\u01E2": "AE",
            "\uA734": "AO",
            "\uA736": "AU",
            "\uA738": "AV",
            "\uA73A": "AV",
            "\uA73C": "AY",
            "\u24B7": "B",
            "\uFF22": "B",
            "\u1E02": "B",
            "\u1E04": "B",
            "\u1E06": "B",
            "\u0243": "B",
            "\u0182": "B",
            "\u0181": "B",
            "\u24B8": "C",
            "\uFF23": "C",
            "\u0106": "C",
            "\u0108": "C",
            "\u010A": "C",
            "\u010C": "C",
            "\u00C7": "C",
            "\u1E08": "C",
            "\u0187": "C",
            "\u023B": "C",
            "\uA73E": "C",
            "\u24B9": "D",
            "\uFF24": "D",
            "\u1E0A": "D",
            "\u010E": "D",
            "\u1E0C": "D",
            "\u1E10": "D",
            "\u1E12": "D",
            "\u1E0E": "D",
            "\u0110": "D",
            "\u018B": "D",
            "\u018A": "D",
            "\u0189": "D",
            "\uA779": "D",
            "\u01F1": "DZ",
            "\u01C4": "DZ",
            "\u01F2": "Dz",
            "\u01C5": "Dz",
            "\u24BA": "E",
            "\uFF25": "E",
            "\u00C8": "E",
            "\u00C9": "E",
            "\u00CA": "E",
            "\u1EC0": "E",
            "\u1EBE": "E",
            "\u1EC4": "E",
            "\u1EC2": "E",
            "\u1EBC": "E",
            "\u0112": "E",
            "\u1E14": "E",
            "\u1E16": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u00CB": "E",
            "\u1EBA": "E",
            "\u011A": "E",
            "\u0204": "E",
            "\u0206": "E",
            "\u1EB8": "E",
            "\u1EC6": "E",
            "\u0228": "E",
            "\u1E1C": "E",
            "\u0118": "E",
            "\u1E18": "E",
            "\u1E1A": "E",
            "\u0190": "E",
            "\u018E": "E",
            "\u24BB": "F",
            "\uFF26": "F",
            "\u1E1E": "F",
            "\u0191": "F",
            "\uA77B": "F",
            "\u24BC": "G",
            "\uFF27": "G",
            "\u01F4": "G",
            "\u011C": "G",
            "\u1E20": "G",
            "\u011E": "G",
            "\u0120": "G",
            "\u01E6": "G",
            "\u0122": "G",
            "\u01E4": "G",
            "\u0193": "G",
            "\uA7A0": "G",
            "\uA77D": "G",
            "\uA77E": "G",
            "\u24BD": "H",
            "\uFF28": "H",
            "\u0124": "H",
            "\u1E22": "H",
            "\u1E26": "H",
            "\u021E": "H",
            "\u1E24": "H",
            "\u1E28": "H",
            "\u1E2A": "H",
            "\u0126": "H",
            "\u2C67": "H",
            "\u2C75": "H",
            "\uA78D": "H",
            "\u24BE": "I",
            "\uFF29": "I",
            "\u00CC": "I",
            "\u00CD": "I",
            "\u00CE": "I",
            "\u0128": "I",
            "\u012A": "I",
            "\u012C": "I",
            "\u0130": "I",
            "\u00CF": "I",
            "\u1E2E": "I",
            "\u1EC8": "I",
            "\u01CF": "I",
            "\u0208": "I",
            "\u020A": "I",
            "\u1ECA": "I",
            "\u012E": "I",
            "\u1E2C": "I",
            "\u0197": "I",
            "\u24BF": "J",
            "\uFF2A": "J",
            "\u0134": "J",
            "\u0248": "J",
            "\u24C0": "K",
            "\uFF2B": "K",
            "\u1E30": "K",
            "\u01E8": "K",
            "\u1E32": "K",
            "\u0136": "K",
            "\u1E34": "K",
            "\u0198": "K",
            "\u2C69": "K",
            "\uA740": "K",
            "\uA742": "K",
            "\uA744": "K",
            "\uA7A2": "K",
            "\u24C1": "L",
            "\uFF2C": "L",
            "\u013F": "L",
            "\u0139": "L",
            "\u013D": "L",
            "\u1E36": "L",
            "\u1E38": "L",
            "\u013B": "L",
            "\u1E3C": "L",
            "\u1E3A": "L",
            "\u0141": "L",
            "\u023D": "L",
            "\u2C62": "L",
            "\u2C60": "L",
            "\uA748": "L",
            "\uA746": "L",
            "\uA780": "L",
            "\u01C7": "LJ",
            "\u01C8": "Lj",
            "\u24C2": "M",
            "\uFF2D": "M",
            "\u1E3E": "M",
            "\u1E40": "M",
            "\u1E42": "M",
            "\u2C6E": "M",
            "\u019C": "M",
            "\u24C3": "N",
            "\uFF2E": "N",
            "\u01F8": "N",
            "\u0143": "N",
            "\u00D1": "N",
            "\u1E44": "N",
            "\u0147": "N",
            "\u1E46": "N",
            "\u0145": "N",
            "\u1E4A": "N",
            "\u1E48": "N",
            "\u0220": "N",
            "\u019D": "N",
            "\uA790": "N",
            "\uA7A4": "N",
            "\u01CA": "NJ",
            "\u01CB": "Nj",
            "\u24C4": "O",
            "\uFF2F": "O",
            "\u00D2": "O",
            "\u00D3": "O",
            "\u00D4": "O",
            "\u1ED2": "O",
            "\u1ED0": "O",
            "\u1ED6": "O",
            "\u1ED4": "O",
            "\u00D5": "O",
            "\u1E4C": "O",
            "\u022C": "O",
            "\u1E4E": "O",
            "\u014C": "O",
            "\u1E50": "O",
            "\u1E52": "O",
            "\u014E": "O",
            "\u022E": "O",
            "\u0230": "O",
            "\u00D6": "O",
            "\u022A": "O",
            "\u1ECE": "O",
            "\u0150": "O",
            "\u01D1": "O",
            "\u020C": "O",
            "\u020E": "O",
            "\u01A0": "O",
            "\u1EDC": "O",
            "\u1EDA": "O",
            "\u1EE0": "O",
            "\u1EDE": "O",
            "\u1EE2": "O",
            "\u1ECC": "O",
            "\u1ED8": "O",
            "\u01EA": "O",
            "\u01EC": "O",
            "\u00D8": "O",
            "\u01FE": "O",
            "\u0186": "O",
            "\u019F": "O",
            "\uA74A": "O",
            "\uA74C": "O",
            "\u01A2": "OI",
            "\uA74E": "OO",
            "\u0222": "OU",
            "\u24C5": "P",
            "\uFF30": "P",
            "\u1E54": "P",
            "\u1E56": "P",
            "\u01A4": "P",
            "\u2C63": "P",
            "\uA750": "P",
            "\uA752": "P",
            "\uA754": "P",
            "\u24C6": "Q",
            "\uFF31": "Q",
            "\uA756": "Q",
            "\uA758": "Q",
            "\u024A": "Q",
            "\u24C7": "R",
            "\uFF32": "R",
            "\u0154": "R",
            "\u1E58": "R",
            "\u0158": "R",
            "\u0210": "R",
            "\u0212": "R",
            "\u1E5A": "R",
            "\u1E5C": "R",
            "\u0156": "R",
            "\u1E5E": "R",
            "\u024C": "R",
            "\u2C64": "R",
            "\uA75A": "R",
            "\uA7A6": "R",
            "\uA782": "R",
            "\u24C8": "S",
            "\uFF33": "S",
            "\u1E9E": "S",
            "\u015A": "S",
            "\u1E64": "S",
            "\u015C": "S",
            "\u1E60": "S",
            "\u0160": "S",
            "\u1E66": "S",
            "\u1E62": "S",
            "\u1E68": "S",
            "\u0218": "S",
            "\u015E": "S",
            "\u2C7E": "S",
            "\uA7A8": "S",
            "\uA784": "S",
            "\u24C9": "T",
            "\uFF34": "T",
            "\u1E6A": "T",
            "\u0164": "T",
            "\u1E6C": "T",
            "\u021A": "T",
            "\u0162": "T",
            "\u1E70": "T",
            "\u1E6E": "T",
            "\u0166": "T",
            "\u01AC": "T",
            "\u01AE": "T",
            "\u023E": "T",
            "\uA786": "T",
            "\uA728": "TZ",
            "\u24CA": "U",
            "\uFF35": "U",
            "\u00D9": "U",
            "\u00DA": "U",
            "\u00DB": "U",
            "\u0168": "U",
            "\u1E78": "U",
            "\u016A": "U",
            "\u1E7A": "U",
            "\u016C": "U",
            "\u00DC": "U",
            "\u01DB": "U",
            "\u01D7": "U",
            "\u01D5": "U",
            "\u01D9": "U",
            "\u1EE6": "U",
            "\u016E": "U",
            "\u0170": "U",
            "\u01D3": "U",
            "\u0214": "U",
            "\u0216": "U",
            "\u01AF": "U",
            "\u1EEA": "U",
            "\u1EE8": "U",
            "\u1EEE": "U",
            "\u1EEC": "U",
            "\u1EF0": "U",
            "\u1EE4": "U",
            "\u1E72": "U",
            "\u0172": "U",
            "\u1E76": "U",
            "\u1E74": "U",
            "\u0244": "U",
            "\u24CB": "V",
            "\uFF36": "V",
            "\u1E7C": "V",
            "\u1E7E": "V",
            "\u01B2": "V",
            "\uA75E": "V",
            "\u0245": "V",
            "\uA760": "VY",
            "\u24CC": "W",
            "\uFF37": "W",
            "\u1E80": "W",
            "\u1E82": "W",
            "\u0174": "W",
            "\u1E86": "W",
            "\u1E84": "W",
            "\u1E88": "W",
            "\u2C72": "W",
            "\u24CD": "X",
            "\uFF38": "X",
            "\u1E8A": "X",
            "\u1E8C": "X",
            "\u24CE": "Y",
            "\uFF39": "Y",
            "\u1EF2": "Y",
            "\u00DD": "Y",
            "\u0176": "Y",
            "\u1EF8": "Y",
            "\u0232": "Y",
            "\u1E8E": "Y",
            "\u0178": "Y",
            "\u1EF6": "Y",
            "\u1EF4": "Y",
            "\u01B3": "Y",
            "\u024E": "Y",
            "\u1EFE": "Y",
            "\u24CF": "Z",
            "\uFF3A": "Z",
            "\u0179": "Z",
            "\u1E90": "Z",
            "\u017B": "Z",
            "\u017D": "Z",
            "\u1E92": "Z",
            "\u1E94": "Z",
            "\u01B5": "Z",
            "\u0224": "Z",
            "\u2C7F": "Z",
            "\u2C6B": "Z",
            "\uA762": "Z",
            "\u24D0": "a",
            "\uFF41": "a",
            "\u1E9A": "a",
            "\u00E0": "a",
            "\u00E1": "a",
            "\u00E2": "a",
            "\u1EA7": "a",
            "\u1EA5": "a",
            "\u1EAB": "a",
            "\u1EA9": "a",
            "\u00E3": "a",
            "\u0101": "a",
            "\u0103": "a",
            "\u1EB1": "a",
            "\u1EAF": "a",
            "\u1EB5": "a",
            "\u1EB3": "a",
            "\u0227": "a",
            "\u01E1": "a",
            "\u00E4": "a",
            "\u01DF": "a",
            "\u1EA3": "a",
            "\u00E5": "a",
            "\u01FB": "a",
            "\u01CE": "a",
            "\u0201": "a",
            "\u0203": "a",
            "\u1EA1": "a",
            "\u1EAD": "a",
            "\u1EB7": "a",
            "\u1E01": "a",
            "\u0105": "a",
            "\u2C65": "a",
            "\u0250": "a",
            "\uA733": "aa",
            "\u00E6": "ae",
            "\u01FD": "ae",
            "\u01E3": "ae",
            "\uA735": "ao",
            "\uA737": "au",
            "\uA739": "av",
            "\uA73B": "av",
            "\uA73D": "ay",
            "\u24D1": "b",
            "\uFF42": "b",
            "\u1E03": "b",
            "\u1E05": "b",
            "\u1E07": "b",
            "\u0180": "b",
            "\u0183": "b",
            "\u0253": "b",
            "\u24D2": "c",
            "\uFF43": "c",
            "\u0107": "c",
            "\u0109": "c",
            "\u010B": "c",
            "\u010D": "c",
            "\u00E7": "c",
            "\u1E09": "c",
            "\u0188": "c",
            "\u023C": "c",
            "\uA73F": "c",
            "\u2184": "c",
            "\u24D3": "d",
            "\uFF44": "d",
            "\u1E0B": "d",
            "\u010F": "d",
            "\u1E0D": "d",
            "\u1E11": "d",
            "\u1E13": "d",
            "\u1E0F": "d",
            "\u0111": "d",
            "\u018C": "d",
            "\u0256": "d",
            "\u0257": "d",
            "\uA77A": "d",
            "\u01F3": "dz",
            "\u01C6": "dz",
            "\u24D4": "e",
            "\uFF45": "e",
            "\u00E8": "e",
            "\u00E9": "e",
            "\u00EA": "e",
            "\u1EC1": "e",
            "\u1EBF": "e",
            "\u1EC5": "e",
            "\u1EC3": "e",
            "\u1EBD": "e",
            "\u0113": "e",
            "\u1E15": "e",
            "\u1E17": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u00EB": "e",
            "\u1EBB": "e",
            "\u011B": "e",
            "\u0205": "e",
            "\u0207": "e",
            "\u1EB9": "e",
            "\u1EC7": "e",
            "\u0229": "e",
            "\u1E1D": "e",
            "\u0119": "e",
            "\u1E19": "e",
            "\u1E1B": "e",
            "\u0247": "e",
            "\u025B": "e",
            "\u01DD": "e",
            "\u24D5": "f",
            "\uFF46": "f",
            "\u1E1F": "f",
            "\u0192": "f",
            "\uA77C": "f",
            "\u24D6": "g",
            "\uFF47": "g",
            "\u01F5": "g",
            "\u011D": "g",
            "\u1E21": "g",
            "\u011F": "g",
            "\u0121": "g",
            "\u01E7": "g",
            "\u0123": "g",
            "\u01E5": "g",
            "\u0260": "g",
            "\uA7A1": "g",
            "\u1D79": "g",
            "\uA77F": "g",
            "\u24D7": "h",
            "\uFF48": "h",
            "\u0125": "h",
            "\u1E23": "h",
            "\u1E27": "h",
            "\u021F": "h",
            "\u1E25": "h",
            "\u1E29": "h",
            "\u1E2B": "h",
            "\u1E96": "h",
            "\u0127": "h",
            "\u2C68": "h",
            "\u2C76": "h",
            "\u0265": "h",
            "\u0195": "hv",
            "\u24D8": "i",
            "\uFF49": "i",
            "\u00EC": "i",
            "\u00ED": "i",
            "\u00EE": "i",
            "\u0129": "i",
            "\u012B": "i",
            "\u012D": "i",
            "\u00EF": "i",
            "\u1E2F": "i",
            "\u1EC9": "i",
            "\u01D0": "i",
            "\u0209": "i",
            "\u020B": "i",
            "\u1ECB": "i",
            "\u012F": "i",
            "\u1E2D": "i",
            "\u0268": "i",
            "\u0131": "i",
            "\u24D9": "j",
            "\uFF4A": "j",
            "\u0135": "j",
            "\u01F0": "j",
            "\u0249": "j",
            "\u24DA": "k",
            "\uFF4B": "k",
            "\u1E31": "k",
            "\u01E9": "k",
            "\u1E33": "k",
            "\u0137": "k",
            "\u1E35": "k",
            "\u0199": "k",
            "\u2C6A": "k",
            "\uA741": "k",
            "\uA743": "k",
            "\uA745": "k",
            "\uA7A3": "k",
            "\u24DB": "l",
            "\uFF4C": "l",
            "\u0140": "l",
            "\u013A": "l",
            "\u013E": "l",
            "\u1E37": "l",
            "\u1E39": "l",
            "\u013C": "l",
            "\u1E3D": "l",
            "\u1E3B": "l",
            "\u017F": "l",
            "\u0142": "l",
            "\u019A": "l",
            "\u026B": "l",
            "\u2C61": "l",
            "\uA749": "l",
            "\uA781": "l",
            "\uA747": "l",
            "\u01C9": "lj",
            "\u24DC": "m",
            "\uFF4D": "m",
            "\u1E3F": "m",
            "\u1E41": "m",
            "\u1E43": "m",
            "\u0271": "m",
            "\u026F": "m",
            "\u24DD": "n",
            "\uFF4E": "n",
            "\u01F9": "n",
            "\u0144": "n",
            "\u00F1": "n",
            "\u1E45": "n",
            "\u0148": "n",
            "\u1E47": "n",
            "\u0146": "n",
            "\u1E4B": "n",
            "\u1E49": "n",
            "\u019E": "n",
            "\u0272": "n",
            "\u0149": "n",
            "\uA791": "n",
            "\uA7A5": "n",
            "\u01CC": "nj",
            "\u24DE": "o",
            "\uFF4F": "o",
            "\u00F2": "o",
            "\u00F3": "o",
            "\u00F4": "o",
            "\u1ED3": "o",
            "\u1ED1": "o",
            "\u1ED7": "o",
            "\u1ED5": "o",
            "\u00F5": "o",
            "\u1E4D": "o",
            "\u022D": "o",
            "\u1E4F": "o",
            "\u014D": "o",
            "\u1E51": "o",
            "\u1E53": "o",
            "\u014F": "o",
            "\u022F": "o",
            "\u0231": "o",
            "\u00F6": "o",
            "\u022B": "o",
            "\u1ECF": "o",
            "\u0151": "o",
            "\u01D2": "o",
            "\u020D": "o",
            "\u020F": "o",
            "\u01A1": "o",
            "\u1EDD": "o",
            "\u1EDB": "o",
            "\u1EE1": "o",
            "\u1EDF": "o",
            "\u1EE3": "o",
            "\u1ECD": "o",
            "\u1ED9": "o",
            "\u01EB": "o",
            "\u01ED": "o",
            "\u00F8": "o",
            "\u01FF": "o",
            "\u0254": "o",
            "\uA74B": "o",
            "\uA74D": "o",
            "\u0275": "o",
            "\u01A3": "oi",
            "\u0223": "ou",
            "\uA74F": "oo",
            "\u24DF": "p",
            "\uFF50": "p",
            "\u1E55": "p",
            "\u1E57": "p",
            "\u01A5": "p",
            "\u1D7D": "p",
            "\uA751": "p",
            "\uA753": "p",
            "\uA755": "p",
            "\u24E0": "q",
            "\uFF51": "q",
            "\u024B": "q",
            "\uA757": "q",
            "\uA759": "q",
            "\u24E1": "r",
            "\uFF52": "r",
            "\u0155": "r",
            "\u1E59": "r",
            "\u0159": "r",
            "\u0211": "r",
            "\u0213": "r",
            "\u1E5B": "r",
            "\u1E5D": "r",
            "\u0157": "r",
            "\u1E5F": "r",
            "\u024D": "r",
            "\u027D": "r",
            "\uA75B": "r",
            "\uA7A7": "r",
            "\uA783": "r",
            "\u24E2": "s",
            "\uFF53": "s",
            "\u00DF": "s",
            "\u015B": "s",
            "\u1E65": "s",
            "\u015D": "s",
            "\u1E61": "s",
            "\u0161": "s",
            "\u1E67": "s",
            "\u1E63": "s",
            "\u1E69": "s",
            "\u0219": "s",
            "\u015F": "s",
            "\u023F": "s",
            "\uA7A9": "s",
            "\uA785": "s",
            "\u1E9B": "s",
            "\u24E3": "t",
            "\uFF54": "t",
            "\u1E6B": "t",
            "\u1E97": "t",
            "\u0165": "t",
            "\u1E6D": "t",
            "\u021B": "t",
            "\u0163": "t",
            "\u1E71": "t",
            "\u1E6F": "t",
            "\u0167": "t",
            "\u01AD": "t",
            "\u0288": "t",
            "\u2C66": "t",
            "\uA787": "t",
            "\uA729": "tz",
            "\u24E4": "u",
            "\uFF55": "u",
            "\u00F9": "u",
            "\u00FA": "u",
            "\u00FB": "u",
            "\u0169": "u",
            "\u1E79": "u",
            "\u016B": "u",
            "\u1E7B": "u",
            "\u016D": "u",
            "\u00FC": "u",
            "\u01DC": "u",
            "\u01D8": "u",
            "\u01D6": "u",
            "\u01DA": "u",
            "\u1EE7": "u",
            "\u016F": "u",
            "\u0171": "u",
            "\u01D4": "u",
            "\u0215": "u",
            "\u0217": "u",
            "\u01B0": "u",
            "\u1EEB": "u",
            "\u1EE9": "u",
            "\u1EEF": "u",
            "\u1EED": "u",
            "\u1EF1": "u",
            "\u1EE5": "u",
            "\u1E73": "u",
            "\u0173": "u",
            "\u1E77": "u",
            "\u1E75": "u",
            "\u0289": "u",
            "\u24E5": "v",
            "\uFF56": "v",
            "\u1E7D": "v",
            "\u1E7F": "v",
            "\u028B": "v",
            "\uA75F": "v",
            "\u028C": "v",
            "\uA761": "vy",
            "\u24E6": "w",
            "\uFF57": "w",
            "\u1E81": "w",
            "\u1E83": "w",
            "\u0175": "w",
            "\u1E87": "w",
            "\u1E85": "w",
            "\u1E98": "w",
            "\u1E89": "w",
            "\u2C73": "w",
            "\u24E7": "x",
            "\uFF58": "x",
            "\u1E8B": "x",
            "\u1E8D": "x",
            "\u24E8": "y",
            "\uFF59": "y",
            "\u1EF3": "y",
            "\u00FD": "y",
            "\u0177": "y",
            "\u1EF9": "y",
            "\u0233": "y",
            "\u1E8F": "y",
            "\u00FF": "y",
            "\u1EF7": "y",
            "\u1E99": "y",
            "\u1EF5": "y",
            "\u01B4": "y",
            "\u024F": "y",
            "\u1EFF": "y",
            "\u24E9": "z",
            "\uFF5A": "z",
            "\u017A": "z",
            "\u1E91": "z",
            "\u017C": "z",
            "\u017E": "z",
            "\u1E93": "z",
            "\u1E95": "z",
            "\u01B6": "z",
            "\u0225": "z",
            "\u0240": "z",
            "\u2C6C": "z",
            "\uA763": "z",
            "\u0386": "\u0391",
            "\u0388": "\u0395",
            "\u0389": "\u0397",
            "\u038A": "\u0399",
            "\u03AA": "\u0399",
            "\u038C": "\u039F",
            "\u038E": "\u03A5",
            "\u03AB": "\u03A5",
            "\u038F": "\u03A9",
            "\u03AC": "\u03B1",
            "\u03AD": "\u03B5",
            "\u03AE": "\u03B7",
            "\u03AF": "\u03B9",
            "\u03CA": "\u03B9",
            "\u0390": "\u03B9",
            "\u03CC": "\u03BF",
            "\u03CD": "\u03C5",
            "\u03CB": "\u03C5",
            "\u03B0": "\u03C5",
            "\u03C9": "\u03C9",
            "\u03C2": "\u03C3"
        };
    $document = $(document);
    nextUid = (function() {
        var counter = 1;
        return function() {
            return counter++;
        };
    }());

    function reinsertElement(element) {
        var placeholder = $(document.createTextNode(''));
        element.before(placeholder);
        placeholder.before(element);
        placeholder.remove();
    }

    function stripDiacritics(str) {
        function match(a) {
            return DIACRITICS[a] || a;
        }
        return str.replace(/[^\u0000-\u007E]/g, match);
    }

    function indexOf(value, array) {
        var i = 0,
            l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar() {
        var $template = $(MEASURE_SCROLLBAR_TEMPLATE);
        $template.appendTo('body');
        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();
        return dim;
    }

    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        if (a.constructor === String) return a + '' === b + '';
        if (b.constructor === String) return b + '' === a + '';
        return false;
    }

    function splitVal(string, separator) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = $.trim(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key = "keyup-change-value";
        element.on("keydown", function() {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function() {
            var val = $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }

    function installFilteredMouseMove(element) {
        element.on("mousemove", function(e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function() {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function(e) {
            element.trigger("scroll-debounced", e);
        });
        element.on("scroll", function(e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;
        window.setTimeout(function() {
            var el = $el[0],
                pos = $el.val().length,
                range;
            $el.focus();
            var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
            if (isVisible && el === document.activeElement) {
                if (el.setSelectionRange) {
                    el.setSelectionRange(pos, pos);
                } else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return {
            offset: offset,
            length: length
        };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer) {
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class", "select2-sizer");
            $("body").append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [],
            adapted;
        classes = $.trim(dest.attr("class"));
        if (classes) {
            classes = '' + classes;
            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }
        classes = $.trim(src.attr("class"));
        if (classes) {
            classes = '' + classes;
            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);
                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }
        dest.attr("class", replacements.join(" "));
    }

    function markMatch(text, term, markup, escapeMarkup) {
        var match = stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl = term.length;
        if (match < 0) {
            markup.push(escapeMarkup(text));
            return;
        }
        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };
        return String(markup).replace(/[&<>"'\/\\]/g, function(match) {
            return replace_map[match];
        });
    }
    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration parameters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber, query) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout,
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;
        return function(query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                var data = options.data,
                    url = ajaxUrl,
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                    deprecated = {
                        type: options.type || 'GET',
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback || undefined,
                        dataType: options.dataType || "json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);
                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;
                if (handler && typeof handler.abort === "function") {
                    handler.abort();
                }
                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }
                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function(data) {
                        var results = options.results(data, query.page, query);
                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }
    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used it is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options,
            dataText,
            tmp,
            text = function(item) {
                return "" + item.text;
            };
        if ($.isArray(data)) {
            tmp = data;
            data = {
                results: tmp
            };
        }
        if ($.isFunction(data) === false) {
            tmp = data;
            data = function() {
                return tmp;
            };
        }
        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            if (!$.isFunction(text)) {
                dataText = dataItem.text;
                text = function(item) {
                    return item[dataText];
                };
            }
        }
        return function(query) {
            var t = query.term,
                filtered = {
                    results: []
                },
                process;
            if (t === "") {
                query.callback(data());
                return;
            }
            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr] = datum[attr];
                    }
                    group.children = [];
                    $(datum.children).each2(function(i, childDatum) {
                        process(childDatum, group.children);
                    });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };
            $(data().results).each2(function(i, datum) {
                process(datum, filtered.results);
            });
            query.callback(filtered);
        };
    }

    function tags(data) {
        var isFunc = $.isFunction(data);
        return function(query) {
            var t = query.term,
                filtered = {
                    results: []
                };
            var result = isFunc ? data(query) : data;
            if ($.isArray(result)) {
                $(result).each(function() {
                    var isObject = this.text !== undefined,
                        text = isObject ? this.text : this;
                    if (t === "" || query.matcher(t, text)) {
                        filtered.results.push(isObject ? this : {
                            id: this,
                            text: this
                        });
                    }
                });
                query.callback(filtered);
            }
        };
    }

    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        if (typeof(formatter) === 'string') return true;
        throw new Error(formatterName + " must be a string, function, or falsy value");
    }

    function evaluate(val, context) {
        if ($.isFunction(val)) {
            var args = Array.prototype.slice.call(arguments, 2);
            return val.apply(context, args);
        }
        return val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }
    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input,
            dupe = false,
            token,
            index,
            i, l,
            separator;
        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;
        while (true) {
            index = -1;
            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }
            if (index < 0) break;
            token = input.substring(0, index);
            input = input.substring(index + separator.length);
            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true;
                            break;
                        }
                    }
                    if (!dupe) selectCallback(token);
                }
            }
        }
        if (original !== input) return input;
    }

    function cleanupJQueryElements() {
        var self = this;
        $.each(arguments, function(i, element) {
            self[element].remove();
            self[element] = null;
        });
    }

    function clazz(SuperClass, methods) {
        var constructor = function() {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }
    AbstractSelect2 = clazz(Object, {
        bind: function(func) {
            var self = this;
            return function() {
                func.apply(self, arguments);
            };
        },
        init: function(opts) {
            var results, search, resultsSelector = ".select2-results";
            this.opts = opts = this.prepareOpts(opts);
            this.id = opts.id;
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }
            this.container = this.createContainer();
            this.liveRegion = $("<span>", {
                    role: "status",
                    "aria-live": "polite"
                })
                .addClass("select2-hidden-accessible")
                .appendTo(document.body);
            this.containerId = "s2id_" + (opts.element.attr("id") || "autogen" + nextUid());
            this.containerEventName = this.containerId
                .replace(/([.])/g, '_')
                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);
            this.container.attr("title", opts.element.attr("title"));
            this.body = $("body");
            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss, this.opts.element));
            this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));
            this.elementTabIndex = this.opts.element.attr("tabindex");
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container)
                .on("click.select2", killEvent);
            this.container.data("select2", this);
            this.dropdown = this.container.find(".select2-drop");
            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
            this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);
            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");
            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;
            this.initContainer();
            this.container.on("click", killEvent);
            installFilteredMouseMove(this.results);
            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function(event) {
                this._touchEvent = true;
                this.highlightUnderEvent(event);
            }));
            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));
            this.dropdown.on('click', this.bind(function(event) {
                if (this._touchEvent) {
                    this._touchEvent = false;
                    this.selectHighlighted();
                }
            }));
            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));
            $(this.container).on("change", ".select2-input", function(e) {
                e.stopPropagation();
            });
            $(this.dropdown).on("change", ".select2-input", function(e) {
                e.stopPropagation();
            });
            if ($.fn.mousewheel) {
                results.mousewheel(function(e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }
            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function() {
                search.addClass("select2-focused");
            });
            search.on("blur", function() {
                search.removeClass("select2-focused");
            });
            this.dropdown.on("mouseup", resultsSelector, this.bind(function(e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));
            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(e) {
                e.stopPropagation();
            });
            this.nextSearchTerm = undefined;
            if ($.isFunction(this.opts.initSelection)) {
                this.initSelection();
                this.monitorSource();
            }
            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }
            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);
            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();
            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();
            this.search.attr("placeholder", opts.searchInputPlaceholder);
        },
        destroy: function() {
            var element = this.opts.element,
                select2 = element.data("select2");
            this.close();
            if (element.length && element[0].detachEvent) {
                element.each(function() {
                    this.detachEvent("onpropertychange", this._sync);
                });
            }
            if (this.propertyObserver) {
                this.propertyObserver.disconnect();
                this.propertyObserver = null;
            }
            this._sync = null;
            if (select2 !== undefined) {
                select2.container.remove();
                select2.liveRegion.remove();
                select2.dropdown.remove();
                element
                    .removeClass("select2-offscreen")
                    .removeData("select2")
                    .off(".select2")
                    .prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({
                        tabindex: this.elementTabIndex
                    });
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }
            cleanupJQueryElements.call(this,
                "container",
                "liveRegion",
                "dropdown",
                "results",
                "search"
            );
        },
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id: element.prop("value"),
                    text: element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text: element.attr("label"),
                    children: [],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },
        prepareOpts: function(opts) {
            var element, select, idKey, ajaxUrl, self = this;
            element = opts.element;
            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }
            if (select) {
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }
            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate, id = this.opts.id,
                        liveRegion = this.liveRegion;
                    populate = function(results, container, depth) {
                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;
                        results = opts.sortResults(results, container, query);
                        var nodes = [];
                        for (i = 0, l = results.length; i < l; i = i + 1) {
                            result = results[i];
                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);
                            compound = result.children && result.children.length > 0;
                            node = $("<li></li>");
                            node.addClass("select2-results-dept-" + depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) {
                                node.addClass("select2-disabled");
                            }
                            if (compound) {
                                node.addClass("select2-result-with-children");
                            }
                            node.addClass(self.opts.formatResultCssClass(result));
                            node.attr("role", "presentation");
                            label = $(document.createElement("div"));
                            label.addClass("select2-result-label");
                            label.attr("id", "select2-result-label-" + nextUid());
                            label.attr("role", "option");
                            formatted = opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted !== undefined) {
                                label.html(formatted);
                                node.append(label);
                            }
                            if (compound) {
                                innerContainer = $("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth + 1);
                                node.append(innerContainer);
                            }
                            node.data("select2-data", result);
                            nodes.push(node[0]);
                        }
                        container.append(nodes);
                        liveRegion.text(opts.formatMatches(results.length));
                    };
                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);
            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function(e) {
                    return e[idKey];
                };
            }
            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags = opts.element.data("select2Tags");
            }
            if (select) {
                opts.query = this.bind(function(query) {
                    var data = {
                            results: [],
                            more: false
                        },
                        term = query.term,
                        children, placeholderOption, process;
                    process = function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group = self.optionToData(element);
                            element.children().each2(function(i, elm) {
                                process(elm, group.children);
                            });
                            if (group.children.length > 0) {
                                collection.push(group);
                            }
                        }
                    };
                    children = element.children();
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children = children.not(placeholderOption);
                        }
                    }
                    children.each2(function(i, elm) {
                        process(elm, data.results);
                    });
                    query.callback(data);
                });
                opts.id = function(e) {
                    return e.id;
                };
            } else {
                if (!("query" in opts)) {
                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function(term) {
                                return {
                                    id: $.trim(term),
                                    text: $.trim(term)
                                };
                            };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function(element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function() {
                                    var obj = {
                                            id: this,
                                            text: this
                                        },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags = tags();
                                    $(tags).each(function() {
                                        if (equal(this.id, obj.id)) {
                                            obj = this;
                                            return false;
                                        }
                                    });
                                    data.push(obj);
                                });
                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }
            if (opts.createSearchChoicePosition === 'top') {
                opts.createSearchChoicePosition = function(list, item) {
                    list.unshift(item);
                };
            } else if (opts.createSearchChoicePosition === 'bottom') {
                opts.createSearchChoicePosition = function(list, item) {
                    list.push(item);
                };
            } else if (typeof(opts.createSearchChoicePosition) !== "function") {
                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            }
            return opts;
        },
        monitorSource: function() {
            var el = this.opts.element,
                observer, self = this;
            el.on("change.select2", this.bind(function(e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));
            this._sync = this.bind(function() {
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);
                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);
                syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
                syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element));
            });
            if (el.length && el[0].attachEvent) {
                el.each(function() {
                    this.attachEvent("onpropertychange", self._sync);
                });
            }
            observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) {
                    delete this.propertyObserver;
                    this.propertyObserver = null;
                }
                this.propertyObserver = new observer(function(mutations) {
                    $.each(mutations, self._sync);
                });
                this.propertyObserver.observe(el.get(0), {
                    attributes: true,
                    subtree: false
                });
            }
        },
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", {
                val: this.id(data),
                object: data,
                choice: data
            });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },
        triggerChange: function(details) {
            details = details || {};
            details = $.extend({}, details, {
                type: "change",
                val: this.val()
            });
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);
            this.opts.element.click();
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },
        isInterfaceEnabled: function() {
            return this.enabledInterface === true;
        },
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;
            if (enabled === this.enabledInterface) return false;
            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;
            return true;
        },
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;
            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },
        disable: function() {
            this.enable(false);
        },
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return;
            this._readonly = enabled;
            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
        },
        opened: function() {
            return (this.container) ? this.container.hasClass("select2-dropdown-open") : false;
        },
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                offset = this.container.offset(),
                height = this.container.outerHeight(false),
                width = this.container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
                $dropdown.show();
                this.focusSearch();
            }
            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                dropHeight = $dropdown.outerHeight(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
            } else {
                this.container.removeClass('select2-drop-auto-width');
            }
            if (this.body.css('position') !== 'static') {
                bodyOffset = this.body.offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }
            if (!enoughRoomOnRight) {
                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
            }
            css = {
                left: dropLeft,
                width: width
            };
            if (above) {
                css.top = offset.top - dropHeight;
                css.bottom = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            } else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));
            $dropdown.css(css);
        },
        shouldOpen: function() {
            var event;
            if (this.opened()) return false;
            if (this._enabled === false || this._readonly === true) return false;
            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },
        clearDropdownAlignmentPreference: function() {
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },
        open: function() {
            if (!this.shouldOpen()) return false;
            this.opening();
            $document.on("mousemove.select2Event", function(e) {
                lastMousePosition.x = e.pageX;
                lastMousePosition.y = e.pageY;
            });
            return true;
        },
        opening: function() {
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize." + cid,
                orient = "orientationchange." + cid,
                mask;
            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
            this.clearDropdownAlignmentPreference();
            if (this.dropdown[0] !== this.body.children().last()[0]) {
                this.dropdown.detach().appendTo(this.body);
            }
            mask = $("#select2-drop-mask");
            if (mask.length == 0) {
                mask = $(document.createElement("div"));
                mask.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body);
                mask.on("mousedown touchstart click", function(e) {
                    reinsertElement(mask);
                    var dropdown = $("#select2-drop"),
                        self;
                    if (dropdown.length > 0) {
                        self = dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({
                                noFocus: true
                            });
                        }
                        self.close();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");
            mask.show();
            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();
            this.dropdown.addClass("select2-drop-active");
            var that = this;
            this.container.parents().add(window).each(function() {
                $(this).on(resize + " " + scroll + " " + orient, function(e) {
                    if (that.opened()) that.positionDropdown();
                });
            });
        },
        close: function() {
            if (!this.opened()) return;
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize." + cid,
                orient = "orientationchange." + cid;
            this.container.parents().add(window).each(function() {
                $(this).off(scroll).off(resize).off(orient);
            });
            this.clearDropdownAlignmentPreference();
            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id");
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();
            $document.off("mousemove.select2Event");
            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },
        externalSearch: function(term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },
        clearSearch: function() {},
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize, this.opts.element);
        },
        ensureHighlightVisible: function() {
            var results = this.results,
                children, index, child, hb, rb, y, more, topOffset;
            index = this.highlight();
            if (index < 0) return;
            if (index == 0) {
                results.scrollTop(0);
                return;
            }
            children = this.findHighlightableChoices().find('.select2-result-label');
            child = $(children[index]);
            topOffset = (child.offset() || {}).top || 0;
            hb = topOffset + child.outerHeight(true);
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }
            rb = results.offset().top + results.outerHeight(true);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = topOffset - results.offset().top;
            if (y < 0 && child.css('display') != 'none') {
                results.scrollTop(results.scrollTop() + y);
            }
        },
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
        },
        moveHighlight: function(delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();
            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },
        highlight: function(index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;
            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }
            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;
            this.removeHighlight();
            choice = $(choices[index]);
            choice.addClass("select2-highlighted");
            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));
            this.ensureHighlightVisible();
            this.liveRegion.text(choice.text());
            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(data),
                    choice: data
                });
            }
        },
        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },
        touchMoved: function() {
            this._touchMoved = true;
        },
        clearTouchMoved: function() {
            this._touchMoved = false;
        },
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },
        highlightUnderEvent: function(event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                this.removeHighlight();
            }
        },
        loadMoreIfNeeded: function() {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below,
                page = this.resultsPage + 1,
                self = this,
                term = this.search.val(),
                context = this.context;
            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();
            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                    element: this.opts.element,
                    term: term,
                    page: page,
                    context: context,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(data) {
                        if (!self.opened()) return;
                        self.opts.populateResults.call(this, results, data.results, {
                            term: term,
                            page: page,
                            context: context
                        });
                        self.postprocessResults(data, false, false);
                        if (data.more === true) {
                            more.detach().appendTo(results).text(evaluate(self.opts.formatLoadMore, self.opts.element, page + 1));
                            window.setTimeout(function() {
                                self.loadMoreIfNeeded();
                            }, 10);
                        } else {
                            more.remove();
                        }
                        self.positionDropdown();
                        self.resultsPage = page;
                        self.context = data.context;
                        this.opts.element.trigger({
                            type: "select2-loaded",
                            items: data
                        });
                    })
                });
            }
        },
        tokenize: function() {},
        updateResults: function(initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
                queryNumber;
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;
            $.data(this.container, "select2-last-term", term);
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
                    self.liveRegion.text(results.text());
                } else {
                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable').length));
                }
            }

            function render(html) {
                results.html(html);
                postRender();
            }
            queryNumber = ++this.queryCount;
            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >= 1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
                    return;
                }
            }
            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }
            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }
            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>");
            }
            search.addClass("select2-active");
            this.removeHighlight();
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }
            this.resultsPage = 1;
            opts.query({
                element: opts.element,
                term: search.val(),
                page: this.resultsPage,
                context: null,
                matcher: opts.matcher,
                callback: this.bind(function(data) {
                    var def;
                    if (queryNumber != this.queryCount) {
                        return;
                    }
                    if (!this.opened()) {
                        this.search.removeClass("select2-active");
                        return;
                    }
                    this.context = (data.context === undefined) ? null : data.context;
                    if (this.opts.createSearchChoice && search.val() !== "") {
                        def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                        if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                            if ($(data.results).filter(function() {
                                    return equal(self.id(this), self.id(def));
                                }).length === 0) {
                                this.opts.createSearchChoicePosition(data.results, def);
                            }
                        }
                    }
                    if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                        render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
                        return;
                    }
                    results.empty();
                    self.opts.populateResults.call(this, results, data.results, {
                        term: search.val(),
                        page: this.resultsPage,
                        context: null
                    });
                    if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                        results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
                        window.setTimeout(function() {
                            self.loadMoreIfNeeded();
                        }, 10);
                    }
                    this.postprocessResults(data, initial);
                    postRender();
                    this.opts.element.trigger({
                        type: "select2-loaded",
                        items: data
                    });
                })
            });
        },
        cancel: function() {
            this.close();
        },
        blur: function() {
            if (this.opts.selectOnBlur)
                this.selectHighlighted({
                    noFocus: true
                });
            this.close();
            this.container.removeClass("select2-container-active");
            if (this.search[0] === document.activeElement) {
                this.search.blur();
            }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },
        focusSearch: function() {
            focus(this.search);
        },
        selectHighlighted: function(options) {
            if (this._touchMoved) {
                this.clearTouchMoved();
                return;
            }
            var index = this.highlight(),
                highlighted = this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");
            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },
        getPlaceholder: function() {
            var placeholderOption;
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") ||
                this.opts.element.data("placeholder") ||
                this.opts.placeholder ||
                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined) {
                    return (this.opts.placeholderOption === "first" && firstOption) ||
                        (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
                    return firstOption;
                }
            }
        },
        initContainerWidth: function() {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;
                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element") {
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }
                    if (this.opts.width === "resolve") {
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }
                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
                }
            };
            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });
    SingleSelect2 = clazz(AbstractSelect2, {
        createContainer: function() {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
                "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
                "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
                "</a>",
                "<label for='' class='select2-offscreen'></label>",
                "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
                "<div class='select2-drop select2-display-none'>",
                "   <div class='select2-search'>",
                "       <label for='' class='select2-offscreen'></label>",
                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
                "       aria-autocomplete='list' />",
                "   </div>",
                "   <ul class='select2-results' role='listbox'>",
                "   </ul>",
                "</div>"
            ].join(""));
            return container;
        },
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },
        opening: function() {
            var el, range, len;
            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }
            this.parent.opening.apply(this, arguments);
            if (this.showSearchInput !== false) {
                this.search.val(this.focusser.val());
            }
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
                el = this.search.get(0);
                if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                } else if (el.setSelectionRange) {
                    len = this.search.val().length;
                    el.setSelectionRange(len, len);
                }
            }
            if (this.search.val() === "") {
                if (this.nextSearchTerm != undefined) {
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }
            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },
        close: function() {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
            this.focusser.prop("disabled", false);
            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },
        focus: function() {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.prop("disabled", false);
                if (this.opts.shouldFocusInput(this)) {
                    this.focusser.focus();
                }
            }
        },
        isFocused: function() {
            return this.container.hasClass("select2-container-active");
        },
        cancel: function() {
            this.parent.cancel.apply(this, arguments);
            this.focusser.prop("disabled", false);
            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
            cleanupJQueryElements.call(this,
                "selection",
                "focusser"
            );
        },
        initContainer: function() {
            var selection,
                container = this.container,
                dropdown = this.dropdown,
                idSuffix = nextUid(),
                elementLabel;
            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }
            this.selection = selection = container.find(".select2-choice");
            this.focusser = container.find(".select2-focusser");
            selection.find(".select2-chosen").attr("id", "select2-chosen-" + idSuffix);
            this.focusser.attr("aria-labelledby", "select2-chosen-" + idSuffix);
            this.results.attr("id", "select2-results-" + idSuffix);
            this.search.attr("aria-owns", "select2-results-" + idSuffix);
            this.focusser.attr("id", "s2id_autogen" + idSuffix);
            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
            this.focusser.prev()
                .text(elementLabel.text())
                .attr('for', this.focusser.attr('id'));
            var originalTitle = this.opts.element.attr("title");
            this.opts.element.attr("title", (originalTitle || elementLabel.text()));
            this.focusser.attr("tabindex", this.elementTabIndex);
            this.search.attr("id", this.focusser.attr('id') + '_search');
            this.search.prev()
                .text($("label[for='" + this.focusser.attr('id') + "']").text())
                .attr('for', this.search.attr('id'));
            this.search.on("keydown", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    killEvent(e);
                    return;
                }
                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({
                            noFocus: true
                        });
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));
            this.search.on("blur", this.bind(function(e) {
                if (document.activeElement === this.body.get(0)) {
                    window.setTimeout(this.bind(function() {
                        if (this.opened()) {
                            this.search.focus();
                        }
                    }), 0);
                }
            }));
            this.focusser.on("keydown", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }
                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }
                if (e.which == KEY.DOWN || e.which == KEY.UP ||
                    (e.which == KEY.ENTER && this.opts.openOnEnter)) {
                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
                    this.open();
                    killEvent(e);
                    return;
                }
                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));
            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));
            selection.on("mousedown touchstart", "abbr", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                this.clear();
                killEventImmediately(e);
                this.close();
                this.selection.focus();
            }));
            selection.on("mousedown touchstart", this.bind(function(e) {
                reinsertElement(selection);
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }
                killEvent(e);
            }));
            dropdown.on("mousedown touchstart", this.bind(function() {
                if (this.opts.shouldFocusInput(this)) {
                    this.search.focus();
                }
            }));
            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));
            this.focusser.on("focus", this.bind(function() {
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function() {
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));
            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.setPlaceholder();
        },
        clear: function(triggerChange) {
            var data = this.selection.data("select2-data");
            if (data) {
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();
                if (triggerChange !== false) {
                    this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(data),
                        choice: data
                    });
                    this.triggerChange({
                        removed: data
                    });
                }
            }
        },
        initSelection: function() {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected) {
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                        self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val());
                    }
                });
            }
        },
        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (this.getPlaceholder() === undefined) return false;
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected")) ||
                (this.opts.element.val() === "") ||
                (this.opts.element.val() === undefined) ||
                (this.opts.element.val() === null);
        },
        prepareOpts: function() {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self = this;
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                opts.initSelection = function(element, callback) {
                    var selected = element.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                opts.initSelection = opts.initSelection || function(element, callback) {
                    var id = element.val();
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el) {
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }
            return opts;
        },
        getPlaceholder: function() {
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }
            return this.parent.getPlaceholder.apply(this, arguments);
        },
        setPlaceholder: function() {
            var placeholder = this.getPlaceholder();
            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {
                if (this.select && this.getPlaceholderOption() === undefined) return;
                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));
                this.selection.addClass("select2-default");
                this.container.removeClass("select2-allowclear");
            }
        },
        postprocessResults: function(data, initial, noHighlightUpdate) {
            var selected = 0,
                self = this,
                showSearchInput = true;
            this.findHighlightableChoices().each2(function(i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }
            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;
            this.showSearchInput = showSearchInput;
            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },
        onSelect: function(data, options) {
            if (!this.triggerSelect(data)) {
                return;
            }
            var old = this.opts.element.val(),
                oldData = this.data();
            this.opts.element.val(this.id(data));
            this.updateSelection(data);
            this.opts.element.trigger({
                type: "select2-selected",
                val: this.id(data),
                choice: data
            });
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();
            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
            if (!equal(old, this.id(data))) {
                this.triggerChange({
                    added: data,
                    removed: oldData
                });
            }
        },
        updateSelection: function(data) {
            var container = this.selection.find(".select2-chosen"),
                formatted, cssClass;
            this.selection.data("select2-data", data);
            container.empty();
            if (data !== null) {
                formatted = this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass = this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }
            this.selection.removeClass("select2-default");
            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },
        val: function() {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();
            if (arguments.length === 0) {
                return this.opts.element.val();
            }
            val = arguments[0];
            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }
            if (this.select) {
                this.select
                    .val(val)
                    .find("option").filter(function() {
                        return this.selected
                    }).each2(function(i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({
                        added: data,
                        removed: oldData
                    });
                }
            } else {
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data) {
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({
                            added: data,
                            removed: oldData
                        });
                    }
                });
            }
        },
        clearSearch: function() {
            this.search.val("");
            this.focusser.val("");
        },
        data: function(value) {
            var data,
                triggerChange = false;
            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({
                            added: value,
                            removed: data
                        });
                    }
                }
            }
        }
    });
    MultiSelect2 = clazz(AbstractSelect2, {
        createContainer: function() {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                "<ul class='select2-choices'>",
                "  <li class='select2-search-field'>",
                "    <label for='' class='select2-offscreen'></label>",
                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                "  </li>",
                "</ul>",
                "<div class='select2-drop select2-drop-multi select2-display-none'>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>"
            ].join(""));
            return container;
        },
        prepareOpts: function() {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self = this;
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                opts.initSelection = function(element, callback) {
                    var data = [];
                    element.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                opts.initSelection = opts.initSelection || function(element, callback) {
                    var ids = splitVal(element.val(), opts.separator);
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el) {
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }
            return opts;
        },
        selectChoice: function(choice) {
            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {} else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
            cleanupJQueryElements.call(this,
                "searchContainer",
                "selection"
            );
        },
        initContainer: function() {
            var selector = ".select2-choices",
                selection;
            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);
            var _this = this;
            this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function(e) {
                _this.search[0].focus();
                _this.selectChoice($(this));
            });
            this.search.attr("id", "s2id_autogen" + nextUid());
            this.search.prev()
                .text($("label[for='" + this.opts.element.attr("id") + "']").text())
                .attr('for', this.search.attr('id'));
            this.search.on("input paste", this.bind(function() {
                if (this.search.attr('placeholder') && this.search.val().length == 0) return;
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));
            this.search.attr("tabindex", this.elementTabIndex);
            this.keydowns = 0;
            this.search.on("keydown", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);
                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    } else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    } else if (e.which === KEY.BACKSPACE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = prev.length ? prev : next;
                        }
                    } else if (e.which == KEY.DELETE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = next.length ? next : null;
                        }
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }
                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1) ||
                        e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {
                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }
                if (this.opened()) {
                    switch (e.which) {
                        case KEY.UP:
                        case KEY.DOWN:
                            this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                            killEvent(e);
                            return;
                        case KEY.ENTER:
                            this.selectHighlighted();
                            killEvent(e);
                            return;
                        case KEY.TAB:
                            this.selectHighlighted({
                                noFocus: true
                            });
                            this.close();
                            return;
                        case KEY.ESC:
                            this.cancel(e);
                            killEvent(e);
                            return;
                    }
                }
                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) ||
                    e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }
                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }
                this.open();
                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    killEvent(e);
                }
                if (e.which === KEY.ENTER) {
                    killEvent(e);
                }
            }));
            this.search.on("keyup", this.bind(function(e) {
                this.keydowns = 0;
                this.resizeSearch();
            }));
            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));
            this.container.on("click", selector, this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));
            this.container.on("focus", selector, this.bind(function() {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));
            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.clearSearch();
        },
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },
        initSelection: function() {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data) {
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        self.clearSearch();
                    }
                });
            }
        },
        clearSearch: function() {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();
            if (placeholder !== undefined && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },
        clearPlaceholder: function() {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },
        opening: function() {
            this.clearPlaceholder();
            this.resizeSearch();
            this.parent.opening.apply(this, arguments);
            this.focusSearch();
            if (this.search.val() === "") {
                if (this.nextSearchTerm != undefined) {
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }
            this.updateResults(true);
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
            }
            this.opts.element.trigger($.Event("select2-open"));
        },
        close: function() {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },
        focus: function() {
            this.close();
            this.search.focus();
        },
        isFocused: function() {
            return this.search.hasClass("select2-focused");
        },
        updateSelection: function(data) {
            var ids = [],
                filtered = [],
                self = this;
            $(data).each(function() {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;
            this.selection.find(".select2-search-choice").remove();
            $(data).each(function() {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }
        },
        onSelect: function(data, options) {
            if (!this.triggerSelect(data)) {
                return;
            }
            this.addSelectedChoice(data);
            this.opts.element.trigger({
                type: "selected",
                val: this.id(data),
                choice: data
            });
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.clearSearch();
            this.updateResults();
            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect === true);
            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults() > 0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        this.updateResults(true);
                    } else {
                        if (this.nextSearchTerm != undefined) {
                            this.search.val(this.nextSearchTerm);
                            this.updateResults();
                            this.search.select();
                        }
                    }
                    this.positionDropdown();
                } else {
                    this.close();
                    this.search.width(10);
                }
            }
            this.triggerChange({
                added: data
            });
            if (!options || !options.noFocus)
                this.focusSearch();
        },
        cancel: function() {
            this.close();
            this.focusSearch();
        },
        addSelectedChoice: function(data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                    "    <div></div>" +
                    "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" +
                    "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                    "<div></div>" +
                    "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;
            formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith("<div>" + formatted + "</div>");
            }
            cssClass = this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }
            if (enableChoice) {
                choice.find(".select2-search-choice-close")
                    .on("mousedown", killEvent)
                    .on("click dblclick", this.bind(function(e) {
                        if (!this.isInterfaceEnabled()) return;
                        this.unselect($(e.target));
                        this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                        killEvent(e);
                        this.close();
                        this.focusSearch();
                    })).on("focus", this.bind(function() {
                        if (!this.isInterfaceEnabled()) return;
                        this.container.addClass("select2-container-active");
                        this.dropdown.addClass("select2-drop-active");
                    }));
            }
            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);
            val.push(id);
            this.setVal(val);
        },
        unselect: function(selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");
            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }
            data = selected.data("select2-data");
            if (!data) {
                return;
            }
            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);
            if (evt.isDefaultPrevented()) {
                return false;
            }
            while ((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }
            selected.remove();
            this.opts.element.trigger({
                type: "select2-removed",
                val: this.id(data),
                choice: data
            });
            this.triggerChange({
                removed: data
            });
            return true;
        },
        postprocessResults: function(data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;
            choices.each2(function(i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });
            compound.each2(function(i, choice) {
                if (!choice.is('.select2-result-selectable') &&
                    choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });
            if (this.highlight() == -1 && noHighlightUpdate !== false) {
                self.highlight(0);
            }
            if (!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0) {
                if (!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>");
                    }
                }
            }
        },
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },
        resizeSearch: function() {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
                sideBorderPadding = getSideBorderPadding(this.search);
            minimumWidth = measureTextWidth(this.search) + 10;
            left = this.search.offset().left;
            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;
            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }
            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }
            if (searchWidth <= 0) {
                searchWidth = minimumWidth;
            }
            this.search.width(Math.floor(searchWidth));
        },
        getVal: function() {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator);
            }
        },
        setVal: function(val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                $(val).each(function() {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },
        buildChangeDetails: function(old, current) {
            var current = current.slice(0),
                old = old.slice(0);
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if (i > 0) {
                            i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }
            return {
                added: current,
                removed: old
            };
        },
        val: function(val, triggerChange) {
            var oldData, self = this;
            if (arguments.length === 0) {
                return this.getVal();
            }
            oldData = this.data();
            if (!oldData.length) oldData = [];
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({
                        added: this.data(),
                        removed: oldData
                    });
                }
                return;
            }
            this.setVal(val);
            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }
                this.opts.initSelection(this.opts.element, function(data) {
                    var ids = $.map(data, self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                    }
                });
            }
            this.clearSearch();
        },
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }
            this.search.width(0);
            this.searchContainer.hide();
        },
        onSortEnd: function() {
            var val = [],
                self = this;
            this.searchContainer.show();
            this.searchContainer.appendTo(this.searchContainer.parent());
            this.resizeSearch();
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },
        data: function(values, triggerChange) {
            var self = this,
                ids, old;
            if (arguments.length === 0) {
                return this.selection
                    .children(".select2-search-choice")
                    .map(function() {
                        return $(this).data("select2-data");
                    })
                    .get();
            } else {
                old = this.data();
                if (!values) {
                    values = [];
                }
                ids = $.map(values, function(e) {
                    return self.opts.id(e);
                });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });
    $.fn.select2 = function() {
        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method, value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = {
                search: "externalSearch"
            };
        this.each(function() {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);
                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {
                        opts.multiple = multiple = true;
                    }
                }
                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {
                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }
                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;
                method = args[0];
                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];
                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0 ||
                    (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
                    return false;
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup = [];
            markMatch(result.text, query.term, markup, escapeMarkup);
            return markup.join("");
        },
        formatSelection: function(data, container, escapeMarkup) {
            return data ? escapeMarkup(data.text) : undefined;
        },
        sortResults: function(results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {
            return data.css;
        },
        formatSelectionCssClass: function(data, container) {
            return undefined;
        },
        formatMatches: function(matches) {
            if (matches === 1) {
                return "One result is available, press enter to select it.";
            }
            return matches + " results are available, use up and down arrow keys to navigate.";
        },
        formatNoMatches: function() {
            return "No matches found";
        },
        formatInputTooShort: function(input, min) {
            var n = min - input.length;
            return "Please enter " + n + " or more character" + (n == 1 ? "" : "s");
        },
        formatInputTooLong: function(input, max) {
            var n = input.length - max;
            return "Please delete " + n + " character" + (n == 1 ? "" : "s");
        },
        formatSelectionTooBig: function(limit) {
            return "You can only select " + limit + " item" + (limit == 1 ? "" : "s");
        },
        formatLoadMore: function(pageNumber) {
            return "Loading more results…";
        },
        formatSearching: function() {
            return "Searching…";
        },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function(e) {
            return e == undefined ? null : e.id;
        },
        matcher: function(term, text) {
            return stripDiacritics('' + text).toUpperCase().indexOf(stripDiacritics('' + term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) {
            return c;
        },
        adaptDropdownCssClass: function(c) {
            return null;
        },
        nextSearchTerm: function(selectedObject, currentSearchTerm) {
            return undefined;
        },
        searchInputPlaceholder: '',
        createSearchChoicePosition: 'top',
        shouldFocusInput: function(instance) {
            var supportsTouchEvents = (('ontouchstart' in window) ||
                (navigator.msMaxTouchPoints > 0));
            if (!supportsTouchEvents) {
                return true;
            }
            if (instance.opts.minimumResultsForSearch < 0) {
                return false;
            }
            return true;
        }
    };
    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        },
        util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        },
        "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };
}(jQuery));
(function(f) {
    f.fn.marquee = function(x) {
        return this.each(function() {
            var a = f.extend({}, f.fn.marquee.defaults, x),
                b = f(this),
                c, t, e = 3,
                y = "animation-play-state",
                p = !1,
                E = function(a, b, c) {
                    for (var e = ["webkit", "moz", "MS", "o", ""], d = 0; d < e.length; d++) e[d] || (b = b.toLowerCase()), a.addEventListener(e[d] + b, c, !1)
                },
                F = function(a) {
                    var b = [],
                        c;
                    for (c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                    b.push();
                    return "{" + b.join(",") + "}"
                },
                l = {
                    pause: function() {
                        p && a.allowCss3Support ? c.css(y, "paused") : f.fn.pause && c.pause();
                        b.data("runningStatus",
                            "paused");
                        b.trigger("paused")
                    },
                    resume: function() {
                        p && a.allowCss3Support ? c.css(y, "running") : f.fn.resume && c.resume();
                        b.data("runningStatus", "resumed");
                        b.trigger("resumed")
                    },
                    toggle: function() {
                        l["resumed" == b.data("runningStatus") ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout(b.timer);
                        b.find("*").addBack().unbind();
                        b.html(b.find(".js-marquee:first").html())
                    }
                };
            if ("string" === typeof x) f.isFunction(l[x]) && (c || (c = b.find(".js-marquee-wrapper")), !0 === b.data("css3AnimationIsSupported") && (p = !0), l[x]());
            else {
                var u;
                f.each(a, function(c, d) {
                    u = b.attr("data-" + c);
                    if ("undefined" !== typeof u) {
                        switch (u) {
                            case "true":
                                u = !0;
                                break;
                            case "false":
                                u = !1
                        }
                        a[c] = u
                    }
                });
                a.speed && (a.duration = parseInt(b.width(), 10) / a.speed * 1E3);
                var v = "up" == a.direction || "down" == a.direction;
                a.gap = a.duplicated ? parseInt(a.gap) : 0;
                b.wrapInner('<div class="js-marquee"></div>');
                var h = b.find(".js-marquee").css({
                    "margin-right": a.gap,
                    "float": "left"
                });
                a.duplicated && h.clone(!0).appendTo(b);
                b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
                c = b.find(".js-marquee-wrapper");
                if (v) {
                    var k = b.height();
                    c.removeAttr("style");
                    b.height(k);
                    b.find(".js-marquee").css({
                        "float": "none",
                        "margin-bottom": a.gap,
                        "margin-right": 0
                    });
                    a.duplicated && b.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    });
                    var q = b.find(".js-marquee:first").height() + a.gap;
                    a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10) * a.duration, a.duration *= parseInt(q, 10) / parseInt(k, 10)) : a.duration *= (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10)
                } else {
                    var m =
                        b.find(".js-marquee:first").width() + a.gap;
                    var n = b.width();
                    a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10) * a.duration, a.duration *= parseInt(m, 10) / parseInt(n, 10)) : a.duration *= (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10)
                }
                a.duplicated && (a.duration /= 2);
                if (a.allowCss3Support) {
                    h = document.body || document.createElement("div");
                    var g = "marqueeAnimation-" + Math.floor(1E7 * Math.random()),
                        A = ["Webkit", "Moz", "O", "ms", "Khtml"],
                        B = "animation",
                        d = "",
                        r = "";
                    h.style.animation &&
                        (r = "@keyframes " + g + " ", p = !0);
                    if (!1 === p)
                        for (var z = 0; z < A.length; z++)
                            if (void 0 !== h.style[A[z] + "AnimationName"]) {
                                h = "-" + A[z].toLowerCase() + "-";
                                B = h + B;
                                y = h + y;
                                r = "@" + h + "keyframes " + g + " ";
                                p = !0;
                                break
                            }
                    p && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s infinite " + a.css3easing, b.data("css3AnimationIsSupported", !0))
                }
                var C = function() {
                        c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + q + "px") + ")")
                    },
                    D = function() {
                        c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + m + "px") + ")")
                    };
                a.duplicated ?
                    (v ? a.startVisible ? c.css("transform", "translateY(0)") : c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + (2 * q - a.gap) + "px") + ")") : a.startVisible ? c.css("transform", "translateX(0)") : c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + (2 * m - a.gap) + "px") + ")"), a.startVisible || (e = 1)) : a.startVisible ? e = 2 : v ? C() : D();
                var w = function() {
                    a.duplicated && (1 === e ? (a._originalDuration = a.duration, a.duration = v ? "up" == a.direction ? a.duration + k / (q / a.duration) : 2 * a.duration : "left" == a.direction ? a.duration + n /
                        (m / a.duration) : 2 * a.duration, d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), e++) : 2 === e && (a.duration = a._originalDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), e++));
                    v ? a.duplicated ? (2 < e && c.css("transform", "translateY(" + ("up" == a.direction ? 0 : "-" + q + "px") + ")"), t = {
                        transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : 0) + ")"
                    }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), t = {
                        transform: "translateY(" +
                            ("up" == a.direction ? "-" + q + "px" : k + "px") + ")"
                    }, e++) : 3 === e && (a.duration = a._completeDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), C()) : (C(), t = {
                        transform: "translateY(" + ("up" == a.direction ? "-" + c.height() + "px" : k + "px") + ")"
                    }) : a.duplicated ? (2 < e && c.css("transform", "translateX(" + ("left" == a.direction ? 0 : "-" + m + "px") + ")"), t = {
                        transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : 0) + ")"
                    }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing),
                        t = {
                            transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
                        }, e++) : 3 === e && (a.duration = a._completeDuration, d && (g += "0", r = f.trim(r) + "0 ", d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), D()) : (D(), t = {
                        transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
                    });
                    b.trigger("beforeStarting");
                    if (p) {
                        c.css(B, d);
                        var h = r + " { 100%  " + F(t) + "}",
                            l = c.find("style");
                        0 !== l.length ? l.filter(":last").html(h) : f("head").append("<style>" + h + "</style>");
                        E(c[0], "AnimationIteration", function() {
                            b.trigger("finished")
                        });
                        E(c[0], "AnimationEnd", function() {
                            w();
                            b.trigger("finished")
                        })
                    } else c.animate(t, a.duration, a.easing, function() {
                        b.trigger("finished");
                        a.pauseOnCycle ? b.timer = setTimeout(w, a.delayBeforeStart) : w()
                    });
                    b.data("runningStatus", "resumed")
                };
                b.bind("pause", l.pause);
                b.bind("resume", l.resume);
                a.pauseOnHover && (b.bind("mouseenter", l.pause), b.bind("mouseleave", l.resume));
                p && a.allowCss3Support ? w() : b.timer = setTimeout(w, a.delayBeforeStart)
            }
        })
    };
    f.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1E3,
        direction: "left",
        duplicated: !1,
        duration: 5E3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1,
        startVisible: !1
    }
})(jQuery);
(function($) {
    jQuery.fn.ebcaptcha = function(options) {
        var element = this;
        var submit = $(this).find('input[type=submit]');
        $('<label id="ebcaptchatext"></label>').insertBefore(submit);
        $('<input type="text" class="textbox" id="ebcaptchainput" style="width: 90px;" />').insertBefore(submit);
        $('<div class="captha_txt">Please enter correct captcha</div>').insertBefore(submit);
        $('<div class="getstart_btn catptch_btn">Get Started</div>').insertBefore(submit);
        var input = this.find('#ebcaptchainput');
        var label = this.find('#ebcaptchatext');
        $(element).find('input[type=submit]').attr('disabled', 'disabled');
        $(element).find('input[type=submit]').hide();
        var randomNr1 = 0;
        var randomNr2 = 0;
        var totalNr = 0;
        randomNr1 = Math.floor(Math.random() * 10);
        randomNr2 = Math.floor(Math.random() * 10);
        totalNr = randomNr1 + randomNr2;
        var texti = "What is " + randomNr1 + " + " + randomNr2;
        $(label).text(texti);
        $(input).keyup(function() {
            var nr = $(this).val();
            if (nr == totalNr) {
                $(element).find('.captha_txt').hide();
                $(element).find('.catptch_btn').hide();
                $(element).find('input[type=submit]').show();
                $(element).find('input[type=submit]').removeAttr('disabled');
            } else {
                $(element).find('input[type=submit]').hide();
                $(element).find('input[type=submit]').attr('disabled', 'disabled');
                $(element).find('.catptch_btn').show();
            }
        });
        $(document).keypress(function(e) {
            if (e.which == 13) {
                if ((element).find('form input[type=submit]').is(':disabled') == true) {
                    e.preventDefault();
                    return false;
                }
            }
        });
    };
})(jQuery);
$ = jQuery;
$(function() {
    $('#homecountryTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true
    });
    var $tabs = jQuery('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true
    });
    var swiper = new Swiper('.testimonials_slider .swiper-container', {
        pagination: '.testimonials_slider .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });
    var swiper = new Swiper('.banner_slider .swiper-container', {
        pagination: '.banner_slider .swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });
    $('.contact_address_tab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true
    });
    $(".contact_address_counterlist ul li").click(function(event) {
        var this_data_id = $(this).attr("data-id");
        if (!$(this).hasClass('active')) {
            $(".contact_address_counterlist ul li").removeClass('active');
            $(this).addClass('active');
            $(".contact_address_city_info_list .contact_address_city_info").hide();
            $(".contact_address_city_info_list .contact_address_city_info#" + this_data_id).show();
            if (!$(".contact_address_city_info#" + this_data_id + " .contact_address_tab_list li:first-child").hasClass('r-tabs-state-active')) {
                $(".contact_address_city_info#" + this_data_id + " .contact_address_tab_list li:first-child a").trigger("click");
                $(".contact_address_city_info#" + this_data_id + " .contact_address_tab_list li:first-child").addClass('r-tabs-state-active');
            }
        }
    });
    jQuery(window).load(function() {
        var thingslist_length = jQuery(".things_next_prev .nav-pills li").length;
        var thingslist_index = jQuery(".things_next_prev .nav-pills li.r-tabs-state-active").index();
        if (thingslist_index >= 1) {
            jQuery(".things_next_prev .things_prev_btn").show();
        } else {
            jQuery(".things_next_prev .things_prev_btn").hide();
        }
        if (thingslist_index >= (thingslist_length - 1)) {
            jQuery(".things_next_prev .things_next_btn").hide();
        }
        jQuery(document).on('click', '.things_next_prev .things_prev_btn', function(event) {
            jQuery(".things_next_prev .things_next_btn").show();
            jQuery(this).parents(".things_next_prev").find(".nav-pills li.r-tabs-state-active").prev("li").find("a").trigger('click');
            var this_index = jQuery(this).parents(".things_next_prev").find(".nav-pills li.r-tabs-state-active").index();
            if (this_index <= 0) {
                jQuery(this).hide();
            }
        });
        jQuery(document).on('click', '.things_next_prev .things_next_btn', function(event) {
            jQuery(".things_next_prev .things_prev_btn").show();
            jQuery(this).parents(".things_next_prev").find(".nav-pills li.r-tabs-state-active").next("li").find("a").trigger('click');
            var this_index2 = jQuery(this).parents(".things_next_prev").find(".nav-pills li.r-tabs-state-active").index();
            if (this_index2 >= (thingslist_length - 1)) {
                jQuery(this).hide();
            }
        });
        var ww = $(window).innerWidth();
        if (ww <= 768) {}
    });
    $(".credentials_list ul li h5").append("<span class='credentials_list_arrow'></span>");
    jQuery(".credentials_list ul li h5").click(function(event) {
        var thisclass = jQuery(this).parent("li").attr("class");
        if (thisclass != "open_credentials_list") {
            jQuery(".credentials_list ul li").removeClass('open_credentials_list');
            jQuery(this).parent("li").addClass('open_credentials_list');
            jQuery(".credentials_list ul li .credentials_cont").hide();
            jQuery(this).parent("li").find(".credentials_cont").slideDown();
        } else {
            jQuery(this).parent("li").removeClass('open_credentials_list');
            jQuery(this).parent("li").find(".credentials_cont").slideUp();
        }
    });
    $('.conciergetab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true
    });
    $('.ielschoosecoursetab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        activate: function(e, tab) {
            console.log(tab.panel.selector);
            if (!$(tab.panel.selector + " .ielschoosecourse_info .ielschoosecoursetab ul.ielschoosecourse_list li:first-child").hasClass('r-tabs-state-active') && !$(tab.panel.selector + " ul").hasClass('active_tab')) {
                $(tab.panel.selector + " .ielschoosecourse_info .ielschoosecoursetab ul.ielschoosecourse_list li:first-child a").trigger("click");
                $(tab.panel.selector + " .ielschoosecourse_info .ielschoosecoursetab ul.ielschoosecourse_list").addClass('active_tab');
            }
        }
    });
    $('#chooseclass_horizontalTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true
    });
    jQuery(document).on('click', '.banner_slider .banner_slider_listcont .applynow_btn a, .settlemalta_info .settlemalta_cont .applynow_popup, .button_apply_popup, .speaktoacounsellor_btn, .getstarted_btn', function(event) {
        event.preventDefault();
        jQuery(".product_popup_form_info").show();
    });
    jQuery(document).on('click', '.product_popup_form_infolist .product_popup_form_bg, .product_popup_form_list .close_popup', function(event) {
        event.preventDefault();
        jQuery(".product_popup_form_list ul li input").val("");
        jQuery(".product_popup_form_info").hide();
    });
    jQuery(document).on('click', '.register_now_btn_small', function(event) {
        event.preventDefault();
        jQuery(".register_now_btn").show();
    });
    jQuery(document).on('click', '.register_now_btn .product_popup_form_infolist .product_popup_form_bg, .register_now_btn .product_popup_form_list .close_popup', function(event) {
        event.preventDefault();
        jQuery(".register_now_btn .product_popup_form_list ul li input").val("");
        jQuery(".register_now_btn").hide();
    });
    $('.singleopening_rightview .applytojob_list ul li.uploadresume .wpcf7-file').change(function(e) {
        var file = e.target.files[0].name;
        $(this).parents(".uploadresume").find('.file_val').text(file);
    });
    var ww = $(window).width();
    if (ww >= 1050) {
        var $sticky = $('.travelexpertsupport_list');
        var $stickyrStopper = $('#footer-bottom');
        var $impact_company_info = $(".impact_company_info");
        if (!!$sticky.offset()) {
            var generalSidebarHeight = $sticky.innerHeight();
            var stickyTop = $sticky.offset().top;
            var stickOffset = 0;
            var stickyStopperPosition = $stickyrStopper.offset().top;
            var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
            var diff = stopPoint + stickOffset;
            var impact_company_Offset = 0;
            if (!!$impact_company_info.offset()) {
                impact_company_Offset = $impact_company_info.offset().top;
            }
            $(window).scroll(function() {
                var windowTop = $(window).scrollTop();
                if (stopPoint < windowTop) {
                    $sticky.css({
                        position: 'absolute',
                        top: diff
                    });
                } else if (impact_company_Offset <= windowTop + generalSidebarHeight + 160) {
                    $sticky.css({
                        position: 'relative',
                        top: 'initial',
                        width: '100%'
                    });
                    $sticky.parents(".et_pb_column_1_4").css({
                        'z-index': 9
                    });
                } else if (stickyTop < windowTop + stickOffset) {
                    $sticky.css({
                        position: 'fixed',
                        top: stickOffset + 110,
                        width: '310px'
                    });
                    $sticky.parents(".et_pb_column_1_4").css({
                        'z-index': 99
                    });
                } else {
                    $sticky.css({
                        position: 'relative',
                        top: 'initial',
                        width: '100%'
                    });
                    $sticky.parents(".et_pb_column_1_4").css({
                        'z-index': 9
                    });
                }
            });
        }
    }
    $('.popup_videos').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            },
            srcAction: 'iframe_src',
        }
    });
});
$(function() {
    jQuery(document).on('click', '.product_popup_form_list ul li.wa-toggle-btn-list .toggle.btn', function(event) {
        if ($(this).hasClass('off')) {
            $(".product_popup_form_list ul li.whatsapp_country_code").show();
        } else {
            $("#whatsapp_number").val("");
            $(".product_popup_form_list ul li.whatsapp_country_code").hide();
        }
    });
    jQuery(document).on('change', '.product_popup_form_list ul li.phonenumber select.country_list', function(event) {
        var country_code = jQuery(this).find(":selected").text();
        jQuery(".country_code").val(country_code);
    });
    jQuery(document).on('change', '.product_popup_form_list ul li.phonenumber select.whatsapp_country_list', function(event) {
        var whatsapp_country_code = jQuery(this).find(":selected").text();
        jQuery(".whatsapp_country_code").val(whatsapp_country_code);
    });
    jQuery(document).on('change', '.inner_getintouch_info ul li select.country_list', function(event) {
        var country_code = jQuery(this).find(":selected").text();
        jQuery(".country_code").val(country_code);
    });
    $('.marquee').marquee({
        duration: 10000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'down',
        duplicated: true
    });
});
jQuery(window).load(function() {
    var country_code = jQuery(".product_popup_form_list ul li.phonenumber select.country_list option:selected").text();
    var whatsapp_country_code = jQuery(".product_popup_form_list ul li.phonenumber select.whatsapp_country_list option:selected").text();
    jQuery(".country_code").val(country_code);
    jQuery(".whatsapp_country_code").val(whatsapp_country_code);
});
$(function() {
    $('#applyform2').ebcaptcha();
    $(document).on("click", ".catptch_btn", function() {
        $(".captha_txt").show();
    });
}); +
function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.toggle"),
                f = "object" == typeof b && b;
            e || d.data("bs.toggle", e = new c(this, f)), "string" == typeof b && e[b] && e[b]()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, this.defaults(), c), this.render()
    };
    c.VERSION = "2.2.0", c.DEFAULTS = {
        on: "On",
        off: "Off",
        onstyle: "primary",
        offstyle: "default",
        size: "normal",
        style: "",
        width: null,
        height: null
    }, c.prototype.defaults = function() {
        return {
            on: this.$element.attr("data-on") || c.DEFAULTS.on,
            off: this.$element.attr("data-off") || c.DEFAULTS.off,
            onstyle: this.$element.attr("data-onstyle") || c.DEFAULTS.onstyle,
            offstyle: this.$element.attr("data-offstyle") || c.DEFAULTS.offstyle,
            size: this.$element.attr("data-size") || c.DEFAULTS.size,
            style: this.$element.attr("data-style") || c.DEFAULTS.style,
            width: this.$element.attr("data-width") || c.DEFAULTS.width,
            height: this.$element.attr("data-height") || c.DEFAULTS.height
        }
    }, c.prototype.render = function() {
        this._onstyle = "btn-" + this.options.onstyle, this._offstyle = "btn-" + this.options.offstyle;
        var b = "large" === this.options.size ? "btn-lg" : "small" === this.options.size ? "btn-sm" : "mini" === this.options.size ? "btn-xs" : "",
            c = a('<label class="btn">').html(this.options.on).addClass(this._onstyle + " " + b),
            d = a('<label class="btn">').html(this.options.off).addClass(this._offstyle + " " + b + " active"),
            e = a('<span class="toggle-handle btn btn-default">').addClass(b),
            f = a('<div class="toggle-group">').append(c, d, e),
            g = a('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked") ? this._onstyle : this._offstyle + " off").addClass(b).addClass(this.options.style);
        this.$element.wrap(g), a.extend(this, {
            $toggle: this.$element.parent(),
            $toggleOn: c,
            $toggleOff: d,
            $toggleGroup: f
        }), this.$toggle.append(f);
        var h = this.options.width || Math.max(c.outerWidth(), d.outerWidth()) + e.outerWidth() / 2,
            i = this.options.height || Math.max(c.outerHeight(), d.outerHeight());
        c.addClass("toggle-on"), d.addClass("toggle-off"), this.$toggle.css({
            width: h,
            height: i
        }), this.options.height && (c.css("line-height", c.height() + "px"), d.css("line-height", d.height() + "px")), this.update(!0), this.trigger(!0)
    }, c.prototype.toggle = function() {
        this.$element.prop("checked") ? this.off() : this.on()
    }, c.prototype.on = function(a) {
        return this.$element.prop("disabled") ? !1 : (this.$toggle.removeClass(this._offstyle + " off").addClass(this._onstyle), this.$element.prop("checked", !0), void(a || this.trigger()))
    }, c.prototype.off = function(a) {
        return this.$element.prop("disabled") ? !1 : (this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + " off"), this.$element.prop("checked", !1), void(a || this.trigger()))
    }, c.prototype.enable = function() {
        this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1)
    }, c.prototype.disable = function() {
        this.$toggle.attr("disabled", "disabled"), this.$element.prop("disabled", !0)
    }, c.prototype.update = function(a) {
        this.$element.prop("disabled") ? this.disable() : this.enable(), this.$element.prop("checked") ? this.on(a) : this.off(a)
    }, c.prototype.trigger = function(b) {
        this.$element.off("change.bs.toggle"), b || this.$element.change(), this.$element.on("change.bs.toggle", a.proxy(function() {
            this.update()
        }, this))
    }, c.prototype.destroy = function() {
        this.$element.off("change.bs.toggle"), this.$toggleGroup.remove(), this.$element.removeData("bs.toggle"), this.$element.unwrap()
    };
    var d = a.fn.bootstrapToggle;
    a.fn.bootstrapToggle = b, a.fn.bootstrapToggle.Constructor = c, a.fn.toggle.noConflict = function() {
        return a.fn.bootstrapToggle = d, this
    }, a(function() {
        a("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()
    }), a(document).on("click.bs.toggle", "div[data-toggle^=toggle]", function(b) {
        var c = a(this).find("input[type=checkbox]");
        c.bootstrapToggle("toggle"), b.preventDefault()
    })
}(jQuery);