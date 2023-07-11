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

   addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectTitle = getProjectTitleInput();
      addProject(projectTitle);

      let lastAddedProject = user.projects[user.projects.length - 1];
      renderProjectTitle(projectTitle, lastAddedProject);
      clearProjectTitleInput();
      addProjectFormModal.style.display = "none";
   });
}

export default handleProjects;
