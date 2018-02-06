/*
A local shop wants some help to determine which of their departments are the most profitable
and which day of the week is the most profitable. 
Write two functions called mostProfitableDepartment, mostProfitableDay to help them to answer these questions.

*/

var mostProfitableDepartment=function(salesData){
    var departmentsSales={};
    var maxSales=0;
    var maxDepartment="";


    for(var i=0;i<salesData.length;i++){
        var currentObj = salesData[i];
        var currentDepartment=currentObj.department;
        //console.log(currentDepartment);
        if(departmentsSales[currentDepartment]===undefined){
            departmentsSales[currentDepartment]=salesData[i].sales;
            //console.log(departmentsSales[currentDepartment]);
        }

        else{
            departmentsSales[currentDepartment]+=salesData[i].sales;

            if(departmentsSales[currentDepartment]>maxSales){
                maxSales=departmentsSales[currentDepartment];
                maxDepartment=currentDepartment;
            }

        }

    }

    console.log(departmentsSales)
    console.log(maxSales);
    console.log(maxDepartment);
    return maxDepartment;

};

var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

mostProfitableDepartment(salesData);