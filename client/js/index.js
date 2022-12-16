/* const getTodos = async () => {
    
}; */

//const getTodoBtn = document.querySelector('[data-btn="get-todos"]');
//if (getTodoBtn) {
document.addEventListener('DOMContentLoaded', async () => {
    const todosList = document.querySelector('.todos');
    const response = await fetch('/todos');
    const data = await response.json();
    console.log(data.todos);
    console.log(data, '<---');
    data.todos.forEach((item) => {
        todosList.innerHTML += `<li>${item.todoContent}</li>`;
    });
});
//}

/* 

   headers: {
      'Content-Type': 'application/json',
    }
 */
