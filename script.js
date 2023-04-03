$(document).ready(function () {
    const $tabs = $('ul.tabs1 li');
    const $tabContents = $('.tab-content');
    const $tab = $('ul.tabs li');
    const $inputField = $(".input_filed");
    const $slider = $('.slider1');
    const $progressBar = $('.progress1');
    const $progressBarLabel = $('.slider__label');
    const sticky = $('.nav');
    const icon = $('.left_nav_icon');
    const hide = $('.none');
    const span = $('.toggle span ');
    const isWidth900 = function () {
        return $(window).width() <= 900
    }

    //slick Slider
    $('.slider_container').slick({
        variableWidth: true,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        autoplay: false,
        speed: 800,
        lazyLoad: "progressive",
    }).slickAnimation();

    //Slick Slider end

    $(".switcher_btn").click(function () {
        $("body").toggleClass("switcher");
    });

    $(".form-search").click(function () {
        $(".form-search").addClass("form-search_after");
    });

    $(".search").click(function () {
        $(".form-search").removeClass("form-search_after");
    });

    //Tabs

    $tab.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tab.removeClass('current');
        $tabContents.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    //tabs End

    $tabs.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tabs.removeClass('current');
        $tabContents.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    //chackbox

    $inputField.click(function () {
        const $parent = $(this).parent();

        if (!$parent.hasClass("line-dash")) {
            $(".center_text").removeClass("line-dash");
            $(this).find("input[type='checkbox']").prop('checked', true)
        }
        else {
            $(this).find("input[type='checkbox']").prop('checked', false)
        }
        $parent.toggleClass("line-dash");
    });

    //chackbox end

    //Nav fixed when scroll

    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('fixed');
            icon.fadeOut();
            hide.slideDown();
            span.addClass('span_color');
        }
        else {
            sticky.removeClass('fixed');
            span.removeClass('span_color');
            icon.fadeIn();
            hide.slideUp();
        }
    });

    //Nav fixed when scroll end

    //Accordion

    $(".accordion_item_header").click(function () {

        if ($(this).next('.panel').hasClass('panel_display')) {
            $(".panel").removeClass('panel_display');
            $(".panel").slideUp();
            $(".accordion-item").removeClass("active-menu");
        }
        else {
            $(".panel").removeClass('panel_display');
            $(".panel").slideUp();
            $(".accordion-item").removeClass("active-menu");
            $(this).next('.panel').addClass('panel_display');
            $(this).next('.panel').slideDown();
            $(this).parent(".accordion-item").addClass("active-menu");
        }
    });

    //Accordion End

    $('.toggle').click(function () {
        $('body').toggleClass('opensidenav');
    });

    $('.ico').click(function () {
        $('.notification_item').slideToggle(500);
        $('.notification_item_left').slideUp(500);
        $("body").toggleClass("scroll-end");
    })

    $('.right_img').click(function () {
        $('.notification_item_left').slideToggle(500);
        $('.notification_item').slideUp(500);
        $("body").toggleClass("scroll-end");
    })

    $('.guide').click(function () {
        $('.card_details').toggleClass('display_property');
        $("body").toggleClass("scroll-end");
    })

    //Progress Bar

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    //Progress Bar End

    // Guide Slider With Progress bar
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
    $('.toggle').click(function () {
        if (isWidth900()) {
            $('.section_text1').addClass('visible');
            $('.toggle').toggleClass('span-toggle')
        }
    });

    // Guide Slider With Progress bar end

    $('.padding_box').click(function () {
        if (isWidth900()) {
            $('.section_text1').removeClass('visible');
            $('.padding_box').removeClass('padding');
        }
    })
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

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}