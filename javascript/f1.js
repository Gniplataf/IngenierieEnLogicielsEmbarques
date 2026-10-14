document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("h2").forEach(function (titre) {
        titre.addEventListener("mouseenter", function () {
            titre.style.color = "green";
            titre.style.borderBottomColor = "green";
        });
        titre.addEventListener("mouseleave", function () {
            titre.style.color = "";
            titre.style.borderBottomColor = "";
        });
    });

    var bouton = document.getElementById("btn-details");
    var details = document.getElementById("details");
    bouton.addEventListener("click", function () {
        var visible = details.classList.toggle("visible");
        bouton.setAttribute("aria-expanded", visible);
        bouton.textContent = visible ? "Masquer les langages et outils" : "Afficher les langages et outils";
    });
});
