/*
 * This File Prosesses to Final Script which is mangled.
 */

$(document).ready(function () {
    //highlight current nav
    $("#home a:contains('Home')").parent().addClass('active');
    $("#schedule a:contains('Schedule')").parent().addClass('active');
    $("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
    $("#artists a:contains('Artists')").parent().addClass('active');
    $("#register a:contains('Register')").parent().addClass('active');
    
   //make menusdrop automatically
   
   $('ul.nav li.dropdown').hover(function () {
       $('.dropdown-menu', this).fadeIn('slow');
   }, function (){
       $('.dropdown-menu', this).fadeOut('fast');
   });   
});

 $('.carousel h2').addClass("wow slideInLeft").attr('data-wow-duration', '2s');
 $('.carousel-caption p').addClass("wow slideInRight").attr('data-wow-duration', '2s');