const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const togglePlayerButton = document.getElementById('toggle-player');
const musicPlayer = document.getElementById('music-player');
const showPlayerButton = document.getElementById('show-player-button');

const musicList = [
    'music1.mp3',
    'music2.mp3',
    'music3.mp3',
    'music4.mp3'
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

// Esconder/Mostrar o player
togglePlayerButton.addEventListener('click', () => {
    musicPlayer.classList.toggle('hidden'); // Alterna a classe 'hidden' no player
    showPlayerButton.classList.toggle('hidden'); // Alterna a classe 'hidden' no botão flutuante
    if (musicPlayer.classList.contains('hidden')) {
        togglePlayerButton.textContent = 'Mostrar'; // Altera o texto do botão
    } else {
        togglePlayerButton.textContent = 'Esconder'; // Altera o texto do botão
    }
});

// Mostrar o player ao clicar no botão flutuante
showPlayerButton.addEventListener('click', () => {
    musicPlayer.classList.remove('hidden'); // Mostra o player
    showPlayerButton.classList.add('hidden'); // Esconde o botão flutuante
    togglePlayerButton.textContent = 'Esconder'; // Atualiza o texto do botão
});