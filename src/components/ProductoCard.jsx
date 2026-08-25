const formatearPrecio = precio => {
return precio.toLocaleString("es-CO");
};

export const ProductoCard = ({ producto }) => {
  const {nombre,categoria,precio,stock} = producto;
  const esDisponible = stock > 0;
  const mostrarProducto = () => {alert(`Seleccionaste ${nombre}`);
};

  return (
    <article className="product-card">
      <h2 className="product-title">{nombre}</h2>
      <div className="product-info">
        <p>Categoría: {categoria}</p>
        <p>Precio: {precio ? `$${precio}` : '-'}</p>
        <p>Stock: {stock !== null ? stock : '-'}</p>
      </div>
      <div className={`product-status ${esDisponible ? 'disponible' : 'agotado'}`}>
        {esDisponible ? 'Disponible' : 'Agotado'}
      </div>
      <button onClick={mostrarProducto} disabled={stock === 0}>{stock > 0 ? "Ver producto" : "Agotado"}</button>
    </article>
  );
};