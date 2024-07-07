for (let indice = 1; indice <= 100; indice++) {

    if (indice % 3 === 0 && indice % 5 === 0){
        console.log("FizBuzz")
    }

    if (indice % 3 === 3){
        console.log("Fizz")
    }

    if (indice % 5 === 0) {
        console.log("Buzz")
    }
}