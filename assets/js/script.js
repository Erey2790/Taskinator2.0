var buttonEl = document.querySelector('#save-task');
var taskToDoEl = document.querySelector('#task-to-do');

buttonEl.addEventListener('click', function() {
    var listItemEl = document.createEl('li');
    listItemEl.className = 'task-item';
    listItemEl.textContent = 'This is a new task.';
    taskToDoEl.appendChild(listItemEl);
});