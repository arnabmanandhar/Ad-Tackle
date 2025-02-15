function fastForwardAd() {
    const video = document.querySelector("video");
    const adIndicator = document.querySelector(".ad-showing"); // YouTube shows this during ads
    const skipButton = document.querySelector(".ytp-ad-skip-button");
  
    if (video) {
      if (adIndicator && video.duration < 30) {
        // Speed up the video if an ad is showing
        video.playbackRate = 16;
      } else {
        // Reset playback rate after ad
        if (video.playbackRate !== 1) {
          video.playbackRate = 1;
        }
      }
    }
  
    if (skipButton) {
      skipButton.click(); // Automatically skip ads
    }
  }
  
  // Run every 500ms to check for ads
  setInterval(fastForwardAd, 500);
  