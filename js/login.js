// Login Page: Random background image on page refresh 

(function(){

var body=document.getElementsByTagName("body");

  if (body[0].getAttribute("id")=="login-bg") {
      var images = [
      "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/seamless_paper_texture.png",
      "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/old_moon.png", 
      "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/grey_wash_wall.png"
      ];

      var imgCount = images.length;

      var randNumber=Math.floor((Math.random() * imgCount) + 1);

      imgURL = images[randNumber-1];

      var image=document.getElementsByClassName("login");
      //image[0].setAttribute("src", imgURL);
      //image[0].setAttribute("data-src", imgURL);
      image[0].style.backgroundImage = 'url(' + imgURL + ')' ;
  }

}());