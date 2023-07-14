function handleTodosInput() {
   const project = document.querySelector("[data-project-id");
   const addTodoBtn = document.querySelector("#add-task-btn");
   const addTodoFormModal = document.querySelector("#add-todo-form-modal");
   const addTodoForm = document.querySelector("#add-todo-form");

   // Get the project id by checking the data attribute of the
   // project currently clicked on
   let projectId = project.getAttribute("data-project-id");

   addTodoBtn.addEventListener("click", () => {
      console.log(projectId);
      addTodoFormModal.style.display = "block";
   });

   window.addEventListener("click", (e) => {
      if (e.target === addTodoFormModal) {
         addTodoFormModal.style.display = "none";
      }
   });

   addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTodoFormModal.style.display = "none";
   });
}

export { handleTodosInput };
