
var video = document.getElementById("myVideo");

function myFunction() {
 	video.play();
}




// Demo:
imageSetter = function() {
		//Ramdomly choose the images to show:
		var arr = [];
		// arr.length < #images
		while(arr.length < 6){
			// Math.random() * (max - min) + min; max,min image name in dir
		    var r = Math.floor(Math.random() * (9 - 1) + 1);
		    if(arr.indexOf(r) === -1) arr.push(r);
		}
		
		// .attr("src", "path/to/demo/input/...
		// .attr("href", "path/to/demo/result/...
		$(".container-image1 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[0].toString() +".jpg");
		$(".container-image1 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[0].toString() +".jpg");
		$(".container-image2 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[1].toString() +".jpg");
		$(".container-image2 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[1].toString() +".jpg");
		$(".container-image3 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[2].toString() +".jpg");
		$(".container-image3 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[2].toString() +".jpg");
		$(".container-image4 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[3].toString() +".jpg");
		$(".container-image4 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[3].toString() +".jpg");
		$(".container-image5 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[4].toString() +".jpg");
		$(".container-image5 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[4].toString() +".jpg");
		$(".container-image6 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[5].toString() +".jpg");
		$(".container-image6 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[5].toString() +".jpg");
			



			var $window = $(window),
				$body = $('body');

			var $thumbs = $('.thumbnails');
						
			if ($thumbs.length > 0)
				$thumbs.poptrox({
					onPopupClose: function() { $body.removeClass('is-covered'); },
					onPopupOpen: function() { $body.addClass('is-covered'); },
					baseZIndex: 10001,
					useBodyOverflow: false,
					overlayColor: '#222226',
					overlayOpacity: 0.75,
					popupLoaderText: '',
					fadeSpeed: 500,
					usePopupDefaultStyling: false
				});	

			
		};



$("#modelsMenu").prop("selectedIndex", 0); /*O INDEXED default is vlocnet2*/


(function ($) {
  $(document).ready(function(){
	$("#selectButton").on("click", function(){
		//Ramdomly choose the images to show:
		var arr = [];
		// arr.length < #images
		while(arr.length < 6){
			// Math.random() * (max - min) + min; max,min image name in dir
		    var r = Math.floor(Math.random() * (9 - 1) + 1);
		    if(arr.indexOf(r) === -1) arr.push(r);
		}
		
		// dont touch!
		$("div.poptrox-overlay").remove();
		$('.slick-slider').slick('unslick');

		var selectedModel = $("#modelsMenu").val();
		
		if(selectedModel == "Cityscapes"){
			model_number=1;
			// .attr("src", "path/to/demo/input/...
			// .attr("href", "path/to/demo/result/...
			$(".container-image1 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[0].toString() +".jpg");
			$(".container-image1 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[0].toString() +".jpg");
			$(".container-image2 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[1].toString() +".jpg");
			$(".container-image2 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[1].toString() +".jpg");
			$(".container-image3 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[2].toString() +".jpg");
			$(".container-image3 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[2].toString() +".jpg");
			$(".container-image4 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[3].toString() +".jpg");
			$(".container-image4 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[3].toString() +".jpg");
			$(".container-image5 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[4].toString() +".jpg");
			$(".container-image5 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[4].toString() +".jpg");
			$(".container-image6 img:first").attr("src", "static/images/demo/Cityscapes/img/Image_"+ arr[5].toString() +".jpg");
			$(".container-image6 a").attr("href", "static/images/demo/Cityscapes/result/Image_"+ arr[5].toString() +".jpg");
			
			// dont touch!
			$('.slick-slider').slick('unslick');

			// .text("Value Name")
			$("#modelIndicator").text("Cityscapes");
			
		}

		else if(selectedModel == "Vistas"){
			model_number=2;
			
			// .attr("src", "path/to/demo/input/...
			// .attr("href", "path/to/demo/result/...
			$(".container-image1 img:first").attr("src", "static/images/demo/vistas/img/Image_"+ arr[0].toString() +".jpg");
			$(".container-image1 a").attr("href", "static/images/demo/vistas/result/Image_"+ arr[0].toString() +".jpg");
			$(".container-image2 img:first").attr("src", "static/images/demo/vistas/img/Image_"+ arr[1].toString() +".jpg");
			$(".container-image2 a").attr("href", "static/images/demo/vistas/result/Image_"+ arr[1].toString() +".jpg");
			$(".container-image3 img:first").attr("src", "static/images/demo/vistas/img/Image_"+ arr[2].toString() +".jpg");
			$(".container-image3 a").attr("href", "static/images/demo/vistas/result/Image_"+ arr[2].toString() +".jpg");
			$(".container-image4 img:first").attr("src", "static/images/demo/vistas/img/Image_"+ arr[3].toString() +".jpg");
			$(".container-image4 a").attr("href", "static/images/demo/vistas/result/Image_"+ arr[3].toString() +".jpg");
			$(".container-image5 img:first").attr("src", "static/images/demo/vistas/img/Image_"+ arr[4].toString() +".jpg");
			$(".container-image5 a").attr("href", "static/images/demo/vistas/result/Image_"+ arr[4].toString() +".jpg");
			$(".container-image6 img:first").attr("src", "static/images/demo/vistas/img/Image_"+ arr[5].toString() +".jpg");
			$(".container-image6 a").attr("href", "static/images/demo/vistas/result/Image_"+ arr[5].toString() +".jpg");

			// dont touch!
			$('.slick-slider').slick('unslick');

			// .text("Value Name")
			$("#modelIndicator").text("Mapillary Vistas");

		}

                else if(selectedModel == "KITTI"){
			model_number=3;
			
			// .attr("src", "path/to/demo/input/...
			// .attr("href", "path/to/demo/result/...
			$(".container-image1 img:first").attr("src", "static/images/demo/KITTI/img/Image_"+ arr[0].toString() +".jpg");
			$(".container-image1 a").attr("href", "static/images/demo/KITTI/result/Image_"+ arr[0].toString() +".jpg");
			$(".container-image2 img:first").attr("src", "static/images/demo/KITTI/img/Image_"+ arr[1].toString() +".jpg");
			$(".container-image2 a").attr("href", "static/images/demo/KITTI/result/Image_"+ arr[1].toString() +".jpg");
			$(".container-image3 img:first").attr("src", "static/images/demo/KITTI/img/Image_"+ arr[2].toString() +".jpg");
			$(".container-image3 a").attr("href", "static/images/demo/KITTI/result/Image_"+ arr[2].toString() +".jpg");
			$(".container-image4 img:first").attr("src", "static/images/demo/KITTI/img/Image_"+ arr[3].toString() +".jpg");
			$(".container-image4 a").attr("href", "static/images/demo/KITTI/result/Image_"+ arr[3].toString() +".jpg");
			$(".container-image5 img:first").attr("src", "static/images/demo/KITTI/img/Image_"+ arr[4].toString() +".jpg");
			$(".container-image5 a").attr("href", "static/images/demo/KITTI/result/Image_"+ arr[4].toString() +".jpg");
			$(".container-image6 img:first").attr("src", "static/images/demo/KITTI/img/Image_"+ arr[5].toString() +".jpg");
			$(".container-image6 a").attr("href", "static/images/demo/KITTI/result/Image_"+ arr[5].toString() +".jpg");
			// dont touch!
			$('.slick-slider').slick('unslick');

			// .text("Value Name")
			$("#modelIndicator").text("KITTI");

		}               

		else if(selectedModel == "IDD"){
			model_number=2;
			
			// .attr("src", "path/to/demo/input/...
			// .attr("href", "path/to/demo/result/...
			$(".container-image1 img:first").attr("src", "static/images/demo/IDD/img/Image_"+ arr[0].toString() +".jpg");
			$(".container-image1 a").attr("href", "static/images/demo/IDD/result/Image_"+ arr[0].toString() +".jpg");
			$(".container-image2 img:first").attr("src", "static/images/demo/IDD/img/Image_"+ arr[1].toString() +".jpg");
			$(".container-image2 a").attr("href", "static/images/demo/IDD/result/Image_"+ arr[1].toString() +".jpg");
			$(".container-image3 img:first").attr("src", "static/images/demo/IDD/img/Image_"+ arr[2].toString() +".jpg");
			$(".container-image3 a").attr("href", "static/images/demo/IDD/result/Image_"+ arr[2].toString() +".jpg");
			$(".container-image4 img:first").attr("src", "static/images/demo/IDD/img/Image_"+ arr[3].toString() +".jpg");
			$(".container-image4 a").attr("href", "static/images/demo/IDD/result/Image_"+ arr[3].toString() +".jpg");
			$(".container-image5 img:first").attr("src", "static/images/demo/IDD/img/Image_"+ arr[4].toString() +".jpg");
			$(".container-image5 a").attr("href", "static/images/demo/IDD/result/Image_"+ arr[4].toString() +".jpg");
			$(".container-image6 img:first").attr("src", "static/images/demo/IDD/img/Image_"+ arr[5].toString() +".jpg");
			$(".container-image6 a").attr("href", "static/images/demo/IDD/result/Image_"+ arr[5].toString() +".jpg");

			// dont touch!
			$('.slick-slider').slick('unslick');

			// .text("Value Name")
			$("#modelIndicator").text("Indian Driving Dataset");

		}

		


		var $window = $(window),
			$body = $('body');


		var $thumbs = $('.thumbnails');
					
		if ($thumbs.length > 0)
			$thumbs.poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				overlayColor: '#222226',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false
			});
		
		$('.thumbnails').slick({
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

	
	 

});
})(jQuery);





// Bibtex
function toggle_visibility(block_id) {
       var e = document.getElementById(block_id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }

