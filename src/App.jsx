import { productos } from './data/productos';
import { ProductoCard } from './components/ProductoCard';
import './App.css';

export default function App() {
  const productosDisponibles = productos.filter(p => p.stock > 0).length;
  const valorInventario = productos.reduce(
    (acc, p) => acc + ((p.precio || 0) * (p.stock || 0)),
    0
  );

  return (
    <main className="container">
      <header className="header">
        <h1>Tienda tecnológica</h1>
        <p className="meta-info">Productos disponibles: {productosDisponibles}</p>
        <p className="meta-info">Valor del inventario: ${valorInventario}</p>
      </header>

      <section className="products-container">
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}