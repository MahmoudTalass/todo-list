import { getProjectTitleFromForm } from "../view/projects";
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
      const projectTitle= getProjectTitleFromForm();
      addProject(projectTitle)
      console.log(user)

   });
}

export default handleProjects;
