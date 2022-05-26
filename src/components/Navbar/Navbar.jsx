import "./Navbar.css";

import NavbarItem from "../NavbarItem/NavbarItem";

import { navItems } from "../../consts/navItems";

export default function Navbar() {
  return (
    <nav className="container">
      <h1 className="logo">E-DZIEKANAT</h1>
      <ul className="row navbar navbar-nav navbar-expand-lg navbar-light bg-light container-fluid">
        {navItems.map(({ title, slug, icon }) => (
          <NavbarItem key={title} title={title} slug={slug} icon={icon} />
        ))}
      </ul>
    </nav>
  );
}
