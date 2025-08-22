export function isValidDate(taskDate){
if(taskDate===''){
  alert('Enter a Valid Date')
  return false;
}
const today=new Date() //create new date object,contain today's date
today.setHours(0,0,0,0); //we use 'setHours' to reset the time, so we compare dates only
const taskDateObject=new Date(taskDate); //since taskDate is a string, we create a date object to compare 
if(taskDateObject<today)
{
  alert('Enter a Valid Task Date');
  return false;
}
else{
    return true;
 }
}
export function isValidName(taskName)
{
 if(taskName===''){
    alert("Enter a Valid Task")
    return false;
  }
 return true;
 }