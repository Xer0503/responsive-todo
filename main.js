const taskTable = document.getElementById('taskTable')
const inputTask = document.getElementById('input')
const inputDate = document.getElementById('input-date')
const taskBtn = document.getElementById('task-btn')
const taskList = [
    {
        taskName: 'Task 1',
        Date: '2025-02-01',
    }
]
taskBtn.addEventListener('click', function(){
    const taskName = inputTask.value
    const Date = inputDate.value
    taskList.push({
        taskName: taskName,
        Date: Date
    })
    inputTask.value = ''
    inputDate.value = ''
    console.log(taskList)
    renderTable()
})
function renderTable(){
    let listHtml = ``
    const arrayTaskObgj = taskList
    
    for(let i = 1; i < arrayTaskObgj.length; i++){
        const task = arrayTaskObgj[i]
        listHtml += `
        <tr>
            <td class="taskListNo">${i}</td>
            <td class="taskListName">${task.taskName}</td>
            <td class="taskListDate">${task.Date}<input type="checkbox" class="task-checkbox"> </td>
            <td class="taskListDelete">
                <button class="delete-btn" onclick="
                    taskList.pop(${i}); renderTable()
                ">
                    <img src=icons8-delete-64.png id="delete-icon">
                </button>
            </td>
        </tr>`
    }
    taskTable.innerHTML = listHtml
}
taskTable.addEventListener('click', function(e){
    if(e.target.classList.contains('taskListName') || e.target.classList.contains('task-checkbox')){
        const row = e.target.closest('tr')
        row.classList.toggle('checked')
    }
})