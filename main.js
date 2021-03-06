// ----- Random Matrix Grid -----
var $table = document.getElementById("grid");

// var matrix = matrixCreator(3, 3);

function matrixCreator(numRows, numColumns){
  var matrix = [];
  for (var i = 0; i < numRows; i++){
    matrix[i] = [];
    for (var j = 0; j < numColumns; j++) {
      matrix[i][j] = Math.round(Math.random())
      }
    }
  return matrix
}


document.addEventListener('DOMContentLoaded', function(){
  var matrix = matrixCreator(3, 3);
  generateGrid(matrix);

  function generateGrid(matrix){
    var $table = document.querySelector('#grid');
    $table.innerHTML = '';
    // matrix => [0, 0, 0]
    //           [1, 1, 1]
    //           [0, 0, 0]

    matrix.forEach(function(row){ // first time, row => [0, 0, 0]
      // create a tr for the row
      var $tr = document.createElement('tr');
      row.forEach(function(cell){ // first time, cell => 0
        // cell goes into a new td
        // that td goes into a tr
        var $td = createTableCell(cell);
        $td.textContent = cell;
        $tr.appendChild($td);
        // alternative:
        // $tr.appendChild( createTableCell(cell) );
      });
      // add that tr to the table
      $table.appendChild($tr);
    });
  }

  function createTableCell(value){
    var $td = document.createElement('td');
    // Apply alive or dead class to the td
    if(value === 1){
      $td.classList.add('alive');
    } else {
      $td.classList.add('dead');
    }
    return $td;
  }

  function livingNeighborCount(x, y){
    // Set a variable Neighbors equal to zero, add to it for each live neighbor found
    var neighbors = 0;  
    // Create a function that traverses each cordinate and calculates the living neighbors of each cell
    for (var i = x-1; i <= x+1; i++) {
      if (i < 0 || i > (matrix.length - 1)) {
        // skip that row
      } else {
        for (var j = y-1; j <= y+1 ; j++){
          if (j < 0 || j > (matrix[i].length - 1) || (j === y && i === x)){
            // skip that cell
          } else {
            // add to neighbors if value is 1
            if (matrix[i][j] === 1){
              neighbors += 1;
            }
          }
        }
      }
    }
    return neighbors;
  }

  function calculateNextState(currentState){
    var nextState = [];
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
      currentRow.forEach(function(currentCell, y){
        var nextCellState = livingNeighborCount(x, y);
        // Rule 1. Less than 2 neighbors = die of loneliness
        // Rule 2. Things stay the same unless they change (inertia)
        // Rule 3. More than 3 neighbors = death by overpopulation
        // Rule 4. Exactly 3 neighbors = birth
        if (currentState[x][y] === 1){
          if (nextCellState < 2 || nextCellState > 3) {
            nextCellState = 0;
          } else {
             nextCellState = 1;
          }
        } else {
          if (nextCellState === 3){
            nextCellState = 1;
          } else {
            nextCellState = 0;
          }
        }
        
        nextRow.push(nextCellState);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }

  document.querySelector("#tick").addEventListener('click', function(){
    // Tick button has been pressed
    setInterval(function(){
      matrix = calculateNextState(matrix);
      generateGrid(matrix);
    }, 100);
  });
});





/*  MY ORIGINAL CODE 


// ----- Static Grid -----

// <table> <tr> <td> </td> </tr> </table>

// var cellArray = [[0, 1, 0], [1, 1, 0], [1, 1, 1]];

// var $table = document.getElementById("grid");

/*function tableMaker(cellArray){
  // clear out old state
  $table.innerHTML = "";
  // update matrix
  // generate tr and td elements
  for (var i = 0; i < cellArray.length; i++){
    var $tr = document.createElement('tr');
    $table.appendChild($tr);
    for (var j = 0; j < cellArray.length; j++){
      var $td = document.createElement('td');
      $tr.appendChild($td);
      $td.innerText = cellArray[i][j];
      if (cellArray[i][j] === 0) {
        $td.style.backgroundColor = 'grey';
      } else {
        $td.style.backgroundColor = 'blue';
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function(){
  tableMaker(cellArray);
}); */

