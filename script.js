document.addEventListener('DOMContentLoaded', function () {
    var toggleMenu = document.querySelector('.toggle-menu');
    var hamburger = document.querySelector('.hamburger');
    var sidebar = document.querySelector('.sidebar');

    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            // Hamburger to X animation
            hamburger.classList.add('open');
            // Show the sidebar
            sidebar.style.display = 'block';
        } else {
            // X to hamburger animation
            hamburger.classList.remove('open');
            // Hide the sidebar
            sidebar.style.display = 'none';
        }
    });

    // Add a click event listener to the hamburger icon for manual toggling
    hamburger.addEventListener('click', function () {
        toggleMenu.checked = !toggleMenu.checked;
        if (toggleMenu.checked) {
            // Hamburger to X animation
            hamburger.classList.add('open');
            // Show the sidebar
            sidebar.style.display = 'block';
        } else {
            // X to hamburger animation
            hamburger.classList.remove('open');
            // Hide the sidebar
            sidebar.style.display = 'none';
        }
    });
});