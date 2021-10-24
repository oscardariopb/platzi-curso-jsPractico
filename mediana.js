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


/** Tarea extra un promedio en particular */

/* const listaE = [
    {nota: 6, ponderacion: 1 },
    {nota: 7, ponderacion: 1 },
    {nota: 5, ponderacion: 1 },
    {nota: 7, ponderacion: 1 },
    {nota: 8, ponderacion: 1 },
    {nota: 6, ponderacion: 5 }
]; */

/**
 * En este caso, el promedio ponderado de una nota de 10 con créditos de 2, 
 * otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado 7.916.
 * La media aritmética sin tener en cuenta el peso de cada nota habría sido 8.333.
 */
const listaE = [
    {
        course: "Educación Física",
        nota: 10,
        ponderacion: 2,
    },
    {
        course: "Programación",
        nota: 8,
        ponderacion: 5,
    },
    {
        course: "Finanzas personales",
        nota: 7,
        ponderacion: 5,
    },
];

function calcularMediaPonderada() {

    let ponderacionTotal = listaE.reduce( (acc, act) => acc + act.ponderacion, 0  );
    let sumaNotaPonderacion = listaE.reduce( (acc, act) => acc + (act.ponderacion * act.nota), 0 );
    console.log(ponderacionTotal, sumaNotaPonderacion);
    let mediaPonderada = sumaNotaPonderacion / ponderacionTotal;
    return mediaPonderada;

}

/** apuntes */
// su uso es obtener medias pero de porcentajes, ya que ofrece unos cálculos más precisos
const lista = [1, 3, 9];
function calcularMediaGeometrica(lista) {
    let productoLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado * nuevoElemento;
      }
    )
  
    if (productoLista <= 0) {
      return "Los valores deben ser positivos"
    } else {
      return productoLista ** (1 / lista.length);
    }
}

/** promedia velocidades */
function calcularmediaArmonica1 (array) {
    let den = 0
    array.forEach(element => {
        den += 1 / element
    });
    const media = (array.length / den)
    return(media)
}; 

const calcularMediaArmonica2 = (lista1) =>{
    const listaOrdenada = lista1.sort((a,b)=> a-b);
    const cantidadTotal = listaOrdenada.length;
    const valoresInvertidos = listaOrdenada.map((elemento) =>1/elemento);
    const sumaValoresInvertidos = valoresInvertidos.reduce((acc, cur)=> acc + cur);
    const mediaArmonica = cantidadTotal/sumaValoresInvertidos
    console.log(`La Media armónica es ${mediaArmonica}`);
}

const calcularMediaArmonica3 = (lista) => {
    const n = lista.length
    let suma_lista = 0
    for (let index = 0; index < lista.length; index++) {
      suma_lista += (1/lista[index])
    }
    const mediaArmonica = n / suma_lista
    return mediaArmonica
  }
  
  console.log(`Media armónica de [1,2,3,4]: ${calcularMediaArmonica3([1,2,3,4])}`)


