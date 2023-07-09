import plusIcon from "../../assets/icons/plus-icon.png";

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

   const projectTitle = document.createElement("div");
   projectTitle.classList.add("project-name");
   projectTitle.setAttribute("data-project-title-id", projectId);

   projectTitle.textContent = title;

   sidebarProjectsCont.appendChild(projectTitle);
}

function renderAddProjectForm() {
   const form = document.createElement("form");
   const formModal = document.createElement("div");
   formModal.classList.add("form-modal");

   form.classList.add("add-project-form");
   form.id = "add-project-form";

   const inputContainer = document.createElement("div");
   inputContainer.classList.add("add-project-input-container");

   const projectTitleInputLabel = document.createElement("label");
   projectTitleInputLabel.setAttribute("for", "project-title-input");
   projectTitleInputLabel.classList.add("project-title-input-label");
   projectTitleInputLabel.textContent = "Project Title";

   const projectTitleInput = document.createElement("input");
   projectTitleInput.type = "text"
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

   formModal.appendChild(form)

   body.appendChild(formModal);
}

export {
   renderProjectsContainer,
   renderProjectTitle,
   renderProject,
   renderAddProjectForm,
};
