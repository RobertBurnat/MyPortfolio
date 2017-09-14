
$(document).on('click', 'a', event => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(event.currentTarget, 'href') ).offset().top
    }, 800);
});