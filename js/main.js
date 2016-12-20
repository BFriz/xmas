$(function() {

$('.sliderButton').css( 'cursor', 'pointer' );

// plus sign button and bx-slider show and hide.
$('#mainButton').on("click", (e) => {
  e.preventDefault();
  $('#sliderContainer').toggleClass('hide');
  // $('#mainBody').toggleClass('hide');
  $('.bottomRight').toggleClass('hide');
  $('.sliderButton').removeClass('hide');
 // hide backgroundImg
  // $('.flex').toggleClass('hide');
  // stop duplication of arrow buttons on bxslider
  $('.bx-wrapper .bx-prev').addClass('hide');
  $('.bx-wrapper .bx-next').addClass('hide');
 
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade'
  });

})
// slider view toggleClass
$('.sliderButton').on("click", (e)=> {
  $('#sliderContainer').toggleClass('hide');
  // $('#mainBody').toggleClass('hide');
  $('.bottomRight').toggleClass('hide');
  $('.sliderButton').addClass('hide');
  // $('.flex').toggleClass('hide');


})


function fullScreenSize() {

  $('.fullDisplay').css({
    top: '0',
    position: 'absolute',
    width: $(window).width(),
    height: $(window).height()
  });

}

$(window).resize(function() {
  fullScreenSize();         
});

fullScreenSize();



});

