//Arrays
const numeros = [2, 3, 5, 7, 11];

//Insere no começo do array
numeros.unshift(0);
//insere no final do array
numeros.push(13);
console.log(numeros);
//-------------------------------------------------------

//Deleta o primeiro elemento do array
numeros.shift();
//Deletar o utlimo elemento do array
numeros.pop();
console.log(numeros);
//-------------------------------------------------------

//Esvaziando um array
numeros.length = 0;
console.log(numeros);
//-------------------------------------------------------

//Procurar elementos de tipo primitivo dentro de um array
console.log(numeros.includes(2));

const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];
//Procurar elementos de tipo referencia dentro de um array
console.log(marcas.find(({ id }) => id === 1));
//-------------------------------------------------------

//Combinando Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinada = [...array1,...array2];
console.log(arrayCombinada);

//loop forEach
arrayCombinada.forEach((numero) => {
    console.log(numero);
})

//Combinando elementos de uma array em uma string
console.log(arrayCombinada.join("-"));
