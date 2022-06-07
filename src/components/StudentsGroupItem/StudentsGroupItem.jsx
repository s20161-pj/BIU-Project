import "./StudentsGroupItem.css";
import { useNavigate } from "react-router-dom";
export default function StudentsGroupItem({ studentsGroupName }) {
  let navigate = useNavigate();
  return (
    <div className="studentsGroupItem">
      <div className="studentGroupName">
        <h2>{studentsGroupName}</h2>
      </div>
      <div>
      <button
            onClick={() => navigate("/students-listOfGroup")}
            className="btn btn-secondary custom-button"
          >
            Szczegóły
          </button>
      </div>
    </div>
  );
}
