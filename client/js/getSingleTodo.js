const getTodo = async (id) => {
    const getTodo = await fetch(`http://localhost:3001/${id}`);
    const getTodoData = await getTodo.json();
    console.log(getTodoData);
    const output = document.querySelector('.output');
    output.textContent = getTodoData.todoContent;
};

const renderCategories = async (id) => {
    const getTodo = await fetch(`http://localhost:3001/${id}`);
    const getTodoData = await getTodo.json();
    const categories = getTodoData.category;
    categories.forEach((item) => {
        const output = document.querySelector('.output');
        if (item === '') {
            return;
        } else if (item !== '') output.textContent += ` ${item}`;
    });
};
const id = window.location.search.split('=');

getTodo(id[1]);
renderCategories(id[1]);
