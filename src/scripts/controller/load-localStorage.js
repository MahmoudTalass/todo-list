import { addProjectToPage } from "./handle-projects";
import { createUser, setUser } from "../model/user";

function loadLocalStorage() {
    let user = JSON.parse(localStorage.getItem("user"))
    setUser(user)

    let userProjects = user.projects;

    userProjects.forEach((project) => {
        addProjectToPage(project.title, project.id)
    })
}

export default loadLocalStorage;