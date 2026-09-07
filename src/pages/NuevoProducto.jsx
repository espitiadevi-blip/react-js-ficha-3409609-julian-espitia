import { useNavigate } from "react-router-dom";
import FormularioProducto from "../components/FormularioProducto";
function NuevoProducto() {
  const navigate = useNavigate();
  const agregarProducto = (nuevoProducto) => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.push(nuevoProducto);
    localStorage.setItem(
      "productos",
      
      JSON.stringify(productosGuardados)
    );
    navigate("/inventario");
  };
  return (    

    <section>
      <h1>Nuevo Producto</h1>
      <FormularioProducto
        onAgregar={agregarProducto}
      />
    </section>

  );
}

export default NuevoProducto;