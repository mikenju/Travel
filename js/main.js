// $(document).ready(function(){
// 	$('.slider').slick({
// 		touchThreshold: 10,
// 		speed: 300,
// 	});
// });



// $(function(){
//   $(".slider").on('afterChange', function(event, slick, currentSlide){
//      $("#cp").text(currentSlide + 1);
//   });
// });


$(function(){
  $('.slider').slick({    
    // autoplay: true,
    // autoplaySpeed: 2000,    
   	touchThreshold: 10,
		speed: 300,
  });

  $(".slider").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text('0' + (currentSlide + 1));
  });
});