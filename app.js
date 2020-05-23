$(function(){

    /* Fixed header */
    let header = $("#header"),
        intro = $("#intro"),
        introH = intro.innerHeight();
        scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });



    /* Nav toggle */
    $("#burger").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("show");
    });


    /* Smooth scroll */

    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        
        $("#nav").removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    



});