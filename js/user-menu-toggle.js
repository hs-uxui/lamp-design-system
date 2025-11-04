function closeAllUserMenus(excludeRoot) {
  const openTriggers = document.querySelectorAll('.user-menu-trigger.is-active');
  openTriggers.forEach((trigger) => {
    const root = trigger.closest('.user-menu');
    if (!excludeRoot || root !== excludeRoot) {
      trigger.classList.remove('is-active');
    }
  });
}

document.addEventListener('click', (event) => {
  const target = event.target;

  const trigger = target.closest('.user-menu-trigger');
  if (trigger) {
    const root = trigger.closest('.user-menu');

    event.preventDefault();
    event.stopPropagation();

    const willOpen = !trigger.classList.contains('is-active');
    closeAllUserMenus(root);
    trigger.classList.toggle('is-active', willOpen);
    return;
  }

  const dropdown = target.closest('.user-menu-dropdown');
  if (dropdown) {
    if (target.closest('.menu-link')) {
      const root = dropdown.closest('.user-menu');
      const activeTrigger = root?.querySelector('.user-menu-trigger.is-active');
      if (activeTrigger) activeTrigger.classList.remove('is-active');
    }
    return;
  }

  if (!target.closest('.user-menu')) {
    closeAllUserMenus();
  }
});
