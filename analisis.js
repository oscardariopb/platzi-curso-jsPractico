
// helpers - utils
function esPar(numerito) {
    /* if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    } */
    return (numerito % 2 === 0);
}

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
///////////////////////////////

// Calculadora mediana
function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if ( esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

        return personitaMitad;
    } else {
        return personitaMitad;
    }
};


// Calculando mediana general
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort( 
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalario(salariosColSorted);
// mediana del top diez


const spliceStart = parseInt( (salariosColSorted.length  * 90) / 100 );
const spliceCount = salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalario(salarioColTop10);

console.log({medianaGeneralCol,
    medianaTop10})
