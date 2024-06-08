// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-mode';

    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    document.querySelector('.signup-btn').addEventListener('click', () => {
        alert('Sign Up button clicked!');
    });

    document.querySelector('.signin-btn').addEventListener('click', () => {
        alert('Sign In button clicked!');
    });
});
