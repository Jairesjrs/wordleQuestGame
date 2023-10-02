// Obtener los botones de idioma
const spanishButton = document.getElementById('spanish-button');
const englishButton = document.getElementById('english-button');

// Función para cambiar al modo español
spanishButton.addEventListener('click', () => {
    // Coloca aquí la lógica para el modo español
    window.location.href = "Dificultad.html";
});

// Función para cambiar al modo inglés
englishButton.addEventListener('click', () => {
    // Coloca aquí la lógica para el modo inglés
    window.location.href = "Dificulty.html";
});

