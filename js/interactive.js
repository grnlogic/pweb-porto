document.addEventListener('DOMContentLoaded', () => {
    const greetingContainer = document.createElement('div');
    greetingContainer.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 123, 255, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 1rem;
        z-index: 1000;
    `;

    const now = new Date();
    const hours = now.getHours();
    let greeting = '';

    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingContainer.textContent = greeting;
    document.body.appendChild(greetingContainer);

    setTimeout(() => {
        greetingContainer.style.display = 'none';
    }, 5000);
});
