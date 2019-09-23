$(document).ready(function() {
 $("form#survey").submit(function(event) {
  var question1answer = $("select#question1").val()
  var question2answer = $("select#question2").val()
  var question3answer = $("select#question3").val()

  if (question1answer === "Styling") {
    $("#javascript").show();
  } else if (question2answer === "Yes") {
    $("#C").show();
  } else if (question3answer === "No") {
    $("#python").show();
  }

  event.preventDefault();
  });
});
