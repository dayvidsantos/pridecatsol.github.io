function showMeow() {
    const meowText = document.getElementById('meow-text');
    meowText.style.display = 'block';
    setTimeout(() => {
        meowText.style.display = 'none';
    }, 3000);
}

function createFallingRainbow() {
    const rainbowContainer = document.getElementById('rainbow-container');
    const rainbow = document.createElement('div');
    rainbow.classList.add('rainbow');
    rainbow.textContent = '🌈';
    rainbow.style.left = Math.random() * 100 + 'vw';
    rainbow.style.animationDuration = Math.random() * 3 + 2 + 's';
    rainbowContainer.appendChild(rainbow);

    setTimeout(() => {
        rainbow.remove();
    }, 5000);
}

function startRainbows() {
    setInterval(createFallingRainbow, 300);
}

document.addEventListener('DOMContentLoaded', startRainbows);

document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        alert('Not allowed.)');
    }
    return false;
};