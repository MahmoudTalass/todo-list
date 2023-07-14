import { addTodoToProject, getRecentTodo } from "../model/project";
import { getProject } from "../model/user";
import {
   appendTodoToProject,
   getTodoDescInput,
   getTodoDuedateInput,
   getTodoPriorityInput,
   getTodoTitleInput,
   renderTodo,
} from "../view/todos";

function addTodoUsingForm(projectId) {
   const id = document
      .querySelector("#project")
      .getAttribute("data-project-id");
   const todoTitle = getTodoTitleInput();
   const todoDuedate = getTodoDuedateInput();
   const todoPriority = getTodoPriorityInput();
   const todoDesc = getTodoDescInput();
   debugger;
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
   debugger;
   const projectTodos = getProject(projectId).todosList;

   projectTodos.forEach((todo) => {
      const title = todo.title;
      const desc = todo.description;
      const duedate = todo.duedate;
      const priority = todo.priority;
      const id = todo.id;
      const existsInProject = todo.existsInProject;

      addTodoToPage(title, desc, duedate, priority, id, existsInProject);
   });
}

export { addTodoToPage, addTodoUsingForm, loadAllTodosInProject };
