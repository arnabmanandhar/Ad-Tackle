function adjustPlaybackSpeed() {
    const video = document.querySelector('video');
    if (!video) return;

    const adPlaying = document.querySelector('.ad-showing, .ytp-ad-player-overlay'); // Detect YouTube’s ad UI

    if (adPlaying) {
        video.playbackRate = 16.0; // Speed up ads
        console.log('🚀 Ad detected! Speeding up to 16x');
    } else {
        video.playbackRate = 1.0; // Reset for normal content
        console.log('🎬 Regular video playing. Resetting speed to normal.');
    }
}

// **Use YouTube’s MutationObserver to detect page changes**
const observer = new MutationObserver(() => {
    adjustPlaybackSpeed();
});

// Start observing YouTube’s player UI for changes
function observeYouTube() {
    const player = document.querySelector('#movie_player');
    if (player) {
        observer.observe(player, { childList: true, subtree: true });
        adjustPlaybackSpeed();
    }
}

// Run every second to check for new videos (since YouTube is an SPA)
let lastUrl = location.href;
setInterval(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        console.log("🔄 Page changed, checking for ads...");
        setTimeout(observeYouTube, 1000);
    }
}, 1000);

// Initial run
observeYouTube();
