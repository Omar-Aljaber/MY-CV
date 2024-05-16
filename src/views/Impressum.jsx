import React from "react";
import { CONTACTS_NAMES, CONTACTS_VALUE } from "../constants/Language_de";

export default function Impressum() {
  return (
    <div className="impressum">
        <h1>{CONTACTS_NAMES.IMPRESSUM}</h1>
        <p>
            {CONTACTS_VALUE.NAME}
            <br/>
            {CONTACTS_VALUE.STREET}
            <br/>
            {CONTACTS_VALUE.CITY}
        </p>
        <h2>{CONTACTS_NAMES.CONTACTS}</h2>
        <p>
            Telefon: {CONTACTS_VALUE.PHONE}
            <br/>
            E-Mail: {CONTACTS_VALUE.EMAIL}
        </p>
    </div>
  );
}
