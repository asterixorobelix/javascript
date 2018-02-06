/*

Create a function called shoppingList that calculates the total price for items on a shopping list.

Use these two shopping lists to test.

//
var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];
*/
const assert = require('assert');

var shoppingList=function(List){
  
  var total =0;
  //console.log('Shopping list:');
  for(var i=0;i<List.length;i++){
    console.log(List.length);
    var listItem = List[i];
    console.log(List[i].price);
    total=total+listItem.price;
    //console.log("* "+listItem.itemName + " @" + " R"+ listItem.price.toFixed(2));
  }
  console.log(total);
  return total;
};

// var shoppingList1 = [
//     { itemName : 'Bread', price : 11.00 },
//     { itemName : 'Milk', price : 7.00 },
//     { itemName : 'Cheese', price : 19.50 }
// ];

assert.equal(shoppingList([
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
]),37.50,"Wrong!");
