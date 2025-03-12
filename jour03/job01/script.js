// vérifie que jquery est bien chargé
$(document).ready(function() {
    console.log("jQuery est bien chargé dans script.js !");
    
    // changer la couleur de texte p au clic
    $("p").click(function() {
        $(this).css("color", "red");
    });
});

$(document).ready(function() {
    // afficher texte
    $("#showText").click(function() {
        $("#quote").fadeIn(); // Effet d'apparition
    });

    // cacher text
    $("#hideText").click(function() {
        $("#quote").fadeOut(); // Effet de disparition
    });
});

$(document).ready(function() {
    //un autre test
    $("#test").click(function() {
        $("#prenoms").fadeToggle(); // Affiche ou cache en alternance
    });
});



