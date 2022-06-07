import React, { useContext } from "react";

import "./StudentsPage.css";

import { useNavigate } from "react-router-dom";

import { StudentsContext } from "../../contexts/StudentsContext/StudentsContext";

import StudentsPageTable from "../../components/StudentsPageTable/StudentPageTable";

export default function StudentsPage() {
  let navigate = useNavigate();

  const { studentsState } = useContext(StudentsContext);

  return (
    <div className="students-page">
      <div className="row">
        <div className="col-7">
          <h3 className="box">LISTA STUDENTÓW - BIEŻĄCY ROK AKADEMICKI</h3>
        </div>
        <div className="col-5">
          <button
            onClick={() => navigate("/add-students")}
            className="btn btn-secondary custom-button"
          >
            Dodaj nowego studenta do listy
          </button>
        </div>
      </div>
      {studentsState !== undefined ? (
        <div className="row">
          <StudentsPageTable
            data={studentsState.stacionary}
            studyType="STUDIA STACJONARNE"
          />
          <StudentsPageTable
            data={studentsState.nonstacionary}
            studyType="STUDIA NIESTACJONARNE"
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
