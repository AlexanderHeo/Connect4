$(document).ready(initializeApp);

var gameboard = [{}, {}, {}, {}, {}, {}, {}]
var playerTurnColor = "yellow";
var clickedColumnNumber = null;
var clickedRowNumber = null;
var horizontalMatch = 0;
var rightDiagnal = 0;
var leftDiagnal = 0;
var verticalMatch = 0;
var redStatus = 0;
var yellowStatus = 0;
var winner;


function initializeApp() {
  createGameBoard();
  $('.col0').on("click", handleClick);
  $('.col1').on('click', handleClick);
  $('.col2').on('click', handleClick);
  $('.col3').on('click', handleClick);
  $('.col4').on('click', handleClick);
  $('.col5').on('click', handleClick);
  $('.col6').on('click', handleClick);
  $('body').on("click", ".newGameButton", newGame);
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
  }
  check();
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
  //right diagnal check
  debugger;
  for(var r = clickedRowNumber + 1, c = clickedColumnNumber + 1; r < 6 && c < 7; r++, c++){
    if(targetProperty !== gameboard[c][r]){
      rightDiagnal = 0;
      break;
    }
    else{
      rightDiagnal++;
    }
  }
  for(r = clickedRowNumber - 1, c = clickedColumnNumber -1; r >= 0 && c >=0; r--,c--){
    if (targetProperty !== gameboard[c][r]) {
      rightDiagnal = 0;
      break;
    }
    else {
      rightDiagnal++;
    }
  }
  checkResult();
}

function checkResult(){
  debugger;
  if(horizontalMatch === 4 || verticalMatch === 4 || rightDiagnal === 4 || leftDiagnal === 4){
    alert("you win");
    nextGame();
  }
  else{
    return;
  }
}
function nextGame() {
  $('.red').removeClass('red');
  $('.yellow').removeClass('yellow');
  if (playerTurnColor = 'yellow') {
    redStatus++;
    $('.redStat').text(redStatus);
    $('#playerTurn').removeClass('yellow');
    $('#playerTurn').addClass('red');
    $('#playerTurn').text("Red Turn");
    playerTurnColor = 'red';
  } else if (playerTurnColor = 'red') {
    yellowStatus++;
    $('.yellowStat').text(yellowStatus);
    $('#playerTurn').text("Yellow Turn");
    $('#playerTurn').removeClass('red');
    $('#playerTurn').addClass('yellow');
    playerTurnColor = 'yellow';
  }
  gameboard = [{}, {}, {}, {}, {}, {}, {}];
  clickedColumnNumber = null;
  clickedRowNumber = null;
  horizontalMatch = 0;
  verticalMatch = 0;
  rightDiagnal = 0;
  leftDiagnal = 0;
}

function newGame(){
  nextGame();
  redStatus = 0;
  yellowStatus = 0;
  $('.redStat').text(redStatus);
  $('.yellowStat').text(yellowStatus);
  $('#playerTurn').text("Yellow Turn");
  $('#playerTurn').removeClass('red');
  $('#playerTurn').addClass('yellow');
  playerTurnColor = 'yellow';
}

function createGameBoard() {
  var columnContainer = $('.columnContainer');
  var h = 0;
  var j = 0;

  var columnClassArray = ['col0', 'col1', 'col2', 'col3', 'col4', 'col5', 'col6'];
  var rowClassArray = ['hover', 'row5', 'row4', 'row3', 'row2', 'row1', 'row0'];

  for (var column = 0; column < 7; column++) {
    var newColumn = $('<div>');
    newColumn.addClass(columnClassArray[h]);

    for (var row = 0; row < 7; row++) {
      var newRow = $('<div>');
      newRow.addClass(rowClassArray[j]);
      j++;
      newColumn.append(newRow)
    }
    h++
    j = 0;
    columnContainer.append(newColumn);
  }
}
