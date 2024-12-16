import Encuentranos from "./Encuentranos";
import Footer from "./Footer";
import Inicio from "./Inicio";
import Navbar from "./Navbar";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="sticky top-0 w-full z-20">
        <Navbar />
      </div>
      <div className="flex-1 overflow-auto">
        <div id="inicio">
          <Inicio />
        </div>
        <div id="nosotros" className="backdrop-blur-sm bg-black/10">
          <Nosotros />
        </div>
        <div id="servicios" className="backdrop-blur-sm bg-black/10">
          <Servicios />
        </div>
        <div id="encuentranos" className="backdrop-blur-sm bg-black/10">
          <Encuentranos />
        </div>
      </div>
      <Footer />
    </div>
  );
};
