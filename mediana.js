function calcularMediaAritmetica(lista) {
    /* let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];    
    } */

    const sumaLista = lista.reduce( 
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
     );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function calcularMedianaAritmetica(lista) {
    let mediana;
    
    const mitadLista = parseInt(lista.length / 2);
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista ];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }

};

function esPar(numerito) {

    if (numerito % 2  === 0) {
        return true;
        // 2 elementos el promedio y con eso la mediana
    } else {
        return false;
        // lista1
        // posición de la mitad con eso la mediana
    }
    // supongo el otro caso del que habla el profe es si el arreglo es vacio, o sea 0 en el módulo
}

const listaEjemplo = [2, 1, 3, 10];

console.log(listaEjemplo)
console.log(listaEjemplo.sort())
console.log(listaEjemplo.sort(ordenar))

function ordenar(a, b) {
    if (a > b) {
        return  1;
    } else if (a < b) {
        return  -1;
    } else {
        return 0;
    }
}


