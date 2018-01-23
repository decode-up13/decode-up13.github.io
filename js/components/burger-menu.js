var isActive = false;

$('.burger-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('#menu-navigation').removeClass('active');
	} else {
		$(this).addClass('active');
		$('#menu-navigation').addClass('active');
	}

	isActive = !isActive;
});