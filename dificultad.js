// Obtener los botones por su ID
const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");

// Agregar eventos de clic a los botones para redirigir a diferentes sitios web
easyButton.addEventListener("click", function() {
    window.location.href = "EasySpanish.html";
});

mediumButton.addEventListener("click", function() {
    window.location.href = "MediumSpanish.html";
});

hardButton.addEventListener("click", function() {
    window.location.href = "HardSpanish.html";
});
