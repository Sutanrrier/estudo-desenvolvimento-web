//Factory Function
function criarPessoa(nome, idade, altura){
    return {
        nome,
        idade,
        altura,
        mostrarInfo(){
            console.log(nome + " " + idade + " " + altura);
        }
    }
}

const pessoa1 = criarPessoa("José", 33, 2.01);
pessoa1.mostrarInfo();

//constructor Function
function Pessoa(nome, idade, altura){
    this.nome = nome,
    this.idade = idade,
    this.altura = altura,
    this.mostrarInfo = function(){
        console.log(nome + " " + idade + " " + altura);
    }
}

const pessoa2 = new Pessoa("Maria", 22, 1.81);
pessoa2.mostrarInfo();


//Clonando objetos
const pessoaClone = {...pessoa2};
pessoaClone.mostrarInfo();

//Datas

const data1 = new Date();
console.log(data1);