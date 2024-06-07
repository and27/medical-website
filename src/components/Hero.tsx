import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-6 md:w-1/2 h-screen justify-center items-start ">
          <h1 className="text-6xl font-semibold text-slate-800">
            Tu confianza es nuestro mayor incentivo
          </h1>
          <p className="text-slate-600 text-lg">
            Somos un equipo de profesionales dedicados a tu salud y bienestar.
            Nuestro enfoque holístico garantiza que consideramos todos los
            aspectos de tu salud.
          </p>
          <div className="flex flex-col gap-3">
            <button className="bg-teal-600 text-white p-3 min-w-64 rounded">
              Llámanos ahora
            </button>
            <a className="text-slate-600" href="tel:+1234567890">
              123-456-7890
            </a>
          </div>
        </div>
        <div className="md:absolute md:h-screen top-0 right-0 md:w-[40%] hidden md:block">
          <Image
            src="/doctor.webp"
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
