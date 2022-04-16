
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/elementsOfPage/Footer/Footer';
import Navbar from './components/elementsOfPage/Navbar/Navbar';
import MainPage from "./pages/MainPage/MainPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Route path="/main">
        <MainPage />
      </Route>
      <Route path="/students">
        <StudentsPage />
      </Route>
    <Footer></Footer>
    </div>
  );
}
export default App;
