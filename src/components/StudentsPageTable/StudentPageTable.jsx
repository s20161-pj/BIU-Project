import "./StudentsPageTable.css";
import { useNavigate } from "react-router-dom";
export default function StudentsPageTable({ data, studyType }) {
  let navigate = useNavigate();
  return (
    <section className="col-sm studentsPageComponent row">
      <h2 className="col">{studyType}</h2>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Numer indeksu</th>
            <th>Rodzaj studiów</th>
            <th>Grupa</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ id, name, surname, indexNumber, typeOfStudies, group }) => (
              <tr key={`${id}-${typeOfStudies}`}>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{indexNumber}</td>
                <td>{typeOfStudies}</td>
                <td>{group}</td>
                <td>
                <button
           // onClick={() => navigate(`/student-details/${id}`)}
            onClick={() => navigate(`/student-details/${typeOfStudies}/${id}`)}
            className="btn btn-secondary custom-button"
          >
            Szczegóły
          </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
}
