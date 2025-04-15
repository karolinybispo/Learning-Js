let num = 90;

if (num > 9007){
    console.log("num eh maior")
}
else {
    console.log("num eh menor")
}

    let clima = "sol"
    let energia = 30;

    if(energia > 40 && clima == "sol"){
        console.log("vou a praia")
    }else {
        console.log("vou no cinema")
    }

    let som = "musica"
    let volume = 30;

    if(volume > 40 || som == "grito"){
        console.log("nao quero musica")
    }else {
        console.log("vai ter musica")
    }

    if(volume > 40 || som == "musica"){
        console.log("nao quero musica")
    }else {
        console.log("vai ter musica")
    }
    
//eh possivel colocar outros if dentro do mesmo if