
// function checkHorizontal(){
//   var Horizontal = 0;
//   for(right side===){
//     Horizontal++
//   }
//   for(left side===){
//     Horizontal++
//   }
//   if(...)

//   return Horizontal
// }

var gameboard = [{}, {}, {}, {}, {}, {}, {}]
var playerTurnColor = "red";
var clickedColumnNumber = null;
var rowNumber = null;

$('col0').on('click', handleClick);
$('col1').on('click', handleClick);
$('col2').on('click', handleClick);
$('col3').on('click', handleClick);
$('col4').on('click', handleClick);
$('col5').on('click', handleClick);
$('col6').on('click', handleClick);

function handleClick(event) {
  clickedColumnNumber = $(parseInt(event.currentTarget.attr('class')).split('')[3]);
  rowNumber= gameboard[clickedColumnNumber].length;
  var targetbox = null;
  if (Object.keys(gameboard[clickedColumnNumber]).length < 7) {
    gameboard[clickedColumnNumber].rowNumber = playerTurnColor;
    targetbox = $(event.currentTarget > "#row" + rowNumber).addClass(playerTurnColor);
    if (playerTurnColor === "red") {
      playerTurnColor === "yellow"
    }
    else {
      playerTurnColor === "red"
    }
  }
  var box = clickedColumnNumber
}

//horizontal check

function check(){
  var targetProperty = gameboard[clickedColumnNumber].rowNumber;
  var horizontalMatch = 0;
  var verticalMatch = 0;
  for(var columnIndex = 0; columnIndex < 6; columnIndex++){
    if(targetProperty === gameboard[columnIndex].rowNumber){
      horizontalMatch++;
    }
    else{
      horizontalMatch = 0;
    }
  }

}
