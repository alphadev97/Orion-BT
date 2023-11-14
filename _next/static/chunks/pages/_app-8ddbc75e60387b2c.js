(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6489: function (e, t) {
      "use strict";
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (t.Q = function (e, t) {
        if ("string" != typeof e)
          throw TypeError("argument str must be a string");
        for (var n = {}, i = (t || {}).decode || r, o = 0; o < e.length; ) {
          var s = e.indexOf("=", o);
          if (-1 === s) break;
          var a = e.indexOf(";", o);
          if (-1 === a) a = e.length;
          else if (a < s) {
            o = e.lastIndexOf(";", s - 1) + 1;
            continue;
          }
          var l = e.slice(o, s).trim();
          if (void 0 === n[l]) {
            var c = e.slice(s + 1, a).trim();
            34 === c.charCodeAt(0) && (c = c.slice(1, -1)),
              (n[l] = (function (e, t) {
                try {
                  return t(e);
                } catch (t) {
                  return e;
                }
              })(c, i));
          }
          o = a + 1;
        }
        return n;
      }),
        (t.q = function (e, t, r) {
          var s = r || {},
            a = s.encode || o;
          if ("function" != typeof a)
            throw TypeError("option encode is invalid");
          if (!i.test(e)) throw TypeError("argument name is invalid");
          var l = a(t);
          if (l && !i.test(l)) throw TypeError("argument val is invalid");
          var c = e + "=" + l;
          if (null != s.maxAge) {
            var u = s.maxAge - 0;
            if (isNaN(u) || !isFinite(u))
              throw TypeError("option maxAge is invalid");
            c += "; Max-Age=" + Math.floor(u);
          }
          if (s.domain) {
            if (!i.test(s.domain)) throw TypeError("option domain is invalid");
            c += "; Domain=" + s.domain;
          }
          if (s.path) {
            if (!i.test(s.path)) throw TypeError("option path is invalid");
            c += "; Path=" + s.path;
          }
          if (s.expires) {
            var d = s.expires;
            if (
              ("[object Date]" !== n.call(d) && !(d instanceof Date)) ||
              isNaN(d.valueOf())
            )
              throw TypeError("option expires is invalid");
            c += "; Expires=" + d.toUTCString();
          }
          if (
            (s.httpOnly && (c += "; HttpOnly"),
            s.secure && (c += "; Secure"),
            s.priority)
          )
            switch (
              "string" == typeof s.priority
                ? s.priority.toLowerCase()
                : s.priority
            ) {
              case "low":
                c += "; Priority=Low";
                break;
              case "medium":
                c += "; Priority=Medium";
                break;
              case "high":
                c += "; Priority=High";
                break;
              default:
                throw TypeError("option priority is invalid");
            }
          if (s.sameSite)
            switch (
              "string" == typeof s.sameSite
                ? s.sameSite.toLowerCase()
                : s.sameSite
            ) {
              case !0:
              case "strict":
                c += "; SameSite=Strict";
                break;
              case "lax":
                c += "; SameSite=Lax";
                break;
              case "none":
                c += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
          return c;
        });
      var n = Object.prototype.toString,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function r(e) {
        return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
      }
      function o(e) {
        return encodeURIComponent(e);
      }
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(1185);
        },
      ]);
    },
    1010: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/icon.ce4238b3.svg",
        height: 73,
        width: 73,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    3991: function (e, t) {
      "use strict";
      var n, i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return r;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return s;
          },
          ACTION_SERVER_PATCH: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return u;
          },
        });
      let r = "refresh",
        o = "navigate",
        s = "restore",
        a = "server-patch",
        l = "prefetch",
        c = "fast-refresh",
        u = "server-action";
      ((i = n || (n = {})).AUTO = "auto"),
        (i.FULL = "full"),
        (i.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1516: function (e, t, n) {
      "use strict";
      function i(e, t, n, i) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(2387),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8872: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let i = n(8754),
        r = n(1757),
        o = r._(n(7294)),
        s = n(3935),
        a = i._(n(2636)),
        l = n(5471),
        c = n(3735),
        u = n(3341);
      n(4210);
      let d = n(9955),
        f = i._(n(7746)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(e, t, n, i, r, o) {
        let s = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === s) return;
        e["data-loaded-src"] = s;
        let a = "decode" in e ? e.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("empty" !== t && r(!0), null == n ? void 0 : n.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let i = !1,
                r = !1;
              n.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => i,
                isPropagationStopped: () => r,
                persist: () => {},
                preventDefault: () => {
                  (i = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (r = !0), t.stopPropagation();
                },
              });
            }
            (null == i ? void 0 : i.current) && i.current(e);
          }
        });
      }
      function g(e) {
        let [t, n] = o.version.split("."),
          i = parseInt(t, 10),
          r = parseInt(n, 10);
        return i > 18 || (18 === i && r >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let m = (0, o.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: i,
          sizes: r,
          height: s,
          width: a,
          decoding: l,
          className: c,
          style: u,
          fetchPriority: d,
          placeholder: f,
          loading: h,
          unoptimized: m,
          fill: b,
          onLoadRef: v,
          onLoadingCompleteRef: y,
          setBlurComplete: x,
          setShowAltText: w,
          onLoad: j,
          onError: k,
          ..._
        } = e;
        return o.default.createElement("img", {
          ..._,
          ...g(d),
          loading: h,
          width: a,
          height: s,
          decoding: l,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: u,
          sizes: r,
          srcSet: i,
          src: n,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (k && (e.src = e.src), e.complete && p(e, f, v, y, x, m));
            },
            [n, f, v, y, x, k, m, t]
          ),
          onLoad: (e) => {
            let t = e.currentTarget;
            p(t, f, v, y, x, m);
          },
          onError: (e) => {
            w(!0), "empty" !== f && x(!0), k && k(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          i = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && s.preload
          ? ((0, s.preload)(n.src, i), null)
          : o.default.createElement(
              a.default,
              null,
              o.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...i,
              })
            );
      }
      let v = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(d.RouterContext),
          i = (0, o.useContext)(u.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let e = h || i || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [i]),
          { onLoad: s, onLoadingComplete: a } = e,
          p = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          p.current = s;
        }, [s]);
        let g = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          g.current = a;
        }, [a]);
        let [v, y] = (0, o.useState)(!1),
          [x, w] = (0, o.useState)(!1),
          { props: j, meta: k } = (0, l.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: r,
            blurComplete: v,
            showAltText: x,
          });
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(m, {
            ...j,
            unoptimized: k.unoptimized,
            placeholder: k.placeholder,
            fill: k.fill,
            onLoadRef: p,
            onLoadingCompleteRef: g,
            setBlurComplete: y,
            setShowAltText: w,
            ref: t,
          }),
          k.priority
            ? o.default.createElement(b, { isAppRouter: !n, imgAttributes: j })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5569: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let i = n(8754),
        r = i._(n(7294)),
        o = n(4532),
        s = n(3353),
        a = n(1410),
        l = n(9064),
        c = n(370),
        u = n(9955),
        d = n(4224),
        f = n(508),
        h = n(1516),
        p = n(4266),
        g = n(3991),
        m = new Set();
      function b(e, t, n, i, r, o) {
        if (!o && !(0, s.isLocalURL)(t)) return;
        if (!i.bypassPrefetchedCheck) {
          let r =
              void 0 !== i.locale
                ? i.locale
                : "locale" in e
                ? e.locale
                : void 0,
            o = t + "%" + n + "%" + r;
          if (m.has(o)) return;
          m.add(o);
        }
        let a = o ? e.prefetch(t, r) : e.prefetch(t, n, i);
        Promise.resolve(a).catch((e) => {});
      }
      function v(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let y = r.default.forwardRef(function (e, t) {
          let n, i;
          let {
            href: a,
            as: m,
            children: y,
            prefetch: x = null,
            passHref: w,
            replace: j,
            shallow: k,
            scroll: _,
            locale: C,
            onClick: O,
            onMouseEnter: S,
            onTouchStart: E,
            legacyBehavior: P = !1,
            ...N
          } = e;
          (n = y),
            P &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = r.default.createElement("a", null, n));
          let A = r.default.useContext(u.RouterContext),
            R = r.default.useContext(d.AppRouterContext),
            I = null != A ? A : R,
            T = !A,
            M = !1 !== x,
            L = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
            { href: z, as: U } = r.default.useMemo(() => {
              if (!A) {
                let e = v(a);
                return { href: e, as: m ? v(m) : e };
              }
              let [e, t] = (0, o.resolveHref)(A, a, !0);
              return { href: e, as: m ? (0, o.resolveHref)(A, m) : t || e };
            }, [A, a, m]),
            D = r.default.useRef(z),
            F = r.default.useRef(U);
          P && (i = r.default.Children.only(n));
          let H = P ? i && "object" == typeof i && i.ref : t,
            [G, q, K] = (0, f.useIntersection)({ rootMargin: "200px" }),
            W = r.default.useCallback(
              (e) => {
                (F.current !== U || D.current !== z) &&
                  (K(), (F.current = U), (D.current = z)),
                  G(e),
                  H &&
                    ("function" == typeof H
                      ? H(e)
                      : "object" == typeof H && (H.current = e));
              },
              [U, H, z, K, G]
            );
          r.default.useEffect(() => {
            I && q && M && b(I, z, U, { locale: C }, { kind: L }, T);
          }, [U, z, q, C, M, null == A ? void 0 : A.locale, I, T, L]);
          let B = {
            ref: W,
            onClick(e) {
              P || "function" != typeof O || O(e),
                P &&
                  i.props &&
                  "function" == typeof i.props.onClick &&
                  i.props.onClick(e),
                I &&
                  !e.defaultPrevented &&
                  (function (e, t, n, i, o, a, l, c, u, d) {
                    let { nodeName: f } = e.currentTarget,
                      h = "A" === f.toUpperCase();
                    if (
                      h &&
                      ((function (e) {
                        let t = e.currentTarget,
                          n = t.getAttribute("target");
                        return (
                          (n && "_self" !== n) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!u && !(0, s.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let p = () => {
                      let e = null == l || l;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](n, i, {
                            shallow: a,
                            locale: c,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](i || n, {
                            forceOptimisticNavigation: !d,
                            scroll: e,
                          });
                    };
                    u ? r.default.startTransition(p) : p();
                  })(e, I, z, U, j, k, _, C, T, M);
            },
            onMouseEnter(e) {
              P || "function" != typeof S || S(e),
                P &&
                  i.props &&
                  "function" == typeof i.props.onMouseEnter &&
                  i.props.onMouseEnter(e),
                I &&
                  (M || !T) &&
                  b(
                    I,
                    z,
                    U,
                    { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: L },
                    T
                  );
            },
            onTouchStart(e) {
              P || "function" != typeof E || E(e),
                P &&
                  i.props &&
                  "function" == typeof i.props.onTouchStart &&
                  i.props.onTouchStart(e),
                I &&
                  (M || !T) &&
                  b(
                    I,
                    z,
                    U,
                    { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: L },
                    T
                  );
            },
          };
          if ((0, l.isAbsoluteUrl)(U)) B.href = U;
          else if (!P || w || ("a" === i.type && !("href" in i.props))) {
            let e = void 0 !== C ? C : null == A ? void 0 : A.locale,
              t =
                (null == A ? void 0 : A.isLocaleDomain) &&
                (0, h.getDomainLocale)(
                  U,
                  e,
                  null == A ? void 0 : A.locales,
                  null == A ? void 0 : A.domainLocales
                );
            B.href =
              t ||
              (0, p.addBasePath)(
                (0, c.addLocale)(U, e, null == A ? void 0 : A.defaultLocale)
              );
          }
          return P
            ? r.default.cloneElement(i, B)
            : r.default.createElement("a", { ...N, ...B }, n);
        }),
        x = y;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    508: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(7294),
        r = n(29),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          c = l || !o,
          [u, d] = (0, i.useState)(!1),
          f = (0, i.useRef)(null),
          h = (0, i.useCallback)((e) => {
            f.current = e;
          }, []);
        (0, i.useEffect)(() => {
          if (o) {
            if (c || u) return;
            let e = f.current;
            if (e && e.tagName) {
              let i = (function (e, t, n) {
                let {
                  id: i,
                  observer: r,
                  elements: o,
                } = (function (e) {
                  let t;
                  let n = { root: e.root || null, margin: e.rootMargin || "" },
                    i = a.find(
                      (e) => e.root === n.root && e.margin === n.margin
                    );
                  if (i && (t = s.get(i))) return t;
                  let r = new Map(),
                    o = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = r.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n);
                      });
                    }, e);
                  return (
                    (t = { id: n, observer: o, elements: r }),
                    a.push(n),
                    s.set(n, t),
                    t
                  );
                })(n);
                return (
                  o.set(e, t),
                  r.observe(e),
                  function () {
                    if ((o.delete(e), r.unobserve(e), 0 === o.size)) {
                      r.disconnect(), s.delete(i);
                      let e = a.findIndex(
                        (e) => e.root === i.root && e.margin === i.margin
                      );
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && d(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n,
              });
              return i;
            }
          } else if (!u) {
            let e = (0, r.requestIdleCallback)(() => d(!0));
            return () => (0, r.cancelIdleCallback)(e);
          }
        }, [c, n, t, u, f.current]);
        let p = (0, i.useCallback)(() => {
          d(!1);
        }, []);
        return [h, u, p];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5471: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(4210);
      let i = n(7757),
        r = n(3735);
      function o(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          l,
          c,
          {
            src: u,
            sizes: d,
            unoptimized: f = !1,
            priority: h = !1,
            loading: p,
            className: g,
            quality: m,
            width: b,
            height: v,
            fill: y = !1,
            style: x,
            onLoad: w,
            onLoadingComplete: j,
            placeholder: k = "empty",
            blurDataURL: _,
            fetchPriority: C,
            layout: O,
            objectFit: S,
            objectPosition: E,
            lazyBoundary: P,
            lazyRoot: N,
            ...A
          } = e,
          { imgConf: R, showAltText: I, blurComplete: T, defaultLoader: M } = t,
          L = R || r.imageConfigDefault;
        if ("allSizes" in L) a = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          a = { ...L, allSizes: e, deviceSizes: t };
        }
        let z = A.loader || M;
        delete A.loader, delete A.srcSet;
        let U = "__next_img_default" in z;
        if (U) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = z;
          z = (t) => {
            let { config: n, ...i } = t;
            return e(i);
          };
        }
        if (O) {
          "fill" === O && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !d && (d = t);
        }
        let D = "",
          F = s(b),
          H = s(v);
        if ("object" == typeof (n = u) && (o(n) || void 0 !== n.src)) {
          let e = o(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (c = e.blurHeight),
            (_ = _ || e.blurDataURL),
            (D = e.src),
            !y)
          ) {
            if (F || H) {
              if (F && !H) {
                let t = F / e.width;
                H = Math.round(e.height * t);
              } else if (!F && H) {
                let t = H / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (H = e.height);
          }
        }
        let G = !h && ("lazy" === p || void 0 === p);
        (!(u = "string" == typeof u ? u : D) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((f = !0), (G = !1)),
          a.unoptimized && (f = !0),
          U && u.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          h && (C = "high");
        let q = s(m),
          K = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: S,
                  objectPosition: E,
                }
              : {},
            I ? {} : { color: "transparent" },
            x
          ),
          W =
            T || "empty" === k
              ? null
              : "blur" === k
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, i.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: H,
                  blurWidth: l,
                  blurHeight: c,
                  blurDataURL: _ || "",
                  objectFit: K.objectFit,
                }) +
                '")'
              : 'url("' + k + '")',
          B = W
            ? {
                backgroundSize: K.objectFit || "cover",
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: W,
              }
            : {},
          Y = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: i,
              width: r,
              quality: o,
              sizes: s,
              loader: a,
            } = e;
            if (i) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: c } = (function (e, t, n) {
                let { deviceSizes: i, allSizes: r } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(n)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: r.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                if ("number" != typeof t) return { widths: i, kind: "w" };
                let o = [
                  ...new Set(
                    [t, 2 * t].map(
                      (e) => r.find((t) => t >= e) || r[r.length - 1]
                    )
                  ),
                ];
                return { widths: o, kind: "x" };
              })(t, r, s),
              u = l.length - 1;
            return {
              sizes: s || "w" !== c ? s : "100vw",
              srcSet: l
                .map(
                  (e, i) =>
                    a({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === c ? e : i + 1) +
                    c
                )
                .join(", "),
              src: a({ config: t, src: n, quality: o, width: l[u] }),
            };
          })({
            config: a,
            src: u,
            unoptimized: f,
            width: F,
            quality: q,
            sizes: d,
            loader: z,
          }),
          V = {
            ...A,
            loading: G ? "lazy" : p,
            fetchPriority: C,
            width: F,
            height: H,
            decoding: "async",
            className: g,
            style: { ...K, ...B },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: Y.src,
          },
          Z = { unoptimized: f, priority: h, placeholder: k, fill: y };
        return { props: V, meta: Z };
      }
    },
    7757: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: i,
            blurHeight: r,
            blurDataURL: o,
            objectFit: s,
          } = e,
          a = i ? 40 * i : t,
          l = r ? 40 * r : n,
          c = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    2555: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return c;
          },
          unstable_getImgProps: function () {
            return l;
          },
        });
      let i = n(8754),
        r = n(5471),
        o = n(4210),
        s = n(8872),
        a = i._(n(7746)),
        l = (e) => {
          (0, o.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, r.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        c = s.Image;
    },
    7746: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: i, quality: r } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          i +
          "&q=" +
          (r || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (n.__next_img_default = !0);
      let i = n;
    },
    198: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(5893),
        r = n(1664),
        o = n.n(r);
      function s() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("p", {
              children: [
                'This website is issued by Orion Resource Partners (USA) LP ("ORP"), a Delaware limited partnership. ORP is an investment adviser registered with the Securities and Exchange Commission under the Investment Advisers Act of 1940. While ORPUSA is registered with the United States Securities and Exchange Commission as an investment adviser, that registration does not imply any particular level of skill or training. Additional information about ORPUSA is available on the SEC website at',
                " ",
                (0, i.jsx)(o(), {
                  href: "https://www.adviserinfo.sec.gov",
                  target: "_blank",
                  children: "www.adviserinfo.sec.gov",
                }),
                ".",
              ],
            }),
            (0, i.jsx)("p", {
              children:
                "The materials in this website have been provided for informational purposes only.",
            }),
            (0, i.jsx)("p", {
              children:
                "The website is not directed to any person in any jurisdiction where the publication or availability of this website is prohibited. Persons in respect of whom such prohibitions apply may not access this website. The information provided on this website is not intended for distribution to, or use by, any person or entity in any jurisdiction or country that would subject ORP to any registration requirement or level of regulation within such jurisdiction or country. All persons accessing this website are required to inform themselves of applicable restrictions in their home country and to comply with such restrictions.",
            }),
            (0, i.jsx)("p", {
              children:
                "This website is not intended as an advertisement or an offer of sale of the securities of any fund managed by ORP. The information contained herein does not constitute an offer to sell or the solicitation of any offer to buy any securities and or derivatives in any jurisdiction and may not be reproduced, distributed or published by any person for any purpose without the prior written consent of ORP. Any such offer or solicitation may, subject to applicable securities laws, only be made by the relevant Confidential Private Placement Memorandum to appropriately qualified investors. Under no circumstances is the information contained herein to be construed as a prospectus or advertisement.",
            }),
            (0, i.jsx)("p", {
              children:
                "The information and opinions contained in this website do not purport to be full or complete, nor does this document constitute investment advice. No representation, warranty or undertaking, express, implied or limited, is given as to the accuracy or completeness of the information or opinions contained herein by ORP, its directors, partners or employees, and no liability is accepted by such persons for the accuracy or completeness of any such information or opinions. As such, no reliance may be placed for any purpose on the information and opinions contained in this document.",
            }),
            (0, i.jsx)("p", {
              children:
                "You agree that your use of this site is subject to you accepting the terms of this disclaimer and any dispute arising from the use of this site is subject to New York law and you submit to the exclusive jurisdiction of the New York courts. A cookie is utilized on this website. It allows your browser to check whether you have read and agreed to these Terms. The cookie does not contain any personally identifiable information. If you do not agree to the use of this cookie or if your browser is set up to reject cookies then, unfortunately, you will not be able to see the content of this website. ORP reserves the right to suspend access to this website.",
            }),
          ],
        });
      }
    },
    1185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return z;
          },
        });
      var i = n(5893),
        r = n(4298),
        o = n.n(r),
        s = n(7294),
        a = n(6489);
      function l(e, t = {}) {
        let n = e && "j" === e[0] && ":" === e[1] ? e.substr(2) : e;
        if (!t.doNotParse)
          try {
            return JSON.parse(n);
          } catch (e) {}
        return e;
      }
      var c = class {
        constructor(e, t = {}) {
          var n;
          (this.changeListeners = []),
            (this.HAS_DOCUMENT_COOKIE = !1),
            (this.update = () => {
              if (!this.HAS_DOCUMENT_COOKIE) return;
              let e = this.cookies;
              (this.cookies = a.Q(document.cookie)), this._checkChanges(e);
            });
          let i = "undefined" == typeof document ? "" : document.cookie;
          (this.cookies =
            "string" == typeof (n = e || i)
              ? a.Q(n)
              : "object" == typeof n && null !== n
              ? n
              : {}),
            (this.defaultSetOptions = t),
            (this.HAS_DOCUMENT_COOKIE =
              "object" == typeof document &&
              "string" == typeof document.cookie);
        }
        _emitChange(e) {
          for (let t = 0; t < this.changeListeners.length; ++t)
            this.changeListeners[t](e);
        }
        _checkChanges(e) {
          let t = new Set(Object.keys(e).concat(Object.keys(this.cookies)));
          t.forEach((t) => {
            e[t] !== this.cookies[t] &&
              this._emitChange({ name: t, value: l(e[t]) });
          });
        }
        _startPolling() {
          this.pollingInterval = setInterval(this.update, 300);
        }
        _stopPolling() {
          this.pollingInterval && clearInterval(this.pollingInterval);
        }
        get(e, t = {}) {
          return t.doNotUpdate || this.update(), l(this.cookies[e], t);
        }
        getAll(e = {}) {
          e.doNotUpdate || this.update();
          let t = {};
          for (let n in this.cookies) t[n] = l(this.cookies[n], e);
          return t;
        }
        set(e, t, n) {
          n = n
            ? Object.assign(Object.assign({}, this.defaultSetOptions), n)
            : this.defaultSetOptions;
          let i = "string" == typeof t ? t : JSON.stringify(t);
          (this.cookies = Object.assign(Object.assign({}, this.cookies), {
            [e]: i,
          })),
            this.HAS_DOCUMENT_COOKIE && (document.cookie = a.q(e, i, n)),
            this._emitChange({ name: e, value: t, options: n });
        }
        remove(e, t) {
          let n = (t = Object.assign(Object.assign({}, t), {
            expires: new Date(1970, 1, 1, 0, 0, 1),
            maxAge: 0,
          }));
          (this.cookies = Object.assign({}, this.cookies)),
            delete this.cookies[e],
            this.HAS_DOCUMENT_COOKIE && (document.cookie = a.q(e, "", n)),
            this._emitChange({ name: e, value: void 0, options: t });
        }
        addChangeListener(e) {
          this.changeListeners.push(e),
            1 === this.changeListeners.length &&
              ("object" == typeof window && "cookieStore" in window
                ? window.cookieStore.addEventListener("change", this.update)
                : this._startPolling());
        }
        removeChangeListener(e) {
          let t = this.changeListeners.indexOf(e);
          t >= 0 && this.changeListeners.splice(t, 1),
            0 === this.changeListeners.length &&
              ("object" == typeof window && "cookieStore" in window
                ? window.cookieStore.removeEventListener("change", this.update)
                : this._stopPolling());
        }
      };
      let u = s.createContext(new c()),
        { Provider: d, Consumer: f } = u;
      function h(e) {
        let t = (0, s.useContext)(u);
        if (!t) throw Error("Missing <CookiesProvider>");
        let [n, i] = (0, s.useState)(() => t.getAll());
        "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement &&
          (0, s.useLayoutEffect)(() => {
            function r() {
              let r = t.getAll({ doNotUpdate: !0 });
              (function (e, t, n) {
                if (!e) return !0;
                for (let i of e) if (t[i] !== n[i]) return !0;
                return !1;
              })(e || null, r, n) && i(r);
            }
            return (
              t.addChangeListener(r),
              () => {
                t.removeChangeListener(r);
              }
            );
          }, [t, n]);
        let r = (0, s.useMemo)(() => t.set.bind(t), [t]),
          o = (0, s.useMemo)(() => t.remove.bind(t), [t]),
          a = (0, s.useMemo)(() => t.update.bind(t), [t]);
        return [n, r, o, a];
      }
      function p() {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
      }
      function g() {
        let [e] = h(["analyticsCookies"]),
          [t, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            "true" === e.analyticsCookies ? e && (n(!0), p()) : n(!1);
          }, [e]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(o(), {
                id: "schema",
                type: "application/ld+json",
                children:
                  '\n					{\n					"@context": "http://schema.org",\n					"@type": "LocalBusiness",\n					"name": "Orion Resource Partners"\n					}\n          		',
              }),
              (0, i.jsx)(o(), {
                id: "google-manager",
                async: !0,
                src: "https://www.googletagmanager.com/gtag/js?id=G-5ZDGGGHS9G",
              }),
              (0, i.jsx)(o(), {
                id: "g-tag",
                children:
                  "  \n					window.dataLayer = window.dataLayer || [];\n					function gtag(){dataLayer.push(arguments);}\n					gtag('js', new Date());\n					function getCookie(name) {\n						// Split cookie string and get all individual name=value pairs in an array\n						var cookieArr = document.cookie.split(\";\");\n						\n						// Loop through the array elements\n						for(var i = 0; i < cookieArr.length; i++) {\n							var cookiePair = cookieArr[i].split(\"=\");\n							\n							/* Removing whitespace at the beginning of the cookie name\n							and compare it with the given string */\n							if(name == cookiePair[0].trim()) {\n								// Decode the cookie value and return\n								return decodeURIComponent(cookiePair[1]);\n							}\n						}\n						\n						// Return null if not found\n						return null;\n					}\n\n\n					gtag('consent', 'default', {\n						'ad_storage': 'denied',\n						'ad_user_data': 'denied',\n						'ad_personalization': 'denied',\n						'analytics_storage': 'denied'\n					});\n\n					if(getCookie('analyticsCookies')) {\n						gtag('consent', 'default', {\n							'ad_storage': 'granted',\n							'ad_user_data': 'granted',\n							'ad_personalization': 'granted',\n							'analytics_storage': 'granted'\n						});\n					}\n\n					gtag('config', 'G-5ZDGGGHS9G');\n          		",
              }),
            ],
          })
        );
      }
      function m() {
        let e = "requiredCookies",
          t = "analyticsCookies",
          [n, r, o] = h([e, t]),
          [a, l] = (0, s.useState)(!1),
          [c, u] = (0, s.useState)(!0),
          d = () => {
            l(!0), r(e, !0), r(t, !0), p(), u(!1);
          },
          f = () => {
            r(e, !0), a && (r(t, a), p()), u(!1);
          };
        return (
          (0, s.useEffect)(() => {
            n.requiredCookies ? u(!1) : u(!0);
          }, [n.requiredCookies]),
          (0, i.jsx)("div", {
            className: "".concat(
              c ? "block" : "hidden",
              " z-[999] fixed bottom-4 right-4 bg-dark text-white shadow-md shadow-dark/80 border border-light/30"
            ),
            children: (0, i.jsxs)("div", {
              className: "p-8",
              children: [
                (0, i.jsx)("p", { children: "This website uses cookies" }),
                (0, i.jsxs)("div", {
                  className: "mt-4",
                  children: [
                    (0, i.jsx)("p", {
                      children: (0, i.jsxs)("label", {
                        children: [
                          (0, i.jsx)("input", {
                            type: "checkbox",
                            name: "required",
                            checked: !0,
                            disabled: !0,
                          }),
                          (0, i.jsx)("span", {
                            className: "ml-2",
                            children: "Required",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("p", {
                      children: (0, i.jsxs)("label", {
                        children: [
                          (0, i.jsx)("input", {
                            type: "checkbox",
                            name: "analytics",
                            onChange: (e) => l("true" === e.target.value),
                          }),
                          (0, i.jsx)("span", {
                            className: "ml-2",
                            children: "Analytics",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    " flex items-center justify-between gap-8 text-gold mt-4",
                  children: [
                    (0, i.jsx)("button", {
                      onClick: () => d(),
                      children: "Accept All",
                    }),
                    (0, i.jsx)("button", {
                      onClick: () => f(),
                      className: "text-regular",
                      children: "Accept Selected",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var b = n(198);
      function v() {
        let e = "disclaimerConcent",
          [t, n, r] = h([e]),
          [o, a] = (0, s.useState)(!0),
          l = () => {
            n(e, !0), a(!1);
          },
          c = () => {
            window.close(), a(!0), r(e);
          };
        return (
          (0, s.useEffect)(() => {
            t.disclaimerConcent && a(!1);
          }, [t.disclaimerConcent]),
          (0, i.jsx)("div", {
            // className:
            //   "fixed top-0 left-0 w-full h-full bg-dark/80 backdrop-blur-md z-[999999] items-center justify-center ".concat(
            //     o ? "flex" : "hidden"
            //   ),
            // children: (0, i.jsxs)("div", {
            //   className:
            //     "max-w-4xl w-10/12 bg-dark shadow-md shadow-dark/80 p-8 border border-semi-dark/50",
            //   children: [
            //     (0, i.jsx)("div", {
            //       children: (0, i.jsx)("h3", {
            //         className: "text-gold text-3xl font-serif",
            //         children: "Disclaimer",
            //       }),
            //     }),
            //     (0, i.jsx)("div", {
            //       className:
            //         "text-white space-y-4 h-[50vh] overflow-y-auto mt-8 pr-4",
            //       children: (0, i.jsx)(b.Z, {}),
            //     }),
            //     (0, i.jsxs)("div", {
            //       className:
            //         "flex items-center justify-center gap-8 text-gold mt-8",
            //       children: [
            //         (0, i.jsx)("button", {
            //           onClick: () => l(),
            //           children: "I Accept",
            //         }),
            //         (0, i.jsx)("button", {
            //           onClick: () => c(),
            //           children: "I Decline",
            //         }),
            //       ],
            //     }),
            //   ],
            // }),
          })
        );
      }
      var y = n(1664),
        x = n.n(y),
        w = n(5675),
        j = n.n(w),
        k = {
          src: "/_next/static/media/logo.a2969e81.svg",
          height: 27,
          width: 290,
          blurWidth: 0,
          blurHeight: 0,
        };
      let _ = {
        navs: [
          { label: "Investment Solutions", url: "/investment-solutions" },
          { label: "Culture", url: "/culture" },
          { label: "Contact", url: "/contact" },
          { label: "Disclosures", url: "/disclosures" },
          {
            label: "Login",
            url: "https://orion.seiinvestorportal.com/CoreAuth/Login?ReturnUrl=%2F",
          },
        ],
      };
      var C = n(1163);
      function O(e) {
        let { open: t, setOpen: n } = e,
          r =
            "w-full h-px bg-gold absolute left-0 origin-center -translate-y-1/2 transition-all duration-300";
        return (0, i.jsxs)("div", {
          className: "w-10 h-5 relative cursor-pointer md:hidden ",
          onClick: () => n(!t),
          children: [
            (0, i.jsx)("div", {
              className: ""
                .concat(r, " ")
                .concat(t ? "rotate-45 top-1/2" : "rotate-0 top-0"),
            }),
            (0, i.jsx)("div", {
              className: ""
                .concat(r, " ")
                .concat(
                  t
                    ? "opacity-0 top-1/2 -translate-x-full"
                    : "opacity-100 top-1/2"
                ),
            }),
            (0, i.jsx)("div", {
              className: ""
                .concat(r, " ")
                .concat(t ? "-rotate-45 top-1/2" : "rotate-0 top-full"),
            }),
          ],
        });
      }
      function S() {
        let [e, t] = (0, s.useState)(!1);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className:
              "bg-dark text-white text-xs uppercase tracking-widest border-b border-b-semi-dark fixed top-0 left-0 w-full z-[999]",
            children: [
              (0, i.jsxs)("nav", {
                className:
                  "flex items-center justify-between w-11/12 mx-auto py-8 bg-transparent relative z-20 min-h-[91px]",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-2/3 md:w-auto",
                    children: (0, i.jsxs)(x(), {
                      href: "/",
                      onClick: () => t(!1),
                      children: [
                        (0, i.jsx)(j(), {
                          src: k,
                          alt: "Orion Resource Partners",
                          className: "",
                        }),
                        (0, i.jsx)("h1", {
                          className: "hidden",
                          children: "Orion Resource Partners",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(O, { open: e, setOpen: t }),
                      (0, i.jsx)(E, { navs: _.navs }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(P, { navs: _.navs, open: e, setOpen: t }),
            ],
          }),
        });
      }
      let E = (e) => {
          let { navs: t } = e,
            n = (0, C.useRouter)();
          return (0, i.jsx)("ul", {
            className: "space-x-8 hidden md:block",
            children: t.map((e, t) =>
              (0, i.jsx)(
                "li",
                {
                  className: "inline-block",
                  children: (0, i.jsx)(x(), {
                    href: e.url,
                    target: e.url.startsWith("http") ? "_blank" : "_self",
                    children: (0, i.jsx)("span", {
                      className:
                        "relative hoverUnderline before:bg-white ".concat(
                          n.asPath.includes(e.url) && "font-semibold"
                        ),
                      children: e.label,
                    }),
                  }),
                },
                t
              )
            ),
          });
        },
        P = (e) => {
          let { navs: t, open: n, setOpen: r } = e,
            o = (0, C.useRouter)();
          return (0, i.jsx)("div", {
            className:
              "fixed top-0 right-0 w-full h-full z-10 md:hidden flex justify-center items-center pt-[91px] ".concat(
                "transition-transform duration-500 ".concat(
                  n ? "translate-x-0" : "translate-x-full"
                )
              ),
            children: (0, i.jsx)("ul", {
              className:
                "flex flex-col items-center justify-center gap-8 text-white bg-dark border border-light/30 w-full h-full",
              children: t.map((e, t) =>
                (0, i.jsx)(
                  "li",
                  {
                    className: "block",
                    children: (0, i.jsx)(x(), {
                      href: e.url,
                      target: e.url.startsWith("http") ? "_blank" : "_self",
                      onClick: () => r(!1),
                      children: (0, i.jsx)("span", {
                        className:
                          "relative hoverUnderline before:bg-white ".concat(
                            o.asPath.includes(e.url) && "font-semibold"
                          ),
                        children: e.label,
                      }),
                    }),
                  },
                  t
                )
              ),
            }),
          });
        };
      var N = n(1010);
      let A = new Date().getFullYear(),
        R = {
          copyright: "\xa9 ".concat(
            A,
            " Orion Resource Partners. All rights reserved."
          ),
        };
      function I() {
        return (0, i.jsx)("footer", {
          className:
            "bg-dark text-white text-xs uppercase tracking-widest border-t border-t-semi-dark",
          children: (0, i.jsxs)("div", {
            className: "w-11/12 mx-auto py-2 flex justify-between items-center",
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsx)(j(), {
                  src: N.Z,
                  alt: "Orion Resource Partners",
                }),
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsx)("p", {
                  className: "text-right md:text-left",
                  children: R.copyright,
                }),
              }),
            ],
          }),
        });
      }
      var T = n(9008),
        M = n.n(T);
      function L(e) {
        let { children: t } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(M(), {
              children: [
                (0, i.jsx)("meta", {
                  name: "google-site-verification",
                  content: "0efSNrIU3D5cHsY_sBTAeeQtIFAPTJRXMijgqiTypA0",
                }),
                (0, i.jsx)("link", {
                  rel: "canonical",
                  href: "href=https://orionrp.com",
                }),
                (0, i.jsx)("link", {
                  rel: "icon",
                  type: "image/x-icon",
                  href: "/favicon.ico",
                }),
              ],
            }),
            (0, i.jsx)(S, {}),
            t,
            (0, i.jsx)(I, {}),
          ],
        });
      }
      function z(e) {
        let { Component: t, pageProps: n } = e;
        return (0, i.jsxs)(L, {
          children: [
            (0, i.jsx)(g, {}),
            (0, i.jsx)(v, {}),
            (0, i.jsx)(m, {}),
            (0, i.jsx)(t, { ...n }),
          ],
        });
      }
      n(7952);
    },
    7952: function () {},
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
    5675: function (e, t, n) {
      e.exports = n(2555);
    },
    1664: function (e, t, n) {
      e.exports = n(5569);
    },
    1163: function (e, t, n) {
      e.exports = n(6885);
    },
    4298: function (e, t, n) {
      e.exports = n(5442);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(6885);
    }),
      (_N_E = e.O());
  },
]);
