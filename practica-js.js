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

//Reto 6#:
const disponibles = productos.filter(producto => producto.stock > 0);
const producto3 = productos.find(producto => producto.id === 3);
console.log(disponibles)
console.log(producto3)

// Filtrar productos con precio mayor a $100.000.
const Productos_Precio = productos.filter(producto => producto.precio > 10000)
console.log(Productos_Precio)
// Filtrar productos con precio entre $50.000 y $200.000.
const Productos_Precio_Rango = productos.filter(producto => producto.precio >= 50000 && producto.precio <=200000)
console.log(Productos_Precio_Rango)
// Filtrar únicamente una categoría escogida por ti.
const categoria_periferico = productos.filter(producto => producto.categoria == "Perifericos")
console.log(categoria_periferico)
// Buscar el producto con id 5.
const producto_id_cinco = productos.find(producto => producto.id === 5)
console.log(producto_id_cinco)
// Crear una función buscarProducto(id) que use find() y retorne el producto.
const buscarProducto = (id_buscado) => {
    return productos.find(producto => producto.id === id_buscado);
}
console.log(buscarProducto(1))

//Reto 7#
const hayAgotados = productos.some(producto => producto.stock === 0);
const preciosValidos = productos.every(producto => producto.precio > 0);
const valorInventario = productos.reduce(
(total, producto) => total + producto.precio * producto.stock,
0
);
//[ ] ¿Existe algún producto agotado?
const agotados = productos.some(producto => producto.stock === 0)
console.log(agotados)

//[ ] ¿Existe algún producto con precio mayor a $1.000.000?
const productos_precios = productos.some(producto  => producto.precio > 100000)
console.log(productos_precios)

//[ ] ¿Todos los productos tienen precio mayor que cero?
const producto_precio_mayorcero = productos.every(producto => producto.precio > 0)
console.log(producto_precio_mayorcero)

//[ ] ¿Todos los productos tienen stock mayor o igual que cero?
const producto_precio_stockcero = productos.every(producto => producto.stock >= 0)
console.log(producto_precio_stockcero)

//[ ] Calcular el valor total del inventario.
const valor_total_inventario = productos.reduce(
    (total,producto) => total + producto.precio,0)
console.log(valor_total_inventario)
console.log("bien")

