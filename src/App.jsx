import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import MainPage from "./pages/MainPage/MainPage";
import StudentsPage from "./pages/StudentsPage/StudentsPages";
import SubjectsPage from "./pages/SubjectsPage/SubjectsPage";
import AddStudentForm from "./pages/AddStudentForm/AddStudentForm";
import ContactComponent from "./pages/ContactComponent/ContactComponent";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import StudentsListOfGroup from "./pages/StudentsListOfGroup/StudentsListOfGroup";
import GroupsDoingTheSubject from "./pages/GroupsDoingTheSubject/GroupsDoingTheSubject";
import StudentsContextProvider from "./contexts/StudentsContext/StudentsContextProvider";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <StudentsContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/group/:id" element={<StudentsListOfGroup />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/subjects/groups/:subject" element={<GroupsDoingTheSubject />} />
          <Route path="/add-students" element={<AddStudentForm />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/student-details/:typeOfStudies/:id" element={<StudentDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </StudentsContextProvider>
      <Footer />
    </BrowserRouter>
  );
}
