
document.querySelector('a[href="#about"]').addEventListener('click', () => {
    const aboutText = document.querySelector('.about-text');
    aboutText.classList.remove('animated');
    void aboutText.offsetWidth; // force reflow to restart animation
    aboutText.classList.add('animated');
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message Sent!');
    this.reset();
});


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnMenuToggle = menuToggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    }
});


