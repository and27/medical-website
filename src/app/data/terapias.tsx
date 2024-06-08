type TerapyType = {
  title: string;
  description: string;
  imageUrl: string;
};

const terapias: TerapyType[] = [
  {
    title: "Biomagnetismo",
    description:
      "El biomagnetismo utiliza imanes para equilibrar el pH del cuerpo, ayudando a restaurar la salud y el bienestar.",
    imageUrl: "/biomagnetismo.webp",
  },
  {
    title: "Masaje Terapéutico",
    description:
      "El masaje terapéutico alivia la tensión muscular, reduce el estrés y mejora la circulación, proporcionando una relajación profunda.",
    imageUrl: "/massage.webp",
  },
  {
    title: "Digitopuntura",
    description:
      "La digitopuntura aplica presión en puntos específicos del cuerpo para aliviar el dolor, mejorar la energía y promover la curación.",
    imageUrl: "/digitopuntura.jpg",
  },
  {
    title: "Hidroterapia de Colon",
    description:
      "La hidroterapia de colon limpia el intestino grueso mediante la introducción de agua purificada, eliminando toxinas y mejorando la digestión.",
    imageUrl: "/hidro.webp",
  },
  {
    title: "Apiterapia",
    description:
      "La apiterapia utiliza productos de las abejas, como miel y propóleos, para tratar diversas condiciones de salud y mejorar el bienestar general.",
    imageUrl: "/apiterapia.webp",
  },
];

export default terapias;
