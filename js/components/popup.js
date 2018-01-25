// For closing all popup
$('.cross').on('click', function() {
  $(this).parent().removeClass('active');
});


$('#js-popup-about').on('click', function() {
  $('#popup-about').addClass('active');
});
$('#js-popup-accesibility').on('click', function() {
  $('#popup-accessibility').addClass('active');
});
$('#js-popup-credit').on('click', function() {
  $('#popup-credits').addClass('active');
});
$('#js-popup-rs').on('click', function() {
  $('#popup-rs').addClass('active');
});