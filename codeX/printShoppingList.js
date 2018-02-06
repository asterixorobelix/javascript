/*
Create a function called printShoppingList that take a list of products and print the items to the screen.

var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

This should print:

Shopping list:
* Bread @ R11.00
* Milk @ R7.00
* Cheese @ R19.50
*/

var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var printShoppingList=function(shoppingList){
  
  console.log('Shopping list:');
  for(var i=0;i<shoppingList.length;i++){
    var listItem = shoppingList[i];
    console.log("* "+listItem.itemName + " @" + " R"+ listItem.price.toFixed(2));
  }
};
