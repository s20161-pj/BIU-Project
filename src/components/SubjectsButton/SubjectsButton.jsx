import "./SubjectsButton.css";

export default function SubjectsButton({ subjectName }) {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <li className="subject-button">
      <div className="subject-button__name">
        <h2>{subjectName}</h2>
      </div>
      <div>
        <button onClick={clickHandler}>Szczegóły</button>
      </div>
    </li>
  );
}
