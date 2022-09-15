import React from "react";
import ReactDom from "react-dom";
// import pi, { doublepi, triplepi } from "./math";
import * as PI from "./math";
ReactDom.render(
  <div>
    <ul>
      <li>{PI.default}</li>
      <li>{PI.doublepi()}</li>
      <li>{PI.triplepi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
