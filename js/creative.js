(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // check scroll
    function checkScroll() {
        var startY = 100;
        if($(window).scrollTop() > startY) {
            $("#mini-logo").attr("src","img/FIRMM_logo_grey_nav.png");
        }
        else {
            $("#mini-logo").attr("src","img/FIRMM_logo_grey_nav_invert.png");
        }
    }

    // Check scroll
    $(window).on("scroll load resize", function() {
        checkScroll();
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.about', {
        duration: 300,
        scale: 0.5,
        reset: true,
        viewFactor: 0.1,
        delay: 50
    });

})(jQuery); // End of use strict
