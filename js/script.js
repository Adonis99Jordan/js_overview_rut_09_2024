const header = document.querySelector('h1');
const paragraph = document.querySelector('.special-paragraph');
const image = document.querySelector('#main-image');
const noteoutput = document.querySelector('.output');
const timerdisplay = document.querySelector('#time');
const timerbtn = document.querySelector('#start-btn');
// console.log(header.innerText);
// console.log(paragraph.innerText);
header.classList.add('crazy');

header.style.textDecoration = 'underline';

// //Triversal Example
// console.log(document.children[0].children[1].children);
// image.setAttribute('src', 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg')

// Insterting a new article element into the output section (INSERT adds)
noteoutput.insertAdjacentHTML('beforeend', `
    <article>
    <h3>New note text</h3>
    <p>Added on: 9/20/2024</p>
    </article>
    `);

//INNER replaces 
// noteoutput.innerHTML = `
//     <article>
//     <h3>New note text</h3>
//     <p>Added on: 9/20/2024</p>
//     </article>
//     `;

//Timers
// const setInterval = window.setInterval;
// setTimeout(function() {
//     console.log('time up!');
// }, 10000);
let count = 10;
let started = false;

timerbtn.addEventListener('click', function () {
    // console.log('clicked');
    if (!started) {
        const timer = setInterval(function () {
        count--;

        timerdisplay.innerText = 'Time:' + count;

        if (count <= 0) {
        // console.log('reached zero');
        clearInterval(timer);
        timerdisplay.innerText = 'Time: 10';
        count = 10;
        started = false;
        }
    }, 1000);

    started = true;
    }

});
