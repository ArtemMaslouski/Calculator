let button = document.querySelectorAll(".button");
let screen = document.getElementById("screen");
let firstNumber = "";
let secondNumber = "";
let sign = "";


button.forEach(function(button){
    button.addEventListener("mouseenter",function(e){
        e.target.style.backgroundColor = "red";
    })
})

button.forEach(function(button){
    button.addEventListener("mouseleave",function(e){
        e.target.style.backgroundColor = "violet";
    })
})

//Кнопка С
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click",function(){
    let screen = document.getElementById("screen");
    screen.innerText = "";
})

button.forEach(function(button){
    button.addEventListener("click",function(){
        screen.innerText += button.innerText;
    })
})

//Кнопка +
let plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click",function(){
    firstNumber = screen.innerText;
    firstNumber = parseInt(firstNumber);
    screen.innerText = "";
    sign = "+"
});

//Кнопка =
let equalButton = document.getElementById("equalButton");
equalButton.addEventListener("click",function(){
    secondNumber = screen.innerText;
    secondNumber = parseInt(secondNumber);

    switch(sign){
        case "+":
            let result = firstNumber + secondNumber;
            screen.innerText = result;

    }
})