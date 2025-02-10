function identificarMaiorEMenorNumArray(lista) {
    if (lista.length === 0) {
      console.log("Informe uma lista não-vazia.");
      return;
    }
    let maiorElemento = lista[0];
    let menorElemento = lista[0];
    for (let posicaoElemento = 1; posicaoElemento < lista.length; posicaoElemento += 1) {
      //Encontrando o menor elemento
      if (lista[posicaoElemento] < menorElemento) {
          menorElemento = lista[posicaoElemento];
      }
      //Encontrando o maior elemento
      if (lista[posicaoElemento] > maiorElemento) {
          maiorElemento = lista[posicaoElemento];
      }
    }
    console.log(`O menor elemento é ${menorElemento}`);
    console.log(`O maior elemento é ${maiorElemento}`);
  }

identificarMaiorEMenorNumArray([13, 2, 5, 8, 3, 33, 4, 42, 42.5]);
identificarMaiorEMenorNumArray([10, 12, 53, 7, 20, 330, 45, 12, 7.5]);
identificarMaiorEMenorNumArray([]);