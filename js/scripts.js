// back-end logic: none.


// front-end logic:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var music = $("input:radio[name=fifthQuestion]:checked").val();
    var programmingExperience = parseInt($("#sixthQuestion").val());

    var firstResult;
      if (programmingExperience === 1) {
        firstResult = "Python";
      } else if (programmingExperience === 2) {
        firstResult = "Ruby";
      } else if (programmingExperience === 3) {
        firstResult = "C++";
      } else if (programmingExperience === 4) {
        firstResult = "Go";
      }

    var secondResult;
      if (music === "hiphop") {
        secondResult = "Swift";
      } else if (music === "hype") {
        secondResult = "Swift";
      } else if (music === "rock") {
        secondResult = "Swift";
      } else if (music === "indie") {
        secondResult = "Swift";
      } else if (music === "metal") {
        secondResult = "Java";
      } else if (music === "no") {
        secondResult = "Java";
      }

    $(".firstOutput").text(firstResult);
    $(".secondOutput").text(secondResult);
    $(".musicSelection").text(music);
    $("#output").show();
  });
});
