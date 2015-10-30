// Login Page body bg img:
// Load a random background image on page refresh 
// If viewport width = lg, md, or sm, attach "_[size]" before file ending

(function(){

var body=document.getElementsByTagName("body");

  if (body[0].getAttribute("id")=="login-bg") {
      var images = [
      "../bg/bg1.png",
      "../bg/bg2.png", 
      "../bg/bg3.png"
      ];
      var imgCount = images.length;
      var randNumber=Math.floor((Math.random() * imgCount) + 1);

      imgURL = images[randNumber-1];

      var image=document.getElementsByClassName("login");
      //image[0].style.backgroundImage = 'url(' + imgURL + ')' ;

	// show viewport width
	function showViewportSize() {
	   var vWidth = $(window).width();
	   //img size prefix regex to add size prefix before file ending
	   var lg = imgURL.replace(/^(.*)\.png$/, "$1_lg.png");
	   var md = imgURL.replace(/^(.*)\.png$/, "$1_md.png");
	   var sm = imgURL.replace(/^(.*)\.png$/, "$1_sm.png");

	   if (vWidth >= 1400) { //lg
		  image[0].style.backgroundImage = 'url(' + lg + ')' ;
		  
	   } else if (vWidth < 1400 && vWidth >= 768) { //md
		  image[0].style.backgroundImage = 'url(' + md + ')' ;
		  
	   } else if (vWidth < 768) { //sm
		  image[0].style.backgroundImage = 'url(' + sm + ')' ;
       }    
 
	}//showViewportSize()
	
	// update viewport width on ready
	$(document).ready(function(e) {
	   showViewportSize();    
	});
	// update viewport on window resize
	$(window).resize(function(e) {
	   showViewportSize();
	});

	
  }//if body
  
}());//
