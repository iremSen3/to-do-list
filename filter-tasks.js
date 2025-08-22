export function renderCompletedTasks(toDoList){
  const completed=toDoList.filter(item=>item.done)
  let completedHtml="";
  completed.forEach((item)=>{
    completedHtml+=`
    <div>${item.taskName} ${item.taskDate}
    </div>
    `;
   });
  return completedHtml;
  //if done is true(checkbox is checked), it will display the all completed tasks
}
export function renderAllTasks(toDoList){
  let allTasksHtml="";
  toDoList.forEach((item)=>{
    allTasksHtml+=`
    <div>${item.taskName} ${item.taskDate}
    </div>
    `;
  });
  return allTasksHtml;
}
//there is no condition, it display the all tasks we have written so far

export function renderActiveTasks(toDoList){
  const activeTasks=toDoList.filter(item=>!item.done)
  let activeTasksHtml="";
  activeTasks.forEach((item)=>{
    activeTasksHtml+=`
    <div>${item.taskName} ${item.taskDate} 
    </div>
    `;

  });
  return activeTasksHtml;
}
//if done is false (checkbox is not checked yet), it will display the active tasks (that) are not finished yet