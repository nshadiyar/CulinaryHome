var modal = document.getElementById("myModal");
var btn = document.getElementById("subscribeBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Dark Mode Toggle
var darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.onclick = function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.modal-content').classList.toggle('dark-mode');

    // Update navigation links for dark mode
    document.querySelectorAll('.nav-link').forEach(function(navLink) {
        navLink.classList.toggle('dark-mode');
    });

    // Change button text between "Light Mode" and "Dark Mode"
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
};

function toggleReadMore(button) {
    // Find the .extra-content div in the same blog-post
    const extraContent = button.previousElementSibling;

    // Toggle the visibility of the extra content
    if (extraContent.classList.contains('active')) {
        extraContent.classList.remove('active'); // Remove active class
        button.textContent = "Read More";
    } else {
        extraContent.classList.add('active'); // Add active class
        button.textContent = "Read Less";
    }
}