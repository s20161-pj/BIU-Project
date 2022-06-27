import "./SubjectGroupsList.css";

export default function SubjectGroupsList({ label, subjectGroups }) {
  return (
    <ul className="subject-groups-list">
      <li>{label}</li>
      {subjectGroups.map((group) => (
        <li key={`stationary-${group}`}>Grupa {group}</li>
      ))}
    </ul>
  );
}
