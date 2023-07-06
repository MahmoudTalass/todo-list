const TodoItem = (title, description, duedate, priority, todoIds, existsInProject) => {
   let state = {
      isComplete: false,
      id: todoIds,
      title: title,
      description: description,
      duedate: duedate,
      priority: priority,
      existsInProject: existsInProject
   };

   return {
      title: state.title,
      description: state.description,
      duedate: state.duedate,
      priority: state.priority,
      isComplete: state.isComplete,
      id: state.id,
      existsInProject: state.existsInProject
   };
};

function createTodoItem(title, desc, duedate, priority, todoIds, existsInProject) {
   return TodoItem(title, desc, duedate, priority, todoIds, existsInProject);
}

export { createTodoItem };
