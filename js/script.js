const names = ['Izzy', 'Matt', 'City', 'Kandyce']

function  printnames() {
    //Loop over the names array and print out each name to the console
    for (let index = 0; index < names.length; index ++){
        console.log(names[index]);
    }
    
}




function add(num1, num2) { 
    return num1 + num2;
}

const result = add(3, 10);

console.log(result)
//if you put a 10 and 5 here, they'll be sent back to the function, like the tubes in bank
// add (10, 5); 
// add (20, 100);
// add (50, 5);

// function printvals(str, bool, num, arr) {
//     console.log(arr[1]);
// }

// printvals('some string', true, 15, ['Michael', 'Nina', 'Roman']);