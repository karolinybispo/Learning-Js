// uso de Case
// CAS: avalia uma expressao e com seu resultado ele compara com os cases, se algum case concicdiir com a expressa, eh executado, Se não, vai para o default.

let colocacao = 3;

switch (colocacao) {
    case 1: 
    console.log('Parabéns, você ficou em primeiro lugar!');
    break;
    case 2: 
    console.log( "Parabéns você ficou em segundo lugar!");
    break;
    case 3: case 5: case 8:
    console.log( "Parabéns você participou da competição!");
    break
    default: console.log( "nao subiu ao podium");
    break;
}
