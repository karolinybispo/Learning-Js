    
    //Operador Spread (quebra um array ou outra estrutura que seja iteravel e devolve elemento a elemento) (spread espalha os elementos de arrays, objetos e listas para dentro de outra estrutura. Ele combina, copia e passa valores sem bagunca)

    //declarando array
    let n1 = [10,20,89]
    console.log(n1)

    let n2 = [n1]
    console.log(" ficou um array dentro de outro array" + n2) // com o spread podemos mudar isso e deixar apenas um array com elemntos dentro dele, como se fossem copiados

    //Nesse exemplo os elementos do array frutas foram pegados um a um e colocados em copia como se fossem declaradas dentro dele
    let frutas = ["morango", "abacaxi"];
    let copia = [...frutas]; // Copia os elementos
    console.log(copia); // ["morango", "abacaxi"]


    //Com spread posso fazer copia de objeto
    const jogador1 = {nome: "bruno", energia: 100, vidas: 2, forca: 230}
    const jogador2 = {nome: "jo", energia: 1000, vidas: 23}
    //Quero concatenar jogador 1 e 2 no 3
    const jogador3 = {...jogador1,...jogador2} // Spread (...)
    console.log(jogador3)


    let pessoa = { nome: "João", idade: 25 };
    let novaPessoa = { ...pessoa, cidade: "São Paulo" };
    console.log(novaPessoa); 
    // { nome: "João", idade: 25, cidade: "São Paulo" }



    //Usando com funcao, passando os elementos com argumento
    const soma = (v1, v2,v3) => {
        return v1,v2,v3
    }
    let valores = [1,34,2]
    console.log(soma(valores)) // dessa form nao vai dar certo, mas olhe o exemplo abaixo
    console.log( "exemplo que da certo"+ soma(...valores)) // deu certo pq cada valor do array foi quebrado e espalhado p as posicoes das variaveis da funcao.