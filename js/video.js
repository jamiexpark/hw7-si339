var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    // Initialize the video element and turn off autoplay and looping
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

    // Play Button
    document.getElementById("play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        updateVolumeInfo();
    });

    // Pause Button
    document.getElementById("pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    // Slow Down
    document.getElementById("slower").addEventListener("click", function() {
        console.log("Slow Down");
        video.playbackRate -= 0.1;
        console.log("New speed: " + video.playbackRate);
    });

    // Speed Up
    document.getElementById("faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1;
        console.log("New speed: " + video.playbackRate);
    });

    // Skip Ahead
    document.getElementById("skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log("Current location: " + video.currentTime);
    });

    // Mute
    document.getElementById("mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    // Volume Slider
    var volumeSlider = document.getElementById("slider");
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        updateVolumeInfo();
    });

    function updateVolumeInfo() {
        document.getElementById("volume").textContent = video.volume * 100 + "%";
    }

    // Styled (Add the oldSchool class)
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original (Remove the oldSchool class)
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});
