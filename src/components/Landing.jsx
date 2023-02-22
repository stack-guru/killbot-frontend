import React, { Fragment } from "react";
import BacktoTop from "../Layouts/Backtotop/Backtotop";
import LandingPage from "./LandingPage/LandingPage";

const Landing = () => {
  document.querySelector("body").classList.add("landing-page", "horizontal");
  document.querySelector("body").classList.add( 'app', 'sidebar-mini', 'ltr','light-mode');
  document.querySelector("body").classList.remove("dark-mode");
  document
    .querySelector("body")
    .classList.remove("sidebar-mini", "transparent-mode", "layout-boxed");

  return (
    <Fragment>
      <LandingPage />
      <BacktoTop />
    </Fragment>
  );
};

export default Landing;
