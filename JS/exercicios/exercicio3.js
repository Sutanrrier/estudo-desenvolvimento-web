//Exercicio - Crie uma solução para FizzBuzz em JavaScript

//Solução
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    }
    else if (numero % 3 === 0) {
        return "Fizz";
    }
    else if (numero % 5 === 0) {
        return "Buzz";
    }
    return numero;
}

//Exemplos
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(23));
