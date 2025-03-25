    //Operadores ternarios -> ' condicao ? se verdadeiro : se falso '
        // '?' é um operador ternario.
        // 0 = false | 1 = true.

        

    let num = 10
    let res = num%2

    //Operador convencional
    if(num%2){
        console.log("Par")
    } else{
        console.log("Impar")
    }

    //Operador Ternario 
    let numm = 10, ress
    ress = (! (numm % 2) ? "Par" : "Impar") // Se a condicao for verdadeira retorna a primeira opcao (par), se for falso, retorna a segunda opcao (impar).
    // Como 0 é falso e 1 eh true, no momento de fazer a condicao sem o '!' resultou em 'impar', pois o resto de 10/2 é 0. Entao preciso negar a condicao -> num % 2
    
    console.log(ress)

  