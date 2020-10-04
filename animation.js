/*
	JS code for animation!
*/
$( document ).ready(function() { 
   
   $("#profile_image").hide();
   $("#title_text").hide();
   $("#nav_links").hide();
    $("#content").hide();
   $("#title_text").fadeIn(2000);
   $("#nav_links").fadeIn(2000);
   $("#profile_image").fadeIn(3000);
   $("#content").slideDown(2000);
});