function DropdownMenu() {
	document.getElementById('dropdownContainer').classList.toggle("show");
}

/*buat bikin jam mau gua update lagi jgn di apa apain wkwk*/
/*function updateClock() {
    var now = new Date();
        months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
        time = now.getHours() + ':' + now.getMinutes();

        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('times').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}
updateClock();*/

window.onclick = function(trigger){
	if (!trigger.target.matches('.dropbtn')) {
		var dropdownContainer = document.getElementById('dropdownContainer');
		if(dropdownContainer.classList.contains('show')){
			dropdownContainer.classList.remove('show');
		}
	}
}

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