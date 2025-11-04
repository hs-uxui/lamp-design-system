const PASSWORD_SHOW_MODE = {
  visible: {
    inputType: 'text',
    icon: 'lock_open',
    ariaLabel: '비밀번호 보기',
    ariaChecked: true,
  },
  hidden: {
    inputType: 'password',
    icon: 'lock',
    ariaLabel: '비밀번호 숨기기',
    ariaChecked: false,
  },
};

const passwordToggleButtons = document.querySelectorAll('.btn-password-toggle');

passwordToggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const inputGroup = button.closest('.input-group');
    const passwordInput = inputGroup.querySelector('.input');
    const iconElement = button.querySelector('.material-symbols-rounded');

    const isHidden = passwordInput.getAttribute('type') === 'password';
    const nextMode = isHidden ? PASSWORD_SHOW_MODE.visible : PASSWORD_SHOW_MODE.hidden;

    passwordInput.setAttribute('type', nextMode.inputType);
    button.setAttribute('aria-label', nextMode.ariaLabel);
    button.setAttribute('aria-checked', nextMode.ariaChecked);
    iconElement.textContent = nextMode.icon;

    button.classList.toggle('is-show', isHidden);
  });
});
