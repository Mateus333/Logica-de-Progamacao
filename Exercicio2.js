function gerarMultiplosDeUmNumero(numero) {
    console.log(`${numero * 1} - ${numero * 2} - ${numero * 3} - ${numero * 4} - ${numero * 5} - ${numero * 6} - ${numero * 7} - ${numero * 8} - ${numero * 9} - ${numero * 10}`);
}

let numeroInicial = 1;

while(numeroInicial <= 10) {
    gerarMultiplosDeUmNumero(numeroInicial);
    numeroInicial += 1;
}