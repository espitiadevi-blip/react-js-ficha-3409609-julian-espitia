import { Link } from "react-router-dom";
import {
  Package,
  Plus,
  RefreshCw,
  Layers,
  BarChart3,
  Boxes,
  ArrowUpRight,
  AlertTriangle,
  Clock,
  PlusCircle,
} from "lucide-react";

function Inicio() {
  return (
    <main className="container-xl flex-grow-1 py-5 my-md-4">
      {/* HERO SECTION */}
      <section
        className="text-center mx-auto mb-5"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="fw-bold text-white mb-4 display-5">
          Control de inventario simple, preciso y en tiempo real
        </h1>

        <p
          className="text-muted-custom mb-4 fs-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Administra tus existencias de periféricos, monitores y componentes con
          una interfaz clara, rápida y sin complejidades.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <Link
            to="/Inventario"
            className="btn btn-accent d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 text-decoration-none"
          >
            <Package className="icon-sm" /> Explorar Inventario
          </Link>
          <Link
            to="/NuevoProducto"
            className="btn btn-outline-custom d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 text-decoration-none"
          >
            <Plus className="icon-sm text-muted-custom" /> Añadir Producto
          </Link>
        </div>
      </section>

      {/* 3 COLUMNAS - CAPACIDADES */}
      <section className="mb-5 pt-4">
        <div className="text-center mb-5">
          <h2 className="text-accent text-uppercase tracking-wider fw-semibold fs-6 mb-1">
            Capacidades Clave
          </h2>
          <p className="text-white fw-bold fs-3 mb-0">
            Todo lo esencial en un solo lugar
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="custom-card text-center h-100">
              <div className="icon-circle mx-auto mb-4">
                <RefreshCw className="text-accent" />
              </div>
              <h3 className="text-white fs-5 fw-semibold mb-3">
                Control de Stock en Vivo
              </h3>
              <p className="text-muted-custom mb-0">
                Actualización inmediata de unidades disponibles y movimientos de
                hardware.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-card text-center h-100">
              <div className="icon-circle mx-auto mb-4">
                <Layers className="text-accent" />
              </div>
              <h3 className="text-white fs-5 fw-semibold mb-3">
                Categorización Rápida
              </h3>
              <p className="text-muted-custom mb-0">
                Organiza productos por familias como periféricos, pantallas y
                almacenamiento.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-card text-center h-100">
              <div className="icon-circle mx-auto mb-4">
                <BarChart3 className="text-accent" />
              </div>
              <h3 className="text-white fs-5 fw-semibold mb-3">
                Métricas y Reportes
              </h3>
              <p className="text-muted-custom mb-0">
                Visualiza alertas de stock bajo y rotación de artículos de
                manera eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESOS DIRECTOS */}
      <section className="mb-5 pt-4">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="text-white fs-5 fw-semibold mb-0">Accesos directos</h2>
          <span className="text-muted-custom small">Operaciones rápidas</span>
        </div>

        <div className="row g-3">
          <div className="col-6 col-lg-3">
            <Link
              to="/Inventario"
              className="custom-card card-link h-100 d-flex flex-column justify-content-between text-decoration-none"
            >
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="icon-square text-accent">
                  <Boxes className="icon-sm" />
                </div>
                <ArrowUpRight className="icon-sm link-arrow" />
              </div>
              <div>
                <h4 className="text-white fs-6 mb-1">Ver Catálogo</h4>
                <p className="text-muted-custom small mb-0">
                  Visualize todos los productos registrados.
                </p>
              </div>
            </Link>
          </div>

          <div className="col-6 col-lg-3">
            <Link
              to="/NuevoProducto"
              className="custom-card card-link h-100 d-flex flex-column justify-content-between text-decoration-none"
            >
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="icon-square text-accent">
                  <PlusCircle className="icon-sm" />
                </div>
                <ArrowUpRight className="icon-sm link-arrow" />
              </div>
              <div>
                <h4 className="text-white fs-6 mb-1">Registrar Ítem</h4>
                <p className="text-muted-custom small mb-0">
                  Registre nuevos productos de manera mas agíl.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="custom-card cta-banner my-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 text-center text-md-start">
          <div>
            <h2 className="text-white fw-bold fs-4 mb-2">
              ¿Listo para expandir tu catálogo técnico?
            </h2>
            <p className="text-muted-custom mb-0">
              Añade nuevos componentes y clasifícalos en segundos.
            </p>
          </div>
          <Link
            to="/NuevoProducto"
            className="btn btn-accent flex-shrink-0 d-inline-flex align-items-center gap-2 px-4 py-2 text-decoration-none"
          >
            <PlusCircle className="icon-sm" /> Registrar Nuevo Producto
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
