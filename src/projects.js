const projectIds = 0;

const Project = (title) => {
   let todos = [];
   const id = projectIds++;

   return {
      todos,
      id,
   };
};

function createProject() {
   const title = prompt("whats the title of your project");
   Project(title);
}
