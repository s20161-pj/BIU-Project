import React from "react";

import { StudentsListOfGroupModalViewContext } from "./StudentsListOfGroupModalViewContext";

import { StudentsListOfGroupModalViewModel } from "../../models/StudentsListOfGroupModalViewModel";

export default function StudentsListOfGroupModalViewContextProvider({
  className,
  listOfStudents,
  listOfGroups,
}) {
  const [studentsListOfGroupModal, setStudentsListOfGroupModal] =
    React.useState(StudentsListOfGroupModalViewModel.LIST_OF_STUDENTS);

  const providerValue = React.useMemo(
    () => ({
      studentsListOfGroupModal,
      setStudentsListOfGroupModal,
    }),
    [studentsListOfGroupModal]
  );

  return (
    <StudentsListOfGroupModalViewContext.Provider value={providerValue}>
      <ul className={className}>
        {
          {
            LIST_OF_STUDENTS: listOfStudents,
            LIST_OF_GROUPS: listOfGroups,
          }[studentsListOfGroupModal]
        }
      </ul>
    </StudentsListOfGroupModalViewContext.Provider>
  );
}
