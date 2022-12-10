$( document ).ready(function() {
  // Below is the function used to determine current time and day
    $("#currentDay").text(dayjs().format('dddd MMMM d, YYYY'))

    const rows = document.getElementsByClassName("row");
    let currentTime = parseInt(dayjs().format('H'));
  // Below pushes saved content into localStorage and pulls up an alert to let user know their appointment was saved into localstorage. 
   $(".saveBtn").on("click", function () {
      
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
      return alert("Appointment Added to localstorage✅")
  })
  // This pulls said hours and their description from localStorage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

// Function for setting the background colors based on current time and specified row time
  function timer() {
     
      Array.from(rows).forEach(row => {
        let
          rowIdString = row.id,
          rowHour;
        if (rowIdString) {
          rowHour = parseInt(rowIdString);
        }
        if (rowHour) {
          if (currentTime === rowHour) {
            setColor(row, "tomato");
          } else if ((currentTime < rowHour) && (currentTime > rowHour - 6)) {
            setColor(row, "lightgreen");
          } else if ((currentTime > rowHour) && (currentTime < rowHour + 6)) {
            setColor(row, "lightgrey");
          } else {
            setColor(row, "white");
          }
        }
      });
      // Function that declares background color changes
      function setColor(element, color) {
        element.style.backgroundColor = color;
      }
    }
  timer();
});
