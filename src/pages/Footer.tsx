import { useNavigate } from "react-router-dom";
import logo from "../assets/prince.png";
const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 z-10 pb-4 text-black dark:text-white bg-gradient-to-b from-white to-white dark:from-gray-900 dark:to-black font-prince2 ">
      <button onClick={handleClick}>
        <img
          src={logo}
          alt="Logo"
          className=" w-36 h-36 max-sm:w-10 max-sm:h-10 dark:drop-shadow-[0_3px_10px_#ffffff] dark:delay-200 dark:transition-all"
        />
      </button>
      <p className="text-sm">
        Todos los derechos reservados © {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};
export default Footer;
