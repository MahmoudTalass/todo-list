import editIcon from "../../assets/icons/edit-icon.png"

function renderTodo(title, description, duedate, priority, todoId) {
   const todoContainer = document.createElement("div");
   todoContainer.classList.add("todo-container");
   todoContainer.setAttribute("data-todo-id", todoId);

   const todoHeadContainer = document.createElement("div");
   todoHeadContainer.classList.add("todo-head-container");

   const completedCheckMark = document.createElement("input");
   completedCheckMark.type = "checkbox";
   completedCheckMark.id = "mark-as-complete-input";
   completedCheckMark.classList.add("mark-as-complete-input");

   const todoTitle = document.createElement("p");
   todoTitle.classList.add("todo-title");
   todoTitle.textContent = title;

   const todoPriority = document.createElement("p");
   todoPriority.classList.add("todo-priority");
   todoPriority.textContent = priority;

   const todoDuedate = document.createElement("duedate");
   todoDuedate.classList.add("todo-duedate");
   todoDuedate.textContent = duedate;

   const editTodoBtn = document.createElement("button");
   editTodoBtn.id = "edit-todo-btn";
   editTodoBtn.classList.add("edit-todo-btn");
   
   const editIconImg = new Image()
   editIconImg.src = editIcon;
   editIconImg.classList.add("edit-todo-icon")

   editTodoBtn.appendChild(editIconImg)

   todoHeadContainer.appendChild(completedCheckMark);
   todoHeadContainer.appendChild(todoTitle);
   todoHeadContainer.appendChild(todoPriority);
   todoHeadContainer.appendChild(todoDuedate);
   todoHeadContainer.appendChild(editTodoBtn);

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

function appendTodoToProject(projectId, todoItem) {
   const project = document.querySelector(`[data-project-id="${projectId}"]`);
   project.appendChild(todoItem);
}

export { renderTodo, appendTodoToProject };
