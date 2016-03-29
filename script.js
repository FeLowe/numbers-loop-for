

$(document).ready(function() {
  $("#word-puzzle").submit(function(event){


    //
    var s = 'This is my string';
    var sentence = s.split("")
    var vowels =['a','e','i','o','u'];

    for (var i = 0; i < sentence.length; i++){
      for(var x = 0; x < vowels.length; x++) {
        if (sentence[i] === vowels[x]) {
          sentence[i].replace("-");
        }
      }
    }
    $("#results").text(sentence);

    event.preventDefault();
  });
});
