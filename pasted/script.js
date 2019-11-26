//Do we want the stats box to be part of the win condition?

$(document).ready(startApp);

var matches = null;
var redWins = 0;
var yellowWins = 0;
var resetButton = $('.resetButton');
var playerOneDiv = $('#playerOne');
  //stats div with an id of playerOne
var playerOneText = $('.redStat');
var playerTurnDiv = $('#playerTurn');
  //stats div with an id of playerTurn
var playerTwoDiv = $('#playerTwo');
  //stats div with an id of playerTwo
var playerTwoText = $('.yellowStat')
var redCircles = $('div').find('red');
  //all divs with a class of 'red'
var yellowCircles = $('div').find('yellow');
  //all divs with a class of 'yellow'
function startApp(){
  resetButton.on('click', resetGame);
  //on click of the reset button
  //call the function resetGame
}

function resetGame(){
  redCircles.removeClass('red');
    //all divs with a class of 'red'
    //remove that class

  yellowCircles.removeClass('yellow');
    //all divs with a class of 'yellow'
    //remove that class

  if (playerTurn = red){
    //if it is the red players turn

    redWins++;
    //add one to redWins

    playerOneText.text(redWins);
      //the div with an id of playerOne
      //change the text to the value of variable redWins

    playerTurnDiv.removeClass('redTurn');
      //the div with and id of playerTurn
      //remove the class redTurn

    playerTurnDiv.addClass('yellowTurn');
      //the div with an id of playerTurn
      //add the class yellowTurn
  } else {
    //if it is not the red players turn

    yellowWins++
    //add one to yellowWins;

    playerTwoText.text(yellowWins);
    //the div with an id of playerTwo
    //change the text to the value of variable yellowWins

    playerTurnDiv.removeClass('yellowTurn');
      //the div with and id of playerTurn
      //remove the class yellowTurn

    playerTurnDiv.addClass('redTurn');
      //the div with an id of playerTurn
      //add the class redTurn

  }

}
