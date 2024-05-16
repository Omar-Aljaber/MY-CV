import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Projects />
      <Contacts />
    </div>
  );
}
