"use strict"

    //formas de declarar variaveis:
    var nome = "karina"; // com o var, a variavel esta acessivel em qualquer bloco.
    let nome1 = "carina"; // com o let, a variavel fica restrita ao bloco que pertence. De preferenica a esse modelo


    if(true){
        var oi="hello";
    }
    console.log(oi)

    //if(true){
  //      let say="hello";
   // }
   // console.log(say) //aqui ele ja nao daria certo, pois o let eh restrito ao seu bloco

    let sobrenome = "bispo";
    sobrenome = "casta"; //como eh uma variavel, ela permite a variacao, indenpendete se for var ou let
    console.log(sobrenome);

    const naoMudo = "oi";
    console.log("Constante nao muda! Nao possso variar seu valor");