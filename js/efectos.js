$(document).ready(function (){

    // Navbar collapse after 'click'

    $('.nav-link').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // 'Marino Vera - Web Developer' Effect

    if( $(window).width() > 800) {
        $('header .texto').css({
            opacity: '0',
            marginTop: '0'
        })


        $('header .texto').animate({
            opacity: '1',
            marginTop: '-32px'
        }, 1500);
    };

    // Navbar Click Scroll
    var homeMe = $('#home').offset().top,
        aboutMe = $('#acerca-de').offset().top,
        projectsMe = $('#projects').offset().top,
        contactMe = $('#contact').offset().top;

    $('.btn-home').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: homeMe
        }, 1000);
    });

    $('.btn-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : aboutMe - 53
        }, 1000);
    });

    $('.btn-project').on('click', function(e){
        e.preventDefault();

        if( $(window).width() < 400 && $(window).width() > 365 ) {

            $('html, body').animate({
                scrollTop : projectsMe - 50
            }, 1000);

        } else if ( $(window).width() < 400) {

            $('html, body').animate({
                scrollTop : projectsMe - 20
            }, 1000);

        } else if( $(window).width() > 400 && $(window).width() < 800) { 
            
            $('html, body').animate({
                scrollTop : projectsMe - 20
            }, 1000);

        } else {
            
            $('html, body').animate({
                scrollTop : projectsMe - 50
            }, 1000);
        }  
        
    });

    $('.btn-contact').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop : contactMe 
        }, 1000);
       
        /* if( $(window).width() < 400) {
            
            $('html, body').animate({
                scrollTop : contactMe - 350
            }, 1000);

        } else if( $(window).width() > 400 && $(window).width() < 800) {
            
            $('html, body').animate({
                scrollTop : contactMe - 200
            }, 1000);

         } else {

                $('html, body').animate({
                    scrollTop : contactMe 
                }, 1000);
            } */
    });
});

   /*  window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("menu").style.padding = "30px 10px";
    } else {
        document.getElementById("navbar").style.padding = "80px 10px";
    }
} */
    

/* var height = $('#header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop > height ) {
            $('.menu').addClass('sticky'); }
            else {
                $('.menu').removeClass('sticky');
            }
        }
    ) */

