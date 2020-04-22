import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const playButton = document.querySelector('#playButton');

const player = new MediaPlayer({
    el: video
});
playButton.onclick = () => player.togglePlay();