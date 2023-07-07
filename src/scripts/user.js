import { createProject } from "./project";

let user;

let userIds = 0;

const User = (name) => {
   let state = {
      name: name,
      id: userIds++,
      projects: []
   };

   return {
      username: state.name,
      userId: state.id,
      projects: state.projects,
   };
};

function createUser(name) {
   user = User(name);
   let userProjects = user.projects;
   userProjects.push(createProject("default"));
}

function addProject(title) {
   let userProjects = user.projects;
   userProjects.push(createProject(title));
}

function removeProject(projectId) {
   if (projectId === 0) return;

   let projectIndex = user.projects.findIndex(
      (project) => project.id === projectId
   );
   user.projects.splice(projectIndex, 1);
}

function editProjectTitle(projectId, newTitle) {
   let projectIndex = user.projects.findIndex(
      (project) => project.id === projectId
   );
   user.projects[projectIndex].title = newTitle;
}

export default createUser;
export { user, addProject, removeProject };
