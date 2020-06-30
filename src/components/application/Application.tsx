import * as React from "react";
import { Details } from "../details/Details";
import "./Application.scss";
import Tree from '../Tree';

export function Application() {
  return (
    <div className="Application">
      <div className="top">
        <div className="logo" />
      </div>
      <div className="welcome">FuseBox ❤️ JSX/TSX </div>

      <Details />
      <Tree />
    </div>
  );
}
