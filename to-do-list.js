import { setStorage , getStorage} from "./storage.js";
import { renderCompletedTasks , renderAllTasks, renderActiveTasks} from "./filter-tasks.js";
import { deleteFunction,editSaveFunction,checkbox } from "./taskEvents.js";
import { isValidDate,isValidName } from "./validationTask.js";
//with import, we can use function without any naming conflicts and order of js scripts does not matter

const toDoList=JSON.parse(getStorage())||[];
showTheList();
//create a new list from localstorage, or initialize an empty list if there is no saved data
//because we are able to save data in storage only in string form, we have to convert it to object again
//we used the 'JSON.parse' function for this

function addToDo(){
  const inputName=document.querySelector('.js-input-name');
  const taskName=inputName.value;
  const inputDate=document.querySelector(".js-input-date");
  const taskDate=inputDate.value;
  if(isValidName(taskName)&&isValidDate(taskDate)){ //check validation condition. If task name is empty or the date is unvalid date, we will passed this condition without applying it 
    toDoList.push({
    taskName,  //using 'shorthand' because property names match variables names
    taskDate,
    done:false
    });
    inputName.value=''; //after pushing, restart the inputs
    inputDate.value='';
    setStorage(toDoList);
    showTheList(); //now that we added the new object to our array, we can display it on the page

  }
}
document.querySelector('.add-tasks').addEventListener('click',addToDo); // listen for the add button. if there there is a 'click' event,it will call the addToDo function




function showTheList(){
  let listHtml=""; //save data. 'accumulator'
  for(let i=0; i<toDoList.length;i++){
    const {taskName, taskDate}=toDoList[i];
    const html = `
    <div class="task-row ${toDoList[i].done ? "new-class" : ""}"> 
    <input type="checkbox" class="js-checkbox" ${toDoList[i].done ? "checked" : ""}>
    <div>${taskName}</div>
    <div>${taskDate}</div>
    <button class="delete-button js-delete-button"></button>
    <button class="js-edit-button"></button>
    </div>
    `; //generate the html for each task, so that we can access html with javascript
    //with this, if done is true,we can add a new class for styling
    //allows use to mark tasks as done or not
    listHtml+=html;
  };
  document.querySelector('.js-input-task').innerHTML=listHtml;
  taskEvents(); //this function add interactivity ('addEventListener')
  filters(); //let us see status of tasks
}

function filters(){
  const completedHtml=renderCompletedTasks(toDoList);
  document.querySelector('.completed').innerHTML=completedHtml;

  const allTasksHtml=renderAllTasks(toDoList);
  document.querySelector('.all-tasks').innerHTML=allTasksHtml;

  const activeTasksHtml=renderActiveTasks(toDoList);
  document.querySelector('.active-tasks').innerHTML=activeTasksHtml;
};

function taskEvents(){
  deleteFunction(toDoList,setStorage,showTheList);
  editSaveFunction(toDoList,setStorage,showTheList,isValidDate,isValidName);
  checkbox(toDoList,setStorage,showTheList);
};
