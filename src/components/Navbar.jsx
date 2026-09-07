import { NavLink } from "react-router-dom";
import { Cpu, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top custom-navbar border-bottom-custom">
      <div className="container-xl">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
          to="/"
        >
          <div className="logo-box d-flex align-items-center justify-content-center">
            <Cpu className="icon-sm text-accent" />
          </div>

          <span className="text-white fw-semibold mb-0">Inventix</span>
        </NavLink>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <Menu className="text-muted-custom" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-md-4 mt-3 mt-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-muted-custom custom-nav-link"
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-muted-custom custom-nav-link"
                to="/Inventario"
              >
                Inventario
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-muted-custom custom-nav-link"
                to="/NuevoProducto"
              >
                Nuevo Producto
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-muted-custom custom-nav-link"
                to="/Acerca"
              >
                Acerca de
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
