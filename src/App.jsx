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
      <section className='container-product'>
        <section className='all-products'>
          <h2>Todos los productos</h2>
          <section className="products-container">
            {productos.map(producto => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </section>
        </section>

        <section className='disponible-products'>
          <h2>Porductos Disponibles</h2>
          <section className="products-container">
            {productos.filter(producto => producto.stock > 0).map(producto => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </section>

        </section>

      </section>

    </main>
  );
}