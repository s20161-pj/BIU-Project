import "./GroupsDoingTheSubject.css";

export default function StudentsDoingTheSubject() {
  return (
    <div className="studentsDointTheSubject-page">
      <h2>
        Informacja o przypisanych grupach do realizowanych przedmiotów, np.
        GRUPA 1, GRUPA 2 realizuje przedmiot MATEMATYKA
      </h2>
      <div className="subjectName">Nazwa przedmiotu</div>
      <div className="groupsAssignedTheSubject">
        Grupy realizujące przedmiot
      </div>
    </div>
  );
}
