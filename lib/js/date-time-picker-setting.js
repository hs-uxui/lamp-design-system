$(function () {
  $('.datepicker').datepicker({
    dateFormat: 'yy-mm-dd',
    yearRange: 'c-100:c+10',
    changeYear: true,
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  });
});

$(function () {
  $('.timepicker').timepicker({
    timeFormat: 'HH:mm',
    interval: 30,
    minTime: '08:00',
    maxTime: '18:00',
    defaultTime: '08:00',
    startTime: '8:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
});
