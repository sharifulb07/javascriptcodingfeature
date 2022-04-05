

    let a=2+2;
    switch(a){
        case 1:
            console.log("This is number one ");
            break;
        case 3:
            console.log("this is number threee");
            break;
        case 4:
            console.log("this is number four");
            break;
        case 5:
            console.log("this is number five");
            break;
        
    }
 

    // another switch statesment
    let arg=prompt("Enter a value?");
console.log(typeof arg);
let num=Number(arg);
switch(num){
    case 0:
    case 1:
        alert('One or Zero');
    case 2:
        alert('Two');
        break;
    case 3:
        alert ('Never executes!');
               break;
    default:
        alert("An unknow value");

}



//  converting from switch statement to if... else statement
let browser=prompt("Please Enter your Browser name here ");
if(browser=="Edge"){
    alert("You 've got the Edge!");
}else if(browser=="Chrome" ||
         browser=="FireFox" ||
         browser=="Safari" ||
         browser=="Opera"){
    alert('Okay we support these browsers too');
}else{
    alert('We hope that this page looks ok!');
}

