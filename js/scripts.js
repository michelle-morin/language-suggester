// back-end logic: none.


// front-end logic:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var music = $("input:radio[name=fifthQuestion]:checked").val();
    var programmingExperience = parseInt($("#sixthQuestion").val());

    var firstResult;
      if (programmingExperience === 1) {
        firstResult = "Python";
      } else if (programmingExperience === 2) {
        firstResult = "Ruby";
      } else if (programmingExperience === 3) {
        firstResult = "Go";
      } else if (programmingExperience === 4) {
        firstResult = "C++";
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

    if (name) {
      $(".name").text(name);
    } else {
      $(".name").text("Hey there");
    }

    if (firstResult === "Python") {
      $("#python").show();
      $("#ruby").hide();
      $("#go").hide();
      $("#c-plus-plus").hide();
    } else if (firstResult === "Ruby") {
      $("#python").hide();
      $("#ruby").show();
      $("#go").hide();
      $("#c-plus-plus").hide();
    } else if (firstResult === "Go") {
      $("#python").hide();
      $("#ruby").hide();
      $("#go").show();
      $("#c-plus-plus").hide();
      } else if (firstResult === "C++") {
      $("#python").hide();
      $("#ruby").hide();
      $("#go").hide();
      $("#c-plus-plus").show();
    }

    $(".firstOutput").text(firstResult);
    $(".secondOutput").text(secondResult);      $(".musicSelection").text(music);
    $("#output").addClass("card border-dark").show();
  });
});
