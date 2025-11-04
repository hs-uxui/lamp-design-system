const paginationButtonElements = document.querySelectorAll('.pagination .page-list .btn-page');
const paginationItemElements = document.querySelectorAll('.pagination .page-list .page-item');

function handlePaginationButtonClick() {
  paginationItemElements.forEach((pageItem) => pageItem.classList.remove('is-active'));

  this.closest('.page-item').classList.add('is-active');
}

paginationButtonElements.forEach((pageBtn) => {
  pageBtn.addEventListener('click', handlePaginationButtonClick);
});
