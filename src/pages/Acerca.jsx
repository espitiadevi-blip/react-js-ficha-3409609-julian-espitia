function Acerca() {
  return (
    <section className="page-section about-page">
      <div className="about-header">
        <span className="about-icon">💻</span>
        <div>
          <h1>Acerca de Tienda Tecnológica</h1>
          <p className="about-subtitle">
            Una solución sencilla para administrar tu inventario.
          </p>
        </div>
      </div>
      <div className="about-content">
        <div className="about-card">
          <span className="card-icon">📦</span>
          <h2>Gestión de productos</h2>
          <p>
            Nuestra aplicación permite administrar los productos de una
            tienda tecnológica de forma rápida y organizada.
          </p>
        </div>

        <div lassName="about-card">
          <span className="card-icon">🔎</span>
          <h2>Búsqueda y filtros</h2>
          <p>
            Puedes buscar productos, filtrar por categoría y consultar
            fácilmente cuáles están disponibles o agotados.
          </p>
        </div>
        <div className="about-card">
          <span className="card-icon">📊</span>
          <h2>Control de inventario</h2>
          <p>
            Permite modificar el stock, actualizar información y mantener
            los datos del inventario organizados.
          </p>
        </div>
      </div>
      <div className="about-info">
        <h2>¿Qué puedes hacer?</h2>
        <div className="features-list">
          <div>✓ Agregar nuevos productos</div>
          <div>✓ Editar productos existentes</div>
          <div>✓ Eliminar productos</div>
          <div>✓ Modificar el stock</div>
          <div>✓ Buscar productos</div>
          <div>✓ Filtrar y ordenar el inventario</div>
        </div>
      </div>
      <div className="about-footer">
        <h2>Tienda Tecnológica</h2>
        <p>
          Proyecto desarrollado para la gestión y organización de
          productos tecnológicos.
        </p>
        <span>🚀 Gestión fácil · 📦 Inventario organizado · 💻 Tecnología</span>
      </div>
    </section>
  );
}

export default Acerca;
