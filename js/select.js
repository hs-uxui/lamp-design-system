const selectTrigger = document.querySelector('.form-select-trigger');
const selectContainer = document.querySelector('.form-select');
const selectOptions = document.querySelectorAll('.option-item');

function toggleSelectMenu() {
  selectContainer.classList.toggle('is-active');
}

function handleOptionSelect() {
  selectOptions.forEach((option) => option.classList.remove('is-active'));
  this.classList.add('is-active');

  const selectedText = this.querySelector('button').textContent;
  selectTrigger.querySelector('span').textContent = selectedText;

  selectContainer.classList.remove('is-active');
}

selectTrigger.addEventListener('click', toggleSelectMenu);
selectOptions.forEach((option) => option.addEventListener('click', handleOptionSelect));
