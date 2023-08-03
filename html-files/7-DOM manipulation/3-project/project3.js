let addTask = document.getElementById('add-task');
let inputTask = document.getElementById('input-task');
let taskContainer = document.getElementById('task-container');

addTask.addEventListener('click', function todo(){
    const task = document.createElement('div')
    task.classList.add('task')
    const li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('buttonCheck')
    checkBtn.innerHTML = "<i class = 'fa fa-check'></i>"
    task.appendChild,checkBtn
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteButton')
    deleteBtn.innerHTML ="<i class ='fa-solid fa-trash-can'></i>"
    task.appendChild(deleteBtn)

    if(!inputTask.value){
        alert("Please provide the details in te input box" )
        return
    }
    taskContainer.appendChild(task)
    inputTask.value ="";
    
    deleteBtn.addEventListener('click', function (e) {
       let target = e.target
       target.parentElement.parentElement.remove()

})
})
