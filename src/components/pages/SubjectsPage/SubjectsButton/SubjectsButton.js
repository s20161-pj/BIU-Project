import './SubjectsButton.css';
function SubjectsButton(props) {
  const clickHandler = ()=>{
    console.log('Clicked!');
  }
  return (
    <div className="subjectButton">
      <div className="subjectButtonName">
        <h2>{props.subjectName}</h2>
      </div>
      <div>
        <button onClick={clickHandler}>Szczegóły</button>
      </div>
    </div>
  );
}
export default SubjectsButton;
