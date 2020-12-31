// Task List App
let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function name(event) {
    // event.preventDefault();

    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim();  // this removes extra space before and after your input

    //get tasks from local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.push(task);
    // set to local Storage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTasks();
    window.reload();
})

//display tasks
let displayTasks = () => {
    let taskListEl = document.querySelector('#task-list')
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if (taskList.length !== 0) {
        let eachTask = '';
        for (let task of taskList) {
            eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
                            <span class="font-weight-bold">${task}</span>
                            <button class="close">
                                <i class="fa fa-times-circle"></i>
                            </button>
                        </li>`
        }
        taskListEl.innerHTML = eachTask;
    }
}

displayTasks();

//remove tasks
let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function name(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('fa-times-circle')) {
        let actualEl = targetElement.parentElement.parentElement;
        let selectedTask = actualEl.innerText;

        //get task from local storage
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(function (task) {
            return task.trim() !== selectedTask.trim();
        });
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTasks();
    }
})