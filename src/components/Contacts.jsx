import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AlertMessage from "./AlertMessage";
import { MY_WEBSITE, MY_GITHUB, MY_LINKEDIN } from "../constants/Constants";
import {
  CONTACTS,
  CONTACTS_NAMES,
  CONTACTS_VALUE,
} from "../constants/Language_de";

export default function Contacts() {
  const form = useRef();

  // const [ appointment, setAppointment ] = useState(false);
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState();
  const [loader, setLoader] = useState(false);

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      emailjs
        .sendForm(
          "service_5fvzhuj",
          "template_btcfjv5",
          form.current,
          "J6XmsnDrmxtcsKN9g"
        )
        .then(
          (response) => {
            setMessage("");
            setName("");
            setEmail("");
            setLoader(false);
            setAlertType("SUCCESS");
            setAlert("Your Email sent succeefully");
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
            setAlertType("FAILED");
            setAlert("Your Email was not sent succeefully! Please try again");
          }
        );
    } catch (error) {
      setLoader(false);
      console.log("FAILED...", error);
      setAlertType("FAILED");
      setAlert("Your Email was not sent succeefully! Please try again");
    }
  };

  const leftPart = () => {
    return (
      <div className="contacts-left-part">
        <div className="my-contacts">{CONTACTS_NAMES.CONTACTS}</div>
        <div>
          <div className="contacts-left-part-names">
            <div>{CONTACTS_NAMES.PHONE}</div>
            <div>{CONTACTS_NAMES.EMAIL}</div>
            <div>{CONTACTS_NAMES.WEBSITE}</div>
            <div>{CONTACTS_NAMES.GITHUB}</div>
            <div>{CONTACTS_NAMES.LINKEDIN}</div>
            {/* <div>{CONTACTS_NAMES.APPOINTMENT}</div> */}
          </div>
          <div className="contacts-left-part-values">
            <div>{CONTACTS_VALUE.PHONE}</div>
            <div>{CONTACTS_VALUE.EMAIL}</div>
            <div>
              <a href={MY_WEBSITE} target="_blank" rel="noreferrer">
                {CONTACTS_VALUE.WEBSITE}
              </a>
            </div>
            <div>
              <a href={MY_GITHUB} target="_blank" rel="noreferrer">
                {CONTACTS_VALUE.GITHUB}
              </a>
            </div>
            <div>
              <a href={MY_LINKEDIN} target="_blank" rel="noreferrer">
                {CONTACTS_VALUE.LINKEDIN}
              </a>
            </div>
            {/* <div>
              <button 
                className="choose-time-button"
                onClick={() => setAppointment(!appointment)} >
                {CONTACTS_VALUE.APPOINTMENT}
              </button>
            </div> */}
          </div>
        </div>
        {/* {appointment && <div className="choose-time-message">
          <div className="appointment">
            <div>Hello Omar, </div>
            <div className="i-would">I would like to make an appointment</div>
            <div>
              with you on <input placeholder="00.00" /> at{" "}
              <input placeholder="00:00" />{" "}
            </div>
            <button 
              onClick={() => setAppointment(!appointment)}>
                send
            </button>
          </div>
        </div>} */}
      </div>
    );
  };

  const rightPart = () => {
    return (
      <div className="contacts-right-part">
        <div className="write-message">{CONTACTS.WRITE_MESSAGE}</div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="user_name"
              className="left"
              value={name}
              onChange={onNameChange}
              placeholder="Name..."
              required
            />
            <input
              type="email"
              name="user_email"
              className="right"
              value={email}
              onChange={onEmailChange}
              placeholder="Email..."
              required
            />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={onMessageChange}
            placeholder="Message..."
            required
          ></textarea>
          <button>{CONTACTS.SEND_MESSAGE}</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {
        <AlertMessage
          setAlert={setAlert}
          alert={alert}
          loader={loader}
          setLoader={setLoader}
          type={alertType}
        />
      }
      <div className="contacts" id="contacts">
        <div className="contacts-black">
          <div className="contacts-content">
            {leftPart()}
            {rightPart()}
          </div>
        </div>
        <footer>
          <div>&copy; by Omar Aljaber. &nbsp;&nbsp;</div>
          <a href="/impressum" target="_blank">Impressum</a>
        </footer>
      </div>
    </div>
  );
}
