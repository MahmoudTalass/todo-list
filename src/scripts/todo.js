const TodoItem = (title, description, duedate, priority, todoIds) => {
   let state = {
      isComplete: false,
      id: todoIds,
   };

   return {
      title,
      description,
      duedate,
      priority,
      isComplete: state.isComplete,
      id: state.id
   };
};

function createTodoItem(todoIds) {
   const title = prompt("Whats the title of your todo?");
   const description = prompt("what is its description?");
   const duedate = prompt("when is it due?");
   const priority = prompt("what is its priority? urgent/normal ");


   return TodoItem(title, description, duedate, priority, todoIds);
}

export { createTodoItem };
