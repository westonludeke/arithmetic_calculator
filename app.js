const leftNumberInput = document.getElementById('left-number');
const operatorSelect = document.getElementById('operator');
const rightNumberInput = document.getElementById('right-number');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  calculate();
});

leftNumberInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    calculate();
  }
});

rightNumberInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    calculate();
  }
});

function calculate(){
  const leftNumber = parseFloat(leftNumberInput.value);
  const rightNumber = parseFloat(rightNumberInput.value);
  const operator = operatorSelect.value;
  let result;

  if (isNaN(leftNumber) || isNaN(rightNumber)){
    resultDiv.textContent = 'Please enter a valid integer';
    return;
  }

  switch (operator) {
    case '+':
      result = leftNumber + rightNumber;
      break;
    case '-':
      result = leftNumber - rightNumber;
      break;
    case '*':
      result = leftNumber * rightNumber;
      break;
    case '/':
      result = leftNumber / rightNumber;
      break;
  }

  resultDiv.textContent = result;
};
