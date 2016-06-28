var answers = [];
var textAnswers = [];
var h = 0;
var g = [];


//Answer 1
items.forEach(function(item){
  h = h + item.price;
});
answers[0] = Math.round(100*(h/items.length))/100;
textAnswers[0] = 'The average price is $' + answers[0];


//Answer 2
h = items.filter(function(item){
    return (item.price>14 && item.price<18);
});
answers[1] = h.map(function(item){
  return item.title + '<br><br>';
});
answers[1] = answers[1].join('');
textAnswers[1] = String(answers[1]);


//Answer 3
h = items.filter(function(item){
  return (item.currency_code === 'GBP');
});
answers[2] = [h[0].title, h[0].price];
textAnswers[2] = answers[2][0] + ' costs £' + answers[2][1];


//Answer 4
h = items.filter(function(item){
  return (item.materials.indexOf('wood') != -1);
});
answers[3] = h.map(function(item){
  return item.title + '<br><br>';
});
answers[3] = answers[3].join('');
textAnswers[3] = String(answers[3]);


//Answer 5
answers[4] = items.filter(function(item){
  return (item.materials.length >= 8);
});
h = answers[4].map(function(item){
  return (item.materials);
});
for (var i = 0; i < answers[4].length; i++) {
  for (var j = 0; j < h[i].length; j++) {
    h[i][j] = h[i][j] + '<br>';
  }
  g[i] = '<br>' + answers[4][i].title + ' has ' + h[i].length + ' materials<br><br>' + h[i].join('');
}
textAnswers[4] = g.join('');


//Answer 6
h = items.filter(function(item){
  return (item.who_made === 'i_did');
});
answers[5] = h.length;
textAnswers[5] = answers[5] + ' were made by their sellers';


//Output Results
for (var i = 0; i < textAnswers.length; i++) {
  var temp = '#ans' + (i+1);
  document.querySelector(temp).innerHTML = textAnswers[i];
}
