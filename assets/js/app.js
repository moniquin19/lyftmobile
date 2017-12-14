$(document).ready(function() {
    // Vista Splash de 2 a 5 segundos
    setTimeout(function() {
        $(".one").fadeOut(1500);
    },3000);

// redireccionar a vista principal
    setTimeout(function() {
        $(".two").fadeIn(1500);
    });
});
