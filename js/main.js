/*global Hammer */
/*global FastClick */

document.addEventListener('DOMContentLoaded', function() {
	FastClick.attach(document.body);
}, false);

var flkty = new Flickity( '.gallery', {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true
});

