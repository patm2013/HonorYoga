$(document).ready(function(){
	  //Smooth Scroll
  	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top-84
	            }, 1000);
	            return false;
	        }
	    }
	});

  	var btnMenu = $("#btnMenu");
  	$(btnMenu).click(function() {

  		$(".menuHide").slideToggle();

  	});


	// var links = $("#nav__inner li a");
	// _.each(links, function(link){
	// 	var targetArea = $(link).attr("href");
	// 	var tWatch = scrollMonitor.create($(targetArea),{top: 85, bottom: -85});

	// 	tWatch.partiallyExitViewport(function() {
	// 		if (tWatch.isAboveViewport){
	// 		$(links).removeClass("on");
	// 		$(link).addClass("on");
	// 		console.log("fully enter");
	// 	}
	// 	});


	// });

});
