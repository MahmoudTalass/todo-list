import {
   tabIntoProject,
   addProjectUsingForm,
   removeProject,
   displayFirstProject,
} from "../controller/projects-controller";
import { editProjectTitle } from "../controller/projects-controller";
import { clearProjectFormInput } from "./projects";

// Display add project form
function handleProjectsInput() {
   const addProjectBtn = document.querySelector("#add-project-btn");
   const addProjectForm = document.querySelector("#add-project-form");
   const addProjectFormModal = document.querySelector(
      "#add-project-form-modal"
   );

   const editProjectForm = document.querySelector("#edit-project-form");
   const editProjectFormModal = document.querySelector(
      "#edit-project-form-modal"
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
         clearProjectTitleInput("add");
      }

      if (e.target === editProjectFormModal) {
         editProjectFormModal.style.display = "none";
         clearProjectTitleInput("edit");
      }
   });

   /*
    * When add project form is submitted, create a card
    * title slot for the project along with the utility buttons
    */

   addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addProjectUsingForm();
      clearProjectFormInput("add");
      addProjectFormModal.style.display = "none";
   });

   editProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      editProjectTitle();
      clearProjectFormInput("edit");
      editProjectFormModal.style.display = "none"
   });

   projectTitlesContainer.addEventListener("click", (e) => {
      const isProjectTabBtn = e.target.classList.contains("project-tab-btn");
      const isDeleteBtn = e.target.classList.contains("remove-project-icon");
      const isEditBtn = e.target.classList.contains("edit-project-icon");

      if (isProjectTabBtn) {
         tabIntoProject(e);
      }

      if (isDeleteBtn) {
         removeProject(e);
      }

      if (isEditBtn) {
         editProjectFormModal.style.display = "block";
         const project = e.target.closest(".project-container");
         const projectId = project.getAttribute("data-project-title-id");
         editProjectForm.setAttribute("data-project-being-edited", projectId);
      }
   });

   addEventListener("load", () => {
      if (projectTitlesContainer.children.length > 0) displayFirstProject();
   });
}

export { handleProjectsInput };
