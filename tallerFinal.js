/* Cuota = (Monto * (%MV x (1 + %MV) ^ n)) / ((1 + %MV) ^ n) - 1)

Donde:

Monto => (valor a ser prestado)
n => numero de meses (Plazo),
%MV => Tasa Efectiva Mensual
%MV = (1 + %EA) ^ (1/12) - 1 */

let monto = 12000000;
let n = 12;
let ea = 11;
let eaP = 0.02;
/* let monto = 44000000;
let n = 60;
let ea = 11;
let eaP = ea / 100; */

let mv = 0;


mv = ((1 + eaP) ** (1/12)) - 1;
mv = 0.02;

let cuota = (monto * (mv * (1 + mv)**n)) / (((1 + mv) ** n) - 1);
let a = monto * ( eaP / (1 - (1 + eaP) **-5)) //cuota por año método frances
let a1 = monto * ( mv / (1 - (1 + mv) **-60)) //cuota por mes método frances
console.log({monto, n, ea, eaP, mv});
console.log({cuota, a, a1});
let totalPagado = n * cuota;
let totalInteres = totalPagado - monto;

console.log({totalPagado});
console.log({totalInteres});


const divTabla = document.getElementById('tablaPrestamo');
const divHeader = document.getElementById('trHeader');
const bodyTabla = document.getElementById('bodyTabla');


let fecha = new Date();

console.log(fecha);

let f1 = new Date(fecha.getTime());

console.log('antes', f1);
//f1.setDate(f1.getDate() + 1);

console.log('pepe', f1);

console.log('dentro del ciclo');
let capital = monto;
let cuotaCiclo = cuota;
let abonoCapital = 0;
let saldoFinal = 0;
for (let i = 1; i < 13; i++) {
    interesCuotaPagado = capital * mv;
    abonoCapital = cuotaCiclo - interesCuotaPagado;
    saldoFinal = capital - abonoCapital;
  bodyTabla.innerHTML += ` <tr> <td>${f1} </td> <td>${i} </td> <td>${capital} </td> <td>${ cuotaCiclo.toFixed(2)} </td> <td>${ interesCuotaPagado.toFixed(2)} </td>
        <td> ${ abonoCapital.toFixed(2)} </td> <td> ${ saldoFinal.toFixed(2)} </td>  </tr>`;
  f1.setMonth(f1.getMonth() + 1)
  //console.log(f1);
  capital = saldoFinal;

}