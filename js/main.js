/*
* MOET - Multi-Scrolling Coming Soon Template
* Build Date: July 2015
* Author: Madeon08
* Copyright (C) 2015 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. MultiScroll
    3. Carousels
    4. Countdown
    5. Newsletter
    6. Swipebox
    7. Tooltips
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {

    // General animations
    setTimeout(function() {

        $(".loading-part").addClass("index-999");

        $(".ms-left").addClass("fadeInLeft");
        $(".ms-right").addClass("fadeInRight");

        $(".social-icons").addClass("fadeIn").removeClass("opacity-0");

    }, 1000);

    // FadeInDown for the digits
    setTimeout(function() {
        $('.digit').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('fadeInDown').removeClass("opacity-0");
                }, (i * 150) + 150);
            })(this);
        });
    }, 2000);

    // FadeInRight for the text "Days", FadeInUp for the nav and active link to the active point to display the tooltip
    setTimeout(function() {
        $(".text-right").addClass("fadeInRight").removeClass("opacity-0");

        $('.link-nav').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('fadeInUp').removeClass("opacity-0");
                }, (i * 200) + 200);
            })(this);
        });

        $('#multiscroll-nav li a.active').addClass('active-opening');
    }, 2850);

    // FadeInUp for the text
    setTimeout(function() {
        $(".text-news").addClass("fadeInUp").removeClass("opacity-0");
    }, 3000);

    // FadeInUp for the newsletter form
    setTimeout(function() {
        $("#subscribe").addClass("fadeInUp").removeClass("opacity-0");  
    }, 3400);

    // Display none for the loading
    setTimeout(function() {
        $(".loading-part").addClass("display-none");
    }, 4200);

    // Remove all the animations to prevent when the screen is resized, for playing them again, if you remove the next lines, the entrance animations will be played each time
    setTimeout(function() {
        $(".digit").removeClass("fadeInDown animated-middle").addClass("");
        $(".text-right").removeClass("fadeInRight animated-middle").addClass("");
        $(".text-news").removeClass("fadeInRight animated-middle").addClass("");
        $("#subscribe").removeClass("fadeInRight animated-middle").addClass("");
        $('#multiscroll-nav li a').removeClass('active-opening');
    }, 4650);

});

$(document).ready(function(){

    // Hover purchase part, effect on the button
    $("#left3").hover(
        function() {
            $('a.action').toggleClass('shake');
        }
    );

    /* ------------------------------------- */
    /* 2. MultiScroll ...................... */
    /* ------------------------------------- */

    $('#multi-div').multiscroll({
        // anchors: ['Home', 'About', 'Services', 'Contact'],
        loopTop: true,
        loopBottom: true,
        navigation: true,
        navigationTooltips: ['خانه', 'درباره ما', 'خدمات', 'تماس'],
    });

    function toggleMs() {
    if ($(window).width() <= 1024) {

        $('#multi-div').multiscroll.destroy();

    } else {

        $('#multi-div').multiscroll.build();

        }
    }

    toggleMs();  // Checking when page load

    $(window).resize(function(){
        toggleMs(); // Checking to destroy or build when we resize browser
    });
    
    /* ------------------------------------- */
    /* 3. Carousels ........................ */
    /* ------------------------------------- */

    $('#carousel-pictures').carousel({
      interval: 5000 // False if you want to remove auto slide
    });

    $('#carousel-services').carousel({
      interval: 5000 // False if you want to remove auto slide
    });

    /* ------------------------------------- */
    /* 4. Countdown ........................ */
    /* ------------------------------------- */

    // Set you end date just below
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 28,
            'month': 3,
            'year': 2023,
            'hour': 11,
            'min': 13,
            'sec': 0
        },
        omitWeeks: true
    });

    /* ------------------------------------- */
    /* 5. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 6. Swipebox ......................... */
    /* ------------------------------------- */

    $('.swipebox').swipebox();

    /* Video */
    $('.swipebox-video').swipebox();

    /* ------------------------------------- */
    /* 7. Tooltips ......................... */
    /* ------------------------------------- */

    if (window.matchMedia("(min-width: 1025px)").matches) { 
            
        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }

});
