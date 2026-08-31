import { productos as productosIniciales } from './data/productos';
import { ProductoCard } from './components/ProductoCard';
import './App.css';
import { useState } from "react";
import FormularioProducto from "./components/FormularioProducto";

export default function App() {
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [productos, setProductos] = useState(productosIniciales);

  const productosDisponibles = productos.filter(p => p.stock > 0).length;
  const hayAgotados = productos.some(p => (p.stock || 0) === 0);
  const valorInventario = productos.reduce(
    (acc, p) => acc + ((p.precio || 0) * (p.stock || 0)),
    0
  );

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  return (
    <main className="container">
      <header className="header">
        <h1>Tienda Tecnológica</h1>
      </header>

      {/* Barra superior de herramientas y filtros */}
      <div className="toolbar">
        <input 
          type="text" 
          className="search-input"
          placeholder="Buscar producto..." 
          value={busqueda} 
          onChange={(evento) => setBusqueda(evento.target.value)} 
        />
        <select className="select-input" value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Pantallas">Pantallas</option>
        </select>
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={soloDisponibles} 
            onChange={(evento) => setSoloDisponibles(evento.target.checked)}
          />
          Mostrar únicamente disponibles
        </label>
        <button className="btn-clean" onClick={limpiarFiltros}>Limpiar Filtros</button>
      </div>

      {/* Tarjetas KPI de información general */}
      <section className="kpi-container">
        <div className="kpi-card">
          <span className="kpi-label">Productos disponibles</span>
          <span className="kpi-value">{productosDisponibles}</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">Valor del inventario</span>
          <span className="kpi-value">${valorInventario.toLocaleString("es-CO")}</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">¿Hay productos agotados?</span>
          <span className={`kpi-value ${hayAgotados ? 'text-red' : 'text-green'}`}>
            {hayAgotados ? 'Sí' : 'No'}
          </span>
        </div>
      </section>

      {/* Lista general de productos en Grid */}
      <section className="catalog-section">
        <h2>Todos los productos</h2>
        <div className="products-grid">
          {productosFiltrados.length === 0 ? (
            <p className="no-results">No se encontraron productos.</p>
          ) : (
            productosFiltrados.map(producto => (
              <ProductoCard key={producto.id} producto={producto} />
            ))
          )}
        </div>
      </section>
      <FormularioProducto />
    </main>
  );
}