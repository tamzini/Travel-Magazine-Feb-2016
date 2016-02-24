
<!-- Sticky Menu -->



$(window).scroll(function(){
		var $slide = $(".evanescent-container").height();
		var $header = $("nav").height();
		  
		if($(this).scrollTop() > $slide - $header){
		                 
			$("nav").addClass("nav-scrolled");
			$(".evanescent-container").css("display", "none");
			}
			
			else {
				$("nav").removeClass("nav-scrolled");
				$(".evanescent-container").css("display", "block");
				
			      }
	                });


<!-- End of Sticky Menu -->
