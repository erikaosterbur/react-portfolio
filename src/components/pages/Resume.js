import React from 'react';
import MyResume from '../../images/resume.jpg';

export default function Resume() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center"><span>My Resume</span></h1>
      <a
        href="https://drive.google.com/file/d/1I2zj777ZyLxeEKUUFizDtAgWahoDtMzt/view?usp=sharing" 
        target="_blank" rel="noreferrer">
          <img id="resume" src={MyResume} alt="resume"/>
      </a>
    </div>
  );
}