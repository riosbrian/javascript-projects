'use strict';

const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons-container');

let operation = '';

const MATH_OPERATIONS = {
  clear: () => {
    result.innerHTML = '';
    operation = result.innerHTML;
  },
  delete: () => {
    result.innerHTML = operation.slice(0, -1);
    operation = result.innerHTML;
  },
  moreless: () => {
    if (operation[0] === '-') {
      operation = operation.replace(operation[0], '');
    } else {
      operation = '-' + operation;
    }
    result.innerHTML = operation;
  },
};

buttons.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') return;

  const keyPressed = target.getAttribute('char');
  if (keyPressed === 'equal') {
    result.innerHTML = eval(operation);
    operation = result.innerHTML;
    return;
  }

  if (MATH_OPERATIONS[keyPressed]) {
    MATH_OPERATIONS[keyPressed](keyPressed);
    return;
  }

  operation += keyPressed;
  result.innerHTML = operation;
});
