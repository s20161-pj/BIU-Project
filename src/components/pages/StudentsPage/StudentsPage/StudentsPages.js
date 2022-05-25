import "./StudentsPage.css";
import { StudentsPageComponentStacionary } from "../StudentsPageComponent/StudentsPageComponentStacionary";
import { StudentsPageComponentNonStacionary } from "../StudentsPageComponent/StudentsPageComponentNonStacionary";
import { useHistory } from "react-router-dom";


export default function StudentsPage() {
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
        <div className="col-sm"><StudentsPageComponentStacionary/></div>
        <div className="col-sm"><StudentsPageComponentNonStacionary/></div>
      </div>
    </div>
  );
}

