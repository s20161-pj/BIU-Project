import "./StudentsGroupsList.css";

import StudentsGroupItem from "../StudentsGroupItem/StudentsGroupItem";

export default function StudentsGroupComponent({ groups }) {
  return (
    <section className="studentsGroupComponent">
      <h2> Studia stacjonarne</h2>
      <ul>
        {groups.map(({ id, studentsGroupName }) => (
          <StudentsGroupItem key={id} studentsGroupName={studentsGroupName} />
        ))}
      </ul>
    </section>
  );
}
