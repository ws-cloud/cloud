/**
 * crisp-client
 * @version v2.7.0 207c042
 * @author Crisp IM SARL
 * @date 2/5/2021
 */
(function() {
    try {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        };
        i.prototype.init = function() {
            var i, n = this,
            s = "init";
            try {
                this.c && !0 !== this.p && (this.p = !0, (i = document.createElement("div")).id = "crisp-loader", document.getElementsByTagName("body")[0].appendChild(i),
                function t() {
                    setTimeout(function() {
                        n.f -= n.m,
                        void 0 !== window[n.y] && "function" == typeof window[n.y].__init && "none" === window.getComputedStyle(i).getPropertyValue("display") == 1 ? (n.x.info(n.ns + "." + s, "Dependencies loaded"), i.parentNode.removeChild(i), window[n.y].__init({
                            dollar_crisp: window[n.y],
                            project_name: n.$,
                            url_go: n.on,
                            url_image: n.fn,
                            url_game: n._n,
                            url_relay_client: n.fs,
                            url_relay_stream: n.ms,
                            url_website: n.ws,
                            url_assets: n._e,
                            rtc_ice: n.io,
                            client_environment: n.do,
                            client_revision: n.ca,
                            website_domain: n._a,
                            website_id: n.c,
                            token_id: n._f,
                            cookie_expire: n.oi,
                            cookie_domain: n.t_,
                            page_url: n.i_,
                            page_domain: n.n_,
                            browser_useragent: n.s_,
                            browser_timezone: n.r_,
                            browser_capabilities: n.e_,
                            browser_locales: n.o_,
                            ready_trigger: n.c_,
                            runtime_configuration: n.h_,
                            reset_handler: function() {
                                n.reset()
                            }
                        })) : 0 < n.f ? t() : n.x.error(n.ns + "." + s, "Could not load dependencies")
                    },
                    n.m)
                } ())
            } catch(t) {}
        },
        i.prototype.reset = function() {
            try {
                this.Oe(),
                this.init()
            } catch(t) {}
        },
        i.prototype.a_ = function() {
            try {
                this.u_("dns-prefetch", this.fs),
                this.u_("preconnect", this._e),
                this.d_(),
                this.p_()
            } catch(t) {}
        },
        i.prototype.u_ = function(t, i) {
            try {
                var n = document.createElement("link");
                n.setAttribute("href", i),
                n.setAttribute("rel", t),
                n.setAttribute("crossorigin", ""),
                this.f_(n),
                document.getElementsByTagName("head")[0].appendChild(n)
            } catch(t) {}
        },
        i.prototype.d_ = function() {
            try {
                var t = document.createElement("script");
                t.src = ["https://cdn.jsdelivr.net/gh/dbconf/cdn-cloud@1.1.9/client.js?" + this.ca].join(""),
                t.type = "text/javascript",
                t.async = 1,
                this.f_(t),
                document.getElementsByTagName("head")[0].appendChild(t)
            } catch(t) {}
        },
        i.prototype.p_ = function() {
            try {
                var t = this.__(),
                i = document.createElement("link");
                i.href = ["https://cdn.jsdelivr.net/gh/dbconf/cdn-cloud@1.1.9/client_default.css?" + this.ca].join(""),
                i.type = "text/css",
                i.rel = "stylesheet",
                this.f_(i),
                document.getElementsByTagName("head")[0].appendChild(i)
            } catch(t) {}
        },
        i.prototype.Oe = function() {
            this.y_(),
            this.I_(),
            this.v_()
        },
        i.prototype.y_ = function() {
            this.p = !1,
            this.f = this.w_,
            this._a = document.domain,
            this.i_ = document.location.href,
            this.n_ = document.location.hostname,
            this.s_ = window.navigator.userAgent,
            this.r_ = (new Date).getTimezoneOffset(),
            this.o_ = this.C_(),
            "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID ? this.c = CRISP_WEBSITE_ID: this.c = this.R_(),
            "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this._f = CRISP_TOKEN_ID: "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this._f = CRISP_TOKEN_ID.toString() : this._f = null,
            "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE ? this.oi = CRISP_COOKIE_EXPIRE: this.oi = null,
            "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN ? this.t_ = CRISP_COOKIE_DOMAIN: this.t_ = null,
            "function" == typeof CRISP_READY_TRIGGER ? this.c_ = CRISP_READY_TRIGGER: this.c_ = {},
            "object" === ("undefined" == typeof CRISP_RUNTIME_CONFIG ? "undefined": t(CRISP_RUNTIME_CONFIG)) ? this.h_ = CRISP_RUNTIME_CONFIG: this.h_ = {},
            "object" === ("undefined" == typeof CRISP_INCLUDE_ATTRS ? "undefined": t(CRISP_INCLUDE_ATTRS)) ? this.g_ = CRISP_INCLUDE_ATTRS: this.g_ = {}
        },
        i.prototype.I_ = function() {
            try {
                this.e_ = [],
                "function" == typeof window.MutationObserver && "function" == typeof JSON.stringify && this.e_.push("browsing"),
                ("function" == typeof window.RTCPeerConnection && "object" === t(navigator.mediaDevices) && "https:" === document.location.protocol && (window.innerWidth || 0) >= this.S_ && (window.innerHeight || 0) >= this.E_ || !0 === this.b_) && this.e_.push("call")
            } catch(t) {}
        },
        i.prototype.v_ = function() {
            var t;
            try {
                this.h_.locale && ( - 1 !== (t = this.o_.indexOf(this.h_.locale)) && this.o_.splice(t, 1), this.o_.unshift(this.h_.locale))
            } catch(t) {}
        },
        i.prototype.f_ = function(t) {
            try {
                for (var i in this.g_) this.g_.hasOwnProperty(i) && t.setAttribute(i, this.g_[i])
            } catch(t) {}
        },
        i.prototype.R_ = function() {
            var t = null;
            try {
                for (var i = document.querySelectorAll("script[src]"), n = 0; n < i.length; n++) {
                    var s = this.P_.exec(i[n].src);
                    if (s && "string" == typeof s[1]) {
                        t = s[1];
                        break
                    }
                }
            } catch(t) {} finally {
                return t
            }
        },
        i.prototype.__ = function() {
            var t = "default";
            try {
                var i = (navigator.userAgent || "").toLowerCase(),
                n = (navigator.appVersion || "").toLowerCase(),
                s = !1;
                if (!0 !== s && ( - 1 === i.indexOf("opera mini/") && -1 === i.indexOf("msie") && -1 === n.indexOf("trident/") || (s = !0)), !0 !== s) for (var r = 0; r < this.O_.length; r++) {
                    var e = this.O_[r],
                    o = i.match(e.pattern);
                    if (o && o[1] && parseInt(o[1], 10) <= e.version) {
                        s = !0;
                        break
                    }
                } ! 0 === s && (t = "legacy")
            } catch(t) {} finally {
                return t
            }
        },
        i.prototype.T_ = function() {
            var t = !0;
            try { ! (window.innerWidth && window.innerWidth < this.D_) && !0 === navigator.cookieEnabled && !0 !== this.N_(this.n_) && !0 !== this.K_(this.s_) && window.WebSocket || (t = !1)
            } catch(t) {} finally {
                return t
            }
        },
        i.prototype.N_ = function(t) {
            var i = 0 < arguments.length && void 0 !== t ? t: "",
            n = !1;
            try {
                if (i) for (var s = 0; s < this.k_.domains.length; s++) {
                    var r = this.k_.domains[s],
                    e = "." + r;
                    if (i === r || i.slice( - 1 * e.length) === e) {
                        n = !0;
                        break
                    }
                }
            } catch(t) {} finally {
                return n
            }
        },
        i.prototype.K_ = function(t) {
            var i = 0 < arguments.length && void 0 !== t ? t: "",
            n = !1;
            try {
                if (i) for (var s = 0; s < this.k_.agents.length; s++) if ( - 1 !== i.indexOf(this.k_.agents[s])) {
                    n = !0;
                    break
                }
            } catch(t) {} finally {
                return n
            }
        },
        i.prototype.C_ = function() {
            var t = [];
            try {
                for (var i = navigator.languages && 0 < navigator.languages.length ? navigator.languages: [navigator.language || navigator.userLanguage], n = 0; n < i.length; n++) i[n] && t.push(i[n])
            } catch(t) {} finally {
                return t
            }
        },
        new i
    } catch(t) {}
    function i() {
        var t, i = this;
        try {
            this.ns = "CrispLoader",
            this.x = {
                warn: function() {},
                error: function() {},
                info: function() {},
                log: function() {},
                debug: function() {}
            },
            this.b_ = !1,
            this.$ = "crisp-client",
            this.j_ = "client.crisp.chat",
            this.G_ = "client.relay.crisp.chat",
            this.A_ = "stream.relay.crisp.chat",
            this.ca = "207c042",
            this.do = "production",
            this.U_ = "https:",
            this.ws = "https://crisp.chat",
            this.on = "https://go.crisp.chat",
            this.fn = "https://image.crisp.chat",
            this._n = "https://game.crisp.chat",
            this.fs = this.U_ + "//" + this.G_,
            this.ms = this.U_ + "//" + this.A_,
            this._e = this.U_ + "//" + this.j_,
            this.io = [{
                urls: ["stun:stun.media.crisp.chat:3478?transport=udp", "stun:stun.media.crisp.chat:3478?transport=tcp", "stun:stun.media.crisp.chat:3479?transport=udp", "stun:stun.media.crisp.chat:3479?transport=tcp"]
            },
            {
                urls: ["turn:turn.media.crisp.chat:3478?transport=udp", "turn:turn.media.crisp.chat:3478?transport=tcp", "turn:turn.media.crisp.chat:3479?transport=udp", "turn:turn.media.crisp.chat:3479?transport=tcp", "turns:turn.media.crisp.chat:443?transport=tcp"],
                username: "client_9F9kh",
                credential: "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"
            }],
            this.k_ = {
                domains: [],
                agents: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "GTmetrix", "Lighthouse"]
            },
            this.l_ = "static/javascripts",
            this.m_ = "static/stylesheets",
            this.y = "$crisp",
            this.m = 100,
            this.w_ = 3e4,
            this.x_ = 1e3,
            this.D_ = 280,
            this.S_ = 320,
            this.E_ = 420,
            this.O_ = [{
                pattern: /edg(?:e)?\/([0-9\.]+)/,
                version: 79
            },
            {
                pattern: /chrom(?:e|ium)\/([0-9\.]+)/,
                version: 57
            },
            {
                pattern: /firefox\/([0-9\.]+)/,
                version: 51
            },
            {
                pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                version: 11
            },
            {
                pattern: /android ([0-9\.]+)/,
                version: 7
            }],
            this.P_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i,
            this.Oe(),
            !0 === this.T_() && ("interactive" === document.readyState || "complete" === document.readyState ? this.init() : (t = document.onreadystatechange ||
            function() {},
            window.addEventListener("DOMContentLoaded",
            function() {
                i.init()
            }), document.onreadystatechange = function() {
                "function" == typeof t && t(),
                "interactive" !== document.readyState && "complete" !== document.readyState || setTimeout(function() {
                    i.init()
                },
                i.x_)
            }), void 0 !== window[this.y] && "function" == typeof window[this.y].__init || this.a_())
        } catch(t) {}
    }
})();
