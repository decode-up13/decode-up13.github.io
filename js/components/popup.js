// For closing all popup
$('.cross').on('click', function() {
  $(this).parent().removeClass('active');
  $(this).parent().removeClass('opened');
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

$('#js-picto-paper').on('click', function() {
  $('#popup-paper').addClass('opened');
});
