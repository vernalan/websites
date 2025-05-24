// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.dark-mode-toggle');
    
    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.textContent = 'Light Mode';
    }

    // Add click event listener
    toggle.addEventListener('click', function() {
        // Toggle dark mode class
        document.body.classList.toggle('dark-mode');
        
        // Update localStorage and button text
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggle.textContent = 'Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggle.textContent = 'Dark Mode';
        }
    });
});
