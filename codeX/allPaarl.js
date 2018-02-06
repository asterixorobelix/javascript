/*
Hello andre
*/

var allPaarl=function(licenceList,ID){
	var licenceListSplit=licenceList.split(", ")
	console.log(licenceListSplit);
  var paarlList=[];
  
  for(var i=0;i<licenceListSplit.length;i++){
    if (licenceListSplit[i].startsWith(ID)){
      //console.log(licenceListSplit[i]);
        paarlList.push(licenceListSplit[i]);
    }
  }
  console.log(paarlList);
  var paarlListString =paarlList.join(" ");
  return paarlList;
}

console.log(allPaarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864","CJ"));