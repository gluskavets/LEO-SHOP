
jQuery(function ($) {
    $('.sl').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 1,
        infinite: true,
        arrows: true, /*стрілки керування*/
    });

    $('aside .slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true
    });
    $('.menu').click(function () {
        $('.menu').toggleClass('active');
        $('.block-right').toggleClass('active');
    });

});
