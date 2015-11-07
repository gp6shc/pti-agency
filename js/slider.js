var flkty = new Flickity( '.gallery', {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 5000,
  pageDots: false,
  prevNextButtons: false
});

var nextButton = document.getElementById('js-next');
var prevButton = document.getElementById('js-prev');
var pauseButton = document.getElementById('js-pause');

nextButton.addEventListener('click', function() {
	flkty.next(true);
},false);

prevButton.addEventListener('click', function() {
	flkty.previous(true);
},false);


var isPlaying = true;


pauseButton.addEventListener('click', function() {
	this.classList.toggle('paused');
	if (isPlaying) {
		flkty.deactivatePlayer();
		isPlaying = false;
	}else{
		flkty.activatePlayer();
		isPlaying = true;
	}
	
	morphPlayPause();
},false);


var pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
		play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26",
		animation = document.getElementById('animation');

function morphPlayPause() {
	animation.setAttribute("from", isPlaying ? pause : play);
	animation.setAttribute("to", isPlaying ? play : pause);
	animation.beginElement();
}