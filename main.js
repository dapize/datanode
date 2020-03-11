// My DIV by selector
const myDiv = document.querySelector('div');
myDiv.data('secret', 'litle value');

// My Item by ID
const myItem = document.getElementById('item');
myItem.data('order', false);

// Setting data in NodeList
document.querySelectorAll('li').data('item', true);

// Setting data by TagName
const someParagraph = document.getElementsByTagName('P')[0];
someParagraph.data('resumen', function () {
  console.log("I'm some paragraph")
});

