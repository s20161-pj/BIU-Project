import React, { useState } from "react";
import "./AddStudentForm.css";
const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [typeOfStudies, setTypeOfStudies] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

  };
  
    return (
    <div className="studentForm">
      <h2>FORMULARZ</h2>
      <form className="addStudentForm" onSubmit={e => handleSubmit(e)}>
        <label>Imię</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Nazwisko</label>
        <input
          type="text"
          name="surname"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label>Numer Indeksu</label>
        <input
          type="text"
          name="indexNumber"
          required
          value={indexNumber}
          onChange={(e) => setIndexNumber(e.target.value)}
        />
        <label>Tryb studiów</label>
        <select defaultValue={typeOfStudies} name="typeOfStudies" value={typeOfStudies}
          onChange={(e) => setTypeOfStudies(e.target.value)}>    
          <option value="" disabled>Wybierz Opcje</option>
          <option value="stationary">Stacjonarne</option>
          <option value="non-stationary">Niestacjonarne</option>
        </select>
        <label>Grupa</label>
        <select defaultValue={group} name="group" value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="" disabled>Wybierz Opcje</option>
          <option value="group-one">Grupa I</option>
          <option value="group-two">Grupa II</option>
          <option value="group-three">Grupa III</option>
          <option value="group-four">Grupa IV</option>
        </select>
        <button className="btn btn-danger">ANULUJ</button>
        <button onClick={handleSubmit}>ZAPISZ</button>
      </form>
    </div>
  );
};
export default AddStudentForm;
