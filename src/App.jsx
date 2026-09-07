import { Routes, Route } from "react-router-dom"; // (Recuerda que suele ser react-router-dom)
import NavBar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Inventario from "./pages/Inventario";
import NuevoProducto from "./pages/NuevoProducto";
import Acerca from "./pages/Acerca";
import DetalleProducto from "./pages/DetalleProducto";
import NoEncontrado from "./pages/NoEncontrado";
import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/NuevoProducto" element={<NuevoProducto />} />
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/DetalleProducto" element={<DetalleProducto />} />
        {/* Cambié /NoEncontrado a * para que capture cualquier URL que no exista */}
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </main>
  );
}

export default App;
