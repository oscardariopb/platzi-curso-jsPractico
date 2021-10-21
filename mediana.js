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


const lista1 = [
    100, 200, 500, 40000000
];

const mitadLista1 = parseInt(lista1.length) / 2;

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

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}
