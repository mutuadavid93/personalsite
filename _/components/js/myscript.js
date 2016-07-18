/*
 * This File Prosesses to Final Script which is mangled.
 */

$(document).ready(function () {
    //highlight current nav
    $("#home a:contains('Skills')").parent().addClass('active');
    $("#schedule a:contains('Greetings')").parent().addClass('active');
    $("#venuetravel a:contains('Portfolio')").parent().addClass('active');
    $("#artists a:contains('Contacts')").parent().addClass('active');
    $("#register a:contains('About')").parent().addClass('active');
    
   //make menusdrop automatically
   
   $('ul.nav li.dropdown').hover(function () {
       $('.dropdown-menu', this).fadeIn('slow');
   }, function (){
       $('.dropdown-menu', this).fadeOut('fast');
   });
   
       //for only nav links use this
       /* $('.nav li a') or a[href*=#]'*/
       
    $('.nav li a', '#myname').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'')
      && location.hostname === this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top - 20;

          //scroll a certain amount of pixels above the element with the id that it scrolls to
          //Replace with this;
          /* var targetOffset = $target.offset().top - 20; */

          $('html,body')
          .animate({scrollTop: targetOffset}, 1000);
         return false;
        }
      }
    });
   
});

 $('.carousel h2').addClass("wow slideInLeft").attr('data-wow-duration', '1.6s');
 $('.carousel-caption p').addClass("wow slideInRight").attr('data-wow-duration', '1.6s');
 
 
 /* The scrolling magic function
 function scrollIgnite(){
     $(".nav a").on('click', function (event) {
         event.preventDefault();
         
         var sectionID = event.currentTarget.id;
         $("html body").animate({
             scrollTop: $("#" + sectionID).offset().top
         }, 1000);
     });
 }
 */