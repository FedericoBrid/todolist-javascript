const input = document.querySelector(".input-task")
const tasks = document.querySelector(".list-tasks ul")
const removeAll = document.querySelector(".remove-all")
const addTask = document.querySelector(".add-task")

let arrayTasks = []

getArrayLocalStorage()
function getArrayLocalStorage(){
    document.addEventListener('DOMContentLoaded', ()=>{
        arrayTasks = JSON.parse(localStorage.getItem("arrayTasks")) || []
        print()
    })
    tasks.addEventListener("click", deleteTask)
}

function deleteTask(e){
    const idTask = e.target.getAttribute('task-id')
    arrayTasks = arrayTasks.filter(task => task.idTask != idTask)
    print()

}

function task(){
    const task = input.value.trim();

    if (task !== "" && task !== null) {
        const objTasks = {
            task,
            idTask: Date.now()
        }
        arrayTasks = [...arrayTasks, objTasks]
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please add a Task!'
        })
    }
    
    print()
    input.value = ""
}

function print(){
    clear()
    if (arrayTasks.length > 0) {
        arrayTasks.forEach(task => {
            const li = document.createElement("li")
            li.innerHTML = `${task.task} <span class="classli" task-id=${task.idTask}>X</span>`
            tasks.appendChild(li)
        });
    }
    addToLocalStorage()
}

function addToLocalStorage(){
    localStorage.setItem("arrayTasks", JSON.stringify(arrayTasks))
}

function clear(){
    tasks.innerHTML = ""
}

function deleteList(){
    id = 0
    arrayTasks = []
    print()
}

function keydown(e) {
    if(e.code === "Enter") {
        task();
    }
}

removeAll.addEventListener("click", deleteList)
addTask.addEventListener("click", task)
input.addEventListener("keydown", keydown)
