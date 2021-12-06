import React from 'react';
import MyResume from '../../images/resume.jpg';

export default function Resume() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center"><span>My Resume</span></h1>
      <a
        href="https://drive.google.com/file/d/1irPWh0fKR2mZgWZDDf83BG1uqgB1wxSs/view?usp=sharing" 
        target="_blank" rel="noreferrer">
          <img id="resume" src={MyResume} alt="resume"/>
      </a>
    </div>
  );
}