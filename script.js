// Created variables for Today's Date and Current (Present) Hour using day.js.
var today = dayjs();
var currentHour = today.hour();

// Created variables to target our Time-Block container, Save Buttons and Clear Button.
var timeBlockEl = $(".time-block");
var saveButtonEl = $(".saveBtn");
var clearBtn = $("#clearBtn");

// Shorthand for $(document).ready(function() {});
// This Function Ensures functions within are called once all the DOM elements have finished rendering.
$(function () {
  // Event listens for a click on any of our Save Buttons.
  timeBlockEl.on("click", ".saveBtn", function () {
    // Variable targets the parent element of the save button.
    var selectedTimeBlockEl = $(this).parent();
    // Variable targets the textarea in the container.
    var selectedTextEl = $(selectedTimeBlockEl.children().eq(1));
    // The user's input inside the text area is saved as a variable.
    var inputValue = selectedTextEl.val();
    // The ID of the current parent element will be stored in this variable.
    var selectedTimeBlockId = $(selectedTimeBlockEl).attr("id");

    // The user's input is saved in localstorage.
    // The current element's ID is used as the *KEY* for the user's input.
    localStorage.setItem(selectedTimeBlockId, JSON.stringify(inputValue));
  });

  // Click on Clear button: Erases local storage and clears our values.
  clearBtn.on("click", function () {
    // Clears local storage.
    localStorage.clear();
    // Clears values inside our text areas.
    for (var i = 0; i < timeBlockEl.length; i++) {
      $(timeBlockEl[i]).children().eq(1).val(null);
    }
  });

  // Created loop to iterate over all of our time blocks.
  for (var i = 0; i < timeBlockEl.length; i++) {
    // Obtains the hour in military time of our time block using it's ID.
    var listTime = $(timeBlockEl[i]).attr("id").substr(5);

    // Compares our time-block hour to the current hour and modifies it's class accordingly.
    if (listTime < currentHour) {
      $(timeBlockEl[i]).addClass("past");
    } else if (listTime == currentHour) {
      $(timeBlockEl[i]).addClass("present");
    } else {
      $(timeBlockEl[i]).addClass("future");
    }

    // Gets the ID of the iterated time block container.
    var getBlockId = $(timeBlockEl[i]).attr("id");

    // Gets the value stored in our stored data using the iterated ID as a key.
    var storedData = JSON.parse(localStorage.getItem(getBlockId));

    // If saved data is not Null it will append our stored data to the page.
    if (storedData !== null) {
      timeBlockEl[i].children[1].append(storedData);
    }
  }

  // This will display the current date onto the Header Paragraph Element.
  $("#currentDay").text(today.format("dddd, MMMM D"));
});
