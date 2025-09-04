$('.carousel').on('slide.bs.carousel', function (e) {
    var $next = $(e.relatedTarget);
    var idx = $next.index();
    var itemsPerSlide = 1; // Number of items to slide
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - itemsPerSlide) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // Move to the beginning
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
        }
    }
});