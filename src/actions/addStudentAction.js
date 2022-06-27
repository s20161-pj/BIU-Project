export default function addStudentAction(state, action) {
  return {
    ...state,
    [action.typeOfStudies]: [...state[action.typeOfStudies], action.newStudent],
  };
}
