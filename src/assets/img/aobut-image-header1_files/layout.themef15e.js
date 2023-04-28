!(function(e) {
    function t(t) {
        for (var o, l, r = t[0], s = t[1], d = t[2], c = 0, f = []; c < r.length; c++) (l = r[c]), n[l] && f.push(n[l][0]), (n[l] = 0);
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        for (u && u(t); f.length; ) f.shift()();
        return i.push.apply(i, d || []), a();
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], o = !0, r = 1; r < a.length; r++) {
                var s = a[r];
                0 !== n[s] && (o = !1);
            }
            o && (i.splice(t--, 1), (e = l((l.s = a[0]))));
        }
        return e;
    }
    var o = {},
        n = {
            8: 0
        },
        i = [];

    function l(t) {
        if (o[t]) return o[t].exports;
        var a = (o[t] = {
            i: t,
            l: !1,
            exports: {}
        });
        return e[t].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
    }
    (l.m = e),
        (l.c = o),
        (l.d = function(e, t, a) {
            l.o(e, t) ||
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a
                });
        }),
        (l.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', {
                    value: !0
                });
        }),
        (l.t = function(e, t) {
            if ((1 & t && (e = l(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (
                (l.r(a),
                Object.defineProperty(a, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var o in e)
                    l.d(
                        a,
                        o,
                        function(t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return a;
        }),
        (l.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return l.d(t, 'a', t), t;
        }),
        (l.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (l.p = '');
    var r = (window.webpackJsonp = window.webpackJsonp || []),
        s = r.push.bind(r);
    (r.push = t), (r = r.slice());
    for (var d = 0; d < r.length; d++) t(r[d]);
    var u = s;
    i.push([322, 0]), a();
})({
    153: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        }),
            a(78),
            (t.default = function(e, t, a, o, n) {
                if (e.length > 0) {
                    var i = e.find('.slider__slides'),
                        l = !0;
                    void 0 == t && (t = !1),
                        void 0 == a && (a = !1),
                        void 0 == o && (o = 1),
                        void 0 == n && (n = !0),
                        o > 1 && (l = !1),
                        i.slick({
                            dots: t,
                            arrows: a,
                            slidesToShow: o,
                            slidesToScroll: 1,
                            speed: 1e3,
                            centerMode: !1,
                            variableWidth: !1,
                            adaptiveHeight: !1,
                            fade: l,
                            autoplay: n,
                            autoplaySpeed: 5e3,
                            responsive: [
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        });
                }
            });
    },
    301: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        }),
            a(78),
            (t.default = function(e, t, a, o) {
                if (e.length > 0) {
                    var n = e.find('.slider__slides'),
                        i = !0;
                    void 0 == t && (t = !1),
                        void 0 == a && (a = !1),
                        void 0 == o && (o = 1),
                        o > 1 && (i = !1),
                        n.slick({
                            dots: t,
                            arrows: a,
                            slidesToShow: o,
                            slidesToScroll: 1,
                            speed: 1e3,
                            centerMode: !1,
                            variableWidth: !1,
                            adaptiveHeight: !1,
                            fade: i,
                            autoplay: !0,
                            autoplaySpeed: 5e3,
                            responsive: [
                                {
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        });
                }
            });
    },
    302: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        }),
            a(78),
            (t.default = function(e, t, a) {
                var o = e.find('.slider__slides');
                void 0 == t && (t = !1),
                    void 0 == a && (a = !1),
                    o.slick({
                        dots: t,
                        arrows: a,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        speed: 1e3,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !1,
                        autoplay: !1,
                        autoplaySpeed: 5e3,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2
                                }
                            }
                        ]
                    });
            });
    },
    303: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = (function(e) {
            return e && e.__esModule
                ? e
                : {
                      default: e
                  };
        })(a(35));
        a(78),
            (t.default = function(e, t) {
                var a = e.find('.slider__slides');
                void 0 == t && (t = !1),
                    a.slick({
                        dots: !0,
                        arrows: t,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1e3,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !0,
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        customPaging: function(e, t) {
                            var a = (0, o.default)(e.$slides[t])
                                .find('.slider__slide')
                                .data('thumb');
                            return (
                                '<a class="color-' +
                                (0, o.default)(e.$slides[t])
                                    .find('.slider__slide')
                                    .data('alt')
                                    .toLowerCase() +
                                '" style="background-image: url(' +
                                a +
                                '); "></a>'
                            );
                        },
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: !0,
                                    fade: !1
                                }
                            }
                        ]
                    });
            });
    },
    304: function(e, t, a) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = (function(e) {
            return e && e.__esModule
                ? e
                : {
                      default: e
                  };
        })(a(35));
        a(78),
            (t.default = function(e, t) {
                var a = e.find('.slider__slides');
                void 0 == t && (t = !1),
                    a.slick({
                        dots: !0,
                        arrows: t,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1e3,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !0,
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        customPaging: function(e, t) {
                            (0, o.default)(e.$slides[t])
                                .find('.slider__slide-image')
                                .html(
                                    '<span class="page_num"><span class="current__slide">' +
                                        (t + 1) +
                                        '</span>/<span>' +
                                        (0, o.default)(e.$slides).length +
                                        '</span></span>'
                                );
                        },
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: "unslick"
                            }
                        ]
                    });
            });
    },
    314: function(e, t, a) {
        e.exports = a.p + '../assets/styles/theme.scss.liquid';
    },
    315: function(e, t) {},
    322: function(e, t, a) {
        'use strict';
        a(321), a(320), a(319), a(318), a(73), a(317), a(315), a(314);
        var o = p(a(35)),
            n = a(313),
            i = a(312),
            l = a(310),
            r = p(a(309)),
            s = p(a(304)),
            d = p(a(303)),
            u = p(a(302)),
            c = p(a(301)),
            f = p(a(153));

        function p(e) {
            return e && e.__esModule
                ? e
                : {
                      default: e
                  };
        }
        a(300);
        var m = (0, o.default)(document),
            h = (0, o.default)(window),
            g = 0,
            v = 0.9 * h.height() + g,
            _ = 0,
            w = '';
        (window.slate = window.slate || {}), (window.theme = window.theme || {});
        var b = !1;

        function k(e) {
            var t = e.find('input[name="customer[email]"]'),
                a = e.find('input[name="customer[email_confirmation]"]');
            t.val() != a.val() &&
                t
                    .add(a)
                    .closest('.form__row')
                    .addClass('form__row--error');
        }

        function y(e) {
            var t = e.find('input[name="customer[password]"]'),
                a = e.find('input[name="customer[password_confirmation]"]');
            (t.val().length < 8 || a.val().length < 8 || t.val() != a.val()) &&
                t
                    .add(a)
                    .closest('.form__row')
                    .addClass('form__row--error');
        }

        function C(e) {
            var t = e.closest('.form__row');
            0 == e.val().length ? t.addClass('form__row--error') : t.removeClass('form__row--error');
        }

        function x(e, t) {
            if ((e = e || location).hash && (location.pathname == e.pathname || location.hostname == e.hostname)) {
                var a = (0, o.default)(e.hash);
                if (a.length)
                    return (
                        void 0 == t && (t = a.offset().top - (0, o.default)('.header').height()),
                        (0, o.default)('html,body').animate(
                            {
                                scrollTop: t
                            },
                            1e3
                        ),
                        !1
                    );
            }
        }

        function T() {
            (0, o.default)('.menu-item-has-children').each(function() {
                (0, o.default)(this).addClass('menu-item-closed');
            });
        }
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
        ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                navigator.userAgent.substr(0, 4)
            )) &&
            (b = !0),
            (0, o.default)(document).ready(function() {
                if (
                    ('#' !== window.location.hash && (0, n.pageLinkFocus)((0, o.default)(window.location.hash)),
                    (0, o.default)('.in-page-link').on('click', function(e) {
                        (0, n.pageLinkFocus)((0, o.default)(e.currentTarget.hash));
                    }),
                    (0, l.wrapTable)({
                        $tables: (0, o.default)('.rte table'),
                        tableWrapperClass: 'rte__table-wrapper'
                    }),
                    (0, l.wrapIframe)({
                        $iframes: (0, o.default)('.rte iframe[src*="youtube.com/embed"],.rte iframe[src*="player.vimeo"]'),
                        iframeWrapperClass: 'rte__video-wrapper'
                    }),
                    (0, i.cookiesEnabled)() &&
                        (document.documentElement.className = document.documentElement.className.replace(
                            'supports-no-cookies',
                            'supports-cookies'
                        )),
                    (0, o.default)('.list-collections').length)
                ) {
                    var e = document.querySelector('.list-collections'),
                        t = new r.default(e);
                    e && t.layout();
                }
                if (
                    (b && (0, o.default)('.nav-lang').toggleClass('is-touch'),
                    (0, o.default)('#RecoverPassword, .link-popup').each(function() {
                        (0, o.default)(this).magnificPopup({
                            type: 'inline',
                            preloader: !1
                        });
                    }),
                    (0, o.default)('.popup-trigger, a[href="#popup-menu"]').each(function() {
                        (0, o.default)(this).magnificPopup({
                            type: 'inline',
                            mainClass: 'mfp-light',
                            preloader: !1
                        });
                    }),
                    (0, o.default)(document).on('click', '.popup__inner .btn-close', function(e) {
                        e.preventDefault(), o.default.magnificPopup.close();
                    }),
                    (0, o.default)('.popup__inner .form__error').length)
                ) {
                    var a = (0, o.default)('.popup__inner .form__error')
                        .closest('.popup__inner')
                        .attr('id');
                    (0, o.default)('a[href="#' + a + '"]').trigger('click');
                }
                if (
                    ((0, o.default)('.section-recently-viewed').length &&
                        (_ = Number((0, o.default)('.section-recently-viewed').data('products-number'))),
                    (0, o.default)('.product--single').length)
                ) {
                    var p = (0, o.default)('.product--single').data('handle');
                    if (Cookies.get('product_handle')) {
                        var S = Cookies.get('product_handle').split(';'),
                            j = '';
                        S.length > _ && (S = S.splice(0, _ - 1));
                        for (var P = 0; P < S.length; P++) S[P] != p && (j += S[P] + ';');
                        Cookies.set('product_handle', p + ';' + j);
                    } else Cookies.set('product_handle', p);
                }
                if (Cookies.get('product_handle')) {
                    (0, o.default)('.section-recently-viewed').length &&
                        (function e(t, a) {
                            var n = a[t];

                            o.default.ajax({
                                type: 'GET',
                                url: '/products/' + n + '.js',
                                dataType: 'json',
                                success: function(n) {
                                    var i = n.featured_image,
                                        l =
                                            '<div class="slider__slide product loading"><a href="' +
                                            n.url +
                                            '"><span class="product__media" style="background-image: url(' +
                                            i +
                                            '); "></span><h4 class="product__title">' +
                                            n.title +
                                            '</h4></a></div>';
                                    (0, o.default)('.section-recently-viewed .slider__slides').append(l),
                                        (t += 1) <= _ ? e(t, a) : (t = 0),
                                        (0, o.default)('.loading').removeClass('loading');

                                    if (t > 1 && a[t].length == 0) {
                                        (0, c.default)((0, o.default)('.slider.products'), !1, !0, 5);
                                    }
                                },
                                error: function(e) {
                                    console.log(e);
                                }
                            });
                        })(0, Cookies.get('product_handle').split(';'));
                }
                (0, f.default)((0, o.default)('.slider-team'), !0, !0, 1),
                    (0, f.default)((0, o.default)('.slider-images'), !0, !0, 1, !1),
                    (0, f.default)((0, o.default)('.slider-articles'), !1, !0, 2),
                    (0, u.default)((0, o.default)('.section-products-in-use .slider-products'), !1, !0),
                    (0, d.default)((0, o.default)('.slider-product'), !0),
                    (0, s.default)((0, o.default)('.slider-product-details'), !0),
                    m
                        .on('change', '.radio-holder input, .swatch__element input', function() {
                            !(function(e) {
                                var t = (0, o.default)('#product-select'),
                                    a = '',
                                    n = e.closest('form'),
                                    i = n.find('.btn-submit'),
                                    l = n.find('.btn-sold-out'),
                                    r = n.find('.swatch'),
                                    s = n.find('.form_hint'),
                                    d = s.find('.title'),
                                    u = s.find('.sku'),
                                    c = n.find('.price'),
                                    f = n.find('.is_available');
                                (0, o.default)('.radio-holder input:checked').each(function() {
                                    var e = (0, o.default)(this),
                                        t = e.data('index'),
                                        n = e.val();
                                    a += '[data-option-' + t + '="' + n + '"]';
                                });
                                var p = t.find(a).val();
                                t.val(p);
                                var m = (0, o.default)('#product-select option:selected'),
                                    h = m.data('available'),
                                    g = m.data('price'),
                                    v = m.data('selector'),
                                    _ = '',
                                    w = m.data('sku');
                                f.toggleClass('hide', h),
                                    i.toggleClass('hide', !h),
                                    l.toggleClass('hide', h),
                                    u.html(w),
                                    c.html(g),
                                    (0, o.default)('.radio-holder input:checked').each(function() {
                                        _ =
                                            _ +
                                            (0, o.default)(this)
                                                .next('label')
                                                .html()
                                                .toLowerCase() +
                                            ' / ';
                                    }),
                                    d.html(_.substring(0, _.length - 3)),
                                    r && (0, o.default)('a.color-' + v).trigger('click');
                            })((0, o.default)(this));
                        })
                        .on('click', '.page-nav a, a.inner_link, .footer__nav li.menu-item-has-children:last-child .sub-menu li:first-child a', function(e) {
                            x(this);
                        })
                        .on('click', '.btn-scroll-top, .link-top', function(e) {
                            e.preventDefault(), x(this, 0);
                        })
                        .on('click', '.btn-close, .address-new-toggle, .address-edit-toggle', function(e) {
                            e.preventDefault(), o.default.magnificPopup.close();
                        })
                        .on('change', 'input[name="newsletter_field"]', function(e) {
                            (0, o.default)('#field-receive-html-mail-text-mail:checked').length
                                ? (0, o.default)('#field-newsletter').val('newsletter')
                                : (0, o.default)('#field-newsletter').val('');
                        })
                        .on('touchend', '.is-touch', function(e) {
                            (0, o.default)(this).addClass('expanded');
                        })
                        .on('focus', '.form-subscribe input', function(e) {
                            var t = (0, o.default)(this).attr('id');
                            (0, o.default)('label[for="' + t + '"]').hide();
                        })
                        .on('blur', '.form-subscribe input', function(e) {
                            var t = (0, o.default)(this).attr('id');
                            0 == (0, o.default)(this).val().length && (0, o.default)('label[for="' + t + '"]').show();
                        })
                        .on('click', '.btn-load-more', function(e) {
                            e.preventDefault(),
                                (function(e, t, a) {
                                    'Function' == typeof callback && callback();
                                    var n = (0, o.default)(e);
                                    if (!n.length) return !1;
                                    o.default
                                        .ajax({
                                            url: n.attr('href')
                                        })
                                        .done(function(i) {
                                            var l = (0, o.default)(i)
                                                    .find(a)
                                                    .addClass('loading'),
                                                r = (0, o.default)(i).find(e);
                                            l.appendTo((0, o.default)(t)),
                                                console.log((0, o.default)(a).length % 3),
                                                (0, o.default)(a).length % 3 == 2
                                                    ? (0, o.default)(t).removeClass('hide-1 hide-2')
                                                    : (0, o.default)(a).length % 3 == 1
                                                        ? (0, o.default)(t)
                                                              .addClass('hide-2')
                                                              .removeClass('hide-1')
                                                        : (0, o.default)(t)
                                                              .addClass('hide-1')
                                                              .removeClass('hide-2'),
                                                r.length > 0
                                                    ? n.attr('href', r.attr('href'))
                                                    : (n.remove(), (0, o.default)(t).removeClass('hide-1 hide-2')),
                                                setTimeout(function() {
                                                    (0, o.default)('.loading').removeClass('loading');
                                                });
                                        })
                                        .fail(function(e, t, a) {
                                            console.log('error');
                                        });
                                })('.btn-load-more', (0, o.default)(this).data('container'), (0, o.default)(this).data('content'));
                        })
                        .on('submit', '.product-single form', function(e) {
                            e.preventDefault();
                            var t = (0, o.default)(this),
                                a = t.find('.form__popup');
                            a.toggleClass('popup-bottom', a.offset().top - g < 300),
                                o.default.ajax({
                                    type: 'POST',
                                    url: '/cart/add.js',
                                    dataType: 'json',
                                    data: t.serialize(),
                                    success: function(e) {
                                        a.toggleClass('popup-expanded');
                                    },
                                    error: function(e) {
                                        console.log('error');
                                    }
                                });
                        })
                        .on('click', '.close-popup', function(e) {
                            e.preventDefault(), (0, o.default)('.popup-expanded').removeClass('popup-expanded');
                        })
                        .on('click', '.nav-trigger', function(e) {
                            e.preventDefault(),
                                (0, o.default)(this)
                                    .closest('.header')
                                    .toggleClass('nav-expanded'),
                                (0, o.default)('.nav-lang').removeClass('expanded');
                        })
                        .on('scroll orientationchange', function() {
                            (g = h.scrollTop()),
                                (0, o.default)('.section-guide').length &&
                                    (0, o.default)('.row').each(function() {
                                        var e = g + (0, o.default)('.header').height() + 10,
                                            t = (0, o.default)(this).offset().top;
                                        t + (0, o.default)(this).height() > e &&
                                            t <= e &&
                                            ((function(e) {
                                                var t = e.replace(/^.*#/, ''),
                                                    a = document.getElementById(t);
                                                (a.id = t + '-tmp'), (window.location.hash = e), (a.id = t);
                                            })('#' + (0, o.default)(this).attr('id')),
                                            (0, o.default)(this)
                                                .addClass('active')
                                                .siblings()
                                                .removeClass('active'));
                                    });
                        })
                        .on('scroll', function() {
                            (g = h.scrollTop()), (0, o.default)('.btn-scroll-top').toggleClass('shown', g > h.height());
                        })
                        .on('click', '.menu-item-closed > a', function(e) {
                            e.preventDefault(),
                                (0, o.default)('.menu-item-has-children').each(function() {
                                    (0, o.default)(this).addClass('menu-item-closed');
                                }),
                                (0, o.default)(this)
                                    .parent()
                                    .removeClass('menu-item-closed'),
                                (0, o.default)('.form-expanded').removeClass('form-expanded');
                        })
                        .on('click', '.nav-trigger', function(e) {
                            e.preventDefault(),
                                (0, o.default)('.wrapper').toggleClass('nav-expanded'),
                                (function(e) {
                                    e.each(function(t) {
                                        var a = e.length,
                                            n = (0, o.default)(this);
                                        'reversed' == w
                                            ? setTimeout(function() {
                                                  n.toggleClass('animated');
                                              }, 50 * (a - t))
                                            : setTimeout(function() {
                                                  n.toggleClass('animated');
                                              }, 50 * t);
                                    }),
                                        (w = 'reversed' == w ? '' : 'reversed');
                                })(
                                    (0, o.default)(
                                        '.nav-wrapper .nav .menu > li > a, .nav-wrapper .nav-access a, .nav-wrapper .form-search, .nav-wrapper .nav-lang'
                                    )
                                ),
                                T();
                        })
                        .on('click', '.menu-trigger, .collection-popup .btn-close', function(e) {
                            e.preventDefault(),
                                (0, o.default)('body').toggleClass('popup-expanded'),
                                (0, o.default)('.collection-popup').fadeToggle();
                        })
                        .on('click', '.accordion__head', function(e) {
                            e.preventDefault(),
                                (function(e) {
                                    e.next()
                                        .slideToggle()
                                        .closest('.accordion__section')
                                        .toggleClass('expanded');
                                        //.siblings()
                                        //.removeClass('expanded')
                                        //.find('.accordion__body')
                                        //.slideUp();
                                })((0, o.default)(this));
                        })
                        .on('click', '.btn-search-trigger, .form-search .btn-close', function(e) {
                            e.preventDefault(), T(), (0, o.default)('.form-search').toggleClass('form-expanded');
                        })
                        .on('click', '.nav__label', function(e) {
                            e.preventDefault(),
                                (0, o.default)(this)
                                    .parent()
                                    .toggleClass('expanded');
                        })
                        .on('click', '.plus, .minus', function(e) {
                            !(function(e) {
                                var t = e.closest('.quantity'),
                                    a = t.find('span.qty'),
                                    o = t.find('input.qty'),
                                    n = parseInt(o.val()),
                                    i = parseInt(e.attr('step'));
                                (n > 0 || (0 == n && 1 == i)) && ((n += i), o.val(n).change(), a.html(n));
                            })((0, o.default)(this));
                        })
                        .on('change', '.section-cart input', function() {
							/*
                            !(function(e) {
                                var t = e.closest('form');
                                t.find('.form__popup'),
                                    o.default.ajax({
                                        type: 'POST',
                                        url: '/cart/update.js',
                                        dataType: 'json',
                                        data: t.serialize(),
                                        success: function(e) {
                                            location.reload();
                                        },
                                        error: function(e) {
                                            console.log('error');
                                        }
                                    });
                            })((0, o.default)(this));
							*/
                        })
                        // .on('submit', '#create_customer', function(e) {
                        //     var t = (0, o.default)(this);
                        //     t.find('.form__row--required input').each(function() {
                        //         C((0, o.default)(this));
                        //     }),
                        //         k(t),
                        //         y(t),
                        //         console.log(t.find('.form__row--error').length),
                        //         t.find('.form__row--error').length > 0 && e.preventDefault();
                        // })
                        .on('submit', '#contact_form', function(e) {
                            var t = (0, o.default)(this),
                                a = t.find('.form__row--required .form__controls > input'),
                                n = t.find('.form__row--required .form__controls > textarea'),
                                i = t.find('.form__row--required .list-checkboxes'),
                                l = t.find('.form__row--required .list-radios');
                            i.add(l).each(function() {
                                var e = (0, o.default)(this).closest('.form__row');
                                0 == (0, o.default)(this).find('input:checked').length
                                    ? e.addClass('form__row--error form__row--error-list')
                                    : e.removeClass('form__row--error form__row--error-list');
                            }),
                                a.add(n).each(function() {
                                    C((0, o.default)(this));
                                });
                            var r = t.find('input[name="contact[email]"]'),
                                s = t.find('input[name="contact[email_confirm]"]');
                            r.val() != s.val() &&
                                r
                                    .add(s)
                                    .closest('.form__row')
                                    .addClass('form__row--error'),
                                (0, o.default)(this).find('.form__row--error').length && e.preventDefault();
                        })
                        .on('submit', '#RecoverPasswordForm form', function(e) {
                            (0, o.default)(this)
                                .find('.form__row--required input')
                                .each(function() {
                                    C((0, o.default)(this));
                                }),
                                (0, o.default)(this).find('.form__row--error').length && e.preventDefault();
                        })
                        .on('blur', '#create_customer input:not(#field-company)', function(e) {
                            (0, o.default)('#create_customer'), C((0, o.default)(this));
                        })
                        .on('blur', '#create_customer input[name="customer[email_confirmation]"]', function(e) {
                            k((0, o.default)('#create_customer'));
                        })
                        .on('blur', '#create_customer input[name="customer[password_confirmation]"]', function(e) {
                            y((0, o.default)('#create_customer'));
                        }),
                    h
                        .on('load resize scroll', function() {
                            (g = h.scrollTop()),
                                (v = 0.9 * h.height() + g),
                                (function(e, t, a, n) {
                                    e.each(function(e) {
                                        var t = (0, o.default)(this),
                                            n = t.offset().top;
                                        (t.height(), n <= a) &&
                                            setTimeout(
                                                function(e) {
                                                    e.addClass('animated');
                                                },
                                                1 * e,
                                                (0, o.default)(this)
                                            );
                                    });
                                })((0, o.default)('.fadeInUp'), 0, v);
                        })
                        .on('load resize', function() {
                            (b || h.width() < 1025) && T();
                        });
            }),
            h.on('load', function() {
                (0, o.default)('.loader').fadeOut();
            });
    }
});