
import "./StudentsPageComponent.css";
import data from  "./mock-data-stacionary.json";
import React, { useState } from "react";

export function StudentsPageComponentStacionary() {
  const [studentsData, setStudentsData]=useState(data);
  const [formState, setFormState] = useState({ name: "", surname: "", indexNumber: "", typeOfStudies: "", group: ""});

  return (
    <div className="studentsPageComponent">
      <div className="row">
        <div className="col">STUDIA STACJONARNE</div>
        <div className="w-100">
        <ul className="list-group">
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
          {studentsData.map((studentData)=>(
          <tr>
            <td>{studentData.name}</td>
            <td>{studentData.surname}</td>
            <td>{studentData.indexNumber}</td>
            <td>{studentData.typeOfStudies}</td>
            <td>{studentData.group}</td>
            <button>Szczegóły</button>
          </tr>))}
          
        </tbody>
      </table>
</ul>
</div>
      </div>
    </div>
    
  );
}
;
