function showMessage(){

    document.getElementById("demo").innerHTML =
    "JavaScript successfully handled the button click and updated the webpage using DOM Manipulation.";

}
// Variables
let name = "Yashraj";
let age = 20;

// Function
function showMessage(){

    document.getElementById("message").innerHTML =
    "Hello " + name + "! Welcome to JavaScript Basics.";

}

// Condition
function checkNumber(){

    let number = 10;

    if(number % 2 == 0){

        document.getElementById("output").innerHTML =
        number + " is Even Number";

    }
    else{

        document.getElementById("output").innerHTML =
        number + " is Odd Number";

    }

}

// Loop
function printNumbers(){

    let text="";

    for(let i=1;i<=5;i++){

        text += i + "<br>";

    }

    document.getElementById("output").innerHTML=text;

}