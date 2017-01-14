$(document).ready(function () {

    $(document).on("scroll", onScroll);

    $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();

        $(document).off("scroll");
         $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);

       $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            removeHash();
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('#myNavbar a').each(function () {
       var currentLink = $(this);
       var refElement = $(currentLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#myNavbar ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}

function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}