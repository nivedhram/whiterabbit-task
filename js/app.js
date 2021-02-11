
jQuery(function ($) {
  'use strict'; // preloader


  $(window).on('load', function(){

    new WOW().init(); 
});
  var $navbarCollapse = $('.navbar-main .collapse'); // Collapse navigation

  $navbarCollapse.on('hide.bs.collapse', function () {
    var $this = $(this);
    $this.addClass('collapsing-out');
    $('html, body').css('overflow', 'initial');
  });
  $navbarCollapse.on('hidden.bs.collapse', function () {
    var $this = $(this);
    $this.removeClass('collapsing-out');
  });
  $navbarCollapse.on('shown.bs.collapse', function () {
    $('html, body').css('overflow', 'hidden');
  });
  $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
    var $this = $(this).find('.dropdown-menu');
    $this.addClass('close');
    setTimeout(function () {
      $this.removeClass('close');
    }, 200);
  });
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.fixed-top').addClass('on-scroll');
    } else {
       $('.fixed-top').removeClass('on-scroll');
    }
});

  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target'); // animate

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
    });
  } // Tooltip

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });



  $(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
        
        
    
    
      
      
    // document ready  
    });
    
    
    


}); // JQuery end