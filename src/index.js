import renderPage from "./scripts/view/load-site";

import reset from "./assets/css/reset.css";
import generalPageStyle from "./assets/css/general-page.css";
import headerStyle from "./assets/css/header.css";
import sidebarStyle from "./assets/css/sidebar.css";
import projectStyle from "./assets/css/project.css";
import todoStyle from "./assets/css/todo.css";

import initialLoad from "./scripts/controller/init-load";
import { handleProjects } from "./scripts/controller/handle-projects";

renderPage();
initialLoad();
handleProjects();
