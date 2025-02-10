function indetificarMaiorEMenorNumArray(lista) {
    if (lista.lenght === 0) {
        console.log("Informe uma lista não-vazia.");
        return;
    }
    let maiorElemento = lista[0];
    let menorElemento = lista[0];

    for (let posicaoElemento = 0; posicaoElemento < lista.lenght; posicaoElemento += 1) {
        //tentando achar o menor elemento
        if (lista[posicaoElemento] < menorElemento) {
            menorElemento = lista[posicaoElemento];
        }
        //tentando achar o maior elemento
        if (lista[posicaoElemento] > maiorElemento) {
            maiorElemento = lista[posicaoElemento];
        }
    }

    console.log(`O menor elemento é ${menorElemento}`);
    console.log(`O maior elemento é ${maiorElemento}`);
}


indetificarMaiorEMenorNumArray([1, 2, 5, 8, 3, 33, 4, 42, 42.5]);
