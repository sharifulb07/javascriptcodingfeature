// let userName="Shariful Islam";

// function showName(){
//     let message="Hello "+userName;
//     alert(message);
//     console.log(userName);
// }

// showName();
// showName();



// let userName="John";

// function showName(){
//     userName="Bobita"; // chaned the outer variable
//     let message="Hello "+userName;
//     console.log(message);

// }

// console.log(userName); // calling userName variable with the value John before function call
// showName(); // function call
// console.log(userName); // output would be Bobita


// Declare and calling Function with two paramaters;

// function showMs(name, message){
//     console.log(message+" "+name);
// }

// // Invoking the function 

// showMs("Ashia", "How are you right now! ");
// showMs("Adiyat", "What's up Baba");


// calling a function with two parameter in which one intializes value passing

// function useMessage(name, text=", Where are you"){
//     console.log(name+text);
// }

// // invoking function calling here 

// useMessage("Sharifa");
// useMessage("masuma");

// declaring function with another function

// function anotherFunction(){
//     return "What's man here to go ahead! ";
// }
// function myFunc(name, text=anotherFunction()){
//     console.log(name+" "+text);
// }


// // invoke the function here

// myFunc("shariful ");


// function showMan(text){

//     if(text==undefined){
//         text="Empty text here"
//     }
//     console.log(text);
// }

// showMan();

// nullish coalesing parameter within the function 

// function showText(count){
//     console.log(count??"Unknown");
// }

// showText(0);
// showText(null);
// showText(undefined);



// user defined math function
// function Sum(a,b){
//     console.log(a+b);
//     return a+b;
// }
// function Subtraction(a,b){
//     console.log(a-b);
//     return a-b;
// }
// function Multiply(a,b){
//     console.log(a*b);
//     return a*b;
// }
// function Modulus(a,b){
//     console.log(a%b);
//     return a%b;
// }
// function Division(a,b){
//     console.log(a/b);
//     return a/b;
// }

// Sum(17,89);
// Subtraction(17,89);
// Multiply(17,89);
// Modulus(17,89);

// Math.abs(Division(17,89)/1000);


// function checkAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return confirm("Do you have any permission from your parents?");
//     }
// }


// function checkAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return confirm("Do you have any permission from your parents?");
//     }
// }

// let age=prompt("How old are you?", 18)

// if(checkAge(age)){
// alert("access Granted");
// }else{
//     alert("Access denied");
// }


// function doNothing(){
//     return;
// }

// alert(doNothing()==undefined);



// function showPrime(n){
//     for(let i=2;i<n;i++){
//         if(!isPrime(i))continue;
//         alert(i);
//     }
// }



// function isPrime(n){
//     for(let j=2;j<n;j++){
//         if(n%j==0) return false;
//     }
//     return true;
// }


// function ask(question,yes,no){
//     if(confirm())yes()
//     else no();
// }
// function showOk(){
//     alert("You agreed");
// }

// function showCancel(){
//     alert("you cancel the execution of the function ");
// }

// ask("Do you agree?", showOk, showCancel);


// function ask(question,yes,no){
//     if(confirm()) yes();
//     else no();
// }

// ask(
//     "I am shariful islam, Do you agree?",
//     function(){alert("You agreed")},
//     function(){alert("You cancel the execuation of the program ")}
    
//     )


// function declaration

// function sum(a,b,c){
//     return (a+b+c);
// }

// // function expression
// let submission=function sum(a,b,c){
//     return (a+b+c);
// }


