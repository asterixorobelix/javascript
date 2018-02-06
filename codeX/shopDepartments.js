/*
A local shop wants some help to determine which of their departments are the most profitable
and which day of the week is the most profitable. 
Write two functions called mostProfitableDepartment, mostProfitableDay to help them to answer these questions.

Here is their sales data:

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
*/

var mostProfitableDepartment=function(data){
	var hardwareTotal=0;
	var outdoorTotal=0;
	var carpentryTotal=0;

	for(var i=0;i<data.length;i++){
		if(data[i].department=="hardware"){
			hardwareTotal=hardwareTotal+data[i].sales;
		}

		else if(data[i].department=="outdoor"){
			outdoorTotal=outdoorTotal+data[i].sales;
		}

		else{
			carpentryTotal=carpentryTotal+data[i].sales;
		}
	}

	console.log("Hardware sales "+hardwareTotal,"Outdoor sales "+outdoorTotal,"carpentry sales "+carpentryTotal);

	if(hardwareTotal>outdoorTotal&&hardwareTotal>carpentryTotal){
		console.log("hardware had the greatest sales");
		return "hardware";
	}

	else if(outdoorTotal>hardwareTotal&&outdoorTotal>carpentryTotal){
		console.log("outdoor had the greatest sales");
		return "outdoor";
	}

	else if(carpentryTotal>outdoorTotal&&carpentryTotal>hardwareTotal){
		console.log("carpentry had the greatest sales");
		return "carpentry";
	}

	
};

var mostProfitableDay=function(data){
	var mondayTotal=0;
	var tuesdayTotal=0;
	var wednesdayTotal=0;
	var thursdayTotal=0;
	var fridayTotal=0;

	for(var i=0;i<data.length;i++){
		if(data[i].day=="Monday"){
			mondayTotal=mondayTotal+data[i].sales;
		}

		else if(data[i].day=="Tuesday"){
			tuesdayTotal=tuesdayTotal+data[i].sales;
		}

		else if(data[i].day=="Wednesday"){
			wednesdayTotal=wednesdayTotal+data[i].sales;
		}

		else if(data[i].day=="Thursday"){
			thursdayTotal=thursdayTotal+data[i].sales;
		}

		else if(data[i].day=="Friday"){
			fridayTotal=fridayTotal+data[i].sales;
		}


	}

	console.log("Mon "+mondayTotal,"Tues "+tuesdayTotal,"Wed "+wednesdayTotal,"Thurs "+thursdayTotal,"Fri "+fridayTotal)

	if(mondayTotal>tuesdayTotal&&mondayTotal>wednesdayTotal&&mondayTotal>thursdayTotal&&mondayTotal>fridayTotal){
		console.log("monday is the most profitable");
		return "Monday";
	}


	else if(tuesdayTotal>mondayTotal&&tuesdayTotal>wednesdayTotal&&tuesdayTotal>thursdayTotal&&tuesdayTotal>fridayTotal){
		console.log("tuesday is the most profitable");
		return "Tuesday";
	}

	else if(wednesdayTotal>mondayTotal&&wednesdayTotal>tuesdayTotal&&wednesdayTotal>thursdayTotal&&wednesdayTotal>fridayTotal){
		console.log("wednesday is the most profitable");
		return "Wednesday";
	}

	else if(thursdayTotal>mondayTotal&&thursdayTotal>tuesdayTotal&&thursdayTotal>wednesdayTotal&&thursdayTotal>fridayTotal){
		console.log("thursday is the most profitable");
		return "Thursday";
	}

	else{
		console.log("friday is the most profitable");
		return "Friday";
	}





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
mostProfitableDay(salesData);