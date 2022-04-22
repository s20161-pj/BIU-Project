
import './MainPage.css';
import React from 'react';
import StudentGroupComponent from './StudentGroupComponent/StudentGroupComponent';
function MainPage() {
  return (
    <div className="mainPage">
      <div className="row">
        <div className="col">
          <h3>GRUPY STUDENCKIE - BIEŻĄCY ROK AKADEMICKI</h3>
        </div>
      </div>
      <div className="row">
        <div className="col"><StudentGroupComponent></StudentGroupComponent></div>
        <div className="col"><StudentGroupComponent></StudentGroupComponent></div>
      </div>
    </div>
  );
}
export default MainPage;
