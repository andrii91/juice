$(document).ready(function(){$(".head-carousel").owlCarousel({loop:!0,margin:0,nav:!1,items:1}),$(".team-carousel").owlCarousel({loop:!0,nav:!0,dots:!1,responsive:{0:{items:1},600:{items:3}}}),$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(window).width()>1200&&$(".team-carousel .owl-next").hover(function(){$triggerClick=setInterval(function(){$(".team-carousel .owl-next").trigger("click")},1e3)},function(){clearInterval($triggerClick)}),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu, nav .xs-center, .lang").slideToggle(200)}),$(".team_all-tab a").click(function(e){e.preventDefault(),$(".team_all-tab a").removeClass("active"),$(".content-item").removeClass("active"),$(this).addClass("active"),$($(this).attr("href")).addClass("active")}),$(".events_all-tab a").click(function(e){e.preventDefault(),$(".events_all-tab a").removeClass("active"),$(".events_all-item").removeClass("active"),$(this).addClass("active"),$($(this).attr("href")).addClass("active")}),$(".team_all-item .text>img").click(function(){var e=$(this).parents(".team_all-item");e.hasClass("active")?($(".team_all-item").removeClass("active"),$(".team_all-item .more").slideUp(400)):($(".team_all-item").removeClass("active"),$(".team_all-item .more").slideUp(400),e.addClass("active"),e.find(".more").slideDown(400))}),$(".event-item").click(function(){var e=$(this);e.toggleClass("active"),e.parent().find(".more").slideToggle(400)}),$("form").on("submit",function(e){e.preventDefault(),$(".submit").addClass("inactive"),$(".submit").prop("disabled",!0);var t=$(this);t.hide(),t.parent().find(".team-title").text("Thank you"),t.parent().find(".team-sub_title").text("Some copy here")})});