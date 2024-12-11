// JavaScript file to enable interactivity for the Dynamic Page

$(document).ready(function () {
    // Slideshow functionality
    let currentSlide = 0;
    const slides = $(".slideshow");

    function showNextSlide() {
        slides.eq(currentSlide).fadeOut(500, function () {
            currentSlide = (currentSlide + 1) % slides.length;
            slides.eq(currentSlide).fadeIn(500);
        });
    }

    setInterval(showNextSlide, 3000);

    // FAQ toggle functionality
    $(".faq-question").on("click", function () {
        const answer = $(this).next(".faq-answer");
        answer.slideToggle(300);
        $(this).toggleClass("expanded");
    });
});
