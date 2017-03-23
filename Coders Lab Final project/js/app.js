document.addEventListener('DOMContentLoaded', function () {

    var thehours = new Date().getHours();
    var themessage;
    var morning = ('Good morning mr Tomecki!');
    var afternoon = ('Good afternoon mr Tomecki!');
    var evening = ('Good evening mr Tomecki!');

    if (thehours >= 0 && thehours < 12) {
        themessage = morning;

    } else if (thehours >= 12 && thehours < 17) {
        themessage = afternoon;

    } else if (thehours >= 17 && thehours < 24) {
        themessage = evening;
    }

    $('#greeting').append(themessage);

    var header = $('#section1');
    var range = 200;

    $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop();
        var offset = header.offset().top;
        var height = header.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if ( calc > '1' ) {
            header.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            header.css({ 'opacity': 0 });
        }

    });
});