import { fusebox, sparky } from "fuse-box";

class Context {
  runServer;
  getConfig = () =>
    fusebox({
      target: "browser",
      entry: "src/index.tsx",
      webIndex: {
        template: "src/index.html"
      },
      cache: true,
      devServer: this.runServer,
      /**
       * Congiure the directories for resources imported as modules in code here.
       * e.g. import * as src from '../../assets/logo.svg';
       * 
       * Tip: Create a .d.ts file with 'declare module "*.svg";' to prevent TS from
       * complaining about importing files with non-js extensions. Add for every
       * type of file you import.
       */
      resources: {
        resourceFolder: "resources", // Where files are copied to when referenced.
        resourcePublicRoot: "resources" // How files are referenced in JS imports, CSS and HTML.
      },
      /**
       * Configure the directories for resources referenced in CSS/SASS/LESS here.
       * e.g. background-image: url("../../assets/logo.svg");
       */
      stylesheet: {
        resourceFolder: "resources", // Inherits from 'resources'. Be sure to update 'resourcePublicRoot' if you change it.
        resourcePublicRoot: "resources" // By default, is resources/images, doesn't inherit from 'resources', so needs to be set explicitly.
      }
    });
}
const { task } = sparky<Context>(Context);

task("default", async ctx => {
  ctx.runServer = true;
  const fuse = ctx.getConfig();
  await fuse.runDev();
});

task("preview", async ctx => {
  ctx.runServer = true;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});
task("dist", async ctx => {
  ctx.runServer = false;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});
