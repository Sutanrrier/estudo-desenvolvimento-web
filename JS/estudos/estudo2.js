//IF-ELSE
let hora = 18.1;

if (hora >= 6 && hora < 13) {
    console.log("Estamos na manhã!");
}
else if (hora >= 13 && hora <= 18) {
    console.log("Estamos na tarde");
}
else if (hora > 18 && hora <= 24) {
    console.log("Estamos na noite!");
}
else {
    console.log("Estamos na madrugada!");
}

//Switch Case
let permissao = "cliente";
switch (permissao) {
    case "cliente":
        console.log("Sou um cliente");
        break;
    case "gerente":
        console.log("Sou um gerente");
        break;
    default:
        console.log("Não sou ninguem :(");
}

//Loops - For
for (let i = 1; i <= 3; i++) {
    console.log("Linha " + i);
}

//Loops - While
let contador = 3;
while (contador > 0) {
    console.log("Contando.." + contador);
    contador--;
}

//Loops - For each
let cores = ["vermelho", "azul", "verde", "lilás"]

for(let cor of cores){
    console.log(cor)
}