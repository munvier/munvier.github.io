(function() {
    var v = "1.7.1";
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var b = false;
        var c = document.createElement("script");
        c.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        c.onload = c.onreadystatechange = function() {
            if (!b && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                b = true;
                initMyBookmarklet()
            }
        };
        document.getElementsByTagName("head")[0].appendChild(c)
    } else {
        initMyBookmarklet()
    }

    function initMyBookmarklet() {
        (window.myBookmarklet = function() {
            var a = jQuery('<img src="//chart.googleapis.com/chart?chs=150x150&choe=UTF-8&cht=qr&chl=' + encodeURIComponent(window.location.href) + '"/>');
            
            a.click(function() {
                jQuery(this).fadeOut('fast', function() {
                    jQuery(this).remove()
                })
            });
            jQuery(window).scroll(function() {
                a.stop();
                a.css('top', (window.pageYOffset + 20) + "px")
            });
            a.css('position', "absolute");
            a.css('top', (window.pageYOffset + 20) + "px");
            a.css('left', (window.pageXOffset + 20) + "px");
            a.prependTo(jQuery('body'));
            a.hide();
            a.fadeIn()
        })()
    }
})();
