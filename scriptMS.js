// Define la palabra a adivinar
//const wordToGuess = "HELLO";
const palabras = [
        { palabra: "BICICLETA", pista: "Medio de transporte de dos ruedas" },
        { palabra: "FLORERO", pista: "Recipientes para flores" },
        { palabra: "COCINAR", pista: "Preparar alimentos" },
        { palabra: "COLINAS", pista: "Elevaciones de terreno" },
        { palabra: "TELEVISOR", pista: "Dispositivo para ver programas" },
        { palabra: "ARROZ", pista: "Grano básico de la alimentación" },
        { palabra: "GUITARRA", pista: "Instrumento musical de cuerdas" },
        { palabra: "HORMIGA", pista: "Insecto trabajador" },
        { palabra: "PISTOLA", pista: "Arma de fuego pequeña" },
        { palabra: "ISLA", pista: "Tierra rodeada de agua" },
        { palabra: "TEATRO", pista: "Lugar para representaciones" },
        { palabra: "CANCION", pista: "Composición musical con letra" },
        { palabra: "DEPORTE", pista: "Actividad física competitiva" },
        { palabra: "CAMARA", pista: "Dispositivo para tomar fotos" },
        { palabra: "AVELLANA", pista: "Fruto seco pequeño" },
        { palabra: "TELEFONO", pista: "Dispositivo de comunicación" },
        { palabra: "RATONES", pista: "Plural de un pequeño roedor" },
        { palabra: "DIAMANTE", pista: "Gema preciosa" },
        { palabra: "SELLO", pista: "Marca impresa en papel" },
        { palabra: "CEMENTO", pista: "Material de construcción" },
        { palabra: "CAMPANA", pista: "Instrumento musical de metal" },
        { palabra: "PAISAJE", pista: "Vista de la naturaleza" },
        { palabra: "FLORESTA", pista: "Bosque espeso" },
        { palabra: "ENIGMA", pista: "Misterio" },
        { palabra: "BILLETERA", pista: "Lugar para guardar dinero" },
        { palabra: "TEMPERATURA", pista: "Medida del calor o frío" },
        { palabra: "AVIONETA", pista: "Pequeña aeronave" },
        { palabra: "LECHUGA", pista: "Verdura de hojas verdes" },
        { palabra: "MONTAÑA", pista: "Gran elevación de terreno" },
        { palabra: "POLICIA", pista: "Encargado de hacer cumplir la ley" },
        { palabra: "VENDEDORES", pista: "Personas que venden productos" },
        { palabra: "ACUARIO", pista: "Recipiente con peces" },
        { palabra: "CACTUS", pista: "Planta resistente al desierto" },
        { palabra: "ESPEJO", pista: "Superficie reflectante" },
        { palabra: "DETECTIVE", pista: "Investigador de crímenes" },
        { palabra: "PRIMAVERA", pista: "Estación del año" },
        { palabra: "CUADERNO", pista: "Libro para tomar notas" },
        { palabra: "SONRISA", pista: "Expresión de alegría en el rostro" },
        { palabra: "COBIJA", pista: "Manta para abrigarse" },
        { palabra: "TEATRO", pista: "Lugar para representaciones" },
        { palabra: "PAYASO", pista: "Artista cómico" },
        { palabra: "CUERDA", pista: "Material para atar" },
        { palabra: "PELICULA", pista: "Obra cinematográfica" },
        { palabra: "BROCHA", pista: "Herramienta para pintar" },
        { palabra: "GALLETAS", pista: "Dulces horneados" },
        { palabra: "BAILE", pista: "Movimiento rítmico del cuerpo" },
        { palabra: "PASEO", pista: "Caminata recreativa" },
        { palabra: "TRENZA", pista: "Tipo de peinado" },
        { palabra: "MAGO", pista: "Persona que hace trucos" },
        { palabra: "ALMUERZO", pista: "Comida del mediodía" },
        { palabra: "ALMOHADA", pista: "Cojín para dormir" },
        { palabra: "UNIVERSO", pista: "Todo lo que existe" },
        { palabra: "COCINA", pista: "Lugar para preparar alimentos" },
        { palabra: "ESCALERA", pista: "Conjunto de escalones" },
        { palabra: "PANTALON", pista: "Prenda de vestir para las piernas" },
        { palabra: "TENEDOR", pista: "Utensilio para comer" },
        { palabra: "FLOTE", pista: "Mantenerse en la superficie del agua" },
        { palabra: "CAZADOR", pista: "Persona que busca y atrapa animales" },
        { palabra: "PANTUFLAS", pista: "Zapatillas para estar en casa" },
        { palabra: "CANTANTE", pista: "Persona que canta" },
        { palabra: "MARINERO", pista: "Persona que trabaja en el mar" },
        { palabra: "CARAMELO", pista: "Dulce hecho de azúcar" },
        { palabra: "RADIOGRAFIA", pista: "Imagen médica" },
        { palabra: "PLUMA", pista: "Instrumento de escritura" },
        { palabra: "HIELO", pista: "Agua congelada" },
        { palabra: "AVIONES", pista: "Máquinas voladoras" },
        { palabra: "HORMONAS", pista: "Sustancias químicas en el cuerpo" },
        { palabra: "CAMPAMENTO", pista: "Lugar para acampar" },
        { palabra: "CIUDADANO", pista: "Persona que vive en una ciudad" },
        { palabra: "COCINERO", pista: "Persona que cocina" },
        { palabra: "CALCETINES", pista: "Prenda para los pies" },
        { palabra: "FAMILIA", pista: "Grupo de parientes" },
        { palabra: "BOCADILLO", pista: "Comida pequeña" },
        { palabra: "PALABRAS", pista: "Unidades de lenguaje" },
        { palabra: "ATLETA", pista: "Deportista" },
        { palabra: "BOMBERO", pista: "Persona que apaga incendios" },
        { palabra: "BUCEO", pista: "Actividad de nadar bajo el agua" },
        { palabra: "MARCA", pista: "Señal o sello distintivo" },
        { palabra: "CRUCERO", pista: "Viaje en barco de lujo" },
        { palabra: "MENTIRA", pista: "Falsedad" },
        { palabra: "TORRENTE", pista: "Flujo de agua rápido" },
        { palabra: "MARMOL", pista: "Tipo de roca" },
        { palabra: "LLANTO", pista: "Expresión de tristeza" },
        { palabra: "DULCES", pista: "Golosinas" },
        { palabra: "FARO", pista: "Torre con luz para guiar a los barcos" },
        { palabra: "ELEFANTE", pista: "Mamífero grande" },
        { palabra: "CUPCAKE", pista: "Pastelito individual" },
        { palabra: "ESTRELLA", pista: "Astro luminoso en el cielo" },
        { palabra: "BANQUETE", pista: "Gran comida festiva" },
        { palabra: "VIENTRE", pista: "Parte del cuerpo" },
        { palabra: "TESORO", pista: "Objeto de valor oculto" },
        { palabra: "CARTON", pista: "Material para hacer cajas" },
        { palabra: "PERFUME", pista: "Fragancia" },
        { palabra: "CINE", pista: "Lugar para ver películas" },
        { palabra: "MEDICO", pista: "Profesional de la salud" },
        { palabra: "CELEBRAR", pista: "Festejar algo" },
        { palabra: "CANTIDAD", pista: "Cantidad de algo" },
        { palabra: "FOTOGRAFIA", pista: "Imagen capturada" },
        { palabra: "ARTE", pista: "Expresión creativa" },
        { palabra: "CAFETERA", pista: "Máquina para hacer café" },
        { palabra: "HUESO", pista: "Parte dura del cuerpo" },
        { palabra: "CARTUCHO", pista: "Contenedor de balas" },
        { palabra: "COLINA", pista: "Pequeña elevación de terreno" },
        { palabra: "RAYOS", pista: "Luz intensa" },
        { palabra: "VOLCAN", pista: "Montaña con actividad geológica" },
        { palabra: "CONEJO", pista: "Animal de orejas largas" },
        { palabra: "HERRAMIENTA", pista: "Instrumento para trabajar" },
        { palabra: "FOTOCOPIA", pista: "Copia impresa de un documento" },
        { palabra: "MOCHILA", pista: "Bolsa para llevar cosas" },
        { palabra: "SECRETARIO", pista: "Persona que trabaja en una oficina" },
        { palabra: "CALCULADORA", pista: "Dispositivo para hacer cálculos" },
        { palabra: "FESTIVAL", pista: "Evento celebratorio" },
        { palabra: "FLAUTISTA", pista: "Persona que toca la flauta" },
        { palabra: "CUENTO", pista: "Historia corta" },
        { palabra: "EXAMEN", pista: "Evaluación de conocimientos" },
        { palabra: "MASCOTA", pista: "Animal de compañía" },
        { palabra: "PALOMA", pista: "Ave con plumaje suave" },
        { palabra: "CEREZA", pista: "Fruta pequeña y roja" },
        { palabra: "NAVEGAR", pista: "Viajar en barco o barca (o en la web)" },
        { palabra: "GRANJA", pista: "Lugar donde se crían animales y cultivos" },
        { palabra: "FANTASMA", pista: "Espíritu o aparición" },
        { palabra: "MARIPOSA", pista: "Insecto con alas coloridas" },
        { palabra: "PASTEL", pista: "Dulce postre" },
        { palabra: "SALTAR", pista: "Elevarse en el aire con fuerza" },
        { palabra: "ESTUDIANTE", pista: "Persona que aprende en la escuela" },
        { palabra: "ORO", pista: "Metal precioso" },
        { palabra: "CAMPO", pista: "Área de tierra abierta" },
        { palabra: "PELOTA", pista: "Objeto para jugar al deporte" },
        { palabra: "MEDALLA", pista: "Premio en forma de metal" },
        { palabra: "BATALLA", pista: "Combate entre dos grupos" },
        { palabra: "DINOSAURIO", pista: "Antiguo reptil extinto" },
        { palabra: "AEROPUERTO", pista: "Lugar de partida y llegada de vuelos" },
        { palabra: "BIBLIOTECA", pista: "Lugar con libros para leer" },
        { palabra: "PIZARRA", pista: "Superficie para escribir con tiza" },
        { palabra: "AGUILA", pista: "Ave rapaz de gran tamaño" },
        { palabra: "AMIGOS", pista: "Personas cercanas y queridas" },
        { palabra: "OCEANO", pista: "Gran cuerpo de agua salada" },
        { palabra: "MARCIANO", pista: "Supuesto habitante de Marte" },
        { palabra: "CARRETERA", pista: "Vía de tráfico para vehículos" },
        { palabra: "TELEVISION", pista: "Dispositivo para ver programas" },
        { palabra: "CASCADA", pista: "Caída de agua natural" },
        { palabra: "COMPUTADORA", pista: "Máquina para procesar datos" },
        { palabra: "ABUELOS", pista: "Padres de los padres" },
        { palabra: "COMIDA", pista: "Alimento para consumir" },
        { palabra: "SELVA", pista: "Bioma tropical con abundante vegetación" },
        { palabra: "PRIMAVERA", pista: "Una de las estaciones del año" },
        { palabra: "ARCOIRIS", pista: "Fenómeno óptico con colores en el cielo" },
        { palabra: "VENTANA", pista: "Abertura en una pared para ver afuera" },
        { palabra: "SORPRESA", pista: "Algo inesperado y emocionante" },
        { palabra: "CAMINO", pista: "Ruta o vía para transitar" },
        { palabra: "BOTELLA", pista: "Recipiente para líquidos" },
        { palabra: "TIA", pista: "Hermana del padre o de la madre" },
        { palabra: "FRUTA", pista: "Alimento natural y dulce" },
        { palabra: "CRAYON", pista: "Utensilio para dibujar o colorear" },
        { palabra: "SOLUCION", pista: "Respuesta o resolución de un problema" },
        { palabra: "VASO", pista: "Recipiente para beber líquidos" },
        { palabra: "FANTASTICO", pista: "Algo extraordinario y asombroso" },
        { palabra: "PELICULA", pista: "Obra cinematográfica" },
        { palabra: "MAESTRO", pista: "Persona que enseña" },
        { palabra: "CARACOL", pista: "Animal de caparazón espiral" },
        { palabra: "ALMUERZO", pista: "Comida que se hace al mediodía" },
        { palabra: "ABUELA", pista: "Madre del padre o de la madre" },
        { palabra: "ABUELO", pista: "Padre del padre o de la madre" },
        { palabra: "BOTON", pista: "Objeto para activar o desactivar" },
        { palabra: "DENTISTA", pista: "Profesional de la salud dental" },
        { palabra: "LIBRE", pista: "Sin restricciones ni obligaciones." },
        { palabra: "AURICULARES", pista: "Dispositivo para escuchar música" },
        { palabra: "CEPILLO", pista: "Utensilio para peinar o limpiar" },
        { palabra: "TORTUGA", pista: "Animal de caparazón duro" },
        { palabra: "ARTISTA", pista: "Persona creativa y talentosa" },
        { palabra: "BAILARINA", pista: "Persona que danza" },
        { palabra: "SOMBRA", pista: "Ausencia de luz" },
        { palabra: "COMETA", pista: "Objeto celeste con cola luminosa" },
        { palabra: "CIGUEÑA", pista: "Ave migratoria de largas patas" },
        { palabra: "VIAJE", pista: "Desplazamiento a otro lugar" },
        { palabra: "MARISCOS", pista: "Alimentos del mar" },
        { palabra: "BALON", pista: "Pelota para jugar deportes" },
        { palabra: "HOSPITAL", pista: "Centro de atención médica" },
        { palabra: "MONSTRUO", pista: "Criatura terrorífica" },
        { palabra: "ANTIGUO", pista: "Muy viejo o de épocas pasadas" },
        { palabra: "LABERINTO", pista: "Pasadizo complicado y confuso" },
        { palabra: "INSECTO", pista: "Clase de animales pequeños y con patas" },
        { palabra: "CORAZON", pista: "Órgano vital del cuerpo humano" },
        { palabra: "MUSEO", pista: "Lugar de exhibición de arte y cultura" },
        { palabra: "DORMIR", pista: "Descansar en estado de sueño" },
        { palabra: "CALLE", pista: "Vía pública para vehículos y peatones" },
        { palabra: "INVIERNO", pista: "Otra de las estaciones del año" },
        { palabra: "ROSADO", pista: "Color entre rojo y blanco" },
        { palabra: "PUZZLE", pista: "Juego que requiere armar una imagen" },
        { palabra: "GLOBO", pista: "Objeto inflado con helio o aire" },
        { palabra: "ISLA", pista: "Porción de tierra rodeada de agua" },
        { palabra: "MOCHILA", pista: "Bolso para llevar cosas" },
        { palabra: "CEBOLLA", pista: "Vegetal con sabor fuerte" },
        { palabra: "RINCON", pista: "Esquina o lugar apartado" },
        { palabra: "ABANICO", pista: "Objeto para generar aire fresco" },
        { palabra: "PIRATA", pista: "Navegante que practica la piratería" },
        { palabra: "OJOS", pista: "Órganos de la vista en el rostro" },
        { palabra: "ORDENADOR", pista: "Sinónimo de computadora" },
        { palabra: "HAMBURGUESA", pista: "Comida rápida de carne" },
        { palabra: "ABEJA", pista: "Insecto que produce miel" },
        { palabra: "CASAMIENTO", pista: "Ceremonia de boda" },
        { palabra: "PLATANO", pista: "Fruta amarilla y alargada" },
        { palabra: "CHOCOLATE", pista: "Delicia dulce de cacao" },
        { palabra: "AVENTURA", pista: "Viaje emocionante y arriesgado" },
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
    } else if (mistakes >= 8) {
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