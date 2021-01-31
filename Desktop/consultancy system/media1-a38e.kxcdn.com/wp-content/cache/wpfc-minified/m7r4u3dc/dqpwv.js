! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(a) {
    var e, t, n, i;

    function r(e, t) {
        var n, i, r, o = e.nodeName.toLowerCase();
        return "area" === o ? (i = (n = e.parentNode).name, !(!e.href || !i || "map" !== n.nodeName.toLowerCase()) && (!!(r = a("img[usemap='#" + i + "']")[0]) && s(r))) : (/^(input|select|textarea|button|object)$/.test(o) ? !e.disabled : "a" === o && e.href || t) && s(e)
    }

    function s(e) {
        return a.expr.filters.visible(e) && !a(e).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        scrollParent: function(e) {
            var t = this.css("position"),
                n = "absolute" === t,
                i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                r = this.parents().filter(function() {
                    var e = a(this);
                    return (!n || "static" !== e.css("position")) && i.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== t && r.length ? r : a(this[0].ownerDocument || document)
        },
        uniqueId: (e = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(t) {
            return function(e) {
                return !!a.data(e, t)
            }
        }) : function(e, t, n) {
            return !!a.data(e, n[3])
        },
        focusable: function(e) {
            return r(e, !isNaN(a.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var t = a.attr(e, "tabindex"),
                n = isNaN(t);
            return (n || 0 <= t) && r(e, !n)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(e, n) {
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            i = n.toLowerCase(),
            o = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };

        function s(e, t, n, i) {
            return a.each(r, function() {
                t -= parseFloat(a.css(e, "padding" + this)) || 0, n && (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0), i && (t -= parseFloat(a.css(e, "margin" + this)) || 0)
            }), t
        }
        a.fn["inner" + n] = function(e) {
            return void 0 === e ? o["inner" + n].call(this) : this.each(function() {
                a(this).css(i, s(this, e) + "px")
            })
        }, a.fn["outer" + n] = function(e, t) {
            return "number" != typeof e ? o["outer" + n].call(this, e) : this.each(function() {
                a(this).css(i, s(this, e, !0, t) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = (t = a.fn.removeData, function(e) {
        return arguments.length ? t.call(this, a.camelCase(e)) : t.call(this)
    })), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
        focus: (i = a.fn.focus, function(t, n) {
            return "number" == typeof t ? this.each(function() {
                var e = this;
                setTimeout(function() {
                    a(e).focus(), n && n.call(e)
                }, t)
            }) : i.apply(this, arguments)
        }),
        disableSelection: (n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(n + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var t, n, i = a(this[0]); i.length && i[0] !== document;) {
                    if (("absolute" === (t = i.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(i.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    i = i.parent()
                }
            return 0
        }
    }), a.ui.plugin = {
        add: function(e, t, n) {
            var i, r = a.ui[e].prototype;
            for (i in n) r.plugins[i] = r.plugins[i] || [], r.plugins[i].push([t, n[i]])
        },
        call: function(e, t, n, i) {
            var r, o = e.plugins[t];
            if (o && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (r = 0; r < o.length; r++) e.options[o[r][0]] && o[r][1].apply(e.element, n)
        }
    }
});
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(I) {
    return function() {
        I.ui = I.ui || {};
        var n, H, x = Math.max,
            T = Math.abs,
            L = Math.round,
            o = /left|center|right/,
            l = /top|center|bottom/,
            f = /[\+\-]\d+(\.[\d]+)?%?/,
            s = /^\w+/,
            h = /%$/,
            i = I.fn.position;

        function P(t, i, e) {
            return [parseFloat(t[0]) * (h.test(t[0]) ? i / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? e / 100 : 1)]
        }

        function D(t, i) {
            return parseInt(I.css(t, i), 10) || 0
        }
        I.position = {
                scrollbarWidth: function() {
                    if (void 0 !== n) return n;
                    var t, i, e = I("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = e.children()[0];
                    return I("body").append(e), t = o.offsetWidth, e.css("overflow", "scroll"), t === (i = o.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        o = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === e || "auto" === e && t.height < t.element[0].scrollHeight ? I.position.scrollbarWidth() : 0,
                        height: o ? I.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = I(t || window),
                        e = I.isWindow(i[0]),
                        o = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: e,
                        isDocument: o,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: e || o ? i.width() : i.outerWidth(),
                        height: e || o ? i.height() : i.outerHeight()
                    }
                }
            }, I.fn.position = function(c) {
                if (!c || !c.of) return i.apply(this, arguments);
                c = I.extend({}, c);
                var d, a, g, u, m, t, w = I(c.of),
                    W = I.position.getWithinInfo(c.within),
                    v = I.position.getScrollInfo(W),
                    y = (c.collision || "flip").split(" "),
                    b = {};
                return t = function(t) {
                    var i = t[0];
                    return 9 === i.nodeType ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : I.isWindow(i) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    }
                }(w), w[0].preventDefault && (c.at = "left top"), a = t.width, g = t.height, u = t.offset, m = I.extend({}, u), I.each(["my", "at"], function() {
                    var t, i, e = (c[this] || "").split(" ");
                    1 === e.length && (e = o.test(e[0]) ? e.concat(["center"]) : l.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = l.test(e[1]) ? e[1] : "center", t = f.exec(e[0]), i = f.exec(e[1]), b[this] = [t ? t[0] : 0, i ? i[0] : 0], c[this] = [s.exec(e[0])[0], s.exec(e[1])[0]]
                }), 1 === y.length && (y[1] = y[0]), "right" === c.at[0] ? m.left += a : "center" === c.at[0] && (m.left += a / 2), "bottom" === c.at[1] ? m.top += g : "center" === c.at[1] && (m.top += g / 2), d = P(b.at, a, g), m.left += d[0], m.top += d[1], this.each(function() {
                    var e, t, f = I(this),
                        s = f.outerWidth(),
                        h = f.outerHeight(),
                        i = D(this, "marginLeft"),
                        o = D(this, "marginTop"),
                        n = s + i + D(this, "marginRight") + v.width,
                        l = h + o + D(this, "marginBottom") + v.height,
                        r = I.extend({}, m),
                        p = P(b.my, f.outerWidth(), f.outerHeight());
                    "right" === c.my[0] ? r.left -= s : "center" === c.my[0] && (r.left -= s / 2), "bottom" === c.my[1] ? r.top -= h : "center" === c.my[1] && (r.top -= h / 2), r.left += p[0], r.top += p[1], H || (r.left = L(r.left), r.top = L(r.top)), e = {
                        marginLeft: i,
                        marginTop: o
                    }, I.each(["left", "top"], function(t, i) {
                        I.ui.position[y[t]] && I.ui.position[y[t]][i](r, {
                            targetWidth: a,
                            targetHeight: g,
                            elemWidth: s,
                            elemHeight: h,
                            collisionPosition: e,
                            collisionWidth: n,
                            collisionHeight: l,
                            offset: [d[0] + p[0], d[1] + p[1]],
                            my: c.my,
                            at: c.at,
                            within: W,
                            elem: f
                        })
                    }), c.using && (t = function(t) {
                        var i = u.left - r.left,
                            e = i + a - s,
                            o = u.top - r.top,
                            n = o + g - h,
                            l = {
                                target: {
                                    element: w,
                                    left: u.left,
                                    top: u.top,
                                    width: a,
                                    height: g
                                },
                                element: {
                                    element: f,
                                    left: r.left,
                                    top: r.top,
                                    width: s,
                                    height: h
                                },
                                horizontal: e < 0 ? "left" : 0 < i ? "right" : "center",
                                vertical: n < 0 ? "top" : 0 < o ? "bottom" : "middle"
                            };
                        a < s && T(i + e) < a && (l.horizontal = "center"), g < h && T(o + n) < g && (l.vertical = "middle"), x(T(i), T(e)) > x(T(o), T(n)) ? l.important = "horizontal" : l.important = "vertical", c.using.call(this, t, l)
                    }), f.offset(I.extend(r, {
                        using: t
                    }))
                })
            }, I.ui.position = {
                fit: {
                    left: function(t, i) {
                        var e, o = i.within,
                            n = o.isWindow ? o.scrollLeft : o.offset.left,
                            l = o.width,
                            f = t.left - i.collisionPosition.marginLeft,
                            s = n - f,
                            h = f + i.collisionWidth - l - n;
                        i.collisionWidth > l ? 0 < s && h <= 0 ? (e = t.left + s + i.collisionWidth - l - n, t.left += s - e) : t.left = 0 < h && s <= 0 ? n : h < s ? n + l - i.collisionWidth : n : 0 < s ? t.left += s : 0 < h ? t.left -= h : t.left = x(t.left - f, t.left)
                    },
                    top: function(t, i) {
                        var e, o = i.within,
                            n = o.isWindow ? o.scrollTop : o.offset.top,
                            l = i.within.height,
                            f = t.top - i.collisionPosition.marginTop,
                            s = n - f,
                            h = f + i.collisionHeight - l - n;
                        i.collisionHeight > l ? 0 < s && h <= 0 ? (e = t.top + s + i.collisionHeight - l - n, t.top += s - e) : t.top = 0 < h && s <= 0 ? n : h < s ? n + l - i.collisionHeight : n : 0 < s ? t.top += s : 0 < h ? t.top -= h : t.top = x(t.top - f, t.top)
                    }
                },
                flip: {
                    left: function(t, i) {
                        var e, o, n = i.within,
                            l = n.offset.left + n.scrollLeft,
                            f = n.width,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            h = t.left - i.collisionPosition.marginLeft,
                            r = h - s,
                            p = h + i.collisionWidth - f - s,
                            c = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                            d = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0,
                            a = -2 * i.offset[0];
                        r < 0 ? ((e = t.left + c + d + a + i.collisionWidth - f - l) < 0 || e < T(r)) && (t.left += c + d + a) : 0 < p && (0 < (o = t.left - i.collisionPosition.marginLeft + c + d + a - s) || T(o) < p) && (t.left += c + d + a)
                    },
                    top: function(t, i) {
                        var e, o, n = i.within,
                            l = n.offset.top + n.scrollTop,
                            f = n.height,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            h = t.top - i.collisionPosition.marginTop,
                            r = h - s,
                            p = h + i.collisionHeight - f - s,
                            c = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                            d = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0,
                            a = -2 * i.offset[1];
                        r < 0 ? ((o = t.top + c + d + a + i.collisionHeight - f - l) < 0 || o < T(r)) && (t.top += c + d + a) : 0 < p && (0 < (e = t.top - i.collisionPosition.marginTop + c + d + a - s) || T(e) < p) && (t.top += c + d + a)
                    }
                },
                flipfit: {
                    left: function() {
                        I.ui.position.flip.left.apply(this, arguments), I.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        I.ui.position.flip.top.apply(this, arguments), I.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, i, e, o, n, l = document.getElementsByTagName("body")[0],
                    f = document.createElement("div");
                for (n in t = document.createElement(l ? "div" : "body"), e = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, l && I.extend(e, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }), e) t.style[n] = e[n];
                t.appendChild(f), (i = l || document.documentElement).insertBefore(t, i.firstChild), f.style.cssText = "position: absolute; left: 10.7432222px;", o = I(f).offset().left, H = 10 < o && o < 11, t.innerHTML = "", i.removeChild(t)
            }()
    }(), I.ui.position
});
(function(t, e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        module.exports = e(require("jquery"))
    } else {
        e(t.jQuery)
    }
})(this, function(t) {
    t.transit = {
        version: "0.9.11",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var e = document.createElement("div");
    var n = {};

    function i(t) {
        if (t in e.style) return t;
        var n = ["Moz", "Webkit", "O", "ms"];
        var i = t.charAt(0).toUpperCase() + t.substr(1);
        for (var r = 0; r < n.length; ++r) {
            var s = n[r] + i;
            if (s in e.style) {
                return s
            }
        }
    }

    function r() {
        e.style[n.transform] = "";
        e.style[n.transform] = "rotateY(90deg)";
        return e.style[n.transform] !== ""
    }
    var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = i("transition");
    n.transitionDelay = i("transitionDelay");
    n.transform = i("transform");
    n.transformOrigin = i("transformOrigin");
    n.filter = i("Filter");
    n.transform3d = r();
    var a = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var o = n.transitionEnd = a[n.transition] || null;
    for (var u in n) {
        if (n.hasOwnProperty(u) && typeof t.support[u] === "undefined") {
            t.support[u] = n[u]
        }
    }
    e = null;
    t.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    t.cssHooks["transit:transform"] = {
        get: function(e) {
            return t(e).data("transform") || new f
        },
        set: function(e, i) {
            var r = i;
            if (!(r instanceof f)) {
                r = new f(r)
            }
            if (n.transform === "WebkitTransform" && !s) {
                e.style[n.transform] = r.toString(true)
            } else {
                e.style[n.transform] = r.toString()
            }
            t(e).data("transform", r)
        }
    };
    t.cssHooks.transform = {
        set: t.cssHooks["transit:transform"].set
    };
    t.cssHooks.filter = {
        get: function(t) {
            return t.style[n.filter]
        },
        set: function(t, e) {
            t.style[n.filter] = e
        }
    };
    if (t.fn.jquery < "1.8") {
        t.cssHooks.transformOrigin = {
            get: function(t) {
                return t.style[n.transformOrigin]
            },
            set: function(t, e) {
                t.style[n.transformOrigin] = e
            }
        };
        t.cssHooks.transition = {
            get: function(t) {
                return t.style[n.transition]
            },
            set: function(t, e) {
                t.style[n.transition] = e
            }
        }
    }
    p("scale");
    p("scaleX");
    p("scaleY");
    p("translate");
    p("rotate");
    p("rotateX");
    p("rotateY");
    p("rotate3d");
    p("perspective");
    p("skewX");
    p("skewY");
    p("x", true);
    p("y", true);

    function f(t) {
        if (typeof t === "string") {
            this.parse(t)
        }
        return this
    }
    f.prototype = {
        setFromString: function(t, e) {
            var n = typeof e === "string" ? e.split(",") : e.constructor === Array ? e : [e];
            n.unshift(t);
            f.prototype.set.apply(this, n)
        },
        set: function(t) {
            var e = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[t]) {
                this.setter[t].apply(this, e)
            } else {
                this[t] = e.join(",")
            }
        },
        get: function(t) {
            if (this.getter[t]) {
                return this.getter[t].apply(this)
            } else {
                return this[t] || 0
            }
        },
        setter: {
            rotate: function(t) {
                this.rotate = y(t, "deg")
            },
            rotateX: function(t) {
                this.rotateX = y(t, "deg")
            },
            rotateY: function(t) {
                this.rotateY = y(t, "deg")
            },
            scale: function(t, e) {
                if (e === undefined) {
                    e = t
                }
                this.scale = t + "," + e
            },
            skewX: function(t) {
                this.skewX = y(t, "deg")
            },
            skewY: function(t) {
                this.skewY = y(t, "deg")
            },
            perspective: function(t) {
                this.perspective = y(t, "px")
            },
            x: function(t) {
                this.set("translate", t, null)
            },
            y: function(t) {
                this.set("translate", null, t)
            },
            translate: function(t, e) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (t !== null && t !== undefined) {
                    this._translateX = y(t, "px")
                }
                if (e !== null && e !== undefined) {
                    this._translateY = y(e, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var t = (this.scale || "1,1").split(",");
                if (t[0]) {
                    t[0] = parseFloat(t[0])
                }
                if (t[1]) {
                    t[1] = parseFloat(t[1])
                }
                return t[0] === t[1] ? t[0] : t
            },
            rotate3d: function() {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var e = 0; e <= 3; ++e) {
                    if (t[e]) {
                        t[e] = parseFloat(t[e])
                    }
                }
                if (t[3]) {
                    t[3] = y(t[3], "deg")
                }
                return t
            }
        },
        parse: function(t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) {
                e.setFromString(n, i)
            })
        },
        toString: function(t) {
            var e = [];
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    if (!n.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) {
                        continue
                    }
                    if (i[0] !== "_") {
                        if (t && i === "scale") {
                            e.push(i + "3d(" + this[i] + ",1)")
                        } else if (t && i === "translate") {
                            e.push(i + "3d(" + this[i] + ",0)")
                        } else {
                            e.push(i + "(" + this[i] + ")")
                        }
                    }
                }
            }
            return e.join(" ")
        }
    };

    function c(t, e, n) {
        if (e === true) {
            t.queue(n)
        } else if (e) {
            t.queue(e, n)
        } else {
            t.each(function() {
                n.call(this)
            })
        }
    }

    function l(e) {
        var i = [];
        t.each(e, function(e) {
            e = t.camelCase(e);
            e = t.transit.propertyMap[e] || t.cssProps[e] || e;
            e = h(e);
            if (n[e]) e = h(n[e]);
            if (t.inArray(e, i) === -1) {
                i.push(e)
            }
        });
        return i
    }

    function d(e, n, i, r) {
        var s = l(e);
        if (t.cssEase[i]) {
            i = t.cssEase[i]
        }
        var a = "" + b(n) + " " + i;
        if (parseInt(r, 10) > 0) {
            a += " " + b(r)
        }
        var o = [];
        t.each(s, function(t, e) {
            o.push(e + " " + a)
        });
        return o.join(", ")
    }
    t.fn.transition = t.fn.transit = function(e, i, r, s) {
        var a = this;
        var u = 0;
        var f = true;
        var l = jQuery.extend(true, {}, e);
        if (typeof i === "function") {
            s = i;
            i = undefined
        }
        if (typeof i === "object") {
            r = i.easing;
            u = i.delay || 0;
            f = typeof i.queue === "undefined" ? true : i.queue;
            s = i.complete;
            i = i.duration
        }
        if (typeof r === "function") {
            s = r;
            r = undefined
        }
        if (typeof l.easing !== "undefined") {
            r = l.easing;
            delete l.easing
        }
        if (typeof l.duration !== "undefined") {
            i = l.duration;
            delete l.duration
        }
        if (typeof l.complete !== "undefined") {
            s = l.complete;
            delete l.complete
        }
        if (typeof l.queue !== "undefined") {
            f = l.queue;
            delete l.queue
        }
        if (typeof l.delay !== "undefined") {
            u = l.delay;
            delete l.delay
        }
        if (typeof i === "undefined") {
            i = t.fx.speeds._default
        }
        if (typeof r === "undefined") {
            r = t.cssEase._default
        }
        i = b(i);
        var p = d(l, i, r, u);
        var h = t.transit.enabled && n.transition;
        var y = h ? parseInt(i, 10) + parseInt(u, 10) : 0;
        if (y === 0) {
            var g = function(t) {
                a.css(l);
                if (s) {
                    s.apply(a)
                }
                if (t) {
                    t()
                }
            };
            c(a, f, g);
            return a
        }
        var m = {};
        var v = function(i) {
            var r = false;
            var u = function() {
                if (r) {
                    a.unbind(o, u)
                }
                if (y > 0) {
                    a.each(function() {
                        this.style[n.transition] = m[this] || null
                    })
                }
                if (typeof s === "function") {
                    s.apply(a)
                }
                if (typeof i === "function") {
                    i()
                }
            };
            if (y > 0 && o && t.transit.useTransitionEnd) {
                r = true;
                a.bind(o, u)
            } else {
                window.setTimeout(u, y)
            }
            a.each(function() {
                if (y > 0) {
                    this.style[n.transition] = p
                }
                t(this).css(e)
            })
        };
        var z = function(t) {
            this.offsetWidth;
            v(t)
        };
        c(a, f, z);
        return this
    };

    function p(e, i) {
        if (!i) {
            t.cssNumber[e] = true
        }
        t.transit.propertyMap[e] = n.transform;
        t.cssHooks[e] = {
            get: function(n) {
                var i = t(n).css("transit:transform");
                return i.get(e)
            },
            set: function(n, i) {
                var r = t(n).css("transit:transform");
                r.setFromString(e, i);
                t(n).css({
                    "transit:transform": r
                })
            }
        }
    }

    function h(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }

    function y(t, e) {
        if (typeof t === "string" && !t.match(/^[\-0-9\.]+$/)) {
            return t
        } else {
            return "" + t + e
        }
    }

    function b(e) {
        var n = e;
        if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
            n = t.fx.speeds[n] || t.fx.speeds._default
        }
        return y(n, "ms")
    }
    t.transit.getTransitionValue = d;
    return t
});
(function(jQuery) {
    if (!jQuery.isFunction(jQuery.fn.on)) {
        jQuery.fn.on = function(types, sel, fn) {
            return this.delegate(sel, types, fn);
        };
        jQuery.fn.off = function(types, sel, fn) {
            return this.undelegate(sel, types, fn);
        };
    }
    if (!jQuery.support.transition)
        jQuery.fn.transition = jQuery.fn.animate;
    jQuery.fn.emodal = function(method) {
        if (jQuery.fn.emodal.methods[method]) {
            return jQuery.fn.emodal.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return jQuery.fn.emodal.methods.init.apply(this, arguments);
        } else {
            jQuery.error('Method ' + method + ' does not exist on jQuery.fn.emodal');
        }
    };
    jQuery.fn.emodal.methods = {
        init: function(options) {
            return this.each(function() {
                var $this = jQuery(this);
                var settings = jQuery.extend(true, {}, jQuery.fn.emodal.defaults, $this.data('emodal'), options);
                if (!$this.parent().is('body'))
                    $this.appendTo('body');
                if (!jQuery('#' + settings.overlay.attr.id).length)
                    jQuery('<div>').attr(settings.overlay.attr).appendTo('body');
                jQuery(window).on('resize', function() {
                    if ($this.hasClass('active'))
                        jQuery.fn.emodal.utilities.throttle(setTimeout(function() {
                            $this.emodal('reposition');
                        }, 25), 500, false);
                });
                $this
                    .data('emodal', settings)
                    .on('emodalBeforeOpen.hide_modal', function(e) {
                        jQuery(this)
                            .css({
                                visibility: "visible"
                            })
                            .hide()
                            .addClass(settings.container.active_class);
                        if (!settings.meta.display.stackable) {
                            $this.emodal('close_all');
                        }
                    })
                    .on('emodalAfterClose.close_overlay', function(e) {
                        $overlay = jQuery('#' + settings.overlay.attr.id);
                        if ($overlay.length && $overlay.is(":visible")) {
                            $overlay.fadeOut(settings.close.close_speed);
                        }
                    })
                    .on('emodalAfterClose.reset_videos', function(e) {
                        jQuery('iframe', $this).filter('[src*="youtube"],[src*="vimeo"]').each(function() {
                            var src = jQuery(this).attr('src');
                            jQuery(this).attr('src', '').attr('src', src);
                        });
                    })
                    .on('emodalBeforeOpen.setup_close', function() {
                        $this.emodal('setup_close');
                    })
                    .on('emodalBeforeOpen.retheme', function() {
                        $this.emodal('retheme');
                    })
                    .on('emodalBeforeOpen.reposition', function() {
                        $this.emodal('reposition');
                    })
                    .trigger('emodalInit');
                return this;
            });
        },
        setup_close: function() {
            var $this = jQuery(this),
                settings = $this.data('emodal'),
                $overlay = jQuery('#' + settings.overlay.attr.id),
                $close = jQuery('.' + settings.close.attr.class, $this);
            $close
                .off('click.emodal')
                .on("click.emodal", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $this.emodal('close');
                });
            if (settings.meta.close.esc_press)
                jQuery(window)
                .off('keyup.emodal')
                .on('keyup.emodal', function(e) {
                    if (e.keyCode == 27)
                        $this.emodal('close');
                });
            if (settings.meta.close.overlay_click)
                $overlay
                .off('click.emodal')
                .on('click.emodal', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $this.emodal('close');
                });
            $this
                .on('emodalAfterClose', function() {
                    jQuery(window).off('keyup.emodal');
                    $overlay.off('click.emodal');
                    $close.off('click.emodal');
                })
                .trigger('emodalSetupClose');
        },
        open: function(callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            $this
                .trigger('emodalBeforeOpen')
                .emodal('animate', settings.meta.display.animation.type, function() {
                    $this.trigger('emodalAfterOpen');
                    if (callback !== undefined) callback();
                });
            return this;
        },
        close: function() {
            return this.each(function() {
                var $this = jQuery(this),
                    settings = $this.data('emodal');
                $this
                    .trigger('emodalBeforeClose')
                    .removeClass('active')
                    .fadeOut(settings.close.close_speed, function() {
                        $this.trigger('emodalAfterClose');
                    });
                return this;
            });
        },
        close_all: function() {
            var settings = jQuery(this).data('emodal');
            jQuery('.' + settings.container.attr.class).removeClass('active').hide(0);
            return this;
        },
        reposition: function(callback) {
            var $this = jQuery(this);
            $this.trigger('emodalBeforeReposition');
            var settings = $this.data('emodal');
            var location = settings.meta.display.location;
            var position = settings.meta.display.position;
            var reposition = {
                my: "",
                at: ""
            };
            if (location.indexOf('left') >= 0) reposition = {
                my: reposition.my + " left" + (position.left !== 0 ? "+" + position.left : ""),
                at: reposition.at + " left"
            };
            if (location.indexOf('right') >= 0) reposition = {
                my: reposition.my + " right" + (position.right !== 0 ? "-" + position.right : ""),
                at: reposition.at + " right"
            };
            if (location.indexOf('center') >= 0) {
                if (location == 'center') reposition = {
                    my: "center",
                    at: "center"
                };
                else reposition = {
                    my: reposition.my + " center",
                    at: reposition.at + " center"
                };
            }
            if (location.indexOf('top') >= 0) reposition = {
                my: reposition.my + " top" + (position.top !== 0 ? "+" + position.top : ""),
                at: reposition.at + " top"
            };
            if (location.indexOf('bottom') >= 0) reposition = {
                my: reposition.my + " bottom" + (position.bottom !== 0 ? "-" + position.bottom : ""),
                at: reposition.at + " bottom"
            };
            reposition.my = jQuery.trim(reposition.my);
            reposition.at = jQuery.trim(reposition.at);
            reposition.of = window;
            reposition.collision = 'fit';
            reposition.using = typeof(callback) == "function" ? callback : jQuery.fn.emodal.callbacks.reposition_using;
            var opacity = false;
            if ($this.is(':hidden')) {
                opacity = $this.css("opacity");
                $this.css({
                    opacity: 0
                }).show();
            }
            if (position.fixed)
                $this.addClass('fixed');
            else
                $this.removeClass('fixed');
            if (settings.meta.display.size == 'custom') {
                $this.css({
                    width: settings.meta.display.custom_width + settings.meta.display.custom_width_unit,
                    height: settings.meta.display.custom_height_auto ? 'auto' : settings.meta.display.custom_height + settings.meta.display.custom_height_unit
                });
            }
            $this
                .addClass('custom-position')
                .position(reposition)
                .trigger('emodalAfterReposition');
            if (opacity) {
                $this.css({
                    opacity: opacity
                }).hide();
            }
            return this;
        },
        retheme: function(theme) {
            var $this = jQuery(this);
            $this.trigger('emodalBeforeRetheme');
            var settings = $this.data('emodal'),
                $overlay = jQuery('#' + settings.overlay.attr.id),
                $container = $this,
                $title = jQuery('> .' + settings.title.attr.class, $container),
                $content = jQuery('> .' + settings.content.attr.class, $container),
                $close = jQuery('> .' + settings.close.attr.class, $container);
            if (theme === undefined) {
                theme = jQuery.fn.emodal.themes[settings.theme_id];
                if (theme === undefined) {
                    theme = jQuery.fn.emodal.themes[1];
                }
            }
            $overlay.removeAttr('style').css({
                backgroundColor: jQuery.fn.emodal.utilities.convert_hex(theme.overlay.background.color, theme.overlay.background.opacity)
            });
            var container_inset = theme.container.boxshadow.inset == 'yes' ? 'inset ' : '';
            $container.css({
                padding: theme.container.padding + 'px',
                backgroundColor: jQuery.fn.emodal.utilities.convert_hex(theme.container.background.color, theme.container.background.opacity),
                borderStyle: theme.container.border.style,
                borderColor: theme.container.border.color,
                borderWidth: theme.container.border.width + 'px',
                borderRadius: theme.container.border.radius + 'px',
                boxShadow: container_inset + theme.container.boxshadow.horizontal + 'px ' + theme.container.boxshadow.vertical + 'px ' + theme.container.boxshadow.blur + 'px ' + theme.container.boxshadow.spread + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.container.boxshadow.color, theme.container.boxshadow.opacity)
            });
            $title.css({
                color: theme.title.font.color,
                fontSize: theme.title.font.size + 'px',
                fontFamily: theme.title.font.family,
                textAlign: theme.title.text.align,
                textShadow: theme.title.textshadow.horizontal + 'px ' + theme.title.textshadow.vertical + 'px ' + theme.title.textshadow.blur + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.title.textshadow.color, theme.title.textshadow.opacity)
            });
            $content.css({
                color: theme.content.font.color,
                fontFamily: theme.content.font.family
            });
            jQuery('p, label', $content).css({
                color: theme.content.font.color,
                fontFamily: theme.content.font.family
            });
            var close_inset = theme.close.boxshadow.inset == 'yes' ? 'inset ' : '';
            $close.html(theme.close.text).css({
                padding: theme.close.padding + 'px',
                backgroundColor: jQuery.fn.emodal.utilities.convert_hex(theme.close.background.color, theme.close.background.opacity),
                color: theme.close.font.color,
                fontSize: theme.close.font.size + 'px',
                fontFamily: theme.close.font.family,
                borderStyle: theme.close.border.style,
                borderColor: theme.close.border.color,
                borderWidth: theme.close.border.width + 'px',
                borderRadius: theme.close.border.radius + 'px',
                boxShadow: close_inset + theme.close.boxshadow.horizontal + 'px ' + theme.close.boxshadow.vertical + 'px ' + theme.close.boxshadow.blur + 'px ' + theme.close.boxshadow.spread + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.close.boxshadow.color, theme.close.boxshadow.opacity),
                textShadow: theme.close.textshadow.horizontal + 'px ' + theme.close.textshadow.vertical + 'px ' + theme.close.textshadow.blur + 'px ' + jQuery.fn.emodal.utilities.convert_hex(theme.close.textshadow.color, theme.close.textshadow.opacity)
            });
            switch (theme.close.location) {
                case "topleft":
                    $close.css({
                        top: theme.close.position.top + 'px',
                        left: theme.close.position.left + 'px'
                    });
                    break;
                case "topright":
                    $close.css({
                        top: theme.close.position.top + 'px',
                        right: theme.close.position.right + 'px'
                    });
                    break;
                case "bottomleft":
                    $close.css({
                        bottom: theme.close.position.bottom + 'px',
                        left: theme.close.position.left + 'px'
                    });
                    break;
                case "bottomright":
                    $close.css({
                        bottom: theme.close.position.bottom + 'px',
                        right: theme.close.position.right + 'px'
                    });
                    break;
            }
            $this.trigger('emodalAfterRetheme', [theme]);
            return this;
        },
        animate_overlay: function(style, duration, callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            if (settings.meta.display.overlay_disabled) {
                callback();
            } else {
                if (jQuery.fn.emodal.overlay_animations[style])
                    return jQuery.fn.emodal.overlay_animations[style].apply(this, Array.prototype.slice.call(arguments, 1));
                else
                    jQuery.error('Animation style ' + jQuery.fn.emodal.overlay_animations + ' does not exist.');
            }
            return this;
        },
        animate: function(style, callback) {
            if (jQuery.fn.emodal.animations[style])
                return jQuery.fn.emodal.animations[style].apply(this, Array.prototype.slice.call(arguments, 1));
            else
                jQuery.error('Animation style ' + jQuery.fn.emodal.animations + ' does not exist.');
            return this;
        }
    };
    jQuery.fn.emodal.callbacks = {
        reposition_using: function(position) {
            jQuery(this).css(position);
        }
    };
    jQuery.fn.emodal.utilities = {
        convert_hex: function(hex, opacity) {
            hex = hex.replace('#', '');
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
            result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
            return result;
        },
        debounce: function(callback, threshold) {
            var timeout;
            return function() {
                var context = this,
                    params = arguments;
                window.clearTimeout(timeout);
                timeout = window.setTimeout(function() {
                    callback.apply(context, params);
                }, threshold);
            };
        },
        throttle: function(callback, threshold) {
            var suppress = false;
            var clear = function() {
                suppress = false;
            };
            return function() {
                if (!suppress) {
                    callback.apply(this, arguments);
                    window.setTimeout(clear, threshold);
                    suppress = true;
                };
            }
        }
    };
    jQuery.fn.emodal.utilies = jQuery.fn.emodal.utilities;
    jQuery.fn.emodal.defaults = {
        meta: {
            display: {
                stackable: 0,
                overlay_disabled: 0,
                size: 'medium',
                custom_width: '',
                custom_width_unit: '%',
                custom_height: '',
                custom_height_unit: 'em',
                custom_height_auto: 1,
                location: 'center top',
                position: {
                    top: 100,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    fixed: 0
                },
                animation: {
                    type: 'fade',
                    speed: 350,
                    origin: 'center top'
                }
            },
            close: {
                overlay_click: 0,
                esc_press: 1
            }
        },
        container: {
            active_class: 'active',
            attr: {
                class: "emodal"
            }
        },
        title: {
            attr: {
                class: "emodal-title"
            }
        },
        content: {
            attr: {
                class: "emodal-content"
            }
        },
        close: {
            close_speed: 0,
            attr: {
                class: "emodal-close"
            }
        },
        overlay: {
            attr: {
                id: "emodal-overlay",
                class: "emodal-overlay"
            }
        }
    };
    jQuery.fn.emodal.themes = emodal_themes;
    jQuery.fn.emodal.overlay_animations = {
        none: function(duration, callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            jQuery('#' + settings.overlay.attr.id).show(duration, callback);
        },
        fade: function(duration, callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            jQuery('#' + settings.overlay.attr.id).fadeIn(duration, callback);
        },
        slide: function(duration, callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            jQuery('#' + settings.overlay.attr.id).slideDown(duration, callback);
        }
    };
    jQuery.fn.emodal.animations = {
        none: function(callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            $this.emodal('animate_overlay', 'none', 0, function() {
                $this.show();
                if (callback !== undefined) callback();
            });
            return this;
        },
        slide: function(callback) {
            var $this = jQuery(this).show(0).css({
                opacity: 0
            });
            var settings = $this.data('emodal');
            var speed = settings.meta.display.animation.speed;
            var origin = settings.meta.display.animation.origin;
            var start = {
                my: "",
                at: ""
            };
            switch (origin) {
                case 'top':
                    start = {
                        my: "left+" + $this.offset().left + " bottom",
                        at: "left top"
                    };
                    break;
                case 'bottom':
                    start = {
                        my: "left+" + $this.offset().left + " top",
                        at: "left bottom"
                    };
                    break;
                case 'left':
                    start = {
                        my: "right top+" + $this.offset().top,
                        at: "left top"
                    };
                    break;
                case 'right':
                    start = {
                        my: "left top+" + $this.offset().top,
                        at: "right top"
                    };
                    break;
                default:
                    if (origin.indexOf('left') >= 0) start = {
                        my: start.my + " right",
                        at: start.at + " left"
                    };
                    if (origin.indexOf('right') >= 0) start = {
                        my: start.my + " left",
                        at: start.at + " right"
                    };
                    if (origin.indexOf('center') >= 0) start = {
                        my: start.my + " center",
                        at: start.at + " center"
                    };
                    if (origin.indexOf('top') >= 0) start = {
                        my: start.my + " bottom",
                        at: start.at + " top"
                    };
                    if (origin.indexOf('bottom') >= 0) start = {
                        my: start.my + " top",
                        at: start.at + " bottom"
                    };
                    start.my = jQuery.trim(start.my);
                    start.at = jQuery.trim(start.at);
                    break;
            }
            start.of = window;
            start.collision = 'none';
            jQuery('html').css('overflow-x', 'hidden');
            $this.position(start).css({
                opacity: 1
            });
            $this.emodal('animate_overlay', 'fade', speed * 0.25, function() {
                $this.emodal('reposition', function(position) {
                    position.opacity = 1;
                    $this.transition(position, speed * 0.75, function() {
                        jQuery('html').css('overflow-x', 'inherit');
                        if (callback !== undefined) callback();
                    });
                });
            });
            return this;
        },
        fade: function(callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            var speed = settings.meta.display.animation.speed / 2;
            $this.emodal('animate_overlay', 'fade', speed, function() {
                $this.fadeIn(speed, function() {
                    if (callback !== undefined) callback();
                });
            });
            return this;
        },
        fadeAndSlide: function(callback) {
            var $this = jQuery(this).show(0).css({
                opacity: 0
            });
            var settings = $this.data('emodal');
            var speed = settings.meta.display.animation.speed;
            var origin = settings.meta.display.animation.origin;
            var start = {
                my: "",
                at: ""
            };
            switch (origin) {
                case 'top':
                    start = {
                        my: "left+" + $this.offset().left + " bottom",
                        at: "left top"
                    };
                    break;
                case 'bottom':
                    start = {
                        my: "left+" + $this.offset().left + " top",
                        at: "left bottom"
                    };
                    break;
                case 'left':
                    start = {
                        my: "right top+" + $this.offset().top,
                        at: "left top"
                    };
                    break;
                case 'right':
                    start = {
                        my: "left top+" + $this.offset().top,
                        at: "right top"
                    };
                    break;
                default:
                    if (origin.indexOf('left') >= 0) start = {
                        my: start.my + " right",
                        at: start.at + " left"
                    };
                    if (origin.indexOf('right') >= 0) start = {
                        my: start.my + " left",
                        at: start.at + " right"
                    };
                    if (origin.indexOf('center') >= 0) start = {
                        my: start.my + " center",
                        at: start.at + " center"
                    };
                    if (origin.indexOf('top') >= 0) start = {
                        my: start.my + " bottom",
                        at: start.at + " top"
                    };
                    if (origin.indexOf('bottom') >= 0) start = {
                        my: start.my + " top",
                        at: start.at + " bottom"
                    };
                    start.my = jQuery.trim(start.my);
                    start.at = jQuery.trim(start.at);
                    break;
            }
            start.of = window;
            start.collision = 'none';
            jQuery('html').css('overflow-x', 'hidden');
            $this.position(start);
            $this.emodal('animate_overlay', 'fade', speed * 0.25, function() {
                $this.emodal('reposition', function(position) {
                    position.opacity = 1;
                    $this.transition(position, speed * 0.75, function() {
                        jQuery('html').css('overflow-x', 'inherit');
                        if (callback !== undefined) callback();
                    });
                });
            });
            return this;
        },
        grow: function(callback) {
            var $this = jQuery(this);
            var settings = $this.data('emodal');
            var speed = settings.meta.display.animation.speed;
            var origin = settings.meta.display.animation.origin;
            $this.css({
                transformOrigin: origin,
                opacity: 0
            }).show();
            $this.emodal('animate_overlay', 'fade', speed * 0.25, function() {
                $this.emodal('reposition', function(position) {
                    position.scale = 1;
                    position.duration = speed * 0.75;
                    $this
                        .css({
                            scale: 0,
                            opacity: 1
                        })
                        .transition(position);
                    if (callback !== undefined) callback();
                });
            });
            return this;
        },
        growAndSlide: function(callback) {
            var $this = jQuery(this).css({
                opacity: 0
            }).show();
            var settings = $this.data('emodal');
            var speed = settings.meta.display.animation.speed;
            var origin = settings.meta.display.animation.origin;
            var start = {
                my: "",
                at: ""
            };
            switch (origin) {
                case 'top':
                    start = {
                        my: "left+" + $this.offset().left + " bottom",
                        at: "left top"
                    };
                    break;
                case 'bottom':
                    start = {
                        my: "left+" + $this.offset().left + " top",
                        at: "left bottom"
                    };
                    break;
                case 'left':
                    start = {
                        my: "right top+" + $this.offset().top,
                        at: "left top"
                    };
                    break;
                case 'right':
                    start = {
                        my: "left top+" + $this.offset().top,
                        at: "right top"
                    };
                    break;
                default:
                    if (origin.indexOf('left') >= 0) start = {
                        my: start.my + " right",
                        at: start.at + " left"
                    };
                    if (origin.indexOf('right') >= 0) start = {
                        my: start.my + " left",
                        at: start.at + " right"
                    };
                    if (origin.indexOf('center') >= 0) start = {
                        my: start.my + " center",
                        at: start.at + " center"
                    };
                    if (origin.indexOf('top') >= 0) start = {
                        my: start.my + " bottom",
                        at: start.at + " top"
                    };
                    if (origin.indexOf('bottom') >= 0) start = {
                        my: start.my + " top",
                        at: start.at + " bottom"
                    };
                    start.my = jQuery.trim(start.my);
                    start.at = jQuery.trim(start.at);
                    break;
            }
            start.of = window;
            start.collision = 'none';
            jQuery('html').css('overflow-x', 'hidden');
            $this.position(start)
                .css({
                    opacity: origin == 'center center' ? 0 : 1,
                    transformOrigin: origin
                });
            $this.emodal('animate_overlay', 'fade', speed * 0.25, function() {
                $this.emodal('reposition', function(position) {
                    position.scale = 1;
                    position.opacity = 1;
                    position.duration = speed * 0.75;
                    $this.css({
                            scale: 0
                        })
                        .transition(position, function() {
                            jQuery('html').css('overflow-x', 'inherit');
                        });
                    if (callback !== undefined) callback();
                });
            });
            return this;
        }
    };
    jQuery('.emodal').css({
        visibility: "visible"
    }).hide();
    jQuery(document).ready(function() {
        jQuery('.emodal')
            .emodal()
            .each(function() {
                var $this = jQuery(this);
                jQuery(document).on('click', '.' + $this.attr('id'), function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $this.emodal('open');
                });
                jQuery('.' + $this.attr('id')).css('cursor', 'pointer');
            });
    });
}(jQuery));
(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder].placeheld', $form).each(function(i, n) {
                    $(n).val('').removeClass('placeheld');
                });
            }
            if (typeof window.FormData === 'function') {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val &&
                !val.match(/^[a-z][a-z0-9.+-]*:/i) &&
                -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function(i, n) {
                        $(n.into, $form).each(function() {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' +
                        data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val($(n).attr('placeholder'));
                });
            }
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function() {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') ||
                    !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>')
            .text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form)
            .hide().empty().removeAttr('role')
            .removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace,
            wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event,
            params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0],
                k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
                            i[b] = f[b], delete f[b]
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
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
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
                        var e = a.data(this.form, "validator"),
                            f = "on" + b.type.replace(/^validate/, ""),
                            g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b)
                    }
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.currentForm,
                    e = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        e[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name"),
                        e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0))
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b),
                    f = b.type,
                    g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(),
                    h = a.map(g, function(a, b) {
                        return b
                    }).length,
                    i = !1,
                    j = this.elementValue(b);
                "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);
                for (d in g) {
                    e = {
                        method: d,
                        parameters: g[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            },
            date: function() {
                var a = !1;
                return function(b, c) {
                    return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
                }
            }(),
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function(a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    },
                    l = function(a) {
                        return Math.round(a * Math.pow(10, e))
                    },
                    m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
});
jQuery.validator.addMethod("phoneUS", function(d, e) {
    return d = d.replace(/\s+/g, ""), this.optional(e) || d.length > 9 && d.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)
}, "Please specify a valid phone number"), jQuery.validator.addMethod("creditcard", function(d, e) {
    if (this.optional(e)) return "dependency-mismatch";
    if (/[^0-9 \-]+/.test(d)) return !1;
    var t, A, r = 0,
        Z = 0,
        n = !1;
    if ((d = d.replace(/\D/g, "")).length < 13 || d.length > 19) return !1;
    for (t = d.length - 1; t >= 0; t--) A = d.charAt(t), Z = parseInt(A, 10), n && (Z *= 2) > 9 && (Z -= 9), r += Z, n = !n;
    return r % 10 == 0
}, "Please enter a valid credit card number."), jQuery.validator.addMethod("iban", function(d, e) {
    if (this.optional(e)) return !0;
    var t, A, r, Z, n, a = d.replace(/ /g, "").toUpperCase(),
        i = "",
        l = !0,
        o = "";
    if (a.length < 5) return !1;
    if (void 0 !== (r = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}"
        }[a.substring(0, 2)]) && !new RegExp("^[A-Z]{2}\\d{2}" + r + "$", "").test(a)) return !1;
    for (t = a.substring(4, a.length) + a.substring(0, 4), Z = 0; Z < t.length; Z++) "0" !== (A = t.charAt(Z)) && (l = !1), l || (i += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(A));
    for (n = 0; n < i.length; n++) o = ("" + o + i.charAt(n)) % 97;
    return 1 === o
}, "Please specify a valid IBAN"), jQuery.validator.addMethod("lettersonly", function(d, e) {
    return this.optional(e) || /^[a-z]+$/i.test(d)
}, "Letters only please");
jQuery(document).ready(function() {
    jQuery('.wpcf7-validates-as-required').addClass('required');
    jQuery('.wpcf7-email').addClass('email2');
    jQuery('.wpcf7-checkbox.wpcf7-validates-as-required input').addClass('required');
    jQuery('form.wpcf7-form').each(function() {
        jQuery(this).addClass(jvcf7_invalid_field_design);
        jQuery(this).addClass(jvcf7_show_label_error);
        jQuery(this).validate();
    });
    jQuery('.wpcf7-form-control.wpcf7-submit').click(function(e) {
        $jvcfValidation = jQuery(this).parents('form');
        if (!jQuery($jvcfValidation).valid()) {
            e.preventDefault();
            $topErrorPosition = jQuery('.wpcf7-form-control.error').offset().top;
            $topErrorPosition = parseInt($topErrorPosition) - 100;
            jQuery('body, html').animate({
                scrollTop: $topErrorPosition
            }, 'normal');
        }
    });
});
jQuery.validator.addMethod("email2",
    function(value, element) {
        return this.optional(element) || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/i.test(value);
    }, "Please enter a valid email address"
);
jQuery.validator.addMethod("letters_space", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, "Letters and space only");
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], e) : e(jQuery)
}(function(b) {
    var r;

    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, b.extend(this._defaults, this.regional[""]), this.regional.en = b.extend(!0, {}, this.regional[""]), this.regional["en-US"] = b.extend(!0, {}, this.regional.en), this.dpDiv = a(b("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(t, "mouseout", function() {
            b(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && b(this).removeClass("ui-datepicker-next-hover")
        }).delegate(t, "mouseover", n)
    }

    function n() {
        b.datepicker._isDisabledDatepicker(r.inline ? r.dpDiv.parent()[0] : r.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), b(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && b(this).addClass("ui-datepicker-next-hover"))
    }

    function h(e, t) {
        for (var a in b.extend(e, t), t) null == t[a] && (e[a] = t[a]);
        return e
    }
    return b.extend(b.ui, {
        datepicker: {
            version: "1.11.4"
        }
    }), b.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return h(this._defaults, e || {}), this
        },
        _attachDatepicker: function(e, t) {
            var a, i, s;
            i = "div" === (a = e.nodeName.toLowerCase()) || "span" === a, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (s = this._newInst(b(e), i)).settings = b.extend({}, t || {}), "input" === a ? this._connectDatepicker(e, s) : i && this._inlineDatepicker(e, s)
        },
        _newInst: function(e, t) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? a(b("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, t) {
            var a = b(e);
            t.append = b([]), t.trigger = b([]), a.hasClass(this.markerClassName) || (this._attachments(a, t), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(t), b.data(e, "datepicker", t), t.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, t) {
            var a, i, s, r = this._get(t, "appendText"),
                n = this._get(t, "isRTL");
            t.append && t.append.remove(), r && (t.append = b("<span class='" + this._appendClass + "'>" + r + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove(), "focus" !== (a = this._get(t, "showOn")) && "both" !== a || e.focus(this._showDatepicker), "button" !== a && "both" !== a || (i = this._get(t, "buttonText"), s = this._get(t, "buttonImage"), t.trigger = b(this._get(t, "buttonImageOnly") ? b("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: i,
                title: i
            }) : b("<button type='button'></button>").addClass(this._triggerClass).html(s ? b("<img/>").attr({
                src: s,
                alt: i,
                title: i
            }) : i)), e[n ? "before" : "after"](t.trigger), t.trigger.click(function() {
                return b.datepicker._datepickerShowing && b.datepicker._lastInput === e[0] ? b.datepicker._hideDatepicker() : (b.datepicker._datepickerShowing && b.datepicker._lastInput !== e[0] && b.datepicker._hideDatepicker(), b.datepicker._showDatepicker(e[0])), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, a, i, s, r = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                n.match(/[DM]/) && (t = function(e) {
                    for (s = i = a = 0; s < e.length; s++) e[s].length > a && (a = e[s].length, i = s);
                    return i
                }, r.setMonth(t(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(t(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), e.input.attr("size", this._formatDate(e, r).length)
            }
        },
        _inlineDatepicker: function(e, t) {
            var a = b(e);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(t.dpDiv), b.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, t, a, i, s) {
            var r, n, d, c, o, l = this._dialogInst;
            return l || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = b("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), (l = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, b.data(this._dialogInput[0], "datepicker", l)), h(l.settings, i || {}), t = t && t.constructor === Date ? this._formatDate(l, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (n = document.documentElement.clientWidth, d = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, o = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [n / 2 - 100 + c, d / 2 - 150 + o]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), l.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), b.blockUI && b.blockUI(this.dpDiv), b.data(this._dialogInput[0], "datepicker", l), this
        },
        _destroyDatepicker: function(e) {
            var t, a = b(e),
                i = b.data(e, "datepicker");
            a.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), b.removeData(e, "datepicker"), "input" === t ? (i.append.remove(), i.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== t && "span" !== t || a.removeClass(this.markerClassName).empty(), r === i && (r = null))
        },
        _enableDatepicker: function(t) {
            var e, a, i = b(t),
                s = b.data(t, "datepicker");
            i.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== e && "span" !== e || ((a = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = b.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var e, a, i = b(t),
                s = b.data(t, "datepicker");
            i.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== e && "span" !== e || ((a = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = b.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return b.data(e, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, t, a) {
            var i, s, r, n, d = this._getInst(e);
            if (2 === arguments.length && "string" == typeof t) return "defaults" === t ? b.extend({}, b.datepicker._defaults) : d ? "all" === t ? b.extend({}, d.settings) : this._get(d, t) : null;
            i = t || {}, "string" == typeof t && ((i = {})[t] = a), d && (this._curInst === d && this._hideDatepicker(), s = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(d, "min"), n = this._getMinMaxDate(d, "max"), h(d.settings, i), null !== r && void 0 !== i.dateFormat && void 0 === i.minDate && (d.settings.minDate = this._formatDate(d, r)), null !== n && void 0 !== i.dateFormat && void 0 === i.maxDate && (d.settings.maxDate = this._formatDate(d, n)), "disabled" in i && (i.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(b(e), d), this._autoSize(d), this._setDate(d, s), this._updateAlternate(d), this._updateDatepicker(d))
        },
        _changeDatepicker: function(e, t, a) {
            this._optionDatepicker(e, t, a)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            a && (this._setDate(a, t), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            return a && !a.inline && this._setDateFromField(a, t), a ? this._getDate(a) : null
        },
        _doKeyDown: function(e) {
            var t, a, i, s = b.datepicker._getInst(e.target),
                r = !0,
                n = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, b.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    b.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return (i = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", s.dpDiv))[0] && b.datepicker._selectDay(e.target, s.selectedMonth, s.selectedYear, i[0]), (t = b.datepicker._get(s, "onSelect")) ? (a = b.datepicker._formatDate(s), t.apply(s.input ? s.input[0] : null, [a, s])) : b.datepicker._hideDatepicker(), !1;
                case 27:
                    b.datepicker._hideDatepicker();
                    break;
                case 33:
                    b.datepicker._adjustDate(e.target, e.ctrlKey ? -b.datepicker._get(s, "stepBigMonths") : -b.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    b.datepicker._adjustDate(e.target, e.ctrlKey ? +b.datepicker._get(s, "stepBigMonths") : +b.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && b.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && b.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && b.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && b.datepicker._adjustDate(e.target, e.ctrlKey ? -b.datepicker._get(s, "stepBigMonths") : -b.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && b.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && b.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && b.datepicker._adjustDate(e.target, e.ctrlKey ? +b.datepicker._get(s, "stepBigMonths") : +b.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && b.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? b.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var t, a, i = b.datepicker._getInst(e.target);
            if (b.datepicker._get(i, "constrainInput")) return t = b.datepicker._possibleChars(b.datepicker._get(i, "dateFormat")), a = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || a < " " || !t || -1 < t.indexOf(a)
        },
        _doKeyUp: function(e) {
            var t = b.datepicker._getInst(e.target);
            if (t.input.val() !== t.lastVal) try {
                b.datepicker.parseDate(b.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, b.datepicker._getFormatConfig(t)) && (b.datepicker._setDateFromField(t), b.datepicker._updateAlternate(t), b.datepicker._updateDatepicker(t))
            } catch (e) {}
            return !0
        },
        _showDatepicker: function(e) {
            var t, a, i, s, r, n, d;
            "input" !== (e = e.target || e).nodeName.toLowerCase() && (e = b("input", e.parentNode)[0]), b.datepicker._isDisabledDatepicker(e) || b.datepicker._lastInput === e || (t = b.datepicker._getInst(e), b.datepicker._curInst && b.datepicker._curInst !== t && (b.datepicker._curInst.dpDiv.stop(!0, !0), t && b.datepicker._datepickerShowing && b.datepicker._hideDatepicker(b.datepicker._curInst.input[0])), !1 !== (i = (a = b.datepicker._get(t, "beforeShow")) ? a.apply(e, [e, t]) : {}) && (h(t.settings, i), t.lastVal = null, b.datepicker._lastInput = e, b.datepicker._setDateFromField(t), b.datepicker._inDialog && (e.value = ""), b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(e), b.datepicker._pos[1] += e.offsetHeight), s = !1, b(e).parents().each(function() {
                return !(s |= "fixed" === b(this).css("position"))
            }), r = {
                left: b.datepicker._pos[0],
                top: b.datepicker._pos[1]
            }, b.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), b.datepicker._updateDatepicker(t), r = b.datepicker._checkOffset(t, r, s), t.dpDiv.css({
                position: b.datepicker._inDialog && b.blockUI ? "static" : s ? "fixed" : "absolute",
                display: "none",
                left: r.left + "px",
                top: r.top + "px"
            }), t.inline || (n = b.datepicker._get(t, "showAnim"), d = b.datepicker._get(t, "duration"), t.dpDiv.css("z-index", function(e) {
                for (var t, a; e.length && e[0] !== document;) {
                    if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (a = parseInt(e.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    e = e.parent()
                }
                return 0
            }(b(e)) + 1), b.datepicker._datepickerShowing = !0, b.effects && b.effects.effect[n] ? t.dpDiv.show(n, b.datepicker._get(t, "showOptions"), d) : t.dpDiv[n || "show"](n ? d : null), b.datepicker._shouldFocusInput(t) && t.input.focus(), b.datepicker._curInst = t)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, (r = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var t, a = this._getNumberOfMonths(e),
                i = a[1],
                s = e.dpDiv.find("." + this._dayOverClass + " a");
            0 < s.length && n.apply(s.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < i && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", 17 * i + "em"), e.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === b.datepicker._curInst && b.datepicker._datepickerShowing && b.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (t = e.yearshtml, setTimeout(function() {
                t === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), t = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(e, t, a) {
            var i = e.dpDiv.outerWidth(),
                s = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                n = e.input ? e.input.outerHeight() : 0,
                d = document.documentElement.clientWidth + (a ? 0 : b(document).scrollLeft()),
                c = document.documentElement.clientHeight + (a ? 0 : b(document).scrollTop());
            return t.left -= this._get(e, "isRTL") ? i - r : 0, t.left -= a && t.left === e.input.offset().left ? b(document).scrollLeft() : 0, t.top -= a && t.top === e.input.offset().top + n ? b(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + i > d && i < d ? Math.abs(t.left + i - d) : 0), t.top -= Math.min(t.top, t.top + s > c && s < c ? Math.abs(s + n) : 0), t
        },
        _findPos: function(e) {
            for (var t, a = this._getInst(e), i = this._get(a, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || b.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
            return [(t = b(e).offset()).left, t.top]
        },
        _hideDatepicker: function(e) {
            var t, a, i, s, r = this._curInst;
            !r || e && r !== b.data(e, "datepicker") || this._datepickerShowing && (t = this._get(r, "showAnim"), a = this._get(r, "duration"), i = function() {
                b.datepicker._tidyDialog(r)
            }, b.effects && (b.effects.effect[t] || b.effects[t]) ? r.dpDiv.hide(t, b.datepicker._get(r, "showOptions"), a, i) : r.dpDiv["slideDown" === t ? "slideUp" : "fadeIn" === t ? "fadeOut" : "hide"](t ? a : null, i), t || i(), this._datepickerShowing = !1, (s = this._get(r, "onClose")) && s.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (b.datepicker._curInst) {
                var t = b(e.target),
                    a = b.datepicker._getInst(t[0]);
                (t[0].id === b.datepicker._mainDivId || 0 !== t.parents("#" + b.datepicker._mainDivId).length || t.hasClass(b.datepicker.markerClassName) || t.closest("." + b.datepicker._triggerClass).length || !b.datepicker._datepickerShowing || b.datepicker._inDialog && b.blockUI) && (!t.hasClass(b.datepicker.markerClassName) || b.datepicker._curInst === a) || b.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, t, a) {
            var i = b(e),
                s = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, t + ("M" === a ? this._get(s, "showCurrentAtPos") : 0), a), this._updateDatepicker(s))
        },
        _gotoToday: function(e) {
            var t, a = b(e),
                i = this._getInst(a[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (t = new Date, i.selectedDay = t.getDate(), i.drawMonth = i.selectedMonth = t.getMonth(), i.drawYear = i.selectedYear = t.getFullYear()), this._notifyChange(i), this._adjustDate(a)
        },
        _selectMonthYear: function(e, t, a) {
            var i = b(e),
                s = this._getInst(i[0]);
            s["selected" + ("M" === a ? "Month" : "Year")] = s["draw" + ("M" === a ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
        },
        _selectDay: function(e, t, a, i) {
            var s, r = b(e);
            b(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((s = this._getInst(r[0])).selectedDay = s.currentDay = b("a", i).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = a, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(e) {
            var t = b(e);
            this._selectDate(t, "")
        },
        _selectDate: function(e, t) {
            var a, i = b(e),
                s = this._getInst(i[0]);
            t = null != t ? t : this._formatDate(s), s.input && s.input.val(t), this._updateAlternate(s), (a = this._get(s, "onSelect")) ? a.apply(s.input ? s.input[0] : null, [t, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var t, a, i, s = this._get(e, "altField");
            s && (t = this._get(e, "altFormat") || this._get(e, "dateFormat"), a = this._getDate(e), i = this.formatDate(t, a, this._getFormatConfig(e)), b(s).each(function() {
                b(this).val(i)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [0 < t && t < 6, ""]
        },
        iso8601Week: function(e) {
            var t, a = new Date(e.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), t = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((t - a) / 864e5) / 7) + 1
        },
        parseDate: function(a, r, e) {
            if (null == a || null == r) throw "Invalid arguments";
            if ("" === (r = "object" == typeof r ? r.toString() : r + "")) return null;

            function n(e) {
                var t = d + 1 < a.length && a.charAt(d + 1) === e;
                return t && d++, t
            }

            function t(e) {
                var t = n(e),
                    a = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                    i = new RegExp("^\\d{" + ("y" === e ? a : 1) + "," + a + "}"),
                    s = r.substring(h).match(i);
                if (!s) throw "Missing number at position " + h;
                return h += s[0].length, parseInt(s[0], 10)
            }

            function i(e, t, a) {
                var i = -1,
                    s = b.map(n(e) ? a : t, function(e, t) {
                        return [
                            [t, e]
                        ]
                    }).sort(function(e, t) {
                        return -(e[1].length - t[1].length)
                    });
                if (b.each(s, function(e, t) {
                        var a = t[1];
                        if (r.substr(h, a.length).toLowerCase() === a.toLowerCase()) return i = t[0], h += a.length, !1
                    }), -1 !== i) return i + 1;
                throw "Unknown name at position " + h
            }

            function s() {
                if (r.charAt(h) !== a.charAt(d)) throw "Unexpected literal at position " + h;
                h++
            }
            var d, c, o, l, h = 0,
                u = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                p = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                g = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                _ = (e ? e.dayNames : null) || this._defaults.dayNames,
                f = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                k = (e ? e.monthNames : null) || this._defaults.monthNames,
                D = -1,
                m = -1,
                y = -1,
                v = -1,
                M = !1;
            for (d = 0; d < a.length; d++)
                if (M) "'" !== a.charAt(d) || n("'") ? s() : M = !1;
                else switch (a.charAt(d)) {
                    case "d":
                        y = t("d");
                        break;
                    case "D":
                        i("D", g, _);
                        break;
                    case "o":
                        v = t("o");
                        break;
                    case "m":
                        m = t("m");
                        break;
                    case "M":
                        m = i("M", f, k);
                        break;
                    case "y":
                        D = t("y");
                        break;
                    case "@":
                        D = (l = new Date(t("@"))).getFullYear(), m = l.getMonth() + 1, y = l.getDate();
                        break;
                    case "!":
                        D = (l = new Date((t("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = l.getMonth() + 1, y = l.getDate();
                        break;
                    case "'":
                        n("'") ? s() : M = !0;
                        break;
                    default:
                        s()
                }
            if (h < r.length && (o = r.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === D ? D = (new Date).getFullYear() : D < 100 && (D += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (D <= p ? 0 : -100)), -1 < v)
                for (m = 1, y = v;;) {
                    if (y <= (c = this._getDaysInMonth(D, m - 1))) break;
                    m++, y -= c
                }
            if ((l = this._daylightSavingAdjust(new Date(D, m - 1, y))).getFullYear() !== D || l.getMonth() + 1 !== m || l.getDate() !== y) throw "Invalid date";
            return l
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(a, e, t) {
            if (!e) return "";

            function s(e) {
                var t = n + 1 < a.length && a.charAt(n + 1) === e;
                return t && n++, t
            }

            function i(e, t, a) {
                var i = "" + t;
                if (s(e))
                    for (; i.length < a;) i = "0" + i;
                return i
            }

            function r(e, t, a, i) {
                return s(e) ? i[t] : a[t]
            }
            var n, d = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (t ? t.dayNames : null) || this._defaults.dayNames,
                o = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                l = (t ? t.monthNames : null) || this._defaults.monthNames,
                h = "",
                u = !1;
            if (e)
                for (n = 0; n < a.length; n++)
                    if (u) "'" !== a.charAt(n) || s("'") ? h += a.charAt(n) : u = !1;
                    else switch (a.charAt(n)) {
                        case "d":
                            h += i("d", e.getDate(), 2);
                            break;
                        case "D":
                            h += r("D", e.getDay(), d, c);
                            break;
                        case "o":
                            h += i("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += i("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += r("M", e.getMonth(), o, l);
                            break;
                        case "y":
                            h += s("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            h += e.getTime();
                            break;
                        case "!":
                            h += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            s("'") ? h += "'" : u = !0;
                            break;
                        default:
                            h += a.charAt(n)
                    }
            return h
        },
        _possibleChars: function(a) {
            function e(e) {
                var t = i + 1 < a.length && a.charAt(i + 1) === e;
                return t && i++, t
            }
            var i, t = "",
                s = !1;
            for (i = 0; i < a.length; i++)
                if (s) "'" !== a.charAt(i) || e("'") ? t += a.charAt(i) : s = !1;
                else switch (a.charAt(i)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        t += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        e("'") ? t += "'" : s = !0;
                        break;
                    default:
                        t += a.charAt(i)
                }
            return t
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var a = this._get(e, "dateFormat"),
                    i = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    r = s,
                    n = this._getFormatConfig(e);
                try {
                    r = this.parseDate(a, i, n) || s
                } catch (e) {
                    i = t ? "" : i
                }
                e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), e.currentDay = i ? r.getDate() : 0, e.currentMonth = i ? r.getMonth() : 0, e.currentYear = i ? r.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(d, e, t) {
            var a, i, s = null == e || "" === e ? t : "string" == typeof e ? function(e) {
                try {
                    return b.datepicker.parseDate(b.datepicker._get(d, "dateFormat"), e, b.datepicker._getFormatConfig(d))
                } catch (e) {}
                for (var t = (e.toLowerCase().match(/^c/) ? b.datepicker._getDate(d) : null) || new Date, a = t.getFullYear(), i = t.getMonth(), s = t.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, n = r.exec(e); n;) {
                    switch (n[2] || "d") {
                        case "d":
                        case "D":
                            s += parseInt(n[1], 10);
                            break;
                        case "w":
                        case "W":
                            s += 7 * parseInt(n[1], 10);
                            break;
                        case "m":
                        case "M":
                            i += parseInt(n[1], 10), s = Math.min(s, b.datepicker._getDaysInMonth(a, i));
                            break;
                        case "y":
                        case "Y":
                            a += parseInt(n[1], 10), s = Math.min(s, b.datepicker._getDaysInMonth(a, i))
                    }
                    n = r.exec(e)
                }
                return new Date(a, i, s)
            }(e) : "number" == typeof e ? isNaN(e) ? t : (a = e, (i = new Date).setDate(i.getDate() + a), i) : new Date(e.getTime());
            return (s = s && "Invalid Date" === s.toString() ? t : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, a) {
            var i = !t,
                s = e.selectedMonth,
                r = e.selectedYear,
                n = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = n.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = n.getMonth(), e.drawYear = e.selectedYear = e.currentYear = n.getFullYear(), s === e.selectedMonth && r === e.selectedYear || a || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _attachHandlers: function(e) {
            var t = this._get(e, "stepMonths"),
                a = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        b.datepicker._adjustDate(a, -t, "M")
                    },
                    next: function() {
                        b.datepicker._adjustDate(a, +t, "M")
                    },
                    hide: function() {
                        b.datepicker._hideDatepicker()
                    },
                    today: function() {
                        b.datepicker._gotoToday(a)
                    },
                    selectDay: function() {
                        return b.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return b.datepicker._selectMonthYear(a, this, "M"), !1
                    },
                    selectYear: function() {
                        return b.datepicker._selectMonthYear(a, this, "Y"), !1
                    }
                };
                b(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, a, i, s, r, n, d, c, o, l, h, u, p, g, _, f, k, D, m, y, v, M, b, w, C, I, x, Y, S, N, F, T, A, K, j, O, R, L, W, E = new Date,
                H = this._daylightSavingAdjust(new Date(E.getFullYear(), E.getMonth(), E.getDate())),
                P = this._get(e, "isRTL"),
                U = this._get(e, "showButtonPanel"),
                z = this._get(e, "hideIfNoPrevNext"),
                B = this._get(e, "navigationAsDateFormat"),
                J = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                q = this._get(e, "stepMonths"),
                Q = 1 !== J[0] || 1 !== J[1],
                X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Z = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                G = e.drawMonth - V,
                ee = e.drawYear;
            if (G < 0 && (G += 12, ee--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - J[0] * J[1] + 1, $.getDate())), t = Z && t < Z ? Z : t; this._daylightSavingAdjust(new Date(ee, G, 1)) > t;) --G < 0 && (G = 11, ee--);
            for (e.drawMonth = G, e.drawYear = ee, a = this._get(e, "prevText"), a = B ? this.formatDate(a, this._daylightSavingAdjust(new Date(ee, G - q, 1)), this._getFormatConfig(e)) : a, i = this._canAdjustMonth(e, -1, ee, G) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + a + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + a + "</span></a>", s = this._get(e, "nextText"), s = B ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee, G + q, 1)), this._getFormatConfig(e)) : s, r = this._canAdjustMonth(e, 1, ee, G) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + s + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + s + "</span></a>", n = this._get(e, "currentText"), d = this._get(e, "gotoCurrent") && e.currentDay ? X : H, n = B ? this.formatDate(n, d, this._getFormatConfig(e)) : n, c = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", o = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (P ? c : "") + (this._isInRange(e, d) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + n + "</button>" : "") + (P ? "" : c) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, h = this._get(e, "showWeek"), u = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), _ = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), k = this._get(e, "showOtherMonths"), D = this._get(e, "selectOtherMonths"), m = this._getDefaultDate(e), y = "", M = 0; M < J[0]; M++) {
                for (b = "", this.maxRows = 4, w = 0; w < J[1]; w++) {
                    if (C = this._daylightSavingAdjust(new Date(ee, G, e.selectedDay)), I = " ui-corner-all", x = "", Q) {
                        if (x += "<div class='ui-datepicker-group", 1 < J[1]) switch (w) {
                            case 0:
                                x += " ui-datepicker-group-first", I = " ui-corner-" + (P ? "right" : "left");
                                break;
                            case J[1] - 1:
                                x += " ui-datepicker-group-last", I = " ui-corner-" + (P ? "left" : "right");
                                break;
                            default:
                                x += " ui-datepicker-group-middle", I = ""
                        }
                        x += "'>"
                    }
                    for (x += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === M ? P ? r : i : "") + (/all|right/.test(I) && 0 === M ? P ? i : r : "") + this._generateMonthYearHeader(e, G, ee, Z, $, 0 < M || 0 < w, g, _) + "</div><table class='ui-datepicker-calendar'><thead><tr>", Y = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", v = 0; v < 7; v++) Y += "<th scope='col'" + (5 <= (v + l + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[S = (v + l) % 7] + "'>" + p[S] + "</span></th>";
                    for (x += Y + "</tr></thead><tbody>", N = this._getDaysInMonth(ee, G), ee === e.selectedYear && G === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, N)), F = (this._getFirstDayOfMonth(ee, G) - l + 7) % 7, T = Math.ceil((F + N) / 7), A = Q && this.maxRows > T ? this.maxRows : T, this.maxRows = A, K = this._daylightSavingAdjust(new Date(ee, G, 1 - F)), j = 0; j < A; j++) {
                        for (x += "<tr>", O = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(K) + "</td>" : "", v = 0; v < 7; v++) R = f ? f.apply(e.input ? e.input[0] : null, [K]) : [!0, ""], W = (L = K.getMonth() !== G) && !D || !R[0] || Z && K < Z || $ && $ < K, O += "<td class='" + (5 <= (v + l + 6) % 7 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (K.getTime() === C.getTime() && G === e.selectedMonth && e._keyEvent || m.getTime() === K.getTime() && m.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !k ? "" : " " + R[1] + (K.getTime() === X.getTime() ? " " + this._currentClass : "") + (K.getTime() === H.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !k || !R[2] ? "" : " title='" + R[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + K.getMonth() + "' data-year='" + K.getFullYear() + "'") + ">" + (L && !k ? "&#xa0;" : W ? "<span class='ui-state-default'>" + K.getDate() + "</span>" : "<a class='ui-state-default" + (K.getTime() === H.getTime() ? " ui-state-highlight" : "") + (K.getTime() === X.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + K.getDate() + "</a>") + "</td>", K.setDate(K.getDate() + 1), K = this._daylightSavingAdjust(K);
                        x += O + "</tr>"
                    }
                    11 < ++G && (G = 0, ee++), b += x += "</tbody></table>" + (Q ? "</div>" + (0 < J[0] && w === J[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += b
            }
            return y += o, e._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(e, t, a, i, s, r, n, d) {
            var c, o, l, h, u, p, g, _, f = this._get(e, "changeMonth"),
                k = this._get(e, "changeYear"),
                D = this._get(e, "showMonthAfterYear"),
                m = "<div class='ui-datepicker-title'>",
                y = "";
            if (r || !f) y += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
            else {
                for (c = i && i.getFullYear() === a, o = s && s.getFullYear() === a, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; l < 12; l++)(!c || l >= i.getMonth()) && (!o || l <= s.getMonth()) && (y += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + d[l] + "</option>");
                y += "</select>"
            }
            if (D || (m += y + (!r && f && k ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", r || !k) m += "<span class='ui-datepicker-year'>" + a + "</span>";
                else {
                    for (h = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), g = (p = function(e) {
                            var t = e.match(/c[+\-].*/) ? a + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? u : t
                        })(h[0]), _ = Math.max(g, p(h[1] || "")), g = i ? Math.max(g, i.getFullYear()) : g, _ = s ? Math.min(_, s.getFullYear()) : _, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g <= _; g++) e.yearshtml += "<option value='" + g + "'" + (g === a ? " selected='selected'" : "") + ">" + g + "</option>";
                    e.yearshtml += "</select>", m += e.yearshtml, e.yearshtml = null
                }
            return m += this._get(e, "yearSuffix"), D && (m += (!r && f && k ? "" : "&#xa0;") + y), m += "</div>"
        },
        _adjustInstDate: function(e, t, a) {
            var i = e.drawYear + ("Y" === a ? t : 0),
                s = e.drawMonth + ("M" === a ? t : 0),
                r = Math.min(e.selectedDay, this._getDaysInMonth(i, s)) + ("D" === a ? t : 0),
                n = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, s, r)));
            e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), "M" !== a && "Y" !== a || this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                s = a && t < a ? a : t;
            return i && i < s ? i : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, a, i) {
            var s = this._getNumberOfMonths(e),
                r = this._daylightSavingAdjust(new Date(a, i + (t < 0 ? t : s[0] * s[1]), 1));
            return t < 0 && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(e, r)
        },
        _isInRange: function(e, t) {
            var a, i, s = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                n = null,
                d = null,
                c = this._get(e, "yearRange");
            return c && (a = c.split(":"), i = (new Date).getFullYear(), n = parseInt(a[0], 10), d = parseInt(a[1], 10), a[0].match(/[+\-].*/) && (n += i), a[1].match(/[+\-].*/) && (d += i)), (!s || t.getTime() >= s.getTime()) && (!r || t.getTime() <= r.getTime()) && (!n || t.getFullYear() >= n) && (!d || t.getFullYear() <= d)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return {
                shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, a, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, a, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }), b.fn.datepicker = function(e) {
        if (!this.length) return this;
        b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick), b.datepicker.initialized = !0), 0 === b("#" + b.datepicker._mainDivId).length && b("body").append(b.datepicker.dpDiv);
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? b.datepicker["_" + e + "Datepicker"].apply(b.datepicker, [this[0]].concat(t)) : this.each(function() {
            "string" == typeof e ? b.datepicker["_" + e + "Datepicker"].apply(b.datepicker, [this].concat(t)) : b.datepicker._attachDatepicker(this, e)
        }) : b.datepicker["_" + e + "Datepicker"].apply(b.datepicker, [this[0]].concat(t))
    }, b.datepicker = new e, b.datepicker.initialized = !1, b.datepicker.uuid = (new Date).getTime(), b.datepicker.version = "1.11.4", b.datepicker
});
! function($) {
    $.fn.et_shortcodes_switcher = function(options) {
        var defaults = {
                slides: ">div",
                activeClass: "active",
                linksNav: "",
                findParent: !0,
                lengthElement: "li",
                useArrows: !1,
                arrowLeft: "a#prev-arrow",
                arrowRight: "a#next-arrow",
                auto: !1,
                autoSpeed: 5e3,
                slidePadding: "",
                pauseOnHover: !0,
                fx: "fade",
                sliderType: ""
            },
            options = $.extend(defaults, options);
        return this.each(function() {
            function changeTab() {
                "" != linkSwitcherTab && (linkSwitcherTab.siblings().removeClass("active"), linkSwitcherTab.filter(":eq(" + (currentPosition - 1) + ")").addClass("active"))
            }

            function gotoSlide(slideNumber, dir) {
                if (!$slide.filter(":animated").length && ($activeSlide = $slide.parent().find(".et_slidecontent").filter(":eq(" + (currentPosition - 1) + ")"), currentPosition !== slideNumber)) return $activeSlide.removeClass("et_shortcode_slide_active"), $nextSlide = $slide.parent().find(".et_slidecontent").filter(":eq(" + (slideNumber - 1) + ")").addClass("et_shortcode_slide_active"), (currentPosition > slideNumber || 1 === currentPosition) && -1 === dir ? ("slide" === options.fx && slideBack(500), "fade" === options.fx && slideFade(500)) : ("slide" === options.fx && slideForward(500), "fade" === options.fx && slideFade(500)), currentPosition = $nextSlide.prevAll(".et_slidecontent").length + 1, "" != options.linksNav && changeTab(), "images" !== options.sliderType && "simple" !== options.sliderType || ($et_shortcodes_mobile_controls.find("li").removeClass("et_shortcodes_active_control"), $et_shortcodes_mobile_controls.find("li").eq(currentPosition - 1).addClass("et_shortcodes_active_control")), !1
            }

            function slideFade(speed) {
                $activeSlide.css({
                    display: "none",
                    opacity: "0"
                }), $nextSlide.css({
                    opacity: "0",
                    display: "block"
                }).animate({
                    opacity: 1
                }, 700)
            }

            function slideForward(speed) {
                var next_slide_order = $nextSlide.prevAll(".et_slidecontent").length + 1,
                    go_to_first_slide = !1;
                $activeSlide.next(".et_slidecontent_cloned").length && (next_slide_order = $activeSlide.prevAll().length + 1, go_to_first_slide = !0), $slides_wrapper_box.animate({
                    left: -$slides_wrapper.width() * next_slide_order
                }, 500, function() {
                    go_to_first_slide && $slides_wrapper_box.css("left", -$slides_wrapper.width())
                })
            }

            function slideBack(speed) {
                var next_slide_order = $nextSlide.prevAll(".et_slidecontent").length + 1,
                    go_to_last_slide = !1;
                $activeSlide.prev(".et_slidecontent_cloned").length && (next_slide_order = 0, go_to_last_slide = !0), $slides_wrapper_box.animate({
                    left: -$slides_wrapper.width() * next_slide_order
                }, 500, function() {
                    go_to_last_slide && $slides_wrapper_box.css("left", -$slides_wrapper.width() * slidesNum)
                })
            }

            function et_shortcodes_go_to_next_slide() {
                currentPosition === slidesNum ? gotoSlide(1, 1) : gotoSlide(currentPosition + 1), "" != options.linksNav && changeTab()
            }

            function et_shortcodes_go_to_previous_slide() {
                1 === currentPosition ? gotoSlide(slidesNum, -1) : gotoSlide(currentPosition - 1, -1), "" != options.linksNav && changeTab()
            }
            var $activeSlide, $nextSlide, $et_shortcodes_mobile_nav, $et_shortcodes_mobile_controls, slidesContainer = jQuery(this).parent().css("position", "relative"),
                $slides = jQuery(this).css({
                    overflow: "hidden",
                    position: "relative"
                }),
                $slides_wrapper_box = slidesContainer.find(".et-tabs-content-wrapper"),
                $slides_wrapper = $slides_wrapper_box.parent(),
                $slide = $slides.find(".et-tabs-content-wrapper" + options.slides),
                slidesNum = $slide.length,
                currentPosition = 1,
                slides_wrapper_width = $slides_wrapper.width();
            if ("slide" === options.fx && ($slides_wrapper_box.width(200 * (slidesNum + 2) + "%"), $slide.css({
                    width: slides_wrapper_width,
                    visibility: "visible"
                }), $slides_wrapper_box.append($slide.filter(":first").clone().removeClass().addClass("et_slidecontent_cloned")), $slides_wrapper_box.prepend($slide.filter(":last").clone().removeClass().addClass("et_slidecontent_cloned")), $slides_wrapper_box.css("left", -slides_wrapper_width)), $slide.filter(":first").css({
                    display: "block"
                }).addClass("et_shortcode_slide_active"), "" != options.slidePadding && $slide.css("padding", options.slidePadding), "" != options.linksNav) {
                var linkSwitcher = jQuery(options.linksNav),
                    linkSwitcherTab = "";
                (linkSwitcherTab = options.findParent ? linkSwitcher.parent() : linkSwitcher).filter(".active").length || linkSwitcherTab.filter(":first").addClass("active"), linkSwitcher.click(function() {
                    var targetElement, orderNum;
                    return targetElement = options.findParent ? jQuery(this).parent() : jQuery(this), (orderNum = targetElement.prevAll(options.lengthElement).length + 1) > currentPosition ? gotoSlide(orderNum, 1) : gotoSlide(orderNum, -1), !1
                })
            }
            if (options.useArrows) {
                var $right_arrow = jQuery(options.arrowRight),
                    $left_arrow = jQuery(options.arrowLeft);
                $right_arrow.click(function() {
                    return et_shortcodes_go_to_next_slide(), !1
                }), $left_arrow.click(function() {
                    return et_shortcodes_go_to_previous_slide(), !1
                })
            }
            if (options.auto) {
                interval_shortcodes = setInterval(function() {
                    pauseSlider || (currentPosition === slidesNum ? gotoSlide(1, 1) : gotoSlide(currentPosition + 1, 1), "" != options.linksNav && changeTab())
                }, options.autoSpeed);
                var pauseSlider = !1
            }
            options.pauseOnHover && slidesContainer.hover(function() {
                    pauseSlider = !0
                }, function() {
                    pauseSlider = !1
                }), "slide" === options.fx && $(window).resize(function() {
                    $slides_wrapper_box.find(">div").css({
                        width: $slides_wrapper.width()
                    }), $slides_wrapper_box.css("left", -$slides_wrapper.width() * currentPosition)
                }),
                function() {
                    var et_shortcodes_slides_num = slidesContainer.find(".et_slidecontent").length,
                        et_shortcodes_controllers_html = "";
                    if (et_shortcodes_slides_num > 1 && ("images" === options.sliderType || "simple" === options.sliderType)) {
                        slidesContainer.append('<div class="et_shortcodes_controller_nav"><ul class="et_shortcodes_controls"></ul><ul class="et_shortcodes_controls_arrows"><li><a href="#" class="et_sc_nav_next">' + et_shortcodes_strings.next + '<span></span></a></li><li><a href="#" class="et_sc_nav_prev">' + et_shortcodes_strings.previous + "<span></span></a></li></ul></div>"), $et_shortcodes_mobile_controls = slidesContainer.find(".et_shortcodes_controls");
                        for (var i = 0; i < et_shortcodes_slides_num; i++) et_shortcodes_controllers_html += '<li><a href="#"></a></li>';
                        $et_shortcodes_mobile_controls.prepend(et_shortcodes_controllers_html), $et_shortcodes_mobile_controls.find("li:first").addClass("et_shortcodes_active_control"), $et_shortcodes_mobile_controls.find("a").click(function() {
                            var this_order = $(this).parent("li").prevAll().length + 1;
                            return this_order != currentPosition && (this_order > currentPosition ? gotoSlide(this_order, 1) : gotoSlide(this_order, -1), !1)
                        }), ($et_shortcodes_mobile_nav = slidesContainer.find(".et_shortcodes_controls_arrows")).find("a").click(function() {
                            var et_active_slide_order, $this_link = jQuery(this);
                            return $this_link.hasClass("et_sc_nav_next") && et_shortcodes_go_to_next_slide(), $this_link.hasClass("et_sc_nav_prev") && et_shortcodes_go_to_previous_slide(), $et_shortcodes_mobile_controls.find("li").removeClass("et_shortcodes_active_control"), et_active_slide_order = currentPosition - 1, $et_shortcodes_mobile_controls.find("li").eq(et_active_slide_order).addClass("et_shortcodes_active_control"), !1
                        })
                    } else "images" !== options.sliderType && "simple" !== options.sliderType && (slidesContainer.prepend('<ul class="et_shortcodes_mobile_nav"><li><a href="#" class="et_sc_nav_next">' + et_shortcodes_strings.next + '<span></span></a></li><li><a href="#" class="et_sc_nav_prev">' + et_shortcodes_strings.previous + "<span></span></a></li></ul>"), ($et_shortcodes_mobile_nav = slidesContainer.find(".et_shortcodes_mobile_nav")).find("a").click(function() {
                        var $this_link = jQuery(this);
                        return $this_link.hasClass("et_sc_nav_next") && et_shortcodes_go_to_next_slide(), $this_link.hasClass("et_sc_nav_prev") && et_shortcodes_go_to_previous_slide(), !1
                    }))
                }()
        })
    }, window.et_shortcodes_init = function($container) {
        var $processed_container = void 0 !== $container ? $container : $("body"),
            $et_pricing_table_button = $processed_container.find(".pricing-table a.icon-button");
        $et_tooltip = $processed_container.find(".et-tooltip"), $et_tooltip.on("mouseover mouseout", function(event) {
            "mouseover" == event.type ? $(this).find(".et-tooltip-box").stop(!0, !0).animate({
                opacity: "show",
                bottom: "25px"
            }, 300) : $(this).find(".et-tooltip-box").delay(200).animate({
                opacity: "hide",
                bottom: "35px"
            }, 300)
        }), $et_learn_more = $processed_container.find(".et-learn-more .heading-more"), $et_learn_more.on("click", function() {
            $(this).hasClass("open") ? $(this).removeClass("open") : $(this).addClass("open"), $(this).parent(".et-learn-more").find(".learn-more-content").animate({
                opacity: "toggle",
                height: "toggle"
            }, 300)
        }), $processed_container.find(".et-learn-more").not(".et-open").find(".learn-more-content").css({
            visibility: "visible",
            display: "none"
        }), $et_pricing_table_button.each(function() {
            var $this_button = $(this),
                this_button_width = $this_button.width(),
                this_button_innerwidth = $this_button.innerWidth();
            $this_button.css({
                width: this_button_width,
                marginLeft: "-" + this_button_innerwidth / 2 + "px",
                visibility: "visible"
            })
        }), $processed_container.find(".et-tabs-container, .tabs-left, .et-simple-slider, .et-image-slider").each(function(i) {
            var et_shortcodes_tab_class = $(this).attr("class"),
                et_shortcodes_tab_autospeed = /et_sliderauto_speed_(\d+)/g.exec(et_shortcodes_tab_class),
                et_shortcodes_tab_auto = /et_sliderauto_(\w+)/g.exec(et_shortcodes_tab_class),
                et_shortcodes_tab_type = /et_slidertype_(\w+)/g.exec(et_shortcodes_tab_class),
                et_shortcodes_tab_fx = /et_sliderfx_(\w+)/g.exec(et_shortcodes_tab_class),
                et_shortcodes_tab_apply_to_element = ".et-tabs-content",
                et_shortcodes_tab_settings = {};
            et_shortcodes_tab_settings.linksNav = $(this).find(".et-tabs-control li a"), et_shortcodes_tab_settings.findParent = !0, et_shortcodes_tab_settings.fx = et_shortcodes_tab_fx[1], et_shortcodes_tab_settings.auto = "false" !== et_shortcodes_tab_auto[1], et_shortcodes_tab_settings.autoSpeed = et_shortcodes_tab_autospeed[1], "simple" === et_shortcodes_tab_type[1] ? ((et_shortcodes_tab_settings = {}).fx = et_shortcodes_tab_fx[1], et_shortcodes_tab_settings.auto = "false" !== et_shortcodes_tab_auto[1], et_shortcodes_tab_settings.autoSpeed = et_shortcodes_tab_autospeed[1], et_shortcodes_tab_settings.sliderType = "simple", et_shortcodes_tab_apply_to_element = ".et-simple-slides") : "images" === et_shortcodes_tab_type[1] && (et_shortcodes_tab_settings.sliderType = "images", et_shortcodes_tab_settings.linksNav = "#" + $(this).attr("id") + " .controllers a.switch", et_shortcodes_tab_settings.findParent = !1, et_shortcodes_tab_settings.lengthElement = "#" + $(this).attr("id") + " a.switch", et_shortcodes_tab_apply_to_element = ".et-image-slides"), $(this).find(et_shortcodes_tab_apply_to_element).et_shortcodes_switcher(et_shortcodes_tab_settings)
        })
    }
}(jQuery), jQuery(document).ready(function($) {
    window.et_shortcodes_init()
});
! function($) {
    "use strict";
    $.fn.fitVids = function(options) {
        var settings = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var head = document.head || document.getElementsByTagName("head")[0],
                div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', head.appendChild(div.childNodes[1])
        }
        return options && $.extend(settings, options), this.each(function() {
            var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            settings.customSelector && selectors.push(settings.customSelector);
            var ignoreList = ".fitvidsignore";
            settings.ignore && (ignoreList = ignoreList + ", " + settings.ignore);
            var $allVideos = $(this).find(selectors.join(","));
            ($allVideos = ($allVideos = $allVideos.not("object object")).not(ignoreList)).each(function(count) {
                var $this = $(this);
                if (!($this.parents(ignoreList).length > 0 || "embed" === this.tagName.toLowerCase() && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length)) {
                    $this.css("height") || $this.css("width") || !isNaN($this.attr("height")) && !isNaN($this.attr("width")) || ($this.attr("height", 9), $this.attr("width", 16));
                    var aspectRatio = ("object" === this.tagName.toLowerCase() || $this.attr("height") && !isNaN(parseInt($this.attr("height"), 10)) ? parseInt($this.attr("height"), 10) : $this.height()) / (isNaN(parseInt($this.attr("width"), 10)) ? $this.width() : parseInt($this.attr("width"), 10));
                    if (!$this.attr("id")) {
                        var videoID = "fitvid" + count;
                        $this.attr("id", videoID)
                    }
                    $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * aspectRatio + "%"), $this.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                r = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
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
            a.magnificPopup.instance || ((b = new t).init(), a.magnificPopup.instance = b)
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
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (!1 === c.isObj) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if ((g = h[e]).parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; {
                if (!b.isOpen) {
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
                    }), (!1 === b.st.fixedBgPos || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
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
                }
                b.updateItemHTML()
            }
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
            d.off("keyup.mfp focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && !0 !== b.currTemplate[b.currItem.type] || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y("AfterClose")
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
                var f = !!b.st[d] && b.st[d].markup;
                y("FirstMarkupParse", f), b.currTemplate[d] = !f || a(f)
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && !0 === b.currTemplate[c] ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y("BeforeAppend"), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
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
            if ((void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick) || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
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
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                if (void 0 === c || !1 === c) return !0;
                if ((e = a.split("_")).length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(p + "-" + a).html(c)
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
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), void(3 === ++c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : 200 > ++e ? setTimeout(f, 100) : g())
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), (j = c.img[0]).naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
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
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), !(a = b._getItemToZoom())) return void k();
                            (f = j(a)).css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
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
                                if (!(a = b._getItemToZoom())) return;
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
                return !!b.currItem.hasSize && b.currItem.img
            },
            _getOffset: function(c) {
                var d, e = (d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem)).offset(),
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
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = "//about:blank"), b.isIE8 && c.css("display", a ? "block" : "none"))
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
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, !(!c || !c.enabled) && (f += " mfp-gallery", w(m + e, function() {
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
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function() {
                            b.prev()
                        }), f[h](function() {
                            b.next()
                        }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                }))
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
                        (c = isNaN(c) ? c() : c) > 1 && (w("ImageHasSize." + U, function(a, b) {
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
        }),
        function() {
            var c = "ontouchstart" in window,
                d = function() {
                    v.off("touchmove" + f + " touchend" + f)
                },
                f = ".mfpFastClick";
            a.fn.mfpFastClick = function(e) {
                return a(this).each(function() {
                    var g, h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function(a) {
                            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                            }).on("touchend" + f, function(a) {
                                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                    g = !1
                                }, 1e3), e())
                            })
                        })
                    }
                    h.on("click" + f, function() {
                        g || e()
                    })
                })
            }, a.fn.destroyMfpFastClick = function() {
                a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
            }
        }(), A()
});
! function($, window, undefined) {
    "$:nomunge";

    function get_fragment(url) {
        return "#" + (url = url || location.href).replace(/^[^#]*#?(.*)$/, "$1")
    }
    var fake_onhashchange, str_hashchange = "hashchange",
        doc = document,
        special = $.event.special,
        doc_mode = doc.documentMode,
        supports_onhashchange = "on" + str_hashchange in window && (void 0 === doc_mode || doc_mode > 7);
    $.fn[str_hashchange] = function(fn) {
        return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange)
    }, $.fn[str_hashchange].delay = 50, special[str_hashchange] = $.extend(special[str_hashchange], {
        setup: function() {
            if (supports_onhashchange) return !1;
            $(fake_onhashchange.start)
        },
        teardown: function() {
            if (supports_onhashchange) return !1;
            $(fake_onhashchange.stop)
        }
    }), fake_onhashchange = function() {
        function poll() {
            var hash = get_fragment(),
                history_hash = history_get(last_hash);
            hash !== last_hash ? (history_set(last_hash = hash, history_hash), $(window).trigger(str_hashchange)) : history_hash !== last_hash && (location.href = location.href.replace(/#.*/, "") + history_hash), timeout_id = setTimeout(poll, $.fn[str_hashchange].delay)
        }
        var timeout_id, self = {},
            last_hash = get_fragment(),
            fn_retval = function(val) {
                return val
            },
            history_set = fn_retval,
            history_get = fn_retval;
        return self.start = function() {
            timeout_id || poll()
        }, self.stop = function() {
            timeout_id && clearTimeout(timeout_id), timeout_id = void 0
        }, void 0 !== $.browser && $.browser.msie && !supports_onhashchange && function() {
            var iframe, iframe_src;
            self.start = function() {
                iframe || (iframe_src = $.fn[str_hashchange].src, iframe_src = iframe_src && iframe_src + get_fragment(), iframe = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    iframe_src || history_set(get_fragment()), poll()
                }).attr("src", iframe_src || "javascript:0").insertAfter("body")[0].contentWindow, doc.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (iframe.document.title = doc.title)
                    } catch (e) {}
                })
            }, self.stop = fn_retval, history_get = function() {
                return get_fragment(iframe.location.href)
            }, history_set = function(hash, history_hash) {
                var iframe_doc = iframe.document,
                    domain = $.fn[str_hashchange].domain;
                hash !== history_hash && (iframe_doc.title = doc.title, iframe_doc.open(), domain && iframe_doc.write('<script>document.domain="' + domain + '"<\/script>'), iframe_doc.close(), iframe.location.hash = hash)
            }
        }(), self
    }()
}(jQuery, this);
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.salvattore = t()
}(this, function() {
    return window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    r = null;
                t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                    matchMedium: function(e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; }}";
                        return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === r.width
                    }
                }
            }
            return function(t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        }()),
        function() {
            "use strict";
            if (window.matchMedia && window.matchMedia("all").addListener) return !1;
            var e = window.matchMedia,
                t = e("only all").matches,
                n = !1,
                r = 0,
                a = [],
                i = function() {
                    clearTimeout(r), r = setTimeout(function() {
                        for (var t = 0, n = a.length; n > t; t++) {
                            var r = a[t].mql,
                                i = a[t].listeners || [],
                                o = e(r.media).matches;
                            if (o !== r.matches) {
                                r.matches = o;
                                for (var c = 0, l = i.length; l > c; c++) i[c].call(window, r)
                            }
                        }
                    }, 30)
                };
            window.matchMedia = function(r) {
                var o = e(r),
                    c = [],
                    l = 0;
                return o.addListener = function(e) {
                    t && (n || (n = !0, window.addEventListener("resize", i, !0)), 0 === l && (l = a.push({
                        mql: o,
                        listeners: c
                    })), c.push(e))
                }, o.removeListener = function(e) {
                    for (var t = 0, n = c.length; n > t; t++) c[t] === e && c.splice(t, 1)
                }, o
            }
        }(),
        function() {
            "use strict";
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
                var n = (new Date).getTime(),
                    r = Math.max(0, 16 - (n - e)),
                    a = window.setTimeout(function() {
                        t(n + r)
                    }, r);
                return e = n + r, a
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }(), "function" != typeof window.CustomEvent && function() {
            "use strict";

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }(),
        function(e, t) {
            "use strict";
            var n = {},
                r = [],
                a = [],
                i = [],
                o = function(e, t, n) {
                    e.dataset ? e.dataset[t] = n : e.setAttribute("data-" + t, n)
                };
            return n.obtainGridSettings = function(t) {
                var r = e.getComputedStyle(t, ":before").getPropertyValue("content").slice(1, -1),
                    a = r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),
                    i = 1,
                    o = [];
                return a ? (i = a[1], o = a[2], o = o ? o.split(".") : ["column"]) : (a = r.match(/^\s*\.(.+)\s+(\d+)\s*$/)) && (o = a[1], (i = a[2]) && (i = i.split("."))), {
                    numberOfColumns: i,
                    columnClasses: o
                }
            }, n.addColumns = function(e, r) {
                for (var a, i = n.obtainGridSettings(e), c = i.numberOfColumns, l = i.columnClasses, s = new Array(+c), u = t.createDocumentFragment(), d = c; 0 != d--;) a = "[data-columns] > *:nth-child(" + c + "n-" + d + ")", s.push(r.querySelectorAll(a));
                s.forEach(function(e) {
                    var n = t.createElement("div"),
                        r = t.createDocumentFragment();
                    n.className = l.join(" "), Array.prototype.forEach.call(e, function(e) {
                        r.appendChild(e)
                    }), n.appendChild(r), u.appendChild(n)
                }), e.appendChild(u), o(e, "columns", c)
            }, n.removeColumns = function(n) {
                var r = t.createRange();
                r.selectNodeContents(n);
                var a = Array.prototype.filter.call(r.extractContents().childNodes, function(t) {
                        return t instanceof e.HTMLElement
                    }),
                    i = a.length,
                    c = a[0].childNodes.length,
                    l = new Array(c * i);
                Array.prototype.forEach.call(a, function(e, t) {
                    Array.prototype.forEach.call(e.children, function(e, n) {
                        l[n * i + t] = e
                    })
                });
                var s = t.createElement("div");
                return o(s, "columns", 0), l.filter(function(e) {
                    return !!e
                }).forEach(function(e) {
                    s.appendChild(e)
                }), s
            }, n.recreateColumns = function(t) {
                e.requestAnimationFrame(function() {
                    n.addColumns(t, n.removeColumns(t));
                    var e = new CustomEvent("columnsChange");
                    t.dispatchEvent(e)
                })
            }, n.mediaQueryChange = function(e) {
                e.matches && Array.prototype.forEach.call(r, n.recreateColumns)
            }, n.getCSSRules = function(e) {
                var t;
                try {
                    t = e.sheet.cssRules || e.sheet.rules
                } catch (n) {
                    return []
                }
                return t || []
            }, n.getStylesheets = function() {
                return Array.prototype.concat.call(Array.prototype.slice.call(t.querySelectorAll("style[type='text/css']")), Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']")))
            }, n.mediaRuleHasColumnsSelector = function(e) {
                var t, n;
                try {
                    t = e.length
                } catch (r) {
                    t = 0
                }
                for (; t--;)
                    if ((n = e[t]).selectorText && n.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0;
                return !1
            }, n.scanMediaQueries = function() {
                var t = [];
                if (e.matchMedia) {
                    n.getStylesheets().forEach(function(e) {
                        Array.prototype.forEach.call(n.getCSSRules(e), function(e) {
                            e.media && e.cssRules && n.mediaRuleHasColumnsSelector(e.cssRules) && t.push(e)
                        })
                    });
                    var r = a.filter(function(e) {
                        return -1 === t.indexOf(e)
                    });
                    i.filter(function(e) {
                        return -1 !== r.indexOf(e.rule)
                    }).forEach(function(e) {
                        e.mql.removeListener(n.mediaQueryChange)
                    }), i = i.filter(function(e) {
                        return -1 === r.indexOf(e.rule)
                    }), t.filter(function(e) {
                        return -1 == a.indexOf(e)
                    }).forEach(function(t) {
                        var r = e.matchMedia(t.media.mediaText);
                        r.addListener(n.mediaQueryChange), i.push({
                            rule: t,
                            mql: r
                        })
                    }), a.length = 0, a = t
                }
            }, n.rescanMediaQueries = function() {
                n.scanMediaQueries(), Array.prototype.forEach.call(r, n.recreateColumns)
            }, n.nextElementColumnIndex = function(e, t) {
                var n, r, a, i = e.children,
                    o = i.length,
                    c = 0,
                    l = 0;
                for (a = 0; o > a; a++) n = i[a], r = n.children.length + (t[a].children || t[a].childNodes).length, 0 === c && (c = r), c > r && (l = a, c = r);
                return l
            }, n.createFragmentsList = function(e) {
                for (var n = new Array(e), r = 0; r !== e;) n[r] = t.createDocumentFragment(), r++;
                return n
            }, n.appendElements = function(e, t) {
                var r = e.children,
                    a = r.length,
                    i = n.createFragmentsList(a);
                Array.prototype.forEach.call(t, function(t) {
                    var r = n.nextElementColumnIndex(e, i);
                    i[r].appendChild(t)
                }), Array.prototype.forEach.call(r, function(e, t) {
                    e.appendChild(i[t])
                })
            }, n.prependElements = function(e, r) {
                var a = e.children,
                    i = a.length,
                    o = n.createFragmentsList(i),
                    c = i - 1;
                r.forEach(function(e) {
                    var t = o[c];
                    t.insertBefore(e, t.firstChild), 0 === c ? c = i - 1 : c--
                }), Array.prototype.forEach.call(a, function(e, t) {
                    e.insertBefore(o[t], e.firstChild)
                });
                for (var l = t.createDocumentFragment(), s = r.length % i; 0 != s--;) l.appendChild(e.lastChild);
                e.insertBefore(l, e.firstChild)
            }, n.registerGrid = function(a) {
                if ("none" !== e.getComputedStyle(a).display) {
                    var i = t.createRange();
                    i.selectNodeContents(a);
                    var c = t.createElement("div");
                    c.appendChild(i.extractContents()), o(c, "columns", 0), n.addColumns(a, c), r.push(a)
                }
            }, n.init = function() {
                var e = t.createElement("style");
                e.innerHTML = "[data-columns]::before{visibility:hidden;position:absolute;font-size:1px;}", t.head.appendChild(e);
                var r = t.querySelectorAll("[data-columns]");
                Array.prototype.forEach.call(r, n.registerGrid), n.scanMediaQueries()
            }, n.init(), {
                appendElements: n.appendElements,
                prependElements: n.prependElements,
                registerGrid: n.registerGrid,
                recreateColumns: n.recreateColumns,
                rescanMediaQueries: n.rescanMediaQueries,
                append_elements: n.appendElements,
                prepend_elements: n.prependElements,
                register_grid: n.registerGrid,
                recreate_columns: n.recreateColumns,
                rescan_media_queries: n.rescanMediaQueries
            }
        }(window, window.document)
});
! function(root, factory) {
    "object" == typeof exports ? module.exports = factory(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], factory) : factory(root.jQuery)
}(this, function($) {
    var CanvasRenderer = function(el, options) {
            var cachedBackground, canvas = document.createElement("canvas");
            el.appendChild(canvas), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(canvas);
            var ctx = canvas.getContext("2d");
            canvas.width = canvas.height = options.size;
            var scaleBy = 1;
            window.devicePixelRatio > 1 && (scaleBy = window.devicePixelRatio, canvas.style.width = canvas.style.height = [options.size, "px"].join(""), canvas.width = canvas.height = options.size * scaleBy, ctx.scale(scaleBy, scaleBy)), ctx.translate(options.size / 2, options.size / 2), ctx.rotate((options.rotate / 180 - .5) * Math.PI);
            var radius = (options.size - options.lineWidth) / 2;
            options.scaleColor && options.scaleLength && (radius -= options.scaleLength + 2), Date.now = Date.now || function() {
                return +new Date
            };
            var drawCircle = function(color, lineWidth, percent, alpha) {
                    var isNegative = (percent = Math.min(Math.max(-1, percent || 0), 1)) <= 0;
                    ctx.beginPath(), ctx.arc(0, 0, radius, 0, 2 * Math.PI * percent, isNegative), ctx.strokeStyle = color, ctx.globalAlpha = alpha, ctx.lineWidth = lineWidth, ctx.stroke()
                },
                drawScale = function() {
                    var offset, length;
                    ctx.lineWidth = 1, ctx.fillStyle = options.scaleColor, ctx.save();
                    for (var i = 24; i > 0; --i) i % 6 == 0 ? (length = options.scaleLength, offset = 0) : (length = .6 * options.scaleLength, offset = options.scaleLength - length), ctx.fillRect(-options.size / 2 + offset, 0, length, 1), ctx.rotate(Math.PI / 12);
                    ctx.restore()
                },
                reqAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                    window.setTimeout(callback, 1e3 / 60)
                },
                drawBackground = function() {
                    options.scaleColor && drawScale(), options.trackColor && drawCircle(options.trackColor, options.lineWidth, 1, options.trackAlpha)
                };
            this.getCanvas = function() {
                return canvas
            }, this.getCtx = function() {
                return ctx
            }, this.clear = function() {
                ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size)
            }, this.draw = function(percent) {
                options.scaleColor || options.trackColor ? ctx.getImageData && ctx.putImageData ? cachedBackground ? ctx.putImageData(cachedBackground, 0, 0) : (drawBackground(), cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy)) : (this.clear(), drawBackground()) : this.clear(), ctx.lineCap = options.lineCap;
                var color;
                color = "function" == typeof options.barColor ? options.barColor(percent) : options.barColor, drawCircle(color, options.lineWidth, percent / 100, options.barAlpha)
            }.bind(this), this.animate = function(from, to) {
                var startTime = Date.now();
                options.onStart(from, to);
                var animation = function() {
                    var process = Math.min(Date.now() - startTime, options.animate.duration),
                        currentValue = options.easing(this, process, from, to - from, options.animate.duration);
                    this.draw(currentValue), options.onStep(from, to, currentValue), process >= options.animate.duration ? options.onStop(from, to) : reqAnimationFrame(animation)
                }.bind(this);
                reqAnimationFrame(animation)
            }.bind(this)
        },
        EasyPieChart = function(el, opts) {
            var defaultOptions = {
                barColor: "#ef1e25",
                barAlpha: 1,
                trackColor: "#f9f9f9",
                trackAlpha: 1,
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                size: 110,
                rotate: 0,
                render: !0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function(x, t, b, c, d) {
                    return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b
                },
                onStart: function(from, to) {},
                onStep: function(from, to, currentValue) {},
                onStop: function(from, to) {}
            };
            if (void 0 !== CanvasRenderer) defaultOptions.renderer = CanvasRenderer;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                defaultOptions.renderer = SVGRenderer
            }
            var options = {},
                currentValue = 0,
                init = function() {
                    this.el = el, this.options = options;
                    for (var i in defaultOptions) defaultOptions.hasOwnProperty(i) && (options[i] = opts && void 0 !== opts[i] ? opts[i] : defaultOptions[i], "function" == typeof options[i] && (options[i] = options[i].bind(this)));
                    "string" == typeof options.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[options.easing]) ? options.easing = jQuery.easing[options.easing] : options.easing = defaultOptions.easing, "number" == typeof options.animate && (options.animate = {
                        duration: options.animate,
                        enabled: !0
                    }), "boolean" != typeof options.animate || options.animate || (options.animate = {
                        duration: 1e3,
                        enabled: options.animate
                    }), this.renderer = new options.renderer(el, options), this.renderer.draw(currentValue), el.dataset && el.dataset.percent ? this.update(parseFloat(el.dataset.percent)) : el.getAttribute && el.getAttribute("data-percent") && this.update(parseFloat(el.getAttribute("data-percent")))
                }.bind(this);
            this.update = function(newValue) {
                return newValue = parseFloat(newValue), options.animate.enabled ? this.renderer.animate(currentValue, newValue) : this.renderer.draw(newValue), currentValue = newValue, this
            }.bind(this), this.disableAnimation = function() {
                return options.animate.enabled = !1, this
            }, this.enableAnimation = function() {
                return options.animate.enabled = !0, this
            }, init()
        };
    $.fn.easyPieChart = function(options) {
        return this.each(function() {
            var instanceOptions;
            $.data(this, "easyPieChart") || (instanceOptions = $.extend({}, options, $(this).data()), $.data(this, "easyPieChart", new EasyPieChart(this, instanceOptions)))
        })
    }
});
! function($) {
    window.et_pb_smooth_scroll = function($target, $top_section, speed, easing) {
        var $window_width = $(window).width();
        $("body").hasClass("et_fixed_nav") && $window_width > 980 ? $menu_offset = $("#top-header").outerHeight() + $("#main-header").outerHeight() - 1 : $menu_offset = -1, $("#wpadminbar").length && $window_width > 600 && ($menu_offset += $("#wpadminbar").outerHeight()), $scroll_position = $top_section ? 0 : $target.offset().top - $menu_offset, void 0 === easing && (easing = "swing"), $("html, body").animate({
            scrollTop: $scroll_position
        }, speed, easing)
    }, window.et_pb_form_placeholders_init = function($form) {
        $form.find('input:text, input[type="email"], input[type="url"], textarea').each(function(index, domEle) {
            var $et_current_input = jQuery(domEle),
                $et_comment_label = $et_current_input.siblings("label"),
                et_comment_label_value = $et_current_input.siblings("label").text();
            $et_comment_label.length && ($et_comment_label.hide(), $et_current_input.siblings("span.required") && (et_comment_label_value += $et_current_input.siblings("span.required").text(), $et_current_input.siblings("span.required").hide()), $et_current_input.val(et_comment_label_value))
        }).bind("focus", function() {
            var et_label_text = jQuery(this).siblings("label").text();
            jQuery(this).siblings("span.required").length && (et_label_text += jQuery(this).siblings("span.required").text()), jQuery(this).val() === et_label_text && jQuery(this).val("")
        }).bind("blur", function() {
            var et_label_text = jQuery(this).siblings("label").text();
            jQuery(this).siblings("span.required").length && (et_label_text += jQuery(this).siblings("span.required").text()), "" === jQuery(this).val() && jQuery(this).val(et_label_text)
        })
    }, window.et_duplicate_menu = function(menu, append_to, menu_id, menu_class, menu_click_event) {
        append_to.each(function() {
            var $cloned_nav, $this_menu = $(this);
            "" !== menu && menu.clone().attr("id", menu_id).removeClass().attr("class", menu_class).appendTo($this_menu), ($cloned_nav = $this_menu.find("> ul")).find(".menu_slide").remove(), $cloned_nav.find("li:first").addClass("et_first_mobile_item"), $cloned_nav.find("a").on("click", function() {
                $(this).parents(".et_mobile_menu").siblings(".mobile_menu_bar").trigger("click")
            }), "no_click_event" !== menu_click_event && $this_menu.on("click", ".mobile_menu_bar", function() {
                return $this_menu.hasClass("closed") ? ($this_menu.removeClass("closed").addClass("opened"), $cloned_nav.stop().slideDown(500)) : ($this_menu.removeClass("opened").addClass("closed"), $cloned_nav.stop().slideUp(500)), !1
            })
        }), $("#mobile_menu .centered-inline-logo-wrap").remove()
    }, window.et_pb_remove_placeholder_text = function($form) {
        $form.find("input:text, textarea").each(function(index, domEle) {
            var $et_current_input = jQuery(domEle),
                $et_label = $et_current_input.siblings("label");
            $et_current_input.siblings("label").text();
            $et_label.length && $et_label.is(":hidden") && $et_label.text() == $et_current_input.val() && $et_current_input.val("")
        })
    }, window.et_fix_fullscreen_section = function() {
        var $et_window = $(window);
        $("section.et_pb_fullscreen").each(function() {
            var $this_section = $(this);
            $.proxy(et_calc_fullscreen_section, $this_section)(), $et_window.on("resize", $.proxy(et_calc_fullscreen_section, $this_section))
        })
    }, window.et_bar_counters_init = function($bar_item) {
        $bar_item.length && $bar_item.css({
            width: parseFloat($bar_item.attr("data-width")) + "%"
        })
    }, window.et_fix_pricing_currency_position = function($pricing_table) {
        var $all_pricing_tables = void 0 !== $pricing_table ? $pricing_table : $(".et_pb_pricing_table");
        $all_pricing_tables.length && $all_pricing_tables.each(function() {
            var $price_container = $(this).find(".et_pb_et_price"),
                $currency = !!$price_container.length && $price_container.find(".et_pb_dollar_sign"),
                $price = !!$price_container.length && $price_container.find(".et_pb_sum");
            $currency && $price && $currency.css({
                marginLeft: -$currency.width() + "px"
            })
        })
    }, window.et_pb_set_responsive_grid = function($grid_items_container, single_item_selector) {
        setTimeout(function() {
            var container_width = $grid_items_container.innerWidth(),
                $grid_items = $grid_items_container.find(single_item_selector),
                item_width = $grid_items.outerWidth(!0),
                last_item_margin = item_width - $grid_items.outerWidth(),
                columns_count = Math.round((container_width + last_item_margin) / item_width),
                counter = 1,
                first_in_row = 1;
            $grid_items.removeClass("last_in_row first_in_row"), $grid_items.filter(":visible").each(function() {
                var $this_el = $(this);
                $this_el.hasClass("inactive") || (first_in_row === counter && $this_el.addClass("first_in_row"), 0 == counter % columns_count && ($this_el.addClass("last_in_row"), first_in_row = counter + 1), counter++)
            })
        }, 1)
    }, window.et_pb_set_tabs_height = function($tabs_module) {
        void 0 === $tabs_module && ($tabs_module = $(".et_pb_tabs")), $tabs_module.length && $tabs_module.each(function() {
            var $tab_controls = $(this).find(".et_pb_tabs_controls"),
                $all_tabs = $tab_controls.find("li"),
                max_height = 0,
                in_small_column = $(this).parents(".et_pb_column_1_3, .et_pb_column_1_4, .et_pb_column_3_8").length > 0,
                on_small_screen = parseFloat($(window).width()) < 768,
                vertically_stacked = in_small_column || on_small_screen;
            vertically_stacked && $(this).addClass("et_pb_tabs_vertically_stacked"), $all_tabs.length && ($tab_controls.children("li").removeAttr("style"), $all_tabs.each(function() {
                var tab_height = $(this).outerHeight();
                vertically_stacked || tab_height > max_height && (max_height = tab_height)
            })), 0 !== max_height && $tab_controls.children("li").css("height", max_height)
        })
    }, window.et_pb_box_shadow_apply_overlay = function(el) {
        void 0 !== document.body.style.pointerEvents && (void 0 === document.documentMode || document.documentMode >= 11) ? $(el).each(function() {
            $(this).children(".box-shadow-overlay").length || $(this).addClass("has-box-shadow-overlay").prepend('<div class="box-shadow-overlay"></div>')
        }) : $(el).addClass(".et-box-shadow-no-overlay")
    }, window.et_pb_init_nav_menu = function($et_menus) {
        $et_menus.each(function() {
            var $et_menu = $(this);
            $et_menu.data("et-is-menu-ready") || ($et_menu.find("li").hover(function() {
                window.et_pb_toggle_nav_menu($(this), "open")
            }, function() {
                window.et_pb_toggle_nav_menu($(this), "close")
            }), $("body").on("touchend", function(event) {
                $(event.target).closest("ul.nav, ul.menu").length < 1 && $(".et-hover").length > 0 && window.et_pb_toggle_nav_menu($(".et-hover"), "close")
            }), $et_menu.find("li.menu-item-has-children").on("touchend", function(event) {
                var $closest_li = $(event.target).closest(".menu-item");
                if ($closest_li.hasClass("menu-item-has-children")) {
                    var $this_el = $(this),
                        is_mega_menu_opened = $closest_li.closest(".mega-menu-parent.et-touch-hover").length > 0;
                    if ($this_el.hasClass("et-touch-hover") || is_mega_menu_opened) void 0 !== $this_el.find(">a").attr("href") && (window.location = $this_el.find(">a").attr("href"));
                    else {
                        var $opened_menu = $(event.target),
                            $already_opened_menus = $opened_menu.closest(".menu-item").siblings(".et-touch-hover");
                        if ($opened_menu.closest(".et-touch-hover").length < 1 && window.et_pb_toggle_nav_menu($(".et-hover"), "close", 0), $this_el.addClass("et-touch-hover"), $already_opened_menus.length > 0) {
                            var $submenus_in_already_opened = $already_opened_menus.find(".et-touch-hover");
                            window.et_pb_toggle_nav_menu($already_opened_menus, "close"), window.et_pb_toggle_nav_menu($submenus_in_already_opened, "close")
                        }
                        window.et_pb_toggle_nav_menu($this_el, "open")
                    }
                    event.preventDefault(), event.stopPropagation()
                }
            }), $et_menu.find("li.mega-menu").each(function() {
                var $li_mega_menu = $(this),
                    li_mega_menu_item_count = $li_mega_menu.children("ul").children("li").length;
                li_mega_menu_item_count < 4 && $li_mega_menu.addClass("mega-menu-parent mega-menu-parent-" + li_mega_menu_item_count)
            }), $et_menu.data("et-is-menu-ready", "ready"))
        })
    }, window.et_pb_toggle_nav_menu = function($element, state, delay) {
        if ("open" === state) $element.closest("li.mega-menu").length && !$element.hasClass("mega-menu") || ($element.addClass("et-show-dropdown"), $element.removeClass("et-hover").addClass("et-hover"));
        else {
            var closeDelay = void 0 !== delay ? delay : 200;
            $element.removeClass("et-show-dropdown"), $element.removeClass("et-touch-hover"), setTimeout(function() {
                $element.hasClass("et-show-dropdown") || $element.removeClass("et-hover")
            }, closeDelay)
        }
    }, window.et_pb_apply_sticky_image_effect = function($sticky_image_el) {
        var $row = $sticky_image_el.closest(".et_pb_row"),
            $section = $row.closest(".et_pb_section"),
            $column = $sticky_image_el.closest(".et_pb_column"),
            $lastRowInSection = $section.children(".et_pb_row").last(),
            $lastColumnInRow = $row.children(".et_pb_column").last(),
            $lastModuleInColumn = $column.children(".et_pb_module").last();
        return !$row.is($lastRowInSection) || ($lastRowInSection.addClass("et-last-child"), !$sticky_image_el.is($lastModuleInColumn) || ($section.hasClass("et_pb_section_sticky") || $section.addClass("et_pb_section_sticky"), $column.addClass("et_pb_row_sticky"), void(!$section.hasClass("et_pb_section_sticky_mobile") && $column.is($lastColumnInRow) && $section.addClass("et_pb_section_sticky_mobile"))))
    }
}(jQuery);
! function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(r) {
        return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
}(this, document, function(e, t, n, r) {
    (function(e, t, n, r) {
        function T(e) {
            for (; e && void 0 !== e.originalEvent;) e = e.originalEvent;
            return e
        }

        function N(t, n) {
            var s, o, a, l, c, h, p, d, v, i = t.type;
            if (t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f), s)
                for (p = o.length, l; p;) l = o[--p], t[l] = s[l];
            if (i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== i.search(/^touch/) && (a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r))
                for (d = 0, v = u.length; d < v; d++) l = u[d], t[l] = h[l];
            return t
        }

        function C(t) {
            for (var r, s, n = {}; t;) {
                r = e.data(t, i);
                for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return n
        }

        function k(t, n) {
            for (var r; t;) {
                if ((r = e.data(t, i)) && (!n || r[n])) return t;
                t = t.parentNode
            }
            return null
        }

        function L() {
            g = !1
        }

        function A() {
            g = !0
        }

        function O() {
            E = 0, v.length = 0, m = !1, A()
        }

        function M() {
            L()
        }

        function _() {
            D(), c = setTimeout(function() {
                c = 0, O()
            }, e.vmouse.resetTimerDuration)
        }

        function D() {
            c && (clearTimeout(c), c = 0)
        }

        function P(t, n, r) {
            var i;
            return (r && r[t] || !r && k(n.target, t)) && (i = N(n, t), e(n.target).trigger(i)), i
        }

        function H(t) {
            var r, n = e.data(t.target, s);
            !m && (!E || E !== n) && (r = P("v" + t.type, t)) && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation())
        }

        function B(t) {
            var r, i, o, n = T(t).touches;
            n && 1 === n.length && (r = t.target, (i = C(r)).hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
        }

        function j(e) {
            g || (d || P("vmousecancel", e, C(e.target)), d = !0, _())
        }

        function F(t) {
            if (!g) {
                var n = T(t).touches[0],
                    r = d,
                    i = e.vmouse.moveDistanceThreshold,
                    s = C(t.target);
                (d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i) && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _()
            }
        }

        function I(e) {
            if (!g) {
                A();
                var n, r, t = C(e.target);
                P("vmouseup", e, t), d || (n = P("vclick", e, t)) && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({
                    touchID: E,
                    x: r.clientX,
                    y: r.clientY
                }), m = !0), P("vmouseout", e, t), d = !1, _()
            }
        }

        function q(t) {
            var r, n = e.data(t, i);
            if (n)
                for (r in n)
                    if (n[r]) return !0;
            return !1
        }

        function R() {}
        var S, x, i = "virtualMouseBindings",
            s = "virtualTouchID",
            o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            u = "clientX clientY pageX pageY screenX screenY".split(" "),
            a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            f = e.event.props.concat(a),
            l = {},
            c = 0,
            h = 0,
            p = 0,
            d = !1,
            v = [],
            m = !1,
            g = !1,
            y = "addEventListener" in n,
            b = e(n),
            w = 1,
            E = 0;
        for (e.vmouse = {
                moveDistanceThreshold: 10,
                clickDistanceThreshold: 10,
                resetTimerDuration: 1500
            }, x = 0; x < o.length; x++) e.event.special[o[x]] = function(t) {
            var n = t.substr(1);
            return {
                setup: function() {
                    q(this) || e.data(this, i, {}), e.data(this, i)[t] = !0, l[t] = (l[t] || 0) + 1, 1 === l[t] && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, 1 === l.touchstart && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
                },
                teardown: function() {
                    --l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
                    var r = e(this),
                        s = e.data(this, i);
                    s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i)
                }
            }
        }(o[x]);
        y && n.addEventListener("click", function(t) {
            var i, o, u, a, f, n = v.length,
                r = t.target;
            if (n)
                for (i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r; u;) {
                    for (a = 0; a < n; a++)
                        if (f = v[a], 0, u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) return t.preventDefault(), void t.stopPropagation();
                    u = u.parentNode
                }
        }, !0)
    })(e, 0, n),
    function(e) {
        e.mobile = {}
    }(e),
    function(e, t) {
        var r = {
            touch: "ontouchend" in n
        };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r)
    }(e),
    function(e, t, r) {
        function l(t, n, i, s) {
            var o = i.type;
            i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o
        }
        var i = e(n),
            s = e.mobile.support.touch,
            o = "touchmove scroll",
            u = s ? "touchstart" : "mousedown",
            a = s ? "touchend" : "mouseup",
            f = s ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.bind(n, e) : this.trigger(n)
            }, e.attrFn && (e.attrFn[n] = !0)
        }), e.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function s(e, n) {
                    l(t, (r = n) ? "scrollstart" : "scrollstop", e)
                }
                var r, i, t = this;
                e(t).bind(o, function(t) {
                    e.event.special.scrollstart.enabled && (r || s(t, !0), clearTimeout(i), i = setTimeout(function() {
                        s(t, !1)
                    }, 50))
                })
            },
            teardown: function() {
                e(this).unbind(o)
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var t = this,
                    n = e(t),
                    r = !1;
                n.bind("vmousedown", function(s) {
                    function a() {
                        clearTimeout(u)
                    }

                    function f() {
                        a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f)
                    }

                    function c(e) {
                        f(), r || o !== e.target ? r && e.preventDefault() : l(t, "tap", e)
                    }
                    if (r = !1, s.which && 1 !== s.which) return !1;
                    var u, o = s.target;
                    n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function() {
                        e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", {
                            target: o
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel")
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(e) {
                var n = t.pageXOffset,
                    r = t.pageYOffset,
                    i = e.clientX,
                    s = e.clientY;
                return 0 === e.pageY && Math.floor(s) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= n, s -= r) : (s < e.pageY - r || i < e.pageX - n) && (i = e.pageX - n, s = e.pageY - r), {
                    x: i,
                    y: s
                }
            },
            start: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [r.x, r.y],
                    origin: e(t.target)
                }
            },
            stop: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [r.x, r.y]
                }
            },
            handleSwipe: function(t, n, r, i) {
                if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
                    var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
                    return l(r, "swipe", e.Event("swipe", {
                        target: i,
                        swipestart: t,
                        swipestop: n
                    }), !0), l(r, s, e.Event(s, {
                        target: i,
                        swipestart: t,
                        swipestop: n
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var t, n = this,
                    r = e(n),
                    s = {};
                (t = e.data(this, "mobile-events")) || (t = {
                    length: 0
                }, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function(t) {
                    if (!e.event.special.swipe.eventInProgress) {
                        e.event.special.swipe.eventInProgress = !0;
                        var r, o = e.event.special.swipe.start(t),
                            u = t.target,
                            l = !1;
                        s.move = function(t) {
                            o && !t.isDefaultPrevented() && (r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u)) && (e.event.special.swipe.eventInProgress = !1), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                        }, s.stop = function() {
                            l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null
                        }, i.on(f, s.move).one(a, s.stop)
                    }
                }, r.on(u, s.start)
            },
            teardown: function() {
                var t, n;
                (t = e.data(this, "mobile-events")) && (n = t.swipe, delete t.swipe, t.length--, 0 === t.length && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(t, n) {
            e.event.special[t] = {
                setup: function() {
                    e(this).bind(n, e.noop)
                },
                teardown: function() {
                    e(this).unbind(n)
                }
            }
        })
    }(e, this)
});
var isBuilder = "object" == typeof window.ET_Builder;
! function($) {
    function et_fix_html_margin() {
        $("body").is(".et-fb") && $("#wpadminbar").length > 0 && setTimeout(function() {
            $("#et_fix_html_margin").remove(), $("<style />", {
                id: "et_fix_html_margin",
                text: "html.js { margin-top: 0px !important; }"
            }).appendTo("head")
        }, 0)
    }
    var $et_window = $(window),
        $et_top_window = isBuilder ? window.top.jQuery(window.top) : $(window),
        isBFB = $("body").hasClass("et-bfb"),
        isVB = isBuilder && !isBFB,
        isScrollOnAppWindow = function() {
            return isVB && ($("html").is(".et-fb-preview--wireframe") || $("html").is(".et-fb-preview--desktop"))
        },
        isBuilderModeZoom = function() {
            return isBuilder && $("html").is(".et-fb-preview--zoom")
        };
    window.et_load_event_fired = !1, window.et_is_transparent_nav = $("body").hasClass("et_transparent_nav"), window.et_is_vertical_nav = $("body").hasClass("et_vertical_nav"), window.et_is_fixed_nav = $("body").hasClass("et_fixed_nav"), window.et_is_minified_js = $("body").hasClass("et_minified_js"), window.et_is_minified_css = $("body").hasClass("et_minified_css"), window.et_force_width_container_change = !1, jQuery.fn.reverse = [].reverse, jQuery.fn.closest_descendent = function(selector) {
            for (var $found, $current_children = this.children(); $current_children.length && !($found = $current_children.filter(selector)).length;) $current_children = $current_children.children();
            return $found
        }, window.et_pb_init_modules = function() {
            function process_et_hashchange(hash) {
                if (-1 !== hash.indexOf(et_hash_module_seperator, 0)) {
                    modules = hash.split(et_hash_module_seperator);
                    for (var i = 0; i < modules.length; i++) {
                        var module_params = modules[i].split(et_hash_module_param_seperator),
                            element = module_params[0];
                        module_params.shift(), $("#" + element).length && $("#" + element).trigger({
                            type: "et_hashchange",
                            params: module_params
                        })
                    }
                } else {
                    element = (module_params = hash.split(et_hash_module_param_seperator))[0];
                    module_params.shift(), $("#" + element).length && $("#" + element).trigger({
                        type: "et_hashchange",
                        params: module_params
                    })
                }
            }

            function et_set_hash(module_state_hash) {
                if (module_id = module_state_hash.split(et_hash_module_param_seperator)[0], $("#" + module_id).length) {
                    if (window.location.hash) {
                        var hash = window.location.hash.substring(1),
                            new_hash = [];
                        if (-1 !== hash.indexOf(et_hash_module_seperator, 0)) {
                            modules = hash.split(et_hash_module_seperator);
                            for (var in_hash = !1, i = 0; i < modules.length; i++)(element = modules[i].split(et_hash_module_param_seperator)[0]) === module_id ? (new_hash.push(module_state_hash), in_hash = !0) : new_hash.push(modules[i]);
                            in_hash || new_hash.push(module_state_hash)
                        } else {
                            module_params = hash.split(et_hash_module_param_seperator);
                            var element = module_params[0];
                            element !== module_id && new_hash.push(hash), new_hash.push(module_state_hash)
                        }
                        hash = new_hash.join(et_hash_module_seperator)
                    } else hash = module_state_hash;
                    var yScroll = document.body.scrollTop;
                    window.location.hash = hash, document.body.scrollTop = yScroll
                }
            }

            function et_init_audio_modules() {
                void 0 === jQuery.fn.mediaelementplayer || isVB || jQuery(".et_audio_container").each(function() {
                    var $this = jQuery(this);
                    $this.find(".mejs-container:first").length > 0 || $this.find("audio").mediaelementplayer(window._wpmejsSettings)
                })
            }
            isBFB = $("body").hasClass("et-bfb"), isVB = isBuilder && !isBFB, $.et_pb_simple_slider = function(el, options) {
                function et_slider_auto_rotate() {
                    stop_slider || ($et_slider.hasClass("et_pb_pause_slider") ? setTimeout(function() {
                        et_slider_auto_rotate()
                    }, 2e3) : settings.slideshow && et_slides_number > 1 && !$et_slider.hasClass("et_slider_hovered") && (et_slider_timer = setTimeout(function() {
                        $et_slider.et_slider_move_to("next")
                    }, settings.slideshow_speed)))
                }

                function et_stop_video(active_slide) {
                    var $et_video, et_video_src;
                    active_slide.has("iframe").length ? (et_video_src = ($et_video = active_slide.find("iframe")).attr("src"), $et_video.attr("src", ""), $et_video.attr("src", et_video_src)) : active_slide.has("video").length && (active_slide.find(".et_pb_section_video_bg").length || ($et_video = active_slide.find("video"))[0].pause())
                }

                function et_fix_slider_content_images() {
                    var $this_slider = $et_slider,
                        $slide_image_container = $this_slider.find(".et-pb-active-slide .et_pb_slide_image"),
                        $slide_video_container = $this_slider.find(".et-pb-active-slide .et_pb_slide_video"),
                        $slide = $slide_image_container.closest(".et_pb_slide"),
                        $slider = $slide.closest(".et_pb_slider"),
                        slide_height = parseFloat($slider.innerHeight()),
                        image_height = parseFloat(.8 * slide_height),
                        slide_image_container_height = parseFloat($slide_image_container.height()),
                        slide_video_container_height = parseFloat($slide_video_container.height());
                    isNaN(image_height) || ($slide_image_container.find("img").css("maxHeight", image_height + "px"), slide_image_container_height = parseInt($slide_image_container.height())), !isNaN(slide_image_container_height) && $slide.hasClass("et_pb_media_alignment_center") && $slide_image_container.css("marginTop", "-" + slide_image_container_height / 2 + "px"), isNaN(slide_video_container_height) || $slide_video_container.css("marginTop", "-" + slide_video_container_height / 2 + "px")
                }

                function et_get_bg_layout_color($slide) {
                    return $slide.hasClass("et_pb_bg_layout_light") ? "et_pb_bg_layout_light" : "et_pb_bg_layout_dark"
                }

                function et_maybe_set_controls_color($slide) {
                    var next_slide_dot_color, $arrows, arrows_color;
                    void 0 !== $et_slider_controls && $et_slider_controls.length && ("" !== (next_slide_dot_color = $slide.attr("data-dots_color") || "") ? ($et_slider_controls.attr("style", "background-color: " + hex_to_rgba(next_slide_dot_color, "0.3") + ";"), $et_slider_controls.filter(".et-pb-active-control").attr("style", "background-color: " + hex_to_rgba(next_slide_dot_color) + "!important;")) : $et_slider_controls.removeAttr("style")), void 0 !== $et_slider_arrows && $et_slider_arrows.length && ($arrows = $et_slider_arrows.find("a"), "" !== (arrows_color = $slide.attr("data-arrows_color") || "") ? $arrows.attr("style", "color: " + arrows_color + "!important;") : $arrows.css("color", "inherit"))
                }

                function et_fix_builder_content() {
                    is_post_slider && setTimeout(function() {
                        var $et_pb_circle_counter = $(".et_pb_circle_counter"),
                            $et_pb_number_counter = $(".et_pb_number_counter");
                        window.et_fix_testimonial_inner_width(), $et_pb_circle_counter.length && window.et_pb_reinit_circle_counters($et_pb_circle_counter), $et_pb_number_counter.length && window.et_pb_reinit_number_counters($et_pb_number_counter), window.et_reinit_waypoint_modules()
                    }, 1e3)
                }

                function hex_to_rgba(color, alpha) {
                    var rgba, color_16 = parseInt(color.replace("#", ""), 16);
                    return rgba = (color_16 >> 16 & 255) + "," + (color_16 >> 8 & 255) + "," + (255 & color_16) + "," + (alpha = alpha || 1), rgba = "rgba(" + rgba + ")"
                }
                var $et_slider_arrows, $et_slider_controls, $et_slider_carousel_controls, et_slider_timer, settings = $.extend({
                        slide: ".et-slide",
                        arrows: ".et-pb-slider-arrows",
                        prev_arrow: ".et-pb-arrow-prev",
                        next_arrow: ".et-pb-arrow-next",
                        controls: ".et-pb-controllers a",
                        carousel_controls: ".et_pb_carousel_item",
                        control_active_class: "et-pb-active-control",
                        previous_text: et_pb_custom.previous,
                        next_text: et_pb_custom.next,
                        fade_speed: 500,
                        use_arrows: !0,
                        use_controls: !0,
                        manual_arrows: "",
                        append_controls_to: "",
                        controls_below: !1,
                        controls_class: "et-pb-controllers",
                        slideshow: !1,
                        slideshow_speed: 7e3,
                        show_progress_bar: !1,
                        tabs_animation: !1,
                        use_carousel: !1
                    }, options),
                    $et_slider = $(el),
                    $et_slide = $et_slider.closest_descendent(settings.slide),
                    et_slides_number = $et_slide.length,
                    et_fade_speed = settings.fade_speed,
                    et_active_slide = 0,
                    controls_html = "",
                    carousel_html = "",
                    is_post_slider = ($et_slider.find(".et_pb_container").width(), $et_slider.hasClass("et_pb_post_slider")),
                    stop_slider = !1;
                if ($et_slider.et_animation_running = !1, $.data(el, "et_pb_simple_slider", $et_slider), $et_slide.eq(0).addClass("et-pb-active-slide"), settings.tabs_animation || $et_slider.hasClass("et_pb_bg_layout_dark") || $et_slider.hasClass("et_pb_bg_layout_light") || $et_slider.addClass(et_get_bg_layout_color($et_slide.eq(0))), settings.use_arrows && et_slides_number > 1 && ("" == settings.manual_arrows ? $et_slider.append('<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#"><span>' + settings.previous_text + '</span></a><a class="et-pb-arrow-next" href="#"><span>' + settings.next_text + "</span></a></div>") : $et_slider.append(settings.manual_arrows), $et_slider_arrows = $et_slider.find(settings.arrows), $et_slider.find(settings.prev_arrow), $et_slider.find(settings.next_arrow), $et_slider.on("click.et_pb_simple_slider", settings.next_arrow, function() {
                        return !$et_slider.et_animation_running && ($et_slider.et_slider_move_to("next"), !1)
                    }), $et_slider.on("click.et_pb_simple_slider", settings.prev_arrow, function() {
                        return !$et_slider.et_animation_running && ($et_slider.et_slider_move_to("previous"), !1)
                    }), $et_slider.on("swipeleft.et_pb_simple_slider", settings.slide, function(event) {
                        $(event.target).closest(".et-fb-popover-tinymce").length || $(event.target).closest(".et-fb-editable-element").length || $et_slider.et_slider_move_to("next")
                    }), $et_slider.on("swiperight.et_pb_simple_slider", settings.slide, function(event) {
                        $(event.target).closest(".et-fb-popover-tinymce").length || $(event.target).closest(".et-fb-editable-element").length || $et_slider.et_slider_move_to("previous")
                    })), settings.use_controls && et_slides_number > 1) {
                    for (i = 1; i <= et_slides_number; i++) controls_html += '<a href="#"' + (1 == i ? ' class="' + settings.control_active_class + '"' : "") + ">" + i + "</a>";
                    $et_slider.find("video").length > 0 && (settings.controls_class += " et-pb-controllers-has-video-tag"), controls_html = '<div class="' + settings.controls_class + '">' + controls_html + "</div>", "" == settings.append_controls_to ? $et_slider.append(controls_html) : $(settings.append_controls_to).append(controls_html), ($et_slider_controls = settings.controls_below ? $et_slider.parent().find(settings.controls) : $et_slider.find(settings.controls)).on("click.et_pb_simple_slider", function() {
                        return !$et_slider.et_animation_running && ($et_slider.et_slider_move_to($(this).index()), !1)
                    })
                }
                if (et_maybe_set_controls_color($et_slide.eq(0)), settings.use_carousel && et_slides_number > 1) {
                    for (var i = 1; i <= et_slides_number; i++) slide_id = i - 1, image_src = void 0 !== $et_slide.eq(slide_id).data("image") ? "url(" + $et_slide.eq(slide_id).data("image") + ")" : "none", carousel_html += '<div class="et_pb_carousel_item ' + (1 == i ? settings.control_active_class : "") + '" data-slide-id="' + slide_id + '"><div class="et_pb_video_overlay" href="#" style="background-image: ' + image_src + ';"><div class="et_pb_video_overlay_hover"><a href="#" class="et_pb_video_play"></a></div></div></div>';
                    carousel_html = '<div class="et_pb_carousel"><div class="et_pb_carousel_items">' + carousel_html + "</div></div>", $et_slider.after(carousel_html), ($et_slider_carousel_controls = $et_slider.siblings(".et_pb_carousel").find(settings.carousel_controls)).on("click.et_pb_simple_slider", function() {
                        if ($et_slider.et_animation_running) return !1;
                        var $this = $(this);
                        return $et_slider.et_slider_move_to($this.data("slide-id")), !1
                    })
                }
                settings.slideshow && et_slides_number > 1 && $et_slider.on("mouseenter.et_pb_simple_slider", function() {
                    $et_slider.hasClass("et_slider_auto_ignore_hover") || ($et_slider.addClass("et_slider_hovered"), void 0 !== et_slider_timer && clearTimeout(et_slider_timer))
                }).on("mouseleave.et_pb_simple_slider", function() {
                    $et_slider.hasClass("et_slider_auto_ignore_hover") || ($et_slider.removeClass("et_slider_hovered"), et_slider_auto_rotate())
                }), et_slider_auto_rotate(), $et_slider.et_slider_destroy = function() {
                    void 0 !== et_slider_timer && clearTimeout(et_slider_timer), stop_slider = !0, $et_slider.off(".et_pb_simple_slider"), $et_slider.find(".et_pb_slide").css({
                        "z-index": "",
                        display: "",
                        opacity: ""
                    }), $et_slider.find(".et-pb-active-slide").removeClass("et-pb-active-slide"), $et_slider.find(".et-pb-moved-slide").removeClass("et-pb-moved-slide"), $et_slider.find(".et-pb-slider-arrows, .et-pb-controllers").remove(), $et_slider.siblings(".et_pb_carousel").remove(), $et_slider.removeData("et_pb_simple_slider")
                }, $et_slider.et_fix_slider_content_images = et_fix_slider_content_images, window.et_load_event_fired ? et_fix_slider_height($et_slider) : $et_window.on("load", function() {
                    et_fix_slider_height($et_slider)
                }), $et_window.on("resize.et_simple_slider", function() {
                    et_fix_slider_height($et_slider)
                }), $et_slider.et_slider_move_to = function(direction) {
                    var $active_slide = $et_slide.eq(et_active_slide);
                    if ($et_slider.et_animation_running = !0, $et_slider.removeClass("et_slide_transition_to_next et_slide_transition_to_previous").addClass("et_slide_transition_to_" + direction), $et_slider.find(".et-pb-moved-slide").removeClass("et-pb-moved-slide"), "next" == direction || "previous" == direction) et_active_slide = "next" == direction ? et_active_slide + 1 < et_slides_number ? et_active_slide + 1 : 0 : et_active_slide - 1 >= 0 ? et_active_slide - 1 : et_slides_number - 1;
                    else {
                        if (et_active_slide == direction) return void($et_slider.et_animation_running = !1);
                        et_active_slide = direction
                    }
                    void 0 !== et_slider_timer && clearTimeout(et_slider_timer);
                    var $next_slide = $et_slide.eq(et_active_slide);
                    $et_slider.trigger("slide", {
                        current: $active_slide,
                        next: $next_slide
                    }), void 0 !== $active_slide.find("video")[0] && void 0 !== $active_slide.find("video")[0].player && $active_slide.find("video")[0].player.pause(), void 0 !== $next_slide.find("video")[0] && void 0 !== $next_slide.find("video")[0].player && $next_slide.find("video")[0].player.play();
                    var $active_slide_video = $active_slide.find(".et_pb_video_box iframe");
                    if ($active_slide_video.length) {
                        var active_slide_video_src = $active_slide_video.attr("src");
                        active_slide_video_src = active_slide_video_src.replace(/\?autoplay=1$/, ""), active_slide_video_src = active_slide_video_src.replace(/\?autoplay=1&(amp;)?/, "?"), active_slide_video_src = active_slide_video_src.replace(/&(amp;)?autoplay=1/, ""), setTimeout(function() {
                            $active_slide_video.attr({
                                src: active_slide_video_src
                            })
                        }, settings.fade_speed), $active_slide_video.parents(".et_pb_video_box").next(".et_pb_video_overlay").css({
                            display: "block",
                            opacity: 1
                        })
                    }
                    $et_slider.trigger("simple_slider_before_move_to", {
                        direction: direction,
                        next_slide: $next_slide
                    }), $et_slide.each(function() {
                        $(this).css("zIndex", 1)
                    }), $active_slide.css("zIndex", 2).removeClass("et-pb-active-slide").addClass("et-pb-moved-slide").data("slide-status", "inactive"), $next_slide.css({
                        display: "block",
                        opacity: 0
                    }).addClass("et-pb-active-slide").data("slide-status", "active"), et_fix_slider_content_images(), et_fix_builder_content(), settings.use_controls && $et_slider_controls.removeClass(settings.control_active_class).eq(et_active_slide).addClass(settings.control_active_class), settings.use_carousel && $et_slider_carousel_controls && $et_slider_carousel_controls.removeClass(settings.control_active_class).eq(et_active_slide).addClass(settings.control_active_class), settings.tabs_animation ? ($next_slide.css({
                        display: "none",
                        opacity: 0
                    }), $active_slide.addClass("et_slide_transition").css({
                        display: "block",
                        opacity: 1
                    }).animate({
                        opacity: 0
                    }, et_fade_speed, function() {
                        $(this).css("display", "none").removeClass("et_slide_transition"), $next_slide.css({
                            display: "block",
                            opacity: 0
                        }).animate({
                            opacity: 1
                        }, et_fade_speed, function() {
                            $et_slider.et_animation_running = !1, $et_slider.trigger("simple_slider_after_move_to", {
                                next_slide: $next_slide
                            })
                        })
                    })) : (et_maybe_set_controls_color($next_slide), $next_slide.animate({
                        opacity: 1
                    }, et_fade_speed), $active_slide.addClass("et_slide_transition").css({
                        display: "list-item",
                        opacity: 1
                    }).animate({
                        opacity: 0
                    }, et_fade_speed, function() {
                        var active_slide_layout_bg_color = et_get_bg_layout_color($active_slide),
                            next_slide_layout_bg_color = et_get_bg_layout_color($next_slide);
                        isBuilder ? $(this).removeClass("et_slide_transition") : $(this).css("display", "none").removeClass("et_slide_transition"), et_stop_video($active_slide), $et_slider.removeClass(active_slide_layout_bg_color).addClass(next_slide_layout_bg_color), $et_slider.et_animation_running = !1, $et_slider.trigger("simple_slider_after_move_to", {
                            next_slide: $next_slide
                        })
                    })), $next_slide.find(".et_parallax_bg").length && window.et_pb_parallax_init($next_slide.find(".et_parallax_bg")), et_slider_auto_rotate()
                }
            }, $.fn.et_pb_simple_slider = function(options) {
                return this.each(function() {
                    var slider = $.data(this, "et_pb_simple_slider");
                    return slider || new $.et_pb_simple_slider(this, options)
                })
            };
            var et_hash_module_seperator = "||",
                et_hash_module_param_seperator = "|";
            $.et_pb_simple_carousel = function(el, options) {
                function set_carousel_height($the_carousel) {
                    $the_carousel_items.width();
                    var carousel_items_height = $the_carousel_items.height();
                    $the_carousel.parent().hasClass("et_pb_with_border") && (carousel_items_height = $the_carousel_items.outerHeight()), $carousel_items.css("height", carousel_items_height + "px")
                }

                function set_carousel_columns($the_carousel) {
                    var columns, $carousel_parent = $the_carousel.parents(".et_pb_column");
                    $carousel_items.width(), $the_carousel_items.length;
                    if ($carousel_parent.hasClass("et_pb_column_4_4") || $carousel_parent.hasClass("et_pb_column_3_4") || $carousel_parent.hasClass("et_pb_column_2_3") ? columns = $et_window.width() < 768 ? 3 : 4 : $carousel_parent.hasClass("et_pb_column_1_2") || $carousel_parent.hasClass("et_pb_column_3_8") || $carousel_parent.hasClass("et_pb_column_1_3") ? columns = 3 : $carousel_parent.hasClass("et_pb_column_1_4") && (columns = $et_window.width() > 480 && $et_window.width() < 980 ? 3 : 2), columns !== $carousel_items.data("portfolio-columns") && !$the_carousel.data("columns_setting_up")) {
                        $the_carousel.data("columns_setting_up", !0), $carousel_items.removeClass("columns-" + $carousel_items.data("portfolio-columns")), $carousel_items.addClass("columns-" + columns), $carousel_items.data("portfolio-columns", columns), $carousel_items.find(".et-carousel-group").length && ($the_carousel_items.appendTo($carousel_items), $carousel_items.find(".et-carousel-group").remove());
                        var the_carousel_items = $carousel_items.data("items"),
                            $carousel_group = $('<div class="et-carousel-group active">').appendTo($carousel_items);
                        for ($the_carousel_items.data("position", ""), the_carousel_items.length <= columns ? $carousel_items.find(".et-pb-slider-arrows").hide() : $carousel_items.find(".et-pb-slider-arrows").show(), position = 1, x = 0; x < the_carousel_items.length; x++, position++) x < columns ? ($(the_carousel_items[x]).show(), $(the_carousel_items[x]).appendTo($carousel_group), $(the_carousel_items[x]).data("position", position), $(the_carousel_items[x]).addClass("position_" + position)) : (position = $(the_carousel_items[x]).data("position"), $(the_carousel_items[x]).removeClass("position_" + position), $(the_carousel_items[x]).data("position", ""), $(the_carousel_items[x]).hide());
                        $the_carousel.data("columns_setting_up", !1)
                    }
                }
                var settings = $.extend({
                        slide_duration: 500
                    }, options),
                    $et_carousel = $(el),
                    $carousel_items = $et_carousel.find(".et_pb_carousel_items"),
                    $the_carousel_items = $carousel_items.find(".et_pb_carousel_item");
                $et_carousel.et_animation_running = !1, $et_carousel.addClass("container-width-change-notify").on("containerWidthChanged", function(event) {
                    set_carousel_columns($et_carousel), set_carousel_height($et_carousel)
                }), $carousel_items.data("items", $the_carousel_items.toArray()), $et_carousel.data("columns_setting_up", !1), $carousel_items.prepend('<div class="et-pb-slider-arrows"><a class="et-pb-slider-arrow et-pb-arrow-prev" href="#"><span>' + et_pb_custom.previous + '</span></a><a class="et-pb-slider-arrow et-pb-arrow-next" href="#"><span>' + et_pb_custom.next + "</span></a></div>"), set_carousel_columns($et_carousel), set_carousel_height($et_carousel), $et_carousel_next = $et_carousel.find(".et-pb-arrow-next"), $et_carousel_prev = $et_carousel.find(".et-pb-arrow-prev"), $et_carousel.on("click", ".et-pb-arrow-next", function() {
                    return !$et_carousel.et_animation_running && ($et_carousel.et_carousel_move_to("next"), !1)
                }), $et_carousel.on("click", ".et-pb-arrow-prev", function() {
                    return !$et_carousel.et_animation_running && ($et_carousel.et_carousel_move_to("previous"), !1)
                }), $et_carousel.on("swipeleft", function() {
                    $et_carousel.et_carousel_move_to("next")
                }), $et_carousel.on("swiperight", function() {
                    $et_carousel.et_carousel_move_to("previous")
                }), $et_carousel.et_carousel_move_to = function(direction) {
                    var $active_carousel_group = $carousel_items.find(".et-carousel-group.active"),
                        items = $carousel_items.data("items"),
                        columns = $carousel_items.data("portfolio-columns");
                    $et_carousel.et_animation_running = !0;
                    left = 0;
                    $active_carousel_group.children().each(function() {
                        $(this).css({
                            position: "absolute",
                            left: left
                        }), left += $(this).outerWidth(!0)
                    }), $("body").addClass("et-pb-is-sliding-carousel");
                    var carousel_group_item_size = $active_carousel_group.find(".et_pb_carousel_item").size(),
                        carousel_group_item_progress = 0;
                    if ("next" == direction) {
                        var $next_carousel_group, current_position = 1,
                            next_position = 1,
                            next_items_start = active_items_end = (active_items_start = items.indexOf($active_carousel_group.children().first()[0])) + columns,
                            next_items_end = next_items_start + columns;
                        for (($next_carousel_group = $('<div class="et-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group)).css({
                                width: $active_carousel_group.innerWidth()
                            }).show(), x = 0, total = 0; total >= active_items_start && total < active_items_end && ($(items[x]).addClass("changing_position current_position current_position_" + current_position), $(items[x]).data("current_position", current_position), current_position++), total >= next_items_start && total < next_items_end && ($(items[x]).data("next_position", next_position), $(items[x]).addClass("changing_position next_position next_position_" + next_position), $(items[x]).hasClass("current_position") ? ($(items[x]).clone(!0).appendTo($active_carousel_group).hide().addClass("delayed_container_append_dup").attr("id", $(items[x]).attr("id") + "-dup"), $(items[x]).addClass("delayed_container_append")) : $(items[x]).addClass("container_append"), next_position++), !(next_position > columns); x++, total++) x >= items.length - 1 && (x = -1);
                        sorted = $carousel_items.find(".container_append, .delayed_container_append_dup").sort(function(a, b) {
                            var el_a_position = parseInt($(a).data("next_position")),
                                el_b_position = parseInt($(b).data("next_position"));
                            return el_a_position < el_b_position ? -1 : el_a_position > el_b_position ? 1 : 0
                        });
                        $(sorted).show().appendTo($next_carousel_group);
                        left = 0;
                        $next_carousel_group.children().each(function() {
                            $(this).css({
                                position: "absolute",
                                left: left
                            }), left += $(this).outerWidth(!0)
                        }), $active_carousel_group.animate({
                            left: "-100%"
                        }, {
                            duration: settings.slide_duration,
                            progress: function(animation, progress) {
                                progress > carousel_group_item_progress / carousel_group_item_size && (carousel_group_item_progress++, $active_carousel_group.find(".et_pb_carousel_item:nth-child(" + carousel_group_item_progress + ")").addClass("item-fade-out"), $next_carousel_group.find(".et_pb_carousel_item:nth-child(" + carousel_group_item_progress + ")").addClass("item-fade-in"))
                            },
                            complete: function() {
                                $carousel_items.find(".delayed_container_append").each(function() {
                                    left = $("#" + $(this).attr("id") + "-dup").css("left"), $(this).css({
                                        position: "absolute",
                                        left: left
                                    }), $(this).appendTo($next_carousel_group)
                                }), $active_carousel_group.removeClass("active"), $active_carousel_group.children().each(function() {
                                    position = $(this).data("position"), current_position = $(this).data("current_position"), $(this).removeClass("position_" + position + " changing_position current_position current_position_" + current_position), $(this).data("position", ""), $(this).data("current_position", ""), $(this).hide(), $(this).css({
                                        position: "",
                                        left: ""
                                    }), $(this).appendTo($carousel_items)
                                }), $carousel_items.find(".item-fade-out").removeClass("item-fade-out"), $next_carousel_group.find(".item-fade-in").removeClass("item-fade-in"), $("body").removeClass("et-pb-is-sliding-carousel"), $active_carousel_group.remove()
                            }
                        }), next_left = $active_carousel_group.width() + parseInt($the_carousel_items.first().css("marginRight").slice(0, -2)), $next_carousel_group.addClass("active").css({
                            position: "absolute",
                            top: 0,
                            left: next_left
                        }), $next_carousel_group.animate({
                            left: "0%"
                        }, {
                            duration: settings.slide_duration,
                            complete: function() {
                                $next_carousel_group.removeClass("next").addClass("active").css({
                                    position: "",
                                    width: "",
                                    top: "",
                                    left: ""
                                }), $next_carousel_group.find(".changing_position").each(function(index) {
                                    position = $(this).data("position"), current_position = $(this).data("current_position"), next_position = $(this).data("next_position"), $(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + current_position + " next_position next_position_" + next_position), $(this).data("current_position", ""), $(this).data("next_position", ""), $(this).data("position", index + 1)
                                }), $next_carousel_group.children().css({
                                    position: "",
                                    left: ""
                                }), $next_carousel_group.find(".delayed_container_append_dup").remove(), $et_carousel.et_animation_running = !1
                            }
                        })
                    } else if ("previous" == direction) {
                        var $prev_carousel_group, current_position = columns,
                            prev_position = columns,
                            columns_span = columns - 1,
                            active_items_start = items.indexOf($active_carousel_group.children().last()[0]),
                            active_items_end = active_items_start - columns_span,
                            prev_items_start = active_items_end - 1,
                            prev_items_end = prev_items_start - columns_span;
                        for (($prev_carousel_group = $('<div class="et-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group)).css({
                                left: "-" + $active_carousel_group.innerWidth(),
                                width: $active_carousel_group.innerWidth()
                            }).show(), x = items.length - 1, total = items.length - 1; total <= active_items_start && total >= active_items_end && ($(items[x]).addClass("changing_position current_position current_position_" + current_position), $(items[x]).data("current_position", current_position), current_position--), total <= prev_items_start && total >= prev_items_end && ($(items[x]).data("prev_position", prev_position), $(items[x]).addClass("changing_position prev_position prev_position_" + prev_position), $(items[x]).hasClass("current_position") ? ($(items[x]).clone(!0).appendTo($active_carousel_group).addClass("delayed_container_append_dup").attr("id", $(items[x]).attr("id") + "-dup"), $(items[x]).addClass("delayed_container_append")) : $(items[x]).addClass("container_append"), prev_position--), !(prev_position <= 0); x--, total--) 0 == x && (x = items.length);
                        var sorted = $carousel_items.find(".container_append, .delayed_container_append_dup").sort(function(a, b) {
                            var el_a_position = parseInt($(a).data("prev_position")),
                                el_b_position = parseInt($(b).data("prev_position"));
                            return el_a_position < el_b_position ? -1 : el_a_position > el_b_position ? 1 : 0
                        });
                        $(sorted).show().appendTo($prev_carousel_group);
                        var left = 0;
                        $prev_carousel_group.children().each(function() {
                            $(this).css({
                                position: "absolute",
                                left: left
                            }), left += $(this).outerWidth(!0)
                        }), $active_carousel_group.animate({
                            left: "100%"
                        }, {
                            duration: settings.slide_duration,
                            progress: function(animation, progress) {
                                if (progress > carousel_group_item_progress / carousel_group_item_size) {
                                    var group_item_nth = carousel_group_item_size - carousel_group_item_progress;
                                    $active_carousel_group.find(".et_pb_carousel_item:nth-child(" + group_item_nth + ")").addClass("item-fade-out"), $prev_carousel_group.find(".et_pb_carousel_item:nth-child(" + group_item_nth + ")").addClass("item-fade-in"), carousel_group_item_progress++
                                }
                            },
                            complete: function() {
                                $carousel_items.find(".delayed_container_append").reverse().each(function() {
                                    left = $("#" + $(this).attr("id") + "-dup").css("left"), $(this).css({
                                        position: "absolute",
                                        left: left
                                    }), $(this).prependTo($prev_carousel_group)
                                }), $active_carousel_group.removeClass("active"), $active_carousel_group.children().each(function() {
                                    position = $(this).data("position"), current_position = $(this).data("current_position"), $(this).removeClass("position_" + position + " changing_position current_position current_position_" + current_position), $(this).data("position", ""), $(this).data("current_position", ""), $(this).hide(), $(this).css({
                                        position: "",
                                        left: ""
                                    }), $(this).appendTo($carousel_items)
                                }), $carousel_items.find(".item-fade-out").removeClass("item-fade-out"), $prev_carousel_group.find(".item-fade-in").removeClass("item-fade-in"), $("body").removeClass("et-pb-is-sliding-carousel"), $active_carousel_group.remove()
                            }
                        }), prev_left = -1 * $active_carousel_group.width() - parseInt($the_carousel_items.first().css("marginRight").slice(0, -2)), $prev_carousel_group.addClass("active").css({
                            position: "absolute",
                            top: 0,
                            left: prev_left
                        }), $prev_carousel_group.animate({
                            left: "0%"
                        }, {
                            duration: settings.slide_duration,
                            complete: function() {
                                $prev_carousel_group.removeClass("prev").addClass("active").css({
                                    position: "",
                                    width: "",
                                    top: "",
                                    left: ""
                                }), $prev_carousel_group.find(".delayed_container_append_dup").remove(), $prev_carousel_group.find(".changing_position").each(function(index) {
                                    position = $(this).data("position"), current_position = $(this).data("current_position"), prev_position = $(this).data("prev_position"), $(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + current_position + " prev_position prev_position_" + prev_position), $(this).data("current_position", ""), $(this).data("prev_position", ""), position = index + 1, $(this).data("position", position), $(this).addClass("position_" + position)
                                }), $prev_carousel_group.children().css({
                                    position: "",
                                    left: ""
                                }), $et_carousel.et_animation_running = !1
                            }
                        })
                    }
                }
            }, $.fn.et_pb_simple_carousel = function(options) {
                return this.each(function() {
                    var carousel = $.data(this, "et_pb_simple_carousel");
                    return carousel || new $.et_pb_simple_carousel(this, options)
                })
            }, $(document).ready(function() {
                function et_get_column_types($columns) {
                    var row_class = "";
                    if ($columns.length)
                        if ($columns.each(function() {
                                var column_type = $(this).attr("class").split("et_pb_column_")[1],
                                    column_type_updated = (void 0 !== column_type ? column_type.split(" ", 1)[0] : "4_4").replace("_", "-").trim();
                                row_class += "_" + column_type_updated
                            }), -1 !== row_class.indexOf("1-4") || -1 !== row_class.indexOf("1-5_1-5") || -1 !== row_class.indexOf("1-6_1-6")) switch (row_class) {
                            case "_1-4_1-4_1-4_1-4":
                                row_class = "et_pb_row_4col";
                                break;
                            case "_1-5_1-5_1-5_1-5_1-5":
                                row_class = "et_pb_row_5col";
                                break;
                            case "_1-6_1-6_1-6_1-6_1-6_1-6":
                                row_class = "et_pb_row_6col";
                                break;
                            default:
                                row_class = "et_pb_row" + row_class
                        } else row_class = "";
                    return row_class
                }

                function fullwidth_portfolio_carousel_slide($arrow) {
                    var $the_portfolio = $arrow.parents(".et_pb_fullwidth_portfolio"),
                        $portfolio_items = $the_portfolio.find(".et_pb_portfolio_items"),
                        $active_carousel_group = ($portfolio_items.find(".et_pb_portfolio_item"), $portfolio_items.find(".et_pb_carousel_group.active")),
                        items = $portfolio_items.data("items"),
                        columns = $portfolio_items.data("portfolio-columns"),
                        item_width = $active_carousel_group.innerWidth() / columns,
                        original_item_width = 100 / columns + "%";
                    if (void 0 !== items && !$the_portfolio.data("carouseling"))
                        if ($the_portfolio.data("carouseling", !0), $active_carousel_group.children().each(function() {
                                $(this).css({
                                    width: item_width + 1,
                                    "max-width": item_width,
                                    position: "absolute",
                                    left: item_width * ($(this).data("position") - 1)
                                })
                            }), $arrow.hasClass("et-pb-arrow-next")) {
                            var $next_carousel_group, current_position = 1,
                                next_position = 1,
                                next_items_start = active_items_end = (active_items_start = items.indexOf($active_carousel_group.children().first()[0])) + columns,
                                next_items_end = next_items_start + columns,
                                active_carousel_width = $active_carousel_group.innerWidth();
                            for (($next_carousel_group = $('<div class="et_pb_carousel_group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group)).css({
                                    width: active_carousel_width,
                                    "max-width": active_carousel_width
                                }).show(), x = 0, total = 0; total >= active_items_start && total < active_items_end && ($(items[x]).addClass("changing_position current_position current_position_" + current_position), $(items[x]).data("current_position", current_position), current_position++), total >= next_items_start && total < next_items_end && ($(items[x]).data("next_position", next_position), $(items[x]).addClass("changing_position next_position next_position_" + next_position), $(items[x]).hasClass("current_position") ? ($(items[x]).clone(!0).appendTo($active_carousel_group).hide().addClass("delayed_container_append_dup").attr("id", $(items[x]).attr("id") + "-dup"), $(items[x]).addClass("delayed_container_append")) : $(items[x]).addClass("container_append"), next_position++), !(next_position > columns); x++, total++) x >= items.length - 1 && (x = -1);
                            sorted = $portfolio_items.find(".container_append, .delayed_container_append_dup").sort(function(a, b) {
                                var el_a_position = parseInt($(a).data("next_position")),
                                    el_b_position = parseInt($(b).data("next_position"));
                                return el_a_position < el_b_position ? -1 : el_a_position > el_b_position ? 1 : 0
                            }), $(sorted).show().appendTo($next_carousel_group), $next_carousel_group.children().each(function() {
                                $(this).css({
                                    width: item_width,
                                    "max-width": item_width,
                                    position: "absolute",
                                    left: item_width * ($(this).data("next_position") - 1)
                                })
                            }), $active_carousel_group.animate({
                                left: "-100%"
                            }, {
                                duration: 700,
                                complete: function() {
                                    $portfolio_items.find(".delayed_container_append").each(function() {
                                        $(this).css({
                                            width: item_width,
                                            "max-width": item_width,
                                            position: "absolute",
                                            left: item_width * ($(this).data("next_position") - 1)
                                        }), $(this).appendTo($next_carousel_group)
                                    }), $active_carousel_group.removeClass("active"), $active_carousel_group.children().each(function() {
                                        position = $(this).data("position"), current_position = $(this).data("current_position"), $(this).removeClass("position_" + position + " changing_position current_position current_position_" + current_position), $(this).data("position", ""), $(this).data("current_position", ""), $(this).hide(), $(this).css({
                                            position: "",
                                            width: "",
                                            "max-width": "",
                                            left: ""
                                        }), $(this).appendTo($portfolio_items)
                                    }), $active_carousel_group.remove(), et_carousel_auto_rotate($the_portfolio)
                                }
                            }), $next_carousel_group.addClass("active").css({
                                position: "absolute",
                                top: 0,
                                left: "100%"
                            }), $next_carousel_group.animate({
                                left: "0%"
                            }, {
                                duration: 700,
                                complete: function() {
                                    setTimeout(function() {
                                        $next_carousel_group.removeClass("next").addClass("active").css({
                                            position: "",
                                            width: "",
                                            "max-width": "",
                                            top: "",
                                            left: ""
                                        }), $next_carousel_group.find(".delayed_container_append_dup").remove(), $next_carousel_group.find(".changing_position").each(function(index) {
                                            position = $(this).data("position"), current_position = $(this).data("current_position"), next_position = $(this).data("next_position"), $(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + current_position + " next_position next_position_" + next_position), $(this).data("current_position", ""), $(this).data("next_position", ""), $(this).data("position", index + 1)
                                        }), $next_carousel_group.children().css({
                                            position: "",
                                            width: original_item_width,
                                            "max-width": original_item_width,
                                            left: ""
                                        }), $the_portfolio.data("carouseling", !1)
                                    }, 100)
                                }
                            })
                        } else {
                            var $prev_carousel_group, current_position = columns,
                                prev_position = columns,
                                columns_span = columns - 1,
                                active_items_start = items.indexOf($active_carousel_group.children().last()[0]),
                                active_items_end = active_items_start - columns_span,
                                prev_items_start = active_items_end - 1,
                                prev_items_end = prev_items_start - columns_span,
                                active_carousel_width = $active_carousel_group.innerWidth();
                            for (($prev_carousel_group = $('<div class="et_pb_carousel_group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group)).css({
                                    left: "-" + active_carousel_width,
                                    width: active_carousel_width,
                                    "max-width": active_carousel_width
                                }).show(), x = items.length - 1, total = items.length - 1; total <= active_items_start && total >= active_items_end && ($(items[x]).addClass("changing_position current_position current_position_" + current_position), $(items[x]).data("current_position", current_position), current_position--), total <= prev_items_start && total >= prev_items_end && ($(items[x]).data("prev_position", prev_position), $(items[x]).addClass("changing_position prev_position prev_position_" + prev_position), $(items[x]).hasClass("current_position") ? ($(items[x]).clone(!0).appendTo($active_carousel_group).addClass("delayed_container_append_dup").attr("id", $(items[x]).attr("id") + "-dup"), $(items[x]).addClass("delayed_container_append")) : $(items[x]).addClass("container_append"), prev_position--), !(prev_position <= 0); x--, total--) 0 == x && (x = items.length);
                            sorted = $portfolio_items.find(".container_append, .delayed_container_append_dup").sort(function(a, b) {
                                var el_a_position = parseInt($(a).data("prev_position")),
                                    el_b_position = parseInt($(b).data("prev_position"));
                                return el_a_position < el_b_position ? -1 : el_a_position > el_b_position ? 1 : 0
                            }), $(sorted).show().appendTo($prev_carousel_group), $prev_carousel_group.children().each(function() {
                                $(this).css({
                                    width: item_width,
                                    "max-width": item_width,
                                    position: "absolute",
                                    left: item_width * ($(this).data("prev_position") - 1)
                                })
                            }), $active_carousel_group.animate({
                                left: "100%"
                            }, {
                                duration: 700,
                                complete: function() {
                                    $portfolio_items.find(".delayed_container_append").reverse().each(function() {
                                        $(this).css({
                                            width: item_width,
                                            "max-width": item_width,
                                            position: "absolute",
                                            left: item_width * ($(this).data("prev_position") - 1)
                                        }), $(this).prependTo($prev_carousel_group)
                                    }), $active_carousel_group.removeClass("active"), $active_carousel_group.children().each(function() {
                                        position = $(this).data("position"), current_position = $(this).data("current_position"), $(this).removeClass("position_" + position + " changing_position current_position current_position_" + current_position), $(this).data("position", ""), $(this).data("current_position", ""), $(this).hide(), $(this).css({
                                            position: "",
                                            width: "",
                                            "max-width": "",
                                            left: ""
                                        }), $(this).appendTo($portfolio_items)
                                    }), $active_carousel_group.remove()
                                }
                            }), $prev_carousel_group.addClass("active").css({
                                position: "absolute",
                                top: 0,
                                left: "-100%"
                            }), $prev_carousel_group.animate({
                                left: "0%"
                            }, {
                                duration: 700,
                                complete: function() {
                                    setTimeout(function() {
                                        $prev_carousel_group.removeClass("prev").addClass("active").css({
                                            position: "",
                                            width: "",
                                            "max-width": "",
                                            top: "",
                                            left: ""
                                        }), $prev_carousel_group.find(".delayed_container_append_dup").remove(), $prev_carousel_group.find(".changing_position").each(function(index) {
                                            position = $(this).data("position"), current_position = $(this).data("current_position"), prev_position = $(this).data("prev_position"), $(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + current_position + " prev_position prev_position_" + prev_position), $(this).data("current_position", ""), $(this).data("prev_position", ""), position = index + 1, $(this).data("position", position), $(this).addClass("position_" + position)
                                        }), $prev_carousel_group.children().css({
                                            position: "",
                                            width: original_item_width,
                                            "max-width": original_item_width,
                                            left: ""
                                        }), $the_portfolio.data("carouseling", !1)
                                    }, 100)
                                }
                            })
                        }
                }

                function set_fullwidth_portfolio_columns($the_portfolio, carousel_mode) {
                    var columns, $portfolio_items = $the_portfolio.find(".et_pb_portfolio_items"),
                        portfolio_items_width = $portfolio_items.width(),
                        $the_portfolio_items = $portfolio_items.find(".et_pb_portfolio_item");
                    $the_portfolio_items.length;
                    if (void 0 !== $the_portfolio_items && (columns = portfolio_items_width >= 1600 ? 5 : portfolio_items_width >= 1024 ? 4 : portfolio_items_width >= 768 ? 3 : portfolio_items_width >= 480 ? 2 : 1, portfolio_item_width = portfolio_items_width / columns, portfolio_item_height = .75 * portfolio_item_width, carousel_mode && $portfolio_items.css({
                            height: portfolio_item_height
                        }), $the_portfolio_items.css({
                            height: portfolio_item_height
                        }), columns !== $portfolio_items.data("portfolio-columns") && !$the_portfolio.data("columns_setting_up"))) {
                        $the_portfolio.data("columns_setting_up", !0);
                        var portfolio_item_width_percentage = 100 / columns + "%";
                        if ($the_portfolio_items.css({
                                width: portfolio_item_width_percentage,
                                "max-width": portfolio_item_width_percentage
                            }), $portfolio_items.removeClass("columns-" + $portfolio_items.data("portfolio-columns")), $portfolio_items.addClass("columns-" + columns), $portfolio_items.data("portfolio-columns", columns), !carousel_mode) return $the_portfolio.data("columns_setting_up", !1);
                        $portfolio_items.find(".et_pb_carousel_group").length && ($the_portfolio_items.appendTo($portfolio_items), $portfolio_items.find(".et_pb_carousel_group").remove());
                        var the_portfolio_items = $portfolio_items.data("items"),
                            $carousel_group = $('<div class="et_pb_carousel_group active">').appendTo($portfolio_items);
                        if (void 0 !== the_portfolio_items) {
                            for ($the_portfolio_items.data("position", ""), the_portfolio_items.length <= columns ? $portfolio_items.find(".et-pb-slider-arrows").hide() : $portfolio_items.find(".et-pb-slider-arrows").show(), position = 1, x = 0; x < the_portfolio_items.length; x++, position++) x < columns ? ($(the_portfolio_items[x]).show(), $(the_portfolio_items[x]).appendTo($carousel_group), $(the_portfolio_items[x]).data("position", position), $(the_portfolio_items[x]).addClass("position_" + position)) : (position = $(the_portfolio_items[x]).data("position"), $(the_portfolio_items[x]).removeClass("position_" + position), $(the_portfolio_items[x]).data("position", ""), $(the_portfolio_items[x]).hide());
                            $the_portfolio.data("columns_setting_up", !1)
                        }
                    }
                }

                function et_carousel_auto_rotate($carousel) {
                    "on" === $carousel.data("auto-rotate") && $carousel.find(".et_pb_portfolio_item").length > $carousel.find(".et_pb_carousel_group .et_pb_portfolio_item").length && !$carousel.hasClass("et_carousel_hovered") && (et_carousel_timer = setTimeout(function() {
                        fullwidth_portfolio_carousel_slide($carousel.find(".et-pb-arrow-next"))
                    }, $carousel.data("auto-rotate-speed")), $carousel.data("et_carousel_timer", et_carousel_timer))
                }

                function set_filterable_grid_items($the_portfolio) {
                    var active_category = $the_portfolio.find(".et_pb_portfolio_filter > a.active").data("category-slug");
                    window.et_pb_set_responsive_grid($the_portfolio.find(".et_pb_portfolio_items"), ".et_pb_portfolio_item"), $the_portfolio_visible_items = "all" === active_category ? $the_portfolio.find(".et_pb_portfolio_item") : $the_portfolio.find(".et_pb_portfolio_item.project_category_" + active_category);
                    var visible_grid_items = $the_portfolio_visible_items.length,
                        posts_number = $the_portfolio.data("posts-number");
                    set_filterable_grid_pages($the_portfolio, 0 === posts_number ? 1 : Math.ceil(visible_grid_items / posts_number));
                    var visible_grid_items = 0,
                        _page = 1;
                    $the_portfolio.find(".et_pb_portfolio_item").data("page", ""), $the_portfolio_visible_items.each(function(i) {
                        visible_grid_items++, 0 === parseInt(visible_grid_items % posts_number) ? ($(this).data("page", _page), _page++) : $(this).data("page", _page)
                    }), $the_portfolio_visible_items.filter(function() {
                        return 1 == $(this).data("page")
                    }).show(), $the_portfolio_visible_items.filter(function() {
                        return 1 != $(this).data("page")
                    }).hide()
                }

                function set_filterable_grid_pages($the_portfolio, pages) {
                    if ($pagination = $the_portfolio.find(".et_pb_portofolio_pagination"), $pagination.length && ($pagination.html("<ul></ul>"), !(pages <= 1))) {
                        $pagination_list = $pagination.children("ul"), $pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">' + et_pb_custom.prev + "</a></li>");
                        for (var page = 1; page <= pages; page++) {
                            var first_page_class = 1 === page ? " active" : "",
                                last_page_class = page === pages ? " last-page" : "",
                                hidden_page_class = page >= 5 ? ' style="display:none;"' : "";
                            $pagination_list.append("<li" + hidden_page_class + ' class="page page-' + page + '"><a href="#" data-page="' + page + '" class="page-' + page + first_page_class + last_page_class + '">' + page + "</a></li>")
                        }
                        $pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">' + et_pb_custom.next + "</a></li>")
                    }
                }

                function set_filterable_portfolio_hash($the_portfolio) {
                    if ($the_portfolio.attr("id")) {
                        var this_portfolio_state = [];
                        this_portfolio_state.push($the_portfolio.attr("id")), this_portfolio_state.push($the_portfolio.find(".et_pb_portfolio_filter > a.active").data("category-slug")), $the_portfolio.find(".et_pb_portofolio_pagination a.active").length ? this_portfolio_state.push($the_portfolio.find(".et_pb_portofolio_pagination a.active").data("page")) : this_portfolio_state.push(1), et_set_hash(this_portfolio_state = this_portfolio_state.join(et_hash_module_param_seperator))
                    }
                }

                function et_pb_init_maps() {
                    $et_pb_map.each(function() {
                        et_pb_map_init($(this))
                    })
                }

                function et_toggle_animation_callback(initial_toggle_state, $module, $section) {
                    "closed" === initial_toggle_state ? $module.removeClass("et_pb_toggle_close").addClass("et_pb_toggle_open") : $module.removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close"), $section.hasClass("et_pb_section_parallax") && !$section.children().hasClass("et_pb_parallax_css") && $.proxy(et_parallax_set_height, $section)()
                }

                function et_fix_slider_height($slider) {
                    var $this_slider = $slider || $et_pb_slider;
                    $this_slider && $this_slider.length && $this_slider.each(function() {
                        var $slide_section = $(this).parent(".et_pb_section"),
                            $slides = $(this).find(".et_pb_slide"),
                            $slide_containers = $slides.find(".et_pb_container"),
                            max_height = 0,
                            image_margin = 0,
                            need_image_margin_top = $(this).hasClass("et_pb_post_slider_image_top"),
                            need_image_margin_bottom = $(this).hasClass("et_pb_post_slider_image_bottom");
                        if ($slide_section.is(".et_pb_section_first")) return !0;
                        $slide_containers.css("height", 0), $slides.addClass("et_pb_temp_slide"), "object" == typeof $(this).data("et_pb_simple_slider") && $(this).data("et_pb_simple_slider").et_fix_slider_content_images(), $slides.each(function() {
                            var height = parseFloat($(this).innerHeight()),
                                $slide_image = $(this).find(".et_pb_slide_image"),
                                adjustedHeight = parseFloat($(this).data("adjustedHeight")),
                                autoTopPadding = isNaN(adjustedHeight) ? 0 : adjustedHeight;
                            height = autoTopPadding && autoTopPadding < height ? height - autoTopPadding : height, (need_image_margin_top || need_image_margin_bottom) && ($slide_image.length ? (image_margin = need_image_margin_top ? parseFloat($slide_image.css("margin-top")) : parseFloat($slide_image.css("margin-bottom")), image_margin += 10) : $(this).find(".et_pb_container").addClass("et_pb_no_image")), 0 === Math.abs(parseInt($(this).find(".et_pb_slide_description").height())) && $(this).find(".et_pb_container").addClass("et_pb_empty_slide"), max_height < height && (max_height = height)
                        }), max_height + image_margin < 1 ? $slide_containers.css("height", "") : $slide_containers.css("height", max_height + image_margin), $slides.removeClass("et_pb_temp_slide"), $slides.filter(".et-pb-active-slide").find(".et_pb_slide_image").children("img").addClass("active")
                    })
                }

                function et_fix_nav_direction() {
                    window_width = $(window).width(), $(".nav li.et-reverse-direction-nav").removeClass("et-reverse-direction-nav"), $(".nav li li ul").each(function() {
                        var $dropdown = $(this),
                            dropdown_width = $dropdown.width(),
                            dropdown_offset = $dropdown.offset(),
                            $parents = $dropdown.parents(".nav > li");
                        dropdown_offset.left > window_width - dropdown_width && $parents.addClass("et-reverse-direction-nav")
                    })
                }

                function et_waypoint($element, options, max_instances) {
                    max_instances = max_instances || $element.data("et_waypoint_max_instances") || 1;
                    var current_instances = $element.data("et_waypoint") || [];
                    if (current_instances.length < max_instances) {
                        var new_instances = $element.waypoint(options);
                        new_instances && new_instances.length > 0 && (current_instances.push(new_instances[0]), $element.data("et_waypoint", current_instances))
                    } else
                        for (var i = 0; i < current_instances.length; i++) current_instances[i].context.refresh()
                }

                function et_get_offset(element, fallback) {
                    var section_index = element.parents(".et_pb_section").index(),
                        section_length = $(".et_pb_section").length - 1,
                        row_index = element.parents(".et_pb_row").index(),
                        row_length = element.parents(".et_pb_section").children().length - 1;
                    return section_index === section_length && row_index === row_length ? "bottom-in-view" : fallback
                }

                function et_animate_element($element) {
                    var animation_style = $element.attr("data-animation-style"),
                        animation_repeat = $element.attr("data-animation-repeat"),
                        animation_duration = $element.attr("data-animation-duration"),
                        animation_delay = $element.attr("data-animation-delay"),
                        animation_intensity = $element.attr("data-animation-intensity"),
                        animation_starting_opacity = $element.attr("data-animation-starting-opacity"),
                        animation_speed_curve = $element.attr("data-animation-speed-curve");
                    $element.is(".et_pb_section") && "roll" === animation_style && $("#et-boc").css("overflow-x", "hidden"), et_remove_animation_data($element);
                    var starting_opacity = isNaN(parseInt(animation_starting_opacity)) ? 0 : .01 * parseInt(animation_starting_opacity); - 1 === $.inArray(animation_speed_curve, ["linear", "ease", "ease-in", "ease-out", "ease-in-out"]) && (animation_speed_curve = "ease-in-out"), $element.css({
                        "animation-duration": animation_duration,
                        "animation-delay": animation_delay,
                        opacity: starting_opacity,
                        "animation-timing-function": animation_speed_curve
                    });
                    for (var intensity_css = {}, intensity_percentage = isNaN(parseInt(animation_intensity)) ? 50 : parseInt(animation_intensity), intensity_animations = ["slide", "zoom", "flip", "fold", "roll"], original_animation = !1, original_direction = !1, i = 0; i < intensity_animations.length; i++) {
                        var animation = intensity_animations[i];
                        if (animation_style && animation_style.substr(0, animation.length) === animation) {
                            original_animation = animation;
                            "" !== (original_direction = animation_style.substr(animation.length, animation_style.length)) && (original_direction = original_direction.toLowerCase());
                            break
                        }
                    }
                    if (!1 !== original_animation && !1 !== original_direction && (intensity_css = et_process_animation_intensity(original_animation, original_direction, intensity_percentage)), $.isEmptyObject(intensity_css) || $element.css(intensity_css), $element.addClass("et_animated"), $element.addClass(animation_style), $element.addClass(animation_repeat), !animation_repeat) {
                        var animation_duration_ms = parseInt(animation_duration),
                            animation_delay_ms = parseInt(animation_delay);
                        setTimeout(function() {
                            et_remove_animation($element)
                        }, animation_duration_ms + animation_delay_ms)
                    }
                }

                function et_process_animation_data(waypoints_enabled) {
                    if ("undefined" != typeof et_animation_data && et_animation_data.length > 0) {
                        $("body").css("overflow-x", "hidden"), $("#page-container").css("overflow-y", "hidden");
                        for (var i = 0; i < et_animation_data.length; i++) {
                            var animation_entry = et_animation_data[i];
                            if (animation_entry.class && animation_entry.style && animation_entry.repeat && animation_entry.duration && animation_entry.delay && animation_entry.intensity && animation_entry.starting_opacity && animation_entry.speed_curve) {
                                var $animated = $("." + animation_entry.class);
                                $animated.attr({
                                    "data-animation-style": animation_entry.style,
                                    "data-animation-repeat": "once" === animation_entry.repeat ? "" : "infinite",
                                    "data-animation-duration": animation_entry.duration,
                                    "data-animation-delay": animation_entry.delay,
                                    "data-animation-intensity": animation_entry.intensity,
                                    "data-animation-starting-opacity": animation_entry.starting_opacity,
                                    "data-animation-speed-curve": animation_entry.speed_curve
                                }), !0 === waypoints_enabled ? $animated.hasClass("et_pb_circle_counter") ? (et_waypoint($animated, {
                                    offset: "100%",
                                    handler: function() {
                                        var $this_counter = $(this.element).find(".et_pb_circle_counter_inner");
                                        $this_counter.data("PieChartHasLoaded") || void 0 === $this_counter.data("easyPieChart") || ($this_counter.data("easyPieChart").update($this_counter.data("number-value")), $this_counter.data("PieChartHasLoaded", !0), et_animate_element($(this.element)))
                                    }
                                }), et_waypoint($animated, {
                                    offset: "bottom-in-view",
                                    handler: function() {
                                        var $this_counter = $(this.element).find(".et_pb_circle_counter_inner");
                                        $this_counter.data("PieChartHasLoaded") || void 0 === $this_counter.data("easyPieChart") || ($this_counter.data("easyPieChart").update($this_counter.data("number-value")), $this_counter.data("PieChartHasLoaded", !0), et_animate_element($(this.element)))
                                    }
                                })) : $animated.hasClass("et_pb_number_counter") ? (et_waypoint($animated, {
                                    offset: "100%",
                                    handler: function() {
                                        $(this.element).data("easyPieChart").update($(this.element).data("number-value")), et_animate_element($(this.element))
                                    }
                                }), et_waypoint($animated, {
                                    offset: "bottom-in-view",
                                    handler: function() {
                                        $(this.element).data("easyPieChart").update($(this.element).data("number-value")), et_animate_element($(this.element))
                                    }
                                })) : et_waypoint($animated, {
                                    offset: "100%",
                                    handler: function() {
                                        et_animate_element($(this.element))
                                    }
                                }) : et_animate_element($animated)
                            }
                        }
                    }
                }

                function et_process_animation_intensity(animation, direction, intensity) {
                    var intensity_css = {};
                    switch (animation) {
                        case "slide":
                            switch (direction) {
                                case "top":
                                    intensity_css = {
                                        transform: "translate3d(0, " + (percentage = -2 * intensity) + "%, 0)"
                                    };
                                    break;
                                case "right":
                                    intensity_css = {
                                        transform: "translate3d(" + (percentage = 2 * intensity) + "%, 0, 0)"
                                    };
                                    break;
                                case "bottom":
                                    intensity_css = {
                                        transform: "translate3d(0, " + (percentage = 2 * intensity) + "%, 0)"
                                    };
                                    break;
                                case "left":
                                    var percentage = -2 * intensity;
                                    intensity_css = {
                                        transform: "translate3d(" + percentage + "%, 0, 0)"
                                    };
                                    break;
                                default:
                                    intensity_css = {
                                        transform: "scale3d(" + (scale = .01 * (100 - intensity)) + ", " + scale + ", " + scale + ")"
                                    }
                            }
                            break;
                        case "zoom":
                            var scale = .01 * (100 - intensity);
                            switch (direction) {
                                case "top":
                                case "right":
                                case "bottom":
                                case "left":
                                default:
                                    intensity_css = {
                                        transform: "scale3d(" + scale + ", " + scale + ", " + scale + ")"
                                    }
                            }
                            break;
                        case "flip":
                            switch (direction) {
                                case "right":
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateY(" + (degree = Math.ceil(.9 * intensity)) + "deg)"
                                    };
                                    break;
                                case "left":
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateY(" + (degree = -1 * Math.ceil(.9 * intensity)) + "deg)"
                                    };
                                    break;
                                case "top":
                                default:
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateX(" + (degree = Math.ceil(.9 * intensity)) + "deg)"
                                    };
                                    break;
                                case "bottom":
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateX(" + (degree = -1 * Math.ceil(.9 * intensity)) + "deg)"
                                    }
                            }
                            break;
                        case "fold":
                            switch (direction) {
                                case "top":
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateX(" + (degree = -1 * Math.ceil(.9 * intensity)) + "deg)"
                                    };
                                    break;
                                case "bottom":
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateX(" + (degree = Math.ceil(.9 * intensity)) + "deg)"
                                    };
                                    break;
                                case "left":
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateY(" + (degree = Math.ceil(.9 * intensity)) + "deg)"
                                    };
                                    break;
                                case "right":
                                default:
                                    intensity_css = {
                                        transform: "perspective(2000px) rotateY(" + (degree = -1 * Math.ceil(.9 * intensity)) + "deg)"
                                    }
                            }
                            break;
                        case "roll":
                            switch (direction) {
                                case "right":
                                case "bottom":
                                    intensity_css = {
                                        transform: "rotateZ(" + (degree = -1 * Math.ceil(3.6 * intensity)) + "deg)"
                                    };
                                    break;
                                case "top":
                                case "left":
                                    intensity_css = {
                                        transform: "rotateZ(" + (degree = Math.ceil(3.6 * intensity)) + "deg)"
                                    };
                                    break;
                                default:
                                    var degree = Math.ceil(3.6 * intensity);
                                    intensity_css = {
                                        transform: "rotateZ(" + degree + "deg)"
                                    }
                            }
                    }
                    return intensity_css
                }

                function et_has_animation_data($element) {
                    var has_animation = !1;
                    if ("undefined" != typeof et_animation_data && et_animation_data.length > 0)
                        for (var i = 0; i < et_animation_data.length; i++) {
                            var animation_entry = et_animation_data[i];
                            if (animation_entry.class && $element.hasClass(animation_entry.class)) {
                                has_animation = !0;
                                break
                            }
                        }
                    return has_animation
                }

                function et_get_animation_classes() {
                    return ["et_animated", "infinite", "et-waypoint", "fade", "fadeTop", "fadeRight", "fadeBottom", "fadeLeft", "slide", "slideTop", "slideRight", "slideBottom", "slideLeft", "bounce", "bounceTop", "bounceRight", "bounceBottom", "bounceLeft", "zoom", "zoomTop", "zoomRight", "zoomBottom", "zoomLeft", "flip", "flipTop", "flipRight", "flipBottom", "flipLeft", "fold", "foldTop", "foldRight", "foldBottom", "foldLeft", "roll", "rollTop", "rollRight", "rollBottom", "rollLeft"]
                }

                function et_remove_animation($element) {
                    var animation_classes = et_get_animation_classes();
                    $element.is(".et_pb_section") && $element.is(".roll") && $("#et-boc").css("overflow-x", ""), $element.removeClass(animation_classes.join(" ")), $element.css({
                        "animation-delay": "",
                        "animation-duration": "",
                        "animation-timing-function": "",
                        opacity: "",
                        transform: ""
                    }), "static" === $element.css("position") && $element.addClass("et_had_animation")
                }

                function et_remove_animation_data($element) {
                    for (var data_attrs_to_remove = [], data_attrs = $element.get(0).attributes, i = 0; i < data_attrs.length; i++) "data-animation-" === data_attrs[i].name.substring(0, 15) && data_attrs_to_remove.push(data_attrs[i].name);
                    $.each(data_attrs_to_remove, function(index, attr_name) {
                        $element.removeAttr(attr_name)
                    })
                }

                function et_is_click_exception($element) {
                    for (var is_exception = !1, click_exceptions = [".et_pb_toggle_title", ".mejs-container *", ".et_pb_contact_field input", ".et_pb_contact_field textarea", ".et_pb_contact_field_checkbox *", ".et_pb_contact_field_radio *", ".et_pb_contact_captcha", ".et_pb_tabs_controls a"], i = 0; i < click_exceptions.length; i++)
                        if ($element.is(click_exceptions[i])) {
                            is_exception = !0;
                            break
                        }
                    return is_exception
                }

                function et_pb_maybe_log_event($goal_container, event, callback) {
                    if (!is_frontend_builder) {
                        var log_event = void 0 === event ? "con_goal" : event;
                        $goal_container.hasClass("et_pb_ab_goal") && !et_pb_ab_logged_status[log_event] ? et_pb_ab_update_stats(log_event, callback) : void 0 !== callback && callback()
                    }
                }

                function et_pb_ab_update_stats(record_type, set_page_id, set_subject_id, set_test_id, callback) {
                    var subject_id = void 0 === set_subject_id ? et_pb_get_subject_id() : set_subject_id,
                        page_id = void 0 === set_page_id ? et_pb_custom.page_id : set_page_id,
                        test_id = void 0 === set_test_id ? et_pb_custom.unique_test_id : set_test_id,
                        stats_data = JSON.stringify({
                            test_id: page_id,
                            subject_id: subject_id,
                            record_type: record_type
                        });
                    et_pb_set_cookie(365, "et_pb_ab_" + record_type + "_" + page_id + test_id + ("click_goal" === record_type || "con_short" === record_type ? "" : subject_id) + "=true"), et_pb_ab_logged_status[record_type] = !0, $.ajax({
                        type: "POST",
                        url: et_pb_custom.ajaxurl,
                        data: {
                            action: "et_pb_update_stats_table",
                            stats_data_array: stats_data,
                            et_ab_log_nonce: et_pb_custom.et_ab_log_nonce
                        }
                    }).always(function() {
                        void 0 !== callback && callback()
                    })
                }

                function et_pb_get_subject_id() {
                    var $subject = $(".et_pb_ab_subject");
                    return !($subject.length <= 0 || $("html").is(".et_fb_preview_active--wireframe_preview")) && $subject.attr("class").split("et_pb_ab_subject_id-")[1].split(" ")[0].split("_")[1]
                }

                function et_pb_set_cookie_expire(days) {
                    var ms = 24 * days * 60 * 60 * 1e3,
                        date = new Date;
                    return date.setTime(date.getTime() + ms), "; expires=" + date.toUTCString()
                }

                function et_pb_check_cookie_value(cookie_name, value) {
                    return et_pb_get_cookie_value(cookie_name) == value
                }

                function et_pb_get_cookie_value(cookie_name) {
                    return et_pb_parse_cookies()[cookie_name]
                }

                function et_pb_parse_cookies() {
                    for (var cookies = document.cookie.split("; "), ret = {}, i = cookies.length - 1; i >= 0; i--) {
                        var el = cookies[i].split("=");
                        ret[el[0]] = el[1]
                    }
                    return ret
                }

                function et_pb_set_cookie(expire, cookie_content) {
                    cookie_expire = et_pb_set_cookie_expire(expire), document.cookie = cookie_content + cookie_expire + "; path=/"
                }

                function et_pb_get_fixed_main_header_height() {
                    if (!window.et_is_fixed_nav) return 0;
                    var fixed_height_onload = void 0 === $("#main-header").attr("data-fixed-height-onload") ? 0 : $("#main-header").attr("data-fixed-height-onload");
                    return window.et_is_fixed_nav ? parseFloat(fixed_height_onload) : 0
                }

                function fitvids_slider_fullscreen_init() {
                    $.fn.fitVids && ($(".et_pb_slide_video").fitVids(), $(".et_pb_module").fitVids({
                        customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
                    })), et_fix_slider_height(), et_calculate_fullscreen_section_size()
                }

                function et_pb_window_load_scripts() {
                    et_fix_fullscreen_section(), et_calculate_fullscreen_section_size(), $(document).on("click", ".et_pb_fullwidth_header_scroll a", et_pb_fullwidth_header_scroll), setTimeout(function() {
                        $(".et_pb_preload").removeClass("et_pb_preload")
                    }, 500), $.fn.hashchange && ($(window).hashchange(function() {
                        process_et_hashchange(window.location.hash.substring(1))
                    }), $(window).hashchange()), $et_pb_parallax.length && !et_is_mobile_device && $et_pb_parallax.each(function() {
                        et_pb_parallax_init($(this))
                    }), window.et_reinit_waypoint_modules(), $(".et_audio_content").length && $(window).trigger("resize")
                }

                function et_pb_set_paginated_content($current_module, is_cache) {
                    void 0 !== $current_module.find(".et_pb_salvattore_content").attr("data-columns") && (is_cache || salvattore.registerGrid($current_module.find(".et_pb_salvattore_content")[0]), salvattore.recreateColumns($current_module.find(".et_pb_salvattore_content")[0]), $current_module.find(".et_pb_post").css({
                        opacity: "1"
                    })), $current_module.find(".et_audio_container").length > 0 && "undefined" != typeof wp && void 0 !== wp.mediaelement && "function" == typeof wp.mediaelement.initialize && (wp.mediaelement.initialize(), $(window).trigger("resize")), $current_module.find(".et-waypoint, .et_pb_circle_counter, .et_pb_number_counter").length > 0 && $current_module.find(".et-waypoint, .et_pb_circle_counter, .et_pb_number_counter").each(function() {
                        var $waypoint_module = $(this);
                        $waypoint_module.hasClass("et_pb_circle_counter") && window.et_pb_reinit_circle_counters($waypoint_module), $waypoint_module.hasClass("et_pb_number_counter") && window.et_pb_reinit_number_counters($waypoint_module), $waypoint_module.find(".et_pb_counter_amount").length > 0 && $waypoint_module.find(".et_pb_counter_amount").each(function() {
                            window.et_bar_counters_init($(this))
                        }), $(this).css({
                            opacity: "1"
                        }), window.et_reinit_waypoint_modules()
                    }), $current_module.find(".et_pb_slider").length > 0 && $current_module.find(".et_pb_slider").each(function() {
                        et_pb_slider_init($(this))
                    }), $current_module.on("click", ".et_pb_video_overlay", function(e) {
                        e.preventDefault(), et_pb_play_overlayed_video($(this))
                    }), $current_module.fitVids({
                        customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
                    }), $current_module.fadeTo("slow", 1), "function" == typeof window.et_shortcodes_init && window.et_shortcodes_init($current_module), et_init_audio_modules(), $("html, body").animate({
                        scrollTop: $current_module.offset().top - ($("#main-header").innerHeight() + $("#top-header").innerHeight() + 50)
                    })
                }

                function et_conditional_check($form) {
                    $form.find("[data-conditional-logic]").each(function() {
                        for (var $conditional = $(this), rules = $conditional.data("conditional-logic"), relation = $conditional.data("conditional-relation"), matched_rules = [], i = 0; i < rules.length; i++) {
                            var field_value, ruleset = rules[i],
                                check_id = ruleset[0],
                                check_type = ruleset[1],
                                check_value = ruleset[2],
                                $wrapper = $form.find('.et_pb_contact_field[data-id="' + check_id + '"]'),
                                field_type = ($wrapper.data("id"), $wrapper.data("type"));
                            if ($wrapper.is(":visible")) {
                                switch (field_type) {
                                    case "input":
                                    case "email":
                                        field_value = $wrapper.find("input").val();
                                        break;
                                    case "text":
                                        field_value = $wrapper.find("textarea").val();
                                        break;
                                    case "radio":
                                        field_value = $wrapper.find("input:checked").val() || "";
                                        break;
                                    case "checkbox":
                                        var $checkbox = $wrapper.find(":checkbox:checked");
                                        field_value = !1, $checkbox.each(function() {
                                            if (check_value === $(this).val()) return field_value = !0, !1
                                        }), check_value = !0;
                                        break;
                                    case "select":
                                        field_value = $wrapper.find("select").val()
                                }
                                if ("is empty" !== check_type && "is not empty" !== check_type || (check_type = "is empty" === check_type ? "is" : "is not", check_value = "", "checkbox" === field_type && !1 === field_value && (field_value = "")), !("is" === check_type && field_value !== check_value || "is not" === check_type && field_value === check_value)) {
                                    var containsRegExp = new RegExp(check_value, "i");
                                    if (("contains" !== check_type || field_value.match(containsRegExp)) && ("does not contain" !== check_type || !field_value.match(containsRegExp))) {
                                        var maybeNumericValue = parseInt(field_value),
                                            maybeNumbericCheckValue = parseInt(check_value);
                                        ("is greater" !== check_type && "is less" !== check_type || !isNaN(maybeNumericValue) && !isNaN(maybeNumbericCheckValue)) && ("is greater" === check_type && maybeNumericValue <= maybeNumbericCheckValue || "is less" === check_type && maybeNumericValue >= maybeNumbericCheckValue || matched_rules.push(!0))
                                    }
                                }
                            }
                        }
                        $conditional.hide();
                        var $conditional_input = $conditional.find('input[type="text"]'),
                            conditional_pattern = $conditional_input.attr("pattern");
                        $conditional_input.attr("novalidate", "novalidate"), $conditional_input.attr("data-pattern", conditional_pattern), $conditional_input.removeAttr("pattern"), "all" === relation && rules.length === matched_rules.length && ($conditional.show(), $conditional_input.removeAttr("novalidate"), $conditional_input.attr("pattern", $conditional_input.data("pattern"))), "any" === relation && 0 < matched_rules.length && ($conditional.show(), $conditional_input.removeAttr("novalidate"), $conditional_input.attr("pattern", $conditional_input.data("pattern")))
                    })
                }
                $(window).trigger("et_pb_before_init_modules");
                var $et_pb_slider = $(".et_pb_slider"),
                    $et_pb_tabs = $(".et_pb_tabs"),
                    $et_pb_video_section = $(".et_pb_section_video_bg"),
                    $et_pb_newsletter_button = $(".et_pb_newsletter_button"),
                    $et_pb_filterable_portfolio = $(".et_pb_filterable_portfolio"),
                    $et_pb_fullwidth_portfolio = $(".et_pb_fullwidth_portfolio"),
                    $et_pb_gallery = $(".et_pb_gallery"),
                    $et_pb_countdown_timer = $(".et_pb_countdown_timer"),
                    $et_post_gallery = $(".et_post_gallery"),
                    $et_lightbox_image = $(".et_pb_lightbox_image"),
                    $et_pb_map = $(".et_pb_map_container"),
                    $et_pb_circle_counter = $(".et_pb_circle_counter"),
                    $et_pb_number_counter = $(".et_pb_number_counter"),
                    $et_pb_parallax = $(".et_parallax_bg"),
                    $et_pb_shop = $(".et_pb_shop"),
                    $et_pb_background_layout_hoverable = ($(".single.et_pb_pagebuilder_layout.et_full_width_page"), $("[data-background-layout][data-background-layout-hover]")),
                    et_is_mobile_device = null !== navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),
                    et_is_ipad = navigator.userAgent.match(/iPad/),
                    et_is_ie9 = null !== navigator.userAgent.match(/MSIE 9.0/),
                    et_all_rows = $(".et_pb_row"),
                    $et_container = et_pb_custom.is_builder_plugin_used ? et_all_rows : $(".container"),
                    et_container_width = $et_container.width(),
                    et_hide_nav = ($("body").hasClass("et_vertical_fixed"), $("body").hasClass("rtl"), $("body").hasClass("et_hide_nav")),
                    $top_header = ($("body").hasClass("et_header_style_left"), $("#top-header")),
                    $et_main_content_first_row = ($("#main-header"), $("#page-container"), $(".et_transparent_nav"), $("body.et_pb_pagebuilder_layout .et_pb_section:first-child"), $("#main-content .container:first-child")),
                    etRecalculateOffset = ($et_main_content_first_row.find(".et_post_meta_wrapper:first").find("h1"), $et_main_content_first_row.find(".entry-content:first"), $("body.single-post"), !1),
                    $et_sticky_image = ($(".et_header_style_split"), $("#et-top-navigation"), $("#logo"), $(".et_pb_image_sticky")),
                    $et_pb_counter_amount = $(".et_pb_counter_amount"),
                    $et_pb_carousel = $(".et_pb_carousel"),
                    $et_menu_selector = $(et_pb_custom.is_divi_theme_used ? "ul.nav" : ".et_pb_fullwidth_menu ul.nav"),
                    et_pb_ab_bounce_rate = 1e3 * et_pb_custom.ab_bounce_rate,
                    et_pb_ab_logged_status = {
                        read_page: !1,
                        read_goal: !1,
                        view_goal: !1,
                        click_goal: !1,
                        con_goal: !1,
                        con_short: !1
                    },
                    $hover_gutter_modules = $(".et_pb_gutter_hover");
                window.et_pb_slider_init = function($this_slider) {
                    var et_slider_settings = {
                        fade_speed: 700,
                        slide: $this_slider.hasClass("et_pb_gallery") ? ".et_pb_gallery_item" : ".et_pb_slide"
                    };
                    if ($this_slider.hasClass("et_pb_slider_no_arrows") && (et_slider_settings.use_arrows = !1), $this_slider.hasClass("et_pb_slider_no_pagination") && (et_slider_settings.use_controls = !1), $this_slider.hasClass("et_slider_auto")) {
                        var et_slider_autospeed_class_value = /et_slider_speed_(\d+)/g;
                        et_slider_settings.slideshow = !0;
                        var et_slider_autospeed = et_slider_autospeed_class_value.exec($this_slider.attr("class"));
                        et_slider_settings.slideshow_speed = null === et_slider_autospeed ? 10 : et_slider_autospeed[1]
                    }
                    $this_slider.parent().hasClass("et_pb_video_slider") && (et_slider_settings.controls_below = !0, et_slider_settings.append_controls_to = $this_slider.parent(), setTimeout(function() {
                        $(".et_pb_preload").removeClass("et_pb_preload")
                    }, 500)), $this_slider.hasClass("et_pb_slider_carousel") && (et_slider_settings.use_carousel = !0), $this_slider.et_pb_simple_slider(et_slider_settings)
                };
                var $et_top_menu = $et_menu_selector,
                    is_frontend_builder = isBuilder;
                if ($(".et_pb_ab_shop_conversion").length && void 0 !== et_pb_get_cookie_value("et_pb_ab_shop_log") && "" !== et_pb_get_cookie_value("et_pb_ab_shop_log")) {
                    var shop_log_data = et_pb_get_cookie_value("et_pb_ab_shop_log").split("_");
                    page_id = shop_log_data[0], subject_id = shop_log_data[1], test_id = shop_log_data[2], et_pb_ab_update_stats("con_goal", page_id, subject_id, test_id), et_pb_set_cookie(0, "et_pb_ab_shop_log=true")
                }
                if ($(".et_pb_ab_split_track").length && $(".et_pb_ab_split_track").each(function() {
                        var cookies_name = "et_pb_ab_shortcode_track_" + $(this).data("test_id");
                        if (void 0 !== et_pb_get_cookie_value(cookies_name) && "" !== et_pb_get_cookie_value(cookies_name)) {
                            var track_data = et_pb_get_cookie_value(cookies_name).split("_");
                            page_id = track_data[0], subject_id = track_data[1], test_id = track_data[2], et_pb_ab_update_stats("con_short", page_id, subject_id, test_id), et_pb_set_cookie(0, cookies_name + "=true")
                        }
                    }), $hover_gutter_modules.length > 0 && $hover_gutter_modules.each(function() {
                        var $thisEl = $(this),
                            originalGutter = $thisEl.data("original_gutter"),
                            hoverGutter = $thisEl.data("hover_gutter");
                        $thisEl.hover(function() {
                            $thisEl.removeClass("et_pb_gutters" + originalGutter), $thisEl.addClass("et_pb_gutters" + hoverGutter)
                        }, function() {
                            $thisEl.removeClass("et_pb_gutters" + hoverGutter), $thisEl.addClass("et_pb_gutters" + originalGutter)
                        })
                    }), et_pb_custom.is_ab_testing_active && function() {
                        if (!is_frontend_builder) {
                            var $et_pb_ab_goal = $(".et_pb_ab_goal"),
                                et_ab_subject_id = et_pb_get_subject_id();
                            if ($.each(et_pb_ab_logged_status, function(key, value) {
                                    var cookie_subject = "click_goal" === key || "con_short" === key ? "" : et_ab_subject_id;
                                    et_pb_ab_logged_status[key] = et_pb_check_cookie_value("et_pb_ab_" + key + "_" + et_pb_custom.page_id + et_pb_custom.unique_test_id + cookie_subject, "true")
                                }), et_pb_ab_logged_status.read_page || setTimeout(function() {
                                    et_pb_ab_update_stats("read_page")
                                }, et_pb_ab_bounce_rate), "on" !== et_pb_custom.is_shortcode_tracking || et_pb_ab_logged_status.con_short || et_pb_set_cookie(365, "et_pb_ab_shortcode_track_" + et_pb_custom.page_id + "=" + et_pb_custom.page_id + "_" + et_pb_get_subject_id() + "_" + et_pb_custom.unique_test_id), $et_pb_ab_goal.length)
                                if ($et_pb_ab_goal.hasClass("et_pb_module") && ($et_pb_ab_goal.hasClass("et_pb_button") || $et_pb_ab_goal.find(".et_pb_button").length)) {
                                    if (!$et_pb_ab_goal.hasClass("et_pb_contact_form_container") && !$et_pb_ab_goal.hasClass("et_pb_newsletter")) {
                                        var $goal_button = $et_pb_ab_goal.hasClass("et_pb_button") ? $et_pb_ab_goal : $et_pb_ab_goal.find(".et_pb_button");
                                        if ($et_pb_ab_goal.hasClass("et_pb_comments_module")) {
                                            var comment_submitted = -1 !== window.location.href.indexOf("#comment-"),
                                                log_conversion = et_pb_check_cookie_value("et_pb_ab_comment_log_" + et_pb_custom.page_id + et_pb_custom.unique_test_id, "true");
                                            comment_submitted && log_conversion && (et_pb_ab_update_stats("con_goal"), et_pb_set_cookie(0, "et_pb_ab_comment_log_" + et_pb_custom.page_id + et_pb_custom.unique_test_id + "=true"))
                                        }
                                        $goal_button.click(function() {
                                            !$et_pb_ab_goal.hasClass("et_pb_comments_module") || et_pb_ab_logged_status.con_goal ? et_pb_maybe_log_event($et_pb_ab_goal, "click_goal") : et_pb_set_cookie(365, "et_pb_ab_comment_log_" + et_pb_custom.page_id + et_pb_custom.unique_test_id + "=true")
                                        })
                                    }
                                } else $et_pb_ab_goal.click(function() {
                                    $et_pb_ab_goal.hasClass("et_pb_shop") && !et_pb_ab_logged_status.con_goal && et_pb_set_cookie(365, "et_pb_ab_shop_log=" + et_pb_custom.page_id + "_" + et_pb_get_subject_id() + "_" + et_pb_custom.unique_test_id), et_pb_maybe_log_event($et_pb_ab_goal, "click_goal")
                                })
                        }
                    }(), et_all_rows.length && et_all_rows.each(function() {
                        var $this_row = $(this),
                            row_class = "";
                        "" !== (row_class = et_get_column_types($this_row.find(">.et_pb_column"))) && $this_row.addClass(row_class), $this_row.find(".et_pb_row_inner").length && $this_row.find(".et_pb_row_inner").each(function() {
                            var $this_row_inner = $(this);
                            "" !== (row_class = et_get_column_types($this_row_inner.find(".et_pb_column"))) && $this_row_inner.addClass(row_class)
                        })
                    }), window.et_pb_init_nav_menu($et_top_menu), $et_sticky_image.each(function() {
                        window.et_pb_apply_sticky_image_effect($(this))
                    }), et_is_mobile_device && ($(".et_pb_section_video_bg").each(function() {
                        var $this_el = $(this);
                        $this_el.closest(".et_pb_preload").removeClass("et_pb_preload"), $this_el.remove()
                    }), $("body").addClass("et_mobile_device"), et_is_ipad || $("body").addClass("et_mobile_device_not_ipad")), et_is_ie9 && $("body").addClass("et_ie9"), ($et_pb_video_section.length || is_frontend_builder) && (window.et_pb_video_section_init = function($et_pb_video_section) {
                        $et_pb_video_section.find("video").mediaelementplayer({
                            pauseOtherPlayers: !1,
                            success: function(mediaElement, domObject) {
                                mediaElement.addEventListener("loadeddata", function() {
                                    et_pb_resize_section_video_bg($(domObject)), et_pb_center_video($(domObject).closest(".mejs-video"))
                                }, !1), mediaElement.addEventListener("canplay", function() {
                                    $(domObject).closest(".et_pb_preload").removeClass("et_pb_preload")
                                }, !1)
                            }
                        })
                    }, et_pb_video_section_init($et_pb_video_section)), et_init_audio_modules(), $et_post_gallery.length) {
                    var magnificPopup = $.magnificPopup.instance;
                    $("body").on("swiperight", ".mfp-container", function() {
                        magnificPopup.prev()
                    }), $("body").on("swipeleft", ".mfp-container", function() {
                        magnificPopup.next()
                    }), $et_post_gallery.each(function() {
                        $(this).magnificPopup({
                            delegate: ".et_pb_gallery_image a",
                            type: "image",
                            removalDelay: 500,
                            gallery: {
                                enabled: !0,
                                navigateByImgClick: !0
                            },
                            mainClass: "mfp-fade",
                            zoom: {
                                enabled: !et_pb_custom.is_builder_plugin_used,
                                duration: 500,
                                opener: function(element) {
                                    return element.find("img")
                                }
                            },
                            autoFocusLast: !1
                        })
                    }), $et_post_gallery.find("a").unbind("click")
                }($et_lightbox_image.length || is_frontend_builder) && ($et_lightbox_image.unbind("click"), $et_lightbox_image.bind("click"), window.et_pb_image_lightbox_init = function($et_lightbox_image) {
                    $et_lightbox_image.magnificPopup({
                        type: "image",
                        removalDelay: 500,
                        mainClass: "mfp-fade",
                        zoom: {
                            enabled: !et_pb_custom.is_builder_plugin_used,
                            duration: 500,
                            opener: function(element) {
                                return element.find("img")
                            }
                        },
                        autoFocusLast: !1
                    })
                }, et_pb_image_lightbox_init($et_lightbox_image)), ($et_pb_slider.length || is_frontend_builder) && $et_pb_slider.each(function() {
                    $this_slider = $(this), et_pb_slider_init($this_slider)
                }), (($et_pb_carousel = $(".et_pb_carousel")).length || is_frontend_builder) && $et_pb_carousel.each(function() {
                    var et_carousel_settings = {
                        slide_duration: 1e3
                    };
                    $(this).et_pb_simple_carousel(et_carousel_settings)
                }), ($et_pb_fullwidth_portfolio.length || is_frontend_builder) && (window.et_fullwidth_portfolio_init = function($the_portfolio) {
                    var $portfolio_items = $the_portfolio.find(".et_pb_portfolio_items");
                    $portfolio_items.data("items", $portfolio_items.find(".et_pb_portfolio_item").toArray()), $the_portfolio.data("columns_setting_up", !1), $the_portfolio.hasClass("et_pb_fullwidth_portfolio_carousel") ? ($portfolio_items.prepend('<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#"><span>' + et_pb_custom.previous + '</span></a><a class="et-pb-arrow-next" href="#"><span>' + et_pb_custom.next + "</span></a></div>"), set_fullwidth_portfolio_columns($the_portfolio, !0), et_carousel_auto_rotate($the_portfolio), $the_portfolio.on("swiperight", function() {
                        $(this).find(".et-pb-arrow-prev").click()
                    }), $the_portfolio.on("swipeleft", function() {
                        $(this).find(".et-pb-arrow-next").click()
                    }), $the_portfolio.hover(function() {
                        $(this).addClass("et_carousel_hovered"), void 0 !== $(this).data("et_carousel_timer") && clearInterval($(this).data("et_carousel_timer"))
                    }, function() {
                        $(this).removeClass("et_carousel_hovered"), et_carousel_auto_rotate($(this))
                    }), $the_portfolio.data("carouseling", !1), $the_portfolio.on("click", ".et-pb-slider-arrows a", function(e) {
                        return fullwidth_portfolio_carousel_slide($(this)), e.preventDefault(), !1
                    })) : set_fullwidth_portfolio_columns($the_portfolio, !1)
                }, $et_pb_fullwidth_portfolio.each(function() {
                    et_fullwidth_portfolio_init($(this))
                })), $(".et_pb_section_video").length && (window._wpmejsSettings.pauseOtherPlayers = !1), ($et_pb_filterable_portfolio.length || is_frontend_builder) && (window.et_pb_filterable_portfolio_init = function($selector) {
                    void 0 !== $selector ? set_filterable_portfolio_init($selector) : $et_pb_filterable_portfolio.each(function() {
                        set_filterable_portfolio_init($(this))
                    })
                }, window.set_filterable_portfolio_init = function($the_portfolio) {
                    var $the_portfolio_items = $the_portfolio.find(".et_pb_portfolio_items"),
                        all_portfolio_items = ($the_portfolio.data("rtl"), $the_portfolio_items.clone());
                    $the_portfolio.show(), $the_portfolio.find(".et_pb_portfolio_item").addClass("active"), $the_portfolio.css("display", "block"), set_filterable_grid_items($the_portfolio), $the_portfolio.on("click", ".et_pb_portfolio_filter a", function(e) {
                        e.preventDefault();
                        var category_slug = $(this).data("category-slug"),
                            $the_portfolio = $(this).parents(".et_pb_filterable_portfolio"),
                            $the_portfolio_items = $the_portfolio.find(".et_pb_portfolio_items");
                        "all" == category_slug ? ($the_portfolio.find(".et_pb_portfolio_filter a").removeClass("active"), $the_portfolio.find(".et_pb_portfolio_filter_all a").addClass("active"), $the_portfolio_items.empty(), $the_portfolio_items.append(all_portfolio_items.find(".et_pb_portfolio_item").clone()), $the_portfolio.find(".et_pb_portfolio_item").addClass("active")) : ($the_portfolio.find(".et_pb_portfolio_filter_all").removeClass("active"), $the_portfolio.find(".et_pb_portfolio_filter a").removeClass("active"), $the_portfolio.find(".et_pb_portfolio_filter_all a").removeClass("active"), $(this).addClass("active"), $the_portfolio_items.empty(), $the_portfolio_items.append(all_portfolio_items.find(".et_pb_portfolio_item.project_category_" + $(this).data("category-slug")).clone()), $the_portfolio_items.find(".et_pb_portfolio_item").removeClass("active"), $the_portfolio_items.find(".et_pb_portfolio_item.project_category_" + $(this).data("category-slug")).addClass("active").removeClass("inactive")), set_filterable_grid_items($the_portfolio), setTimeout(function() {
                            set_filterable_portfolio_hash($the_portfolio)
                        }, 500), $the_portfolio.find(".et_pb_portfolio_item").removeClass("first_in_row last_in_row"), et_pb_set_responsive_grid($the_portfolio, ".et_pb_portfolio_item:visible")
                    }), $the_portfolio.on("click", ".et_pb_portofolio_pagination a", function(e) {
                        e.preventDefault();
                        var to_page = $(this).data("page"),
                            $the_portfolio = $(this).parents(".et_pb_filterable_portfolio");
                        $the_portfolio.find(".et_pb_portfolio_items");
                        et_pb_smooth_scroll($the_portfolio, !1, 800), $(this).hasClass("page-prev") ? to_page = parseInt($(this).parents("ul").find("a.active").data("page")) - 1 : $(this).hasClass("page-next") && (to_page = parseInt($(this).parents("ul").find("a.active").data("page")) + 1), $(this).parents("ul").find("a").removeClass("active"), $(this).parents("ul").find("a.page-" + to_page).addClass("active");
                        var current_index = $(this).parents("ul").find("a.page-" + to_page).parent().index(),
                            total_pages = $(this).parents("ul").find("li.page").length;
                        $(this).parent().nextUntil(".page-" + (current_index + 3)).show(), $(this).parent().prevUntil(".page-" + (current_index - 3)).show(), $(this).parents("ul").find("li.page").each(function(i) {
                            $(this).hasClass("prev") || $(this).hasClass("next") || (i < current_index - 3 ? $(this).hide() : i > current_index + 1 ? $(this).hide() : $(this).show(), total_pages - current_index <= 2 && total_pages - i <= 5 ? $(this).show() : current_index <= 3 && i <= 4 && $(this).show())
                        }), to_page > 1 ? $(this).parents("ul").find("li.prev").show() : $(this).parents("ul").find("li.prev").hide(), $(this).parents("ul").find("a.active").hasClass("last-page") ? $(this).parents("ul").find("li.next").hide() : $(this).parents("ul").find("li.next").show(), $the_portfolio.find(".et_pb_portfolio_item").hide(), $the_portfolio.find(".et_pb_portfolio_item").filter(function(index) {
                            return $(this).data("page") === to_page
                        }).show(), window.et_pb_set_responsive_grid($the_portfolio.find(".et_pb_portfolio_items"), ".et_pb_portfolio_item"), setTimeout(function() {
                            set_filterable_portfolio_hash($the_portfolio)
                        }, 500), $the_portfolio.find(".et_pb_portfolio_item").removeClass("first_in_row last_in_row"), et_pb_set_responsive_grid($the_portfolio, ".et_pb_portfolio_item:visible")
                    }), $(this).on("et_hashchange", function(event) {
                        var params = event.params;
                        ($the_portfolio = $("#" + event.target.id)).find('.et_pb_portfolio_filter a[data-category-slug="' + params[0] + '"]').hasClass("active") || $the_portfolio.find('.et_pb_portfolio_filter a[data-category-slug="' + params[0] + '"]').click(), params[1] && setTimeout(function() {
                            $the_portfolio.find(".et_pb_portofolio_pagination a.page-" + params[1]).hasClass("active") || $the_portfolio.find(".et_pb_portofolio_pagination a.page-" + params[1]).addClass("active").click()
                        }, 300)
                    })
                }, window.et_load_event_fired ? et_pb_filterable_portfolio_init() : $(window).load(function() {
                    et_pb_filterable_portfolio_init()
                })), ($et_pb_gallery.length || is_frontend_builder) && (window.set_gallery_grid_items = function($the_gallery) {
                    var $the_gallery_items_container = $the_gallery.find(".et_pb_gallery_items"),
                        $the_gallery_items = $the_gallery_items_container.find(".et_pb_gallery_item"),
                        total_grid_items = $the_gallery_items.length,
                        posts_number_original = parseInt($the_gallery_items_container.attr("data-per_page")),
                        posts_number = isNaN(posts_number_original) || 0 === posts_number_original ? 4 : posts_number_original,
                        pages = Math.ceil(total_grid_items / posts_number);
                    set_gallery_grid_pages($the_gallery, pages);
                    var total_grid_items = 0,
                        _page = 1;
                    $the_gallery_items_container.find(".et_pb_gallery_filler").remove();
                    var fillers_added = 0;
                    $the_gallery_items.data("page", ""), $the_gallery_items.each(function(i) {
                        total_grid_items++;
                        var $this = $(this);
                        if (0 === parseInt(total_grid_items % posts_number)) {
                            for ($this.data("page", _page), fillers_added = 0; fillers_added < 4 && "0px" !== $this.css("marginRight");) fillers_added++, $this.before($('<div class="et_pb_gallery_filler"></div>'));
                            _page++
                        } else $this.data("page", _page)
                    });
                    $the_gallery_items.filter(function() {
                        return 1 == $(this).data("page")
                    }).show();
                    $the_gallery_items.filter(function() {
                        return 1 != $(this).data("page")
                    }).hide()
                }, window.set_gallery_grid_pages = function($the_gallery, pages) {
                    if ($pagination = $the_gallery.find(".et_pb_gallery_pagination"), $pagination.length)
                        if ($pagination.html("<ul></ul>"), pages <= 1) $pagination.hide();
                        else {
                            $pagination_list = $pagination.children("ul"), $pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">' + et_pb_custom.prev + "</a></li>");
                            for (var page = 1; page <= pages; page++) {
                                var first_page_class = 1 === page ? " active" : "",
                                    last_page_class = page === pages ? " last-page" : "",
                                    hidden_page_class = page >= 5 ? ' style="display:none;"' : "";
                                $pagination_list.append("<li" + hidden_page_class + ' class="page page-' + page + '"><a href="#" data-page="' + page + '" class="page-' + page + first_page_class + last_page_class + '">' + page + "</a></li>")
                            }
                            $pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">' + et_pb_custom.next + "</a></li>")
                        }
                }, window.set_gallery_hash = function($the_gallery) {
                    if ($the_gallery.attr("id")) {
                        var this_gallery_state = [];
                        this_gallery_state.push($the_gallery.attr("id")), $the_gallery.find(".et_pb_gallery_pagination a.active").length ? this_gallery_state.push($the_gallery.find(".et_pb_gallery_pagination a.active").data("page")) : this_gallery_state.push(1), et_set_hash(this_gallery_state = this_gallery_state.join(et_hash_module_param_seperator))
                    }
                }, window.et_pb_gallery_init = function($the_gallery) {
                    $the_gallery.hasClass("et_pb_gallery_grid") && ($the_gallery.show(), set_gallery_grid_items($the_gallery), $the_gallery.on("et_hashchange", function(event) {
                        var params = event.params;
                        $the_gallery = $("#" + event.target.id), (page_to = params[0]) && ($the_gallery.find(".et_pb_gallery_pagination a.page-" + page_to).hasClass("active") || $the_gallery.find(".et_pb_gallery_pagination a.page-" + page_to).addClass("active").click())
                    }))
                }, $et_pb_gallery.each(function() {
                    var $the_gallery = $(this);
                    et_pb_gallery_init($the_gallery)
                }), $et_pb_gallery.data("paginating", !1), window.et_pb_gallery_pagination_nav = function($the_gallery) {
                    $the_gallery.on("click", ".et_pb_gallery_pagination a", function(e) {
                        e.preventDefault();
                        var to_page = $(this).data("page"),
                            $the_gallery = $(this).parents(".et_pb_gallery"),
                            $the_gallery_items_container = $the_gallery.find(".et_pb_gallery_items"),
                            $the_gallery_items = $the_gallery_items_container.find(".et_pb_gallery_item");
                        if (!$the_gallery.data("paginating")) {
                            $the_gallery.data("paginating", !0), $(this).hasClass("page-prev") ? to_page = parseInt($(this).parents("ul").find("a.active").data("page")) - 1 : $(this).hasClass("page-next") && (to_page = parseInt($(this).parents("ul").find("a.active").data("page")) + 1), $(this).parents("ul").find("a").removeClass("active"), $(this).parents("ul").find("a.page-" + to_page).addClass("active");
                            var current_index = $(this).parents("ul").find("a.page-" + to_page).parent().index(),
                                total_pages = $(this).parents("ul").find("li.page").length;
                            $(this).parent().nextUntil(".page-" + (current_index + 3)).show(), $(this).parent().prevUntil(".page-" + (current_index - 3)).show(), $(this).parents("ul").find("li.page").each(function(i) {
                                $(this).hasClass("prev") || $(this).hasClass("next") || (i < current_index - 3 ? $(this).hide() : i > current_index + 1 ? $(this).hide() : $(this).show(), total_pages - current_index <= 2 && total_pages - i <= 5 ? $(this).show() : current_index <= 3 && i <= 4 && $(this).show())
                            }), to_page > 1 ? $(this).parents("ul").find("li.prev").show() : $(this).parents("ul").find("li.prev").hide(), $(this).parents("ul").find("a.active").hasClass("last-page") ? $(this).parents("ul").find("li.next").hide() : $(this).parents("ul").find("li.next").show(), $the_gallery_items.hide();
                            $the_gallery_items.filter(function(index) {
                                return $(this).data("page") === to_page
                            }).show();
                            $the_gallery.data("paginating", !1), window.et_pb_set_responsive_grid($the_gallery_items_container, ".et_pb_gallery_item"), setTimeout(function() {
                                set_gallery_hash($the_gallery)
                            }, 100), $("html, body").animate({
                                scrollTop: $the_gallery.offset().top - 200
                            }, 200)
                        }
                    })
                }, et_pb_gallery_pagination_nav($et_pb_gallery), is_frontend_builder && et_pb_gallery_pagination_nav($("#et-fb-app"))), $et_pb_counter_amount.length && $et_pb_counter_amount.each(function() {
                    window.et_bar_counters_init($(this))
                }), window.et_countdown_timer = function(timer) {
                    var seconds_left = parseInt(timer.attr("data-end-timestamp")) - (new Date).getTime() / 1e3;
                    days = parseInt(seconds_left / 86400), days = days > 0 ? days : 0, seconds_left %= 86400, hours = parseInt(seconds_left / 3600), hours = hours > 0 ? hours : 0, seconds_left %= 3600, minutes = parseInt(seconds_left / 60), minutes = minutes > 0 ? minutes : 0, seconds = parseInt(seconds_left % 60), seconds = seconds > 0 ? seconds : 0;
                    var $days_section = timer.find(".days > .value").parent(".section"),
                        $hours_section = timer.find(".hours > .value").parent(".section"),
                        $minutes_section = timer.find(".minutes > .value").parent(".section"),
                        $seconds_section = timer.find(".seconds > .value").parent(".section");
                    0 == days ? $days_section.hasClass("zero") || timer.find(".days > .value").html("000").parent(".section").addClass("zero").next().addClass("zero") : (days_slice = days.toString().length >= 3 ? days.toString().length : 3, timer.find(".days > .value").html(("000" + days).slice(-days_slice)), $days_section.hasClass("zero") && $days_section.removeClass("zero").next().removeClass("zero")), 0 == days && 0 == hours ? $hours_section.hasClass("zero") || timer.find(".hours > .value").html("00").parent(".section").addClass("zero").next().addClass("zero") : (timer.find(".hours > .value").html(("0" + hours).slice(-2)), $hours_section.hasClass("zero") && $hours_section.removeClass("zero").next().removeClass("zero")), 0 == days && 0 == hours && 0 == minutes ? $minutes_section.hasClass("zero") || timer.find(".minutes > .value").html("00").parent(".section").addClass("zero").next().addClass("zero") : (timer.find(".minutes > .value").html(("0" + minutes).slice(-2)), $minutes_section.hasClass("zero") && $minutes_section.removeClass("zero").next().removeClass("zero")), 0 == days && 0 == hours && 0 == minutes && 0 == seconds ? $seconds_section.hasClass("zero") || timer.find(".seconds > .value").html("00").parent(".section").addClass("zero") : (timer.find(".seconds > .value").html(("0" + seconds).slice(-2)), $seconds_section.hasClass("zero") && $seconds_section.removeClass("zero").next().removeClass("zero"))
                }, window.et_countdown_timer_labels = function(timer) {
                    timer.closest(".et_pb_column_3_8").length || timer.closest(".et_pb_column_1_4").length || timer.children(".et_pb_countdown_timer_container").width() <= 400 ? (timer.find(".days .label").html(timer.find(".days").data("short")), timer.find(".hours .label").html(timer.find(".hours").data("short")), timer.find(".minutes .label").html(timer.find(".minutes").data("short")), timer.find(".seconds .label").html(timer.find(".seconds").data("short"))) : (timer.find(".days .label").html(timer.find(".days").data("full")), timer.find(".hours .label").html(timer.find(".hours").data("full")), timer.find(".minutes .label").html(timer.find(".minutes").data("full")), timer.find(".seconds .label").html(timer.find(".seconds").data("full")))
                }, ($et_pb_countdown_timer.length || is_frontend_builder) && (window.et_pb_countdown_timer_init = function($et_pb_countdown_timer) {
                    $et_pb_countdown_timer.each(function() {
                        var timer = $(this);
                        et_countdown_timer_labels(timer), et_countdown_timer(timer), setInterval(function() {
                            et_countdown_timer(timer)
                        }, 1e3)
                    })
                }, et_pb_countdown_timer_init($et_pb_countdown_timer)), ($et_pb_tabs.length || is_frontend_builder) && (window.et_pb_tabs_init = function($et_pb_tabs) {
                    var $et_pb_tabs_li = $et_pb_tabs.find(".et_pb_tabs_controls li");
                    $et_pb_tabs.et_pb_simple_slider({
                        use_controls: !1,
                        use_arrows: !1,
                        slide: ".et_pb_all_tabs > div",
                        tabs_animation: !0
                    }).on("et_hashchange", function(event) {
                        var params = event.params,
                            $the_tabs = $("#" + event.target.id),
                            active_tab = params[0];
                        $the_tabs.find(".et_pb_tabs_controls li").eq(active_tab).hasClass("et_pb_tab_active") || $the_tabs.find(".et_pb_tabs_controls li").eq(active_tab).click()
                    }), $et_pb_tabs_li.click(function() {
                        var $this_el = $(this),
                            $tabs_container = $this_el.closest(".et_pb_tabs").data("et_pb_simple_slider");
                        if ($tabs_container.et_animation_running) return !1;
                        if ($this_el.addClass("et_pb_tab_active").siblings().removeClass("et_pb_tab_active"), $tabs_container.data("et_pb_simple_slider").et_slider_move_to($this_el.index()), $this_el.closest(".et_pb_tabs").attr("id")) {
                            var tab_state = [];
                            tab_state.push($this_el.closest(".et_pb_tabs").attr("id")), tab_state.push($this_el.index()), et_set_hash(tab_state = tab_state.join(et_hash_module_param_seperator))
                        }
                        return !1
                    }), window.et_pb_set_tabs_height()
                }, window.et_pb_tabs_init($et_pb_tabs)), ($et_pb_map.length || is_frontend_builder) && (window.et_pb_map_init = function($this_map_container) {
                    if ("undefined" != typeof google && void 0 !== google.maps) {
                        var infowindow_active, $this_map = $this_map_container.children(".et_pb_map"),
                            this_map_grayscale = $this_map_container.attr("data-grayscale") || 0,
                            is_draggable = et_is_mobile_device && "off" !== $this_map.data("mobile-dragging") || !et_is_mobile_device;
                        0 !== this_map_grayscale && (this_map_grayscale = "-" + this_map_grayscale.toString()), $this_map_container.data("map", new google.maps.Map($this_map[0], {
                            zoom: parseInt($this_map.attr("data-zoom")),
                            center: new google.maps.LatLng(parseFloat($this_map.attr("data-center-lat")), parseFloat($this_map.attr("data-center-lng"))),
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            scrollwheel: "on" == $this_map.attr("data-mouse-wheel"),
                            draggable: is_draggable,
                            panControlOptions: {
                                position: $this_map_container.is(".et_beneath_transparent_nav") ? google.maps.ControlPosition.LEFT_BOTTOM : google.maps.ControlPosition.LEFT_TOP
                            },
                            zoomControlOptions: {
                                position: $this_map_container.is(".et_beneath_transparent_nav") ? google.maps.ControlPosition.LEFT_BOTTOM : google.maps.ControlPosition.LEFT_TOP
                            },
                            styles: [{
                                stylers: [{
                                    saturation: parseInt(this_map_grayscale)
                                }]
                            }]
                        })), $this_map_container.find(".et_pb_map_pin").each(function() {
                            var $this_marker = $(this),
                                marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(parseFloat($this_marker.attr("data-lat")), parseFloat($this_marker.attr("data-lng"))),
                                    map: $this_map_container.data("map"),
                                    title: $this_marker.attr("data-title"),
                                    icon: {
                                        url: et_pb_custom.builder_images_uri + "/marker.png",
                                        size: new google.maps.Size(46, 43),
                                        anchor: new google.maps.Point(16, 43)
                                    },
                                    shape: {
                                        coord: [1, 1, 46, 43],
                                        type: "rect"
                                    },
                                    anchorPoint: new google.maps.Point(0, -45)
                                });
                            if ($this_marker.find(".infowindow").length) {
                                var infowindow = new google.maps.InfoWindow({
                                    content: $this_marker.html()
                                });
                                google.maps.event.addListener($this_map_container.data("map"), "click", function() {
                                    infowindow.close()
                                }), google.maps.event.addListener(marker, "click", function() {
                                    infowindow_active && infowindow_active.close(), infowindow_active = infowindow, infowindow.open($this_map_container.data("map"), marker)
                                })
                            }
                        })
                    }
                }, window.et_load_event_fired ? et_pb_init_maps() : "undefined" != typeof google && void 0 !== google.maps && google.maps.event.addDomListener(window, "load", function() {
                    et_pb_init_maps()
                })), $et_pb_shop.length && $et_pb_shop.each(function() {
                    var $this_el = $(this),
                        icon = $this_el.data("icon") || "";
                    if ("" === icon) return !0;
                    $this_el.find(".et_overlay").attr("data-icon", icon).addClass("et_pb_inline_icon")
                }), $et_pb_background_layout_hoverable.each(function() {
                    var $this_el = $(this),
                        background_layout = $this_el.data("background-layout"),
                        background_layout_hover = $this_el.data("background-layout-hover");
                    $this_el.hasClass("et_pb_button_module_wrapper") && ($this_el = $this_el.find("> .et_pb_button")), $this_el.on("mouseenter", function() {
                        $this_el.removeClass("et_pb_bg_layout_light et_pb_bg_layout_dark et_pb_text_color_dark"), $this_el.addClass("et_pb_bg_layout_" + background_layout_hover), $this_el.hasClass("et_pb_audio_module") && "light" === background_layout_hover && $this_el.addClass("et_pb_text_color_dark")
                    }), $this_el.on("mouseleave", function() {
                        $this_el.removeClass("et_pb_bg_layout_light et_pb_bg_layout_dark et_pb_text_color_dark"), $this_el.addClass("et_pb_bg_layout_" + background_layout), $this_el.hasClass("et_pb_audio_module") && "light" === background_layout && $this_el.addClass("et_pb_text_color_dark")
                    })
                }), ($et_pb_circle_counter.length || is_frontend_builder || $(".et_pb_ajax_pagination_container").length > 0) && (window.et_pb_circle_counter_init = function($the_counter, animate) {
                    $the_counter.width() <= 0 || $the_counter.easyPieChart({
                        animate: {
                            duration: 1800,
                            enabled: !0
                        },
                        size: 0 !== $the_counter.width() ? $the_counter.width() : 10,
                        barColor: $the_counter.data("bar-bg-color"),
                        trackColor: $the_counter.data("color") || "#000000",
                        trackAlpha: $the_counter.data("alpha") || "0.1",
                        scaleColor: !1,
                        lineWidth: 5,
                        onStart: function() {
                            $(this.el).find(".percent p").css({
                                visibility: "visible"
                            })
                        },
                        onStep: function(from, to, percent) {
                            $(this.el).find(".percent-value").text(Math.round(parseInt(percent)))
                        },
                        onStop: function(from, to) {
                            $(this.el).find(".percent-value").text($(this.el).data("number-value"))
                        }
                    })
                }, window.et_pb_reinit_circle_counters = function($et_pb_circle_counter) {
                    $et_pb_circle_counter.each(function() {
                        var $the_counter = $(this).find(".et_pb_circle_counter_inner");
                        window.et_pb_circle_counter_init($the_counter, !1), $the_counter.on("containerWidthChanged", function(event) {
                            ($the_counter = $(event.target)).find("canvas").remove(), $the_counter.removeData("easyPieChart"), window.et_pb_circle_counter_init($the_counter, !0)
                        })
                    })
                }, window.et_pb_reinit_circle_counters($et_pb_circle_counter)), ($et_pb_number_counter.length || is_frontend_builder || $(".et_pb_ajax_pagination_container").length > 0) && (window.et_pb_reinit_number_counters = function($et_pb_number_counter) {
                    function et_format_number(number_value, separator) {
                        return number_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
                    }
                    var is_firefox = $("body").hasClass("gecko");
                    $.fn.fitText && $et_pb_number_counter.find(".percent p").fitText(.3), $et_pb_number_counter.each(function() {
                        var $this_counter = $(this),
                            separator = $this_counter.data("number-separator");
                        $this_counter.easyPieChart({
                            animate: {
                                duration: 1800,
                                enabled: !0
                            },
                            size: is_firefox ? 1 : 0,
                            trackColor: !1,
                            scaleColor: !1,
                            lineWidth: 0,
                            onStart: function() {
                                $(this.el).addClass("active")
                            },
                            onStep: function(from, to, percent) {
                                percent != to && $(this.el).find(".percent-value").text(et_format_number(Math.round(parseInt(percent)), separator))
                            },
                            onStop: function(from, to) {
                                $(this.el).find(".percent-value").text(et_format_number($(this.el).data("number-value"), separator))
                            }
                        })
                    })
                }, window.et_pb_reinit_number_counters($et_pb_number_counter)), window.et_apply_parallax = function() {
                    if ($(this).length && void 0 !== $(this) && void 0 !== $(this).offset()) {
                        var main_position, $parallaxWindow = isScrollOnAppWindow() ? $(window) : $et_top_window,
                            $this = $(this),
                            element_top = isBuilderModeZoom() ? $this.offset().top / 2 : $this.offset().top;
                        main_position = "translate(0, " + .3 * ($parallaxWindow.scrollTop() + $et_top_window.height() - element_top) + "px)", $this.children(".et_parallax_bg").css({
                            "-webkit-transform": main_position,
                            "-moz-transform": main_position,
                            "-ms-transform": main_position,
                            transform: main_position
                        })
                    }
                }, window.et_parallax_set_height = function() {
                    var $this = $(this),
                        parallaxHeight = isBuilder && $this.parent(".et_pb_fullscreen").length && $et_top_window.height() > $this.innerHeight() ? $et_top_window.height() : $this.innerHeight(),
                        bg_height = .3 * $et_top_window.height() + parallaxHeight;
                    isBFB && (bg_height += window.top.jQuery("#et_pb_layout .inside").offset().top), $this.find(".et_parallax_bg").css({
                        height: bg_height
                    })
                }, window.et_apply_builder_css_parallax = function() {
                    if (isBuilder) {
                        var $this_parent = $(this),
                            $this_parallax = $this_parent.children(".et_parallax_bg");
                        if ($this_parallax.css({
                                width: "",
                                height: "",
                                top: "",
                                left: "",
                                backgroundAttachment: ""
                            }), !isScrollOnAppWindow()) {
                            var topWindow = isBuilder ? window.top : window,
                                backgroundOffset = isBFB ? topWindow.jQuery("#et_pb_layout .inside").offset().top : 0,
                                heightMultiplier = isBuilderModeZoom() ? 2 : 1,
                                parentOffset = $this_parent.offset(),
                                parentOffsetTop = isBuilderModeZoom() ? parentOffset.top / 2 : parentOffset.top;
                            $this_parallax.css({
                                width: $(window).width(),
                                height: $et_top_window.innerHeight() * heightMultiplier,
                                top: $et_top_window.scrollTop() - backgroundOffset - parentOffsetTop,
                                left: 0 - parentOffset.left,
                                backgroundAttachment: "scroll"
                            })
                        }
                    }
                }, $("body").on("click", ".et_pb_toggle_title, .et_fb_toggle_overlay", function() {
                    var $accordion_active_toggle, module_offset, $module = $(this).closest(".et_pb_toggle"),
                        $section = $module.parents(".et_pb_section"),
                        $content = $module.find(".et_pb_toggle_content"),
                        $accordion = $module.closest(".et_pb_accordion"),
                        is_accordion = $accordion.length,
                        is_accordion_toggling = $accordion.hasClass("et_pb_accordion_toggling"),
                        window_offset_top = $(window).scrollTop(),
                        fixed_header_height = 0,
                        initial_toggle_state = $module.hasClass("et_pb_toggle_close") ? "closed" : "opened";
                    if (is_accordion) {
                        if ($module.hasClass("et_pb_toggle_open") || is_accordion_toggling) return !1;
                        $accordion.addClass("et_pb_accordion_toggling"), $accordion_active_toggle = $module.siblings(".et_pb_toggle_open")
                    }
                    $content.is(":animated") || ($content.slideToggle(700, function() {
                        et_toggle_animation_callback(initial_toggle_state, $module, $section)
                    }), is_accordion && $accordion_active_toggle.find(".et_pb_toggle_content").slideToggle(700, function() {
                        $accordion_active_toggle.removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close"), $accordion.removeClass("et_pb_accordion_toggling"), module_offset = $module.offset(), $("#wpadminbar").length && (fixed_header_height += $("#wpadminbar").height()), $("#top-header").length && (fixed_header_height += $("#top-header").height()), $("#main-header").length && !window.et_is_vertical_nav && (fixed_header_height += $("#main-header").height()), window_offset_top + fixed_header_height > module_offset.top && $("html, body").animate({
                            scrollTop: module_offset.top - fixed_header_height - 50
                        })
                    }))
                });
                var et_email_reg_html5 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    $et_contact_container = $(".et_pb_contact_form_container");
                $et_contact_container.length && $et_contact_container.each(function() {
                    var $this_contact_container = $(this),
                        $et_contact_form = $this_contact_container.find("form"),
                        redirect_url = void 0 !== $this_contact_container.data("redirect_url") ? $this_contact_container.data("redirect_url") : "";
                    $et_contact_form.find("input[type=checkbox]").on("change", function() {
                        var $checkbox = $(this),
                            $checkbox_field = $checkbox.siblings("input[type=text]:first"),
                            is_checked = $checkbox.prop("checked");
                        $checkbox_field.val(is_checked ? $checkbox_field.data("checked") : $checkbox_field.data("unchecked"))
                    }), $et_contact_form.submit(function(event) {
                        event.preventDefault();
                        var $this_contact_form = $(this);
                        if (!0 !== $this_contact_form.data("submitted")) {
                            var $this_inputs = $this_contact_form.find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select'),
                                $captcha_field = $this_contact_form.find(".et_pb_contact_captcha"),
                                $et_contact_message = $this_contact_container.find(".et-pb-contact-message"),
                                form_unique_id = void 0 !== $this_contact_container.data("form_unique_num") ? $this_contact_container.data("form_unique_num") : 0,
                                this_et_contact_error = !1,
                                et_message = "",
                                et_fields_message = "",
                                inputs_list = [],
                                hidden_fields = [];
                            if (et_message = "<ul>", $this_inputs.removeClass("et_contact_error"), $this_inputs.each(function() {
                                    var $this_el = $(this),
                                        $this_wrapper = !1;
                                    "checkbox" === $this_el.data("field_type") && ($this_wrapper = $this_el.parents(".et_pb_contact_field")).removeClass("et_contact_error"), "radio" === $this_el.data("type") && ($this_wrapper = ($this_el = $this_el.find('input[type="radio"]')).parents(".et_pb_contact_field"));
                                    var default_value, this_id = $this_el.attr("id"),
                                        this_val = $this_el.val(),
                                        this_label = $this_el.siblings("label:first").text(),
                                        field_type = void 0 !== $this_el.data("field_type") ? $this_el.data("field_type") : "text",
                                        required_mark = void 0 !== $this_el.data("required_mark") ? $this_el.data("required_mark") : "not_required",
                                        original_id = void 0 !== $this_el.data("original_id") ? $this_el.data("original_id") : "",
                                        unchecked = !1;
                                    if ("radio" === field_type) {
                                        if (0 !== $this_wrapper.find('input[type="radio"]').length) {
                                            field_type = "radio";
                                            var $firstRadio = $this_wrapper.find('input[type="radio"]:first');
                                            required_mark = void 0 !== $firstRadio.data("required_mark") ? $firstRadio.data("required_mark") : "not_required", this_val = "", $this_wrapper.find('input[type="radio"]:checked') && (this_val = $this_wrapper.find('input[type="radio"]:checked').val())
                                        }
                                        this_label = $this_wrapper.find(".et_pb_contact_form_label").text(), this_id = $this_wrapper.find('input[type="radio"]:first').attr("name"), original_id = $this_wrapper.attr("data-id"), 0 === $this_wrapper.find('input[type="radio"]:checked').length && (unchecked = !0)
                                    }
                                    if ("checkbox" === field_type) {
                                        if (this_val = "", 0 !== $this_wrapper.find('input[type="checkbox"]').length) {
                                            field_type = "checkbox";
                                            var $checkboxHandle = $this_wrapper.find(".et_pb_checkbox_handle");
                                            required_mark = void 0 !== $checkboxHandle.data("required_mark") ? $checkboxHandle.data("required_mark") : "not_required", $this_wrapper.find('input[type="checked"]:checked') && (this_val = [], $this_wrapper.find('input[type="checkbox"]:checked').each(function() {
                                                this_val.push($(this).val())
                                            }), this_val = this_val.join(", "))
                                        }
                                        $this_wrapper.find(".et_pb_checkbox_handle").val(this_val), this_label = $this_wrapper.find(".et_pb_contact_form_label").text(), this_id = $this_wrapper.find(".et_pb_checkbox_handle").attr("name"), original_id = $this_wrapper.attr("data-id"), 0 === $this_wrapper.find('input[type="checkbox"]:checked').length && (unchecked = !0)
                                    }
                                    if (this_label = this_label.replace(/"/g, "&quot;"), $this_el.is(":visible") || "hidden" === $this_el.attr("type") || "radio" === $this_el.attr("type"))
                                        if ("hidden" !== $this_el.attr("type") && "radio" !== $this_el.attr("type") || $this_el.parents(".et_pb_contact_field").is(":visible")) {
                                            if (void 0 !== this_id && inputs_list.push({
                                                    field_id: this_id,
                                                    original_id: original_id,
                                                    required_mark: required_mark,
                                                    field_type: field_type,
                                                    field_label: this_label
                                                }), "required" !== required_mark || "" !== this_val && !0 !== unchecked || (!1 === $this_wrapper ? $this_el.addClass("et_contact_error") : $this_wrapper.addClass("et_contact_error"), this_et_contact_error = !0, "" === (default_value = this_label) && (default_value = et_pb_custom.captcha), et_fields_message += "<li>" + default_value + "</li>"), "email" === field_type) {
                                                var processed_email = this_val.trim().toLowerCase(),
                                                    is_valid_email = et_email_reg_html5.test(processed_email);
                                                "" === processed_email || this_label === processed_email || is_valid_email || ($this_el.addClass("et_contact_error"), this_et_contact_error = !0, is_valid_email || (et_message += "<li>" + et_pb_custom.invalid + "</li>"))
                                            }
                                        } else hidden_fields.push(original_id);
                                    else hidden_fields.push(original_id)
                                }), $captcha_field.length && "" !== $captcha_field.val()) {
                                var first_digit = parseInt($captcha_field.data("first_digit")),
                                    second_digit = parseInt($captcha_field.data("second_digit"));
                                parseInt($captcha_field.val()) !== first_digit + second_digit && (et_message += "<li>" + et_pb_custom.wrong_captcha + "</li>", this_et_contact_error = !0, first_digit = Math.floor(15 * Math.random() + 1), second_digit = Math.floor(15 * Math.random() + 1), $captcha_field.data("first_digit", first_digit), $captcha_field.data("second_digit", second_digit), $this_contact_form.find(".et_pb_contact_captcha_question").empty().append(first_digit + " + " + second_digit))
                            }
                            if (!this_et_contact_error) {
                                $this_contact_form.data("submitted", !0);
                                var $href = $(this).attr("action"),
                                    form_data = $(this).serializeArray();
                                form_data.push({
                                    name: "et_pb_contact_email_fields_" + form_unique_id,
                                    value: JSON.stringify(inputs_list)
                                }), hidden_fields.length > 0 && form_data.push({
                                    name: "et_pb_contact_email_hidden_fields_" + form_unique_id,
                                    value: JSON.stringify(hidden_fields)
                                }), $this_contact_container.removeClass("et_animated").removeAttr("style").fadeTo("fast", .2, function() {
                                    $this_contact_container.load($href + " #" + $this_contact_container.attr("id") + "> *", form_data, function(responseText) {
                                        $(responseText).find(".et_pb_contact_error_text").length || (et_pb_maybe_log_event($this_contact_container, "con_goal"), "" !== redirect_url && (window.location.href = redirect_url)), $this_contact_container.fadeTo("fast", 1)
                                    })
                                })
                            }
                            et_message += "</ul>", "" !== et_fields_message && ("<ul></ul>" !== et_message && (et_message = '<p class="et_normal_padding">' + et_pb_custom.contact_error_message + "</p>" + et_message), et_fields_message = "<ul>" + et_fields_message + "</ul>", et_fields_message = "<p>" + et_pb_custom.fill_message + "</p>" + et_fields_message, et_message = et_fields_message + et_message), "<ul></ul>" !== et_message && ($et_contact_message.html(et_message), $this_contact_container.parents(".et_pb_section_parallax").length && $this_contact_container.parents(".et_pb_section_parallax").each(function() {
                                !$(this).children(".et_parallax_bg").hasClass("et_pb_parallax_css") && $et_window.trigger("resize")
                            }))
                        }
                    })
                }), window.et_pb_play_overlayed_video = function($play_video) {
                    var video_iframe_src, video_iframe_src_splitted, video_iframe_src_autoplay, $this = $play_video,
                        $video_image = $this.closest(".et_pb_video_overlay"),
                        $wrapper = $this.closest(".et_pb_video, .et_main_video_container, .et_pb_video_wrap"),
                        $video_iframe = $wrapper.find("iframe"),
                        is_embedded = $video_iframe.length > 0,
                        is_fb_video = $wrapper.find(".fb-video").length;
                    if (is_embedded) {
                        if (is_fb_video && void 0 !== $video_iframe[2] && ($video_iframe = $($video_iframe[2])), video_iframe_src = $video_iframe.attr("src"), video_iframe_src_splitted = video_iframe_src.split("?"), -1 !== video_iframe_src.indexOf("autoplay=")) return;
                        video_iframe_src_autoplay = void 0 !== video_iframe_src_splitted[1] ? video_iframe_src_splitted[0] + "?autoplay=1&amp;" + video_iframe_src_splitted[1] : video_iframe_src_splitted[0] + "?autoplay=1", $video_iframe.attr({
                            src: video_iframe_src_autoplay
                        })
                    } else $wrapper.find("video").get(0).play();
                    $video_image.fadeTo(500, 0, function() {
                        $(this).css("display", "none")
                    })
                }, $(".et_pb_post .et_pb_video_overlay, .et_pb_video .et_pb_video_overlay, .et_pb_video_wrap .et_pb_video_overlay").click(function() {
                    var $this = $(this);
                    return et_pb_play_overlayed_video($this), !1
                }), window.et_pb_resize_section_video_bg = function($video) {
                    $element = void 0 !== $video ? $video.closest(".et_pb_section_video_bg") : $(".et_pb_section_video_bg"), $element.each(function() {
                        var $this_el = $(this);
                        is_frontend_builder && ($this_el.removeAttr("data-ratio"), $this_el.find("video").removeAttr("style"));
                        var width, height, el_ratio = parseFloat($this_el.attr("data-ratio")),
                            el_width = parseInt($this_el.find("video").attr("width") || $this_el.find("video").width()),
                            el_height = parseInt($this_el.find("video").attr("height") || $this_el.find("video").height()),
                            ratio = isNaN(el_ratio) ? el_width / el_height : el_ratio,
                            $video_elements = $this_el.find(".mejs-video, video, object").css("margin", 0),
                            $container = $this_el.closest(".et_pb_section_video").length ? $this_el.closest(".et_pb_section_video") : $this_el.closest(".et_pb_slides"),
                            body_width = $container.innerWidth(),
                            container_height = $container.innerHeight();
                        void 0 !== $this_el.attr("data-ratio") || isNaN(ratio) || $this_el.attr("data-ratio", ratio), body_width / container_height < ratio ? (width = container_height * ratio, height = container_height) : (width = body_width, height = body_width / ratio), $video_elements.width(width).height(height), is_frontend_builder && setTimeout(function() {
                            $video_elements.width(width).height(height)
                        }, 0)
                    })
                }, window.et_pb_center_video = function($video) {
                    $element = void 0 !== $video ? $video : $(".et_pb_section_video_bg .mejs-video"), $element.length && $element.each(function() {
                        var $this_el = $(this);
                        if (et_pb_adjust_video_margin($this_el), is_frontend_builder && setTimeout(function() {
                                et_pb_adjust_video_margin($this_el)
                            }, 0), void 0 !== $video && $video.closest(".et_pb_slider").length && !$video.closest(".et_pb_first_video").length) return !1
                    })
                }, window.et_pb_adjust_video_margin = function($el) {
                    var $video_width_negative = 0 - $el.width() / 2;
                    $el.css("margin-left", $video_width_negative)
                };
                var debounced_et_fix_slider_height = {};
                window.et_fix_slider_height = is_frontend_builder ? function($slider) {
                    var $this_slider = $slider || $et_pb_slider;
                    if ($this_slider && $this_slider.length) {
                        var address = $this_slider.data("address");
                        debounced_et_fix_slider_height[address] || (debounced_et_fix_slider_height[address] = window.et_pb_debounce(et_fix_slider_height, 100)), debounced_et_fix_slider_height[address]($slider)
                    }
                } : et_fix_slider_height, et_fix_nav_direction(), et_pb_form_placeholders_init($(".et_pb_comments_module #commentform")), $(".et_pb_fullwidth_menu ul.nav").each(function(i) {
                    i++, et_duplicate_menu($(this), $(this).parents(".et_pb_row").find("div .mobile_nav"), "mobile_menu" + i, "et_mobile_menu")
                }), $(".et_pb_fullwidth_menu").each(function() {
                    var this_menu = $(this),
                        bg_color = this_menu.data("bg_color");
                    bg_color && this_menu.find("ul").css({
                        "background-color": bg_color
                    })
                }), $et_pb_newsletter_button.click(function(event) {
                    et_pb_submit_newsletter($(this), event)
                }), $et_pb_newsletter_button.closest(".et_pb_newsletter").find("input[type=checkbox]").on("change", function() {
                    var $checkbox = $(this),
                        $checkbox_field = $checkbox.siblings("input[type=text]:first"),
                        is_checked = $checkbox.prop("checked");
                    $checkbox_field.val(is_checked ? $checkbox_field.data("checked") : $checkbox_field.data("unchecked"))
                }), window.et_pb_submit_newsletter = function($submit, event) {
                    function get_redirect_query() {
                        var query = {};
                        return redirect_query ? ($name.length > 0 && redirect_query.indexOf("name") > -1 && (query.first_name = $name.val()), $lastname.length > 0 && redirect_query.indexOf("last_name") > -1 && (query.last_name = $lastname.val()), redirect_query.indexOf("email") > -1 && (query.email = $email.val()), redirect_query.indexOf("ip_address") > -1 && (query.ip_address = $newsletter_container.data("ip_address")), redirect_query.indexOf("css_id") > -1 && (query.form_id = $newsletter_container.attr("id")), decodeURIComponent($.param(query))) : ""
                    }
                    if ($submit.closest(".et_pb_login_form").length) et_pb_maybe_log_event($submit.closest(".et_pb_newsletter"), "con_goal");
                    else {
                        if (void 0 !== event && event.preventDefault(), $(".et_pb_feedburner_form").length > 0) return $feed_name = $(".et_pb_feedburner_form input[name=uri]").val(), window.open("https://feedburner.google.com/fb/a/mailverify?uri=" + $feed_name, "et-feedburner-subscribe", "scrollbars=yes,width=550,height=520"), !0;
                        var $newsletter_container = $submit.closest(".et_pb_newsletter"),
                            $name = $newsletter_container.find('input[name="et_pb_signup_firstname"]'),
                            $lastname = $newsletter_container.find('input[name="et_pb_signup_lastname"]'),
                            $email = $newsletter_container.find('input[name="et_pb_signup_email"]'),
                            list_id = $newsletter_container.find('input[name="et_pb_signup_list_id"]').val(),
                            $error_message = $newsletter_container.find(".et_pb_newsletter_error").hide(),
                            provider = $newsletter_container.find('input[name="et_pb_signup_provider"]').val(),
                            account = $newsletter_container.find('input[name="et_pb_signup_account_name"]').val(),
                            ip_address = $newsletter_container.find('input[name="et_pb_signup_ip_address"]').val(),
                            $fields_container = $newsletter_container.find(".et_pb_newsletter_fields"),
                            $success_message = $newsletter_container.find(".et_pb_newsletter_success"),
                            redirect_url = $newsletter_container.data("redirect_url"),
                            redirect_query = $newsletter_container.data("redirect_query"),
                            custom_fields = {},
                            hidden_fields = [],
                            et_message = "<ul>",
                            et_fields_message = "",
                            $custom_fields = $fields_container.find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select').filter(".et_pb_signup_custom_field, .et_pb_signup_custom_field *");
                        $name.removeClass("et_pb_signup_error"), $lastname.removeClass("et_pb_signup_error"), $email.removeClass("et_pb_signup_error"), $custom_fields.removeClass("et_contact_error"), $error_message.html("");
                        var is_valid = !0,
                            form = $submit.closest(".et_pb_newsletter_form form");
                        if (form.length > 0 && "function" == typeof form[0].reportValidity && (is_valid = form[0].reportValidity()), $name.length > 0 && !$name.val() && ($name.addClass("et_pb_signup_error"), is_valid = !1), $lastname.length > 0 && !$lastname.val() && ($lastname.addClass("et_pb_signup_error"), is_valid = !1), et_email_reg_html5.test($email.val()) || ($email.addClass("et_pb_signup_error"), is_valid = !1), is_valid) {
                            if ($custom_fields.each(function() {
                                    var $this_el = $(this),
                                        $this_wrapper = !1;
                                    "checkbox" === $this_el.data("field_type") && ($this_wrapper = $this_el.parents(".et_pb_contact_field")).removeClass("et_contact_error"), "radio" === $this_el.data("type") && ($this_wrapper = ($this_el = $this_el.find('input[type="radio"]')).parents(".et_pb_contact_field"));
                                    var default_value, this_id = $this_el.data("id"),
                                        this_val = $this_el.val(),
                                        this_label = $this_el.siblings("label:first").text(),
                                        field_type = void 0 !== $this_el.data("field_type") ? $this_el.data("field_type") : "text",
                                        required_mark = void 0 !== $this_el.data("required_mark") ? $this_el.data("required_mark") : "not_required",
                                        original_id = void 0 !== $this_el.data("original_id") ? $this_el.data("original_id") : "",
                                        unchecked = !1;
                                    if (this_id || (this_id = $this_el.data("original_id")), "radio" === field_type) {
                                        if (0 !== $this_wrapper.find('input[type="radio"]').length) {
                                            var $firstRadio = $this_wrapper.find('input[type="radio"]:first');
                                            required_mark = void 0 !== $firstRadio.data("required_mark") ? $firstRadio.data("required_mark") : "not_required", this_val = "", $this_wrapper.find('input[type="radio"]:checked') && (this_val = $this_wrapper.find('input[type="radio"]:checked').val())
                                        }
                                        this_label = $this_wrapper.find(".et_pb_contact_form_label").text(), this_id = $this_el.data("original_id"), $.isEmptyObject(this_val) || (custom_fields[this_id] = this_val), 0 === $this_wrapper.find('input[type="radio"]:checked').length && (unchecked = !0), this_val && (custom_fields[this_id] = this_val)
                                    } else if ("checkbox" === field_type) {
                                        if (this_val = {}, 0 !== $this_wrapper.find('input[type="checkbox"]').length) {
                                            var $checkboxHandle = $this_wrapper.find(".et_pb_checkbox_handle");
                                            required_mark = void 0 !== $checkboxHandle.data("required_mark") ? $checkboxHandle.data("required_mark") : "not_required", $this_wrapper.find('input[type="checked"]:checked') && $this_wrapper.find('input[type="checkbox"]:checked').each(function() {
                                                var field_id = $(this).data("id");
                                                this_val[field_id] = $(this).val()
                                            })
                                        }
                                        this_label = $this_wrapper.find(".et_pb_contact_form_label").text(), this_id = $this_wrapper.attr("data-id"), $.isEmptyObject(this_val) || (custom_fields[this_id] = this_val), 0 === $this_wrapper.find('input[type="checkbox"]:checked').length && (unchecked = !0)
                                    } else if ("ontraport" === provider && "select" === field_type) {
                                        var $selected_option = $this_el.find(":selected");
                                        custom_fields[this_id] = $selected_option.length > 0 ? $selected_option.data("id") : this_val
                                    } else custom_fields[this_id] = this_val;
                                    if (this_label = this_label.replace(/"/g, "&quot;"), $this_el.is(":visible") || "hidden" === $this_el.attr("type") || "radio" === $this_el.attr("type"))
                                        if ("hidden" !== $this_el.attr("type") && "radio" !== $this_el.attr("type") || $this_el.parents(".et_pb_contact_field").is(":visible")) {
                                            if ("required" !== required_mark || "" !== this_val && !0 !== unchecked || (!1 === $this_wrapper ? $this_el.addClass("et_contact_error") : $this_wrapper.addClass("et_contact_error"), is_valid = !1, "" === (default_value = this_label) && (default_value = et_pb_custom.captcha), et_fields_message += "<li>" + default_value + "</li>"), "email" === field_type) {
                                                var processed_email = this_val.trim().toLowerCase(),
                                                    is_valid_email = et_email_reg_html5.test(processed_email);
                                                "" === processed_email || this_label === processed_email || is_valid_email || ($this_el.addClass("et_contact_error"), is_valid = !1, is_valid_email || (et_message += "<li>" + et_pb_custom.invalid + "</li>"))
                                            }
                                        } else hidden_fields.push(this_id);
                                    else hidden_fields.push(original_id)
                                }), et_message += "</ul>", "" !== et_fields_message && ("<ul></ul>" !== et_message && (et_message = '<p class="et_normal_padding">' + et_pb_custom.contact_error_message + "</p>" + et_message), et_fields_message = "<ul>" + et_fields_message + "</ul>", et_fields_message = "<p>" + et_pb_custom.fill_message + "</p>" + et_fields_message, et_message = et_fields_message + et_message), "<ul></ul>" !== et_message) return $error_message.html(et_message).show(), void($newsletter_container.parents(".et_pb_section_parallax").length && $newsletter_container.parents(".et_pb_section_parallax").each(function() {
                                !$(this).children(".et_parallax_bg").hasClass("et_pb_parallax_css") && $et_window.trigger("resize")
                            }));
                            $.ajax({
                                type: "POST",
                                url: et_pb_custom.ajaxurl,
                                dataType: "json",
                                data: {
                                    action: "et_pb_submit_subscribe_form",
                                    et_frontend_nonce: et_pb_custom.et_frontend_nonce,
                                    et_list_id: list_id,
                                    et_firstname: $name.val(),
                                    et_lastname: $lastname.val(),
                                    et_email: $email.val(),
                                    et_provider: provider,
                                    et_account: account,
                                    et_ip_address: ip_address,
                                    et_custom_fields: custom_fields,
                                    et_hidden_fields: hidden_fields
                                },
                                beforeSend: function() {
                                    $newsletter_container.find(".et_pb_newsletter_button").addClass("et_pb_button_text_loading").find(".et_subscribe_loader").show()
                                },
                                complete: function() {
                                    $newsletter_container.find(".et_pb_newsletter_button").removeClass("et_pb_button_text_loading").find(".et_subscribe_loader").hide()
                                },
                                success: function(data) {
                                    data ? (data.error && $error_message.show().append("<h2>").text(data.error), data.success && (redirect_url ? et_pb_maybe_log_event($newsletter_container, "con_goal", function() {
                                        var query = get_redirect_query();
                                        query.length && (redirect_url.indexOf("?") > -1 ? redirect_url += "&" : redirect_url += "?"), window.location = redirect_url + query
                                    }) : (et_pb_maybe_log_event($newsletter_container, "con_goal"), $newsletter_container.find(".et_pb_newsletter_fields").hide(), $success_message.show()))) : $error_message.html(et_pb_custom.subscription_failed).show()
                                }
                            })
                        }
                    }
                }, window.et_fix_testimonial_inner_width = function() {
                    var window_width = $(window).width();
                    window_width > 959 ? $(".et_pb_testimonial").each(function() {
                        if ($(this).is(":visible")) {
                            var $testimonial = $(this),
                                $portrait = $testimonial.find(".et_pb_testimonial_portrait"),
                                portrait_width = $portrait.outerWidth(!0),
                                $testimonial_descr = $testimonial.find(".et_pb_testimonial_description"),
                                $outer_column = $testimonial.closest(".et_pb_column");
                            portrait_width > 90 && ($portrait.css("padding-bottom", "0"), $portrait.width("90px"), $portrait.height("90px"));
                            var testimonial_indent = $outer_column.hasClass("et_pb_column_1_3") || $outer_column.hasClass("et_pb_column_1_4") || $outer_column.hasClass("et_pb_column_1_5") || $outer_column.hasClass("et_pb_column_1_6") || $outer_column.hasClass("et_pb_column_2_5") || $outer_column.hasClass("et_pb_column_3_8") ? 0 : portrait_width;
                            $testimonial_descr.css("margin-left", testimonial_indent)
                        }
                    }) : window_width > 767 ? $(".et_pb_testimonial").each(function() {
                        if ($(this).is(":visible")) {
                            var $testimonial = $(this),
                                portrait_width = $testimonial.find(".et_pb_testimonial_portrait").outerWidth(!0),
                                $testimonial_descr = $testimonial.find(".et_pb_testimonial_description"),
                                $outer_column = $testimonial.closest(".et_pb_column"),
                                testimonial_indent = $outer_column.hasClass("et_pb_column_1_4") || $outer_column.hasClass("et_pb_column_1_5") || $outer_column.hasClass("et_pb_column_1_6") || $outer_column.hasClass("et_pb_column_2_5") || $outer_column.hasClass("et_pb_column_3_8") ? 0 : portrait_width;
                            $testimonial_descr.css("margin-left", testimonial_indent)
                        }
                    }) : $(".et_pb_testimonial_description").removeAttr("style")
                }, window.et_fix_testimonial_inner_width(), window.et_pb_video_background_init = function($this_video_background, this_video_background) {
                    var $video_background_wrapper = $this_video_background.closest(".et_pb_section_video_bg"),
                        onplaying = !1,
                        onpause = !0;
                    this_video_background.onplaying = function() {
                        onplaying = !0, onpause = !1
                    }, this_video_background.onpause = function() {
                        onplaying = !1, onpause = !0
                    }, et_waypoint($video_background_wrapper, {
                        offset: "100%",
                        handler: function(direction) {
                            var is_play_outside_viewport = $video_background_wrapper.hasClass("et_pb_video_play_outside_viewport");
                            $this_video_background.is(":visible") && "down" === direction ? this_video_background.paused && !onplaying && this_video_background.play() : $this_video_background.is(":visible") && "up" === direction && (this_video_background.paused || onpause || is_play_outside_viewport || this_video_background.pause())
                        }
                    }, 2), et_waypoint($video_background_wrapper, {
                        offset: function() {
                            var video_height = this.element.clientHeight,
                                toggle_offset = Math.ceil(window.innerHeight / 2);
                            return video_height > toggle_offset && (toggle_offset = video_height), -1 * toggle_offset
                        },
                        handler: function(direction) {
                            var is_play_outside_viewport = $video_background_wrapper.hasClass("et_pb_video_play_outside_viewport");
                            $this_video_background.is(":visible") && "up" === direction ? this_video_background.paused && !onplaying && this_video_background.play() : $this_video_background.is(":visible") && "down" === direction && (this_video_background.paused || onpause || is_play_outside_viewport || this_video_background.pause())
                        }
                    }, 2)
                }, window.et_reinit_waypoint_modules = et_pb_debounce(function() {
                    var $et_pb_circle_counter = $(".et_pb_circle_counter"),
                        $et_pb_number_counter = $(".et_pb_number_counter"),
                        $et_pb_video_background = $(".et_pb_section_video_bg video");
                    if ($.fn.waypoint && "yes" !== et_pb_custom.ignore_waypoints && !is_frontend_builder) et_process_animation_data(!0), $(".et-waypoint").each(function() {
                        et_waypoint($(this), {
                            offset: et_get_offset($(this), "100%"),
                            handler: function() {
                                $(this.element).addClass("et-animated")
                            }
                        }, 2)
                    }), $et_pb_circle_counter.length && $et_pb_circle_counter.each(function() {
                        var $this_counter = $(this).find(".et_pb_circle_counter_inner");
                        $this_counter.is(":visible") && !et_has_animation_data($this_counter) && et_waypoint($this_counter, {
                            offset: et_get_offset($(this), "100%"),
                            handler: function() {
                                $this_counter.data("PieChartHasLoaded") || void 0 === $this_counter.data("easyPieChart") || ($this_counter.data("easyPieChart").update($this_counter.data("number-value")), $this_counter.data("PieChartHasLoaded", !0))
                            }
                        }, 2)
                    }), $et_pb_number_counter.length && $et_pb_number_counter.each(function() {
                        var $this_counter = $(this);
                        et_has_animation_data($this_counter) || et_waypoint($this_counter, {
                            offset: et_get_offset($(this), "100%"),
                            handler: function() {
                                $this_counter.data("easyPieChart").update($this_counter.data("number-value"))
                            }
                        })
                    }), $(".et_pb_ab_goal").length && !is_frontend_builder && et_waypoint($et_pb_ab_goal = $(".et_pb_ab_goal"), {
                        offset: et_get_offset($(this), "80%"),
                        handler: function() {
                            !et_pb_ab_logged_status.read_goal && $et_pb_ab_goal.length && $et_pb_ab_goal.visible(!0) && (setTimeout(function() {
                                $et_pb_ab_goal.length && $et_pb_ab_goal.visible(!0) && !et_pb_ab_logged_status.read_goal && et_pb_ab_update_stats("read_goal")
                            }, 3e3), et_pb_maybe_log_event($et_pb_ab_goal, "view_goal"))
                        }
                    });
                    else {
                        et_process_animation_data(!1);
                        var animated_class = is_frontend_builder ? "et-animated--vb" : "et-animated";
                        if ($(".et-waypoint").addClass(animated_class), $et_pb_circle_counter.length && $et_pb_circle_counter.each(function() {
                                var $this_counter = $(this).find(".et_pb_circle_counter_inner");
                                $this_counter.is(":visible") && ($this_counter.data("PieChartHasLoaded") || void 0 === $this_counter.data("easyPieChart") || ($this_counter.data("easyPieChart").update($this_counter.data("number-value")), $this_counter.data("PieChartHasLoaded", !0)))
                            }), $et_pb_number_counter.length && $et_pb_number_counter.each(function() {
                                var $this_counter = $(this);
                                $this_counter.data("easyPieChart").update($this_counter.data("number-value"))
                            }), $(".et_pb_ab_goal").length) {
                            var $et_pb_ab_goal = $(".et_pb_ab_goal");
                            if (et_pb_ab_logged_status.read_goal || !$et_pb_ab_goal.length || !$et_pb_ab_goal.visible(!0)) return;
                            setTimeout(function() {
                                $et_pb_ab_goal.length && $et_pb_ab_goal.visible(!0) && !et_pb_ab_logged_status.read_goal && et_pb_ab_update_stats("read_goal")
                            }, 3e3), et_pb_maybe_log_event($et_pb_ab_goal, "view_goal")
                        }
                    }
                    $et_pb_video_background.length && $et_pb_video_background.each(function() {
                        var $this_video_background = $(this);
                        et_pb_video_background_init($this_video_background, this)
                    })
                }, 100), "undefined" != typeof et_link_options_data && et_link_options_data.length > 0 && $.each(et_link_options_data, function(index, link_option_entry) {
                    if (link_option_entry.class && link_option_entry.url && link_option_entry.target) {
                        var $clickable = $("." + link_option_entry.class);
                        $clickable.on("click", function(event) {
                            if (event.target !== event.currentTarget && !et_is_click_exception($(event.target)) || event.target === event.currentTarget) {
                                if (event.stopPropagation(), "_blank" === link_option_entry.target) return void window.open(link_option_entry.url);
                                window.location = link_option_entry.url
                            }
                        }), $clickable.on("click", "a, button", function(event) {
                            et_is_click_exception($(this)) || event.stopPropagation()
                        })
                    }
                });
                var fullscreen_section_width = {},
                    fullscreen_section_timeout = {};
                if (window.et_calc_fullscreen_section = function(event, section) {
                        var isResizing = "object" == typeof event && "resize" === event.type,
                            topWindow = isBuilder ? window.top : window,
                            $et_window = $(topWindow),
                            $this_section = ($(window), section || $(this)),
                            section_index = $this_section.index(".et_pb_fullscreen"),
                            timeout = isResizing && void 0 !== fullscreen_section_width[section_index] && event.target.window_width > fullscreen_section_width[section_index] ? 800 : 0;
                        fullscreen_section_width[section_index] = $et_window.width(), void 0 !== fullscreen_section_timeout[section_index] && clearTimeout(fullscreen_section_timeout[section_index]), fullscreen_section_timeout[section_index] = setTimeout(function() {
                            var $body = $("body"),
                                this_section_index = $this_section.index(".et_pb_fullwidth_header"),
                                this_section_offset = $this_section.offset(),
                                $header = $this_section.children(".et_pb_fullwidth_header_container"),
                                $header_content = $header.children(".header-content-container"),
                                $header_image = $header.children(".header-image-container"),
                                sectionHeight = topWindow.innerHeight || $et_window.height(),
                                $wpadminbar = topWindow.jQuery("#wpadminbar"),
                                has_wpadminbar = $wpadminbar.length,
                                wpadminbar_height = has_wpadminbar ? $wpadminbar.height() : 0,
                                $top_header = $("#top-header"),
                                has_top_header = $top_header.length,
                                top_header_height = has_top_header ? $top_header.height() : 0,
                                $main_header = $("#main-header"),
                                has_main_header = $main_header.length,
                                main_header_height = has_main_header ? $main_header.outerHeight() : 0,
                                fixed_main_header_height = et_pb_get_fixed_main_header_height(),
                                is_wp_relative_admin_bar = (this_section_offset.top, $et_window.width() < 782),
                                is_desktop_view = $et_window.width() > 980,
                                overall_header_height = ($et_window.width() <= 980 && $et_window.width(), $et_window.width(), window.et_is_vertical_nav && is_desktop_view ? wpadminbar_height + top_header_height : wpadminbar_height + top_header_height + main_header_height),
                                is_first_module = this_section_offset.top <= overall_header_height;
                            $main_header.attr("data-height-onload") && (main_header_height = parseFloat($main_header.attr("data-height-onload"))), has_wpadminbar && (is_wp_relative_admin_bar ? is_first_module && (sectionHeight -= wpadminbar_height) : sectionHeight -= wpadminbar_height), has_top_header && is_desktop_view && (et_hide_nav && !window.et_is_vertical_nav ? is_first_module || (sectionHeight -= top_header_height) : !window.et_is_fixed_nav || window.et_is_vertical_nav ? is_first_module && (sectionHeight -= top_header_height) : sectionHeight -= top_header_height), has_main_header && (is_desktop_view ? et_hide_nav && !window.et_is_vertical_nav ? is_first_module || (sectionHeight -= fixed_main_header_height) : window.et_is_fixed_nav && !window.et_is_vertical_nav ? sectionHeight -= is_first_module ? main_header_height : fixed_main_header_height : window.et_is_fixed_nav || window.et_is_vertical_nav || is_first_module && (sectionHeight -= main_header_height) : is_first_module && (sectionHeight -= main_header_height)), $body.hasClass("et_transparent_nav") && $body.hasClass("et_hide_nav") && 0 === this_section_index && $this_section.css("padding-top", "");
                            var section_border_top_width = parseInt($this_section.css("borderTopWidth"));
                            section_border_top_width && (sectionHeight -= section_border_top_width);
                            var section_border_bottom_width = parseInt($this_section.css("borderBottomWidth"));
                            if (section_border_bottom_width && (sectionHeight -= section_border_bottom_width), $this_section.css("min-height", sectionHeight + "px"), $header.css("min-height", sectionHeight + "px"), $header.hasClass("center") && $header_content.hasClass("bottom") && $header_image.hasClass("bottom") && $header.addClass("bottom-bottom"), $header.hasClass("center") && $header_content.hasClass("center") && $header_image.hasClass("center") && $header.addClass("center-center"), $header.hasClass("center") && $header_content.hasClass("center") && $header_image.hasClass("bottom")) {
                                $header.addClass("center-bottom");
                                var contentHeight = sectionHeight - $header_image.outerHeight(!0);
                                contentHeight > 0 && $header_content.css("min-height", contentHeight + "px").css("height", "10px")
                            }
                            $header.hasClass("center") && $header_content.hasClass("bottom") && $header_image.hasClass("center") && $header.addClass("bottom-center"), ($header.hasClass("left") || $header.hasClass("right")) && !$header_content.length && $header_image.length && $header.css("justify-content", "flex-end"), $header.hasClass("center") && $header_content.hasClass("bottom") && !$header_image.length && $header_content.find(".header-content").css("margin-bottom", "80px"), $header_content.hasClass("bottom") && $header_image.hasClass("center") && ($header_image.find(".header-image").css("margin-bottom", "80px"), $header_image.css("align-self", "flex-end"));
                            var headerContentHeight = 0;
                            $header_content.length && (headerContentHeight += $header_content.outerHeight()), $header_image.length && (headerContentHeight += $header_image.outerHeight()), headerContentHeight > sectionHeight && ($this_section.css("min-height", headerContentHeight + "px"), $header.css("min-height", headerContentHeight + "px")), $header_image.hasClass("bottom") && (headerContentHeight < sectionHeight && ($this_section.css("min-height", headerContentHeight + 80 + "px"), $header.css("min-height", headerContentHeight + 80 + "px")), $header.css("justify-content", "flex-end"))
                        }, timeout)
                    }, window.et_calculate_fullscreen_section_size = function() {
                        $("section.et_pb_fullscreen").each(function() {
                            $.proxy(et_calc_fullscreen_section, $(this))()
                        })
                    }, is_frontend_builder || ($et_window.on("resize", et_calculate_fullscreen_section_size), $et_window.on("et-pb-header-height-calculated", et_calculate_fullscreen_section_size)), window.debounced_et_apply_builder_css_parallax = et_pb_debounce(et_apply_builder_css_parallax, 100), window.et_pb_parallax_init = function($this_parallax) {
                        var $this_parent = $this_parallax.parent();
                        isBuilder ? window.top : window;
                        $this_parallax.hasClass("et_pb_parallax_css") ? $("body").hasClass("et-fb") && ($.proxy(et_apply_builder_css_parallax, $this_parent)(), $(window).on("scroll.etCssParallaxBackground", $.proxy(et_apply_builder_css_parallax, $this_parent)), $(window).on("resize.etCssParallaxBackground", $.proxy(window.debounced_et_apply_builder_css_parallax, $this_parent))) : ($.proxy(et_parallax_set_height, $this_parent)(), $.proxy(et_apply_parallax, $this_parent)(), $(window).on("scroll.etTrueParallaxBackground", $.proxy(et_apply_parallax, $this_parent)), $(window).on("resize.etTrueParallaxBackground", $.proxy(et_pb_debounce(et_parallax_set_height, 100), $this_parent)), $(window).on("resize.etTrueParallaxBackground", $.proxy(et_pb_debounce(et_apply_parallax, 100), $this_parent)), $this_parent.find(".et-learn-more .heading-more").click(function() {
                            setTimeout(function() {
                                $.proxy(et_parallax_set_height, $this_parent)()
                            }, 300)
                        }))
                    }, $(window).resize(function() {
                        var window_width = $et_window.width(),
                            et_container_css_width = $et_container.css("width"),
                            et_container_actual_width = (void 0 !== et_container_css_width ? "%" !== et_container_css_width.substr(-1, 1) : "") ? $et_container.width() : $et_container.width() / 100 * window_width,
                            containerWidthChanged = et_container_width !== et_container_actual_width;
                        if (et_pb_resize_section_video_bg(), et_pb_center_video(), et_fix_slider_height(), et_fix_nav_direction(), et_fix_html_margin(), $et_pb_fullwidth_portfolio.each(function() {
                                set_container_height = !!$(this).hasClass("et_pb_fullwidth_portfolio_carousel"), set_fullwidth_portfolio_columns($(this), set_container_height)
                            }), containerWidthChanged || window.et_force_width_container_change) {
                            $(".container-width-change-notify").trigger("containerWidthChanged"), setTimeout(function() {
                                $et_pb_filterable_portfolio.each(function() {
                                    set_filterable_grid_items($(this))
                                }), $et_pb_gallery.each(function() {
                                    $(this).hasClass("et_pb_gallery_grid") && set_gallery_grid_items($(this))
                                })
                            }, 100), et_container_width = et_container_actual_width, etRecalculateOffset = !0;
                            var $et_pb_circle_counter = $(".et_pb_circle_counter");
                            $et_pb_circle_counter.length && $et_pb_circle_counter.each(function() {
                                var $this_counter = $(this).find(".et_pb_circle_counter_inner");
                                $this_counter.is(":visible") && void 0 !== $this_counter.data("easyPieChart") && $this_counter.data("easyPieChart").update($this_counter.data("number-value"))
                            }), $et_pb_countdown_timer.length && $et_pb_countdown_timer.each(function() {
                                var timer = $(this);
                                et_countdown_timer_labels(timer)
                            }), window.et_force_width_container_change = !1
                        }
                        window.et_fix_testimonial_inner_width(), $et_pb_counter_amount.length && $et_pb_counter_amount.each(function() {
                            window.et_bar_counters_init($(this))
                        })
                    }), is_frontend_builder ? $(window).one("et_fb_init_app_after", fitvids_slider_fullscreen_init) : fitvids_slider_fullscreen_init(), window.et_pb_fullwidth_header_scroll = function(event) {
                        event.preventDefault();
                        var window_width = $et_window.width(),
                            $body = $("body"),
                            is_wp_relative_admin_bar = window_width < 782,
                            is_transparent_main_header = $body.hasClass("et_transparent_nav"),
                            is_hide_nav = $body.hasClass("et_hide_nav"),
                            is_desktop_view = window_width > 980,
                            $this_section = $(this).parents("section"),
                            this_section_offset = $this_section.offset(),
                            $wpadminbar = $("#wpadminbar"),
                            $main_header = $("#main-header"),
                            wpadminbar_height = $wpadminbar.length && !is_wp_relative_admin_bar ? $wpadminbar.height() : 0,
                            top_header_height = window.et_is_fixed_nav && is_desktop_view ? $top_header.height() : 0,
                            data_height_onload = void 0 === $main_header.attr("data-height-onload") ? 0 : $main_header.attr("data-height-onload"),
                            initial_fixed_difference = $main_header.height() === et_pb_get_fixed_main_header_height() || !is_desktop_view || !window.et_is_fixed_nav || is_transparent_main_header || is_hide_nav ? 0 : et_pb_get_fixed_main_header_height() - parseFloat(data_height_onload),
                            section_bottom = this_section_offset.top + $this_section.outerHeight(!0) + initial_fixed_difference - (wpadminbar_height + top_header_height + et_pb_get_fixed_main_header_height());
                        if (!isVB && window.et_is_fixed_nav && is_transparent_main_header) {
                            var clone = $main_header.clone().addClass("et-disabled-animations et-fixed-header").css("visibility", "hidden").appendTo($body);
                            section_bottom += et_pb_get_fixed_main_header_height() - clone.height(), clone.remove()
                        }
                        if ($this_section.length) {
                            $("html, body").animate({
                                scrollTop: section_bottom
                            }, {
                                duration: 800
                            })
                        }
                    }, window.et_load_event_fired ? et_pb_window_load_scripts() : $(window).load(function() {
                        et_pb_window_load_scripts()
                    }), $(".et_section_specialty").length && $(".et_section_specialty").each(function() {
                        $(this).find(".et_pb_row").find(">.et_pb_column:not(.et_pb_specialty_column)").addClass("et_pb_column_single")
                    }), $(".et_pb_section_parallax").length && $(".et_pb_map").length && $("body").addClass("parallax-map-support"), $(".et_pb_widget_area " + et_pb_custom.widget_search_selector).each(function() {
                        var $search_wrap = $(this),
                            $search_input_submit = $search_wrap.find('input[type="submit"]'),
                            search_input_submit_text = $search_input_submit.attr("value"),
                            $search_button = $search_wrap.find("button"),
                            search_button_text = $search_button.text(),
                            has_submit_button = !(!$search_input_submit.length && !$search_button.length);
                        ($search_wrap.find('input[type="text"]').length || $search_wrap.find('input[type="search"]').length) && (has_submit_button || $search_wrap.addClass("et-no-submit-button"), $search_wrap.width() < 150 && $search_wrap.addClass("et-narrow-wrapper"), !$search_input_submit.length || void 0 !== search_input_submit_text && "" !== search_input_submit_text || ($search_input_submit.remove(), $search_wrap.addClass("et-no-submit-button")), !$search_button.length || void 0 !== search_button_text && "" !== search_button_text || ($search_button.remove(), $search_wrap.addClass("et-no-submit-button")))
                    }), $("body").on("click", ".et_pb_ajax_pagination_container .wp-pagenavi a,.et_pb_ajax_pagination_container .pagination a", function() {
                        var $current_module, this_link = $(this),
                            href = this_link.attr("href"),
                            current_href = window.location.href,
                            module_classes = this_link.closest(".et_pb_module").attr("class").split(" "),
                            module_class_processed = "",
                            animation_classes = et_get_animation_classes();
                        return window.et_pb_ajax_pagination_cache = window.et_pb_ajax_pagination_cache || [], $.each(module_classes, function(index, value) {
                            -1 === $.inArray(value, animation_classes) && "et_had_animation" !== value && "" !== value.trim() && (module_class_processed += "." + value)
                        }), $current_module = $(module_class_processed), et_remove_animation($current_module), void 0 !== window.et_pb_ajax_pagination_cache[href + module_class_processed] ? $current_module.fadeTo("slow", .2, function() {
                            $current_module.find(".et_pb_ajax_pagination_container").replaceWith(window.et_pb_ajax_pagination_cache[href + module_class_processed]), et_pb_set_paginated_content($current_module, !0)
                        }) : (void 0 === window.et_pb_ajax_pagination_cache[current_href + module_class_processed] && (window.et_pb_ajax_pagination_cache[current_href + module_class_processed] = $current_module.find(".et_pb_ajax_pagination_container")), $current_module.fadeTo("slow", .2, function() {
                            jQuery.get(href, function(page) {
                                var $page = jQuery(page),
                                    $style = $page.filter("#et-builder-module-design-cached-inline-styles"),
                                    $content = $page.find(module_class_processed + " .et_pb_ajax_pagination_container").prepend($style);
                                et_remove_animation($content.find(".et_animated")), $current_module.find(".et_pb_ajax_pagination_container").replaceWith($content), window.et_pb_ajax_pagination_cache[href + module_class_processed] = $content, et_pb_set_paginated_content($current_module, !1)
                            })
                        })), !1
                    }), window.et_pb_search_init = function($search) {
                        var $input_field = $search.find(".et_pb_s"),
                            $button = $search.find(".et_pb_searchsubmit"),
                            input_padding = $search.hasClass("et_pb_text_align_right") ? "paddingLeft" : "paddingRight",
                            disabled_button = $search.hasClass("et_pb_hide_search_button"),
                            buttonHeight = $button.outerHeight(),
                            buttonWidth = $button.outerWidth(),
                            inputHeight = $input_field.innerHeight();
                        $button.css({
                            position: "relative"
                        }), buttonHeight > inputHeight && $input_field.innerHeight(buttonHeight), disabled_button || $input_field.css(input_padding, buttonWidth + 10), $button.css({
                            position: ""
                        })
                    }, window.et_pb_search_percentage_custom_margin_fix = function($search) {
                        var inputMargin = $search.find(".et_pb_s").css("margin").split(" "),
                            inputMarginObj = {};
                        switch (inputMargin.length) {
                            case 4:
                                inputMarginObj = {
                                    top: inputMargin[0],
                                    right: inputMargin[1],
                                    bottom: inputMargin[2],
                                    left: inputMargin[3]
                                };
                                break;
                            case 2:
                                inputMarginObj = {
                                    top: inputMargin[0],
                                    right: inputMargin[1],
                                    bottom: inputMargin[0],
                                    left: inputMargin[1]
                                };
                                break;
                            default:
                                inputMarginObj = {
                                    top: inputMargin[0],
                                    right: inputMargin[0],
                                    bottom: inputMargin[0],
                                    left: inputMargin[0]
                                }
                        }
                        var inputRight = 0 - parseFloat(inputMarginObj.left) + "px";
                        $search.find(".et_pb_searchsubmit").css({
                            top: inputMarginObj.top,
                            right: inputRight,
                            bottom: inputMarginObj.bottom
                        })
                    }, $(".et_pb_search").length && $(".et_pb_search").each(function() {
                        var $search = $(this);
                        $search.is(".et_pb_search_percentage_custom_margin") && et_pb_search_percentage_custom_margin_fix($search), et_pb_search_init($search)
                    }), window.et_pb_comments_init = function($comments_module) {
                        var $comments_module_button = $comments_module.find(".comment-reply-link, .submit");
                        $comments_module_button.length && ($comments_module_button.addClass("et_pb_button"), void 0 !== $comments_module.attr("data-icon") && "" !== $comments_module.attr("data-icon") && ($comments_module_button.attr("data-icon", $comments_module.attr("data-icon")), $comments_module_button.addClass("et_pb_custom_button_icon")))
                    }, $(".et_pb_comments_module").length && $(".et_pb_comments_module").each(function() {
                        var $comments_module = $(this);
                        et_pb_comments_init($comments_module)
                    }), window.et_fix_pricing_currency_position(), $(".et_pb_contact_form_container, .et_pb_newsletter_custom_fields").each(function() {
                        var $form = $(this),
                            condition_check = function() {
                                et_conditional_check($form)
                            },
                            debounced_condition_check = et_pb_debounce(condition_check, 250);
                        $form.on("change", "input, textarea, select", condition_check), $form.on("keydown", "input, textarea, select", debounced_condition_check), et_conditional_check($form)
                    }), "undefined" != typeof et_animation_data && et_animation_data.length > 0) {
                    for (var maxFullwidthMenuIndex = 0, i = 0; i < et_animation_data.length; i++) {
                        var animation_entry = et_animation_data[i];
                        animation_entry.class && ($("." + animation_entry.class).hasClass("et_pb_fullwidth_menu") && maxFullwidthMenuIndex++)
                    }
                    $(".et_pb_fullwidth_menu").each(function() {
                        var $fullWidthMenu = $(this);
                        $fullWidthMenu.on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                            $fullWidthMenu.css("z-index", maxFullwidthMenuIndex - $fullWidthMenu.index(".et_pb_fullwidth_menu"))
                        })
                    })
                }
                $(document).trigger("et_pb_after_init_modules")
            })
        },
        window.et_pb_debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result, now = Date.now || (new Date).getTime(),
                later = function() {
                    var last = now - timestamp;
                    last < wait && last >= 0 ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args), timeout || (context = args = null)))
                };
            return function() {
                context = this, args = arguments, timestamp = now;
                var callNow = immediate && !timeout;
                return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args), context = args = null), result
            }
        }, et_pb_custom.is_ab_testing_active && "yes" === et_pb_custom.is_cache_plugin_active ? ($(window).load(function() {
            window.et_load_event_fired = !0
        }), $.ajax({
            type: "POST",
            url: et_pb_custom.ajaxurl,
            dataType: "json",
            data: {
                action: "et_pb_ab_get_subject_id",
                et_frontend_nonce: et_pb_custom.et_frontend_nonce,
                et_pb_ab_test_id: et_pb_custom.page_id
            },
            success: function(subject_data) {
                subject_data && ($(".et_pb_subject_placeholder_id_" + subject_data.id).after(subject_data.content), $(".et_pb_subject_placeholder").remove(), window.et_pb_init_modules(), $("body").trigger("et_pb_ab_subject_ready"))
            }
        })) : window.et_pb_init_modules(), $(document).ready(function() {
            $(".et_pb_top_inside_divider.et-no-transition, .et_pb_bottom_inside_divider.et-no-transition").removeClass("et-no-transition"), (et_pb_box_shadow_elements || []).map(et_pb_box_shadow_apply_overlay)
        }), $(window).load(function() {
            var $body = $("body");
            if ($body.hasClass("safari")) {
                var original_display_value = $body.css("display"),
                    different_display_value = "initial" === original_display_value ? "block" : "initial";
                if ($body.css({
                        display: different_display_value
                    }), setTimeout(function() {
                        $body.css({
                            display: original_display_value
                        })
                    }, 0), $body.hasClass("woocommerce-page") && $body.hasClass("single-product")) {
                    var $wc = $(".woocommerce div.product div.images.woocommerce-product-gallery");
                    if (0 === $wc.length) return;
                    var opacity = parseInt($wc[0].style.opacity);
                    if (!opacity) return;
                    $wc.css({
                        opacity: opacity - .09
                    }), setTimeout(function() {
                        $wc.css({
                            opacity: opacity
                        })
                    }, 0)
                }
            }
        }), $(document).ready(function() {
            if (void 0 !== MutationObserver)
                for (var getInvisibleNodes = function($sections) {
                        return $sections.filter(function() {
                            return !$(this).is(":visible")
                        }).length
                    }, $sections = $(".et_pb_section"), sectionParents = function($sections) {
                        var filterMethod = void 0 !== $.uniqueSort ? $.uniqueSort : $.unique,
                            $sectionParents = $([]);
                        return $sections.each(function() {
                            $sectionParents = $sectionParents.add($(this).parents())
                        }), filterMethod($sectionParents.get())
                    }($sections), invisibleSections = getInvisibleNodes($sections), observer = new MutationObserver(window.et_pb_debounce(function() {
                        var newInvisibleSections = getInvisibleNodes($sections);
                        newInvisibleSections < invisibleSections && $(window).trigger("resize"), invisibleSections = newInvisibleSections
                    }, 200)), i = 0; i < sectionParents.length; i++) observer.observe(sectionParents[i], {
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["class", "style"],
                    attributeOldValue: !1,
                    characterData: !1,
                    characterDataOldValue: !1,
                    subtree: !1
                })
        }), et_fix_html_margin()
}(jQuery);
! function() {
    function initTest() {
        var disableKeyboard = document.body.classList.contains("et-fb");
        disableKeyboard && removeEvent("keydown", keydown), options.keyboardSupport && !disableKeyboard && addEvent("keydown", keydown)
    }

    function init() {
        if (document.body) {
            var body = document.body,
                html = document.documentElement,
                windowHeight = window.innerHeight,
                scrollHeight = body.scrollHeight;
            if (root = document.compatMode.indexOf("CSS") >= 0 ? html : body, activeElement = body, initTest(), initDone = !0, top != self) isFrame = !0;
            else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
                var pending = !1;
                if (html.style.height = "auto", setTimeout(function() {
                        pending || html.scrollHeight == document.height || (pending = !0, setTimeout(function() {
                            html.style.height = document.height + "px", pending = !1
                        }, 500))
                    }, 10), root.offsetHeight <= windowHeight) {
                    var underlay = document.createElement("div");
                    underlay.style.clear = "both", body.appendChild(underlay)
                }
            }
            options.fixedBackground || isExcluded || (body.style.backgroundAttachment = "scroll", html.style.backgroundAttachment = "scroll")
        }
    }

    function scrollArray(elem, left, top, delay) {
        if (delay || (delay = 1e3), directionCheck(left, top), 1 != options.accelerationMax) {
            var elapsed = +new Date - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + 30 / elapsed) / 2;
                factor > 1 && (factor = Math.min(factor, options.accelerationMax), left *= factor, top *= factor)
            }
            lastScroll = +new Date
        }
        if (que.push({
                x: left,
                y: top,
                lastX: left < 0 ? .99 : -.99,
                lastY: top < 0 ? .99 : -.99,
                start: +new Date
            }), !pending) {
            var scrollWindow = elem === document.body,
                step = function(time) {
                    for (var now = +new Date, scrollX = 0, scrollY = 0, i = 0; i < que.length; i++) {
                        var item = que[i],
                            elapsed = now - item.start,
                            finished = elapsed >= options.animationTime,
                            position = finished ? 1 : elapsed / options.animationTime;
                        options.pulseAlgorithm && (position = pulse(position));
                        var x = item.x * position - item.lastX >> 0,
                            y = item.y * position - item.lastY >> 0;
                        scrollX += x, scrollY += y, item.lastX += x, item.lastY += y, finished && (que.splice(i, 1), i--)
                    }
                    scrollWindow ? window.scrollBy(scrollX, scrollY) : (scrollX && (elem.scrollLeft += scrollX), scrollY && (elem.scrollTop += scrollY)), left || top || (que = []), que.length ? requestFrame(step, elem, delay / options.frameRate + 1) : pending = !1
                };
            requestFrame(step, elem, 0), pending = !0
        }
    }

    function keydown(event) {
        var target = event.target,
            modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;
        if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) return !0;
        if (isNodeName(target, "button") && event.keyCode === key.spacebar) return !0;
        var x = 0,
            y = 0,
            elem = overflowingAncestor(activeElement),
            clientHeight = elem.clientHeight;
        switch (elem == document.body && (clientHeight = window.innerHeight), event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar:
                y = -(event.shiftKey ? 1 : -1) * clientHeight * .9;
                break;
            case key.pageup:
                y = .9 * -clientHeight;
                break;
            case key.pagedown:
                y = .9 * clientHeight;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = damt > 0 ? damt + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return !0
        }
        scrollArray(elem, x, y), event.preventDefault()
    }

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;) cache[uniqueID(elems[i])] = overflowing;
        return overflowing
    }

    function overflowingAncestor(el) {
        var elems = [],
            rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) return setCache(elems, cached);
            if (elems.push(el), rootScrollHeight === el.scrollHeight) {
                if (!isFrame || root.clientHeight + 10 < rootScrollHeight) return setCache(elems, document.body)
            } else if (el.clientHeight + 10 < el.scrollHeight && (overflow = getComputedStyle(el, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(elems, el)
        } while (el = el.parentNode)
    }

    function addEvent(type, fn, bubble) {
        window.addEventListener(type, fn, bubble || !1)
    }

    function removeEvent(type, fn, bubble) {
        window.removeEventListener(type, fn, bubble || !1)
    }

    function isNodeName(el, tag) {
        return (el.nodeName || "").toLowerCase() === tag.toLowerCase()
    }

    function directionCheck(x, y) {
        x = x > 0 ? 1 : -1, y = y > 0 ? 1 : -1, direction.x === x && direction.y === y || (direction.x = x, direction.y = y, que = [], lastScroll = 0)
    }

    function isTouchpad(deltaY) {
        if (deltaY) return deltaY = Math.abs(deltaY), deltaBuffer.push(deltaY), deltaBuffer.shift(), clearTimeout(deltaBufferTimer), !(isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120))
    }

    function isDivisible(n, divisor) {
        return Math.floor(n / divisor) == n / divisor
    }

    function pulse_(x) {
        var val, start;
        return (x *= options.pulseScale) < 1 ? val = x - (1 - Math.exp(-x)) : (x -= 1, val = (start = Math.exp(-1)) + (1 - Math.exp(-x)) * (1 - start)), val * options.pulseNormalize
    }

    function pulse(x) {
        return x >= 1 ? 1 : x <= 0 ? 0 : (1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1)), pulse_(x))
    }
    var activeElement, defaultOptions = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 80,
            pulseAlgorithm: !0,
            pulseScale: 8,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !0,
            fixedBackground: !0,
            excluded: ""
        },
        options = defaultOptions,
        isExcluded = !1,
        isFrame = !1,
        direction = {
            x: 0,
            y: 0
        },
        initDone = !1,
        root = document.documentElement,
        deltaBuffer = [120, 120, 120],
        key = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        options = defaultOptions,
        que = [],
        pending = !1,
        lastScroll = +new Date,
        cache = {};
    setInterval(function() {
        cache = {}
    }, 1e4);
    var deltaBufferTimer, uniqueID = function() {
            var i = 0;
            return function(el) {
                return el.uniqueID || (el.uniqueID = i++)
            }
        }(),
        requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(callback, element, delay) {
            window.setTimeout(callback, delay || 1e3 / 60)
        },
        isChrome = /chrome/i.test(window.navigator.userAgent),
        wheelEvent = null;
    "onwheel" in document.createElement("div") ? wheelEvent = "wheel" : "onmousewheel" in document.createElement("div") && (wheelEvent = "mousewheel");
    var isSmoothScrollActive = document.body.className.split(" ").filter(function(className) {
        return "et_smooth_scroll" === className
    }).length > 0;
    wheelEvent && isChrome && isSmoothScrollActive && (addEvent(wheelEvent, function(event) {
        initDone || init();
        var target = event.target,
            overflowing = overflowingAncestor(target),
            isVBTopWindowScroll = document.documentElement.className.split(" ").filter(function(className) {
                return "et-fb-preview--tablet" === className || "et-fb-preview--phone" === className || "et-fb-preview--zoom" === className
            }).length > 0;
        if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src) || isVBTopWindowScroll) return !0;
        var deltaX = event.wheelDeltaX || 0,
            deltaY = event.wheelDeltaY || 0;
        if (deltaX || deltaY || (deltaY = event.wheelDelta || 0), !options.touchpadSupport && isTouchpad(deltaY)) return !0;
        Math.abs(deltaX) > 1.2 && (deltaX *= options.stepSize / 120), Math.abs(deltaY) > 1.2 && (deltaY *= options.stepSize / 120), scrollArray(overflowing, -deltaX, -deltaY), event.preventDefault()
    }), addEvent("mousedown", function(event) {
        activeElement = event.target
    }), addEvent("load", init)), window.ET_SmoothScroll = {
        toggleKeydown: function(enable) {
            enable ? addEvent("keydown", keydown) : removeEvent("keydown", keydown)
        }
    }
}();
var isBuilder = "object" == typeof window.ET_Builder;
! function($) {
    function et_preload_image(src, callback) {
        var img = new Image;
        img.onLoad = callback, img.onload = callback, img.src = src
    }

    function et_fix_logo_transition(is_onload) {
        var logo_wrapper_width, $body = $("body"),
            $logo = $("#logo"),
            logo_actual_width = parseInt($logo.attr("data-actual-width")),
            logo_actual_height = parseInt($logo.attr("data-actual-height")),
            logo_height_percentage = parseInt($logo.attr("data-height-percentage")),
            $top_nav = $("#et-top-navigation"),
            top_nav_height = parseInt($top_nav.attr("data-height")),
            top_nav_fixed_height = parseInt($top_nav.attr("data-fixed-height")),
            $main_header = $("#main-header"),
            is_header_split = $body.hasClass("et_header_style_split"),
            is_fixed_nav = $main_header.hasClass("et-fixed-header"),
            is_hide_primary_logo = $body.hasClass("et_hide_primary_logo"),
            is_hide_fixed_logo = $body.hasClass("et_hide_fixed_logo"),
            logo_height_base = is_fixed_nav ? top_nav_height : top_nav_fixed_height;
        is_onload = void 0 !== is_onload && is_onload, is_header_split && !window.et_is_vertical_nav && (is_onload && (logo_height_base = top_nav_height), logo_wrapper_width = logo_actual_width * ((logo_height_base * (logo_height_percentage / 100) + 22) / logo_actual_height), is_hide_primary_logo && (is_fixed_nav || is_onload) && (logo_wrapper_width = 0), !is_hide_fixed_logo || is_fixed_nav || is_onload || (logo_wrapper_width = 0), $(".et_header_style_split .centered-inline-logo-wrap").css({
            width: logo_wrapper_width
        }))
    }

    function et_toggle_slide_menu(force_state) {
        var $slide_menu_container = $(".et_header_style_slide .et_slide_in_menu_container"),
            $page_container = $(".et_header_style_slide #page-container, .et_header_style_slide.et_fixed_nav #main-header"),
            $header_container = $(".et_header_style_slide #main-header"),
            is_menu_opened = $slide_menu_container.hasClass("et_pb_slide_menu_opened"),
            set_to = void 0 !== force_state ? force_state : "auto",
            is_boxed_layout = $("body").hasClass("et_boxed_layout"),
            page_container_margin = is_boxed_layout ? parseFloat($("#page-container").css("margin-left")) : 0,
            slide_container_width = $slide_menu_container.innerWidth();
        "auto" !== set_to && (is_menu_opened && "open" === set_to || !is_menu_opened && "close" === set_to) || (is_menu_opened ? ($slide_menu_container.css({
            right: "-" + slide_container_width + "px"
        }), $page_container.css({
            left: "0"
        }), is_boxed_layout && et_is_fixed_nav && $header_container.css({
            left: page_container_margin + "px"
        }), setTimeout(function() {
            $slide_menu_container.css({
                display: "none"
            })
        }, 700)) : ($slide_menu_container.css({
            display: "block"
        }), setTimeout(function() {
            if ($slide_menu_container.css({
                    right: "0"
                }), $page_container.css({
                    left: "-" + (slide_container_width - page_container_margin) + "px"
                }), is_boxed_layout && et_is_fixed_nav) {
                var left_position = 0 > slide_container_width - 2 * page_container_margin ? Math.abs(slide_container_width - 2 * page_container_margin) : "-" + (slide_container_width - 2 * page_container_margin);
                left_position < slide_container_width && $header_container.css({
                    left: left_position + "px"
                })
            }
        }, 50)), $("body").toggleClass("et_pb_slide_menu_active"), $slide_menu_container.toggleClass("et_pb_slide_menu_opened"))
    }

    function et_adjust_woocommerce_checkout_scroll() {
        if (et_is_fixed_nav && !(980 >= parseInt($et_window.width()))) {
            var headerHeight = parseInt($("#main-header").innerHeight());
            $("html, body").animate({
                scrollTop: $("form.checkout").offset().top - 100 - headerHeight
            }, 1e3)
        }
    }

    function et_pb_toggle_fullscreen_menu() {
        var $menu_container = $(".et_header_style_fullscreen .et_slide_in_menu_container"),
            top_bar_height = $menu_container.find(".et_slide_menu_top").innerHeight();
        $menu_container.toggleClass("et_pb_fullscreen_menu_opened"), $("body").toggleClass("et_pb_fullscreen_menu_active"), $menu_container.hasClass("et_pb_fullscreen_menu_opened") ? ($menu_container.addClass("et_pb_fullscreen_menu_animated"), $menu_container.css({
            "padding-top": top_bar_height + 20
        })) : setTimeout(function() {
            $menu_container.removeClass("et_pb_fullscreen_menu_animated")
        }, 1e3)
    }
    window.et_calculating_scroll_position = !1, window.et_side_nav_links_initialized = !1;
    var et_header_height, et_header_modifier, et_header_offset, et_primary_header_top, $et_pb_post_fullwidth = $(".single.et_pb_pagebuilder_layout.et_full_width_page"),
        $et_container = (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/), navigator.userAgent.match(/iPad/), $(".container")),
        et_is_fixed_nav = ($et_container.width(), $("body").hasClass("et_fixed_nav") || $("body").hasClass("et_vertical_fixed")),
        et_is_vertical_fixed_nav = $("body").hasClass("et_vertical_fixed"),
        et_is_rtl = $("body").hasClass("rtl"),
        et_hide_nav = $("body").hasClass("et_hide_nav"),
        et_header_style_left = $("body").hasClass("et_header_style_left"),
        $top_header = $("#top-header"),
        $main_header = $("#main-header"),
        $main_container_wrapper = $("#page-container"),
        $et_main_content_first_row = $("#main-content .container:first-child"),
        $et_main_content_first_row_meta_wrapper = $et_main_content_first_row.find(".et_post_meta_wrapper:first"),
        $et_main_content_first_row_meta_wrapper_title = $et_main_content_first_row_meta_wrapper.find("h1.entry-title"),
        $et_single_post = ($et_main_content_first_row.find(".entry-content:first"), $("body.single")),
        $et_window = $(window),
        etRecalculateOffset = !1,
        $et_header_style_split = $(".et_header_style_split"),
        $et_top_navigation = $("#et-top-navigation"),
        $et_pb_first_row = ($("#logo"), $("body.et_pb_pagebuilder_layout .et_pb_section:visible:first")),
        et_is_touch_device = "ontouchstart" in window || navigator.maxTouchPoints,
        $et_top_cart = $("#et-secondary-menu a.et-cart-info");
    if ($(".woocommerce .woocommerce-product-gallery").length > 0) {
        var gal = $(".woocommerce-product-gallery")[0],
            newstr = gal.outerHTML.replace("data-columns", "data-cols");
        gal.outerHTML = newstr
    }
    if ($et_top_cart.length > 0 && $(".shop_table.cart").length > 0 && $(document.body).on("updated_wc_div", function() {
            var new_text, new_total = 0;
            $(".shop_table.cart").find(".product-quantity input").each(function() {
                new_total += parseInt($(this).val())
            }), new_text = (new_text = 1 === new_total ? DIVI.item_count : DIVI.items_count).replace("%d", new_total), $et_top_cart.find("span").text(new_text)
        }), $(document).ready(function() {
            function et_header_menu_split() {
                var $logo_container = $("#main-header > .container > .logo_container"),
                    $logo_container_splitted = $(".centered-inline-logo-wrap > .logo_container"),
                    et_top_navigation_li_size = $et_top_navigation.children("nav").children("ul").children("li").size(),
                    et_top_navigation_li_break_index = Math.round(et_top_navigation_li_size / 2) - 1,
                    window_width = window.innerWidth || $et_window.width();
                window_width > 980 && $logo_container.length && $("body").hasClass("et_header_style_split") && ($('<li class="centered-inline-logo-wrap"></li>').insertAfter($et_top_navigation.find("nav > ul >li:nth(" + et_top_navigation_li_break_index + ")")), $logo_container.appendTo($et_top_navigation.find(".centered-inline-logo-wrap"))), window_width <= 980 && $logo_container_splitted.length && ($logo_container_splitted.prependTo("#main-header > .container"), $("#main-header .centered-inline-logo-wrap").remove())
            }

            function et_set_right_vertical_menu() {
                var $body = $("body");
                if ($body.hasClass("et_boxed_layout") && $body.hasClass("et_vertical_fixed") && $body.hasClass("et_vertical_right")) {
                    var header_offset = parseFloat($("#page-container").css("margin-right"));
                    header_offset = 0 > (header_offset += parseFloat($("#et-main-area").css("margin-right")) - 225) ? 0 : header_offset, $("#main-header").addClass("et_vertical_menu_set").css({
                        left: "",
                        right: header_offset
                    })
                }
            }

            function et_change_primary_nav_position(delay) {
                setTimeout(function() {
                    var $body = $("body"),
                        $wpadminbar = isBuilder ? window.top.jQuery("#wpadminbar") : $("#wpadminbar"),
                        $top_header = $("#top-header"),
                        et_primary_header_top = 0;
                    if ($wpadminbar.length) {
                        var adminbarHeight = $wpadminbar.innerHeight();
                        isBuilder && window.top.jQuery("html").is(".et-fb-preview--zoom:not(.et-fb-preview--desktop)") && (adminbarHeight *= 2), et_primary_header_top += adminbarHeight
                    }
                    $top_header.length && $top_header.is(":visible") && (et_primary_header_top += $top_header.innerHeight()), !window.et_is_vertical_nav && $body.hasClass("et_fixed_nav") && $("#main-header").css("top", et_primary_header_top)
                }, delay)
            }

            function et_hide_nav_transform() {
                var $body = $("body"),
                    $body_height = $(document).height(),
                    $viewport_height = $(window).height() + et_header_height + 200;
                $body.hasClass("et_vertical_nav") || ($body.hasClass("et_hide_nav") || $body.hasClass("et_hide_nav_disabled") && $body.hasClass("et_fixed_nav")) && ($body_height > $viewport_height ? ($body.hasClass("et_hide_nav_disabled") && ($body.addClass("et_hide_nav"), $body.removeClass("et_hide_nav_disabled")), $("#main-header").css("transform", "translateY(-" + et_header_height + "px)"), $("#top-header").css("transform", "translateY(-" + et_header_height + "px)")) : ($("#main-header").css({
                    transform: "translateY(0)",
                    opacity: "1"
                }), $("#top-header").css({
                    transform: "translateY(0)",
                    opacity: "1"
                }), $body.removeClass("et_hide_nav"), $body.addClass("et_hide_nav_disabled")), et_fix_page_container_position())
            }

            function et_save_initial_page_container_style($selector, property) {
                var styling = {};
                styling[property] = $selector.css(property), $selector.attr({
                    "data-fix-page-container": "on"
                }).data({
                    fix_page_container_style: styling
                })
            }

            function et_page_load_scroll_to_anchor() {
                var location_hash = window.et_location_hash.replace(/(\|)/g, "\\$1");
                if (0 !== $(location_hash).length) {
                    var $map_container = $(location_hash + " .et_pb_map_container"),
                        $map = $map_container.children(".et_pb_map"),
                        $target = $(location_hash);
                    $target.css("display", window.et_location_hash_style);
                    var speed = (void 0 !== $target.offset().top ? $target.offset().top : 0) > 4e3 ? 1600 : 800;
                    $map_container.length && google.maps.event.trigger($map[0], "resize"), setTimeout(function() {
                        et_pb_smooth_scroll($target, !1, speed, "swing"), setTimeout(function() {
                            et_pb_smooth_scroll($target, !1, 150, "linear")
                        }, speed + 25)
                    }, 700)
                }
            }

            function et_get_saved_padding_margin_value(saved_value, order) {
                if (void 0 === saved_value) return !1;
                var values = saved_value.split("|");
                return void 0 !== values[order] && values[order]
            }

            function et_fix_page_container_position() {
                var header_height, et_pb_first_row_padding_top, et_window_width = parseInt($et_window.width()),
                    $top_header = $("#top-header"),
                    $et_pb_first_row = $("body.et_pb_pagebuilder_layout .et_pb_section:visible:first"),
                    secondary_nav_height = $top_header.length && $top_header.is(":visible") ? parseInt($top_header.innerHeight()) : 0,
                    main_header_fixed_height = 0,
                    $mainHeaderClone = $main_header.clone().addClass("et-disabled-animations main-header-clone").css({
                        opacity: 0,
                        position: "fixed",
                        top: "auto",
                        right: 0,
                        bottom: 0,
                        left: 0
                    }).appendTo($("body"));
                if ($("body").hasClass("et-bfb") || $('*[data-fix-page-container="on"]').each(function() {
                        var $adjusted_element = $(this),
                            styling = $adjusted_element.data();
                        styling && styling.fix_page_container_style && $adjusted_element.css(styling.fix_page_container_style)
                    }), et_window_width > 980 && (!$main_header.attr("data-height-loaded") || $("body").is(".et-fb"))) {
                    var mainHeaderHeight = 0;
                    $main_header.hasClass("et-fixed-header") ? ($mainHeaderClone.removeClass("et-fixed-header"), mainHeaderHeight = $mainHeaderClone.height(), $mainHeaderClone.addClass("et-fixed-header")) : mainHeaderHeight = $main_header.height(), $main_header.attr({
                        "data-height-onload": parseInt(mainHeaderHeight),
                        "data-height-loaded": !0
                    })
                }
                if (et_window_width <= 980 ? (header_height = parseInt($main_header.innerHeight()) + secondary_nav_height - ($("body").hasClass("et-fb") ? 0 : 1), window.et_is_transparent_nav && !$et_pb_first_row.length && (header_height += 58)) : (header_height = parseInt($main_header.attr("data-height-onload")) + secondary_nav_height, window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_main_content_first_row.length && (header_height += 58), main_header_fixed_height = $mainHeaderClone.height()), $main_header.attr({
                        "data-fixed-height-onload": main_header_fixed_height
                    }), window.et_is_transparent_nav && !window.et_is_vertical_nav) {
                    $("body").hasClass("et-bfb") || $et_pb_first_row.addClass("et_pb_section_first");
                    var is_pb = $et_pb_first_row.length,
                        is_post_pb = is_pb && $et_single_post.length,
                        is_post_pb_full_layout_has_title = $et_pb_post_fullwidth.length && $et_main_content_first_row_meta_wrapper_title.length,
                        is_post_pb_full_layout_no_title = $et_pb_post_fullwidth.length && 0 === $et_main_content_first_row_meta_wrapper_title.length,
                        is_pb_fullwidth_section_first = $et_pb_first_row.is(".et_pb_fullwidth_section"),
                        is_no_pb_mobile = et_window_width <= 980 && $et_main_content_first_row.length,
                        isProject = $("body").hasClass("single-project");
                    if (!is_post_pb || is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first || isProject)
                        if (is_pb_fullwidth_section_first) {
                            var $et_pb_first_row_first_module = $et_pb_first_row.children(".et_pb_module:visible:first");
                            if (is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first && et_window_width > 980 && (header_height -= 58), $et_pb_first_row_first_module.is(".et_pb_slider")) {
                                var $et_pb_first_row_first_module_slide_image = $et_pb_first_row_first_module.find(".et_pb_slide_image"),
                                    $et_pb_first_row_first_module_slide = $et_pb_first_row_first_module.find(".et_pb_slide"),
                                    $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module.find(".et_pb_slide .et_pb_container"),
                                    et_pb_slide_image_margin_top = 0 - parseInt($et_pb_first_row_first_module_slide_image.height()) / 2,
                                    $et_pb_first_row_first_module_slider_arrow = $et_pb_first_row_first_module.find(".et-pb-slider-arrows a"),
                                    et_pb_first_row_slider_arrow_height = $et_pb_first_row_first_module_slider_arrow.height();
                                et_save_initial_page_container_style($et_pb_first_row_first_module_slide, "paddingTop"), $et_pb_first_row_first_module_slide.css({
                                    paddingTop: header_height
                                }), $et_pb_first_row_first_module_slide_container.css({
                                    "min-height": ""
                                }), et_save_initial_page_container_style($et_pb_first_row_first_module_slide_image, "marginTop"), $et_pb_first_row_first_module_slide_image.css({
                                    marginTop: et_pb_slide_image_margin_top
                                }), et_save_initial_page_container_style($et_pb_first_row_first_module_slider_arrow, "marginTop"), $et_pb_first_row_first_module_slider_arrow.css({
                                    marginTop: header_height / 2 - et_pb_first_row_slider_arrow_height / 2
                                });
                                var et_pb_first_row_slide_container_height_new = 0;
                                $et_pb_first_row_first_module.find(".et_pb_slide").each(function() {
                                    var $et_pb_first_row_first_module_slide_item = $(this),
                                        $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module_slide_item.find(".et_pb_container");
                                    $et_pb_first_row_first_module_slide_item.show(), $et_pb_first_row_first_module_slide_container.css({
                                        "min-height": ""
                                    });
                                    var et_pb_first_row_slide_container_height = $et_pb_first_row_first_module_slide_container.innerHeight();
                                    et_pb_first_row_slide_container_height_new < et_pb_first_row_slide_container_height && (et_pb_first_row_slide_container_height_new = et_pb_first_row_slide_container_height), $et_pb_first_row_first_module_slide_item.is(':not(".et-pb-active-slide")') && $et_pb_first_row_first_module_slide_item.hide()
                                }), et_save_initial_page_container_style($et_pb_first_row_first_module_slide_container, "min-height"), $et_pb_first_row_first_module_slide_container.css({
                                    "min-height": et_pb_first_row_slide_container_height_new
                                })
                            } else if ($et_pb_first_row_first_module.is(".et_pb_fullwidth_header")) {
                                $et_pb_first_row_first_module.removeAttr("style");
                                var et_pb_first_row_first_module_fullwidth_header_padding_top = parseInt($et_pb_first_row_first_module.css("paddingTop"));
                                et_save_initial_page_container_style($et_pb_first_row_first_module, "paddingTop"), $et_pb_first_row_first_module.css({
                                    paddingTop: header_height + et_pb_first_row_first_module_fullwidth_header_padding_top
                                })
                            } else if ($et_pb_first_row_first_module.is(".et_pb_fullwidth_portfolio")) et_save_initial_page_container_style($et_pb_first_row_first_module, "paddingTop"), $et_pb_first_row_first_module.css({
                                paddingTop: header_height
                            });
                            else if ($et_pb_first_row_first_module.is(".et_pb_map_container")) {
                                var $et_pb_first_row_map = $et_pb_first_row_first_module.find(".et_pb_map");
                                $et_pb_first_row_map.css({
                                    height: ""
                                }), $et_pb_first_row_first_module.find(".et_pb_map").css({
                                    height: header_height + parseInt($et_pb_first_row_map.css("height"))
                                }), $et_pb_first_row_first_module.addClass("et_beneath_transparent_nav")
                            } else if ($et_pb_first_row_first_module.is(".et_pb_fullwidth_menu")) et_save_initial_page_container_style($et_pb_first_row_first_module, "marginTop"), $et_pb_first_row_first_module.css({
                                marginTop: header_height
                            });
                            else if ($et_pb_first_row_first_module.is(".et_pb_fullwidth_code")) {
                                var $et_pb_first_row_first_module_code = $et_pb_first_row_first_module;
                                $et_pb_first_row_first_module_code.css({
                                    paddingTop: ""
                                });
                                var et_pb_first_row_first_module_code_padding_top = parseInt($et_pb_first_row_first_module_code.css("paddingTop"));
                                et_save_initial_page_container_style($et_pb_first_row_first_module_code, "paddingTop"), $et_pb_first_row_first_module_code.css({
                                    paddingTop: header_height + et_pb_first_row_first_module_code_padding_top
                                })
                            } else $et_pb_first_row_first_module.is(".et_pb_post_title") ? (et_save_initial_page_container_style($et_pb_first_row_first_module, "paddingTop"), $et_pb_first_row_first_module.css({
                                paddingTop: header_height + 50
                            })) : $et_pb_first_row_first_module.length || (et_pb_first_row_padding_top = parseFloat($et_pb_first_row.css("paddingTop")), et_save_initial_page_container_style($et_pb_first_row, "paddingTop"), $et_pb_first_row.data("is_hide_nav") || $et_pb_first_row.css({
                                paddingTop: et_pb_first_row_padding_top + header_height
                            }), clearTimeout(window.et_fallback_transparent_adjustment_timeout), window.et_fallback_transparent_adjustment_timeout = setTimeout(function() {
                                var is_hide_nav = $("body").hasClass("et_hide_nav") && "matrix(1, 0, 0, 1, 0, 0)" !== $("#main-header").css("transform");
                                is_hide_nav ? $et_pb_first_row.css({
                                    paddingTop: ""
                                }) : $et_pb_first_row.css({
                                    paddingTop: et_pb_first_row_padding_top + header_height
                                }), $et_pb_first_row.data("is_hide_nav", is_hide_nav)
                            }, 300))
                        } else if (is_pb) {
                        $et_pb_first_row.css({
                            paddingTop: ""
                        });
                        var applied_saved_custom_padding, saved_custom_padding_top = et_get_saved_padding_margin_value($et_pb_first_row.attr("data-padding"), 0),
                            saved_custom_padding_tablet_top = et_get_saved_padding_margin_value($et_pb_first_row.attr("data-padding-tablet"), 0),
                            saved_custom_padding_phone_top = et_get_saved_padding_margin_value($et_pb_first_row.attr("data-padding-phone"), 0);
                        saved_custom_padding_top || saved_custom_padding_tablet_top || saved_custom_padding_phone_top ? (et_window_width > 980 && saved_custom_padding_top ? $et_pb_first_row.css({
                            paddingTop: saved_custom_padding_top
                        }) : et_window_width > 767 && saved_custom_padding_tablet_top ? $et_pb_first_row.css({
                            paddingTop: saved_custom_padding_tablet_top
                        }) : saved_custom_padding_phone_top && $et_pb_first_row.css({
                            paddingTop: saved_custom_padding_phone_top
                        }), applied_saved_custom_padding = parseInt($et_pb_first_row.css("paddingTop")), $et_pb_first_row.css({
                            paddingTop: header_height + applied_saved_custom_padding
                        })) : (et_pb_first_row_padding_top = header_height + parseInt($et_pb_first_row.css("paddingTop")), et_save_initial_page_container_style($et_pb_first_row, "paddingTop"), $et_pb_first_row.css({
                            paddingTop: et_pb_first_row_padding_top
                        }))
                    } else is_no_pb_mobile ? $et_main_content_first_row.css({
                        paddingTop: header_height
                    }) : $("#main-content .container:first-child").css({
                        paddingTop: header_height
                    });
                    else $et_main_content_first_row.css({
                        paddingTop: ""
                    }), et_window_width < 980 && (header_height += 40), is_pb_fullwidth_section_first && $et_pb_first_row.css({
                        paddingTop: "0"
                    }), is_post_pb_full_layout_has_title ? $et_main_content_first_row_meta_wrapper.css({
                        paddingTop: header_height
                    }) : is_post_pb_full_layout_no_title ? (et_save_initial_page_container_style($et_pb_first_row, "paddingTop"), $et_pb_first_row.css({
                        paddingTop: ""
                    }), $et_pb_first_row.css({
                        paddingTop: "calc(" + (header_height - 58) + "px + " + $et_pb_first_row.css("paddingTop") + ")"
                    })) : (et_save_initial_page_container_style($et_main_content_first_row, "paddingTop"), $et_main_content_first_row.css({
                        paddingTop: header_height
                    }));
                    $("#et_fix_page_container_position").length || $("<style />", {
                        id: "et_fix_page_container_position",
                        text: "#page-container{ padding-top: 0 !important;}"
                    }).appendTo("head");
                    var $firstSection = $(".et_pb_section:visible:first"),
                        $firstRow = $firstSection.find(".et_pb_row:visible:first"),
                        $firstModule = $firstSection.find(".et_pb_module:visible:first"),
                        firstSectionHasParallax = $firstSection.hasClass("et_pb_section_parallax"),
                        firstRowHasParallax = $firstRow.hasClass("et_pb_section_parallax"),
                        firstModuleHasParallax = $firstModule.hasClass("et_pb_section_parallax");
                    (firstSectionHasParallax || firstRowHasParallax || firstModuleHasParallax) && $(window).trigger("resize.etTrueParallaxBackground")
                } else et_is_fixed_nav && $main_container_wrapper.css("paddingTop", header_height);
                $mainHeaderClone.remove(), et_change_primary_nav_position(0), $(document).trigger("et-pb-header-height-calculated")
            }

            function et_all_elements_loaded() {
                if (et_is_fixed_nav && et_calculate_header_values(), setTimeout(function() {
                        et_fix_page_container_position()
                    }, 0), window.et_is_minified_js && window.et_is_transparent_nav && !window.et_is_vertical_nav && $(window).trigger("resize"), window.hasOwnProperty("et_location_hash") && "" !== window.et_location_hash && et_page_load_scroll_to_anchor(), et_header_style_left && !window.et_is_vertical_nav && ($logo_width = parseInt($("#logo").width()), et_is_rtl ? $et_top_navigation.css("padding-right", $logo_width + 30) : $et_top_navigation.css("padding-left", $logo_width + 30)), $("p.demo_store").length && $("#footer-bottom").css("margin-bottom", $("p.demo_store").innerHeight()), $.fn.waypoint) {
                    var $waypoint_selector;
                    if (et_is_vertical_fixed_nav && ($waypoint_selector = $("#main-content")).waypoint({
                            handler: function(direction) {
                                et_fix_logo_transition(), "down" === direction ? $("#main-header").addClass("et-fixed-header") : $("#main-header").removeClass("et-fixed-header")
                            }
                        }), et_is_fixed_nav) {
                        window.et_is_transparent_nav && !window.et_is_vertical_nav && !$("body.woocommerce.single-product").length && $et_pb_first_row.length ? ($waypoint_selector = $et_pb_first_row.is(".et_pb_fullwidth_section") ? $et_pb_first_row.children(".et_pb_module:visible:first") : $et_pb_first_row.find(".et_pb_row:visible:first")).length || ($waypoint_selector = $("body.et_pb_pagebuilder_layout .et_pb_module:visible:first")) : $waypoint_selector = $(window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_main_content_first_row.length ? "#content-area" : "#main-content");
                        var checkIfScrolled = !0;
                        setTimeout(function() {
                            checkIfScrolled = !1
                        }, 0), $waypoint_selector.waypoint({
                            offset: function() {
                                if (etRecalculateOffset && (setTimeout(function() {
                                        et_calculate_header_values()
                                    }, 200), etRecalculateOffset = !1), et_hide_nav) return et_header_offset - et_header_height - 200;
                                var waypoint_selector_offset = $waypoint_selector.offset();
                                return waypoint_selector_offset.top < et_header_offset && (et_header_offset = 0 - (et_header_offset - waypoint_selector_offset.top)), et_header_offset
                            },
                            handler: function(direction) {
                                if (et_fix_logo_transition(), "down" === direction) {
                                    if (checkIfScrolled && 0 === $et_window.scrollTop()) return;
                                    if ($main_header.addClass("et-fixed-header"), $main_container_wrapper.addClass("et-animated-content"), $top_header.addClass("et-fixed-header"), !et_hide_nav && !window.et_is_transparent_nav && !$(".mobile_menu_bar_toggle").is(":visible")) {
                                        var $clone_header, clone_header_height, fix_padding, secondary_nav_height = $top_header.length ? parseInt($top_header.height()) : 0;
                                        $clone_header = $main_header.clone().addClass("et-fixed-header, et_header_clone").css({
                                            transition: "none",
                                            display: "none"
                                        }), clone_header_height = parseInt($clone_header.prependTo("body").height()), window.et_is_vertical_nav || (fix_padding = parseInt($main_container_wrapper.css("padding-top")) - clone_header_height - secondary_nav_height + 1, $main_container_wrapper.css("margin-top", -fix_padding)), $(".et_header_clone").remove()
                                    }
                                } else $main_header.removeClass("et-fixed-header"), $top_header.removeClass("et-fixed-header"), $main_container_wrapper.css("margin-top", "-1px");
                                setTimeout(function() {
                                    et_set_search_form_css()
                                }, 400)
                            }
                        })
                    }
                    et_hide_nav && et_hide_nav_transform()
                }
            }

            function et_hide_search() {
                $(".et_search_form_container").hasClass("et_pb_is_animating") || ($(".et_menu_container").removeClass("et_pb_menu_hidden et_pb_no_animation").addClass("et_pb_menu_visible"), $(".et_search_form_container").removeClass("et_pb_search_visible et_pb_no_animation").addClass("et_pb_search_form_hidden et_pb_is_animating"), setTimeout(function() {
                    $(".et_menu_container").addClass("et_pb_no_animation"), $(".et_search_form_container").addClass("et_pb_no_animation").removeClass("et_pb_is_animating")
                }, 1e3))
            }

            function et_set_search_form_css() {
                var $search_container = $(".et_search_form_container"),
                    $body = $("body");
                if ($search_container.hasClass("et_pb_search_visible")) {
                    var header_height = $("#main-header").innerHeight(),
                        menu_width = $("#top-menu").width(),
                        font_size = $("#top-menu li a").css("font-size");
                    $search_container.css({
                        height: header_height + "px"
                    }), $search_container.find("input").css("font-size", font_size), $body.hasClass("et_header_style_left") ? $search_container.find("form").css("max-width", menu_width + 60) : $search_container.css("max-width", menu_width + 60)
                }
            }

            function et_fb_side_nav_page_init() {
                $(window).off("scroll", window.et_pb_window_side_nav_scroll_init), $("#main-content .et_pb_side_nav").off("click", ".et_pb_side_nav a"), $("#main-content .et_pb_side_nav").remove(), et_pb_side_nav_page_init()
            }
            var $et_top_menu = $("ul.nav, ul.menu"),
                is_customize_preview = ($("#et_search_icon"), $("body").hasClass("et_is_customize_preview"));
            window.et_pb_init_nav_menu($et_top_menu), ($et_header_style_split.length && !window.et_is_vertical_nav || is_customize_preview) && (et_header_menu_split(), $(window).resize(function() {
                et_header_menu_split()
            })), window.et_is_vertical_nav && ($("#main-header").height() < $("#et-top-navigation").height() && $("#main-header").height($("#et-top-navigation").height() + $("#logo").height() + 100), et_set_right_vertical_menu()), window.et_calculate_header_values = function() {
                var $top_header = $("#top-header"),
                    secondary_nav_height = $top_header.length && $top_header.is(":visible") ? parseInt($top_header.innerHeight()) : 0,
                    admin_bar_height = $("#wpadminbar").length ? parseInt($("#wpadminbar").innerHeight()) : 0,
                    $slide_menu_container = $(".et_header_style_slide .et_slide_in_menu_container");
                if (et_header_height = parseInt($("#main-header").innerHeight()) + secondary_nav_height, et_header_modifier = et_header_height <= 90 ? et_header_height - 29 : et_header_height - 56, et_header_offset = et_header_modifier + admin_bar_height, et_primary_header_top = secondary_nav_height + admin_bar_height, $slide_menu_container.length && !$("body").hasClass("et_pb_slide_menu_active") && ($slide_menu_container.css({
                        right: "-" + parseInt($slide_menu_container.innerWidth()) + "px",
                        display: "none"
                    }), $("body").hasClass("et_boxed_layout"))) {
                    var page_container_margin = $main_container_wrapper.css("margin-left");
                    $main_header.css({
                        left: page_container_margin
                    })
                }
            };
            var $comment_form = $("#commentform");
            if (et_pb_form_placeholders_init($comment_form), $comment_form.submit(function() {
                    et_pb_remove_placeholder_text($comment_form)
                }), et_duplicate_menu($("#et-top-navigation ul.nav"), $("#et-top-navigation .mobile_nav"), "mobile_menu", "et_mobile_menu"), et_duplicate_menu("", $(".et_pb_fullscreen_nav_container"), "mobile_menu_slide", "et_mobile_menu", "no_click_event"), $("ul.et_disable_top_tier").length && ($disbaled_top_tier_links = $("ul.et_disable_top_tier > li > ul").prev("a"), $disbaled_top_tier_links.attr("href", "#"), $disbaled_top_tier_links.on("click", function(e) {
                    e.preventDefault()
                }), $disbaled_top_tier_links_mobile = $("ul#mobile_menu > li > ul").prev("a"), $disbaled_top_tier_links_mobile.attr("href", "#"), $disbaled_top_tier_links_mobile.on("click", function(e) {
                    e.preventDefault()
                })), $("#et-secondary-nav").length && $("#et-top-navigation #mobile_menu").append($("#et-secondary-nav").clone().html()), $(".et_slide_in_menu_container").length) {
                var $item_with_sub = $(".et_slide_in_menu_container").find(".menu-item-has-children > a");
                $item_with_sub.length && $item_with_sub.append('<span class="et_mobile_menu_arrow"></span>')
            }
            if (window.et_change_primary_nav_position = et_change_primary_nav_position, window.et_fix_page_container_position = et_fix_page_container_position, $et_container.data("previous-width", $et_container.width()), $(window).resize(function() {
                    var page_container_margin, window_width = parseInt($et_window.width()),
                        et_container_previous_width = parseInt($et_container.data("previous-width")),
                        et_container_css_width = $et_container.css("width"),
                        et_container_actual_width = (void 0 !== et_container_css_width ? "%" !== et_container_css_width.substr(-1, 1) : "") ? parseInt($et_container.width()) : parseInt($et_container.width()) / 100 * window_width,
                        containerWidthChanged = et_container_previous_width !== et_container_actual_width,
                        $slide_menu_container = $(".et_slide_in_menu_container"),
                        $adminbar = isBuilder ? window.top.jQuery("#wpadminbar") : $("#wpadminbar");
                    if (et_is_fixed_nav && containerWidthChanged) {
                        void 0 !== update_page_container_position && clearTimeout(update_page_container_position);
                        var update_page_container_position = setTimeout(function() {
                            et_fix_page_container_position(), "function" == typeof et_fix_fullscreen_section && et_fix_fullscreen_section()
                        }, 200);
                        $et_container.data("previous-width", et_container_actual_width)
                    }
                    if (et_hide_nav && et_hide_nav_transform(), ($adminbar.length && et_is_fixed_nav && window_width >= 740 && window_width <= 782 || isBuilder) && (et_calculate_header_values(), et_change_primary_nav_position(0)), et_set_search_form_css(), $slide_menu_container.length && !$("body").hasClass("et_pb_slide_menu_active") && ($slide_menu_container.css({
                            right: "-" + parseInt($slide_menu_container.innerWidth()) + "px"
                        }), $("body").hasClass("et_boxed_layout") && et_is_fixed_nav && (page_container_margin = $main_container_wrapper.css("margin-left"), $main_header.css({
                            left: page_container_margin
                        }))), $slide_menu_container.length && $("body").hasClass("et_pb_slide_menu_active"))
                        if ($("body").hasClass("et_boxed_layout")) {
                            var left_position;
                            page_container_margin = parseFloat($main_container_wrapper.css("margin-left")), $main_container_wrapper.css({
                                left: "-" + (parseInt($slide_menu_container.innerWidth()) - page_container_margin) + "px"
                            }), et_is_fixed_nav && (left_position = 0 > parseInt($slide_menu_container.innerWidth()) - 2 * page_container_margin ? Math.abs($slide_menu_container.innerWidth() - 2 * page_container_margin) : "-" + ($slide_menu_container.innerWidth() - 2 * page_container_margin)) < parseInt($slide_menu_container.innerWidth()) && $main_header.css({
                                left: left_position + "px"
                            })
                        } else $("#page-container, .et_fixed_nav #main-header").css({
                            left: "-" + parseInt($slide_menu_container.innerWidth()) + "px"
                        });
                    if ($slide_menu_container.length && $("body").hasClass("et_header_style_fullscreen")) {
                        var top_bar_height = parseInt($slide_menu_container.find(".et_slide_menu_top").innerHeight());
                        $slide_menu_container.css({
                            "padding-top": top_bar_height + 20
                        })
                    }
                    et_set_right_vertical_menu()
                }), $(window).ready(function() {
                    $.fn.fitVids && $("#main-content").fitVids({
                        customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
                    })
                }), $('a[href*="#"]:not([href="#"])').click(function() {
                    var $this_link = $(this),
                        has_closest_smooth_scroll_disabled = $this_link.closest(".et_smooth_scroll_disabled").length,
                        has_closest_woocommerce_tabs = $this_link.closest(".woocommerce-tabs").length && $this_link.closest(".tabs").length,
                        has_closest_timetable_tab = $this_link.closest(".tt_tabs_navigation").length,
                        has_closest_eab_cal_link = $this_link.closest(".eab-shortcode_calendar-navigation-link").length,
                        has_closest_ee_cart_link = $this_link.closest(".view-cart-lnk").length,
                        has_acomment_reply = $this_link.hasClass("acomment-reply"),
                        is_woocommerce_review_link = $this_link.hasClass("woocommerce-review-link"),
                        disable_scroll = has_closest_smooth_scroll_disabled || has_closest_ee_cart_link || has_closest_woocommerce_tabs || has_closest_eab_cal_link || has_acomment_reply || is_woocommerce_review_link || has_closest_timetable_tab;
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname && !disable_scroll) {
                        var target = $(this.hash);
                        if ((target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")).length) return $this_link.closest(".et_pb_fullscreen_menu_opened").length > 0 && et_pb_toggle_fullscreen_menu(), et_pb_smooth_scroll(target, !1, 800), !$("#main-header").hasClass("et-fixed-header") && $("body").hasClass("et_fixed_nav") && $(window).width() > 980 && setTimeout(function() {
                            et_pb_smooth_scroll(target, !1, 40, "linear")
                        }, 780), !1
                    }
                }), window.et_pb_window_side_nav_scroll_init = function() {
                    if (!0 !== window.et_calculating_scroll_position && !1 !== window.et_side_nav_links_initialized) {
                        window.et_calculating_scroll_position = !0;
                        var side_offset, add_offset = $("body").hasClass("et_fixed_nav") ? 20 : -90,
                            top_header_height = $("#top-header").length > 0 ? parseInt($("#top-header").height()) : 0,
                            main_header_height = $("#main-header").length > 0 ? parseInt($("#main-header").height()) : 0;
                        $("#wpadminbar").length > 0 && parseInt($(window).width()) > 600 && (add_offset += parseInt($("#wpadminbar").outerHeight())), side_offset = window.et_is_vertical_nav ? top_header_height + add_offset + 60 : top_header_height + main_header_height + add_offset;
                        for (var window_height = parseInt($(window).height()), scroll_position = parseInt($(window).scrollTop()), at_bottom_of_page = window_height + scroll_position === parseInt($(document).height()), total_links = $(".side_nav_item a").length - 1, link = 0; link <= total_links; link++) {
                            var $target_section = $(".et_pb_section:visible:not(.et_pb_section div)").eq(link),
                                at_top_of_page = void 0 === $target_section.offset(),
                                current_active = $(".side_nav_item a.active").parent().index(),
                                next_active = null,
                                target_offset = !1 === at_top_of_page ? $target_section.offset().top - side_offset : 0;
                            at_top_of_page ? next_active = 0 : at_bottom_of_page ? next_active = total_links : scroll_position >= target_offset && (next_active = link), null !== next_active && next_active !== current_active && ($(".side_nav_item a").removeClass("active"), $("a#side_nav_item_id_" + next_active).addClass("active"))
                        }
                        window.et_calculating_scroll_position = !1
                    }
                }, window.et_pb_side_nav_page_init = function() {
                    var $sections = $(".et_pb_section:visible:not(.et_pb_section div)"),
                        total_sections = $sections.length,
                        side_nav_offset = parseInt((20 * total_sections + 40) / 2);
                    window.et_side_nav_links_initialized = !1, window.et_calculating_scroll_position = !1, total_sections > 1 && $(".et_pb_side_nav_page").length && ($("#main-content").append('<ul class="et_pb_side_nav"></ul>'), $sections.each(function(index, element) {
                        var active_class = 0 === index ? "active" : "";
                        $(".et_pb_side_nav").append('<li class="side_nav_item"><a href="#" id="side_nav_item_id_' + index + '" class="' + active_class + '">' + index + "</a></li>"), total_sections - 1 === index && (window.et_side_nav_links_initialized = !0)
                    }), $("ul.et_pb_side_nav").css("marginTop", "-" + side_nav_offset + "px"), $(".et_pb_side_nav").addClass("et-visible"), $(".et_pb_side_nav a").click(function() {
                        var index = parseInt($(this).text()),
                            $target = $(".et_pb_section:visible:not(.et_pb_section div)").eq(index),
                            top_section = "0" == $(this).text();
                        return et_pb_smooth_scroll($target, top_section, 800), !$("#main-header").hasClass("et-fixed-header") && $("body").hasClass("et_fixed_nav") && parseInt($(window).width()) > 980 && setTimeout(function() {
                            et_pb_smooth_scroll($target, top_section, 200)
                        }, 500), !1
                    }), $(window).on("scroll", et_pb_window_side_nav_scroll_init))
                }, $("body").is(".et-fb, .et-bfb")) {
                var _ = window._ || isBuilder && window.top._;
                _ && (window.et_pb_side_nav_page_init = _.debounce(window.et_pb_side_nav_page_init, 200))
            }
            et_pb_side_nav_page_init(), $(".et_pb_scroll_top").length && ($(window).scroll(function() {
                $(this).scrollTop() > 800 ? $(".et_pb_scroll_top").show().removeClass("et-hidden").addClass("et-visible") : $(".et_pb_scroll_top").removeClass("et-visible").addClass("et-hidden")
            }), $(".et_pb_scroll_top").click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 800)
            })), $(".comment-reply-link").length && $(".comment-reply-link").addClass("et_pb_button"), $("#et_top_search").click(function() {
                var $search_container = $(".et_search_form_container");
                $search_container.hasClass("et_pb_is_animating") || ($(".et_menu_container").removeClass("et_pb_menu_visible et_pb_no_animation").addClass("et_pb_menu_hidden"), $search_container.removeClass("et_pb_search_form_hidden et_pb_no_animation").addClass("et_pb_search_visible et_pb_is_animating"), setTimeout(function() {
                    $(".et_menu_container").addClass("et_pb_no_animation"), $search_container.addClass("et_pb_no_animation").removeClass("et_pb_is_animating")
                }, 1e3), $search_container.find("input").focus(), et_set_search_form_css())
            }), $(".et_close_search_field").click(function() {
                et_hide_search()
            }), $(document).mouseup(function(e) {
                var $header = $("#main-header");
                $(".et_menu_container").hasClass("et_pb_menu_hidden") && ($header.is(e.target) || 0 !== $header.has(e.target).length || et_hide_search())
            }), $("#logo").length && et_preload_image($("#logo").attr("src"), function() {
                var $logo_wrap, logo_width, logo_height, $logo = $("#logo"),
                    is_svg = "svg" === $logo.attr("src").substr(-3, 3);
                $("body").append($("<div />", {
                    id: "et-define-logo-wrap",
                    style: "position: fixed; bottom: 0; opacity: 0;"
                })), $logo_wrap = $("#et-define-logo-wrap"), is_svg && $logo_wrap.addClass("svg-logo"), $logo_wrap.html($logo.clone().css({
                    display: "block"
                }).removeAttr("id")), logo_width = $logo_wrap.find("img").width(), logo_height = $logo_wrap.find("img").height(), $logo.attr({
                    "data-actual-width": logo_width,
                    "data-actual-height": logo_height
                }), $logo_wrap.remove(), et_fix_logo_transition(!0)
            }), $(".footer-widget").each(function() {
                var $footer_widget = $(this),
                    footer_widget_width = $footer_widget.width(),
                    $adsense_ins = $footer_widget.find(".widget_adsensewidget ins");
                $adsense_ins.length && $adsense_ins.width(footer_widget_width)
            }), $("body").is(".et-fb") ? ($(window).on("et_fb_root_did_mount", function() {
                et_fb_side_nav_page_init(), et_all_elements_loaded()
            }), $(window).on("et_fb_section_content_change", et_fb_side_nav_page_init)) : $(window).load(et_all_elements_loaded)
        }), $("#main-header").on("click", ".et_toggle_slide_menu", function() {
            et_toggle_slide_menu()
        }), et_is_touch_device && ($et_window.on("swipeleft", function(event) {
            30 >= parseInt($et_window.width()) - parseInt(event.swipestart.coords[0]) && et_toggle_slide_menu("open")
        }), $et_window.on("swiperight", function(event) {
            $("body").hasClass("et_pb_slide_menu_active") && et_toggle_slide_menu("close")
        })), $("#page-container").on("click", ".et_toggle_fullscreen_menu", function() {
            et_pb_toggle_fullscreen_menu()
        }), $(window).unload(function() {
            $("body").hasClass("et_pb_fullscreen_menu_active") && $(".et_toggle_fullscreen_menu").trigger("click")
        }), $(".et_pb_fullscreen_nav_container").on("click", "li.menu-item-has-children > a", function() {
            var $this_parent = $(this).closest("li"),
                $this_arrow = $this_parent.find(">a .et_mobile_menu_arrow"),
                $closest_submenu = $this_parent.find(">ul"),
                is_opened_submenu = $this_arrow.hasClass("et_pb_submenu_opened");
            return $this_arrow.toggleClass("et_pb_submenu_opened"), is_opened_submenu ? ($closest_submenu.removeClass("et_pb_slide_dropdown_opened"), $closest_submenu.slideToggle(700, "easeInOutCubic")) : ($closest_submenu.slideToggle(700, "easeInOutCubic"), $closest_submenu.addClass("et_pb_slide_dropdown_opened")), !1
        }), $("body").hasClass("et_header_style_fullscreen")) {
        var $menu_container = $(".et_header_style_fullscreen .et_slide_in_menu_container");
        if ($menu_container.length) {
            var top_bar_height = $menu_container.find(".et_slide_menu_top").innerHeight();
            $menu_container.css({
                "padding-top": top_bar_height + 20
            })
        }
    }
    $(document.body).on("checkout_error", function() {
        et_adjust_woocommerce_checkout_scroll()
    }), $(document.body).on("updated_checkout", function(data) {
        "failure" === data.result && et_adjust_woocommerce_checkout_scroll()
    })
}(jQuery);
(function($) {
    $(document).ready(function() {
        var user_agent = navigator.userAgent;
        var is_opera_edge;
        var browser = user_agent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i) || [];
        var browser_name = '';
        var browser_class = '';
        if (/trident/i.test(browser[0])) {
            browser_name = 'ie';
        } else if (browser[0] === 'Chrome') {
            is_opera_edge = user_agent.match(/\b(OPR|Edge)/);
            if (is_opera_edge !== null) {
                browser_name = is_opera_edge[0].replace('OPR', 'opera');
            }
        }
        if ('' === browser_name) {
            if ('standalone' in window.navigator && !window.navigator.standalone) {
                browser_name = 'uiwebview';
            } else {
                browser_name = browser[0] && '' !== browser[0] ? browser[0] : navigator.appName;
            }
        }
        browser_name = browser_name.toLowerCase();
        switch (browser_name) {
            case 'msie':
                browser_class = 'ie';
                break;
            case 'firefox':
                browser_class = 'gecko';
                break;
            default:
                browser_class = browser_name;
                break;
        }
        if (user_agent.match(/iPhone/)) {
            browser_class += ' iphone';
        }
        $('body').addClass(browser_class);
    });
})(jQuery);
! function(d, l) {
    "use strict";
    var e = !1,
        o = !1;
    if (l.querySelector)
        if (d.addEventListener) e = !0;
    if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
        if (d.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
                                c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
                            for (r = 0; r < c.length; r++) c[r].style.display = "none";
                            for (r = 0; r < o.length; r++)
                                if (a = o[r], e.source === a.contentWindow) {
                                    if (a.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        a.height = i
                                    }
                                    if ("link" === t.message)
                                        if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
                                            if (l.activeElement === a) d.top.location.href = t.value
                                }
                        }
            }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

    function t() {
        if (!o) {
            o = !0;
            var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                s = !!navigator.userAgent.match(/Trident.*rv:11\./),
                n = l.querySelectorAll("iframe.wp-embedded-content");
            for (t = 0; t < n.length; t++) {
                if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
                if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
            }
        }
    }
}(window, document);
(function($) {
    $('.feedzy-lazy:not(.loading)').each(function() {
        var $feedzy_block = $(this);
        var $attributes = {};
        $.each(this.attributes, function() {
            if (this.specified && this.name.includes('data-')) {
                $attributes[this.name.replace('data-', '')] = this.value;
            }
        });
        setTimeout(function() {
            $feedzy_block.addClass('loading');
            $.ajax({
                url: feedzy.url,
                method: 'POST',
                data: {
                    action: 'feedzy',
                    _action: 'lazy',
                    args: $attributes,
                    nonce: feedzy.nonce
                },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('X-WP-Nonce', feedzy.rest_nonce);
                },
                success: function(data) {
                    if (data.success) {
                        $feedzy_block.empty().append(data.data.content);
                    }
                },
                complete: function() {
                    $feedzy_block.removeClass('loading');
                }
            });
        }, 1000);
    });
})(jQuery, feedzy);
! function a(o, s, u) {
    function c(t, e) {
        if (!s[t]) {
            if (!o[t]) {
                var r = "function" == typeof require && require;
                if (!e && r) return r(t, !0);
                if (l) return l(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = s[t] = {
                exports: {}
            };
            o[t][0].call(i.exports, function(e) {
                return c(o[t][1][e] || e)
            }, i, i.exports, a, o, s, u)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < u.length; e++) c(u[e]);
    return c
}({
    1: [function(e, t, r) {
        "use strict";
        var n = window.mc4wp || {},
            i = e("./forms/forms.js");

        function a(e, t) {
            i.trigger(t[0].id + "." + e, t), i.trigger(e, t)
        }

        function o(e, n) {
            document.addEventListener(e, function(e) {
                if (e.target) {
                    var t = e.target,
                        r = !1;
                    "string" == typeof t.className && (r = -1 < t.className.indexOf("mc4wp-form")), r || "function" != typeof t.matches || (r = t.matches(".mc4wp-form *")), r && n.call(e, e)
                }
            }, !0)
        }
        if (e("./forms/conditional-elements.js"), o("submit", function(e) {
                var t = i.getByElement(e.target);
                e.defaultPrevented || i.trigger(t.id + ".submit", [t, e]), e.defaultPrevented || i.trigger("submit", [t, e])
            }), o("focus", function(e) {
                var t = i.getByElement(e.target);
                t.started || (a("started", [t, e]), t.started = !0)
            }), o("change", function(e) {
                a("change", [i.getByElement(e.target), e])
            }), n.listeners) {
            for (var s = n.listeners, u = 0; u < s.length; u++) i.on(s[u].event, s[u].callback);
            delete n.listeners
        }
        n.forms = i, window.mc4wp = n
    }, {
        "./forms/conditional-elements.js": 2,
        "./forms/forms.js": 4
    }],
    2: [function(e, t, r) {
        "use strict";

        function n(e) {
            for (var t = !!e.getAttribute("data-show-if"), r = t ? e.getAttribute("data-show-if").split(":") : e.getAttribute("data-hide-if").split(":"), n = r[0], i = (1 < r.length ? r[1] : "*").split("|"), a = function(e, t) {
                    for (var r = [], n = e.querySelectorAll('input[name="' + t + '"],select[name="' + t + '"],textarea[name="' + t + '"]'), i = 0; i < n.length; i++) {
                        var a = n[i];
                        ("radio" !== a.type && "checkbox" !== a.type || a.checked) && r.push(a.value)
                    }
                    return r
                }(function(e) {
                    for (var t = e; t.parentElement;)
                        if ("FORM" === (t = t.parentElement).tagName) return t;
                    return null
                }(e), n), o = !1, s = 0; s < a.length; s++) {
                var u = a[s];
                if (o = -1 < i.indexOf(u) || -1 < i.indexOf("*") && 0 < u.length) break
            }
            e.style.display = t ? o ? "" : "none" : o ? "none" : "";
            var c = e.querySelectorAll("input,select,textarea");
            [].forEach.call(c, function(e) {
                (o || t) && e.getAttribute("data-was-required") && (e.required = !0, e.removeAttribute("data-was-required")), o && t || !e.required || (e.setAttribute("data-was-required", "true"), e.required = !1)
            })
        }

        function i() {
            var e = document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]");
            [].forEach.call(e, n)
        }

        function a(e) {
            if (e.target && e.target.form && !(e.target.form.className.indexOf("mc4wp-form") < 0)) {
                var t = e.target.form.querySelectorAll("[data-show-if],[data-hide-if]");
                [].forEach.call(t, n)
            }
        }
        document.addEventListener("keyup", a, !0), document.addEventListener("change", a, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
    }, {}],
    3: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            this.id = e, this.element = t || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
        }
        var i = e("form-serialize"),
            a = e("populate.js");
        n.prototype.setData = function(e) {
            try {
                a(this.element, e)
            } catch (e) {
                console.error(e)
            }
        }, n.prototype.getData = function() {
            return i(this.element, {
                hash: !0,
                empty: !0
            })
        }, n.prototype.getSerializedData = function() {
            return i(this.element, {
                hash: !1,
                empty: !0
            })
        }, n.prototype.setResponse = function(e) {
            this.element.querySelector(".mc4wp-response").innerHTML = e
        }, n.prototype.reset = function() {
            this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
        }, t.exports = n
    }, {
        "form-serialize": 5,
        "populate.js": 6
    }],
    4: [function(e, t, r) {
        "use strict";
        var n = e("./form.js"),
            i = [],
            a = {};

        function o(e, t) {
            a[e] = a[e] || [], a[e].forEach(function(e) {
                return e.apply(null, t)
            })
        }

        function s(e, t) {
            t = t || parseInt(e.getAttribute("data-id")) || 0;
            var r = new n(t, e);
            return i.push(r), r
        }
        t.exports = {
            get: function(e) {
                e = parseInt(e);
                for (var t = 0; t < i.length; t++)
                    if (i[t].id === e) return i[t];
                return s(document.querySelector(".mc4wp-form-" + e), e)
            },
            getByElement: function(e) {
                for (var t = e.form || e, r = 0; r < i.length; r++)
                    if (i[r].element === t) return i[r];
                return s(t)
            },
            on: function(e, t) {
                a[e] = a[e] || [], a[e].push(t)
            },
            off: function(e, t) {
                a[e] = a[e] || [], a[e] = a[e].filter(function(e) {
                    return e !== t
                })
            },
            trigger: function(e, t) {
                "submit" === e || 0 < e.indexOf(".submit") ? o(e, t) : window.setTimeout(function() {
                    o(e, t)
                }, 1)
            }
        }
    }, {
        "./form.js": 3
    }],
    5: [function(e, t, r) {
        var v = /^(?:submit|button|image|reset|file)$/i,
            g = /^(?:input|select|textarea|keygen)/i,
            i = /(\[[^\[\]]*\])/g;

        function y(e, t, r) {
            if (t.match(i)) {
                ! function e(t, r, n) {
                    if (0 === r.length) return t = n;
                    var i = r.shift(),
                        a = i.match(/^\[(.+?)\]$/);
                    if ("[]" === i) return t = t || [], Array.isArray(t) ? t.push(e(null, r, n)) : (t._values = t._values || [], t._values.push(e(null, r, n))), t;
                    if (a) {
                        var o = a[1],
                            s = +o;
                        isNaN(s) ? (t = t || {})[o] = e(t[o], r, n) : (t = t || [])[s] = e(t[s], r, n)
                    } else t[i] = e(t[i], r, n);
                    return t
                }(e, function(e) {
                    var t = [],
                        r = new RegExp(i),
                        n = /^([^\[\]]*)/.exec(e);
                    for (n[1] && t.push(n[1]); null !== (n = r.exec(e));) t.push(n[1]);
                    return t
                }(t), r)
            } else {
                var n = e[t];
                n ? (Array.isArray(n) || (e[t] = [n]), e[t].push(r)) : e[t] = r
            }
            return e
        }

        function w(e, t, r) {
            return r = r.replace(/(\r)?\n/g, "\r\n"), r = (r = encodeURIComponent(r)).replace(/%20/g, "+"), e + (e ? "&" : "") + encodeURIComponent(t) + "=" + r
        }
        t.exports = function(e, t) {
            "object" != typeof t ? t = {
                hash: !!t
            } : void 0 === t.hash && (t.hash = !0);
            for (var r = t.hash ? {} : "", n = t.serializer || (t.hash ? y : w), i = e && e.elements ? e.elements : [], a = Object.create(null), o = 0; o < i.length; ++o) {
                var s = i[o];
                if ((t.disabled || !s.disabled) && s.name && (g.test(s.nodeName) && !v.test(s.type))) {
                    var u = s.name,
                        c = s.value;
                    if ("checkbox" !== s.type && "radio" !== s.type || s.checked || (c = void 0), t.empty) {
                        if ("checkbox" !== s.type || s.checked || (c = ""), "radio" === s.type && (a[s.name] || s.checked ? s.checked && (a[s.name] = !0) : a[s.name] = !1), null == c && "radio" == s.type) continue
                    } else if (!c) continue;
                    if ("select-multiple" !== s.type) r = n(r, u, c);
                    else {
                        c = [];
                        for (var l = s.options, f = !1, m = 0; m < l.length; ++m) {
                            var d = l[m],
                                p = t.empty && !d.value,
                                h = d.value || p;
                            d.selected && h && (f = !0, r = t.hash && "[]" !== u.slice(u.length - 2) ? n(r, u + "[]", d.value) : n(r, u, d.value))
                        }!f && t.empty && (r = n(r, u, ""))
                    }
                }
            }
            if (t.empty)
                for (var u in a) a[u] || (r = n(r, u, ""));
            return r
        }
    }, {}],
    6: [function(e, t, r) {
        void 0 !== t && t.exports && (t.exports = function e(t, r, n) {
            for (var i in r)
                if (r.hasOwnProperty(i)) {
                    var a = i,
                        o = r[i];
                    if (void 0 === o && (o = ""), null === o && (o = ""), void 0 !== n && (a = n + "[" + i + "]"), o.constructor === Array) a += "[]";
                    else if ("object" == typeof o) {
                        e(t, o, a);
                        continue
                    }
                    var s = t.elements.namedItem(a);
                    if (s) switch (s.type || s[0].type) {
                        default: s.value = o;
                        break;
                        case "radio":
                                case "checkbox":
                                for (var u = o.constructor === Array ? o : [o], c = 0; c < s.length; c++) s[c].checked = -1 < u.indexOf(s[c].value);
                            break;
                        case "select-multiple":
                                u = o.constructor === Array ? o : [o];
                            for (var l = 0; l < s.options.length; l++) s.options[l].selected = -1 < u.indexOf(s.options[l].value);
                            break;
                        case "select":
                                case "select-one":
                                s.value = o.toString() || o;
                            break;
                        case "date":
                                s.value = new Date(o).toISOString().split("T")[0]
                    }
                }
        })
    }, {}]
}, {}, [1]);