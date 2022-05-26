import React from "react";

import "./NavbarItem.css";

import { Link } from "react-router-dom";

export default function NavbarItem({ title, slug, icon }) {
  return (
    <li>
      <Link className="nav-link" to={slug}>
        {icon && icon}
        {title}
      </Link>
    </li>
  );
}
