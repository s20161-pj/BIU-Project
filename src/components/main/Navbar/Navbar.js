import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  const navLogo = "E-DZIEKANAT";
  const navMainPage = "STRONA GŁÓWNA";
  const navStudents = "STUDENCI";
  const navSubjects = "PRZEDMIOTY";
  const navContatc = "KONTAKT";
  return (
    <div class="container">
      <div class="row">
        <div class="logo">{navLogo}</div>
      </div>
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/main">
              {navMainPage}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to="/students">
                  {navStudents}
                </Link>
                <Link class="nav-link" to="/subjects">
                  {navSubjects}
                </Link>
                <Link class="nav-link" to="#">
                  {navContatc}
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
