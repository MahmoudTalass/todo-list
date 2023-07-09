import renderHeader from "./header";
import renderSidebar from "./sidebar";
import { renderProjectsContainer } from "./projects";

function renderPage() {
    renderHeader();
    renderSidebar()
    renderProjectsContainer()

}

export default renderPage;
