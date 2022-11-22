import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  try {
    return localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  } catch (error) {
    console.log(error.name);
    return [];
  }
}
const getLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
if (!getLocalStorage) return;

player.setCurrentTime(getLocalStorage || 0);
