const string9 = 'doc.html';
const lastCharacters = '.html';

if (string9.slice(-lastCharacters.length) === lastCharacters) { 
  console.log('There string ends with characters ".html"');
 
} else {
  console.log('The string does not ends with ".html"');
}