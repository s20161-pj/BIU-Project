import "./StudentsGroupItem.css";

export default function StudentsGroupItem({ studentsGroupName }) {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <div className="studentsGroupItem">
      <div className="studentGroupName">
        <h2>{studentsGroupName}</h2>
      </div>
      <div>
        <button onClick={clickHandler}>Szczegóły</button>
      </div>
    </div>
  );
}
