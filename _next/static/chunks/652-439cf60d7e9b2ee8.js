(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [652],
  {
    9260: function (e, t, n) {
      !(function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var o = r(t),
          i = r(n);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  var r, o;
                  (r = t),
                    (o = n[t]),
                    (r = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(r)) in e
                      ? Object.defineProperty(e, r, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[r] = o);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function l(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]);
          }
          return o;
        }
        function s(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var c = [
            "animationData",
            "loop",
            "autoplay",
            "initialSegment",
            "onComplete",
            "onLoopComplete",
            "onEnterFrame",
            "onSegmentStart",
            "onConfigReady",
            "onDataReady",
            "onDataFailed",
            "onLoadedImages",
            "onDOMLoaded",
            "onDestroy",
            "lottieRef",
            "renderer",
            "name",
            "assetsPath",
            "rendererSettings",
          ],
          f = function (e, t) {
            var r = e.animationData,
              a = e.loop,
              f = e.autoplay,
              d = e.initialSegment,
              m = e.onComplete,
              p = e.onLoopComplete,
              y = e.onEnterFrame,
              v = e.onSegmentStart,
              g = e.onConfigReady,
              b = e.onDataReady,
              S = e.onDataFailed,
              h = e.onLoadedImages,
              O = e.onDOMLoaded,
              A = e.onDestroy;
            e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
            var w = l(e, c),
              E = n.useState(!1),
              j =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(E) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      i,
                      a,
                      u = [],
                      l = !0,
                      s = !1;
                    try {
                      if (((i = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        l = !1;
                      } else
                        for (
                          ;
                          !(l = (r = i.call(n)).done) &&
                          (u.push(r.value), u.length !== t);
                          l = !0
                        );
                    } catch (e) {
                      (s = !0), (o = e);
                    } finally {
                      try {
                        if (
                          !l &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (s) throw o;
                      }
                    }
                    return u;
                  }
                })(E, 2) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n)
                    )
                      return Array.from(e);
                    if (
                      "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                      return s(e, t);
                  }
                })(E, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              P = j[0],
              D = j[1],
              R = n.useRef(),
              L = n.useRef(null),
              C = function () {
                var t,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (L.current) {
                  null === (t = R.current) || void 0 === t || t.destroy();
                  var r = u(u(u({}, e), n), {}, { container: L.current });
                  return (
                    (R.current = o.default.loadAnimation(r)),
                    D(!!R.current),
                    function () {
                      var e;
                      null === (e = R.current) || void 0 === e || e.destroy(),
                        (R.current = void 0);
                    }
                  );
                }
              };
            return (
              n.useEffect(
                function () {
                  var e = C();
                  return function () {
                    return null == e ? void 0 : e();
                  };
                },
                [r, a]
              ),
              n.useEffect(
                function () {
                  R.current && (R.current.autoplay = !!f);
                },
                [f]
              ),
              n.useEffect(
                function () {
                  if (R.current) {
                    if (!d) {
                      R.current.resetSegments(!0);
                      return;
                    }
                    Array.isArray(d) &&
                      d.length &&
                      ((R.current.currentRawFrame < d[0] ||
                        R.current.currentRawFrame > d[1]) &&
                        (R.current.currentRawFrame = d[0]),
                      R.current.setSegment(d[0], d[1]));
                  }
                },
                [d]
              ),
              n.useEffect(
                function () {
                  var e = [
                    { name: "complete", handler: m },
                    { name: "loopComplete", handler: p },
                    { name: "enterFrame", handler: y },
                    { name: "segmentStart", handler: v },
                    { name: "config_ready", handler: g },
                    { name: "data_ready", handler: b },
                    { name: "data_failed", handler: S },
                    { name: "loaded_images", handler: h },
                    { name: "DOMLoaded", handler: O },
                    { name: "destroy", handler: A },
                  ].filter(function (e) {
                    return null != e.handler;
                  });
                  if (e.length) {
                    var t = e.map(function (e) {
                      var t;
                      return (
                        null === (t = R.current) ||
                          void 0 === t ||
                          t.addEventListener(e.name, e.handler),
                        function () {
                          var t;
                          null === (t = R.current) ||
                            void 0 === t ||
                            t.removeEventListener(e.name, e.handler);
                        }
                      );
                    });
                    return function () {
                      t.forEach(function (e) {
                        return e();
                      });
                    };
                  }
                },
                [m, p, y, v, g, b, S, h, O, A]
              ),
              {
                View: i.default.createElement(
                  "div",
                  u({ style: t, ref: L }, w)
                ),
                play: function () {
                  var e;
                  null === (e = R.current) || void 0 === e || e.play();
                },
                stop: function () {
                  var e;
                  null === (e = R.current) || void 0 === e || e.stop();
                },
                pause: function () {
                  var e;
                  null === (e = R.current) || void 0 === e || e.pause();
                },
                setSpeed: function (e) {
                  var t;
                  null === (t = R.current) || void 0 === t || t.setSpeed(e);
                },
                goToAndStop: function (e, t) {
                  var n;
                  null === (n = R.current) ||
                    void 0 === n ||
                    n.goToAndStop(e, t);
                },
                goToAndPlay: function (e, t) {
                  var n;
                  null === (n = R.current) ||
                    void 0 === n ||
                    n.goToAndPlay(e, t);
                },
                setDirection: function (e) {
                  var t;
                  null === (t = R.current) || void 0 === t || t.setDirection(e);
                },
                playSegments: function (e, t) {
                  var n;
                  null === (n = R.current) ||
                    void 0 === n ||
                    n.playSegments(e, t);
                },
                setSubframe: function (e) {
                  var t;
                  null === (t = R.current) || void 0 === t || t.setSubframe(e);
                },
                getDuration: function (e) {
                  var t;
                  return null === (t = R.current) || void 0 === t
                    ? void 0
                    : t.getDuration(e);
                },
                destroy: function () {
                  var e;
                  null === (e = R.current) || void 0 === e || e.destroy(),
                    (R.current = void 0);
                },
                animationContainerRef: L,
                animationLoaded: P,
                animationItem: R.current,
              }
            );
          },
          d = function (e) {
            var t = e.wrapperRef,
              r = e.animationItem,
              o = e.mode,
              i = e.actions;
            n.useEffect(
              function () {
                var e,
                  n,
                  a,
                  u,
                  l,
                  s = t.current;
                if (s && r && i.length)
                  switch ((r.stop(), o)) {
                    case "scroll":
                      return (
                        (e = null),
                        (n = function () {
                          var t,
                            n,
                            o,
                            a =
                              ((n = (t = s.getBoundingClientRect()).top),
                              (o = t.height),
                              (window.innerHeight - n) /
                                (window.innerHeight + o)),
                            u = i.find(function (e) {
                              var t = e.visibility;
                              return t && a >= t[0] && a <= t[1];
                            });
                          if (u) {
                            if (
                              "seek" === u.type &&
                              u.visibility &&
                              2 === u.frames.length
                            ) {
                              var l =
                                u.frames[0] +
                                Math.ceil(
                                  ((a - u.visibility[0]) /
                                    (u.visibility[1] - u.visibility[0])) *
                                    u.frames[1]
                                );
                              r.goToAndStop(l - r.firstFrame - 1, !0);
                            }
                            "loop" === u.type &&
                              (null === e
                                ? (r.playSegments(u.frames, !0), (e = u.frames))
                                : e !== u.frames
                                ? (r.playSegments(u.frames, !0), (e = u.frames))
                                : r.isPaused &&
                                  (r.playSegments(u.frames, !0),
                                  (e = u.frames))),
                              "play" === u.type &&
                                r.isPaused &&
                                (r.resetSegments(!0), r.play()),
                              "stop" === u.type &&
                                r.goToAndStop(
                                  u.frames[0] - r.firstFrame - 1,
                                  !0
                                );
                          }
                        }),
                        document.addEventListener("scroll", n),
                        function () {
                          document.removeEventListener("scroll", n);
                        }
                      );
                    case "cursor":
                      return (
                        (a = function (e, t) {
                          var n = e,
                            o = t;
                          if (-1 !== n && -1 !== o) {
                            var a,
                              u,
                              l,
                              c,
                              f =
                                ((a = n),
                                (u = o),
                                (c = (l = s.getBoundingClientRect()).top),
                                {
                                  x: (a - l.left) / l.width,
                                  y: (u - c) / l.height,
                                });
                            (n = f.x), (o = f.y);
                          }
                          var d = i.find(function (e) {
                            var t = e.position;
                            return t && Array.isArray(t.x) && Array.isArray(t.y)
                              ? n >= t.x[0] &&
                                  n <= t.x[1] &&
                                  o >= t.y[0] &&
                                  o <= t.y[1]
                              : !(
                                  !t ||
                                  Number.isNaN(t.x) ||
                                  Number.isNaN(t.y)
                                ) &&
                                  n === t.x &&
                                  o === t.y;
                          });
                          if (d) {
                            if (
                              "seek" === d.type &&
                              d.position &&
                              Array.isArray(d.position.x) &&
                              Array.isArray(d.position.y) &&
                              2 === d.frames.length
                            ) {
                              var m =
                                  (n - d.position.x[0]) /
                                  (d.position.x[1] - d.position.x[0]),
                                p =
                                  (o - d.position.y[0]) /
                                  (d.position.y[1] - d.position.y[0]);
                              r.playSegments(d.frames, !0),
                                r.goToAndStop(
                                  Math.ceil(
                                    ((m + p) / 2) * (d.frames[1] - d.frames[0])
                                  ),
                                  !0
                                );
                            }
                            "loop" === d.type && r.playSegments(d.frames, !0),
                              "play" === d.type &&
                                (r.isPaused && r.resetSegments(!1),
                                r.playSegments(d.frames)),
                              "stop" === d.type &&
                                r.goToAndStop(d.frames[0], !0);
                          }
                        }),
                        (u = function (e) {
                          a(e.clientX, e.clientY);
                        }),
                        (l = function () {
                          a(-1, -1);
                        }),
                        s.addEventListener("mousemove", u),
                        s.addEventListener("mouseout", l),
                        function () {
                          s.removeEventListener("mousemove", u),
                            s.removeEventListener("mouseout", l);
                        }
                      );
                  }
              },
              [o, r]
            );
          },
          m = function (e) {
            var t = e.actions,
              n = e.mode,
              r = e.lottieObj,
              o = r.animationItem,
              i = r.View;
            return (
              d({
                actions: t,
                animationItem: o,
                mode: n,
                wrapperRef: r.animationContainerRef,
              }),
              i
            );
          },
          p = ["style", "interactivity"];
        Object.defineProperty(e, "LottiePlayer", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
          (e.default = function (e) {
            var t,
              r,
              o,
              i = e.style,
              a = e.interactivity,
              u = f(l(e, p), i),
              s = u.View,
              c = u.play,
              d = u.stop,
              y = u.pause,
              v = u.setSpeed,
              g = u.goToAndStop,
              b = u.goToAndPlay,
              S = u.setDirection,
              h = u.playSegments,
              O = u.setSubframe,
              A = u.getDuration,
              w = u.destroy,
              E = u.animationContainerRef,
              j = u.animationLoaded,
              P = u.animationItem;
            return (
              n.useEffect(
                function () {
                  e.lottieRef &&
                    (e.lottieRef.current = {
                      play: c,
                      stop: d,
                      pause: y,
                      setSpeed: v,
                      goToAndPlay: b,
                      goToAndStop: g,
                      setDirection: S,
                      playSegments: h,
                      setSubframe: O,
                      getDuration: A,
                      destroy: w,
                      animationContainerRef: E,
                      animationLoaded: j,
                      animationItem: P,
                    });
                },
                [
                  null === (t = e.lottieRef) || void 0 === t
                    ? void 0
                    : t.current,
                ]
              ),
              m({
                lottieObj: {
                  View: s,
                  play: c,
                  stop: d,
                  pause: y,
                  setSpeed: v,
                  goToAndStop: g,
                  goToAndPlay: b,
                  setDirection: S,
                  playSegments: h,
                  setSubframe: O,
                  getDuration: A,
                  destroy: w,
                  animationContainerRef: E,
                  animationLoaded: j,
                  animationItem: P,
                },
                actions:
                  null !== (r = null == a ? void 0 : a.actions) && void 0 !== r
                    ? r
                    : [],
                mode:
                  null !== (o = null == a ? void 0 : a.mode) && void 0 !== o
                    ? o
                    : "scroll",
              })
            );
          }),
          (e.useLottie = f),
          (e.useLottieInteractivity = m),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(1248), n(7294));
    },
    9215: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return a;
        },
      });
      var r = n(7294),
        o = n(5487);
      let i = { some: 0, all: 1 };
      function a(e, { root: t, margin: n, amount: a, once: u = !1 } = {}) {
        let [l, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (u && l)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: a };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: a = "some" } = {}
            ) {
              let u = (function (e, t, n) {
                  var r;
                  if ("string" == typeof e) {
                    let i = document;
                    t &&
                      ((0, o.k)(
                        !!t.current,
                        "Scope provided, but no element detected."
                      ),
                      (i = t.current)),
                      n
                        ? ((null !== (r = n[e]) && void 0 !== r) ||
                            (n[e] = i.querySelectorAll(e)),
                          (e = n[e]))
                        : (e = i.querySelectorAll(e));
                  } else e instanceof Element && (e = [e]);
                  return Array.from(e || []);
                })(e),
                l = new WeakMap(),
                s = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = l.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          "function" == typeof n
                            ? l.set(e.target, n)
                            : s.unobserve(e.target);
                        } else n && (n(e), l.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof a ? a : i[a],
                  }
                );
              return u.forEach((e) => s.observe(e)), () => s.disconnect();
            })(e.current, () => (s(!0), u ? void 0 : () => s(!1)), r);
          }, [t, e, n, u]),
          l
        );
      }
    },
  },
]);
