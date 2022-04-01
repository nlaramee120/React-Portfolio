import React from 'react';
import profileImage from './assets/IMG_1370.JPG';
import './home.css'

export default function Home() {
  return (
    <div>
      <div className='container'>
      <h1 className='header'>Nick Laramee</h1>
      <p className='bio'> 
      Hello! My name is Nick Laramee. I have a bachelor's degree in Athletic training that I obtained in May of 2021. I also just recently graduated from Northwestern's full-stack web development bootcamp, and am now looking for the perfect job to jump start my tech career! Feel free to take a look at some of the projects I have been involved in.
      </p>
      <div className="profileDiv">
      <img src={profileImage} alt="profile image" className="profile"></img>
      </div>
      </div>
    </div>
  );
}
