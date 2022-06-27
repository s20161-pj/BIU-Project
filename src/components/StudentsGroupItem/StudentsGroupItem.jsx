import "./StudentsGroupItem.css";
import { useNavigate } from "react-router-dom";
export default function StudentsGroupItem({
  id,
  studentsGroupName,
}) {
  let navigate = useNavigate();

  return (
    <div className="studentsGroupItem">
      <div className="studentGroupName">
        <h2>{studentsGroupName}</h2>
      </div>
      <div>
        <button
          onClick={() => navigate(`/students/group/${id}`)}
          className="btn btn-secondary custom-button"
        >
          Szczegóły
        </button>
      </div>
    </div>
  );
}
