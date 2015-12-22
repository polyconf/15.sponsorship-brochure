$(document).ready(function(){

	$("#first").height($(window).height());

	$("nav#overlay").hide();
	$("#menu-link").click(function(){
		$("nav#overlay").fadeIn();
	})
	$("nav#overlay a, #close-menu-link").click(function(){
		$("nav#overlay").fadeOut();
	})

	var isMobile;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) isMobile = true;

  // if (isMobile != true) {
	//   var s = skrollr.init({
	// 	  forceHeight: false
	//   });
	// }

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 2000);
	        return false;
	      }
	    }
	  });
	});


})
