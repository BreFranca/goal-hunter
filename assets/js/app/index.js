(($) => {
  
  // $(document).on('click', '.action-button', event => {
    
  //   $('html, body').animate({scrollTop: $('#hero').position().top}, 'slow')

  // });

	$('.anchor').click(function(e) {
		var page = $(this).attr('href').replace('#', '/#/')
		// window.history.pushState("object or string", "Title", page); 
		// window.history.replaceState("object or string", "Title", page);
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 80
				}, 800);
				return false;
			}
		}
	});

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll < 80) {
			$("body").removeClass("menu-sticky");
		} else {
			$("body").addClass("menu-sticky");
		}
	});

	$('.btn-mobile').click(function() {
		$(this).toggleClass('active');
		$(this).parent().find('nav').toggleClass('active');
	});

	$('header a').click(function() {
		$('.btn-mobile').removeClass('active');
		$('nav').removeClass('active');
	});

})(jQuery);