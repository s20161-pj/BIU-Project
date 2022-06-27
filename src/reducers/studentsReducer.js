import addStudentAction from "../actions/addStudentAction";
import changeStudentsGroupAction from "../actions/changeStudentsGroupAction";

export default function studentsReducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return addStudentAction(state, action);
    case "CHANGE_STUDENTS_GROUP":
      return changeStudentsGroupAction(state, action);
    default:
      throw new Error("Invalid students reducer action");
  }
}
