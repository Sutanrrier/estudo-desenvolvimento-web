//Exercicio - Crie uma função para ler os atributos de um objeto.
// Caso este atributo seja uma string, deve ser exibido no console.

//Solução
function stringsObjeto(objeto) {
    for (let atributo in objeto) {
        if (typeof (objeto[atributo]) == 'string') {
            console.log("String encontrada! -> " + objeto[atributo]);
        }
    }
}

//Exemplo
const pessoa1 = {
    nome: "Alex",
    profissao: "Cozinheiro",
    idade: 31,
    altura: 1.92
}

const pessoa2 = {
    nome: "Maria",
    profissao: "Faxineira",
    idade: 28,
    altura: 1.76
}

stringsObjeto(pessoa1);
stringsObjeto(pessoa2);