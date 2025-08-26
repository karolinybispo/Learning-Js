/*
Lops ou estruturas de repeticao: 
ESTRUTURA QUE VAI REPETIR INSTRUCOES. 
AS REPETICOES CHAMA-SE INTERAÇÕES.


*/

/*for(let i = 0; i < 10; i ++){     /* um inicializador, um condicionador de exceucao (enqt i for menor que 10, pode repetir), contador/controle
    let num = i + 2;
} 
 console.log(num);
*/

for(let i = 0; i < 10; i ++){
    if (i%2 == 0){
        console.log(i + " é par");
    }
    else {
        console.log(i + " é impar");
    }
}
