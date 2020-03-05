jQuery(document).ready(function ($) {
    $('.feature-container').each(function () {
        $(".feature-post").slick({
            autoplay:true,
            autoplaySpeed: 1000000,
            dots:false,
        });
    });
});