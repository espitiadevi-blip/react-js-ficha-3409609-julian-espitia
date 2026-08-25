const formatearPrecio = (precio) => {
  if (precio === null || precio === undefined) return '-';
  return precio.toLocaleString("es-CO");
};

export const ProductoCard = ({ producto }) => {
  const { nombre, categoria, precio, stock } = producto;
  const esDisponible = stock > 0;
  
  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  return (
    <article className="product-card">
      <div className="card-header">
        <h3 className="product-title">{nombre}</h3>
        <span className={`badge ${esDisponible ? 'disponible' : 'agotado'}`}>
          {esDisponible ? 'DISPONIBLE' : 'AGOTADO'}
        </span>
      </div>

      <div className="product-info">
        <p>Categoría: <span>{categoria}</span></p>
        <p>Stock: <span>{stock !== null ? stock : '-'}</span></p>
      </div>

      <div className="card-footer">
        <span className="product-price">
          {precio ? `$${formatearPrecio(precio)}` : '-'}
        </span>
        <button 
          className="btn-action" 
          onClick={mostrarProducto} 
          disabled={!esDisponible}
        >
          {esDisponible ? "Ver producto" : "Agotado"}
        </button>
      </div>
    </article>
  );
};