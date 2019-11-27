
$(document).ready(initializeApp);

var gameboard = [{}, {}, {}, {}, {}, {}, {}]
var playerTurnColor = "yellow";
var clickedColumnNumber = null;
var clickedRowNumber = null;
var horizontalMatch = 0;
var verticalMatch = 0;
var rightDiagnal = 0;
var leftDiagnal = 0;
//var redWins = 5;
  //for testing stats
//var yellowWins = 5;
    //for testing stats


function initializeApp() {
  createGameBoard();
  addClickHandlers();
  addHoverHandlers();
  $('#playerTurn').css('background-color','yellow').text('yellow');
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

function addClickHandlers() {
  $(".col0").on("click", handleClick);
  $(".col1").on("click", handleClick);
  $(".col2").on("click", handleClick);
  $(".col3").on("click", handleClick);
  $(".col4").on("click", handleClick);
  $(".col5").on("click", handleClick);
  $(".col6").on("click", handleClick);
}
function addHoverHandlers() {
  $(".col0").hover(handleHoverIn,handleHoverOut);
  $(".col1").hover(handleHoverIn,handleHoverOut);
  $(".col2").hover(handleHoverIn,handleHoverOut);
  $(".col3").hover(handleHoverIn,handleHoverOut);
  $(".col4").hover(handleHoverIn,handleHoverOut);
  $(".col5").hover(handleHoverIn,handleHoverOut);
  $(".col6").hover(handleHoverIn,handleHoverOut);
}

function handleHoverIn(event) {
  console.log(event);
  var hoverRow = $(event.currentTarget).find('.hover');
  hoverRow.addClass(playerTurnColor);
}
function handleHoverOut(event) {
console.log("hoverout")
  var hoverRow = $(event.currentTarget).find('.hover');
  hoverRow.removeClass(playerTurnColor);
}

function handleClick(event) {
  clickedColumnNumber = parseInt($((event.currentTarget)).attr('class').split('')[3]);
  clickedRowNumber = Object.keys(gameboard[clickedColumnNumber]).length;

  if (clickedRowNumber < 7) {
    gameboard[clickedColumnNumber][clickedRowNumber] = playerTurnColor;
    $("." + $(event.currentTarget).attr('class') + ">" +".row" + clickedRowNumber).addClass(playerTurnColor);
    $(event.currentTarget).find('.hover').removeClass(playerTurnColor);


    if (playerTurnColor === "yellow") {
      $(event.currentTarget).find('.hover').addClass('red');
      playerTurnColor = "red";
    } else if (playerTurnColor === 'red') {
      $(event.currentTarget).find('.hover').addClass('yellow');
      playerTurnColor = "yellow";
    }

    updateStats();
    check();
    setTimeout(checkResult(), 10000);
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

function checkResult(){
  if(horizontalMatch === 4 || verticalMatch === 4 || rightDiagnal === 4){
    alert("you win!");
    horizontalMatch = 0;
    verticalMatch = 0;
    rightDiagnal = 0;
  }
  else{
    return;
  }
}

function resetGame(){
  // debugger;
  // $('.red').removeClass('red');
  // $('.yellow').removeClass('yellow');
  $('.modal').removeClass('hidden');
  if (playerTurnColor = 'yellow'){
    $('.yellowStatText').text(yellowWins);
    $('#playerTurn').text("Red Turn");
    $('#playerTurn').removeClass('yellow');
    $('#playerTurn').addClass('red');
    playerTurnColor = 'red';
  } else if (playerTurnColor = 'red') {
    $('.redStatText').text(redWins);
    $('#playerTurn').text("Yellow Turn");
    $('#playerTurn').removeClass('red');
    $('#playerTurn').addClass('yellow');
    playerTurnColor = 'yellow';
  }
}
