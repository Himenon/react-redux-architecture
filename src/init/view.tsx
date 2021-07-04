import * as React from "react";
import { render } from "react-dom";
import * as Router from "../routes";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <Router.Component />
    </React.StrictMode>
  );
};

export const initialize = () => {
  const rootElement = document.getElementById("root");
  render(<RootComponent />, rootElement);
};
