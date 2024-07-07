
function fizzbuzz() {
    for (let indice = 1; indice <= 100; indice++) {
    
        if (indice % 3 === 0 && indice % 5 === 0){
            console.log("FizBuzz")
        }    
        else if (indice % 3 === 0){
            console.log("Fizz")
        }    
        else if (indice % 5 === 0) {
            console.log("Buzz")
        }    
        else {
            console.log("indice")
        }
    }
}

fizzbuzz()