const firstname = 'JD';
let age = 12; 

// If age is greater than 20 and less than 50, console log 'you are young'
if (age > 20 && age < 50) {
    console.log('you are young');
}
// If age is greater than or equal to 50, console log 'you are getting older'
else if (age >= 50) {
    console.log('you are getting older');
}
// If age is less 20 and greater than 12, console log 'you are a teenager'
else if (age < 20 && age > 12 ) {
    console.log('you are a teenager');
}
else {
    console.log('your age is not within our range');
}