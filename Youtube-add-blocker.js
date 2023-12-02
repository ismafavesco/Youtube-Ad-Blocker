function checkAndClickSkipButton() {
    let skipButton = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
    if (skipButton) {
        console.log('Skip button found. Clicking...');
        skipButton.click();
    } else {
        console.log('Skip button not found.');
    }
}

// Check for the skip button every 1000 milliseconds (1 second)
setInterval(checkAndClickSkipButton, 1000);
