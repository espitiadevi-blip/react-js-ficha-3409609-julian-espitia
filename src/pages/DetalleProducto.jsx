import { useParams, NavLink } from "react-router-dom";

function DetalleProducto() {
  const { id } = useParams();

  const productosGuardados = localStorage.getItem("inventario");

  let productos = [];

  if (productosGuardados) {
    try {
      productos = JSON.parse(productosGuardados);
    } catch (error) {
      productos = [];
    }
  }

  const producto = productos.find(
    (item) => String(item.id) === String(id)
  );

  if (!producto) {
    return (
      <section className="page-section">
        <h1>Producto no encontrado</h1>
        <p>El producto que buscas no existe.</p>

        <NavLink to="/Inventario">
          Volver al inventario
        </NavLink>
      </section>
    );
  }

  return (
    <section className="page-section">
      <h1>Detalle del Producto</h1>

      <div className="product-card">
        <h2>{producto.nombre}</h2>

        <p>
          <strong>Categoría:</strong> {producto.categoria}
        </p>

        <p>
          <strong>Precio:</strong>{" "}
          {producto.precio !== null
            ? `$${Number(producto.precio).toLocaleString("es-CO")}`
            : "No disponible"}
        </p>

        <p>
          <strong>Stock:</strong>{" "}
          {producto.stock !== null ? producto.stock : "No disponible"}
        </p>

        <NavLink to="/Inventario" className="btn-action">
          Volver al inventario
        </NavLink>
      </div>
    </section>
  );
}

export default DetalleProducto;