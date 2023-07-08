function renderTodo(title, description, duedate, priority, todoId) {
   const todoContainer = document.createElement("div");
   todoContainer.classList.add("todo-container");
   todoContainer.setAttribute("data-todo-id", todoId);

   const todoHeadContainer = document.createElement("div");
   todoHeadContainer.classList.add("todo-head-container");

   const todoTitle = document.createElement("p");
   todoTitle.classList.add("todo-title");
   todoTitle.textContent = title;

   const todoPriority = document.createElement("p");
   todoPriority.classList.add("todo-priority");
   todoPriority.textContent = priority;

   const todoDuedate = document.createElement("duedate");
   todoDuedate.classList.add("todo-duedate");
   todoDuedate.textContent = duedate;

   todoHeadContainer.appendChild(todoTitle);
   todoHeadContainer.appendChild(todoPriority);
   todoHeadContainer.appendChild(todoDuedate);

   const detailsContainer = document.createElement("div");
   detailsContainer.classList.add("todo-details-container");

   const todoDesc = document.createElement("p");
   todoDesc.classList.add("todo-description");
   todoDesc.textContent = description;

   detailsContainer.appendChild(todoDesc);

   todoContainer.appendChild(todoHeadContainer);
   todoContainer.appendChild(detailsContainer);

   return todoContainer;
}
