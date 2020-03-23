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
        $(this).find(".menu1-title").removeClass("borderlast").addClass("bordernext");
    },function () {
        $(this).find(".menu1-title").removeClass("bordernext").addClass("borderlast");
    });
    $(".addtowish-btn").hover(function () {
        $(this).next().show(100);
    },function () {
        $(this).next().hide(100);
    });
    $(".product-generall-links").click(function () {
        var links=$(this).attr("href");
        $(".olive").hide(0);
        $(links).show(0);
    });
    /* Open the sidenav */
    $("#search").click(function () {
        $("#my-search").animate({width:'100%'},300);
    });
    $("#my-close-btn").click(function () {
        $("#my-search").animate({width:'0'},300);
    });
    $("#filter").click(function () {
        $(".filter-window").animate({width:'300px'},300);
    });
    $("#close-filter-btn").click(function () {
        $(".filter-window").animate({width:'0'},100);
    });
    $('.brand').slick({
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite:true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $("#menu-responsive").click(function () {
        $(".menu-responsive-container").animate({width:'100%'},300);
        $(".menu-responsive-container ul").show();

    });
    $("#responsive-close-btn").click(function () {
        $(".menu-responsive-container").animate({width:'0'},300);
        $(".menu-responsive-container ul").hide();
    });
    $(".responsive-items").click(function () {
        $(this).find(".response-2level").slideToggle(100);
        $(this).find(".responsive-links i").toggleClass("fa fa-angle-right");
        $(this).find(".responsive-links i").toggleClass("fa fa-angle-down pink-active");
    });
    $("#bar-search-btn").click(function () {
        $(".bar-search").slideToggle(100);
    });


});
