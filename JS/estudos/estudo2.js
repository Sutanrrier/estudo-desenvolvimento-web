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