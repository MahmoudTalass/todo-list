import renderHeader from "./header";
import renderSidebar from "./sidebar";
import { renderAddProjectForm, renderEditProjectTitleForm, renderProjectsContainer } from "./projects";
import { renderAddTodoForm, renderEditTodoForm } from "./todos";

function renderPage() {
    renderHeader();
    renderSidebar()
    renderProjectsContainer()
    renderAddTodoForm();
    renderEditTodoForm();

    renderAddProjectForm()
    renderEditProjectTitleForm()
}

export default renderPage;
