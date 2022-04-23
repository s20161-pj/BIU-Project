import "./StudentsPage.css";
import StudentsPageComponent from "../StudentsPageComponent/StudentsPageComponent";

function StudentsPage() {
  return (
    <div className="studentsPage">
        <div className="row">
          <div className="col-7"><h3 className="box">GRUPY STUDENCKIE - BIEŻĄCY ROK AKADEMICKI</h3></div>
          <div className="col-5"><button type="button" className="btn btn-secondary customButton">Secondary</button></div>
        </div>
      <div className="row">
        <div className="col-sm"><StudentsPageComponent/></div>
        <div className="col-sm"><StudentsPageComponent/></div>
        
      </div>
    </div>
  );
}
export default StudentsPage;
