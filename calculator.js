let button = document.querySelectorAll(".button");
let screen = document.getElementById("screen");
let firstNumber = "";
let secondNumber = "";
let sign = "";
let result = 0;



button.forEach(function(button){
    button.addEventListener("mouseenter",function(e){
        e.target.style.backgroundColor = "red";
    });
});

button.forEach(function(button){
    button.addEventListener("mouseleave",function(e){
        e.target.style.backgroundColor = "violet";
    })
})

//Кнопка С
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red";
});
clearButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
})
clearButton.addEventListener("click",function(){
    let screen = document.getElementById("screen");
    screen.innerText = "";
});

button.forEach(function(button){
    button.addEventListener("click",function(){
        screen.innerText += button.innerText;
    })
});

//Кнопка /
let divisionButton = document.getElementById("divisionButton");
divisionButton.addEventListener("click",function(e){
    firstNumber = screen.innerText;
    firstNumber = parseFloat(firstNumber);
    screen.innerText = "";
    sign = "/";
});

divisionButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red";
});

divisionButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
})

//Кнопка <--
let removeButton = document.getElementById("removeButton");
removeButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red";
});

removeButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
});

removeButton.addEventListener("click",function(){
    let text = (Number)(Math.floor(screen.innerText / 10));
    screen.innerText = text;
})




//Кнопка +
let plusButton = document.getElementById("plusButton");
plusButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red";
});

plusButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
});

plusButton.addEventListener("click",function(){
    firstNumber = screen.innerText;
    firstNumber = parseFloat(firstNumber);
    screen.innerText = "";
    sign = "+";
});

//Кнопка -
let minusButton = document.getElementById("substractButton");
minusButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red";
});

minusButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
})
minusButton.addEventListener("click",function(){
    firstNumber = screen.innerText;
    firstNumber = parseFloat(firstNumber);
    screen.innerText = "";
    sign = "-";
});

//Кнопка x
let multiplyButton = document.getElementById("multiplyButton");
multiplyButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red"
});
multiplyButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
});
multiplyButton.addEventListener("click",function(){
    firstNumber = screen.innerText;
    firstNumber = parseFloat(firstNumber);
    screen.innerText = "";
    sign = "x";
});


//Кнопка +/-
let adsButton = document.getElementById("adsButton");
adsButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red"
});

adsButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
})
adsButton.addEventListener("click",function(){
    
    
})



//Кнопка =
let equalButton = document.getElementById("equalButton");
equalButton.addEventListener("mouseenter",function(e){
    e.target.style.background = "red";
});

equalButton.addEventListener("mouseleave",function(e){
    e.target.style.background = "violet";
})
equalButton.addEventListener("click",function(){
    secondNumber = screen.innerText;
    secondNumber = parseFloat(secondNumber);

    switch(sign){
        case "+":
            result = firstNumber + secondNumber;
            screen.innerText = result;
            break;
        case "-":
            result = firstNumber - secondNumber;
            screen.innerText = result;
            break;
        case "x":
            result = firstNumber * secondNumber;
            screen.innerText = result;
            break;
        case "/":
            result = firstNumber / secondNumber;
            
            if(result === Infinity){
                screen.innerHTML = "Деление на ноль невозможно";
            }
            else{
                screen.innerText = result;
            }
            break;
    }
});

function changeSign(num){
    return -num;
}

