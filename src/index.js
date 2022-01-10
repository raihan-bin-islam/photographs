import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./routes/Home";
import Overview from "./routes/Overview";
import Abstract from "./routes/Abstract";
import Landscape from "./routes/Landscape";
import Footer from "./components/Footer";

//CSS
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Home />
      </Router>
      <Overview />
      <Abstract />
      <Landscape />
      <Footer />
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
