import { addTodoToProject, getRecentTodo } from "../model/project";
import {
   appendTodoToProject,
   getTodoDescInput,
   getTodoDuedateInput,
   getTodoPriorityInput,
   getTodoTitleInput,
   renderTodo,
} from "../view/todos";

import { user } from "../model/user";

function addTodoUsingForm(projectId) {
   const todoTitle = getTodoTitleInput();
   const todoDuedate = getTodoDuedateInput();
   const todoPriority = getTodoPriorityInput();
   const todoDesc = getTodoDescInput();
   debugger;
   const recentTodoId = getRecentTodo(projectId);

   addTodoToProject(todoTitle, todoDuedate, todoPriority, todoDesc, projectId);
   addTodoToPage(
      todoTitle,
      todoDuedate,
      todoPriority,
      todoDesc,
      recentTodoId,
      projectId
   );
}

function addTodoToPage(
   todoTitle,
   todoDuedate,
   todoPriority,
   todoDesc,
   todoId,
   projectId
) {
   const todo = renderTodo(
      todoTitle,
      todoDuedate,
      todoPriority,
      todoDesc,
      todoId
   );
   appendTodoToProject(todo);
}

export { addTodoToPage, addTodoUsingForm };
