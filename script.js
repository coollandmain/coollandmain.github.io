function initializePage() {
    // Hide the Coolland SMP and Events sections initially
    document.getElementById('coolland-smp').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';
}

function showHome() {
    // Use getElementsByClassName to get all elements with the specified class
    var homeContentElements = document.getElementsByClassName('home-content');

    // Loop through the elements and set their display property
    for (var i = 0; i < homeContentElements.length; i++) {
        homeContentElements[i].style.display = 'block';
    }

    // Hide Coolland SMP and Events sections
    document.getElementById('coolland-smp').style.display = 'none';
    document.getElementById('coolland-events').style.display = 'none';
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

