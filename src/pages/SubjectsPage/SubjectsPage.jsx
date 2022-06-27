import "./SubjectsPage.css";

import mock_subjects from "../../mocks/mock_subjects.json" 

import SubjectsList from "../../components/SubjectsList/SubjectsList";

export default function SubjectsPage() {
  return (
    <div className="subjects-page">
      <div className="row">
        <div className="col">
          <h3>LISTA PRZEDMIOTÓW</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SubjectsList subjects={mock_subjects.subjects} />
        </div>
      </div>
    </div>
  );
}
