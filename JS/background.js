window.onload = function(){
    

var imgArray = [];

imgArray[0] = "../media/pictures/WP_20130817_181.jpg";
imgArray[1] = "../media/pictures/WP_20140701_17_57_52_Pro.jpg" ;
imgArray[2] = "../media/pictures/WP_20140814_013.jpgg";
imgArray[3] = "../media/pictures/WP_20150702_21_21_14_Pro (2).jpg" ;
imgArray[4] = "../media/pictures/WP_20150725_12_45_10_Pro.jpg" ;
imgArray[5] = "../media/pictures/WP_20160522_15_17_47_Pro_LI (3).jpg" ;
imgArray[6] = "../media/pictures/WP_20160625_21_30_37_Pro (2).jpg" ;
imgArray[7] = "../media/pictures/WP_20160913_14_42_22_Pro.jpg" ;
imgArray[8] = "../media/pictures/tumblr_mnhlogNdIK1ssuam5o1_1280.jpg" ;
    
    
var rando =Math.floor(Math.random()*9);
    var x = imgArray[rando];
  
    document.getElementById("header").innerHTML = x;
     document.body.style.background = "#f3f3f3 url('x');


};

