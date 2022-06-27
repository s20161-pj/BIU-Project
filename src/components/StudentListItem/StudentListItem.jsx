import React from "react";

import "./StudentListItem.css";

import { StudentsListOfGroupModalViewContext } from "../../contexts/StudentsListOfGroupModalViewContext/StudentsListOfGroupModalViewContext";
import { StudentDataContext } from "../../contexts/StudentDataContext/StudentDataContext";

export default function StudentListItem({
  id,
  name,
  surname,
  indexNumber,
  typeOfStudies,
  group,
  isChangeGroupButton,
}) {
  const { setStudentsListOfGroupModal } = React.useContext(
    StudentsListOfGroupModalViewContext
  );
  const setStudentData = React.useContext(StudentDataContext);

  const handlechangeGroup = () => {
    setStudentData({ id: id, typeOfStudies: typeOfStudies });
    setStudentsListOfGroupModal("LIST_OF_GROUPS");
  };

  return (
    <li className="student-list-item">
      <span>{name}&emsp;</span>
      <span>{surname}&emsp;</span>
      <span>{indexNumber}&emsp;</span>
      <span>{group}&emsp;</span>
      {isChangeGroupButton && (
        <button onClick={handlechangeGroup}>Zmień Grupę Studenta</button>
      )}
    </li>
  );
}
