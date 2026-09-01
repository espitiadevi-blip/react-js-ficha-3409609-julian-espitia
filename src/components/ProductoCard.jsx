
export const ProductoCard = ({
  producto,
  onEliminar,
  onModificarStock,
  onEditar,
}) => {

  const {
    nombre,
    categoria,
    precio,
    stock,
  } = producto;
  const esDisponible = stock > 0;

  const precioFormateado = precio
    ? Number(precio).toLocaleString("es-CO")
    : "-";

  return (
    <article className="product-card">

      <div className="card-header">

        <h3 className="product-title">
          {nombre}
        </h3>

        <span
          className={`badge ${
            esDisponible
              ? "disponible"
              : "agotado"
          }`}
        >
          {esDisponible
            ? "DISPONIBLE"
            : "AGOTADO"}
        </span>

      </div>


      <div className="product-info">

        <p>
          Categoría:
          <span>{categoria}</span>
        </p>


        <div className="stock-row">

          <span>
            Stock: {stock}
          </span>

          <div>

            <button
              type="button"
              onClick={() =>
                onModificarStock(
                  producto.id,
                  -1
                )
              }
            >
              -
            </button>

            <button
              type="button"
              onClick={() =>
                onModificarStock(
                  producto.id,
                  1
                )
              }
            >
              +
            </button>

          </div>

        </div>

      </div>

      <div className="card-actions">

        <button
          type="button"
          className="btn-edit"
          onClick={() =>
            onEditar(producto)
          }
        >
          Editar
        </button>

        <button
          type="button"
          className="btn-delete"
          onClick={() =>
            onEliminar(producto.id)
          }
        >
          Eliminar
        </button>

      </div>


      <div className="card-footer">

        <span className="product-price">
          ${precioFormateado}
        </span>

        <button
          type="button"
          className="btn-action"
          disabled={!esDisponible}
        >
          {esDisponible
            ? "Ver producto"
            : "Agotado"}
        </button>

      </div>

    </article>
  );
};
