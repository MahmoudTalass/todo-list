import { createTodoItem } from "./todo";
import { user, updateStorage, getProjectById } from "./user";

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
   const selectedProject = getProjectById(projectId);
   let projectTodosIds = selectedProject.todoIds++;

   selectedProject.todosList.push(
      createTodoItem(title, desc, duedate, priority, projectTodosIds, projectId)
   );
   updateStorage();
}

function getRecentTodo(projectId) {
   const project = getProjectById(projectId);
   return project.todoIds;
}

function removeTodoData(projectId, todoId) {
   let projContainingTodo = getProjectById(projectId).todosList;
   let todoIndex = findTodoIndex(projectId, todoId)
   projContainingTodo.splice(todoIndex, 1);
   updateStorage();
}

function editTodoData(projectId, todoId, newValues) {
   const todo = getTodo(projectId, todoId);
   const { title, duedate, desc, priority } = newValues;

   todo.title = title;
   todo.duedate = duedate;
   todo.description = desc;
   todo.priority = priority;

   updateStorage();
}

function todoToggleCompletionData(projectId, todoId) {
   let todo = getTodo(projectId, todoId);

   todo.isComplete = !todo.isComplete;
   updateStorage();
}

function getTodo(projectId, todoId) {
   const projContainingTodo = getProjectById(projectId);
   const todoIndex = findTodoIndex(projectId, todoId);
   return projContainingTodo.todosList[todoIndex];
}

function findTodoIndex(projectId, todoId) {
   const projContainingTodo = getProjectById(projectId).todosList;
   const todoIndex = projContainingTodo.findIndex(
      (todo) => todo.id === Number(todoId)
   );

   return todoIndex;
}

export {
   createProject,
   addTodoToProject,
   removeTodoData,
   getRecentTodo,
   editTodoData,
   findTodoIndex,
   todoToggleCompletionData
};
