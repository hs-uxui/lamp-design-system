const dateInput = document.getElementById('datepicker-single');
if (dateInput) {
  const dateWrapper = dateInput.closest('.date-input-group');
  const picker = new Litepicker({
    element: dateInput,
    singleMode: true,
    format: 'YYYY/MM/DD',
    lang: 'ko',
    setup: (picker) => {
      picker.on('show', () => {
        dateWrapper.classList.add('is-active');
      });
      picker.on('hide', () => {
        dateWrapper.classList.remove('is-active');
      });
    },
  });
}

const dateRangeInput = document.getElementById('datepicker-range');
if (dateRangeInput) {
  const dateRangeWrapper = dateRangeInput.closest('.date-range-group');
  const rangePicker = new Litepicker({
    element: dateRangeInput,
    singleMode: false,
    format: 'YYYY/MM/DD',
    numberOfMonths: 2,
    numberOfColumns: 2,
    autoApply: true,
    setup: (rangePicker) => {
      rangePicker.on('show', () => {
        dateRangeWrapper.classList.add('is-active');
      });
      rangePicker.on('hide', () => {
        dateRangeWrapper.classList.remove('is-active');
      });
    },
  });
}
