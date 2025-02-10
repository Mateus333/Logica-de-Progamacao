function identificarParOuImpar(numero) {
     if(numero % 2 === 0) {
        console.log("O número informado é par");
     } else {
        console.log("O número informado é impar");
     }
}

identificarParOuImpar(5); //Ímpar
identificarParOuImpar(10); //Par
identificarParOuImpar(2); //Par
identificarParOuImpar(1); //Ímpar
identificarParOuImpar(0); //Par