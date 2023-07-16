import editIcon from "../../assets/icons/edit-icon.png";
import trashIcon from "../../assets/icons/trash-icon.png";
import { format } from "date-fns";

const body = document.querySelector("body");

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

   const editIconImg = new Image();
   editIconImg.src = editIcon;
   editIconImg.classList.add("edit-todo-icon");

   editTodoBtn.appendChild(editIconImg);

   const removeTodoBtn = document.createElement("button");
   removeTodoBtn.id = "remove-todo-btn";
   removeTodoBtn.classList.add("remove-todo-btn");

   const trashIconImg = new Image();
   trashIconImg.src = trashIcon;
   trashIconImg.classList.add("remove-todo-icon");

   removeTodoBtn.appendChild(trashIconImg);

   todoHeadContainer.appendChild(completedCheckMark);
   todoHeadContainer.appendChild(todoTitle);
   todoHeadContainer.appendChild(todoPriority);
   todoHeadContainer.appendChild(todoDuedate);
   todoHeadContainer.appendChild(editTodoBtn);
   todoHeadContainer.appendChild(removeTodoBtn);

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

function renderAddTodoForm() {
   todoForm("add");
}

function renderEditTodoForm() {
   todoForm("edit")
}

function todoForm(formType) {
   const formModal = document.createElement("div");
   const form = document.createElement("form");
   const formHeading = document.createElement("p");

   formModal.classList.add("form-modal", "todo-form-modal");
   formModal.id = `${formType}-todo-form-modal`;

   form.classList.add("todo-form");
   form.id = `${formType}-todo-form`;

   formHeading.classList.add("todo-form-heading");
   formHeading.textContent = `${
      formType.charAt(0).toUpperCase() + formType.substring(1)
   } task`;

   const allInputsContainer = document.createElement("section");
   allInputsContainer.classList.add("todo-inputs-container");

   const input1Container = document.createElement("div");
   input1Container.classList.add("input-container");

   const todoTitleLabel = document.createElement("label");
   todoTitleLabel.setAttribute("for", `todo-title-input-${formType}`);
   todoTitleLabel.classList.add("todo-title-input-label");
   todoTitleLabel.textContent = "Title";

   const todoTitleInput = document.createElement("input");
   todoTitleInput.type = "text";
   todoTitleInput.id = `todo-title-input-${formType}`;
   todoTitleInput.classList.add("todo-title-input", "todo-form-input");
   todoTitleInput.name = "todo-title";
   todoTitleInput.required = true;

   input1Container.appendChild(todoTitleLabel);
   input1Container.appendChild(todoTitleInput);

   const input2Container = document.createElement("div");
   input2Container.classList.add("input-container");

   const todoDuedateLabel = document.createElement("label");
   todoDuedateLabel.setAttribute("for", `todo-duedate-input-${formType}`);
   todoDuedateLabel.classList.add("todo-duedate-label");
   todoDuedateLabel.textContent = "Due date";

   const todoDuedateInput = document.createElement("input");
   todoDuedateInput.type = "date";
   todoDuedateInput.id = `todo-duedate-input-${formType}`;
   todoDuedateInput.classList.add("todo-duedate-input", "todo-form-input");
   todoDuedateInput.name = "duedate";
   todoDuedateInput.required = true;
   todoDuedateInput.setAttribute("value", format(new Date(), "yyyy-MM-dd"));
   todoDuedateInput.setAttribute("min", format(new Date(), "yyyy-MM-dd"));

   input2Container.appendChild(todoDuedateLabel);
   input2Container.appendChild(todoDuedateInput);

   const input3Container = document.createElement("div");
   input3Container.classList.add("input-container");

   const todoPriorityLabel = document.createElement("label");
   todoPriorityLabel.setAttribute("for", `todo-priority-dropdown-${formType}`);
   todoPriorityLabel.classList.add("todo-priority-label");
   todoPriorityLabel.textContent = "Priority";

   const todoPriorityDropdown = document.createElement("select");
   todoPriorityDropdown.required = true;
   todoPriorityDropdown.id = `todo-priority-dropdown-${formType}`;
   todoPriorityDropdown.classList.add(
      "todo-priority-dropdown",
      "todo-form-input"
   );
   todoPriorityDropdown.name = "todo-priority";

   const urgentPriority = document.createElement("option");
   urgentPriority.value = "urgent";
   urgentPriority.textContent = "urgent";

   const normalPriority = document.createElement("option");
   normalPriority.value = "normal";
   normalPriority.textContent = "normal";

   const lowPriority = document.createElement("option");
   lowPriority.value = "low";
   lowPriority.textContent = "low";

   todoPriorityDropdown.appendChild(lowPriority);
   todoPriorityDropdown.appendChild(normalPriority);
   todoPriorityDropdown.appendChild(urgentPriority);

   input3Container.appendChild(todoPriorityLabel);
   input3Container.appendChild(todoPriorityDropdown);

   const input4Container = document.createElement("div");
   input4Container.classList.add("input-container");

   const todoDescriptionLabel = document.createElement("label");
   todoDescriptionLabel.setAttribute("for", `todo-description-input-${formType}`);
   todoDescriptionLabel.classList.add("todo-description-label");
   todoDescriptionLabel.textContent = "Description";

   const todoDescriptionInput = document.createElement("textarea");
   todoDescriptionInput.id = `todo-description-input-${formType}`;
   todoDescriptionInput.classList.add("todo-description-input");
   todoDescriptionInput.name = "todo-description";
   todoDescriptionInput.required = true;
   todoDescriptionInput.rows = 5;
   todoDescriptionInput.columns = 35;

   input4Container.appendChild(todoDescriptionLabel);
   input4Container.appendChild(todoDescriptionInput);

   allInputsContainer.appendChild(input1Container);
   allInputsContainer.appendChild(input2Container);
   allInputsContainer.appendChild(input3Container);
   allInputsContainer.appendChild(input4Container);

   const todoFormBtn = document.createElement("button");
   todoFormBtn.id = "todo-form-btn";
   todoFormBtn.classList.add("todo-form-btn");
   todoFormBtn.textContent = `${
      formType.charAt(0).toUpperCase() + formType.substring(1)
   }`;

   form.appendChild(formHeading);
   form.appendChild(allInputsContainer);
   form.appendChild(todoFormBtn);

   formModal.appendChild(form);

   body.appendChild(formModal);
}

function appendTodoToProject(todoItem) {
   const project = document.querySelector("#project");
   project.appendChild(todoItem);
}

function getTodoTitleInput(formType) {
   const todoTitleInput = document.querySelector(`#todo-title-input-${formType}`);

   return todoTitleInput.value;
}

function getTodoDuedateInput(formType) {
   const todoDuedateInput = document.querySelector(`#todo-duedate-input-${formType}`);

   return todoDuedateInput.value;
}

function getTodoPriorityInput(formType) {
   const todoPriorityInput = document.querySelector(
      `#todo-priority-dropdown-${formType}`
   );

   return todoPriorityInput.value;
}

function getTodoDescInput(formType) {
   const todoDescInput = document.querySelector(
      `#todo-description-input-${formType}`
   );

   return todoDescInput.value;
}

function clearAddTodoInputs(formType) {
   const todoTitleInput = document.querySelector(`#todo-title-input-${formType}`);
   const todoDuedateInput = document.querySelector(`#todo-duedate-input-${formType}`);
   const todoPriorityInput = document.querySelector(`#todo-priority-dropdown-${formType}`);
   const todoDescInput = document.querySelector(`#todo-description-input-${formType}`);

   todoTitleInput.value = "";
   todoDuedateInput.value = format(new Date(), "yyyy-MM-dd");
   todoPriorityInput.value = "low";
   todoDescInput.value = "";
}

export {
   renderTodo,
   appendTodoToProject,
   renderAddTodoForm,
   renderEditTodoForm,
   getTodoDescInput,
   getTodoDuedateInput,
   getTodoPriorityInput,
   getTodoTitleInput,
   clearAddTodoInputs,
};
