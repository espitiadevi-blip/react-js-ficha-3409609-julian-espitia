```jsx
import { productos as productosIniciales } from "./data/productos";
import { ProductoCard } from "./components/ProductoCard";
import "./App.css";
import { useState } from "react";
import FormularioProducto from "./components/FormularioProducto";

export default function App() {
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [productos, setProductos] = useState(productosIniciales);

  const productosRegistrados = productos.length;

  const productosAgotados = productos.filter(
    (producto) => producto.stock === 0
  ).length;

  const valorInventario = productos.reduce(
    (total, producto) =>
      total + (producto.precio || 0) * (producto.stock || 0),
    0
  );

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const eliminarProducto = (id) => {
    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    if (!confirmar) {
      return;
    }

    const nuevaLista = productos.filter(
      (producto) => producto.id !== id
    );

    setProductos(nuevaLista);
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, (producto.stock || 0) + cambio)
        };
      }

      return producto;
    });

    setProductos(nuevosProductos);
  };

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  const quitarTildes = (texto) => {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const productosFiltrados = productos.filter((producto) => {
    const nombreProducto = quitarTildes(producto.nombre);
    const textoBusqueda = quitarTildes(busqueda);

    const coincideNombre = nombreProducto.includes(textoBusqueda);

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  return (
    <main className="container">
      <header className="header">
        <h1>Tienda Tecnológica</h1>
      </header>

      <div className="toolbar">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) =>
            setBusqueda(evento.target.value)
          }
        />

        <select
          className="select-input"
          value={categoria}
          onChange={(evento) =>
            setCategoria(evento.target.value)
          }
        >
          <option value="Todas">Todas</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Pantallas">Pantallas</option>
          <option value="Muebles">Muebles</option>
          <option value="Decoración">Decoración</option>
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) =>
              setSoloDisponibles(evento.target.checked)
            }
          />

          Mostrar únicamente disponibles
        </label>

        <button
          className="btn-clean"
          onClick={limpiarFiltros}
        >
          Limpiar Filtros
        </button>
      </div>

      <section className="kpi-container">
        <div className="kpi-card">
          <span className="kpi-label">
            Productos registrados
          </span>

          <span className="kpi-value">
            {productosRegistrados}
          </span>
        </div>

        <div className="kpi-card">
          <span className="kpi-label">
            Productos agotados
          </span>

          <span className="kpi-value">
            {productosAgotados}
          </span>
        </div>

        <div className="kpi-card">
          <span className="kpi-label">
            Valor total del inventario
          </span>

          <span className="kpi-value">
            ${valorInventario.toLocaleString("es-CO")}
          </span>
        </div>
      </section>

      <section className="catalog-section">
        <h2>Todos los productos</h2>

        <div className="products-grid">
          {productosFiltrados.length === 0 ? (
            <p className="no-results">
              No se encontraron productos.
            </p>
          ) : (
            productosFiltrados.map((producto) => (
              <ProductoCard
                key={producto.id}
                producto={producto}
                onEliminar={eliminarProducto}
                onModificarStock={modificarStock}
              />
            ))
          )}
        </div>
      </section>

      <FormularioProducto onAgregar={agregarProducto} />
    </main>
  );
}
```
