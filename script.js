$('.slider_container').slick({
    variableWidth: true,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    speed: 800,
    lazyLoad: "progressive",
}).slickAnimation();

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

    const $tabs = $('ul.tabs1 li');
    const $tabContents = $('.tab-content');
    const $inputField = $(".input_filed");

    $tabs.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tabs.removeClass('current');
        $tabContents.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $inputField.click(function () {
        const $parent = $(this).parent();

        if (!$parent.hasClass("na")) {
            $(".center_text").removeClass("na");
            $(this).find("input[type='checkbox']").prop('checked', true)
        }
        else {
            $(this).find("input[type='checkbox']").prop('checked', false)
        }
        $parent.toggleClass("na");
    });


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
        $('.notification_item').slideToggle(500);
        $('.notification_item1').slideUp(500);
        $("body").toggleClass("over");
    })

    $('.right_img').click(function () {
        $('.notification_item1').slideToggle(500);
        $('.notification_item').slideUp(500);
        $("body").toggleClass("over");
    })

    $('.padding_box').click(function () {
        $('.notification_item').slideUp(500);
        $('.notification_item1').slideUp(500);
        $("body").removeClass("over");
    })

    $('.guide').click(function () {
        $('.showoff').toggleClass('jayoff');
        $("body").toggleClass("over");
        $('.padding_box').removeClass('jayoff')
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


$(document).ready(function () {
    var $slider = $('.slider1');
    var $progressBar = $('.progress1');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400
    });
    $(".prev-btn").click(function () {
        $(".slider1").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".slider1").slick("slickNext");
    });
});

const xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const yValues = [0, 35, 70, 105, 140];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            data: [17, 2, 0, 29, 20, 11, 3, 20, 24, 0, 29, 4],
            backgroundColor: "#FFCCCB ",
            fill: false
        }, {
            data: [124, 100, 20, 120, 117, 34, 40, 117, 20, 20, 113, 101],
            backgroundColor: "#90EE90",
            fill: false
        }, {
            data: [40, 45, 27, 50, 32, 50, 24, 32, 40, 27, 50, 79],
            backgroundColor: "#CBC3E3",
            fill: false
        }, {
            data: [20, 100, 80, 14, 86, 29, 40, 86, 100, 80, 14, 3],
            backgroundColor: "#ADD8E6",
            fill: false
        },]
    },
    options: {
        plugins: { legend: { display: false }, },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: false,
                    steps: 35,
                    max: 140
                }
            }]
        }

    }
});