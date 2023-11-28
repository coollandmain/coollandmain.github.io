function initializePage() {
    // Hide the Coolland SMP and Events sections initially
    document.getElementById('home').style.display = 'block';
    document.getElementById('coolland-events').style.display = 'none';
}

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('coolland-events').style.display = 'none';
}

function showEvents() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'block';
}
function showMessage() {
    // Hide other sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';

    // Show the "Message" section
    document.getElementById('message').style.display = 'block';
}
// Add functions for registering, logging in, and posting announcements
function register() {
    // Get the entered username and password for registration
    var registerUsername = document.getElementById('register-username').value;
    var registerPassword = document.getElementById('register-password').value;

    // Perform registration logic (you can add server-side validation here)
    // For simplicity, we'll just log the details for now
    console.log('Registration:', registerUsername, registerPassword);
}

function login() {
    // Get the entered username and password for login
    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;

    // Perform login logic (you can add server-side validation here)
    // For simplicity, we'll just log the details for now
    console.log('Login:', loginUsername, loginPassword);

    // Set the username for posting announcements
    document.getElementById('announcement-username').value = loginUsername;
}

function postAnnouncement() {
    // Get the entered username and message for the announcement
    var announcementUsername = document.getElementById('announcement-username').value;
    var announcementMessage = document.getElementById('announcement-message').value;

    // Display the announcement in the announcements container
    var announcementsContainer = document.getElementById('announcements-container');
    var announcementElement = document.createElement('div');
    announcementElement.innerHTML = '<h3>' + announcementUsername + '</h3><p>' + announcementMessage + '</p>';
    announcementsContainer.appendChild(announcementElement);
}

// Add a function to show the "Message" content
function showMessage() {
    // Hide other sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';

    // Show the "Message" section
    document.getElementById('message').style.display = 'block';

function toggleSettings() {
    var settingsPopup = document.getElementById('settings-popup');
    settingsPopup.style.display = (settingsPopup.style.display === 'block') ? 'none' : 'block';
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
document.getElementById('button-message').addEventListener('click', showMessage);
document.getElementById('button-message').addEventListener('touchend', showMessage);



window.onload = initializePage;

