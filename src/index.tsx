import * as React from "react";
import * as ReactDOM from "react-dom";
import { Application } from "./components/application/Application";

import { split } from './split/initSplit';

const waitForSplit = async () => {
    await split.ready();
    console.log('split ready');
};

waitForSplit();

ReactDOM.render(<Application />, document.getElementById("root"));
