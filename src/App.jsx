import { productos } from './data/productos';
import { ProductoCard } from './components/ProductoCard';
import './App.css';
import { useState } from "react";

export default function App() {
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
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
  }
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()
    );
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;

    return (
      coincideNombre &&
      coincideCategoria &&
      coincideStock
    );
  });
  return (
    <main className="container">
      <input type="text" placeholder="Buscar producto..." value={busqueda} onChange={(evento) => { setBusqueda(evento.target.value); }} />
      <select value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
        <option value="Todas">Todas</option>

        <option value="Periféricos">Periféricos</option>

        <option value="Pantallas">Pantallas</option>
      </select>
      <label>
        <input type="checkbox" checked={soloDisponibles} onChange={(evento) => setSoloDisponibles(
          evento.target.checked
        )
        }
        />
        Mostrar únicamente disponibles
      </label>
      <button onClick={limpiarFiltros}>Limpiar Filtros</button>


      <header className="header">
        <h1>Tienda tecnológica</h1>
        <p className="meta-info">Productos disponibles: {productosDisponibles}</p>
        <p className="meta-info">Valor del inventario: ${valorInventario.toLocaleString()}</p>
        <p className="meta-info">
          ¿Hay productos agotados? : {hayAgotados ? 'Sí' : 'No'}
        </p>
      </header>

      <section className='container-product'>
        <section className='all-products'>
          <h2>Todos los productos</h2>
          <p>Productos encontrados:{productosFiltrados.length}</p>
          <section className="products-container">
            {productosFiltrados.length === 0 ? (
              <p>No se encontraron productos.</p>
            ) : (
              productosFiltrados.map(producto => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                />
              ))
            )}
          </section>
        </section>

        <section className='disponible-products'>
          <h2>Productos Disponibles</h2>
          <section className="products-container">
            {productos.filter(producto => producto.stock > 0).map(producto => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </section>
        </section>

        <section className='info-productos'>
          <h3>Información:</h3>
          <section className="products-container">
            {productos.filter(producto => !producto.stock).map(producto => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}