var isActive = false;

$('.burger-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('nav').css("visibility", "hidden");
	} else {
		$(this).addClass('active');
		$('nav').css("visibility", "visible");
	}

	isActive = !isActive;
});