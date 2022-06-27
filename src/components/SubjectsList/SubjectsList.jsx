import "./SubjectsList.css";

import SubjectsButton from "../SubjectsButton/SubjectsButton";

export default function SubjectsList({ subjects }) {
  return (
    <ul className="subjects-list">
      {subjects.map(({ id, subjectName }) => (
        <SubjectsButton
          key={`${id}-${subjectName}`}
          subjectName={subjectName}
        />
      ))}
    </ul>
  );
}
