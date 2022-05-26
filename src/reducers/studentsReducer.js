export default function studentsReducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        [action.typeOfStudies]: [
          ...state[action.typeOfStudies],
          action.newStudent,
        ],
      };
    default:
      throw new Error("Invalid students reducer action");
  }
}
