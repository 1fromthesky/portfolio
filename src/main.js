import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/form";
import "./scripts/projects";
import "./scripts/feedback";
import "./scripts/aside-menu";
import "./scripts/parallax-mount";
