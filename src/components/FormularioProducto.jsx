
import { useEffect, useState } from "react";

// ============================================
// VALORES INICIALES
// ============================================

const formularioInicial = {
  nombre: "",
  categoria: "",
  precio: "",
  stock: "",
};

// ============================================
// COMPONENTE FORMULARIO
// ============================================

function FormularioProducto({
  onAgregar,
  productoEditando,
  onActualizar,
  onCancelar,
}) {

  // ==========================================
  // ESTADO DEL FORMULARIO
  // ==========================================

  const [formulario, setFormulario] =
    useState(formularioInicial);

  // ==========================================
  // MISIÓN 5:
  // CARGAR PRODUCTO PARA EDITAR
  // ==========================================

  useEffect(() => {

    if (productoEditando) {

      setFormulario({
        nombre:
          productoEditando.nombre || "",

        categoria:
          productoEditando.categoria || "",

        precio:
          productoEditando.precio ?? "",

        stock:
          productoEditando.stock ?? "",
      });

    } else {

      setFormulario(
        formularioInicial
      );

    }

  }, [productoEditando]);

  // ==========================================
  // CAMBIAR CAMPOS
  // ==========================================

  const manejarCambio = (evento) => {

    const {
      name,
      value,
    } = evento.target;

    setFormulario(
      (formularioActual) => ({
        ...formularioActual,

        [name]: value,
      })
    );
  };

  // ==========================================
  // ENVIAR FORMULARIO
  // ==========================================

  const manejarEnvio = (evento) => {

    evento.preventDefault();

    // ========================================
    // VALIDACIÓN
    // ========================================

    if (
      formulario.nombre.trim() === "" ||
      formulario.categoria.trim() === "" ||
      formulario.precio === "" ||
      formulario.stock === ""
    ) {

      alert(
        "Por favor completa todos los campos."
      );

      return;
    }

    if (
      Number(formulario.precio) <= 0
    ) {

      alert(
        "El precio debe ser mayor que 0."
      );

      return;
    }

    if (
      Number(formulario.stock) < 0
    ) {

      alert(
        "El stock no puede ser negativo."
      );

      return;
    }

    // ========================================
    // EDITAR PRODUCTO
    // ========================================

    if (productoEditando) {

      const productoActualizado = {

        ...productoEditando,

        nombre:
          formulario.nombre.trim(),

        categoria:
          formulario.categoria.trim(),

        precio:
          Number(formulario.precio),

        stock:
          Number(formulario.stock),
      };

      onActualizar(
        productoActualizado
      );

    } else {

      // ======================================
      // AGREGAR PRODUCTO
      // ======================================

      const nuevoProducto = {

        id: Date.now(),

        nombre:
          formulario.nombre.trim(),

        categoria:
          formulario.categoria.trim(),

        precio:
          Number(formulario.precio),

        stock:
          Number(formulario.stock),
      };

      onAgregar(
        nuevoProducto
      );
    }

    // Limpiar formulario
    setFormulario(
      formularioInicial
    );
  };

  // ==========================================
  // CANCELAR EDICIÓN
  // ==========================================

  const manejarCancelar = () => {

    setFormulario(
      formularioInicial
    );

    if (onCancelar) {
      onCancelar();
    }
  };

  // ==========================================
  // INTERFAZ
  // ==========================================

  return (
    <section className="form-section">

      <form
        onSubmit={manejarEnvio}
        className="product-form"
      >

        {/* TÍTULO */}

        <h2>
          {productoEditando
            ? "Editar producto"
            : "Agregar producto"}
        </h2>

        {/* NOMBRE */}

        <div className="form-group">

          <label htmlFor="nombre">
            Nombre
          </label>

          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            value={
              formulario.nombre
            }
            onChange={
              manejarCambio
            }
          />

        </div>

        {/* CATEGORÍA */}

        <div className="form-group">

          <label htmlFor="categoria">
            Categoría
          </label>

          <input
            id="categoria"
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={
              formulario.categoria
            }
            onChange={
              manejarCambio
            }
          />

        </div>

        {/* PRECIO */}

        <div className="form-group">

          <label htmlFor="precio">
            Precio
          </label>

          <input
            id="precio"
            type="number"
            name="precio"
            placeholder="Precio"
            min="1"
            value={
              formulario.precio
            }
            onChange={
              manejarCambio
            }
          />

        </div>

        {/* STOCK */}

        <div className="form-group">

          <label htmlFor="stock">
            Stock
          </label>

          <input
            id="stock"
            type="number"
            name="stock"
            placeholder="Stock"
            min="0"
            value={
              formulario.stock
            }
            onChange={
              manejarCambio
            }
          />

        </div>

        {/* BOTONES */}

        <div className="form-actions">

          <button
            type="submit"
            className="btn-submit"
          >
            {productoEditando
              ? "Guardar cambios"
              : "Agregar producto"}
          </button>

          {productoEditando && (

            <button
              type="button"
              className="btn-cancel"
              onClick={
                manejarCancelar
              }
            >
              Cancelar edición
            </button>

          )}

        </div>

      </form>

    </section>
  );
}

export default FormularioProducto;
