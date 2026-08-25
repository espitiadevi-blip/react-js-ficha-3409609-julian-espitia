export const ProductoCard = ({ producto }) => {
  const esDisponible = producto.stock > 0;

  return (
    <article className="product-card">
      <h2 className="product-title">{producto.nombre}</h2>
      <div className="product-info">
        <p>Categoría: {producto.categoria}</p>
        <p>Precio: {producto.precio ? `$${producto.precio}` : '-'}</p>
        <p>Stock: {producto.stock !== null ? producto.stock : '-'}</p>
      </div>
      <div className={`product-status ${esDisponible ? 'disponible' : 'agotado'}`}>
        {esDisponible ? 'Disponible' : 'Agotado'}
      </div>
    </article>
  );
};