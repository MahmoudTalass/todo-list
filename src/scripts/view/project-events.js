import {
   tabIntoProject,
   addProjectUsingForm,
   deleteProject,
   displayFirstProject,
} from "../controller/projects-controller";
import { clearProjectTitleInput } from "./projects";

// Display add project form
function handleProjectsInput() {
   const addProjectBtn = document.querySelector("#add-project-btn");
   const addProjectForm = document.querySelector("#add-project-form");
   const addProjectFormModal = document.querySelector(
      "#add-project-form-modal"
   );
   const projectTitlesContainer = document.querySelector(
      "#projects-titles-container"
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


   projectTitlesContainer.addEventListener("click", (e) => {
      const isProjectTabBtn = e.target.classList.contains("project-tab-btn")
      const isDeleteBtn = e.target.classList.contains("remove-project-icon");

      if (isProjectTabBtn) {
         tabIntoProject(e)
      }

      if (isDeleteBtn) {
         deleteProject(e);
      }
   })

   addEventListener("load", () => {
      displayFirstProject();
   })
}



export { handleProjectsInput };
