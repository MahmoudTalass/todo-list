import {
   tabIntoProject,
   addProjectUsingForm,
} from "../controller/projects-controller";
import { clearProjectTitleInput } from "./projects";

const projectTitleContainers =
   document.getElementsByClassName("project-container");

// Display add project form
function handleProjectsInput() {
   const addProjectBtn = document.querySelector("#add-project-btn");
   const addProjectForm = document.querySelector("#add-project-form");
   const addProjectFormModal = document.querySelector(
      "#add-project-form-modal"
   );

   // Display add project form when add project btn is clicked
   addProjectBtn.addEventListener("click", () => {
      addProjectFormModal.style.display = "block";
   });

   // Remove add project form when user clicks on window
   window.addEventListener("click", (e) => {
      if (e.target === addProjectFormModal) {
         addProjectFormModal.style.display = "none";
         clearProjectTitleInput();
      }
   });

   /*
    * When add project form is submitted, create a card
    * title slot for the project along with the utility buttons
    */

   addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addProjectUsingForm();
      clearProjectTitleInput();
      addProjectFormModal.style.display = "none";
   });
}

/*
 *  Add event listener to last added project title and
 *  give it tabbing ability
 */
function addEvntListnrsToProj(recentProjectId) {
   let recentTitle = projectTitleContainers[recentProjectId];

   recentTitle.addEventListener("click", tabIntoProject);
}

export { addEvntListnrsToProj, handleProjectsInput };
