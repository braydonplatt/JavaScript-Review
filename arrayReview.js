var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(arr){
	return threeItems[threeItems.length -1];
};

alert(last(threeItems));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];
  var evens = function(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      arr.splice(i, 1);
      i--;
    };
  }; 
  return(evenArray);
};
evens(evenArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomNum = function(arr){
  var check = getRandomArbitrary();
    console.log(check);
  if (arr.indexOf(check) !== -1){
    alert(true);
    } else {
  alert(false);
  };       // come back to this.
};

randomNum(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var firstOne = first;
second = firstOne.slice(0, 5);

second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

 var longest = function(str){
   var string = str.split(' ');
   var longestWord = string[0];
   for(var i = 0; i < string.length; i++){
   	if (longestWord.length < string[i].length){
       longestWord = string[i];
     };
   };
   return longestWord;
 };
 longest(sentence)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalize = function(str){
	var wordArray = str.split(' ');
	var newArray = [];
	for (var i = 0; i < wordArray.length; i++){
	   var splitUp = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
	   newArray.push(splitUp);
  };
    str = newArray.join(' ');
    return str;
};
capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.


var vowelCounter = function(str){
  var counter = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u'){
      counter++;
    };
  };
    return counter;
  };  
vowelCounter(theOdyssey);


};
