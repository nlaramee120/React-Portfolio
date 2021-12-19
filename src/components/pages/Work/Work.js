import React from 'react';
import Work1 from './assets/work-scheduler.png'
import Work2 from './assets/passwordGen.png'
import Work3 from './assets/makeMyDay.png'
import Work4 from './assets/cloudsource.png'
import "./work.css"

export default function Work() {
  return (
    <div className="container">
    
      <div class="gallery gallery__item--1">
        <img className="work-img" alt='work-scheduler' width="600" height="400" src={Work1} />
        <div className="desc">Work Scheduler</div>
      </div>
      <div class="gallery gallery__item--2">
        <img className="work-img" alt='password-generator' width="600" height="400" src={Work2} />
        <div className="desc">Password Generator</div>
      </div>
      <div class="gallery gallery__item--3">
        <img className="work-img" alt='make-my-day' width="600" height="400" src={Work3} />
        <div className="desc">Make My Day</div>
      </div>
      <div class="gallery gallery__item--4">
        <img className="work-img" alt='cloudsource' width="1000" height="200" src={Work4} />
        <div className="desc">Cloudsource</div>
      </div>
    </div>
  );
}
