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

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["aspiring software engineer", "life long learner", "problem solver", "technology enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    var typed = new Typed(".typing-2", {
        strings: ["aspiring software engineer", "life long learner", "problem solver", "technology enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

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
