# Inventix - Gestor de Inventario

Aplicación web interactiva para la gestión de productos e inventario de una tienda tecnológica. El sistema permite visualizar productos, consultar sus detalles, agregar nuevos productos, editar información, modificar el stock, realizar búsquedas, aplicar filtros y calcular métricas del inventario de manera dinámica.

La aplicación fue desarrollada con React y JavaScript moderno, utilizando `useState`, `useEffect`, `localStorage` y diferentes métodos de manipulación de arreglos.

## Páginas de la Aplicación

### Página de Inicio

Página principal de la aplicación que presenta la tienda tecnológica y permite acceder de manera rápida a las diferentes funcionalidades del sistema.

### Página de Inventario

Permite visualizar todos los productos registrados en el sistema. Incluye funcionalidades para:

- Consultar productos.
- Buscar productos.
- Filtrar por categorías.
- Ordenar productos.
- Editar productos.
- Modificar información y stock.
- Eliminar productos.
- Consultar el estado de disponibilidad.
- Visualizar métricas generales del inventario.

### Nuevo Producto

Página destinada al registro de nuevos productos. Cuenta con un formulario para ingresar la información correspondiente y realizar validaciones antes de agregar el producto al inventario.

### Detalle del Producto

Permite consultar la información completa de un producto seleccionado, mostrando sus características, precio, categoría, stock y estado de disponibilidad.

### Acerca de la Página

Se agregó una página informativa donde se presenta información general sobre la aplicación, su propósito y las principales funcionalidades desarrolladas.

### Página No Encontrado

Se incorporó una página de error para las rutas que no existen dentro de la aplicación. Permite informar al usuario que la página solicitada no fue encontrada y regresar fácilmente a la página principal.

## Funcionalidades Principales

- **Visualización Dinámica de Productos:** Renderizado de productos a partir de una estructura de datos basada en un arreglo de objetos.
- **Agregar Productos:** Registro de nuevos productos mediante un formulario.
- **Validación de Formularios:** Verificación de los datos ingresados antes de registrar o modificar productos.
- **Edición de Productos:** Permite modificar la información de un producto existente.
- **Eliminación de Productos:** Permite eliminar productos del inventario.
- **Modificación de Stock:** Actualización de las existencias disponibles de cada producto.
- **Búsqueda:** Permite encontrar productos mediante un campo de búsqueda.
- **Filtros:** Clasificación de productos según diferentes categorías.
- **Ordenamiento:** Organización de los productos según diferentes criterios.
- **Persistencia de Datos:** Almacenamiento de la información utilizando `localStorage`.
- **Cálculo Automático de Métricas:** Actualización dinámica de las estadísticas generales del inventario.
- **Estado de Disponibilidad:** Identificación automática de productos disponibles o agotados.

## Cálculo de Métricas

### Productos Disponibles

Conteo automatizado de los productos que cuentan con existencias disponibles.

### Valor Total del Inventario

Cálculo del valor acumulado de todos los productos mediante la fórmula:

`precio * stock`

El resultado se obtiene utilizando el método `.reduce()`.

## Conceptos de JavaScript Implementados

- `map()`
- `filter()`
- `reduce()`
- `find()`
- Desestructuración de objetos.
- Operador Spread (`...`).
- Template Literals.
- Manipulación dinámica del DOM.
- `useState()`.
- `useEffect()`.
- Componentes de React.
- Manejo de eventos.
- Renderizado condicional.
- Filtrado y búsqueda de información.

## Persistencia de Datos

Se implementó `localStorage` para conservar la información de los productos incluso después de cerrar o actualizar la página.

Para almacenar y recuperar los datos se utilizaron:

- `JSON.stringify()`
- `JSON.parse()`
- `localStorage.setItem()`
- `localStorage.getItem()`

El método `useEffect()` permite sincronizar los cambios realizados en el inventario con el almacenamiento local.

## Sistema de Edición

Se agregó la posibilidad de editar los datos de un producto existente.

Al seleccionar la opción **Editar**, se muestra un formulario emergente que permite modificar la información del producto seleccionado. Después de confirmar los cambios, la información se actualiza automáticamente en el inventario y en `localStorage`.

## Búsqueda, Filtros y Ordenamiento

La aplicación incorpora herramientas para facilitar la consulta del inventario:

- Búsqueda por nombre del producto.
- Filtrado por categoría.
- Ordenamiento de productos.
- Actualización dinámica de los resultados.

Estas funcionalidades permiten encontrar y organizar los productos de manera rápida.

## Diseño y CSS

Se actualizó completamente el diseño visual de la aplicación mediante CSS, mejorando la apariencia y distribución de los componentes.

Los cambios incluyen:

- Nuevo diseño de la página de inicio.
- Estilos actualizados para las tarjetas de productos.
- Diseño para la página de inventario.
- Estilos para formularios.
- Diseño del modal de edición.
- Estilos para botones y estados.
- Diseño de la página de detalle del producto.
- Diseño de la página "Acerca de".
- Diseño de la página "No Encontrado".
- Mejoras en espaciado, tipografía y distribución.
- Adaptación de los componentes para diferentes tamaños de pantalla.

## Taller 3

Durante el desarrollo del Taller 3 se implementaron las siguientes funcionalidades:

- Agregar productos.
- Validar formularios.
- Eliminar productos.
- Modificar stock.
- Calcular el inventario dinámicamente.
- Gestionar el estado mediante `useState`.
- Persistir información mediante `localStorage`.
- Utilizar `JSON.stringify()`.
- Utilizar `JSON.parse()`.
- Implementar `useEffect()`.
- Editar productos.
- Implementar filtros.
- Implementar búsqueda.
- Implementar ordenamiento.
- Crear página de inicio.
- Crear página de nuevo producto.
- Crear página de detalle de producto.
- Crear página de inventario.
- Crear página acerca de.
- Crear página de error "No Encontrado".
- Actualizar y mejorar los estilos CSS.

## Retos Realizados

- Implementación de persistencia de datos con `localStorage`.
- Manejo de información mediante JSON.
- Sincronización de datos utilizando `useEffect()`.
- Edición de productos existentes.
- Implementación de búsqueda y filtros.
- Ordenamiento dinámico de productos.
- Creación de diferentes páginas y rutas.
- Manejo de rutas no encontradas.
- Diseño y actualización completa de la interfaz mediante CSS.
- Integración de todas las funcionalidades en una aplicación React.

## Comandos de Ejecución

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Crear una versión para producción:

```bash
npm run build
```

Previsualizar la versión de producción:

```bash
npm run preview
```

## Tecnologías Utilizadas

- React
- JavaScript ES6+
- CSS3
- HTML5
- Vite
- LocalStorage
- JSON
- Lucide React
- Boostrap 5

## Estado Actual del Proyecto

La aplicación cuenta con un sistema completo para la gestión de un inventario tecnológico, incluyendo creación, consulta, edición y eliminación de productos, persistencia de información, búsqueda, filtros, ordenamiento, cálculo de métricas y navegación entre diferentes páginas.
