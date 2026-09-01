
import { useEffect, useState } from "react";

const formularioInicial = {
  nombre: "",
  categoria: "",
  precio: "",
  stock: "",
};

function FormularioProducto({
  onAgregar,
  productoEditando,
  onActualizar,
  onCancelar,
}) {

  const [formulario, setFormulario] =
    useState(formularioInicial);

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


  const manejarEnvio = (evento) => {

    evento.preventDefault();


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

    setFormulario(
      formularioInicial
    );
  };


  const manejarCancelar = () => {

    setFormulario(
      formularioInicial
    );

    if (onCancelar) {
      onCancelar();
    }
  };

  return (
    <section className="form-section">

      <form
        onSubmit={manejarEnvio}
        className="product-form"
      >

        <h2>
          {productoEditando
            ? "Editar producto"
            : "Agregar producto"}
        </h2>


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
