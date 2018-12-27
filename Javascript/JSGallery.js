var i = 0
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

window.onload = changeImg();