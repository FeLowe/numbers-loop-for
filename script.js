

$(document).ready(function() {
  $("#word-puzzle").submit(function(event){


    var s = $("#sentence").val();
    var sentence = s.split("");
    var vowels =['a','e','i','o','u'];

    for (var i = 0; i < sentence.length; i++) {
      for(var x = 0; x < vowels.length; x++) {
        if (sentence[i][x] === vowels[x]) {
          sentence[i]= "-";
        }
      }
    }
    var str = sentence.join("");
    $("#results").text(" " + str);

    event.preventDefault();
  });
});
