import { addProjectToPage } from "./handle-projects";
import { createUser } from "../model/user";

function loadLocalStorage() {
    let user = JSON.parse(localStorage.getItem("user"))
    createUser(user.username)

    let userProjects = user.projects;

    userProjects.forEach(project => {
        addProjectToPage(project.title)
    })
}

export default loadLocalStorage;