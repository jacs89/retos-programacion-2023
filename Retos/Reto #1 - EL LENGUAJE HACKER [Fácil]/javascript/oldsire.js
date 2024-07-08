
//Crear la función de traducción hacker
function traducir(palabra) {

    //Definición del map del alfabeto hacker
    let alfabeto = new Map( [
        ['a', '4'], 
        ['b', '8'], 
        ['c', '['], 
        ['d', ')'], 
        ['e', '3'], 
        ['f', 'ph'], 
        ['g', '6'],
        ['h', '#'],
        ['i', '1'],
        ['j', ';'],
        ['k', '|{'], 
        ['l', '7'], 
        //['m', 'ITI'], 
        //['n', '|/|'], 
        ['ñ', '~'], 
        ['o', 'º'], 
        ['p', '9'], 
        ['q', '0_'], 
        ['r', '2'], 
        ['s', '5'], 
        ['t', '+'], 
        ['u', 'v'], 
        ['v', 'u'], 
        ['w', '2u'], 
        ['x', '><'], 
        ['y', 'j'], 
        ['z', 's']
    ] );

    let resultado = "";

    //Operativa de la función
    for (let indice = 0; indice < palabra.length; indice++) {

        let caracter = palabra.charAt(indice).toLowerCase();
        resultado += alfabeto.get(caracter) || palabra.charAt(indice);  
    }

    console.log(resultado);
}

//Llamada a la función
traducir("hola mundo");