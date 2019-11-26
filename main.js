$(document).ready(initializeApp);

var gameboard = [{}, {}, {}, {}, {}, {}, {}]
var playerTurnColor = "yellow";
var clickedColumnNumber = null;
var clickedRowNumber = null;
var horizontalMatch = 0;
var verticalMatch = 0;
var rightDiagnal = 0;
var leftDiagnal = 0;

function initializeApp() {
  $('.col0').on('click', handleClick);
  $('.col1').on('click', handleClick);
  $('.col2').on('click', handleClick);
  $('.col3').on('click', handleClick);
  $('.col4').on('click', handleClick);
  $('.col5').on('click', handleClick);
  $('.col6').on('click', handleClick);
}

function handleClick(event) {
  clickedColumnNumber = parseInt($((event.currentTarget)).attr('class').split('')[3]);
  clickedRowNumber = Object.keys(gameboard[clickedColumnNumber]).length;
  if (clickedRowNumber < 7) {
    gameboard[clickedColumnNumber][clickedRowNumber] = playerTurnColor;
    $("." + $(event.currentTarget).attr('class') + ">" +".row" + clickedRowNumber).addClass(playerTurnColor);
    if (playerTurnColor === "yellow") {
      playerTurnColor = "red"
    }
    else {
      playerTurnColor = "yellow"
    }
    check();
  }
}

// horizontal check

function check(){
  var targetProperty = gameboard[clickedColumnNumber][clickedRowNumber];
  for(var columnIndex = 0; columnIndex < 7; columnIndex++){
    if(targetProperty === gameboard[columnIndex][clickedRowNumber]){
      horizontalMatch++;
      if(horizontalMatch === 4){
        break;
      }
    }
    else{
      horizontalMatch = 0;
    }
  }
  // vertical check
  for(var rowIndex = 0; rowIndex < 6; rowIndex++){
    if(targetProperty === gameboard[clickedColumnNumber][rowIndex]){
      verticalMatch++;
      if(verticalMatch === 4){
        break;
      }
    }
    else{
      verticalMatch = 0;
    }
  }
  //diagnal check
  debugger;
  for (var rowNum = 0, columnNum = 0; rowNum - columnNum === clickedColumnNumber - clickedRowNumber && rowNum < 6 && columnNum < 7; rowNum++ , columnNum++) {
    if (targetProperty === gameboard[columnNum][rowNum]) {
      rightDiagnal++;
      if (rightDiagnal === 4) {
        break;
      }
    }
    else {
      rightDiagnal = 0;
    }

}
}
