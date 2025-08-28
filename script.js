let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heart");
const coinDisplay = document.getElementById("coin");
const copyDisplay = document.getElementById("copy");

const hearts = document.querySelectorAll('.card-heart');
const callButtons = document.querySelectorAll('.call-btn');
const copyButtons = document.querySelectorAll('.copy-btn');

const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heartCount++;
        heartDisplay.textContent = heartCount;
        // Nijer chestay kichu 
        heart.querySelector('i').classList.toggle('text-red-500');
    });
});

callButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const serviceName = card.querySelector('h3').textContent;
        const serviceNumber = card.querySelector('.hotline-number').textContent;

        if(coinCount < 20) {
            alert("You don't have enough coins to make this call!");
            return;
        }

        coinCount -= 20;
        coinDisplay.textContent = coinCount;

        alert(`Calling ${serviceName}: ${serviceNumber}`);

        const time = new Date().toLocaleTimeString();
        const li = document.createElement('li');
        li.textContent = `${serviceName} - ${serviceNumber} at ${time}`;
        li.classList.add('border', 'rounded-lg', 'p-2', 'bg-green-50');
        historyList.appendChild(li);
    });
});

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const hotlineNumber = card.querySelector('.hotline-number').textContent;

        navigator.clipboard.writeText(hotlineNumber)
        .then(() => {
            alert('Hotline copied to clipboard!');
            copyCount++;
            copyDisplay.textContent = copyCount;
        })
        .catch(() => {
            alert('Failed to copy hotline!');
        });
    });
});

clearHistoryBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
});
