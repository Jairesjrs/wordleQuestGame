const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");

// Agrega un evento de clic a cada botón
easyButton.addEventListener("click", () => {
    // Redirige a la página de nivel fácil (cambia "URL_DEL_NIVEL_FACIL" por la URL real)
    window.location.href = "EasyInglish.html";
});

mediumButton.addEventListener("click", () => {
    // Redirige a la página de nivel medio (cambia "URL_DEL_NIVEL_MEDIO" por la URL real)
    window.location.href = "MediumInglish.html";
});

hardButton.addEventListener("click", () => {
    // Redirige a la página de nivel difícil (cambia "URL_DEL_NIVEL_DIFICIL" por la URL real)
    window.location.href = "HardInglish.html";
});


