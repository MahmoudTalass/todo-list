import { addTodoUsingForm } from "../controller/todos-controller";
import { clearAddTodoInputs } from "./todos";

function handleTodosInput() {
   const projectsContainer = document.querySelector("#projects-container");
   const addTodoFormModal = document.querySelector("#add-todo-form-modal");
   const addTodoForm = document.querySelector("#add-todo-form");

   projectsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-task-btn"))
         addTodoFormModal.style.display = "block";
   });

   window.addEventListener("click", (e) => {
      if (e.target === addTodoFormModal) {
         addTodoFormModal.style.display = "none";
         clearAddTodoInputs();
      }
   });

   addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTodoUsingForm();
      clearAddTodoInputs();
      addTodoFormModal.style.display = "none";
   });
}

export { handleTodosInput };
