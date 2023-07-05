import { createTodoItem } from "./todo";
import { users } from "./user";

let projectIds = 0;

const Project = (title) => {
   let state = {
      todosIds: 0,
      todos: [],
      id: projectIds++,
      title: title,
   };

   return {
      todosList: state.todos,
      title: state.title,
      projectId: state.id,
      todoIds: state.todosIds
   };
};

function createProject(title) {
   return Project(title);
}


function addTodoToProject(projectId) {
   let selectedProject = users[0].projects[projectId];
   let projectTodosIds = selectedProject.todoIds++;

   selectedProject.todosList.push(createTodoItem(projectTodosIds));
}

function removeTodo(projectId, todoId) {
   let projContainingTodo = users[0].projects[projectId].todosList;
   let indexOfTodo = projContainingTodo.find(todo => todo.id === todoId)
   users[0].projects[projectId].todosList.splice(indexOfTodo, 1);
}

export { createProject, addTodoToProject, removeTodo };
