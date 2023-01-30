$(document).ready(function() {
    $('.slider_1').slick({
        arrows : true,
        dots : false,
          slidesToShow: 2,
          responsive: [
            {
                breakpoint: 900,
                settings: {
                    vertical : true,
                }
            },
        ]
    });
    $('.slider_2').slick({
        arrows : true,
        dots : false,
          slidesToShow: 2,
          responsive: [
            {
                breakpoint: 900,
                settings: {
                    vertical : true,
                }
            },
        ]
    });
});
