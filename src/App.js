
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/main/Footer/Footer';
import Navbar from './components/main/Navbar/Navbar';
import MainPage from "./components/pages/MainPage/MainPage/MainPage";
import StudentsPage from "./components/pages/StudentsPage/StudentsPage/StudentsPages";
import SubjectsPage from './components/pages/SubjectsPage/SubjectsPage';
import AddStudentForm from "./components/pages/AddStudentForm/AddStudentForm";


function App() {
  return (
    <div className="app">
    <Navbar></Navbar>
    <Route path="/main">
        <MainPage />
      </Route>
      <Route path="/students">
        <StudentsPage />
      </Route>
      <Route path="/subjects">
        <SubjectsPage />
      </Route>
      <Route path="/add-students">
        <AddStudentForm />
      </Route>
    <Footer></Footer>
    </div>
  );
}
export default App;
