// script.js

const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Lista de músicas (substitua pelos caminhos dos seus arquivos de áudio)
const musicList = [
    'music1.mp3',
    'music2.mp3',
    'music3.mp3'
];

let currentTrackIndex = 0;

// Função para carregar a música atual
function loadTrack(index) {
    audioPlayer.src = musicList[index];
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
}

// Iniciar a primeira música ao carregar a página
loadTrack(currentTrackIndex);

// Controles de play/pause
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Próxima música
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
});

// Música anterior
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    loadTrack(currentTrackIndex);
});

// Quando a música terminar, passar para a próxima
audioPlayer.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
});