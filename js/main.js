$(function() {

    $(document).ready(function(){
        $(".menu a").on("click", function (event) {
            event.preventDefault();    
            var id  = $(this).attr('href'),    
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });    
    });

    $('.blog-slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        prevArrow: false,
        nextArrow: false
        // prevArrow: '<button type="button" class="slick-prev"><img src="images/section/arrow-left.png" alt="arrow-left"></button>',
        //  '<button type="button" class="slick-next"><img src="images/section/arrow-right.png" alt="arrow-right"></button>'
    });

    $('.menu-button, .menu a').on('click', function(){
        $('.header-top').toggleClass('header-top--active');        
    });



    var mixer = mixitup('.compilation-slider');
    
});