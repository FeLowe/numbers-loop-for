$(document).ready(function() {
$("#counting").submit(function(event){

var countToInput = parseInt($("#countTo").val());
var countByInput = parseInt($("#countBy").val());

debugger;
var total=[];
for(var i = 0; i <= countToInput; i += countByInput) {
  total.push(i);
}
$("#results").text(total);



alert("after");
event.preventDefault();
 });
});
