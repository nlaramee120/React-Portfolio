import React from 'react';
import profileImage from './assets/IMG_1370.JPG';

export default function Home() {
  return (
    <div>
      <h1>Nick Laramee</h1>
      <p> 
      Hello! My name is Nick Laramee. I just recently graduated with a Bachelor's in Athletic Training but I am now currently looking to switch gears! I am currently enrolled in a coding and web development bootcamp through Northwestern, and am having a lot of fun creating new projects. Take a look at some of my work below!
      </p>
      <img src={profileImage} alt="profile image" className="profile"></img>
    </div>
  );
}
