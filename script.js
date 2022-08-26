let num1 = "";
let num2 = "";
let operator = "";

let buttons = document.querySelectorAll(".buttons");
// console.log("hello");
// console.log(buttons);
buttons.forEach((button) => {
//   console.log(button.innerHTML);
  button.addEventListener("click", function (e) {
    let value = e.target.innerText;
    if (value === "C") {
      num1 = "0";
      num2 = "";
      operator = "";
      document.getElementById("display").innerText = num1;
    }else if(value === `&larr;`){
        num1 = num1.slice(0, -1);
        document.getElementById("display").innerText = num1;
    }
     else if (value === "=") {
      if (operator === "+") {
        num1 = parseInt(num1) + parseInt(num2);
        document.getElementById("display").innerText = num1;
      } else if (operator === "-") {
        num1 = parseInt(num1) - parseInt(num2);
        document.getElementById("display").innerText = num1;
      } else if (operator === "*") {
        num1 = parseInt(num1) * parseInt(num2);
        document.getElementById("display").innerText = num1;
      } else if (operator === "/") {
        num1 = parseInt(num1) / parseInt(num2);
        document.getElementById("display").innerText = num1;
      }else{
        num1="syntax error";
        document.getElementById("display").innerText = num1;
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      operator = value;
      num1 = document.getElementById("display").innerText;
      num2 = "";
    } else {
      num2 += value;
      document.getElementById("display").innerText = num2;
    }
  });
});

// console.log("bye")
