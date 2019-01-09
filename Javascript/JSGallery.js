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
var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"] 
showSlides(1, 0);
showSlides(1, 1);

function currentSlide(n, no) {
  showSlides(slideIndex = n, no);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1;}    
  if (n < 1) {slideIndex[no] = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}



