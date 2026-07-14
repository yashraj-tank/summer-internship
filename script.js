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
// Function without Parameters
function greetUser(){

    document.getElementById("output").innerHTML =
    "Hello! Welcome to JavaScript Functions.";

}

// Function with Parameters
function addNumbers(num1,num2){

    let sum=num1+num2;

    document.getElementById("output").innerHTML =
    "Sum = " + sum;

}

// Function using Object
function showStudent(){

    let student={
        name:"Yashraj",
        course:"Web Development",
        city:"Ahmedabad"
    };

    document.getElementById("output").innerHTML =
    "Name: " + student.name +
    "<br>Course: " + student.course +
    "<br>City: " + student.city;

}

// Function using Built-in Date Object
function showDate(){

    let today=new Date();

    document.getElementById("output").innerHTML =
    today;

}