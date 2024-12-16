import ServiceCards from "../components/ServiceCards";
import { designsData } from "../data/Datos";

const Servicios = () => {
  return (
    <div className="flex justify-center min-h-screen max-sm:mt-0 text-white bg-gradient-to-b from-white to-white dark:from-gray-900 dark:to-black font-prince2 ">
      <div className="flex flex-wrap items-center justify-center gap-2 pt-20 max-sm:pt-14">
        {designsData.map((design) => (
          <ServiceCards key={design.id} design={design} />
        ))}
        
      </div>
    </div>
  );
};

export default Servicios;
