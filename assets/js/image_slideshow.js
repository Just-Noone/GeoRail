document.addEventListener('DOMContentLoaded', function () {
    const images = [
        '/assets/img/avotovo.png',
        '/assets/img/forest-damaia.png',
        '/assets/img/geostar.png',
        '/assets/img/jachowice-c.png',
        '/assets/img/jachowice-miłoszczowo.png',
        '/assets/img/jachowice-stare-miasto.png',
        '/assets/img/forest.png',
        '/assets/img/spawn.png',
        '/assets/img/tobolsk.png',
        '/assets/img/trahan.png'
    ];

    let currentIndex = 0;
    const background1 = document.getElementById('background1');
    const background2 = document.getElementById('background2');
    let showingBackground1 = true;

    function changeBackground() {
        const nextIndex = (currentIndex + 1) % images.length;

        if (showingBackground1) {
            background2.style.backgroundImage = `url(${images[nextIndex]})`;
            background2.style.zIndex = 1; // Bring background2 to the front
            background1.style.zIndex = 0; // Send background1 to the back

            background2.style.opacity = 1; // Fade in background2
            background1.style.opacity = 0; // Fade out background1
        } else {
            background1.style.backgroundImage = `url(${images[nextIndex]})`;
            background1.style.zIndex = 1; // Bring background1 to the front
            background2.style.zIndex = 0; // Send background2 to the back

            background1.style.opacity = 1; // Fade in background1
            background2.style.opacity = 0; // Fade out background2
        }

        showingBackground1 = !showingBackground1;
        currentIndex = nextIndex;
    }

    // Initialize the first background
    background1.style.backgroundImage = `url(${images[currentIndex]})`;

    // Change background every 4 seconds
    setInterval(changeBackground, 3000);
});
