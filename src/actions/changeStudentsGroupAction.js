import {
  translatedTypeOfStudyPL,
  translatedTypeOfStudyENG,
} from "../i18n/translateTypeOfStudy";

export default function changeStudentsGroupAction(state, action) {
  const typeOfStudiesPL = translatedTypeOfStudyPL(action.typeOfStudies);
  const studentsTypeOfStudyENG = translatedTypeOfStudyENG(
    action.studentTypeOfStudies
  );

  // Find student to update group
  let studentToUpdate;

  try {
    studentToUpdate = state[studentsTypeOfStudyENG].find(
      ({ id }) => id === action.id
    );

    if (studentToUpdate === undefined) {
      studentToUpdate = state[action.typeOfStudies].find(
        ({ id }) => id === action.id
      );
    }
  } catch (error) {
    console.error(error);
  }

  // Remove user to update form students array
  // if is not in typeOfStudies Array
  const deleteUserBeforeUpdate = state[studentsTypeOfStudyENG].filter(
    ({ id }) => id !== action.id
  );

  // Remove student to update if
  // is in typeOfStudies Array
  const newStudentsArray = state[action.typeOfStudies].filter(
    ({ id }) => id !== action.id
  );

  // Update student
  newStudentsArray.push({
    ...studentToUpdate,
    group: action.group,
    typeOfStudies: typeOfStudiesPL,
  });

  // If students change group only
  if (action.typeOfStudies === studentsTypeOfStudyENG) {
    return {
      ...state,
      [action.typeOfStudies]: newStudentsArray,
    };
  }

  // If students change group and typeOfStudies
  return {
    [action.typeOfStudies]: newStudentsArray,
    [studentsTypeOfStudyENG]: deleteUserBeforeUpdate,
  };
}
