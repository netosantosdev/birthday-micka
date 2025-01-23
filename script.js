
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');


const musicList = [
    'music1.mp3',
    'music2.mp3',
    'music3.mp3'
];

let currentTrackIndex = 0;


function loadTrack(index) {
    audioPlayer.src = musicList[index];
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
}

loadTrack(currentTrackIndex);


playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});


nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
});


prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    loadTrack(currentTrackIndex);
});


audioPlayer.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
});