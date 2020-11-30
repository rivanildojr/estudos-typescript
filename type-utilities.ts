type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

// Readonly<Todo> => Coloca os dados do Todo em Readonly

const todo: Readonly<Todo> = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
}

console.log(todo);

//todo.completed = true;

// Partial<Todo> => Deixa os dados de Todo opcionais

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {... todo, ...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2);

// Pick - Pick<Todo, "title" | "completed"> => Pega somente as propriedades passadas
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

console.log(todo3);

// Omit - Omit<Todo, "description"> => Omite os dados passado

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: true
}

console.log(todo4);
