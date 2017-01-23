//business logic
function Place(location, landmarks, time, notes) {
  this.locationVisit = location;
  this.landmarksVisit = landmarks;
  this.timeVisit = time;
  this.notesVisit = notes;
}

Place.prototype.fullVisit = function() {
  return this.locationVisit + " " + this.landmarksVisit + " " + this.timeVisit + " " + this.notesVisit;
}

//user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTime, inputtedNotes);

    $("ul#place").append("<li><span class='place'>" + newPlace.fullVisit() + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locationVisit);
      $(".location").text(newPlace.locationVisit);
      $(".landmarks").text(newPlace.landmarksVisit);
      $(".time").text(newPlace.timeVisit);
      $(".notes").text(newPlace.notesVisit);
    });

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");

  });
});
