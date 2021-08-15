import React from "react";
import Header from "./Header";
import arrow_down from "../images/icon-arrow-down.svg";
function SessionHome() {
  return (
    <div className="session-home">
      <Header />
      <div className="session-home__content">
        <h1 className="session-home__content__title">We are creatives</h1>
        <img className="session-home__content__img" src={arrow_down} />
      </div>
    </div>
  );
}

export default SessionHome;
