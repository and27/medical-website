// Testimonial.tsx
import React from "react";

interface TestimonialProps {
  name: string;
  photo: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, photo, quote }) => {
  return (
    <div className="flex items-center my-4 gap-2 text-left px-5">
      <img
        src={photo}
        alt={`${name}'s photo`}
        className="w-20 h-20 rounded-full"
      />
      <div className="flex flex-col">
        <p className="italic text-slate-700">{`"${quote}"`}</p>
        <p className="text-2xl text-slate-700 font-semibold mt-2">- {name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
