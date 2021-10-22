/* const lista1 = [
    1,2,3,4,1,1,1,2,2,1
]; */


function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1; //listaCount[elemento] + 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    ); // objeto convertir a array
    
    const moda = listaArray[listaArray.length - 1];
    return moda;
}
