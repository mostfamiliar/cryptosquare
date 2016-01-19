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


    $("#result").show();
    event.preventDefault();
  });
});
