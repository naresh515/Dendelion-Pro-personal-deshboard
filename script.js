$('.slider_container').slick({
    variableWidth: true,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
})

$(document).ready(function () {
    $(".click").click(function () {
        $("body").toggleClass("naresh");
    });

    $(".form-search").click(function () {
        $(".form-search").addClass("form-search1")
    });

    $(".search").click(function () {
        $(".form-search").removeClass("form-search1")
    });

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $(".input_filed").click(function () {
        if (!$(this).parent().hasClass("na")) {
            $(".center_text").removeClass("na");
        }
        $(this).parent().toggleClass("na");
    })

    var sticky = $('.nav');
    var icon = $('.left_nav_icon');
    var hide = $('.hiden_item');
    var span = $('.toggle span ');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('fixed');
            icon.fadeOut();
            hide.slideDown()
            span.addClass('toogle')
        }
        else {
            sticky.removeClass('fixed');
            span.removeClass('toogle')
            icon.fadeIn();
            hide.slideUp()
        }
    });

    $(".accordion_item_header").click(function () {
        $(this).parent(".accordion-item").find(".panel").toggleClass("acto");
        $(this).parent(".accordion-item").toggleClass("active-menu");
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".panel").removeClass('acto');
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".panel").removeClass('acto');
        $(this).parent(".accordion-item").prevAll(".accordion-item").removeClass("active-menu");
        $(this).parent(".accordion-item").nextAll(".accordion-item").removeClass("active-menu");
    });

    $(".active2").click(function () {
        $(this).parent(".accordion-item").find(".panel").slideToggle();
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".panel").slideUp();
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".panel").slideUp();
    });


    $('.toggle').click(function () {
        $('.section_text1').toggleClass('visible');
        $('.nav').toggleClass('na1')
        $('.padding_box').toggleClass('padding')
        $('.toggle').toggleClass('tog')
        $('.left_aside').toggleClass('left_aside1')
        $('.hiden_item').toggleClass('ajax')
        $('button.heading').toggleClass('he')
        $('.toogle').toggleClass('coler')
    });

    $('.ico').click(function () {
        $('.notification_item').slideDown(500);
        $('.notification_item1').slideUp(500);
        $("body").addClass("over");
    })

    $('.right_img').click(function () {
        $('.notification_item1').slideDown(500);
        $('.notification_item').slideUp(500);
        $("body").addClass("over");
    })

    $('.padding_box').click(function () {
        $('.notification_item').slideUp(500);
        $('.notification_item1').slideUp(500);
        $("body").removeClass("over");
    })
})

var check = function () {
    return $(window).width() <= 900
}

$(document).ready(function () {
    $('.toggle').click(function () {
        if (check()) {
            $('.section_text1').addClass('visible');
            $('.toggle').toggleClass('tog')
        }
    });

    $('.padding_box').click(function () {
        if (check()) {
            $('.section_text1').removeClass('visible');
        }
    })
})