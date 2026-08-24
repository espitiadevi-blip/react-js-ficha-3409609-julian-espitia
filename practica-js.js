// Linea de Codigo para verificar que node funciona
// console.log("Javascript listo para ejecutar")

//Reto 1#:
function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

//Funcion de Suma
function suma(a,b){
    a += b;
    return a;
}
console.log(suma(4,5))

//Funcion de Resta
function resta(a,b){
    a -= b;
    return a;
}
console.log(resta(4,5))

//Funcion de multiplicacion
function multiplicacion(a,b){
    a *= b;
    return a;
}
console.log(multiplicacion(4,5))

//Funcion de Division
function Division(a,b){
    a /= b;
    return a;
}
console.log(Division(4,5))

//Funcion de Promedio
function Promedio(a,b,c){
    a = (a+=(b += c))/3
    return a;
}
console.log(Promedio(4,5,0))

//La diferencia entre console.log y return, es que console.log muestra en la terminal lo que se haya puesto
//entre sus parentesis y return es devuelve un resultado de una funcion, pero no se muestra en Terminal.
