import { createProject } from "./project";

let users = [];

let userIds = 0;

const User = (name) => {
   let state = {
      name: name,
      id: userIds++,
      projects: [],
   };

   return {
      username: state.name,
      userId: state.id,
      projects: state.projects
   };
};

function createUser(name) {
   users.push(User(name));
   console.log(users);
   let userProjects = users[0].state.projects;
   userProjects.push(createProject("default"));
}

function addProject(name) {
   let userProjects = users[0].state.projects;
   userProjects.push(createProject(name));
}

export default createUser;
export { users };
