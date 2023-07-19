import {
   addTodoToProject,
   editTodoData,
   findTodoIndex,
   getRecentTodo,
   removeTodoData,
   todoToggleCompletionData,
} from "../model/project";
import { getProjectById, getProjectByIndex } from "../model/user";
import {
   appendTodoToProject,
   getTodoDescInput,
   getTodoDuedateInput,
   getTodoPriorityInput,
   getTodoTitleInput,
   renderTodo,
} from "../view/todos";

function addTodoUsingForm() {
   const id = document
      .querySelector("#project")
      .getAttribute("data-project-id");
   const todoTitle = getTodoTitleInput("add");
   const todoDuedate = getTodoDuedateInput("add");
   const todoPriority = getTodoPriorityInput("add");
   const todoDesc = getTodoDescInput("add");

   const recentTodoId = getRecentTodo(id);

   addTodoToProject(todoTitle, todoDesc, todoDuedate, todoPriority, id);
   addTodoToPage(
      todoTitle,
      todoDesc,
      todoDuedate,
      todoPriority,
      recentTodoId,
      id
   );
}

function addTodoToPage(
   todoTitle,
   todoDesc,
   todoDuedate,
   todoPriority,
   todoId,
   projectId
) {
   const todo = renderTodo(
      todoTitle,
      todoDesc,
      todoDuedate,
      todoPriority,
      todoId
   );
   appendTodoToProject(todo);
}

function loadAllTodosInProject(projectId) {
   const projectTodos = getProjectById(projectId).todosList;
   addAllTodos(projectTodos);
}

function loadAllTodosInFirstProj() {
   const firstProjectInArr = getProjectByIndex(0).todosList;
   addAllTodos(firstProjectInArr);
}

function addAllTodos(project) {
   project.forEach((todo) => {
      const title = todo.title;
      const desc = todo.description;
      const duedate = todo.duedate;
      const priority = todo.priority;
      const id = todo.id;
      const existsInProject = todo.existsInProject;

      addTodoToPage(title, desc, duedate, priority, id, existsInProject);
   });
}

function removeTodo(e) {
   const todo = e.target.closest(".todo-container");
   const todoId = todo.getAttribute("data-todo-id");
   const project = document.querySelector("#project");
   const projectId = project.getAttribute("data-project-id");

   removeTodoData(projectId, todoId);
   project.removeChild(todo);
}

function editTodo() {
   const project = document.querySelector("#project");
   const projectId = project.getAttribute("data-project-id");

   const editTodoForm = document.querySelector("#edit-todo-form");
   const editedTodoId = editTodoForm.getAttribute("data-todo-being-edited");

   const todoIndex = findTodoIndex(projectId, editedTodoId);
   const todoFromDOM = project.children[todoIndex + 1];

   const todoTitle = todoFromDOM.querySelector(".todo-title");
   const todoDuedate = todoFromDOM.querySelector(".todo-duedate");
   const todoPriority = todoFromDOM.querySelector(".todo-priority");
   const todoDesc = todoFromDOM.querySelector(".todo-description");

   const newValues = {
      title: getTodoTitleInput("edit"),
      duedate: getTodoDuedateInput("edit"),
      desc: getTodoDescInput("edit"),
      priority: getTodoPriorityInput("edit"),
   };

   editTodoData(projectId, editedTodoId, newValues);

   todoTitle.textContent = newValues.title;
   todoDuedate.textContent = newValues.duedate;
   todoPriority.textContent = newValues.priority;
   todoDesc.textContent = newValues.desc;
}

function todoToggleCompletion(e) {
   const project = document.querySelector("#project");
   const projectId = project.getAttribute("data-projectId");

   const todoHeadContainer = e.target.closest(".todo-head-container");
   const todo = e.target.closest(".todo-container");
   const todoId = todo.getAttribute("data-todo-id");

   todoToggleCompletionData(projectId, todoId);
   todoHeadContainer.classList.toggle("completed")
}

function toggleDescription(e) {
   const todoContainer = e.target.parentElement;
   const desc = e.target.nextSibling;
   desc.classList.toggle("active")
   e.target.classList.toggle("active")
   todoContainer.classList.toggle("active")
}

export {
   addTodoToPage,
   addTodoUsingForm,
   loadAllTodosInProject,
   loadAllTodosInFirstProj,
   editTodo,
   removeTodo,
   todoToggleCompletion,
   toggleDescription
};
