// app.js
// Scratch-Card Canvas Logic (supports touch/mouse)

const canvas = document.getElementById('scratchCard');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 300;
canvas.height = 300;

// Fill canvas with base color
ctx.fillStyle = '#ddc67a';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Example of scratch card effect
function scratch(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.touches ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
    const y = event.touches ? event.touches[0].clientY - rect.top : event.clientY - rect.top;

    ctx.clearRect(x - 20, y - 20, 40, 40);
}

canvas.addEventListener('mousedown', scratch);
canvas.addEventListener('touchstart', scratch);
canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('touchmove', scratch);
