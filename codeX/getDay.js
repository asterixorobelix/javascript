/*Write a function called getDay which can find out which day of the week a specific date was. 
It should return the weekday string.
*/

var getDay=function(day){
  var d = new Date(day);
  var n = d.getDay(); 
  
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return (weekDays[n]);
};

console.log(getDay('2010-04-01'));