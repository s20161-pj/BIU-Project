import "./StudentsPageTable.css";

export default function StudentsPageTable({ data, studyType }) {
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
                  <button>Szczegóły</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
}
