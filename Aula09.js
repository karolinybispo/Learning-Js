    // Diferença entre Pré Incremento e Pós Incremento

    // pos incremento (pega o valor e depois incrementa)
    let n1 = 10;

    n1++
    console.log(n1)

    console.log("se eu comentar a linha 6, nao aparecera '11' " + n1++) //nao incrementa pq esta como pos incremento


    // pre incremento (incrementa e por tanto usa o valor incrementado)
    let n2 = 30
    console.log(++n2 + " nesse caso aparece '31' pq eh pre incremento. Primeiro incrementa no valor da variavel e ai aparece") 


    let n3 = 34
    let x =-n3
    console.log("vai deixar o valor 34 negativo " + x)