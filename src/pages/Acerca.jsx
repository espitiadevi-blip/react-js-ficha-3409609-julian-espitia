import {
  Monitor,
  Package,
  Search,
  ChartNoAxesColumn,
  Check,
} from "lucide-react";

function Acerca() {
  return (
    <section className="about-page">
      <div className="about-container">
        <header className="about-header">
          <div className="about-icon">
            <Monitor size={32} />
          </div>

          <div>
            <span className="about-label">INFORMACIÓN</span>
            <h1>Inventix</h1>
            <p>
              Una solución sencilla, moderna y organizada para administrar tu
              inventario.
            </p>
          </div>
        </header>

        <div className="about-grid">
          <article className="about-card">
            <div className="about-card-icon">
              <Package size={26} />
            </div>

            <div>
              <h2>Gestión de productos</h2>
              <p>
                Administra los productos de tu tienda de forma rápida y
                organizada. Puedes agregar, editar y eliminar productos cuando
                lo necesites.
              </p>
            </div>
          </article>

          <article className="about-card">
            <div className="about-card-icon">
              <Search size={26} />
            </div>

            <div>
              <h2>Búsqueda y filtros</h2>
              <p>
                Encuentra fácilmente cualquier producto mediante la búsqueda,
                categorías, disponibilidad y opciones de ordenamiento.
              </p>
            </div>
          </article>

          <article className="about-card">
            <div className="about-card-icon">
              <ChartNoAxesColumn size={26} />
            </div>

            <div>
              <h2>Control de inventario</h2>
              <p>
                Mantén actualizado el stock de tus productos y consulta
                rápidamente cuáles están disponibles o agotados.
              </p>
            </div>
          </article>
        </div>

        <section className="about-info">
          <div className="about-info-header">
            <span className="about-info-icon">
              <Check size={22} />
            </span>

            <div>
              <h2>¿Qué puedes hacer?</h2>
              <p>
                Todas las herramientas principales para administrar tu
                inventario.
              </p>
            </div>
          </div>

          <div className="features-list">
            <div>
              <span>
                <Check size={17} />
              </span>
              Agregar nuevos productos
            </div>

            <div>
              <span>
                <Check size={17} />
              </span>
              Editar productos existentes
            </div>

            <div>
              <span>
                <Check size={17} />
              </span>
              Eliminar productos
            </div>

            <div>
              <span>
                <Check size={17} />
              </span>
              Modificar el stock
            </div>

            <div>
              <span>
                <Check size={17} />
              </span>
              Buscar productos
            </div>

            <div>
              <span>
                <Check size={17} />
              </span>
              Filtrar y ordenar el inventario
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <h2>Inventix</h2>

          <p>
            Proyecto desarrollado para facilitar la gestión y organización de
            productos tecnológicos.
          </p>

          <div className="about-footer-line">
            <span>Gestión fácil</span>
            <span>•</span>
            <span>Inventario organizado</span>
            <span>•</span>
            <span>Tecnología</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Acerca;
