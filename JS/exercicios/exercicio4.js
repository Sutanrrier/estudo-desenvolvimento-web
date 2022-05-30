//Exercicio - Crie um verifcador de velocidade
//Velocidade Máxima é 70 km/h
//Para cada 5 km/h acima da velocidade máxima, deve ser adicionado 1 ponto na carteira.
//Se ele levar 12 pontos na carteira, ela deve ser suspendida.

//Solução
function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const pontosPorKm = 5;

    if (velocidade <= velocidadeMaxima) {
        return "Ok";
    }
    else {
        velocidade -= velocidadeMaxima;
        const pontos = Math.floor(velocidade / pontosPorKm);
        return (pontos < 12) ? "Pontos: " + Math.floor(pontos) : "Carteira Suspensa";
    }
}

//Exemplos
console.log(verificarVelocidade(30));
console.log(verificarVelocidade(70));
console.log(verificarVelocidade(120));
console.log(verificarVelocidade(75));
console.log(verificarVelocidade(180));
