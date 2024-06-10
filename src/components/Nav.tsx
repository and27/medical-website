const Nav = () => {
  return (
    <nav className="px-6 py-5 border-b border-neutral-200 fixed w-screen bg-white z-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 items-center">
        <img src="/logo.svg" alt="Logo" className="w-10" />
        <ul className="flex gap-7 justify-self-end">
          <li>
            <a href="#" className="active:bold">
              Inicio
            </a>
          </li>
          <li>
            <a href="#beneficios">Beneficios</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
