import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section
      className="bg-white text-center pt-[8rem] pb-[9rem] pattern"
      id="contacto"
    >
      <div className="max-w-[1080px] mx-auto flex flex-col items-center">
        <h2 className="text-4xl text-slate-700 mb-[5rem] font-semibold w-96 mx-auto">
          ¿Dónde nos encontramos?
        </h2>
        <div>
          <p className="text-2xl text-neutral-800">Calle Oreste Camarca </p>
          <p className="mb-8 text-2xl text-neutral-700">Quito - Ecuador</p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex gap-3 items-center  p-6 text-left rounded">
              <div className="bg-teal-500 text-white rounded-full p-3">
                <BsWhatsapp size={36} color="white" />
              </div>
              <div>
                <p className="text-neutral-600 mb-1">Llámanos</p>
                <p className="text-2xl text-slate-700 font-semibold">
                  +34 123 456 789{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center p-6 text-left rounded">
              <div className="bg-teal-500 text-white rounded-full p-3">
                <MdEmail size={36} color="white" />
              </div>
              <div>
                <p className="text-neutral-600 mb-1">Escríbenos</p>
                <p className="text-2xl text-slate-700 font-semibold">
                  <a href="mailto:ivan@gmail.com">ivan@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
