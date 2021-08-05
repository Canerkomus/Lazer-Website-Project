import React from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Applications from "./components/applications/Applications";
import Machines from "./components/machines/Machines";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="sections">
        <Home />
        <About />
        <Applications />
        <Machines />
        <Contact />
      </div>
    </div>
  );
}
