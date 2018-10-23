function getInput() {
  var inputOne = parseInt($("input#inputOne").val());
  var inputTwo = parseInt($("input#inputTwo").val());

  verifyInput(inputOne, inputTwo);
};

function verifyInput(inputOne, inputTwo) {
  var invalidWarning = ["Invalid Input"]
  if (!inputOne || !inputTwo) {
    display(invalidWarning);
  } else if (inputOne === NaN || inputTwo === NaN ) {
    display(invalidWarning);
  } else if (inputOne < inputTwo) {
    display(invalidWarning);
  } else {
    count(inputOne, inputTwo);
  }
};

function count(valueOne, valueTwo) {
  var countPoints = [];
  for (var count = valueTwo; count <= valueOne; count += valueTwo) {
  countPoints.push(count);
  }

  console.log(countPoints);
  display(countPoints);
  return countPoints;
};

function display(dataToDisplay) {
  for (var index = 0; index < dataToDisplay.length; index += 1) {
    $("ul#display").append("<li class='output'>" + dataToDisplay[index] + "</li>");
  }
};

$(document).ready(function() {
  $("form#counterInput").submit(function(event) {
    event.preventDefault();

    $("li.output").remove();
    getInput();
  });
});
