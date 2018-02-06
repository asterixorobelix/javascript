/*
Write a function called findItemsOver20 that takes a list of objects, 
each object having 2 attributes one called name and the other qty. 
The function should return all the products that have a quantity higher than 20.

Write a function called findItemsOver that takes a list of objects each with a name and qty attribute. 
And also a second parameter which is a threshold for the quantity of items available. 
The function should return products that have quantity higher than the threshold.

For example:


var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = findItemsOver(itemList, 25)
//results look like this now.
var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

*/

var findItemsOver20=function(List,threshold){

	var newList=[];


	for(var i=0;i<List.length;i++){
		if(List[i].qty>threshold){
			newList.push(List[i]);
		}

	}
	return newList;


}

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var expensiveItems = findItemsOver20(itemList,4);

console.log(expensiveItems);