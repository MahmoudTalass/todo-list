import loadLocalStorage from "./load-localStorage";
import { createUser } from "../model/user";

function initialLoad() {
   createUser("mahmoud");
}


export default initialLoad