/* Cuota = (Monto * (%MV x (1 + %MV) ^ n)) / ((1 + %MV) ^ n) - 1)

Donde:

Monto => (valor a ser prestado)
n => numero de meses (Plazo),
%MV => Tasa Efectiva Mensual
%MV = (1 + %EA) ^ (1/12) - 1 */

/* let monto = 12000000;
let n = 12;
let ea = 11;
let eaP = 0.02; */
/* let monto = 44000000;
let n = 60;
let ea = 11;
let eaP = ea / 100; */

function calcularTasaEfectivaMensual () {
  const inputTasaInteres = document.getElementById('tasaInteresAnual');
  let tea = Number(inputTasaInteres.value)
  let mv = 0;
  let teaP = tea / 100;
  mv = ((1 + teaP) ** (1/12)) - 1;
  // mv = 0.02;
  return mv;

};

function calcularCuota() {
  const inputPrestamo  = document.getElementById('prestamo');
  let valPrestamo = Number(inputPrestamo.value)
  const inputPeriodos = document.getElementById('periodos');
  let valPeriodos = Number(inputPeriodos.value)
  let mv = calcularTasaEfectivaMensual();
  //mv = 0.02;
  let cuota = (valPrestamo * (mv * (1 + mv) ** valPeriodos)) / (((1 + mv) ** valPeriodos) - 1);
  
  let totalPagado = valPeriodos * cuota;
  let totalInteres = totalPagado - valPrestamo;
  
  console.log({totalPagado});
  console.log({totalInteres});

  const divTabla = document.getElementById('tablaPrestamo');
  const divHeader = document.getElementById('trHeader');
  const bodyTabla = document.getElementById('bodyTabla');
  bodyTabla.innerHTML = '';
  
  let fecha = new Date();
  let f1 = new Date(fecha.getTime());
  console.log('antes', fecha, f1);
  //f1.setDate(f1.getDate() + 1);
  
  let capital = valPrestamo;
  let cuotaCiclo = cuota;
  let abonoCapital = 0;
  let saldoFinal = 0;
  let interesCuotaPagado = 0;
  let interesCuotaTotalPagado = 0;
  for (let i = 1; i < (valPeriodos + 1); i++) {
      interesCuotaPagado = capital * mv;
      interesCuotaTotalPagado += interesCuotaPagado;
      abonoCapital = cuotaCiclo - interesCuotaPagado;
      saldoFinal = capital - abonoCapital;
      bodyTabla.innerHTML += ` <tr> <td>${f1} </td> <td>${i} </td> <td>${capital.toFixed(2)} </td> <td>${ cuotaCiclo.toFixed(2)} </td> <td>${ interesCuotaPagado.toFixed(2)} </td>
            <td> ${ abonoCapital.toFixed(2)} </td> <td> ${ saldoFinal.toFixed(2)} </td>  </tr>`;
      f1.setMonth(f1.getMonth() + 1)
      //console.log(f1);
      capital = saldoFinal;
  
  }
  bodyTabla.innerHTML += ` <tr> <td>TEM: ${mv} </td> <td>Interes Total pagado: ${interesCuotaTotalPagado} </td> <td>Total Pagado: ${interesCuotaTotalPagado + valPrestamo} </td> </tr>`

}

// guia base https://www.youtube.com/watch?v=MVmsWllnbY0&list=WL&index=11
/* let a = monto * ( eaP / (1 - (1 + eaP) **-5)) //cuota por año método frances
let a1 = monto * ( mv / (1 - (1 + mv) **-60)) //cuota por mes método frances
console.log({monto, n, ea, eaP, mv});
console.log({cuota, a, a1}); */






// ¿Cómo calcular la cuota de un crédito? https://comparabien.com.co/faq/como-calcular-cuota-credito
// https://economipedia.com/definiciones/sistema-de-amortizacion-frances.html
