// Testimonial.tsx
import React from "react";

interface TestimonialProps {
  name: string;
  photo: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, photo, quote }) => {
  return (
    <div className="flex items-center my-4">
      <img
        src={photo}
        alt={`${name}'s photo`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div className="flex-1">
        <p className="italic">{`"${quote}"`}</p>
        <p className="font-bold mt-2">- {name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
