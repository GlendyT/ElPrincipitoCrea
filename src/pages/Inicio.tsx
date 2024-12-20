import logotipo from "../assets/prince.png";

const Inicio = () => {
  return (
    <div className=" flex items-center justify-center  min-h-screen  text-black dark:text-white bg-gradient-to-b from-white to-white dark:from-gray-900 dark:to-black max-sm:px-8    ">
      <div className="flex flex-row gap-10 items-center max-sm:flex-col">
        <div className="flex flex-col gap-4 max-sm:text-center font-prince2">
          <p className="text-2xl max-2xl:text-lg">
            "Haz de tu vida un sueño, y de un sueño una realidad"
          </p>
          <span className="text-lg text-start max-sm:text-xs max-2xl:text-base max-md:text-end">
            - El principito
          </span>
        </div>
        <div className="flex flex-row items-center relative font-prince ">
          <div className="flex flex-col absolute">
            <span className="text-xl text-end">Creaciones </span>
            <span className="text-2xl  ">El Principito </span>
          </div>
          <img
            src={logotipo}
            alt=""
            width={250}
            height={150}
            className="items-end justify-end dark:drop-shadow-[0_5px_35px_#8b8a8a] dark:delay-200 dark:transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
