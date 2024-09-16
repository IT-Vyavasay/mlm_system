/*! document-register-element, 1.7.0
https://github.com/WebReflection/document-register-element
(C) Andrea Giammarchi - @WebReflection - Mit Style License */
if (!window['s-ce1']) {
  window['s-ce1'] = true;
  (function (e, t) {
    'use strict';
    function Ht() {
      var e = wt.splice(0, wt.length);
      Et = 0;
      while (e.length) e.shift().call(null, e.shift());
    }
    function Bt(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Jt(e[n], t);
    }
    function jt(e) {
      for (var t = 0, n = e.length, r; t < n; t++) (r = e[t]), Pt(r, A[It(r)]);
    }
    function Ft(e) {
      return function (t) {
        ut(t) && (Jt(t, e), O.length && Bt(t.querySelectorAll(O), e));
      };
    }
    function It(e) {
      var t = ht.call(e, 'is'),
        n = e.nodeName.toUpperCase(),
        r = _.call(L, t ? N + t.toUpperCase() : T + n);
      return t && -1 < r && !qt(n, t) ? -1 : r;
    }
    function qt(e, t) {
      return -1 < O.indexOf(e + '[is="' + t + '"]');
    }
    function Rt(e) {
      var t = e.currentTarget,
        n = e.attrChange,
        r = e.attrName,
        i = e.target,
        s = e[y] || 2,
        o = e[w] || 3;
      kt &&
        (!i || i === t) &&
        t[h] &&
        r !== 'style' &&
        (e.prevValue !== e.newValue ||
          (e.newValue === '' && (n === s || n === o))) &&
        t[h](r, n === s ? null : e.prevValue, n === o ? null : e.newValue);
    }
    function Ut(e) {
      var t = Ft(e);
      return function (e) {
        wt.push(t, e.target), Et && clearTimeout(Et), (Et = setTimeout(Ht, 1));
      };
    }
    function zt(e) {
      Ct && ((Ct = !1), e.currentTarget.removeEventListener(S, zt)),
        O.length &&
          Bt((e.target || n).querySelectorAll(O), e.detail === l ? l : a),
        st && Vt();
    }
    function Wt(e, t) {
      var n = this;
      vt.call(n, e, t), Lt.call(n, { target: n });
    }
    function Xt(e, t) {
      nt(e, t),
        Mt
          ? Mt.observe(e, yt)
          : (Nt && ((e.setAttribute = Wt), (e[o] = Ot(e)), e[u](x, Lt)),
            e[u](E, Rt)),
        e[m] && kt && ((e.created = !0), e[m](), (e.created = !1));
    }
    function Vt() {
      for (var e, t = 0, n = at.length; t < n; t++)
        (e = at[t]), M.contains(e) || (n--, at.splice(t--, 1), Jt(e, l));
    }
    function $t(e) {
      throw new Error('A ' + e + ' type is already registered');
    }
    function Jt(e, t) {
      var n,
        r = It(e),
        i;
      -1 < r &&
        (Dt(e, A[r]),
        (r = 0),
        t === a && !e[a]
          ? ((e[l] = !1),
            (e[a] = !0),
            (i = 'connected'),
            (r = 1),
            st && _.call(at, e) < 0 && at.push(e))
          : t === l &&
            !e[l] &&
            ((e[a] = !1), (e[l] = !0), (i = 'disconnected'), (r = 1)),
        r && (n = e[t + f] || e[i + f]) && n.call(e));
    }
    function Kt() {}
    function Qt(e, t, r) {
      var i = (r && r[c]) || '',
        o = t.prototype,
        u = tt(o),
        a = t.observedAttributes || j,
        f = { prototype: u };
      ot(u, m, {
        value: function () {
          if (Q) Q = !1;
          else if (!this[W]) {
            (this[W] = !0), new t(this), o[m] && o[m].call(this);
            var e = G[Z.get(t)];
            (!V || e.create.length > 1) && Zt(this);
          }
        },
      }),
        ot(u, h, {
          value: function (e) {
            -1 < _.call(a, e) && o[h].apply(this, arguments);
          },
        }),
        o[d] && ot(u, p, { value: o[d] }),
        o[v] && ot(u, g, { value: o[v] }),
        i && (f[c] = i),
        (e = e.toUpperCase()),
        (G[e] = { constructor: t, create: i ? [i, et(e)] : [e] }),
        Z.set(t, e),
        n[s](e.toLowerCase(), f),
        en(e),
        Y[e].r();
    }
    function Gt(e) {
      var t = G[e.toUpperCase()];
      return t && t.constructor;
    }
    function Yt(e) {
      return typeof e == 'string' ? e : (e && e.is) || '';
    }
    function Zt(e) {
      var t = e[h],
        n = t ? e.attributes : j,
        r = n.length,
        i;
      while (r--)
        (i = n[r]),
          t.call(e, i.name || i.nodeName, null, i.value || i.nodeValue);
    }
    function en(e) {
      return (
        (e = e.toUpperCase()),
        e in Y ||
          ((Y[e] = {}),
          (Y[e].p = new K(function (t) {
            Y[e].r = t;
          }))),
        Y[e].p
      );
    }
    function tn() {
      X && delete e.customElements,
        B(e, 'customElements', { configurable: !0, value: new Kt() }),
        B(e, 'CustomElementRegistry', { configurable: !0, value: Kt });
      for (
        var t = function (t) {
            var r = e[t];
            if (r) {
              (e[t] = function (t) {
                var i, s;
                return (
                  t || (t = this),
                  t[W] ||
                    ((Q = !0),
                    (i = G[Z.get(t.constructor)]),
                    (s = V && i.create.length === 1),
                    (t = s
                      ? Reflect.construct(r, j, i.constructor)
                      : n.createElement.apply(n, i.create)),
                    (t[W] = !0),
                    (Q = !1),
                    s || Zt(t)),
                  t
                );
              }),
                (e[t].prototype = r.prototype);
              try {
                r.prototype.constructor = e[t];
              } catch (i) {
                (z = !0), B(r, W, { value: e[t] });
              }
            }
          },
          r = i.get(/^HTML[A-Z]*[a-z]/),
          o = r.length;
        o--;
        t(r[o])
      );
      (n.createElement = function (e, t) {
        var n = Yt(t);
        return n ? gt.call(this, e, et(n)) : gt.call(this, e);
      }),
        St || ((Tt = !0), n[s](''));
    }
    var n = e.document,
      r = e.Object,
      i = (function (e) {
        var t = /^[A-Z]+[a-z]/,
          n = function (e) {
            var t = [],
              n;
            for (n in s) e.test(n) && t.push(n);
            return t;
          },
          i = function (e, t) {
            (t = t.toLowerCase()),
              t in s ||
                ((s[e] = (s[e] || []).concat(t)),
                (s[t] = s[t.toUpperCase()] = e));
          },
          s = (r.create || r)(null),
          o = {},
          u,
          a,
          f,
          l;
        for (a in e)
          for (l in e[a]) {
            (f = e[a][l]), (s[l] = f);
            for (u = 0; u < f.length; u++)
              s[f[u].toLowerCase()] = s[f[u].toUpperCase()] = l;
          }
        return (
          (o.get = function (r) {
            return typeof r == 'string' ? s[r] || (t.test(r) ? [] : '') : n(r);
          }),
          (o.set = function (n, r) {
            return t.test(n) ? i(n, r) : i(r, n), o;
          }),
          o
        );
      })({
        collections: {
          HTMLAllCollection: ['all'],
          HTMLCollection: ['forms'],
          HTMLFormControlsCollection: ['elements'],
          HTMLOptionsCollection: ['options'],
        },
        elements: {
          Element: ['element'],
          HTMLAnchorElement: ['a'],
          HTMLAppletElement: ['applet'],
          HTMLAreaElement: ['area'],
          HTMLAttachmentElement: ['attachment'],
          HTMLAudioElement: ['audio'],
          HTMLBRElement: ['br'],
          HTMLBaseElement: ['base'],
          HTMLBodyElement: ['body'],
          HTMLButtonElement: ['button'],
          HTMLCanvasElement: ['canvas'],
          HTMLContentElement: ['content'],
          HTMLDListElement: ['dl'],
          HTMLDataElement: ['data'],
          HTMLDataListElement: ['datalist'],
          HTMLDetailsElement: ['details'],
          HTMLDialogElement: ['dialog'],
          HTMLDirectoryElement: ['dir'],
          HTMLDivElement: ['div'],
          HTMLDocument: ['document'],
          HTMLElement: [
            'element',
            'abbr',
            'address',
            'article',
            'aside',
            'b',
            'bdi',
            'bdo',
            'cite',
            'code',
            'command',
            'dd',
            'dfn',
            'dt',
            'em',
            'figcaption',
            'figure',
            'footer',
            'header',
            'i',
            'kbd',
            'mark',
            'nav',
            'noscript',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'section',
            'small',
            'strong',
            'sub',
            'summary',
            'sup',
            'u',
            'var',
            'wbr',
          ],
          HTMLEmbedElement: ['embed'],
          HTMLFieldSetElement: ['fieldset'],
          HTMLFontElement: ['font'],
          HTMLFormElement: ['form'],
          HTMLFrameElement: ['frame'],
          HTMLFrameSetElement: ['frameset'],
          HTMLHRElement: ['hr'],
          HTMLHeadElement: ['head'],
          HTMLHeadingElement: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          HTMLHtmlElement: ['html'],
          HTMLIFrameElement: ['iframe'],
          HTMLImageElement: ['img'],
          HTMLInputElement: ['input'],
          HTMLKeygenElement: ['keygen'],
          HTMLLIElement: ['li'],
          HTMLLabelElement: ['label'],
          HTMLLegendElement: ['legend'],
          HTMLLinkElement: ['link'],
          HTMLMapElement: ['map'],
          HTMLMarqueeElement: ['marquee'],
          HTMLMediaElement: ['media'],
          HTMLMenuElement: ['menu'],
          HTMLMenuItemElement: ['menuitem'],
          HTMLMetaElement: ['meta'],
          HTMLMeterElement: ['meter'],
          HTMLModElement: ['del', 'ins'],
          HTMLOListElement: ['ol'],
          HTMLObjectElement: ['object'],
          HTMLOptGroupElement: ['optgroup'],
          HTMLOptionElement: ['option'],
          HTMLOutputElement: ['output'],
          HTMLParagraphElement: ['p'],
          HTMLParamElement: ['param'],
          HTMLPictureElement: ['picture'],
          HTMLPreElement: ['pre'],
          HTMLProgressElement: ['progress'],
          HTMLQuoteElement: ['blockquote', 'q', 'quote'],
          HTMLScriptElement: ['script'],
          HTMLSelectElement: ['select'],
          HTMLShadowElement: ['shadow'],
          HTMLSlotElement: ['slot'],
          HTMLSourceElement: ['source'],
          HTMLSpanElement: ['span'],
          HTMLStyleElement: ['style'],
          HTMLTableCaptionElement: ['caption'],
          HTMLTableCellElement: ['td', 'th'],
          HTMLTableColElement: ['col', 'colgroup'],
          HTMLTableElement: ['table'],
          HTMLTableRowElement: ['tr'],
          HTMLTableSectionElement: ['thead', 'tbody', 'tfoot'],
          HTMLTemplateElement: ['template'],
          HTMLTextAreaElement: ['textarea'],
          HTMLTimeElement: ['time'],
          HTMLTitleElement: ['title'],
          HTMLTrackElement: ['track'],
          HTMLUListElement: ['ul'],
          HTMLUnknownElement: ['unknown', 'vhgroupv', 'vkeygen'],
          HTMLVideoElement: ['video'],
        },
        nodes: {
          Attr: ['node'],
          Audio: ['audio'],
          CDATASection: ['node'],
          CharacterData: ['node'],
          Comment: ['#comment'],
          Document: ['#document'],
          DocumentFragment: ['#document-fragment'],
          DocumentType: ['node'],
          HTMLDocument: ['#document'],
          Image: ['img'],
          Option: ['option'],
          ProcessingInstruction: ['node'],
          ShadowRoot: ['#shadow-root'],
          Text: ['#text'],
          XMLDocument: ['xml'],
        },
      });
    typeof t != 'object' && (t = { type: t || 'auto' });
    var s = 'registerElement',
      o = '__' + s + ((e.Math.random() * 1e5) >> 0),
      u = 'addEventListener',
      a = 'attached',
      f = 'Callback',
      l = 'detached',
      c = 'extends',
      h = 'attributeChanged' + f,
      p = a + f,
      d = 'connected' + f,
      v = 'disconnected' + f,
      m = 'created' + f,
      g = l + f,
      y = 'ADDITION',
      b = 'MODIFICATION',
      w = 'REMOVAL',
      E = 'DOMAttrModified',
      S = 'DOMContentLoaded',
      x = 'DOMSubtreeModified',
      T = '<',
      N = '=',
      C = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
      k = [
        'ANNOTATION-XML',
        'COLOR-PROFILE',
        'FONT-FACE',
        'FONT-FACE-SRC',
        'FONT-FACE-URI',
        'FONT-FACE-FORMAT',
        'FONT-FACE-NAME',
        'MISSING-GLYPH',
      ],
      L = [],
      A = [],
      O = '',
      M = n.documentElement,
      _ =
        L.indexOf ||
        function (e) {
          for (var t = this.length; t-- && this[t] !== e; );
          return t;
        },
      D = r.prototype,
      P = D.hasOwnProperty,
      H = D.isPrototypeOf,
      B = r.defineProperty,
      j = [],
      F = r.getOwnPropertyDescriptor,
      I = r.getOwnPropertyNames,
      q = r.getPrototypeOf,
      R = r.setPrototypeOf,
      U = !!r.__proto__,
      z = !1,
      W = '__dreCEv1',
      X = e.customElements,
      V = !/^force/.test(t.type) && !!(X && X.define && X.get && X.whenDefined),
      $ = r.create || r,
      J =
        e.Map ||
        function () {
          var t = [],
            n = [],
            r;
          return {
            get: function (e) {
              return n[_.call(t, e)];
            },
            set: function (e, i) {
              (r = _.call(t, e)), r < 0 ? (n[t.push(e) - 1] = i) : (n[r] = i);
            },
          };
        },
      K =
        e.Promise ||
        function (e) {
          function i(e) {
            n = !0;
            while (t.length) t.shift()(e);
          }
          var t = [],
            n = !1,
            r = {
              catch: function () {
                return r;
              },
              then: function (e) {
                return t.push(e), n && setTimeout(i, 1), r;
              },
            };
          return e(i), r;
        },
      Q = !1,
      G = $(null),
      Y = $(null),
      Z = new J(),
      et = function (e) {
        return e.toLowerCase();
      },
      tt =
        r.create ||
        function sn(e) {
          return e ? ((sn.prototype = e), new sn()) : this;
        },
      nt =
        R ||
        (U
          ? function (e, t) {
              return (e.__proto__ = t), e;
            }
          : I && F
          ? (function () {
              function e(e, t) {
                for (var n, r = I(t), i = 0, s = r.length; i < s; i++)
                  (n = r[i]), P.call(e, n) || B(e, n, F(t, n));
              }
              return function (t, n) {
                do e(t, n);
                while ((n = q(n)) && !H.call(n, t));
                return t;
              };
            })()
          : function (e, t) {
              for (var n in t) e[n] = t[n];
              return e;
            }),
      rt = e.MutationObserver || e.WebKitMutationObserver,
      it = (e.HTMLElement || e.Element || e.Node).prototype,
      st = !H.call(it, M),
      ot = st
        ? function (e, t, n) {
            return (e[t] = n.value), e;
          }
        : B,
      ut = st
        ? function (e) {
            return e.nodeType === 1;
          }
        : function (e) {
            return H.call(it, e);
          },
      at = st && [],
      ft = it.attachShadow,
      lt = it.cloneNode,
      ct = it.dispatchEvent,
      ht = it.getAttribute,
      pt = it.hasAttribute,
      dt = it.removeAttribute,
      vt = it.setAttribute,
      mt = n.createElement,
      gt = mt,
      yt = rt && { attributes: !0, characterData: !0, attributeOldValue: !0 },
      bt =
        rt ||
        function (e) {
          (Nt = !1), M.removeEventListener(E, bt);
        },
      wt,
      Et = 0,
      St = s in n && !/^force-all/.test(t.type),
      xt = !0,
      Tt = !1,
      Nt = !0,
      Ct = !0,
      kt = !0,
      Lt,
      At,
      Ot,
      Mt,
      _t,
      Dt,
      Pt;
    St ||
      (R || U
        ? ((Dt = function (e, t) {
            H.call(t, e) || Xt(e, t);
          }),
          (Pt = Xt))
        : ((Dt = function (e, t) {
            e[o] || ((e[o] = r(!0)), Xt(e, t));
          }),
          (Pt = Dt)),
      st
        ? ((Nt = !1),
          (function () {
            var e = F(it, u),
              t = e.value,
              n = function (e) {
                var t = new CustomEvent(E, { bubbles: !0 });
                (t.attrName = e),
                  (t.prevValue = ht.call(this, e)),
                  (t.newValue = null),
                  (t[w] = t.attrChange = 2),
                  dt.call(this, e),
                  ct.call(this, t);
              },
              r = function (e, t) {
                var n = pt.call(this, e),
                  r = n && ht.call(this, e),
                  i = new CustomEvent(E, { bubbles: !0 });
                vt.call(this, e, t),
                  (i.attrName = e),
                  (i.prevValue = n ? r : null),
                  (i.newValue = t),
                  n ? (i[b] = i.attrChange = 1) : (i[y] = i.attrChange = 0),
                  ct.call(this, i);
              },
              i = function (e) {
                var t = e.currentTarget,
                  n = t[o],
                  r = e.propertyName,
                  i;
                n.hasOwnProperty(r) &&
                  ((n = n[r]),
                  (i = new CustomEvent(E, { bubbles: !0 })),
                  (i.attrName = n.name),
                  (i.prevValue = n.value || null),
                  (i.newValue = n.value = t[r] || null),
                  i.prevValue == null
                    ? (i[y] = i.attrChange = 0)
                    : (i[b] = i.attrChange = 1),
                  ct.call(t, i));
              };
            (e.value = function (e, s, u) {
              e === E &&
                this[h] &&
                this.setAttribute !== r &&
                ((this[o] = {
                  className: { name: 'class', value: this.className },
                }),
                (this.setAttribute = r),
                (this.removeAttribute = n),
                t.call(this, 'propertychange', i)),
                t.call(this, e, s, u);
            }),
              B(it, u, e);
          })())
        : rt ||
          (M[u](E, bt),
          M.setAttribute(o, 1),
          M.removeAttribute(o),
          Nt &&
            ((Lt = function (e) {
              var t = this,
                n,
                r,
                i;
              if (t === e.target) {
                (n = t[o]), (t[o] = r = Ot(t));
                for (i in r) {
                  if (!(i in n)) return At(0, t, i, n[i], r[i], y);
                  if (r[i] !== n[i]) return At(1, t, i, n[i], r[i], b);
                }
                for (i in n) if (!(i in r)) return At(2, t, i, n[i], r[i], w);
              }
            }),
            (At = function (e, t, n, r, i, s) {
              var o = {
                attrChange: e,
                currentTarget: t,
                attrName: n,
                prevValue: r,
                newValue: i,
              };
              (o[s] = e), Rt(o);
            }),
            (Ot = function (e) {
              for (
                var t, n, r = {}, i = e.attributes, s = 0, o = i.length;
                s < o;
                s++
              )
                (t = i[s]),
                  (n = t.name),
                  n !== 'setAttribute' && (r[n] = t.value);
              return r;
            }))),
      (n[s] = function (t, r) {
        (p = t.toUpperCase()),
          xt &&
            ((xt = !1),
            rt
              ? ((Mt = (function (e, t) {
                  function n(e, t) {
                    for (var n = 0, r = e.length; n < r; t(e[n++]));
                  }
                  return new rt(function (r) {
                    for (var i, s, o, u = 0, a = r.length; u < a; u++)
                      (i = r[u]),
                        i.type === 'childList'
                          ? (n(i.addedNodes, e), n(i.removedNodes, t))
                          : ((s = i.target),
                            kt &&
                              s[h] &&
                              i.attributeName !== 'style' &&
                              ((o = ht.call(s, i.attributeName)),
                              o !== i.oldValue &&
                                s[h](i.attributeName, i.oldValue, o)));
                  });
                })(Ft(a), Ft(l))),
                (_t = function (e) {
                  return Mt.observe(e, { childList: !0, subtree: !0 }), e;
                }),
                _t(n),
                ft &&
                  (it.attachShadow = function () {
                    return _t(ft.apply(this, arguments));
                  }))
              : ((wt = []),
                n[u]('DOMNodeInserted', Ut(a)),
                n[u]('DOMNodeRemoved', Ut(l))),
            n[u](S, zt),
            n[u]('readystatechange', zt),
            (it.cloneNode = function (e) {
              var t = lt.call(this, !!e),
                n = It(t);
              return (
                -1 < n && Pt(t, A[n]),
                e && O.length && jt(t.querySelectorAll(O)),
                t
              );
            }));
        if (Tt) return (Tt = !1);
        -2 < _.call(L, N + p) + _.call(L, T + p) && $t(t);
        if (!C.test(p) || -1 < _.call(k, p))
          throw new Error('The type ' + t + ' is invalid');
        var i = function () {
            return o ? n.createElement(f, p) : n.createElement(f);
          },
          s = r || D,
          o = P.call(s, c),
          f = o ? r[c].toUpperCase() : p,
          p,
          d;
        return (
          o && -1 < _.call(L, T + f) && $t(f),
          (d = L.push((o ? N : T) + p) - 1),
          (O = O.concat(
            O.length ? ',' : '',
            o ? f + '[is="' + t.toLowerCase() + '"]' : f,
          )),
          (i.prototype = A[d] = P.call(s, 'prototype') ? s.prototype : tt(it)),
          O.length && Bt(n.querySelectorAll(O), a),
          i
        );
      }),
      (n.createElement = gt =
        function (e, t) {
          var r = Yt(t),
            i = r ? mt.call(n, e, et(r)) : mt.call(n, e),
            s = '' + e,
            o = _.call(L, (r ? N : T) + (r || s).toUpperCase()),
            u = -1 < o;
          return (
            r &&
              (i.setAttribute('is', (r = r.toLowerCase())),
              u && (u = qt(s.toUpperCase(), r))),
            (kt = !n.createElement.innerHTMLHelper),
            u && Pt(i, A[o]),
            i
          );
        })),
      (Kt.prototype = {
        constructor: Kt,
        define: V
          ? function (e, t, n) {
              if (n) Qt(e, t, n);
              else {
                var r = e.toUpperCase();
                (G[r] = { constructor: t, create: [r] }),
                  Z.set(t, r),
                  X.define(e, t);
              }
            }
          : Qt,
        get: V
          ? function (e) {
              return X.get(e) || Gt(e);
            }
          : Gt,
        whenDefined: V
          ? function (e) {
              return K.race([X.whenDefined(e), en(e)]);
            }
          : en,
      });
    if (!X || /^force/.test(t.type)) tn();
    else if (!t.noBuiltIn)
      try {
        (function (t, r, i) {
          (r[c] = 'a'),
            (t.prototype = tt(HTMLAnchorElement.prototype)),
            (t.prototype.constructor = t),
            e.customElements.define(i, t, r);
          if (
            ht.call(n.createElement('a', { is: i }), 'is') !== i ||
            (V && ht.call(new t(), 'is') !== i)
          )
            throw r;
        })(
          function on() {
            return Reflect.construct(HTMLAnchorElement, [], on);
          },
          {},
          'document-register-element-a',
        );
      } catch (nn) {
        tn();
      }
    if (!t.noBuiltIn)
      try {
        mt.call(n, 'a', 'a');
      } catch (rn) {
        et = function (e) {
          return { is: e.toLowerCase() };
        };
      }
  })(window);
}

/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
(function (a) {
  'function' !== typeof a.matches &&
    (a.matches =
      a.msMatchesSelector ||
      a.mozMatchesSelector ||
      a.webkitMatchesSelector ||
      function (a) {
        a = (this.document || this.ownerDocument).querySelectorAll(a);
        for (var b = 0; a[b] && a[b] !== this; ) ++b;
        return !!a[b];
      });
  'function' !== typeof a.closest &&
    (a.closest = function (a) {
      for (var b = this; b && 1 === b.nodeType; ) {
        if (b.matches(a)) return b;
        b = b.parentNode;
      }
      return null;
    });
})(window.Element.prototype);
/*!
Element.remove()
https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/
(function (b) {
  b.forEach(function (a) {
    a.hasOwnProperty('remove') ||
      Object.defineProperty(a, 'remove', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function () {
          null !== this.parentNode && this.parentNode.removeChild(this);
        },
      });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/*!
Array.prototype.find
*/
Array.prototype.find ||
  Object.defineProperty(Array.prototype, 'find', {
    writable: !0,
    configurable: !0,
    value: function (c, e) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var b = Object(this),
        f = b.length >>> 0;
      if ('function' !== typeof c)
        throw new TypeError('predicate must be a function');
      for (var a = 0; a < f; ) {
        var d = b[a];
        if (c.call(e, d, a, b)) return d;
        a++;
      }
    },
  });
/*!
Array.from
*/
Array.from ||
  (Array.from = (function () {
    var l = Object.prototype.toString,
      h = function (c) {
        return 'function' === typeof c || '[object Function]' === l.call(c);
      },
      m = Math.pow(2, 53) - 1;
    return function (c) {
      var k = Object(c);
      if (null == c)
        throw new TypeError(
          'Array.from requires an array-like object - not null or undefined',
        );
      var d = 1 < arguments.length ? arguments[1] : void 0,
        f;
      if ('undefined' !== typeof d) {
        if (!h(d))
          throw new TypeError(
            'Array.from: when provided, the second argument must be a function',
          );
        2 < arguments.length && (f = arguments[2]);
      }
      var a = Number(k.length);
      a = isNaN(a)
        ? 0
        : 0 !== a && isFinite(a)
        ? (0 < a ? 1 : -1) * Math.floor(Math.abs(a))
        : a;
      a = Math.min(Math.max(a, 0), m);
      for (var g = h(this) ? Object(new this(a)) : Array(a), b = 0, e; b < a; )
        (e = k[b]),
          (g[b] = d
            ? 'undefined' === typeof f
              ? d(e, b)
              : d.call(f, e, b)
            : e),
          (b += 1);
      g.length = a;
      return g;
    };
  })());
/*!
Array.prototype.includes
*/
Array.prototype.includes ||
  Object.defineProperty(Array.prototype, 'includes', {
    writable: !0,
    configurable: !0,
    value: function (r, e) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var t = Object(this),
        n = t.length >>> 0;
      if (0 === n) return !1;
      var i,
        o,
        a = 0 | e,
        u = Math.max(0 <= a ? a : n - Math.abs(a), 0);
      for (; u < n; ) {
        if (
          (i = t[u]) === (o = r) ||
          ('number' == typeof i && 'number' == typeof o && isNaN(i) && isNaN(o))
        )
          return !0;
        u++;
      }
      return !1;
    },
  });
/*!
Object.assign
*/
'function' != typeof Object.assign &&
  Object.defineProperty(Object, 'assign', {
    value: function (d, f) {
      if (null == d)
        throw new TypeError('Cannot convert undefined or null to object');
      for (var e = Object(d), b = 1; b < arguments.length; b++) {
        var a = arguments[b];
        if (null != a)
          for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c]);
      }
      return e;
    },
    writable: !0,
    configurable: !0,
  });
/*!
Object.entries
*/
Object.entries ||
  (Object.entries = function (c) {
    for (var b = Object.keys(c), a = b.length, d = Array(a); a--; )
      d[a] = [b[a], c[b[a]]];
    return d;
  });
/*!
String.prototype.endsWith
*/
String.prototype.endsWith ||
  Object.defineProperty(String.prototype, 'endsWith', {
    writable: !0,
    configurable: !0,
    value: function (b, a) {
      if (void 0 === a || a > this.length) a = this.length;
      return this.substring(a - b.length, a) === b;
    },
  });
/*!
String.prototype.includes
*/
String.prototype.includes ||
  (String.prototype.includes = function (b, a) {
    'number' !== typeof a && (a = 0);
    return a + b.length > this.length ? !1 : -1 !== this.indexOf(b, a);
  });
/*!
String.prototype.startsWith
*/
String.prototype.startsWith ||
  Object.defineProperty(String.prototype, 'startsWith', {
    writable: !0,
    configurable: !0,
    value: function (b, a) {
      return this.substr(!a || 0 > a ? 0 : +a, b.length) === b;
    },
  });
/*!
es6-promise - a tiny implementation of Promises/A+.
Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
Licensed under MIT license
See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
v4.2.4+314e4831
*/
window.ES6Promise = (function () {
  function t() {
    var t = setTimeout;
    return function () {
      return t(r, 1);
    };
  }
  function r() {
    for (var t = 0; t < y; t += 2)
      (0, C[t])(C[t + 1]), (C[t] = void 0), (C[t + 1] = void 0);
    y = 0;
  }
  function e(t, r) {
    var e = this,
      n = new this.constructor(o);
    void 0 === n[O] && _(n);
    var i = e._state;
    if (i) {
      var s = arguments[i - 1];
      g(function () {
        return v(i, n, s, e._result);
      });
    } else l(e, n, t, r);
    return n;
  }
  function n(t) {
    if (t && 'object' == typeof t && t.constructor === this) return t;
    var r = new this(o);
    return u(r, t), r;
  }
  function o() {}
  function i(t) {
    try {
      return t.then;
    } catch (t) {
      return (q.error = t), q;
    }
  }
  function s(t, r, o) {
    r.constructor === t.constructor && o === e && r.constructor.resolve === n
      ? (function (t, r) {
          r._state === x
            ? a(t, r._result)
            : r._state === F
            ? f(t, r._result)
            : l(
                r,
                void 0,
                function (r) {
                  return u(t, r);
                },
                function (r) {
                  return f(t, r);
                },
              );
        })(t, r)
      : o === q
      ? (f(t, q.error), (q.error = null))
      : void 0 === o
      ? a(t, r)
      : 'function' == typeof o
      ? (function (t, r, e) {
          g(function (t) {
            var n = !1,
              o = (function (t, r, e, n) {
                try {
                  t.call(r, e, n);
                } catch (t) {
                  return t;
                }
              })(
                e,
                r,
                function (e) {
                  n || ((n = !0), r !== e ? u(t, e) : a(t, e));
                },
                function (r) {
                  n || ((n = !0), f(t, r));
                },
                t._label,
              );
            !n && o && ((n = !0), f(t, o));
          }, t);
        })(t, r, o)
      : a(t, r);
  }
  function u(t, r) {
    if (t === r) f(t, new TypeError('cannot resolve promise w/ itself'));
    else {
      var e = typeof r;
      null === r || ('object' !== e && 'function' !== e)
        ? a(t, r)
        : s(t, r, i(r));
    }
  }
  function c(t) {
    t._onerror && t._onerror(t._result), h(t);
  }
  function a(t, r) {
    t._state === P &&
      ((t._result = r), (t._state = x), 0 !== t._subscribers.length && g(h, t));
  }
  function f(t, r) {
    t._state === P && ((t._state = F), (t._result = r), g(c, t));
  }
  function l(t, r, e, n) {
    var o = t._subscribers,
      i = o.length;
    (t._onerror = null),
      (o[i] = r),
      (o[i + x] = e),
      (o[i + F] = n),
      0 === i && t._state && g(h, t);
  }
  function h(t) {
    var r = t._subscribers,
      e = t._state;
    if (0 !== r.length) {
      for (var n, o, i = t._result, s = 0; s < r.length; s += 3)
        (n = r[s]), (o = r[s + e]), n ? v(e, n, o, i) : o(i);
      t._subscribers.length = 0;
    }
  }
  function v(t, r, e, n) {
    var o = 'function' == typeof e,
      i = void 0,
      s = void 0,
      c = void 0,
      l = void 0;
    if (o) {
      try {
        i = e(n);
      } catch (t) {
        (q.error = t), (i = q);
      }
      if (
        (i === q ? ((l = !0), (s = i.error), (i.error = null)) : (c = !0),
        r === i)
      )
        return void f(r, new TypeError('Cannot return same promise'));
    } else (i = n), (c = !0);
    r._state === P &&
      (o && c ? u(r, i) : l ? f(r, s) : t === x ? a(r, i) : t === F && f(r, i));
  }
  function _(t) {
    (t[O] = U++),
      (t._state = void 0),
      (t._result = void 0),
      (t._subscribers = []);
  }
  var p,
    d = Array.isArray
      ? Array.isArray
      : function (t) {
          return '[object Array]' === Object.prototype.toString.call(t);
        },
    y = 0,
    w = void 0,
    m = void 0,
    g = function (t, e) {
      (C[y] = t), (C[y + 1] = e), 2 === (y += 2) && (m ? m(r) : T());
    },
    b = (p = 'undefined' != typeof window ? window : void 0) || {},
    A = b.MutationObserver || b.WebKitMutationObserver;
  b = 'undefined' == typeof self;
  var E,
    S,
    M,
    j =
      'undefined' != typeof Uint8ClampedArray &&
      'undefined' != typeof importScripts &&
      'undefined' != typeof MessageChannel,
    C = Array(1e3),
    T = void 0;
  T = A
    ? ((E = 0),
      (S = new A(r)),
      (M = document.createTextNode('')),
      S.observe(M, { characterData: !0 }),
      function () {
        M.data = E = ++E % 2;
      })
    : j
    ? (function () {
        var t = new MessageChannel();
        return (
          (t.port1.onmessage = r),
          function () {
            return t.port2.postMessage(0);
          }
        );
      })()
    : void 0 === p && 'function' == typeof require
    ? (function () {
        try {
          var e = Function('return this')().require('vertx');
          return void 0 !== (w = e.runOnLoop || e.runOnContext)
            ? function () {
                w(r);
              }
            : t();
        } catch (r) {
          return t();
        }
      })()
    : t();
  var O = Math.random().toString(36).substring(2),
    P = void 0,
    x = 1,
    F = 2,
    q = { error: null },
    U = 0,
    D = (function () {
      function t(t, r) {
        (this._instanceConstructor = t),
          (this.promise = new t(o)),
          this.promise[O] || _(this.promise),
          d(r)
            ? ((this._remaining = this.length = r.length),
              (this._result = Array(this.length)),
              0 === this.length
                ? a(this.promise, this._result)
                : ((this.length = this.length || 0),
                  this._enumerate(r),
                  0 === this._remaining && a(this.promise, this._result)))
            : f(this.promise, Error('Array Methods must be provided an Array'));
      }
      return (
        (t.prototype._enumerate = function (t) {
          for (var r = 0; this._state === P && r < t.length; r++)
            this._eachEntry(t[r], r);
        }),
        (t.prototype._eachEntry = function (t, r) {
          var u = this._instanceConstructor,
            c = u.resolve;
          c === n
            ? (c = i(t)) === e && t._state !== P
              ? this._settledAt(t._state, r, t._result)
              : 'function' != typeof c
              ? (this._remaining--, (this._result[r] = t))
              : u === K
              ? (s((u = new u(o)), t, c), this._willSettleAt(u, r))
              : this._willSettleAt(
                  new u(function (r) {
                    return r(t);
                  }),
                  r,
                )
            : this._willSettleAt(c(t), r);
        }),
        (t.prototype._settledAt = function (t, r, e) {
          var n = this.promise;
          n._state === P &&
            (this._remaining--, t === F ? f(n, e) : (this._result[r] = e)),
            0 === this._remaining && a(n, this._result);
        }),
        (t.prototype._willSettleAt = function (t, r) {
          var e = this;
          l(
            t,
            void 0,
            function (t) {
              return e._settledAt(x, r, t);
            },
            function (t) {
              return e._settledAt(F, r, t);
            },
          );
        }),
        t
      );
    })(),
    K = (function () {
      function t(r) {
        if (
          ((this[O] = U++),
          (this._result = this._state = void 0),
          (this._subscribers = []),
          o !== r)
        ) {
          if ('function' != typeof r)
            throw new TypeError('Must pass a resolver fn as 1st arg');
          if (!(this instanceof t))
            throw new TypeError(
              "Failed to construct 'Promise': Use the 'new' operator.",
            );
          !(function (t, r) {
            try {
              r(
                function (r) {
                  u(t, r);
                },
                function (r) {
                  f(t, r);
                },
              );
            } catch (r) {
              f(t, r);
            }
          })(this, r);
        }
      }
      return (
        (t.prototype.catch = function (t) {
          return this.then(null, t);
        }),
        (t.prototype.finally = function (t) {
          var r = this.constructor;
          return this.then(
            function (e) {
              return r.resolve(t()).then(function () {
                return e;
              });
            },
            function (e) {
              return r.resolve(t()).then(function () {
                throw e;
              });
            },
          );
        }),
        t
      );
    })();
  return (
    (K.prototype.then = e),
    (K.all = function (t) {
      return new D(this, t).promise;
    }),
    (K.race = function (t) {
      var r = this;
      return d(t)
        ? new r(function (e, n) {
            for (var o = t.length, i = 0; i < o; i++)
              r.resolve(t[i]).then(e, n);
          })
        : new r(function (t, r) {
            return r(new TypeError('Must pass array to race'));
          });
    }),
    (K.resolve = n),
    (K.reject = function (t) {
      var r = new this(o);
      return f(r, t), r;
    }),
    (K._setScheduler = function (t) {
      m = t;
    }),
    (K._setAsap = function (t) {
      g = t;
    }),
    (K._asap = g),
    (K.polyfill = function () {
      var t = void 0;
      if ('undefined' != typeof global) t = global;
      else if ('undefined' != typeof self) t = self;
      else
        try {
          t = Function('return this')();
        } catch (t) {
          throw Error('polyfill failed');
        }
      var r = t.Promise;
      if (r) {
        var e = null;
        try {
          e = Object.prototype.toString.call(r.resolve());
        } catch (t) {}
        if ('[object Promise]' === e && !r.cast) return;
      }
      t.Promise = K;
    }),
    (K.Promise = K),
    K.polyfill(),
    K
  );
})();
/*!
whatwg-fetch, 2.0.3
https://github.com/github/fetch
Copyright (c) 2014-2016 GitHub, Inc. - MIT License
*/
(function (e) {
  function l(a) {
    'string' !== typeof a && (a = String(a));
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a))
      throw new TypeError('Invalid character in header field name');
    return a.toLowerCase();
  }
  function q(a) {
    'string' !== typeof a && (a = String(a));
    return a;
  }
  function n(a) {
    var b = {
      next: function () {
        var b = a.shift();
        return { done: void 0 === b, value: b };
      },
    };
    g.iterable &&
      (b[Symbol.iterator] = function () {
        return b;
      });
    return b;
  }
  function d(a) {
    this.map = {};
    a instanceof d
      ? a.forEach(function (a, c) {
          this.append(c, a);
        }, this)
      : Array.isArray(a)
      ? a.forEach(function (a) {
          this.append(a[0], a[1]);
        }, this)
      : a &&
        Object.getOwnPropertyNames(a).forEach(function (b) {
          this.append(b, a[b]);
        }, this);
  }
  function p(a) {
    if (a.bodyUsed) return Promise.reject(new TypeError('Already read'));
    a.bodyUsed = !0;
  }
  function r(a) {
    return new Promise(function (b, c) {
      a.onload = function () {
        b(a.result);
      };
      a.onerror = function () {
        c(a.error);
      };
    });
  }
  function w(a) {
    var b = new FileReader(),
      c = r(b);
    b.readAsArrayBuffer(a);
    return c;
  }
  function x(a) {
    a = new Uint8Array(a);
    for (var b = Array(a.length), c = 0; c < a.length; c++)
      b[c] = String.fromCharCode(a[c]);
    return b.join('');
  }
  function t(a) {
    if (a.slice) return a.slice(0);
    var b = new Uint8Array(a.byteLength);
    b.set(new Uint8Array(a));
    return b.buffer;
  }
  function u() {
    this.bodyUsed = !1;
    this._initBody = function (a) {
      if ((this._bodyInit = a))
        if ('string' === typeof a) this._bodyText = a;
        else if (g.blob && Blob.prototype.isPrototypeOf(a)) this._bodyBlob = a;
        else if (g.formData && FormData.prototype.isPrototypeOf(a))
          this._bodyFormData = a;
        else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(a))
          this._bodyText = a.toString();
        else if (g.arrayBuffer && g.blob && y(a))
          (this._bodyArrayBuffer = t(a.buffer)),
            (this._bodyInit = new Blob([this._bodyArrayBuffer]));
        else if (
          g.arrayBuffer &&
          (ArrayBuffer.prototype.isPrototypeOf(a) || z(a))
        )
          this._bodyArrayBuffer = t(a);
        else throw Error('unsupported BodyInit type');
      else this._bodyText = '';
      this.headers.get('content-type') ||
        ('string' === typeof a
          ? this.headers.set('content-type', 'text/plain;charSet=UTF-8')
          : this._bodyBlob && this._bodyBlob.type
          ? this.headers.set('content-type', this._bodyBlob.type)
          : g.searchParams &&
            URLSearchParams.prototype.isPrototypeOf(a) &&
            this.headers.set(
              'content-type',
              'application/x-www-form-urlencoded;charSet=UTF-8',
            ));
    };
    g.blob &&
      ((this.blob = function () {
        var a = p(this);
        if (a) return a;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer)
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData)
          throw Error('could not read FormData body as blob');
        return Promise.resolve(new Blob([this._bodyText]));
      }),
      (this.arrayBuffer = function () {
        return this._bodyArrayBuffer
          ? p(this) || Promise.resolve(this._bodyArrayBuffer)
          : this.blob().then(w);
      }));
    this.text = function () {
      var a = p(this);
      if (a) return a;
      if (this._bodyBlob) {
        a = this._bodyBlob;
        var b = new FileReader(),
          c = r(b);
        b.readAsText(a);
        return c;
      }
      if (this._bodyArrayBuffer)
        return Promise.resolve(x(this._bodyArrayBuffer));
      if (this._bodyFormData)
        throw Error('could not read FormData body as text');
      return Promise.resolve(this._bodyText);
    };
    g.formData &&
      (this.formData = function () {
        return this.text().then(A);
      });
    this.json = function () {
      return this.text().then(JSON.parse);
    };
    return this;
  }
  function k(a, b) {
    b = b || {};
    var c = b.body;
    if (a instanceof k) {
      if (a.bodyUsed) throw new TypeError('Already read');
      this.url = a.url;
      this.credentials = a.credentials;
      b.headers || (this.headers = new d(a.headers));
      this.method = a.method;
      this.mode = a.mode;
      c || null == a._bodyInit || ((c = a._bodyInit), (a.bodyUsed = !0));
    } else this.url = String(a);
    this.credentials = b.credentials || this.credentials || 'omit';
    if (b.headers || !this.headers) this.headers = new d(b.headers);
    var v = b.method || this.method || 'GET',
      g = v.toUpperCase();
    this.method = -1 < B.indexOf(g) ? g : v;
    this.mode = b.mode || this.mode || null;
    this.referrer = null;
    if (('GET' === this.method || 'HEAD' === this.method) && c)
      throw new TypeError('Body not allowed for GET or HEAD requests');
    this._initBody(c);
  }
  function A(a) {
    var b = new FormData();
    a.trim()
      .split('&')
      .forEach(function (a) {
        if (a) {
          var c = a.split('=');
          a = c.shift().replace(/\+/g, ' ');
          c = c.join('=').replace(/\+/g, ' ');
          b.append(decodeURIComponent(a), decodeURIComponent(c));
        }
      });
    return b;
  }
  function C(a) {
    var b = new d();
    a.replace(/\r?\n[\t ]+/g, ' ')
      .split(/\r?\n/)
      .forEach(function (a) {
        var c = a.split(':');
        if ((a = c.shift().trim())) (c = c.join(':').trim()), b.append(a, c);
      });
    return b;
  }
  function h(a, b) {
    b || (b = {});
    this.type = 'default';
    this.status = void 0 === b.status ? 200 : b.status;
    this.ok = 200 <= this.status && 300 > this.status;
    this.statusText = 'statusText' in b ? b.statusText : 'OK';
    this.headers = new d(b.headers);
    this.url = b.url || '';
    this._initBody(a);
  }
  if (!e.fetch) {
    var D = 'Symbol' in e && 'iterator' in Symbol,
      m;
    if ((m = 'FileReader' in e && 'Blob' in e))
      try {
        new Blob(), (m = !0);
      } catch (a) {
        m = !1;
      }
    var g = {
      searchParams: 'URLSearchParams' in e,
      iterable: D,
      blob: m,
      formData: 'FormData' in e,
      arrayBuffer: 'ArrayBuffer' in e,
    };
    if (g.arrayBuffer) {
      var E =
        '[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]'.split(
          ';',
        );
      var y = function (a) {
        return a && DataView.prototype.isPrototypeOf(a);
      };
      var z =
        ArrayBuffer.isView ||
        function (a) {
          return a && -1 < E.indexOf(Object.prototype.toString.call(a));
        };
    }
    d.prototype.append = function (a, b) {
      a = l(a);
      b = q(b);
      var c = this.map[a];
      this.map[a] = c ? c + ',' + b : b;
    };
    d.prototype['delete'] = function (a) {
      delete this.map[l(a)];
    };
    d.prototype.get = function (a) {
      a = l(a);
      return this.has(a) ? this.map[a] : null;
    };
    d.prototype.has = function (a) {
      return this.map.hasOwnProperty(l(a));
    };
    d.prototype.set = function (a, b) {
      this.map[l(a)] = q(b);
    };
    d.prototype.forEach = function (a, b) {
      for (var c in this.map)
        this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this);
    };
    d.prototype.keys = function () {
      var a = [];
      this.forEach(function (b, c) {
        a.push(c);
      });
      return n(a);
    };
    d.prototype.values = function () {
      var a = [];
      this.forEach(function (b) {
        a.push(b);
      });
      return n(a);
    };
    d.prototype.entries = function () {
      var a = [];
      this.forEach(function (b, c) {
        a.push([c, b]);
      });
      return n(a);
    };
    g.iterable && (d.prototype[Symbol.iterator] = d.prototype.entries);
    var B = 'DELETE GET HEAD OPTIONS POST PUT'.split(' ');
    k.prototype.clone = function () {
      return new k(this, { body: this._bodyInit });
    };
    u.call(k.prototype);
    u.call(h.prototype);
    h.prototype.clone = function () {
      return new h(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new d(this.headers),
        url: this.url,
      });
    };
    h.error = function () {
      var a = new h(null, { status: 0, statusText: '' });
      a.type = 'error';
      return a;
    };
    var F = [301, 302, 303, 307, 308];
    h.redirect = function (a, b) {
      if (-1 === F.indexOf(b)) throw new RangeError('Invalid status code');
      return new h(null, { status: b, headers: { location: a } });
    };
    e.Headers = d;
    e.Request = k;
    e.Response = h;
    e.fetch = function (a, b) {
      return new Promise(function (c, d) {
        var e = new k(a, b),
          f = new XMLHttpRequest();
        f.onload = function () {
          var a = {
            status: f.status,
            statusText: f.statusText,
            headers: C(f.getAllResponseHeaders() || ''),
          };
          a.url =
            'responseURL' in f ? f.responseURL : a.headers.get('X-Request-URL');
          c(new h('response' in f ? f.response : f.responseText, a));
        };
        f.onerror = function () {
          d(new TypeError('Network request failed'));
        };
        f.ontimeout = function () {
          d(new TypeError('Network request failed'));
        };
        f.open(e.method, e.url, !0);
        'include' === e.credentials
          ? (f.withCredentials = !0)
          : 'omit' === e.credentials && (f.withCredentials = !1);
        'responseType' in f && g.blob && (f.responseType = 'blob');
        e.headers.forEach(function (a, b) {
          f.setRequestHeader(b, a);
        });
        f.send('undefined' === typeof e._bodyInit ? null : e._bodyInit);
      });
    };
    e.fetch.polyfill = !0;
  }
})('undefined' !== typeof self ? self : window);
/*! Built with http://stenciljs.com */
(function (Context, namespace, hydratedCssClass, resourcesUrl, s) {
  'use strict';
  s = document.querySelector("script[data-namespace='ionicons']");
  if (s) {
    resourcesUrl = s.getAttribute('data-resources-url');
  }
  (this && this.n) ||
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (n, t) {
        n.__proto__ = t;
      }) ||
    function (n, t) {
      for (var e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
    },
    (function (n, t, e, r) {
      'use strict';
      function i(n, t) {
        var e = 'data-' + n.t;
        return t && t !== X ? e + '-' + t : e;
      }
      function u(n) {
        return n;
      }
      function o(n) {
        return n + '-host';
      }
      function f(n) {
        return n + '-slot';
      }
      function c(n, t, e, r, i) {
        if (r) {
          var u = t.t + (i || X);
          t[u] || (t[u] = r);
        }
      }
      function a(n) {
        return { e: n[0], r: n[1], i: !!n[2], u: !!n[3], o: !!n[4] };
      }
      function s(n, t) {
        if (V(t) && 'object' != typeof t && 'function' != typeof t) {
          if (n === Boolean || 3 === n)
            return 'false' !== t && ('' === t || !!t);
          if (n === Number || 4 === n) return parseFloat(t);
          if (n === String || 2 === n) return t.toString();
        }
        return t;
      }
      function l(n, t, e, r) {
        var i = n.f.get(t);
        i &&
          ((r = i['s-ld'] || i.$activeLoading) &&
            ((e = r.indexOf(t)) > -1 && r.splice(e, 1),
            r.length ||
              (i['s-init'] && i['s-init'](), i.$initLoad && i.$initLoad())),
          n.f.delete(t));
      }
      function v(n, t) {
        for (
          var e, r, i = null, u = !1, o = !1, f = arguments.length;
          f-- > 2;

        )
          rn.push(arguments[f]);
        for (; rn.length > 0; ) {
          var c = rn.pop();
          if (c && void 0 !== c.pop) for (f = c.length; f--; ) rn.push(c[f]);
          else
            'boolean' == typeof c && (c = null),
              (o = 'function' != typeof n) &&
                (null == c
                  ? (c = '')
                  : 'number' == typeof c
                  ? (c = String(c))
                  : 'string' != typeof c && (o = !1)),
              o && u
                ? (i[i.length - 1].vtext += c)
                : null === i
                ? (i = [o ? { vtext: c } : c])
                : i.push(o ? { vtext: c } : c),
              (u = o);
        }
        if (null != t) {
          if (
            (t.className && (t.class = t.className), 'object' == typeof t.class)
          ) {
            for (f in t.class) t.class[f] && rn.push(f);
            (t.class = rn.join(' ')), (rn.length = 0);
          }
          null != t.key && (e = t.key), null != t.name && (r = t.name);
        }
        return 'function' == typeof n
          ? n(Object.assign({}, t, { children: i }), un)
          : {
              vtag: n,
              vchildren: i,
              vtext: void 0,
              vattrs: t,
              vkey: e,
              vname: r,
              c: void 0,
              a: !1,
            };
      }
      function p(n) {
        return {
          vtag: n.vtag,
          vchildren: n.vchildren,
          vtext: n.vtext,
          vattrs: n.vattrs,
          vkey: n.vkey,
          vname: n.vname,
        };
      }
      function d(n, t, e, r) {
        t.split(' ').forEach(function (t) {
          (n[t] = !0),
            e &&
              ((n[t + '-' + e] = !0),
              r && (n[t + '-' + e + '-' + r] = n[t + '-' + r] = !0));
        });
      }
      function h(n, t) {
        n.s.has(t) ||
          (n.s.set(t, !0),
          n.l
            ? n.queue.write(function () {
                return m(n, t);
              })
            : n.queue.tick(function () {
                return m(n, t);
              }));
      }
      function m(n, t, e, r, i, u) {
        if ((n.s.delete(t), !n.v.has(t))) {
          if (((r = n.p.get(t)), (e = !r))) {
            if (
              ((i = n.f.get(t)) && i.$rendered && (i['s-rn'] = !0),
              i && !i['s-rn'])
            )
              return (
                (i['s-rc'] = i['s-rc'] || []).push(function () {
                  m(n, t);
                }),
                void (i.$onRender = i['s-rc'])
              );
            r = (function o(n, t, e, r, i, u, f) {
              try {
                (function c(n, t, e, r, i, u, o) {
                  for (o in (n.d.set(r, e),
                  n.m.has(e) || n.m.set(e, {}),
                  ((u = Object.assign(
                    { color: { type: String } },
                    t.properties,
                  )).mode = { type: String }),
                  u))
                    y(n, u[o], e, r, o, i);
                })(n, (i = n.y(t).b), t, (r = new i()), e),
                  (function a(n, t, e) {
                    if (t) {
                      var r = n.d.get(e);
                      t.forEach(function (t) {
                        e[t.method] = {
                          emit: function (e) {
                            n.g(r, t.name, {
                              bubbles: t.bubbles,
                              composed: t.composed,
                              cancelable: t.cancelable,
                              detail: e,
                            });
                          },
                        };
                      });
                    }
                  })(n, i.events, r);
                try {
                  if ((u = n.w.get(t))) {
                    for (f = 0; f < u.length; f += 2) r[u[f]](u[f + 1]);
                    n.w.delete(t);
                  }
                } catch (e) {
                  n.k(e, 2, t);
                }
              } catch (e) {
                (r = {}), n.k(e, 7, t, !0);
              }
              return n.p.set(t, r), r;
            })(n, t, n.M.get(t));
            try {
              r.componentWillLoad && (u = r.componentWillLoad());
            } catch (e) {
              n.k(e, 3, t);
            }
          } else
            try {
              r.componentWillUpdate && (u = r.componentWillUpdate());
            } catch (e) {
              n.k(e, 5, t);
            }
          u && u.then
            ? u.then(function () {
                return b(n, t, r, e);
              })
            : b(n, t, r, e);
        }
      }
      function b(n, t, e, r) {
        (function i(n, t, e, r) {
          try {
            var i,
              u,
              c = t.b.host,
              a = t.b.encapsulation,
              s = 'shadow' === a && n.O.j;
            if (
              ((i = (function l(n, t, e) {
                return (
                  n &&
                    Object.keys(n).forEach(function (r) {
                      n[r].reflectToAttr && ((e = e || {})[r] = t[r]);
                    }),
                  e
                );
              })(t.b.properties, r)),
              (u = s ? e.shadowRoot : e),
              !e['s-rn'])
            ) {
              n.x(n, n.O, t, e);
              var p = e['s-sc'];
              p && (n.O.C(e, o(p), ''), r.render || n.O.C(e, f(p), ''));
            }
            if (r.render || r.hostData || c || i) {
              n.N = !0;
              var h = r.render && r.render(),
                m = void 0;
              if ((m = r.hostData && r.hostData()) && t.P) {
                var b = Object.keys(m).reduce(function (n, e) {
                  return t.P[e]
                    ? n.concat(e)
                    : t.P[tn(e)]
                    ? n.concat(tn(e))
                    : n;
                }, []);
                if (b.length > 0)
                  throw new Error(
                    'The following keys were attempted to be set with hostData() from the ' +
                      t.t +
                      ' component: ' +
                      b.join(', ') +
                      '. If you would like to modify these please set @Prop({ mutable: true, reflectToAttr: true}) on the @Prop() decorator.',
                  );
              }
              i && (m = m ? Object.assign(m, i) : i),
                (n.N = !1),
                c &&
                  (m = (function y(n, t, e) {
                    return (
                      (n = n || {}),
                      Object.keys(t).forEach(function (r) {
                        'theme' === r
                          ? d((n.class = n.class || {}), t[r], e.mode, e.color)
                          : 'class' === r
                          ? d((n[r] = n[r] || {}), t[r])
                          : (n[r] = t[r]);
                      }),
                      n
                    );
                  })(m, c, r));
              var g = n.S.get(e) || {};
              g.c = u;
              var w = v(null, m, h);
              (w.a = !0), n.S.set(e, n.render(e, g, w, s, a));
            }
            n.W && n.W.A(e),
              (e['s-rn'] = !0),
              e.$onRender && (e['s-rc'] = e.$onRender),
              e['s-rc'] &&
                (e['s-rc'].forEach(function (n) {
                  return n();
                }),
                (e['s-rc'] = null));
          } catch (t) {
            (n.N = !1), n.k(t, 8, e, !0);
          }
        })(n, n.y(t), t, e);
        try {
          r
            ? t['s-init']()
            : (e.componentDidUpdate && e.componentDidUpdate(), C(n.S.get(t))),
            t['s-hmr-load'] && t['s-hmr-load']();
        } catch (e) {
          n.k(e, 6, t, !0);
        }
      }
      function y(n, t, e, r, i, u, o, f) {
        if (t.type || t.state) {
          var c = n.m.get(e);
          t.state ||
            (!t.attr ||
              (void 0 !== c[i] && '' !== c[i]) ||
              ((o = u && u.T) && V((f = o[t.attr])) && (c[i] = s(t.type, f))),
            e.hasOwnProperty(i) &&
              (void 0 === c[i] && (c[i] = s(t.type, e[i])),
              'mode' !== i && delete e[i])),
            r.hasOwnProperty(i) && void 0 === c[i] && (c[i] = r[i]),
            t.watchCallbacks && (c[on + i] = t.watchCallbacks.slice()),
            k(
              r,
              i,
              function a(t) {
                return (t = n.m.get(n.d.get(this))) && t[i];
              },
              function l(e, r) {
                (r = n.d.get(this)) && (t.state || t.mutable) && g(n, r, i, e);
              },
            );
        } else if (t.elementRef) w(r, i, e);
        else if (t.method) w(e, i, r[i].bind(r));
        else if (t.context) {
          var v = n.R(t.context);
          void 0 !== v && w(r, i, (v.L && v.L(e)) || v);
        } else t.connect && w(r, i, n.I(t.connect));
      }
      function g(n, t, e, r, i, u, o) {
        (i = n.m.get(t)) || n.m.set(t, (i = {}));
        var f = i[e];
        if (r !== f && ((i[e] = r), (u = n.p.get(t)))) {
          if ((o = i[on + e]))
            for (var c = 0; c < o.length; c++)
              try {
                u[o[c]].call(u, r, f, e);
              } catch (n) {}
          !n.N && t['s-rn'] && h(n, t);
        }
      }
      function w(n, t, e) {
        Object.defineProperty(n, t, { configurable: !0, value: e });
      }
      function k(n, t, e, r) {
        Object.defineProperty(n, t, { configurable: !0, get: e, set: r });
      }
      function M(n, t, e, r, i) {
        var u = t !== (t = t.replace(/^xlink\:?/, '')),
          o = fn[t] || r;
        (o && (!e || 'false' === e)) || i
          ? u
            ? n.removeAttributeNS(cn, nn(t))
            : n.removeAttribute(t)
          : 'function' != typeof e &&
            (o && (e = ''),
            u ? n.setAttributeNS(cn, nn(t), e) : n.setAttribute(t, e));
      }
      function $(n, t, e, r, i, u, o) {
        if ('class' !== e || u)
          if ('style' === e) {
            for (var f in r)
              (i && null != i[f]) ||
                (/-/.test(f) ? t.style._(f) : (t.style[f] = ''));
            for (var f in i)
              (r && i[f] === r[f]) ||
                (/-/.test(f)
                  ? t.style.setProperty(f, i[f])
                  : (t.style[f] = i[f]));
          } else if (
            'o' !== e[0] ||
            'n' !== e[1] ||
            !/[A-Z]/.test(e[2]) ||
            e in t
          )
            if (
              'list' !== e &&
              'type' !== e &&
              !u &&
              (e in t ||
                (-1 !== ['object', 'function'].indexOf(typeof i) && null !== i))
            ) {
              var c = n.y(t);
              c && c.P && c.P[e]
                ? (O(t, e, i),
                  o && c.P[e].D && M(t, c.P[e].q, i, 3 === c.P[e].U, null == i))
                : 'ref' !== e &&
                  (O(t, e, null == i ? '' : i),
                  (null != i && !1 !== i) || n.O.B(t, e));
            } else
              null != i && 'key' !== e
                ? M(t, e, i)
                : (u || (n.O.H(t, e) && (null == i || !1 === i))) &&
                  n.O.B(t, e);
          else
            (e = nn(e) in t ? nn(e.substring(2)) : nn(e[2]) + e.substring(3)),
              i ? i !== r && n.O.F(t, e, i) : n.O.z(t, e);
        else if (r !== i) {
          var a = j(r),
            s = j(i),
            l = a.filter(function (n) {
              return !s.includes(n);
            }),
            v = j(t.className).filter(function (n) {
              return !l.includes(n);
            }),
            p = s.filter(function (n) {
              return !a.includes(n) && !v.includes(n);
            });
          v.push.apply(v, p), (t.className = v.join(' '));
        }
      }
      function j(n) {
        return null == n || '' === n ? [] : n.trim().split(/\s+/);
      }
      function O(n, t, e) {
        try {
          n[t] = e;
        } catch (n) {}
      }
      function E(n, t, e, r, i) {
        var u = 11 === e.c.nodeType && e.c.host ? e.c.host : e.c,
          o = (t && t.vattrs) || G,
          f = e.vattrs || G;
        for (i in o)
          (f && null != f[i]) ||
            null == o[i] ||
            $(n, u, i, o[i], void 0, r, e.a);
        for (i in f)
          (i in o &&
            f[i] === ('value' === i || 'checked' === i ? u[i] : o[i])) ||
            $(n, u, i, o[i], f[i], r, e.a);
      }
      function x(n, t) {
        function e(i, u, o, f, c, v, m, b, y) {
          if (
            ((b = u.vchildren[o]),
            a ||
              ((p = !0),
              'slot' === b.vtag &&
                (l && t.C(f, l + '-slot', ''),
                b.vchildren ? (b.Y = !0) : (b.Z = !0))),
            V(b.vtext))
          )
            b.c = t.K(b.vtext);
          else if (b.Z) b.c = t.K('');
          else {
            if (
              ((v = b.c =
                an || 'svg' === b.vtag
                  ? t.Q('http://www.w3.org/2000/svg', b.vtag)
                  : t.X(b.Y ? 'slot-fb' : b.vtag)),
              (an = 'svg' === b.vtag || ('foreignObject' !== b.vtag && an)),
              E(n, null, b, an),
              V(l) && v['s-si'] !== l && t.C(v, (v['s-si'] = l), ''),
              V(s) &&
                t.C(
                  v,
                  Q,
                  s +
                    '.' +
                    o +
                    ((function n(t) {
                      if (t)
                        for (var e = 0; e < t.length; e++)
                          if ('slot' !== t[e].vtag || n(t[e].vchildren))
                            return !0;
                      return !1;
                    })(b.vchildren)
                      ? ''
                      : '.'),
                ),
              b.vchildren)
            )
              for (c = 0; c < b.vchildren.length; ++c)
                (m = e(i, b, c, v)) &&
                  (V(s) &&
                    3 === m.nodeType &&
                    !m['s-cr'] &&
                    t.G(v, t.J('s.' + s + '.' + c)),
                  t.G(v, m),
                  V(s) &&
                    3 === m.nodeType &&
                    !m['s-cr'] &&
                    (t.G(v, t.J('/')), t.G(v, t.K(' '))));
            'svg' === b.vtag && (an = !1);
          }
          return (
            (b.c['s-hn'] = d),
            (b.Y || b.Z) &&
              ((b.c['s-sr'] = !0),
              (b.c['s-cr'] = h),
              (b.c['s-sn'] = b.vname || ''),
              (y = i && i.vchildren && i.vchildren[o]) &&
                y.vtag === b.vtag &&
                i.c &&
                r(i.c)),
            b.c
          );
        }
        function r(e, i, u, o) {
          n.V = !0;
          var a = t.nn(e);
          for (u = a.length - 1; u >= 0; u--)
            (o = a[u])['s-hn'] !== d &&
              o['s-ol'] &&
              (t.tn(o),
              t.en(c(o), o, f(o)),
              t.tn(o['s-ol']),
              (o['s-ol'] = null),
              (p = !0)),
              i && r(o, i);
          n.V = !1;
        }
        function i(n, r, i, u, o, c, a, s) {
          var l = n['s-cr'] || n.$defaultHolder;
          for (
            (a = (l && t.rn(l)) || n).shadowRoot &&
            t.in(a) === d &&
            (a = a.shadowRoot);
            o <= c;
            ++o
          )
            u[o] &&
              (s = V(u[o].vtext) ? t.K(u[o].vtext) : e(null, i, o, n)) &&
              ((u[o].c = s), t.en(a, s, f(r)));
        }
        function u(n, e, i, u) {
          for (; e <= i; ++e)
            V(n[e]) &&
              ((u = n[e].c),
              (v = !0),
              u['s-ol'] ? t.tn(u['s-ol']) : r(u, !0),
              t.tn(u));
        }
        function o(n, t) {
          return (
            n.vtag === t.vtag &&
            n.vkey === t.vkey &&
            ('slot' !== n.vtag || n.vname === t.vname)
          );
        }
        function f(n) {
          return n && n['s-ol'] ? n['s-ol'] : n;
        }
        function c(n) {
          return t.rn(n['s-ol'] ? n['s-ol'] : n);
        }
        var a,
          s,
          l,
          v,
          p,
          d,
          h,
          m = [];
        return function b(y, g, w, k, M, $, j, O, x, C, N, P) {
          if (
            ((d = t.in(y)),
            (h = y['s-cr']),
            (a = k),
            (s = 'shadow' !== M ? $ : null),
            (l = y['s-sc']),
            (p = v = !1),
            (function a(s, l, v) {
              var p = (l.c = s.c),
                d = s.vchildren,
                h = l.vchildren;
              (an = l.c && V(t.un(l.c)) && void 0 !== l.c.ownerSVGElement),
                (an = 'svg' === l.vtag || ('foreignObject' !== l.vtag && an)),
                V(l.vtext)
                  ? (v = p['s-cr'] || p.$defaultHolder)
                    ? t.on(t.rn(v), l.vtext)
                    : s.vtext !== l.vtext && t.on(p, l.vtext)
                  : ('slot' !== l.vtag && E(n, s, l, an),
                    V(d) && V(h)
                      ? (function m(n, s, l, v, p, d, h, b) {
                          for (
                            var y = 0,
                              g = 0,
                              w = s.length - 1,
                              k = s[0],
                              M = s[w],
                              $ = v.length - 1,
                              j = v[0],
                              O = v[$];
                            y <= w && g <= $;

                          )
                            if (null == k) k = s[++y];
                            else if (null == M) M = s[--w];
                            else if (null == j) j = v[++g];
                            else if (null == O) O = v[--$];
                            else if (o(k, j))
                              a(k, j), (k = s[++y]), (j = v[++g]);
                            else if (o(M, O))
                              a(M, O), (M = s[--w]), (O = v[--$]);
                            else if (o(k, O))
                              ('slot' !== k.vtag && 'slot' !== O.vtag) ||
                                r(t.rn(k.c)),
                                a(k, O),
                                t.en(n, k.c, t.fn(M.c)),
                                (k = s[++y]),
                                (O = v[--$]);
                            else if (o(M, j))
                              ('slot' !== k.vtag && 'slot' !== O.vtag) ||
                                r(t.rn(M.c)),
                                a(M, j),
                                t.en(n, M.c, k.c),
                                (M = s[--w]),
                                (j = v[++g]);
                            else {
                              for (p = null, d = y; d <= w; ++d)
                                if (
                                  s[d] &&
                                  V(s[d].vkey) &&
                                  s[d].vkey === j.vkey
                                ) {
                                  p = d;
                                  break;
                                }
                              V(p)
                                ? ((b = s[p]).vtag !== j.vtag
                                    ? (h = e(s && s[g], l, p, n))
                                    : (a(b, j), (s[p] = void 0), (h = b.c)),
                                  (j = v[++g]))
                                : ((h = e(s && s[g], l, g, n)), (j = v[++g])),
                                h && t.en(c(k.c), h, f(k.c));
                            }
                          y > w
                            ? i(
                                n,
                                null == v[$ + 1] ? null : v[$ + 1].c,
                                l,
                                v,
                                g,
                                $,
                              )
                            : g > $ && u(s, y, w);
                        })(p, d, l, h)
                      : V(h)
                      ? (V(s.vtext) && t.on(p, ''),
                        i(p, null, l, h, 0, h.length - 1))
                      : V(d) && u(d, 0, d.length - 1)),
                an && 'svg' === l.vtag && (an = !1);
            })(g, w),
            V(s) && t.C(g.c, K, s),
            p)
          ) {
            for (
              (function n(e, r, i, u, o, f, c, a, s, l) {
                for (o = 0, f = (r = t.nn(e)).length; o < f; o++) {
                  if ((i = r[o])['s-sr'] && (u = i['s-cr']))
                    for (
                      a = t.nn(t.rn(u)), s = i['s-sn'], c = a.length - 1;
                      c >= 0;
                      c--
                    )
                      (u = a[c])['s-cn'] ||
                        u['s-nr'] ||
                        u['s-hn'] === i['s-hn'] ||
                        ((((3 === (l = t.cn(u)) || 8 === l) && '' === s) ||
                          (1 === l && null === t.an(u, 'slot') && '' === s) ||
                          (1 === l && t.an(u, 'slot') === s)) &&
                          (m.some(function (n) {
                            return n.sn === u;
                          }) ||
                            ((v = !0),
                            (u['s-sn'] = s),
                            m.push({ ln: i, sn: u }))));
                  1 === t.cn(i) && n(i);
                }
              })(w.c),
                j = 0;
              j < m.length;
              j++
            )
              (O = m[j]).sn['s-ol'] ||
                (((x = t.K(''))['s-nr'] = O.sn),
                t.en(t.rn(O.sn), (O.sn['s-ol'] = x), O.sn));
            for (n.V = !0, j = 0; j < m.length; j++) {
              for (
                O = m[j], N = t.rn(O.ln), P = t.fn(O.ln), x = O.sn['s-ol'];
                (x = t.vn(x));

              )
                if (
                  (C = x['s-nr']) &&
                  C &&
                  C['s-sn'] === O.sn['s-sn'] &&
                  N === t.rn(C) &&
                  (C = t.fn(C)) &&
                  C &&
                  !C['s-nr']
                ) {
                  P = C;
                  break;
                }
              ((!P && N !== t.rn(O.sn)) || t.fn(O.sn) !== P) &&
                O.sn !== P &&
                (t.tn(O.sn), t.en(N, O.sn, P));
            }
            n.V = !1;
          }
          return (
            v &&
              (function n(e, r, i, u, o, f, c, a) {
                for (u = 0, o = (i = t.nn(e)).length; u < o; u++)
                  if (((r = i[u]), 1 === t.cn(r))) {
                    if (r['s-sr'])
                      for (c = r['s-sn'], r.hidden = !1, f = 0; f < o; f++)
                        if (i[f]['s-hn'] !== r['s-hn'])
                          if (((a = t.cn(i[f])), '' !== c)) {
                            if (1 === a && c === t.an(i[f], 'slot')) {
                              r.hidden = !0;
                              break;
                            }
                          } else if (
                            1 === a ||
                            (3 === a && '' !== t.pn(i[f]).trim())
                          ) {
                            r.hidden = !0;
                            break;
                          }
                    n(r);
                  }
              })(w.c),
            (m.length = 0),
            w
          );
        };
      }
      function C(n, t) {
        n &&
          (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.c),
          n.vchildren &&
            n.vchildren.forEach(function (n) {
              C(n, t);
            }));
      }
      function N(n, t, e, r, i) {
        var u,
          o,
          f,
          c,
          a = n.cn(t);
        if (i && 1 === a) {
          (o = n.an(t, Q)) &&
            (f = o.split('.'))[0] === r &&
            (((c = {}).vtag = n.in((c.c = t))),
            e.vchildren || (e.vchildren = []),
            (e.vchildren[f[1]] = c),
            (e = c),
            (i = '' !== f[2]));
          for (var s = 0; s < t.childNodes.length; s++)
            N(n, t.childNodes[s], e, r, i);
        } else
          3 === a &&
            (u = t.previousSibling) &&
            8 === n.cn(u) &&
            's' === (f = n.pn(u).split('.'))[0] &&
            f[1] === r &&
            (((c = { vtext: n.pn(t) }).c = t),
            e.vchildren || (e.vchildren = []),
            (e.vchildren[f[2]] = c));
      }
      function P(n, t) {
        var e = n.y(t);
        e.dn &&
          e.dn.forEach(function (e) {
            e.i ||
              n.O.F(
                t,
                e.e,
                (function r(n, t, e, i) {
                  return function (r) {
                    (i = n.p.get(t))
                      ? i[e](r)
                      : ((i = n.w.get(t) || []).push(e, r), n.w.set(t, i));
                  };
                })(n, t, e.r),
                e.o,
                e.u,
              );
          });
      }
      function S(n, t) {
        var e = { nodeName: t },
          r = n.y(e);
        if (!r || !r.b) return Promise.resolve(null);
        var i = r.b,
          u = (function o(n) {
            return Object.keys(n).reduce(
              function (t, e) {
                var r,
                  i = n[e],
                  u = { name: e };
                if (i.state) (r = 'states'), (u.hn = i.watchCallbacks || []);
                else if (i.elementRef) r = 'elements';
                else if (i.method) r = 'methods';
                else {
                  r = 'props';
                  var o = 'any';
                  i.type &&
                    ((o = i.type),
                    'function' == typeof i.type && (o = i.type.name)),
                    (u.type = o.toLowerCase()),
                    (u.mutable = i.mutable || !1),
                    (u.connect = i.connect || '-'),
                    (u.context = i.connect || '-'),
                    (u.hn = i.watchCallbacks || []);
                }
                return t[r].push(u), t;
              },
              { mn: [], bn: [], yn: [], gn: [] },
            );
          })(i.properties || {}),
          f = (r.dn || []).map(function (n) {
            return {
              wn: n.e,
              capture: n.o,
              disabled: n.i,
              passive: n.u,
              method: n.r,
            };
          }),
          c = i.events || [],
          a = Object.assign(
            {
              kn: i.is,
              Mn: r.$n || 'unknown',
              encapsulation: i.encapsulation || 'none',
            },
            u,
            { events: { jn: c, listeners: f } },
          );
        return Promise.resolve(a);
      }
      function W(n, t, e, r, i) {
        return (
          e.mode || (e.mode = n.On(e)),
          e['s-cr'] ||
            n.an(e, K) ||
            (n.j && 1 === t.encapsulation) ||
            ((e['s-cr'] = n.K('')),
            (e['s-cr']['s-cn'] = !0),
            n.en(e, e['s-cr'], n.nn(e)[0])),
          n.j ||
            1 !== t.encapsulation ||
            'shadowRoot' in HTMLElement.prototype ||
            (e.shadowRoot = e),
          1 === t.encapsulation &&
            n.j &&
            !e.shadowRoot &&
            n.En(e, { mode: 'open' }),
          (r = { xn: e['s-id'], T: {} }),
          t.P &&
            Object.keys(t.P).forEach(function (u) {
              (i = t.P[u].q) && (r.T[i] = n.an(e, i));
            }),
          r
        );
      }
      function A(n, t, e, r) {
        (e.connectedCallback = function () {
          (function e(n, t, r) {
            n.Cn.has(r) || (n.Cn.set(r, !0), P(n, r)),
              n.v.delete(r),
              n.Nn.has(r) ||
                (n.Nn.set(r, !0),
                r['s-id'] || (r['s-id'] = n.Pn()),
                (function i(n, t, e) {
                  for (e = t; (e = n.O.un(e)); )
                    if (n.Sn(e)) {
                      n.Wn.has(t) ||
                        (n.f.set(t, e),
                        e.$activeLoading && (e['s-ld'] = e.$activeLoading),
                        (e['s-ld'] = e['s-ld'] || []).push(t));
                      break;
                    }
                })(n, r),
                n.queue.tick(function () {
                  n.M.set(r, W(n.O, t, r)), n.An(t, r);
                }));
          })(n, t, this);
        }),
          (e.attributeChangedCallback = function (n, e, r) {
            (function i(n, t, e, r, u, o, f) {
              if (n && r !== u)
                for (o in n)
                  if ((f = n[o]).q && nn(f.q) === nn(e)) {
                    t[o] = s(f.U, u);
                    break;
                  }
            })(t.P, this, n, e, r);
          }),
          (e.disconnectedCallback = function () {
            (function t(n, e) {
              if (
                !n.V &&
                (function r(n, t) {
                  for (; t; ) {
                    if (!n.rn(t)) return 9 !== n.cn(t);
                    t = n.rn(t);
                  }
                })(n.O, e)
              ) {
                n.v.set(e, !0),
                  l(n, e),
                  C(n.S.get(e), !0),
                  n.O.z(e),
                  n.Cn.delete(e);
                var i = n.p.get(e);
                i && i.componentDidUnload && i.componentDidUnload(),
                  n.W && n.W.Tn(e),
                  [n.f, n.Rn, n.M].forEach(function (n) {
                    return n.delete(e);
                  });
              }
            })(n, this);
          }),
          (e['s-init'] = function () {
            (function t(n, e, r, i, u) {
              if (
                (function n(t, e) {
                  for (var r = 0; r < e.childNodes.length; r++)
                    if (1 === e.childNodes[r].nodeType) {
                      if (t.y(e.childNodes[r]) && !t.Nn.has(e.childNodes[r]))
                        return !1;
                      if (!n(t, e.childNodes[r])) return !1;
                    }
                  return !0;
                })(n, e) &&
                !n.Wn.has(e) &&
                (i = n.p.get(e)) &&
                !n.v.has(e) &&
                (!e['s-ld'] || !e['s-ld'].length)
              ) {
                delete e['s-ld'], n.Wn.set(e, !0);
                try {
                  C(n.S.get(e)),
                    (u = n.Rn.get(e)) &&
                      (u.forEach(function (n) {
                        return n(e);
                      }),
                      n.Rn.delete(e)),
                    i.componentDidLoad && i.componentDidLoad();
                } catch (t) {
                  n.k(t, 4, e);
                }
                e.classList.add(r), l(n, e);
              }
            })(n, this, r);
          }),
          (e['s-hmr'] = function (e) {
            (function r(n, t, e, i) {
              (t.b = null), n.Wn.delete(e);
              var u = n.p.get(e);
              u && (n.d.delete(u), n.p.delete(e)),
                n.O.z(e),
                n.Cn.delete(e),
                (t.dn = null),
                (e['s-hmr-load'] = function () {
                  delete e['s-hmr-load'],
                    (function r(n, t, e) {
                      n.Cn.has(e) ||
                        (n.Cn.set(e, !0),
                        t.b &&
                          t.b.listeners &&
                          ((t.dn = t.b.listeners.map(function (n) {
                            return {
                              r: n.method,
                              e: n.name,
                              o: !!n.capture,
                              u: !!n.passive,
                              i: !!n.disabled,
                            };
                          })),
                          P(n, e)));
                    })(n, t, e);
                }),
                n.M.set(e, W(n.O, t, e)),
                n.An(t, e, i);
            })(n, t, this, e);
          }),
          (e.forceUpdate = function () {
            h(n, this);
          }),
          (function i(n, t, e) {
            t &&
              Object.keys(t).forEach(function (r) {
                var i = t[r],
                  u = i.Ln;
                1 === u || 2 === u
                  ? k(
                      e,
                      r,
                      function t() {
                        return (n.m.get(this) || {})[r];
                      },
                      function t(e) {
                        g(n, this, r, s(i.U, e));
                      },
                    )
                  : 6 === u && w(e, r, en);
              });
          })(n, t.P, e);
      }
      function T(n, t, e, r) {
        return function () {
          var i = arguments;
          return (function u(n, t, e) {
            var r = t[e],
              i = n.In.body;
            return i
              ? (r || (r = i.querySelector(e)),
                r || ((r = t[e] = n.X(e)), n.G(i, r)),
                r.componentOnReady())
              : Promise.resolve();
          })(n, t, e).then(function (n) {
            return n[r].apply(n, i);
          });
        };
      }
      function R(n, t, e) {
        n.lastIndex = 0;
        var r = t.substring(e).match(n);
        if (r) {
          var i = e + r.index;
          return { start: i, end: i + r[0].length };
        }
        return null;
      }
      function L(n, t, e) {
        var r = (function i(n, t) {
          var e = R(yn, n, t);
          if (!e) return null;
          var r = (function i(n, t) {
              for (var e = 0, r = t; r < n.length; r++) {
                var i = n[r];
                if ('(' === i) e++;
                else if (')' === i && --e <= 0) return r + 1;
              }
              return r;
            })(n, e.start),
            u = n.substring(e.end, r - 1).split(','),
            o = u[0],
            f = u.slice(1);
          return {
            start: e.start,
            end: r,
            _n: o.trim(),
            Dn: f.length > 0 ? f.join(',').trim() : void 0,
          };
        })(n, e);
        if (!r) return t.push(n.substring(e, n.length)), n.length;
        var u = r._n,
          o = null != r.Dn ? D(r.Dn) : void 0;
        return (
          t.push(n.substring(e, r.start), function (n) {
            return (function t(n, e, r) {
              return n[e] ? n[e] : r ? I(r, n) : '';
            })(n, u, o);
          }),
          r.end
        );
      }
      function I(n, t) {
        for (var e = '', r = 0; r < n.length; r++) {
          var i = n[r];
          e += 'string' == typeof i ? i : i(t);
        }
        return e;
      }
      function _(n, t) {
        for (var e = !1, r = !1, i = t; i < n.length; i++) {
          var u = n[i];
          if (e) r && '"' === u && (e = !1), r || "'" !== u || (e = !1);
          else if ('"' === u) (e = !0), (r = !0);
          else if ("'" === u) (e = !0), (r = !1);
          else {
            if (';' === u) return i + 1;
            if ('}' === u) return i;
          }
        }
        return i;
      }
      function D(n) {
        var t = 0;
        n = (function e(n) {
          for (var t = '', e = 0; ; ) {
            var r = R(gn, n, e),
              i = r ? r.start : n.length;
            if (((t += n.substring(e, i)), !r)) break;
            e = _(n, i);
          }
          return t;
        })((n = n.replace(wn, '')))
          .replace(Mn, '')
          .replace(kn, '');
        for (var r = []; t < n.length; ) t = L(n, r, t);
        return r;
      }
      function q(n) {
        var t = {};
        n.forEach(function (n) {
          n.qn.forEach(function (n) {
            t[n.Un] = n.value;
          });
        });
        for (
          var e = {},
            r = Object.entries(t),
            i = function (n) {
              var t = !1;
              if (
                (r.forEach(function (n) {
                  var r = n[0],
                    i = I(n[1], e);
                  i !== e[r] && ((e[r] = i), (t = !0));
                }),
                !t)
              )
                return 'break';
            },
            u = 0;
          u < 10 && 'break' !== i();
          u++
        );
        return e;
      }
      function U(n) {
        var t = (n = n.replace(/\s+/gim, ' ').trim()).endsWith($n);
        return (
          t && (n = n.substr(0, n.length - $n.length).trim()),
          { value: n, Bn: t }
        );
      }
      function B(n) {
        var t = [];
        return (
          n.forEach(function (n) {
            t.push.apply(t, n.Hn);
          }),
          t
        );
      }
      function H(n) {
        var t = (function e(n) {
            return (function n(t, e) {
              var r = e.substring(t.start, t.end - 1);
              if (((t.parsedCssText = t.cssText = r.trim()), t.parent)) {
                var i = t.previous ? t.previous.end : t.parent.start;
                r = (r = (r = (function u(n) {
                  return n.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
                    for (var n = arguments[1], t = 6 - n.length; t--; )
                      n = '0' + n;
                    return '\\' + n;
                  });
                })((r = e.substring(i, t.start - 1)))).replace(
                  dn.Fn,
                  ' ',
                )).substring(r.lastIndexOf(';') + 1);
                var o = (t.parsedSelector = t.selector = r.trim());
                (t.atRule = 0 === o.indexOf(bn)),
                  t.atRule
                    ? 0 === o.indexOf(mn)
                      ? (t.type = ln.zn)
                      : o.match(dn.Yn) &&
                        ((t.type = ln.Zn),
                        (t.keyframesName = t.selector.split(dn.Fn).pop()))
                    : 0 === o.indexOf(hn)
                    ? (t.type = ln.Kn)
                    : (t.type = ln.Qn);
              }
              var f = t.rules;
              if (f)
                for (
                  var c = 0, a = f.length, s = void 0;
                  c < a && (s = f[c]);
                  c++
                )
                  n(s, e);
              return t;
            })(
              (function e(n) {
                var t = new sn();
                (t.start = 0), (t.end = n.length);
                for (var e = t, r = 0, i = n.length; r < i; r++)
                  if (n[r] === vn) {
                    e.rules || (e.rules = []);
                    var u = e,
                      o = u.rules[u.rules.length - 1] || null;
                    ((e = new sn()).start = r + 1),
                      (e.parent = u),
                      (e.previous = o),
                      u.rules.push(e);
                  } else n[r] === pn && ((e.end = r + 1), (e = e.parent || t));
                return t;
              })(
                (n = (function t(n) {
                  return n.replace(dn.Xn, '').replace(dn.Gn, '');
                })(n)),
              ),
              n,
            );
          })(n),
          r = D(n);
        return {
          Jn: n,
          Vn: r,
          Hn: (function i(n, t) {
            if ((void 0 === t && (t = 0), !n.rules)) return [];
            var e = [];
            return (
              n.rules
                .filter(function (n) {
                  return n.type === ln.Qn;
                })
                .forEach(function (n) {
                  var r = (function i(n) {
                    for (var t, e = []; (t = jn.exec(n.trim())); ) {
                      var r = U(t[2]),
                        i = r.value,
                        u = r.Bn;
                      e.push({ Un: t[1].trim(), value: D(i), Bn: u });
                    }
                    return e;
                  })(n.cssText);
                  r.length > 0 &&
                    n.parsedSelector.split(',').forEach(function (n) {
                      (n = n.trim()),
                        e.push({ selector: n, qn: r, nt: 1, tt: t });
                    }),
                    t++;
                }),
              e
            );
          })(t),
          et: r.length > 1,
        };
      }
      function F(n, t) {
        var e = H(t.innerHTML);
        (e.rt = t), n.push(e);
      }
      function z(n, t, e) {
        return Y(
          (n = Y(
            (n = Y(n, '\\[' + o(t) + '\\]', '[' + o(e) + ']')),
            '\\[' + u(t) + '\\]',
            '[' + u(e) + ']',
          )),
          '\\[' + f(t) + '\\]',
          '[' + f(e) + ']',
        );
      }
      function Y(n, t, e) {
        return n.replace(new RegExp(t, 'g'), e);
      }
      function Z(n, t, e) {
        var r = e.href;
        return fetch(r)
          .then(function (n) {
            return n.text();
          })
          .then(function (i) {
            if (
              (function u(n) {
                return n.indexOf('var(') > -1 || On.test(n);
              })(i) &&
              e.parentNode
            ) {
              (function o(n) {
                return (En.lastIndex = 0), En.test(n);
              })(i) &&
                (i = (function f(n, t) {
                  var e = t.replace(/[^/]*$/, '');
                  return n.replace(En, function (n, t) {
                    var r = e + t;
                    return n.replace(t, r);
                  });
                })(i, r));
              var c = n.createElement('style');
              (c.innerHTML = i),
                F(t, c),
                e.parentNode.insertBefore(c, e),
                e.remove();
            }
          })
          .catch(function (n) {});
      }
      var K = 'data-ssrv',
        Q = 'data-ssrc',
        X = '$',
        G = {},
        J = {
          enter: 13,
          escape: 27,
          space: 32,
          tab: 9,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
        },
        V = function (n) {
          return null != n;
        },
        nn = function (n) {
          return n.toLowerCase();
        },
        tn = function (n) {
          return nn(n)
            .split('-')
            .map(function (n) {
              return n.charAt(0).toUpperCase() + n.slice(1);
            })
            .join('');
        },
        en = function () {},
        rn = [],
        un = {
          forEach: function (n, t) {
            n.forEach(function (n) {
              return t(p(n));
            });
          },
          map: function (n, t) {
            return n.map(function (n) {
              return (function e(n) {
                return {
                  vtag: n.vtag,
                  vchildren: n.vchildren,
                  vtext: n.vtext,
                  vattrs: n.vattrs,
                  vkey: n.vkey,
                  vname: n.vname,
                };
              })(t(p(n)));
            });
          },
        },
        on = 'wc-',
        fn = {
          allowfullscreen: 1,
          async: 1,
          autofocus: 1,
          autoplay: 1,
          checked: 1,
          controls: 1,
          disabled: 1,
          enabled: 1,
          formnovalidate: 1,
          hidden: 1,
          multiple: 1,
          noresize: 1,
          readonly: 1,
          required: 1,
          selected: 1,
          spellcheck: 1,
        },
        cn = 'http://www.w3.org/1999/xlink',
        an = !1,
        sn = function sn() {
          (this.start = 0),
            (this.end = 0),
            (this.previous = null),
            (this.parent = null),
            (this.rules = null),
            (this.parsedCssText = ''),
            (this.cssText = ''),
            (this.atRule = !1),
            (this.type = 0),
            (this.keyframesName = ''),
            (this.selector = ''),
            (this.parsedSelector = '');
        },
        ln = { Qn: 1, Zn: 7, zn: 4, Kn: 1e3 },
        vn = '{',
        pn = '}',
        dn = {
          Xn: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
          Gn: /@import[^;]*;/gim,
          it: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
          ut: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
          ot: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
          ft: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
          Yn: /^@[^\s]*keyframes/,
          Fn: /\s+/g,
        },
        hn = '--',
        mn = '@media',
        bn = '@',
        yn = /\bvar\(/,
        gn = /\B--[\w-]+\s*:/,
        wn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        kn = /^[\t ]+\n/gm,
        Mn = /[^{}]*{\s*}/gm,
        $n = '!important',
        jn =
          /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm,
        On = /[\s;{]--[-a-zA-Z0-9]+\s*:/m,
        En = /url[\s]*\([\s]*['"]?(?![http|/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,
        xn = (function () {
          function n(n, t) {
            (this.ct = n),
              (this.at = t),
              (this.st = 0),
              (this.lt = new WeakMap()),
              (this.vt = new WeakMap()),
              (this.pt = []),
              (this.dt = new Map());
          }
          return (
            (n.prototype.ht = function () {
              var n = this;
              return new Promise(function (t) {
                n.ct.requestAnimationFrame(function () {
                  (function e(n, t) {
                    return (function e(n, t) {
                      for (
                        var e = [],
                          r = n.querySelectorAll(
                            'link[rel="stylesheet"][href]',
                          ),
                          i = 0;
                        i < r.length;
                        i++
                      )
                        e.push(Z(n, t, r[i]));
                      return Promise.all(e);
                    })(n, t).then(function () {
                      (function e(n, t) {
                        for (
                          var e = n.querySelectorAll('style'), r = 0;
                          r < e.length;
                          r++
                        )
                          F(t, e[r]);
                      })(n, t);
                    });
                  })(n.at, n.pt).then(function () {
                    return t();
                  });
                });
              });
            }),
            (n.prototype.mt = function (n) {
              var t = this;
              return Z(this.at, this.pt, n).then(function () {
                t.bt();
              });
            }),
            (n.prototype.yt = function (n) {
              F(this.pt, n), this.bt();
            }),
            (n.prototype.gt = function (n, t, e) {
              if (this.vt.has(n)) return null;
              var r = n['s-sc'],
                i = this.wt(e, t, r),
                u = i.et && i.kt;
              if (!u && i.rt) return null;
              var o = this.at.createElement('style');
              if (u) {
                var f = i.kt + '-' + this.st;
                (n['s-sc'] = f),
                  this.lt.set(n, o),
                  this.vt.set(
                    n,
                    (function c(n, t) {
                      var e = n.Vn.map(function (e) {
                          return 'string' == typeof e ? z(e, n.kt, t) : e;
                        }),
                        r = n.Hn.map(function (e) {
                          return Object.assign({}, e, {
                            selector: z(e.selector, n.kt, t),
                          });
                        });
                      return Object.assign({}, n, { Vn: e, Hn: r, kt: t });
                    })(i, f),
                  ),
                  this.st++;
              } else
                (i.rt = o),
                  i.et || (o.innerHTML = I(i.Vn, {})),
                  this.pt.push(i),
                  this.bt(),
                  this.vt.set(n, i);
              return o;
            }),
            (n.prototype.Tn = function (n) {
              var t = this.lt.get(n);
              t && t.remove(), this.lt.delete(n), this.vt.delete(n);
            }),
            (n.prototype.A = function (n) {
              var t = this.vt.get(n);
              if (t && t.et && t.kt) {
                var e = this.lt.get(n);
                if (e) {
                  var r = q(
                    (function i(n, t, e) {
                      return (function i(n) {
                        return (
                          n.sort(function (n, t) {
                            return n.nt === t.nt ? n.tt - t.tt : n.nt - t.nt;
                          }),
                          n
                        );
                      })(
                        B(
                          e.concat(
                            (function r(n, t) {
                              for (var e = []; t; ) {
                                var r = n.get(t);
                                r && e.push(r), (t = t.parentElement);
                              }
                              return e;
                            })(t, n),
                          ),
                        ).filter(function (t) {
                          return (function e(n, t) {
                            return n.matches(t);
                          })(n, t.selector);
                        }),
                      );
                    })(n, this.vt, this.pt),
                  );
                  e.innerHTML = I(t.Vn, r);
                }
              }
            }),
            (n.prototype.bt = function () {
              (function n(t) {
                var e = q(B(t));
                t.forEach(function (n) {
                  n.et && (n.rt.innerHTML = I(n.Vn, e));
                });
              })(this.pt);
            }),
            (n.prototype.wt = function (n, t, e) {
              var r = this.dt.get(t);
              return r || (((r = H(n)).kt = e), this.dt.set(t, r)), r;
            }),
            n
          );
        })(),
        Cn = void 0,
        Nn = !(function Pn(n) {
          return !!(
            n.CSS &&
            n.CSS.supports &&
            n.CSS.supports('color', 'var(--c)')
          );
        })(n);
      n.location.search.indexOf('cssvars=false') > 0 && (Nn = !0),
        Nn && (Cn = new xn(n, t)),
        (function Sn(n, t, e, r, u, o, f) {
          function s(n, t) {
            if (!e.customElements.get(n.t)) {
              (P[n.t] = !0), A(R, (w[n.t] = n), t.prototype, o);
              var r = [];
              for (var i in n.P) n.P[i].q && r.push(n.P[i].q);
              (t.observedAttributes = r), e.customElements.define(n.t, t);
            }
          }
          function l(n, t) {
            return (
              t && M.delete(n.replace(/^\.\//, '')),
              null == n ? null : M.get(n.replace(/^\.\//, ''))
            );
          }
          function p(n) {
            return 'exports' === n || 'require' === n || !!l(n);
          }
          function d(n, t, e) {
            var r = {};
            try {
              e.apply(
                null,
                t.map(function (n) {
                  return 'exports' === n ? r : 'require' === n ? m : l(n);
                }),
              );
            } catch (n) {}
            void 0 !== n &&
              (M.set(n, r),
              n &&
                !n.endsWith('.js') &&
                Object.keys(r).forEach(function (n) {
                  for (
                    var t = n.replace(/-/g, '').toLowerCase(),
                      e = Object.keys(w),
                      i = 0;
                    i < e.length;
                    i++
                  )
                    if (e[i].replace(/-/g, '').toLowerCase() === t) {
                      var u = w[e[i]];
                      u &&
                        ((u.b = r[n]),
                        c(0, u, u.encapsulation, u.b.style, u.b.styleMode));
                      break;
                    }
                }));
          }
          function m(n, t) {
            b(void 0, n, t);
          }
          function b(n, t, e) {
            var r = t.filter(function (n) {
              return !p(n);
            });
            r.forEach(function (n) {
              g(u + n.replace('.js', '.es5.js'));
            }),
              k.push([n, t, e]),
              0 === r.length &&
                (function i() {
                  for (var n = k.length - 1; n >= 0; n--) {
                    var t = k[n],
                      e = t[0],
                      r = t[1],
                      i = t[2];
                    r.every(p) && !p(e) && (k.splice(n, 1), d(e, r, i));
                  }
                })();
          }
          function y(n, t, e) {
            var r = 2 === n.encapsulation || (1 === n.encapsulation && !E.j),
              i = u + t + (r ? '.sc' : '') + '.es5.js';
            e && (i += '?s-hmr=' + e), g(i);
          }
          function g(n) {
            function t() {
              clearTimeout(e),
                (r.onerror = r.onload = null),
                E.tn(r),
                $.delete(n);
            }
            var e, r;
            $.has(n) ||
              ($.add(n),
              ((r = E.X('script')).charSet = 'utf-8'),
              (r.async = !0),
              (r.src = n),
              (e = setTimeout(t, 12e4)),
              (r.onerror = r.onload = t),
              E.G(E.In.head, r));
          }
          var w = { html: {} },
            k = [],
            M = new Map(),
            $ = new Set(),
            j = {},
            O = (e[n] = e[n] || {}),
            E = (function C(n, t, e) {
              n.Mt ||
                ((n.Mt = function (n, t, e, r) {
                  return n.addEventListener(t, e, r);
                }),
                (n.$t = function (n, t, e, r) {
                  return n.removeEventListener(t, e, r);
                }));
              var r = new WeakMap(),
                i = {
                  In: e,
                  jt: !1,
                  cn: function (n) {
                    return n.nodeType;
                  },
                  X: function (n) {
                    return e.createElement(n);
                  },
                  Q: function (n, t) {
                    return e.createElementNS(n, t);
                  },
                  K: function (n) {
                    return e.createTextNode(n);
                  },
                  J: function (n) {
                    return e.createComment(n);
                  },
                  en: function (n, t, e) {
                    return n.insertBefore(t, e);
                  },
                  tn: function (n) {
                    return n.remove();
                  },
                  G: function (n, t) {
                    return n.appendChild(t);
                  },
                  nn: function (n) {
                    return n.childNodes;
                  },
                  rn: function (n) {
                    return n.parentNode;
                  },
                  fn: function (n) {
                    return n.nextSibling;
                  },
                  vn: function (n) {
                    return n.previousSibling;
                  },
                  in: function (n) {
                    return nn(n.nodeName);
                  },
                  pn: function (n) {
                    return n.textContent;
                  },
                  on: function (n, t) {
                    return (n.textContent = t);
                  },
                  an: function (n, t) {
                    return n.getAttribute(t);
                  },
                  C: function (n, t, e) {
                    return n.setAttribute(t, e);
                  },
                  Ot: function (n, t, e, r) {
                    return n.setAttributeNS(t, e, r);
                  },
                  B: function (n, t) {
                    return n.removeAttribute(t);
                  },
                  H: function (n, t) {
                    return n.hasAttribute(t);
                  },
                  On: function (t) {
                    return t.getAttribute('mode') || (n.Context || {}).mode;
                  },
                  Et: function (n, r) {
                    return 'child' === r
                      ? n.firstElementChild
                      : 'parent' === r
                      ? i.un(n)
                      : 'body' === r
                      ? e.body
                      : 'document' === r
                      ? e
                      : 'window' === r
                      ? t
                      : n;
                  },
                  F: function (t, e, u, o, f, c, a, s) {
                    var l = e,
                      v = t,
                      p = r.get(t);
                    if (
                      (p && p[l] && p[l](),
                      'string' == typeof c
                        ? (v = i.Et(t, c))
                        : 'object' == typeof c
                        ? (v = c)
                        : (s = e.split(':')).length > 1 &&
                          ((v = i.Et(t, s[0])), (e = s[1])),
                      v)
                    ) {
                      var d = u;
                      (s = e.split('.')).length > 1 &&
                        ((e = s[0]),
                        (d = function (n) {
                          n.keyCode === J[s[1]] && u(n);
                        })),
                        (a = i.jt ? { capture: !!o, passive: !!f } : !!o),
                        n.Mt(v, e, d, a),
                        p || r.set(t, (p = {})),
                        (p[l] = function () {
                          v && n.$t(v, e, d, a), (p[l] = null);
                        });
                    }
                  },
                  z: function (n, t) {
                    var e = r.get(n);
                    e &&
                      (t
                        ? e[t] && e[t]()
                        : Object.keys(e).forEach(function (n) {
                            e[n] && e[n]();
                          }));
                  },
                  En: function (n, t) {
                    return n.attachShadow(t);
                  },
                };
              (i.j = !!i.In.documentElement.attachShadow),
                t.location.search.indexOf('shadow=false') > 0 && (i.j = !1),
                'function' != typeof t.CustomEvent &&
                  ((t.CustomEvent = function (n, t, r) {
                    return (
                      (r = e.createEvent('CustomEvent')).initCustomEvent(
                        n,
                        t.bubbles,
                        t.cancelable,
                        t.detail,
                      ),
                      r
                    );
                  }),
                  (t.CustomEvent.prototype = t.Event.prototype)),
                (i.xt = function (n, e, r) {
                  return n && n.dispatchEvent(new t.CustomEvent(e, r));
                });
              try {
                t.addEventListener(
                  'e',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get: function () {
                      return (i.jt = !0);
                    },
                  }),
                );
              } catch (n) {}
              return (
                (i.un = function (n, t) {
                  return (t = i.rn(n)) && 11 === i.cn(t) ? t.host : t;
                }),
                i
              );
            })(O, e, r);
          E.j,
            (t.isServer = t.isPrerender = !(t.isClient = !0)),
            (t.window = e),
            (t.location = e.location),
            (t.document = r),
            (t.resourcesUrl = t.publicPath = u),
            (t.enableListener = function (n, t, e, r, i) {
              return (function u(n, t, e, r, i, o) {
                if (t) {
                  var f = n.d.get(t),
                    c = n.y(f);
                  if (c && c.dn)
                    if (r) {
                      var a = c.dn.find(function (n) {
                        return n.e === e;
                      });
                      a &&
                        n.O.F(
                          f,
                          e,
                          function (n) {
                            return t[a.r](n);
                          },
                          a.o,
                          void 0 === o ? a.u : !!o,
                          i,
                        );
                    } else n.O.z(f, e);
                }
              })(R, n, t, e, r, i);
            }),
            (t.emit = function (n, e, r) {
              return E.xt(n, t.eventNameFn ? t.eventNameFn(e) : e, r);
            }),
            (O.h = v),
            (O.Context = t);
          var P =
              (e['s-defined'] =
              e.$definedCmps =
                e['s-defined'] || e.$definedCmps || {}),
            W = 0,
            R = {
              O: E,
              Ct: s,
              g: t.emit,
              W: f,
              y: function (n) {
                return w[E.in(n)];
              },
              R: function (n) {
                return t[n];
              },
              isClient: !0,
              Sn: function (n) {
                return !(!P[E.in(n)] && !R.y(n));
              },
              k: function (n, t, e) {},
              Pn: function () {
                return n + W++;
              },
              I: function (n) {
                return (function t(n, e, r) {
                  return {
                    create: T(n, e, r, 'create'),
                    componentOnReady: T(n, e, r, 'componentOnReady'),
                  };
                })(E, j, n);
              },
              queue: (t.queue = (function L(n, t) {
                function e(n) {
                  for (var t = 0; t < n.length; t++)
                    try {
                      n[t]();
                    } catch (n) {}
                  n.length = 0;
                }
                function r(n, t) {
                  for (var e = 0; e < n.length && u() < t; )
                    try {
                      n[e++]();
                    } catch (n) {}
                  e === n.length ? (n.length = 0) : 0 !== e && n.splice(0, e);
                }
                function i() {
                  l++, e(c);
                  var t = u() + 7 * Math.ceil(l * (1 / 22));
                  r(a, t),
                    r(s, t),
                    a.length > 0 && (s.push.apply(s, a), (a.length = 0)),
                    (v = c.length + a.length + s.length > 0)
                      ? n.raf(i)
                      : (l = 0);
                }
                var u = function () {
                    return t.performance.now();
                  },
                  o = Promise.resolve(),
                  f = [],
                  c = [],
                  a = [],
                  s = [],
                  l = 0,
                  v = !1;
                return (
                  n.raf || (n.raf = t.requestAnimationFrame.bind(t)),
                  {
                    tick: function (n) {
                      f.push(n),
                        1 === f.length &&
                          o.then(function () {
                            return e(f);
                          });
                    },
                    read: function (t) {
                      c.push(t), v || ((v = !0), n.raf(i));
                    },
                    write: function (t) {
                      a.push(t), v || ((v = !0), n.raf(i));
                    },
                  }
                );
              })(O, e)),
              An: function I(n, t, e) {
                var r = 'string' == typeof n.$n ? n.$n : n.$n[t.mode];
                l(r, e)
                  ? h(R, t)
                  : (k.push([
                      void 0,
                      [r],
                      function () {
                        h(R, t);
                      },
                    ]),
                    f && q
                      ? q.push(function () {
                          return y(n, r, e);
                        })
                      : y(n, r, e));
              },
              f: new WeakMap(),
              Nt: new WeakMap(),
              Nn: new WeakMap(),
              Cn: new WeakMap(),
              Wn: new WeakMap(),
              d: new WeakMap(),
              M: new WeakMap(),
              p: new WeakMap(),
              v: new WeakMap(),
              s: new WeakMap(),
              Rn: new WeakMap(),
              w: new WeakMap(),
              S: new WeakMap(),
              m: new WeakMap(),
            };
          R.render = x(R, E);
          var _ = E.In.documentElement;
          (_['s-ld'] = []),
            (_['s-rn'] = !0),
            (_['s-init'] = function () {
              R.Wn.set(_, (O.loaded = R.l = !0)),
                E.xt(e, 'appload', { detail: { namespace: n } });
            }),
            (function D(n, t, e) {
              var r,
                i,
                u,
                o,
                f,
                c,
                a = e.querySelectorAll('[' + K + ']'),
                s = a.length;
              if (s > 0)
                for (n.Wn.set(e, !0), o = 0; o < s; o++)
                  for (
                    r = a[o],
                      i = t.an(r, K),
                      (u = {}).vtag = t.in((u.c = r)),
                      n.S.set(r, u),
                      f = 0,
                      c = r.childNodes.length;
                    f < c;
                    f++
                  )
                    N(t, r.childNodes[f], u, i, !0);
            })(R, E, _),
            (O.loadBundle = b);
          var q = [];
          f &&
            f.ht().then(function () {
              for (; q.length; ) q.shift()();
              q = null;
            }),
            (R.x = function (n, t, e, r) {
              (function u(n, t, e, r) {
                var u = e.encapsulation,
                  o = 2 === u || (1 === u && !n.O.j),
                  f = e.t + r.mode,
                  c = e[f];
                if (
                  (o && (r['s-sc'] = i(e, r.mode)),
                  c || ((c = e[(f = e.t + X)]), o && (r['s-sc'] = i(e))),
                  c)
                ) {
                  var a = t.In.head;
                  if (t.j)
                    if (1 === u) a = r.shadowRoot;
                    else
                      for (var s = r; (s = t.rn(s)); )
                        if (s.host && s.host.shadowRoot) {
                          a = s.host.shadowRoot;
                          break;
                        }
                  var l = n.Nt.get(a);
                  if ((l || n.Nt.set(a, (l = {})), !l[f])) {
                    var v = void 0;
                    if (
                      (n.W
                        ? (v = n.W.gt(r, f, c))
                        : (((v = t.X('style')).innerHTML = c), (l[f] = !0)),
                      v)
                    ) {
                      t.C(v, 'data-style-tag', e.t),
                        r.mode && t.C(v, 'data-style-mode', e.t),
                        r['s-sc'] && t.C(v, 'data-style-scoped', 'true');
                      var p = a.querySelectorAll('[data-styles]');
                      t.en(
                        a,
                        v,
                        (p.length && p[p.length - 1].nextSibling) ||
                          a.firstChild,
                      );
                    }
                  }
                }
              })(n, t, e, r);
            }),
            (function U(n, t, e, r) {
              var i = (e.Pt = e.Pt || {});
              return (
                (i.St = i.St || []),
                i.St.push(
                  (function u(n, t, e) {
                    return {
                      namespace: t,
                      Wt: function (n) {
                        return n && n.tagName
                          ? Promise.all([
                              S(e, n.tagName),
                              (function t(n, e) {
                                return Promise.resolve(n.p.get(e));
                              })(e, n),
                            ]).then(function (n) {
                              return n[0] && n[1]
                                ? { At: n[0], Tt: n[1] }
                                : null;
                            })
                          : Promise.resolve(null);
                      },
                      Rt: function (n) {
                        return S(e, n);
                      },
                      Lt: function () {
                        return Promise.all(
                          n.components.map(function (n) {
                            return S(e, n[0]);
                          }),
                        ).then(function (n) {
                          return n.filter(function (n) {
                            return n;
                          });
                        });
                      },
                    };
                  })(n, t, r),
                ),
                i.Wt ||
                  (i.Wt = function (n) {
                    return Promise.all(
                      i.St.map(function (t) {
                        return t.Wt(n);
                      }),
                    ).then(function (n) {
                      return n.find(function (n) {
                        return !!n;
                      });
                    });
                  }),
                i.Lt ||
                  (i.Lt = function () {
                    var n = [];
                    return (
                      i.St.forEach(function (t) {
                        n.push(t.Lt());
                      }),
                      Promise.all(n).then(function (n) {
                        var t = [];
                        return (
                          n.forEach(function (n) {
                            n.forEach(function (n) {
                              t.push(n);
                            });
                          }),
                          t
                        );
                      })
                    );
                  }),
                i
              );
            })(O, n, e, R),
            (O.components || [])
              .map(function (n) {
                var t = (function e(n, t, r) {
                  var i = { t: n[0], P: { color: { q: 'color' } } };
                  i.$n = n[1];
                  var u = n[3];
                  if (u)
                    for (t = 0; t < u.length; t++)
                      (r = u[t]),
                        (i.P[r[0]] = {
                          Ln: r[1],
                          D: !!r[2],
                          q: 'string' == typeof r[3] ? r[3] : r[3] ? r[0] : 0,
                          U: r[4],
                        });
                  return (
                    (i.encapsulation = n[4]), n[5] && (i.dn = n[5].map(a)), i
                  );
                })(n);
                return (w[t.t] = t);
              })
              .forEach(function (n) {
                function t(n) {
                  return HTMLElement.call(this, n);
                }
                (t.prototype = Object.create(HTMLElement.prototype, {
                  constructor: { value: t, configurable: !0 },
                })),
                  s(n, t);
              }),
            (function B(n, t, e, r, i, u) {
              if (
                ((t.componentOnReady = function (t, e) {
                  if (!t.nodeName.includes('-')) return e(null), !1;
                  var r = n.y(t);
                  if (r)
                    if (n.Wn.has(t)) e(t);
                    else {
                      var i = n.Rn.get(t) || [];
                      i.push(e), n.Rn.set(t, i);
                    }
                  return !!r;
                }),
                i)
              ) {
                for (u = i.length - 1; u >= 0; u--)
                  t.componentOnReady(i[u][0], i[u][1]) && i.splice(u, 1);
                for (u = 0; u < r.length; u++)
                  if (!e[r[u]].componentOnReady) return;
                for (u = 0; u < i.length; u++) i[u][1](null);
                i.length = 0;
              }
            })(R, O, e, e['s-apps'], e['s-cr']),
            (O.initialized = !0);
        })(r, e, n, t, resourcesUrl, hydratedCssClass, Cn);
    })(window, document, Context, namespace);
})({}, 'ionicons', 'hydrated');
