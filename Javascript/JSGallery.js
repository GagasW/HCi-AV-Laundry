/*var i = 0
var images = [];
var time = 3000;

images[0] = '../Pictures/Slideshow1.jpg';
images[1] = '../Pictures/Slideshow2.jpg';
images[2] = '../Pictures/Slideshow3.jpg';
images[3] = '../Pictures/Slideshow4.jpg';

function changeImg() {
	document.slide.src = images[i];

	if(i < images.length - 1) {
		i++
	}else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg();*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}



  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/*window.onload = currentSlide(1);*/