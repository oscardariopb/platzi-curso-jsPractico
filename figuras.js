console.group('Cuadrados');
// Código del cuadrado
//const ladoCuadrado = 5;
//console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado (lado) { 
    return lado * 4;
    
}

// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function areaCuadrado (lado) {
    return lado * lado;
} 
//console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');

console.groupEnd();

// Código del triangulo

console.group('Triángulos')

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    'Los lados del triangulo miden: ' + ladoTriangulo1 
    + 'cm, '+ ladoTriangulo2 + 'cm, ' 
    + baseTriangulo + 'cm'
); */
/* const alturaTriangulo = 5.5;
console.log('La altura del triángulo es: ' + alturaTriangulo + 'cm'); */

function perimetroTriangulo (lado1, lado2, ladobase) {
    return lado1 + lado2 + ladobase;
} 

// console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cm');

function areaTriangulo  (base, altura) {
    return (base * altura) / 2;
} 
// console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2');

console.groupEnd();

// Código del círculo

console.group('Círculo');

// const radio = 4;
// console.log('El radio del círculo es: ' + radio + 'cm');

// diámetro
function diametroCirculo (radio) {
    return radio * 2;
}
// console.log('El diámetro del círculo es: ' + diametroCirculo + 'cm');

// pi
//const pi = 3.1415;
const pi = Math.PI;
console.log('PI es: ' + pi + 'cm');

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);

    return diametro * pi;
}

// console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cm');

function areaCirculo (radio ) {
    return  (radio * radio) * pi;
}
// console.log('El área del círculo es: ' + perimetroCirculo + 'cm');

// aquí interactuamos

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);

};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    alert(area + 'cm2');
    
    //hablar("El área del cuadrado es " + area + 'cm2');
};

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriLadoUno");
    const input2 = document.getElementById("InputTriLadoDos");
    const input3 = document.getElementById("InputTriLadoBase");

    const perimetro = perimetroTriangulo(Number(input1.value), Number(input2.value), Number(input3.value));
    
    alert('Perimentro Tri ' + perimetro);
};

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriLadoBase");
    const input2 = document.getElementById("InputTriAltura");

    const areaTrian = areaTriangulo(input1.value, input2.value);
    
    alert('Área Tri ' + areaTrian + 'cm2');
};

// Circulo
function calcularPerimetroCirculo () {
    const input1 = document.getElementById("InputRadioCirculo");
    const diametro = diametroCirculo(input1.value);

    const perimetro = perimetroCirculo(input1.value);
    alert('perímetro ' + perimetro)
}

function calcularAreaCirculo () {
    const input1 = document.getElementById("InputRadioCirculo");
    const area = areaCirculo(input1.value);
    alert('área ' + area + 'cm2')
}

//****************************** */

/* calcular la altura de un triángulo isósceles.

La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo. */

function alturaTrianguloIsosceles (lado1, lado2, lado3) {
    if ( (lado1 == lado2) && lado1 != lado3 && lado2 != lado3 ) {
        const baseTriangulo = lado3;
        const baseTrianguloRectangulo = baseTriangulo / 2;
        let altura = 0;
        alturaCuadrada = lado1 ** 2 - baseTrianguloRectangulo ** 2;
        altura = Math.sqrt(alturaCuadrada);
        return altura;

        console.log(
            'base tri ', baseTriangulo, 'base triRec ', baseTrianguloRectangulo, 
            'altura cuadra ', alturaCuadrada, 'altura ', altura
         );
    } else if ((lado1 == lado3) && lado1 != lado2 && lado2 != lado3) {
        const baseTriangulo = lado2;
        const baseTrianguloRectangulo = baseTriangulo / 2;
        let altura = 0;
        alturaCuadrada = lado1 ** 2 - baseTrianguloRectangulo ** 2;
        altura = Math.sqrt(alturaCuadrada);
        return altura;

        console.log(
            'base tri ', baseTriangulo, 'base triRec ', baseTrianguloRectangulo, 
            'altura cuadra ', alturaCuadrada, 'altura ', altura
         );
        
    } else if ((lado2 == lado3) && lado1 != lado2 && lado1 != lado3) {
        const baseTriangulo = lado1;
        const baseTrianguloRectangulo = baseTriangulo / 2;
        let altura = 0;
        alturaCuadrada = lado2 ** 2 - baseTrianguloRectangulo ** 2;
        altura = Math.sqrt(alturaCuadrada);
        return altura;

        console.log(
            'base tri ', baseTriangulo, 'base triRec ', baseTrianguloRectangulo, 
            'altura cuadra ', alturaCuadrada, 'altura ', altura
         );
    } else {
        console.log('Lo sentimos, Eso no es un triángulo Isósceles');
        return 'Lo sentimos, Eso no es un triángulo Isósceles';
    }

};

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputTriAlLadoUno");
    const input2 = document.getElementById("InputTriAlLadoDos");
    const input3 = document.getElementById("InputTriAlLadoTres");
    console.log(Number(input1.value), Number(input2.value), Number(input3.value));
    const altura = alturaTrianguloIsosceles(Number(input1.value), Number(input2.value), Number(input3.value));
    alert('altura ' + altura)
}

alturaTrianguloIsosceles(8, 8, 6);
alturaTrianguloIsosceles(8, 6, 8);
alturaTrianguloIsosceles(6, 8, 8);





/* function hablar(texto){
    var utterance = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(utterance);

} */
