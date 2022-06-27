import React from "react";

import { StudentsContext } from "../contexts/StudentsContext/StudentsContext";

import mock_students_grups from "../mocks/mock_students_grups.json";

export default function useStudentsGroupList(id) {
  const [groupData, setGroupData] = React.useState({});
  const [studyType, setStudyType] = React.useState("");
  const [studentsGroupList, setStudentsGroupList] = React.useState();
  
  const { studentsState } = React.useContext(StudentsContext);

  const handleStudentsGroupList = React.useCallback(
    (studyType) => {
      if (studentsState[studyType] !== undefined) {
        setStudentsGroupList(
          studentsState[studyType].filter(
            (student) => student.group === groupData.groupIndex
          )
        );
      }
    },
    [groupData.groupIndex, studentsState]
  );

  const handleStudentsListOfGroup = React.useCallback(
    (foundStudent, setStudyTypeValue) => {
      setGroupData(foundStudent);
      setStudyType(setStudyTypeValue);
      handleStudentsGroupList(studyType);
    },
    [handleStudentsGroupList, studyType]
  );

  const handleStudent = React.useCallback(
    (findStudentInStationary, findStudentInNonstationary) => {
      if (
        findStudentInStationary !== undefined &&
        findStudentInNonstationary === undefined
      ) {
        handleStudentsListOfGroup(findStudentInStationary, "stacionary");
      } else if (
        findStudentInNonstationary !== undefined &&
        findStudentInStationary === undefined
      ) {
        handleStudentsListOfGroup(findStudentInNonstationary, "nonstacionary");
      } else {
        throw new Error("group not found");
      }
    },
    [handleStudentsListOfGroup]
  );

  React.useEffect(() => {
    const findStudentInStationary = mock_students_grups.stationary.find(
      (group) => group.id === Number(id)
    );

    const findStudentInNonstationary = mock_students_grups.nonstationary.find(
      (group) => group.id === Number(id)
    );

    handleStudent(findStudentInStationary, findStudentInNonstationary);
  }, [handleStudent, id]);

  return [studentsGroupList, groupData];
}
