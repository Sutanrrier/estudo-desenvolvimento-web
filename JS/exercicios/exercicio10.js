//Exercicio - Cria uma função que exiba os numeros primeiros até dado numero

//Solução
function exibirNumerosPrimos(numero) {
    for (let i = 2; i <= numero; i++) {
        let divisores = 0;

        for (let j = 2; j <= i; j++) {
            if (i % j === 0) {
                divisores += 1;
            }
        }

        if(divisores === 1){
            console.log(i + " é primo!");
        }
    }
}

//Exemplos
console.log("Teste 01");
exibirNumerosPrimos(6);

console.log("Teste 02");
exibirNumerosPrimos(8);