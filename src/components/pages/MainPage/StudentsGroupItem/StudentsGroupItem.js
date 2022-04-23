import './StudentsGroupItem.css';
function StudentsGroupItem(props) {
  const clickHandler = ()=>{
    console.log('Clicked!');
  }
  return (
    <div className="studentsGroupItem">
      <div className="studentGroupName">
        <h2>{props.studentsGroupName}</h2>
      </div>
      <div>
        <button onClick={clickHandler}>Szczegóły</button>
      </div>
    </div>
  );
}
export default StudentsGroupItem;
