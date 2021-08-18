angular.module("adivahaPopularDestinationsZeroZeroSeven", [
    'elif',
    'adivahaPopularDestinationsZeroZeroSeven.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroseven'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroSeven']);
    }
});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroSeven.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroSevenSeven', function() {
        return {
            controller: function($scope, $http) {

            },
            template: '<div class="body-parts body-parts-seven adi-full" style="padding-bottom: 40px;padding-top: 40px;">' +
                '<div class="section-one" style="padding-bottom: 20px;">' +
                '<h2 class="body-title text-center padding-20">' + document.getElementById('seven_destinationstitle').value + '</h2>' +
                '<p class="body-paragraph text-center"> ' + document.getElementById('seven_destinationsparagraph').value + '</p>' +

                /* one section code  */
                '<div class="section-two adi-full oneFiex3" style="margin-top: 25px;">' +
                '<div class="adi-max-width">' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message"><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath1').value + '">' +
                '<div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext1').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext1').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath1').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + ' </a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath11').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' + '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +

                '</div>' +
                '</div>' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span><img alt="" src=" ' + document.getElementById('seven_destinationimagespath2').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext2').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext2').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath2').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath12').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +

                ' </div>' + '<div class="adi-col-4 adi-left padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath3').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext3').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext3').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath3').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath13').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +

                '</div>' +
                ' </div>' +
                '</div>' +

                /* end one section code */


                /* two section code  */
                '<div class="section-two adi-full oneFiex3">' +
                '<div class="adi-max-width">' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message"><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath4').value + '">' +
                '<div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext4').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext4').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath4').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + ' </a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath14').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span><img alt="" src=" ' + document.getElementById('seven_destinationimagespath5').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext5').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext5').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath5').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath15').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +

                ' </div>' +
                '<div class="adi-col-4 adi-left padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath6').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext6').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext6').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath6').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath16').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +

                '</div>' +
                ' </div>' +
                '</div>' +

                /* end two section code */




                /* three section code  */
                '<div class="section-two adi-full oneFiex3 ">' +
                '<div class="adi-max-width">' +

                '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +

                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span><img alt="" src=" ' + document.getElementById('seven_destinationimagespath7').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext7').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext7').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath7').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath17').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +


                '</div>' + '</div>' + '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath8').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext8').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext8').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath8').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath18').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="adi-col-4 adi-left padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message"><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath9').value + '">' +
                '<div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext9').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext9').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath9').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + ' </a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath19').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +

                /* end three section code */


                /* four section code  */
                '<div class="section-two adi-full oneFiex3">' +
                '<div class="adi-max-width">' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">' +
                '<div class="box">' +
                '<span class="message"><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath10').value + '">' +
                '<div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext10').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext10').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath10').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + ' </a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath20').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span><img alt="" src=" ' + document.getElementById('seven_destinationimagespath11').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext11').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext11').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath11').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath21').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +

                ' </div>' +
                '<div class="adi-col-4 adi-left padding-top-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('seven_bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('seven_destinationimagespath12').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('seven_citytext12').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('seven_counterytext12').value + '</h3>' +
                '<a href="' + document.getElementById('seven_destinationslinkpath12').value + '" class="city-text text-color-white">' + document.getElementById('seven_findthehotels').value + '</a> ' +
                '<a href="' + document.getElementById('seven_flights_destinationslinkpath22').value + '" class="city-text text-color-white">' + document.getElementById('seven_findtheflights').value + '</a>' +
                '</div>' +
                '<div class="hover-overlays">' +

                '</div>' +
                '</div>' +

                '</div>' +
                ' </div>' +
                '</div>' +

                /* end four section code */
                '</div>' +
                '</div>' +

                '<style>.body-parts-seven .body-title{font-size:35px;letter-spacing:1px}.body-parts-seven .body-paragraph{padding-top:5px;color:#333;width:60%;margin:0 auto;font-size:16px;line-height:28px;font-weight:400}.body-parts-seven .box{box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2);position:relative;overflow:hidden;cursor:pointer;border-radius:0px}.body-parts-seven .message{font-size:9px;color:#fff;text-transform:uppercase;text-align:center;line-height:20px;transform:rotate(45deg);-webkit-transform:rotate(45deg);width:100px;display:block;background:#009688;box-shadow:0 3px 10px -5px rgba(0, 0, 0, 1);position:absolute;top:19px;right:-21px}.body-parts-seven .box-content{position:absolute;bottom:0px;left:0px;right:0px;text-align:center;z-index:99;}.body-parts-seven .box-content p{color:#fff;font-size:15px}.body-parts-seven .box-content h3{color:#fff;font-weight:600;font-size:20px;padding-top:5px}.body-parts-seven .hover-overlay{position:absolute;top:0;bottom:0;transform:translateY(0%);-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-ms-transform:translateY(0%);-o-transform:translateY(100%);background:rgba(275, 275, 275, .8) !important;transition: .4s ease-in-out;-webkit-transition: .4s ease-in-out;-moz-transition: .4s ease-in-out;-ms-transition: .4s ease-in-out;-o-transition: .4s ease-in-out;width:100%;left:0px;right:0px;padding:5% 5% 5% 5%;text-align:center}.body-parts-seven .box:hover .hover-overlay{position:absolute;top:0;bottom:0;left:0px;right:0px;transform:translateY(0%);-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-ms-transform:translateY(0%);-o-transform:translateY(0%);transition: .4s ease-in-out;-webkit-transition: .4s ease-in-out;-moz-transition: .4s ease-in-out;-ms-transition: .4s ease-in-out;-o-transition: .4s ease-in-out;width:100%}.body-parts-seven .city-text{display:inline-block;text-align:left;width: auto;font-size: 15px}.body-parts-seven .oneFiex1 .box{height:400px}.body-parts-seven .oneFiex2 .box{height:195px}.body-parts-seven .oneFiex3 .box{height:250px}.body-parts-seven .oneFiex4 .box{height:195px}.body-parts-seven .oneFiex5 .box{height:400px}.body-parts-seven .oneFiex1 .box a:hover{color:#fff}.body-parts-seven .oneFiex2 .box a:hover{color:#fff}.body-parts-seven .oneFiex3 .box a:hover{color:#fff}.body-parts-seven .oneFiex4 .box a:hover{color:#fff}.body-parts-seven .oneFiex5 .box a:hover{color:#fff}.body-parts-seven .box img{width:100%}.body-parts-seven .adi-btn{display:inline-block;font-size:15px;background-color:#009688;margin:0 auto;padding:10px 25px 10px 25px;border-radius:0px;text-align:center}@media (max-width: 767px){.body-parts-seven .oneFiex1 .box, .body-parts-seven .oneFiex2 .box, .body-parts-seven .oneFiex3 .box, .body-parts-seven .oneFiex4 .box, .body-parts-seven .oneFiex5 .box{height:300px}.body-parts-seven .oneFiex5{margin-top:10px}.body-parts-seven .body-paragraph{width:100%}}.body-parts-seven .body-title{letter-spacing:1px;font-size:35px;margin-bottom:0;margin-top:0}.body-parts-seven .box .hover-overlay{background:rgba(' + document.getElementById('seven_overlayrgbcolor').value + ', 0.' + document.getElementById('seven_opacity_00').value + ')!important}.body-parts-seven .message{background:' + document.getElementById('seven_backgroundmsgcolor').value + ';color:' + document.getElementById('seven_btn_title_color').value + '!important}.body-parts-seven .btnbkcolorBTNde{background-color:' + document.getElementById('seven_btnbkcolor').value + '!important;color:' + document.getElementById('seven_findthebesttext_color').value + '!important}.body-parts-seven .hover-overlay{background:rgba(' + document.getElementById('seven_overlayrgbcolor').value + ', 0.' + document.getElementById('seven_opacity_00').value + ')!important}.body-parts-seven .hover-overlay a{border-radius:3px;margin-top:0;padding:5px 0px;background-color:rgb(255, 140, 0);background-color:#ff0069;font-weight:bold;font-size:13px;color:#fff;float:left;display:inline-block;width:19%;text-align:center}.body-parts-seven .hover-overlay a:first-child{margin-right:8px}.body-parts-seven .body-parts .padding-right-10{padding-right:20px}.body-parts-seven .body-parts .padding-bottom-10{padding-bottom:20px}@media (max-width: 1024px){.body-parts-seven .padding-right-10 {    margin-right: 1%; }#adivahaDestinationsZeroZeroseven.adi-col-4 {width: 32.3333%;}}.box-content a{    background: #118866;width: auto;padding: 7px 20px;font-size: 16px;display:inline-block;    margin-top: 25px;}</style>'

        };
    })