document.addEventListener('DOMContentLoaded', loadTasksFromStorage);

// Select elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');
const notification = document.getElementById('notification');

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        showNotification('Please enter a task', 'red');
        return;
    }

    const taskItem = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add to local storage
    saveTaskToLocalStorage(taskItem);

    // Add task to UI
    createTaskElement(taskItem);

    taskInput.value = '';
    showNotification('Task added successfully', 'green');
}

// Function to create task element in UI
function createTaskElement(taskItem) {
    const li = document.createElement('li');
    li.setAttribute('data-id', taskItem.id);
    li.className = taskItem.completed ? 'completed' : '';

    li.innerHTML = `
        <span class="task-text" contenteditable="true">${taskItem.text}</span>
        <div>
            <button onclick="toggleTaskStatus(${taskItem.id})">Mark Complete</button>
            <button onclick="deleteTask(${taskItem.id})">Delete</button>
        </div>
    `;

    todoList.appendChild(li);

    // Add transition for smooth effect
    li.style.transition = 'opacity 0.3s ease';
}

// Function to toggle task status
function toggleTaskStatus(taskId) {
    const taskElement = document.querySelector(`[data-id='${taskId}']`);
    taskElement.classList.toggle('completed');

    let tasks = getTasksFromLocalStorage();
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to delete a task
function deleteTask(taskId) {
    const taskElement = document.querySelector(`[data-id='${taskId}']`);
    taskElement.remove();

    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    showNotification('Task deleted', 'green');
}

// LocalStorage functions
function saveTaskToLocalStorage(taskItem) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(taskItem);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}

function loadTasksFromStorage() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => createTaskElement(task));
}

// Notification function
function showNotification(message, color) {
    notification.textContent = message;
    notification.style.color = color;
    setTimeout(() => {
        notification.textContent = '';
    }, 2000);
}
