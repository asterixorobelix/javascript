/*
Your friend is still playing WordCrush and needs help with this challenge. Call the function mostWordsEndWith. 
The function should work for any sentence.

Find the letter that the most words in a sentence ends with and all the words that ends with that letter

Example sentence:

var sentence = 'Down by the river there is a man that quiver and shiver, 
but he needs to deliver a packet that he think is a big racket and a packet of of gum."
*/

var mostWordsEndWith=function(sentence){
	var sentenceCleaned=sentence.replace(/[.,]/g,"");
	//console.log(sentenceCleaned);

	var sentenceSplit=sentenceCleaned.split(" ");

	var letters={};
    var maxLetterCount=0;
    var maxLetter="";

    var maxLetterList=[]

    for(var i=0;i<sentenceSplit.length;i++){
    	var currentWord=sentenceSplit[i];
    	var currentLastLetter=currentWord[currentWord.length-1];
    	
    	if(letters[currentLastLetter]===undefined){
    		letters[currentLastLetter]=1;
    	}

    	else{
    		letters[currentLastLetter]++;

    		if(letters[currentLastLetter]>maxLetterCount){
    			maxLetterCount=letters[currentLastLetter];
    			maxLetter=currentLastLetter;
    		}
    	}

    }

    for (var i=0;i<sentenceSplit.length;i++){
    	var currentWord=sentenceSplit[i];
    	var currentLastLetter=currentWord[currentWord.length-1];
    	if (currentLastLetter===maxLetter){
    		maxLetterList.push(currentWord);
    	}
    }

    console.log(letters);
    console.log(maxLetter);
    console.log(maxLetterList);
    return (maxLetter,maxLetterList);


};

var sentence = "Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum."

mostWordsEndWith(sentence);