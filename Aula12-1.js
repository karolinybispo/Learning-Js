
//Esse arq tbm se usa spreed como na aula 12. 
//Optei por fazer um novo arq para usar no html para ficar mais organizado.

    const objs=document.getElementsByTagName("div") // ("div"): especifico que quero os elemntos da tag div. Dentro de objs tenho uma colecao de elementos div
    const objs1=[...document.getElementsByTagName("div")]

    //No objs eu tenho um html coletion. HTML colection so recebe elementos html
    //document: eh do DOM, ent aqui no VScode nao vai funcionar.
    //document.getElementsByTagName: retorna uma colecao de elementos html (colecao de elemntos eh diferente de array)

    console.log(objs)
    console.log(objs1) // esse eh um array e ele recebe outros tipos de elementos, nao so html

    objs1.forEach(element => {
        console.log(element);
    });



  

