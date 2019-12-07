// back-end logic:


// front-end logic:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault;
    var music = $("input:radio[name=fifthQuestion]:checked").val();
    var programmingExperience = parseInt($("#sixthQuestion").val());

    var firstResult;
      if (programmingExperience === 1) {
        firstResult = ;
      } else if (programmingExperience === 2) {
        firstResult = ;
      } else if (programmingExperience === 3) {
        firstResult = ;
      } else if (programmingExperience === 4) {
        firstResult = ;
      }

    var secondResult;
      if (music === "hiphop") {
        secondResult = ;
      }
      // hype, rock, indie, metal, none
  })
})
