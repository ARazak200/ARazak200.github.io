//AUTO PLAYING SIDESHOW PLAYGROUND

var slideIndex = 0;
var paused = false;  // it starts playing so it is not paused;
const btn = document.getElementsByClassName("slideshow-controller")[0];
showSlides();

/**
 * This event listener handles the pause and play buttons logic and styling
 */
btn.addEventListener('click', (event) => {
	paused = !paused;  // invert

	if (paused) {
		clearTimeout(slideshowTimeout);  // stop the slideshow on current image
		btn.innerHTML = '<i class="fa fa-play"></i>';
	} else {
		btn.innerHTML = '<i class="fa fa-pause"></i>';
		showSlides();  // restart the slideshow
	}
});

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slideshow-container")[0].children;
	var dots = document.getElementsByClassName("dot");
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	
	if (!paused) {
		slideshowTimeout = setTimeout(showSlides, 4000); // Change image every 4 seconds
	}
}
