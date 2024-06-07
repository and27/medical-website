import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SCurve from "@/components/SCurve";
import ThreeColumnItems from "@/components/ThreeColumnItems";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <section className="text-center my-[8rem]">
        <h2 className="text-4xl text-slate-700 my-[5rem] font-semibold w-96 mx-auto">
          ¿Porqué deberías confiar en nosotros?
        </h2>
        <ThreeColumnItems
          items={[
            {
              title: "Item 1",
              description: "Description 1",
              href: "https://example.com",
            },
            {
              title: "Item 2",
              description: "Description 2",
              href: "https://example.com",
            },
            {
              title: "Item 3",
              description: "Description 3",
              href: "https://example.com",
            },
          ]}
        />
      </section>

      <section className="text-center mt-[10rem]">
        <h2 className="text-4xl text-slate-700 my-[5rem] font-semibold w-96 mx-auto">
          ¿Cuáles son nuestros servicios?
        </h2>
        <SCurve direction="right" />
        <SCurve direction="left" />
        <SCurve direction="right" />
      </section>

      <Footer />
    </>
  );
}
