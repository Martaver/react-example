import * as React from "react";
import { Autocomplete } from '@material-ui/lab';

import "./Details.scss";
import { TextField } from '@material-ui/core';

import * as src from '../../assets/cog.png';

console.log('See the linked resource gets loaded as a url: ', src);

export function Details() {
  return (
    <div className="Details">
      <div className="repo-link">
        <a href="https://github.com/fuse-box/react-example" target="_blank">
          https://github.com/fuse-box/react-example
        </a>
      </div>

      <p>
        The logo top is defined in SASS. Here's an example of a resource linked image:
      </p>

      <img {...{ src }} width={'50px'} />

      <p>
        Here's material-ui all linked up:
      </p>

      <Autocomplete options={[]}
        renderInput={props => (
          <TextField {...props} />
        )} />

      <div className="try-updating">
        Try changing any of the components, You will get an isntant update
        without a page refresh
      </div>

      <div className="hint">
        Did you know that it doesn't matter how many components you have 5 or
        5000, FuseBox is smart at detecting the changes you make. You will get
        an instant update guaranteed!
      </div>

      <div className="fork">
        Fork this{" "}
        <a href="https://codesandbox.io/s/github/fuse-box/react-example">
          sandbox
        </a>{" "}
        and share the link with your friends and watch you code live!
      </div>
    </div>
  );
}
