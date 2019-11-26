$(document).ready(createGameBoard);

function createGameBoard() {
console.log('test');
  var columnContainer = $('.columnContainer');
  var h=0;
  var j=0;

  var columnClassArray = ['col0', 'col1', 'col2', 'col3', 'col4', 'col5', 'col6'];
  var rowClassArray = ['hover', 'row5', 'row4', 'row3', 'row2', 'row1', 'row0'];

  for (var column = 0; column<7 ; column++) {
    var newColumn = $('<div>');
    newColumn.addClass(columnClassArray[h]);

    for (var row = 0; row < 7; row++) {
      var newRow = $('<div>');
      newRow.addClass(rowClassArray[j]);
      j++;
      newColumn.append(newRow)
    }
    h++
    j=0;
    columnContainer.append(newColumn);
  }

}
