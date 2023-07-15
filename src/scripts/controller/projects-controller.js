import {
   getProjectTitleInput,
   renderProject,
   renderProjectTitle,
} from "../view/projects";
import { addProject, removeProject, user } from "../model/user";
import { addEvntListnrsToProj } from "../view/project-events";
import { handleTodosInput } from "../view/todo-events";
import { addTodoToPage, loadAllTodosInFirstProj, loadAllTodosInProject } from "./todos-controller";


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
      loadAllTodosInProject(targetProjectId);
}

function displayFirstProject() {
   renderProject(0);
   loadAllTodosInFirstProj();
}

// Renders the project title to the page and adds event to it
function addProjectToPage(projectTitle, projectId) {
   renderProjectTitle(projectTitle, projectId);
}

function deleteProject(e) {
   const projectTitlesContainer = document.querySelector(
      "#projects-titles-container"
   );
   const projectTitle = e.target.closest(".project-container");
   const projectTitleId = projectTitle.getAttribute("data-project-title-id");

   const projectsContainer = document.querySelector("#projects-container");
   const project = document.querySelector("#project");
   const projectId = project.getAttribute("data-project-id")

   removeProject(projectTitleId)
   projectTitlesContainer.removeChild(projectTitle);

   // if the project being removed is also being displayed,
   // remove it from being displayed
   if (projectId === projectTitleId) {
      projectsContainer.removeChild(project)
   }
}

export { addProjectToPage, tabIntoProject, addProjectUsingForm, deleteProject, displayFirstProject };
