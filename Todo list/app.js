window.addEventListener('load', initialize);
const content = document.querySelector('#todoHolder');

function initialize(event) {
  const addButton = document.querySelector('button');
  addButton.addEventListener('click', addTodo);
  document.addEventListener('click', handleDocumentClick);
}

function addTodo(event) {
  const textInput = prompt('Enter todo text here');
  if (!textInput) return;

  const todo = document.createElement('div');
  todo.setAttribute('class', 'todo');

  const todoHolder = document.createElement('div');
  const todoParagraph = document.createElement('p');
  todoParagraph.textContent = textInput;

  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type', 'checkbox');

  const buttons = document.createElement('div')

  const todoDeleteBtn = document.createElement('i');
  todoDeleteBtn.setAttribute('class', 'fas fa-trash');

  const todoEditBtn = document.createElement('i');
  todoEditBtn.setAttribute('class', 'fas fa-edit');

  todoHolder.appendChild(todoCheckbox);
  todoHolder.appendChild(todoParagraph);

  todo.appendChild(todoHolder);
  todo.appendChild(buttons);
  buttons.appendChild(todoEditBtn)
  buttons.appendChild(todoDeleteBtn)

  document.querySelector('#todoHolder').appendChild(todo);
}

function handleDocumentClick(event) {
  let toDoContent = event.target.parentNode.parentNode;
  if (event.target.classList.contains('fa-trash')) {
    content.removeChild(toDoContent);
  }
  if (event.target.classList.contains('fa-edit')) {
    const newValue = prompt("Edit the value:");
    event.target.parentNode.parentNode.querySelector('p').textContent = newValue;
  }
  else if (event.target.getAttribute('type') === 'checkbox') {
    if (event.target.checked) {
      if (!event.target.nextElementSibling.classList.contains('done')) {
        event.target.nextElementSibling.classList.add('done');
      }
    }
    else {
      event.target.nextElementSibling.classList.remove('done');
    }
  }
};