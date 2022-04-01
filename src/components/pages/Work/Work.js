import React from 'react';
import Work1 from './assets/work-scheduler.png'
import Work2 from './assets/passwordGen.png'
import Work3 from './assets/makeMyDay.png'
import Work4 from './assets/cloudsource.png'
import "./work.css"

export default function Work() {
  return (


    <div className = 'flex-container'>

        <div class='item'>
          <a href="https://nlaramee120.github.io/day-planner/" target="_blank">
            <img className="work-img" alt='work-scheduler' src={Work1} /></a><h3>Work Scheduler</h3><p className='desc'>A simple calendar app that uses local storage to help plan your day.</p></div>
        <div class='item'>
          <a href="https://nlaramee120.github.io/Password-Generator/" target="_blank">
          <img className="work-img" alt='password-generator' src={Work2} /></a><h3>Password Generator</h3><p className='desc'>Password Generator allows user to choose character
                          specifications, in which after, a random password is
                          generated.</p>
        </div>
        <div class='break'></div>
        <div class='item'>
        <a href="https://nlaramee120.github.io/Make-My-Day/" target="_blank">
        <img className="work-img" alt='make-my-day' src={Work3} /></a><h3>Make My Day</h3><p className='desc'>Make My Day is an application that allows users to search for social, sport, or music events by city or 
                          user's current location using the SeatGeak API.</p>
        </div>
        <div class='item'>
          <a href="https://sheltered-sierra-22318.herokuapp.com/" target="_blank">
           <img className="work-img" alt='cloudsource' width="1000" height="200" src={Work4} /></a><h3>CloudSource</h3><p className='desc'>A simple job board application where employers can search through a database of potential developers and filter through information about them to suit their needs for their projects.</p>
        </div>



    </div>

    // <div className="container">

    //   <h1>Work</h1>
    
    // <a href="https://nlaramee120.github.io/day-planner/" target="_blank">
    //   <div class="gallery gallery__item--1">
    //     <img className="work-img" alt='work-scheduler' width="600" height="400" src={Work1} />
    //     <div className="desc">Work Scheduler</div>
    //   </div>
    //   </a>
    //   <a href="https://nlaramee120.github.io/Password-Generator/" target="_blank">
    //   <div class="gallery gallery__item--2">
    //     <img className="work-img" alt='password-generator' width="600" height="400" src={Work2} />
    //     <div className="desc">Password Generator</div>
    //   </div>
    //   </a>
    //   <a href="https://nlaramee120.github.io/Make-My-Day/" target="_blank">
    //   <div class="gallery gallery__item--3">
    //     <img className="work-img" alt='make-my-day' width="600" height="400" src={Work3} />
    //     <div className="desc">Make My Day</div>
    //   </div>
    //   </a>
    //   <a href="https://sheltered-sierra-22318.herokuapp.com/" target="_blank">
    //   <div class="gallery gallery__item--4">
    //     <img className="work-img" alt='cloudsource' width="1000" height="200" src={Work4} />
    //     <div className="desc">Cloudsource</div>
    //   </div>
    //   </a>
    // </div>
  );
}
