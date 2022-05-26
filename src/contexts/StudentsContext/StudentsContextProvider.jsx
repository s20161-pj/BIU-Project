import React, { useReducer, useMemo } from "react";

import mock_students_db from "../../mocks/mock_students_db.json";

import { StudentsContext } from "./StudentsContext";

import studentsReducer from "../../reducers/studentsReducer";

export default function StudentsContextProvider({ children }) {
  const [studentsState, studentsDispatch] = useReducer(
    studentsReducer,
    mock_students_db
  );

  const providedStudentsValue = useMemo(
    () => ({
      studentsState,
      studentsDispatch,
    }),
    [studentsState]
  );

  return (
    <StudentsContext.Provider value={providedStudentsValue}>
      {children}
    </StudentsContext.Provider>
  );
}
