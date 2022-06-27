import React from "react";

import { StudentsContext } from "../../contexts/StudentsContext/StudentsContext";

export default function ModalListOfGroup({
  listTitle,
  groupList,
  studentData,
  typeOfStudies,
  closeModal,
}) {
  const { studentsDispatch } = React.useContext(StudentsContext);

  const handleChangeStudentGroup = (groupIndex) => {
    studentsDispatch({
      type: "CHANGE_STUDENTS_GROUP",
      id: studentData.id,
      typeOfStudies: typeOfStudies,
      studentTypeOfStudies: studentData.typeOfStudies,
      group: groupIndex,
    });

    alert("Zmieniono grupe studenta");
    closeModal();
  };

  return (
    <ul>
      <li>
        <h4>{listTitle}</h4>
      </li>
      {groupList.map(({ id, groupIndex }) => (
        <li key={`${id}-${groupIndex}`}>
          <button onClick={() => handleChangeStudentGroup(groupIndex)}>
            Grupa: {groupIndex}
          </button>
        </li>
      ))}
    </ul>
  );
}
