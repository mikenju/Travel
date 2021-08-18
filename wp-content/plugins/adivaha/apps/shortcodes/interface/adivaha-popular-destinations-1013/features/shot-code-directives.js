angular.module("adivahaPopularDestinationsZeroZeroOneThree", [
    'elif',
    'adivahaPopularDestinationsZeroZeroOneThree.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroOneThree'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroOneThree']);
    }
});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroOneThree.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroOneThree', function() {
        return {
            controller: function($scope, $http) {





            },
            template: '<div class="ayurveda-spa">' +
                '<h2 class="body-title text-center padding-20">' + document.getElementById('onethreedestinationstitle').value + '</h2>' +
                '<p class="body-paragraph text-center" style="padding-bottom:20px;">' + document.getElementById('onethreedestinationsparagraph').value + '</p>' +

                '<div class="adivaha-core-pbf-wrapper-content adivaha-core-js ">' +
                '<div class="adivaha-core-pbf-wrapper-container clearfix adivaha-core-pbf-wrapper-full-no-space">' +
                '<div class="adivaha-core-pbf-element">' +
                '<div class="adivahamaster-tour-category clearfix ">' +
                '<div class="adivahamaster-tour-category-grid adivahamaster-item-list  adivahamaster-item-pdlr adivahamaster-item-mgb adivahamaster-column-12 adivahamaster-column-first adivahamaster-with-thumbnail">' +
                '<div class="adivahamaster-tour-category-item-wrap">' +
                '<div class="adivahamaster-tour-category-thumbnail adivahamaster-media-image">' +
                '<img src="https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width="800" height="960">' +
                '</div>' +
                '<div class="adivahamaster-tour-category-overlay">' +
                '</div>' +
                '<div class="adivahamaster-tour-category-overlay-front"></div>' +
                '<div class="adivahamaster-tour-category-head">' +
                '<div class="adivahamaster-tour-category-head-display clearfix">' +
                '<h3 class="adivahamaster-tour-category-title"><i class="fa fa-map-marker"></i>South America</h3>' +
                '<div class="adivahamaster-tour-category-count">3 tours</div></div>' +
                '<div class="adivahamaster-tour-category-head-animate">' +
                '<a class="adivahamaster-tour-category-head-link" href="#">' + document.getElementById('onethreebestdealtext').value + '</a>' +
                '<div class="adivahamaster-tour-category-head-divider"></div>' +
                '</div></div>' +
                '</div></div>' +
                '<div class="adivahamaster-tour-category-grid adivahamaster-item-list  adivahamaster-item-pdlr adivahamaster-item-mgb adivahamaster-column-12 adivahamaster-with-thumbnail">' +
                '<div class="adivahamaster-tour-category-item-wrap">' +
                '<div class="adivahamaster-tour-category-thumbnail adivahamaster-media-image">' +
                '<img src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=960" alt="" width="800" height="960"></div>' +
                '<div class="adivahamaster-tour-category-overlay"></div>' +
                '<div class="adivahamaster-tour-category-overlay-front"></div>' +
                '<div class="adivahamaster-tour-category-head">' +
                '<div class="adivahamaster-tour-category-head-display clearfix">' +
                '<h3 class="adivahamaster-tour-category-title"><i class="fa fa-map-marker"></i>Europe</h3>' +
                '<div class="adivahamaster-tour-category-count">7 tours</div>' +
                '</div>' +
                '<div class="adivahamaster-tour-category-head-animate">' +
                '<a class="adivahamaster-tour-category-head-link" href="#">' + document.getElementById('onethreebestdealtext').value + '</a>' +
                '<div class="adivahamaster-tour-category-head-divider"></div></div>' +
                '</div></div></div>' +
                '<div class="adivahamaster-tour-category-grid adivahamaster-item-list  adivahamaster-item-pdlr adivahamaster-item-mgb adivahamaster-column-12 adivahamaster-with-thumbnail">' +
                '<div class="adivahamaster-tour-category-item-wrap">' +
                '<div class="adivahamaster-tour-category-thumbnail adivahamaster-media-image">' +
                '<img src="https://images.pexels.com/photos/1231041/pexels-photo-1231041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width="800" height="960"></div>' +
                '<div class="adivahamaster-tour-category-overlay"></div>' +
                '<div class="adivahamaster-tour-category-overlay-front"></div>' +
                '<div class="adivahamaster-tour-category-head">' +
                '<div class="adivahamaster-tour-category-head-display clearfix">' +
                '<h3 class="adivahamaster-tour-category-title"><i class="fa fa-map-marker"></i>Asia</h3>' +
                '<div class="adivahamaster-tour-category-count">5 tours</div></div>' +
                '<div class="adivahamaster-tour-category-head-animate">' +
                '<a class="adivahamaster-tour-category-head-link" href="#">' + document.getElementById('onethreebestdealtext').value + '</a>' +
                '<div class="adivahamaster-tour-category-head-divider"></div></div>' +
                '</div></div></div>' +
                '<div class="adivahamaster-tour-category-grid adivahamaster-item-list  adivahamaster-item-pdlr adivahamaster-item-mgb adivahamaster-column-12 adivahamaster-with-thumbnail">' +
                '<div class="adivahamaster-tour-category-item-wrap">' +
                '<div class="adivahamaster-tour-category-thumbnail adivahamaster-media-image">' +
                '<img src="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width="800" height="960"></div>' +
                '<div class="adivahamaster-tour-category-overlay"></div>' +
                '<div class="adivahamaster-tour-category-overlay-front"></div>' +
                '<div class="adivahamaster-tour-category-head"><div class="adivahamaster-tour-category-head-display clearfix">' +
                '<h3 class="adivahamaster-tour-category-title"><i class="fa fa-map-marker"></i>America</h3>' +
                '<div class="adivahamaster-tour-category-count">4 tours</div>' +
                '</div>' +
                '<div class="adivahamaster-tour-category-head-animate">' +
                '<a class="adivahamaster-tour-category-head-link" href="#">' + document.getElementById('onethreebestdealtext').value + '</a>' +
                '<div class="adivahamaster-tour-category-head-divider"></div>' +
                '</div></div></div></div>' +
                '<div class="adivahamaster-tour-category-grid adivahamaster-item-list  adivahamaster-item-pdlr adivahamaster-item-mgb adivahamaster-column-12 adivahamaster-with-thumbnail">' +
                '<div class="adivahamaster-tour-category-item-wrap">' +
                '<div class="adivahamaster-tour-category-thumbnail adivahamaster-media-image">' +
                '<img src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width="800" height="960"></div>' +
                '<div class="adivahamaster-tour-category-overlay"></div>' +
                '<div class="adivahamaster-tour-category-overlay-front">' +
                '</div>' +
                '<div class="adivahamaster-tour-category-head">' +
                '<div class="adivahamaster-tour-category-head-display clearfix">' +
                '<h3 class="adivahamaster-tour-category-title"><i class="fa fa-map-marker"></i>Africa</h3>' +
                '<div class="adivahamaster-tour-category-count">3 tours</div></div>' +
                '<div class="adivahamaster-tour-category-head-animate">' +
                '<a class="adivahamaster-tour-category-head-link" href="#">' + document.getElementById('onethreebestdealtext').value + '</a>' +
                '<div class="adivahamaster-tour-category-head-divider"></div></div>' +
                '</div></div></div></div></div></div></div></div>' + '<style>.adivahamaster-tour-category-grid{width:20%;float:left}.adivahamaster-tour-category-item-wrap{position:relative;overflow:hidden;height:324px}.adivahamaster-media-image{line-height:0;position:relative}.adivahamaster-tour-category-overlay{opacity:0;alpha(opacity=0):;transition:opacity 300ms;-moz-transition:opacity 300ms;-o-transition:opacity 300ms;-webkit-transition:opacity 300ms;position:absolute;top:0px;right:0px;bottom:0px;left:0px;background:#000}.adivahamaster-tour-category-overlay-front{position:absolute;top:0px;right:0px;bottom:0px;left:0px;}.adivahamaster-tour-category-head{position:absolute;bottom:0px;left:0px;right:0px;border-color:#e1e1e1;border:0;outline:0;vertical-align:baseline;background:transparent;margin:0;padding:0}.adivahamaster-tour-category-head-display{    padding: 0px 25px 10px;padding-bottom:25px;transition:padding 200ms ease-out;-moz-transition:padding 200ms ease-out;-o-transition:padding 200ms ease-out;-webkit-transition:padding 200ms ease-out}..clearfix{zoom: 1;}.adivahamaster-tour-category-title{color:#fff;font-size:16px;margin-bottom:0px;float:left}.adivahamaster-tour-category-title>i{font-size:18px;margin-right:9px}.adivahamaster-tour-category-count{float:right;margin-top:1px;color:#fff;font-size:15px;font-weight:600}.adivahamaster-tour-category-head-animate{margin-bottom:-45px;transition:margin 200ms ease-out;-moz-transition:margin 200ms ease-out;-o-transition:margin 200ms ease-out;-webkit-transition:margin 200ms ease-out;padding:0px 25px 27px;position:relative}.adivahamaster-tour-category-grid.adivahamaster-with-thumbnail:hover .adivahamaster-tour-category-head-animate{    margin-bottom: 0px}.adivahamaster-tour-category-grid.adivahamaster-with-thumbnail .adivahamaster-tour-category-head-divider, .adivahamaster-tour-category-grid-2.adivahamaster-with-thumbnail .adivahamaster-tour-category-head-divider{    border-color: #18699;}.adivahamaster-tour-category-grid.adivahamaster-with-thumbnail .adivahamaster-tour-category-head-divider{    position: absolute;left: 0px;right: 0px;bottom: 0px;border-bottom-width: 5px;border-bottom-style: solid;}.adivahamaster-tour-category-head-link{color: #fff;}.adivahamaster-tour-category-grid.adivahamaster-with-thumbnail .adivahamaster-tour-category-overlay-front{    position: absolute;top: 0px;right: 0px;bottom: 0px;left: 0px;}.adivahamaster-tour-category-grid.adivahamaster-with-thumbnail:hover .adivahamaster-tour-category-overlay{opacity: 0.65;position: absolute;top: 0px;right: 0px;bottom: 0px;left: 0px;background: #000;-webkit-transition: opacity 300ms;}@media (max-width: 1024px){.adivahamaster-tour-category-grid{    width: 50%;float: left;}}</style>'
        };
    })