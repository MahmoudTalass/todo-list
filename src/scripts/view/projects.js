import plusIcon from "../../assets/icons/plus-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";
import trashIcon from "../../assets/icons/trash-icon.png";

const body = document.querySelector("body");

function renderProjectsContainer() {
   const main = document.createElement("main");
   main.id = "projects-container";
   main.classList.add("projects-container");

   body.appendChild(main);
}

function renderProject(projectId) {
   const main = document.querySelector("#projects-container");

   const project = document.createElement("div");
   project.classList.add("project");
   project.setAttribute("data-project-id", projectId);

   const addTaskBtn = document.createElement("div");
   addTaskBtn.classList.add("add-task-btn");
   addTaskBtn.id = "add-task-btn";

   const addTaskIcon = new Image();
   addTaskIcon.classList.add("add-task-icon");
   addTaskIcon.src = plusIcon;

   const addTaskText = document.createElement("p");
   addTaskText.classList.add("add-task-text");
   addTaskText.textContent = "Add Task";

   addTaskBtn.appendChild(addTaskIcon);
   addTaskBtn.appendChild(addTaskText);

   project.appendChild(addTaskBtn);
   main.appendChild(project);
}

function renderProjectTitle(title, projectId) {
   const sidebarProjectsCont = document.querySelector(
      "#projects-titles-container"
   );

   const projectContainer = document.createElement("div");
   projectContainer.classList.add("project-container");
   projectContainer.setAttribute("data-project-title-id", projectId);

   const projectTitle = document.createElement("p");
   projectTitle.classList.add("project-title");

   projectTitle.textContent = title;

   const projectUtilityBtns = document.createElement("div");
   projectUtilityBtns.classList.add("project-utility-btns");

   const removeProjectBtn = document.createElement("button");
   removeProjectBtn.classList.add("remove-project-btn");
   removeProjectBtn.id = "remove-project-btn";

   const trashIconImg = new Image();
   trashIconImg.src = trashIcon;
   trashIconImg.classList.add("remove-project-icon")

   removeProjectBtn.appendChild(trashIconImg)

   const editTitleBtn = document.createElement("button");
   editTitleBtn.classList.add("edit-title-btn");
   editTitleBtn.id = "edit-title-btn";

   const editIconImg = new Image();
   editIconImg.src = editIcon;
   editIconImg.classList.add("edit-project-icon");

   editTitleBtn.appendChild(editIconImg);

   projectUtilityBtns.appendChild(editTitleBtn)
   projectUtilityBtns.appendChild(removeProjectBtn)

   projectContainer.appendChild(projectTitle);
   projectContainer.appendChild(projectUtilityBtns);

   sidebarProjectsCont.appendChild(projectContainer);
}

function renderAddProjectForm() {
   const formModal = document.createElement("div");
   const form = document.createElement("form");

   formModal.classList.add("form-modal", "add-project-form-modal");
   formModal.id = "add-project-form-modal"
   form.classList.add("add-project-form");
   form.id = "add-project-form";

   const inputContainer = document.createElement("div");
   inputContainer.classList.add("add-project-input-container");

   const projectTitleInputLabel = document.createElement("label");
   projectTitleInputLabel.setAttribute("for", "project-title-input");
   projectTitleInputLabel.classList.add("project-title-input-label");
   projectTitleInputLabel.textContent = "Project Title";

   const projectTitleInput = document.createElement("input");
   projectTitleInput.type = "text";
   projectTitleInput.id = "project-title-input";
   projectTitleInput.classList.add("project-title-input");
   projectTitleInput.name = "title";
   projectTitleInput.required = true;

   inputContainer.appendChild(projectTitleInputLabel);
   inputContainer.appendChild(projectTitleInput);

   const createProjectBtn = document.createElement("button");
   createProjectBtn.id = "create-project-btn";
   createProjectBtn.classList.add("create-project-btn");
   createProjectBtn.textContent = "Add";

   form.appendChild(inputContainer);
   form.appendChild(createProjectBtn);

   formModal.appendChild(form);

   body.appendChild(formModal);
}

function getProjectTitleFromForm() {
   const addProjectInput = document.querySelector("#project-title-input");

   return addProjectInput.value;
}

export {
   renderProjectsContainer,
   renderProjectTitle,
   renderProject,
   renderAddProjectForm,
};
