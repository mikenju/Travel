angular.module("adivahaPopularDestinationsZeroZeroSix", [
    'elif',
    'adivahaPopularDestinationsZeroZeroSix.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroSix'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroSix']);
    }





    if (jQuery(window).width() > 768) {

        jQuery('.slider6').bxSlider({
            slideWidth: 400,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            infiniteLoop: false,
            pager: false,
            auto: false
        });


    }

    if (jQuery(window).width() < 767) {
        jQuery('.slider6').bxSlider({

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
angular.module('adivahaPopularDestinationsZeroZeroSix.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroSix', function() {
        return {
            controller: function($scope, $http) {

            },
            template: '<div class="adi_prellex6 adi-full">' +
                '<div class="adi-full">' +
                '<div class="adi-max-width">' +
                '<h2>' + document.getElementById('tour6destinationheading').value + '</h2>' +
                '<h4>' + document.getElementById('tour6destinationparagraph').value + '</h4>' +
                '</div>' +
                '</div>' +


                '<div class="adi-full" style="position: relative;margin-top: 30px;">' +
                '<div class="adi-max-width">' +
                '<ul class="slider6">' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath1').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +

                '<a href="' + document.getElementById('tour6destinationslinkpath1').value + '" class="">' +

                '<div class="hotel-name">' + document.getElementById('tour6text1').value + '</div>' +
                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext1').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath2').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +

                '<a href="' + document.getElementById('tour6destinationslinkpath2').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text2').value + '</div>' +
                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext2').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath3').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +


                '<a href="' + document.getElementById('tour6destinationslinkpath3').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text3').value + '</div>' +

                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext3').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +
                '</a>' +
                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +
                '<a href="" target="_blank">' +
                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath4').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +


                '<a href="' + document.getElementById('tour6destinationslinkpath4').value + '" class="">' +

                '<div class="hotel-name">' + document.getElementById('tour6text4').value + '</div>' +
                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext4').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath5').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tour6destinationslinkpath5').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text5').value + '</div>' +




                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext5').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath6').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tour6destinationslinkpath6').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text6').value + '</div>' +




                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext6').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath7').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tour6destinationslinkpath7').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text7').value + '</div>' +




                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext7').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath8').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tour6destinationslinkpath8').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text8').value + '</div>' +

                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext8').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath9').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tour6destinationslinkpath9').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text9').value + '</div>' +

                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext9').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tour6imagespath10').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tour6destinationslinkpath10').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tour6text10').value + '</div>' +

                '<div class="review"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' + document.getElementById('tour6counterytext10').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="avalble">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +




                '</ul>' +
                '</div><!-- adi max width -->' +
                '</div>' +
                '</div>' +
                '<style>.adi_prellex6{background-color:#fff;position:static;padding:0px 0px 20px 0px}.adi_prellex6 h2{text-align:center;font-size:35px;display:inherit;margin-bottom:18px;color:#fff;letter-spacing: 1px;}.adi_prellex6 h4{margin-bottom:28px;font-weight:500;text-align:center;font-size:17px;display:block;color:#fff}.adi_prellex6 .adi_prellex_box{float:left;width:100%;background-color:#fff;box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2);overflow:hidden}.adi_prellex6 .adi_prellex_box:nth-child(2n-2){margin-left:1%;margin-right:1%}.adi_prellex6 .adi_prellex_box_image img{width:100%}.adi_prellex6 .adi_prellex_box_image{position:relative}.adi_prellex6 .adi_prellex_box_image .prellex_box_price{position:absolute;top:3px;right:3px;background-color:#186900;border-radius:4px;color:#fff;padding:6px 10px;font-size:17px}.adi_prellex6 .prellex_box_text{position:absolute;bottom:0px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));left:0px;right:0px;padding:14px 15px}.adi_prellex6 .prellex_box_text_entry_title{font-size:19px;color:#fff;display:inline-block}.adi_prellex6 .prellex_box_text_entry_heading{margin-bottom:0px !important;text-align:left !important}.adi_prellex6 .prellex_box_text_entry_heading a{font-size:18px;color:#fff;display:inline-block}.adi_prellex6 .adi_prellex_box_paragraph{padding:15px}.adi_prellex6 .adi_prellex_box_paragraph p{font-size:14px;color:#626262;line-height:25px;margin-top:10px}.adi_prellex6 .adi_prellex_btn{box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2);background-color:#186900;display:inline-block;color:#fff;font-size:20px;padding:16px;border-radius:0px;width:100%;text-align:center}.adi_prellex6 .bx-wrapper .bx-prev{left:30px !important;background: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/plugins/adivaha/apps/dashboard/UI/css/images/controls.png) no-repeat 0px -32px !important;}.adi_prellex6 .bx-wrapper .bx-next{right:33px !important;background: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/plugins/adivaha/apps/dashboard/UI/css/images/controls.png) no-repeat -43px -32px !important;}.adi_prellex6 .bx-wrapper .bx-controls-direction a{height:40px !important;}.adi_prellex6 .bx-viewport{box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2)}.adi_prellex6 .free_capput{text-transform:uppercase;color:#1b1b1b!important;margin-bottom:-2px;-ms-word-wrap:break-word;word-wrap:break-word;font-size:19px !important;font-weight:500}.adi_prellex6 .adi_prellex_box{transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;box-shadow:0 0 4px 0 rgba(0, 0, 0, .3)}.adi_prellex6 .adi_prellex_box:hover{transform:scale(1.06);-webkit-transform:scale(1.06);-o-transform:scale(1.06);-moz-transform:scale(1.06);box-shadow:0 -2px 12px 0 rgba(0, 0, 0, .11);z-index:3;border:none;ursor:default}.adi_prellex6 .Destext{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700;padding:10px 15px 10px 0px;text-transform:capitalize}.adi_prellex6 .tt-input-left{max-width:400px;width:100%;margin-right:15px}.adi_prellex6 .tt-input-left input{background-color:#FFF;border:1px solid #ccc;border-radius:2px!important;height:38px;font-size:14px;overflow:hidden;text-overflow:ellipsis;width:100%;padding:0 10px 0 8px;cursor:pointer;background-image:url(' + document.getElementById("adivaha_site_url").value + '/wp-content/themes/adivaha_main-child-1/search-icon-htnew.png)!important;background-repeat:no-repeat!important;background-position:right 10px center!important}.adi_prellex6 .btnAallp li a{background:0 0;color:#878787;padding:8px;border-radius:3px;display:inline-block;text-align:center;border:1px solid #eaeaea;margin-right:6px;margin-bottom:10px}.adi_prellex6 .hotel-item{border-radius:0px;border:0px solid #e4e4e4;box-shadow:none;padding:0px;height:234px;transition:all .3s ease-in-out;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out}.adi_prellex6 .hotel-img-wrapper img{width:100%}.adi_prellex6 .hotel-img-wrapper{position:relative;text-align:center;background-color:#f7f7f7;border-radius:0px;width:100%;height:234px;overflow:hidden}.adi_prellex6 .hotel-img{width:100%;height:108px;background-repeat:no-repeat;background-size:cover;border-radius:3px;position:relative;z-index:2}.adi_prellex6 .hotel-desc{padding:8px}.adi_prellex6 .hotel-desc .hotel-name{font-size:16px;font-weight:600;color:#464646;margin-top:4px;margin-bottom:4px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.adi_prellex6 .hotel-desc .review{font-size:14px;color:#fff;position: absolute;top: 0em;padding: 5px;margin-top:3px;font-weight:500}.adi_prellex6 .hotel-item .hotel-desc .price{font-size:18px;font-weight:600;text-align:left;color:#000;margin-top:0px;padding-right:5px}.adi_prellex6 .hotel-item .hotel-desc .pernight{font-size:10px;font-weight:700;color:#797979;text-align:right;padding-right:5px;line-height:7px}.adi_prellex6 .bx-viewport{box-shadow:none!important}.adi_prellex6 .btnbkcolorBTNdes{background-color:#000!important;padding:9px 10px;float:right;border-radius:0px;margin:0px 0px 0px 0px;position:relative;bottom:40px}.adi_prellex6 .bx-wrapper .bx-controls-direction a{top:40% !important}.adi_prellex6{background-image:url(https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) !important;background-position:center top !important;background-repeat:no-repeat !important;background-size:cover !important;background-attachment:fixed !important;padding:50px 0px;margin-bottom: 40px;}.adi_prellex6 .slider6 li{background-color:#fff;border-radius:0px}     @media (max-width: 1024px){.adi_prellex6{padding: 32px 10px 30px 10px;}.adi_prellex6 h2{    font-size: 20px;}..adi_prellex6 h4{font-size: 14px;margin-bottom: 17px;}.avalble{    text-align: left !important;float: left !important;}}.adi_prellex6 .bx-wrapper .bx-controls-direction a{    top: 40% !important;position: absolute;top: 50%;margin-top: -16px;outline: 0;width: 32px;height: 32px;text-indent: -9999px;z-index: 9999;}.bx-viewport{   }.m_star{color: #FFC107;letter-spacing: 1px;}.star_box{    color: #777;letter-spacing: 1px;font-size: 12px;}.latest_price{    display: inherit;}.latest_price b{color:#000}.sectionfour.bx-viewport{    height: 346px !important}.adi_prellex6 .bx-viewport{height: 385px !important;}.adi_prellex6 .hotel-desc{background:#fff !important;    width: 100%;float: left;}.latest_price{    text-align: left;width: 50%;float: left;}.avalble{    color: #777 !important;font-size: 12px;letter-spacing: 1px;}</style>'
        };
    });