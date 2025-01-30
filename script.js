document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement("li");
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.style.fontSize = "12px";
    taskContent.style.alignItems = "center";
    taskContent.style.width = "70%";
    taskItem.appendChild(taskContent);

    taskItem.addEventListener("click", function(){
        taskItem.classList.toggle("completed");
    });

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "Delete";
    deleteTaskBtn.style.width = "30%"
    deleteTaskBtn.addEventListener("click", function(){
        taskItem.remove();
    });
    taskItem.appendChild(deleteTaskBtn);

    document.getElementById("taskList").appendChild(taskItem);
    taskInput.value = "";
}