const Nav = () => {
  return (
    <nav className="px-6 py-7 border-b border-neutral-200 fixed w-screen bg-white z-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2">
        <h1>Logo</h1>
        <ul className="flex gap-5 justify-self-end">
          <li>
            <a href="#inicio">Inicio</a>
          </li>

          <li>
            <a href="#benefits">Beneficios</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
