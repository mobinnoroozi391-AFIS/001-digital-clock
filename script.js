function updateClock() {
    const now = new Date();

    document.getElementById('clock').textContent =
        now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

    document.getElementById('date').textContent =
        now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
}

function startClock() {
    updateClock();

    const delay = 1000 - new Date().getMilliseconds();

    setTimeout(() => {
        updateClock();
        setInterval(updateClock, 1000);
    }, delay);
}

startClock();
