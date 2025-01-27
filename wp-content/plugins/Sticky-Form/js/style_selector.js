function getCookie(c_name) {
    "use strict";
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    "use strict";
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + ";domain=;path=/";
}
jQuery.fn.removeClassPrefix = function(prefix) {
    "use strict";
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = jQuery.trim(classes.join(" "));
    });
    return this;
};
jQuery(document).ready(function($) {
    "use strict";
    $(".style-selector select option[selected]").prop("selected", true);
    $(".style-selector select input[checked]").prop("checked", true);
    $(".style-selector-icon").click(function() {
        $(this).parent().toggleClass("opened");
        setCookie("re_style_selector", ($(this).parent().hasClass("opened") ? "opened" : ""));
    });
    $(".style-selector-content ul.for-main-color a").click(function(event, param) {
        event.preventDefault();
        $(".style-selector-content ul.for-main-color li").removeClass("selected");
        $(this).parent().addClass("selected");
        setCookie("re_main_color", $(this).data("color"));
        location.reload();
    });
    $(".style-selector-content #overlay").change(function() {
        if ($(this).is(":checked")) {
            if ($("body").is('[class*="image-"]')) {
                $("body").addClass("overlay");
                setCookie("re_image_overlay", "overlay");
            } else
                setCookie("re_image_overlay", "");
        } else {
            $("body").removeClass("overlay");
            setCookie("re_image_overlay", "");
        }
    });
    $(".style-selector [name='layout_style']").change(function() {
        if ($(this).val() == "boxed") {
            $(".site-container").addClass("boxed");
            setCookie("re_layout", "boxed");
            $(".style-selector-content ul.layout-chooser:not('.for-main-color') .selected a").trigger("click", [1]);
        } else {
            $(".site-container").removeClass("boxed");
            setCookie("re_layout", "");
            $("body").removeClassPrefix("image");
            $("body").removeClassPrefix("pattern");
            $("body").removeClass("overlay");
        }
    });
    $(".style-selector [name='menu_type']").change(function() {
        if ($(this).val() == "sticky") {
            $(".header-container").addClass("sticky");
            setCookie("re_menu_type", "sticky");
            if (menu_position == null) menu_position = $(".header-container").offset().top;
            $(document).scroll();
        } else {
            $(".header-container").removeClass("sticky");
            setCookie("re_menu_type", "");
        }
    });
    $(".style-selector [name='style_selector_direction']").change(function() {
        setCookie("re_direction", $(this).val());
        location.reload();
    });
    $(".style-selector [name='service_provider']").change(function() {
        if ($(this).val() != "") {
            location = $(this).val();
        }
    });
});