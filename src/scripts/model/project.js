import { createTodoItem } from "./todo";
import { user, updateStorage, getProject } from "./user";

const Project = (title) => {
   let state = {
      todoIds: 0,
      todos: [],
      id: user.projectIds++,
      title: title,
   };

   return {
      todosList: state.todos,
      title: state.title,
      id: state.id,
      todoIds: state.todoIds,
   };
};

function createProject(title) {
   return Project(title);
}

function addTodoToProject(title, desc, duedate, priority, projectId) {
   const selectedProject = getProject(projectId);
   let projectTodosIds = selectedProject.todoIds++;

   selectedProject.todosList.push(
      createTodoItem(title, desc, duedate, priority, projectTodosIds, projectId)
   );
      updateStorage();
}

function getRecentTodo(projectId) {
   const project = getProject(projectId)
   return project.todoIds;
}

function removeTodo(projectId, todoId) {
   let projContainingTodo = getProject(projectId).todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.splice(todoIndex, 1);
      updateStorage();

}

function editTodoTitle(projectId, todoId, newTitle) {
   let projContainingTodo = getProject(projectId).todosList;

   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.todosList[todoIndex].title = newTitle;
      updateStorage();

}

function editTodoDesc(projectId, todoId, newDesc) {
   let projContainingTodo = user.projects[projectId].todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);
   projContainingTodo.todosList[todoIndex].description = newDesc;
      updateStorage();

}

function markAsComplete(projectId, todoId) {
   let projContainingTodo = getProject(projectId).todosList;
   let todoIndex = projContainingTodo.findIndex((todo) => todo.id === todoId);

   projContainingTodo.todosList[todoIndex].isComplete = true;
   removeTodo(projectId, todoId);
   updateStorage();

}

export { createProject, addTodoToProject, removeTodo, getRecentTodo };
