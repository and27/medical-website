import React from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "Juan Pérez",
    photo: "/man.png",
    quote:
      "El servicio fue excelente y me sentí muy cómodo durante todo el proceso.",
  },
  {
    name: "María López",
    photo: "/woman.png",
    quote:
      "Los profesionales son muy amables y expertos en su área. ¡Altamente recomendados!",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 text-center max-w-[1080px] mx-auto py-[4rem] md:py-[8rem]">
      <h2 className="text-4xl text-slate-700 mb-[5rem] font-semibold md:w-96 mx-auto">
        ¿Qué dicen de nosotros?
      </h2>
      <div className="mx-auto grid md:grid-cols-2 px-10 gap-10">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            photo={testimonial.photo}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
