var today = dayjs();
console.log(dayjs().format('h'));
console.log(dayjs().hour());
var currentHour = today.hour();

var timeBlockEl = $(".time-block");
var saveButtonEl = $(".saveBtn");

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

    var getBlockId = $(timeBlockEl[i]).attr("id")
    console.log(getBlockId);

    
    var storedData = JSON.parse(localStorage.getItem(getBlockId))

    if (storedData !== null) {
      timeBlockEl[i].children[1].append(storedData);
    }
  }

  // XXXXXXXXXXXXTODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("dddd, MMMM D"));

});
