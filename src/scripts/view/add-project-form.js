
function renderAddProjectForm() {
    const form = document.createElement("form")
    form.classList.add("add-project-form")
    form.id = "add-project-form";

    const inputContainer = document.createElement("div")
    inputContainer.classList.add("add-project-input-container")

    const projectTitleInputLabel = document.createElement("label")
    projectTitleInputLabel.setAttribute("for", "project-title-input")
    projectTitleInputLabel.classList.add("project-title-input-label");

    const projectTitleInput = document.createElement("input:text")
    projectTitleInput.id = "project-title-input"
    projectTitleInput.classList.add("project-title-input");
    projectTitleInput.name = "title"
    projectTitleInput.required = true;

    inputContainer.appendChild(projectTitleInputLabel)
    inputContainer.appendChild(projectTitleInput)

    const createProjectBtn = document.createElement("button")
    createProjectBtn.id = "create-project-btn"
    createProjectBtn.classList.add("create-project-btn")

    form.appendChild(inputContainer)
    form.appendChild(createProjectBtn)

}