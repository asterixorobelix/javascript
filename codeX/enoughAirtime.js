  // load assert module
const assert = require('assert');


var enoughAirtime=function(list,money){


  var listSplit=list.split(",");
  var total=0;
  
  for (var i=0;i<listSplit.length;i++){
    if (listSplit[i]=="call"){
      total=total+1.88;
    }
    
    else if(listSplit[i]=="data"){
      total=total+12;
    }
    
    else {
      total=total+0.75;
    }
  }
  console.log(total);//JavaScript Numbers are Always 64-bit Floating Point
  console.log(money-total.toFixed(2));
  balance =(parseFloat(money-total).toFixed(2));//numObj.toFixed([digits])

  
  return balance;
}

//console.log(enoughAirtime('call,call,call,data,sms,sms,call,data',50));

//console.log(assert.equal(enoughAirtime('call,call,call,data,sms,sms,call,data',50),16.98));

//console.log(assert(16.98));

//console.log(assert(true));
var l = 1 ===3;
console.log(assert.equal(1,2, "1 does equal 2"));//assert only notifies you if the test fails.