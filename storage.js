export function setStorage(toDoList){
 localStorage.setItem('list',JSON.stringify(toDoList));
}
//convert toDoList object to a string since we can save the data to local storage only in string form.
//we used the 'JSON.stringify' built-in function for this

export function getStorage(){
 return localStorage.getItem('list');
}
//use same name in getItem to get it