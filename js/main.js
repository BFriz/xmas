$(function() {


// plus sign button and bx-slider show and hide.
$('.mainButton').on("click", (e) => {

  e.preventDefault();
  $('#sliderContainer').toggleClass('hide');
  $('#mainBody').toggleClass('hide');
  $('.mainButton').toggleClass('hide');
  $('.sliderButton').removeClass('hide');
  $('.bx-wrapper .bx-prev').addClass('hide');
  $('.bx-wrapper .bx-next').addClass('hide');

  $('.bxslider').bxSlider();

})
// slider view toggleClass
$('.sliderButton').on("click", (e)=> {
  $('#sliderContainer').toggleClass('hide');
  $('#mainBody').toggleClass('hide');
  $('.mainButton').toggleClass('hide');
  $('.sliderButton').addClass('hide');


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

