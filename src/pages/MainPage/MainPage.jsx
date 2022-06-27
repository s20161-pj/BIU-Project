import "./MainPage.css";

import mock_students_groups from "../../mocks/mock_students_grups.json";

import StudentGroupsList from "../../components/StudentsGroupsList/StudentsGroupsList";

export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="row">
        <div className="col">
          <h3>GRUPY STUDENCKIE - BIEŻĄCY ROK AKADEMICKI</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <StudentGroupsList
            title="Studia Stacjonarne"
            groups={mock_students_groups.stationary}
          />
          <StudentGroupsList
            title="Studia Niestacjonarne"
            groups={mock_students_groups.nonstationary}
          />
        </div>
      </div>
    </div>
  );
}
