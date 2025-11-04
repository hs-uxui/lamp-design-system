class TooltipManager {
  constructor() {
    this.init();
  }

  init() {
    const tooltipWrappers = document.querySelectorAll('.tooltip-wrapper');

    tooltipWrappers.forEach((wrapper) => {
      const trigger = wrapper.querySelector('.tooltip-trigger') || wrapper;
      const tooltip = wrapper.querySelector('.tooltip-content');

      if (trigger && tooltip) {
        trigger.addEventListener('mouseenter', () => {
          this.adjustTooltipPosition(wrapper, tooltip);
          tooltip.classList.add('visible');
        });

        wrapper.addEventListener('mouseleave', () => {
          tooltip.classList.remove('visible', 'align-left', 'align-right');
        });
      }
    });
  }

  adjustTooltipPosition(wrapper, tooltip) {
    tooltip.classList.remove('align-left', 'align-right');

    const wrapperRect = wrapper.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const tooltipWidth = tooltipRect.width;
    let left = wrapperRect.left + wrapperRect.width / 2 - tooltipWidth / 2;

    if (left < 8) {
      tooltip.classList.add('align-left');
    } else if (left + tooltipWidth > viewportWidth - 8) {
      tooltip.classList.add('align-right');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TooltipManager();
});
