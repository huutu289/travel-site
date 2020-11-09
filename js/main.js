const responsive =
{
    0:{
        items: 1
    },
    320:{
        items: 1
    },
    560:{
        items: 2
    },
    960:{
        items: 3
    },

}
$(document).ready(function(){

    $Nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $menuTop = $('.menu-top');
    $social = $('.social');

    // click even on toggle menu
    $toggleCollapse.click(function(){
        $Nav.toggleClass('collapse');
        $menuTop.toggleClass('show-menu-top');
        $social.toggleClass('show-menu-top');

    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:false,
        autoplayTimeout: 3000,
        dots: false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive

    }
    );

    // click to scroll top
    $('.footer__move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });

});