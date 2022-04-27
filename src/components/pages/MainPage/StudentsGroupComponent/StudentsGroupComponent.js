import "./StudentsGroupComponent.css";
import StudentsGroupItem from "../StudentsGroupItem/StudentsGroupItem";
function StudentsGroupComponent() {
  const studentsGroups = [
    { studentsGroupName: "Grupa I", typStudiow: 1 },
    { studentsGroupName: "Grupa II", typStudiow: 2 },
    { studentsGroupName: "Grupa III", typStudiow: 1 },
    { studentsGroupName: "Grupa IV", typStudiow: 2},
  ];
  return (
    <div  className="studentsGroupComponent">
      <h2> Studia ........</h2>
      {
        studentsGroups.map(studentGroup => 
        <  StudentsGroupItem 
         studentsGroupName  = {studentGroup.studentsGroupName}
        />)
      }
    </div>
  );
}
export default StudentsGroupComponent;