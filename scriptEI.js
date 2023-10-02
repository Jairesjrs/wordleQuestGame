// Define la palabra a adivinar
//const wordToGuess = "HELLO";

const palabras = [
    { palabra: "CAT", pista: "Domestic feline animal" },
    { palabra: "DOG", pista: "Domestic canine animal" },
    { palabra: "HOUSE", pista: "Place of residence" },
    { palabra: "TREE", pista: "Vegetal organism" },
    { palabra: "SUN", pista: "You can see it in the sky during the day" },
    { palabra: "ROSE", pista: "Colorful flower" },
    { palabra: "TRAIN", pista: "Railway transport" },
    { palabra: "MOON", pista: "Earth's natural satellite" },
    { palabra: "COCONUT", pista: "Tropical fruit" },
    { palabra: "HAIR", pista: "You have it on your head" },
    { palabra: "TABLE", pista: "Where you put your food and dishes when you eat" },
    { palabra: "BALL", pista: "Spherical object" },
    { palabra: "THREAD", pista: "Used for sewing" },
    { palabra: "SKIN", pista: "Covers our body" },
    { palabra: "BOX", pista: "Used for storing things" },
    { palabra: "GARDEN", pista: "Outdoor space with plants" },
    { palabra: "PENCIL", pista: "Writing instrument" },
    { palabra: "LEAF", pista: "Part of a tree" },
    { palabra: "WINE", pista: "Grape alcoholic beverage" },
    { palabra: "CLOCK", pista: "Marks the time" },
    { palabra: "DOOR", pista: "Allows entry to a place" },
    { palabra: "TIGER", pista: "Large striped feline" },
    { palabra: "MOUSE", pista: "Small rodent" },
    { palabra: "COCONUT", pista: "Tropical fruit" },
    { palabra: "FLOWER", pista: "Colorful part of a plant" },
    { palabra: "SIDE", pista: "Part of something" },
    { palabra: "COW", pista: "Large animal that produces milk" },
    { palabra: "MOTORCYCLE", pista: "Two-wheeled vehicle" },
    { palabra: "NOSE", pista: "Organ of smell" },
    { palabra: "SNOW", pista: "Frozen water" },
    { palabra: "LIGHT", pista: "Opposite of darkness" },
    { palabra: "DROP", pista: "Small liquid droplet" },
    { palabra: "BLUE", pista: "Color of the sky" },
    { palabra: "RED", pista: "Passionate color" },
    { palabra: "BEAK", pista: "Sharp part" },
    { palabra: "CUBE", pista: "Geometric figure" },
    { palabra: "FACE", pista: "Front part of the head" },
    { palabra: "FROG", pista: "Jumping amphibian" },
    { palabra: "SHOE", pista: "Footwear" },
    { palabra: "SKY", pista: "What you see above when you look up during the day" },
    { palabra: "PEAR", pista: "Curved fruit" },
    { palabra: "HONEY", pista: "Sweet produced by bees" },
    { palabra: "COCONUT", pista: "Tropical fruit" },
    { palabra: "PINE", pista: "Evergreen tree" },
    { palabra: "BOY", pista: "Young male" },
    { palabra: "GIRL", pista: "Young female" },
    { palabra: "PAW", pista: "Animal's limb" },
    { palabra: "TALL", pista: "Not short" },
    { palabra: "LOW", pista: "Not high" },
    { palabra: "MOUTH", pista: "Part of the face" },
    { palabra: "RIVER", pista: "Body of water" },
    { palabra: "KING", pista: "Ruler" },
    { palabra: "MOUSE", pista: "Small rodent" },
    { palabra: "LINE", pista: "Row of objects" },
    { palabra: "STICK", pista: "Long, thin object" },
    { palabra: "LETTER", pista: "Written message" },
    { palabra: "LION", pista: "Big feline" },
    { palabra: "SHOES", pista: "Footwear" },
    { palabra: "RAT", pista: "Rodent" },
    { palabra: "WATER", pista: "Vital liquid" },
    { palabra: "PHOTO", pista: "Captured image" },
    { palabra: "SHOT", pista: "Firearm discharge" },
    { palabra: "TIME", pista: "Measurement of duration" },
    { palabra: "ROCK", pista: "Hard material" },
    { palabra: "GAME", pista: "Entertainment activity" },
    { palabra: "CHAIR", pista: "Seat with a backrest" },
    { palabra: "LID", pista: "Cover" },
    { palabra: "CAR", pista: "Wheeled transportation" },
    { palabra: "BOOK", pista: "Object with written pages" },
    { palabra: "FLUTE", pista: "Wind musical instrument" },
    { palabra: "BALLOON", pista: "Inflated object with air" },
    { palabra: "FIRE", pista: "Element that produces heat and light" },
    { palabra: "RADIO", pista: "Device that transmits sounds" },
    { palabra: "BABY", pista: "Newborn" },
    { palabra: "MANGO", pista: "Elongated tropical fruit" },
    { palabra: "TOWER", pista: "Tall and slender construction" },
    { palabra: "COMB", pista: "Object for combing hair" },
    { palabra: "AIRPLANE", pista: "Airborne transportation" },
    { palabra: "ROOSTER", pista: "Bird that crows at dawn" },
    { palabra: "LAUGHTER", pista: "Expression of joy" },
    { palabra: "SLED", pista: "Vehicle for sliding on snow" },
    { palabra: "HORSE", pista: "Riding animal" },
    { palabra: "BANANA", pista: "Yellow, elongated fruit" },
    { palabra: "FLIGHT", pista: "Action of flying" },
    { palabra: "PIZZA", pista: "Round and delicious Italian food" },
    { palabra: "BREEZE", pista: "Gentle wind" },
    { palabra: "COIN", pista: "Metallic form of money" },
    { palabra: "HAND", pista: "Body part with fingers" },
    { palabra: "GALAXY", pista: "Collection of stars" },
    { palabra: "EGG", pista: "Oval-shaped chicken product" },
    { palabra: "PLANT", pista: "Vegetal organism" },
    { palabra: "SILVER", pista: "Precious metal" },
    { palabra: "ZUMBA", pista: "Physical activity and dance" },
    { palabra: "KEY", pista: "Button on a keyboard" },
    { palabra: "STRAWBERRY", pista: "Red and tasty fruit" },
    { palabra: "RING", pista: "Circular object for fingers" },
    { palabra: "GLASSES", pista: "Lenses for vision" },
    { palabra: "SCHOOL", pista: "Place of education" },
    { palabra: "CELL PHONE", pista: "Mobile communication device" }
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
    hintDisplay.textContent = "Hint: " + pista;
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
        alert("You've won! The word is: " + wordToGuess);
    } else if (mistakes >= 14) {
        alert("Has lost! The word was: " + wordToGuess);
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