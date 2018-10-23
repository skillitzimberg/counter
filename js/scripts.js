$(document).ready(function(){
  $("form#countForm").submit(function(event) {
    var countToNum = parseInt($("input#inputUser1").val());
    var countByNum = parseInt($("input#inputUser2").val());

    var outputArray = [];

    console.log(countToNum);
    console.log(countByNum);

    if (isNaN(countToNum) || isNaN(countByNum)) {
      debugger;
      $("span#outputValueHere").text("You're awful. Try again.");
    } else if (countToNum < 0 || countByNum < 0 ) {
      $("span#outputValueHere").text("No negatives.");
    } else if (countByNum > countToNum) {
      $("span#outputValueHere").text("Reverse those numbers!");
    } else {
        for (var index = countByNum; index <= countToNum; index += countByNum) {
          outputArray.push(index);
          console.log(outputArray);
          //debugger;
          // console.log("index=" + index);
          // console.log("countToNum=" + countToNum);
          // console.log("countByNum=" + countByNum);

          }

          $("span#outputValueHere").text(outputArray);

        }

    event.preventDefault();
  }); /*This is the end of the button submit event.*/




}); /*This is the end brace*/
