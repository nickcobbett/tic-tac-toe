var xMatrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var oMatrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

xMatrix.name = 'X';
oMatrix.name = 'O';

function checkRows(matrix) {
  var sumRow = (row) => {
    return row.reduce((a, b) => {
      return a + b
    }, 0);
  }

  var isThree = false;

  matrix.forEach(row => {
    if (sumRow(row) === 3) {
      isThree = true;
    }
  });

  return isThree;
}

function checkColumns(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var count = 0;
    for (var k = 0; k < matrix[i].length; k++) {
      count += matrix[k][i];
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
};

function checkDiagonals(matrix) {
  if (matrix[0][0] + matrix[1][1] + matrix[2][2] === 3) {
    return true;
  } else if (matrix[0][2] + matrix[1][1] + matrix[2][0] === 3) {
    return true;
  } else {
    return false;
  }
};

function displayWinner(player) {
  var i;
  player.name === 'X' ? i = 0 : i = 1;
  var $overlay = $('.game--overlay');

  $('.game--grid').css('display', 'none');
  $overlay.css('visibility', 'visible');

  $overlay.children()[i].style.visibility = 'visible';
  $overlay.children()[i].classList.add('active');
  $('.game--field').addClass('game--over');

};

var even = true;

$('.game--cell').one('click', function(e) {
  var i;
  even ? i = 0 : i = 1;

  var el = $(this).children()[i];
  var style = getComputedStyle(el);
  el.style.visibility = 'visible';

  var rowIndex = $(e.target.parentElement).index();
  var colIndex = $(this).index();
  var player;
  i === 0 ? player = xMatrix : player = oMatrix;

  logPlays(rowIndex, colIndex, player);
  var threeInARow = checkRows(player);
  var threeInAColumn = checkColumns(player);
  var threeInADiagonal = checkDiagonals(player);
  if (threeInARow || threeInAColumn || threeInADiagonal) {
    displayWinner(player);
  }

  even = !even;
});

$('.game--restart--parent').click(function() {
  location.reload();
});

function logPlays(row, col, player) {
  player[row][col] = 1;
};

$('.game--cell').each(function(i, el) {
  var i = $(this).index();
  if (i === 1) {
    el.style.borderRight = '3px solid #59605e';
    el.style.borderLeft = '3px solid #59605e';
  }
});

$('.game--row').each(function(i, el) {
  var i = $(this).index();
  if (i === 1) {
    el.style.borderTop = '3px solid #59605e';
    el.style.borderBottom = '3px solid #59605e';
  }
});