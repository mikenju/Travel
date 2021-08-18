angular.module("adivahaPopularDestinationsZeroZeroThree", [
    'elif',
    'adivahaPopularDestinationsZeroZeroThree.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroThree'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroThree']);
    }
});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroThree.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroThree', function() {
        return {
            controller: function($scope, $http) {

            },
            template: '<div class="body-parts adi-full" style="padding-top: 20px; padding-bottom: 20px;">' +
                '<div class="section-one" style="padding-top: 20px; padding-bottom: 20px;">' +
                '<h2 class="body-title text-center padding-20">' + document.getElementById('destinationstitle').value + '</h2>' +
                '<p class="body-paragraph text-center"> ' + document.getElementById('destinationsparagraph').value + '</p>' +

                /* one section code  */
                '<div class="section-two adi-full" style="margin-top: 25px;">' +
                '<div class="adi-max-width">' +
                '<div class="adi-col-6 adi-left padding-right-10 padding-bottom-10 oneFiex1">' +
                '<div class="box">' +
                '<span class="message"><b class="">' + document.getElementById('bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('destinationimagespath1').value + '">' +
                '<div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('citytext1').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('counterytext1').value + '</h3>' +
                '</div>' +
                '<div class="hoverlayboxcolor">' +
                '<a href="' + document.getElementById('destinationslinkpath1').value + '" class="city-text text-color-white">' + document.getElementById('citytext1').value + '</a> ' +
                '<a href="' + document.getElementById('destinationslinkpath1').value + '" class="adi-btn text-color-white margin-top-10 btnbkcolorBTNde">' + document.getElementById('findthebesttext').value + '</a>' +
                '</div>' +
                '<div class="hover-overlay">' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="adi-col-4 adi-right oneFiex2 padding-bottom-10">' +
                '<div class="margin-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('bestdealtext').value + '</b></span><img alt="" src=" ' + document.getElementById('destinationimagespath2').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('citytext2').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('counterytext2').value + '</h3>' +
                '</div>' +
                '<div class="hoverlayboxcolor">' +
                '<a href="' + document.getElementById('destinationslinkpath2').value + '" class="city-text text-color-white">' + document.getElementById('citytext2').value + '</a> ' +
                '<a href="' + document.getElementById('destinationslinkpath2').value + '" class="adi-btn text-color-white margin-top-10 btnbkcolorBTNde">' + document.getElementById('findthebesttext').value + '</a>' +
                '</div>' +
                '<div class="hover-overlay">' +

                '</div>' +
                '</div>' +

                ' </div>' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('destinationimagespath3').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('citytext3').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('counterytext3').value + '</h3>' +
                '</div>' +
                '<div class="hoverlayboxcolor">' +
                '<a href="' + document.getElementById('destinationslinkpath3').value + '" class="city-text text-color-white">' + document.getElementById('citytext3').value + '</a> ' +
                '<a href="' + document.getElementById('destinationslinkpath3').value + '" class="adi-btn text-color-white margin-top-10 btnbkcolorBTNde">' + document.getElementById('findthebesttext').value + '</a>' +
                '</div>' +
                '<div class="hover-overlay">' +

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
                '<span class="message"><b class="">' + document.getElementById('bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('destinationimagespath4').value + '">' +
                '<div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('citytext4').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('counterytext4').value + '</h3>' +
                '</div>' +
                '<div class="hoverlayboxcolor">' +
                '<a href="' + document.getElementById('destinationslinkpath4').value + '" class="city-text text-color-white">' + document.getElementById('citytext4').value + '</a> ' +
                '<a href="' + document.getElementById('destinationslinkpath4').value + '" class="adi-btn text-color-white margin-top-10 btnbkcolorBTNde">' + document.getElementById('findthebesttext').value + '</a>' +
                '</div>' +
                '<div class="hover-overlay">' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('bestdealtext').value + '</b></span><img alt="" src=" ' + document.getElementById('destinationimagespath5').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('citytext5').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('counterytext5').value + '</h3>' +
                '</div>' +
                '<div class="hoverlayboxcolor">' +
                '<a href="' + document.getElementById('destinationslinkpath5').value + '" class="city-text text-color-white">' + document.getElementById('citytext5').value + '</a> ' +
                '<a href="' + document.getElementById('destinationslinkpath5').value + '" class="adi-btn text-color-white margin-top-10 btnbkcolorBTNde">' + document.getElementById('findthebesttext').value + '</a>' +
                '</div>' +
                '<div class="hover-overlay">' +

                '</div>' +
                '</div>' +

                ' </div>' +
                '<div class="adi-col-4 adi-left padding-bottom-10">' +
                '<div class="box">' +
                '<span class="message" ><b class="">' + document.getElementById('bestdealtext').value + '</b></span> <img alt="" src="' + document.getElementById('destinationimagespath6').value + '">' +
                ' <div class="box-content padding-20">' +
                '<p class="text-color-white">' + document.getElementById('citytext6').value + '</p>' +
                '<h3 class="text-color-white">' + document.getElementById('counterytext6').value + '</h3>' +
                '</div>' +
                '<div class="hoverlayboxcolor">' +
                '<a href="' + document.getElementById('destinationslinkpath6').value + '" class="city-text text-color-white">' + document.getElementById('citytext6').value + '</a> ' +
                '<a href="' + document.getElementById('destinationslinkpath6').value + '" class="adi-btn text-color-white margin-top-10 btnbkcolorBTNde">' + document.getElementById('findthebesttext').value + '</a>' +
                '</div>' +
                '<div class="hover-overlay">' +

                '</div>' +
                '</div>' +

                '</div>' +
                ' </div>' +
                '</div>' +

                /* end two section code */





                '</div>' +
                '</div>' +

                '<style>.body-title{font-size:30px;}.body-paragraph{padding-top:5px;color:#333;width:60%;margin:0 auto;font-size:16px;line-height:28px;font-weight:400}.box{box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2);position:relative;overflow:hidden;cursor:pointer}.box img{height:100% !important;}.message{font-size:9px;color:#fff;text-transform:uppercase;text-align:center;line-height:20px;transform:rotate(45deg);-webkit-transform:rotate(45deg);width:100px;display:block;box-shadow:0 3px 10px -5px rgba(0,0,0,1);position:absolute;top:19px;right:-21px}.box-content{position:absolute;bottom:0px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));left:0px;right:0px}.box-content p{color:#fff;font-size:15px}.box-content h3{color:#fff;font-weight:600;font-size:20px;padding-top:5px}.oneFiex1 .box{height:400px}.oneFiex2 .box{height:195px}.oneFiex3 .box{height:250px}.oneFiex4 .box{height:195px}.oneFiex5 .box{height:400px}.hover-overlay{position:absolute;top:0;bottom:0;transform:translateY(0%);-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transition: .4s ease-in-out;-webkit-transition: .4s ease-in-out;-moz-transition: .4s ease-in-out;-ms-transition: .4s ease-in-out;-o-transition: .4s ease-in-out;width:100%;left:0px;right:0px;padding:19% 16% 16% 16%;text-align:center}.box:hover .hover-overlay{position:absolute;top:0;bottom:0;left:0px;right:0px;transform:translateY(0%);-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-ms-transform:translateY(0%);-o-transform:translateY(0%);transition: .4s ease-in-out;-webkit-transition: .4s ease-in-out;-moz-transition: .4s ease-in-out;-ms-transition: .4s ease-in-out;-o-transition: .4s ease-in-out;width:100%}.city-text{display:inline-block;text-align:center !important;width:100%;margin-bottom: 20px;    font-size: 20px !important;}.oneFiex1 .box a:hover{color:#fff}.oneFiex2 .box a:hover{color:#fff}.oneFiex3 .box a:hover{color:#fff}.oneFiex4 .box a:hover{color:#fff}.oneFiex5 .box a:hover{color:#fff}.box img{width:100%}.adi-btn{display:inline-block;font-size:15px;background-color:#009688;margin:0 auto;padding:10px 25px 10px 25px;border-radius:0px;text-align:center} @media (max-width: 767px){ .oneFiex5{margin-top: 10px;}.body-paragraph {width: 100%;}.adi-col-4,.adi-col-6{width: 100%;    padding-right: 0px}.body-title{      font-size: 17px !important;}.oneFiex1 .box,.oneFiex5 .box{height: 250px !important;}}  </style>' +
                '<style>.body-title{letter-spacing:1px;font-size:30px;margin-bottom:0;margin-top:0;}.body-paragraph{}.box:hover .hover-overlay{ background: ' + document.getElementById('overlayrgbcolor').value + ';opacity:0.' + document.getElementById('opacity_00').value + ';}.message{background: ' + document.getElementById('backgroundmsgcolor').value + ';color:' + document.getElementById('btn_title_color').value + ';}.btnbkcolorBTNde{background-color:' + document.getElementById('btnbkcolor').value + ';color:' + document.getElementById('findthebesttext_color').value + ';}.hoverlayboxcolor{ position:absolute;top:0;bottom:0;transform:translateY(0%);-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transition: .4s ease-in-out;-webkit-transition: .4s ease-in-out;-moz-transition: .4s ease-in-out;-ms-transition: .4s ease-in-out;-o-transition: .4s ease-in-out;width:100%;left:0px;right:0px;padding:19% 16% 16% 16%;text-align:center;z-index:999   }.box:hover .hoverlayboxcolor{position:absolute;top:0;bottom:0;left:0px;right:0px;transform:translateY(0%);-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-ms-transform:translateY(0%);-o-transform:translateY(0%);transition: .4s ease-in-out;-webkit-transition: .4s ease-in-out;-moz-transition: .4s ease-in-out;-ms-transition: .4s ease-in-out;-o-transition: .4s ease-in-out;width:100%}</style>'

        };
    })