import "./StudentPersonalDataTable.css";

export default function StudentPersonalDataTable({student}) {
  return (
    <section className="col-sm studentPersonalDataTable row">
      <h2 className="col">Dane osobowe studenta</h2>
      <table>
        <thead>
          <tr><th>Imię: {student.name}</th></tr>
          <tr><th>Nazwisko: {student.surname}</th></tr>
          <tr><th>Numer indeksu: {student.indexNumber}</th></tr>
          <tr><th>Rodzaj studiów: {student.typeOfStudies}</th></tr>
          <tr><th>Grupa: {student.group}</th></tr>
        </thead>
      </table>
    </section>
  );
}
