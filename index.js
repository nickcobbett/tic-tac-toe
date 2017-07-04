var even = true;

$('.game--cell').one('click', function() {
  var i;
  even ? i = 0 : i = 1;

  var el = $(this).children()[i];
  var style = getComputedStyle(el);
  el.style.visibility = 'visible';

  // checkWinner($(this).index(), );
  even = !even;
});

$('.game--restart--parent').click(function() {
  location.reload();
});

function checkWinner(row, col) {
  console.log(i)
}

$('.game--cell').each(function(i, el) {
  var i = $(this).index();
  if (i === 1) {
    console.log(el);
    el.style.borderRight = '2px solid #59605e';
    el.style.borderLeft = '2px solid #59605e';
  }
});

$('.game--row').each(function(i, el) {
  var i = $(this).index();
  if (i === 1) {
    console.log(el);
    el.style.borderTop = '2px solid #59605e';
    el.style.borderBottom = '2px solid #59605e';
  }
});