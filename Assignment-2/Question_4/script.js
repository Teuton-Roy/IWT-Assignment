document.getElementById("generateButton").addEventListener("click", function(){
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let result = document.getElementById("resultDisplay");
  
    result.innerHTML = "";
    for (let i = firstNumber; i <= secondNumber; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        result.innerHTML += `${i} `;
      }
    }
  });
  
  
    //add clear event listener to button//
    document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("resultDisplay").innerHTML = "";
    });