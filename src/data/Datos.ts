export type MenuItem = {
  id: number;
  title: string;
  content: string;
};

export const personalData: MenuItem[] = [
  {
    id: 1,
    title: "nosotros",
    content:
      "En Arte & Creatividad, nos especializamos en transformar ideas en realidades llenas de color y detalle. Nuestro equipo de artistas y creadores apasionados trabaja día a día en la elaboración de manualidades únicas, dibujos artísticos personalizados, cajas creativas y decoraciones para todo tipo de eventos. Además, somos expertos en arreglos y decoraciones con globos, diseñados para llenar de magia y alegría cualquier ocasión especial. Creemos que cada detalle cuenta, y estamos comprometidos a brindar piezas únicas que transmitan emociones y creen recuerdos inolvidables.",
  },
  {
    id: 2,
    title: "mision",
    content:
      "Nuestra misión es ofrecer servicios y productos personalizados de alta calidad que combinen arte y creatividad para embellecer los momentos más especiales de la vida de nuestros clientes. A través de nuestras manualidades y decoraciones, buscamos expresar emociones, destacar la originalidad y aportar un toque único a cada evento.",
  },
  {
    id: 3,
    title: "vision",
    content:
      "Ser reconocidos como una empresa líder en el ámbito de las manualidades artísticas y la decoración creativa, marcando tendencia por nuestra innovación, atención al detalle y compromiso con la satisfacción de nuestros clientes. Aspiramos a expandir nuestras soluciones decorativas y artísticas para inspirar a más personas y contribuir a la creación de momentos memorables ",
  },
  {
    id: 4,
    title: "valores",
    content:
      "Innovamos constantemente para ofrecer diseños únicos y adaptados a las necesidades de nuestros clientes. Cada proyecto que realizamos está lleno de dedicación y amor por el arte. Garantizamos productos y servicios de excelencia, cuidando cada detalle para superar las expectativas. Escuchamos y entendemos las necesidades de nuestros clientes para plasmar sus ideas de forma auténtica. ",
  },
];

export type DesignItem = {
  id: number;
  title: string;
  img: string;
};

export const designsData: DesignItem[] = [
  {
    id: 1,
    title: "Dibujos Artisticos para decoracion",
    img: "/src/assets/diseños (4).jpg",
  },
  {
    id: 2,
    title: "Cajas Creativas",
    img: "/src/assets/diseños (2).jpg",
  },
  {
    id: 3,
    title: "Decoracion con Globos",
    img: "/src/assets/diseños (3).jpg",
  },
  {
    id: 4,
    title: "Arreglo con globos",
    img: "/src/assets/diseños (1).jpg",
  },
  // {
  //   id: 5,
  //   title: "Dibujos Artisticos para decoracion",
  //   img: "/src/assets/diseños (4).jpg",
  // },
  // {
  //   id: 6,
  //   title: "Cajas Creativas",
  //   img: "/src/assets/diseños (2).jpg",
  // },
  // {
  //   id: 7,
  //   title: "Decoracion con Globos",
  //   img: "/src/assets/diseños (3).jpg",
  // },
  // {
  //   id: 8,
  //   title: "Arreglo con globos",
  //   img: "/src/assets/diseños (1).jpg",
  // },
];
