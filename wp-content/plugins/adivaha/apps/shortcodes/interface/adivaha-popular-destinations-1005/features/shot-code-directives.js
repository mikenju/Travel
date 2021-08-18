angular.module("adivahaPopularDestinationsZeroZeroFive", [
    'elif',
    'adivahaPopularDestinationsZeroZeroFive.directives'
])


angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivahaDestinationsZeroZeroFive'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaPopularDestinationsZeroZeroFive']);
    }
});

'use strict';
/* Controllers */
angular.module('adivahaPopularDestinationsZeroZeroFive.directives', [])
    /* Starting of Adiaha Hotel Search Box*/
    .directive('adivahaPopularDestinationsZeroZeroFive', function() {
        return {
            controller: function($scope, $http) {







            },
            template: '<div class="body-parts adi-full" style="padding-bottom: 40px;padding-top: 40px;">' +
                '<div class="section-one" style=" padding-bottom: 20px;">' +
                '<h2 class="body-title text-center padding-20">' + document.getElementById('bedandbreakdestinationstitle').value + '</h2>' +
                '<p class="body-paragraph text-center">' + document.getElementById('bedandbreakdestinationsparagraph').value + '</p>' +

                /* one section code  */
                '<div class="section-two sectionfive oneFiex3">' +
                '<div class="adi-max-width">' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">' +
                '<a href="' + document.getElementById('bedandbreakdestinationpath2').value + '" class="city-text text-color-white">' +
                '<div class="box"><img alt="" src="' + document.getElementById('bedandbreakdestinationimagespath1').value + '">' +
                '<div class="box-contents padding-20">' +
                '<p class="text-color-white">' + document.getElementById('bedandbreakcitytext1').value + '</p>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">' +
                '<a href="' + document.getElementById('bedandbreakdestinationpath2').value + '" class="city-text text-color-white">' +
                '<div class="box">' +
                '<img alt="" src=" ' + document.getElementById('bedandbreakdestinationimagespath2').value + '">' +
                ' <div class="box-contents padding-20">' +
                '<p class="text-color-white">' + document.getElementById('bedandbreakcitytext2').value + '</p>' +
                '</div>' +
                '</a>' +

                '</div>' +

                ' </div>' +
                '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">' +
                '<a href="' + document.getElementById('bedandbreakdestinationpath3').value + '" class="city-text text-color-white">' +
                '<div class="box"><img alt="" src=" ' + document.getElementById('bedandbreakdestinationimagespath3').value + '">' +
                ' <div class="box-contents padding-20">' +
                '<p class="text-color-white">' + document.getElementById('bedandbreakcitytext3').value + '</p>' +
                '</div>' +
                '</a>' +

                '</div>' +

                ' </div>' +
                '<div class="adi-col-4 adi-left padding-top-10 padding-right-10">' +
                '<a href="' + document.getElementById('bedandbreakdestinationpath4').value + '" class="city-text text-color-white">' +
                '<div class="box"><img alt="" src="' + document.getElementById('bedandbreakdestinationimagespath4').value + '">' +
                ' <div class="box-contents padding-20">' +
                '<p class="text-color-white">' + document.getElementById('bedandbreakcitytext4').value + '</p>' +
                '</div>' +
                '</a>' +

                '</div>' +

                '</div>' +
                ' </div>' +


                /* end one section code */



                <!--'<div class="ayurveda-spa1"> <div class="ayurveda-childs1"><div class="backgrondoverlayimgs"></div> <img src="'+document.getElementById('bedandbreakdestinationimagespath5').value+'" alt=""><div class="ayurveda-text"> <p class="ayurveda-title">'+document.getElementById('bedandbreakcitytext5').value+'</p> <a href="'+document.getElementById('bedandbreakdestinationpath5').value+'" class="ayurveda-viewmore">View More...</a> </div> </div> <div class="ayurveda-childs2"><div class="backgrondoverlayimgs"></div> <img src="'+document.getElementById('bedandbreakdestinationimagespath6').value+'" alt=""><div class="ayurveda-text"> <p class="ayurveda-title">'+document.getElementById('bedandbreakcitytext6').value+'</p> <a href="'+document.getElementById('bedandbreakdestinationpath6').value+'" class="ayurveda-viewmore">View More...</a> </div> </div> </div> <div class="ayurveda-spa2"> <div class="ayurveda-childs3"><div class="backgrondoverlayimgs"></div> <img src="'+document.getElementById('bedandbreakdestinationimagespath7').value+'" alt=""> <div class="ayurveda-text"> <p class="ayurveda-title">'+document.getElementById('bedandbreakcitytext7').value+'</p> <a href="'+document.getElementById('bedandbreakdestinationpath7').value+'" class="ayurveda-viewmore">View More...</a></div> </div> <div class="ayurveda-childs4"> <div class="backgrondoverlayimgs"></div> <img src="'+document.getElementById('bedandbreakdestinationimagespath8').value+'" alt=""> <div class="ayurveda-text"> <p class="ayurveda-title">'+document.getElementById('bedandbreakcitytext8').value+'</p> <a href="'+document.getElementById('bedandbreakdestinationpath8').value+'" class="ayurveda-viewmore">View More...</a> </div> </div> </div> <div class="ayurveda-spa3"> <div class="ayurveda-childs5"><div class=""></div>  <img src="'+document.getElementById('bedandbreakdestinationimagespath9').value+'" alt=""> <div class="ayurveda-text"> <p class="ayurveda-title">'+document.getElementById('bedandbreakcitytext9').value+'</p> <a href="'+document.getElementById('bedandbreakdestinationpath9').value+'" class="ayurveda-viewmore">View More...</a> </div> </div> </div> --></div>'+

                /* end three section code */


                /* four section code  
		'<div class="section-two sectionfive oneFiex3">'+
		
    '<div class="adi-max-width">'+
        '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">'+
		'<a href="'+document.getElementById('bedandbreakdestinationpath10').value+'" class="city-text text-color-white">'+
           '<div class="box"><img alt="" src="'+document.getElementById('bedandbreakdestinationimagespath10').value+'">'+
    '<div class="box-contents padding-20">'+
        '<p class="text-color-white">'+document.getElementById('bedandbreakcitytext10').value+'</p>'+
     '</div>'+
    '</a>'+
	
'</div>'+
'</div>'+
        '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">'+
		'<a href="'+document.getElementById('bedandbreakdestinationpath11').value+'" class="city-text text-color-white">'+
            '<div class="box"><img alt="" src=" '+document.getElementById('bedandbreakdestinationimagespath11').value+'">'+
   ' <div class="box-contents padding-20">'+
        '<p class="text-color-white">'+document.getElementById('bedandbreakcitytext11').value+'</p>'+
    '</div>'+
    '</a>'+
	
'</div>'+
               
           ' </div>'+
		   '<div class="adi-col-4 adi-left padding-right-10 padding-top-10">'+
		   '<a href="'+document.getElementById('bedandbreakdestinationpath12').value+'" class="city-text text-color-white">'+
            '<div class="box"><img alt="" src=" '+document.getElementById('bedandbreakdestinationimagespath12').value+'">'+
   ' <div class="box-contents padding-20">'+
        '<p class="text-color-white">'+document.getElementById('bedandbreakcitytext12').value+'</p>'+
    '</div>'+
    '</a>'+
	
'</div>'+
               
           ' </div>'+
		   '<div class="adi-col-4 adi-left padding-top-10 padding-right-10">'+
		   '<a href="'+document.getElementById('bedandbreakdestinationpath13').value+'" class="city-text text-color-white">'+
          '<div class="box"><img alt="" src="'+document.getElementById('bedandbreakdestinationimagespath13').value+'">'+
   ' <div class="box-contents padding-20">'+
       '<p class="text-color-white">'+document.getElementById('bedandbreakcitytext13').value+'</p>'+
    '</div>'+
    '</a>'+
	
'</div>'+
           
        '</div>'+
   ' </div>'+
'</div>'+
		
		/* end four section code */
                '</div>' +
                '</div>' +

                '<style>.sectionfive .adi-col-4{width:25%;}.body-title{font-size:35px;    letter-spacing: 1px;}.body-paragraph{padding-top:5px;color:#333;width:60%;margin:0 auto;font-size:16px;line-height:28px;font-weight:400}.sectionfive.box{box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2);position:relative;overflow:hidden;cursor:pointer;     border-radius: 5px;}.box img{}.message{font-size:9px;color:#fff;text-transform:uppercase;text-align:center;line-height:20px;transform:rotate(45deg);-webkit-transform:rotate(45deg);width:100px;display:block;box-shadow:0 3px 10px -5px rgba(0,0,0,1);position:absolute;top:19px;right:-21px}.box-content{position:absolute;bottom:0px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));left:0px;right:0px;text-align:center;}.box-content p{color:#fff;font-size:15px}.box-content h3{color:#fff;font-weight:600;font-size:20px;padding-top:5px}.hover-overlay{}.box:hover .hover-overlay{}.city-text{display:inline-block;text-align:left;width:100%;font-size:20px}.sectionfive .oneFiex1 .box{height:400px}.oneFiex2 .box{height:195px}.sectionfive.oneFiex3 .box{height:400px}.oneFiex4 .box{height:195px}.sectionfive .oneFiex5 .box{height:400px}.oneFiex1 .box a:hover{color:#fff}.oneFiex2 .box a:hover{color:#fff}.oneFiex3 .box a:hover{color:#fff}.oneFiex4 .box a:hover{color:#fff}.oneFiex5 .box a:hover{color:#fff}#adivahaDestinationsZeroZeroFive .box img{width:100%;    height: 310px !important;}.adi-btn{display:inline-block;font-size:15px;background-color:#009688;margin:0 auto;padding:10px 25px 10px 25px;border-radius:0px;text-align:center} @media (max-width: 767px){.ayurveda-childs2,.ayurveda-childs4,.ayurveda-childs3,.ayurveda-childs5,.ayurveda-childs1{    margin-bottom: 22px;}.ayurveda-spa{padding: 20px 17px !important;}.ayurveda-spa3{    display: none;}.ayurveda-spa1{width: 100%!important;}.ayurveda-spa2{    width: 100%!important;position: relative!important;right: 0%!important;}.ayurveda-childs4 .ayurveda-text{    width: 100% !important;}.ayurveda-title{    font-size: 17px !important;}.oneFiex1 .box, .oneFiex2 .box, .oneFiex3 .box, .oneFiex4 .box, .oneFiex5 .box {height: 300px;} .oneFiex5{margin-top: 10px;}.body-paragraph {width: 100%;}.sectionfive .adi-col-4{width:100%;}} .popular-indiahotdest ul li:nth-child(4n-1){margin-left:0%;margin-right:0.5%}.ayurveda-spa{width:100%;clear:both;overflow:hidden}.ayurveda-spa1{float:left;width:32%}.ayurveda-spa2{float:left;width:45%;position:absolute;right:23%}.ayurveda-spa3{float:right;width:45%}.ayurveda-childs1{height:222px;position:relative;border-right:1px solid #fff;border-bottom:1px solid #fff}.ayurveda-childs2{height:209px;position:relative;border-right:1px solid #fff}.ayurveda-childs3{height:222px;position:relative;border-bottom:1px solid #fff}.ayurveda-childs4{height:209px;position:relative}.ayurveda-childs5{position:relative}.ayurveda-childs5 img{width:100%}.ayurveda-text{position:absolute;top:37%;left:31%}.ayurveda-title{    margin: 10px 0em;font-size:22px;color:#fff;font-weight:500}.ayurveda-des1{font-size:14px;color:#fff}.ayurveda-des2{font-size:14px;color:#fff;width:80%}.ayurveda-des3{font-size:14px;color:#fff;width:80%}.ayurveda-des4{font-size:14px;color:#fff;width:80%}.ayurveda-des5{font-size:14px;color:#fff;width:80%}.ayurveda-des6{font-size:14px;color:#fff;width:80%}.ayurveda-viewmore{color:#fff;font-size:14px;background-color:#000;padding:7px 12px;box-shadow:0px 3px 5px 0px rgba(0, 0, 0, 0.2);margin-top:0px;display:inline-block}.ayurveda-childs3 img{height:100%}.ayurveda-childs4 img{height:100%}.ayurveda-childs1 .ayurveda-text{position:absolute;top:45%;left:3%;width:90%;margin:0 auto}.ayurveda-childs2 .ayurveda-text{position:absolute;top:45%;left:3%;width:88%;margin:0 auto}.ayurveda-childs3 .ayurveda-text{position:absolute;top:45%;left:4%;width:60%;margin:0 auto}.ayurveda-childs4 .ayurveda-text{position:absolute;top:45%;left:4%;width:60%;margin:0 auto}.ayurveda-spa img{width: 100%;height: 100%;}.ayurveda-spa{padding: 20px 0px;} .box-contents{position: absolute;bottom: 0px;background: rgba(0,0,0,0.5);left: 0px;right: 0px;padding: 20px;text-align: center;}.sectionfive.oneFiex3 .box{    height: 377px; box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);position: relative;overflow: hidden;cursor: pointer;border-radius: 0px;}.text-color-white{font-size:15px}.ayurveda-title{line-height: 25px;}@media (min-width: 767px) and(max-width: 1024px){#adivahaDestinationsZeroZeroFive .section-one{    margin-top: 12em;}}.backgrondoverlayimgs{    background: #000000 !important;opacity: 0.40;position: absolute;top: 0px;left: 0px;right: 0px;z-index: 0;bottom: 0px;}.ayurveda-childs5{    height: 431px;}.sectionfive .adi-col-4:hover{transform: translateY(-15px);    -webkit-transform: translateY(-15px);}.sectionfive .adi-col-4{transition-duration: 0.3s;-webkit-transition-duration: 0.3s;}</style>'
        };
    })