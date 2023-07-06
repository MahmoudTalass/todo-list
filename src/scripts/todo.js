const TodoItem = (title, description, duedate, priority, todoIds) => {
   let state = {
      isComplete: false,
      id: todoIds,
      title: title,
      description: description,
      duedate: duedate,
      priority: priority,
   };

   return {
      title: state.title,
      description: state.description,
      duedate: state.duedate,
      priority: state.priority,
      isComplete: state.isComplete,
      id: state.id,
   };
};

function createTodoItem(title, desc, duedate, priority, todoIds) {
   return TodoItem(title, description, duedate, priority, todoIds);
}

export { createTodoItem };
