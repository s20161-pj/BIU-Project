import "./MainPage.css";
import StudentGroupComponent from "../StudentsGroupComponent/StudentsGroupComponent";
function MainPage() {
  return (
    <div className="mainPage">
    <div className="row">
        <div className="col">
          <h3>GRUPY STUDENCKIE - BIEŻĄCY ROK AKADEMICKI</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <StudentGroupComponent />
        </div>
      </div> 
    </div>
  );
}
export default MainPage;
