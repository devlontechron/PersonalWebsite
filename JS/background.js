var imgArray = [];

imgArray[0] = "media/pictures/WP_20130817_181.jpg";
imgArray[1] = "media/pictures/WP_20140701_17_57_52_Pro.jpg" ;
imgArray[2] = "media/pictures/WP_20150702_21_21_14_Pro (2).jpg";
imgArray[3] = "media/pictures/WP_20150725_12_45_10_Pro.jpg" ;
imgArray[4] = "media/pictures/WP_20130817_181.jpg" ;
imgArray[5] = "media/pictures/WP_20130817_181.jpg" ;



var img0 = media/pictures/WP_20130817_181.jpg
var img1 = devlontecron.github.io/media/pictures/WP_20140701_17_57_52_Pro.jpg
var img2 = devlontecron.github.io/media/pictures/WP_20140814_013.jpg
var img3 = devlontecron.github.io/media/pictures/WP_20150702_21_21_14_Pro (2).jpg
var img4 = devlontecron.github.io/media/pictures/WP_20150725_12_45_10_Pro.jpg
var img5 = devlontecron.github.io/media/pictures/WP_20160522_15_17_47_Pro_LI (3).jpg
var img6= devlontecron.github.io/media/pictures/WP_20160625_21_30_37_Pro (2).jpg
var img7 = devlontecron.github.io/media/pictures/WP_20160913_14_42_22_Pro.jpg
var img8 = devlontecron.github.io/media/pictures/tumblr_mnhlogNdIK1ssuam5o1_1280.jpg


function myFunction() {
   alert("hello");
}


function background(){
  var rando = Math.floor(Math.random()*9);
  return imgArray[rando];
}
