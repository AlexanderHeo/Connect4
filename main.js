
$(document).ready(initializeApp);

var gameboard = [{}, {}, {}, {}, {}, {}, {}]
var playerTurnColor = "yellow";
var clickedColumnNumber = null;
var clickedRowNumber = null;
var horizontalMatch = 0;
var verticalMatch = 0;
var redWins = 0;
var yellowWins = 0;



function initializeApp() {
  createGameBoard();
  addClickHandlers();
  addHoverHandlers();
  $('#playerTurn').addClass('yellow').text("yellow's turn");
  $('.modal').hide();
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
  $(".reset").on("click", resetGame);
  $(".next-round").on("click", () => {nextGame(); $('.modal').hide()});
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

    //switch to determine drop distance
    var colObj = gameboard[clickedColumnNumber];
    var colLength = Object.keys(colObj).length;

    switch (colLength) {
      case 0:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall');
        break;
      case 1:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall1');
        break;
      case 2:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall2');
        break;
      case 3:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall3');
        break;
      case 4:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall4');
        break;
      case 5:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall5');
        break;
      case 6:
        $("." + $(event.currentTarget).attr('class') + ">" + ".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall6');
        break;
    }
    // the commented line below is now in the switch above
    // $("." + $(event.currentTarget).attr('class') + ">" +".row" + clickedRowNumber).addClass(playerTurnColor).addClass('fall');
    $(event.currentTarget).find('.hover').removeClass(playerTurnColor);


    if (playerTurnColor === "yellow") {
      $(event.currentTarget).find('.hover').addClass('red');
      playerTurnColor = "red";
    } else if (playerTurnColor === 'red') {
      $(event.currentTarget).find('.hover').addClass('yellow');
      playerTurnColor = "yellow";
    }
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
}

function checkResult(){
  if(horizontalMatch === 4 || verticalMatch === 4){
    $('.modal').show();
    horizontalMatch = 0;
    verticalMatch = 0;
    if(playerTurnColor === "red"){
      yellowWins++;
    }
    else{
      redWins++;
    }
  }
  else{
    displayStats();
  }
}

function displayStats(){
  $('#playerTurn').text(playerTurnColor + "'s turn").removeClass('red yellow');
  $('#playerTurn').addClass(playerTurnColor);
  $('.yellowStatText').text(yellowWins);
  $('.redStatText').text(redWins);
  $('.win').text(playerTurnColor + " wins!")
  $('.modal').css('background-color', playerTurnColor);
}

function nextGame(){
  $('.columnContainer *').removeClass('yellow red');
  clickedColumnNumber = null;
  clickedRowNumber = null;
  horizontalMatch = 0;
  verticalMatch = 0;
  gameboard = [{}, {}, {}, {}, {}, {}, {}];
  displayStats();
}

function resetGame(){
  nextGame();
  redWins = 0;
  yellowWins = 0;
  displayStats();
}
