if (!window.telepartyLibLoaded) {
    console.log("Teleparty: Injecting Libraries"), window.telepartyLibLoaded = !0, function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a);
        } : b(a);
    }("undefined" != typeof window ? window : this, (function(a, b) {
        var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function(a, b) {
            return new n.fn.init(a, b);
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
            return b.toUpperCase();
        };
        function s(a) {
            var b = "length" in a && a.length, c = n.type(a);
            return "function" !== c && !n.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a));
        }
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this);
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b;
            },
            each: function(a, b) {
                return n.each(this, a, b);
            },
            map: function(a) {
                return this.pushStack(n.map(this, (function(b, c) {
                    return a.call(b, c, b);
                })));
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(a) {
                var b = this.length, c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: f,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
            h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
            g !== (d = a[b]) && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
            f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g;
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a);
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a);
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window;
            },
            isNumeric: function(a) {
                return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
            },
            isPlainObject: function(a) {
                return "object" === n.type(a) && !a.nodeType && !n.isWindow(a) && !(a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf"));
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
            },
            globalEval: function(a) {
                var b, c = eval;
                (a = n.trim(a)) && (1 === a.indexOf("use strict") ? ((b = l.createElement("script")).text = a, 
                l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r);
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
            },
            each: function(a, b, c) {
                var e = 0, f = a.length, g = s(a);
                if (c) {
                    if (g) for (;f > e && !1 !== b.apply(a[e], c); e++) ; else for (e in a) if (!1 === b.apply(a[e], c)) break;
                } else if (g) for (;f > e && !1 !== b.call(a[e], e, a[e]); e++) ; else for (e in a) if (!1 === b.call(a[e], e, a[e])) break;
                return a;
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "");
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
                c;
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : g.call(b, a, c);
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a;
            },
            grep: function(a, b, c) {
                for (var e = [], f = 0, g = a.length, h = !c; g > f; f++) !b(a[f], f) !== h && e.push(a[f]);
                return e;
            },
            map: function(a, b, c) {
                var d, f = 0, g = a.length, i = [];
                if (s(a)) for (;g > f; f++) null != (d = b(a[f], f, c)) && i.push(d); else for (f in a) null != (d = b(a[f], f, c)) && i.push(d);
                return e.apply([], i);
            },
            guid: 1,
            proxy: function(a, b) {
                var c, e, f;
                return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
                (f = function() {
                    return a.apply(b || this, e.concat(d.call(arguments)));
                }).guid = a.guid = a.guid || n.guid++, f) : void 0;
            },
            now: Date.now,
            support: k
        }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(a, b) {
            h["[object " + b + "]"] = b.toLowerCase();
        }));
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
                return a === b && (l = !0), 0;
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1;
            }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d != d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
            }, ea = function() {
                m();
            };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
            } catch (fa) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b));
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                        a.length = c - 1;
                    }
                };
            }
            function ga(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w, x;
                if ((b ? b.ownerDocument || b : v) !== n && m(b), d = d || [], k = (b = b || n).nodeType, 
                "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
                if (!e && p) {
                    if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                        if (9 === k) {
                            if (!(h = b.getElementById(j)) || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d;
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                        d;
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                        d;
                    }
                    if (c.qsa && (!q || !q.test(a))) {
                        if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                            for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                            s = "[id='" + s + "'] ", l = o.length; l--; ) o[l] = s + ra(o[l]);
                            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                        }
                        if (x) try {
                            return H.apply(d, w.querySelectorAll(x)), d;
                        } catch (y) {} finally {
                            r || b.removeAttribute("id");
                        }
                    }
                }
                return i(a.replace(R, "$1"), b, d, e);
            }
            function ha() {
                var a = [];
                return function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
                };
            }
            function ia(a) {
                return a[u] = !0, a;
            }
            function ja(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b);
                } catch (c) {
                    return !1;
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null;
                }
            }
            function ka(a, b) {
                for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
            }
            function la(a, b) {
                var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
                return a ? 1 : -1;
            }
            function ma(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a;
                };
            }
            function na(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a;
                };
            }
            function oa(a) {
                return ia((function(b) {
                    return b = +b, ia((function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }));
                }));
            }
            function pa(a) {
                return a && void 0 !== a.getElementsByTagName && a;
            }
            for (b in c = ga.support = {}, f = ga.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName;
            }, m = ga.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
                (e = g.defaultView) && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
                p = !f(g), c.attributes = ja((function(a) {
                    return a.className = "i", !a.getAttribute("className");
                })), c.getElementsByTagName = ja((function(a) {
                    return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
                })), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja((function(a) {
                    return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
                })), c.getById ? (d.find.ID = function(a, b) {
                    if (void 0 !== b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [ c ] : [];
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ca, da);
                    return function(a) {
                        return a.getAttribute("id") === b;
                    };
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ca, da);
                    return function(a) {
                        var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b;
                    };
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
                } : function(a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                        return d;
                    }
                    return f;
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return p ? b.getElementsByClassName(a) : void 0;
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja((function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                    a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                    a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                    a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                    a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
                })), ja((function(a) {
                    var b = g.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                    a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                    q.push(",.*:");
                }))), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja((function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
                })), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
                b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                } : function(a, b) {
                    if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                    return !1;
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d || (1 & (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                    if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return la(a, b);
                    for (c = a; c = c.parentNode; ) h.unshift(c);
                    for (c = b; c = c.parentNode; ) i.unshift(c);
                    for (;h[d] === i[d]; ) d++;
                    return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
                }, g) : n;
            }, ga.matches = function(a, b) {
                return ga(a, null, null, b);
            }, ga.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
                } catch (e) {}
                return ga(b, n, null, [ a ]).length > 0;
            }, ga.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }, ga.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
            }, ga.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }, ga.uniqueSort = function(a) {
                var b, d = [], e = 0, f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                    for (;e--; ) a.splice(d[e], 1);
                }
                return k = null, a;
            }, e = ga.getText = function(a) {
                var b, c = "", d = 0, f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                    } else if (3 === f || 4 === f) return a.nodeValue;
                } else for (;b = a[d++]; ) c += e(b);
                return c;
            }, (d = ga.selectors = {
                cacheLength: 50,
                createPseudo: ia,
                match: X,
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
                        return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                        "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                        a;
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                        a[2] = c.slice(0, b)), a.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ca, da).toLowerCase();
                        return "*" === a ? function() {
                            return !0;
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b;
                        };
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, (function(a) {
                            return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "");
                        }));
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = ga.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                        };
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode;
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (;p; ) {
                                        for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                    for (n = (j = (k = q[u] || (q[u] = {}))[a] || [])[0] === w && j[1], m = j[0] === w && j[2], 
                                    l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [ w, n, m ];
                                        break;
                                    }
                                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                                l !== b)); ) ;
                                return (m -= e) === d || m % d == 0 && m / d >= 0;
                            }
                        };
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia((function(a, c) {
                            for (var d, f = e(a, b), g = f.length; g--; ) a[d = J(a, f[g])] = !(c[d] = f[g]);
                        })) : function(a) {
                            return e(a, 0, c);
                        }) : e;
                    }
                },
                pseudos: {
                    not: ia((function(a) {
                        var b = [], c = [], d = h(a.replace(R, "$1"));
                        return d[u] ? ia((function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                        })) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                        };
                    })),
                    has: ia((function(a) {
                        return function(b) {
                            return ga(a, b).length > 0;
                        };
                    })),
                    contains: ia((function(a) {
                        return a = a.replace(ca, da), function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                        };
                    })),
                    lang: ia((function(a) {
                        return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1;
                        };
                    })),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function(a) {
                        return a === o;
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                    },
                    enabled: function(a) {
                        return !1 === a.disabled;
                    },
                    disabled: function(a) {
                        return !0 === a.disabled;
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected;
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a);
                    },
                    header: function(a) {
                        return Z.test(a.nodeName);
                    },
                    input: function(a) {
                        return Y.test(a.nodeName);
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b;
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                    },
                    first: oa((function() {
                        return [ 0 ];
                    })),
                    last: oa((function(a, b) {
                        return [ b - 1 ];
                    })),
                    eq: oa((function(a, b, c) {
                        return [ 0 > c ? c + b : c ];
                    })),
                    even: oa((function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a;
                    })),
                    odd: oa((function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a;
                    })),
                    lt: oa((function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                        return a;
                    })),
                    gt: oa((function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                        return a;
                    }))
                }
            }).pseudos.nth = d.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
            for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);
            function qa() {}
            function ra(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d;
            }
            function sa(a, b, c) {
                var d = b.dir, e = c && "parentNode" === d, f = x++;
                return b.first ? function(b, c, f) {
                    for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
                } : function(b, c, g) {
                    var h, i, j = [ w, f ];
                    if (g) {
                        for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                        if ((h = (i = b[u] || (b[u] = {}))[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                        if (i[d] = j, j[2] = a(b, c, g)) return !0;
                    }
                };
            }
            function ta(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                    return !0;
                } : a[0];
            }
            function va(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
                j && b.push(h));
                return g;
            }
            function wa(a, b, c, d, e, f) {
                return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia((function(f, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = f || function(a, b, c) {
                        for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
                        return c;
                    }(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) for (j = va(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    if (f) {
                        if (e || a) {
                            if (e) {
                                for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i);
                            }
                            for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
                }));
            }
            function xa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa((function(a) {
                    return a === b;
                }), h, !0), l = sa((function(a) {
                    return J(b, a) > -1;
                }), h, !0), m = [ function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e;
                } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                    if ((c = d.filter[a[i].type].apply(null, a[i].matches))[u]) {
                        for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                    }
                    m.push(c);
                }
                return ta(m);
            }
            function ya(a, b) {
                var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                    var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            for (m = 0; o = a[m++]; ) if (o(l, g, h)) {
                                i.push(l);
                                break;
                            }
                            k && (w = v);
                        }
                        c && ((l = !o && l) && p--, f && r.push(l));
                    }
                    if (p += q, c && q !== p) {
                        for (m = 0; o = b[m++]; ) o(r, s, g, h);
                        if (f) {
                            if (p > 0) for (;q--; ) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s);
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                    }
                    return k && (w = v, j = t), r;
                };
                return c ? ia(f) : f;
            }
            return qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = d.preFilter; h; ) {
                    for (g in (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                    c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(R, " ")
                    }), h = h.slice(c.length)), d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break;
                }
                return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
            }, h = ga.compile = function(a, b) {
                var c, d = [], e = [], f = A[a + " "];
                if (!f) {
                    for (b || (b = g(a)), c = b.length; c--; ) (f = xa(b[c]))[u] ? d.push(f) : e.push(f);
                    (f = A(a, ya(e, d))).selector = a;
                }
                return f;
            }, i = ga.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if ((j = o[0] = o[0].slice(0)).length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (!(b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0])) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                    }
                    for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), !(a = f.length && ra(j))) return H.apply(e, f), e;
                        break;
                    }
                }
                return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
            m(), c.sortDetached = ja((function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"));
            })), ja((function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
            })) || ka("type|href|height|width", (function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
            })), c.attributes && ja((function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
            })) || ka("value", (function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
            })), ja((function(a) {
                return null == a.getAttribute("disabled");
            })) || ka(K, (function(a, b, c) {
                var d;
                return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
            })), ga;
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
        n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
        function x(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, (function(a, d) {
                return !!b.call(a, d, a) !== c;
            }));
            if (b.nodeType) return n.grep(a, (function(a) {
                return a === b !== c;
            }));
            if ("string" == typeof b) {
                if (w.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a);
            }
            return n.grep(a, (function(a) {
                return g.call(b, a) >= 0 !== c;
            }));
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, (function(a) {
                return 1 === a.nodeType;
            })));
        }, n.fn.extend({
            find: function(a) {
                var b, c = this.length, d = [], e = this;
                if ("string" != typeof a) return this.pushStack(n(a).filter((function() {
                    for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
                })));
                for (b = 0; c > b; b++) n.find(a, e[b], d);
                return (d = this.pushStack(c > 1 ? n.unique(d) : d)).selector = this.selector ? this.selector + " " + a : a, 
                d;
            },
            filter: function(a) {
                return this.pushStack(x(this, a || [], !1));
            },
            not: function(a) {
                return this.pushStack(x(this, a || [], !0));
            },
            is: function(a) {
                return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
            }
        });
        var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (!(c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a)) || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                    v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                return (d = l.getElementById(c[2])) && d.parentNode && (this.length = 1, this[0] = d), 
                this.context = l, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
            this.context = a.context), n.makeArray(a, this));
        }).prototype = n.fn, y = n(l);
        var B = /^(?:parents|prev(?:Until|All))/, C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function D(a, b) {
            for (;(a = a[b]) && 1 !== a.nodeType; ) ;
            return a;
        }
        n.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a);
                }
                return d;
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c;
            }
        }), n.fn.extend({
            has: function(a) {
                var b = n(a, this), c = b.length;
                return this.filter((function() {
                    for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
                }));
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                    f.push(c);
                    break;
                }
                return this.pushStack(f.length > 1 ? n.unique(f) : f);
            },
            index: function(a) {
                return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(a, b) {
                return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
            }
        }), n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function(a) {
                return n.dir(a, "parentNode");
            },
            parentsUntil: function(a, b, c) {
                return n.dir(a, "parentNode", c);
            },
            next: function(a) {
                return D(a, "nextSibling");
            },
            prev: function(a) {
                return D(a, "previousSibling");
            },
            nextAll: function(a) {
                return n.dir(a, "nextSibling");
            },
            prevAll: function(a) {
                return n.dir(a, "previousSibling");
            },
            nextUntil: function(a, b, c) {
                return n.dir(a, "nextSibling", c);
            },
            prevUntil: function(a, b, c) {
                return n.dir(a, "previousSibling", c);
            },
            siblings: function(a) {
                return n.sibling((a.parentNode || {}).firstChild, a);
            },
            children: function(a) {
                return n.sibling(a.firstChild);
            },
            contents: function(a) {
                return a.contentDocument || n.merge([], a.childNodes);
            }
        }, (function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
                this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
            };
        }));
        var H, E = /\S+/g, F = {};
        function I() {
            l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
            n.ready();
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? F[a] || function(a) {
                var b = F[a] = {};
                return n.each(a.match(E) || [], (function(a, c) {
                    b[c] = !0;
                })), b;
            }(a) : n.extend({}, a);
            var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (!1 === h[g].apply(l[0], l[1]) && a.stopOnFalse) {
                    b = !1;
                    break;
                }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
            }, k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, (function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                            }));
                        }(arguments), d ? f = h.length : b && (e = c, j(b));
                    }
                    return this;
                },
                remove: function() {
                    return h && n.each(arguments, (function(a, b) {
                        for (var c; (c = n.inArray(b, h, c)) > -1; ) h.splice(c, 1), d && (f >= c && f--, 
                        g >= c && g--);
                    })), this;
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                },
                empty: function() {
                    return h = [], f = 0, this;
                },
                disable: function() {
                    return h = i = b = void 0, this;
                },
                disabled: function() {
                    return !h;
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this;
                },
                locked: function() {
                    return !i;
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = [ a, (b = b || []).slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                    this;
                },
                fire: function() {
                    return k.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!c;
                }
            };
            return k;
        }, n.extend({
            Deferred: function(a) {
                var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                    state: function() {
                        return c;
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this;
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred((function(c) {
                            n.each(b, (function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]]((function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                                }));
                            })), a = null;
                        })).promise();
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d;
                    }
                }, e = {};
                return d.pipe = d.then, n.each(b, (function(a, f) {
                    var g = f[2], h = f[3];
                    d[f[1]] = g.add, h && g.add((function() {
                        c = h;
                    }), b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this;
                    }, e[f[0] + "With"] = g.fireWith;
                })), d.promise(e), a && a.call(e, e), e;
            },
            when: function(a) {
                var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                    };
                };
                if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                return f || g.resolveWith(k, c), g.promise();
            }
        }), n.fn.ready = function(a) {
            return n.ready.promise().done(a), this;
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0);
            },
            ready: function(a) {
                (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
                n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
            }
        }), n.ready.promise = function(b) {
            return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
            a.addEventListener("load", I, !1))), H.promise(b);
        }, n.ready.promise();
        var J = n.access = function(a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = null == c;
            if ("object" === n.type(c)) for (h in e = !0, c) n.access(a, b, h, c[h], !0, f, g); else if (void 0 !== d && (e = !0, 
            n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c);
            })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        };
        function K() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {};
                }
            }), this.expando = n.expando + K.uid++;
        }
        n.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
            key: function(a) {
                if (!K.accepts(a)) return 0;
                var b = {}, c = a[this.expando];
                if (!c) {
                    c = K.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b);
                    } catch (d) {
                        b[this.expando] = c, n.extend(a, b);
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c;
            },
            set: function(a, b, c) {
                var d, e = this.key(a), f = this.cache[e];
                if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
                return f;
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b];
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? void 0 !== (d = this.get(a, b)) ? d : this.get(a, n.camelCase(b)) : (this.set(a, b, c), 
                void 0 !== c ? c : b);
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a), g = this.cache[f];
                if (void 0 === b) this.cache[f] = {}; else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : d = (d = e) in g ? [ d ] : d.match(E) || []), 
                    c = d.length;
                    for (;c--; ) delete g[d[c]];
                }
            },
            hasData: function(a) {
                return !n.isEmptyObject(this.cache[a[this.expando]] || {});
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]];
            }
        };
        var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
        function P(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
            "string" == typeof (c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c);
                } catch (e) {}
                M.set(a, b, c);
            } else c = void 0;
            return c;
        }
        n.extend({
            hasData: function(a) {
                return M.hasData(a) || L.hasData(a);
            },
            data: function(a, b, c) {
                return M.access(a, b, c);
            },
            removeData: function(a, b) {
                M.remove(a, b);
            },
            _data: function(a, b, c) {
                return L.access(a, b, c);
            },
            _removeData: function(a, b) {
                L.remove(a, b);
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--; ) g[c] && (0 === (d = g[c].name).indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                        P(f, d, e[d])));
                        L.set(f, "hasDataAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a ? this.each((function() {
                    M.set(this, a);
                })) : J(this, (function(b) {
                    var c, d = n.camelCase(a);
                    if (f && void 0 === b) {
                        if (void 0 !== (c = M.get(f, a))) return c;
                        if (void 0 !== (c = M.get(f, d))) return c;
                        if (void 0 !== (c = P(f, d, void 0))) return c;
                    } else this.each((function() {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                    }));
                }), null, b, arguments.length > 1, null, !0);
            },
            removeData: function(a) {
                return this.each((function() {
                    M.remove(this, a);
                }));
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
                d || []) : void 0;
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b);
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
                delete f.stop, e.call(a, (function() {
                    n.dequeue(a, b);
                }), f)), !d && f && f.empty.fire();
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add((function() {
                        L.remove(a, [ b + "queue", c ]);
                    }))
                });
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each((function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                }));
            },
            dequeue: function(a) {
                return this.each((function() {
                    n.dequeue(this, a);
                }));
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", []);
            },
            promise: function(a, b) {
                var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                    --d || e.resolveWith(f, [ f ]);
                };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) (c = L.get(f[g], a + "queueHooks")) && c.empty && (d++, 
                c.empty.add(h));
                return h(), e.promise(b);
            }
        });
        var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
        }, T = /^(?:checkbox|radio)$/i;
        !function() {
            var b = l.createDocumentFragment().appendChild(l.createElement("div")), c = l.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
            b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
            b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
        }();
        var U = "undefined";
        k.focusinBubbles = "onfocusin" in a;
        var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
        function Z() {
            return !0;
        }
        function $() {
            return !1;
        }
        function _() {
            try {
                return l.activeElement;
            } catch (a) {}
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
                if (r) for (c.handler && (c = (f = c).handler, e = f.selector), c.guid || (c.guid = n.guid++), 
                (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), j = (b = (b || "").match(E) || [ "" ]).length; j--; ) o = q = (h = Y.exec(b[j]) || [])[1], 
                p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, 
                l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || ((m = i[o] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, p, g) || a.addEventListener && a.addEventListener(o, g, !1)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                n.event.global[o] = !0);
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
                if (r && (i = r.events)) {
                    for (j = (b = (b || "").match(E) || [ "" ]).length; j--; ) if (o = q = (h = Y.exec(b[j]) || [])[1], 
                    p = (h[2] || "").split(".").sort(), o) {
                        for (l = n.event.special[o] || {}, m = i[o = (d ? l.delegateType : l.bindType) || o] || [], 
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                        !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                        k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), 
                        delete i[o]);
                    } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
                q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)).isTrigger = e ? 2 : 3, 
                b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
                o = n.event.special[q] || {}, e || !o.trigger || !1 !== o.trigger.apply(d, c))) {
                    if (!e && !o.noBubble && !n.isWindow(d)) {
                        for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                        h = g;
                        h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                    }
                    for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : o.bindType || q, 
                    (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")) && m.apply(g, c), 
                    (m = k && g[k]) && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), !1 === b.result && b.preventDefault());
                    return b.type = q, e || b.isDefaultPrevented() || o._default && !1 !== o._default.apply(p.pop(), c) || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && ((h = d[k]) && (d[k] = null), 
                    n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                    for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                    c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                    a.data = g.data, void 0 !== (e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = e) && (a.preventDefault(), 
                    a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result;
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (!0 !== i.disabled || "click" !== a.type) {
                    for (d = [], c = 0; h > c; c++) void 0 === d[e = (f = b[c]).selector + " "] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                    d[e] && d.push(f);
                    d.length && g.push({
                        elem: i,
                        handlers: d
                    });
                }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                    a;
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (d = (c = a.target.ownerDocument || l).documentElement, 
                    e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                    a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
                }
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
                d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--; ) a[c = d[b]] = f[c];
                return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
                g.filter ? g.filter(a, f) : a;
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === _() && this.blur ? (this.blur(), !1) : void 0;
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                        !1) : void 0;
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
            }
        }, n.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1);
        }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
            this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Z : $) : this.type = a, 
            b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
        }, n.Event.prototype = {
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
                this.stopPropagation();
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                    a.type = b), c;
                }
            };
        })), k.focusinBubbles || n.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a), !0);
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this, e = L.access(d, b);
                    e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
                },
                teardown: function() {
                    var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                    e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
                }
            };
        })), n.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    for (g in "string" != typeof b && (c = c || b, b = void 0), a) this.on(g, b, c, a[g], e);
                    return this;
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
                c = void 0) : (d = c, c = b, b = void 0)), !1 === d) d = $; else if (!d) return this;
                return 1 === e && (f = d, (d = function(a) {
                    return n().off(a), f.apply(this, arguments);
                }).guid = f.guid || (f.guid = n.guid++)), this.each((function() {
                    n.event.add(this, a, d, c, b);
                }));
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1);
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
                this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = $), 
                this.each((function() {
                    n.event.remove(this, a, c, b);
                }));
            },
            trigger: function(a, b) {
                return this.each((function() {
                    n.event.trigger(a, b, this);
                }));
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0;
            }
        });
        var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        function ja(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
        }
        function ka(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
        }
        function la(a) {
            var b = ga.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a;
        }
        function ma(a, b) {
            for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
        }
        function na(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) for (e in delete g.handle, 
                g.events = {}, j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
                M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
            }
        }
        function oa(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
        }
        function pa(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
        ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, 
        ia.th = ia.td, n.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
                if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), 
                d = 0, e = (f = oa(a)).length; e > d; d++) pa(f[d], g[d]);
                if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
                return (g = oa(h, "script")).length > 0 && ma(g, !i && oa(a, "script")), h;
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m]) || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (ca.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || [ "", "" ])[1].toLowerCase(), 
                    h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], 
                    j = h[0]; j--; ) f = f.lastChild;
                    n.merge(l, f.childNodes), (f = k.firstChild).textContent = "";
                } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
                f = oa(k.appendChild(e), "script"), i && ma(f), c)) for (j = 0; e = f[j++]; ) fa.test(e.type || "") && c.push(e);
                return k;
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (n.acceptData(c) && ((e = c[L.expando]) && (b = L.cache[e]))) {
                        if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        L.cache[e] && delete L.cache[e];
                    }
                    delete M.cache[c[M.expando]];
                }
            }
        }), n.fn.extend({
            text: function(a) {
                return J(this, (function(a) {
                    return void 0 === a ? n.text(this) : this.empty().each((function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                    }));
                }), null, a, arguments.length);
            },
            append: function() {
                return this.domManip(arguments, (function(a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ja(this, a).appendChild(a);
                }));
            },
            prepend: function() {
                return this.domManip(arguments, (function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = ja(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                }));
            },
            before: function() {
                return this.domManip(arguments, (function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                }));
            },
            after: function() {
                return this.domManip(arguments, (function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                }));
            },
            remove: function(a, b) {
                for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), 
                c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
                return this;
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), 
                a.textContent = "");
                return this;
            },
            clone: function(a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map((function() {
                    return n.clone(this, a, b);
                }));
            },
            html: function(a) {
                return J(this, (function(a) {
                    var b = this[0] || {}, c = 0, d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                        a = a.replace(aa, "<$1></$2>");
                        try {
                            for (;d > c; c++) 1 === (b = this[c] || {}).nodeType && (n.cleanData(oa(b, !1)), 
                            b.innerHTML = a);
                            b = 0;
                        } catch (e) {}
                    }
                    b && this.empty().append(a);
                }), null, a, arguments.length);
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, (function(b) {
                    a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
                })), a && (a.length || a.nodeType) ? this : this.remove();
            },
            detach: function(a) {
                return this.remove(a, !0);
            },
            domManip: function(a, b) {
                a = e.apply([], a);
                var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
                if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each((function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                }));
                if (l && (d = (c = n.buildFragment(a, this[0].ownerDocument, !1, this)).firstChild, 
                1 === c.childNodes.length && (c = d), d)) {
                    for (g = (f = n.map(oa(c, "script"), ka)).length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                    g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                    if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], 
                    fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
                }
                return this;
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
                n(e[h])[b](c), f.apply(d, c.get());
                return this.pushStack(d);
            };
        }));
        var qa, ra = {};
        function sa(b, c) {
            var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
            return e.detach(), f;
        }
        function ta(a) {
            var b = l, c = ra[a];
            return c || ("none" !== (c = sa(a, b)) && c || ((b = (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement))[0].contentDocument).write(), 
            b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
        }
        var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
        };
        function xa(a, b, c) {
            var d, e, f, g, h = a.style;
            return (c = c || wa(a)) && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
            va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
            g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
        }
        function ya(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments);
                }
            };
        }
        !function() {
            var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
            if (f.style) {
                function g() {
                    f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                    f.innerHTML = "", d.appendChild(e);
                    var g = a.getComputedStyle(f, null);
                    b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
                }
                f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
                k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
                e.appendChild(f), a.getComputedStyle && n.extend(k, {
                    pixelPosition: function() {
                        return g(), b;
                    },
                    boxSizingReliable: function() {
                        return null == c && g(), c;
                    },
                    reliableMarginRight: function() {
                        var b, c = f.appendChild(l.createElement("div"));
                        return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                        c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                        b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                        b;
                    }
                });
            }
        }(), n.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            for (f in e = c.apply(a, d || []), b) a.style[f] = g[f];
            return e;
        };
        var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Da = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Ea = [ "Webkit", "O", "Moz", "ms" ];
        function Fa(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; e--; ) if ((b = Ea[e] + c) in a) return b;
            return d;
        }
        function Ga(a, b, c) {
            var d = Aa.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
        }
        function Ha(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
            d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
            "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
            return g;
        }
        function Ia(a, b, c) {
            var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if ((0 > (e = xa(a, b, f)) || null == e) && (e = a.style[b]), va.test(e)) return e;
                d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
            }
            return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
        }
        function Ja(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) (d = a[g]).style && (f[g] = L.get(d, "olddisplay"), 
            c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), 
            "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) (d = a[g]).style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a;
        }
        function Ka(a, b, c, d, e) {
            return new Ka.prototype.init(a, b, c, d, e);
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = xa(a, "opacity");
                            return "" === c ? "1" : c;
                        }
                    }
                }
            },
            cssNumber: {
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
                float: "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b), i = a.style;
                    return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                    void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : ("string" === (f = typeof c) && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                    f = "number"), void (null != c && c == c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                    k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                    g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), (g = n.cssHooks[b] || n.cssHooks[h]) && "get" in g && (e = g.get(a, !0, c)), 
                void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), 
                !0 === c || n.isNumeric(f) ? f || 0 : e) : e;
            }
        }), n.each([ "height", "width" ], (function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, (function() {
                        return Ia(a, b, d);
                    })) : Ia(a, b, d) : void 0;
                },
                set: function(a, c, d) {
                    var e = d && wa(a);
                    return Ga(0, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
                }
            };
        })), n.cssHooks.marginRight = ya(k.reliableMarginRight, (function(a, b) {
            return b ? n.swap(a, {
                display: "inline-block"
            }, xa, [ a, "marginRight" ]) : void 0;
        })), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                }
            }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
        })), n.fn.extend({
            css: function(a, b) {
                return J(this, (function(a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (n.isArray(b)) {
                        for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f;
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                }), a, b, arguments.length > 1);
            },
            show: function() {
                return Ja(this, !0);
            },
            hide: function() {
                return Ja(this);
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each((function() {
                    S(this) ? n(this).show() : n(this).hide();
                }));
            }
        }), n.Tween = Ka, Ka.prototype = {
            constructor: Ka,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
                this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
            },
            cur: function() {
                var a = Ka.propHooks[this.prop];
                return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
            },
            run: function(a) {
                var b, c = Ka.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
                this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
            }
        }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0 : a.elem[a.prop];
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
                }
            }
        }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            }
        }, n.easing = {
            linear: function(a) {
                return a;
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2;
            }
        }, n.fx = Ka.prototype.init, n.fx.step = {};
        var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [ function(a, b, c) {
            var d, e, f, g, h, i, j, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
            for (d in c.queue || (null == (h = n._queueHooks(a, "fx")).unqueued && (h.unqueued = 0, 
            i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i();
            }), h.unqueued++, l.always((function() {
                l.always((function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                }));
            }))), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
            j = n.css(a, "display"), "inline" === ("none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j) && "none" === n.css(a, "float") && (o.display = "inline-block")), 
            c.overflow && (o.overflow = "hidden", l.always((function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            }))), b) if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                m[d] = q && q[d] || n.style(a, d);
            } else j = void 0;
            if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else for (d in q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), 
            f && (q.hidden = !p), p ? n(a).show() : l.done((function() {
                n(a).hide();
            })), l.done((function() {
                var b;
                for (b in L.remove(a, "fxshow"), m) n.style(a, b, m[b]);
            })), m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        } ], Ra = {
            "*": [ function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        g /= h = h || ".5", n.style(c.elem, a, g + f);
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i);
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
                c;
            } ]
        };
        function Sa() {
            return setTimeout((function() {
                La = void 0;
            })), La = n.now();
        }
        function Ta(a, b) {
            var c, d = 0, e = {
                height: a
            };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) e["margin" + (c = R[d])] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e;
        }
        function Ua(a, b, c) {
            for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
        }
        function Xa(a, b, c) {
            var d, e, f = 0, g = Qa.length, h = n.Deferred().always((function() {
                delete i.elem;
            })), i = function() {
                if (e) return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), f = 1 - (c / j.duration || 0), g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
                !1);
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function(b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
                }
            }), k = j.props;
            for (function(a, b) {
                var c, d, e, f, g;
                for (c in a) if (e = b[d = n.camelCase(c)], f = a[c], n.isArray(f) && (e = f[1], 
                f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) for (c in f = g.expand(f), 
                delete a[d], f) c in a || (a[c] = f[c], b[c] = e); else b[d] = e;
            }(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
            return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
        }
        n.Animation = n.extend(Xa, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
            },
            prefilter: function(a, b) {
                b ? Qa.unshift(a) : Qa.push(a);
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
            (null == d.queue || !0 === d.queue) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
            }, d;
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d);
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                    var b = Xa(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0);
                };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), 
                this.each((function() {
                    var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                    for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                    b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a);
                }));
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each((function() {
                    var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                    b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                    f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish;
                }));
            }
        }), n.each([ "toggle", "show", "hide" ], (function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
            };
        })), n.each({
            slideDown: Ta("show"),
            slideUp: Ta("hide"),
            slideToggle: Ta("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d);
            };
        })), n.timers = [], n.fx.tick = function() {
            var a, b = 0, c = n.timers;
            for (La = n.now(); b < c.length; b++) (a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), La = void 0;
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
        }, n.fx.interval = 13, n.fx.start = function() {
            Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
        }, n.fx.stop = function() {
            clearInterval(Ma), Ma = null;
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx && n.fx.speeds[a] || a, b = b || "fx", this.queue(b, (function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            }));
        }, function() {
            var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
            k.optDisabled = !c.disabled, (a = l.createElement("input")).value = "t", a.type = "radio", 
            k.radioValue = "t" === a.value;
        }();
        var Za, $a = n.expr.attrHandle;
        n.fn.extend({
            attr: function(a, b) {
                return J(this, n.attr, a, b, arguments.length > 1);
            },
            removeAttr: function(a) {
                return this.each((function() {
                    n.removeAttr(this, a);
                }));
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
                d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : undefined)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : null == (e = n.find.attr(a, b)) ? void 0 : e : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
                c) : void n.removeAttr(a, b));
            },
            removeAttr: function(a, b) {
                var c, d, e = 0, f = b && b.match(E);
                if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
                a.removeAttribute(c);
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    }
                }
            }
        }), Za = {
            set: function(a, b, c) {
                return !1 === b ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), (function(a, b) {
            var c = $a[b] || n.find.attr;
            $a[b] = function(a, b, d) {
                var e, f;
                return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
                $a[b] = f), e;
            };
        }));
        var _a = /^(?:input|select|textarea|button)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return J(this, n.prop, a, b, arguments.length > 1);
            },
            removeProp: function(a) {
                return this.each((function() {
                    delete this[n.propFix[a] || a];
                }));
            }
        }), n.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(a, b, c) {
                var d, e, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return (1 !== g || !n.isXMLDoc(a)) && (b = n.propFix[b] || b, 
                e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                    }
                }
            }
        }), k.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null;
            }
        }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
            n.propFix[this.toLowerCase()] = this;
        }));
        var ab = /[\t\r\n\f]/g;
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                if (n.isFunction(a)) return this.each((function(b) {
                    n(this).addClass(a.call(this, b, this.className));
                }));
                if (h) for (b = (a || "").match(E) || []; j > i; i++) if (d = 1 === (c = this[i]).nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                    for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = n.trim(d), c.className !== g && (c.className = g);
                }
                return this;
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                if (n.isFunction(a)) return this.each((function(b) {
                    n(this).removeClass(a.call(this, b, this.className));
                }));
                if (h) for (b = (a || "").match(E) || []; j > i; i++) if (d = 1 === (c = this[i]).nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                    for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                    g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
                }
                return this;
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                    n(this).toggleClass(a.call(this, c, this.className, b), b);
                } : function() {
                    if ("string" === c) for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                    this.className = this.className || !1 === a ? "" : L.get(this, "__className__") || "");
                });
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
                return !1;
            }
        });
        var bb = /\r/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = n.isFunction(a), this.each((function(c) {
                    var e;
                    1 === this.nodeType && (null == (e = d ? a.call(this, c, n(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, (function(a) {
                        return null == a ? "" : a + "";
                    }))), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                }))) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(bb, "") : null == c ? "" : c : void 0;
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a));
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (!(!(c = d[i]).selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b);
                        }
                        return g;
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; ) ((d = e[g]).selected = n.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    }
                }
            }
        }), n.each([ "radio", "checkbox" ], (function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
                }
            }, k.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value;
            });
        })), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
            };
        })), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function(a, b) {
                return this.off(a, null, b);
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
            }
        });
        var cb = n.now(), db = /\?/;
        n.parseJSON = function(a) {
            return JSON.parse(a + "");
        }, n.parseXML = function(a) {
            var b;
            if (!a || "string" != typeof a) return null;
            try {
                b = (new DOMParser).parseFromString(a, "text/xml");
            } catch (d) {
                b = void 0;
            }
            return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
            b;
        };
        var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
        function qb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0, f = b.toLowerCase().match(E) || [];
                if (n.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
                (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            };
        }
        function rb(a, b, c, d) {
            var e = {}, f = a === mb;
            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], (function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                    g(j), !1);
                })), i;
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*");
        }
        function sb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && n.extend(!0, a, d), a;
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ob,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": nb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
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
                return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
            },
            ajaxPrefilter: qb(lb),
            ajaxTransport: qb(mb),
            ajax: function(a, b) {
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) for (f = {}; b = gb.exec(e); ) f[b[1].toLowerCase()] = b[2];
                            b = f[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null;
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this;
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this;
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                        return this;
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this;
                    }
                };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), 
                k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
                null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), 
                k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
                rb(lb, k, b, v), 2 === t) return v;
                for (j in (i = n.event && k.global) && 0 == n.active++ && n.event.trigger("ajaxStart"), 
                k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, 
                delete k.data), !1 === k.cache && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), 
                k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
                n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && !1 !== k.contentType || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
                v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]), 
                k.headers) v.setRequestHeader(j, k.headers[j]);
                if (k.beforeSend && (!1 === k.beforeSend.call(l, v, k) || 2 === t)) return v.abort();
                for (j in u = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[j](k[j]);
                if (c = rb(mb, k, b, v)) {
                    v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout((function() {
                        v.abort("timeout");
                    }), k.timeout));
                    try {
                        t = 1, c.send(r, x);
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        x(-1, w);
                    }
                } else x(-1, "No Transport");
                function x(a, b, f, h) {
                    var j, r, s, u, w, x = b;
                    2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                    j = a >= 200 && 300 > a || 304 === a, f && (u = function(a, b, c) {
                        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
                        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                        if (d) for (e in h) if (h[e] && h[e].test(d)) {
                            i.unshift(e);
                            break;
                        }
                        if (i[0] in c) f = i[0]; else {
                            for (e in c) {
                                if (!i[0] || a.converters[e + " " + i[0]]) {
                                    f = e;
                                    break;
                                }
                                g || (g = e);
                            }
                            f = f || g;
                        }
                        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
                    }(k, v, f)), u = function(a, b, c, d) {
                        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
                        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                            if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) if ((h = e.split(" "))[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                                break;
                            }
                            if (!0 !== g) if (g && a.throws) b = g(b); else try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                };
                            }
                        }
                        return {
                            state: "success",
                            data: b
                        };
                    }(k, u, v, j), j ? (k.ifModified && ((w = v.getResponseHeader("Last-Modified")) && (n.lastModified[d] = w), 
                    (w = v.getResponseHeader("etag")) && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                    r = u.data, j = !(s = u.error))) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                    v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                    v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                    p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
                }
                return v;
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json");
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script");
            }
        }), n.each([ "get", "post" ], (function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                });
            };
        })), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            });
        }, n.fn.extend({
            wrapAll: function(a) {
                var b;
                return n.isFunction(a) ? this.each((function(b) {
                    n(this).wrapAll(a.call(this, b));
                })) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
                b.map((function() {
                    for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                    return a;
                })).append(this)), this);
            },
            wrapInner: function(a) {
                return this.each(n.isFunction(a) ? function(b) {
                    n(this).wrapInner(a.call(this, b));
                } : function() {
                    var b = n(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a);
                });
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each((function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a);
                }));
            },
            unwrap: function() {
                return this.parent().each((function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                })).end();
            }
        }), n.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0;
        }, n.expr.filters.visible = function(a) {
            return !n.expr.filters.hidden(a);
        };
        var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
        function Ab(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, (function(b, e) {
                c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
            })); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
        }
        n.param = function(a, b) {
            var c, d = [], e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
            };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, (function() {
                e(this.name, this.value);
            })); else for (c in a) Ab(c, a[c], b, e);
            return d.join("&").replace(vb, "+");
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map((function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this;
                })).filter((function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
                })).map((function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, (function(a) {
                        return {
                            name: b.name,
                            value: a.replace(xb, "\r\n")
                        };
                    })) : {
                        name: b.name,
                        value: c.replace(xb, "\r\n")
                    };
                })).get();
            }
        }), n.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest;
            } catch (a) {}
        };
        var Bb = 0, Cb = {}, Db = {
            0: 200,
            1223: 204
        }, Eb = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", (function() {
            for (var a in Cb) Cb[a]();
        })), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport((function(a) {
            var b;
            return k.cors || Eb && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Bb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    for (e in a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), 
                    c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()));
                        };
                    }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null);
                    } catch (h) {
                        if (b) throw h;
                    }
                },
                abort: function() {
                    b && b();
                }
            } : void 0;
        })), n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a;
                }
            }
        }), n.ajaxPrefilter("script", (function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
        })), n.ajaxTransport("script", (function(a) {
            var b, c;
            if (a.crossDomain) return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }));
        var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Fb.pop() || n.expando + "_" + cb++;
                return this[a] = !0, a;
            }
        }), n.ajaxPrefilter("json jsonp", (function(b, c, d) {
            var e, f, g, h = !1 !== b.jsonp && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
            h ? b[h] = b[h].replace(Gb, "$1" + e) : !1 !== b.jsonp && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
            b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0];
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments;
            }, d.always((function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), 
                g = f = void 0;
            })), "script") : void 0;
        })), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || l;
            var d = v.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
            n.merge([], d.childNodes));
        };
        var Hb = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
            b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done((function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
            })).complete(c && function(a, b) {
                g.each(c, f || [ a.responseText, b, a ]);
            }), this;
        }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a);
            };
        })), n.expr.filters.animated = function(a) {
            return n.grep(n.timers, (function(b) {
                return a === b.elem;
            })).length;
        };
        var Ib = a.document.documentElement;
        function Jb(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, k = n.css(a, "position"), l = n(a), m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
                i = n.css(a, "left"), ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1 ? (g = (d = l.position()).top, 
                e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), 
                null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 
                "using" in b ? b.using.call(a, m) : l.css(m);
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each((function(b) {
                    n.offset.setOffset(this, a, b);
                }));
                var b, c, d = this[0], e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
                return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
                c = Jb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e) : void 0;
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                    b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                    d.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - n.css(c, "marginTop", !0),
                        left: b.left - d.left - n.css(c, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var a = this.offsetParent || Ib; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); ) a = a.offsetParent;
                    return a || Ib;
                }));
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(b, c) {
            var d = "pageYOffset" === c;
            n.fn[b] = function(e) {
                return J(this, (function(b, e, f) {
                    var g = Jb(b);
                    return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
                }), b, e, arguments.length, null);
            };
        })), n.each([ "top", "left" ], (function(a, b) {
            n.cssHooks[b] = ya(k.pixelPosition, (function(a, c) {
                return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
            }));
        })), n.each({
            Height: "height",
            Width: "width"
        }, (function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, (function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d), g = c || (!0 === d || !0 === e ? "margin" : "border");
                    return J(this, (function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                        Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                    }), b, f ? d : void 0, f, null);
                };
            }));
        })), n.fn.size = function() {
            return this.length;
        }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
            return n;
        }));
        var Kb = a.jQuery, Lb = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
        }, typeof b === U && (a.jQuery = a.$ = n), n;
    })), function(f) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = f(); else if ("function" == typeof define && define.amd) define([], f); else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).io = f();
        }
    }((function() {
        return function e(t, n, r) {
            function s(o, u) {
                if (!n[o]) {
                    if (!t[o]) {
                        var a = "function" == typeof require && require;
                        if (!u && a) return a(o, !0);
                        if (i) return i(o, !0);
                        var f = new Error("Cannot find module '" + o + "'");
                        throw f.code = "MODULE_NOT_FOUND", f;
                    }
                    var l = n[o] = {
                        exports: {}
                    };
                    t[o][0].call(l.exports, (function(e) {
                        var n = t[o][1][e];
                        return s(n || e);
                    }), l, l.exports, e, t, n, r);
                }
                return n[o].exports;
            }
            for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
            return s;
        }({
            1: [ function(_dereq_, module, exports) {
                var url = _dereq_("./url"), parser = _dereq_("socket.io-parser"), Manager = _dereq_("./manager"), debug = _dereq_("debug")("socket.io-client");
                module.exports = exports = lookup;
                var cache = exports.managers = {};
                function lookup(uri, opts) {
                    "object" == typeof uri && (opts = uri, uri = void 0), opts = opts || {};
                    var io, parsed = url(uri), source = parsed.source, id = parsed.id, path = parsed.path, sameNamespace = cache[id] && path in cache[id].nsps;
                    return opts.forceNew || opts["force new connection"] || !1 === opts.multiplex || sameNamespace ? (debug("ignoring socket cache for %s", source), 
                    io = Manager(source, opts)) : (cache[id] || (debug("new io instance for %s", source), 
                    cache[id] = Manager(source, opts)), io = cache[id]), io.socket(parsed.path);
                }
                exports.protocol = parser.protocol, exports.connect = lookup, exports.Manager = _dereq_("./manager"), 
                exports.Socket = _dereq_("./socket");
            }, {
                "./manager": 2,
                "./socket": 4,
                "./url": 5,
                debug: 14,
                "socket.io-parser": 41
            } ],
            2: [ function(_dereq_, module, exports) {
                var eio = _dereq_("engine.io-client"), Socket = _dereq_("./socket"), Emitter = _dereq_("component-emitter"), parser = _dereq_("socket.io-parser"), on = _dereq_("./on"), bind = _dereq_("component-bind"), debug = _dereq_("debug")("socket.io-client:manager"), indexOf = _dereq_("indexof"), Backoff = _dereq_("backo2"), has = Object.prototype.hasOwnProperty;
                function Manager(uri, opts) {
                    if (!(this instanceof Manager)) return new Manager(uri, opts);
                    uri && "object" == typeof uri && (opts = uri, uri = void 0), (opts = opts || {}).path = opts.path || "/socket.io", 
                    this.nsps = {}, this.subs = [], this.opts = opts, this.reconnection(!1 !== opts.reconnection), 
                    this.reconnectionAttempts(opts.reconnectionAttempts || 1 / 0), this.reconnectionDelay(opts.reconnectionDelay || 1e3), 
                    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3), this.randomizationFactor(opts.randomizationFactor || .5), 
                    this.backoff = new Backoff({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }), this.timeout(null == opts.timeout ? 2e4 : opts.timeout), this.readyState = "closed", 
                    this.uri = uri, this.connecting = [], this.lastPing = null, this.encoding = !1, 
                    this.packetBuffer = [], this.encoder = new parser.Encoder, this.decoder = new parser.Decoder, 
                    this.autoConnect = !1 !== opts.autoConnect, this.autoConnect && this.open();
                }
                module.exports = Manager, Manager.prototype.emitAll = function() {
                    for (var nsp in this.emit.apply(this, arguments), this.nsps) has.call(this.nsps, nsp) && this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
                }, Manager.prototype.updateSocketIds = function() {
                    for (var nsp in this.nsps) has.call(this.nsps, nsp) && (this.nsps[nsp].id = this.engine.id);
                }, Emitter(Manager.prototype), Manager.prototype.reconnection = function(v) {
                    return arguments.length ? (this._reconnection = !!v, this) : this._reconnection;
                }, Manager.prototype.reconnectionAttempts = function(v) {
                    return arguments.length ? (this._reconnectionAttempts = v, this) : this._reconnectionAttempts;
                }, Manager.prototype.reconnectionDelay = function(v) {
                    return arguments.length ? (this._reconnectionDelay = v, this.backoff && this.backoff.setMin(v), 
                    this) : this._reconnectionDelay;
                }, Manager.prototype.randomizationFactor = function(v) {
                    return arguments.length ? (this._randomizationFactor = v, this.backoff && this.backoff.setJitter(v), 
                    this) : this._randomizationFactor;
                }, Manager.prototype.reconnectionDelayMax = function(v) {
                    return arguments.length ? (this._reconnectionDelayMax = v, this.backoff && this.backoff.setMax(v), 
                    this) : this._reconnectionDelayMax;
                }, Manager.prototype.timeout = function(v) {
                    return arguments.length ? (this._timeout = v, this) : this._timeout;
                }, Manager.prototype.maybeReconnectOnOpen = function() {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                }, Manager.prototype.open = Manager.prototype.connect = function(fn) {
                    if (debug("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                    debug("opening %s", this.uri), this.engine = eio(this.uri, this.opts);
                    var socket = this.engine, self = this;
                    this.readyState = "opening", this.skipReconnect = !1;
                    var openSub = on(socket, "open", (function() {
                        self.onopen(), fn && fn();
                    })), errorSub = on(socket, "error", (function(data) {
                        if (debug("connect_error"), self.cleanup(), self.readyState = "closed", self.emitAll("connect_error", data), 
                        fn) {
                            var err = new Error("Connection error");
                            err.data = data, fn(err);
                        } else self.maybeReconnectOnOpen();
                    }));
                    if (!1 !== this._timeout) {
                        var timeout = this._timeout;
                        debug("connect attempt will timeout after %d", timeout);
                        var timer = setTimeout((function() {
                            debug("connect attempt timed out after %d", timeout), openSub.destroy(), socket.close(), 
                            socket.emit("error", "timeout"), self.emitAll("connect_timeout", timeout);
                        }), timeout);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(timer);
                            }
                        });
                    }
                    return this.subs.push(openSub), this.subs.push(errorSub), this;
                }, Manager.prototype.onopen = function() {
                    debug("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                    var socket = this.engine;
                    this.subs.push(on(socket, "data", bind(this, "ondata"))), this.subs.push(on(socket, "ping", bind(this, "onping"))), 
                    this.subs.push(on(socket, "pong", bind(this, "onpong"))), this.subs.push(on(socket, "error", bind(this, "onerror"))), 
                    this.subs.push(on(socket, "close", bind(this, "onclose"))), this.subs.push(on(this.decoder, "decoded", bind(this, "ondecoded")));
                }, Manager.prototype.onping = function() {
                    this.lastPing = new Date, this.emitAll("ping");
                }, Manager.prototype.onpong = function() {
                    this.emitAll("pong", new Date - this.lastPing);
                }, Manager.prototype.ondata = function(data) {
                    this.decoder.add(data);
                }, Manager.prototype.ondecoded = function(packet) {
                    this.emit("packet", packet);
                }, Manager.prototype.onerror = function(err) {
                    debug("error", err), this.emitAll("error", err);
                }, Manager.prototype.socket = function(nsp) {
                    var socket = this.nsps[nsp];
                    if (!socket) {
                        socket = new Socket(this, nsp), this.nsps[nsp] = socket;
                        var self = this;
                        socket.on("connecting", onConnecting), socket.on("connect", (function() {
                            socket.id = self.engine.id;
                        })), this.autoConnect && onConnecting();
                    }
                    function onConnecting() {
                        ~indexOf(self.connecting, socket) || self.connecting.push(socket);
                    }
                    return socket;
                }, Manager.prototype.destroy = function(socket) {
                    var index = indexOf(this.connecting, socket);
                    ~index && this.connecting.splice(index, 1), this.connecting.length || this.close();
                }, Manager.prototype.packet = function(packet) {
                    debug("writing packet %j", packet);
                    var self = this;
                    self.encoding ? self.packetBuffer.push(packet) : (self.encoding = !0, this.encoder.encode(packet, (function(encodedPackets) {
                        for (var i = 0; i < encodedPackets.length; i++) self.engine.write(encodedPackets[i], packet.options);
                        self.encoding = !1, self.processPacketQueue();
                    })));
                }, Manager.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var pack = this.packetBuffer.shift();
                        this.packet(pack);
                    }
                }, Manager.prototype.cleanup = function() {
                    var sub;
                    for (debug("cleanup"); sub = this.subs.shift(); ) sub.destroy();
                    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
                }, Manager.prototype.close = Manager.prototype.disconnect = function() {
                    debug("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" == this.readyState && this.cleanup(), 
                    this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
                }, Manager.prototype.onclose = function(reason) {
                    debug("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", 
                    this.emit("close", reason), this._reconnection && !this.skipReconnect && this.reconnect();
                }, Manager.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect) return this;
                    var self = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) debug("reconnect failed"), 
                    this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
                        var delay = this.backoff.duration();
                        debug("will wait %dms before reconnect attempt", delay), this.reconnecting = !0;
                        var timer = setTimeout((function() {
                            self.skipReconnect || (debug("attempting reconnect"), self.emitAll("reconnect_attempt", self.backoff.attempts), 
                            self.emitAll("reconnecting", self.backoff.attempts), self.skipReconnect || self.open((function(err) {
                                err ? (debug("reconnect attempt error"), self.reconnecting = !1, self.reconnect(), 
                                self.emitAll("reconnect_error", err.data)) : (debug("reconnect success"), self.onreconnect());
                            })));
                        }), delay);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(timer);
                            }
                        });
                    }
                }, Manager.prototype.onreconnect = function() {
                    var attempt = this.backoff.attempts;
                    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", attempt);
                };
            }, {
                "./on": 3,
                "./socket": 4,
                backo2: 8,
                "component-bind": 11,
                "component-emitter": 12,
                debug: 14,
                "engine.io-client": 16,
                indexof: 33,
                "socket.io-parser": 41
            } ],
            3: [ function(_dereq_, module, exports) {
                module.exports = function(obj, ev, fn) {
                    return obj.on(ev, fn), {
                        destroy: function() {
                            obj.removeListener(ev, fn);
                        }
                    };
                };
            }, {} ],
            4: [ function(_dereq_, module, exports) {
                var parser = _dereq_("socket.io-parser"), Emitter = _dereq_("component-emitter"), toArray = _dereq_("to-array"), on = _dereq_("./on"), bind = _dereq_("component-bind"), debug = _dereq_("debug")("socket.io-client:socket"), hasBin = _dereq_("has-binary");
                module.exports = Socket;
                var events = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1
                }, emit = Emitter.prototype.emit;
                function Socket(io, nsp) {
                    this.io = io, this.nsp = nsp, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], 
                    this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.io.autoConnect && this.open();
                }
                Emitter(Socket.prototype), Socket.prototype.subEvents = function() {
                    if (!this.subs) {
                        var io = this.io;
                        this.subs = [ on(io, "open", bind(this, "onopen")), on(io, "packet", bind(this, "onpacket")), on(io, "close", bind(this, "onclose")) ];
                    }
                }, Socket.prototype.open = Socket.prototype.connect = function() {
                    return this.connected || (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), 
                    this.emit("connecting")), this;
                }, Socket.prototype.send = function() {
                    var args = toArray(arguments);
                    return args.unshift("message"), this.emit.apply(this, args), this;
                }, Socket.prototype.emit = function(ev) {
                    if (events.hasOwnProperty(ev)) return emit.apply(this, arguments), this;
                    var args = toArray(arguments), parserType = parser.EVENT;
                    hasBin(args) && (parserType = parser.BINARY_EVENT);
                    var packet = {
                        type: parserType,
                        data: args,
                        options: {}
                    };
                    return packet.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof args[args.length - 1] && (debug("emitting packet with ack id %d", this.ids), 
                    this.acks[this.ids] = args.pop(), packet.id = this.ids++), this.connected ? this.packet(packet) : this.sendBuffer.push(packet), 
                    delete this.flags, this;
                }, Socket.prototype.packet = function(packet) {
                    packet.nsp = this.nsp, this.io.packet(packet);
                }, Socket.prototype.onopen = function() {
                    debug("transport is open - connecting"), "/" != this.nsp && this.packet({
                        type: parser.CONNECT
                    });
                }, Socket.prototype.onclose = function(reason) {
                    debug("close (%s)", reason), this.connected = !1, this.disconnected = !0, delete this.id, 
                    this.emit("disconnect", reason);
                }, Socket.prototype.onpacket = function(packet) {
                    if (packet.nsp == this.nsp) switch (packet.type) {
                      case parser.CONNECT:
                        this.onconnect();
                        break;

                      case parser.EVENT:
                      case parser.BINARY_EVENT:
                        this.onevent(packet);
                        break;

                      case parser.ACK:
                      case parser.BINARY_ACK:
                        this.onack(packet);
                        break;

                      case parser.DISCONNECT:
                        this.ondisconnect();
                        break;

                      case parser.ERROR:
                        this.emit("error", packet.data);
                    }
                }, Socket.prototype.onevent = function(packet) {
                    var args = packet.data || [];
                    debug("emitting event %j", args), null != packet.id && (debug("attaching ack callback to event"), 
                    args.push(this.ack(packet.id))), this.connected ? emit.apply(this, args) : this.receiveBuffer.push(args);
                }, Socket.prototype.ack = function(id) {
                    var self = this, sent = !1;
                    return function() {
                        if (!sent) {
                            sent = !0;
                            var args = toArray(arguments);
                            debug("sending ack %j", args);
                            var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
                            self.packet({
                                type,
                                id,
                                data: args
                            });
                        }
                    };
                }, Socket.prototype.onack = function(packet) {
                    var ack = this.acks[packet.id];
                    "function" == typeof ack ? (debug("calling ack %s with %j", packet.id, packet.data), 
                    ack.apply(this, packet.data), delete this.acks[packet.id]) : debug("bad ack %s", packet.id);
                }, Socket.prototype.onconnect = function() {
                    this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
                }, Socket.prototype.emitBuffered = function() {
                    var i;
                    for (i = 0; i < this.receiveBuffer.length; i++) emit.apply(this, this.receiveBuffer[i]);
                    for (this.receiveBuffer = [], i = 0; i < this.sendBuffer.length; i++) this.packet(this.sendBuffer[i]);
                    this.sendBuffer = [];
                }, Socket.prototype.ondisconnect = function() {
                    debug("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
                }, Socket.prototype.destroy = function() {
                    if (this.subs) {
                        for (var i = 0; i < this.subs.length; i++) this.subs[i].destroy();
                        this.subs = null;
                    }
                    this.io.destroy(this);
                }, Socket.prototype.close = Socket.prototype.disconnect = function() {
                    return this.connected && (debug("performing disconnect (%s)", this.nsp), this.packet({
                        type: parser.DISCONNECT
                    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
                }, Socket.prototype.compress = function(compress) {
                    return this.flags = this.flags || {}, this.flags.compress = compress, this;
                };
            }, {
                "./on": 3,
                "component-bind": 11,
                "component-emitter": 12,
                debug: 14,
                "has-binary": 31,
                "socket.io-parser": 41,
                "to-array": 44
            } ],
            5: [ function(_dereq_, module, exports) {
                (function(global) {
                    var parseuri = _dereq_("parseuri"), debug = _dereq_("debug")("socket.io-client:url");
                    module.exports = function(uri, loc) {
                        var obj = uri;
                        loc = loc || global.location;
                        null == uri && (uri = loc.protocol + "//" + loc.host);
                        "string" == typeof uri && ("/" == uri.charAt(0) && (uri = "/" == uri.charAt(1) ? loc.protocol + uri : loc.host + uri), 
                        /^(https?|wss?):\/\//.test(uri) || (debug("protocol-less url %s", uri), uri = void 0 !== loc ? loc.protocol + "//" + uri : "https://" + uri), 
                        debug("parse %s", uri), obj = parseuri(uri));
                        obj.port || (/^(http|ws)$/.test(obj.protocol) ? obj.port = "80" : /^(http|ws)s$/.test(obj.protocol) && (obj.port = "443"));
                        obj.path = obj.path || "/";
                        var host = -1 !== obj.host.indexOf(":") ? "[" + obj.host + "]" : obj.host;
                        return obj.id = obj.protocol + "://" + host + ":" + obj.port, obj.href = obj.protocol + "://" + host + (loc && loc.port == obj.port ? "" : ":" + obj.port), 
                        obj;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                debug: 14,
                parseuri: 39
            } ],
            6: [ function(_dereq_, module, exports) {
                function noop() {}
                module.exports = function(count, callback, err_cb) {
                    var bail = !1;
                    return err_cb = err_cb || noop, proxy.count = count, 0 === count ? callback() : proxy;
                    function proxy(err, result) {
                        if (proxy.count <= 0) throw new Error("after called too many times");
                        --proxy.count, err ? (bail = !0, callback(err), callback = err_cb) : 0 !== proxy.count || bail || callback(null, result);
                    }
                };
            }, {} ],
            7: [ function(_dereq_, module, exports) {
                module.exports = function(arraybuffer, start, end) {
                    var bytes = arraybuffer.byteLength;
                    if (start = start || 0, end = end || bytes, arraybuffer.slice) return arraybuffer.slice(start, end);
                    if (start < 0 && (start += bytes), end < 0 && (end += bytes), end > bytes && (end = bytes), 
                    start >= bytes || start >= end || 0 === bytes) return new ArrayBuffer(0);
                    for (var abv = new Uint8Array(arraybuffer), result = new Uint8Array(end - start), i = start, ii = 0; i < end; i++, 
                    ii++) result[ii] = abv[i];
                    return result.buffer;
                };
            }, {} ],
            8: [ function(_dereq_, module, exports) {
                function Backoff(opts) {
                    opts = opts || {}, this.ms = opts.min || 100, this.max = opts.max || 1e4, this.factor = opts.factor || 2, 
                    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0, this.attempts = 0;
                }
                module.exports = Backoff, Backoff.prototype.duration = function() {
                    var ms = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var rand = Math.random(), deviation = Math.floor(rand * this.jitter * ms);
                        ms = 0 == (1 & Math.floor(10 * rand)) ? ms - deviation : ms + deviation;
                    }
                    return 0 | Math.min(ms, this.max);
                }, Backoff.prototype.reset = function() {
                    this.attempts = 0;
                }, Backoff.prototype.setMin = function(min) {
                    this.ms = min;
                }, Backoff.prototype.setMax = function(max) {
                    this.max = max;
                }, Backoff.prototype.setJitter = function(jitter) {
                    this.jitter = jitter;
                };
            }, {} ],
            9: [ function(_dereq_, module, exports) {
                !function(chars) {
                    "use strict";
                    exports.encode = function(arraybuffer) {
                        var i, bytes = new Uint8Array(arraybuffer), len = bytes.buffer.byteLength, base64 = "";
                        for (i = 0; i < len; i += 3) base64 += chars[bytes.buffer[i] >> 2], base64 += chars[(3 & bytes.buffer[i]) << 4 | bytes.buffer[i + 1] >> 4], 
                        base64 += chars[(15 & bytes.buffer[i + 1]) << 2 | bytes.buffer[i + 2] >> 6], base64 += chars[63 & bytes.buffer[i + 2]];
                        return len % 3 == 2 ? base64 = base64.substring(0, base64.length - 1) + "=" : len % 3 == 1 && (base64 = base64.substring(0, base64.length - 2) + "=="), 
                        base64;
                    }, exports.decode = function(base64) {
                        var i, encoded1, encoded2, encoded3, encoded4, bufferLength = .75 * base64.length, len = base64.length, p = 0;
                        "=" === base64[base64.length - 1] && (bufferLength--, "=" === base64[base64.length - 2] && bufferLength--);
                        var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
                        for (i = 0; i < len; i += 4) encoded1 = chars.indexOf(base64[i]), encoded2 = chars.indexOf(base64[i + 1]), 
                        encoded3 = chars.indexOf(base64[i + 2]), encoded4 = chars.indexOf(base64[i + 3]), 
                        bytes[p++] = encoded1 << 2 | encoded2 >> 4, bytes[p++] = (15 & encoded2) << 4 | encoded3 >> 2, 
                        bytes[p++] = (3 & encoded3) << 6 | 63 & encoded4;
                        return arraybuffer;
                    };
                }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
            }, {} ],
            10: [ function(_dereq_, module, exports) {
                (function(global) {
                    var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder, blobSupported = function() {
                        try {
                            return 2 === new Blob([ "hi" ]).size;
                        } catch (e) {
                            return !1;
                        }
                    }(), blobSupportsArrayBufferView = blobSupported && function() {
                        try {
                            return 2 === new Blob([ new Uint8Array([ 1, 2 ]) ]).size;
                        } catch (e) {
                            return !1;
                        }
                    }(), blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
                    function mapArrayBufferViews(ary) {
                        for (var i = 0; i < ary.length; i++) {
                            var chunk = ary[i];
                            if (chunk.buffer instanceof ArrayBuffer) {
                                var buf = chunk.buffer;
                                if (chunk.byteLength !== buf.byteLength) {
                                    var copy = new Uint8Array(chunk.byteLength);
                                    copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength)), buf = copy.buffer;
                                }
                                ary[i] = buf;
                            }
                        }
                    }
                    function BlobBuilderConstructor(ary, options) {
                        options = options || {};
                        var bb = new BlobBuilder;
                        mapArrayBufferViews(ary);
                        for (var i = 0; i < ary.length; i++) bb.append(ary[i]);
                        return options.type ? bb.getBlob(options.type) : bb.getBlob();
                    }
                    function BlobConstructor(ary, options) {
                        return mapArrayBufferViews(ary), new Blob(ary, options || {});
                    }
                    module.exports = blobSupported ? blobSupportsArrayBufferView ? global.Blob : BlobConstructor : blobBuilderSupported ? BlobBuilderConstructor : void 0;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {} ],
            11: [ function(_dereq_, module, exports) {
                var slice = [].slice;
                module.exports = function(obj, fn) {
                    if ("string" == typeof fn && (fn = obj[fn]), "function" != typeof fn) throw new Error("bind() requires a function");
                    var args = slice.call(arguments, 2);
                    return function() {
                        return fn.apply(obj, args.concat(slice.call(arguments)));
                    };
                };
            }, {} ],
            12: [ function(_dereq_, module, exports) {
                function Emitter(obj) {
                    if (obj) return function(obj) {
                        for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
                        return obj;
                    }(obj);
                }
                module.exports = Emitter, Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn), 
                    this;
                }, Emitter.prototype.once = function(event, fn) {
                    function on() {
                        this.off(event, on), fn.apply(this, arguments);
                    }
                    return on.fn = fn, this.on(event, on), this;
                }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
                    this;
                    var cb, callbacks = this._callbacks["$" + event];
                    if (!callbacks) return this;
                    if (1 == arguments.length) return delete this._callbacks["$" + event], this;
                    for (var i = 0; i < callbacks.length; i++) if ((cb = callbacks[i]) === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                    return this;
                }, Emitter.prototype.emit = function(event) {
                    this._callbacks = this._callbacks || {};
                    var args = [].slice.call(arguments, 1), callbacks = this._callbacks["$" + event];
                    if (callbacks) for (var i = 0, len = (callbacks = callbacks.slice(0)).length; i < len; ++i) callbacks[i].apply(this, args);
                    return this;
                }, Emitter.prototype.listeners = function(event) {
                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + event] || [];
                }, Emitter.prototype.hasListeners = function(event) {
                    return !!this.listeners(event).length;
                };
            }, {} ],
            13: [ function(_dereq_, module, exports) {
                module.exports = function(a, b) {
                    var fn = function() {};
                    fn.prototype = b.prototype, a.prototype = new fn, a.prototype.constructor = a;
                };
            }, {} ],
            14: [ function(_dereq_, module, exports) {
                function load() {
                    var r;
                    try {
                        r = exports.storage.debug;
                    } catch (e) {}
                    return r;
                }
                (exports = module.exports = _dereq_("./debug")).log = function() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
                }, exports.formatArgs = function() {
                    var args = arguments, useColors = this.useColors;
                    if (args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff), 
                    !useColors) return args;
                    var c = "color: " + this.color;
                    args = [ args[0], c, "color: inherit" ].concat(Array.prototype.slice.call(args, 1));
                    var index = 0, lastC = 0;
                    return args[0].replace(/%[a-z%]/g, (function(match) {
                        "%%" !== match && (index++, "%c" === match && (lastC = index));
                    })), args.splice(lastC, 0, c), args;
                }, exports.save = function(namespaces) {
                    try {
                        null == namespaces ? exports.storage.removeItem("debug") : exports.storage.debug = namespaces;
                    } catch (e) {}
                }, exports.load = load, exports.useColors = function() {
                    return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
                }, exports.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                    try {
                        return window.localStorage;
                    } catch (e) {}
                }(), exports.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ], 
                exports.formatters.j = function(v) {
                    return JSON.stringify(v);
                }, exports.enable(load());
            }, {
                "./debug": 15
            } ],
            15: [ function(_dereq_, module, exports) {
                (exports = module.exports = function(namespace) {
                    function disabled() {}
                    function enabled() {
                        var self = enabled, curr = +new Date, ms = curr - (prevTime || curr);
                        self.diff = ms, self.prev = prevTime, self.curr = curr, prevTime = curr, null == self.useColors && (self.useColors = exports.useColors()), 
                        null == self.color && self.useColors && (self.color = selectColor());
                        var args = Array.prototype.slice.call(arguments);
                        args[0] = exports.coerce(args[0]), "string" != typeof args[0] && (args = [ "%o" ].concat(args));
                        var index = 0;
                        args[0] = args[0].replace(/%([a-z%])/g, (function(match, format) {
                            if ("%%" === match) return match;
                            index++;
                            var formatter = exports.formatters[format];
                            if ("function" == typeof formatter) {
                                var val = args[index];
                                match = formatter.call(self, val), args.splice(index, 1), index--;
                            }
                            return match;
                        })), "function" == typeof exports.formatArgs && (args = exports.formatArgs.apply(self, args));
                        var logFn = enabled.log || exports.log || console.log.bind(console);
                        logFn.apply(self, args);
                    }
                    disabled.enabled = !1, enabled.enabled = !0;
                    var fn = exports.enabled(namespace) ? enabled : disabled;
                    return fn.namespace = namespace, fn;
                }).coerce = function(val) {
                    return val instanceof Error ? val.stack || val.message : val;
                }, exports.disable = function() {
                    exports.enable("");
                }, exports.enable = function(namespaces) {
                    exports.save(namespaces);
                    for (var split = (namespaces || "").split(/[\s,]+/), len = split.length, i = 0; i < len; i++) split[i] && ("-" === (namespaces = split[i].replace(/\*/g, ".*?"))[0] ? exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$")) : exports.names.push(new RegExp("^" + namespaces + "$")));
                }, exports.enabled = function(name) {
                    var i, len;
                    for (i = 0, len = exports.skips.length; i < len; i++) if (exports.skips[i].test(name)) return !1;
                    for (i = 0, len = exports.names.length; i < len; i++) if (exports.names[i].test(name)) return !0;
                    return !1;
                }, exports.humanize = _dereq_("ms"), exports.names = [], exports.skips = [], exports.formatters = {};
                var prevTime, prevColor = 0;
                function selectColor() {
                    return exports.colors[prevColor++ % exports.colors.length];
                }
            }, {
                ms: 36
            } ],
            16: [ function(_dereq_, module, exports) {
                module.exports = _dereq_("./lib/");
            }, {
                "./lib/": 17
            } ],
            17: [ function(_dereq_, module, exports) {
                module.exports = _dereq_("./socket"), module.exports.parser = _dereq_("engine.io-parser");
            }, {
                "./socket": 18,
                "engine.io-parser": 27
            } ],
            18: [ function(_dereq_, module, exports) {
                (function(global) {
                    var transports = _dereq_("./transports"), Emitter = _dereq_("component-emitter"), debug = _dereq_("debug")("engine.io-client:socket"), index = _dereq_("indexof"), parser = _dereq_("engine.io-parser"), parseuri = _dereq_("parseuri"), parsejson = _dereq_("parsejson"), parseqs = _dereq_("parseqs");
                    function Socket(uri, opts) {
                        if (!(this instanceof Socket)) return new Socket(uri, opts);
                        opts = opts || {}, uri && "object" == typeof uri && (opts = uri, uri = null), uri ? (uri = parseuri(uri), 
                        opts.hostname = uri.host, opts.secure = "https" == uri.protocol || "wss" == uri.protocol, 
                        opts.port = uri.port, uri.query && (opts.query = uri.query)) : opts.host && (opts.hostname = parseuri(opts.host).host), 
                        this.secure = null != opts.secure ? opts.secure : global.location && "https:" == location.protocol, 
                        opts.hostname && !opts.port && (opts.port = this.secure ? "443" : "80"), this.agent = opts.agent || !1, 
                        this.hostname = opts.hostname || (global.location ? location.hostname : "localhost"), 
                        this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80), 
                        this.query = opts.query || {}, "string" == typeof this.query && (this.query = parseqs.decode(this.query)), 
                        this.upgrade = !1 !== opts.upgrade, this.path = (opts.path || "/engine.io").replace(/\/$/, "") + "/", 
                        this.forceJSONP = !!opts.forceJSONP, this.jsonp = !1 !== opts.jsonp, this.forceBase64 = !!opts.forceBase64, 
                        this.enablesXDR = !!opts.enablesXDR, this.timestampParam = opts.timestampParam || "t", 
                        this.timestampRequests = opts.timestampRequests, this.transports = opts.transports || [ "polling", "websocket" ], 
                        this.readyState = "", this.writeBuffer = [], this.policyPort = opts.policyPort || 843, 
                        this.rememberUpgrade = opts.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades, 
                        this.perMessageDeflate = !1 !== opts.perMessageDeflate && (opts.perMessageDeflate || {}), 
                        !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), 
                        this.pfx = opts.pfx || null, this.key = opts.key || null, this.passphrase = opts.passphrase || null, 
                        this.cert = opts.cert || null, this.ca = opts.ca || null, this.ciphers = opts.ciphers || null, 
                        this.rejectUnauthorized = void 0 === opts.rejectUnauthorized ? null : opts.rejectUnauthorized;
                        var freeGlobal = "object" == typeof global && global;
                        freeGlobal.global === freeGlobal && opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0 && (this.extraHeaders = opts.extraHeaders), 
                        this.open();
                    }
                    module.exports = Socket, Socket.priorWebsocketSuccess = !1, Emitter(Socket.prototype), 
                    Socket.protocol = parser.protocol, Socket.Socket = Socket, Socket.Transport = _dereq_("./transport"), 
                    Socket.transports = _dereq_("./transports"), Socket.parser = _dereq_("engine.io-parser"), 
                    Socket.prototype.createTransport = function(name) {
                        debug('creating transport "%s"', name);
                        var query = function(obj) {
                            var o = {};
                            for (var i in obj) obj.hasOwnProperty(i) && (o[i] = obj[i]);
                            return o;
                        }(this.query);
                        return query.EIO = parser.protocol, query.transport = name, this.id && (query.sid = this.id), 
                        new transports[name]({
                            agent: this.agent,
                            hostname: this.hostname,
                            port: this.port,
                            secure: this.secure,
                            path: this.path,
                            query,
                            forceJSONP: this.forceJSONP,
                            jsonp: this.jsonp,
                            forceBase64: this.forceBase64,
                            enablesXDR: this.enablesXDR,
                            timestampRequests: this.timestampRequests,
                            timestampParam: this.timestampParam,
                            policyPort: this.policyPort,
                            socket: this,
                            pfx: this.pfx,
                            key: this.key,
                            passphrase: this.passphrase,
                            cert: this.cert,
                            ca: this.ca,
                            ciphers: this.ciphers,
                            rejectUnauthorized: this.rejectUnauthorized,
                            perMessageDeflate: this.perMessageDeflate,
                            extraHeaders: this.extraHeaders
                        });
                    }, Socket.prototype.open = function() {
                        var transport;
                        if (this.rememberUpgrade && Socket.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) transport = "websocket"; else {
                            if (0 === this.transports.length) {
                                var self = this;
                                return void setTimeout((function() {
                                    self.emit("error", "No transports available");
                                }), 0);
                            }
                            transport = this.transports[0];
                        }
                        this.readyState = "opening";
                        try {
                            transport = this.createTransport(transport);
                        } catch (e) {
                            return this.transports.shift(), void this.open();
                        }
                        transport.open(), this.setTransport(transport);
                    }, Socket.prototype.setTransport = function(transport) {
                        debug("setting transport %s", transport.name);
                        var self = this;
                        this.transport && (debug("clearing existing transport %s", this.transport.name), 
                        this.transport.removeAllListeners()), this.transport = transport, transport.on("drain", (function() {
                            self.onDrain();
                        })).on("packet", (function(packet) {
                            self.onPacket(packet);
                        })).on("error", (function(e) {
                            self.onError(e);
                        })).on("close", (function() {
                            self.onClose("transport close");
                        }));
                    }, Socket.prototype.probe = function(name) {
                        debug('probing transport "%s"', name);
                        var transport = this.createTransport(name, {
                            probe: 1
                        }), failed = !1, self = this;
                        function onTransportOpen() {
                            if (self.onlyBinaryUpgrades) {
                                var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                                failed = failed || upgradeLosesBinary;
                            }
                            failed || (debug('probe transport "%s" opened', name), transport.send([ {
                                type: "ping",
                                data: "probe"
                            } ]), transport.once("packet", (function(msg) {
                                if (!failed) if ("pong" == msg.type && "probe" == msg.data) {
                                    if (debug('probe transport "%s" pong', name), self.upgrading = !0, self.emit("upgrading", transport), 
                                    !transport) return;
                                    Socket.priorWebsocketSuccess = "websocket" == transport.name, debug('pausing current transport "%s"', self.transport.name), 
                                    self.transport.pause((function() {
                                        failed || "closed" != self.readyState && (debug("changing transport and sending upgrade packet"), 
                                        cleanup(), self.setTransport(transport), transport.send([ {
                                            type: "upgrade"
                                        } ]), self.emit("upgrade", transport), transport = null, self.upgrading = !1, self.flush());
                                    }));
                                } else {
                                    debug('probe transport "%s" failed', name);
                                    var err = new Error("probe error");
                                    err.transport = transport.name, self.emit("upgradeError", err);
                                }
                            })));
                        }
                        function freezeTransport() {
                            failed || (failed = !0, cleanup(), transport.close(), transport = null);
                        }
                        function onerror(err) {
                            var error = new Error("probe error: " + err);
                            error.transport = transport.name, freezeTransport(), debug('probe transport "%s" failed because of error: %s', name, err), 
                            self.emit("upgradeError", error);
                        }
                        function onTransportClose() {
                            onerror("transport closed");
                        }
                        function onclose() {
                            onerror("socket closed");
                        }
                        function onupgrade(to) {
                            transport && to.name != transport.name && (debug('"%s" works - aborting "%s"', to.name, transport.name), 
                            freezeTransport());
                        }
                        function cleanup() {
                            transport.removeListener("open", onTransportOpen), transport.removeListener("error", onerror), 
                            transport.removeListener("close", onTransportClose), self.removeListener("close", onclose), 
                            self.removeListener("upgrading", onupgrade);
                        }
                        Socket.priorWebsocketSuccess = !1, transport.once("open", onTransportOpen), transport.once("error", onerror), 
                        transport.once("close", onTransportClose), this.once("close", onclose), this.once("upgrading", onupgrade), 
                        transport.open();
                    }, Socket.prototype.onOpen = function() {
                        if (debug("socket open"), this.readyState = "open", Socket.priorWebsocketSuccess = "websocket" == this.transport.name, 
                        this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                            debug("starting upgrade probes");
                            for (var i = 0, l = this.upgrades.length; i < l; i++) this.probe(this.upgrades[i]);
                        }
                    }, Socket.prototype.onPacket = function(packet) {
                        if ("opening" == this.readyState || "open" == this.readyState) switch (debug('socket receive: type "%s", data "%s"', packet.type, packet.data), 
                        this.emit("packet", packet), this.emit("heartbeat"), packet.type) {
                          case "open":
                            this.onHandshake(parsejson(packet.data));
                            break;

                          case "pong":
                            this.setPing(), this.emit("pong");
                            break;

                          case "error":
                            var err = new Error("server error");
                            err.code = packet.data, this.onError(err);
                            break;

                          case "message":
                            this.emit("data", packet.data), this.emit("message", packet.data);
                        } else debug('packet received with socket readyState "%s"', this.readyState);
                    }, Socket.prototype.onHandshake = function(data) {
                        this.emit("handshake", data), this.id = data.sid, this.transport.query.sid = data.sid, 
                        this.upgrades = this.filterUpgrades(data.upgrades), this.pingInterval = data.pingInterval, 
                        this.pingTimeout = data.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), 
                        this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
                    }, Socket.prototype.onHeartbeat = function(timeout) {
                        clearTimeout(this.pingTimeoutTimer);
                        var self = this;
                        self.pingTimeoutTimer = setTimeout((function() {
                            "closed" != self.readyState && self.onClose("ping timeout");
                        }), timeout || self.pingInterval + self.pingTimeout);
                    }, Socket.prototype.setPing = function() {
                        var self = this;
                        clearTimeout(self.pingIntervalTimer), self.pingIntervalTimer = setTimeout((function() {
                            debug("writing ping packet - expecting pong within %sms", self.pingTimeout), self.ping(), 
                            self.onHeartbeat(self.pingTimeout);
                        }), self.pingInterval);
                    }, Socket.prototype.ping = function() {
                        var self = this;
                        this.sendPacket("ping", (function() {
                            self.emit("ping");
                        }));
                    }, Socket.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
                    }, Socket.prototype.flush = function() {
                        "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (debug("flushing %d packets in socket", this.writeBuffer.length), 
                        this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, 
                        this.emit("flush"));
                    }, Socket.prototype.write = Socket.prototype.send = function(msg, options, fn) {
                        return this.sendPacket("message", msg, options, fn), this;
                    }, Socket.prototype.sendPacket = function(type, data, options, fn) {
                        if ("function" == typeof data && (fn = data, data = void 0), "function" == typeof options && (fn = options, 
                        options = null), "closing" != this.readyState && "closed" != this.readyState) {
                            (options = options || {}).compress = !1 !== options.compress;
                            var packet = {
                                type,
                                data,
                                options
                            };
                            this.emit("packetCreate", packet), this.writeBuffer.push(packet), fn && this.once("flush", fn), 
                            this.flush();
                        }
                    }, Socket.prototype.close = function() {
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            this.readyState = "closing";
                            var self = this;
                            this.writeBuffer.length ? this.once("drain", (function() {
                                this.upgrading ? waitForUpgrade() : close();
                            })) : this.upgrading ? waitForUpgrade() : close();
                        }
                        function close() {
                            self.onClose("forced close"), debug("socket closing - telling transport to close"), 
                            self.transport.close();
                        }
                        function cleanupAndClose() {
                            self.removeListener("upgrade", cleanupAndClose), self.removeListener("upgradeError", cleanupAndClose), 
                            close();
                        }
                        function waitForUpgrade() {
                            self.once("upgrade", cleanupAndClose), self.once("upgradeError", cleanupAndClose);
                        }
                        return this;
                    }, Socket.prototype.onError = function(err) {
                        debug("socket error %j", err), Socket.priorWebsocketSuccess = !1, this.emit("error", err), 
                        this.onClose("transport error", err);
                    }, Socket.prototype.onClose = function(reason, desc) {
                        if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                            debug('socket close with reason: "%s"', reason);
                            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), 
                            this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", 
                            this.id = null, this.emit("close", reason, desc), this.writeBuffer = [], this.prevBufferLen = 0;
                        }
                    }, Socket.prototype.filterUpgrades = function(upgrades) {
                        for (var filteredUpgrades = [], i = 0, j = upgrades.length; i < j; i++) ~index(this.transports, upgrades[i]) && filteredUpgrades.push(upgrades[i]);
                        return filteredUpgrades;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./transport": 19,
                "./transports": 20,
                "component-emitter": 26,
                debug: 14,
                "engine.io-parser": 27,
                indexof: 33,
                parsejson: 37,
                parseqs: 38,
                parseuri: 39
            } ],
            19: [ function(_dereq_, module, exports) {
                var parser = _dereq_("engine.io-parser"), Emitter = _dereq_("component-emitter");
                function Transport(opts) {
                    this.path = opts.path, this.hostname = opts.hostname, this.port = opts.port, this.secure = opts.secure, 
                    this.query = opts.query, this.timestampParam = opts.timestampParam, this.timestampRequests = opts.timestampRequests, 
                    this.readyState = "", this.agent = opts.agent || !1, this.socket = opts.socket, 
                    this.enablesXDR = opts.enablesXDR, this.pfx = opts.pfx, this.key = opts.key, this.passphrase = opts.passphrase, 
                    this.cert = opts.cert, this.ca = opts.ca, this.ciphers = opts.ciphers, this.rejectUnauthorized = opts.rejectUnauthorized, 
                    this.extraHeaders = opts.extraHeaders;
                }
                module.exports = Transport, Emitter(Transport.prototype), Transport.prototype.onError = function(msg, desc) {
                    var err = new Error(msg);
                    return err.type = "TransportError", err.description = desc, this.emit("error", err), 
                    this;
                }, Transport.prototype.open = function() {
                    return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", 
                    this.doOpen()), this;
                }, Transport.prototype.close = function() {
                    return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), 
                    this.onClose()), this;
                }, Transport.prototype.send = function(packets) {
                    if ("open" != this.readyState) throw new Error("Transport not open");
                    this.write(packets);
                }, Transport.prototype.onOpen = function() {
                    this.readyState = "open", this.writable = !0, this.emit("open");
                }, Transport.prototype.onData = function(data) {
                    var packet = parser.decodePacket(data, this.socket.binaryType);
                    this.onPacket(packet);
                }, Transport.prototype.onPacket = function(packet) {
                    this.emit("packet", packet);
                }, Transport.prototype.onClose = function() {
                    this.readyState = "closed", this.emit("close");
                };
            }, {
                "component-emitter": 26,
                "engine.io-parser": 27
            } ],
            20: [ function(_dereq_, module, exports) {
                (function(global) {
                    var XMLHttpRequest = _dereq_("xmlhttprequest-ssl"), XHR = _dereq_("./polling-xhr"), JSONP = _dereq_("./polling-jsonp"), websocket = _dereq_("./websocket");
                    exports.polling = function(opts) {
                        var xd = !1, xs = !1, jsonp = !1 !== opts.jsonp;
                        if (global.location) {
                            var isSSL = "https:" == location.protocol, port = location.port;
                            port || (port = isSSL ? 443 : 80), xd = opts.hostname != location.hostname || port != opts.port, 
                            xs = opts.secure != isSSL;
                        }
                        if (opts.xdomain = xd, opts.xscheme = xs, "open" in new XMLHttpRequest(opts) && !opts.forceJSONP) return new XHR(opts);
                        if (!jsonp) throw new Error("JSONP disabled");
                        return new JSONP(opts);
                    }, exports.websocket = websocket;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./polling-jsonp": 21,
                "./polling-xhr": 22,
                "./websocket": 24,
                "xmlhttprequest-ssl": 25
            } ],
            21: [ function(_dereq_, module, exports) {
                (function(global) {
                    var Polling = _dereq_("./polling"), inherit = _dereq_("component-inherit");
                    module.exports = JSONPPolling;
                    var callbacks, rNewline = /\n/g, rEscapedNewline = /\\n/g;
                    function empty() {}
                    function JSONPPolling(opts) {
                        Polling.call(this, opts), this.query = this.query || {}, callbacks || (global.___eio || (global.___eio = []), 
                        callbacks = global.___eio), this.index = callbacks.length;
                        var self = this;
                        callbacks.push((function(msg) {
                            self.onData(msg);
                        })), this.query.j = this.index, global.document && global.addEventListener && global.addEventListener("beforeunload", (function() {
                            self.script && (self.script.onerror = empty);
                        }), !1);
                    }
                    inherit(JSONPPolling, Polling), JSONPPolling.prototype.supportsBinary = !1, JSONPPolling.prototype.doClose = function() {
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
                        this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), 
                        Polling.prototype.doClose.call(this);
                    }, JSONPPolling.prototype.doPoll = function() {
                        var self = this, script = document.createElement("script");
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
                        script.async = !0, script.src = this.uri(), script.onerror = function(e) {
                            self.onError("jsonp poll error", e);
                        };
                        var insertAt = document.getElementsByTagName("script")[0];
                        insertAt.parentNode.insertBefore(script, insertAt), this.script = script, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                            var iframe = document.createElement("iframe");
                            document.body.appendChild(iframe), document.body.removeChild(iframe);
                        }), 100);
                    }, JSONPPolling.prototype.doWrite = function(data, fn) {
                        var self = this;
                        if (!this.form) {
                            var iframe, form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "eio_iframe_" + this.index;
                            form.className = "socketio", form.style.position = "absolute", form.style.top = "-1000px", 
                            form.style.left = "-1000px", form.target = id, form.method = "POST", form.setAttribute("accept-charset", "utf-8"), 
                            area.name = "d", form.appendChild(area), document.body.appendChild(form), this.form = form, 
                            this.area = area;
                        }
                        function complete() {
                            initIframe(), fn();
                        }
                        function initIframe() {
                            if (self.iframe) try {
                                self.form.removeChild(self.iframe);
                            } catch (e) {
                                self.onError("jsonp polling iframe removal error", e);
                            }
                            try {
                                var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                                iframe = document.createElement(html);
                            } catch (e) {
                                (iframe = document.createElement("iframe")).name = self.iframeId, iframe.src = "javascript:0";
                            }
                            iframe.id = self.iframeId, self.form.appendChild(iframe), self.iframe = iframe;
                        }
                        this.form.action = this.uri(), initIframe(), data = data.replace(rEscapedNewline, "\\\n"), 
                        this.area.value = data.replace(rNewline, "\\n");
                        try {
                            this.form.submit();
                        } catch (e) {}
                        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                            "complete" == self.iframe.readyState && complete();
                        } : this.iframe.onload = complete;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./polling": 23,
                "component-inherit": 13
            } ],
            22: [ function(_dereq_, module, exports) {
                (function(global) {
                    var XMLHttpRequest = _dereq_("xmlhttprequest-ssl"), Polling = _dereq_("./polling"), Emitter = _dereq_("component-emitter"), inherit = _dereq_("component-inherit"), debug = _dereq_("debug")("engine.io-client:polling-xhr");
                    function empty() {}
                    function XHR(opts) {
                        if (Polling.call(this, opts), global.location) {
                            var isSSL = "https:" == location.protocol, port = location.port;
                            port || (port = isSSL ? 443 : 80), this.xd = opts.hostname != global.location.hostname || port != opts.port, 
                            this.xs = opts.secure != isSSL;
                        } else this.extraHeaders = opts.extraHeaders;
                    }
                    function Request(opts) {
                        this.method = opts.method || "GET", this.uri = opts.uri, this.xd = !!opts.xd, this.xs = !!opts.xs, 
                        this.async = !1 !== opts.async, this.data = null != opts.data ? opts.data : null, 
                        this.agent = opts.agent, this.isBinary = opts.isBinary, this.supportsBinary = opts.supportsBinary, 
                        this.enablesXDR = opts.enablesXDR, this.pfx = opts.pfx, this.key = opts.key, this.passphrase = opts.passphrase, 
                        this.cert = opts.cert, this.ca = opts.ca, this.ciphers = opts.ciphers, this.rejectUnauthorized = opts.rejectUnauthorized, 
                        this.extraHeaders = opts.extraHeaders, this.create();
                    }
                    function unloadHandler() {
                        for (var i in Request.requests) Request.requests.hasOwnProperty(i) && Request.requests[i].abort();
                    }
                    module.exports = XHR, module.exports.Request = Request, inherit(XHR, Polling), XHR.prototype.supportsBinary = !0, 
                    XHR.prototype.request = function(opts) {
                        return (opts = opts || {}).uri = this.uri(), opts.xd = this.xd, opts.xs = this.xs, 
                        opts.agent = this.agent || !1, opts.supportsBinary = this.supportsBinary, opts.enablesXDR = this.enablesXDR, 
                        opts.pfx = this.pfx, opts.key = this.key, opts.passphrase = this.passphrase, opts.cert = this.cert, 
                        opts.ca = this.ca, opts.ciphers = this.ciphers, opts.rejectUnauthorized = this.rejectUnauthorized, 
                        opts.extraHeaders = this.extraHeaders, new Request(opts);
                    }, XHR.prototype.doWrite = function(data, fn) {
                        var isBinary = "string" != typeof data && void 0 !== data, req = this.request({
                            method: "POST",
                            data,
                            isBinary
                        }), self = this;
                        req.on("success", fn), req.on("error", (function(err) {
                            self.onError("xhr post error", err);
                        })), this.sendXhr = req;
                    }, XHR.prototype.doPoll = function() {
                        debug("xhr poll");
                        var req = this.request(), self = this;
                        req.on("data", (function(data) {
                            self.onData(data);
                        })), req.on("error", (function(err) {
                            self.onError("xhr poll error", err);
                        })), this.pollXhr = req;
                    }, Emitter(Request.prototype), Request.prototype.create = function() {
                        var opts = {
                            agent: this.agent,
                            xdomain: this.xd,
                            xscheme: this.xs,
                            enablesXDR: this.enablesXDR
                        };
                        opts.pfx = this.pfx, opts.key = this.key, opts.passphrase = this.passphrase, opts.cert = this.cert, 
                        opts.ca = this.ca, opts.ciphers = this.ciphers, opts.rejectUnauthorized = this.rejectUnauthorized;
                        var xhr = this.xhr = new XMLHttpRequest(opts), self = this;
                        try {
                            debug("xhr open %s: %s", this.method, this.uri), xhr.open(this.method, this.uri, this.async);
                            try {
                                if (this.extraHeaders) for (var i in xhr.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && xhr.setRequestHeader(i, this.extraHeaders[i]);
                            } catch (e) {}
                            if (this.supportsBinary && (xhr.responseType = "arraybuffer"), "POST" == this.method) try {
                                this.isBinary ? xhr.setRequestHeader("Content-type", "application/octet-stream") : xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                            } catch (e) {}
                            "withCredentials" in xhr && (xhr.withCredentials = !0), this.hasXDR() ? (xhr.onload = function() {
                                self.onLoad();
                            }, xhr.onerror = function() {
                                self.onError(xhr.responseText);
                            }) : xhr.onreadystatechange = function() {
                                4 == xhr.readyState && (200 == xhr.status || 1223 == xhr.status ? self.onLoad() : setTimeout((function() {
                                    self.onError(xhr.status);
                                }), 0));
                            }, debug("xhr data %s", this.data), xhr.send(this.data);
                        } catch (e) {
                            return void setTimeout((function() {
                                self.onError(e);
                            }), 0);
                        }
                        global.document && (this.index = Request.requestsCount++, Request.requests[this.index] = this);
                    }, Request.prototype.onSuccess = function() {
                        this.emit("success"), this.cleanup();
                    }, Request.prototype.onData = function(data) {
                        this.emit("data", data), this.onSuccess();
                    }, Request.prototype.onError = function(err) {
                        this.emit("error", err), this.cleanup(!0);
                    }, Request.prototype.cleanup = function(fromError) {
                        if (void 0 !== this.xhr && null !== this.xhr) {
                            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = empty : this.xhr.onreadystatechange = empty, 
                            fromError) try {
                                this.xhr.abort();
                            } catch (e) {}
                            global.document && delete Request.requests[this.index], this.xhr = null;
                        }
                    }, Request.prototype.onLoad = function() {
                        var data;
                        try {
                            var contentType;
                            try {
                                contentType = this.xhr.getResponseHeader("Content-Type").split(";")[0];
                            } catch (e) {}
                            if ("application/octet-stream" === contentType) data = this.xhr.response; else if (this.supportsBinary) try {
                                data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                            } catch (e) {
                                for (var ui8Arr = new Uint8Array(this.xhr.response), dataArray = [], idx = 0, length = ui8Arr.length; idx < length; idx++) dataArray.push(ui8Arr[idx]);
                                data = String.fromCharCode.apply(null, dataArray);
                            } else data = this.xhr.responseText;
                        } catch (e) {
                            this.onError(e);
                        }
                        null != data && this.onData(data);
                    }, Request.prototype.hasXDR = function() {
                        return void 0 !== global.XDomainRequest && !this.xs && this.enablesXDR;
                    }, Request.prototype.abort = function() {
                        this.cleanup();
                    }, global.document && (Request.requestsCount = 0, Request.requests = {}, global.attachEvent ? global.attachEvent("onunload", unloadHandler) : global.addEventListener && global.addEventListener("beforeunload", unloadHandler, !1));
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./polling": 23,
                "component-emitter": 26,
                "component-inherit": 13,
                debug: 14,
                "xmlhttprequest-ssl": 25
            } ],
            23: [ function(_dereq_, module, exports) {
                var Transport = _dereq_("../transport"), parseqs = _dereq_("parseqs"), parser = _dereq_("engine.io-parser"), inherit = _dereq_("component-inherit"), yeast = _dereq_("yeast"), debug = _dereq_("debug")("engine.io-client:polling");
                module.exports = Polling;
                var hasXHR2 = null != new (_dereq_("xmlhttprequest-ssl"))({
                    xdomain: !1
                }).responseType;
                function Polling(opts) {
                    var forceBase64 = opts && opts.forceBase64;
                    hasXHR2 && !forceBase64 || (this.supportsBinary = !1), Transport.call(this, opts);
                }
                inherit(Polling, Transport), Polling.prototype.name = "polling", Polling.prototype.doOpen = function() {
                    this.poll();
                }, Polling.prototype.pause = function(onPause) {
                    var self = this;
                    function pause() {
                        debug("paused"), self.readyState = "paused", onPause();
                    }
                    if (this.readyState = "pausing", this.polling || !this.writable) {
                        var total = 0;
                        this.polling && (debug("we are currently polling - waiting to pause"), total++, 
                        this.once("pollComplete", (function() {
                            debug("pre-pause polling complete"), --total || pause();
                        }))), this.writable || (debug("we are currently writing - waiting to pause"), total++, 
                        this.once("drain", (function() {
                            debug("pre-pause writing complete"), --total || pause();
                        })));
                    } else pause();
                }, Polling.prototype.poll = function() {
                    debug("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
                }, Polling.prototype.onData = function(data) {
                    var self = this;
                    debug("polling got data %s", data);
                    parser.decodePayload(data, this.socket.binaryType, (function(packet, index, total) {
                        if ("opening" == self.readyState && self.onOpen(), "close" == packet.type) return self.onClose(), 
                        !1;
                        self.onPacket(packet);
                    })), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), 
                    "open" == this.readyState ? this.poll() : debug('ignoring poll - transport state "%s"', this.readyState));
                }, Polling.prototype.doClose = function() {
                    var self = this;
                    function close() {
                        debug("writing close packet"), self.write([ {
                            type: "close"
                        } ]);
                    }
                    "open" == this.readyState ? (debug("transport open - closing"), close()) : (debug("transport not open - deferring close"), 
                    this.once("open", close));
                }, Polling.prototype.write = function(packets) {
                    var self = this;
                    this.writable = !1;
                    var callbackfn = function() {
                        self.writable = !0, self.emit("drain");
                    };
                    self = this;
                    parser.encodePayload(packets, this.supportsBinary, (function(data) {
                        self.doWrite(data, callbackfn);
                    }));
                }, Polling.prototype.uri = function() {
                    var query = this.query || {}, schema = this.secure ? "https" : "http", port = "";
                    return !1 !== this.timestampRequests && (query[this.timestampParam] = yeast()), 
                    this.supportsBinary || query.sid || (query.b64 = 1), query = parseqs.encode(query), 
                    this.port && ("https" == schema && 443 != this.port || "http" == schema && 80 != this.port) && (port = ":" + this.port), 
                    query.length && (query = "?" + query), schema + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query;
                };
            }, {
                "../transport": 19,
                "component-inherit": 13,
                debug: 14,
                "engine.io-parser": 27,
                parseqs: 38,
                "xmlhttprequest-ssl": 25,
                yeast: 46
            } ],
            24: [ function(_dereq_, module, exports) {
                (function(global) {
                    var Transport = _dereq_("../transport"), parser = _dereq_("engine.io-parser"), parseqs = _dereq_("parseqs"), inherit = _dereq_("component-inherit"), yeast = _dereq_("yeast"), debug = _dereq_("debug")("engine.io-client:websocket"), BrowserWebSocket = global.WebSocket || global.MozWebSocket, WebSocket = BrowserWebSocket || ("undefined" != typeof window ? null : _dereq_("ws"));
                    function WS(opts) {
                        opts && opts.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = opts.perMessageDeflate, 
                        Transport.call(this, opts);
                    }
                    module.exports = WS, inherit(WS, Transport), WS.prototype.name = "websocket", WS.prototype.supportsBinary = !0, 
                    WS.prototype.doOpen = function() {
                        if (this.check()) {
                            var uri = this.uri(), opts = {
                                agent: this.agent,
                                perMessageDeflate: this.perMessageDeflate
                            };
                            opts.pfx = this.pfx, opts.key = this.key, opts.passphrase = this.passphrase, opts.cert = this.cert, 
                            opts.ca = this.ca, opts.ciphers = this.ciphers, opts.rejectUnauthorized = this.rejectUnauthorized, 
                            this.extraHeaders && (opts.headers = this.extraHeaders), this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, void 0, opts), 
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, 
                            this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
                        }
                    }, WS.prototype.addEventListeners = function() {
                        var self = this;
                        this.ws.onopen = function() {
                            self.onOpen();
                        }, this.ws.onclose = function() {
                            self.onClose();
                        }, this.ws.onmessage = function(ev) {
                            self.onData(ev.data);
                        }, this.ws.onerror = function(e) {
                            self.onError("websocket error", e);
                        };
                    }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (WS.prototype.onData = function(data) {
                        var self = this;
                        setTimeout((function() {
                            Transport.prototype.onData.call(self, data);
                        }), 0);
                    }), WS.prototype.write = function(packets) {
                        var self = this;
                        this.writable = !1;
                        for (var total = packets.length, i = 0, l = total; i < l; i++) !function(packet) {
                            parser.encodePacket(packet, self.supportsBinary, (function(data) {
                                if (!BrowserWebSocket) {
                                    var opts = {};
                                    if (packet.options && (opts.compress = packet.options.compress), self.perMessageDeflate) ("string" == typeof data ? global.Buffer.byteLength(data) : data.length) < self.perMessageDeflate.threshold && (opts.compress = !1);
                                }
                                try {
                                    BrowserWebSocket ? self.ws.send(data) : self.ws.send(data, opts);
                                } catch (e) {
                                    debug("websocket closed before onclose event");
                                }
                                --total || done();
                            }));
                        }(packets[i]);
                        function done() {
                            self.emit("flush"), setTimeout((function() {
                                self.writable = !0, self.emit("drain");
                            }), 0);
                        }
                    }, WS.prototype.onClose = function() {
                        Transport.prototype.onClose.call(this);
                    }, WS.prototype.doClose = function() {
                        void 0 !== this.ws && this.ws.close();
                    }, WS.prototype.uri = function() {
                        var query = this.query || {}, schema = this.secure ? "wss" : "ws", port = "";
                        return this.port && ("wss" == schema && 443 != this.port || "ws" == schema && 80 != this.port) && (port = ":" + this.port), 
                        this.timestampRequests && (query[this.timestampParam] = yeast()), this.supportsBinary || (query.b64 = 1), 
                        (query = parseqs.encode(query)).length && (query = "?" + query), schema + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query;
                    }, WS.prototype.check = function() {
                        return !(!WebSocket || "__initialize" in WebSocket && this.name === WS.prototype.name);
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "../transport": 19,
                "component-inherit": 13,
                debug: 14,
                "engine.io-parser": 27,
                parseqs: 38,
                ws: void 0,
                yeast: 46
            } ],
            25: [ function(_dereq_, module, exports) {
                var hasCORS = _dereq_("has-cors");
                module.exports = function(opts) {
                    var xdomain = opts.xdomain, xscheme = opts.xscheme, enablesXDR = opts.enablesXDR;
                    try {
                        if ("undefined" != typeof XMLHttpRequest && (!xdomain || hasCORS)) return new XMLHttpRequest;
                    } catch (e) {}
                    try {
                        if ("undefined" != typeof XDomainRequest && !xscheme && enablesXDR) return new XDomainRequest;
                    } catch (e) {}
                    if (!xdomain) try {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {}
                };
            }, {
                "has-cors": 32
            } ],
            26: [ function(_dereq_, module, exports) {
                function Emitter(obj) {
                    if (obj) return function(obj) {
                        for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
                        return obj;
                    }(obj);
                }
                module.exports = Emitter, Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks[event] = this._callbacks[event] || []).push(fn), 
                    this;
                }, Emitter.prototype.once = function(event, fn) {
                    var self = this;
                    function on() {
                        self.off(event, on), fn.apply(this, arguments);
                    }
                    return this._callbacks = this._callbacks || {}, on.fn = fn, this.on(event, on), 
                    this;
                }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
                    this;
                    var cb, callbacks = this._callbacks[event];
                    if (!callbacks) return this;
                    if (1 == arguments.length) return delete this._callbacks[event], this;
                    for (var i = 0; i < callbacks.length; i++) if ((cb = callbacks[i]) === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                    return this;
                }, Emitter.prototype.emit = function(event) {
                    this._callbacks = this._callbacks || {};
                    var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
                    if (callbacks) for (var i = 0, len = (callbacks = callbacks.slice(0)).length; i < len; ++i) callbacks[i].apply(this, args);
                    return this;
                }, Emitter.prototype.listeners = function(event) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[event] || [];
                }, Emitter.prototype.hasListeners = function(event) {
                    return !!this.listeners(event).length;
                };
            }, {} ],
            27: [ function(_dereq_, module, exports) {
                (function(global) {
                    var keys = _dereq_("./keys"), hasBinary = _dereq_("has-binary"), sliceBuffer = _dereq_("arraybuffer.slice"), base64encoder = _dereq_("base64-arraybuffer"), after = _dereq_("after"), utf8 = _dereq_("utf8"), isAndroid = navigator.userAgent.match(/Android/i), isPhantomJS = /PhantomJS/i.test(navigator.userAgent), dontSendBlobs = isAndroid || isPhantomJS;
                    exports.protocol = 3;
                    var packets = exports.packets = {
                        open: 0,
                        close: 1,
                        ping: 2,
                        pong: 3,
                        message: 4,
                        upgrade: 5,
                        noop: 6
                    }, packetslist = keys(packets), err = {
                        type: "error",
                        data: "parser error"
                    }, Blob = _dereq_("blob");
                    function map(ary, each, done) {
                        for (var result = new Array(ary.length), next = after(ary.length, done), eachWithIndex = function(i, el, cb) {
                            each(el, (function(error, msg) {
                                result[i] = msg, cb(error, result);
                            }));
                        }, i = 0; i < ary.length; i++) eachWithIndex(i, ary[i], next);
                    }
                    exports.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
                        "function" == typeof supportsBinary && (callback = supportsBinary, supportsBinary = !1), 
                        "function" == typeof utf8encode && (callback = utf8encode, utf8encode = null);
                        var data = void 0 === packet.data ? void 0 : packet.data.buffer || packet.data;
                        if (global.ArrayBuffer && data instanceof ArrayBuffer) return function(packet, supportsBinary, callback) {
                            if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);
                            var data = packet.data, contentArray = new Uint8Array(data), resultBuffer = new Uint8Array(1 + data.byteLength);
                            resultBuffer[0] = packets[packet.type];
                            for (var i = 0; i < contentArray.length; i++) resultBuffer[i + 1] = contentArray[i];
                            return callback(resultBuffer.buffer);
                        }(packet, supportsBinary, callback);
                        if (Blob && data instanceof global.Blob) return function(packet, supportsBinary, callback) {
                            if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);
                            if (dontSendBlobs) return function(packet, supportsBinary, callback) {
                                if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);
                                var fr = new FileReader;
                                return fr.onload = function() {
                                    packet.data = fr.result, exports.encodePacket(packet, supportsBinary, !0, callback);
                                }, fr.readAsArrayBuffer(packet.data);
                            }(packet, supportsBinary, callback);
                            var length = new Uint8Array(1);
                            length[0] = packets[packet.type];
                            var blob = new Blob([ length.buffer, packet.data ]);
                            return callback(blob);
                        }(packet, supportsBinary, callback);
                        if (data && data.base64) return function(packet, callback) {
                            var message = "b" + exports.packets[packet.type] + packet.data.data;
                            return callback(message);
                        }(packet, callback);
                        var encoded = packets[packet.type];
                        return void 0 !== packet.data && (encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data)), 
                        callback("" + encoded);
                    }, exports.encodeBase64Packet = function(packet, callback) {
                        var b64data, message = "b" + exports.packets[packet.type];
                        if (Blob && packet.data instanceof global.Blob) {
                            var fr = new FileReader;
                            return fr.onload = function() {
                                var b64 = fr.result.split(",")[1];
                                callback(message + b64);
                            }, fr.readAsDataURL(packet.data);
                        }
                        try {
                            b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
                        } catch (e) {
                            for (var typed = new Uint8Array(packet.data), basic = new Array(typed.length), i = 0; i < typed.length; i++) basic[i] = typed[i];
                            b64data = String.fromCharCode.apply(null, basic);
                        }
                        return message += global.btoa(b64data), callback(message);
                    }, exports.decodePacket = function(data, binaryType, utf8decode) {
                        if ("string" == typeof data || void 0 === data) {
                            if ("b" == data.charAt(0)) return exports.decodeBase64Packet(data.substr(1), binaryType);
                            if (utf8decode) try {
                                data = utf8.decode(data);
                            } catch (e) {
                                return err;
                            }
                            var type = data.charAt(0);
                            return Number(type) == type && packetslist[type] ? data.length > 1 ? {
                                type: packetslist[type],
                                data: data.substring(1)
                            } : {
                                type: packetslist[type]
                            } : err;
                        }
                        type = new Uint8Array(data)[0];
                        var rest = sliceBuffer(data, 1);
                        return Blob && "blob" === binaryType && (rest = new Blob([ rest ])), {
                            type: packetslist[type],
                            data: rest
                        };
                    }, exports.decodeBase64Packet = function(msg, binaryType) {
                        var type = packetslist[msg.charAt(0)];
                        if (!global.ArrayBuffer) return {
                            type,
                            data: {
                                base64: !0,
                                data: msg.substr(1)
                            }
                        };
                        var data = base64encoder.decode(msg.substr(1));
                        return "blob" === binaryType && Blob && (data = new Blob([ data ])), {
                            type,
                            data
                        };
                    }, exports.encodePayload = function(packets, supportsBinary, callback) {
                        "function" == typeof supportsBinary && (callback = supportsBinary, supportsBinary = null);
                        var isBinary = hasBinary(packets);
                        if (supportsBinary && isBinary) return Blob && !dontSendBlobs ? exports.encodePayloadAsBlob(packets, callback) : exports.encodePayloadAsArrayBuffer(packets, callback);
                        if (!packets.length) return callback("0:");
                        map(packets, (function(packet, doneCallback) {
                            exports.encodePacket(packet, !!isBinary && supportsBinary, !0, (function(message) {
                                doneCallback(null, function(message) {
                                    return message.length + ":" + message;
                                }(message));
                            }));
                        }), (function(err, results) {
                            return callback(results.join(""));
                        }));
                    }, exports.decodePayload = function(data, binaryType, callback) {
                        if ("string" != typeof data) return exports.decodePayloadAsBinary(data, binaryType, callback);
                        var packet;
                        if ("function" == typeof binaryType && (callback = binaryType, binaryType = null), 
                        "" == data) return callback(err, 0, 1);
                        for (var n, msg, length = "", i = 0, l = data.length; i < l; i++) {
                            var chr = data.charAt(i);
                            if (":" != chr) length += chr; else {
                                if ("" == length || length != (n = Number(length))) return callback(err, 0, 1);
                                if (length != (msg = data.substr(i + 1, n)).length) return callback(err, 0, 1);
                                if (msg.length) {
                                    if (packet = exports.decodePacket(msg, binaryType, !0), err.type == packet.type && err.data == packet.data) return callback(err, 0, 1);
                                    if (!1 === callback(packet, i + n, l)) return;
                                }
                                i += n, length = "";
                            }
                        }
                        return "" != length ? callback(err, 0, 1) : void 0;
                    }, exports.encodePayloadAsArrayBuffer = function(packets, callback) {
                        if (!packets.length) return callback(new ArrayBuffer(0));
                        map(packets, (function(packet, doneCallback) {
                            exports.encodePacket(packet, !0, !0, (function(data) {
                                return doneCallback(null, data);
                            }));
                        }), (function(err, encodedPackets) {
                            var totalLength = encodedPackets.reduce((function(acc, p) {
                                var len;
                                return acc + (len = "string" == typeof p ? p.length : p.byteLength).toString().length + len + 2;
                            }), 0), resultArray = new Uint8Array(totalLength), bufferIndex = 0;
                            return encodedPackets.forEach((function(p) {
                                var isString = "string" == typeof p, ab = p;
                                if (isString) {
                                    for (var view = new Uint8Array(p.length), i = 0; i < p.length; i++) view[i] = p.charCodeAt(i);
                                    ab = view.buffer;
                                }
                                resultArray[bufferIndex++] = isString ? 0 : 1;
                                var lenStr = ab.byteLength.toString();
                                for (i = 0; i < lenStr.length; i++) resultArray[bufferIndex++] = parseInt(lenStr[i]);
                                resultArray[bufferIndex++] = 255;
                                for (view = new Uint8Array(ab), i = 0; i < view.length; i++) resultArray[bufferIndex++] = view[i];
                            })), callback(resultArray.buffer);
                        }));
                    }, exports.encodePayloadAsBlob = function(packets, callback) {
                        map(packets, (function(packet, doneCallback) {
                            exports.encodePacket(packet, !0, !0, (function(encoded) {
                                var binaryIdentifier = new Uint8Array(1);
                                if (binaryIdentifier[0] = 1, "string" == typeof encoded) {
                                    for (var view = new Uint8Array(encoded.length), i = 0; i < encoded.length; i++) view[i] = encoded.charCodeAt(i);
                                    encoded = view.buffer, binaryIdentifier[0] = 0;
                                }
                                var lenStr = (encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size).toString(), lengthAry = new Uint8Array(lenStr.length + 1);
                                for (i = 0; i < lenStr.length; i++) lengthAry[i] = parseInt(lenStr[i]);
                                if (lengthAry[lenStr.length] = 255, Blob) {
                                    var blob = new Blob([ binaryIdentifier.buffer, lengthAry.buffer, encoded ]);
                                    doneCallback(null, blob);
                                }
                            }));
                        }), (function(err, results) {
                            return callback(new Blob(results));
                        }));
                    }, exports.decodePayloadAsBinary = function(data, binaryType, callback) {
                        "function" == typeof binaryType && (callback = binaryType, binaryType = null);
                        for (var bufferTail = data, buffers = [], numberTooLong = !1; bufferTail.byteLength > 0; ) {
                            for (var tailArray = new Uint8Array(bufferTail), isString = 0 === tailArray[0], msgLength = "", i = 1; 255 != tailArray[i]; i++) {
                                if (msgLength.length > 310) {
                                    numberTooLong = !0;
                                    break;
                                }
                                msgLength += tailArray[i];
                            }
                            if (numberTooLong) return callback(err, 0, 1);
                            bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length), msgLength = parseInt(msgLength);
                            var msg = sliceBuffer(bufferTail, 0, msgLength);
                            if (isString) try {
                                msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                            } catch (e) {
                                var typed = new Uint8Array(msg);
                                msg = "";
                                for (i = 0; i < typed.length; i++) msg += String.fromCharCode(typed[i]);
                            }
                            buffers.push(msg), bufferTail = sliceBuffer(bufferTail, msgLength);
                        }
                        var total = buffers.length;
                        buffers.forEach((function(buffer, i) {
                            callback(exports.decodePacket(buffer, binaryType, !0), i, total);
                        }));
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./keys": 28,
                after: 6,
                "arraybuffer.slice": 7,
                "base64-arraybuffer": 9,
                blob: 10,
                "has-binary": 29,
                utf8: 45
            } ],
            28: [ function(_dereq_, module, exports) {
                module.exports = Object.keys || function(obj) {
                    var arr = [], has = Object.prototype.hasOwnProperty;
                    for (var i in obj) has.call(obj, i) && arr.push(i);
                    return arr;
                };
            }, {} ],
            29: [ function(_dereq_, module, exports) {
                (function(global) {
                    var isArray = _dereq_("isarray");
                    module.exports = function(data) {
                        return function _hasBinary(obj) {
                            if (!obj) return !1;
                            if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) return !0;
                            if (isArray(obj)) {
                                for (var i = 0; i < obj.length; i++) if (_hasBinary(obj[i])) return !0;
                            } else if (obj && "object" == typeof obj) for (var key in obj.toJSON && (obj = obj.toJSON()), 
                            obj) if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) return !0;
                            return !1;
                        }(data);
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                isarray: 34
            } ],
            30: [ function(_dereq_, module, exports) {
                module.exports = function() {
                    return this;
                }();
            }, {} ],
            31: [ function(_dereq_, module, exports) {
                (function(global) {
                    var isArray = _dereq_("isarray");
                    module.exports = function(data) {
                        return function _hasBinary(obj) {
                            if (!obj) return !1;
                            if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) return !0;
                            if (isArray(obj)) {
                                for (var i = 0; i < obj.length; i++) if (_hasBinary(obj[i])) return !0;
                            } else if (obj && "object" == typeof obj) for (var key in obj.toJSON && "function" == typeof obj.toJSON && (obj = obj.toJSON()), 
                            obj) if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) return !0;
                            return !1;
                        }(data);
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                isarray: 34
            } ],
            32: [ function(_dereq_, module, exports) {
                var global = _dereq_("global");
                try {
                    module.exports = "XMLHttpRequest" in global && "withCredentials" in new global.XMLHttpRequest;
                } catch (err) {
                    module.exports = !1;
                }
            }, {
                global: 30
            } ],
            33: [ function(_dereq_, module, exports) {
                var indexOf = [].indexOf;
                module.exports = function(arr, obj) {
                    if (indexOf) return arr.indexOf(obj);
                    for (var i = 0; i < arr.length; ++i) if (arr[i] === obj) return i;
                    return -1;
                };
            }, {} ],
            34: [ function(_dereq_, module, exports) {
                module.exports = Array.isArray || function(arr) {
                    return "[object Array]" == Object.prototype.toString.call(arr);
                };
            }, {} ],
            35: [ function(_dereq_, module, exports) {
                (function(global) {
                    (function() {
                        var objectTypes = {
                            function: !0,
                            object: !0
                        }, freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports, root = objectTypes[typeof window] && window || this, freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && "object" == typeof global && global;
                        function runInContext(context, exports) {
                            context || (context = root.Object()), exports || (exports = root.Object());
                            var Number = context.Number || root.Number, String = context.String || root.String, Object = context.Object || root.Object, Date = context.Date || root.Date, SyntaxError = context.SyntaxError || root.SyntaxError, TypeError = context.TypeError || root.TypeError, Math = context.Math || root.Math, nativeJSON = context.JSON || root.JSON;
                            "object" == typeof nativeJSON && nativeJSON && (exports.stringify = nativeJSON.stringify, 
                            exports.parse = nativeJSON.parse);
                            var isProperty, forEach, objectProto = Object.prototype, getClass = objectProto.toString, isExtended = new Date(-0xc782b5b800cec);
                            try {
                                isExtended = -109252 == isExtended.getUTCFullYear() && 0 === isExtended.getUTCMonth() && 1 === isExtended.getUTCDate() && 10 == isExtended.getUTCHours() && 37 == isExtended.getUTCMinutes() && 6 == isExtended.getUTCSeconds() && 708 == isExtended.getUTCMilliseconds();
                            } catch (exception) {}
                            function has(name) {
                                if (undefined !== has[name]) return has[name];
                                var isSupported;
                                if ("bug-string-char-index" == name) isSupported = "a" != "a"[0]; else if ("json" == name) isSupported = has("json-stringify") && has("json-parse"); else {
                                    var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                    if ("json-stringify" == name) {
                                        var stringify = exports.stringify, stringifySupported = "function" == typeof stringify && isExtended;
                                        if (stringifySupported) {
                                            (value = function() {
                                                return 1;
                                            }).toJSON = value;
                                            try {
                                                stringifySupported = "0" === stringify(0) && "0" === stringify(new Number) && '""' == stringify(new String) && undefined === stringify(getClass) && undefined === stringify(undefined) && undefined === stringify() && "1" === stringify(value) && "[1]" == stringify([ value ]) && "[null]" == stringify([ undefined ]) && "null" == stringify(null) && "[null,null,null]" == stringify([ undefined, getClass, null ]) && stringify({
                                                    a: [ value, !0, !1, null, "\0\b\n\f\r  " ]
                                                }) == serialized && "1" === stringify(null, value) && "[\n 1,\n 2\n]" == stringify([ 1, 2 ], null, 1) && '"-271821-04-20T00:00:00.000Z"' == stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == stringify(new Date(-1));
                                            } catch (exception) {
                                                stringifySupported = !1;
                                            }
                                        }
                                        isSupported = stringifySupported;
                                    }
                                    if ("json-parse" == name) {
                                        var parse = exports.parse;
                                        if ("function" == typeof parse) try {
                                            if (0 === parse("0") && !parse(!1)) {
                                                var parseSupported = 5 == (value = parse(serialized)).a.length && 1 === value.a[0];
                                                if (parseSupported) {
                                                    try {
                                                        parseSupported = !parse('"  "');
                                                    } catch (exception) {}
                                                    if (parseSupported) try {
                                                        parseSupported = 1 !== parse("01");
                                                    } catch (exception) {}
                                                    if (parseSupported) try {
                                                        parseSupported = 1 !== parse("1.");
                                                    } catch (exception) {}
                                                }
                                            }
                                        } catch (exception) {
                                            parseSupported = !1;
                                        }
                                        isSupported = parseSupported;
                                    }
                                }
                                return has[name] = !!isSupported;
                            }
                            if (!has("json")) {
                                var charIndexBuggy = has("bug-string-char-index");
                                if (!isExtended) var floor = Math.floor, Months = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], getDay = function(year, month) {
                                    return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                                };
                                if ((isProperty = objectProto.hasOwnProperty) || (isProperty = function(property) {
                                    var constructor, members = {};
                                    return (members.__proto__ = null, members.__proto__ = {
                                        toString: 1
                                    }, members).toString != getClass ? isProperty = function(property) {
                                        var original = this.__proto__, result = property in (this.__proto__ = null, this);
                                        return this.__proto__ = original, result;
                                    } : (constructor = members.constructor, isProperty = function(property) {
                                        var parent = (this.constructor || constructor).prototype;
                                        return property in this && !(property in parent && this[property] === parent[property]);
                                    }), members = null, isProperty.call(this, property);
                                }), forEach = function(object, callback) {
                                    var Properties, members, property, size = 0;
                                    for (property in (Properties = function() {
                                        this.valueOf = 0;
                                    }).prototype.valueOf = 0, members = new Properties) isProperty.call(members, property) && size++;
                                    return Properties = members = null, size ? forEach = 2 == size ? function(object, callback) {
                                        var property, members = {}, isFunction = "[object Function]" == getClass.call(object);
                                        for (property in object) isFunction && "prototype" == property || isProperty.call(members, property) || !(members[property] = 1) || !isProperty.call(object, property) || callback(property);
                                    } : function(object, callback) {
                                        var property, isConstructor, isFunction = "[object Function]" == getClass.call(object);
                                        for (property in object) isFunction && "prototype" == property || !isProperty.call(object, property) || (isConstructor = "constructor" === property) || callback(property);
                                        (isConstructor || isProperty.call(object, property = "constructor")) && callback(property);
                                    } : (members = [ "valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor" ], 
                                    forEach = function(object, callback) {
                                        var property, length, isFunction = "[object Function]" == getClass.call(object), hasProperty = !isFunction && "function" != typeof object.constructor && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                                        for (property in object) isFunction && "prototype" == property || !hasProperty.call(object, property) || callback(property);
                                        for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) ;
                                    }), forEach(object, callback);
                                }, !has("json-stringify")) {
                                    var Escapes = {
                                        92: "\\\\",
                                        34: '\\"',
                                        8: "\\b",
                                        12: "\\f",
                                        10: "\\n",
                                        13: "\\r",
                                        9: "\\t"
                                    }, toPaddedString = function(width, value) {
                                        return ("000000" + (value || 0)).slice(-width);
                                    }, quote = function(value) {
                                        for (var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10, symbols = useCharIndex && (charIndexBuggy ? value.split("") : value); index < length; index++) {
                                            var charCode = value.charCodeAt(index);
                                            switch (charCode) {
                                              case 8:
                                              case 9:
                                              case 10:
                                              case 12:
                                              case 13:
                                              case 34:
                                              case 92:
                                                result += Escapes[charCode];
                                                break;

                                              default:
                                                if (charCode < 32) {
                                                    result += "\\u00" + toPaddedString(2, charCode.toString(16));
                                                    break;
                                                }
                                                result += useCharIndex ? symbols[index] : value.charAt(index);
                                            }
                                        }
                                        return result + '"';
                                    }, serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                                        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                                        try {
                                            value = object[property];
                                        } catch (exception) {}
                                        if ("object" == typeof value && value) if ("[object Date]" != (className = getClass.call(value)) || isProperty.call(value, "toJSON")) "function" == typeof value.toJSON && ("[object Number]" != className && "[object String]" != className && "[object Array]" != className || isProperty.call(value, "toJSON")) && (value = value.toJSON(property)); else if (value > -1 / 0 && value < 1 / 0) {
                                            if (getDay) {
                                                for (date = floor(value / 864e5), year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) ;
                                                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) ;
                                                date = 1 + date - getDay(year, month), hours = floor((time = (value % 864e5 + 864e5) % 864e5) / 36e5) % 24, 
                                                minutes = floor(time / 6e4) % 60, seconds = floor(time / 1e3) % 60, milliseconds = time % 1e3;
                                            } else year = value.getUTCFullYear(), month = value.getUTCMonth(), date = value.getUTCDate(), 
                                            hours = value.getUTCHours(), minutes = value.getUTCMinutes(), seconds = value.getUTCSeconds(), 
                                            milliseconds = value.getUTCMilliseconds();
                                            value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                                        } else value = null;
                                        if (callback && (value = callback.call(object, property, value)), null === value) return "null";
                                        if ("[object Boolean]" == (className = getClass.call(value))) return "" + value;
                                        if ("[object Number]" == className) return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                                        if ("[object String]" == className) return quote("" + value);
                                        if ("object" == typeof value) {
                                            for (length = stack.length; length--; ) if (stack[length] === value) throw TypeError();
                                            if (stack.push(value), results = [], prefix = indentation, indentation += whitespace, 
                                            "[object Array]" == className) {
                                                for (index = 0, length = value.length; index < length; index++) element = serialize(index, value, callback, properties, whitespace, indentation, stack), 
                                                results.push(undefined === element ? "null" : element);
                                                result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                                            } else forEach(properties || value, (function(property) {
                                                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                                undefined !== element && results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                                            })), result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                                            return stack.pop(), result;
                                        }
                                    };
                                    exports.stringify = function(source, filter, width) {
                                        var whitespace, callback, properties, className;
                                        if (objectTypes[typeof filter] && filter) if ("[object Function]" == (className = getClass.call(filter))) callback = filter; else if ("[object Array]" == className) {
                                            properties = {};
                                            for (var value, index = 0, length = filter.length; index < length; value = filter[index++], 
                                            ("[object String]" == (className = getClass.call(value)) || "[object Number]" == className) && (properties[value] = 1)) ;
                                        }
                                        if (width) if ("[object Number]" == (className = getClass.call(width))) {
                                            if ((width -= width % 1) > 0) for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ") ;
                                        } else "[object String]" == className && (whitespace = width.length <= 10 ? width : width.slice(0, 10));
                                        return serialize("", ((value = {})[""] = source, value), callback, properties, whitespace, "", []);
                                    };
                                }
                                if (!has("json-parse")) {
                                    var Index, Source, fromCharCode = String.fromCharCode, Unescapes = {
                                        92: "\\",
                                        34: '"',
                                        47: "/",
                                        98: "\b",
                                        116: "  ",
                                        110: "\n",
                                        102: "\f",
                                        114: "\r"
                                    }, abort = function() {
                                        throw Index = Source = null, SyntaxError();
                                    }, lex = function() {
                                        for (var value, begin, position, isSigned, charCode, source = Source, length = source.length; Index < length; ) switch (charCode = source.charCodeAt(Index)) {
                                          case 9:
                                          case 10:
                                          case 13:
                                          case 32:
                                            Index++;
                                            break;

                                          case 123:
                                          case 125:
                                          case 91:
                                          case 93:
                                          case 58:
                                          case 44:
                                            return value = charIndexBuggy ? source.charAt(Index) : source[Index], Index++, value;

                                          case 34:
                                            for (value = "@", Index++; Index < length; ) if ((charCode = source.charCodeAt(Index)) < 32) abort(); else if (92 == charCode) switch (charCode = source.charCodeAt(++Index)) {
                                              case 92:
                                              case 34:
                                              case 47:
                                              case 98:
                                              case 116:
                                              case 110:
                                              case 102:
                                              case 114:
                                                value += Unescapes[charCode], Index++;
                                                break;

                                              case 117:
                                                for (begin = ++Index, position = Index + 4; Index < position; Index++) (charCode = source.charCodeAt(Index)) >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70 || abort();
                                                value += fromCharCode("0x" + source.slice(begin, Index));
                                                break;

                                              default:
                                                abort();
                                            } else {
                                                if (34 == charCode) break;
                                                for (charCode = source.charCodeAt(Index), begin = Index; charCode >= 32 && 92 != charCode && 34 != charCode; ) charCode = source.charCodeAt(++Index);
                                                value += source.slice(begin, Index);
                                            }
                                            if (34 == source.charCodeAt(Index)) return Index++, value;
                                            abort();

                                          default:
                                            if (begin = Index, 45 == charCode && (isSigned = !0, charCode = source.charCodeAt(++Index)), 
                                            charCode >= 48 && charCode <= 57) {
                                                for (48 == charCode && ((charCode = source.charCodeAt(Index + 1)) >= 48 && charCode <= 57) && abort(), 
                                                isSigned = !1; Index < length && ((charCode = source.charCodeAt(Index)) >= 48 && charCode <= 57); Index++) ;
                                                if (46 == source.charCodeAt(Index)) {
                                                    for (position = ++Index; position < length && ((charCode = source.charCodeAt(position)) >= 48 && charCode <= 57); position++) ;
                                                    position == Index && abort(), Index = position;
                                                }
                                                if (101 == (charCode = source.charCodeAt(Index)) || 69 == charCode) {
                                                    for (43 != (charCode = source.charCodeAt(++Index)) && 45 != charCode || Index++, 
                                                    position = Index; position < length && ((charCode = source.charCodeAt(position)) >= 48 && charCode <= 57); position++) ;
                                                    position == Index && abort(), Index = position;
                                                }
                                                return +source.slice(begin, Index);
                                            }
                                            if (isSigned && abort(), "true" == source.slice(Index, Index + 4)) return Index += 4, 
                                            !0;
                                            if ("false" == source.slice(Index, Index + 5)) return Index += 5, !1;
                                            if ("null" == source.slice(Index, Index + 4)) return Index += 4, null;
                                            abort();
                                        }
                                        return "$";
                                    }, get = function(value) {
                                        var results, hasMembers;
                                        if ("$" == value && abort(), "string" == typeof value) {
                                            if ("@" == (charIndexBuggy ? value.charAt(0) : value[0])) return value.slice(1);
                                            if ("[" == value) {
                                                for (results = []; "]" != (value = lex()); hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? "]" == (value = lex()) && abort() : abort()), 
                                                "," == value && abort(), results.push(get(value));
                                                return results;
                                            }
                                            if ("{" == value) {
                                                for (results = {}; "}" != (value = lex()); hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? "}" == (value = lex()) && abort() : abort()), 
                                                "," != value && "string" == typeof value && "@" == (charIndexBuggy ? value.charAt(0) : value[0]) && ":" == lex() || abort(), 
                                                results[value.slice(1)] = get(lex());
                                                return results;
                                            }
                                            abort();
                                        }
                                        return value;
                                    }, update = function(source, property, callback) {
                                        var element = walk(source, property, callback);
                                        undefined === element ? delete source[property] : source[property] = element;
                                    }, walk = function(source, property, callback) {
                                        var length, value = source[property];
                                        if ("object" == typeof value && value) if ("[object Array]" == getClass.call(value)) for (length = value.length; length--; ) update(value, length, callback); else forEach(value, (function(property) {
                                            update(value, property, callback);
                                        }));
                                        return callback.call(source, property, value);
                                    };
                                    exports.parse = function(source, callback) {
                                        var result, value;
                                        return Index = 0, Source = "" + source, result = get(lex()), "$" != lex() && abort(), 
                                        Index = Source = null, callback && "[object Function]" == getClass.call(callback) ? walk(((value = {})[""] = result, 
                                        value), "", callback) : result;
                                    };
                                }
                            }
                            return exports.runInContext = runInContext, exports;
                        }
                        if (!freeGlobal || freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal && freeGlobal.self !== freeGlobal || (root = freeGlobal), 
                        freeExports) runInContext(root, freeExports); else {
                            var nativeJSON = root.JSON, previousJSON = root.JSON3, isRestored = !1, JSON3 = runInContext(root, root.JSON3 = {
                                noConflict: function() {
                                    return isRestored || (isRestored = !0, root.JSON = nativeJSON, root.JSON3 = previousJSON, 
                                    nativeJSON = previousJSON = null), JSON3;
                                }
                            });
                            root.JSON = {
                                parse: JSON3.parse,
                                stringify: JSON3.stringify
                            };
                        }
                    }).call(this);
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {} ],
            36: [ function(_dereq_, module, exports) {
                var s = 1e3, m = 60 * s, h = 60 * m, d = 24 * h, y = 365.25 * d;
                function plural(ms, n, name) {
                    if (!(ms < n)) return ms < 1.5 * n ? Math.floor(ms / n) + " " + name : Math.ceil(ms / n) + " " + name + "s";
                }
                module.exports = function(val, options) {
                    return options = options || {}, "string" == typeof val ? function(str) {
                        if ((str = "" + str).length > 1e4) return;
                        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                        if (!match) return;
                        var n = parseFloat(match[1]);
                        switch ((match[2] || "ms").toLowerCase()) {
                          case "years":
                          case "year":
                          case "yrs":
                          case "yr":
                          case "y":
                            return n * y;

                          case "days":
                          case "day":
                          case "d":
                            return n * d;

                          case "hours":
                          case "hour":
                          case "hrs":
                          case "hr":
                          case "h":
                            return n * h;

                          case "minutes":
                          case "minute":
                          case "mins":
                          case "min":
                          case "m":
                            return n * m;

                          case "seconds":
                          case "second":
                          case "secs":
                          case "sec":
                          case "s":
                            return n * s;

                          case "milliseconds":
                          case "millisecond":
                          case "msecs":
                          case "msec":
                          case "ms":
                            return n;
                        }
                    }(val) : options.long ? plural(ms = val, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms" : function(ms) {
                        return ms >= d ? Math.round(ms / d) + "d" : ms >= h ? Math.round(ms / h) + "h" : ms >= m ? Math.round(ms / m) + "m" : ms >= s ? Math.round(ms / s) + "s" : ms + "ms";
                    }(val);
                    var ms;
                };
            }, {} ],
            37: [ function(_dereq_, module, exports) {
                (function(global) {
                    var rvalidchars = /^[\],:{}\s]*$/, rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rtrimLeft = /^\s+/, rtrimRight = /\s+$/;
                    module.exports = function(data) {
                        return "string" == typeof data && data ? (data = data.replace(rtrimLeft, "").replace(rtrimRight, ""), 
                        global.JSON && JSON.parse ? JSON.parse(data) : rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, "")) ? new Function("return " + data)() : void 0) : null;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {} ],
            38: [ function(_dereq_, module, exports) {
                exports.encode = function(obj) {
                    var str = "";
                    for (var i in obj) obj.hasOwnProperty(i) && (str.length && (str += "&"), str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                    return str;
                }, exports.decode = function(qs) {
                    for (var qry = {}, pairs = qs.split("&"), i = 0, l = pairs.length; i < l; i++) {
                        var pair = pairs[i].split("=");
                        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                    }
                    return qry;
                };
            }, {} ],
            39: [ function(_dereq_, module, exports) {
                var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, parts = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
                module.exports = function(str) {
                    var src = str, b = str.indexOf("["), e = str.indexOf("]");
                    -1 != b && -1 != e && (str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length));
                    for (var m = re.exec(str || ""), uri = {}, i = 14; i--; ) uri[parts[i]] = m[i] || "";
                    return -1 != b && -1 != e && (uri.source = src, uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":"), 
                    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), 
                    uri.ipv6uri = !0), uri;
                };
            }, {} ],
            40: [ function(_dereq_, module, exports) {
                (function(global) {
                    var isArray = _dereq_("isarray"), isBuf = _dereq_("./is-buffer");
                    exports.deconstructPacket = function(packet) {
                        var buffers = [], packetData = packet.data;
                        var pack = packet;
                        return pack.data = function _deconstructPacket(data) {
                            if (!data) return data;
                            if (isBuf(data)) {
                                var placeholder = {
                                    _placeholder: !0,
                                    num: buffers.length
                                };
                                return buffers.push(data), placeholder;
                            }
                            if (isArray(data)) {
                                for (var newData = new Array(data.length), i = 0; i < data.length; i++) newData[i] = _deconstructPacket(data[i]);
                                return newData;
                            }
                            if ("object" == typeof data && !(data instanceof Date)) {
                                newData = {};
                                for (var key in data) newData[key] = _deconstructPacket(data[key]);
                                return newData;
                            }
                            return data;
                        }(packetData), pack.attachments = buffers.length, {
                            packet: pack,
                            buffers
                        };
                    }, exports.reconstructPacket = function(packet, buffers) {
                        return packet.data = function _reconstructPacket(data) {
                            if (data && data._placeholder) return buffers[data.num];
                            if (isArray(data)) {
                                for (var i = 0; i < data.length; i++) data[i] = _reconstructPacket(data[i]);
                                return data;
                            }
                            if (data && "object" == typeof data) {
                                for (var key in data) data[key] = _reconstructPacket(data[key]);
                                return data;
                            }
                            return data;
                        }(packet.data), packet.attachments = void 0, packet;
                    }, exports.removeBlobs = function(data, callback) {
                        var pendingBlobs = 0, bloblessData = data;
                        !function _removeBlobs(obj, curKey, containingObject) {
                            if (!obj) return obj;
                            if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                                pendingBlobs++;
                                var fileReader = new FileReader;
                                fileReader.onload = function() {
                                    containingObject ? containingObject[curKey] = this.result : bloblessData = this.result, 
                                    --pendingBlobs || callback(bloblessData);
                                }, fileReader.readAsArrayBuffer(obj);
                            } else if (isArray(obj)) for (var i = 0; i < obj.length; i++) _removeBlobs(obj[i], i, obj); else if (obj && "object" == typeof obj && !isBuf(obj)) for (var key in obj) _removeBlobs(obj[key], key, obj);
                        }(bloblessData), pendingBlobs || callback(bloblessData);
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./is-buffer": 42,
                isarray: 34
            } ],
            41: [ function(_dereq_, module, exports) {
                var debug = _dereq_("debug")("socket.io-parser"), json = _dereq_("json3"), Emitter = (_dereq_("isarray"), 
                _dereq_("component-emitter")), binary = _dereq_("./binary"), isBuf = _dereq_("./is-buffer");
                function Encoder() {}
                function encodeAsString(obj) {
                    var str = "", nsp = !1;
                    return str += obj.type, exports.BINARY_EVENT != obj.type && exports.BINARY_ACK != obj.type || (str += obj.attachments, 
                    str += "-"), obj.nsp && "/" != obj.nsp && (nsp = !0, str += obj.nsp), null != obj.id && (nsp && (str += ",", 
                    nsp = !1), str += obj.id), null != obj.data && (nsp && (str += ","), str += json.stringify(obj.data)), 
                    debug("encoded %j as %s", obj, str), str;
                }
                function Decoder() {
                    this.reconstructor = null;
                }
                function BinaryReconstructor(packet) {
                    this.reconPack = packet, this.buffers = [];
                }
                function error(data) {
                    return {
                        type: exports.ERROR,
                        data: "parser error"
                    };
                }
                exports.protocol = 4, exports.types = [ "CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR" ], 
                exports.CONNECT = 0, exports.DISCONNECT = 1, exports.EVENT = 2, exports.ACK = 3, 
                exports.ERROR = 4, exports.BINARY_EVENT = 5, exports.BINARY_ACK = 6, exports.Encoder = Encoder, 
                exports.Decoder = Decoder, Encoder.prototype.encode = function(obj, callback) {
                    (debug("encoding packet %j", obj), exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) ? function(obj, callback) {
                        function writeEncoding(bloblessData) {
                            var deconstruction = binary.deconstructPacket(bloblessData), pack = encodeAsString(deconstruction.packet), buffers = deconstruction.buffers;
                            buffers.unshift(pack), callback(buffers);
                        }
                        binary.removeBlobs(obj, writeEncoding);
                    }(obj, callback) : callback([ encodeAsString(obj) ]);
                }, Emitter(Decoder.prototype), Decoder.prototype.add = function(obj) {
                    var packet;
                    if ("string" == typeof obj) packet = function(str) {
                        var p = {}, i = 0;
                        if (p.type = Number(str.charAt(0)), null == exports.types[p.type]) return error();
                        if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
                            for (var buf = ""; "-" != str.charAt(++i) && (buf += str.charAt(i), i != str.length); ) ;
                            if (buf != Number(buf) || "-" != str.charAt(i)) throw new Error("Illegal attachments");
                            p.attachments = Number(buf);
                        }
                        if ("/" == str.charAt(i + 1)) for (p.nsp = ""; ++i; ) {
                            if ("," == (c = str.charAt(i))) break;
                            if (p.nsp += c, i == str.length) break;
                        } else p.nsp = "/";
                        var next = str.charAt(i + 1);
                        if ("" !== next && Number(next) == next) {
                            for (p.id = ""; ++i; ) {
                                var c;
                                if (null == (c = str.charAt(i)) || Number(c) != c) {
                                    --i;
                                    break;
                                }
                                if (p.id += str.charAt(i), i == str.length) break;
                            }
                            p.id = Number(p.id);
                        }
                        if (str.charAt(++i)) try {
                            p.data = json.parse(str.substr(i));
                        } catch (e) {
                            return error();
                        }
                        return debug("decoded %s as %j", str, p), p;
                    }(obj), exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type ? (this.reconstructor = new BinaryReconstructor(packet), 
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", packet)) : this.emit("decoded", packet); else {
                        if (!isBuf(obj) && !obj.base64) throw new Error("Unknown type: " + obj);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (packet = this.reconstructor.takeBinaryData(obj)) && (this.reconstructor = null, 
                        this.emit("decoded", packet));
                    }
                }, Decoder.prototype.destroy = function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction();
                }, BinaryReconstructor.prototype.takeBinaryData = function(binData) {
                    if (this.buffers.push(binData), this.buffers.length == this.reconPack.attachments) {
                        var packet = binary.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), packet;
                    }
                    return null;
                }, BinaryReconstructor.prototype.finishedReconstruction = function() {
                    this.reconPack = null, this.buffers = [];
                };
            }, {
                "./binary": 40,
                "./is-buffer": 42,
                "component-emitter": 43,
                debug: 14,
                isarray: 34,
                json3: 35
            } ],
            42: [ function(_dereq_, module, exports) {
                (function(global) {
                    module.exports = function(obj) {
                        return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {} ],
            43: [ function(_dereq_, module, exports) {
                arguments[4][26][0].apply(exports, arguments);
            }, {
                dup: 26
            } ],
            44: [ function(_dereq_, module, exports) {
                module.exports = function(list, index) {
                    for (var array = [], i = (index = index || 0) || 0; i < list.length; i++) array[i - index] = list[i];
                    return array;
                };
            }, {} ],
            45: [ function(_dereq_, module, exports) {
                (function(global) {
                    !function(root) {
                        var freeExports = "object" == typeof exports && exports, freeModule = "object" == typeof module && module && module.exports == freeExports && module, freeGlobal = "object" == typeof global && global;
                        freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal || (root = freeGlobal);
                        var byteArray, byteCount, byteIndex, stringFromCharCode = String.fromCharCode;
                        function ucs2decode(string) {
                            for (var value, extra, output = [], counter = 0, length = string.length; counter < length; ) (value = string.charCodeAt(counter++)) >= 55296 && value <= 56319 && counter < length ? 56320 == (64512 & (extra = string.charCodeAt(counter++))) ? output.push(((1023 & value) << 10) + (1023 & extra) + 65536) : (output.push(value), 
                            counter--) : output.push(value);
                            return output;
                        }
                        function checkScalarValue(codePoint) {
                            if (codePoint >= 55296 && codePoint <= 57343) throw Error("Lone surrogate U+" + codePoint.toString(16).toUpperCase() + " is not a scalar value");
                        }
                        function createByte(codePoint, shift) {
                            return stringFromCharCode(codePoint >> shift & 63 | 128);
                        }
                        function encodeCodePoint(codePoint) {
                            if (0 == (4294967168 & codePoint)) return stringFromCharCode(codePoint);
                            var symbol = "";
                            return 0 == (4294965248 & codePoint) ? symbol = stringFromCharCode(codePoint >> 6 & 31 | 192) : 0 == (4294901760 & codePoint) ? (checkScalarValue(codePoint), 
                            symbol = stringFromCharCode(codePoint >> 12 & 15 | 224), symbol += createByte(codePoint, 6)) : 0 == (4292870144 & codePoint) && (symbol = stringFromCharCode(codePoint >> 18 & 7 | 240), 
                            symbol += createByte(codePoint, 12), symbol += createByte(codePoint, 6)), symbol += stringFromCharCode(63 & codePoint | 128);
                        }
                        function readContinuationByte() {
                            if (byteIndex >= byteCount) throw Error("Invalid byte index");
                            var continuationByte = 255 & byteArray[byteIndex];
                            if (byteIndex++, 128 == (192 & continuationByte)) return 63 & continuationByte;
                            throw Error("Invalid continuation byte");
                        }
                        function decodeSymbol() {
                            var byte1, codePoint;
                            if (byteIndex > byteCount) throw Error("Invalid byte index");
                            if (byteIndex == byteCount) return !1;
                            if (byte1 = 255 & byteArray[byteIndex], byteIndex++, 0 == (128 & byte1)) return byte1;
                            if (192 == (224 & byte1)) {
                                if ((codePoint = (31 & byte1) << 6 | readContinuationByte()) >= 128) return codePoint;
                                throw Error("Invalid continuation byte");
                            }
                            if (224 == (240 & byte1)) {
                                if ((codePoint = (15 & byte1) << 12 | readContinuationByte() << 6 | readContinuationByte()) >= 2048) return checkScalarValue(codePoint), 
                                codePoint;
                                throw Error("Invalid continuation byte");
                            }
                            if (240 == (248 & byte1) && (codePoint = (15 & byte1) << 18 | readContinuationByte() << 12 | readContinuationByte() << 6 | readContinuationByte()) >= 65536 && codePoint <= 1114111) return codePoint;
                            throw Error("Invalid UTF-8 detected");
                        }
                        var utf8 = {
                            version: "2.0.0",
                            encode: function(string) {
                                for (var codePoints = ucs2decode(string), length = codePoints.length, index = -1, byteString = ""; ++index < length; ) byteString += encodeCodePoint(codePoints[index]);
                                return byteString;
                            },
                            decode: function(byteString) {
                                byteArray = ucs2decode(byteString), byteCount = byteArray.length, byteIndex = 0;
                                for (var tmp, codePoints = []; !1 !== (tmp = decodeSymbol()); ) codePoints.push(tmp);
                                return function(array) {
                                    for (var value, length = array.length, index = -1, output = ""; ++index < length; ) (value = array[index]) > 65535 && (output += stringFromCharCode((value -= 65536) >>> 10 & 1023 | 55296), 
                                    value = 56320 | 1023 & value), output += stringFromCharCode(value);
                                    return output;
                                }(codePoints);
                            }
                        };
                        if (freeExports && !freeExports.nodeType) if (freeModule) freeModule.exports = utf8; else {
                            var hasOwnProperty = {}.hasOwnProperty;
                            for (var key in utf8) hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                        } else root.utf8 = utf8;
                    }(this);
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {} ],
            46: [ function(_dereq_, module, exports) {
                "use strict";
                var prev, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), map = {}, seed = 0, i = 0;
                function encode(num) {
                    var encoded = "";
                    do {
                        encoded = alphabet[num % 64] + encoded, num = Math.floor(num / 64);
                    } while (num > 0);
                    return encoded;
                }
                function yeast() {
                    var now = encode(+new Date);
                    return now !== prev ? (seed = 0, prev = now) : now + "." + encode(seed++);
                }
                for (;i < 64; i++) map[alphabet[i]] = i;
                yeast.encode = encode, yeast.decode = function(str) {
                    var decoded = 0;
                    for (i = 0; i < str.length; i++) decoded = 64 * decoded + map[str.charAt(i)];
                    return decoded;
                }, module.exports = yeast;
            }, {} ]
        }, {}, [ 1 ])(1);
    })), function() {
        function i(i, t) {
            for (var s = 2; s < arguments.length; s++) for (var h = 0; h < arguments[s].length; h++) i[t++] = arguments[s].charAt(h);
        }
        function s(i) {
            return String.fromCharCode(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i);
        }
        function h(i) {
            return String.fromCharCode(255 & i, i >> 8 & 255);
        }
        window.PNGlib = function(f, e, r) {
            this.width = f, this.height = e, this.depth = r, this.pix_size = e * (f + 1), this.data_size = 2 + this.pix_size + 5 * Math.floor((65534 + this.pix_size) / 65535) + 4, 
            this.ihdr_offs = 0, this.ihdr_size = 25, this.plte_offs = this.ihdr_offs + this.ihdr_size, 
            this.plte_size = 8 + 3 * r + 4, this.trns_offs = this.plte_offs + this.plte_size, 
            this.trns_size = 8 + r + 4, this.idat_offs = this.trns_offs + this.trns_size, this.idat_size = 8 + this.data_size + 4, 
            this.iend_offs = this.idat_offs + this.idat_size, this.iend_size = 12, this.buffer_size = this.iend_offs + this.iend_size, 
            this.buffer = new Array, this.palette = new Object, this.pindex = 0;
            for (var n = new Array, o = 0; o < this.buffer_size; o++) this.buffer[o] = "\0";
            i(this.buffer, this.ihdr_offs, s(this.ihdr_size - 12), "IHDR", s(f), s(e), "\b"), 
            i(this.buffer, this.plte_offs, s(this.plte_size - 12), "PLTE"), i(this.buffer, this.trns_offs, s(this.trns_size - 12), "tRNS"), 
            i(this.buffer, this.idat_offs, s(this.idat_size - 12), "IDAT"), i(this.buffer, this.iend_offs, s(this.iend_size - 12), "IEND");
            var a = 30912;
            a += 31 - a % 31, i(this.buffer, this.idat_offs + 8, function(i) {
                return String.fromCharCode(i >> 8 & 255, 255 & i);
            }(a));
            for (o = 0; (o << 16) - 1 < this.pix_size; o++) {
                var d, _;
                o + 65535 < this.pix_size ? (d = 65535, _ = "\0") : (d = this.pix_size - (o << 16) - o, 
                _ = ""), i(this.buffer, this.idat_offs + 8 + 2 + (o << 16) + (o << 2), _, h(d), h(~d));
            }
            for (o = 0; 256 > o; o++) {
                for (var u = o, z = 0; 8 > z; z++) u = 1 & u ? -306674912 ^ u >> 1 & 2147483647 : u >> 1 & 2147483647;
                n[o] = u;
            }
            this.index = function(i, t) {
                var s = t * (this.width + 1) + i + 1;
                return this.idat_offs + 8 + 2 + 5 * Math.floor(s / 65535 + 1) + s;
            }, this.color = function(i, t, s, h) {
                var f = (((h = h >= 0 ? h : 255) << 8 | i) << 8 | t) << 8 | s;
                if (void 0 === this.palette[f]) {
                    if (this.pindex == this.depth) return "\0";
                    var e = this.plte_offs + 8 + 3 * this.pindex;
                    this.buffer[e + 0] = String.fromCharCode(i), this.buffer[e + 1] = String.fromCharCode(t), 
                    this.buffer[e + 2] = String.fromCharCode(s), this.buffer[this.trns_offs + 8 + this.pindex] = String.fromCharCode(h), 
                    this.palette[f] = String.fromCharCode(this.pindex++);
                }
                return this.palette[f];
            }, this.getBase64 = function() {
                var i, t, s, h, f, e, r, n = this.getDump(), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = n.length, d = 0, _ = "";
                do {
                    h = (i = n.charCodeAt(d)) >> 2, f = (3 & i) << 4 | (t = n.charCodeAt(d + 1)) >> 4, 
                    s = n.charCodeAt(d + 2), e = d + 2 > a ? 64 : (15 & t) << 2 | s >> 6, r = d + 3 > a ? 64 : 63 & s, 
                    _ += o.charAt(h) + o.charAt(f) + o.charAt(e) + o.charAt(r);
                } while ((d += 3) < a);
                return _;
            }, this.getDump = function() {
                function t(t, h, f) {
                    for (var e = -1, r = 4; f - 4 > r; r += 1) e = n[255 & (e ^ t[h + r].charCodeAt(0))] ^ e >> 8 & 16777215;
                    i(t, h + f - 4, s(-1 ^ e));
                }
                for (var h = 65521, e = 1, r = 0, o = 5552, a = 0; a < this.height; a++) for (var d = -1; d < this.width; d++) r += e += this.buffer[this.index(d, a)].charCodeAt(0), 
                0 == (o -= 1) && (e %= h, r %= h, o = 5552);
                return e %= h, r %= h, i(this.buffer, this.idat_offs + this.idat_size - 8, s(r << 16 | e)), 
                t(this.buffer, this.ihdr_offs, this.ihdr_size), t(this.buffer, this.plte_offs, this.plte_size), 
                t(this.buffer, this.trns_offs, this.trns_size), t(this.buffer, this.idat_offs, this.idat_size), 
                t(this.buffer, this.iend_offs, this.iend_size), "PNG\r\n\n" + this.buffer.join("");
            };
        };
    }(), Identicon = function(n, t, r) {
        this.hash = n, this.size = t || 64, this.margin = r || 0;
    }, Identicon.prototype = {
        hash: null,
        size: null,
        margin: null,
        render: function() {
            var n, t, r = this.hash, e = this.size, i = Math.floor(e * this.margin), s = Math.floor((e - 2 * i) / 5), o = new PNGlib(e, e, 256), h = o.color(0, 0, 0, 0), a = this.hsl2rgb(parseInt(r.substr(-7), 16) / 268435455, .5, .7), c = o.color(255 * a[0], 255 * a[1], 255 * a[2]);
            for (n = 0; 15 > n; n++) t = parseInt(r.charAt(n), 16) % 2 ? h : c, 5 > n ? this.rectangle(2 * s + i, n * s + i, s, s, t, o) : 10 > n ? (this.rectangle(1 * s + i, (n - 5) * s + i, s, s, t, o), 
            this.rectangle(3 * s + i, (n - 5) * s + i, s, s, t, o)) : 15 > n && (this.rectangle(0 * s + i, (n - 10) * s + i, s, s, t, o), 
            this.rectangle(4 * s + i, (n - 10) * s + i, s, s, t, o));
            return o;
        },
        rectangle: function(n, t, r, e, i, s) {
            var o, h;
            for (o = n; n + r > o; o++) for (h = t; t + e > h; h++) s.buffer[s.index(o, h)] = i;
        },
        hsl2rgb: function(n, t, r) {
            return [ (t = [ r += t *= .5 > r ? r : 1 - r, r - (n *= 6) % 1 * t * 2, r -= t *= 2, r, r + n % 1 * t, r + t ])[~~n % 6], t[(16 | n) % 6], t[(8 | n) % 6] ];
        },
        toString: function() {
            return this.render().getBase64();
        }
    }, window.Identicon = Identicon;
    var Sha256 = {
        hash: function(t) {
            t = t.utf8Encode();
            for (var r = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], e = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], n = (t += String.fromCharCode(128)).length / 4 + 2, o = Math.ceil(n / 16), a = new Array(o), h = 0; o > h; h++) {
                a[h] = new Array(16);
                for (var S = 0; 16 > S; S++) a[h][S] = t.charCodeAt(64 * h + 4 * S) << 24 | t.charCodeAt(64 * h + 4 * S + 1) << 16 | t.charCodeAt(64 * h + 4 * S + 2) << 8 | t.charCodeAt(64 * h + 4 * S + 3);
            }
            a[o - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), a[o - 1][14] = Math.floor(a[o - 1][14]), 
            a[o - 1][15] = 8 * (t.length - 1) & 4294967295;
            var u, f, c, i, d, R, p, y, x = new Array(64);
            for (h = 0; o > h; h++) {
                for (var O = 0; 16 > O; O++) x[O] = a[h][O];
                for (O = 16; 64 > O; O++) x[O] = Sha256.σ1(x[O - 2]) + x[O - 7] + Sha256.σ0(x[O - 15]) + x[O - 16] & 4294967295;
                u = e[0], f = e[1], c = e[2], i = e[3], d = e[4], R = e[5], p = e[6], y = e[7];
                for (O = 0; 64 > O; O++) {
                    var T = y + Sha256.Σ1(d) + Sha256.Ch(d, R, p) + r[O] + x[O], s = Sha256.Σ0(u) + Sha256.Maj(u, f, c);
                    y = p, p = R, R = d, d = i + T & 4294967295, i = c, c = f, f = u, u = T + s & 4294967295;
                }
                e[0] = e[0] + u & 4294967295, e[1] = e[1] + f & 4294967295, e[2] = e[2] + c & 4294967295, 
                e[3] = e[3] + i & 4294967295, e[4] = e[4] + d & 4294967295, e[5] = e[5] + R & 4294967295, 
                e[6] = e[6] + p & 4294967295, e[7] = e[7] + y & 4294967295;
            }
            return Sha256.toHexStr(e[0]) + Sha256.toHexStr(e[1]) + Sha256.toHexStr(e[2]) + Sha256.toHexStr(e[3]) + Sha256.toHexStr(e[4]) + Sha256.toHexStr(e[5]) + Sha256.toHexStr(e[6]) + Sha256.toHexStr(e[7]);
        },
        ROTR: function(t, r) {
            return r >>> t | r << 32 - t;
        },
        Σ0: function(t) {
            return Sha256.ROTR(2, t) ^ Sha256.ROTR(13, t) ^ Sha256.ROTR(22, t);
        },
        Σ1: function(t) {
            return Sha256.ROTR(6, t) ^ Sha256.ROTR(11, t) ^ Sha256.ROTR(25, t);
        },
        σ0: function(t) {
            return Sha256.ROTR(7, t) ^ Sha256.ROTR(18, t) ^ t >>> 3;
        },
        σ1: function(t) {
            return Sha256.ROTR(17, t) ^ Sha256.ROTR(19, t) ^ t >>> 10;
        },
        Ch: function(t, r, e) {
            return t & r ^ ~t & e;
        },
        Maj: function(t, r, e) {
            return t & r ^ t & e ^ r & e;
        },
        toHexStr: function(t) {
            for (var e = "", n = 7; n >= 0; n--) e += (t >>> 4 * n & 15).toString(16);
            return e;
        }
    };
    void 0 === String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
        return unescape(encodeURIComponent(this));
    }), void 0 === String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
        try {
            return decodeURIComponent(escape(this));
        } catch (t) {
            return this;
        }
    }), "undefined" != typeof module && module.exports && (module.exports = Sha256), 
    "function" == typeof define && define.amd && define([], (function() {
        return Sha256;
    }));
}