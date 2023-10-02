// Define la palabra a adivinar
//const wordToGuess = "HELLO";

const palabras = [
    { palabra: "GATO", pista: "Animal doméstico felino" },
    { palabra: "PERRO", pista: "Animal doméstico canino" },
    { palabra: "CASA", pista: "Lugar de residencia" },
    { palabra: "ARBOL", pista: "Organismo vegetal" },
    { palabra: "SOL", pista: "Puedes verlo en el cielo durante el día" },
    { palabra: "ROSA", pista: "Flor colorida" },
    { palabra: "TREN", pista: "Medio de transporte sobre rieles" },
    { palabra: "LUNA", pista: "Satélite natural de la Tierra" },
    { palabra: "COCO", pista: "Fruto tropical" },
    { palabra: "PELO", pista: "Lo tienes en la cabeza" },
    { palabra: "MESA", pista: "Donde pones tu comida y platos cuando comes" },
    { palabra: "BOLA", pista: "Objeto esférico" },
    { palabra: "HILO", pista: "Se usa para coser" },
    { palabra: "PIEL", pista: "Cubre nuestro cuerpo" },
    { palabra: "CAJA", pista: "Se usa para guardar cosas" },
    { palabra: "JARDIN", pista: "Espacio exterior con plantas" },
    { palabra: "LAPIZ", pista: "Instrumento de escritura" },
    { palabra: "HOJA", pista: "Parte de un árbol" },
    { palabra: "VINO", pista: "Bebida alcohólica de uva" },
    { palabra: "RELOJ", pista: "Marca la hora" },
    { palabra: "PUERTA", pista: "Permite la entrada a un lugar" },
    { palabra: "TIGRE", pista: "Gran felino rayado" },
    { palabra: "RATON", pista: "Pequeño roedor" },
    { palabra: "COCO", pista: "Fruto tropical" },
    { palabra: "FLOR", pista: "Parte colorida de una planta" },
    { palabra: "LADO", pista: "Parte de algo" },
    { palabra: "VACA", pista: "Es un animal grande que produce leche" },
    { palabra: "MOTO", pista: "Vehículo de dos ruedas" },
    { palabra: "NARIZ", pista: "Órgano de olfato" },
    { palabra: "NIEVE", pista: "Agua congelada" },
    { palabra: "LUZ", pista: "Contrario a oscuridad" },
    { palabra: "GOTA", pista: "Pequeña gota de líquido" },
    { palabra: "AZUL", pista: "Color del cielo" },
    { palabra: "ROJO", pista: "Color apasionado" },
    { palabra: "PICO", pista: "Parte afilada" },
    { palabra: "CUBO", pista: "Figura geométrica" },
    { palabra: "CARA", pista: "Parte frontal de la cabeza" },
    { palabra: "RANA", pista: "Anfibio saltador" },
    { palabra: "ZAPATO", pista: "Calzado para el pie" },
    { palabra: "CIELO", pista: "Lo que ves arriba cuando miras hacia arriba durante el día" },
    { palabra: "PERA", pista: "Fruta de forma curva" },
    { palabra: "MIEL", pista: "Dulce producido por abejas" },
    { palabra: "COCO", pista: "Fruto tropical" },
    { palabra: "PINO", pista: "Árbol de hoja perenne" },
    { palabra: "NIÑO", pista: "Joven masculino" },
    { palabra: "NIÑA", pista: "Joven femenina" },
    { palabra: "PATA", pista: "Extremidad de un animal" },
    { palabra: "ALTO", pista: "No bajo" },
    { palabra: "BAJO", pista: "No alto" },
    { palabra: "BOCA", pista: "Parte de la cara" },
    { palabra: "RIO", pista: "Cuerpo de agua" },
    { palabra: "REY", pista: "Gobernante" },
    { palabra: "FILA", pista: "Línea de objetos" },
    { palabra: "PALO", pista: "Objeto alargado" },
    { palabra: "CARTA", pista: "Mensaje escrito" },
    { palabra: "LEON", pista: "Gran felino" },
    { palabra: "ZAPATOS", pista: "Calzado para los pies" },
    { palabra: "RATA", pista: "Roedor" },
    { palabra: "AGUA", pista: "Líquido vital" },
    { palabra: "FOTO", pista: "Imagen capturada" },
    { palabra: "TIRO", pista: "Disparo" },
    { palabra: "TIEMPO", pista: "Medida de la duración" },
    { palabra: "ROCA", pista: "Material duro" },
    { palabra: "JUEGO", pista: "Actividad de entretenimiento" },
    { palabra: "SILLA", pista: "Asiento con respaldo" },
    { palabra: "TAPA", pista: "Cubierta" },
    { palabra: "COCHE", pista: "Medio de transporte con ruedas" },
    { palabra: "LIBRO", pista: "Objeto con hojas escritas" },
    { palabra: "FLAUTA", pista: "Instrumento musical de viento" },
    { palabra: "GLOBO", pista: "Objeto inflado con aire" },
    { palabra: "FUEGO", pista: "Elemento que produce calor y luz" },
    { palabra: "RADIO", pista: "Dispositivo que transmite sonidos" },
    { palabra: "BEBE", pista: "Recién nacido" },
    { palabra: "MANGO", pista: "Fruta tropical alargada" },
    { palabra: "TORRE", pista: "Construcción alta y delgada" },
    { palabra: "PEINE", pista: "Objeto para peinar el cabello" },
    { palabra: "AVION", pista: "Medio de transporte aéreo" },
    { palabra: "GALLO", pista: "Ave que canta al amanecer" },
    { palabra: "RISA", pista: "Expresión de alegría" },
    { palabra: "TRINEO", pista: "Vehículo para deslizarse sobre la nieve" },
    { palabra: "CABALLO", pista: "Animal de montar" },
    { palabra: "BANANA", pista: "Fruta amarilla y alargada" },
    { palabra: "VUELO", pista: "Acción de volar" },
    { palabra: "PIZZA", pista: "Comida italiana redonda y deliciosa" },
    { palabra: "BRISA", pista: "Viento suave" },
    { palabra: "MONEDA", pista: "Dinero en forma de metal" },
    { palabra: "MANO", pista: "Parte del cuerpo con dedos" },
    { palabra: "GALAXIA", pista: "Conjunto de estrellas" },
    { palabra: "HUEVO", pista: "Alimento ovalado de gallina" },
    { palabra: "PLANTA", pista: "Organismo vegetal" },
    { palabra: "PLATA", pista: "Metal precioso" },
    { palabra: "ZUMBA", pista: "Actividad física y baile" },
    { palabra: "LLAVE", pista: "Objeto para abrir cerraduras" },
    { palabra: "TORTA", pista: "Pastel dulce" },
    { palabra: "COCOA", pista: "Ingrediente para el chocolate" },
    { palabra: "TECLA", pista: "Botón en un teclado" },
    { palabra: "FRESA", pista: "Fruta roja y sabrosa" },
    { palabra: "ANILLO", pista: "Objeto circular para los dedos" },
    { palabra: "GAFAS", pista: "Lentes para la vista" },
    { palabra: "ESCUELA", pista: "Lugar de educación" },
    { palabra: "CELULAR", pista: "Dispositivo de comunicación móvil" },
];

function seleccionarPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}


function seleccionarPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}

let palabraSeleccionada = seleccionarPalabraAleatoria();
let wordToGuess = palabraSeleccionada.palabra;
let pista = palabraSeleccionada.pista;



// Inicializa variables
let guesses = 0;
let mistakes = 0;
let guessedWord = "";

// Obtén elementos del DOM
const typeInput = document.querySelector(".type-input");
const wordDisplay = document.querySelector(".word");
const guessDisplay = document.querySelector(".guess span");
const mistakesDisplay = document.querySelector(".wrong span");
const hintDisplay = document.querySelector(".hint span");
const resetButton = document.querySelector(".reset");
const showHintButton = document.querySelector(".showhint");

// Evento para mostrar una pista relacionada a la palabra
showHintButton.addEventListener("click", () => {
    hintDisplay.textContent = "Pista: " + pista;
});

// Inicializa la palabra oculta
for (let i = 0; i < wordToGuess.length; i++) {
    guessedWord += "_";
}

// Muestra la palabra oculta en la pantalla
wordDisplay.textContent = guessedWord;

// Evento para adivinar letras
typeInput.addEventListener("input", () => {
    const letter = typeInput.value.toUpperCase();
    typeInput.value = "";

    if (wordToGuess.includes(letter)) {
        // La letra está en la palabra
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                guessedWord = guessedWord.substr(0, i) + letter + guessedWord.substr(i + 1);
            }
        }
    } else {
        // La letra no está en la palabra
        mistakes++;
    }

    guesses++;
    wordDisplay.textContent = guessedWord;
    guessDisplay.textContent = guesses;
    mistakesDisplay.textContent = mistakes;

    // Verifica si se ha adivinado la palabra completa
    if (guessedWord === wordToGuess) {
        alert("¡Has ganado! La palabra es: " + wordToGuess);
    } else if (mistakes >= 14) {
        alert("¡Has perdido! La palabra era: " + wordToGuess);
    }
});

resetButton.addEventListener("click", () => {
    // Selecciona una nueva palabra aleatoria y su pista
    palabraSeleccionada = seleccionarPalabraAleatoria();
    wordToGuess = palabraSeleccionada.palabra;
    pista = palabraSeleccionada.pista;

    guesses = 0;
    mistakes = 0;
    guessedWord = "";
    for (let i = 0; i < wordToGuess.length; i++) {
        guessedWord += "_";
    }
    wordDisplay.textContent = guessedWord;
    guessDisplay.textContent = guesses;
    mistakesDisplay.textContent = mistakes;
    hintDisplay.textContent = ""; // Limpia la pista mostrada
});


