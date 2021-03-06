// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

//list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

//list([ {name: 'Bart'} ])
// returns 'Bart'

//list([])
// returns ''

function listNames(names) {
  let array = [];
  for (let name of names) {
    array.push(Object.values(name));
  }
  return array.reduce((str, item, index) => {
    if (index < array.length - 2) {
      return str + item + ", ";
    } else if (index == array.length - 1) {
      return str + item;
    } else {
      return str + item + " & ";
    }
  }, "");
}

//second mode
// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name;
//     }
//     else if (index === array.length - 1){
//       return prev + ' & ' + current.name;
//     } 
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
//  }

//the third mode
// function list(names) {
//   var xs = names.map(p => p.name)
//   var x = xs.pop()
//   return xs.length ? xs.join(", ") + " & " + x : x || ""
// }

module.exports = listNames;
