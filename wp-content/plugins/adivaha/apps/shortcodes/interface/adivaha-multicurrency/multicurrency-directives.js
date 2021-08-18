jQuery(document).ready(function() {

    /*
    var symbolArr = {'USD': '&#36;', 'EUR': '&#128;','RUB': '&#8359;','AUD': '&#36;','EUR': '&#128;','BRL': '&#x20a8;','CAD': '&#36;','CHF': '&#8355;','HKD': 'HK&#36;','IRD': 'Rp','INR': '&#x20B9;','NZD': 'NZ&#36;','PHP': '&#8359;','PLN': '&#8359;','SGD': 'S&#36;','THB': '&#x0E3F;','GBP': '&#163;','ZAR': '&#8359;','UAH': '&#8359;'};
    */
    var pagename = jQuery('#pagename').val();
    var activatedCurrency = jQuery('#activatedCurrency').val();
    jQuery('.currencycontainer').html(activatedCurrency);
    jQuery('.currencycontainer').addClass("fa");
    var pageURL = jQuery(location).attr("href");
    jQuery(".currency").click(function(event) {
        event.preventDefault();
        var currency = jQuery(this).find("a").attr("rel");
        setCurrency(currency);
        jQuery('.currencycontainer .sub-menu').hide();

        /*=== TP Hotel landing page first time beacuse first time its not taking hash url ===*/
        if (jQuery("#is_TPHotel").val() == 'Yes') {
            var prefix = 'adivaha_tp_hotel_';
            var child = document.getElementById(prefix + "children").value;
            var childAgeStr = '';
            if (child > 0) {
                childAgeStr = document.getElementById(prefix + "childAge").value;
            }

            var url = jQuery('#adivaha_site_url').val() + '/' + jQuery('#pagename').val() + "/#/hotels?dest=" + document.getElementById(prefix + "regionname").value + "&checkIn=" + document.getElementById(prefix + "checkIn").value + "&checkOut=" + document.getElementById(prefix + "checkOut").value + "&marker=" + document.getElementById(prefix + "marker").value + "&adults=" + document.getElementById(prefix + "adults").value + "&children=" + childAgeStr + "&language=" + document.getElementById("adh_language").value + "&currency=" + document.getElementById("adh_currency").value + "&cityId=" + document.getElementById(prefix + "regionid").value;

            window.location.href = url;
            window.location.reload(true);
        }
        /*=== Only for TP FILGHT because it url has changed after searching===*/
        else if ((jQuery("#is_TPFlight").length == 1) && (jQuery("#is_TPFlight").val() == 'Yes') && (pagename != '')) {
            window.location.href = pageURL + '?currency=' + currency + '&locale=' + jQuery("#adh_language").val()
            window.location.reload(true);
        } else if (pageURL.indexOf('curr=') != -1) {
            var newUrl = pageURL.replace(/curr(.+?)\&/, 'curr=' + currency + '&');
            window.location.href = newUrl;
        } else if (pageURL.indexOf('currency=') != -1) {
            var newUrl = pageURL.replace(/currency(.+?)\&/, 'currency=' + currency + '&');
            newUrl = newUrl.replace('&&', '&');
            var hashArr = newUrl.split('#'); /* Check hash url then reload like tp */
            var hashPart = hashArr[1];
            window.location.href = newUrl;
            if (typeof hashPart != 'undefined' && hashPart != '') {
                window.location.reload(true);
            }
        } else if ((pagename != '') && (pageURL.indexOf('currency=') == -1)) {
            var newUrl = pageURL + '?currency=' + currency + '&language=en';
            window.location.href = newUrl;
            //window.location.reload(true);

        } else {
            console.log('Currency not configured correctly');
        }
    });

    /*==== Set Default currency ===*/
    if (pageURL.indexOf('currency=') != -1) {
        var urlArr = pageURL.split('?');
        var urlVariables = urlArr[1].split('&');
        for (i = 0; i < urlVariables.length; i++) {
            sParameterName = urlVariables[i].split('=');
            if (sParameterName[0] === 'currency') {
                var sCurrency = sParameterName[1];
                setCurrency(sCurrency);
            }
        }
    } else if (pageURL.indexOf('curr=') != -1) {
        var adh_currency = jQuery("#curr").val();
        setCurrency(adh_currency);
    } else {
        var adh_currency = jQuery("#adh_currency").val();
        setCurrency(adh_currency);
    }

    jQuery('.currencycontainer').mouseover(function() {
        jQuery('.currencycontainer .sub-menu').show();

    })

    function setCurrency(currency) {
        //var oldCurr =jQuery("#adh_currency").val(); 
        jQuery("#adh_currency").val(currency);
        var symbol = jQuery('#currency_' + currency).find('a').attr('title');
        jQuery("#adh_currency_symbol").val(symbol);

        //jQuery('.currencycontainer').removeClass('fa-'+oldCurr.toLowerCase());
        //jQuery('.currencycontainer').addClass('fa-'+currency.toLowerCase());
        //jQuery('.currencycontainer>a').text('<span class="currSymbol">'+symbol+'</span>'+currency);	
        jQuery('.currencycontainer .currSymbol').html(symbol);
        jQuery('.currencycontainer .currName').html(currency);
    }

});