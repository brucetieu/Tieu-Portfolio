$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0})
    });

    // Toggle the menu / navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoeverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
            
        }
    });

})
