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

   main.appendChild(project)
}

function renderProjectTitle(title) {
   const sidebarProjectsCont = document.querySelector(
      "#projects-titles-container"
   );

   const projectTitle = document.createElement("div")
   projectTitle.classList.add("project-name")

   projectTitle.textContent = title;

   sidebarProjectsCont.appendChild(projectTitle)
}

export { renderProjectsContainer, renderProjectTitle, renderProject };
