/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/


var quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    year: '',
    citation: ''
  },
  {
    quote: 'So many books, so little time.',
    source: 'Frank Zappa',
    year: '',
    citation: ''
  },
   {
    quote: 'All right, Mr. DeMille, Im ready for my close-up.',
    source: 'Gloria Swanson',
    year: '1950',
    citation: 'Sunset Blvd.'
    },
     {
    quote: 'What weve got here is failure to communicate.',
    source: 'Strother Martin',
    year: '1967',
    citation: 'Cool Hand Luke'
      },
      {
    quote: 'There is no place like home.',
    source: 'L.Frank Baum',
    year: '1939',
    citation: 'THE WIZARD OF OZ'
        }
];

function getRandomQuote(faris){
var i = Math.floor(Math.random() * faris.length); //this one give u a random number
return faris[i];
}

function printQuote () {
  var a = getRandomQuote(quotes)
  var c = '<span class="citation">' + a.citation + '</span>'
  var y =  '<span class="year">' + a.year + '</span>'

  if (a.citation ===''){

    c = '';
  }

  if (a.year === '') {
    y = ''

  }
  var i = ''

  i = '<p class="quote">' + a.quote + '</p>'
  i += '<p class="source">' + a.source + c + y + '</p>'


document.getElementById('quote-box').innerHTML = i;

}

function rgbColor() { // this function genarate a random color
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.background = bgColor;


}

function quotecolor() {
var i = printQuote() + rgbColor();
}

document.getElementById('loadQuote').addEventListener("click",quotecolor, false);
document.getElementById('loadQuote').addEventListener(setInterval(quotecolor, 20000), printQuote, false);
