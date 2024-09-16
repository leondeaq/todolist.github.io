document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("new-task");
    const buttonAdd = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const textTask = input.value.trim();
        if (textTask === '') {
            alert("Please, write a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = textTask;

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = "Delete";
        buttonDelete.className = "delete";
        li.appendChild(buttonDelete);

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        buttonDelete.addEventListener("click", function(event) {
            event.stopPropagation();
            li.remove();
        });

        taskList.appendChild(li);
        input.value = '';
    }

    buttonAdd.addEventListener("click", addTask);

    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
})