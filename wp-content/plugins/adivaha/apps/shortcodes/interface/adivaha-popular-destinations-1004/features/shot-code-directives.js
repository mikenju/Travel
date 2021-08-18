angular.module("adivahaPopularDestinationsZeroZeroFour", [
    'elif',
    'adivahaPopularDestinationsZeroZeroFour.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroFour'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroFour']);
    }



    if (jQuery(window).width() > 768) {

        jQuery('.slider1').bxSlider({
            slideWidth: 400,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,

            infiniteLoop: false,
            pager: false,
            auto: false
        });


    }

    if (jQuery(window).width() < 767) {
        jQuery('.slider1').bxSlider({

            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 10,
            infiniteLoop: false,
            pager: false,
            auto: false
        });

    }

    /*
  
  $(document).ready(function(){
});*/



});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroFour.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroFour', function() {
        return {
            controller: function($scope, $http) {

            },
            template: '<div class="adi_prellex adi-full" style="padding-bottom: 40px;padding-top: 40px;">' +
                '<div class="adi-full" style="padding: 20px 0px 50px 0px;">' +
                '<div class="adi-max-width">' +
                '<h2>' + document.getElementById('flightdestinationstitle').value + '</h2>' +
                '<h4> ' + document.getElementById('flightdestinationsparagraph').value + '</h4>' +
                '</div>' +
                '</div>' +

                '<div class="adi-full" style="position: relative;">' +
                '<div class="adi-max-width">' +
                '<ul class="slider1" >' +

                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath1').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext1').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext1').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath1').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +

                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath2').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext2').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext2').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath2').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath3').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext3').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext3').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath3').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath4').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext4').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext4').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath4').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath5').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext5').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext5').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath5').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath6').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext6').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext6').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath6').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="' + document.getElementById('flightdestinationslinkpath7').value + '" class="">' +
                '<div class="adi_prellex_box">' +
                '<div class="adi_prellex_box_paragraph">' +
                '<p class="free_capput">' + document.getElementById('flightcitytext7').value + '</p>' +
                '<p>' + document.getElementById('flightcounterytext7').value + '</p>' +
                '</div>' +

                '<div class="adi_prellex_box_image">' +
                '<img alt="" src="' + document.getElementById('flightimagespath7').value + '">' +
                '</div>' +

                '</div>	' +
                '</a>' +
                '</li>' +





                '</ul>' +
                '</div><!-- adi max width -->' +
                '</div>' +
                '</div>' +
                '<style>.adi_prellex{background-color: #fff;position: static;}.adi_prellex h2{text-align: center;font-size: 35px;display: inherit;margin-bottom: 25px;    letter-spacing: 1px;}.adi_prellex h4{text-align: center;font-size: 18px;color: #000;font-weight: 500;display: inherit;    width: 60%;margin: 0 auto;line-height: 28px;}.adi_prellex_box{float: left;width: 100%;background-color: #fff;box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);overflow: hidden;}.adi_prellex_box:nth-child(2n-2){margin-left: 1%;margin-right: 1%;}.adi_prellex_box_image img{width: 100%;}.adi_prellex_box_image{position: relative;}.adi_prellex_box_image .prellex_box_price{position: absolute;top: 3px;right: 3px;background-color: #186900;border-radius: 4px;color: #fff;padding: 6px 10px;font-size: 17px;}.prellex_box_text{position: absolute;bottom: 0px;background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));left: 0px;right: 0px;padding: 14px 15px;}.prellex_box_text_entry_title{font-size: 19px;color: #fff;display: inline-block;} .prellex_box_text_entry_heading {margin-bottom: 0px !important;text-align: left !important;}.prellex_box_text_entry_heading a{font-size: 18px;color: #fff;    display: inline-block;} .adi_prellex_box_paragraph{padding: 15px;}.adi_prellex_box_paragraph p{font-size: 14px; color: #626262;line-height: 25px;    margin-top: 10px;}.adi_prellex_btn{box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);background-color: #186900;display: inline-block;color: #fff;font-size: 20px;padding: 16px;border-radius: 0px;width: 100%;text-align: center;}.bx-wrapper .bx-prev{    background: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/plugins/adivaha/apps/shortcodes/interface/adivaha-popular-destinations-1004/images/slider-nav1.png) no-repeat !important;}.bx-wrapper .bx-next{    background: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/plugins/adivaha/apps/shortcodes/interface/adivaha-popular-destinations-1004/images/slider-nav2.png) no-repeat  !important;}.bx-wrapper .bx-controls-direction a{height: 40px !important;}.bx-viewport{box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);}.free_capput{text-transform: uppercase;color: #1b1b1b!important;margin-bottom: -2px;-ms-word-wrap: break-word;word-wrap: break-word;font-size: 19px !important;font-weight: 500;}</style>' + '<style>.adi_prellex_box{    transition: all .3s ease-in-out;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out; -o-transition: all .3s ease-in-out;box-shadow: 0 0 4px 0 rgba(0,0,0,.3);}.adi_prellex_box:hover{transform: scale(1.06);-webkit-transform: scale(1.06);-o-transform: scale(1.06);-moz-transform: scale(1.06); box-shadow: 0 -2px 12px 0 rgba(0,0,0,.11);z-index: 3;border: none;ursor: default;}.adi_prellex_box_image{    height: 200px;}.adi_prellex_box{    background: #f7f7f7;}.bx-wrapper .bx-controls-direction a{    top: 47% !important;}@media (max-width: 767px){.adi_prellex h4{width:100%;}}.bx-wrapper .bx-next{position: absolute;top: 50%;margin-top: -16px;outline: 0;width: 32px;height: 32px;text-indent: -9999px;z-index: 9999;right: 2%;}.bx-wrapper .bx-prev{position: absolute;top: 50%;margin-top: -16px;outline: 0;width: 32px;height: 32px;text-indent: -9999px;z-index: 9999;left: 2%;}.adi_prellex_box_image img{height:100%;}</style>'
        };
    });