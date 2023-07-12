import {
   clearProjectTitleInput,
   getProjectTitleInput,
   renderProject,
   renderProjectTitle,
} from "../view/projects";
import { addProject, user } from "../model/user";

const projectTitleContainers =
   document.getElementsByClassName("project-container");

function handleProjects() {
   // Display add project form
   const addProjectBtn = document.querySelector("#add-project-btn");
   const addProjectForm = document.querySelector("#add-project-form");
   const addProjectFormModal = document.querySelector(
      "#add-project-form-modal"
   );

   addProjectBtn.addEventListener("click", () => {
      addProjectFormModal.style.display = "block";
   });

   // Remove add project form when user clicks on window
   window.addEventListener("click", (e) => {
      if (e.target === addProjectFormModal) {
         addProjectFormModal.style.display = "none";
      }
   });

   /*
    * When add project form is submitted, create a card
    * title slot for the project along with the utility buttons
    */
   addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectTitle = getProjectTitleInput();
      addProject(projectTitle);
      const recentProjectId = user.projects[user.projects.length - 1].id;
      addProjectToPage(projectTitle, recentProjectId);
      addProjectFormModal.style.display = "none";
   });
}

function addEvntListnrsToProj(recentProjectId) {
   let recentTitle = projectTitleContainers[recentProjectId];
   recentTitle.addEventListener("click", (e) => {
      tabIntoProject(e);
   });
}

function tabIntoProject(e) {
   const projectTabBtn = document.querySelector("button.project-tab-btn");
   if (e.target === projectTabBtn) {
      const projectsContainer = document.querySelector("#projects-container");
      const targetProject = e.target;
      let targetProjectId = targetProject.getAttribute("data-project-title-id");

      if (projectsContainer.children.length > 0) {
         const currentProject = projectsContainer.firstChild;
         const currentProjectId =
            currentProject.getAttribute("data-project-id");
         if (currentProjectId === targetProjectId) return;
         projectsContainer.removeChild(currentProject);
      }
      renderProject(targetProjectId);
   }
}

function addProjectToPage(projectTitle, projectId) {
   // let recentProjectId = user.projects[user.projects.length - 1].id;
   renderProjectTitle(projectTitle, projectId);
   clearProjectTitleInput();
   addEvntListnrsToProj(projectId);
}

export { handleProjects, addProjectToPage };
