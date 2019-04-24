// function Player (team) {
//
// }

var playerX = "img/circle.png";
var playerO = "img/cross.png";
var heightPic= "150px";
var widthtPic= "150px";


// User Logic
$(document).ready(function () {
// 1 / know when a user click into each case and case ready to be marked
 $("#imgPlayer1").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer2").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer3").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer4").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer5").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer6").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer7").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer8").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");
 $("#imgPlayer9").html("<img src=" + playerX+ " height="+ heightPic+ " width="+ widthtPic +">");

 $("#corner1").click(function() {
   $("#corner1").fadeToggle(1);
   $("#imgPlayer1").show();
 });
 $("#side2").click(function() {
   $("#side2").fadeToggle(1);
   $("#imgPlayer2").show();
 });
 $("#corner3").click(function() {
   $("#corner3").fadeToggle(1);
   $("#imgPlayer3").show();
 });
 $("#side4").click(function() {
   $("#side4").fadeToggle(1);
   $("#imgPlayer4").show();
 });
 $("#center5").click(function() {
   $("#center5").fadeToggle(1);
   $("#imgPlayer5").show();
 });
 $("#side6").click(function() {
   $("#side6").fadeToggle(1);
   $("#imgPlayer6").show();
 });
 $("#corner7").click(function() {
   $("#corner7").fadeToggle(1);
   $("#imgPlayer7").show();
 });
 $("#side8").click(function() {
   $("#side8").fadeToggle(1);
   $("#imgPlayer8").show();
 });
 $("#corner9").click(function() {
   $("#corner9").fadeToggle(1);
   $("#imgPlayer9").show();
 });



});
