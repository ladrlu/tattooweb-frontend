import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">HELENAH.ink</h2>
      <h3 className="sidebar__subtitle">TATTOO ARTIST | PRAHA</h3>
      <nav className="sidebar__navigation">
        <Link href="/tattoos">
          <a className="sidebar__link">Má práce</a>
        </Link>
        <Link href="/about">
          <a className="sidebar__link">O mně</a>
        </Link>
        <Link href="/rezervace">
          <a className="sidebar__link">Rezervace termínu</a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
