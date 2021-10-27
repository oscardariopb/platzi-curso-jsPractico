/* Cuota = (Monto * (%MV x (1 + %MV) ^ n)) / ((1 + %MV) ^ n) - 1)

Donde:

Monto => (valor a ser prestado)
n => numero de meses (Plazo),
%MV => Tasa Efectiva Mensual
%MV = (1 + %EA) ^ (1/12) - 1 */

let monto = 44000000;
let n = 60;
let ea = 11;
let eaP = ea / 100;

let mv = 0;


mv = ((1 + eaP) ** (1/12)) - 1;

let cuota = (monto * (mv * (1 + mv)**n)) / (((1 + mv) ** n) - 1);
let a = monto * ( eaP / (1 - (1 + eaP) **-5)) //cuota por año método frances
let a1 = monto * ( mv / (1 - (1 + mv) **-60)) //cuota por mes método frances
console.log({monto, n, ea, eaP, mv});
console.log({cuota, a, a1});
let totalPagado = n * cuota;
let totalInteres = totalPagado - monto;

console.log({totalPagado});
console.log({totalInteres});