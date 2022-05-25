import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FaHouseDamage, FaEnvelope } from "react-icons/fa"
function Navbar() {
  const navLogo = "E-DZIEKANAT";
  const navMainPage = "STRONA GŁÓWNA";
  const navStudents = "STUDENCI";
  const navSubjects = "PRZEDMIOTY";
  const navContact = "KONTAKT";
  return (
    <div className="container">
      <div className="row">
        <div className="logo">{navLogo}</div>
      </div>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <FaHouseDamage /> 
            <Link className="navbar-brand" to="/main">
              {navMainPage}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/students">
                  {navStudents}
                </Link>
                <Link className="nav-link" to="/subjects">
                  {navSubjects}
                </Link>
                <Link className="nav-link" to="/contact">
                <FaEnvelope/> 
                  {navContact}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
