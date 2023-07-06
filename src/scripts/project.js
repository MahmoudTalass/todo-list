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
      id: state.id,
      todoIds: state.todosIds,
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
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.splice(todoIndex, 1);
}

function editTodoTitle(projectId, todoId, newTitle) {
   let projContainingTodo = users[0].projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.todosList[todoIndex].title = newTitle;
}

function editTodoDesc(projectId, todoId, newDesc) {
   let projContainingTodo = users[0].projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.todosList[todoIndex].description = newDesc;
}

export { createProject, addTodoToProject, removeTodo };
