// slider Partners & Clients
$(document).ready(function(){
	$('.customer-logos').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 520,
			settings: {
				centerPadding: '100px',
				slidesToShow: 1
			}
		}]
	});
});

// slider what can we do?
$(document).ready(function(){
	$('.project-logos').slick({
		centerMode: true,
		// autoplay: true,
		// autoplaySpeed: 1000,
		// adaptiveHeight: true,
		dots: true,
		arrows: false,
		centerPadding: '220px',
		slidesToShow: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				adaptiveHeight: true,
				dots: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				adaptiveHeight: true,
				dots: true,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		}
		]
	});
});



document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
	document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
	document.getElementsByClassName("sidebar")[0].classList.toggle('open')
	document.getElementsByClassName("menu-hidden")[0].classList.toggle('open')
}
