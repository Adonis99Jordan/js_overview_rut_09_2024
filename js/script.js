const notes = ['JS is cool', 'create a constant with const', 'use the src attribute on the script tag to load a js file'];

console.log(notes);

// push adds item to the end of the array
notes.push('Copilot is a great help!');

console.log(notes);
// unhshift adds item to he beggining of the array
notes.unshift('CSS is crazy');

console.log(notes);

// pop removes the last item in the array
notes.pop();

console.log(notes);

//shift removes the first item from the array
notes.shift();

console.log(notes);

const notes2 = notes;
// Splice to remove item at certain index
//you pass in the index of where you want to start deleting items and then the amount of items you want to remove
notes2.splice(1, 2);

console.log(notes2);