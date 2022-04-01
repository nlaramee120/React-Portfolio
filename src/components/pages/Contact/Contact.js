import React from 'react';
import './contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact-header'>Contact Me</h1>
        <ul className='contact-ul'>
          <li className='contact-li'>nlaramee120@aol.com</li>
          <li className='contact-li'>(217)454-5663</li>
          <a href="https://github.com/nlaramee120" target="_blank">
            <li className='contact-li links'>Github</li>
          </a>
          <a
            href="https://www.linkedin.com/in/nick-laramee-90386520b/"
            target="_blank"
          >
            <li className='contact-li links'>LinkedIn</li>
          </a>
        </ul>
    </div>
  );
}
