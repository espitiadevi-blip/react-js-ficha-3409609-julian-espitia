import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/Inventario">Inventario</NavLink>
      <NavLink to="/NuevoProducto">Nuevo Producto</NavLink>
      <NavLink to="/DetalleProducto">Detalle Producto</NavLink>
      <NavLink to="/Acerca">Acerca</NavLink>
      <NavLink to="/NoEncontrado">No Encontrado</NavLink>
    </nav>
  );
}
export default NavBar;
