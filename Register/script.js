document.addEventListener("DOMContentLoaded", function () {
    const symbols = ['🏆', '✨', '🎉', '⭐'];
    const background = document.querySelector('.background');
    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        item.textContent = symbol;
        item.style.left = Math.random() * 100 + '%';
        background.appendChild(item);
        setTimeout(() => {
            item.remove();
        }, 5000);
    }
})