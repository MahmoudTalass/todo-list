import loadLocalStorage from "./load-localStorage";
import { createUser } from "../model/user";

function initialLoad() {
   let s = localStorage.getItem("user");
   if (localStorage.getItem("user") !== null) {
      loadLocalStorage()
   } else {
      createUser("user #1");
   }
   
   
}


export default initialLoad