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
      clearProjectTitleInput();
      addProjectFormModal.style.display = "none";
   });
}

/*
 *  Add event lister to last added project title and
 *  give it tabbing ability
 */
function addEvntListnrsToProj(recentProjectId) {
   let recentTitle = projectTitleContainers[recentProjectId];
   recentTitle.addEventListener("click", (e) => {
      tabIntoProject(e);
   });
}

/*
 *  Gives tabbing ability to projects so whenever you hit on a project
 *  you are able to see its information like its todo items
 */
function tabIntoProject(e) {
   const containsProjectBtnClass =
      e.target.classList.contains("project-tab-btn");

   if (containsProjectBtnClass) {
      const projectsContainer = document.querySelector("#projects-container");

      const targetProject = e.target.parentElement;
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
   renderProjectTitle(projectTitle, projectId);
   addEvntListnrsToProj(projectId);
}

export { handleProjects, addProjectToPage };
