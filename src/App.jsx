import { useEffect, useState } from "react";
import { productos as productosIniciales } from "./data/productos";
import { ProductoCard } from "./components/ProductoCard";
import FormularioProducto from "./components/FormularioProducto";
import "./App.css";

function App() {

  const obtenerProductosGuardados = () => {
    const productosGuardados =
      localStorage.getItem("inventario");

    if (productosGuardados) {
      try {
        return JSON.parse(productosGuardados);
      } catch (error) {
        console.error(
          "Error al recuperar el inventario:",
          error
        );

        localStorage.removeItem("inventario");
      }
    }

    return productosIniciales;
  };

  const [productos, setProductos] = useState(
    obtenerProductosGuardados
  );

  useEffect(() => {
    localStorage.setItem(
      "inventario",
      JSON.stringify(productos)
    );
  }, [productos]);

  const [productoEditando, setProductoEditando] =
    useState(null);

  const [busqueda, setBusqueda] = useState("");

  const [categoria, setCategoria] =
    useState("Todas");

  const [estadoStock, setEstadoStock] =
    useState("Todos");

  const [orden, setOrden] = useState("");

  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto) => {
    setMensaje(texto);

    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

  const agregarProducto = (nuevoProducto) => {

    setProductos((productosActuales) => [
      ...productosActuales,
      nuevoProducto,
    ]);

    mostrarMensaje(
      "Producto agregado correctamente."
    );
  };

  const actualizarProducto = (
    productoActualizado
  ) => {

    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === productoActualizado.id
          ? productoActualizado
          : producto
      )
    );

    setProductoEditando(null);

    mostrarMensaje(
      "Producto actualizado correctamente."
    );
  };
  const eliminarProducto = (id) => {

    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    if (!confirmar) {
      return;
    }

    setProductos((productosActuales) =>
      productosActuales.filter(
        (producto) => producto.id !== id
      )
    );

    mostrarMensaje(
      "Producto eliminado correctamente."
    );
  };
  const modificarStock = (id, cambio) => {

    setProductos((productosActuales) =>
      productosActuales.map((producto) => {

        if (producto.id === id) {

          return {
            ...producto,
            stock: Math.max(
              0,
              Number(producto.stock) + cambio
            ),
          };

        }

        return producto;
      })
    );

    mostrarMensaje(
      "Stock actualizado correctamente."
    );
  };
  const iniciarEdicion = (producto) => {
    setProductoEditando(producto);
  };


  const cancelarEdicion = () => {
    setProductoEditando(null);
  };

  const normalizarTexto = (texto) => {

    return String(texto)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  };
  const productosFiltrados = productos.filter(
    (producto) => {

      
      const nombreProducto =
        normalizarTexto(producto.nombre);

      const textoBusqueda =
        normalizarTexto(busqueda);

      const coincideBusqueda =
        nombreProducto.includes(
          textoBusqueda
        );

      const coincideCategoria =
        categoria === "Todas" ||
        producto.categoria === categoria;


      const stock = Number(producto.stock);

      const coincideEstado =
        estadoStock === "Todos" ||
        (
          estadoStock === "Disponibles" &&
          stock > 0
        ) ||
        (
          estadoStock === "Agotados" &&
          stock === 0
        );

      return (
        coincideBusqueda &&
        coincideCategoria &&
        coincideEstado
      );

    }
  );

  const productosOrdenados = [
    ...productosFiltrados,
  ];

  if (orden === "nombre") {

    productosOrdenados.sort((a, b) =>
      normalizarTexto(a.nombre).localeCompare(
        normalizarTexto(b.nombre)
      )
    );

  }

  if (orden === "precio-asc") {

    productosOrdenados.sort(
      (a, b) =>
        Number(a.precio) -
        Number(b.precio)
    );

  }

  if (orden === "precio-desc") {

    productosOrdenados.sort(
      (a, b) =>
        Number(b.precio) -
        Number(a.precio)
    );

  }

  if (orden === "stock-asc") {

    productosOrdenados.sort(
      (a, b) =>
        Number(a.stock) -
        Number(b.stock)
    );

  }

  if (orden === "stock-desc") {

    productosOrdenados.sort(
      (a, b) =>
        Number(b.stock) -
        Number(a.stock)
    );

  }

  const vaciarInventario = () => {

    if (productos.length === 0) {

      mostrarMensaje(
        "El inventario ya está vacío."
      );

      return;
    }

    const confirmar = window.confirm(
      "¿Estás seguro de que deseas vaciar todo el inventario?"
    );

    if (!confirmar) {
      return;
    }

    setProductos([]);

    setBusqueda("");
    setCategoria("Todas");
    setEstadoStock("Todos");
    setOrden("");

    mostrarMensaje(
      "Inventario vaciado correctamente."
    );
  };

  const limpiarFiltros = () => {

    setBusqueda("");
    setCategoria("Todas");
    setEstadoStock("Todos");
    setOrden("");

    mostrarMensaje(
      "Filtros limpiados correctamente."
    );
  };

  return (
    <main className="container">

      <header className="header">

        <h1>
          Tienda Tecnológica
        </h1>

        <p>
          Gestor de inventario
        </p>

      </header>

      {mensaje && (

        <div
          className="status-message"
          role="status"
        >
          {mensaje}
        </div>

      )}

      <section className="toolbar">


        <input
          type="text"
          className="search-input"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) =>
            setBusqueda(
              evento.target.value
            )
          }
        />


        <select
          className="select-input"
          value={categoria}
          onChange={(evento) =>
            setCategoria(
              evento.target.value
            )
          }
        >

          <option value="Todas">
            Todas las categorías
          </option>

          <option value="Periféricos">
            Periféricos
          </option>

          <option value="Pantallas">
            Pantallas
          </option>

          <option value="Muebles">
            Muebles
          </option>

          <option value="Decoración">
            Decoración
          </option>

        </select>


        <select
          className="select-input"
          value={estadoStock}
          onChange={(evento) =>
            setEstadoStock(
              evento.target.value
            )
          }
        >

          <option value="Todos">
            Todos
          </option>

          <option value="Disponibles">
            Disponibles
          </option>

          <option value="Agotados">
            Agotados
          </option>

        </select>

        <select
          className="select-input"
          value={orden}
          onChange={(evento) =>
            setOrden(
              evento.target.value
            )
          }
        >

          <option value="">
            Sin ordenar
          </option>

          <option value="nombre">
            Nombre A-Z
          </option>

          <option value="precio-asc">
            Precio menor a mayor
          </option>

          <option value="precio-desc">
            Precio mayor a menor
          </option>

          <option value="stock-asc">
            Stock menor a mayor
          </option>

          <option value="stock-desc">
            Stock mayor a menor
          </option>

        </select>


        <button
          type="button"
          className="btn-clear-filters"
          onClick={limpiarFiltros}
        >
          Limpiar filtros
        </button>

      </section>


      <section className="inventory-actions">


        <button
          type="button"
          className="btn-empty-inventory"
          onClick={vaciarInventario}
        >
          Vaciar inventario
        </button>

      </section>


      <section className="catalog-section">

        <div className="catalog-heading">

          <h2>
            Productos
          </h2>

          <span>
            {productosOrdenados.length}
            {" "}
            producto(s)
          </span>

        </div>

        <div className="products-grid">

          {productosOrdenados.length === 0 ? (

            <p className="no-results">
              No se encontraron productos.
            </p>

          ) : (

            productosOrdenados.map(
              (producto) => (

                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  onEliminar={
                    eliminarProducto
                  }
                  onModificarStock={
                    modificarStock
                  }
                  onEditar={
                    iniciarEdicion
                  }
                />

              )
            )

          )}

        </div>

      </section>


      <FormularioProducto
        onAgregar={agregarProducto}
        productoEditando={
          productoEditando
        }
        onActualizar={
          actualizarProducto
        }
        onCancelar={
          cancelarEdicion
        }
      />

    </main>
  );
}

export default App;
