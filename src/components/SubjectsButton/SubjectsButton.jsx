import "./SubjectsButton.css";
import { useNavigate } from "react-router-dom";
export default function SubjectsButton({ subjectName }) {
  let navigate = useNavigate();
  return (
    <li className="subject-button">
      <div className="subject-button__name">
        <h2>{subjectName}</h2>
      </div>
      <div>
      <button
            onClick={() => navigate("/groupsDoingTheSubjects")}
            className="btn btn-secondary custom-button"
          >
            Szczegóły
          </button>
      </div>
    </li>
  );
}
