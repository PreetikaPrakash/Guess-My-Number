'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Guess';

document.querySelector('.guess').value = 34;

document.querySelector('.check').addEventListener('click', function () {
  const your_number = Number(document.querySelector('.guess').value);
  console.log(your_number, typeof your_number);

  if (!your_number) {
    console.log('ee');
  }
});
