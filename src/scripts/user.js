import { createProject } from "./project";
import users from "./user-controller";

let userIds = 0;

const User = (name) => {
   let state = {
      name: name,
      id: userIds++,
      projects: [addProject('default')]
   }

   return {
      state
   }
};

function createUser(name) {
   users.push(User(name))
}

function addProject(name) {
   users[0].push(createProject(name))
}

export default createUser;
