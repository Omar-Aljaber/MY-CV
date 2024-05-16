import React from "react";
// import bmw_logo from "../style/imgs/BMW-Logo.png";
import UniNow_logo from "../style/imgs/UniNow-Logo.jpg";
import MyChat_Logo from "../style/imgs/MyChat-Logo.png";
import MyDoctor_Logo from "../style/imgs/MyDoctor-Logo.png";
import Blog_Logo from "../style/imgs/Blog-Logo.png";
import Fragezeichen from "../style/imgs/Fragezeichen.png";
import { BLOGS_APP, MY_CHAT, MY_DOCTOR, UNINOW } from "../constants/Constants";
import {
  blogs,
  BMW,
  MyChatApp,
  MyDoctorApp,
  UniNow,
  LOGOS,
} from "../constants/Language_de";

export default function Projects() {
  const leftPart = () => {
    return (
      <div className="projects-left-part">
        <div className="first-project">
          <div className="logo-area bmw-logo-name">
            {/* <img src={bmw_logo} alt="bmw_Logo" className="bmw-logo"/> */}
            <div>{LOGOS.BMW_LOGO}</div>
            <div className="bmw-private">Private</div>
          </div>
          <div className="description bmw">
            <span className="des-title">{BMW.TITLE}</span>
            <span className="des-content">{BMW.CONTENT}</span>
          </div>
        </div>
        <div
          className="second-project"
          onClick={() => window.open(MY_DOCTOR, "_blank")}
        >
          <div className="logo-area">
            <img
              src={MyDoctor_Logo}
              alt="MyDoctor_Logo"
              className="mydoctor-logo"
            />
          </div>
          <div className="description">
            <span className="des-title">{MyDoctorApp.TITLE}</span>
            <span className="des-content">{MyDoctorApp.CONTENT}</span>
          </div>
        </div>
        <div
          className="third-project"
          onClick={() => window.open(BLOGS_APP, "_blank")}
        >
          <div className="logo-area">
            <img
              src={Blog_Logo}
              alt="Blog_Logo"
              className="blog-logo"
              width="170"
            />
          </div>
          <div className="description">
            <span className="des-title">{blogs.TITLE}</span>
            <span className="des-content">{blogs.CONTENT}</span>
          </div>
        </div>
      </div>
    );
  };

  const rightPart = () => {
    return (
      <div className="projects-right-part">
        <div
          className="fourth-project"
          onClick={() => window.open(MY_CHAT, "_blank")}
        >
          <div className="logo-area">
            <img src={MyChat_Logo} alt="MyChat_Logo" className="mychat-logo" />
          </div>
          <div className="description">
            <span className="des-title">{MyChatApp.TITLE}</span>
            <span className="des-content">{MyChatApp.CONTENT}</span>
          </div>
        </div>
        <div
          className="fifth-project"
          onClick={() => window.open(UNINOW, "_blank")}
        >
          <div className="logo-area uninow-name">
            <img src={UniNow_logo} alt="UniNow_logo" className="uninow-logo" />
            {/* {LOGOS.UNINOW_LOGO} */}
          </div>
          <div className="description">
            <span className="des-title">{UniNow.TITLE}</span>
            <span className="des-content">{UniNow.CONTENT}</span>
          </div>
        </div>
        <div className="sixth-project">
          <div className="logo-area">
            <img src={Fragezeichen} alt="Fragezeichen" className="-logo" />
          </div>
          <div className="description">
            <span className="des-title">{LOGOS.YOUR_PROJECT}</span>
            <span className="des-content">...</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="projects" id="my-works">
        <div className="black">
          {/* <div className="my-projects">My Projects</div> */}
          <div className="projects-flex">
            <span className="mobile-test-vertical">
              Some &nbsp;Projects
            </span>
            {leftPart()}
            <span className="test-vertical">
              S o m e &nbsp; P r o j e c t s
            </span>
            {rightPart()}
          </div>
        </div>
      </div>
    </div>
  );
}
