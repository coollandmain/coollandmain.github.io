function initializePage() {
    // Hide the Coolland SMP and Events sections initially
    document.getElementById('coolland-smp').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';
}

function showHome() {
    document.getElementById('smp-title').style.display = 'none';
    document.getElementById('smp-content').style.display = 'none';
    document.getElementById('events-title').style.display = 'none';
    document.getElementById('events-content').style.display = 'none';
    document.getElementById('coolland-smp').style.display = 'block';
    document.getElementById('coolland-events').style.display = 'none';
}

function showEvents() {
    document.getElementById('smp-title').style.display = 'none';
    document.getElementById('smp-content').style.display = 'none';
    document.getElementById('events-title').style.display = 'block';
    document.getElementById('events-content').style.display = 'block';
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

