//Exercicio - Exiba asteriscos no console a partir de uma função.

//Solução
function exibirAsteriscos(quantidade) {
    let string = "";
    for (let i = 1; i <= quantidade; i++) {
        for (let j = 1; j <= i; j++) {
            string += "*";
        }
        console.log(string);
        string = "";
    }
}

//Exemplos
console.log("Teste 01");
exibirAsteriscos(4);

console.log("Teste 02");
exibirAsteriscos(8);