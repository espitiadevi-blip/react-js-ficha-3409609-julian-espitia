import { NavLink } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="page-section not-found-page">
      <div className="error-number">404</div>

      <div className="error-icon">🔍</div>

      <h1>¡Ups! Página no encontrada</h1>

      <p className="error-description">
        Parece que la página que estás buscando no existe,
        fue movida o la dirección que ingresaste no es correcta.
      </p>

      <div className="error-box">
        <span>💡</span>

        <p>
          No te preocupes, puedes regresar al inicio y continuar
          explorando nuestra tienda tecnológica.
        </p>
      </div>

      <div className="error-actions">
        <NavLink
          className="page-link primary-link"
          to="/"
        >
          🏠 Volver a Inicio
        </NavLink>

        <NavLink
          className="page-link secondary-link"
          to="/Inventario"
        >
          📦 Ver Inventario
        </NavLink>
      </div>

      <div className="error-footer">
        <p>Código de error: 404</p>
        <span>Tienda Tecnológica</span>
      </div>
    </section>
  );
}

export default NoEncontrado;