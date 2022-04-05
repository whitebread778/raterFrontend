import React from "react";
import { useState } from "react";
import SideNav from "../components/SideNav";
import SearchBar from "../components/search";
//import { Route, Routes } from 'react-router-dom';
import Announcer from "../components/announcer";
import "../styles/home.css";
import study from "../../public/study.png";

const home = () => {
  return (
    <div className="home-page">
      <h1>Welcome To Rater! </h1>
      <span>
      <text>
      <p>
        <b>Rater</b> is the first online destination for students to research BCIT
        program reviews. Our mission is to provide a safe forum to share
        classroom experiences to help fellow students make critical education
        choices.
      </p>

      <p>
        
        This is an anonymous website where students can share their classroom
        experiences. We are unable to provide any data or personal information
        about the submitter of a review.
      </p>
      <p>
        Rater is a review website founded by Johnny, Justin, Mai and Kailin in
        March, 2022 over 4 months.
      </p>
      </text>
      <img src={study} className="studyImg"/>
 
</span>
      <p>
        <b>Student Guidelines:</b>
        <br />
        <ul>
          <li>
            {" "}
            Be honest in your reviews. You want to be able to trust these
            reviews when evaluating your course options so we ask that to
            contribute in the same spirit.
          </li>
          <li>
            When you are reviewing a class and/or professor, it’s often helpful
            to provide both pros and cons. This leads to much more credible and
            constructive feedback for your peers.
          </li>
          <li>
            {" "}
            Reviews should focus specifically on the course and your learning
            experience. Do not comment on a Professor’s appearance, dress, age,
            gender or race.
          </li>
        </ul>
      </p>

    </div>
  );
};

export default home;
