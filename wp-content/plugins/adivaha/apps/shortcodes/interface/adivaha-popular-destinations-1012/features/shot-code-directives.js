angular.module("adivahaPopularDestinationsZeroZeroOneTwo", [
    'elif',
    'adivahaPopularDestinationsZeroZeroOneTwo.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroOneTwo'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroOneTwo']);
    }
});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroOneTwo.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroOneTwo', function() {
        return {
            controller: function($scope, $http) {





            },
            template: '<div class="ayurveda-spa">' +
                '<h2 class="body-title text-center padding-20">' + document.getElementById('onetwodestinationstitle').value + '</h2>' +
                '<p class="body-paragraph text-center" style="padding-bottom:20px;">' + document.getElementById('onetwoparagraph').value + '</p>' +

                '<div class="adivahatravelapi" style="background-image: url(' + document.getElementById('onetwodestinationimagespath1').value + ');"><div class="adivahatravelapifast"><h1>' + document.getElementById('onetwodestinationstitle1').value + '</h1> <h2 class="t24">' + document.getElementById('onetwoparagraph1').value + '</h2><p><i id="videoPlay" class="fa fa-play-circle "  v-src="#"></i></p> </div></div>' + '<style>.adivahatravelapi{height: 450px;}.adivahatravelapifast h1{padding: 98px 0em 0em;font-size: 60px;font-weight: 600;color: ' + document.getElementById('onetwotextcolors').value + '!important;;letter-spacing: 1px;line-height: 2;}.adivahatravelapifast{text-align:center;color:' + document.getElementById('onetwotextcolors').value + '!important;}#videoPlay{color: ' + document.getElementById('onetwotextcolors').value + '!important;font-size: 70px;cursor: pointer;opacity: 1;display: inline-block;margin-top: 20px;}@media (max-width: 768px) and (min-width: 100px){.adivahatravelapifast h1{    font-size: 30px;}}</style>'
        };
    })