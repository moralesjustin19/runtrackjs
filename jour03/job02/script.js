$(document).ready(function() {
    // Rendre les images déplaçables
    $("#containerimg").sortable();

    // Mélanger les images
    $("#melange").click(function() {
        let images = $("#containerimg img").toArray();
        images.sort(() => Math.random() - 0.5);
        $("#containerimg").empty().append(images);
    });

    // Vérifier si l'ordre est correct
    $("#check").click(function() {
        let correct = true;
        $("#containerimg img").each(function(index) {
            if ($(this).attr("data-order") != index + 1) {
                correct = false;
            }
        });

        if (correct) {
            $("#result").text("Vous avez gagné ! 🎉").css("color", "green");
        } else {
            $("#result").text("Vous avez perdu ❌").css("color", "red");
        }
    });
});
