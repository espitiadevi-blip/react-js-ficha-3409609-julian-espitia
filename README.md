# Tienda Tecnológica - Panel de Inventario

Aplicación web interactiva que despliega un catálogo de productos en tiempo real y calcula métricas globales del inventario utilizando métodos modernos de JavaScript (ES6+).

## Funcionalidades Principales

* **Visualización Dinámica de Productos:** Renderizado de tarjetas de catálogo a partir de una estructura de datos basada en un arreglo de objetos.
* **Cálculo Automático de Métricas:**
  * **Productos Disponibles:** Conteo automatizado de ítems con stock activo.
  * **Valor Total del Inventario:** Cálculo financiero acumulado (`precio * stock`) mediante el método `.reduce()`.
* **Control de Stock y Estado:** Validación de disponibilidad utilizando operadores ternarios para indicar el estado ("Disponible" o "Agotado") según el número de existencias.
* **Clasificación por Categorías:** Organización por tipos de producto (Periféricos, Pantallas, Muebles, Decoración y Herramientas).

## Conceptos de JavaScript Implementados

* Métodos iterativos de arreglos (`map`, `filter`, `reduce`, `find`).
* Desestructuración de objetos y operador *Spread* (`...`).
* Plantillas de texto (*Template Literals*).
* Manipulación dinámica del DOM.