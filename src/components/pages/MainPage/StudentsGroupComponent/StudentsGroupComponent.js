import "./StudentsGroupComponent.css";
import StudentsGroupItem from "../StudentsGroupItem/StudentsGroupItem";
function StudentsGroupComponent() {
  const studentsGroups = [
    { studentsGroupName: "Grupa I" },
    { studentsGroupName: "Grupa II" },
    { studentsGroupName: "Grupa III" },
    { studentsGroupName: "Grupa IV" },
  ];
  return (
    <div className="studentsGroupComponent">
      <h2> Studia ........</h2>
      <StudentsGroupItem
        studentsGroupName={studentsGroups[0].studentsGroupName}
      />
      <StudentsGroupItem
        studentsGroupName={studentsGroups[1].studentsGroupName}
      />
      <StudentsGroupItem
        studentsGroupName={studentsGroups[2].studentsGroupName}
      />
      <StudentsGroupItem
        studentsGroupName={studentsGroups[3].studentsGroupName}
      />
    </div>
  );
}
export default StudentsGroupComponent;
//var studentGroups = [
// { id: 1, groupName: "Grupa 1" },
// { id: 2, groupName: "Grupa 2" },
// ]

// return
// {studentGroups.map(studentGroup => (
//  <StudentGroupItem studentGroup={studentGroup} />
// ))}

// return (
//   <div className="studentGrupComponent">
//     <div className="row">
//       <div className="col">STUDIA STACJONARNE</div>
//       <div className="w-100">
//         <div className="col">
//           <div className="row">
//             <div className="col-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Special title treatment</h5>
//                   <p className="card-text">
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Special title treatment</h5>
//                   <p className="card-text">
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
