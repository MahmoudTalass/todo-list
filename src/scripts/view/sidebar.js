import plusIcon from "../../assets/icons/plus.svg"

const body = document.querySelector("body");

function renderSidebar() {
   const sidebar = document.createElement("div");
   sidebar.classList.add("sidebar");

   const sidebarElCont = document.createElement("div");
   sidebarElCont.classList.add("sidebar-element-container");

   const allTodos = document.createElement("div");
   sidebarElCont.classList.add("all-todos");
   allTodos.textContent = "All";

   const projectsContHeading = document.createElement("div");
   projectsContHeading.classList.add("projects-container-heading");

   const projectsHeading = document.createElement("p");
   projectsHeading.classList.add("projects-heading");
   projectsHeading.textContent = "Projects";

   const addProjectBtn = document.createElement("button");
   addProjectBtn.classList.add("add-project-btn");
   addProjectBtn.textContent = plusIcon;
   addProjectBtn.id = "add-project-btn";

   const projectsContainer = document.createElement("div");
   projectsContainer.classList.add("projects-container");
   projectsContainer.id = "projects-container";

   projectsContHeading.appendChild(projectsHeading);
   projectsContHeading.appendChild(addProjectBtn);

   sidebarElCont.appendChild(allTodos);
   sidebarElCont.appendChild(projectsContHeading);
   sidebarElCont.appendChild(projectsContainer);

   sidebar.appendChild(sidebarElCont);

   body.appendChild(sidebar)
}

export default renderSidebar
