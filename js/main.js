var images = $('#slider-image-container').children('img');
var imagesLength = images.length;
var currentImageNumber = 0;

function changeCurrentImageNumber() {
	if (currentImageNumber == imagesLength-1) {
		currentImageNumber = 0;
	} else{
		currentImageNumber++;
	}
}

window.setInterval(function() {
	changeCurrentImageNumber();
	$("#slider-main-image img").attr('src', $(images[currentImageNumber]).attr('src'))
}, 4000);

$("#slider-image-container img").click(function() { $("#slider-main-image img").attr('src', $(this).attr('src')) })
