let display = document.getElementById('display');
let expression = '';

function appendCharacter(char) {
  display1.value='';
  expression += char;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display1.value='';
  display.value = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display1.value='';
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    display1.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Lỗi';
    expression = '';
  }
}