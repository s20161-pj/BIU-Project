import SubjectsButton from "../SubjectsButton/SubjectsButton";
function SubjectsComponent() {
  const listOfSubjects = [
    { id: 1, subjectName: "NAZWA I"},
    { id: 2, subjectName: "NAZWA II"},
    { id: 3, subjectName: "NAZWA III"},
    { id: 4, subjectName: "NAZWA IV"},
    { id: 5, subjectName: "NAZWA V"},
    { id: 6, subjectName: "NAZWA VI"},
    { id: 7, subjectName: "NAZWA VII"},
    { id: 8, subjectName: "NAZWA VIII"},
   
   
  ];
 
  return (
    <div  className="studentsGroupComponent">
   
      {
        listOfSubjects.map((listOfSubjects)  =>  
        <SubjectsButton
          key={listOfSubjects.id}
          subjectName = {listOfSubjects.subjectName}
        />)
      }
    </div>
    
 
  );
}
export default SubjectsComponent;