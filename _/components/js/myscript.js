/*
 * This File Prosesses to Final Script which is mangled.
 */

var topoffset = 43;
$(document).ready(function () {  
    var $item = $('.carousel .item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight); 
    $item.addClass('full-screen');
    
    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
          'background-image' : 'url(' + $src + ')'
        });
        $(this).remove();
      });
      
      $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
      });
      
      $('.carousel').carousel({
        interval: 6000,
        pause: "false"
      });
    
   //make menusdrop automatically
   $('ul.nav li.dropdown').hover(function () {
       $('.dropdown-menu', this).fadeIn('slow');
   }, function (){
       $('.dropdown-menu', this).fadeOut('fast');
   });
   
       //for only nav links use this
       /* $('.nav li a') or a[href*=#]'*/
       
    $('.nav li a').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'')
      && location.hostname === this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top - topoffset;

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