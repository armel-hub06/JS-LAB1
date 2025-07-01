function updateClock() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-GB'); // 24-hour format
    document.getElementById('clockDisplay').textContent = `${formattedDate} - ${formattedTime}`;
    }
setInterval(updateClock, 1000);
updateClock(); 
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = "🌙 Toggle Light Mode";
    } else {
        btn.innerHTML = "🌞 Toggle Dark Mode";
    }
    }
