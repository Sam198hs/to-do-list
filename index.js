const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');


function addTask(){
    const taskText = taskInput.value.trim(); 

    if (taskText === '') return; // Prevent adding empty tasks

    // to add task to tasklist
    const li = document.createElement('li');
    li.textContent= taskText;

    // to add checkbox to the task
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; 
    checkbox.classList.add('checkbox');

    //adding event listener to strike through the task
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.className = 'completed'; // Change class to 'completed'
        } else {
            li.className = ''; // Remove the class when unchecked
        }
    });

    li.prepend(checkbox);

    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';

};

addTaskBtn.addEventListener('click', addTask);

// Add event listener for the Enter key
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('clearCompletedBtn').addEventListener('click', function() {
    const tasks = taskList.querySelectorAll('.checkbox');

    tasks.forEach(task => {
        if (task.checked) {
            task.parentElement.remove(); // Removes the entire <li> containing the checkbox
        }
    });
});