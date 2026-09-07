import { useNavigate } from "react-router-dom";
import { Package } from "lucide-react";
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto() {
  const navigate = useNavigate();

  const agregarProducto = (nuevoProducto) => {
    const productosGuardados = localStorage.getItem("inventario");

    let productos = [];

    if (productosGuardados) {
      try {
        productos = JSON.parse(productosGuardados);
      } catch {
        productos = [];
      }
    }

    productos.push(nuevoProducto);

    localStorage.setItem("inventario", JSON.stringify(productos));

    navigate("/Inventario");
  };

  return (
    <section className="new-product-page">
      <div className="new-product-card">

        <div className="new-product-header">
          <div className="new-product-icon">
            <Package size={34} />
          </div>

          <div>
            <h1>Nuevo Producto</h1>
            <p>
              Completa la información del producto para agregarlo al inventario.
            </p>
          </div>
        </div>

        <FormularioProducto onAgregar={agregarProducto} />

      </div>
    </section>
  );
}

export default NuevoProducto;