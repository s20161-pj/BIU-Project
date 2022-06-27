import React from "react";
import { useParams } from "react-router-dom";
import StudentPersonalDataTable from "../../components/StudentPersonalDataTable/StudentPersonalDataTable";
import { StudentsContext } from "../../contexts/StudentsContext/StudentsContext";
import {translatedTypeOfStudyENG} from "../../i18n/translateTypeOfStudy";

export default function StudentDetails() {

  const {studentsState} = React.useContext(StudentsContext)
  const {id, typeOfStudies} = useParams()
  const studentById = studentsState[translatedTypeOfStudyENG(typeOfStudies)].find((student) => student.id === id)
  return (
    <div className="studentsDetails-page">
      <StudentPersonalDataTable student={studentById} />
    </div>
  );
}
