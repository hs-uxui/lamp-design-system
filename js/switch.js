document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('.switch-input');
  const switchIcon = document.querySelector('.material-symbols-rounded');

  checkbox.addEventListener('change', () => {
    switchIcon.textContent = ''; // 강제 clear
    switchIcon.textContent = checkbox.checked ? 'check_small' : 'remove';
    console.log(switchIcon.textContent);
    console.log(checkbox.checked);
  });
});
