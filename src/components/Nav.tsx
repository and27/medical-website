const Nav = () => {
  return (
    <nav className="grid grid-cols-2 py-7 border-b border-neutral-200">
      <h1>Logo</h1>
      <ul className="flex gap-5 justify-self-end">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
