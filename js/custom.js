// JavaScript Code
// =========================
//Get the button
var goToTop = document.getElementById("goToTop");
var topOffset = 100;

// Function declaration
function scrollFunction() {
    if (document.body.scrollTop > topOffset || document.documentElement.scrollTop > topOffset) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
}

// Function call on scroll
window.onscroll = function () {
    scrollFunction()
};

// Clicks funtion, scroll back to the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// JQuery code here

// Tips
// $();                                     => selector syntax
// $().ready()                              => ready state
// $().ready(function(){ /*code here*/ });  => pass fucntion for ready state

$(document).ready(function () {
    var body = $('body');
    var nav = $('#nav');
    var menu = $('#nav .menu');
    var navToggle = $('#nav .btn-toggle');
    var navToggleIcon = $('#nav .btn-toggle i');

    navToggle.on('click', function () {
        // $('#nav .menu').toggle();
        menu.toggleClass('open');
        body.toggleClass('menu-open');
        navToggleIcon.toggleClass('fa-bars fa-times');
    });


    // On Scroll Navbar Animate
    $(window).bind('scroll', function () {
        // Variables
        var navHeight = nav.innerHeight();
        var navOffset = $(window).height() - navHeight;
        console.log(navOffset);

        // Conditional code block
        if ($(window).scrollTop() > navOffset) {
            nav.addClass('fixed');
            body.css('paddingTop', navHeight + 'px');
        } else {
            nav.removeClass('fixed');
            body.css('paddingTop', 0);
        }

    });

    // Slick Slider JS
    // Variable Declaration
    var mainSlider = $('.slick-carousel');

    // Slick Initialize & Settings
    mainSlider.slick(
        {
            // lazyLoad: 'ondemand',
            autoplay: true,
            // autoplaySpeed: 500,
            dots: true
        }
    );
});