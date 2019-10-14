(function(){

  var menu = $(".header__list");
  var action = $(".menu__action");
  function setup(){
    menuShow();
    showJobDetails();
    makeThingsAppear();
    storySlider();

  }

  function storySlider(){
    $(".story__list").slick({
      dots:false,
      slidesToShow:1,
      slidesToScroll:1,
      speed:500,
      adaptiveHeight: true,
    });

    $('a[data-slide]').click(function(e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.story__list').slick('slickGoTo',slideno, false);
    });

    $('.story__next').click(function(e){
      e.preventDefault();
      var slideno = $('.slick-active').data('slick-index');
      $('.story__list').slick('slickGoTo',slideno+1, false);
    })
  }


  function menuShow(){
    action.on("click",function(event){
      event.preventDefault();
      menu.toggleClass("header__list--opened");
      action.toggleClass("action--hide");
    })
  }


function showJobDetails(){
  $('.card__more').on("click",function(event){
    event.preventDefault();
    $(this).parent().find('.card__description').toggleClass("hide");
  });
}
  function makeThingsAppear(){
    window.sr = ScrollReveal();
        sr.reveal(".usage__texts", {
            easing: "ease",
            duration: "1500",
            origin: "left",
            distance: "100px",
        });

        sr.reveal(".usage__list", {
            easing: "ease",
            duration: "1500",
            origin: "right",
            distance: "100px"
        });

        sr.reveal(".perk__item", {
            easing: "ease",
            duration: "1500",
            origin: "bottom",
            distance: "100px"
        });

        sr.reveal(".intro__content", {
            easing: "ease",
            duration: "1500",
            origin: "bottom",
            distance: "100px"
        });

        sr.reveal(".card__item", {
            easing: "ease",
            duration: "1500",
            origin: "bottom",
            distance: "100px"
        });


        sr.reveal(".section__intro", {
            easing: "ease",
            duration: "1500",
            origin: "bottom",
            distance: "100px"
        });



  }

  setup();
})();
