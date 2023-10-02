// Define the word to guess
//const wordToGuess = "HELLO";

const words = [
    { word: "BICYCLE", clue: "Two-wheeled means of transportation" },
{ word: "VASE", clue: "Containers for flowers" },
{ word: "COOK", clue: "Prepare food" },
{ word: "HILLS", clue: "Elevations of terrain" },
{ word: "TELEVISION", clue: "Device for watching programs" },
{ word: "RICE", clue: "Basic grain in the diet" },
{ word: "GUITAR", clue: "Stringed musical instrument" },
{ word: "ANT", clue: "Hardworking insect" },
{ word: "PISTOL", clue: "Small firearm" },
{ word: "ISLAND", clue: "Land surrounded by water" },
{ word: "THEATER", clue: "Place for performances" },
{ word: "SONG", clue: "Musical composition with lyrics" },
{ word: "SPORT", clue: "Competitive physical activity" },
{ word: "CAMERA", clue: "Device for taking photos" },
{ word: "HAZELNUT", clue: "Small dried fruit" },
{ word: "PHONE", clue: "Communication device" },
{ word: "MICE", clue: "Plural of a small rodent" },
{ word: "DIAMOND", clue: "Precious gem" },
{ word: "STAMP", clue: "Mark printed on paper" },
{ word: "CEMENT", clue: "Building material" },
{ word: "BELL", clue: "Metal musical instrument" },
{ word: "LANDSCAPE", clue: "View of nature" },
{ word: "FOREST", clue: "Thick forest" },
{ word: "ENIGMA", clue: "Mystery" },
{ word: "WALLET", clue: "Place to keep money" },
{ word: "TEMPERATURE", clue: "Measurement of heat or cold" },
{ word: "PLANE", clue: "Small aircraft" },
{ word: "LETTUCE", clue: "Green leafy vegetable" },
{ word: "MOUNTAIN", clue: "Large elevated terrain" },
{ word: "POLICE", clue: "Law enforcement officer" },
{ word: "SELLERS", clue: "People who sell products" },
{ word: "AQUARIUM", clue: "Container with fish" },
{ word: "CACTUS", clue: "Desert-resistant plant" },
{ word: "MIRROR", clue: "Reflective surface" },
{ word: "DETECTIVE", clue: "Crime investigator" },
{ word: "SPRING", clue: "Season of the year" },
{ word: "NOTEBOOK", clue: "Book for taking notes" },
{ word: "SMILE", clue: "Expression of joy on the face" },
{ word: "BLANKET", clue: "Covering for warmth" },
{ word: "THEATER", clue: "Place for performances" },
{ word: "CLOWN", clue: "Comic artist" },
{ word: "ROPE", clue: "Material for tying" },
{ word: "MOVIE", clue: "Cinematic work" },
{ word: "BRUSH", clue: "Tool for painting" },
{ word: "COOKIES", clue: "Baked sweets" },
{ word: "DANCE", clue: "Rhythmic body movement" },
{ word: "WALK", clue: "Recreational stroll" },
{ word: "BRAID", clue: "Type of hairstyle" },
{ word: "MAGICIAN", clue: "Person who performs tricks" },
{ word: "LUNCH", clue: "Midday meal" },
{ word: "PILLOW", clue: "Sleeping cushion" },
{ word: "UNIVERSE", clue: "Everything that exists" },
{ word: "KITCHEN", clue: "Place for preparing food" },
{ word: "STAIRS", clue: "Set of steps" },
{ word: "PANTS", clue: "Garment for the legs" },
{ word: "FORK", clue: "Eating utensil" },
{ word: "FLOAT", clue: "Stay on the water's surface" },
{ word: "HUNTER", clue: "Person who seeks and catches animals" },
{ word: "SLIPPERS", clue: "Indoor shoes" },
{ word: "SINGER", clue: "Person who sings" },
{ word: "SAILOR", clue: "Person who works on the sea" },
{ word: "CANDY", clue: "Sweet made of sugar" },
{ word: "X-RAY", clue: "Medical image" },
{ word: "PEN", clue: "Writing instrument" },
{ word: "ICE", clue: "Frozen water" },
{ word: "PLANES", clue: "Flying machines" },
{ word: "HORMONES", clue: "Chemical substances in the body" },
{ word: "CAMP", clue: "Place for camping" },
{ word: "CITIZEN", clue: "Person who lives in a city" },
{ word: "COOK", clue: "Person who cooks" },
{ word: "SOCKS", clue: "Footwear" },
{ word: "FAMILY", clue: "Group of relatives" },
{ word: "SNACK", clue: "Small meal" },
{ word: "WORDS", clue: "Language units" },
{ word: "ATHLETE", clue: "Sportsman" },
{ word: "FIREMAN", clue: "Person who extinguishes fires" },
{ word: "DIVING", clue: "Activity of swimming underwater" },
{ word: "BRAND", clue: "Distinctive sign or seal" },
{ word: "CRUISE", clue: "Luxury boat trip" },
{ word: "LIE", clue: "Falsehood" },
{ word: "TORRENT", clue: "Fast-flowing water" },
{ word: "MARBLE", clue: "Type of rock" },
{ word: "CRY", clue: "Expression of sadness" },
{ word: "CANDIES", clue: "Sweets" },
{ word: "LIGHTHOUSE", clue: "Tower with a light to guide ships" },
{ word: "ELEPHANT", clue: "Large mammal" },
{ word: "CUPCAKE", clue: "Individual small cake" },
{ word: "STAR", clue: "Luminous celestial body in the sky" },
{ word: "BANQUET", clue: "Large festive meal" },
{ word: "BELLY", clue: "Part of the body" },
{ word: "TREASURE", clue: "Hidden valuable object" },
{ word: "CARDBOARD", clue: "Material for making boxes" },
{ word: "PERFUME", clue: "Fragrance" },
{ word: "CINEMA", clue: "Place to watch movies" },
{ word: "DOCTOR", clue: "Healthcare professional" },
{ word: "CELEBRATE", clue: "To mark or observe something" },
{ word: "QUANTITY", clue: "Amount of something" },
{ word: "PHOTOGRAPHY", clue: "Captured image" },
{ word: "ART", clue: "Creative expression" },
{ word: "COFFEEPOT", clue: "Machine for making coffee" },
{ word: "BONE", clue: "Hard part of the body" },
{ word: "CARTRIDGE", clue: "Bullet container" },
{ word: "HILL", clue: "Small elevation of terrain" },
{ word: "RAYS", clue: "Intense light" },
{ word: "VOLCANO", clue: "Mountain with geological activity" },
{ word: "RABBIT", clue: "Long-eared animal" },
{ word: "TOOL", clue: "Instrument for working" },
{ word: "PHOTOCOPY", clue: "Printed copy of a document" },
{ word: "BACKPACK", clue: "Bag for carrying things" },
{ word: "SECRETARY", clue: "Person who works in an office" },
{ word: "CALCULATOR", clue: "Device for calculations" },
{ word: "FESTIVAL", clue: "Celebratory event" },
{ word: "FLUTIST", clue: "Person who plays the flute" },
{ word: "STORY", clue: "Short tale" },
{ word: "EXAMINATION", clue: "Knowledge evaluation" },
{ word: "PET", clue: "Companion animal" },
{ word: "DOVE", clue: "Bird with soft plumage" },
{ word: "CHERRY", clue: "Small, red fruit" },
{ word: "NAVIGATE", clue: "Travel by boat or browse the web" },
{ word: "FARM", clue: "Place where animals and crops are raised" },
{ word: "GHOST", clue: "Spirit or apparition" },
{ word: "BUTTERFLY", clue: "Insect with colorful wings" },
{ word: "CAKE", clue: "Sweet dessert" },
{ word: "JUMP", clue: "Rise in the air with force" },
{ word: "STUDENT", clue: "Person who learns at school" },
{ word: "GOLD", clue: "Precious metal" },
{ word: "FIELD", clue: "Open area of land" },
{ word: "BALL", clue: "Object used for playing sports" },
{ word: "MEDAL", clue: "Metallic prize" },
{ word: "BATTLE", clue: "Combat between two groups" },
{ word: "DINOSAUR", clue: "Ancient extinct reptile" },
{ word: "AIRPORT", clue: "Departure and arrival location for flights" },
{ word: "LIBRARY", clue: "Place with books to read" },
{ word: "BLACKBOARD", clue: "Surface for writing with chalk" },
{ word: "EAGLE", clue: "Large predatory bird" },
{ word: "FRIENDS", clue: "Close and dear people" },
{ word: "OCEAN", clue: "Large body of saltwater" },
{ word: "MARTIAN", clue: "Supposed inhabitant of Mars" },
{ word: "ROAD", clue: "Traffic route for vehicles" },
{ word: "TELEVISION", clue: "Device for watching programs" },
{ word: "WATERFALL", clue: "Natural water cascade" },
{ word: "COMPUTER", clue: "Machine for processing data" },
{ word: "GRANDPARENTS", clue: "Parents of parents" },
{ word: "FOOD", clue: "Nourishment to consume" },
{ word: "JUNGLE", clue: "Tropical biome with abundant vegetation" },
{ word: "SPRING", clue: "One of the seasons of the year" },
{ word: "RAINBOW", clue: "Optical phenomenon with colors in the sky" },
{ word: "WINDOW", clue: "Opening in a wall to see outside" },
{ word: "SURPRISE", clue: "Something unexpected and exciting" },
{ word: "PATH", clue: "Route or way to travel" },
{ word: "BOTTLE", clue: "Container for liquids" },
{ word: "AUNT", clue: "Father's or mother's sister" },
{ word: "FRUIT", clue: "Natural and sweet food" },
{ word: "CRAYON", clue: "Tool for drawing or coloring" },
{ word: "SOLUTION", clue: "Answer or problem resolution" },
{ word: "GLASS", clue: "Container for drinking liquids" },
{ word: "FANTASTIC", clue: "Extraordinary and amazing" },
{ word: "MOVIE", clue: "Cinematic work" },
{ word: "TEACHER", clue: "Person who teaches" },
{ word: "SNAIL", clue: "Spiral-shelled animal" },
{ word: "LUNCH", clue: "Meal taken at midday" },
{ word: "GRANDMOTHER", clue: "Father's or mother's mother" },
{ word: "GRANDFATHER", clue: "Father's or mother's father" },
{ word: "BUTTON", clue: "Object for activating or deactivating" },
{ word: "DENTIST", clue: "Dental health professional" },
{ word: "FREE", clue: "Without restrictions or obligations" },
{ word: "HEADPHONES", clue: "Device for listening to music" },
{ word: "BRUSH", clue: "Tool for combing or cleaning" },
{ word: "TURTLE", clue: "Animal with a hard shell" },
{ word: "ARTIST", clue: "Creative and talented person" },
{ word: "DANCER", clue: "Person who dances" },
{ word: "SHADOW", clue: "Absence of light" },
{ word: "KITE", clue: "Celestial object with a luminous tail" },
{ word: "STORK", clue: "Long-legged migratory bird" },
{ word: "TRIP", clue: "Exciting and risky journey" },
{ word: "SEAFOOD", clue: "Marine foods" },
{ word: "BALL", clue: "Ball for playing sports" },
{ word: "HOSPITAL", clue: "Medical care center" },
{ word: "MONSTER", clue: "Terrifying creature" },
{ word: "ANCIENT", clue: "Very old or from past eras" },
{ word: "LABYRINTH", clue: "Complicated and confusing passage" },
{ word: "INSECT", clue: "Class of small, legged animals" },
{ word: "HEART", clue: "Vital organ in the human body" },
{ word: "MUSEUM", clue: "Place for art and culture exhibition" },
{ word: "SLEEP", clue: "Rest in a state of slumber" },
{ word: "STREET", clue: "Public road for vehicles and pedestrians" },
{ word: "WINTER", clue: "Another season of the year" },
{ word: "PINK", clue: "Color between red and white" },
{ word: "PUZZLE", clue: "Game that involves assembling an image" },
{ word: "BALLOON", clue: "Object inflated with helium or air" },
{ word: "ISLAND", clue: "Piece of land surrounded by water" },
{ word: "BACKPACK", clue: "Bag for carrying things" },
{ word: "ONION", clue: "Vegetable with a strong flavor" },
{ word: "CORNER", clue: "A secluded or out-of-the-way place" },
{ word: "FAN", clue: "Device for generating cool air" },
{ word: "PIRATE", clue: "Sailor who engages in piracy" },
{ word: "EYES", clue: "Organs of sight on the face" },
{ word: "COMPUTER", clue: "Synonym for a computer" },
{ word: "HAMBURGER", clue: "Fast food made of meat" },
{ word: "BEE", clue: "Insect that produces honey" },
{ word: "WEDDING", clue: "Ceremony of marriage" },
{ word: "BANANA", clue: "Yellow, elongated fruit" },
{ word: "CHOCOLATE", clue: "Sweet cocoa delicacy" },
{ word: "ADVENTURE", clue: "Exciting and risky journey" },

];

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

let selectedWord = selectRandomWord();
let wordToGuess = selectedWord.word;
let hint = selectedWord.clue;

// Initialize variables
let guesses = 0;
let mistakes = 0;
let guessedWord = "";

// Get DOM elements
const typeInput = document.querySelector(".type-input");
const wordDisplay = document.querySelector(".word");
const guessDisplay = document.querySelector(".guess span");
const mistakesDisplay = document.querySelector(".wrong span");
const hintDisplay = document.querySelector(".hint span");
const resetButton = document.querySelector(".reset");
const showHintButton = document.querySelector(".showhint");

// Event to show a hint related to the word
showHintButton.addEventListener("click", () => {
    hintDisplay.textContent = "Hint: " + hint;
});

// Initialize the hidden word
for (let i = 0; i < wordToGuess.length; i++) {
    guessedWord += "_";
}

// Display the hidden word on the screen
wordDisplay.textContent = guessedWord;

// Event to guess letters
typeInput.addEventListener("input", () => {
    const letter = typeInput.value.toUpperCase();
    typeInput.value = "";

    if (wordToGuess.includes(letter)) {
        // The letter is in the word
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                guessedWord = guessedWord.substr(0, i) + letter + guessedWord.substr(i + 1);
            }
        }
    } else {
        // The letter is not in the word
        mistakes++;
    }

    guesses++;
    wordDisplay.textContent = guessedWord;
    guessDisplay.textContent = guesses;
    mistakesDisplay.textContent = mistakes;

    // Check if the complete word has been guessed
    if (guessedWord === wordToGuess) {
        alert("You've won! The word is: " + wordToGuess);
    } else if (mistakes >= 14) {
        alert("You have lost! The word was: " + wordToGuess);
    }
});

resetButton.addEventListener("click", () => {
    // Select a new random word and its hint
    selectedWord = selectRandomWord();
    wordToGuess = selectedWord.word;
    hint = selectedWord.clue;

    guesses = 0;
    mistakes = 0;
    guessedWord = "";
    for (let i = 0; i < wordToGuess.length; i++) {
        guessedWord += "_";
    }
    wordDisplay.textContent = guessedWord;
    guessDisplay.textContent = guesses;
    mistakesDisplay.textContent = mistakes;
    hintDisplay.textContent = ""; // Clear the displayed hint
});