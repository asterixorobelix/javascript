/*
Write a function called yearsAgo that takes in a year and return how many years ago that was. 
Use the Date objects getFullYear function.
*/

var yearsAgo=function(year){
	var yearString =year.toString();//Date works with strings
  var d = new Date(yearString);
  console.log(d);
  var n = d.getFullYear(); 
  console.log(n);
  
  return (2016-n);
};

//console.log(yearsAgo(1970));

console.log(yearsAgo(1986));