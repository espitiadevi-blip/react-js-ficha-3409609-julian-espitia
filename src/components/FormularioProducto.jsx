import { useEffect, useState } from "react";
import { Package, Tag, DollarSign, Database, Plus } from "lucide-react";

const obtenerFormularioInicial = () => ({
  nombre: "",
  categoria: "",
  precio: "",
  stock: "",
});

function FormularioProducto({
  onAgregar,
  productoEditando,
  onActualizar,
  onCancelar,
}) {
  const [formulario, setFormulario] = useState(obtenerFormularioInicial());

  useEffect(() => {
    if (productoEditando) {
      setFormulario({
        nombre: productoEditando.nombre ?? "",
        categoria: productoEditando.categoria ?? "",
        precio: productoEditando.precio ?? "",
        stock: productoEditando.stock ?? "",
      });
    } else {
      setFormulario(obtenerFormularioInicial());
    }
  }, [productoEditando]);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((formularioActual) => ({
      ...formularioActual,
      [name]: value,
    }));
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nombre = formulario.nombre.trim();
    const categoria = formulario.categoria.trim();
    const precio = Number(formulario.precio);
    const stock = Number(formulario.stock);

    if (
      nombre === "" ||
      categoria === "" ||
      formulario.precio === "" ||
      formulario.stock === ""
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (precio <= 0) {
      alert("El precio debe ser mayor que 0.");
      return;
    }

    if (stock < 0) {
      alert("El stock no puede ser negativo.");
      return;
    }

    if (productoEditando) {
      const productoActualizado = {
        ...productoEditando,
        nombre,
        categoria,
        precio,
        stock,
      };

      onActualizar(productoActualizado);
    } else {
      const nuevoProducto = {
        id: Date.now(),
        nombre,
        categoria,
        precio,
        stock,
      };

      onAgregar(nuevoProducto);
    }

    setFormulario(obtenerFormularioInicial());
  };

  const manejarCancelar = () => {
    setFormulario(obtenerFormularioInicial());

    if (onCancelar) {
      onCancelar();
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="modern-product-form">
      <div className="form-field">
        <label htmlFor="nombre">
          <Package size={20} />
          Nombre del producto
        </label>

        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Ej. Audífonos Bluetooth"
          value={formulario.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div className="form-field">
        <label htmlFor="categoria">
          <Tag size={20} />
          Categoría
        </label>

        <input
          id="categoria"
          type="text"
          name="categoria"
          placeholder="Ej. Periféricos"
          value={formulario.categoria}
          onChange={manejarCambio}
        />
      </div>

      <div className="form-field">
        <label htmlFor="precio">
          <DollarSign size={20} />
          Precio
        </label>

        <input
          id="precio"
          type="number"
          name="precio"
          placeholder="Ej. 79990"
          min="1"
          value={formulario.precio}
          onChange={manejarCambio}
        />
      </div>

      <div className="form-field">
        <label htmlFor="stock">
          <Database size={20} />
          Stock
        </label>

        <input
          id="stock"
          type="number"
          name="stock"
          placeholder="Ej. 10"
          min="0"
          value={formulario.stock}
          onChange={manejarCambio}
        />
      </div>

      <div className="modern-form-actions">
        <button type="submit" className="modern-submit-button">
          <Plus size={22} />
          {productoEditando ? "Guardar cambios" : "Agregar producto"}
        </button>

        {productoEditando && (
          <button
            type="button"
            className="modern-cancel-button"
            onClick={manejarCancelar}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioProducto;
