//Exercicio - Crie un objeto endereço que contenha os atributos seguintes:
// Rua / Cidade/ CEP / Exibir Endereco

//Solução
function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep,
    this.exibirEndereco = function () {
        console.log("Rua: " + rua + " | Cidade: " + cidade + " | CEP: " + cep);
     }
}

//Exemplos
const endereco1 = new Endereco("Rua Salgado Mourao, 123", "Comicity", "12412-413");
endereco1.exibirEndereco();