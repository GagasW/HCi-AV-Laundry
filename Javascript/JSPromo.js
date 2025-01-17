function DropdownMenu() {
	document.getElementById('dropdownContainer').classList.toggle("show");
}

window.onclick = function(trigger){
	if (!trigger.target.matches('.dropbtn')) {
		var dropdownContainer = document.getElementById('dropdownContainer');
		if(dropdownContainer.classList.contains('show')){
			dropdownContainer.classList.remove('show');
		}
	}
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

