document.querySelector('.slide-link').addEventListener('click', function(event) {
    event.preventDefault();

    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');

    setTimeout(() => {
        window.location.href = this.href;
    }, 1000); // Delay to allow the transition to complete
});
