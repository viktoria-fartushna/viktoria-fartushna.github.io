$(document).ready(function () {

    $('#start').click(function () {

        var numb = Math.floor(Math.random() * 10);
        var angle = numb * 40;
        var cycle = 3 * 360;
        var degrees = angle + cycle;
        var sect = $("#sectors");

        sect.css({'transform': 'rotate(' + 0 + 'deg)' });

        sect.css({'transform': 'rotate(' + degrees + 'deg)' });
        // sect.toggleClass('rotated');

        var target = $("#sl_01").offset().top;

        $('html, body').animate({
            scrollTop: target
        }, 500);
        
        // $("#sl_01").slickGoTo(numb);
    });

});
