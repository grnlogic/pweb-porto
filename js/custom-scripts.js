// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
`;
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to project cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add a dynamic greeting message
const greetingContainer = document.createElement('div');
greetingContainer.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 14px;
    z-index: 1000;
`;
greetingContainer.textContent = getGreetingMessage();
document.body.appendChild(greetingContainer);

function getGreetingMessage() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi!';
    if (hour < 18) return 'Selamat Siang!';
    return 'Selamat Malam!';
}
