$(document).ready(function() {
  var age = parseInt(prompt("How old are you:" ));

  if (age>= 18) {
    $('#votingInformation').show();
  } else {
    $('#linksToVotingInfo').show();
  }
});
