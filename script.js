document.querySelector('.slide-link').addEventListener('click', function(event) {
    event.preventDefault();

    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');

    setTimeout(() => {
        window.location.href = this.href;
    }, 1000); // Delay to allow the transition to complete
});
// scripts.js

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}
