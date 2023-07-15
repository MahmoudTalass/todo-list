import loadLocalStorage from "./load-localStorage";
import { createUser, getProjectById } from "../model/user";
import { addProjectToPage } from "./projects-controller";

function initialLoad() {
   let s = localStorage.getItem("user");
   if (localStorage.getItem("user") !== null) {
      loadLocalStorage();
   } else {
      createUser("user #1");
      addProjectToPage(getProjectById(0).title, getProjectById(0).id);
   }
}

export default initialLoad;
