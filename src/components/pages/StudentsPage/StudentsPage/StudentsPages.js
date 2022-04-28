import "./StudentsPage.css";
import StudentsPageComponent from "../StudentsPageComponent/StudentsPageComponent";
import { useHistory } from "react-router-dom";


function StudentsPage() {
  let history = useHistory();

  function clickHandler() {
    history.push('/add-students');
  }
  
  return (
    <div className="studentsPage">
        <div className="row">
          <div className="col-7"><h3 className="box">GRUPY STUDENCKIE - BIEŻĄCY ROK AKADEMICKI</h3></div>
          <div className="col-5"><button onClick={clickHandler}  type="button" className="btn btn-secondary customButton">Dodaj nowego studenta do listy</button></div>
        </div>
      <div className="row">
        <div className="col-sm"><StudentsPageComponent/></div>
        <div className="col-sm"><StudentsPageComponent/></div>
  
      </div>
    </div>
  );
}
export default StudentsPage;
