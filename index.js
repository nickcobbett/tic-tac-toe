var even = true;

$('.game--cell').one('click', function() {
  var i;
  even ? i = 0: i = 1;

  var el = $(this).children()[i];
  var style = getComputedStyle(el);
  console.log(style.visibility);
  el.style.visibility = 'visible';

  even = !even;
});

$('.game--restart--parent').click(function() {
  location.reload();
});