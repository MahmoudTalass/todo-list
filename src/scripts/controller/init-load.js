import loadLocalStorage from "./load-localStorage";
import { createUser, user } from "../model/user";
import { addProjectToPage } from "./handle-projects";

function initialLoad() {
   let s = localStorage.getItem("user");
   if (localStorage.getItem("user") !== null) {
      loadLocalStorage()
   } else {
      createUser("user #1");
      addProjectToPage(user.projects[0].title, user.projects[0].id)
   }
   
   
}


export default initialLoad