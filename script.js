document.addEventListener('DOMContentLoaded', function () {
    const clockDisplay = document.getElementById('clock-display');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Actualizar cada segundo
    setInterval(updateClock, 1000);

    // Actualizar el reloj inicialmente
    updateClock();
});
