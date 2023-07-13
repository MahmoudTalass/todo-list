function handleTodosInput() {
   const project = document.querySelector("[data-project-id");
   const addTodoBtn = document.querySelector("#add-task-btn");
   const addTodoFormModal = document.querySelector("#add-todo-form-modal");
   const addTodoForm = document.querySelector("#add-todo-form");

   addTodoBtn.addEventListener("click", () => {
      addTodoFormModal.style.display = "block";
   });

   window.addEventListener("click", (e) => {
      if (e.target === addTodoFormModal) {
         addTodoFormModal.style.display = "none";
      }
   });
}

export { handleTodosInput };
