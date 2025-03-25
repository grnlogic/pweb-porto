$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Simulate form submission success or error
        const isSuccess = Math.random() > 0.5; // Random success or error for demonstration

        if (isSuccess) {
            showPopup('success', 'Form submission successful!');
        } else {
            showPopup('error', 'Error sending message!');
        }
    });

    function showPopup(type, message) {
        const popup = $('<div></div>')
            .addClass(`popup ${type}`)
            .text(message)
            .hide()
            .appendTo('body')
            .fadeIn(300);

        setTimeout(() => {
            popup.fadeOut(300, () => popup.remove());
        }, 3000);
    }
});
