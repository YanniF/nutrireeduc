(function($){
    
    var jump = function(e)
    {
       if (e){
           e.preventDefault();
           var target = $(this).attr("href");
       }else{
           var target = location.hash;
       }

       $('html,body').animate(
       {
           scrollTop: $(target).offset().top
       },800,function()
       {
           location.hash = target;
           removeHash();

           $(document).on("scroll", onScroll);
       });

    }

    $('html, body').hide()

    $(document).ready(function()
    {
        $(document).on("scroll", onScroll);

        $('a[href^="#"]').bind("click", jump);

        if (location.hash){
            setTimeout(function(){
                $('html, body').scrollTop(0).show()
                jump()
            }, 0);
        }else{
          $('html, body').show()
        }


    });
  
})(jQuery)

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