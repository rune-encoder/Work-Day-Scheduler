// Created variables for Today's Date and Current (Present) Hour using day.js.
var today = dayjs();
var currentHour = today.hour();

// Variables Target our Time-Block container, Save Buttons and Clear Button.
var timeBlockEl = $(".time-block");
var saveButtonEl = $(".saveBtn");
var clearBtn = $("#clearBtn");

// Shorthand for $(document).ready(function() {});
// This Function Ensures functions within are called once all the DOM elements have finished rendering.
$(function () {
  // Click on Save Button: Save input value in a Key in Local Storage.
  timeBlockEl.on("click", ".saveBtn", function () {
    // Target: Container containing the clicked save button.
    var selectedTimeBlockEl = $(this).parent();
    // Target: Text Area
    var selectedTextEl = $(selectedTimeBlockEl.children().eq(1));
    // The User's input in Text Area is saved as a variable.
    var inputValue = selectedTextEl.val();
    // Store ID of Container holding Text Area. 
    var selectedTimeBlockId = $(selectedTimeBlockEl).attr("id");

    // The following saves the User's Input in Local Storage.
    // The container's ID is used as the key to store the User's Input Value.
    localStorage.setItem(selectedTimeBlockId, JSON.stringify(inputValue));
  });

  // Click on Clear button: Clears Local Storage and User Input Values.
  clearBtn.on("click", function () {
    localStorage.clear();
    for (var i = 0; i < timeBlockEl.length; i++) {
      $(timeBlockEl[i]).children().eq(1).val(null);
    }
  });

  // Goes through all of our Elements with the Class: time-block.
  for (var i = 0; i < timeBlockEl.length; i++) {
    // Obtains the hour of our elements using it's ID.
    var listTime = $(timeBlockEl[i]).attr("id").substr(5);

    // Compares the Time-Block Element's hour to the Current hour and adds the appropriate class changing it's background.
    if (listTime < currentHour) {
      $(timeBlockEl[i]).addClass("past");
      $(timeBlockEl[i]).removeClass("present");
      $(timeBlockEl[i]).removeClass("future");
    } else if (listTime == currentHour) {
      $(timeBlockEl[i]).removeClass("past");
      $(timeBlockEl[i]).addClass("present");
      $(timeBlockEl[i]).removeClass("future");
    } else {
      $(timeBlockEl[i]).removeClass("past");
      $(timeBlockEl[i]).removeClass("present");
      $(timeBlockEl[i]).addClass("future");
    }

    // Retrieves the ID of the iterated time block container.
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
