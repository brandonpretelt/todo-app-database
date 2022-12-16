const getTodo = async (id) => {
    const getTodo = await fetch(`/${id}`);
    const getTodoData = await getTodo.json();

    const output = document.querySelector('.output');
    output.textContent = getTodoData.todoContent;
};
const id = window.location.search.split('=');

getTodo(id[1]);
