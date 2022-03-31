import React from 'react';
import resume from './assets/myResume.pdf'

export default function Resume() {
  return (
    <div>
        <h1>Resume</h1>
        <a
          id="resume"
          class="first links"
          href={resume}
          target="_blank"
          >Click Here!</a
        >
    </div>
  );
}