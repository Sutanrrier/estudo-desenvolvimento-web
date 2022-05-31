//Exercicio - Obtenha uma média de notas contidas em um array.

//Solução
function mediaNotas(notas){
    let media = 0;
    for (let nota of notas){
        media += nota;
    }
    media = media / notas.length;
    return (media >= 6) ? (media + " -> Passou!") : (media + " -> Reprovou!");
}

//Exemplos
const notas = [3,5,3];
console.log(mediaNotas(notas));

const notas2 = [3,5,10];
console.log(mediaNotas(notas2));