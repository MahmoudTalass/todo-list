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
   const projectIndex = findProjectIndex(projectId)
   return user.projects[projectIndex];
}

function removeProject(projectId) {
   const projectIndex = findProjectIndex(projectId)
   user.projects.splice(projectIndex, 1);
   updateStorage();
}

function editProjectTitle(projectId, newTitle) {
   const projectIndex = findProjectIndex(projectId)

   user.projects[projectIndex].title = newTitle;
   updateStorage();
}

function findProjectIndex(projectId) {
   return user.projects.findIndex(
   (project) => project.id === Number(projectId)
)  ;
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
