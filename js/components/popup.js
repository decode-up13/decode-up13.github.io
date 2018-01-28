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

$('#js-picto-photo').on('click', function() {
  $('#popup-photo').addClass('opened');
});


// SLIDESHOW PHOTO

            var long = $(".slide").length;
            var compt = 1;
            var current = null;
            var next = null;
            var prev = null;
 
            $("#right-arrow").click(function() {

                if (compt < long) {
 
                    current = $(".slide.visible");
 
                    prev = current;
 
                    next = $(current).next();
 
                    $(current).addClass("hidden").removeClass("visible");
 
                    $(next).addClass("visible").removeClass("hidden");
 
                    //debug
                    console.log((prev[0] != null) + ', ' + (current[0] != null) + ', ' + (next[0] != null));
 
                    compt++;
                }
            });
 
            $("#left-arrow").click(function() {
 
                if ((compt > 1) && (next != null) && (current != null) && (prev != null)) {
 
                    $(next).addClass("hidden").removeClass("visible");
 
                    $(prev).addClass("visible").removeClass("hidden");
 
                    next = current;
 
                    current = prev;    
 
                    prev = $(current).prev();
 
                    //debug
                    console.log((prev[0] != null) + ', ' + (current[0] != null) + ', ' + (next[0] != null));
 
                    compt--;
                }
            });