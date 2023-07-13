function handleTodosInput() {
    debugger
    const project = document.querySelector('[data-project-id')
   const addTodoBtn = document.querySelector("#add-task-btn");
   const addTodoForm = document.querySelector("#add-todo-form");
   const addTodoFormModal = document.querySelector("#add-todo-form-modal");

   addTodoBtn.addEventListener('click', () => {
        addTodoFormModal.style.display = "block"
   })
}

export { handleTodosInput }
