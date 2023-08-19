const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        
        newTask.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
        
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
