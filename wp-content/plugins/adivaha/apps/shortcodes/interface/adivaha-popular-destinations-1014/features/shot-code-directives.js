angular.module("adivahaPopularDestinationsZeroZeroOneFour", [
    'elif',
    'adivahaPopularDestinationsZeroZeroOneFour.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroOneFour'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroOneFour']);
    }



    if (jQuery(window).width() > 768) {

        jQuery('.slider3').bxSlider({
            slideWidth: 500,
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
        jQuery('.slider3').bxSlider({

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
angular.module('adivahaPopularDestinationsZeroZeroOneFour.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroOneFour', function() {
        return {
            controller: function($scope, $http) {

            },
            template: '<div class="adi_prellex3 adi-full sectionfour">' +
                '<div class="adi-full">' +
                '<div class="adi-max-width">' +
                '<h2>' + document.getElementById('tourdestinationheading').value + '</h2>' +
                '<h4>' + document.getElementById('tourdestinationparagraphs').value + '</h4>' +
                '</div>' +
                '</div>' +


                '<div class="adi-full" style="position: relative;margin-top: 30px;">' +
                '<div class="adi-max-width">' +
                '<ul class="slider3">' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath1').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath1').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext1').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext1').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath2').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath2').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext2').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext2').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath3').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath3').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext3').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext3').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
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
                '<img alt="" src="' + document.getElementById('tourimagespath4').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath4').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext4').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext4').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath5').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath5').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext5').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext5').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath6').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath6').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext6').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext6').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath7').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath7').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext7').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext7').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath8').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath8').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext8').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext8').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath9').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath9').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext9').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext9').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +
                '<li>' +
                '<div class="hotel-item-wraper">' +

                '<div class="hotel-item">' +
                '<div class="hotel-img-wrapper">' +
                '<img alt="" src="' + document.getElementById('tourimagespath10').value + '">' +
                '</div>' +
                '<div class="hotel-desc">' +
                '<a href="' + document.getElementById('tourdestinationslinkpath10').value + '" class="">' +
                '<div class="hotel-name">' + document.getElementById('tourtext10').value + '</div>' +

                '<div class="review">' + document.getElementById('tourcounterytext10').value + '</div>' +
                '<div class="star_box"><span class=""><span class="m_star"><i class="fa fa-star"></i><span class="">&nbsp;4.5</span></span><span class="">&nbsp;(43,644 reviews)</span></span> | <span class="">999K+ Booked</span></div>' +
                '<div class="price"><p><span class="latest_price"><b>$ 585</b></span><span class="">Available Tomorrow</span></p></div>' +
                '</a>' +
                '</div>' +

                '</div>' +

                '</div>' +
                '</li>' +




                '</ul>' +
                '</div><!-- adi max width -->' +
                '</div>' +
                '</div>' +
                '<style>.adi_prellex3{background-color: #fff;position: static;padding: 40px 0px 60px 0px;}.adi_prellex3 h2{text-align: center;font-size: 35px;display: inherit;margin-bottom: 18px;letter-spacing: 1px;}.adi_prellex3 h4{    margin-bottom: 28px;font-weight: 500;text-align: center;font-size: 17px;display: block;color: #4d5a64;width: 60%;margin: 0 auto;}.adi_prellex_box{float: left;width: 100%;background-color: #fff;box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);overflow: hidden;}.adi_prellex_box:nth-child(2n-2){margin-left: 1%;margin-right: 1%;}.adi_prellex_box_image img{width: 100%;}.adi_prellex_box_image{position: relative;}.adi_prellex_box_image .prellex_box_price{position: absolute;top: 3px;right: 3px;background-color: #18699;border-radius: 4px;color: #fff;padding: 6px 10px;font-size: 17px;}.prellex_box_text{position: absolute;bottom: 0px;background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));left: 0px;right: 0px;padding: 14px 15px;}.prellex_box_text_entry_title{font-size: 19px;color: #fff;display: inline-block;} .prellex_box_text_entry_heading {margin-bottom: 0px !important;text-align: left !important;}.prellex_box_text_entry_heading a{font-size: 18px;color: #fff;    display: inline-block;} .adi_prellex_box_paragraph{padding: 15px;}.adi_prellex_box_paragraph p{font-size: 14px; color: #626262;line-height: 25px;    margin-top: 10px;}.adi_prellex_btn{box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);background-color: #18699;display: inline-block;color: #fff;font-size: 20px;padding: 16px;border-radius: 0px;width: 100%;text-align: center;}.bx-wrapper .bx-prev{    background: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/plugins/adivaha/apps/shortcodes/interface/adivaha-popular-destinations-1002/images/slider-nav1.png) no-repeat !important;    left: 39px !important;}.bx-wrapper .bx-next{    background: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/plugins/adivaha/apps/shortcodes/interface/adivaha-popular-destinations-1002/images/slider-nav2.png) no-repeat  !important;right: 33px !important; }.bx-wrapper .bx-controls-direction a{height: 40px !important;}.bx-viewport{box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);}.free_capput{text-transform: uppercase;color: #1b1b1b!important;margin-bottom: -2px;-ms-word-wrap: break-word;word-wrap: break-word;font-size: 19px !important;font-weight: 500;}</style>' +
                '<style>.adi_prellex_box{    transition: all .3s ease-in-out;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out; -o-transition: all .3s ease-in-out;box-shadow: 0 0 4px 0 rgba(0,0,0,.3);}.adi_prellex_box:hover{transform: scale(1.06);-webkit-transform: scale(1.06);-o-transform: scale(1.06);-moz-transform: scale(1.06); box-shadow: 0 -2px 12px 0 rgba(0,0,0,.11);z-index: 3;border: none;ursor: default;}.Destext{display: inline-block;max-width: 100%;margin-bottom: 5px;    font-weight: 700;padding: 10px 15px 10px 0px;text-transform: capitalize;}.tt-input-left{max-width: 400px;width: 100%;margin-right: 15px;}.tt-input-left input{background-color: #FFF;border: 1px solid #ccc; border-radius: 2px!important;height: 38px;font-size: 14px;overflow: hidden;text-overflow: ellipsis;width: 100%;padding: 0 10px 0 8px;cursor: pointer;background-image: url(' + document.getElementById("adivaha_site_url").value + '/wp-content/themes/adivaha_main-child-1/search-icon-htnew.png)!important;background-repeat: no-repeat!important;background-position: right 10px center!important;}.btnAallp{}.btnAallp li{} .btnAallp li a{    background: 0 0;color: #878787;padding: 8px;border-radius: 3px;display: inline-block;text-align: center;border: 1px solid #eaeaea;margin-right: 6px;margin-bottom: 10px;}.hotel-item-wraper{}.hotel-item{border-radius:0px;border:1px solid #e4e4e4;box-shadow:0 0 6px #e0e0e0;padding:0px;transition:all .3s ease-in-out;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out}.hotel-img-wrapper{position:relative;text-align:center;background-color:#f7f7f7;border-radius:0px}.hotel-img{width:100%;height:108px;background-repeat:no-repeat;background-size:cover;border-radius:3px;position:relative;z-index:2}.hotel-desc{padding: 14px}.hotel-desc .hotel-name{font-size:16px;font-weight:600;color:#464646;margin-top:4px;margin-bottom:4px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hotel-desc .review{font-size: 14px;color: #848484;margin-top: 3px;font-weight: 500;}.hotel-item .hotel-desc .price{font-size:14px;font-weight:600;text-align:left;margin-top:2px;padding-right:5px}.hotel-item .hotel-desc .pernight{font-size:10px;font-weight:700;color:#797979;text-align:right;padding-right:5px;line-height:7px}.adi_prellex3 .bx-viewport {box-shadow: none!important;}.btnbkcolorBTNdes{background-color: #000!important;padding: 5px;float: left;border-radius: 5px;margin: 0px 0px 0px 0px;    position: relative; bottom: 0px;}.bx-wrapper .bx-controls-direction a{top: 27% !important;}@media(max-width:768px){.adi_prellex3 h4{ width: 100%;}}.bx-wrapper .bx-controls-direction a{    top: 28% !important;}.bx-wrapper .bx-controls-direction a{    position: absolute;top: 50%;margin-top: -16px;outline: 0;width: 32px;height: 32px;text-indent: -9999px;z-index: 9999;}.bx-wrapper img {height: 200px;width: 100%;}.adi_prellex3 .hotel-img-wrapper{height:300px}.hotel-item{}.m_star{color: #FFC107;letter-spacing: 1px;}.star_box{    color: #777;letter-spacing: 1px;font-size: 12px;}.latest_price{    display: inherit;}.latest_price b{color:#000}.sectionfour.bx-viewport{    height: 346px !important}.slider3 li{transition-duration: 0.3s;-webkit-transition-duration: 0.3s;}.slider3 li:hover{transform: translateY(-15px);-webkit-transform: translateY(-15px);}.adi_prellex3 .bx-viewport{height: 424px !important}.adi_prellex3 .latest_price{    width: 67% !important;}</style>'
        };
    });