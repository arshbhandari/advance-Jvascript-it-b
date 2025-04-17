// function sayHello(){
//     let you = prompt("What is your namme ");
//     console.log("Hello", you + "!");
// }
// sayHello()

// ******************************************

// let varContainingFunction = function(){
//     let varInFunction = "I m in a function . ";
//     console.log("Hi there!" , varInFunction);

// };
// varContainingFunction();

// ************************************

// function tester (para1, para2){
//     return para1+" "+para2;  
// }
// const arg1 = "1 2";
// const arg2 = "3 4";
// a=tester(arg1,arg2);
// console.log(a);

//*****************

// function addTwoNumbers(x=2 ,y=3){
//     console.log(x+y);
// }
// addTwoNumbers(4,5);
// addTwoNumbers(2,-20);
// //defaulat arguments 
// addTwoNumbers(); 
// addTwoNumbers(10); 
// addTwoNumbers(10,4,5,6,7,2); 

// Special functions and operators **********************

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Arsh Bhandari")

// const arr =["Squairel","alapa","buddy"];
// arr.forEach(e=>console.log(e));

// ****************** SPREAD ARRAY ************

// let spread =["is ","funny ","and"]
// let message = ["Arsh ","Bhandari",spread,"intelligent"]
// console.log(message)

// let spread =["is ","funny ","and"]
// let message = ["Arsh ","Bhandari",...spread,"intelligent","boy"]
// console.log(message)

// function addTwoNumbers(x,y,a,s){
//     console.log(x+y+a+s);
// }
// let arr1=[5,8];
// let arr2=[8,3];
// addTwoNumbers(...arr1,...arr2)

// ************* REST OPEARTOR *****************
// function someFunction(para1,...para2){
//     console.log(para1,para2);
// }
// someFunction("hi","there","how are you?","fine ");

// ***********************************

// function addTwoNumber(x,y){
//     console.log(x+y);
// }
// // let result = addTwoNumber(4,5);
// // console.log(result);

// ******************************

// function addTwoNumber(x,y){
//     return x+y;
// }
// let resultArr=[];
// for(let i =0;i<10;i++){
//     let result = addTwoNumber(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

// ***********************

// let addTwoNumber =(x,y)=>{
//     console.log("addiing...")
//     return (x+y);
// }

// let addTwoNumber= (x,y)=>x+y;
// let result = addTwoNumber(12,15);
// console.log(result);


// *************** VARIABLE SCOPING FUNCTION **************

// function test(x){
//     console.log("Available:",x);
// }
// test("Hiii");
// console.log("Not Available : ",x);  // ReferenceError : x is not defined 


// function test(){
//     let y = "Hiiiii i am arsh !";
//     console.log("Available:",y);
//     return y;
//     }
// let z=test();
// console.log("Available:",z);
// console.log("Not Available : ",y);  // ReferenceError : y is not defined 

// *********************

// function c(){
//     if(true){
//         var x= "ScarFace";
//     }
//     console.log(x);
// }
// c();

// **************************

// function c(){
//     if(true){
//         console.log(x);    // undefined
//         var x= "ScarFace";
//     }   
// }
// c();

// ***************************

// function c(){
//     if(true){
        // console.log(x);      // reference error
//         let x= "ScarFace";
//     }
// }
// c();

// ************************
// function c(){
//     if(true){
//         const x= "ScarFace";
//     }
//     console.log(x)    // Reference variABLE
// }
// c();

// ******************GLOBAL VARIABLE***********************
// let globalVar= "Gods Plan Baby";
// console.log("Outside :",globalVar);

// function create(x){
//     console.log(" quote  ",globalVar);
// }
// create();
// console.log("still available :",globalVar)

// for Hiding  global varaible , we will make a local variable insid eany block than it will override. 

// *************************************

// let x = "Global";
// function forLocal(){
//     let x = "local";
//     console.log("Local : ",x );
// }
// forLocal();
// console.log("Global : ",x);

// --------------------------------------------

// function confuseReader(){
//     x= "Guess my scope ";
//     console.log("Indside the function : ",x);
// }

// confuseReader();
// console.log("Outside thee function : ",x);

// ----------------------

//Immediately Invoked Function Expression

// (function(){
//     console.log("IIFE!"); //Immediately Invoked Function Expression.
// })()


// (()=>{
//     console.log("IIFE!"); //Immediately Invoked Function Expression.
// })()


// ----------- RECURSION ----------
// function getRecursive(n){
//     console.log(n);
//     if(n>0){
//         getRecursive(--n);
//     } 
// }
// getRecursive(3);

// function getRecursive(n){
//     if(n>0){
//         getRecursive(--n);
//     } 
//     console.log(n);
// }
// getRecursive(3);

// function rec(x){
//     console.log("started ", x);
//     if(x>0){
//         rec(x-1);
//     }
//     else{
//         console.log("done with recurrsion");
//     }
//     console.log("Ended ",x);
// }
// rec(3);

//the performance of recursion is slightly worse than the performance of regular iteration of loop .

//--------------  NESTED FUNCTION   ---------
// function outer(n){
//     console.log("Outer function");
    // function inner(x){
//         console.log(x+53);
//         console.log("the value of outer function is",x);
//     }
// }
// outer(2);


// ANONUMUS FUNCTION

// let funVar = function(){
//     console.log("Hoiii");
// }

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside another function ");
// }
// doFlexibleStuff(funVar);

// let youGot = function(){
//     console.log("You are gpood");
// };
// setTimeout(youGot,2000);  //used for delay execution.


// let youGot = function(){
//     console.log("You are gpood");
// };
// setInterval(youGot,100);  //used for frequency execution.
