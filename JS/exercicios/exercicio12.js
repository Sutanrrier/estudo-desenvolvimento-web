//Exercicio - Compare o conteudo de dois objetos de endereço que contenha os atributos seguintes:
// Rua / Cidade/ CEP / Exibir Endereco
//Retorne se são iguais ou diferentes

//Solução
function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep,
        this.exibirEndereco = function () {
            console.log("Rua: " + rua + " | Cidade: " + cidade + " | CEP: " + cep);
        }
}

function compararEnderecos(endereco1, endereco2) {
    if(JSON.stringify(endereco1) === JSON.stringify(endereco2)){
        return "São iguais!";
    }
    else{
        return "São diferentes!";
    }
}

//Exemplos
const endereco1 = new Endereco("Rua Salgado Mourao, 123", "Comicity", "12412-413");
const endereco2 = new Endereco("Rua Salgado Mourao, 123", "Comicity", "12412-413");

console.log(compararEnderecos(endereco1, endereco2));
