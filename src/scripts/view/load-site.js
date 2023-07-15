import renderHeader from "./header";
import renderSidebar from "./sidebar";
import { renderAddProjectForm, renderEditProjectTitleForm, renderProjectsContainer } from "./projects";
import { renderAddTodoForm } from "./todos";

function renderPage() {
    renderHeader();
    renderSidebar()
    renderProjectsContainer()
    renderAddTodoForm();
    renderAddProjectForm()
    renderEditProjectTitleForm()
}

export default renderPage;
