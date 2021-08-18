angular.module("adivahaPopularDestinationsZeroZeroNine", [
    'elif',
    'adivahaPopularDestinationsZeroZeroNine.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroNine'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroNine']);
    }
});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroNine.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroNine', function() {
        return {
            controller: function($scope, $http) {





            },
            template: '<div class="body-parts adi-full" style="padding-top:40px;"><div class="section-one" style="padding-bottom:20px;"><h2 class="body-title text-center padding-20">' + document.getElementById('ninedestinationstitlecar').value + '</h2><p class="body-paragraph text-center"> ' + document.getElementById('ninedestinationsparatitlecar').value + '</p><div class="popular_cities adi-max-width"><div class="VueCarousel-wrapper"><div><a href="' + document.getElementById('destinationslinkpathnine1').value + '" class="VueCarousel-slide items"><div class="origin_destination"><div>' + document.getElementById('ninecitytext1').value + '</div> <i class="fa fa-long-arrow-right"></i> <div>' + document.getElementById('ninecitytexts1').value + '</div></div> <div class="price_go"><p class="low_price"><span>Starting From</span> <span class="rs"> ' + document.getElementById('ninesymbol1').value + ' </span> ' + document.getElementById('nineprice1').value + ' </p> <i class="fa fa-long-arrow-right"></i></div></a></div><div><a href="' + document.getElementById('destinationslinkpathnine2').value + '" class="VueCarousel-slide items"><div class="origin_destination"><div>' + document.getElementById('ninecitytext2').value + '</div> <i class="fa fa-long-arrow-right"></i> <div>' + document.getElementById('ninecitytexts2').value + '</div></div> <div class="price_go"><p class="low_price"><span>Starting From</span> <span class="rs"> ' + document.getElementById('ninesymbol2').value + '  </span> ' + document.getElementById('nineprice2').value + '  </p> <i class="fa fa-long-arrow-right"></i></div></a></div><div><a href="' + document.getElementById('destinationslinkpathnine3').value + '" class="VueCarousel-slide items"><div class="origin_destination"><div>' + document.getElementById('ninecitytext3').value + '</div> <i class="fa fa-long-arrow-right"></i> <div>' + document.getElementById('ninecitytexts3').value + '</div></div> <div class="price_go"><p class="low_price"><span>Starting From</span> <span class="rs">' + document.getElementById('ninesymbol3').value + '  </span> ' + document.getElementById('nineprice3').value + '  </p> <i class="fa fa-long-arrow-right"></i></div></a></div><div><a href="' + document.getElementById('destinationslinkpathnine4').value + '" class="VueCarousel-slide items"><div class="origin_destination"><div>' + document.getElementById('ninecitytext4').value + '</div> <i class="fa fa-long-arrow-right"></i> <div>' + document.getElementById('ninecitytexts4').value + '</div></div> <div class="price_go"><p class="low_price"><span>Starting From</span> <span class="rs">' + document.getElementById('ninesymbol4').value + '</span> ' + document.getElementById('nineprice4').value + '  </p> <i class="fa fa-long-arrow-right"></i></div></a></div><div><a href="' + document.getElementById('destinationslinkpathnine5').value + '" class="VueCarousel-slide items"><div class="origin_destination"><div>' + document.getElementById('ninecitytext5').value + '</div> <i class="fa fa-long-arrow-right"></i> <div>' + document.getElementById('ninecitytexts5').value + '</div></div> <div class="price_go"><p class="low_price"><span>Starting From</span> <span class="rs"> ' + document.getElementById('ninesymbol5').value + ' </span> ' + document.getElementById('nineprice5').value + '  </p> <i class="fa fa-long-arrow-right"></i></div></a></div></div></div></div></div>' + '<style>.VueCarousel-slide{box-shadow:0 1px 8px rgba(0,0,0,.1);width:215px;background:#fff;box-shadow:0 3px 6px rgba(0,0,0,.1);border-radius:6px;padding:20px;justify-content:space-between;border:1px solid #eae8e8;margin:25px 15px 5px;cursor:pointer;transition:all .5s ease;float:left;flex-grow:0;flex-shrink:0;user-select:none;float:left;list-style:none;position:relative;margin-right:0px}.origin_destination{width:100%;display:flex;flex-wrap:nowrap;padding:20px 0;padding-top:0}.origin_destination div{display:flex;width:40%;font-size:14px;color:#333;font-weight:600}.origin_destination .fa{margin-right:15px;font-size:20px;color:#999;width:20%;text-align:left;font-variant:normal;text-transform:none;line-height:1em;-webkit-font-smoothing:antialiased.}.price_go{display:flex;flex-direction:row;align-items:flex-end}.low_price{font-size:20px;color:' + document.getElementById('textcolor').value + ';text-align:left;display:grid;font-weight:600;width:100%;line-height:20px}.low_price span{width:100%;font-weight:500;display:block;color:#999;font-size:13px}.price_go .rs{font-size:20px;color:' + document.getElementById('textcolor').value + ';font-weight:600;display:contents}.price_go .fa{min-width:30px;height:30px;border-radius:50%;border:1px solid #e4e4e4;text-align:center;color:#333;font-size:13px;padding:8px 0px;float:right}.price_go{display: flex;flex-direction: row;align-items: flex-end;}@media(min-width:580px) and (max-width:768px){.VueCarousel-slide{    width: 44%;    margin: 25px 10px 5px;}}@media(min-width:100px) and (max-width:580px){.VueCarousel-slide{    width: 100%;    margin: 25px 0px 5px;}}.VueCarousel-slide:hover .price_go>.fa{    background:' + document.getElementById('textcolor').value + ';color: #fff; border: 0px;}</style>'

        };
    })