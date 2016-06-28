var answers = [];
var textAnswers = [];
var h = 0;

//Answer 1
items.forEach(function(item){
  h = h + item.price;
});
answers[0] = Math.round(100*(h/items.length))/100;



//Answer 2
h = items.filter(function(item){
    return (item.price>14 && item.price<18);
});
answers[1] = h.map(function(item){
  return item.title;
});



//Answer 3
h = items.filter(function(item){
  return (item.currency_code === 'GBP');
});
answers[2] = [h[0].title, h[0].price];



//Answer 4
h = items.filter(function(item){
  return (item.materials.indexOf('wood') != -1);
});
answers[3] = h.map(function(item){
  return item.title;
});



//Answer 5
answers[4] = items.filter(function(item){
  return (item.materials.length >= 8);
});



//Answer 6
h = items.filter(function(item){
  return (item.who_made === 'i_did');
});
answers[5] = h.length;

console.log(answers);
