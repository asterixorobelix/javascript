/*
One of your friends wants to start a second hand car dealership and is doing some market research.

He gave you some data that he wants some help with analyzing.

For a few towns he recorded the, model, color and make. As he needs to decide which models to sells and where to open his dealership.

Each object in the list looks like this:


var car = {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
}

You can import the cars.json file into your program like this.

//make sure the path is fine
var cars = require('./cars.json')
//cars will contain a list of cars

Cars can be from

    Paarl ('CJ')
    Bellville ('CY')
    Stellenbosch ('CL')
    Malmesbury ('CK')
    Cape Town ('CA')
    Kuilsriver ('CF')

Your friend now wants to know

    What make is the most popular? (mostPopularCar)
    How many Nissan's are from Malmesbury? (nissansFromCK)
    Which town has the most blue cars? (mostBlueCars)
    What town has the fewest orange cars? (fewestOrangeCars)
    What is the most popular model car overall? (mostPopularModel)
    What is the most popular model car in Stellenbosch? (mostPopularCL)
    What is the least popular model car in Kuilsriver? (leastPopularCF)

Write functions that can answer these questions for your friend. Each function's name in brackets.

    Remember that your functions should correctly if the input data change.

Test your code using assert statements.

There's more

Your friend also wants this data:

    all the cars for any given town carsForTown('townname')
    all the cars for a specific color for a specific town numberOfCars('blue', 'town name')
    the cars for a specific color & model for a specific town numberOfCarsPerModel('blue', 'model', 'town name')
    the most popular color car for any given town mostPopularColor('townname')

Write functions that can answer these questions for your friend, function names in brackets.
*/

var cars = require('/home/nathan/Desktop/Dropbox/Ubuntu Documents/Coding/javascript/codexBootcamp/cars.json');
const assert = require('assert');

console.log(cars);

var mostPopularCar=function(cars){
    var carFrequency={};
    //var carsSplit=cars.split(",");
    //console.log(carsSplit);

    for(var i=0;i<cars.length;i++){
        var currentLine=cars[i];
        var currentMake=currentLine.make;
        //console.log(currentMake);
        var maxCarMake="";
        var maxCarMakeNumber=0;

        if(carFrequency[currentMake]===undefined){
            carFrequency[currentMake]=1;

        }

        else{
            carFrequency[currentMake]++;

            if(carFrequency[currentMake]>maxCarMakeNumber){
                maxCarMake=currentMake;
                maxCarMakeNumber=carFrequency[currentMake];

            }
        }

    }
    console.log("The number of car models in the data is: ");
    console.log(carFrequency);
    console.log("The brand "+ maxCarMake +" occurs "+maxCarMakeNumber+" times");
    return (maxCarMake);

};

var nissansFromCK=function(cars,ID){
    var ckNissans=[];

    for(var i=0;i<cars.length;i++){
    var currentLine=cars[i];
    var currentRegNumber=currentLine.reg_number;

    if (currentRegNumber.startsWith(ID)&&currentLine.make=="Nissan"){
        ckNissans.push(currentRegNumber);
    }
}

    console.log("Number of Nissans from Malmesbury: "+ckNissans.length);
    return ckNissans.length;

};

var mostBlueCars=function(cars,colour){

        //var carColors=[];

        var carRegCount={}
        

        for(var i=0;i<cars.length;i++){
            var currentLine=cars[i];
            var currentCarColor=currentLine.color;
            var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2
            // var currentCar={
            //     town : currentTown,
            //     //color: currentCarColor
            // };

            // if(currentCarColor==colour){
            //     carColors.push(currentTown);

            // }        
            
            if(currentCarColor==colour){
                if(carRegCount[currentTown]===undefined){
                    carRegCount[currentTown]=1;
                }

                else{
                    carRegCount[currentTown]++;

                }
            }
        }
        console.log(carRegCount);

        var highNumber=0;
        var highTown="";

        for (key in carRegCount){
            if(carRegCount[key]>highNumber){
                highNumber=carRegCount[key];
                highTown=key;
            }
        }

        console.log(highTown);

            //     }
            //     carColors.push(currentTown);

            // }    
            
        // }       


        // console.log(carColors);

        // var cjTotal=0; 
        // var cyTotal=0;
        // var clTotal=0;
        // var ckTotal=0;
        // var caTotal=0;
        // var cfTotal=0;

        // for (var i=0;i<carColors.length;i++){
        //     if (carColors[i]=="CJ"){
        //         cjTotal++;
        //     }

        //     else if(carColors[i]=="CA"){
        //         caTotal++;
        //     }

        //     else if(carColors[i]=="CY"){
        //         cyTotal++;
        //     }
        // }
        // console.log([cjTotal,cyTotal,clTotal,ckTotal,caTotal,cfTotal]);

    };

var fewestOrangeCars = function(cars,colour){
            var carRegCount={}
        

        for(var i=0;i<cars.length;i++){
            var currentLine=cars[i];
            var currentCarColor=currentLine.color;
            var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2
      
            
            if(currentCarColor==colour){
                if(carRegCount[currentTown]===undefined){
                    carRegCount[currentTown]=1;
                }

                else{
                    carRegCount[currentTown]++;

                }
            }
        }
        console.log(carRegCount);

        var lowNumber=1000;
        var lowTown="";

        for (key in carRegCount){
            if(carRegCount[key]<lowNumber){
                lowNumber=carRegCount[key];
                lowTown=key;
            }
        }

        console.log(lowTown);

};

var mostPopularModel=function(cars){
        var carFrequency={};
    //var carsSplit=cars.split(",");
    //console.log(carsSplit);

    for(var i=0;i<cars.length;i++){
        var currentLine=cars[i];
        var currentModel=currentLine.model;
        //console.log(currentMake);
        var maxCarModel="";
        var maxCarModelNumber=0;


        if(carFrequency[currentModel]===undefined){
            carFrequency[currentModel]=1;

        }


        else{
            carFrequency[currentModel]++;

            if(carFrequency[currentModel]>maxCarModelNumber){
                maxCarModel=currentModel;
                maxCarModelNumber=carFrequency[currentModel];

            }
        }

    }
    console.log("The number of car models in the data is: ");
    console.log(carFrequency);
    console.log("The model "+ maxCarModel +" occurs "+maxCarModelNumber+" times");
    return (maxCarModel);

};

var mostPopularCL=function(cars,ID){
        var carCount={}
        

        for(var i=0;i<cars.length;i++){
            var currentLine=cars[i];
            var currentCarModel=currentLine.model;
            var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2
      
            
            if(currentTown==ID){
                if(carCount[currentCarModel]===undefined){
                    carCount[currentCarModel]=1;
                }

                else{
                    carRegCount[currentCarModel]++;

                }
            }
        }
        console.log(carCount);

        var highNumber=0;
        var highTown="";

        for (key in carCount){
            if(carCount[key]>highNumber){
                highNumber=carCount[key];
                highTown=key;
            }
        }

        console.log("The most popular model in "+ID + " is a "+highTown);


};

var leastPopularCF=function(cars,ID){
            var carCount={}
        

        for(var i=0;i<cars.length;i++){
            var currentLine=cars[i];
            var currentCarModel=currentLine.model;
            var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 2); from zero up to 2
      
            
            if(currentTown==ID){
                if(carCount[currentCarModel]===undefined){
                    carCount[currentCarModel]=1;
                }

                else{
                    carRegCount[currentCarModel]++;

                }
            }
        }
        console.log(carCount);

        var lowNumber=10000;
        var lowTown="";

        for (key in carCount){
            if(carCount[key]<lowNumber){
                lowNumber=carCount[key];
                lowTown=key;
            }
        }

        console.log("The most popular model in "+ID + " is a "+lowTown);

};

var carsForTown=function(carData,ID){//all the cars for any given town
    var cars={};

    for(var i=0;i<carData.length;i++){
        var currentLine=carData[i];
        //console.log(currentLine);
        var currentCarMake=currentLine.make;
        //console.log(currentCarMake);
        var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2

        if (currentTown==ID){
            if(cars[currentCarMake]===undefined){
                cars[currentCarMake]=1;

            }
            else{
                cars[currentCarMake]++;

            }
        }
    }

    console.log("The cars from "+ID+" are: ");
    console.log(cars);
    return cars;

};
var numberOfCars=function(carData,color,ID){//all the cars for a specific color for a specific town numberOfCars('blue', 'town name')
    
    var cars={};

    for(var i=0;i<carData.length;i++){
        var currentLine=carData[i];
        //console.log(currentLine);
        var currentCarMake=currentLine.make;
        //console.log(currentCarMake);
        var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2
        var currentCarColor=currentLine.color;

        if (currentTown==ID&&currentCarColor==color){
            if(cars[currentCarMake]===undefined){
                cars[currentCarMake]=1;

            }
            else{
                cars[currentCarMake]++;

            }
        }
    }

    console.log("The cars from "+ID+" with the color "+color+" are: ");
    console.log(cars);
    return cars;
};

var numberOfCarsPerModel=function(carData,color,model,ID){//the cars for a specific color & model for a specific town numberOfCarsPerModel('blue', 'model', 'town name')
    
        var cars={};

    for(var i=0;i<carData.length;i++){
        var currentLine=carData[i];
        //console.log(currentLine);
        var currentCarModel=currentLine.model;
        //console.log(currentCarMake);
        var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2
        var currentCarColor=currentLine.color;

        if (currentTown==ID&&currentCarColor==color&&currentCarModel==model){
            if(cars[currentCarModel]===undefined){
                cars[currentCarModel]=1;

            }
            else{
                cars[currentCarModel]++;

            }
        }
    }

    console.log("The "+model+" cars from "+ID+" with the color "+color+" are: ");
    console.log(cars);
    return cars;
    
};

var mostPopularColor=function(carsData,ID){//the most popular color car for any given town mostPopularColor('townname')
    var cars={};

    for(var i=0;i<carsData.length;i++){
        var currentLine=carsData[i];
        //console.log(currentLine);
        var currentCarColor=currentLine.color;
        //console.log(currentCarMake);
        var currentTown=currentLine.reg_number.substring(0,2) //str.substring(0, 3); from zero up to 2

        if (currentTown==ID){
            if(cars[currentCarColor]===undefined){
                cars[currentCarColor]=1;

            }
            else{
                cars[currentCarColor]++;

            }
        }
    }

    console.log("The car colors from "+ID+" are: ");
    console.log(cars);

    var maxNumber=0;
    var maxColor="";

    for (key in cars){
        if(cars[key]>maxNumber){
            maxNumber=cars[key];
            maxColor=key;
        }
    }

    console.log("The highest frequency color from "+ID+" is "+maxColor);
    return maxColor;

};

assert.deepEqual(mostPopularCar(cars),"Toyota","The most popular brand is Toyota");

nissansFromCK(cars,"CK");
mostBlueCars(cars,"blue");
fewestOrangeCars(cars,"orange");
mostPopularModel(cars);
mostPopularCL(cars,"CL");
leastPopularCF(cars,"CF");

carsForTown(cars,"CA");
numberOfCars(cars,'blue', 'CA');
numberOfCarsPerModel(cars,"blue","Ranger","CA");
mostPopularColor(cars,"CA");