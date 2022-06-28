$(function(){

    $('.slider').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
          var animateLeft, slideLeft;
          
          advance();
          
          if ($group.is(':animated') || currentIndex === newIndex) {
            return;
          }
          
          bulletArray[currentIndex].removeClass('active');
          bulletArray[newIndex].addClass('active');
          
          if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
          } else {
            slideLeft = '-100%';
            animateLeft = '100%';
          }
          
          $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
          });
          $group.animate({
            left: animateLeft
          }, function() {
            $slides.eq(currentIndex).css({
              display: 'none'
            });
            $slides.eq(newIndex).css({
              left: 0
            });
            $group.css({
              left: 0
            });
            currentIndex = newIndex;
          });
        }
        
        function advance() {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
              move(currentIndex + 1);
            } else {
              move(0);
            }
          }, 4000);
        }
        
        $('.next_btn').on('click', function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        });
        
        $('.previous_btn').on('click', function() {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(3);
          }
        });
        
        $.each($slides, function(index) {
          var $button = $('<a class="slide_btn">&bull;</a>');
          
          if (index === currentIndex) {
            $button.addClass('active');
          }
          $button.on('click', function() {
            move(index);
          }).appendTo('.slide_buttons');
          bulletArray.push($button);
        });
        
        advance();
      });


});


// owl

$(function(){
    $('.main-carousel').owlCarousel({

        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        autoplayHoverPause: false,
        autoplay: false, //5000
        smartSpeed: 700,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {

            0: {
                items: 1
            },
            600: {
                items: 1
            },
            760: {
                items: 1,
                nav: false
            },
            1024: {
                items: 1
            },
            1100: {
                items: 1
            }
        }
    });

});
