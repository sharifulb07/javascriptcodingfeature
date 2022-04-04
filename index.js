// OR operator

// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);

// let a=19;
// let b=60;

// console.log(b||a);


// console.log(0||1);

// let hour=11;

// if(hour<=10||hour>=18){
//     console.log("My Office is closed ");
// }else if(hour>=10||hour<=18){
//     console.log("My office is open");
// }

// let firstName="";
// let lastName="";
// let nickName="SuperCoder";

// console.log(firstName||lastName||nickName);



// && operator in javascript practice

// console.log(true&&true); //true
// console.log(false&&true);//false
// console.log(true&&false);//false
// console.log(false&&false);//false

// let hour=12;
// let minute=30;

// if(hour==12 && minute==30){
//     console.log(`The time is 12:30`);
// }


// console.log(1&&4&&5);
// console.log(1 && null && 5);
// console.log(1 && null && undefined);
// console.log(1 && 4 && undefined);


// special use of && operator

// let number=10;

// (number<11) && console.log("Awesome lower number");
// (number<9) && console.log("Awesome lower number");

// console.log(!true&&!false);
// console.log(!0);

// console.log(Boolean("There is no number here"));
// console.log(Boolean(null));

// console.log(null||34||undefined);//34

// console.log(console.log(1)||4||85||console.log(5));


// console.log(console.log(12)&&null&&console.log(78));

// console.log(null||34&&6||89);

// let age=20;

// //first variant

// if(age>=14 && age<=90){
//     console.log("your age is for perfect here");
// }

// let age=10;

// if(age<=14 || age>=90){
//     console.log("you are underage or over age understood man");
// }

// if(-1||0) console.log("First one here");
// if(0||-1) console.log("second one here");
// if(null||-1||0) console.log("this third one ");

let visitor="Admin";
let password=prompt("input your password!",'');

if(password=="TheMaster") alert("Welcome");
if(password !="TheMaster") alert("Wrong Password!");
if(password=='') alert('empty string');
