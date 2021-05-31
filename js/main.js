$(function(){
  $('.slider').slick({    
    // autoplay: true,
    // autoplaySpeed: 2000,    
   	touchThreshold: 10,
		speed: 300,
		// adaptiveHeight: true,
  });

  $(".slider").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text('0' + (currentSlide + 1));
  });
});

 $(".book ._animate").addClass("_anim-no-hide");
 $("h3._animate, h4._animate").addClass("_anim-no-hide");
 $("tour__text p").addClass("_animate _animate-right");
 const animItems = document.querySelectorAll("._animate");
 $(window).scrollTop(1);
 $(window).on("scroll", function(){
   for (let index = 0; index < animItems.length; index++){
     if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
       & $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
       $(animItems[index]).addClass("_animate-Active");
     } else {
       if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
     }
   }
 });
