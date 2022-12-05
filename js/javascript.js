const btn = document.getElementById('btn');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_value = document.getElementById('hex');
const myDiv = document.getElementById('myDiv');
const myHex = document.getElementById('myHex');

myDiv.style.backgroundColor = '#eee';
hex_value.innerHTML = "#eee";

btn.addEventListener('click', function () {
    let hex_key = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_value.innerHTML = hex_key;
    document.getElementById('myHex').value = hex_key;
    myDiv.style.backgroundColor = hex_key;
    myDiv.style.transition = '1s';
})

// Parse Function and type color
myHex.addEventListener('keyup', () => {
    const new_value = myHex.value;
    let hex_key = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_value.innerHTML = new_value;
    myDiv.style.backgroundColor = new_value;
    myDiv.style.transition = '1s';
})



// change color Function when 
var color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

myDiv.addEventListener(
    "mousemove", function () {
        myDiv.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    },
    setTimeout(() => { }, 5000))