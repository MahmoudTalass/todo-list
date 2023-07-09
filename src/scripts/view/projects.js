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

   const addTaskBtn = document.createElement("button")
   addTaskBtn.classList.add("add-task-btn")
   addTaskBtn.id = "add-task-btn"


   main.appendChild(project)
}

function renderProjectTitle(title, projectId) {
   const sidebarProjectsCont = document.querySelector(
      "#projects-titles-container"
   );

   const projectTitle = document.createElement("div")
   projectTitle.classList.add("project-name")
   projectTitle.setAttribute("data-project-title-id", projectId)

   projectTitle.textContent = title;

   sidebarProjectsCont.appendChild(projectTitle)
}

export { renderProjectsContainer, renderProjectTitle, renderProject };
