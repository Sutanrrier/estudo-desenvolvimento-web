//Exercicio - Obtenha uma média de notas contidas em um array.

//Solução
function mediaNotas(notas){
    let media = 0;
    for (let nota of notas){
        media += nota;
    }
    return media / notas.length;
}

//Exemplos
const notas = [3,5,4];
console.log(mediaNotas(notas));

const notas2 = [3,5,13];
console.log(mediaNotas(notas2));