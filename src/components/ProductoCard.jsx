const formatearPrecio = (precio) => {
  if (precio === null || precio === undefined) {
    return "-";
  }

  return precio.toLocaleString("es-CO");
};

export const ProductoCard = ({ producto, onEliminar, onModificarStock }) => {
  const { nombre, categoria, precio, stock } = producto;

  const esDisponible = stock > 0;

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  return (
    <article className="product-card">
      <div className="card-header">
        <h3 className="product-title">{nombre}</h3>

        <span className={`badge ${esDisponible ? "disponible" : "agotado"}`}>
          {esDisponible ? "DISPONIBLE" : "AGOTADO"}
        </span>
      </div>

      <div className="product-info">
        <p>
          Categoría:
          <span>{categoria}</span>
        </p>

        <div>
          <span>Stock: {stock !== null ? stock : "-"}</span>

          <div>
            <button onClick={() => onModificarStock(producto.id, -1)}>-</button>

            <button onClick={() => onModificarStock(producto.id, 1)}>+</button>
          </div>
        </div>
      </div>

      <button onClick={() => onEliminar(producto.id)}>Eliminar</button>

      <div className="card-footer">
        <span className="product-price">
          {precio ? `$${formatearPrecio(precio)}` : "-"}
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
