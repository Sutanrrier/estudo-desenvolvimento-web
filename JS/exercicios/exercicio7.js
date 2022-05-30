//Exercicio - Criar uma função que retorna a soma de todos os multiplos de 3 e 5 de um numero fornecido

//Solução
function somarMultiplos3e5(numero){
    let soma = 0;
    for(let i = 0; i <= numero; i++){
        if(i % 3 == 0 || i % 5 == 0){
            soma += i;
        }
    }
    return soma;
}

//Exemplos
console.log(somarMultiplos3e5(10));
console.log(somarMultiplos3e5(20));