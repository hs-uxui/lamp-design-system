const externalTabMenuElements = document.querySelectorAll('.external-tab-bar .external-tab-item');
const tabsWrapper = document.querySelector('.external-tab-bar');
const scrollArea = tabsWrapper.querySelector('.tabs-scroll-area');
const tabList = tabsWrapper.querySelector('.external-tab-list');
const prevBtn = tabsWrapper.querySelector('.tab-scroll-btn.prev');
const nextBtn = tabsWrapper.querySelector('.tab-scroll-btn.next');

const tabMenuElements = document.querySelectorAll('.tab-bar .tab-item');

// 1. External Tab
// - tab 리스트 스크롤
const getExternalTabItems = () => Array.from(tabList.querySelectorAll('.external-tab-item'));

function updateScrollButtons() {
  const scrollLeft = scrollArea.scrollLeft;
  const maxScrollLeft = tabList.scrollWidth - scrollArea.clientWidth;
  const showButtons = tabList.scrollWidth > scrollArea.clientWidth;

  tabsWrapper.classList.toggle('active', showButtons);
  prevBtn.disabled = scrollLeft <= 0;
  nextBtn.disabled = scrollLeft >= maxScrollLeft - 1;
}
function scrollToNextTab() {
  const tabItems = getExternalTabItems();
  const currentScroll = scrollArea.scrollLeft;
  const nextTab = tabItems.find((item) => item.offsetLeft > currentScroll + 1);
  if (nextTab) {
    scrollArea.scrollTo({ left: nextTab.offsetLeft, behavior: 'smooth' });
  }
}
function scrollToPrevTab() {
  const tabItems = getExternalTabItems().reverse();
  const currentScroll = scrollArea.scrollLeft;
  const prevTab = tabItems.find((item) => item.offsetLeft < currentScroll);
  if (prevTab) {
    scrollArea.scrollTo({ left: prevTab.offsetLeft, behavior: 'smooth' });
  }
}

prevBtn.addEventListener('click', scrollToPrevTab);
nextBtn.addEventListener('click', scrollToNextTab);
scrollArea.addEventListener('scroll', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);
updateScrollButtons();

// - tab 클릭 시 활성화
function handleExternalTabClick() {
  externalTabMenuElements.forEach((menuElement) => {
    menuElement.classList.remove('is-active');
    menuElement.setAttribute('aria-selected', 'false');
  });

  this.classList.add('is-active');
  this.setAttribute('aria-selected', 'true');
}

// - tab 삭제
function handleTabRemoveClick(event) {
  event.stopPropagation();

  const tabItem = event.target.closest('li');

  if (tabItem) {
    tabItem.remove();
  }
}

externalTabMenuElements.forEach((tabMenu) => {
  tabMenu.addEventListener('click', handleExternalTabClick);

  const removeButton = tabMenu.querySelector('.tab-remove');
  if (removeButton) {
    removeButton.addEventListener('click', handleTabRemoveClick);
  }
});

// 2. 기본 Tab
function handleTabClick() {
  tabMenuElements.forEach((tabMenu) => tabMenu.classList.remove('is-active'));

  this.classList.add('is-active');
}

tabMenuElements.forEach((tabMenu) => {
  tabMenu.addEventListener('click', handleTabClick);
});
