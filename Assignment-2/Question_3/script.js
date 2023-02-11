const inputNumber = document.getElementById("inputNumber");
const checkButton = document.getElementById("checkButton");
const resultDisplay = document.getElementById("resultDisplay");
const clearButton = document.getElementById("clearButton");


//check button//
checkButton.addEventListener("click", function() {
  let number = inputNumber.value;
  let isPrime = true;
  if (number <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    resultDisplay.style.backgroundColor = "green";
    resultDisplay.innerHTML = `${number} is a prime number.`;
  } else {
    resultDisplay.style.backgroundColor = "red";
    resultDisplay.innerHTML = `${number} is not a prime number.`;
  }
});

//clear button//
clearButton.addEventListener("click", function() {
  inputNumber.value = "";
  resultDisplay.innerHTML = "";
});
//when we click clear button also change the to default//
clearButton.addEventListener("click", function() {
  resultDisplay.style.backgroundColor = "white";
});

