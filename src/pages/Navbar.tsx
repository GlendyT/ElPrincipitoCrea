import { useNavigate } from "react-router-dom";
import { usePage } from "../hooks/usePage";
import logo from "../assets/prince.png";
import Switcher from "../utils/Switcher";

 const Navbar = () => {
  const navigate = useNavigate();
  const { isScrolled, scrollToSection } = usePage();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`flex flex-row justify-between px-4 py-4 w-full absolute transition-all duration-300  gap-4 max-sm:gap-1 text-black dark:text-white max-sm:py-2  ${
        isScrolled ? "bg-black/20 dark:bg-white/0 backdrop-blur-3xl shadow-lg" : ""
      }`}
    >
      <button onClick={handleLogoClick}>
        <img
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="dark:drop-shadow-[0_3px_10px_#ffffff] dark:delay-200 dark:transition-all"
        />
      </button>
      <div className="flex gap-6 text-xl max-sm:text-xs max-sm:gap-3 font-prince2 ">
        <button onClick={handleLogoClick}>Inicio</button>
        <button onClick={() => scrollToSection("nosotros")}>Nosotros</button>
        <button onClick={() => scrollToSection("servicios")}>Servicios</button>
        <button onClick={() => scrollToSection("encuentranos")}>
          Encuentranos
        </button>
        <Switcher />
      </div>
    </div>
  );
};

export default Navbar