import renderHeader from "./header";
import renderSidebar from "./sidebar";
import { renderAddProjectForm, renderProject, renderProjectsContainer, renderProjectTitle } from "./projects";
import { renderTodo, appendTodoToProject, renderAddTodoForm } from "./todos";

function renderPage() {
    renderHeader();
    renderSidebar()
    renderProjectsContainer()

    renderProject(0)
    renderProjectTitle("myProject", 0)
    appendTodoToProject(0, renderTodo("task1", "desc", "1/1/2002", "normal", 1))

        renderProjectTitle("myProject", 0);

    appendTodoToProject(
       0,
       renderTodo("task1", "desc", "1/1/2002", "normal", 1)
    );
     appendTodoToProject(
        0,
        renderTodo("task1", "desc", "1/1/2002", "normal", 1)
     );
    

    renderAddTodoForm();
    renderAddProjectForm()
}

export default renderPage;
