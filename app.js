/* Get DOM Elements */
const backpackBtn = document.getElementById('backpackBtn');
const trunkBtn = document.getElementById('trunkBtn');
const doorBtn = document.getElementById('doorBtn');

const backpackImg = document.getElementById('backpackImg');
const trunkImg = document.getElementById('trunkImg');
const doorImg = document.getElementById('doorImg');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */

backpackBtn.addEventListener('click', () => {
    total++;
    resetKeys();
    const keyLocation = Math.ceil(Math.random() * 3);

    if (keyLocation === 1) {
        wins++;
        backpackImg.classList.add('reveal');
    } else if (keyLocation === 2) {
        trunkImg.classList.add('reveal');
    } else {
        doorImg.classList.add('reveal');
    }
    displayResults();
});

trunkBtn.addEventListener('click', () => {
    total++;
    resetKeys();
    const keyLocation = Math.ceil(Math.random() * 3);

    if (keyLocation === 2) {
        wins++;
        trunkImg.classList.add('reveal');
    } else if (keyLocation === 1) {
        backpackImg.classList.add('reveal');
    } else {
        doorImg.classList.add('reveal');
    }
    displayResults();
});

doorBtn.addEventListener('click', () => {
    total++;
    resetKeys();
    const keyLocation = Math.ceil(Math.random() * 3);

    if (keyLocation === 3) {
        wins++;
        doorImg.classList.add('reveal');
    } else if (keyLocation === 2) {
        trunkImg.classList.add('reveal');
    } else {
        backpackImg.classList.add('reveal');
    }
    displayResults();
});

function resetKeys() {
    backpackImg.classList.remove('reveal');
    trunkImg.classList.remove('reveal');
    doorImg.classList.remove('reveal');
}
/* Display Functions */

function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

// (don't forget to call any display functions you want to run on page load!)
