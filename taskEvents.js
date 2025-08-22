export function deleteFunction(toDoList,setStorage,showTheList){
  document.querySelectorAll('.js-delete-button').forEach((button,i)=>{
    button.addEventListener("click",()=>{ //we listen the buttons and when clicked, we use splice function to delete an element (splice(index,number of values we want to delete))
      toDoList.splice(i,1);
      setStorage(toDoList);
      showTheList();
      //after we update te localstorage and display new list


    });
  });
}

export function editSaveFunction(toDoList,setStorage,showTheList,isValidDate,isValidName){
  document.querySelectorAll('.js-edit-button').forEach((button,i)=>{
    button.addEventListener("click",()=>{
      const taskDiv=button.parentElement;
      //document queryselector allows us to access the parent element of the selected element with'.parentElement' 
      //here, taskdiv represents a row that contains inputs and button
      taskDiv.innerHTML=`<input placeholder="Edit your task" class="js-edited-task-name" value="${toDoList[i].taskName}">
      <input type=date class="js-edited-task-date" value="${toDoList[i].taskDate}">
      <button class=js-save-button></button>`;

      taskDiv.querySelector('.js-save-button').addEventListener("click",()=>{
      const newName=taskDiv.querySelector('.js-edited-task-name').value;
      const newDate=taskDiv.querySelector('.js-edited-task-date').value;
      if(!isValidName(newName)||!isValidDate(newDate)){
        //validate the inputs
        return;
        //if they are not valid, stop execution after displaying the alert
      }
      //if inputs are valid, it continue from here
      toDoList[i]={
        taskName:newName,
        taskDate:newDate,
        done:toDoList[i].done //before saving, we don't want to change the previous 'done' value so we keep it
      };
     setStorage(toDoList);
     showTheList();

     });

   });

  });
};

export function checkbox(toDoList,setStorage,showTheList){
  document.querySelectorAll('.js-checkbox').forEach((box,i)=>{
    const taskDiv=box.parentElement;

    box.addEventListener("change",()=>{
      toDoList[i].done=box.checked; //checking the box makes done value true
      if(box.checked){
       taskDiv.classList.add('new-class');
       //with classList attributes we can 'add' a new class to style it
       //also can remove it with .remove();

      }
      else{
       taskDiv.classList.remove('new-class');
       //if checkbox 

      }
      setStorage(toDoList);
      showTheList();
    });

  });
}