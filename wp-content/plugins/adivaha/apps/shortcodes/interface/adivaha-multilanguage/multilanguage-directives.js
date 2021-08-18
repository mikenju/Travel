jQuery(document).ready(function() {
    var siteUrl = jQuery("#adivaha_site_url").val();
    var pageURL = jQuery(location).attr("href");
    var pagename = jQuery('#pagename').val();

    var activatedLanguage = jQuery('#activatedLanguage').val();
    jQuery('.langcontainer').html(activatedLanguage);
    jQuery('.langcontainer').addClass("fa");
    var pageURL = jQuery(location).attr("href");

    jQuery(".language").click(function(event) {
        event.preventDefault();
        var language = jQuery(this).find("a").attr("rel");
        setLanguage(language);

        if (pageURL.indexOf('language=') != -1) {
            var newUrl = pageURL.replace(/language(.+?)\&/, 'language=' + language + '&');
            newUrl = newUrl.replace('&&', '&');
        } else if (pageURL.indexOf('ln=') != -1) {
            var newUrl = pageURL.replace(/ln(.+?)\&/, 'ln=' + language + '&');
        } else {
            var newUrl = pageURL;
        }

        var newUrlArr = newUrl.split('?');
        var hashArr = newUrlArr[0].split('#');
        var hashPart = hashArr[1];
        /*== TP FLIGHT ==*/
        if ((jQuery("#is_TPFlight").length == 1) && (jQuery("#is_TPFlight").val() == 'Yes') && (pagename != '')) {
            var URL = siteUrl + '/' + language + '/' + pagename + '/#' + hashPart + '?currency=' + jQuery("#adh_currency").val() + '&locale=' + language;
            window.location.href = URL;
            /*window.location.reload(true);*/
        } else if (typeof newUrlArr[1] != 'undefined' && newUrlArr[1] != '') { /*If question mark exist*/
            if (typeof hashPart != 'undefined' && hashPart != '') {
                hashPart.replace('//', '/');
                window.location.href = siteUrl + '/' + language + '/' + pagename + '/#' + hashPart + '?' + newUrlArr[1];
            } else {
                window.location.href = siteUrl + '/' + language + '/' + pagename + '/?' + newUrlArr[1];
            }
        } else {
            if (language != default_language) {
                window.location.href = siteUrl + '/' + language + '/' + pagename;
            } else {
                window.location.href = siteUrl + '/' + pagename;
            }
        }

    });

    /*== On page load ==*/

    var language = jQuery("#adh_language").val();
    setLanguage(language);
    var languag_en_re = ('SiteLang-' + language);

    function setLanguage(language) {
        jQuery("#adh_language").val(language);
        jQuery('.langcontainer>a').css({
            'background-image': 'url(' + siteUrl + '/wp-content/plugins/sitepress-multilingual-cms/res/flags/' + language + '.png)',
        });
        jQuery('.langcontainer>a').text(language.toUpperCase());
    };
    /*
    var language = jQuery("#adh_language").val();	
    setLanguage(language);
    var languag_en_re = ('SiteLang-'+language);
    function setLanguage(language){
    jQuery("#adh_language").val(language);
    jQuery('.langcontainer>a').text(language.toUpperCase());	
    };*/

});