var shoppingList=function(food){
  var foodSplit=food.split(", ");
  //console.log(foodSplit);
  
  if(foodSplit.length!=0){
  
  console.log("Shopping list: \n");
              
  for (var i=0;i<foodSplit.length;i++){
    console.log("* "+foodSplit[i]+"\n");
  }
  }
  return null;
};

console.log(shoppingList('1x bread, 6x hotdog rolls, 2x tubs of margarine '));