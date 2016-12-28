function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-chevron-up'
            });
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
})(jQuery);

/* Navbar
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include('js/jquery.rd-google-map.js');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                        styles: [{
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
                        }, {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
                        }, {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [{"visibility": "off"}]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{"color": "#000000"}, {"lightness": 20}]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
                        }, {
                            "featureType": "administrative.locality",
                            "elementType": "all",
                            "stylers": [{"saturation": "-2"}, {"visibility": "on"}]
                        }, {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{"color": "#000000"}, {"lightness": 20}]
                        }, {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{"color": "#000000"}, {"lightness": 21}]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{"color": "#000000"}, {"lightness": 17}]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{"color": "#000000"}, {"lightness": 18}]
                        }, {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{"color": "#000000"}, {"lightness": 16}]
                        }, {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{"color": "#000000"}, {"lightness": 19}]
                        }, {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{"color": "#050505"}, {"lightness": 17}]
                        }]
                    }
                );
            }
        });
    }
})
(jQuery);

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Contact Form
 ========================================================*/
;
(function ($) {
    var o = $('#contact-form');
    if (o.length > 0) {
        include('js/modal.js');
        include('js/TMForm.js');

        if ($('#contact-form .recaptcha').length > 0) {
            include('//www.google.com/recaptcha/api/js/recaptcha_ajax.js');
        }
    }
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Audio Js
 ========================================================*/
;
(function ($) {
    var o = $('audio');
    if (o.length > 0) {
        include('js/audiojs/audio.min.js');
        include('js/jquery.rd-audio.js');
        $(document).ready(function () {
            o.rdAudio({
                fixedBG: 'transparent',
                fixed: true,
                fixedClass: 'fixed-player',
                playlistClass: 'music-list'
            });
        });
    }
})(jQuery);

/* VIDE
 ========================================================*/
;
(function ($) {
    var o = $('.vide');
    if (o.length > 0) {
        include('js/jquery.vide.js');
    }
})(jQuery);

/* Parallax
 =============================================*/
;
(function ($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);