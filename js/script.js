$(document).ready(function(){

    /* Función Scroll Down */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
            $('header').css('height','100px');
            $('header figure').css('height','100px');
            $('header figure a').css('height','80px');
            $('header figure a').css('margin','10px 0');
            $('header figure a img').css('width','auto');
            $('header figure a img').css('height','80px');
            $('main').css('margin','170px auto 0 auto');

            $('header').addClass('dark-header');
        } else {
            $('header').css('height','250px');
            $('header figure').css('height','250px');
            $('header figure a').css('height','200px');
            $('header figure a').css('margin','25px 0');
            $('header figure a img').css('width','100%');
            $('header figure a img').css('height','auto');
            $('main').css('margin','250px auto 0 auto');

            $('header').removeClass('dark-header');
        }
    });


});