import React from 'react';
import MyResume from '../../images/resume.jpg';

export default function Resume() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center"><span>My Resume</span></h1>
      <h3 className="d-flex justify-content-center"><span>Click to view & download</span></h3>
      <a
        href="https://docs.google.com/document/d/1eR3WibT_bjvvPM5lJ42e5onY0XusCWGr3MGLpdXHHmk/edit?usp=sharing" 
        target="_blank" rel="noreferrer">
          <img id="resume" src={MyResume} alt="resume"/>
      </a>
    </div>
  );
}