let todoId = 0;

const TodoItem = (title, description, duedate, priority) => {
   let state = {
      isComplete: false,
      id: todoId++,
   };

   return {
      title,
      description,
      duedate,
      priority,
      state,
   };
};

function createTodoItem() {
   const title = prompt("Whats the title of your todo?");
   const description = prompt("what is its description?");
   const duedate = prompt("when is it due?");
   const priority = prompt("what is its priority? urgent/normal ");

   return TodoItem(title, description, duedate, priority);
}

export { createTodoItem };
