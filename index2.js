let lista = new Array

function multiplicacao (fator , operador) {
    return fator * operador 

}

for (let linha = 0; linha <10; linha ++) {
    for (let coluna = 0; coluna <10; coluna ++) {
        lista [linha] = new Array;
        lista [linha] [coluna]= multiplicacao ((linha +1), coluna +1);
       // console.log((linha + 1) + "x  " + (linha +1 ) + "= " +lista [linha]) ;

    }
}

