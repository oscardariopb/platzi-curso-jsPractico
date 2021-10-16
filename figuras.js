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
