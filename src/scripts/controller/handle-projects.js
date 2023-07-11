function handleProjects() {
   const addProjectBtn = document.querySelector("#add-project-btn");

   const addProjectForm = document.querySelector("#add-project-form");
   const addProjectFormModal = document.querySelector(
      "#add-project-form-modal"
   );

   addProjectBtn.addEventListener("click", () => {
      console.log("yes");
      addProjectFormModal.style.display = "block";
   });

   window.addEventListener("click", (e) => {
      if (e.target === addProjectFormModal) {
         addProjectFormModal.style.display = "none";
      }
   });
}

export default handleProjects;
