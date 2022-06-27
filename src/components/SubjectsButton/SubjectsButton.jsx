import "./SubjectsButton.css";

import { useNavigate } from "react-router-dom";

export default function SubjectsButton({ subjectName }) {
  let navigate = useNavigate();

  const subjectSlugParam = subjectName.toLowerCase().replace(/ /g, "-");

  return (
    <li className="subject-button">
      <h2>{subjectName}</h2>
      <button
        className="btn btn-secondary"
        onClick={() => navigate(`/subjects/groups/${subjectSlugParam}`)}
      >
        Szczegóły
      </button>
    </li>
  );
}
