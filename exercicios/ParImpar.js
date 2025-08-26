
/**
 * Escreva uma função que receba um número e diga se ele é par ou ímpar.
 */

let num = 2

function parOrImpar(numero) {
   if  (numero % 2 === 0){
    return "par"
    //console.log("O numero " + numero + " é par"); // desse forma, o console.log fora da função não eh necessario.
   }
   else {
    //console.log("O numero " + numero + " é impar"); // desse forma, o console.log fora da função não eh necessario.
    return "impar"
 }
}

//parOrImpar(num); // quando nao tem 'return' dentro da funcao, mas console.log, apenas chamar a função é o suficiente.

console.log(parOrImpar(num)); //assim deve ser quando tem 'return' dentro da função.

let resultadoFuncao = parOrImpar(7); // quando tem 'return' dentro da funcao, o valor retornado deve ser colocado em uma variavel para ser mostrado por um console ou para ser manipulado.
console.log("O número 7 é " + resultadoFuncao); // o valor retornado e atribuido a variavel, esta sendo mostrado ao usuario.