import "./SubjectsList.css";

import SubjectsButton from "../SubjectsButton/SubjectsButton";

export default function SubjectsComponent({ subjects }) {
  return (
    <ul className="students-list">
      {subjects.map(({ id, subjectName }) => (
        <SubjectsButton key={id} subjectName={subjectName} />
      ))}
    </ul>
  );
}
