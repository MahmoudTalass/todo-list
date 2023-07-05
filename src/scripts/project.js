import { createTodoItem } from "./todo";
import users from './user-controller'


let projectIds = 0;

const Project = (title) => {
   let state = {
    todos: [],
    id: projectIds++,
    title: title
   }

   return {
      state,
      title
   };
};

function createProject() {
   const title = prompt("whats the title of your project");
   return Project(title);
}

function addTodoToProject(projectId) {
    let selectedProject = users[0].state.projects[projectId];

    selectedProject.state.todos.push(createTodoItem());
}

export {createProject, addTodoToProject} ;
