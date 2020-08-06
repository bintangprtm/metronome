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

// slider services
$('.center').slick({
	dots: true,
	arrows: true,
	infinite: true,
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 3,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		}
	}
	]
})

$('.single-item').slick({
	dots: true,
	autoplay: true,
	dots: true,
});


document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
	document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
	// document.getElementsByClassName("sidebar")[0].classList.toggle('open')
	// document.getElementsByClassName("menu-hidden")[0].classList.toggle('open')
}
