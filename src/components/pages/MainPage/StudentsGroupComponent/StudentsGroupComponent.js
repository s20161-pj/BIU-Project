import "./StudentsGroupComponent.css";
import StudentsGroupItem from "../StudentsGroupItem/StudentsGroupItem";
function StudentsGroupComponent() {
  const studentsGroupsStationary = [
    { id: 1, studentsGroupName: "Grupa I"},
    { id: 2, studentsGroupName: "Grupa II"},
    { id: 3, studentsGroupName: "Grupa III"},
    { id: 4, studentsGroupName: "Grupa IV"},
  ];
  const studentsGroupsNonStationary = [
    {  id: 5, studentsGroupName: "Grupa I"},
    {  id: 6, studentsGroupName: "Grupa II"},
    {  id: 7, studentsGroupName: "Grupa III"},
    {  id: 8, studentsGroupName: "Grupa IV"},
  ];
  return (
    <div  className="studentsGroupComponent">
      <div className = "stationary">
      <h2> Studia stacjonarne</h2>
      {
        studentsGroupsStationary.map((studentsGroupsStationary)  =>  
        < StudentsGroupItem 
          key={studentsGroupsStationary.id}
          studentsGroupName = {studentsGroupsStationary.studentsGroupName}
        />)
      }
    </div>
    <div className ="non-stationary">
      <h2> Studia niestacjonarne</h2>
      {
        studentsGroupsNonStationary.map(studentsGroupsNonStationary => 
        <  StudentsGroupItem 
         key={studentsGroupsNonStationary.id}
         studentsGroupName  = {studentsGroupsNonStationary.studentsGroupName}
        />)
      }
    </div>
    </div>
  );
}
export default StudentsGroupComponent;