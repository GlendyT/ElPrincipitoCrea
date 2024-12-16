import { useState } from "react";
import nosotros from "../assets/prince.png";
import { personalData } from "../data/Datos";

const Nosotros = () => {
  const defaultTab =
    personalData.find((tab) => tab.id === 1) || personalData[0];
  const [activeTab, setActiveTab] = useState(defaultTab.title);

  // Encuentra el contenido del tab activo
  const activeContent =
    personalData.find((tab) => tab.title === activeTab) || defaultTab;

  return (
    <div className=" flex flex-row-2 gap-10 items-center justify-center  min-h-screen max-sm:flex-col max-sm:gap-2 max-2xl:gap-8 max-2xl:flex-col text-black dark:text-white bg-gradient-to-t from-white to-white dark:from-gray-900 dark:to-black font-prince2 ">
      <img
        src={nosotros}
        alt="Nosotros"
        className=" w-80 h-80 mb-8 max-sm:w-44 max-sm:h-44 dark:drop-shadow-[0_5px_35px_#8b8a8a] dark:delay-200 dark:transition-all"
      />
      <div className="flex flex-col">
        <div className="flex justify-center gap-4 mb-6 ">
          {personalData.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold border-b-4 max-sm:text-xs uppercase ${
                activeTab === tab.title
                  ? "border-redE text-yellowE "
                  : "border-transparent text-yellowE"
              } hover:text-redE`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="h-64 max-sm:h-56 max-w-3xl p-6 rounded-lg text-center flex flex-col justify-center dark:bg-white/5 bg-black/10 backdrop-blur-md shadow-lg ">
          <h2 className="text-3xl font-bold text-redE mb-4 max-sm:text-lg uppercase ">
            {activeContent.title}
          </h2>
          <p className="text-lg text-purpleE max-sm:text-xs">
            {activeContent.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
