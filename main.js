const input = document.querySelector(".input-task")
const tasks = document.querySelector(".list-tasks ul")
const removeAll = document.querySelector(".remove-all")
const addTask = document.querySelector(".add-task")

let arrayTasks = []
let id = 0
function task(){
    id = id + 1;
    const task = input.value.trim();

    if (task !== "" && task !== null) {
        const objTasks = {
            task,
            idTask: id
        }
        arrayTasks = [...arrayTasks, objTasks]
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please add a Task!'
            })
    }
    
    createTask()
    input.value = ""
}

function createTask(){
    clear()
    if (arrayTasks.length > 0) {
        arrayTasks.forEach(task => {
            const li = document.createElement("li")
            li.innerHTML = `${task.task} <span task-id=${task.idTask}>X</span>`
            tasks.appendChild(li)
        });
    }
}

function clear(){
    tasks.innerHTML = ""
}

function deleteList(){
    arrayTasks = []
    tasks.innerHTML = ""
}

removeAll.addEventListener("click", deleteList)
addTask.addEventListener("click", task)
