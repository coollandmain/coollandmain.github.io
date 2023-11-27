function initializePage() {
    // Hide the Coolland SMP and Events sections initially
    document.getElementById('coolland-smp').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';
}

function showHome() {
    document.getElementById('home-title').style.display = 'block';
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('coolland-smp').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';
}

function showEvents() {
    document.getElementById('home-title').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('coolland-smp').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'block';
}

function toggleSettings() {
    var settingsPopup = document.getElementById('settings-popup');
    settingsPopup.style.display = (settingsPopup.style.display === 'block') ? 'none' : 'block';
}

function changeTheme() {
    var theme = document.getElementById('theme').value;
    document.body.style.backgroundColor = (theme === 'dark') ? 'black' : 'white';
    document.body.style.color = (theme === 'dark') ? 'white' : 'black';
}

window.onload = initializePage;
