import "./StudentsGroupsList.css";

import StudentsGroupItem from "../StudentsGroupItem/StudentsGroupItem";

export default function StudentsGroupComponent({ title, groups }) {
  return (
    <section className="studentsGroupComponent">
      <h2>{title}</h2>
      <ul>
        {groups.map(({ id, studentsGroupName }) => (
          <StudentsGroupItem
            key={id}
            id={id}
            studentsGroupName={studentsGroupName}
          />
        ))}
      </ul>
    </section>
  );
}
