$(document).ready(function(){
	$('#sl_01').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:true,
					dots:false
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
                    dots:false
				}
			}
		]
	}); 
});

