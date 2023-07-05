import { createTodoItem } from "./todo";
import { users } from "./user";

let projectIds = 0;

const Project = (title) => {
   let state = {
      todos: [],
      id: projectIds++,
      title: title,
   };

   return {
      todosList: state.todos,
      title: state.title,
      projectId: state.id
   };
};

function createProject(title) {
   return Project(title);
}


function addTodoToProject(projectId) {
   let selectedProject = users[0].projects[projectId];

   selectedProject.todosList.push(createTodoItem());
}

export { createProject, addTodoToProject };
