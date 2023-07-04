// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var today = dayjs();

var timeBlockEl = $('.time-block');
var saveButtonEl = $('.saveBtn');
var timeBlockSave = [];

// Shorthand for $(document).ready(function() { ... });
// Ensures your functions are called once all the DOM elements have finished rendering.
$(function () {

  timeBlockEl.on('click', ".saveBtn", function() {
    
    var selectedTimeBlockEl = $(this).parent();
    var selectedTimeBlockId = $(selectedTimeBlockEl).attr("id");
    var selectedTextEl = $(selectedTimeBlockEl.children().eq(1));
    var inputValue = selectedTextEl.val();


    localStorage.setItem(selectedTimeBlockId, JSON.stringify(inputValue));
  });



  
  // How might the id be useful when saving the description in local storage?




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?






  var storedSchedule = JSON.parse(localStorage.getitem(""))

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // XXXXXXXXXXXXTODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
