import { createTodoItem } from "./todo";
import { user } from "./user";

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

function addTodoToProject(title, desc, duedate, priority, projectId) {
   let selectedProject = user.projects[projectId];
   let projectTodosIds = selectedProject.todoIds++;

   selectedProject.todosList.push(
      createTodoItem(title, desc, duedate, priority, projectTodosIds, projectId)
   );
}

function removeTodo(projectId, todoId) {
   let projContainingTodo = user.projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.splice(todoIndex, 1);
}

function editTodoTitle(projectId, todoId, newTitle) {
   let projContainingTodo = user.projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.todosList[todoIndex].title = newTitle;
}

function editTodoDesc(projectId, todoId, newDesc) {
   let projContainingTodo = user.projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.todosList[todoIndex].description = newDesc;
}

function markAsComplete(projectId, todoId) {
   let projContainingTodo = user.projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);

   projContainingTodo.todosList[todoIndex].isComplete = true;
   removeTodo(projectId, todoId);
}

export { createProject, addTodoToProject, removeTodo };
