$(document).ready(function(){
  $('.thumbnails').slick({
  	// slidesToShow: 3,
	  // slidesToScroll: 1,
	  // autoplay: true,
	  // autoplaySpeed: 3000,
	  // pauseOnHover: true,
		  centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 3,
		  autoplay: true,
  		  autoplaySpeed: 2000,
  		  pauseOnHover: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
});



