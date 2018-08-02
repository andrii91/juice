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
  
  $('.team-carousel .owl-next').hover(function(){
    $triggerClick = setInterval(function(){
        $('.team-carousel .owl-next').trigger('click');
      }, 1000)
  }, function() {
    clearInterval($triggerClick);
  })
  

  

});