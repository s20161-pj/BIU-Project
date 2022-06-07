import "./StudentPersonalDataTable.css";

export default function StudentPersonalDataTable() {
  return (
    <section className="col-sm studentPersonalDataTable row">
      <h2 className="col">Dane osobowe studenta</h2>
      <table>
        <thead>
          <tr><th>Imię: </th></tr>
          <tr><th>Nazwisko: </th></tr>
          <tr><th>Numer indeksu: </th></tr>
          <tr><th>Rodzaj studiów: </th></tr>
          <tr><th>Grupa: </th></tr>
          <tr><th>Lista realizowanych przedmiotów: </th></tr>
          
        </thead>
      </table>
    </section>
  );
}
