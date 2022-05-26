import React, { useContext } from "react";

import "./AddStudentForm.css";

import { useForm } from "react-hook-form";

import useId from "../../hooks/useId";
import useTranslatedTypeOfStudy from "../../hooks/useTranslatedTypeOfStudy";

import { StudentsContext } from "../../contexts/StudentsContext/StudentsContext";

export default function AddStudentForm() {
  const { register, handleSubmit } = useForm();
  const { studentsState, studentsDispatch } = useContext(StudentsContext);

  const { generateNewId } = useId();
  const { translateTypeOfStudy } = useTranslatedTypeOfStudy();

  const createStudent = (
    { name, surname, indexNumber, typeOfStudies, group },
    id
  ) => ({
    id: id,
    name: name,
    surname: surname,
    indexNumber: indexNumber,
    typeOfStudies: translateTypeOfStudy(typeOfStudies),
    group: group,
  });

  const onSubmit = (data) => {
    studentsDispatch({
      type: "ADD_STUDENT",
      typeOfStudies: data.typeOfStudies,
      newStudent: createStudent(
        data,
        generateNewId(studentsState[data.typeOfStudies])
      ),
    });
  };

  return (
    <div className="studentForm">
      <h2>FORMULARZ</h2>
      <form className="addStudentForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Imię
          <input type="text" {...register("name")} />
        </label>

        <label>
          Nazwisko
          <input type="text" {...register("surname")} />
        </label>

        <label>
          Numer Indeksu
          <input type="text" {...register("indexNumber")} />
        </label>

        <label>
          Tryb studiów
          <select {...register("typeOfStudies")}>
            <option value="" disabled>
              Wybierz Opcje
            </option>
            <option value="stacionary">Stacjonarne</option>
            <option value="nonstacionary">Niestacjonarne</option>
          </select>
        </label>

        <label>
          Grupa
          <select defaultValue={""} {...register("group")}>
            <option value="" disabled>
              Wybierz Opcje
            </option>
            <option value="I">Grupa I</option>
            <option value="II">Grupa II</option>
            <option value="III">Grupa III</option>
            <option value="IV">Grupa IV</option>
          </select>
        </label>

        <input type="submit" value="ANULUJ" />
        <input type="submit" value="ZAPISZ" />
      </form>
    </div>
  );
};
