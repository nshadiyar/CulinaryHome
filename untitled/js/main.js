document.addEventListener('keydown', function(event) {
    const focusedElement = document.activeElement;  // Get the currently focused element
    const navItems = document.querySelectorAll('.nav-link');  // Select all navigation links

    let currentIndex = Array.from(navItems).indexOf(focusedElement);  // Get the index of the focused item

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        // Move focus to the next item
        currentIndex = (currentIndex + 1) % navItems.length;
        navItems[currentIndex].focus();  // Set focus to the next item
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        // Move focus to the previous item
        currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;  // Ensure circular navigation
        navItems[currentIndex].focus();  // Set focus to the previous item
    }
});


// Function to update auth buttons based on login status
function updateAuthButtons() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const authButtons = document.getElementById("auth-buttons");
    const logoutButton = document.getElementById("logout-btn");

    if (isLoggedIn) {
        authButtons.classList.add("d-none"); // Hide login/signup buttons
        logoutButton.classList.remove("d-none"); // Show logout button
    } else {
        authButtons.classList.remove("d-none"); // Show login/signup buttons
        logoutButton.classList.add("d-none"); // Hide logout button
    }
}

// Function to handle logout
function logoutUser() {
    localStorage.setItem("isLoggedIn", "false"); // Clear login status
    sessionStorage.clear(); // Clear session data
    updateAuthButtons();
    alert("You have successfully logged out.");
    window.location.href = "index.html"; // Redirect to homepage
}

// Initialize buttons on page load
document.addEventListener("DOMContentLoaded", updateAuthButtons);

// Navigation keyboard accessibility
document.addEventListener('keydown', function(event) {
    const focusedElement = document.activeElement;
    const navItems = document.querySelectorAll('.nav-link');
    let currentIndex = Array.from(navItems).indexOf(focusedElement);

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % navItems.length;
        navItems[currentIndex].focus();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
        navItems[currentIndex].focus();
    }
});