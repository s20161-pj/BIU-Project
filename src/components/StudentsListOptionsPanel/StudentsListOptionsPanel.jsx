import "./StudentsListOptionsPanel.css";

export default function StudentsListOptionsPanel({ groupIndex, openModal }) {
  return (
    <aside className="students-list--options-panel">
      <article className="name-of-group">
        <h3>Nazwa grupy</h3>
        <strong>{groupIndex}</strong>
      </article>
      <button className="student-assignment" onClick={openModal}>
        Przypisz Studenta do Grupy
      </button>
    </aside>
  );
}
