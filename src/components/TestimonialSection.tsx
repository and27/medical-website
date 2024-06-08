import React from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "Juan Pérez",
    photo: "/path/to/photo1.jpg",
    quote:
      "El servicio fue excelente y me sentí muy cómodo durante todo el proceso.",
  },
  {
    name: "María López",
    photo: "/path/to/photo2.jpg",
    quote:
      "Los profesionales son muy amables y expertos en su área. ¡Altamente recomendados!",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-6">
        Testimonios de Pacientes
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            photo={testimonial.photo}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
