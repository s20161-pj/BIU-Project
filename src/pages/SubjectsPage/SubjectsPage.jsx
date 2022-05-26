import "./SubjectsPage.css";

import { subjects } from "../../consts/subjects";

import SubjectsList from "../../components/SubjectsList/SubjectsList";

export default function SubjectsPage() {
  return (
    <div className="subjectsPage">
      <div className="row">
        <div className="col">
          <h3>LISTA PRZEDMIOTÓW</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SubjectsList subjects={subjects} />
        </div>
      </div>
    </div>
  );
}
