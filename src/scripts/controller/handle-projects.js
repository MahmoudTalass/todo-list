import {
   getProjectTitleInput,
   renderProject,
   renderProjectTitle,
} from "../view/projects";
import { addProject, user } from "../model/user";
import { addEvntListnrsToProj } from "../view/project-events";
import { handleTodosInput } from "../view/todo-events";

function addProjectUsingForm() {
   const projectTitle = getProjectTitleInput();
   addProject(projectTitle);
   const recentProjectId = user.projects[user.projects.length - 1].id;
   addProjectToPage(projectTitle, recentProjectId);
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
      handleTodosInput();
   }
}

// Redners the project title to the page and adds event to it
function addProjectToPage(projectTitle, projectId) {
   renderProjectTitle(projectTitle, projectId);
   addEvntListnrsToProj(projectId);
}

export { addProjectToPage, tabIntoProject, addProjectUsingForm };
