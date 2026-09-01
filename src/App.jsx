
import { useEffect, useState } from "react";
import { productos as productosIniciales } from "./data/productos";
import { ProductoCard } from "./components/ProductoCard";
import FormularioProducto from "./components/FormularioProducto";
import "./App.css";

function App() {

  const obtenerProductosGuardados = () => {
    const productosGuardados =
      localStorage.getItem("inventario");

    if (productosGuardados) {
      return JSON.parse(productosGuardados);
    }

    return productosIniciales;
  };

  const [productos, setProductos] = useState(
    obtenerProductosGuardados
  );

  useEffect(() => {
    localStorage.setItem(
      "inventario",
      JSON.stringify(productos)
    );
  }, [productos]);

  const agregarProducto = (nuevoProducto) => {
    setProductos((productosActuales) => [
      ...productosActuales,
      nuevoProducto,
    ]);
  };

  const eliminarProducto = (id) => {
    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    if (!confirmar) {
      return;
    }

    setProductos((productosActuales) =>
      productosActuales.filter(
        (producto) => producto.id !== id
      )
    );
  };

  const modificarStock = (id, cambio) => {
    setProductos((productosActuales) =>
      productosActuales.map((producto) => {
        if (producto.id === id) {
          return {
            ...producto,
            stock: Math.max(
              0,
              producto.stock + cambio
            ),
          };
        }

        return producto;
      })
    );
  };

  return (
    <main className="container">

      <header className="header">
        <h1>Tienda Tecnológica</h1>
        <p>Gestor de inventario</p>
      </header>

      <section className="catalog-section">

        <div className="catalog-heading">
          <h2>Productos</h2>

          <span>
            {productos.length} producto(s)
          </span>
        </div>

        <div className="products-grid">

          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onEliminar={eliminarProducto}
              onModificarStock={modificarStock}
            />
          ))}

        </div>

      </section>

      <FormularioProducto
        onAgregar={agregarProducto}
      />

    </main>
  );
}

export default App;
