import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="acerca" className="footer border-top-custom mt-auto py-4">
      <div className="container-xl d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="text-white small fw-medium">
          Tienda Tecnológica <span className="text-muted-custom mx-1">•</span>{" "}
          Gestor de Inventario
        </div>

        <div className="d-flex gap-4 small">
          <Link
            to="/"
            className="text-muted-custom text-decoration-none footer-link"
          >
            Inicio
          </Link>
          <Link
            to="/Inventario"
            className="text-muted-custom text-decoration-none footer-link"
          >
            Inventario
          </Link>
          <Link
            to="/NuevoProducto"
            className="text-muted-custom text-decoration-none footer-link"
          >
            Nuevo Producto
          </Link>
        </div>

        <div className="text-muted-custom small">
          © 2026 Tienda Tecnológica. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
