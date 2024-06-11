const Nav = () => {
  return (
    <nav className="px-6 py-5 border-b border-neutral-200 fixed w-screen bg-white z-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 items-center">
        <img src="/logo.svg" alt="Logo" className="w-10" />
        <ul className="flex gap-3 md:gap-7  justify-self-end text-slate-800 text-sm md:text-base">
          <li>
            <a href="#" className="active:font-bold">
              Inicio
            </a>
          </li>
          <li>
            <a href="#beneficios" className="active:font-bold">
              Beneficios
            </a>
          </li>
          <li>
            <a href="#servicios" className="active:font-bold">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="active:font-bold">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
