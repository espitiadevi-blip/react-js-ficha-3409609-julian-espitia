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

//Reto 2#:
function aplicarIva(precio) {
return precio * 1.19;
}
const AplicarIva2 = precio => precio * 1.19;
console.log(aplicarIva(10))
console.log(AplicarIva2(10))

// Funcion Cuadrado de un Numero
const Cuadrado = numero => numero*numero;
console.log(Cuadrado(2))

//Funcion es mayor de edad
const MayordeEdad = edad => {
    if (edad >= 18){
        return ("Es mayor de Edad");
    }else{
        return ("No es mayor de Edad")
    }
}
console.log(MayordeEdad(19))

//Funcion de Nombre Complet
const nombreCompleto = (nombre,apellido) =>{
    return nombre + " " + apellido;
}
console.log(nombreCompleto("Julian","Espitia"))

//Reto 3#:
const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Mesa', precio: 340000, categoria: 'Muebles', stock: 2 },
{ id: 5, nombre: 'Silla', precio: 32000, categoria: 'Muebles', stock: 1 },
{ id: 6, nombre: 'Sofa', precio: 123000, categoria: 'Muebles', stock: 4 },
{ id: 7, nombre: 'Audifonos', precio: 14000, categoria: 'Perifericos', stock: 0 },
{ id: 8, nombre: 'Lampara', precio: 70000, categoria: 'Decoracion', stock: 7 },
{ id: 9, nombre: 'Cuadro', precio: 200000, categoria: 'Decoracion', stock: 8 },
{ id: 10, nombre: 'Destornillador', precio: 20000, categoria: 'Herramientas', stock: 9 }
];

//Reto 4#:
productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre} - ${producto.precio} - stock: ${producto.stock}`);
});

//Reto 5#:
const nombres = productos.map(producto => producto.nombre);
console.log(nombres)
const precioconIva = productos.map(producto => producto.precio * 1.19);
console.log(precioconIva);
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log(resumenProductos);
