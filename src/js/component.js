$(document).ready(function () {
  $('.head-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1
  });
  $('.team-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 3,
      }
    }
  });

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  if ($(window).width() > 1200) {
    $('.team-carousel .owl-next').hover(function () {
      $triggerClick = setInterval(function () {
        $('.team-carousel .owl-next').trigger('click');
      }, 1000)
    }, function () {
      clearInterval($triggerClick);
    })

  }



  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu, nav .xs-center, .lang').slideToggle(200);
  });

  $('.team_all-tab a').click(function (e) {
    e.preventDefault();
    $('.team_all-tab a').removeClass('active');
    $('.content-item').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  })

  $('.events_all-tab a').click(function (e) {
    e.preventDefault();
    $('.events_all-tab a').removeClass('active');
    $('.events_all-item').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  })

  $('.team_all-item .text>img').click(function () {
    var $from = $(this).parents('.team_all-item');
    if ($from.hasClass('active')) {
      $('.team_all-item').removeClass('active');
      $('.team_all-item .more').slideUp(400);
    } else {
      $('.team_all-item').removeClass('active');
      $('.team_all-item .more').slideUp(400);

      $from.addClass('active');
      $from.find('.more').slideDown(400);
    }

  })

  $('.event-item').click(function () {
    var $from = $(this);

    $from.toggleClass('active');
    $from.parent().find('.more').slideToggle(400);


  })




});
