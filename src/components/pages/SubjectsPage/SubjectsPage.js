import SubjectsComponent from "./SubjectsComponent/SubjectsComponent";
import "./SubjectsPage.css";
function SubjectsPage(){
    return(
<div className="subjectsPage">
<div className="row">
        <div className="col">
          <h3>LISTA PRZEDMIOTÓW</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SubjectsComponent />
        </div>
      </div> 
</div>
    );
}
export default SubjectsPage;