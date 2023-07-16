import { addTodoUsingForm } from "../controller/todos-controller";
import { clearAddTodoInputs } from "./todos";

function handleTodosInput() {
   const projectsContainer = document.querySelector("#projects-container");

   const addTodoFormModal = document.querySelector("#add-todo-form-modal");
   const addTodoForm = document.querySelector("#add-todo-form");

   const editTodoFormModal = document.querySelector("#edit-todo-form-modal")
   const editTodoForm = document.querySelector("#edit-todo-form")

   projectsContainer.addEventListener("click", (e) => {
      const isAddTaskBtn = e.target.classList.contains("add-task-btn")
      const isEditTaskBtn = e.target.classList.contains("edit-todo-icon")

      if (isAddTaskBtn) {
         addTodoFormModal.style.display = "block";
      }

      if (isEditTaskBtn) {
         editTodoFormModal.style.display = "block"
      }
   });

   window.addEventListener("click", (e) => {
      if (e.target === addTodoFormModal) {
         addTodoFormModal.style.display = "none";
         clearAddTodoInputs("add");
      }

      if (e.target === editTodoFormModal) {
         editTodoFormModal.style.display = "none"
         clearAddTodoInputs("edit")
      }
   });

   addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTodoUsingForm();
      clearAddTodoInputs();
      addTodoFormModal.style.display = "none";
   });

   editTodoForm.addEventListener("submit", (e) => {

   })
}

export { handleTodosInput };
