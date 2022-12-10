$( document ).ready(function() {
  //
  $(function () {
    $("#currentDay").text(dayjs().format('dddd, MMMM YYYY'))

    const rows = document.getElementsByClassName("row");
    let currentTime = parseInt(dayjs().format('H'));
  //
   $(".saveBtn").on("click", function () {
      
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
  })
  //
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

//
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
      //
      function setColor(element, color) {
        element.style.backgroundColor = color;
      }
    }
  timer();
});
})