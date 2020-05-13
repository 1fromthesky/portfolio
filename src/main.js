import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
// import "./scripts/feedback-slide";
import "./scripts/form";
import "./scripts/projects";
import "./scripts/feedback";
import "./scripts/parallax-mount";
import "./scripts/parallax-buddha";
