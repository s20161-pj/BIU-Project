import React from "react";

import "./StudentsListOfGroupModal.css";

import mock_students_grups from "../../mocks/mock_students_grups.json";

import { StudentDataContext } from "../../contexts/StudentDataContext/StudentDataContext";

import StudentsListOfGroupModalViewContextProvider from "../../contexts/StudentsListOfGroupModalViewContext/StudentsListOfGroupModalViewContextProvider";

import ModalListOfGroupLayout from "../../layouts/ModalListOfGroupsLayout/ModalListOfGroupLayout";

import StudyTypeListPart from "../../components/StudyTypeListPart/StudyTypeListPart";
import ModalListOfGroup from "../../components/ModalListOfGroup/ModalListOfGroup";

export default function StudentsListOfGroupModal({
  closeModal,
  stacionary,
  nonstacionary,
}) {
  const [studentData, setStudentData] = React.useState();

  return (
    <StudentsListOfGroupModalViewContextProvider
      className="students-list-of-group-modal"
      listOfStudents={
        <StudentDataContext.Provider value={setStudentData}>
          <StudyTypeListPart
            title="Studenci Studiów Stacjonarnych"
            studentsState={stacionary}
          />
          <StudyTypeListPart
            title="Studenci Studiów Niestacjonarnych"
            studentsState={nonstacionary}
          />
        </StudentDataContext.Provider>
      }
      listOfGroups={
        <ModalListOfGroupLayout>
          <ModalListOfGroup
            listTitle="Grupy Stacjonarne"
            groupList={mock_students_grups.stationary}
            studentData={studentData}
            typeOfStudies="stacionary"
            closeModal={closeModal}
          />
          <ModalListOfGroup
            listTitle="Grupy Niestacjonarne"
            groupList={mock_students_grups.nonstationary}
            studentData={studentData}
            typeOfStudies="nonstacionary"
            closeModal={closeModal}
          />
        </ModalListOfGroupLayout>
      }
    />
  );
}
