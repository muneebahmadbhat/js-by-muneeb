// console.log('Hello World');

//Section 1:-> Data Types in javascript

// var myName="Muneeb";
// console.log("myName");

// typeof operator
// console.log(typeof(myName));

// Challenge 2              (DataType Practice)
// 10 +"20"
// 9-"5"
// "java"+"script"
// " " + " "
// "" + 0
// "vinod" - "thapa"
// true+true
// true+false
// false+true
// false-true
// console.log(10+"20");            concat
// console.log(9 - "5");// Bug
// console.log("java " + "script");        concat
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("vinod " - "thapa");            not a number
// console.log(true+true);
// console.log(true+false);
// console.log(false+true);
// console.log(false-true); 


//  Interview Question 1
// Difference between null and undefined?
// var iAmuseless=null;
// console.log(iAmuseless);
// console.log(typeof(iAmuseless));// 2nd Javascript bug

// var iAmstandBy;
// console.log(iAmstandBy);
// console.log(typeof(iAmstandBy));


// Interview Question 2
// What is NaN?

// NaN is a property of the global object 
// In other words,it is a variable in global scope
// The initial value of NaN is Not-A-Number

// var myPhoneNumber=9489590341;
// var myName="Muneeb Ahmad";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));
// if (isNaN(myName)) {
        // console.log("plz enter valid phone no");
// }

// Challenge 3
// NaN===NaN;                                              // false
// Number.NaN===NaN;                                       // false
// isNaN(NaN);                                             // true
// isNaN(Number.NaN);                                      // true
// Number.isNaN(NaN);                                      // true
// console.log(Number.isNaN(NaN));

// Section 3 :-> Expressions And Operators

// Assignment operators
// An assignment operator assigns a value to its left operand
// Based on the value of its right operand
// The simple assignment operator is (=)

// var x=5;
// var y=5;
// console.log("is both the x and y are equal or"+x==y);

// We will see this in es6
// console.log(`Is both the x & y are equal:${x==y}`);


// Arithmetic operators
// An arithmetic operator takes numerical values
// (either literals or variables) as their operands & return a single numerical value

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder operator " + 81%8);


// Increment and Decrement operator
// Operator x++ or ++x or x-- or --x
// If used postfix,with operator after operand (for example x++),
// the increment operator increments and returns the value before incrementing.

// var num =15;
// var newNum=num++;
// console.log(num);
// console.log(newNum);

// Postfix increment operator means the expression is evaluated
// first using the original value of the variable and then the
// variable is incremented (increased)


// If used prefix, with operator before operand (for example,++x),
// the increment operator increments and returns the value after incrementing
// var num =15;
// var newNum=++num;
// console.log(num);
// console.log(newNum);

// Prefix increment operator  means the variable is incremented first and then
// the expression is evaluated  using the new value of the variable. 


// Comparison operators
// A comparison operator compares its operands and
// returns a  logical value based on whether the comparison is true.

// var a =30;
// var b =10;

// Equal (==)
// console.log(a==b);

// Not equal (!=)
// console.log(a!=b);

// Greater than (>)
// console.log(a>b);

// Greater than or equal (>=)
// console.log(a>=b);

// Less than (<)
// console.log(a<b);

// Less than or equal (<=)
// console.log(a<=b);


// Logical operators
// Logical operators are typically used with Boolean (logical) values;
// when they are, they return a Boolean value.

// var a=30;
// var b= -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjuction) for a set of
// operands is true if and only if all of its operand are true


// Logical OR ( || )
// The logical OR ( || ) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands are true

// Logical NOT (!)
// The logical NOT (!) operator (logical complement,negation)
// takes truth to falsity and vice versa.



// String Concatenation (operators)
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of two operand strings.
// console.log("hello world");
// console.log("hello" + "world");



// Challenge 4
// What will be the output of 3**3?
// What will be the output,when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

// sol 1:
// console.log(3**3);// 3*3*3
// console.log(10**-1);// 1/10

// sol 2:
// console.log(3 +" muneeb");

// sol 3:
// var a=2;
// var b=5;
// var c;
// console.log("the value of a is:",a, "the value of b is :",b);
// c=b;
// b=a;
// a=c;
// console.log("the value of a is:",a, "the value of b is :",b);

// sol 4:
// var a=5;
// var b=10;
// a=a+b;// a=15
// b=a-b;// b=5
// a=a-b;// a=10
// console.log("The value of a is "+a);
// console.log("The value of b is "+b);

// Interview question 4
// What is the difference between == vs ===?
// var num1=5;
// var num2='5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1==num2);
// Output:The output will be true because == check only values



// var num1=5;
// var num2='5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1===num2);
// Output:The output will be false because === check values as well as datatypes



// Section 4 :-> Control Statement and Loops
// *
// 1) If...Else
// The if statement executes a statement if  a specified condition is truthy.
// If the condition is falsy, another statement can be executed.


// var tomr='rain';
// if (tomr=='rain'){
        // console.log('get yourself a raincoat');
// }
// else{
//      console.log('Move out freely');
// }





// Challenge Time
// Q) Write a program that works out whether if a given year is a leap year or not?
// A leap year has 366 days (the extra day is the 29th of february)
// How to know if it is a Leap Year:
// * Leap Years are any year that can be exactly divided by 4 (such as 2016,2020,2024,etc)
// * except if it can be exactly divided by 100, then it isn't (such as 2100,2200,etc)
// * except if it can be exactly divided by 400,then it is (such as 2000,2400)

// Sol) 

// var year =2020;
// if (year %4 ===0){
// if (year %100 ===0){
// if (year %400 ===0){
// console.log("The year  " + year + " is a leap year");
// }else{

        // console.log("The year " + year + " is not a leap year");
// }

// }else {
        // console.log("The year " + year + " is a leap year");
// }
// }
// else{
        // console.log("The year " + year + " is not a leap year");
// }




//  What is truthy and falsy values in Javascript?

// We have total 5 falsy values in javascript        
//  0,"",undefined,null,NaN,false 
// if (false){
        // console.log("OMg!,we loss the game");
// }else{
        // console.log("yay,We won the game");
// }











//  2) Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator
// that takes three operands


// var age=13;
// console.log((age>=18)?"you can vote":"you can't vote"); 


//  3) Switch Statement
//  Evaluates an expression,matching the expressions value to a case clause,and executes statements associated with that case.

//  1st without break statement
//  Find the area of circle,triangle and rectangle?
// var area ='triangle';
// var PI=3.142, l=5,b=4,r=3;
// if (area=='circle') {
//         console.log("The area of circle is : " +PI*r**2);
// }else if (area=='triangle'){
//         console.log("The area of triangle is : " + (l*b)/2);
// }else if (area=='rectangle'){
//         console.log("The area of rectangle is : " +(l*b));
// }else{
//         console.log("Please enter the valid data");
// }




// var area ='circle';
// var PI=3.142, l=5,b=4,r=3;
// switch (area) {
        // case 'circle':
                // console.log("The area of circle is : " +PI*r**2);
                // break;
// case 'triangle':
        // console.log("The area of triangle is : " + (l*b)/2);
        // break;
        // case 'rectangle':
                // console.log("The area of rectangle is : " +(l*b));  
                // break;
        // default:
                // console.log("Plz enter the valid data");
                // break;
// }




// Break
// Terminates the current loop,switch,or label statement & transfers.
// Program control to the statement following to the terminated statement.













// While Loop Statement 
//  The while statement creates a loop that executes a specified statement
//  as long as the test condition evaluates to true.

// var num =1;
//  block scope
// while (num<=10) {
        // console.log(num);
//         num++;
// }

//  Do-While Loop Statement

// var num=0;
// do {
        // console.log(num);
//         num++;
// } while (num<=10);

//  For Loop Statement
// for (var num = 0; num <=10; num++) {
        // console.log(num); 
// }

//  Challenge Time
//  JavaScript program to print table for given number (8,9,12,15) using for Loop?
  
// var tableOf=8;
// for(var num =1;num<=10;num++){
// console.log(tableOf + "*" + num + "=" + tableOf*num);
// }







//  Section 5 :-> Functions in JavaScript

//  A JavaScript function is a block of code designed to perform a particular task





//  1) Function Definition

//  Before we use the function, we need to define it.

//  A function definition (also called a function declaration,or function statement)
//  consist of the function keyword, followed by:

//  The name of the function.
//  A list of parameters to the function, enclosed in parentheses and separated by commas.
//  The JavaScript statements that define the function, enclosed in curly brackets,{...}.






//  2) Calling Functions
//  Defining a function does not execute it.
//  A JavaScript function is executed when "something" invokes it (calls it).

// function sum(){
//         var a=10, b=20;
//         var total = a+b;
//         // console.log(total);
// }
// sum();


//  3) Function Parameters vs Function Arguments
//  Function Parameter are the names listed in the function's definition.
//  Function arguments are the real values passed to the function.

// function sum(a,b) {
//         var total = a+b;
//         console.log(total);
// }
// sum ();// In This Case No Arguments Passed
// sum (20,30);
// sum (50,50);








//  Interview Questions

//  Why Functions?

//  You can reuse code: Define the code once, and use it many times.
//  You can use the same code many times with different arguments,
//  to produce different results.

//   OR

//  A function is a group of reusable code which can be called anywhere
//  in your program. This eliminates the need of writing the same code 
//  again and again













//  4) Function Expressions:->
//  Function expressions simply means create a function & put it into the variable

// function sum(a,b) {
//         var total = a+b;
        // console.log(total);
// }
// var funExp=sum(5,15);
// funExp;





// 5) Return Keyword
//  When Javascript reaches a return statement,
//  the function will stop executing.

//  Function often compute a return value.
//  The return value is "returned" back to the "caller"

// function sum(a,b) {
//         return total =a+b;
// }

// var funExp = sum (5,25);
// console.log (funExp);
// console.log("The Sum of two numbers is " + funExp);



// 6) Anonymous Function

//  A function expression is similar to and has the same syntax 
//  as a function declaration One can define "named"
//  function expressions (where the name of the expression might
// be used in the call stack for example)
// or "anonymous" function expressions.


// var funExp =  function (a,b){
//         return total = a+b;
// }

// var sum = funExp (15,25);
// var sum1 = funExp (25,25);
// console.log(sum1>sum);







// *********************************************************************
//  Now  It's Time for Modern JavaScript

//  Features of ECMAScript 2015 also known as ES6
 
//  1) LET VS CONST VS VAR

// var myName="Muneeb Bhat";
// console.log(myName);


// var myName=" Ahmad Muneeb";
// console.log(myName);




// let myName="Muneeb Bhat";
// console.log(myName);


// let myName=" Ahmad Muneeb";
// console.log(myName);




// const myName="Muneeb Bhat";
// console.log(myName);


// const myName=" Ahmad Muneeb";
// console.log(myName);






// function biodata() {
        // let myFirstname = "Muneeb";
        // console.log(myFirstname);

        // if (true) {
                // let myLastname = "Bhat";
                // console.log("inner "+myLastname);
                // console.log("inner "+myFirstname);
        // }

        // console.log("innerOuter" + myLastName);
// }


// biodata();
//  var => Function scope
// let and const => Block scope













//  2) Template literals (Template strings)

//  JavaScript program to print table for given number (8)?

//  output : 8 * 1 = 8
//           8 * 2 = 16
//           8 * 10 = 80

// for(let num = 1; num <=10; num++){
        // let tableOf = 12;
        // console.log(tableOf + " * " + num + " = " + tableOf*num);
        // console.log(`${tableOf} * ${num} = ${tableOf*num}`);
// }

















//  3) Default Parameters
//  Default function parameters allow named Parameters to be
//  initialized with default values if no values or undefined is passed

//  function mult (a,b=8){
        // return a*b;
// }
// console.log(mult(3));

















//  6) Fat Arrow Function

//  Normal Way of writing function


// console.log(sum());

// function sum() {
//         let a=5;b=6;
//         let sum = a+b;
//         return `the sum of the two numbers is ${sum}`;
// }

//  How to convert it into Fat Arrow Function

// const sum = () =>`the sum of two numbers is ${(a=5)+(b=6)}`;
// console.log(sum());




















//  Section 7) Arrays in JavaScript 

//  When we use var, we can stored only one value at a time.
// var myFriend1='Muneeb';
// var myFriend2='Ahmad';
// var myFriend3='Bhat';
//  When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

//  In JavaScript, we have an array class, and
//  arrays are the prototype of this class.

//  Example
// var myFriends = ['Muneeb','Ahmad','Bhat',22 ];










//  1) Array Subsection 1 :-> Traversal in array
//  navigate through an array

//   if we want to get the single data at a time  and also
//  if we want to change the data

// var myFriends = ['Muneeb','Ahmad','Bhat'];


// console.log(myFriends[2]); 
// console.log(myFriends[myFriends.length-1]);


//  if we want to check the length of elements of an array

// console.log(myFriends.length);

//  we use for loop to navigate

// var myFriends = ['Muneeb','Ahmad','Bhat','aijaz'];
// for(var i=0; i<myFriends.length;i++){
//         console.log(myFriends[i]);
// }



//  After ES6 we have for..in and for..of loop too
// var myFriends = ['Muneeb','Ahmad','Bhat','aijaz'];
// for(let elements in myFriends){
//         console.log(elements);
// }

// for(let elements of myFriends){
// console.log(elements);
// }


//  Array.prototype.forEach()
//  Calls a function for each element in the road

// var myFriends = ['Muneeb','Ahmad','Bhat','aijaz'];
// myFriends.forEach(function(element,index,array){
// console.log(element + "index : " + index + " " + array);
// });



// myFriends.forEach((element,index,array) => {
// console.log(element + "index : " + index + " " + array);
// });










//   2) Array Subsection 2 :-> Searching and filter in an array
//  Array.prototype.indexOf()

// Returns the first (least) index of an element within the array equal
//  to an element, or -1 if none is found.It search the element from the 
// 0th index number

// var myFriendNames = ["Muneeb","Ahmad","Bhat","Muneeb","Aadam"];
// console.log(myFriendNames.indexOf("Muneeb",2));












//  Array.prototype.lastIndexOf()
//  Returns the last (greatest) index of an element within the array equal
//  to an element, or -1 if none is found. It search the element from last to first


// var myFriendNames = ["Muneeb","Ahmad","Bhat","Muneeb","Aadam"];
// console.log(myFriendNames.lastIndexOf("Muneeb",2));







//  Array.prototype.includes()
//  Determines whether the array contains a value,      
//  returning true or false as appropriate

// var myFriendNames = ["Muneeb","Ahmad","Bhat","Muneeb","Aadam"];
// console.log(myFriendNames.includes("Muneeb"));









//  Array.prototype.find()

//  arr.find(callback(element[, index[, array]])[, thisArg])

//  Returns the found element in the array, if some element in the
//  array satisfies the testing function, or undefined if not found.
//  Only problem is that it return only one element 

// const prices =[200,300,350,400,450,500,600];

//  Prices < 400
// const findElem = prices.find ((currVal)=>{
//         return currVal < 400;
// });
// console.log(findElem);


//  Short cut method
// const findElem = prices.find((currVal)=>currVal<400);
// console.log(findElem);


//  Very Short Cut Method
// console.log(prices.find((currVal) =>currVal<400));




//  Array.prototype.findIndex()
//  Returns the found index in the array, if an element in the
//  array satisfies the testing function, or -1 if not found.

// console.log(prices.findIndex((currVal) =>currVal<400));












//  Array.prototype.filter()
//  Returns a new array containing all elements of the calling
//  array for which the provided filtering function returns true.

// const prices =[200,300,350,400,450,500,600];

//  Prices < 400
// const newPriceTag=prices.filter((elem,index)=>{
//         return elem < 400;
// })
// console.log(newPriceTag);









//  3) Array Subsection 3 :-> How to sort an Array

//  Array.prototype.sort()

//  The sort() method sorts the elements of an array in place and
// returns the sorted array.The default sort order is ascending,built
//  upon converting the elements into string,
//  then converting their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Apr', 'Feb', 'Dec', 'Nov'];
// console.log(months.sort());


// const array1=[1,30,4,21,100000,99];
// console.log(array1.sort());




//  However, if numbers are sorted as strings,
//  "25" is bigger than "100", because "2" is bigger than "1".

//  Because of this, the sort() method will produce an incorrect
//  result when sorting numbers.






//  4) Array Subsection 4 :-> Perform CRUD

//  Array.prototype.push()
//  The push() method adds one or more elements to the
//  end of an array and returns the new length of the array.

// const animals=['cows','goats','sheep']
// console.log(animals);
// const count = animals.push('chickens');
// console.log(animals);
// console.log(count);

// animals.push('bulls','cats','dogs');
// console.log(animals);






//  Array.prototype.unshift()
//  The unshift() method adds one or more elements to the
//  beginning of an array and returns the new length of the array.



// const animals=['cows','goats','sheep']
// console.log(animals);
// const count = animals.unshift('chickens');
// console.log(animals);
// console.log(count);

// animals.unshift('bulls','cats','dogs');
// console.log(animals);


//  2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);



//  Array.prototype.pop()
//  The pop() method removes the last element from an array and returns
//  that element.This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.prototype.shift()
//  The shift() method removes the first element from an array and returns
//  that removed element.This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);




//  8: Challenge Time

//  Array.prototype.splice()
//  Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];

// sol 1:
// const newMonth= months.splice(months.length,0,"Dec");
// console.log(months);

//  sol 2:
//  console.log(newMonth);

// sol 3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth!=-1){
//         const updateMonth = months.splice(indexOfMonth,1,'March');
// console.log(months);
// }else{
//         console.log('No such data found');
// }

// sol 4:
// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const indexOfMonth = months.indexOf('June');
// if(indexOfMonth!=-1){
//         const updateMonth = months.splice(indexOfMonth,1);
// console.log(months);
// }else{
//         console.log('No such data found');
// }








//  5) Array Subsection 4 :-> Map and Reduce Method

//  Array.prototype.map()

//  let newArray = arr.map(callback(currentvalue [, index[, array]]){
        //  return element for newArray, after executing something
        // }[, thisArg]);

//  Returns a new array containing the results of calling a
//  function on every element in this array.

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElm,index,arr)=>{
//         return curElm > 9;
// });
// console.log(array1);
// console.log(newArr);


// let newArr = array1.map((curElm,index,arr)=>{
//         return `index no = ${index} and the value is ${curElm} belongs to ${arr}`
// })
// console.log(newArr);



//  It returns new array without mutating the original array








// 9: Challenge Time

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those
//  elements which are greater than 10?

//  sol 1: 
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((elem)=>{
// return Math.sqrt(elem);
// })
// console.log(arrSqr);


// sol 2:
// let arr = [2,3,4,6,8];
// let arrMul = arr.map((elem)=>{
        //         return elem * 2;
        // }).filter((elem)=>{
                // return elem > 10;
                // })
                // console.log(arrMul);
                // OR
// let arr = [2,3,4,6,8];
// let arr2= arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//      return accumulator += curElem ; 
//   });
// console.log(arr2);

// Reduce Method

//  flatten an array means to convert the 3d or 2d array into a 
//  single dimensional array

//  The reduce() method executes a reducer function (that you provide)
//  on each element of the array, resulting in single output value.

//  The reducer function takes four arguments:

//  Accumulator
//  Current Value
//  Current Index
//  Source Array


// let arr = [5,6,2];
// let sum = arr.reduce ((accumulator,curElm,index,arr)=>{
// return accumulator += curElm;
// })
// console.log(sum); 

// let mul = arr.reduce ((accumulator,curElm,index,arr)=>{
// return accumulator *= curElm;
// })
// console.log(mul);



// Suppose you have 4 subjects and you got the result of only one subject.After sometime you got the result of remaining 3 subjects in an array.How will you add it?

// 4 subj, 1 subj = 7 
// 3 subj = [5,6,2]

// let sum = arr.reduce((accumulator,elem,index,arr)=>{
//         return accumulator + elem;
// },7)
// console.log(sum);




//  How to flatten an array
// Converting 2d and 3d array into one dimensional array.

// const arr = [
//         ['zone_1','zone_2'],
//         ['zone_3','zone_4'],
//         ['zone_5','zone_6'],
//         ['zone_7',['zone_7',['zone_7','zone_8']]]
// ];

// let flatArr= arr.reduce((accum,elem)=>{
//         return accum.concat(elem);
// })
// console.log(flatArr);






// ****** Section 7 :-> Strings in JavaScript

//  A JavaScript string is zero or more characters written inside quotes.
//  JavaScript strings are used for storing and manipulating text
//  You can use single or double quotes
//  Strings can be created as primitives,
//  from strings literals, or as objects, using the String() constructor

// let myName = "Muneeb Ahmad";
// let mySurName = 'Bhat';

// let ytName = new String("Muneeb Vlogs");
// let ytName =("Muneeb Vlogs");

// console.log(myName);
// console.log(ytName);



//  How to find the length of a string
//  String.prototype.length
//  Reflects the length of a string
// let myName = "Muneeb Ahmad Bhat"
// console.log(myName.length);



//  Escape Character

// let anySentence = "We are the so-called /"Vikings/" from the north.";
// console.log(anySentence);

//  If you dont want to mess, simply use the alternate quotes

// let anySentence = 'We are the so-called "Vikings" from the north.';
// console.log(anySentence);




//  Finding a String in a String

//  String.prototype.indexOf(searchValue[, fromIndex])
//  The indexOf() method returns the index of (the position of) the first
//  occurence of a specified text in a string

// const myBioData = 'I am Mr Muneeb';
// console.log(myBioData.indexOf("M",6));

//  JavaScript counts positions from zero.
//  0 is the first position in a string,1 is the second,2 is the third.




//  String.prototype.lastIndexOf(searchValue [, fromIndex])
//  Returns the index within the calling String object of the
//  last occurence of searchValue, or -1 if not found.

// const myBioData = 'I am Mr Muneeb';
// console.log(myBioData.lastIndexOf("M",6));




//  Searching for a String in a String

//  String.prototype.search(regexp)

//  The search() method searches a string for a specified
//  value and returns the position of the match

// const myBioData = 'I am Muneeb Bhat';
// let sData = myBioData.search("Muneeb");
// console.log(sData);



//  The search() method cannot take a second start position argument. 











//  Extracting String Parts

//  There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

//  The slice() Method
//  slice() extacts a part of a string and returns the extracted part
// in a new string.

//  The method takes 2 parameters: the start position,
//  and the end position (end not included).

//  var str = "Apple, Banana,Kiwi";

//  let res =str.slice(0,4);
//  let res =str.slice(7,-2);
//  let res =str.slice(7);
//  console.log(res);


//  The slice() method selects the elements starting at the 
//  given start argument, and ends at, but does not include,
//  the given end argument.

//  Note: The original array will not be changed.







//  11: Challenge Time

// Display only 280 characters of a string like the one used in twitter?

// let myTweets = "media. Blog can also be used as a verb, meaning to maintain or add content to a blog The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to"
// console.log(myTweets.length);
// let actualTweet=myTweets.slice(0,280);
// console.log(actualTweet);
// console.log(actualTweet.length);







//  The substring() Method
//  substring() is similar to slice ().

//  The difference is that substring () cannot accept
//  negative indexes.

//  var str = "Apple, Banana, Kiwi";
// let res =str.substring(0,4);
// let res =str.substring(7,-2);
// console.log(res);

//  If we give negative value then the characters are 
//  counted from the 0th pos






//  The substr() Method
//  substr() is similar to slice().

//  The difference is that the second parameter specifies the
//  length of the extracted part.

//  var str = "Apple, Banana, Kiwi";
// let res = str.substr(0,4);
// let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);









//  Replacing String Content()

//  String.prototype.replace(searchFor, replaceWith)

//  The replace() method replaces a specified value
//  with another value in a string.

// let myBioData = `I am muneeb ahmad bhat muneeb`;

// let replaceData=myBioData.replace('muneeb','Muneeb');
// console.log(myBioData);
// console.log(replaceData);
//  Points to remember
//  1: The replace() method does not change the string
// it is called on. It returns a new string.
//  2: By default, the replace() method replaces only 
// the first match
//  By default,  the replace() method is case sensitive
//  Writing MUNEEB (with upper case) will not work






//  Extracting String Characters

//  There are 3 methods for extracting string characters:

//  charAt(position)
//  charCodeAt(position)
//  Property access [ ]



// The charAt() Method
//  The charAt() method returns the character at a
//  specified index (position) in a string

// let str = "Hello World";
// console.log(str.charAt(4));





//  The charCodeAt() Method
//  The charCodeAt() method returns the unicode of the  
//  character at a specified index in a string:
//  The method returns a UTF-16 code
//   (an integer between 0 and 65535).

//  The Unicode Standard provides a unique number for every
//  character, no matter the platform,device,application,
//  or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units. 

// var str = "HELLO WORLD";
// console.log(str.charCodeAt(1));





//  12: Challenge Time

//  Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar=str.length - 1;
// console.log(str.charCodeAt(lastChar));




//  Property Access
//  ECMAScript 5 (2009) allows property access [] on strings

// var str = "HELLO WORLD";
// console.log(str[0]);




// Other useful methods

// let myName = "muneeb aHmad";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());






//  The concat() method
// concat() joins two or more strings

// let fName = "Muneeb";
// let lName = "Ahmad";
// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));






//  String.trim()
//  The trim method removes whitespace from both sides of a string

// var str = "             Hello World             ";
// console.log(str.trim());





//  Converting a String to an array
//  A string can be converted to an array with the split() method

// var txt = "a,b,c,d,e";    //  String
// console.log(txt.split(","));                    //  Split on commas
// console.log(txt.split(" "));                    //  Split on spaces
// console.log(txt.split("|"));                    //  Split on pipe






//  Section 8 :-> Date and Time in JavaScript ******/

//  JavaScript Date objects represent a single moment in time in a
//  platform-independent format. Date objects contain a Number
//  that represents milliseconds since 1 january 1970 UTC.

//  Creating Date Objects
//  There are 4 ways to create a new date object:

// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
//  it takes 7 arguments
//  new Date (milliseconds)
//  we cannot avoid month section
//  new Date (date string)




//  new Date()
//  Date objects are created with the new Date() constructor

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // 7/5/2023,  16:39:02 PM
// console.log(new Date().toString());   //  Sun May 7 2023 16:40:30 GMT+0530 (India Standard Time)

//  Date.now()
//  Returns the numeric value corresponding to the current time-the number
//  of milliseconds elapsed since January 1, 1970 00:00:00 UTC 

// console.log(Date.now());


//  new Date(year,month,.....)
//  7 numbers specify year,month,day,hour,minute,second, and millisecond (in that order)
//  Note: JavaScript counts months from 0 to 11.

//  January is 0.December is 11.

// var d = new Date(2023,4,7,16,54,45,0);
// console.log(d.toLocaleString());





// new Date(dateString) 
// new Date(dateString) creates a new date object from a date string

// var d = new Date("May 7, 2023 18:24:00");
// console.log(d.toLocaleString());

//  new Date(milliseconds)

// var d = new Date(0);
//  var d = new Date (1683465209273);
//  var d = new Date (86400000*2);
// console.log(d.toLocaleString());





//  Dates Method

// const curDate = new Date();

//  how to get the individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());   // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

//  How to set the individual date

// console.log(curDate.setFullYear(2022));
// //  The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022,4,7));
// let setMonth = curDate.setMonth(4);   //  0-11 jan to dec
// console.log(setMonth);
// console.log(curDate.setDate(7));
// console.log(curDate.toLocaleString());






//  Time Methods

// const curTime = new Date ();

// How to get the individual time

// console.log(curTime.getTime());
// //  The getTime() method returns the number of milliseconds since jan 1 1970
// console.log(curTime.getHours());
// //  The getHours() method returns the hours of date as a number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliSeconds());






//  How to set the individual time

// let curTime = new Date ()

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliSeconds(5));






// Practice Time
// new Date().toLocaleTimeString();  //  4:06:07 PM
// ---
// new Date().toLocaleDateString();   // 8/5/2023
// ---
// new Date().toLocaleString();    //  8/5/2023,  4:06:07 PM





//  Section 9 :-> Math Object in JavaScript ****/

//  The JavaScript Math object allows you to perform mathematical tasks on numbers.


// console.log(Math.PI);

//  Math.round()
//  returns the value of x rounded to its nearest integer

// let num = 10.2565;
// console.log(Math.round(num));


//  Math.pow()
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);


//  Math.sqrt()
//  Math.sqrt(x) returns the square of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


//  Math.abs()
//  Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));



//  Math.ceil()
//  Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.1));



//  Math.floor()
//  Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.9));


//  Math.min()
//  Math.min() can be used to find the lowest value in a list of argument

// console.log(Math.min(0,150,30,20,-8,-200));


//  Math.max()
//  Math.max() can be used to find the highest value in a list of argument

// console.log(Math.max(0,150,30,20,-8,-200));


//  Math.random()
//  Math.random() returns a random number between 0 (inclusive), and 1 ()

// console.log(Math.floor(Math.random()*10));



//  Math.trunc()
//  The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));


//  Note: if the argument is a positive number, Math.trunc() is equivalent to
//  Math.floor(),
//  Otherwise Math.trunc () is equivalent to Math.ceil().








// Section 10 :-> Document Object model in JavaScript

//  1)   Window is the main container or we can say the global Object and any operations
//  related to entire browser window can be a part of window object.

//  For ex : the history or to find the url etc.

//  1) whereas the DOM is the child of Window Object




// 2) All the members like objects,methods or properties.If they are part of window
//  object then we do not refer the window object.Since window is the global object
//  so you do not have to write down window.
//  - it will be figured out by the runtime.

//  For Example
//  window.screen or just screen is a small information
//  object about physical screen dimensions.
//  windows.location giving the current URL
//  window.document or just document is the main object
//  of the potentially visible (or better yet: rendered)
//  document object model/DOM.


//  2) Where in the DOM we need to refer the document,
//  if we want to use the document object,methods or properties
//  For Example
//  document.getElementById()



//  3) Window has methods,properties and object.example:setTimeOut()
// or setInterval() are the methods,where as Document is the
//  object of the window and it also has a screen object with
//  properties describing the physical display.



//  Now, I know you have a doubt like we have seen the methods
//  and objects of the global object i.e window.But what about
// the properties of the Window Object  

//  So example of window object properties are
//  innerHeight,
//  innerWidth and there are many more





//  3) Document is just the object of the global object that is window,which
//  deals with the document, the HTML element themselves.







// *************** DOM vs BOM *********************

//  The DOM is the Document Object Model, which deals with the document,
//  the HTML elements themselves, e.g document and all traversal you
//  would do in it,events,etc.

//  For Ex:
//  change the background color to red
//  document.body.style.background = "red";


//  The BOM is the Browser Object Model,which deals with browser components
//  aside from the document, like history,location,navigator and screen
//  (as well as some others that vary by browser).OR
//  In simple meaning all the window operations which comes under BOM are performed
//  using BOM








//  Let's see more practical on History object

//  Functions alert/confirm/prompt are also a part of BOM:
//  they are directly not related to the document,
//  but represent pure browser methods of communicating with the user.

// alert(location.href);
// if (confirm("Want to visit youtube?")){
//         location.href="https://www.youtube.com";    // Redirect the browser to another url
// }





//  Section 3 : Navigate through the DOM

//  1: document.documentElement
//      returns the Element that is the root element of the Document.
//  2: document.head
//  3: document.body
//  4: document.body.childNodes (include tab,enter and whitespace)
//  list of the direct children only
//  5: document.children (without text nodes, only regular elements)
//  6:document.childNodes.length

//  Practice Time
//  How to check whether an element has child nodes or not?
//  we will use hasChildNodes()

//  Practice Time
//  How to find the child in DOM tree
//  firstChild vs firstElementChild
//  lastChild vs lastElementChild
//  const data = document.body.firstElementChild;
//  undefined
//  data
//  data.firstElementChild
//  data.firstElementChild.firstElementChild
//  data.firstElementChild.firstElementChild.style.color = "red"
//  vs
//  document.querySelector(.child-two).style.color = "yellow";

//  How to find the Parent Nodes
//  document.body.parentNodes
//  document.body.parentElement

//  How to find or access the siblings
//  document.body.nextSibling
//  document.body.nextElementSibling
//  document.body.previousSibling
//  document.body.previousElementSibling







//  Section :-> How to search the Elements and the References
//  we will see the new file






// ***********************************************************************************

// Section 11 :-> Events in JavaScript


//  HTML events are "things" that happen to HTML elements.
//  when JavaScript is used in HTML pages, JavaScript can "react" on these events.

//  HTML Events
//  An HTML event can be something the browser does, or something a user does.

//  Here are some examples of HTML events:

//  An HTML webpage has finished loading
//  An HTML input field was changed
//  An HTML button was clicked
//  Often,when events happen,you may want to do something.

//  JavaScript lets you execute code when events are detected.

//HTML allows events handler attributes, with JavaScript code,to be added to HTML elements.




//  Section 1 :-> 4 ways of writing Events in JavaScript

//  1: using inline events alert();
//  2: By calling a function (We have already seen and most common way of writing)
//  3: Using Inline events (HTMl onclick="" property and element.onclick)
//  4: Using Event Listeners (addEventListener and IE's attachEvent)

//  check the Events HTML File





//  Section 2 : What is Event Object?
//  Event object is the parent object of the event object.
//  for example
//  MouseEvent, focusEvent, KeyboardEvent etc



// Section 3 : MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML
//  document belongs to the MouseEvent Object.




//  Section 4 : KeyboardEvent in JavaScript 
//  Events that occur when user presses a key on the keyboard,
//  belongs to the KeyboardEvent Object.


//  Section 5 : InputEvents in JavaScript
//  The onchange event occurs when the value of an element has been changed.

//  For radiobuttons and checkboxes, the onchange event occurs when the
//  check stage has been changed.



// *****************************************************************************

//  JavaScript Timing Events


//  The window object allows execution of code at specified time intervals.

//  These time intervals are called timing events.

//  The two key methods to use with JavaScript are:

// setTimeout(function,milliseconds)
//  executes a function, after waiting a specified number of milliseconds

// setInterval(function,milliseconds)
//  Same as setTimeout(), but repeats the execution of the function continuously.

//  1 setTimeOut()
//  2 setInterval()
//  3 clearTimeOut()
//  4 clearInterval()


// *******************************************************************************

//  :-> Object oriented JavaScript

// *******************************************************************************

//  What is Object Literal?  
//  Object literal is simply a key:value pair data structure.
//  Storing variables and functions together in one container,we can refer this as an Objects.

//  Object = School Bag

//  How to create an Object?

//  1st way


// let biodata = {
//         myName:"Muneeb Ahmad Bhat",
//         myAge:21,
//         education: "Pursuing BCA",
//         getData: function(){
//                 console.log(`My name is ${biodata.myName}, age ${biodata.myAge} and i am ${biodata.education}`);
//         }
// };
// biodata.getData();

//  2nd way no need to write functions as well after es6

// let biodata = {
//         myName:"Muneeb Ahmad Bhat",
//         myAge:21,
//         education: "Pursuing BCA",
//         getData (){
//                 console.log(`My name is ${biodata.myName}, age ${biodata.myAge} and i am ${biodata.education}`);
//         }
// };
// biodata.getData();

//  What if we want object as an value inside an object

// let biodata = {
//         myName : {
//                 realName : "Muneeb",
//                 surName : "Bhat"
//         },
//         myAge:21,
//         education: "Pursuing BCA",
//         getData (){
//                 console.log(`My name is ${biodata.myName}, age ${biodata.myAge} and i am ${biodata.education}`);
//         }
// };
// console.log(biodata.myName.realName);








//  2) What is this object?

//  The definition of "this" object is that it contain the current context.
//  The this object can have different values depending on where it is placed.

//  For Example
// console.log(this.alert('awesome'));
//  it refers to the current context and this is window global object

//  example 2
//  function myName(){
        // console.log(this);
// }
// myName();


//  example 3
// var myNames = 'Muneeb';
//  function myName(){
        // console.log(this.myNames);
// }
// myName();


//  example 4
// const obj = {
//         myAge : 21,
//         myName(){
//                 console.log(this.myAge);
//         }
// }
// obj.myName();

//  example 5

// this object will not work with arrow function
// const obj = {
//         myAge : 21,
//         myName:()=>{
//                 console.log(this.myAge);
//         }
// }
// obj.myName();


//  example 6

// let biodata = {
//         myname:{
//                 realName:"Muneeb",
//                 fullName:"Muneeb Ahmad Bhat"
//         },
//         myAge:21,
//         getData(){
//                 console.log(`My name is ${this.myname.fullName} and my age is ${this.myAge}`);
//         }
// }
// biodata.getData ();









//  4) Destructuring in ES6
//  The destructuring assignment syntax is a JavaScript expression
//  that makes it possible to unpack values from arrays,
//  or properties from objects, into distinct variables.

//  Array Destructuring

// const myBioData = ['muneeb','ahmad',21];
// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// let [myFName,myLName,myAge] = myBioData;
// console.log(myFName);

//  we can add values too

// let [myFName,myLName,myAge,myDegree="BCA"] = myBioData;
// console.log(myDegree);





//  Object Destructuring
// const myBioData = {
//         myFName:'muneeb',
//         myLName:'bhat',
//         myAge:21
// }
// let age = myBioData.myAge;


// let {myFName,myLName,myAge,myDegree="BCA"} = myBioData;
// console.log(myLName);









//  5) Object Properties

//  We can now use Dynamic Properties

// let myName = "Muneeb";
// const myBio = {
//         [myName] : "Hello World",
//         [20+1]:"is my age"
// }
// console.log(myBio);


//  no need to write key and value, if both are same

// let  myName = "Muneeb Bhat";
//  let myAge = 21;

//  const myBio = {myName,myAge}
// console.log(myBio);



// 7) Spread Operator
 
// const colors = ['red','green','blue','white','pink'];

// const myColors = ['red','green','blue','white','yellow','black'];
//  2nd time add one more color on top and tell we need to write it again
//  on myColor array too

//  const myFavColors = [ ...colors,'yellow','black'];

// console.log(myFavColors);


// **********************************************************************


//  ES7/2016 ecmascript features

//  1: array include

// const color = ['red','blue','black','white'];
// const isPresent = color.includes('purple');
// console.log(isPresent);


// 2 : **
// console.log(2**3);




// ES8 Features

//  string padding
//  Object.values()
//  Object.entries()



// let myName = "Muneeb Ahmad Bhat";
// console.log(myName);
// console.log( myName.padStart(23));
// console.log( myName.padEnd(24));




// const person = {name:'messi',age:35};
// console.log(Object.values(person));
// console.log(Object.entries(person));



//  ES2018
// const person = {name:'messi',age:35};
// const sPerson = {...person,profession : "footballer"};
// console.log(person);
// console.log(sPerson);


// ES2019

// const person = {name:'messi',age:35};
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));





//  array.prototype.flat
// Converting 2d and 3d array into one dimensional array.

// const arr = [
//         ['zone_1','zone_2'],
//         ['zone_3','zone_4'],
//         ['zone_5','zone_6'],
//         ['zone_7',['zone_7',['zone_7','zone_8']]]
// ];

// console.log(arr.flat(3));
// console.log(arr.flat(Infinity));







//  ES2020

//  #1 : BigInt 
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n+12n);
// const newNum = 9007199254740991n+12n;

// console.log(newNum);
// console.log(typeof newNum);



// ES2014

//  "use strict";

//   let x = 3.14;
// console.log(x);

//  we need to declare the variable first in use strict mode






//  Advanced JavaScript Section

//  1) Event Propagation (Event Bubbling and Event Capturing)

// 2) Higher Order Function
//  function which takes another function as an arguments is called HOF


//  3) Callback Function
//  function which get passed as an argument to another function is called CBF
//  A callback function is a function that is passed as an argument to
//  another function, to be "called back" at a later time.



// We need to create a calculator

// const add = (a,b)=>{
//         return a + b;
// }
// const sub = (a,b) =>{
// return Math.abs(a-b);
// }
// const mult = (a,b) =>{
//         return a * b;
// }

// //  I have to do the hardcoded for each operation which is bad
// //  we will use the callback and the HOF to make it simple to use 

// const calculator = (num1,num2,operator) =>{
//         return operator (num1,num2);
// }
// console.log(calculator(4,4,mult));




//  In the above example,calculator is the higher order function,
//  which accepts three arguments,the third one being the callback.
// Here the calculator is called the Higher Order Function because
//  it takes another function as an argument

// and add,sub and mult are called the callback function bcz they are passed
//  as an argument to another





//  5) Hoisting in javaScript

//  we have a creation phase and execution phase.
//  Hoisting in javaScript is a mechanism where variables and functions
//  declarations are moved to the top of their scope before the code execute.

//  For Example
// console.log(myName);
// var myName;
// myName = "Muneeb";

//  How it will be in output during creation phase
// var myName = undefined;
// console.log(myName);
// myName = "Muneeb";



// In ES2015 (a.k.a ES6),hoisting is avoided by using the let keyword 
//  Instead of var.(The other difference is that variables declared
// with let and const to the surrounding block,not the entire function.)


//  6) What is scope chain and lexical Scoping in javaScript?

//  The scope chain is used to resolve the value of variable names in JS

//  scope chain in js is lexically defined,which means that we can
//  see what the scope chain will be by looking at the code.

//  At the top,we have the Global Scope,which is the window object in the browser.

//  lexical scoping means Now,the inner function can get access to their parent 
//  functions variables But the vice-versa is not true. 

//  Example

// let a = "Hello Guys"; // Global Scope

// const first = ()=>{
//         let b = " How are you?"
        
//         const second = ()=>{
// let c = " Hii,I am fine thank you";
// console.log(a+b+c);
//         }
//         second();
// }
// first();



//  7) What is Closures in JavaScript

//  A closure is the combination of a function bounded together (enclosed) with reference
//  to its surrounding state (the lexical environment).

//  In other words, a closure gives you
//  access to an outer function's scope from an inner function.

//  in JavaScript,closures are created every time a function is created,at function
//  creation time.

//  for example

//  its same like lexical scoping

// const outerFun = (a) =>{
//         let b = 10;
//         const innerFun = ()=>{
//                 let sum = a+b;
//                 console.log(`The sum of a and b is ${sum}`);
//         }
//         innerFun();
// }
// outerFun(5);

//  One more example

// const outerFun = (a) =>{
//         let b = 10;
//         const innerFun = ()=>{
//                 let sum = a+b;
//                 console.log(`The sum of a and b is ${sum}`);
//         }
//        return innerFun;
// }
// let checkClosure = outerFun(5);
// checkClosure();





// Synchronous javaScript prog

// const fun2 = ()=>{
//         console.log('Function 2 is called');
// }

// const fun1 = ()=>{
//         console.log('Function 1 is called');
//         fun2();
//         console.log('Function 1 is called again');
// }
// fun1();




// Asynchronous javaScript prog

// const fun2 = () =>{
//         setTimeout(()=>{
//                 console.log('Function 2 is called');
//         },2000);
// }

// const fun1 = () =>{
//         console.log('Function 1 is called');
//         fun2(); 
//         console.log('Function 1 is called again');
// }

// fun1(); 






//  What is Event Loop in JavaScript














//  Interview Question
// What is Function Currying

// Currying is a technique of evaluating function with multiple arguments,into
//  sequence of function with single argument.

//  In other words,when a function,instead of taking all arguments at one time,takes
//  the first one and return a new function that takes the second one and returns
//  a new function which takes the third one,and so forth,until all arguments have been fulfilled

//  Example

// function sum (num1){
//         // console.log(num1);
//         return function (num2){
//                 // console.log(num1,num2);
// return function (num3){
//         console.log(num1,num2,num3);
// }
// }
// }
//  sum (5)(3)(8);



//   Using FAT Arrow Function
// const sum = (num1)=>(num2)=>(num3)=>console.log(num1,num2,num3);
//  sum (5)(3)(8);



//  CallBack Hell

// setTimeout(() => {
//         console.log('1 work is done');
//         setTimeout(() => {
//                 console.log('2 work is done');  
//                 setTimeout(() => {
//                         console.log('3 work is done');
//                         setTimeout(() => {
//                                 console.log('4 work is done');
//                                 setTimeout(() => {
//                                         console.log('5 work is done');
//                                         setTimeout(() => {
//                                                 console.log('6 work is done');
//                                         }, 1000);
//                                 }, 1000);
//                         }, 1000);
//                 }, 1000);
//         }, 1000);
// }, 1000);




// ***********************************************************************************

//  Bonus JSON

//  JSON.stringify turns a javascript object into JSON text and stores that JSON text
//  in a string e.g:
        
// var my_object = {key_1:"some text", key_2: true, key_3: 5};

// var object_as_string = JSON.stringify(my_object);
// // "{"key_1:"some text","key_2":true,"key_3":"5"};
// console.log(object_as_string);

// typeof(object_as_string);
//  "string"



//  JSON.parse turns a string of JSON text into a JavaScript object,e.g:

var object_as_string_as_object = JSON.parse(object_as_string);
// {key_1:"some text", key_2: true, key_3: 5}

typeof(object_as_string_as_object);
//  object