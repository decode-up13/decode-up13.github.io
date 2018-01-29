$(document).ready(function(){
  $('.slide-container').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow:'<div class="left-arrow"></div>',
    nextArrow:'<div class="right-arrow"></div>'
  });
});