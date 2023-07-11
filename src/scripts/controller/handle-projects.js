import {
   clearProjectTitleInput,
   getProjectTitleInput,
   renderProject,
   renderProjectTitle,
} from "../view/projects";
import { addProject, user } from "../model/user";

function handleProjects() {
   const addProjectBtn = document.querySelector("#add-project-btn");
   const addProjectForm = document.querySelector("#add-project-form");
   const addProjectFormModal = document.querySelector(
      "#add-project-form-modal"
   );
   const projectTitleContainers =
      document.getElementsByClassName("project-container");

   const projectsContainer = document.querySelector("#projects-container");

   // Display add project form
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

      let lastAddedProjectId = user.projects[user.projects.length - 1].id;
      renderProjectTitle(projectTitle, lastAddedProjectId);
      clearProjectTitleInput();
      addProjectFormModal.style.display = "none";
      addEvntListnrsToProj(lastAddedProjectId);
   });

   function addEvntListnrsToProj(lastAddedProjectId) {
      let lastAddedTitle = projectTitleContainers[lastAddedProjectId];
      lastAddedTitle.addEventListener("click", () => {
         let projectId = lastAddedTitle.getAttribute("data-project-title-id");
         if (projectsContainer.children.length > 0) {
            projectsContainer.remove(projectsContainer.firstChild);
         }
         renderProject(projectId);
         console.log(projectId);
      });
   }
}

export default handleProjects;
