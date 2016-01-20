var leapYear = function(year) {
 if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};





$(document).ready(function() {
  $("form#crypto-mess").submit(function(event) {
    var cleanMessage = $("input#inputMessage").val().toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '');
    alert(cleanMessage);

    var charLength = cleanMessage.length();

    if (charLength >= 100 && <= 82) {
      var arraySize = [10][10];
    }
    else if (charLength >= 81 && <= 65) {
      arraySize = [9][9];
    }
    else if (charLength >= 64 && <= 48) {
      arraySize = [8][8];
    }
    else if (charLength >= 49 && <= 37) {
      arraySize = [7][7];
    }
    else if (charLength >= 36 && <= 26) {
      arraySize = [6][6];
    }
    else if (charLength >= 25 && <= 17) {
      arraySize = [5][5];
    }
    else if (charLength >= 16 && <= 10) {
      arraySize = [4][4];
    }
    else if (charLength >= 9 && <= 5) {
      arraySize = [3][3];
    }
    else if (charLength >= 4 && <= 2) {
      arraySize = [2][2];
    }





    $("#result").show();
    event.preventDefault();
  });
});
