jQuery(document).ready(function ($) {
    $('.feature-container').each(function () {
        $(".feature-post").slick({
            autoplay:true,
            autoplaySpeed: 1000000,
            dots:false,
        });
    });
    var template="fa fa-heartbeat";
    var gallery=$(".gallery-like a i").attr("class");
    $(".articles-items ul li ").click(function () {
        $(this).css("border-bottom","2px solid #000000");
        $(this).find("a").css("color","#000000","border-bottom","0");
    });














    $(".gallery-items").hover(function () {
        $(this).find(".gallery-features").animate({right:'0%'},300);
    },function () {
        $(this).find(".gallery-features").animate({right:'-14%'},300);
    });
    $(".gallery-items").hover(function () {
        $(this).find(".gallery-like").animate({right:'0%'},300);
    },function () {
        $(this).find(".gallery-like").animate({right:'-14%'},300);
    });
    $(".gallery-features ul li").hover(function () {
        $(this).find(".gallery-features-info").show(200);
    },function () {
        $(this).find(".gallery-features-info").hide(200);
    });









    $(".gallery-like").hover(function () {
        $(this).find(".gallery-features-info").show(200);
    },function () {
        $(this).find(".gallery-features-info").hide(200);
    });
    
    $(".gallery-like").click(function () {
        $(this).find("a i").removeClass("fa fa-heartbeat").addClass("fa fa-heart red-color");
        $(".gallery-like .gallery-features-info").text("ViewWishList");
    });





});