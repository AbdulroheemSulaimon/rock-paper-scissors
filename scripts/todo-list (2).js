const todoList = ['wash dishes', 'make dinner'];

renderTodolist();

function renderTodolist() {
    let todoListHTML = '';


for (let i = 0; i < todoList.length; i++) {
  const todo =  todoList[i];
  const html = `<p>${todo}</p>`;

  todoListHTML += html;
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}
}


function addBtn() {
    const inputElement = document.querySelector('.js-todo-name');
    const value = inputElement.value;
    todoList.push(value);

    //  console.log(todoList);
    inputElement.value = '';
    renderTodolist();

}