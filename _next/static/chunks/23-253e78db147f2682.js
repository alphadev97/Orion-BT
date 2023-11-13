"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [23],
  {
    5364: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      var r = i(7294);
      let n = (0, r.createContext)({});
    },
    240: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      var r = i(7294);
      let n = (0, r.createContext)(null);
    },
    2074: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return o;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var r = i(1662);
      class n {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: o,
          cancel: a,
          state: l,
          steps: u,
        } = (function (t, e) {
          let i = !1,
            r = !0,
            o = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = s.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new n(),
                    i = new n(),
                    r = 0,
                    s = !1,
                    o = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (t, n = !1, o = !1) => {
                        let l = o && s,
                          u = l ? e : i;
                        return (
                          n && a.add(t),
                          u.add(t) && l && s && (r = e.order.length),
                          t
                        );
                      },
                      cancel: (t) => {
                        i.remove(t), a.delete(t);
                      },
                      process: (n) => {
                        if (s) {
                          o = !0;
                          return;
                        }
                        if (
                          ((s = !0),
                          ([e, i] = [i, e]),
                          i.clear(),
                          (r = e.order.length))
                        )
                          for (let i = 0; i < r; i++) {
                            let r = e.order[i];
                            r(n), a.has(r) && (l.schedule(r), t());
                          }
                        (s = !1), o && ((o = !1), l.process(n));
                      },
                    };
                  return l;
                })(() => (i = !0))),
                t
              ),
              {}
            ),
            l = (t) => a[t].process(o),
            u = () => {
              let n = performance.now();
              (i = !1),
                (o.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(n - o.timestamp, 40), 1)),
                (o.timestamp = n),
                (o.isProcessing = !0),
                s.forEach(l),
                (o.isProcessing = !1),
                i && e && ((r = !1), t(u));
            },
            h = () => {
              (i = !0), (r = !0), o.isProcessing || t(u);
            },
            c = s.reduce((t, e) => {
              let r = a[e];
              return (
                (t[e] = (t, e = !1, n = !1) => (i || h(), r.schedule(t, e, n))),
                t
              );
            }, {});
          return {
            schedule: c,
            cancel: (t) => s.forEach((e) => a[e].cancel(t)),
            state: o,
            steps: a,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : r.Z,
          !0
        );
    },
    2023: function (t, e, i) {
      let r;
      i.d(e, {
        E: function () {
          return nB;
        },
      });
      var n,
        s,
        o = i(7294);
      let a = (0, o.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        l = (0, o.createContext)({});
      var u = i(240),
        h = i(8868);
      let c = (0, o.createContext)({ strict: !1 });
      function d(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function p(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function m(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let f = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        g = ["initial", ...f];
      function v(t) {
        return m(t.animate) || g.some((e) => p(t[e]));
      }
      function y(t) {
        return !!(v(t) || t.variants);
      }
      function x(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let P = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        b = {};
      for (let t in P) b[t] = { isEnabled: (e) => P[t].some((t) => !!e[t]) };
      var T = i(1741),
        w = i(5364);
      let A = (0, o.createContext)({}),
        S = Symbol.for("motionComponentSymbol"),
        V = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function E(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (V.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let C = {},
        M = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        D = new Set(M);
      function k(t, { layout: e, layoutId: i }) {
        return (
          D.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!C[t] || "opacity" === t))
        );
      }
      let R = (t) => !!(t && t.getVelocity),
        L = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        j = M.length,
        F = (t) => (e) => "string" == typeof e && e.startsWith(t),
        B = F("--"),
        O = F("var(--"),
        I = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        U = (t, e, i) => Math.min(Math.max(i, t), e),
        W = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        N = { ...W, transform: (t) => U(0, 1, t) },
        $ = { ...W, default: 1 },
        Z = (t) => Math.round(1e5 * t) / 1e5,
        H = /(-)?([\d]*\.?[\d])+/g,
        z =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Y =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function X(t) {
        return "string" == typeof t;
      }
      let G = (t) => ({
          test: (e) => X(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        q = G("deg"),
        K = G("%"),
        _ = G("px"),
        J = G("vh"),
        Q = G("vw"),
        tt = {
          ...K,
          parse: (t) => K.parse(t) / 100,
          transform: (t) => K.transform(100 * t),
        },
        te = { ...W, transform: Math.round },
        ti = {
          borderWidth: _,
          borderTopWidth: _,
          borderRightWidth: _,
          borderBottomWidth: _,
          borderLeftWidth: _,
          borderRadius: _,
          radius: _,
          borderTopLeftRadius: _,
          borderTopRightRadius: _,
          borderBottomRightRadius: _,
          borderBottomLeftRadius: _,
          width: _,
          maxWidth: _,
          height: _,
          maxHeight: _,
          size: _,
          top: _,
          right: _,
          bottom: _,
          left: _,
          padding: _,
          paddingTop: _,
          paddingRight: _,
          paddingBottom: _,
          paddingLeft: _,
          margin: _,
          marginTop: _,
          marginRight: _,
          marginBottom: _,
          marginLeft: _,
          rotate: q,
          rotateX: q,
          rotateY: q,
          rotateZ: q,
          scale: $,
          scaleX: $,
          scaleY: $,
          scaleZ: $,
          skew: q,
          skewX: q,
          skewY: q,
          distance: _,
          translateX: _,
          translateY: _,
          translateZ: _,
          x: _,
          y: _,
          z: _,
          perspective: _,
          transformPerspective: _,
          opacity: N,
          originX: tt,
          originY: tt,
          originZ: _,
          zIndex: te,
          fillOpacity: N,
          strokeOpacity: N,
          numOctaves: te,
        };
      function tr(t, e, i, r) {
        let { style: n, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (B(t)) {
            s[t] = i;
            continue;
          }
          let r = ti[t],
            c = I(i, r);
          if (D.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (r.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (n[t] = c);
        }
        if (
          (!e.transform &&
            (l || r
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  r,
                  n
                ) {
                  let s = "";
                  for (let e = 0; e < j; e++) {
                    let i = M[e];
                    if (void 0 !== t[i]) {
                      let e = L[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    n ? (s = n(t, r ? "" : s)) : i && r && (s = "none"),
                    s
                  );
                })(t.transform, i, h, r))
              : n.transform && (n.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let tn = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function ts(t, e, i) {
        for (let r in e) R(e[r]) || k(r, i) || (t[r] = e[r]);
      }
      function to(t, e, i) {
        let r = {},
          n = (function (t, e, i) {
            let r = t.style || {},
              n = {};
            return (
              ts(n, r, t),
              Object.assign(
                n,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, o.useMemo)(() => {
                    let r = tn();
                    return (
                      tr(r, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, r.vars, r.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(n) : n
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
            (n.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (r.tabIndex = 0),
          (r.style = n),
          r
        );
      }
      let ta = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function tl(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          ta.has(t)
        );
      }
      let tu = (t) => !tl(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (tu = (t) => (t.startsWith("on") ? !tl(t) : n(t)));
      } catch (t) {}
      function th(t, e, i) {
        return "string" == typeof t ? t : _.transform(e + i * t);
      }
      let tc = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        td = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tp(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((tr(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== n || void 0 !== s || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let r = th(e, t.x, t.width),
                n = th(i, t.y, t.height);
              return `${r} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== r && (p.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? tc : td;
              t[s.offset] = _.transform(-r);
              let o = _.transform(e),
                a = _.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let tm = () => ({ ...tn(), attrs: {} }),
        tf = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tg(t, e, i, r) {
        let n = (0, o.useMemo)(() => {
          let i = tm();
          return (
            tp(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              tf(r),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          ts(e, t.style, t), (n.style = { ...e, ...n.style });
        }
        return n;
      }
      let tv = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function ty(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let tx = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tP(t, e, i, r) {
        for (let i in (ty(t, e, void 0, r), e.attrs))
          t.setAttribute(tx.has(i) ? i : tv(i), e.attrs[i]);
      }
      function tb(t, e) {
        let { style: i } = t,
          r = {};
        for (let n in i)
          (R(i[n]) || (e.style && R(e.style[n])) || k(n, t)) && (r[n] = i[n]);
        return r;
      }
      function tT(t, e) {
        let i = tb(t, e);
        for (let r in t)
          if (R(t[r]) || R(e[r])) {
            let e =
              -1 !== M.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r;
            i[e] = t[r];
          }
        return i;
      }
      function tw(t, e, i, r = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          e
        );
      }
      var tA = i(6681);
      let tS = (t) => Array.isArray(t),
        tV = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tE = (t) => (tS(t) ? t[t.length - 1] || 0 : t);
      function tC(t) {
        let e = R(t) ? t.get() : t;
        return tV(e) ? e.toValue() : e;
      }
      let tM = (t) => (e, i) => {
        let r = (0, o.useContext)(l),
          n = (0, o.useContext)(u.O),
          s = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              r,
              n,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, r) {
                  let n = {},
                    s = r(t, {});
                  for (let t in s) n[t] = tC(s[t]);
                  let { initial: o, animate: a } = t,
                    l = v(t),
                    u = y(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial;
                  h = h || !1 === o;
                  let c = h ? a : o;
                  if (c && "boolean" != typeof c && !m(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    e.forEach((e) => {
                      let i = tw(t, e);
                      if (!i) return;
                      let { transitionEnd: r, transition: s, ...o } = i;
                      for (let t in o) {
                        let e = o[t];
                        if (Array.isArray(e)) {
                          let t = h ? e.length - 1 : 0;
                          e = e[t];
                        }
                        null !== e && (n[t] = e);
                      }
                      for (let t in r) n[t] = r[t];
                    });
                  }
                  return n;
                })(r, n, s, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(r, t, o)), o;
            })(t, e, r, n);
        return i ? s() : (0, tA.h)(s);
      };
      var tD = i(2074);
      let tk = {
          useVisualState: tM({
            scrapeMotionValuesFromProps: tT,
            createRenderState: tm,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              tD.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tD.Wi.render(() => {
                  tp(
                    i,
                    r,
                    { enableHardwareAcceleration: !1 },
                    tf(e.tagName),
                    t.transformTemplate
                  ),
                    tP(e, i);
                });
            },
          }),
        },
        tR = {
          useVisualState: tM({
            scrapeMotionValuesFromProps: tb,
            createRenderState: tn,
          }),
        };
      function tL(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      let tj = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tF(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tB = (t) => (e) => tj(e) && t(e, tF(e));
      function tO(t, e, i, r) {
        return tL(t, e, tB(i), r);
      }
      let tI = (t, e) => (i) => e(t(i)),
        tU = (...t) => t.reduce(tI);
      function tW(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tN = tW("dragHorizontal"),
        t$ = tW("dragVertical");
      function tZ(t) {
        let e = !1;
        if ("y" === t) e = t$();
        else if ("x" === t) e = tN();
        else {
          let t = tN(),
            i = t$();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tH() {
        let t = tZ(!0);
        return !t || (t(), !1);
      }
      class tz {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tY(t, e) {
        let i = "pointer" + (e ? "enter" : "leave"),
          r = "onHover" + (e ? "Start" : "End");
        return tO(
          t.current,
          i,
          (i, n) => {
            if ("touch" === i.type || tH()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[r] && tD.Wi.update(() => s[r](i, n));
          },
          { passive: !t.getProps()[r] }
        );
      }
      let tX = (t, e) => !!e && (t === e || tX(t, e.parentElement));
      var tG = i(1662);
      function tq(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tF(i));
      }
      let tK = new WeakMap(),
        t_ = new WeakMap(),
        tJ = (t) => {
          let e = tK.get(t.target);
          e && e(t);
        },
        tQ = (t) => {
          t.forEach(tJ);
        },
        t0 = { some: 0, all: 1 };
      function t1(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function t5(t, e, i) {
        let r = t.getProps();
        return tw(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let t2 = "data-" + tv("framerAppearId");
      var t3 = i(5487);
      let t6 = (t) => 1e3 * t,
        t4 = (t) => t / 1e3,
        t9 = { current: !1 },
        t7 = (t) => Array.isArray(t) && "number" == typeof t[0],
        t8 = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        et = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: t8([0, 0.65, 0.55, 1]),
          circOut: t8([0.55, 0, 1, 0.45]),
          backIn: t8([0.31, 0.01, 0.66, -0.59]),
          backOut: t8([0.33, 1.53, 0.69, 0.99]),
        },
        ee = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function ei(t, e, i, r) {
        if (t === e && i === r) return tG.Z;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do
              (s = ee((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ee(n(t), e, r));
      }
      let er = ei(0.42, 0, 1, 1),
        en = ei(0, 0, 0.58, 1),
        es = ei(0.42, 0, 0.58, 1),
        eo = (t) => Array.isArray(t) && "number" != typeof t[0],
        ea = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        el = (t) => (e) => 1 - t(1 - e),
        eu = (t) => 1 - Math.sin(Math.acos(t)),
        eh = el(eu),
        ec = ea(eh),
        ed = ei(0.33, 1.53, 0.69, 0.99),
        ep = el(ed),
        em = ea(ep),
        ef = {
          linear: tG.Z,
          easeIn: er,
          easeInOut: es,
          easeOut: en,
          circIn: eu,
          circInOut: ec,
          circOut: eh,
          backIn: ep,
          backInOut: em,
          backOut: ed,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * ep(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        eg = (t) => {
          if (Array.isArray(t)) {
            (0, t3.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return ei(e, i, r, n);
          }
          return "string" == typeof t
            ? ((0, t3.k)(void 0 !== ef[t], `Invalid easing type '${t}'`), ef[t])
            : t;
        },
        ev = (t, e) => (i) =>
          !!(
            (X(i) && Y.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        ey = (t, e, i) => (r) => {
          if (!X(r)) return r;
          let [n, s, o, a] = r.match(H);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        ex = (t) => U(0, 255, t),
        eP = { ...W, transform: (t) => Math.round(ex(t)) },
        eb = {
          test: ev("rgb", "red"),
          parse: ey("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            eP.transform(t) +
            ", " +
            eP.transform(e) +
            ", " +
            eP.transform(i) +
            ", " +
            Z(N.transform(r)) +
            ")",
        },
        eT = {
          test: ev("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: eb.transform,
        },
        ew = {
          test: ev("hsl", "hue"),
          parse: ey("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            K.transform(Z(e)) +
            ", " +
            K.transform(Z(i)) +
            ", " +
            Z(N.transform(r)) +
            ")",
        },
        eA = {
          test: (t) => eb.test(t) || eT.test(t) || ew.test(t),
          parse: (t) =>
            eb.test(t) ? eb.parse(t) : ew.test(t) ? ew.parse(t) : eT.parse(t),
          transform: (t) =>
            X(t)
              ? t
              : t.hasOwnProperty("red")
              ? eb.transform(t)
              : ew.transform(t),
        },
        eS = (t, e, i) => -i * t + i * e + t;
      function eV(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let eE = (t, e, i) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - r) + r));
        },
        eC = [eT, eb, ew],
        eM = (t) => eC.find((e) => e.test(t));
      function eD(t) {
        let e = eM(t);
        (0, t3.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === ew &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = eV(a, r, t + 1 / 3)),
                  (s = eV(a, r, t)),
                  (o = eV(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let ek = (t, e) => {
          let i = eD(t),
            r = eD(e),
            n = { ...i };
          return (t) => (
            (n.red = eE(i.red, r.red, t)),
            (n.green = eE(i.green, r.green, t)),
            (n.blue = eE(i.blue, r.blue, t)),
            (n.alpha = eS(i.alpha, r.alpha, t)),
            eb.transform(n)
          );
        },
        eR = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: tG.Z,
        },
        eL = { regex: z, countKey: "Colors", token: "${c}", parse: eA.parse },
        ej = { regex: H, countKey: "Numbers", token: "${n}", parse: W.parse };
      function eF(t, { regex: e, countKey: i, token: r, parse: n }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, r)),
          t.values.push(...s.map(n)));
      }
      function eB(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && eF(i, eR), eF(i, eL), eF(i, ej), i;
      }
      function eO(t) {
        return eB(t).values;
      }
      function eI(t) {
        let { values: e, numColors: i, numVars: r, tokenised: n } = eB(t),
          s = e.length;
        return (t) => {
          let e = n;
          for (let n = 0; n < s; n++)
            e =
              n < r
                ? e.replace(eR.token, t[n])
                : n < r + i
                ? e.replace(eL.token, eA.transform(t[n]))
                : e.replace(ej.token, Z(t[n]));
          return e;
        };
      }
      let eU = (t) => ("number" == typeof t ? 0 : t),
        eW = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              X(t) &&
              ((null === (e = t.match(H)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(z)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eO,
          createTransformer: eI,
          getAnimatableNone: function (t) {
            let e = eO(t),
              i = eI(t);
            return i(e.map(eU));
          },
        },
        eN = (t, e) => (i) => `${i > 0 ? e : t}`;
      function e$(t, e) {
        return "number" == typeof t
          ? (i) => eS(t, e, i)
          : eA.test(t)
          ? ek(t, e)
          : t.startsWith("var(")
          ? eN(t, e)
          : ez(t, e);
      }
      let eZ = (t, e) => {
          let i = [...t],
            r = i.length,
            n = t.map((t, i) => e$(t, e[i]));
          return (t) => {
            for (let e = 0; e < r; e++) i[e] = n[e](t);
            return i;
          };
        },
        eH = (t, e) => {
          let i = { ...t, ...e },
            r = {};
          for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (r[n] = e$(t[n], e[n]));
          return (t) => {
            for (let e in r) i[e] = r[e](t);
            return i;
          };
        },
        ez = (t, e) => {
          let i = eW.createTransformer(e),
            r = eB(t),
            n = eB(e),
            s =
              r.numVars === n.numVars &&
              r.numColors === n.numColors &&
              r.numNumbers >= n.numNumbers;
          return s
            ? tU(eZ(r.values, n.values), i)
            : ((0, t3.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eN(t, e));
        },
        eY = (t, e, i) => {
          let r = e - t;
          return 0 === r ? 1 : (i - t) / r;
        },
        eX = (t, e) => (i) => eS(t, e, i);
      function eG(t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
        let s = t.length;
        if (
          ((0, t3.k)(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return () => e[0];
        t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, i) {
            let r = [],
              n =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return eA.test(t) ? ek : ez;
                  else if (Array.isArray(t)) return eZ;
                  else if ("object" == typeof t) return eH;
                  return eX;
                })(t[0]),
              s = t.length - 1;
            for (let i = 0; i < s; i++) {
              let s = n(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || tG.Z : e;
                s = tU(t, s);
              }
              r.push(s);
            }
            return r;
          })(e, r, n),
          a = o.length,
          l = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let r = eY(t[i], t[i + 1], e);
            return o[i](r);
          };
        return i ? (e) => l(U(t[0], t[s - 1], e)) : l;
      }
      function eq({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = eo(r) ? r.map(eg) : eg(r),
          s = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = eY(0, e, r);
                        t.push(eS(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = eG(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || es).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      function eK(t, e, i) {
        var r, n;
        let s = Math.max(e - 5, 0);
        return (r = i - t(s)), (n = e - s) ? r * (1e3 / n) : 0;
      }
      function e_(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eJ = ["duration", "bounce"],
        eQ = ["stiffness", "damping", "mass"];
      function e0(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function e1({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let n;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            velocity: c,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!e0(t, eQ) && e0(t, eJ)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let n, s;
                (0, t3.K)(
                  t <= t6(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = U(0.05, 1, o)),
                  (t = U(0.01, 10, t4(t))),
                  o < 1
                    ? ((n = (e) => {
                        let r = e * o,
                          n = r * t,
                          s = e_(e, o);
                        return 0.001 - ((r - i) / s) * Math.exp(-n);
                      }),
                      (s = (e) => {
                        let r = e * o,
                          s = r * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = e_(Math.pow(e, 2), o),
                          u = -n(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((s * i + i - a) * Math.exp(-s))) / l;
                      }))
                    : ((n = (e) => {
                        let r = Math.exp(-e * t),
                          n = (e - i) * t + 1;
                        return -0.001 + r * n;
                      }),
                      (s = (e) => {
                        let r = Math.exp(-e * t),
                          n = (i - e) * (t * t);
                        return r * n;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(n, s, a);
                if (((t = t6(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(r),
          m = c ? -t4(c) : 0,
          f = u / (2 * Math.sqrt(l * h)),
          g = o - s,
          v = t4(Math.sqrt(l / h)),
          y = 5 > Math.abs(g);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = e_(v, f);
          n = (e) => {
            let i = Math.exp(-f * v * e);
            return (
              o -
              i *
                (((m + f * v * g) / t) * Math.sin(t * e) + g * Math.cos(t * e))
            );
          };
        } else if (1 === f)
          n = (t) => o - Math.exp(-v * t) * (g + (m + v * g) * t);
        else {
          let t = v * Math.sqrt(f * f - 1);
          n = (e) => {
            let i = Math.exp(-f * v * e),
              r = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * v * g) * Math.sinh(r) + t * g * Math.cosh(r))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let r = n(t);
            if (p) a.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = f < 1 ? eK(n, t, r) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - r) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : r), a;
          },
        };
      }
      function e5({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let P = (t) => -v * Math.exp(-t / r),
          b = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = b(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          w = (t) => {
            f(m.value) &&
              ((c = t),
              (d = e1({
                keyframes: [m.value, g(m.value)],
                velocity: eK(b, t, m.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), T(t), w(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || T(t), m);
            },
          }
        );
      }
      let e2 = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => tD.Wi.update(e, !0),
          stop: () => (0, tD.Pn)(e),
          now: () =>
            tD.frameData.isProcessing
              ? tD.frameData.timestamp
              : performance.now(),
        };
      };
      function e3(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let e6 = { decay: e5, inertia: e5, tween: eq, keyframes: eq, spring: e1 };
      function e4({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = e2,
        keyframes: r,
        type: n = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let p,
          m,
          f,
          g,
          v,
          y = 1,
          x = !1,
          P = () => {
            m = new Promise((t) => {
              p = t;
            });
          };
        P();
        let b = e6[n] || eq;
        b !== eq &&
          "number" != typeof r[0] &&
          ((g = eG([0, 100], r, { clamp: !1 })), (r = [0, 100]));
        let T = b({ ...d, keyframes: r });
        "mirror" === a &&
          (v = b({
            ...d,
            keyframes: [...r].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let w = "idle",
          A = null,
          S = null,
          V = null;
        null === T.calculatedDuration && s && (T.calculatedDuration = e3(T));
        let { calculatedDuration: E } = T,
          C = 1 / 0,
          M = 1 / 0;
        null !== E && (M = (C = E + o) * (s + 1) - o);
        let D = 0,
          k = (t) => {
            if (null === S) return;
            y > 0 && (S = Math.min(S, t)),
              y < 0 && (S = Math.min(t - M / y, S)),
              (D = null !== A ? A : Math.round(t - S) * y);
            let i = D - e * (y >= 0 ? 1 : -1),
              n = y >= 0 ? i < 0 : i > M;
            (D = Math.max(i, 0)), "finished" === w && null === A && (D = M);
            let l = D,
              u = T;
            if (s) {
              let t = D / C,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1));
              let r = !!(e % 2);
              r &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / C))
                  : "mirror" === a && (u = v));
              let n = U(0, 1, i);
              D > M && (n = "reverse" === a && r ? 1 : 0), (l = n * C);
            }
            let h = n ? { done: !1, value: r[0] } : u.next(l);
            g && (h.value = g(h.value));
            let { done: d } = h;
            n || null === E || (d = y >= 0 ? D >= M : D <= 0);
            let p = null === A && ("finished" === w || ("running" === w && d));
            return c && c(h.value), p && j(), h;
          },
          R = () => {
            f && f.stop(), (f = void 0);
          },
          L = () => {
            (w = "idle"), R(), p(), P(), (S = V = null);
          },
          j = () => {
            (w = "finished"), h && h(), R(), p();
          },
          F = () => {
            if (x) return;
            f || (f = i(k));
            let t = f.now();
            l && l(),
              null !== A ? (S = t - A) : (S && "finished" !== w) || (S = t),
              "finished" === w && P(),
              (V = S),
              (A = null),
              (w = "running"),
              f.start();
          };
        t && F();
        let B = {
          then: (t, e) => m.then(t, e),
          get time() {
            return t4(D);
          },
          set time(newTime) {
            (D = newTime = t6(newTime)),
              null === A && f && 0 !== y
                ? (S = f.now() - newTime / y)
                : (A = newTime);
          },
          get duration() {
            let t =
              null === T.calculatedDuration ? e3(T) : T.calculatedDuration;
            return t4(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !f) return;
            (y = newSpeed), (B.time = t4(D));
          },
          get state() {
            return w;
          },
          play: F,
          pause: () => {
            (w = "paused"), (A = D);
          },
          stop: () => {
            (x = !0), "idle" !== w && ((w = "idle"), u && u(), L());
          },
          cancel: () => {
            null !== V && k(V), L();
          },
          complete: () => {
            w = "finished";
          },
          sample: (t) => ((S = 0), k(t)),
        };
        return B;
      }
      let e9 =
          ((s = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === r && (r = s()), r)),
        e7 = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        e8 = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && et[e]) ||
              t7(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        it = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ie = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ii = { type: "keyframes", duration: 0.8 },
        ir = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        is = (t, { keyframes: e }) =>
          e.length > 2
            ? ii
            : D.has(t)
            ? t.startsWith("scale")
              ? ie(e[1])
              : it
            : ir,
        io = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (eW.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        ia = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function il(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(H) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = ia.has(e) ? 1 : 0;
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let iu = /([a-z-]*)\(.*?\)/g,
        ih = {
          ...eW,
          getAnimatableNone: (t) => {
            let e = t.match(iu);
            return e ? e.map(il).join(" ") : t;
          },
        },
        ic = {
          ...ti,
          color: eA,
          backgroundColor: eA,
          outlineColor: eA,
          fill: eA,
          stroke: eA,
          borderColor: eA,
          borderTopColor: eA,
          borderRightColor: eA,
          borderBottomColor: eA,
          borderLeftColor: eA,
          filter: ih,
          WebkitFilter: ih,
        },
        id = (t) => ic[t];
      function ip(t, e) {
        let i = id(t);
        return (
          i !== ih && (i = eW),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let im = (t) => /^0[^.\s]+$/.test(t);
      function ig(t, e) {
        return t[e] || t.default || t;
      }
      let iv =
        (t, e, i, r = {}) =>
        (n) => {
          let s = ig(r, t) || {},
            o = s.delay || r.delay || 0,
            { elapsed: a = 0 } = r;
          a -= t6(o);
          let l = (function (t, e, i, r) {
              let n, s;
              let o = io(e, i);
              n = Array.isArray(i) ? [...i] : [null, i];
              let a = void 0 !== r.from ? r.from : t.get(),
                l = [];
              for (let t = 0; t < n.length; t++) {
                var u;
                null === n[t] && (n[t] = 0 === t ? a : n[t - 1]),
                  ("number" == typeof (u = n[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || im(u)
                    : void 0) && l.push(t),
                  "string" == typeof n[t] &&
                    "none" !== n[t] &&
                    "0" !== n[t] &&
                    (s = n[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) {
                  let i = l[t];
                  n[i] = ip(e, s);
                }
              return n;
            })(e, t, i, s),
            u = l[0],
            h = l[l.length - 1],
            c = io(t, u),
            d = io(t, h);
          (0, t3.K)(
            c === d,
            `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              n(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(s) && (p = { ...p, ...is(t, p) }),
            p.duration && (p.duration = t6(p.duration)),
            p.repeatDelay && (p.repeatDelay = t6(p.repeatDelay)),
            !c || !d || t9.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: i,
              onComplete: r,
            }) {
              let n = () => (
                i && i(t[t.length - 1]),
                r && r(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tG.Z,
                  pause: tG.Z,
                  stop: tG.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tG.Z,
                  complete: tG.Z,
                }
              );
              return e
                ? e4({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: n,
                  })
                : n();
            })(t9.current ? { ...p, delay: 0 } : p);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let i = (function (t, e, { onUpdate: i, onComplete: r, ...n }) {
              let s, o;
              let a =
                e9() &&
                e7.has(e) &&
                !n.repeatDelay &&
                "mirror" !== n.repeatType &&
                0 !== n.damping &&
                "inertia" !== n.type;
              if (!a) return !1;
              let l = !1,
                u = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              u();
              let { keyframes: h, duration: c = 300, ease: d, times: p } = n;
              if (e8(e, n)) {
                let t = e4({ ...n, repeat: 0, delay: 0 }),
                  e = { done: !1, value: h[0] },
                  i = [],
                  r = 0;
                for (; !e.done && r < 2e4; )
                  i.push((e = t.sample(r)).value), (r += 10);
                (p = void 0), (h = i), (c = r - 10), (d = "linear");
              }
              let m = (function (
                t,
                e,
                i,
                {
                  delay: r = 0,
                  duration: n,
                  repeat: s = 0,
                  repeatType: o = "loop",
                  ease: a,
                  times: l,
                } = {}
              ) {
                let u = { [e]: i };
                l && (u.offset = l);
                let h = (function t(e) {
                  if (e)
                    return t7(e) ? t8(e) : Array.isArray(e) ? e.map(t) : et[e];
                })(a);
                return (
                  Array.isArray(h) && (u.easing = h),
                  t.animate(u, {
                    delay: r,
                    duration: n,
                    easing: Array.isArray(h) ? "linear" : h,
                    fill: "both",
                    iterations: s + 1,
                    direction: "reverse" === o ? "alternate" : "normal",
                  })
                );
              })(t.owner.current, e, h, {
                ...n,
                duration: c,
                ease: d,
                times: p,
              });
              n.syncStart &&
                (m.startTime = tD.frameData.isProcessing
                  ? tD.frameData.timestamp
                  : document.timeline
                  ? document.timeline.currentTime
                  : performance.now());
              let f = () => m.cancel(),
                g = () => {
                  tD.Wi.update(f), s(), u();
                };
              return (
                (m.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: i = "loop" }) {
                      let r =
                        e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                      return t[r];
                    })(h, n)
                  ),
                    r && r(),
                    g();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  attachTimeline: (t) => (
                    (m.timeline = t), (m.onfinish = null), tG.Z
                  ),
                  get time() {
                    return t4(m.currentTime || 0);
                  },
                  set time(newTime) {
                    m.currentTime = t6(newTime);
                  },
                  get speed() {
                    return m.playbackRate;
                  },
                  set speed(newSpeed) {
                    m.playbackRate = newSpeed;
                  },
                  get duration() {
                    return t4(c);
                  },
                  play: () => {
                    l || (m.play(), (0, tD.Pn)(f));
                  },
                  pause: () => m.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === m.playState)) return;
                    let { currentTime: e } = m;
                    if (e) {
                      let i = e4({ ...n, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    g();
                  },
                  complete: () => m.finish(),
                  cancel: g,
                }
              );
            })(e, t, p);
            if (i) return i;
          }
          return e4(p);
        };
      function iy(t) {
        return !!(R(t) && t.add);
      }
      let ix = (t) => /^\-?\d*\.?\d+$/.test(t);
      function iP(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function ib(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class iT {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return iP(this.subscriptions, t), () => ib(this.subscriptions, t);
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let iw = (t) => !isNaN(parseFloat(t)),
        iA = { current: void 0 };
      class iS {
        constructor(t, e = {}) {
          (this.version = "10.16.4"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: r } = tD.frameData;
              this.lastUpdated !== r &&
                ((this.timeDelta = i),
                (this.lastUpdated = r),
                tD.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              tD.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = iw(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new iT());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tD.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return iA.current && iA.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function iV(t, e) {
        return new iS(t, e);
      }
      let iE = (t) => (e) => e.test(t),
        iC = [W, _, K, q, Q, J, { test: (t) => "auto" === t, parse: (t) => t }],
        iM = (t) => iC.find(iE(t)),
        iD = [...iC, eA, eW],
        ik = (t) => iD.find(iE(t));
      function iR(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        r && (s = r);
        let u = [],
          h = n && t.animationState && t.animationState.getState()[n];
        for (let e in a) {
          let r = t.getValue(e),
            n = a[e];
          if (
            !r ||
            void 0 === n ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(h, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !r.hasAnimated) {
            let i = t.getProps()[t2];
            i &&
              ((o.elapsed = window.HandoffAppearAnimations(i, e, r, tD.Wi)),
              (o.syncStart = !0));
          }
          r.start(
            iv(e, r, n, t.shouldReduceMotion && D.has(e) ? { type: !1 } : o)
          );
          let c = r.animation;
          iy(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let i = t5(t, e),
                    {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                  for (let e in (s = { ...s, ...r })) {
                    let i = tE(s[e]);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, iV(i));
                  }
                })(t, o);
            }),
          u
        );
      }
      function iL(t, e, i = {}) {
        let r = t5(t, e, i.custom),
          { transition: n = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let s = r ? () => Promise.all(iR(t, r, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ij)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              iL(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = n;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function ij(t, e) {
        return t.sortNodePosition(e);
      }
      let iF = [...f].reverse(),
        iB = f.length;
      function iO(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let iI = 0,
        iU = (t, e) => Math.abs(t - e);
      class iW {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iZ(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = iU(t.x, e.x),
                      r = iU(t.y, e.y);
                    return Math.sqrt(i ** 2 + r ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = tD.frameData;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iN(e, this.transformPagePoint)),
                tD.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: i, onSessionEnd: r } = this.handlers,
                n = iZ(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : iN(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && i && i(t, n), r && r(t, n);
            }),
            !tj(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let r = tF(t),
            n = iN(r, this.transformPagePoint),
            { point: s } = n,
            { timestamp: o } = tD.frameData;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, iZ(n, this.history)),
            (this.removeListeners = tU(
              tO(window, "pointermove", this.handlePointerMove),
              tO(window, "pointerup", this.handlePointerUp),
              tO(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tD.Pn)(this.updatePoint);
        }
      }
      function iN(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function i$(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iZ({ point: t }, e) {
        return {
          point: t,
          delta: i$(t, iH(e)),
          offset: i$(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = iH(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > t6(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = t4(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iH(t) {
        return t[t.length - 1];
      }
      function iz(t) {
        return t.max - t.min;
      }
      function iY(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function iX(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = eS(e.min, e.max, t.origin)),
          (t.scale = iz(i) / iz(e)),
          (iY(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = eS(i.min, i.max, t.origin) - t.originPoint),
          (iY(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function iG(t, e, i, r) {
        iX(t.x, e.x, i.x, r ? r.originX : void 0),
          iX(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function iq(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iz(e));
      }
      function iK(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iz(e));
      }
      function i_(t, e, i) {
        iK(t.x, e.x, i.x), iK(t.y, e.y, i.y);
      }
      function iJ(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iQ(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function i0(t, e, i) {
        return { min: i1(t, e), max: i1(t, i) };
      }
      function i1(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let i5 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i2 = () => ({ x: i5(), y: i5() }),
        i3 = () => ({ min: 0, max: 0 }),
        i6 = () => ({ x: i3(), y: i3() });
      function i4(t) {
        return [t("x"), t("y")];
      }
      function i9({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function i7(t) {
        return void 0 === t || 1 === t;
      }
      function i8({ scale: t, scaleX: e, scaleY: i }) {
        return !i7(t) || !i7(e) || !i7(i);
      }
      function rt(t) {
        return i8(t) || re(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function re(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function ri(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function rr(t, e = 0, i = 1, r, n) {
        (t.min = ri(t.min, e, i, r, n)), (t.max = ri(t.max, e, i, r, n));
      }
      function rn(t, { x: e, y: i }) {
        rr(t.x, e.translate, e.scale, e.originPoint),
          rr(t.y, i.translate, i.scale, i.originPoint);
      }
      function rs(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function ro(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ra(t, e, [i, r, n]) {
        let s = void 0 !== e[n] ? e[n] : 0.5,
          o = eS(t.min, t.max, s);
        rr(t, e[i], e[r], o, e.scale);
      }
      let rl = ["x", "scaleX", "originX"],
        ru = ["y", "scaleY", "originY"];
      function rh(t, e) {
        ra(t.x, e, rl), ra(t.y, e, ru);
      }
      function rc(t, e) {
        return i9(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let rd = new WeakMap();
      class rp {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i6()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          (i && !1 === i.isPresent) ||
            (this.panSession = new iW(
              t,
              {
                onSessionStart: (t) => {
                  this.stopAnimation(),
                    e && this.snapToCursor(tF(t, "page").point);
                },
                onStart: (t, e) => {
                  let {
                    drag: i,
                    dragPropagation: r,
                    onDragStart: n,
                  } = this.getProps();
                  if (
                    i &&
                    !r &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = tZ(i)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    i4((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if (K.test(e)) {
                        let { projection: i } = this.visualElement;
                        if (i && i.layout) {
                          let r = i.layout.layoutBox[t];
                          if (r) {
                            let t = iz(r);
                            e = t * (parseFloat(e) / 100);
                          }
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    n && tD.Wi.update(() => n(t, e), !1, !0);
                  let { animationState: s } = this.visualElement;
                  s && s.setActive("whileDrag", !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: i,
                    dragDirectionLock: r,
                    onDirectionLock: n,
                    onDrag: s,
                  } = this.getProps();
                  if (!i && !this.openGlobalLock) return;
                  let { offset: o } = e;
                  if (r && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let i = null;
                      return (
                        Math.abs(t.y) > e
                          ? (i = "y")
                          : Math.abs(t.x) > e && (i = "x"),
                        i
                      );
                    })(o)),
                      null !== this.currentDirection &&
                        n &&
                        n(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", e.point, o),
                    this.updateAxis("y", e.point, o),
                    this.visualElement.render(),
                    s && s(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && tD.Wi.update(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !rm(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? eS(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? eS(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            r = this.constraints;
          t && d(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: iJ(t.x, i, n), y: iJ(t.y, e, r) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: i0(t, "left", "right"), y: i0(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              i4((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !d(e)) return !1;
          let r = e.current;
          (0, t3.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = rc(t, i),
                { scroll: n } = e;
              return n && (ro(r.x, n.offset.x), ro(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: iQ((t = n.layout.layoutBox).x, s.x), y: iQ(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = i9(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = i4((o) => {
              if (!rm(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(iv(t, i, 0, e));
        }
        stopAnimation() {
          i4((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps(),
            r = i[e];
          return (
            r ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          i4((e) => {
            let { drag: i } = this.getProps();
            if (!rm(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - eS(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!d(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          i4((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = iz(t),
                  n = iz(e);
                return (
                  n > r
                    ? (i = eY(e.min, e.max - r, t.min))
                    : r > n && (i = eY(t.min, t.max - n, e.min)),
                  U(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            i4((e) => {
              if (!rm(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(eS(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rd.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tO(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              d(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", i);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            i();
          let s = tL(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (i4((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function rm(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let rf = (t) => (e, i) => {
          t && tD.Wi.update(() => t(e, i));
        },
        rg = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rv(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ry = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!_.test(t)) return t;
            t = parseFloat(t);
          }
          let i = rv(t, e.target.x),
            r = rv(t, e.target.y);
          return `${i}% ${r}%`;
        },
      };
      class rx extends o.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(C, rb),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rg.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    tD.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rP(t) {
        let [e, i] = (function () {
            let t = (0, o.useContext)(u.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              n = (0, o.useId)();
            return (
              (0, o.useEffect)(() => r(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          r = (0, o.useContext)(w.p);
        return o.createElement(rx, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, o.useContext)(A),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let rb = {
          borderRadius: {
            ...ry,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: ry,
          borderTopRightRadius: ry,
          borderBottomLeftRadius: ry,
          borderBottomRightRadius: ry,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = eW.parse(t);
              if (r.length > 5) return t;
              let n = eW.createTransformer(t),
                s = "number" != typeof r[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (r[0 + s] /= o), (r[1 + s] /= a);
              let l = eS(o, a, 0.5);
              return (
                "number" == typeof r[2 + s] && (r[2 + s] /= l),
                "number" == typeof r[3 + s] && (r[3 + s] /= l),
                n(r)
              );
            },
          },
        },
        rT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rw = rT.length,
        rA = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rS = (t) => "number" == typeof t || _.test(t);
      function rV(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rE = rM(0, 0.5, eh),
        rC = rM(0.5, 0.95, tG.Z);
      function rM(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(eY(t, e, r)));
      }
      function rD(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rk(t, e) {
        rD(t.x, e.x), rD(t.y, e.y);
      }
      function rR(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function rL(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (K.test(e)) {
            e = parseFloat(e);
            let t = eS(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = eS(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = rR(t.min, e, i, a, n)),
            (t.max = rR(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let rj = ["x", "scaleX", "originX"],
        rF = ["y", "scaleY", "originY"];
      function rB(t, e, i, r) {
        rL(t.x, e, rj, i ? i.x : void 0, r ? r.x : void 0),
          rL(t.y, e, rF, i ? i.y : void 0, r ? r.y : void 0);
      }
      function rO(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rI(t) {
        return rO(t.x) && rO(t.y);
      }
      function rU(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function rW(t) {
        return iz(t.x) / iz(t.y);
      }
      class rN {
        constructor() {
          this.members = [];
        }
        add(t) {
          iP(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (ib(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function r$(t, e, i) {
        let r = "",
          n = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: n } = i;
          t && (r += `rotate(${t}deg) `),
            e && (r += `rotateX(${e}deg) `),
            n && (r += `rotateY(${n}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`), r || "none";
      }
      let rZ = (t, e) => t.depth - e.depth;
      class rH {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          iP(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          ib(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rZ),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let rz = ["", "X", "Y", "Z"],
        rY = 0,
        rX = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function rG({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = rY++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (rX.totalNodes =
                  rX.resolvedTargetDeltas =
                  rX.recalculatedProjection =
                    0),
                  this.nodes.forEach(r_),
                  this.nodes.forEach(r3),
                  this.nodes.forEach(r6),
                  this.nodes.forEach(rJ),
                  window.MotionDebug && window.MotionDebug.record(rX);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rH());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new iT()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      r = ({ timestamp: n }) => {
                        let s = n - i;
                        s >= e && ((0, tD.Pn)(r), t(s - e));
                      };
                    return tD.Wi.read(r, !0), () => (0, tD.Pn)(r);
                  })(r, 250)),
                  rg.hasAnimatedSinceResize &&
                    ((rg.hasAnimatedSinceResize = !1), this.nodes.forEach(r2));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ne,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !rU(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...ig(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || r2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tD.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(r4),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r0);
              return;
            }
            this.isUpdating || this.nodes.forEach(r1),
              (this.isUpdating = !1),
              this.nodes.forEach(r5),
              this.nodes.forEach(rq),
              this.nodes.forEach(rK),
              this.clearAllSnapshots();
            let e = performance.now();
            (tD.frameData.delta = U(0, 1e3 / 60, e - tD.frameData.timestamp)),
              (tD.frameData.timestamp = e),
              (tD.frameData.isProcessing = !0),
              tD.S6.update.process(tD.frameData),
              tD.S6.preRender.process(tD.frameData),
              tD.S6.render.process(tD.frameData),
              (tD.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rQ), this.sharedNodes.forEach(r9);
          }
          scheduleUpdateProjection() {
            tD.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tD.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i6()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !rI(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || rt(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              nn((e = r).x),
              nn(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return i6();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (ro(e.x, i.offset.x), ro(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = i6();
            rk(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i],
                { scroll: n, options: s } = r;
              if (r !== this.root && n && s.layoutScroll) {
                if (n.isRoot) {
                  rk(e, t);
                  let { scroll: i } = this.root;
                  i && (ro(e.x, -i.offset.x), ro(e.y, -i.offset.y));
                }
                ro(e.x, n.offset.x), ro(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = i6();
            rk(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rh(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                rt(r.latestValues) && rh(i, r.latestValues);
            }
            return rt(this.latestValues) && rh(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i6();
            rk(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !rt(i.latestValues)) continue;
              i8(i.latestValues) && i.updateSnapshot();
              let r = i6(),
                n = i.measurePageBox();
              rk(r, n),
                rB(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return rt(this.latestValues) && rB(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tD.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = tD.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i6()),
                    (this.relativeTargetOrigin = i6()),
                    i_(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    rk(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i6()), (this.targetWithTransforms = i6())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      iq(i.x, r.x, n.x),
                      iq(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rk(this.target, this.layout.layoutBox),
                      rn(this.target, this.targetDelta))
                    : rk(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i6()),
                      (this.relativeTargetOrigin = i6()),
                      i_(this.relativeTargetOrigin, this.target, t.target),
                      rk(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rX.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              i8(this.parent.latestValues) ||
              re(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === tD.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            rk(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      rh(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), rn(t, s)),
                    r && rt(n.latestValues) && rh(t, n.latestValues));
                }
                (e.x = rs(e.x)), (e.y = rs(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = i2()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = i2()),
              (this.projectionDeltaWithTransform = i2()));
            let u = this.projectionTransform;
            iG(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = r$(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rX.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = i2();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = i6(),
              l = r ? r.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              p = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(nt)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (r7(o.x, t.x, r),
                  r7(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, c, m;
                  i_(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (c = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    r8(c.x, m.x, a.x, r),
                    r8(c.y, m.y, a.y, r),
                    i &&
                      ((l = this.relativeTarget),
                      (u = i),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = i6()),
                    rk(i, this.relativeTarget);
                }
                h &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = eS(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          rE(r)
                        )),
                        (t.opacityExit = eS(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          rC(r)
                        )))
                      : s &&
                        (t.opacity = eS(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r
                        ));
                    for (let n = 0; n < rw; n++) {
                      let s = `border${rT[n]}Radius`,
                        o = rV(e, s),
                        a = rV(i, s);
                      if (void 0 === o && void 0 === a) continue;
                      o || (o = 0), a || (a = 0);
                      let l = 0 === o || 0 === a || rS(o) === rS(a);
                      l
                        ? ((t[s] = Math.max(eS(rA(o), rA(a), r), 0)),
                          (K.test(a) || K.test(o)) && (t[s] += "%"))
                        : (t[s] = a);
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = eS(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tD.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tD.Wi.update(() => {
                (rg.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = R(t) ? t : iV(t);
                    return r.start(iv("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                ns(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || i6();
                let e = iz(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = iz(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              rk(e, i),
                rh(e, n),
                iG(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rN());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let r = {};
            for (let e = 0; e < rz.length; e++) {
              let n = "rotate" + rz[e];
              i[n] && ((r[n] = i[n]), t.setStaticValue(n, 0));
            }
            for (let e in (t.render(), r)) t.setStaticValue(e, r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return { visibility: "hidden" };
            r.visibility = "";
            let n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tC(t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tC(t.pointerEvents) || "")),
                this.hasProjected &&
                  !rt(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = r$(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            C)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = C[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this ? tC(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(r0),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rq(t) {
        t.updateLayout();
      }
      function rK(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? i4((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = iz(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : ns(n, i.layoutBox, e) &&
              i4((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = iz(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = i2();
          iG(o, e, i.layoutBox);
          let a = i2();
          s
            ? iG(a, t.applyTransform(r, !0), i.measuredBox)
            : iG(a, e, i.layoutBox);
          let l = !rI(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = i6();
                i_(o, i.layoutBox, n.layoutBox);
                let a = i6();
                i_(a, e, s.layoutBox),
                  rU(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function r_(t) {
        rX.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function rJ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rQ(t) {
        t.clearSnapshot();
      }
      function r0(t) {
        t.clearMeasurements();
      }
      function r1(t) {
        t.isLayoutDirty = !1;
      }
      function r5(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function r2(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function r3(t) {
        t.resolveTargetDelta();
      }
      function r6(t) {
        t.calcProjection();
      }
      function r4(t) {
        t.resetRotation();
      }
      function r9(t) {
        t.removeLeadSnapshot();
      }
      function r7(t, e, i) {
        (t.translate = eS(e.translate, 0, i)),
          (t.scale = eS(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function r8(t, e, i, r) {
        (t.min = eS(e.min, i.min, r)), (t.max = eS(e.max, i.max, r));
      }
      function nt(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ne = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ni = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        nr = ni("applewebkit/") && !ni("chrome/") ? Math.round : tG.Z;
      function nn(t) {
        (t.min = nr(t.min)), (t.max = nr(t.max));
      }
      function ns(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !iY(rW(e), rW(i), 0.2))
        );
      }
      let no = rG({
          attachResizeListener: (t, e) => tL(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        na = { current: void 0 },
        nl = rG({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!na.current) {
              let t = new no({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (na.current = t);
            }
            return na.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        nu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function nh(t, e, i = 1) {
        (0, t3.k)(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [r, n] = (function (t) {
          let e = nu.exec(t);
          if (!e) return [,];
          let [, i, r] = e;
          return [i, r];
        })(t);
        if (!r) return;
        let s = window.getComputedStyle(e).getPropertyValue(r);
        if (s) {
          let t = s.trim();
          return ix(t) ? parseFloat(t) : t;
        }
        return O(n) ? nh(n, e, i + 1) : n;
      }
      let nc = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        nd = (t) => nc.has(t),
        np = (t) => Object.keys(t).some(nd),
        nm = (t) => t === W || t === _,
        nf = (t, e) => parseFloat(t.split(", ")[e]),
        ng =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/);
            if (n) return nf(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/);
              return e ? nf(e[1], t) : 0;
            }
          },
        nv = new Set(["x", "y", "z"]),
        ny = M.filter((t) => !nv.has(t)),
        nx = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: ng(4, 13),
          y: ng(5, 14),
        };
      (nx.translateX = nx.x), (nx.translateY = nx.y);
      let nP = (t, e, i) => {
          let r = e.measureViewportBox(),
            n = e.current,
            s = getComputedStyle(n),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = nx[t](r, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let r = e.getValue(i);
              r && r.jump(a[i]), (t[i] = nx[i](l, s));
            }),
            t
          );
        },
        nb = (t, e, i = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          let n = Object.keys(e).filter(nd),
            s = [],
            o = !1,
            a = [];
          if (
            (n.forEach((n) => {
              let l;
              let u = t.getValue(n);
              if (!t.hasValue(n)) return;
              let h = i[n],
                c = iM(h),
                d = e[n];
              if (tS(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                c = iM((h = d[e]));
                for (let i = e; i < t && null !== d[i]; i++)
                  l
                    ? (0, t3.k)(
                        iM(d[i]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = iM(d[i])),
                      (0, t3.k)(
                        l === c || (nm(c) && nm(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = iM(d);
              if (c !== l) {
                if (nm(c) && nm(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[n] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === _ &&
                        (e[n] = d.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === d)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[n] = c.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            ny.forEach((i) => {
                              let r = t.getValue(i);
                              void 0 !== r &&
                                (e.push([i, r.get()]),
                                r.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(n),
                      (r[n] = void 0 !== r[n] ? r[n] : e[n]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: r };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              n = nP(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              T.j && null !== i && window.scrollTo({ top: i }),
              { target: n, transitionEnd: r }
            );
          }
        },
        nT = (t, e, i, r) => {
          var n, s;
          let o = (function (t, { ...e }, i) {
            let r = t.current;
            if (!(r instanceof Element)) return { target: e, transitionEnd: i };
            for (let n in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!O(e)) return;
              let i = nh(e, r);
              i && t.set(i);
            }),
            e)) {
              let t = e[n];
              if (!O(t)) continue;
              let s = nh(t, r);
              s && ((e[n] = s), i || (i = {}), void 0 === i[n] && (i[n] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, r);
          return (
            (e = o.target),
            (r = o.transitionEnd),
            (n = e),
            (s = r),
            np(n) ? nb(t, n, i, s) : { target: n, transitionEnd: s }
          );
        },
        nw = { current: null },
        nA = { current: !1 },
        nS = new WeakMap(),
        nV = Object.keys(b),
        nE = nV.length,
        nC = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nM = g.length;
      class nD {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            visualState: n,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tD.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = n;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = s),
            (this.isControllingVariants = v(e)),
            (this.isVariantNode = y(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && R(e) && (e.set(o[t], !1), iy(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            nS.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nA.current ||
              (function () {
                if (((nA.current = !0), T.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nw.current = t.matches);
                    t.addListener(e), e();
                  } else nw.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nw.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nS.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tD.Pn)(this.notifyUpdate),
          (0, tD.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = D.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tD.Wi.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), n();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, r, n) {
          let s, o;
          for (let t = 0; t < nE; t++) {
            let i = nV[t],
              {
                isEnabled: r,
                Feature: n,
                ProjectionNode: a,
                MeasureLayout: l,
              } = b[i];
            a && (s = a),
              r(e) &&
                (!this.features[i] && n && (this.features[i] = new n(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: r,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!r || (o && d(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: n,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i6();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nC.length; e++) {
            let i = nC[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: r } = e;
            for (let n in e) {
              let s = e[n],
                o = i[n];
              if (R(s)) t.addValue(n, s), iy(r) && r.add(n);
              else if (R(o))
                t.addValue(n, iV(s, { owner: t })), iy(r) && r.remove(n);
              else if (o !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, iV(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nM; t++) {
            let i = g[t],
              r = this.props[i];
            (p(r) || !1 === r) && (e[i] = r);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = iV(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            r =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tw(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || R(n)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iT()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nk extends nD {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: r },
          n
        ) {
          let s = (function (t, e, i) {
            let r = {};
            for (let n in t) {
              let t = (function (t, e) {
                if (!e) return;
                let i = e[t] || e.default || e;
                return i.from;
              })(n, e);
              if (void 0 !== t) r[n] = t;
              else {
                let t = i.getValue(n);
                t && (r[n] = t.get());
              }
            }
            return r;
          })(i, t || {}, this);
          if ((r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n)) {
            !(function (t, e, i) {
              var r, n;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (n =
                            null !== (r = i[o]) && void 0 !== r
                              ? r
                              : t.readValue(o)) && void 0 !== n
                          ? n
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (ix(u) || im(u))
                        ? (u = parseFloat(u))
                        : !ik(u) && eW.test(l) && (u = ip(o, l)),
                      t.addValue(o, iV(u, { owner: t })),
                      void 0 === i[o] && (i[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, i, s);
            let t = nT(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class nR extends nk {
        readValueFromInstance(t, e) {
          if (D.has(e)) {
            let t = id(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (B(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return rc(t, e);
        }
        build(t, e, i, r) {
          tr(t, e, i, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tb(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          R(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, r) {
          ty(t, e, i, r);
        }
      }
      class nL extends nk {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (D.has(e)) {
            let t = id(e);
            return (t && t.default) || 0;
          }
          return (e = tx.has(e) ? e : tv(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return i6();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tT(t, e);
        }
        build(t, e, i, r) {
          tp(t, e, i, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          tP(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = tf(t.tagName)), super.mount(t);
        }
      }
      let nj = (t, e) =>
          E(t)
            ? new nL(e, { enableHardwareAcceleration: !1 })
            : new nR(e, { enableHardwareAcceleration: !0 }),
        nF = {
          animation: {
            Feature: class extends tz {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let r;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let n = e.map((e) => iL(t, e, i));
                                  r = Promise.all(n);
                                } else if ("string" == typeof e)
                                  r = iL(t, e, i);
                                else {
                                  let n =
                                    "function" == typeof e
                                      ? t5(t, e, i.custom)
                                      : e;
                                  r = Promise.all(iR(t, n, i));
                                }
                                return r.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, i)
                            )
                          ),
                        i = {
                          animate: iO(!0),
                          whileInView: iO(),
                          whileHover: iO(),
                          whileTap: iO(),
                          whileDrag: iO(),
                          whileFocus: iO(),
                          exit: iO(),
                        },
                        r = !0,
                        n = (e, i) => {
                          let r = t5(t, i);
                          if (r) {
                            let { transition: t, transitionEnd: i, ...n } = r;
                            e = { ...e, ...n, ...i };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          h = new Set(),
                          c = {},
                          d = 1 / 0;
                        for (let e = 0; e < iB; e++) {
                          var f;
                          let g = iF[e],
                            v = i[g],
                            y = void 0 !== a[g] ? a[g] : l[g],
                            x = p(y),
                            P = g === o ? v.isActive : null;
                          !1 === P && (d = e);
                          let b = y === l[g] && y !== a[g] && x;
                          if (
                            (b && r && t.manuallyAnimateOnMount && (b = !1),
                            (v.protectedKeys = { ...c }),
                            (!v.isActive && null === P) ||
                              (!y && !v.prevProp) ||
                              m(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let T =
                              ((f = v.prevProp),
                              "string" == typeof y
                                ? y !== f
                                : !!Array.isArray(y) && !t1(y, f)),
                            w =
                              T ||
                              (g === o && v.isActive && !b && x) ||
                              (e > d && x),
                            A = Array.isArray(y) ? y : [y],
                            S = A.reduce(n, {});
                          !1 === P && (S = {});
                          let { prevResolvedValues: V = {} } = v,
                            E = { ...V, ...S },
                            C = (t) => {
                              (w = !0), h.delete(t), (v.needsAnimating[t] = !0);
                            };
                          for (let t in E) {
                            let e = S[t],
                              i = V[t];
                            c.hasOwnProperty(t) ||
                              (e !== i
                                ? tS(e) && tS(i)
                                  ? !t1(e, i) || T
                                    ? C(t)
                                    : (v.protectedKeys[t] = !0)
                                  : void 0 !== e
                                  ? C(t)
                                  : h.add(t)
                                : void 0 !== e && h.has(t)
                                ? C(t)
                                : (v.protectedKeys[t] = !0));
                          }
                          (v.prevProp = y),
                            (v.prevResolvedValues = S),
                            v.isActive && (c = { ...c, ...S }),
                            r && t.blockInitialAnimation && (w = !1),
                            w &&
                              !b &&
                              u.push(
                                ...A.map((t) => ({
                                  animation: t,
                                  options: { type: g, ...s },
                                }))
                              );
                        }
                        if (h.size) {
                          let e = {};
                          h.forEach((i) => {
                            let r = t.getBaseTarget(i);
                            void 0 !== r && (e[i] = r);
                          }),
                            u.push({ animation: e });
                        }
                        let g = !!u.length;
                        return (
                          r &&
                            !1 === a.initial &&
                            !t.manuallyAnimateOnMount &&
                            (g = !1),
                          (r = !1),
                          g ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, r, n) {
                          var o;
                          if (i[e].isActive === r) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, r);
                            }),
                            (i[e].isActive = r);
                          let a = s(n, e);
                          for (let t in i) i[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(), m(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends tz {
              constructor() {
                super(...arguments), (this.id = iI++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: i,
                  } = this.node.presenceContext,
                  { isPresent: r } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === r) return;
                let n = this.node.animationState.setActive("exit", !t, {
                  custom: null != i ? i : this.node.getProps().custom,
                });
                e && !t && n.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends tz {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: i, amount: r = "some", once: n } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof r ? r : t0[r],
                  };
                return (function (t, e, i) {
                  let r = (function ({ root: t, ...e }) {
                    let i = t || document;
                    t_.has(i) || t_.set(i, {});
                    let r = t_.get(i),
                      n = JSON.stringify(e);
                    return (
                      r[n] ||
                        (r[n] = new IntersectionObserver(tQ, {
                          root: t,
                          ...e,
                        })),
                      r[n]
                    );
                  })(e);
                  return (
                    tK.set(t, i),
                    r.observe(t),
                    () => {
                      tK.delete(t), r.unobserve(t);
                    }
                  );
                })(this.node.current, s, (t) => {
                  let { isIntersecting: e } = t;
                  if (
                    this.isInView === e ||
                    ((this.isInView = e), n && !e && this.hasEnteredView)
                  )
                    return;
                  e && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", e);
                  let { onViewportEnter: i, onViewportLeave: r } =
                      this.node.getProps(),
                    s = e ? i : r;
                  s && s(t);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends tz {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = tG.Z),
                  (this.removeEndListeners = tG.Z),
                  (this.removeAccessibleListeners = tG.Z),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let i = this.node.getProps(),
                      r = tO(
                        window,
                        "pointerup",
                        (t, e) => {
                          if (!this.checkPressEnd()) return;
                          let { onTap: i, onTapCancel: r } =
                            this.node.getProps();
                          tD.Wi.update(() => {
                            tX(this.node.current, t.target)
                              ? i && i(t, e)
                              : r && r(t, e);
                          });
                        },
                        { passive: !(i.onTap || i.onPointerUp) }
                      ),
                      n = tO(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = tU(r, n)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = tL(this.node.current, "keydown", (t) => {
                        "Enter" !== t.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = tL(
                            this.node.current,
                            "keyup",
                            (t) => {
                              "Enter" === t.key &&
                                this.checkPressEnd() &&
                                tq("up", (t, e) => {
                                  let { onTap: i } = this.node.getProps();
                                  i && tD.Wi.update(() => i(t, e));
                                });
                            }
                          )),
                          tq("down", (t, e) => {
                            this.startPress(t, e);
                          }));
                      }),
                      e = tL(this.node.current, "blur", () => {
                        this.isPressing &&
                          tq("cancel", (t, e) => this.cancelPress(t, e));
                      });
                    this.removeAccessibleListeners = tU(t, e);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: i, whileTap: r } = this.node.getProps();
                r &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && tD.Wi.update(() => i(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tH()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && tD.Wi.update(() => i(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = tO(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = tL(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tU(e, i);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends tz {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tU(
                  tL(this.node.current, "focus", () => this.onFocus()),
                  tL(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends tz {
              mount() {
                this.unmount = tU(tY(this.node, !0), tY(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends tz {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tG.Z);
              }
              onPointerDown(t) {
                this.session = new iW(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: r,
                } = this.node.getProps();
                return {
                  onSessionStart: rf(t),
                  onStart: rf(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, r && tD.Wi.update(() => r(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tO(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends tz {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = tG.Z),
                  (this.removeListeners = tG.Z),
                  (this.controls = new rp(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tG.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: nl,
            MeasureLayout: rP,
          },
          layout: { ProjectionNode: nl, MeasureLayout: rP },
        },
        nB = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: r,
              Component: n,
            }) {
              t &&
                (function (t) {
                  for (let e in t) b[e] = { ...b[e], ...t[e] };
                })(t);
              let s = (0, o.forwardRef)(function (s, m) {
                var f;
                let g;
                let y = {
                    ...(0, o.useContext)(a),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, o.useContext)(w.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: P } = y,
                  b = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (v(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || p(e) ? e : void 0,
                          animate: p(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, o.useContext)(l));
                    return (0, o.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [x(e), x(i)]
                    );
                  })(s),
                  S = r(s, P);
                if (!P && T.j) {
                  b.visualElement = (function (t, e, i, r) {
                    let { visualElement: n } = (0, o.useContext)(l),
                      s = (0, o.useContext)(c),
                      d = (0, o.useContext)(u.O),
                      p = (0, o.useContext)(a).reducedMotion,
                      m = (0, o.useRef)();
                    (r = r || s.renderer),
                      !m.current &&
                        r &&
                        (m.current = r(t, {
                          visualState: e,
                          parent: n,
                          props: i,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let f = m.current;
                    (0, o.useInsertionEffect)(() => {
                      f && f.update(i, d);
                    });
                    let g = (0, o.useRef)(!!window.HandoffAppearAnimations);
                    return (
                      (0, h.L)(() => {
                        f &&
                          (f.render(),
                          g.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, o.useEffect)(() => {
                        f &&
                          (f.updateFeatures(),
                          !g.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          (window.HandoffAppearAnimations = void 0),
                          (g.current = !1));
                      }),
                      f
                    );
                  })(n, S, y, e);
                  let i = (0, o.useContext)(A),
                    r = (0, o.useContext)(c).strict;
                  b.visualElement &&
                    (g = b.visualElement.loadFeatures(y, r, t, i));
                }
                return o.createElement(
                  l.Provider,
                  { value: b },
                  g && b.visualElement
                    ? o.createElement(g, {
                        visualElement: b.visualElement,
                        ...y,
                      })
                    : null,
                  i(
                    n,
                    s,
                    ((f = b.visualElement),
                    (0, o.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          f && (t ? f.mount(t) : f.unmount()),
                          m &&
                            ("function" == typeof m
                              ? m(t)
                              : d(m) && (m.current = t));
                      },
                      [f]
                    )),
                    S,
                    P,
                    b.visualElement
                  )
                );
              });
              return (s[S] = n), s;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, r) {
            let n = E(t) ? tk : tR;
            return {
              ...n,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, r, { latestValues: n }, s) => {
                  let a = E(e) ? tg : to,
                    l = a(i, n, s, e),
                    u = (function (t, e, i) {
                      let r = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (tu(n) ||
                            (!0 === i && tl(n)) ||
                            (!e && !tl(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (r[n] = t[n]);
                      return r;
                    })(i, "string" == typeof e, t),
                    h = { ...u, ...l, ref: r },
                    { children: c } = i,
                    d = (0, o.useMemo)(() => (R(c) ? c.get() : c), [c]);
                  return (0, o.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: r,
              Component: t,
            };
          })(t, e, nF, nj)
        );
    },
    5487: function (t, e, i) {
      i.d(e, {
        K: function () {
          return n;
        },
        k: function () {
          return s;
        },
      });
      var r = i(1662);
      let n = r.Z,
        s = r.Z;
    },
    1741: function (t, e, i) {
      i.d(e, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    1662: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      let r = (t) => t;
    },
    6681: function (t, e, i) {
      i.d(e, {
        h: function () {
          return n;
        },
      });
      var r = i(7294);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    8868: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var r = i(7294),
        n = i(1741);
      let s = n.j ? r.useLayoutEffect : r.useEffect;
    },
  },
]);
