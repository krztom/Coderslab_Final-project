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


});