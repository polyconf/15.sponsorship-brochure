$(document).ready(function(){
	
	$(".fixed, .fixed > section,header").height($(window).height());
	
	$("nav#overlay").hide();
	$("#menu-link").click(function(){
		$("nav#overlay").fadeIn();			
	})  
	$("nav#overlay a, #close-menu-link").click(function(){
		$("nav#overlay").fadeOut();
	})  
  
  var s = skrollr.init({
	  
	  forceHeight: false
	  
  });
	
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