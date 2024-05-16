import React from "react";

export default function AlertMessage(props) {
  if (props.alert) {
    setInterval(() => {
      props.setAlert("");
    }, 3000);
  }

  const showMessage = props.alert || props.loader ? true : false;

  return (
    showMessage && (
      <div className="alert-message">
        <div>
          {props.loader ? <div class="loader"></div> : ""}
          {props.alert ? <div className={props.type}>{props.alert}</div> : ""}
        </div>
      </div>
    )
  );
}
