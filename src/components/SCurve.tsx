import Image from "next/image";

interface SCurveProps {
  title: string;
  description: string;
  image: string;
  direction: "left" | "right";
}

const SCurve = ({ title, description, image, direction }: SCurveProps) => {
  return (
    <>
      <div
        className={`md:flex items-center justify-center my-[6rem] gap-5
      ${direction === "left" ? "flex-row-reverse" : "flex-row"}
        `}
      >
        <div className="text-left flex flex-col gap-3">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-slate-700">{description}</p>
          <button className="text-teal-700 px-5 py-2 rounded border border-teal-600 w-48">
            Ver más
          </button>
        </div>
        <div
          className="imageContainer shrink-0 rounded-lg w-full md:w-1/2 relative"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <Image src={image} alt="Hero" layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
};

export default SCurve;
