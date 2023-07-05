let todoId = 0;

const TodoItem = (title, description, duedate, priority) => {
    let isComplete = false;
    const id = todoId++;
    return {
        title,
        description,
        duedate,
        priority,
        isComplete,
        id
    }
}

function createTodoItem() {
    const title = prompt("Whats the title of your todo?")
    const description = prompt('what is its description?')
    const duedate = prompt("when is it due?")
    const priority = prompt("what is its priority? urgent/normal ")

    return TodoItem(title, description, duedate, priority)
}