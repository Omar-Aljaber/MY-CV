import React from "react";
import developer from "../style/imgs/certificates/developer-certificate.png";
import germany from "../style/imgs/certificates/language-certificate.png";
import uninow from "../style/imgs/certificates/uninow-certificate.png";

export default function Display_Photo(props) {
  const { setDisplay, type } = props;

  let certificate;
  switch (type) {
    case "developer":
      certificate = developer;
      break;
    case "germany":
      certificate = germany;
      break;
    case "uninow":
      certificate = uninow;
      break;
    default:
  }

  return (
    <div className="display-certificate">
      {/* <button className="download" onClick={() => {}}>
        Download
      </button> */}
      <button className="close-button" onClick={() => setDisplay(false)}>
        X
      </button>
      <div>
        <img src={certificate} alt="certificate" />
      </div>
    </div>
  );
}
