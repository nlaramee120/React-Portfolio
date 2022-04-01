import React from 'react';
import resume from './assets/myResume.pdf'
import './resume.css'

export default function Resume() {
  return (
    <div className='resume-container'>
        <h1 className='resume-header'>Resume</h1>
        <embed src={resume} 
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"></embed>
    </div>
  );
}