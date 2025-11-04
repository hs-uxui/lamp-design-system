const collapsibleSectionCloseBtn = document.querySelector('.collapsible-section .btn-close');
const collapsibleSectionCloseIcon = collapsibleSectionCloseBtn.querySelector('.material-symbols-rounded');

const handleCollapsibleSectionCloseBtnClick = () => {
  const collapsibleSection = collapsibleSectionCloseBtn.closest('.collapsible-section');
  collapsibleSection.classList.toggle('is-closed');
};

collapsibleSectionCloseBtn.addEventListener('click', handleCollapsibleSectionCloseBtnClick);
