var menuItems = document.getElementsByClassName('hasSubMenu');
var subMenus 	= document.getElementsByClassName('sub-menu');
var hamburger = document.getElementById('js-hamburger');
var sideMenu 	= document.getElementById('js-sideMenu');

function toggleSubMenu(event) {
	event.stopPropagation();
	// Toggle the active state of the clicked tab and remove any active state on other tabs
	for (var i = 0; i < menuItems.length; i++) {
		if (this !== menuItems[i] && menuItems[i].classList.contains("active") ) {
			menuItems[i].classList.remove("active");
		}
	}
	this.classList.toggle("active");
	
	// Open the clicked tab's submenu and close any other open sub-menu
	var thisSubMenu = this.querySelector('.sub-menu');
	for (var j = 0; j < subMenus.length; j++) {
		if (thisSubMenu !== subMenus[j] && subMenus[j].classList.contains("open") ) {
			subMenus[j].classList.remove("open");
		}
	}
	thisSubMenu.classList.toggle("open");
}

function toggleSideMenu(event) {
	if (sideMenu.classList.contains('open')) {
		document.body.removeEventListener('click', toggleSideMenu);
		sideMenu.classList.remove('open');
	}else{
		document.body.addEventListener('click', toggleSideMenu);
		sideMenu.classList.add('open');
	}
	event.stopPropagation();
}

for (var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', toggleSubMenu);
}

hamburger.addEventListener('click', toggleSideMenu);

var mc = new Hammer(sideMenu);

mc.on("panright", function(ev) {
	if (ev.deltaX > 50) {
		sideMenu.classList.remove('open');
		document.body.removeEventListener('click', toggleSideMenu);
	}
});

var pageHeader = document.querySelector('header');
var lastScrollPos = 0;

function refreshHeader() {
	var currentScrollPos = window.pageYOffset;
	
	if (currentScrollPos < 10) {
		pageHeader.classList.remove('small');
		return;	
	}
	
	if (currentScrollPos > lastScrollPos) {
		pageHeader.classList.add('small');
	}else if(currentScrollPos < (lastScrollPos - 42)) {
		pageHeader.classList.remove('small');
	}
	lastScrollPos = currentScrollPos;	
}

window.addEventListener('scroll', function() {
	requestAnimationFrame(refreshHeader);
});

var searchForm = document.getElementById('js-search-form');

function validateSearch(event) {
	if( searchForm.firstElementChild.value === '' )	{
		event.preventDefault();
		searchForm.firstElementChild.focus();
	}
}

searchForm.addEventListener('submit', validateSearch);

