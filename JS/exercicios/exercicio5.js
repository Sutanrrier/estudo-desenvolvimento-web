//Exercicio - Faça um codigo que faça loop em numero de 0 até ele e mostre quais são pares ou impares.

//Solução
function parOuImpar(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log((i % 2 === 0) ? (i + ": Par") : (i + ": Impar"))
    }
}

//Exemplo
parOuImpar(10);