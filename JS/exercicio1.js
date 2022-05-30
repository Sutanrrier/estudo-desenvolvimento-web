//Exercicio - Faça com que cor1 receba o valor de cor2 e vice-versa.

//Solução
let cor1 = "vermelho";
let cor2 = "azul";

console.log("Antes")
console.log(cor1 + " e " + cor2);

let cor3 = cor1;
cor1 = cor2;
cor2 = cor3;

console.log("Depois")
console.log(cor1 + " e " + cor2);
