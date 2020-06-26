const slides = Array.from(document.getElementsByClassName("slideshow-container")[0].children);
const slidesLength = slides.length;
const dots = Array.from(document.getElementsByClassName("dot"));
const dotsLength = dots.length;
const btn = document.getElementsByClassName("slideshow-controller")[0];

var slideIndex = 0;
var paused = false;  // it starts playing so it is not paused;

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
	slides.forEach(slide => {
		slide.style.display = "none";
	});

	dots.forEach(dot => {
		dot.classList.remove("active");
	});

	slideIndex == slidesLength ? slideIndex = 0 : slideIndex;
	slides[slideIndex].style.display = "block";
	dots[slideIndex].classList.add("active");
	slideIndex++;
	
	if (!paused) {
		slideshowTimeout = setTimeout(showSlides, 4000); // Change image every 4 seconds
	}
}
