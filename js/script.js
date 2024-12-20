$(document).ready(function() {
    let index = 0;
    const totalSlides = $('.slides img').length;

    $('#next').click(function() {
        index = (index + 1) % totalSlides;
        updateSlider();
    });

    $('#prev').click(function() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        const offset = -index * 1300;
        $('.slides').css('transform', 'translateX(' + offset + 'px)');
    }
});
