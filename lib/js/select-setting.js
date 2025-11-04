$(document).ready(function () {
  // Single select
  $('.single-select').SumoSelect();

  // Multiple select
  $('.multiple-select').SumoSelect({
    placeholder: '선택하세요',
    okCancelInMulti: true,
    selectAll: true,
    csvDispCount: 10,
  });

  // Search select
  $('.search-select').SumoSelect({
    search: true,
    searchText: '검색하세요',
  });
});
