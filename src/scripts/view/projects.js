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

export { renderProjectsContainer, renderProjectTitle, renderProject };
