import Image from "next/image";

interface SCurveProps {
  direction: "left" | "right";
}

const SCurve = ({ direction }: SCurveProps) => {
  return (
    <>
      <div
        className={`flex items-center justify-center px-12 my-[6rem] gap-5
      ${direction === "left" ? "flex-row-reverse" : "flex-row"}
        `}
      >
        <div className="text-left flex flex-col gap-3">
          <h3 className="text-2xl">Acupuntura</h3>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc nec luctus posuere, urna sapien ultricies nisi, eu
            suscipit nisi mi eget turpis.
          </p>
          <button className="text-orange-700 px-5 py-2 rounded border border-orange-600 w-48">
            Ver más
          </button>
        </div>
        <div
          className="imageContainer shrink-0 "
          style={{ height: "200px", overflow: "hidden" }}
        >
          <Image src="/technique1.webp" alt="Hero" width={500} height={200} />
        </div>
      </div>
    </>
  );
};

export default SCurve;
