const matrix1Input = document.querySelector('#matrix1');
const matrix2Input = document.querySelector('#matrix2');
const addButton = document.querySelector('#add-button');
const subtractButton = document.querySelector('#subtract-button');
const multiplyButton = document.querySelector('#multiply-button');
const resultDiv = document.querySelector('#result');

function parseMatrix(input) {
  const matrix = input.value.split('\n').map(row => row.split(' ').map(Number));
  return matrix;
}

function addMatrices(matrix1, matrix2) {
  try {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix1[i].length; j++) {
        result[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }
    return result;
  } catch (err) {
    console.error("Error adding matrices:", err);
    return null;
  }
}

function subtractMatrices(matrix1, matrix2) {
  try {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix1[i].length; j++) {
        result[i][j] = matrix1[i][j] - matrix2[i][j];
      }
    }
    return result;
  } catch (err) {
    console.error("Error subtracting matrices:", err);
    return null;
  }
}

function multiplyMatrices(matrix1, matrix2) {
  try {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1[0].length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  } catch (err) {
    console.error("Error multiplying matrices:", err);
    return null;
  }
}

function displayResult(result) {
  if (!result) {
    resultDiv.innerHTML = "Error performing operation.";
    return;
  }
  resultDiv.innerHTML = result.map(row => row.join(' ')).join('<br>');
}

addButton.addEventListener('click', () => {
  const matrix1 = parseMatrix(matrix1Input);
  const matrix2 = parseMatrix(matrix2Input);
  const result = addMatrices(matrix1, matrix2);
  displayResult(result);
});

subtractButton.addEventListener('click', () => {
  const matrix1 = parseMatrix(matrix1Input);
  const matrix2 = parseMatrix(matrix2Input);
  const result = subtractMatrices(matrix1, matrix2);
  displayResult(result);
});

multiplyButton.addEventListener('click', () => {
    const matrix1 = parseMatrix(matrix1Input);
    const matrix2 = parseMatrix(matrix2Input);
    const result = multiplyMatrices(matrix1, matrix2);
    displayResult(result);
});
