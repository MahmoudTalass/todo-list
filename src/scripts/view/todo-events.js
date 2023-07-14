import { addTodoUsingForm } from "../controller/handle-todos";
import { clearAddTodoInputs } from "./todos";

function handleTodosInput(targetProjectId) {
   const project = document.querySelector("[data-project-id");
   const addTodoBtn = document.querySelector("#add-task-btn");
   const addTodoFormModal = document.querySelector("#add-todo-form-modal");
   const addTodoForm = document.querySelector("#add-todo-form");

   // Get the project id by checking the data attribute of the
   // project currently clicked on

   addTodoBtn.addEventListener("click", () => {
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
      debugger;
      let id = targetProjectId
      addTodoUsingForm(targetProjectId);
      clearAddTodoInputs();
      debugger
      addTodoFormModal.style.display = "none";
   });
}

export { handleTodosInput };
