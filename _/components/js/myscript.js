/*
 * This File Prosesses to Final Script which is mangled.
 */
new WOW().init();
var topoffset = 30;
$(document).ready(function () {  
    var isTouch = 'ontouchstart' in document.documentElement;
    
    //all the pie-charts under Rating
        $('.easy-pie-chart.percentage').each(function(){
                $(this).easyPieChart({
                        barColor: $(this).data('color'),
                        trackColor: '#EAEAB4',
                        scaleColor: false,
                        lineCap: 'square',
                        lineWidth: 14,
                        animate: 1000,
                        size:132
                }).css('color', $(this).data('color'));
        });
    
    /*
     * 
     * @type $Carousel Fullscreen
     */
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
        interval: 4000,
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
       
    $('a[href*="#"]:not([href="#"])').click(function() {
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
   
   /*
    * Mustache Testimonials section
    */
   $.getJSON('json/data.json', function (data) {
        var template = $('#speakerstpl').html();

        //call mustache.to_html(), 
        //to process the data and create the template and feed it to html
        var html = Mustache.to_html(template, data);
        $('#carousel').html(html);

        if(!isTouch) {
            //the cycle carousel
            $('#carousel').cycle({
                fx: 'fade',
                pause: 1,
                timeout: 2500
            });
        }
    });//get json
});

 $('.carousel h2').addClass("wow slideInLeft").attr('data-wow-duration', '1.6s');
 $('.carousel-caption p').addClass("wow slideInRight").attr('data-wow-duration', '1.6s');