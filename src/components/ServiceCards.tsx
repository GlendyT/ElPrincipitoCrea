import { DesignItem } from "../data/Datos";

const ServiceCards = ({ design }: { design: DesignItem }) => {
  return (
    <div className="relative flex items-center justify-center h-96 w-96 overflow-hidden group rounded-xl">
      <img
        src={design.img}
        alt={design.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-fuchsia-900 opacity-5 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute  text-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <h3 className="text-center text-4xl uppercase font-extrabold">{design.title}</h3>
      </div>
    </div>
  );
};

export default ServiceCards;
