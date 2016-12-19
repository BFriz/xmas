$(function() {


// plus sign button and bx-slider show and hide.
  $('.mainButton').on("click", (e) => {

  e.preventDefault();
  $('#sliderContainer').toggleClass('hide');
  $('#mainBody').toggleClass('hide');
  $('.mainButton').toggleClass('hide');
  
  $('.bxslider').bxSlider();
  

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

