var menuItems = document.getElementsByClassName('hasSubMenu');
var subMenus = document.getElementsByClassName('sub-menu');

function toggleSubMenu() {
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

for (var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', toggleSubMenu);
}
