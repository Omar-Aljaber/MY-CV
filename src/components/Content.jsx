import React, { useState } from "react";
import developer from "../style/imgs/certificates/developer-certificate.png";
import uninow from "../style/imgs/certificates/uninow-certificate.png";
import language from "../style/imgs/certificates/language-certificate.png";
import DisplayPhoto from "./DisplayPhoto";
import { CONTENT, SKILLS } from "../constants/Language_de";

export default function Content() {
  const [display, setDisplay] = useState(false);
  const [certificateType, setCertificateType] = useState();

  const displayCertificate = (type) => {
    setCertificateType(type);
    setDisplay(true);
  };

  const leftPart = () => {
    return (
      <div className="content-left-part">
        <div className="title">{CONTENT.HOW_AM_I}</div>
        <div>{CONTENT.NAME}</div>
        <div>{CONTENT.BORN}</div>
        <div>{CONTENT.STUDY}</div>
        <div>{CONTENT.WORK}</div>
        <div className="empty-dev"></div>
        <div className="certificates">{CONTENT.CERTIFICATES}</div>
        <div className="certificates-content">
          <div>
            <button onClick={() => displayCertificate("developer")}>
              <img
                src={developer}
                className="dev-certificate"
                alt="developer"
              />
            </button>
          </div>
          <div>
            <button onClick={() => displayCertificate("germany")}>
              <img src={language} className="lang-certificate" alt="language" />
            </button>
          </div>
          <div>
            <button onClick={() => displayCertificate("uninow")}>
              <img src={uninow} className="uni-certificate" alt="uniow" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const rightPart = () => {
    return (
      <div className="content-right-part">
        <div className="some-skills">{SKILLS.SKILLS}</div>
        <div className="skills-content">
          <div className="skills-name">
            <div>{SKILLS.JAVASCRIPT}</div>
            <div>{SKILLS.TYPESCRIPT}</div>
            <div>{SKILLS.NODE_REACT}</div>
            {/* <div>{SKILLS.JAVA}</div> */}
            <div>{SKILLS.HTML_CSS}</div>
            <div>{SKILLS.DATABASE}</div>
            <div>{SKILLS.PHOTOSHOP}</div>
            <div>{SKILLS.ARABIC}</div>
            <div>{SKILLS.GERMANY}</div>
            <div>{SKILLS.ENGLISH}</div>
          </div>
          <div className="skills-procent">
            <div className="skills">
              <span className="innerline javaScript" />
            </div>
            <div className="skills">
              <span className="innerline typeScript" />
            </div>
            <div className="skills">
              <span className="innerline node-react" />
            </div>
            {/* <div className="skills">
              <span className="innerline java" />
            </div> */}
            <div className="skills">
              <span className="innerline html-css" />
            </div>
            <div className="skills">
              <span className="innerline database" />
            </div>
            <div className="skills">
              <span className="innerline photoshop" />
            </div>
            <div className="skills">
              <span className="innerline arabic" />
            </div>
            <div className="skills">
              <span className="innerline germany" />
            </div>
            <div className="skills">
              <span className="innerline english" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="content" id="about-me">
        <div className="content-black">
          <div className="content-content">
            {leftPart()}
            {rightPart()}
            {display && (
              <DisplayPhoto setDisplay={setDisplay} type={certificateType} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
