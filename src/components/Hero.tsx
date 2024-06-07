import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-6 w-1/2 mx-auto h-screen justify-center items-start">
        <h1 className="text-5xl font-semibold text-slate-800">
          Tu confianza es nuestro mayor incentivo
        </h1>
        <p className="text-slate-600">
          Somos un equipo de profesionales dedicados a tu salud y bienestar.
        </p>
        <div className="flex flex-col gap-3">
          <button className="bg-orange-600 text-white p-3 w-46 rounded">
            Llámanos
          </button>
          <a className="text-slate-600" href="tel:+1234567890">
            123-456-7890
          </a>
        </div>
      </div>
      <Image
        src="/doctor.webp"
        alt="Hero"
        width={500}
        height={500}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <p></p>
    </div>
  );
};

export default Hero;
