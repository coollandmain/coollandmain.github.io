    // Hide the Coolland SMP and Events sections initially
    showHome();
}

function showHome() {
    toggleDisplay('home', 'coolland-events');
}

function showEvents() {
    toggleDisplay('coolland-events', 'home');
}

function toggleSettings() {
    toggleDisplay('settings-popup');
}

function toggleDisplay(showId, hideId) {
    document.getElementById(showId).style.display = 'block';
    if (hideId) {
        document.getElementById(hideId).style.display = 'none';
    }
}

function changeTheme() {
    var theme = document.getElementById('theme').value;
    document.body.style.backgroundColor = (theme === 'dark') ? 'black' : 'white';
    document.body.style.color = (theme === 'dark') ? 'white' : 'black';
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
}

// Check if a theme preference is saved in localStorage
var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    // Apply the saved theme
    document.getElementById('theme').value = savedTheme;
    changeTheme();
}

// Switch to light theme when the page is about to be unloaded
window.addEventListener('beforeunload', function () {
    if (document.getElementById('theme').value !== 'dark') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

//phone
document.getElementById('button-home').addEventListener('click', showHome);
document.getElementById('button-events').addEventListener('click', showEvents);
document.getElementById('button-home').addEventListener('touchend', showHome);
document.getElementById('button-events').addEventListener('touchend', showEvents);

window.onload = initializePage;
