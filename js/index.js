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
        $(this).find(".gallery-features").animate({right:'-49px'},300);
    });
    $(".gallery-items").hover(function () {
        $(this).find(".gallery-like").animate({right:'0%'},300);
    },function () {
        $(this).find(".gallery-like").animate({right:'-50px'},300);
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

    //slider paeein safhe
    $(".center").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    // navbar edited
    $(".menu1-links").hover(function () {
        $(this).find(".header2-link").show(200);
        $(this).find(".menu1-title").removeClass("borderlast").addClass("bordernext");
    },function () {
        $(this).find(".header2-link").hide(200);
        $(this).find(".menu1-title").removeClass("bordernext").addClass("borderlast");
    });
    //account signin
    $(".social-links").hover(function () {
        $(this).next().fadeIn();
    },function () {
        $(this).next().fadeOut();
    });






});