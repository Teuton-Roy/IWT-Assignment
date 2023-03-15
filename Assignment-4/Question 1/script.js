const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const screen = calculator.querySelector('.calculator-screen');

let firstValue = 0;
let operator = '';
let secondValue = 0;
let result = 0;

keys.onclick = e => {
  const key = e.target;
  const keyValue = key.value;

  if (keyValue === 'clear') {
    screen.textContent = '0';
    firstValue = 0;
    operator = '';
    secondValue = 0;
    result = 0;
  } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
    operator = keyValue;
    firstValue = parseFloat(screen.textContent);
    screen.textContent = '0';
  } else if (keyValue === '=') {
    secondValue = parseFloat(screen.textContent);

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      default:
        result = secondValue;
        break;
    }

    screen.textContent = result;
    firstValue = result;
    operator = '';
    secondValue = 0;
  } else {
    if (screen.textContent === '0') {
      screen.textContent = keyValue;
    } else {
      screen.textContent += keyValue;
    }
  }
};
