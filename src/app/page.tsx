import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SCurve from "@/components/SCurve";
import ThreeColumnItems from "@/components/ThreeColumnItems";
import { FaUserMd, FaYinYang } from "react-icons/fa";
import { FaSpa } from "react-icons/fa6";
import terapias from "./data/terapias";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <section
        className="text-center py-[4rem] md:py-[8rem] max-w-[1280px] mx-auto px-6"
        id="beneficios"
      >
        <h2 className="text-4xl text-slate-700 mb-[5rem] font-semibold md:w-96 mx-auto">
          ¿Porqué deberías confiar en nosotros?
        </h2>
        <ThreeColumnItems
          items={[
            {
              title: "Enfoque Holístico",
              description:
                "Nuestro enfoque holístico asegura que consideramos todos los aspectos de tu salud, incluyendo el bienestar físico, emocional y mental.",
              icon: FaUserMd,
            },
            {
              title: "Ambiente Acogedor",
              description:
                "Nuestro consultorio está diseñado para proporcionar un ambiente tranquilo y acogedor donde puedas sentirte relajado y cómodo. ",
              icon: FaSpa,
            },
            {
              title: "Terapias Personalizadas",
              description:
                "Entendemos que cada persona es única, por eso adaptamos nuestros tratamientos a tus necesidades específicas.",
              icon: FaYinYang,
            },
          ]}
        />
      </section>

      <div className="bg-white py-[4rem] md:py-[8rem] px-6" id="servicios">
        <section className="text-center max-w-[1280px] mx-auto">
          <h2 className="text-4xl text-slate-700 mb-[5rem] font-semibold md:w-96 mx-auto">
            ¿Cuáles son nuestros servicios?
          </h2>
          {terapias.map((terapia, index) => (
            <SCurve
              key={index}
              title={terapia.title}
              description={terapia.description}
              image={terapia.imageUrl}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </section>
      </div>

      <section className="py-10 bg-gray-100" id="testimonios">
        <TestimonialSection />
      </section>
      <ContactSection />
      <Footer />
    </>
  );
}
