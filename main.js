
// ----- Random Matrix Grid -----
var $table = document.getElementById("grid");

var matrix = matrixCreator(3, 3);

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

document.addEventListener("DOMContentLoaded", function(){
  matrixCreator(3, 3);
});
    


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


