var today = dayjs();
var currentHour = today.hour();

var timeBlockEl = $(".time-block");
var saveButtonEl = $(".saveBtn");
var timeBlockSave = [];

// Shorthand for $(document).ready(function() { ... });
// Ensures your functions are called once all the DOM elements have finished rendering.
$(function () {
  timeBlockEl.on("click", ".saveBtn", function () {
    var selectedTimeBlockEl = $(this).parent();
    var selectedTimeBlockId = $(selectedTimeBlockEl).attr("id");
    var selectedTextEl = $(selectedTimeBlockEl.children().eq(1));
    var inputValue = selectedTextEl.val();

    localStorage.setItem(selectedTimeBlockId, JSON.stringify(inputValue));
  });


  for (var i = 0; i < timeBlockEl.length; i++) {
    var listTime = $(timeBlockEl[i]).attr("id").substr(5);

    if (listTime < currentHour) {
      $(timeBlockEl[i]).addClass('past');
    } else if (listTime == currentHour) {
      $(timeBlockEl[i]).addClass('present');
    } else {
      $(timeBlockEl[i]).addClass('future');
    }
  }

  // localStorage.getItem()
  // var storedSchedule = JSON.parse(localStorage.getitem(""));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // XXXXXXXXXXXXTODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("dddd, MMMM D"));
});
