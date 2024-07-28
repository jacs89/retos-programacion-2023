const readline = require('readline');

// Donde guardo el abecedario
const abecedario = "abcdefghijklmnñopqrstuvwxyz";

// La función principal del juego
function principal() {
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    teclado.question("Introduce una palabra de 100 puntos: ", (palabra) => {
        let puntos = puntuarPalabra(palabra);

        if (puntos > 100) {
            console.log('Ganaste. La palabra suma ' + puntos + ' puntos.');
        } else {
            console.log('Inténtelo de nuevo, esa palabra suma ' + puntos + ' puntos , no 100pts.');
        }

        teclado.close();
    });
}

// La función que emplearemos para puntuar la palabra
function puntuarPalabra(palabra) {
    let puntos = 0;
    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {
        let indice = abecedario.indexOf(palabra[i]);
        if (indice !== -1) {
            puntos += indice + 1; // Los índices empiezan en 0
        }
    }

    return puntos;
}

// Ejecución del juego
principal();
