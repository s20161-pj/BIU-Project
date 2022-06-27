import "./StudyTypeListPart.css";

import StudentListItem from "../StudentListItem/StudentListItem";

export default function StudyTypeListPart({ title, studentsState }) {
  return (
    <>
      <li style={{ width: "100%", marginTop: "10%" }}>
        <h4>{title}</h4>
      </li>
      {studentsState.map(({ id, name, surname, indexNumber, typeOfStudies, group }) => (
        <StudentListItem
          key={`${id}-${name}-${indexNumber}`}
          id={id}
          name={name}
          surname={surname}
          indexNumber={indexNumber}
          typeOfStudies={typeOfStudies}
          group={group}
          isChangeGroupButton={true}
        />
      ))}
    </>
  );
}
