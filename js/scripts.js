$(document).ready(function() {
$("#counting").submit(function(event){

var countToInput = parseInt($("#countTo").val());
var countByInput = parseInt($("#countBy").val());
// countToInput=20
// countByInput=5

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
