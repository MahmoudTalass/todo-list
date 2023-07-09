import plusIcon from "./../../assets/icons/plus-icon.png";

const body = document.querySelector("body");

function renderSidebar() {
   const sidebar = document.createElement("div");
   sidebar.classList.add("sidebar");

   const sidebarElCont = document.createElement("div");
   sidebarElCont.classList.add("sidebar-element-container");

   const allTodos = document.createElement("div");
   allTodos.classList.add("all-todos");
   allTodos.textContent = "All";

   const projectsContHeading = document.createElement("div");
   projectsContHeading.classList.add("projects-container-heading");

   const projectsHeading = document.createElement("p");
   projectsHeading.classList.add("projects-heading");
   projectsHeading.textContent = "Projects";

   const addProjectBtn = document.createElement("button");
   addProjectBtn.classList.add("add-project-btn");
   const plusIconImg = new Image();
   plusIconImg.src = plusIcon;

   addProjectBtn.appendChild(plusIconImg);
   addProjectBtn.id = "add-project-btn";

   const projectsTitlesContainer = document.createElement("div");
   projectsTitlesContainer.classList.add("projects-titles-container");
   projectsTitlesContainer.id = "projects-titles-container";

   projectsContHeading.appendChild(projectsHeading);
   projectsContHeading.appendChild(addProjectBtn);

   sidebarElCont.appendChild(allTodos);
   sidebarElCont.appendChild(projectsContHeading);
   sidebarElCont.appendChild(projectsTitlesContainer);

   sidebar.appendChild(sidebarElCont);

   body.appendChild(sidebar);
}

export default renderSidebar;
