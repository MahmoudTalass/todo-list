import { createProject } from "./project";

let user;

let userIds = 0;

const User = (name) => {
   let state = {
      name: name,
      id: userIds++,
      projectIds: 0,
      projects: [],
   };

   return {
      username: state.name,
      userId: state.id,
      projects: state.projects,
      projectIds: state.projectIds
   };
};

function setUser(myUser) {
   user = myUser;
}

function createUser(name) {
   user = User(name);
   let userProjects = user.projects;
   userProjects.push(createProject("default"));
   updateStorage();
   return user;
}

function addProject(title) {
   let userProjects = user.projects;
   userProjects.push(createProject(title));
   updateStorage();
}

function getProject(projectId) {
   return user.projects[projectId];
}

function removeProject(projectId) {
   if (projectId === 0) return;

   let projectIndex = user.projects.findIndex(
      (project) => project.id === projectId
   );
   user.projects.splice(projectIndex, 1);
   updateStorage();
}

function editProjectTitle(projectId, newTitle) {
   let projectIndex = user.projects.findIndex(
      (project) => project.id === projectId
   );
   user.projects[projectIndex].title = newTitle;
   updateStorage();
}

function updateStorage() {
   localStorage.setItem("user", JSON.stringify(user));
   console.log(JSON.parse(localStorage.getItem("user")))
   console.log(user)
}

export {
   createUser,
   user,
   addProject,
   removeProject,
   editProjectTitle,
   updateStorage,
   setUser,
   getProject
};
