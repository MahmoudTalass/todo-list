import { addTodoUsingForm, editTodo, removeTodo } from "../controller/todos-controller";
import { clearTodoFormInputs } from "./todos";

function handleTodosInput() {
   const projectsContainer = document.querySelector("#projects-container");

   const addTodoFormModal = document.querySelector("#add-todo-form-modal");
   const addTodoForm = document.querySelector("#add-todo-form");

   const editTodoFormModal = document.querySelector("#edit-todo-form-modal");
   const editTodoForm = document.querySelector("#edit-todo-form");

   projectsContainer.addEventListener("click", (e) => {
      const isAddTaskBtn = e.target.classList.contains("add-task-btn");
      const isEditTaskBtn = e.target.classList.contains("edit-todo-icon");
      const isRemoveTaskBtn = e.target.classList.contains("remove-todo-icon")

      if (isAddTaskBtn) {
         addTodoFormModal.style.display = "block";
      }

      if (isEditTaskBtn) {
         editTodoFormModal.style.display = "block";
         const todo = e.target.closest(".todo-container");
         const todoId = todo.getAttribute("data-todo-id");
         editTodoForm.setAttribute("data-todo-being-edited", todoId);
      }

      if (isRemoveTaskBtn) {
         removeTodo(e)
      }

      
   });

   window.addEventListener("click", (e) => {
      if (e.target === addTodoFormModal) {
         addTodoFormModal.style.display = "none";
         clearTodoFormInputs("add");
      }

      if (e.target === editTodoFormModal) {
         editTodoFormModal.style.display = "none";
         clearTodoFormInputs("edit");
      }
   });

   addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTodoUsingForm();
      clearTodoFormInputs("add");
      addTodoFormModal.style.display = "none";
   });

   editTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      editTodo();
      clearTodoFormInputs("edit");
      editTodoFormModal.style.display = "none";
   });
}

export { handleTodosInput };
