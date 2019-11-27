$(document).ready(startApp);

var matches = null;
var redWins = 5;
var yellowWins = 5;
var playerTurn = 'yellow';
// console.log('creating reset button here');
var resetButton = $('.resetButton');
var playerOneDiv = $('#playerOne');
var playerOneText = $('.redStat');
var playerTurnDiv = $('#playerTurn');
var playerTwoDiv = $('#playerTwo');
var playerTwoText = $('.yellowStat');
var redCircles = null;
var yellowCircles = null;

function startApp() {
  // console.log('applying click handlers')

  $('body').on("click", ".resetButton", resetGame);
  redCircles = $('.red');
  yellowCircles = $('.yellow');
}

function resetGame() {
  var playerTurn = 'red';
  console.log(yellowCircles, redCircles);
  redCircles.removeClass('red');
  yellowCircles.removeClass('yellow');

  if (playerTurn === 'red') {
    //redWins++;
    $('.redStat').text(redWins);
    $('#playerTurn').removeClass('redTurn');
    $('#playerTurn').addClass('yellowTurn');
    $('#playerTurn').text("Yellow Player's Turn");

  } else if (playerTurn === 'yellow') {

    //yellowWins++;
    $('.yellowStat').text(yellowWins);
    $('#playerTurn').removeClass('yellowTurn');
    $('#playerTurn').addClass('redTurn');
    $('#playerTurn').text("Red Player's Turn");
  }

}
