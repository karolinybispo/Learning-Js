    //Operadores logicos:

    let n1,n2,n3,n4

    n1 = 12;
    n2 = 23;
    n3 = 11;
    n4 = 90;

    console.log((n1>n2) && (n4<n1))

    console.log((n1<n2) || (n3<n1))

    if(n1>n2){
        console.log(n1 + "maior que n2");
    } else {
        console.log("n1 eh menor");
    }

    if(n1>n2 && n2>n3){
        console.log(true);
    } else {
        console.log(false);
    }